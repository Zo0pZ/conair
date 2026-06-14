from pathlib import Path
import re

root = Path(__file__).resolve().parent.parent
index = root / 'index.html'
text = index.read_text(encoding='utf-8')

m = re.search(r'<div class="flex items-center gap-3 mb-5">[\s\S]*?</div>\s*</div>\s*<!-- NAP', text)
if not m:
    # fallback: capture the smaller div containing footer logo only
    m = re.search(r'<div class="flex items-center gap-3 mb-5">[\s\S]*?</div>', text)

if not m:
    print('Footer logo block not found in index.html')
    raise SystemExit(1)

footer_block = m.group(0)
print('Extracted footer block:')
print(footer_block)

pattern = re.compile(r'<div class="flex items-center gap-3 mb-5">[\s\S]*?</div>')

updated = []
for path in root.rglob('*.html'):
    if path.name == 'index.html':
        continue
    s = path.read_text(encoding='utf-8')
    new_s, n = pattern.subn(footer_block, s, count=1)
    if n:
        path.write_text(new_s, encoding='utf-8')
        updated.append(str(path.relative_to(root)))

print('Updated files:', updated)
print('Total updated:', len(updated))
