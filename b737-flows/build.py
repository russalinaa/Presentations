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


def attach_locs(phases):
    for ph in phases:
        L = LOC.get(ph['id'])
        if not L:
            continue
        assert len(L) == len(ph['rows']), (ph['id'], len(L), len(ph['rows']))
        for ri, (row, locs) in enumerate(zip(ph['rows'], L)):
            acts = [l for l in row['lines'] if l['k'] == 'A']
            assert len(acts) == len(locs), (ph['id'], ri, len(acts), len(locs))
            for ai, (a, lc) in enumerate(zip(acts, locs)):
                if lc is None:
                    continue
                img, x, y, nx, ny = lc
                a['loc'] = {'CL': {'img': img, 'x': x, 'y': y},
                            'NG': {'img': 'ngovh' if ny < 1120 else 'ngip' if ny < 1720 else 'ngped', 'x': nx, 'y': ny}}
                for t in ('CL', 'NG'):
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
