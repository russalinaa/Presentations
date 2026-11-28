#!/usr/bin/env python3
"""Contact sheet: crosshair at every LOC coordinate (Classic image and NG image) for visual verification."""
import sys, re
from PIL import Image, ImageDraw
out = sys.argv[1]
src = open('build.py').read()
blk = src[src.index("LOC = {"):src.index("LOC_CHECK")]
pts = re.findall(r"\('(\w+)', (\d+), (\d+), (\d+), (\d+)\)\]?,?\s*# ([^\n]*)", blk)
imgs = {'ovh': 'site/img/cl-ovh.jpg', 'ip': 'site/img/cl-ip.jpg', 'aft': 'site/img/cl-aft.jpg', 'ng': 'site/img/ng-all.jpg'}
cache = {k: Image.open(v).convert('RGB') for k, v in imgs.items()}
tiles = []
for i, (im, x, y, nx, ny, c) in enumerate(pts):
    for key, X, Y in [(im, int(x), int(y)), ('ng', int(nx), int(ny))]:
        r = 110 if key != 'ng' else 75
        t = cache[key].crop((X - r, Y - r, X + r, Y + r)).resize((260, 260)); d = ImageDraw.Draw(t)
        d.line([(130, 100), (130, 160)], fill=(255, 0, 255), width=3); d.line([(100, 130), (160, 130)], fill=(255, 0, 255), width=3)
        d.rectangle([0, 0, 259, 16], fill=(0, 0, 0)); d.text((3, 2), f"{i} {'CL' if key != 'ng' else 'NG'} {c[:34]}", fill=(255, 255, 0))
        tiles.append(t)
cols = 6; rows = (len(tiles) + cols - 1) // cols
G = Image.new('RGB', (cols * 260, rows * 260), 'white')
for k, t in enumerate(tiles): G.paste(t, ((k % cols) * 260, (k // cols) * 260))
G.save(out); print(len(pts), 'locations')
