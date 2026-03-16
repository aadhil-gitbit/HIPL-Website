# Hardex India Website - Complete Documentation

## 🎯 Quick Start

1. **Download** this entire folder
2. **Open** `index.html` in your browser to preview
3. **Deploy** to free hosting (instructions below)

---

## 📁 File Structure

```
hardex-website/
├── index.html              # Homepage
├── products.html           # Full product catalog
├── config/
│   ├── products-data.js    # ⭐ EDIT THIS TO ADD/MODIFY PRODUCTS
│   └── site-config.js      # ⭐ EDIT THIS FOR COMPANY INFO & COLORS
├── components/
│   ├── tooltip.css         # Product tooltip styles
│   ├── tooltip.js          # Tooltip behavior
│   ├── product-cards.js    # Product rendering engine
│   └── seo.js              # Auto-generates SEO meta tags
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── main.js             # Navigation, forms, animations
└── assets/
    ├── tds/                # Place TDS PDFs here
    ├── msds/               # Place MSDS PDFs here
    └── images/             # Place images here
```

---

## ✏️ How to Edit Content

### 1. Add/Modify Products (MOST COMMON EDIT)

**File:** `config/products-data.js`  
**Token Cost:** ~200 tokens

```javascript
// Copy this template and paste into the PRODUCTS array:
{
  id: 'product-slug',           // e.g., 'hardproof-coolcoat'
  name: 'PRODUCT NAME',         // Display name
  icon: '🎯',                   // Emoji icon
  category: 'Waterproofing',    // Main category
  subcategory: 'Heat Reflective', // Specific type
  featured: true,               // true = shows on homepage
  
  // Tooltip content
  shortDesc: 'One-line technical description',
  application: 'Where it is used',
  coverage: 'X kg/m²',
  
  // Download links (local or Google Drive)
  tds: '/assets/tds/product.pdf',  // or Google Drive link
  msds: null,                      // null if not available yet
  
  // SEO
  seo: {
    title: 'PRODUCT - Category | Hardex India',
    description: 'Detailed description for search engines',
    keywords: ['keyword1', 'keyword2', 'keyword3']
  }
},
```

**What happens automatically:**
- Product appears on homepage (if `featured: true`)
- Product appears on Products page
- Product has interactive tooltip with TDS/MSDS buttons
- SEO meta tags generated
- Site navigation updated

### 2. Change Company Info/Colors

**File:** `config/site-config.js`  
**Token Cost:** ~100 tokens

```javascript
// Update company information:
company: {
  name: 'Hardex India Private Limited',
  email: 'info@hardexindia.com',
  phone: '+91-XXXX-XXXXXX',
  // ... etc
}

// Update brand colors:
colors: {
  primary: '#00BCD4',      // Change this to update main color
  primaryDark: '#0097A7',
  // ... etc
}

// Update navigation menu:
navigation: [
  { label: 'Home', href: '#home' },
  // Add more menu items here
]
```

### 3. Add Background Images to Solution Cards

**File:** `config/site-config.js`  
**Section:** `solutions[]`

```javascript
solutions: [
  {
    title: 'Waterproofing Systems',
    description: '...',
    icon: 'waterproofing',
    bgImage: '/assets/images/waterproofing-bg.jpg'  // Add image URL here
  }
]
```

Images will automatically have gradient overlays for text readability.

---

## 📄 Managing TDS/MSDS Files

### Option 1: Local Files (Small Scale, <50 products)

1. Add PDF files to:
   - `assets/tds/product-name.pdf`
   - `assets/msds/product-name.pdf`

2. Reference in products-data.js:
   ```javascript
   tds: '/assets/tds/hardproof-coolcoat.pdf'
   ```

3. Upload entire site to Netlify/Vercel

### Option 2: Google Drive (Medium Scale, 50-200 products)

1. Upload PDF to your Google Drive
2. Right-click → Get shareable link
3. Set sharing to "Anyone with link can view"
4. Copy link
5. Update products-data.js:
   ```javascript
   tds: 'https://drive.google.com/file/d/YOUR_FILE_ID/view'
   ```

**Pros:** Easy to update, no re-deployment needed  
**Cons:** Daily download limits

### Option 3: CDN (Large Scale, 200+ products)

1. Sign up for BunnyCDN ($1/month) or AWS S3
2. Upload all PDFs
3. Get CDN URL
4. Update products-data.js:
   ```javascript
   tds: 'https://hardex-files.b-cdn.net/tds/product.pdf'
   ```

**Migration is easy:** Just change the URLs in `products-data.js`. No code changes needed.

---

## 🚀 Deployment (3 Free Options)

### Option 1: Netlify (Recommended)
**Cost:** FREE  
**Time:** 2 minutes

