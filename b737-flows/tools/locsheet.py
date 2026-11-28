#!/usr/bin/env python3
"""Contact sheet of every unique mockup location of one phase: locsheet.py <phase> <CL|NG> <out.png>"""
import sys, json
from PIL import Image, ImageDraw
ph_id, t, out = sys.argv[1:4]
s = open('site/data.js').read(); d = json.loads(s[s.index('{'):s.rindex('}') + 1])
ph = [p for p in d['phases'] if p['id'] == ph_id][0]
src = {'ovh': 'site/img/cl-ovh.jpg', 'ip': 'site/img/cl-ip.jpg', 'aft': 'site/img/cl-aft.jpg'}
seen, items = set(), []
for i, r in enumerate(ph['rows']):
    for l in r['lines']:
        lc = (l.get('loc') or {}).get(t)
        if lc and (lc['img'], lc['x'], lc['y']) not in seen:
            seen.add((lc['img'], lc['x'], lc['y'])); items.append((i, r['panel'], lc))
cache = {}
tiles = []
for i, name, lc in items:
    p = src.get(lc['img'], 'site/img/ng-all.png')
    if p not in cache: cache[p] = Image.open(p).convert('RGB')
    r = 110 if t == 'CL' else 70
    tl = cache[p].crop((lc['x'] - r, lc['y'] - r, lc['x'] + r, lc['y'] + r)).resize((240, 240)); dr = ImageDraw.Draw(tl)
    dr.line([(120, 95), (120, 145)], fill=(255, 0, 255), width=3); dr.line([(95, 120), (145, 120)], fill=(255, 0, 255), width=3)
    dr.rectangle([0, 0, 239, 15], fill=0); dr.text((2, 2), f'{i} {name[:34]}', fill=(255, 255, 0)); tiles.append(tl)
cols = 7; G = Image.new('RGB', (cols * 240, ((len(tiles) + cols - 1) // cols) * 240), 'white')
for k, tl in enumerate(tiles): G.paste(tl, ((k % cols) * 240, (k // cols) * 240))
G.save(out); print(len(tiles))
