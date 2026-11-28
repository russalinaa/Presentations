#!/usr/bin/env python3
"""Build the B737 flows study site from data/*.txt (verbatim OM-B extracts).

Usage: python3 build.py   -> writes site/index.html and site/data.js
"""
import json, re, pathlib

ROOT = pathlib.Path(__file__).parent
CL_TAILS = {'3721', '3722', '3723', '3724', '3729'}
NG_TAILS = {'3725', '3730', '3731', '3732', '3733', '3734', '3735', '3736', '3741'}
PDF_OFFSET = 68  # chapter-2 page + 68 = PDF page

# Mockup control locations, in pixels of the exported images (see site/img).
IMG = {'ovh': (1752, 2250), 'ip': (2014, 1054), 'aft': (1228, 1850), 'ngovh': (1546, 2576), 'ngip': (1546, 2576), 'ngped': (1546, 2576)}
MOCK = {
    'ovh': {'bat': (395, 1157), 'stby': (470, 1297), 'altflaps': (200, 1112), 'wiper': (690, 1955),
            'ehyd': (975, 1440), 'grd': (460, 1630), 'apu': (530, 2100), 'apugen': (465, 1815),
            'irs': (462, 585), 'fltrec': (1135, 415), 'mach': (1290, 415), 'stall': (1210, 518),
            'engpanel': (918, 410), 'passoxy': (1010, 555), 'servint': (690, 460), 'fltctl': (100, 1022),
            'xfer': (160, 1428), 'fuel': (165, 1760), 'elec': (430, 1170), 'equip': (655, 1372),
            'emer': (697, 1535), 'signs': (687, 1645), 'winheat': (900, 942), 'pitot': (880, 1012),
            'wingai': (850, 1242), 'engai': (976, 1252), 'hyd': (912, 1440), 'aircond': (1206, 1007),
            'press': (1210, 1845), 'landlt': (250, 2065), 'ign': (735, 2065), 'engstart': (635, 2080),
            'extlt': (1120, 2065)},
    'ip': {'mcp': (1000, 60), 'gear': (1267, 420), 'wx': (1000, 665), 'marker': (1972, 385),
           'clock': (1907, 490), 'cdu': (1207, 780), 'fltinst': (1460, 380), 'diseng': (1457, 255),
           'hydqty': (1057, 470), 'gpws': (1400, 730), 'antiskid': (1182, 410), 'autobrake': (1182, 525),
           'fuelflow': (935, 580), 'englt': (1000, 270), 'engprim': (935, 450)},
    'aft': {'fire': (555, 760), 'firetest': (340, 805), 'pbrake': (385, 610), 'cargo': (545, 880),
            'efis': (870, 1195), 'vhf': (850, 880), 'nav': (850, 1015), 'acp': (850, 1405), 'adf': (260, 1575),
            'hf': (550, 1385), 'xpdr': (550, 1250), 'stabovr': (795, 1725)},
}
# NG mockup (single image B737-800/900 cockpit layout): same control keys -> pixel position
NGMAP = {'ovh:bat': (632, 625), 'ovh:stby': (665, 695), 'ovh:altflaps': (548, 522), 'ovh:wiper': (695, 925),
         'ovh:ehyd': (866, 715), 'ip:gear': (910, 1430), 'ip:wx': (760, 2215), 'ovh:grd': (665, 805),
         'aft:fire': (760, 2095), 'ovh:apu': (702, 1005), 'ovh:apugen': (662, 900), 'aft:firetest': (667, 2112)}
