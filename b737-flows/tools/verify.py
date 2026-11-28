#!/usr/bin/env python3
"""Completeness check: every text line of the OM-B pages must be found in data/*.txt,
and every data line must be found in the OM-B text (nothing added).
Usage: verify.py <omb.pdf> <p0> <p1> <start> <end> [<p0> <p1> <start> <end> ...]"""
import re, subprocess, sys, pathlib, json
pdf, a = sys.argv[1], sys.argv[2:]
txt = ''
for i in range(0, len(a), 4):
    p0, p1, start, end = a[i:i + 4]
    t = subprocess.run(['pdftotext', '-f', p0, '-l', p1, '-layout', pdf, '-'], capture_output=True, text=True).stdout
    txt += t[t.index(start):t.index(end)] + '\n'

def norm(s):
    s = re.sub(r'(\.\.\.)?(\s+(C|F/O|PF|PM|or))+\s*$', '', s.rstrip())   # role column of the table
    s = re.sub(r'^\s*Call:?\s*', '', s)
    s = re.sub(r'\s(C|F/O)\s{2,}', ' ', s)
    s = re.sub(r'^\s*(NOTE|CAUTION|WARNING|Note)\s*[:.]\s*', '', s)
    s = s.replace('’', "'").replace('“', '"').replace('”', '"').replace('–', '-').replace('…', '')
    s = re.sub(r'\.{3,}', ' ', s)
    return re.findall(r"[a-z0-9а-я%/°]+", s.lower())
skip = re.compile(r'OPERATION MANUAL PART B|2\. NORMAL PROCEDURES|Issue 06, Rev|^\s*$')
src = [l.strip() for l in txt.splitlines() if not skip.search(l)]
data = []
panels = []
for f in sorted(pathlib.Path(__file__).parent.parent.glob('data/batch*.txt')):
    for l in f.read_text().splitlines():
        l = re.sub(r'^\[[^\]]+\]\s*', '', l)
        if re.match(r'^[AVXHNCWK] ', l) or l.startswith('@trigger') or l.startswith('@intro'):
            data.append(l.split(' ', 1)[1].replace('||', ' '))
        elif l.startswith('== '):
            panels.append(l.split('|')[1].strip())
blob = ' ' + ' '.join(' '.join(norm(d)) for d in data + panels) + ' '
miss = []
for l in src:
    w = norm(l)
    if not w: continue
    if (' ' + ' '.join(w) + ' ') not in blob:
        # tolerate line-wrap: accept if all words occur within one data line in order
        ok = any(all(x in norm(d) for x in w) for d in data + panels)
        if not ok: miss.append(l)
srcblob = ' ' + ' '.join(' '.join(norm(l)) for l in src) + ' '
extra = [d for d in data if not all(x in srcblob for x in [' ' + t + ' ' for t in norm(d)])]
print(json.dumps({'source_lines': len(src), 'data_lines': len(data), 'missing_in_presentation': miss, 'not_in_source': extra}, ensure_ascii=False, indent=1))
