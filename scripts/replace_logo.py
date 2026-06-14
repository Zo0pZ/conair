import re
from pathlib import Path

root = Path(__file__).resolve().parent.parent

pattern = re.compile(r'<a href="#" class="logo-wrap[\s\S]*?</a>', re.IGNORECASE)
replacement = ('<a href="#" class="logo-wrap flex items-center gap-3 min-h-tap" aria-label="ConAir Extract Solutions — home">\n'
               '  <img src="conair-logo.svg" alt="ConAir Extract Solutions Logo">\n'
               '</a>')

changed_files = []
for path in root.rglob('*.html'):
    if path.name == 'index.html':
        continue
    text = path.read_text(encoding='utf-8')
    new_text, n = pattern.subn(replacement, text)
    if n > 0:
        path.write_text(new_text, encoding='utf-8')
        changed_files.append(str(path.relative_to(root)))

print('Updated files:', changed_files)
print('Total updated:', len(changed_files))