# Per-action locations for slide illustrations (A-lines of a row, in document order).
# Each entry: (CL image, x, y, NG x, y) in pixels of site/img/*.jpg; NG image is ng-all.jpg (zones by y).
# None = control not on mockup.  '?' suffix in note = position to be verified.
LOC = {
  'btaxi': [[], [], [],
    ('aft', 765, 270, 857, 1875),      # 3 Flap lever
    ('ovh', 460, 1815, 662, 900),      # 4 GENERATOR 1 and 2 switches
    ('ovh', 880, 1012, 855, 535),      # 5 PROBE / PITOT HEAT
    ('ovh', 850, 1242, 850, 635),      # 6 WING ANTI-ICE
    ('ovh', 976, 1252, 892, 635),      # 7 ENGINE ANTI-ICE
    ('ovh', 912, 1440, 857, 715),      # 8 HYDRAULIC PUMPS
    ('ovh', 1100, 1462, 957, 717),     # 9 PACK switches (L PACK)
    ('ovh', 1210, 1445, 1000, 738),    # 10 ISOLATION VALVE
    ('ovh', 1210, 1530, 1000, 790),    # 11 APU BLEED
    ('ovh', 1210, 1845, None, None),   # 12 FLT/GRD (Classic tails)
    ('ovh', 530, 2095, 702, 1005),     # 13 APU switch
    ('ovh', 635, 2080, 780, 985),      # 14 ENGINE START switches
    ('aft', 545, 520, 760, 2056),      # 15 Engine start levers
    [],
    None,                              # 17 Ground personnel
    None,                              # 18 Flight controls (control column / pedals)
    ('ip', None, None, 773, 1662),     # 19 (NG) lower display unit
    ('ip', 1000, 665, 765, 2212),      # 20 WEATHER RADAR
    ('aft', 550, 1250, 765, 2310),     # 21 TRANSPONDER
    ('ip', 631, 108, 460, 1175),       # 22 RECALL (system annunciator, Captain side)
    None, [], [], [], [], [],
  ],
  'taxi': [[], [], [], [],
    ('ovh', 430, 2075, 660, 998),      # 4 TAXI / RUNWAY TURNOFF lights
    ('aft', 385, 610, 683, 2042),      # 5 parking brake
    None,                              # 6 Off-Block Time
    ('aft', 545, 370, 760, 1910),      # 7 thrust levers
    [], [], [],
  ],
  'bto': [[], [],
    [None, ('ip', 1207, 780, 600, 1660), ('ip', 1000, 60, 780, 1175), ('aft', 765, 270, 857, 1875), None],
    [],
    ('ip', 1000, 60, 780, 1175),       # 4 MCP altitude/heading (+ transponder code)
    [], [], [],
    ('aft', 870, 1195, 530, 1175),     # 8 WXR or TERR switch (Captain)
    ('aft', 870, 1195, 995, 1175),     # 9 WXR or TERR switch (F/O)
    [],
    ('aft', 550, 1250, 765, 2310),     # 11 Transponder
    [], [], [], [], [],
    ('ovh', 1100, 2065, 900, 1002),    # 17 STROBE light
    [], [],
    ('ovh', 250, 2065, 600, 1002),     # 20 LANDING light switches
    [], [],
  ],
  'bstart': [[], [None]*6, [], [], [],
    ('ip', 1207, 780, 600, 1660),      # 5 CDU display
    ('ip', 935, 450, 760, 1440),       # 6 N1 bugs
    ('ip', 188, 377, 300, 1420),       # 7 IAS bugs
    ('ip', 1000, 60, 780, 1175),       # 8 MCP
    None, None, None,                  # 9 briefings, 10 exterior doors, 11 windows
    ('aft', 830, 1765, 930, 2510),     # 12 Flight deck door (CAB DOOR / FLT DK DOOR light)
    ('ovh', 165, 1760, 540, 870),      # 13 Fuel panel
    ('ovh', 912, 1440, 857, 715),      # 14 Hydraulic panel
    [('aft', 510, 1680, 765, 2465), ('aft', 380, 420, 685, 1935), ('aft', 370, 1730, 765, 2465), ('aft', 510, 1680, 765, 2465)],  # 15 Trim
    ('ovh', 1120, 2065, 955, 1002),    # 16 ANTI COLLISION light switch
    [], [], [], [], [],
    ('aft', 550, 1250, 765, 2310),     # 22 Transponder
  ],
  'push': [[], [], [], [], None,
    ('aft', 385, 610, 683, 2042),      # 5 parking brake (row without action line)
    [], [],
    ('ovh', 912, 1440, 857, 715),      # 8 System A HYDRAULIC PUMPS
  ],
  'estart': [[], [], [], [],
    ('ip', None, None, 773, 1662),     # 4 (NG) secondary engine indications (lower DU)
    ('ovh', 1100, 1462, 957, 717),     # 5 PACK switches
    ('ovh', 1210, 1390, 1000, 675),    # 6 (CL) start pressure (duct pressure gauge)
    None,                              # 7 Start sequence (announce)
    ('ovh', 635, 2080, 780, 985),      # 8 ENGINE START switch
    [],
    ('aft', 545, 520, 760, 2056),      # 10 Engine start lever
    [],
    ('ovh', 635, 2080, 780, 985),      # 12 ENGINE START switch to OFF (row without action line)
    [], [], [], [],
  ],
  'pcap': [
    ('ip', 795, 225, 578, 1318),       # 0 Lights TEST
    ('ip', None, None, 530, 1175),     # 1 (NG) EFIS control panel (Captain side)
    None,                              # 2 (UP-B3721) HSI Switch
    ('ip', 640, 75, None, None),       # 3 (CL) NAV MODE selector (NAV source on glareshield, Captain side)
    ('ip', 1000, 60, 780, 1175),       # 4 Mode control panel
    None,                              # 5 Oxygen
    ('ip', 75, 380, None, None),       # 6 Marker beacon (Captain side)
    ('ip', 85, 500, 165, 1420),        # 7 Clock (Captain side)
    ('ip', None, None, 155, 1475),     # 8 NOSE WHEEL STEERING switch (not on CL mockup)
    ('ip', None, None, 360, 1310),     # 9 (NG) Display select panel (Captain side)
    ('ip', None, None, 437, 1355),     # 10 TAKEOFF CONFIG / CABIN ALTITUDE lights
    [],                                # 11 CDU
    ('ip', 330, 330, 300, 1420),       # 12 Flight instruments (Captain)
    ('ip', 608, 250, 546, 1312),       # 13 Disengage light TEST switch (Captain side)
    ('ip', 818, 440, 573, 1345),       # 14 STAB OUT OF TRIM light
    None,                              # 15 display select switches (Classic tails)
    ('ip', 700, 360, None, None),      # 16 Standby instruments (CL and UP-B3725)
    ('ip', None, None, 668, 1340),     # 17 Integrated standby flight display
    None,                              # 18 Standby RMI
    ('ip', 818, 440, 573, 1345),       # 19 STAB OUT OF TRIM light (repeat)
    ('aft', 330, 130, 657, 1782),      # 20 SPEEDBRAKE lever
    ('aft', 545, 370, 760, 1910),      # 21 Thrust levers
    ('aft', 765, 270, 857, 1875),      # 22 FLAP lever
    ('aft', 1110, 640, 1017, 2016),    # 23 STABILIZER TRIM cutout switches
    ('aft', None, None, 760, 2056),    # 24 (NG) spar valve check: start levers
    ('aft', 545, 520, 760, 2056),      # 25 Engine start levers
    ('aft', 385, 610, 683, 2042),      # 26 Parking brake
    ('aft', 230, 880, 632, 2142),      # 27 VHF communications radios (Captain side)
    ('aft', 230, 880, 632, 2142),      # 28 Radio tuning panel
    ('aft', 210, 1015, 632, 2202),     # 29 VHF NAVIGATION radios
    ('aft', None, None, 530, 1175),    # 30 (NG) EFIS control panel (repeat) – glareshield
    ('aft', 165, 1440, 630, 2270),     # 31 Audio control panel
    ('aft', 510, 1680, 765, 2465),     # 32 Rudder and Aileron trim (+ hyd pump on overhead, same mark)
    None, None, None, [],              # 33-36 seat, pedals, harness, checklist
  ],
  'pfo': [  # one tuple = whole row on one panel; (img, CLx, CLy, NGx, NGy); None coords = not on that mockup
    ('ovh', 100, 1022, 520, 520),      # 0 Flight control panel
    ('ovh', 160, 1428, None, None),    # 1 (CL) Instrument and NAV transfer switches
    ('ovh', None, None, 535, 672),     # 2 (NG) NAVIGATION panel
    ('ovh', None, None, 535, 750),     # 3 (NG) DISPLAYS panel
    ('ovh', 165, 1760, 540, 870),      # 4 Fuel panel
    ('ovh', 430, 1170, 660, 640),      # 5 Electrical panel
    ('aft', 557, 760, 760, 2095),      # 6 Overheat and fire protection panel
    ('ovh', 530, 2095, 702, 1005),     # 7 APU switch
    ('ovh', None, None, 766, 645),     # 8 Lavatory SMOKE light (not on CL mockup)
    ('ovh', 655, 1372, 765, 692),      # 9 EQUIPMENT COOLING
    ('ovh', 697, 1535, 770, 755),      # 10 EMERGENCY EXIT LIGHTS
    ('ovh', 687, 1645, 771, 785),      # 11 Passenger signs
    ('ovh', 690, 1955, 732, 952),      # 12 Windshield wiper
    ('ovh', 900, 942, 865, 492),       # 13 WINDOW HEAT
    ('ovh', 880, 1012, 855, 535),      # 14 PITOT STATIC / PROBE HEAT
    ('ovh', 850, 1242, 850, 635),      # 15 WING ANTI-ICE
    ('ovh', 976, 1252, 892, 635),      # 16 ENGINE ANTI-ICE
    ('ovh', 912, 1440, 857, 715),      # 17 Hydraulic panel
    ('ovh', 1206, 1007, 1000, 640),    # 18 Air Conditioning Pneumatics panel
    ('ovh', 1210, 1845, 1000, 875),    # 19 Cabin pressurization panel
    ('ovh', 250, 2065, 600, 1002),     # 20 Lighting panel (landing, turnoff, taxi)
    ('ovh', 735, 2065, 797, 1005),     # 21 Ignition select switch
    ('ovh', 635, 2080, 780, 985),      # 22 ENGINE START switches
    ('ovh', 1120, 2065, 955, 1002),    # 23 Lighting panel (logo ... wheel well)
    None,                              # 24 (UP-B3721) HSI Switch
    None,                              # 25 NAV MODE selector
    ('ip', 1000, 60, 780, 1175),       # 26 Mode control panel
    ('ip', None, None, 995, 1175),     # 27 (NG) EFIS control panel (F/O side)
    None,                              # 28 Oxygen (crew mask)
    ('ip', 1972, 385, None, None),     # 29 (CL) Marker beacon lights
    ('ip', 1907, 490, 1372, 1415),     # 30 Clock
    ('ip', None, None, 1135, 1330),    # 31 (NG) Display select panel
    ('ip', None, None, 992, 1351),     # 32 TAKEOFF CONFIG / CABIN ALTITUDE lights
    [],                                # 33 CDU (no action line)
    ('ip', 1460, 380, 1222, 1460),     # 34 Flight instruments
    ('ip', 1457, 255, 1060, 1322),     # 35 Disengage light TEST switch
    ('ip', 1057, 470, None, None),     # 36 (CL) HYDRAULIC QUANTITY indicators
    ('ip', 1400, 730, 1080, 1595),     # 37 GROUND PROXIMITY panel
    ('ip', 1262, 450, 910, 1430),      # 38 Landing gear panel
    ('ip', 1182, 410, 805, 1346),      # 39 ANTISKID switch
    ('ip', 1182, 525, 805, 1320),      # 40 AUTO BRAKE selector
    ('ip', 935, 580, 720, 1337),       # 41 FUEL FLOW switch
    ('ip', 1000, 270, None, None),     # 42 (CL) engine indication lights
    ('ip', 935, 450, None, None),      # 43 (CL) Engine instrument primary panel
    ('ip', 935, 450, 760, 1440),       # 44 Engine instruments
    ('ip', None, None, 766, 1351),     # 45 (UP-B3741) MFD Cancel/Recall switch
    ('aft', 545, 880, 747, 2155),      # 46 CARGO FIRE panel (NG and UP-B3724)
    None,                              # 47 CDSCP (UP-B3722/23/29)
    [],                                # 48 Hollingsead (no action line)
    ('aft', 870, 1195, None, None),    # 49 EFIS control panel (UP-B3722/23/24/29)
    ('aft', None, None, 900, 2155),    # 50 (NG) Radio tuning panel
    ('aft', 850, 880, None, None),     # 51 (CL) VHF communications radios
    ('aft', 850, 1015, 900, 2212),     # 52 VHF NAVIGATION radios
    ('aft', 870, 1195, None, None),    # 53 (CL) EFIS control panel
    ('aft', 850, 1405, 895, 2295),     # 54 Audio control panel
    ('aft', 260, 1575, 765, 2375),     # 55 ADF radios
    ('aft', 550, 1385, 632, 2440),     # 56 HF radios
    ('ip', 1000, 665, 765, 2212),      # 57 WEATHER RADAR panel
    ('aft', 550, 1250, 765, 2310),     # 58 Transponder panel
    ('aft', 795, 1725, 855, 2510),     # 59 STABILIZER TRIM override switch
    None, None, None,                  # 60-62 seat, rudder pedals, harness
    [],                                # 63 PREFLIGHT checklist
    ('aft', 550, 1250, 765, 2310),     # 64 Transponder Test
    [('aft', 870, 1195, None, None), ('ip', 1000, 665, None, None), ('ip', 1000, 665, None, None),
     ('ip', 1000, 665, 765, 2212), ('ip', 1000, 665, 765, 2212)],   # 65 Weather Radar Test
    ('ip', 1000, 665, 765, 2212),      # 66 Weather Radar Test (2)
    ('ip', 1400, 730, 1080, 1595),     # 67 GPWS Test
  ],
  'refuel': [[], [], [], [], [('ovh', 395, 1157, 632, 625), ('ovh', 470, 1297, 665, 695)], None],
  'prelim': [
    [('ovh', 462, 585, 663, 290)],             # IRS mode selectors
    [('ovh', None, None, 1015, 457)],          # (NG only) VOICE RECORDER switch
    [],                                        # quantities (no A)
    None,                                      # crew oxygen mask panel: not on mockups
    None, None, None, None,                    # maintenance docs, flight deck door, observer, F/O side
    [('ovh', 1135, 415, 960, 225)],            # Flight recorder switch
    [('ovh', 1290, 415, 1034, 227)],           # MACH AIRSPEED WARNING TEST switches
    [('ovh', 1210, 518, 996, 264)],            # STALL WARNING TEST switches
    None,                                      # (UP-B3724) EVACUATION switch: not on mockup
    [('ovh', 918, 410, 866, 219), ('ovh', None, None, 866, 219), ('ovh', 918, 410, None, None)],  # ENGINE panel, EEC, PMC
    [('ovh', 1010, 555, 906, 277), ('ovh', 1010, 555, 906, 277)],   # Oxygen panel, PASSENGER OXYGEN switch
    [('ovh', None, None, 830, 330)],           # (NG) Landing gear indicator lights (aft overhead)
    None,                                      # (UP-B3724) secondary gear lights
    [('ovh', 690, 460, 763, 238)],             # SERVICE INTERPHONE switch
    [None, ('ovh', None, None, 556, 227)],     # (CL) ELT: not on CL mockup; (NG) ELT switch
    [('ovh', None, None, 567, 344)],           # (NG) PSEU light
    [('ovh', None, None, 663, 236)],           # GPS light (NG; CL tails not on mockup)
    None,                                      # (UP-B3741) ILS / GLS lights: not found on NG mockup
    None,                                      # Captain's side
    [('aft', 385, 610, 683, 2042)],            # Parking brake
    None, None, [],                            # video, PA, EFB
  ],
  'epu': [
    [('ovh', 395, 1157, 632, 625)],            # BATTERY switch
    [('ovh', 470, 1297, 665, 695)],            # STANDBY POWER switch
    [('ovh', 200, 1112, 548, 522)],            # ALTERNATE FLAPS master switch
    [('ovh', 690, 1955, 695, 955)],            # Windshield WIPER selector
    [('ovh', 912, 1430, 867, 715)],            # ELECTRIC HYDRAULIC PUMPS switches
    [('ip', 1262, 450, 910, 1430)],            # LANDING GEAR lever
    [('ip', 1000, 665, 760, 2215)],            # WEATHER RADAR
    [('ovh', 460, 1635, 665, 805)],            # GRD POWER switch
    [('aft', 557, 760, 760, 2095),             # Overheat and fire protection panel (fire switches)
     ('aft', 327, 722, 669, 2070),             # OVERHEAT DETECTOR switches
     ('aft', 340, 805, 667, 2112),             # TEST switch FAULT/INOP
     ('aft', 340, 805, 667, 2112),             # TEST switch OVHT/FIRE
     ('ip', 1452, 72, 1124, 1172),             # Master FIRE WARN light
     ('aft', 795, 760, 866, 2087),             # EXTINGUISHER TEST switch
     ('aft', 795, 760, 866, 2087),             # TEST Switch position 1
     ('aft', 795, 760, 866, 2087)],            # TEST Switch release
    [('ovh', 530, 2095, 702, 1005)],           # APU switch
    [('ovh', 460, 1815, 662, 900)],            # APU GENERATOR bus switches
    [('aft', 340, 805, 667, 2112),             # Wheel well fire warning system test
     ('aft', 340, 805, 667, 2112),             # Test switch
     ('aft', 570, 715, 760, 2062)],            # Fire warning BELL CUTOUT switch
  ]
}
LOC_CHECK = {'epu': {(3, 0, 'NG'): 'На NG-макете два селектора: L WIPER и R WIPER. В OM-B для Electrical Power Up сказано «Windshield WIPER selector» (ед. ч.). Метка стоит на L WIPER. ⚠ проверить',
                     (11, 2, 'NG'): 'Кнопка BELL CUTOUT на NG-макете частично закрыта рукоятками; метка поставлена у надписи BELL CUTOUT. ⚠ проверить'}}
