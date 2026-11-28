/* Flight map skeleton. Every procedure and point is taken from OM-B (SCAT B737 CL-NG, Issue 06 Rev 01).
   proc: procedures of 2.2 in document order.  pt: conditions/locations from the 2.3.2 Callouts table.
   ch = page of chapter 2 (PDF page = ch + 68). x,y = position on the 4400 x 2700 map. */
window.MAP = {
  W: 4400, H: 2700,
  ground: [ // numbered list next to the stand; card = slot on the left
    { id: 'epu',    n: 1,  t: 'Electrical Power Up – F/O',                   sec: '2.2.9',  ch: '21' },
    { id: 'prelim', n: 2,  t: 'Preliminary Preflight Procedure – F/O',      sec: '2.2.10', ch: '23' },
    { id: 'ext',    n: 3,  t: 'Exterior Inspection – Captain',               sec: '2.2.11', ch: '30' },
    { id: 'cdu',    n: 4,  t: 'CDU Preflight Procedure – Captain and First Officer', sec: '2.2.12', ch: '34' },
    { id: 'pfo',    n: 5,  t: 'Preflight Procedure – First Officer',         sec: '2.2.13', ch: '36', ck: 'PREFLIGHT' },
    { id: 'pcap',   n: 6,  t: 'Preflight Procedure – Captain',               sec: '2.2.14', ch: '49', ck: 'PREFLIGHT' },
    { id: 'bstart', n: 7,  t: 'Before Start Procedure',                      sec: '2.2.21', ch: '62', ck: 'BEFORE START' },
    { id: 'push',   n: 8,  t: 'Pushback or Towing Procedure',                sec: '2.2.22', ch: '65' },
    { id: 'estart', n: 9,  t: 'Engine Start Procedure',                      sec: '2.2.23', ch: '67' },
    { id: 'btaxi',  n: 10, t: 'Before Taxi Procedure',                       sec: '2.2.24', ch: '69', ck: 'BEFORE TAXI' }
  ],
  flight: [ // procedure nodes on the flight path
    { id: 'taxi',   t: 'Taxi Procedure',                     sec: '2.2.25', ch: '72',  x: 1850, y: 2250, box: [1700, 2380] },
    { id: 'bto',    t: 'Before Takeoff Procedure',           sec: '2.2.26', ch: '74',  x: 2200, y: 2250, box: [2120, 2380], ck: 'BEFORE TAKEOFF' },
    { id: 'to',     t: 'Takeoff Procedure',                  sec: '2.2.27', ch: '76',  x: 2560, y: 2250, box: [2540, 2380], ck: 'AFTER TAKEOFF DOWN TO ALTIMETERS · AFTER TAKEOFF ALTIMETERS' },
    { id: 'cc',     t: 'Climb and Cruise Procedure',         sec: '2.2.32', ch: '88',  x: 3500, y: 300,  box: [3250, 80] },
    { id: 'desc',   t: 'Descent Procedure',                  sec: '2.2.38', ch: '102', x: 2780, y: 300,  box: [2480, 80], ck: 'DESCENT' },
    { id: 'app',    t: 'Approach Procedure',                 sec: '2.2.39', ch: '103', x: 2640, y: 560,  box: [3050, 520], ck: 'APPROACH' },
    { id: 'land',   t: 'Landing Procedure (7 видов захода)', sec: '2.2.41–2.2.47', ch: '107–139', x: 2370, y: 830, box: [3050, 760], ck: 'LANDING' },
    { id: 'ga',     t: 'Go-Around and Missed Approach Procedure', sec: '2.2.49', ch: '141', x: 2380, y: 1000, box: [3050, 1000] },
    { id: 'roll',   t: 'Landing Roll Procedure',             sec: '2.2.52', ch: '146', x: 1820, y: 1150, box: [1950, 1215], lx: -170, ly: 58 },
    { id: 'aland',  t: 'After Landing Procedure',            sec: '2.2.53', ch: '147', x: 1350, y: 1000, box: [800, 960], bh: 128 },
    { id: 'park',   t: 'Parking Procedure',                  sec: '2.2.54', ch: '148', x: 1350, y: 860,  box: [800, 820], bh: 128 },
    { id: 'shut',   t: 'Shutdown Procedure',                 sec: '2.2.55', ch: '148', x: 1350, y: 720,  box: [800, 680], bh: 128, ck: 'SHUTDOWN' },
    { id: 'secure', t: 'Secure Procedure',                   sec: '2.2.56', ch: '151', x: 1350, y: 580,  box: [800, 540], bh: 128, ck: 'SECURE' },
    { id: 'epd',    t: 'Electrical Power Down',              sec: '2.2.57', ch: '151', x: 1350, y: 440,  box: [800, 400], bh: 128 }
  ],
  /* points: label = "Condition/Location" column of 2.3.2, verbatim */
  points: [
    // runway (takeoff)
    { t: 'When cleared for takeoff', ch: '152', x: 2620, y: 2250, side: 'b', L: 46 },
    { t: 'When engines are stabilised at approximately 40% N1', ch: '152', x: 2730, y: 2250, side: 't', L: 150 },
    { t: 'Selecting TO/GA', ch: '152', x: 2840, y: 2250, side: 'b', L: 100 },
    { t: '80 knots', ch: '153', x: 2950, y: 2250, side: 't' },
    { t: 'THR HLD', ch: '153', x: 3050, y: 2250, side: 'b' },
    { t: 'V1', ch: '153', x: 3150, y: 2250, side: 't' },
    { t: 'VR', ch: '153', x: 3250, y: 2250, side: 'b' },
    // climb
    { t: 'Positive climb', ch: '153', x: 3420, y: 2170, side: 'l' },
    { t: 'All 3 Landing Gear Lights Off', ch: '153', x: 3490, y: 2090, side: 'r' },
    { t: '50 feet', ch: '153', x: 3560, y: 2010, side: 'l' },
    { t: 'Above 400 feet radio', ch: '153', x: 3640, y: 1920, side: 'r' },
    { t: "800' AGL", ch: '153', x: 3720, y: 1830, side: 'l' },
    { t: 'Check aircraft is accelerating', ch: '153', x: 3800, y: 1740, side: 'r' },
    { t: 'When Flaps are up', ch: '154', x: 3880, y: 1650, side: 'l' },
    { t: 'Engagement of Autopilot', ch: '154', x: 3950, y: 1560, side: 'r' },
    { t: 'Cleared to flight level or passing transition altitude', ch: '154', x: 4000, y: 1380, side: 'l' },
    { t: "1000' to cleared flight level/altitude", ch: '154', x: 4000, y: 1200, side: 'l' },
    { t: 'FL 100 or 10 000 FEET', ch: '154', x: 4000, y: 1020, side: 'l' },
    { t: 'At FL260 (or before entrance to RVSM airspace)', ch: '154', x: 4000, y: 700, side: 'l' },
    // cruise / descent preparation
    { t: 'Landing Preparation', ch: '154–155', x: 3150, y: 300, side: 'b' },
    { t: 'Prior to descend', ch: '155', x: 2960, y: 300, side: 'b' },
    // descent / approach
    { t: 'Cleared to descent below transition level', ch: '155', x: 2840, y: 360, side: 'l' },
    { t: 'FL100 or 10000 feet', ch: '155', x: 2750, y: 450, side: 'l' },
    { t: 'When total track inbound distance less than 20 Nm from landing RW but not less than 3 NM from extended centreline', ch: '155', x: 2580, y: 620, side: 'l' },
    { t: 'Flap extension till 15º', ch: '156', x: 2520, y: 680, side: 'l' },
    { t: 'EGPWS “2500” or when passing 2500 feet Radio Altitude', ch: '156', x: 2460, y: 740, side: 'l' },
    { t: 'When VOR/LOC armed · When APP armed', ch: '156', x: 2400, y: 800, side: 'l' },
    { t: 'VOR or LOC alive · VOR or LOC capture', ch: '156', x: 2340, y: 860, side: 'l' },
    { t: 'Glideslope alive', ch: '156', x: 2280, y: 920, side: 'l' },
    { t: 'Approaching glideslope', ch: '156', x: 2220, y: 980, side: 'l' },
    { t: 'Glideslope capture', ch: '156', x: 2180, y: 1020, side: 'l' },
    { t: "1000' baro", ch: '157', x: 2140, y: 1060, side: 'l' },
    { t: 'When autopilot and autothrottle are disengaged · Outer marker', ch: '157', x: 2110, y: 1090, side: 'r' },
    { t: '500 AGL', ch: '157', x: 2090, y: 1110, side: 'l' },
    { t: "100' to minima", ch: '157', x: 2072, y: 1128, side: 'r' },
    { t: 'Minimums', ch: '157', x: 2060, y: 1140, side: 'l' },
    // landing roll
    { t: 'Landing roll', ch: '158', x: 1620, y: 1150, side: 't' }
  ],
  checklistsApp: { CL: 'Appendix 1 (PDF 417)', NG: 'Appendix 3 (PDF 422)' },
  approaches: [
    { id: 'ils',    t: 'ILS Autopilot Approach (Manual land or Autoland)', sec: '2.2.41', ch: '107' },
    { id: 'vnav',   t: 'Instrument Approach using VNAV (for NG and UP-B3721, UP-B3729)', sec: '2.2.42', ch: '111' },
    { id: 'vs',     t: 'Instrument Approach using V/S', sec: '2.2.43', ch: '119' },
    { id: 'ian',    t: 'Instrument Approach using IAN (UP-B3741)', sec: '2.2.44', ch: '124' },
    { id: 'circ',   t: 'Circling procedure – Autopilot recommended', sec: '2.2.45', ch: '131' },
    { id: 'visual', t: 'Visual Approach', sec: '2.2.46', ch: '138' },
    { id: 'side',   t: 'Side Step Maneuver', sec: '2.2.47', ch: '139' }
  ]
};
