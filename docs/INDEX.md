# Repository Index

## Root web files
These remain at repository root because they are expected at site root in static hosting:
- `index.html`
- `products.html`
- `product-detail.html`
- `solutions.html`
- `about.html`
- `contact.html`
- `downloads.html`
- `dealers.html`
- `404.html`
- `robots.txt`
- `sitemap.xml`
- `site.webmanifest`
- `favicon.svg`
- `og-image.svg`

## Config and data
- `config/products-data.js` – master product catalog used by product cards and product-detail page.
- `config/solutions-data.js` – solution categories and `recommendedProducts` mappings.
- `config/dealers-data.js` – dealer and territory listing.
- `config/site-config.js` – global company/contact/theme configuration.

## Documentation
- `README.md` – setup and edit guide.
- `docs/INDEX.md` – this repository map.

## Archived source artifacts
- `archive/Product data for two tier tooltip.txt`
- `archive/files final.zip`

## Validation commands
- `node scripts/validate-data-links.js` – validates that `recommendedProducts` IDs in solutions exist in product catalog.
- `python scripts/validate-meta.py` – checks top-level pages for favicon, manifest, OG/Twitter and JSON-LD tags.