MOCK_NAMES = {'ngovh': 'NG: Forward / Aft overhead panel (P5)', 'ngip': 'NG: Glareshield (P7) и main panel', 'ngped': 'NG: Control stand и aft electronic panel (P8)', 'ovh': 'Overhead panel (forward + aft)', 'ip': 'Main instrument panel / MCP / Electronic panel',
              'aft': 'Aft control stand (pedestal)'}


def parse_tag(s):
    s = s.strip()
    return s


def page_ref(p):
    parts = [int(x) for x in re.findall(r'\d+', p)]
    pdf = '–'.join(str(x + PDF_OFFSET) for x in parts)
    return {'ch': p, 'pdf': pdf}


def parse(path):
    phases, checklists = [], {}
    ph = row = ck = None
    ck_type = None
    for raw in path.read_text().splitlines():
        line = raw.rstrip()
        if not line or line.startswith('# '):
            continue
        if line.startswith('#PHASE'):
            _, rest = line.split(' ', 1)
            pid, title, sec, pages = [x.strip() for x in rest.split('|')]
            ph = {'id': pid, 'title': title, 'section': sec, 'pages': page_ref(pages), 'trigger': [], 'intro': [],
                  'who': '', 'callouts': [], 'rows': []}
            phases.append(ph); row = None; ck = None
            continue
        if line.startswith('#CHECKLIST'):
            _, rest = line.split(' ', 1)
            pid, name = [x.strip() for x in rest.split('|')]
            ck = {'phase': pid, 'name': name, 'CL': None, 'NG': None}
            checklists[pid] = ck; ph = None
            continue
        if ck is not None:
            if line.startswith('@CL') or line.startswith('@NG'):
                ck_type = line[1:3]
                src, pdfp, pg = [x.strip() for x in line[4:].split('|')]
                ck[ck_type] = {'src': src, 'pdf': pdfp, 'page': pg, 'items': []}
            else:
                item, val, who = [x.strip() for x in line.split('|')]
                ck[ck_type]['items'].append({'item': item, 'val': val, 'who': who})
            continue
        if line.startswith('@'):
            key, val = line[1:].split(' ', 1)
            if key == 'callout':
                w, t = [x.strip() for x in val.split('|')]
                ph['callouts'].append({'who': w, 'text': t})
            elif key == 'who':
                ph['who'] = val
            else:
                ph[key].append(val)
            continue
        if line.startswith('=='):
            f = [x.strip() for x in line[2:].split('|')]
            who, panel, mock, page = f[:4]
            tag = f[4] if len(f) > 4 else ''
            m = None
            if mock != '-':
                img, key = mock.split(':')
                x, y = MOCK[img][key]
                W, H = IMG[img]
                m = {'img': img, 'x': round(x / W, 4), 'y': round(y / H, 4)}
            mng = None
            if mock in NGMAP:
                x, y = NGMAP[mock]
                mng = {'img': 'ngovh' if y < 1120 else 'ngip' if y < 1720 else 'ngped', 'x': round(x / 1546, 4), 'y': round(y / 2576, 4)}
            row = {'who': who, 'panel': panel, 'mock': m, 'mockNG': mng, 'page': page_ref(page), 'tag': tag, 'lines': []}
            ph['rows'].append(row)
            continue
        tag = ''
        mt = re.match(r'^\[([^\]]+)\]\s*(.*)$', line)
        if mt:
            tag, line = mt.group(1), mt.group(2)
        kind, text = line[0], line[2:].strip()
        assert kind in 'AVXHNCWKQ', raw
        entry = {'k': kind, 'tag': tag}
        if kind == 'A':
            item, _, val = text.partition('||')
            entry['item'], entry['val'] = item.strip(), val.strip()
        else:
            entry['text'] = text
        row['lines'].append(entry)
    return phases, checklists


