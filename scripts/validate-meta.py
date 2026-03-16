from pathlib import Path

required = [
    'rel="manifest"',
    'rel="icon" type="image/svg+xml" href="favicon.svg"',
    'property="og:title"',
    'name="twitter:title"',
    'application/ld+json',
]
pages = [
    'index.html','products.html','product-detail.html','solutions.html',
    'about.html','contact.html','downloads.html','dealers.html','404.html'
]

for page in pages:
    text = Path(page).read_text(encoding='utf-8')
    for token in required:
        assert token in text, f"{page}: missing {token}"

print('OK: meta/favicon/manifest/JSON-LD checks passed across top-level pages.')
