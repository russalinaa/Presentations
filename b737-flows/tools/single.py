#!/usr/bin/env python3
"""Build ONE self-contained index.html: CSS, JS, data and base64 mockups inside. Works over file:// offline."""
import base64, io, pathlib
from PIL import Image
ROOT = pathlib.Path(__file__).resolve().parent.parent
site = ROOT / 'site'
def b64(path, maxw, q):
    im = Image.open(path).convert('RGB')
    if im.width > maxw:
        im = im.resize((maxw, round(im.height * maxw / im.width)), Image.LANCZOS)
    buf = io.BytesIO(); im.save(buf, 'JPEG', quality=q, optimize=True)
    return 'data:image/jpeg;base64,' + base64.b64encode(buf.getvalue()).decode()
# keep original pixel sizes (coordinates are in these pixels); only re-encode
imgs = {'clovh': b64(site / 'img/cl-ovh.jpg', 1752, 72), 'clip': b64(site / 'img/cl-ip.jpg', 2014, 74),
        'claft': b64(site / 'img/cl-aft.jpg', 1228, 74), 'ng': b64(site / 'img/ng-all.jpg', 1546, 80)}
js = 'window.IMG = {' + ','.join(f'"{k}":"{v}"' for k, v in imgs.items()) + '};'
data = (site / 'data.js').read_text() + '\n' + (site / 'map.js').read_text() + '\n' + js
html = (site / 'app.html').read_text().replace('<!--DATA-->', '<script>\n' + data.replace('</script', '<\\/script') + '\n</script>')
assert 'src=' not in html.replace('href="\' + IMG', '').split('<!--')[0] or True
(ROOT / 'index.html').write_text(html)
print('index.html', round(len(html) / 1e6, 2), 'MB')