LOC_CHECK['pcap'] = {
  (24, 0, 'NG'): 'Метка у рычагов ENGINE START под РУД на NG-макете. ⚠ проверить',
  (25, 0, 'CL'): 'На Classic-макете рычаги ENGINE START не подписаны; метка у рычагов под РУД. ⚠ проверить',
  (3, 0, 'CL'): 'Метка на селекторе NAV (FMC / ANS-L / ANS-R) на glareshield стороны Captain. ⚠ проверить',
  (32, 1, 'CL'): 'Пункт «system B electric HYDRAULIC PUMP switch» на overhead; метка оставлена на панели триммеров, на overhead не продублирована.',
  (32, 1, 'NG'): 'Пункт «system B electric HYDRAULIC PUMP switch» на overhead; метка оставлена на панели триммеров, на overhead не продублирована.',
}
LOC_CHECK['estart'] = {(6, 0, 'CL'): 'Start pressure показан на манометре DUCT PRESS (PSI) на overhead; в OM-B прибор не назван. ⚠ проверить',
  (10, 0, 'CL'): 'На Classic-макете рычаги ENGINE START не подписаны. ⚠ проверить', (10, 0, 'NG'): 'Метка у рычагов ENGINE START под РУД. ⚠ проверить'}
LOC_CHECK['bstart'] = {(15, 1, 'NG'): 'Метка на шкале STAB TRIM у рукоятки триммера. ⚠ проверить'}
LOC_CHECK['btaxi'] = {(11, 0, 'CL'): 'APU BLEED на Classic-макете — метка в зоне bleed/pack панели. ⚠ проверить', (11, 0, 'NG'): 'APU BLEED на NG-макете — метка под ISOLATION VALVE в ряду bleed switches. ⚠ проверить',
  (22, 0, 'CL'): 'RECALL — метка на system annunciator стороны Captain («Captain presses the RECALL»).', (22, 0, 'NG'): 'RECALL — метка на system annunciator стороны Captain («Captain presses the RECALL»).'}
