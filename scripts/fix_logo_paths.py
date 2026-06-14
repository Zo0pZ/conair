from pathlib import Path
import re

root = Path(__file__).resolve().parent.parent
pattern_double = re.compile(r'src="conair-logo\.svg"')
pattern_single = re.compile(r"src='conair-logo\.svg'")

updated = []
for path in root.rglob('*.html'):
    text = path.read_text(encoding='utf-8')
    new_text = pattern_double.sub('src="/conair/conair-logo.svg"', text)
    new_text = pattern_single.sub("src='/conair/conair-logo.svg'", new_text)
    if new_text != text:
        path.write_text(new_text, encoding='utf-8')
        updated.append(str(path.relative_to(root)))

print('Updated files:', updated)
print('Total updated:', len(updated))