1. Go to [netlify.com](https://netlify.com)
2. Sign up (free account)
3. Drag and drop the entire `hardex-website` folder
4. Done! You get: `https://hardex-india.netlify.app`

**Update site:** Just drag and drop the folder again.

### Option 2: Vercel
**Cost:** FREE  
**Time:** 2 minutes

1. Go to [vercel.com](https://vercel.com)
2. Sign up (free account)
3. Import project → Upload folder
4. Done!

### Option 3: GitHub Pages
**Cost:** FREE  
**Time:** 5 minutes (requires Git knowledge)

1. Create GitHub account
2. Create repository: `hardex-website`
3. Upload files
4. Settings → Pages → Enable
5. Done!

---

## 📱 Mobile Features

**Automatic behaviors:**
- **Desktop:** Hover over products to see tooltip
- **Mobile:** Tap products to see tooltip (slides up from bottom)
- **Navigation:** Hamburger menu on mobile
- **Forms:** Touch-optimized inputs
- **PDFs:** Tap to open in new tab or download

All responsive breakpoints are already configured.

---

## 🎨 Customization Guide

### Change Product Icons

Find better icons at:
- [Emojipedia](https://emojipedia.org/) (copy-paste emojis)
- [IconBros](https://iconbros.com/) (SVG icons - requires code)

### Change Fonts

Current fonts: DM Sans, DM Mono, Bebas Neue

To change: Edit `<link href="https://fonts.googleapis.com/..."` in HTML files.

### Change Layout

All layouts are in `css/styles.css`. Search for:
- `.hero` - Homepage hero section
- `.sol-grid` - Solutions grid
- `.product-card` - Product cards

---

## 🔍 SEO Features (Already Configured)

**Automatic SEO includes:**
- ✅ Dynamic meta titles and descriptions
- ✅ Open Graph tags (social media previews)
- ✅ Twitter Card tags
- ✅ Structured data (JSON-LD)
- ✅ Sitemap-ready URLs
- ✅ Mobile-friendly
- ✅ Fast loading

**To verify SEO:**
1. Deploy site
2. Use [Google's Rich Results Test](https://search.google.com/test/rich-results)
3. Use [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)

---

## ⚡ Performance Optimization

**Already optimized:**
- Minimal JavaScript (~15KB total)
- CSS-first animations
- Lazy-loaded tooltips
- No external dependencies (except Google Fonts)
- Mobile-first responsive design

**To further optimize:**
1. Compress images (use [TinyPNG](https://tinypng.com/))
2. Minify CSS/JS (automatic on Netlify/Vercel)
3. Enable CDN (automatic on Netlify/Vercel)

---

## 🐛 Troubleshooting

### Products not showing?
- Check browser console (F12) for errors
- Verify `products-data.js` syntax (missing commas, brackets)

### Tooltips not working?
- Ensure all script files are loading
- Check browser console for errors

### Mobile menu stuck?
- Clear browser cache
- Check `main.js` is loading

### PDFs not opening?
- Verify file paths are correct
- Check file permissions (must be public)

---

## 📊 Analytics Setup (Optional)

To track visitors:

1. Sign up for [Google Analytics](https://analytics.google.com/)
2. Get tracking ID (e.g., `G-XXXXXXXXXX`)
3. Add to both HTML files before `</head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🆘 Support

**Common Questions:**

**Q: How do I add more pages?**  
A: Copy `products.html`, rename it, update navigation in both HTML files.

**Q: Can I use this with WordPress?**  
A: This is a static HTML site. To use with WordPress, you'd need to convert it to a theme (more complex).

**Q: How do I connect a contact form to email?**  
A: Options:
1. Use [Formspree](https://formspree.io/) (free tier: 50 submissions/month)
2. Use [Netlify Forms](https://docs.netlify.com/forms/setup/) (free on Netlify)
3. Build custom backend (requires developer)

**Q: How do I add a blog?**  
A: This template doesn't include a blog. Consider:
1. Adding a CMS (Netlify CMS, Contentful)
2. Using a static site generator (Eleventy, Hugo)
3. Linking to external blog (Medium, Hashnode)

---

## 🚦 Next Steps

1. ✅ Edit `config/products-data.js` with your products
2. ✅ Update `config/site-config.js` with your info
3. ✅ Add TDS/MSDS PDFs to `assets/` folder
4. ✅ Test locally by opening `index.html`
5. ✅ Deploy to Netlify/Vercel
6. ✅ Share your website!

---

## 📈 Growth Path

**Phase 1 (Now):** Local files, 4 featured products  
**Phase 2 (50+ products):** Migrate to Google Drive  
**Phase 3 (200+ products):** Migrate to CDN (BunnyCDN/AWS S3)  
**Phase 4 (500+ products):** Consider product database + API

All migrations only require editing `products-data.js`. No code changes needed.

---

**Built with ❤️ for Hardex India**  
**Questions? Check TOKEN-COST-CALCULATOR.md for iteration costs.**