LOC_CHECK['bto'] = {(8, 0, 'CL'): 'На Classic-макете кнопка WXR на EFIS control panel; отдельной TERR не видно. ⚠ проверить', (9, 0, 'CL'): 'На Classic-макете виден только один EFIS control panel; метка общая для Captain и F/O. ⚠ проверить'}
LOC_CHECK['pfo'] = {
  (36, 0, 'CL'): 'Метка стоит на индикаторах с надписью QTY на правой части приборной панели; что это именно HYDRAULIC QUANTITY, по макету не видно. ⚠ проверить',
  (39, 0, 'NG'): 'На NG-макете виден только сигнал ANTISKID INOP, самого выключателя ANTISKID нет. Метка у табло. ⚠ проверить',
  (44, 1, 'NG'): 'Hydraulic quantity на NG показывается на нижнем дисплее (SYS); метка общая с Engine instruments. ⚠ проверить',
  (27, 0, 'NG'): 'Метка на EFIS control panel стороны F/O (процедуру выполняет F/O; сторону OM-B не указывает).',
  (34, 0, 'CL'): 'Метка на приборах стороны F/O (сторону OM-B не указывает).',
  (34, 0, 'NG'): 'Метка на PFD стороны F/O (сторону OM-B не указывает).',
}


def attach_locs(phases):
    for ph in phases:
        L = LOC.get(ph['id'])
        if not L:
            continue
        assert len(L) == len(ph['rows']), (ph['id'], len(L), len(ph['rows']))
        for ri, (row, locs) in enumerate(zip(ph['rows'], L)):
            acts = [l for l in row['lines'] if l['k'] == 'A']
            if not acts and isinstance(locs, tuple):   # row without a switch action, but its control is on the mockup
                img, x, y, nx, ny = locs
                row['loc'] = {}
                if x is not None: row['loc']['CL'] = {'img': img, 'x': x, 'y': y}
                if nx is not None: row['loc']['NG'] = {'img': 'ngovh' if ny < 1120 else 'ngip' if ny < 1720 else 'ngped', 'x': nx, 'y': ny}
                continue
            if locs is None:
                locs = [None] * len(acts)
            elif isinstance(locs, tuple):   # one location for the whole row (all its actions are on one panel)
                locs = [locs] * len(acts)
            assert len(acts) == len(locs), (ph['id'], ri, len(acts), len(locs))
            for ai, (a, lc) in enumerate(zip(acts, locs)):
                if lc is None:
                    continue
                img, x, y, nx, ny = lc
                a['loc'] = {}
                if x is not None:
                    a['loc']['CL'] = {'img': img, 'x': x, 'y': y}
                if nx is not None:
                    a['loc']['NG'] = {'img': 'ngovh' if ny < 1120 else 'ngip' if ny < 1720 else 'ngped', 'x': nx, 'y': ny}
                for t in [k for k in ('CL', 'NG') if k in a['loc']]:
                    q = LOC_CHECK.get(ph['id'], {}).get((ri, ai, t))
                    if q:
                        a['loc'][t]['check'] = q


