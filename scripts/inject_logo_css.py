from pathlib import Path

root = Path(__file__).resolve().parent.parent
snippet = '''
/* Logo sizing (copied from index) */
.logo-wrap img {
  display: block;
  width: auto;
  max-height: 100px;
  height: auto;
}
@media (max-width: 1024px) {
  .logo-wrap img { max-height: 72px; }
}
@media (max-width: 640px) {
  .logo-wrap img { max-height: 52px; }
}
@media (max-width: 420px) {
  .logo-wrap img { max-height: 44px; }
}
/* Footer logo sizing */
.footer-logo {
  display: block;
  width: auto;
  max-height: 50px;
  height: auto;
}
@media (max-width:640px) {
  .footer-logo { max-height: 32px; }
}
'''

updated = []
for path in root.rglob('*.html'):
    if path.name == 'index.html':
        continue
    text = path.read_text(encoding='utf-8')
    if '.logo-wrap img' in text or '.footer-logo' in text:
        continue
    # find closing </style>
    idx = text.find('</style>')
    if idx == -1:
        continue
    new_text = text[:idx] + '\n' + snippet + text[idx:]
    path.write_text(new_text, encoding='utf-8')
    updated.append(str(path.relative_to(root)))

print('Updated:', updated)
print('Count:', len(updated))