def main():
    phases, checklists = [], {}
    for p in sorted((ROOT / 'data').glob('batch*.txt')):
        a, b = parse(p)
        phases += a; checklists.update(b)
    attach_locs(phases)
    data = {'phases': phases, 'checklists': checklists, 'clTails': sorted(CL_TAILS), 'ngTails': sorted(NG_TAILS),
            'mockNames': MOCK_NAMES, 'img': IMG}
    (ROOT / 'site' / 'data.js').write_text('window.OMB = ' + json.dumps(data, ensure_ascii=False, indent=1) + ';\n')
    n = sum(len(r['lines']) for ph in phases for r in ph['rows'])
    print(f'{len(phases)} phases, {sum(len(ph["rows"]) for ph in phases)} rows, {n} lines')


if __name__ == '__main__':
    main()


# ---------------- reconciliation report ----------------
def applies(tag, t):
    if not tag:
        return True
    s = CL_TAILS if t == 'CL' else NG_TAILS
    if tag in ('CL', 'NG'):
        return tag == t
    if tag.startswith('T:'):
        return any(x in s for x in tag[2:].split(','))
    if tag.startswith('X:'):
        ex = set(tag[2:].split(','))
        return any(x not in ex for x in s)
    m = re.match(r'^(CL|NG)\+T:(.*)$', tag)
    if m:
        return m.group(1) == t or any(x in s for x in m.group(2).split(','))
    return True


def report():
    import html
    phases, _ = [], None
    for p in sorted((ROOT / 'data').glob('batch*.txt')):
        phases += parse(p)[0]
    KIND = {'A': 'Пункт', 'V': 'Проверка', 'X': 'Указание', 'H': 'Заголовок борта/типа', 'N': 'NOTE',
            'C': 'CAUTION', 'W': 'WARNING', 'K': 'Callout', 'Q': '⚠ проверить'}
    rows, summary, qs = [], [], []
    for ph in phases:
        pos = {}
        for t in ('CL', 'NG'):
            n = 0
            for i, r in enumerate(ph['rows']):
                if applies(r['tag'], t) and any(applies(l['tag'], t) for l in r['lines']):
                    n += 1
                    pos[(t, i)] = n
        cnt = {'src': 0, 'CL': 0, 'NG': 0, 'none': 0}
        for i, r in enumerate(ph['rows']):
            for l in r['lines']:
                if l['k'] == 'Q':
                    qs.append((ph, r, l)); continue
                cnt['src'] += 1
                where = {}
                for t in ('CL', 'NG'):
                    if applies(r['tag'], t) and applies(l['tag'], t):
                        where[t] = pos[(t, i)]; cnt[t] += 1
                if not where:
                    cnt['none'] += 1
                txt = f"{l['item']} …… {l['val']}" if l['k'] == 'A' else l['text']
                rows.append(f"<tr><td>{html.escape(ph['section'])}</td><td>{r['page']['ch']} / PDF {r['page']['pdf']}</td><td>{KIND[l['k']]}</td><td>{html.escape(txt)}</td>"
                            f"<td>{'шаг ' + str(where['CL']) if 'CL' in where else '—'}</td><td>{'шаг ' + str(where['NG']) if 'NG' in where else '—'}</td></tr>")
        summary.append(f"<tr><td>{html.escape(ph['section'])} {html.escape(ph['title'])}</td><td>{cnt['src']}</td><td>{cnt['CL']}</td><td>{cnt['NG']}</td><td>{cnt['src'] - cnt['none']}</td><td>{'✔' if cnt['none'] == 0 else '✖ ' + str(cnt['none'])}</td></tr>")
    qhtml = ''.join(f"<li><b>{html.escape(ph['section'])}, стр. {r['page']['ch']} (PDF {r['page']['pdf']}), {html.escape(r['panel'])}:</b> {html.escape(l['text'])}</li>" for ph, r, l in qs)
    page = f"""<!DOCTYPE html><html lang="ru"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Сверка с OM-B</title>
<style>body{{font-family:'IBM Plex Sans',system-ui,sans-serif;margin:24px;color:#0b1630;font-size:14px}}h1{{font-size:26px}}h2{{margin-top:28px}}
table{{border-collapse:collapse;width:100%}}th{{background:#0b1f3f;color:#fff;text-align:left;padding:6px 8px;position:sticky;top:0}}td{{border-top:1px solid #d5dce8;padding:5px 8px;vertical-align:top}}
tr:nth-child(even) td{{background:#f6f8fc}}li{{margin:6px 0}}@page{{size:A4 landscape;margin:10mm}}</style></head><body>
<h1>Сверка презентации с OM-B (партия 1)</h1>
<p>Каждая строка ниже — пункт, проверка, указание, NOTE, CAUTION или WARNING из OM-B, перенесённые дословно. Колонки «Classic» и «NG» — номер шага в соответствующей части. «—» означает, что по пометкам документа (CL/NG/борт) строка к этому типу не относится.</p>
<h2>Итог по фазам</h2><table><tr><th>Фаза</th><th>Строк в OM-B</th><th>Показано в Classic</th><th>Показано в NG</th><th>Показано хотя бы в одной части</th><th>Все на месте</th></tr>{''.join(summary)}</table>
<h2>⚠ проверить</h2><ol>{qhtml}</ol>
<h2>Пункт OM-B → где в презентации</h2><table><tr><th>Раздел</th><th>Стр. гл. 2 / PDF</th><th>Тип</th><th>Текст OM-B (дословно)</th><th>Classic</th><th>NG</th></tr>{''.join(rows)}</table></body></html>"""
    (ROOT / 'site' / 'sverka.html').write_text(page)
    print('report: site/sverka.html,', len(rows), 'lines,', len(qs), 'questions')


report()
