// ═══════════════════════════════════════════════════════════════════
// SEO.JS — Auto-generates meta tags from site-config.js
// Runs on both index.html and products.html
// ═══════════════════════════════════════════════════════════════════

(function () {
  'use strict';

  function init() {
    const cfg = (typeof SITE_CONFIG !== 'undefined') ? SITE_CONFIG : null;
    if (!cfg) return;

    const seo = cfg.seo || {};
    const company = cfg.company || {};

    // Determine page-specific overrides
    const isProductsPage = window.location.pathname.includes('products');
    const title = isProductsPage
      ? `Products | ${cfg.company.shortName}`
      : seo.defaultTitle;
    const description = isProductsPage
      ? `Complete catalog of ${company.shortName} construction chemical products. TDS and MSDS available for every product.`
      : seo.defaultDescription;
    const keywords = (seo.keywords || []).join(', ');

    // Set title
    document.title = title;

    // Helper
    function setMeta(name, content, isOg) {
      if (!content) return;
      const attr = isOg ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    }

    // Basic meta
    setMeta('description', description);
    setMeta('keywords', keywords);
    setMeta('author', seo.author || company.name);
    setMeta('robots', 'index, follow');

    // Open Graph
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:type', 'website', true);
    setMeta('og:site_name', seo.siteName || company.shortName, true);
    if (seo.ogImage) setMeta('og:image', seo.ogImage, true);

    // Twitter
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);

    // Language
    document.documentElement.lang = seo.language || 'en-IN';

    // Structured Data (JSON-LD)
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: company.name,
      url: window.location.origin,
      description: description,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: (cfg.contact || {}).phone || '',
        email: (cfg.contact || {}).email || '',
        contactType: 'customer service'
      }
    };

    let ldScript = document.getElementById('hardex-ld');
    if (!ldScript) {
      ldScript = document.createElement('script');
      ldScript.id = 'hardex-ld';
      ldScript.type = 'application/ld+json';
      document.head.appendChild(ldScript);
    }
    ldScript.textContent = JSON.stringify(jsonLd);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
// ═══════════════════════════════════════════════════════════════════
// TOOLTIP.JS — Product hover tooltips (desktop) + bottom sheet (mobile)
// ═══════════════════════════════════════════════════════════════════

(function () {
  'use strict';

  // ─── Build inner HTML shared by tooltip and sheet ───
  function buildContent(product) {
    const tdsBtn = product.tds
      ? `<a href="${product.tds}" target="_blank" rel="noopener" class="tt-btn tt-btn-tds">↓ TDS</a>`
      : `<span class="tt-btn tt-btn-na">TDS N/A</span>`;

    const msdsBtn = product.msds
      ? `<a href="${product.msds}" target="_blank" rel="noopener" class="tt-btn tt-btn-msds">↓ MSDS</a>`
      : `<span class="tt-btn tt-btn-na">MSDS N/A</span>`;

    return `
      <span class="tt-icon">${product.icon || '🧪'}</span>
      <div class="tt-name">${product.name}</div>
      <div class="tt-sub">${product.category} · ${product.subcategory}</div>
      <div class="tt-desc">${product.shortDesc}</div>
      ${product.realTalk ? `<details class="tt-rt-wrap"><summary class="tt-rt-toggle">Real Talk</summary><div class="tt-rt-body">${product.realTalk}</div></details>` : ''}
      <div class="tt-divider"></div>
      <div class="tt-row">
        <span class="tt-label">Application</span>
        <span class="tt-val">${product.application}</span>
      </div>
      <div class="tt-row">
        <span class="tt-label">Coverage</span>
        <span class="tt-val">${product.coverage}</span>
      </div>
      <div class="tt-buttons">${tdsBtn}${msdsBtn}</div>
      <a href="index.html#contact" class="tt-enquire">Request Sample →</a>
    `;
  }

  // ─── Desktop Tooltip ───
  let activeTooltip = null;
  let hideTimer = null;

  function createTooltip() {
    const el = document.createElement('div');
    el.className = 'prod-tooltip';
    el.setAttribute('role', 'tooltip');
    document.body.appendChild(el);
    return el;
  }

  const tooltip = createTooltip();

  function showTooltip(card, product) {
    clearTimeout(hideTimer);

    tooltip.innerHTML = buildContent(product);
    tooltip.style.display = 'block';

    // Position below card
    const rect = card.getBoundingClientRect();
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;

    let top = rect.bottom + scrollY + 12;
    let left = rect.left + scrollX;

    // Flip up if too close to bottom
    const spaceBelow = window.innerHeight - rect.bottom;
    const flip = spaceBelow < 340;
    if (flip) {
      top = rect.top + scrollY - 12;
      tooltip.classList.add('flip');
    } else {
      tooltip.classList.remove('flip');
    }

    // Keep within viewport
    const tipW = 300;
    if (left + tipW > window.innerWidth - 16) {
      left = window.innerWidth - tipW - 16;
    }

    if (flip) {
      tooltip.style.top = '';
      tooltip.style.bottom = (window.innerHeight - rect.top - scrollY) + 12 + 'px';
    } else {
      tooltip.style.bottom = '';
      tooltip.style.top = top + 'px';
    }
    tooltip.style.left = Math.max(16, left) + 'px';

    // Trigger transition
    requestAnimationFrame(() => {
      tooltip.classList.add('visible');
    });

    activeTooltip = tooltip;
  }

  function hideTooltip() {
    hideTimer = setTimeout(() => {
      tooltip.classList.remove('visible');
    }, 320);
  }

  // ─── Mobile Sheet ───
  let sheet = null;
  let overlay = null;

  function ensureSheet() {
    if (sheet) return;

    overlay = document.createElement('div');
    overlay.className = 'tooltip-overlay';
    overlay.addEventListener('click', closeSheet);
    document.body.appendChild(overlay);

    sheet = document.createElement('div');
    sheet.className = 'prod-sheet';
    document.body.appendChild(sheet);
  }

  function openSheet(product) {
    ensureSheet();

    sheet.innerHTML = `<div class="sheet-handle"></div>${buildContent(product)}`;

    overlay.classList.add('active');
    requestAnimationFrame(() => {
      overlay.classList.add('visible');
      sheet.classList.add('visible');
    });

    document.body.style.overflow = 'hidden';
  }

  function closeSheet() {
    if (!sheet) return;
    overlay.classList.remove('visible');
    sheet.classList.remove('visible');
    document.body.style.overflow = '';
    setTimeout(() => overlay.classList.remove('active'), 300);
  }

  // ─── Bind to product cards ───
  function bindCard(card, product) {
    const isMobile = () => window.innerWidth <= 768;

    // Desktop: hover
    card.addEventListener('mouseenter', () => {
      if (!isMobile()) showTooltip(card, product);
    });
    card.addEventListener('mouseleave', () => {
      if (!isMobile()) hideTooltip();
    });

    // Tooltip: stay visible when hovering tooltip itself
    tooltip.addEventListener('mouseenter', () => clearTimeout(hideTimer));
    tooltip.addEventListener('mouseleave', () => hideTooltip());
    tooltip.addEventListener('pointerdown', () => clearTimeout(hideTimer));

    // Mobile: tap
    card.addEventListener('click', () => {
      if (isMobile()) openSheet(product);
    });

    // Keyboard
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (isMobile()) openSheet(product);
        else showTooltip(card, product);
      }
    });
  }

  // Expose for product-cards.js
  window.HardexTooltip = { bindCard };

  // Close sheet on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hideTooltip();
      closeSheet();
    }
  });

})();
// ═══════════════════════════════════════════════════════════════════
// PRODUCT-CARDS.JS — Renders products from products-data.js
// Populates: #featured-products (homepage) · #all-products-grid (products page)
// ═══════════════════════════════════════════════════════════════════

(function () {
  'use strict';

  function init() {
    if (typeof PRODUCTS === 'undefined') {
      console.warn('Hardex: PRODUCTS not loaded. Check products-data.js.');
      return;
    }

    renderFeatured();
    renderAllProducts();
  }

  // ─── Homepage: Featured stack ───
  function renderFeatured() {
    const container = document.getElementById('featured-products');
    if (!container) return;

    const featured = PRODUCTS.filter(p => p.featured);
    if (!featured.length) {
      container.innerHTML = '<p style="color:rgba(255,255,255,0.3);font-size:13px">No featured products yet.</p>';
      return;
    }

    featured.forEach((product, i) => {
      const card = document.createElement('div');
      card.className = `feat-card rv${i === 0 ? ' primary' : ''}`;
      card.innerHTML = `
        <div class="feat-card-icon">${product.icon || '🧪'}</div>
        <div class="feat-card-info">
          <div class="feat-card-name">${product.name}</div>
          <div class="feat-card-cat">${product.category} · ${product.subcategory}</div>
        </div>
      `;
      container.appendChild(card);

      if (window.HardexTooltip) {
        window.HardexTooltip.bindCard(card, product);
      }
    });
  }

  // ─── Products page: Full grid by category ───
  function renderAllProducts() {
    const container = document.getElementById('all-products-grid');
    if (!container) return;

    // Group by category
    const categories = {};
    PRODUCTS.forEach(product => {
      if (!categories[product.category]) {
        categories[product.category] = [];
      }
      categories[product.category].push(product);
    });

    if (!Object.keys(categories).length) {
      container.innerHTML = '<p style="color:var(--muted);padding:40px">No products yet. Add products to products-data.js.</p>';
      return;
    }

    Object.entries(categories).forEach(([catName, products]) => {
      const group = document.createElement('div');
      group.className = 'cat-group rv';

      group.innerHTML = `
        <div class="cat-header">
          <span class="cat-name">${catName}</span>
          <span class="cat-count">${products.length} product${products.length !== 1 ? 's' : ''}</span>
        </div>
        <div class="cat-grid" id="cat-${slug(catName)}"></div>
      `;

      container.appendChild(group);

      const grid = group.querySelector('.cat-grid');
      products.forEach(product => {
        const card = buildProductCard(product);
        grid.appendChild(card);

        if (window.HardexTooltip) {
          window.HardexTooltip.bindCard(card, product);
        }
      });
    });
  }

  function buildProductCard(product) {
    const card = document.createElement('div');
    card.className = 'prod-card';
    card.id = `product-${product.id}`;

    const hasTds = !!product.tds;
    const tdsBadge = hasTds
      ? `<span style="font-family:var(--font-mono);font-size:9px;letter-spacing:0.08em;color:var(--teal);background:rgba(0,188,212,0.1);padding:3px 7px;border-radius:100px">TDS ✓</span>`
      : '';

    card.innerHTML = `
      <span class="prod-card-icon">${product.icon || '🧪'}</span>
      <div class="prod-card-name">${product.name}</div>
      <div class="prod-card-sub">${product.subcategory}</div>
      <div class="prod-card-desc">${product.shortDesc}</div>
      <div class="prod-card-foot">
        <span class="prod-card-cov">${product.coverage}</span>
        <span class="prod-card-arrow">→</span>
      </div>
      ${tdsBadge ? `<div style="margin-top:10px">${tdsBadge}</div>` : ''}
    `;

    return card;
  }

  function slug(str) {
    return str.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  }

  // Wait for DOM + data
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
// ═══════════════════════════════════════════════════════════════════
// MAIN.JS — Hardex India
// Handles: Navbar, Mobile menu, Scroll reveal, Trust bar, Forms
// ═══════════════════════════════════════════════════════════════════

(function () {
  'use strict';

  /* ── NAVBAR SCROLL ─────────────────────────────────────────────── */
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  /* ── MOBILE MENU TOGGLE ────────────────────────────────────────── */
  const toggle  = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-links');

  if (toggle && navList) {
    toggle.addEventListener('click', () => {
      const open = navList.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });

    navList.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navList.classList.remove('open');
        toggle.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target)) {
        navList.classList.remove('open');
        toggle.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  /* ── TRUST BAR — Duplicate items for seamless loop ────────────── */
  const trust = document.querySelector('.trust');
  if (trust) {
    const items = Array.from(trust.children);
    const inner = document.createElement('div');
    inner.className = 'trust-inner';
    items.forEach(item => inner.appendChild(item));
    items.forEach(item => {
      const clone = item.cloneNode(true);
      inner.appendChild(clone);
    });
    trust.appendChild(inner);
  }

  /* ── SCROLL REVEAL ─────────────────────────────────────────────── */
  function initScrollReveal() {
    const els = document.querySelectorAll('.rv');
    if (!els.length) return;

    const reveal = (el) => el.classList.add('visible');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          reveal(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -20px 0px' });

    els.forEach(el => {
      const rect = el.getBoundingClientRect();
      // Already in viewport on load — reveal immediately, no observer needed
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        reveal(el);
      } else {
        observer.observe(el);
      }
    });

    // Safety net: force-reveal anything still hidden after 1s
    setTimeout(() => {
      document.querySelectorAll('.rv:not(.visible)').forEach(reveal);
    }, 1000);
  }

  /* ── CONTACT FORM ──────────────────────────────────────────────── */
  function initForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn  = form.querySelector('.btn-submit');
      const orig = btn.textContent;

      btn.textContent = 'Sending…';
      btn.disabled    = true;

      setTimeout(() => {
        btn.textContent     = '✓ Message Sent';
        btn.style.background = '#4CAF50';
        setTimeout(() => {
          btn.textContent     = orig;
          btn.style.background = '';
          btn.disabled        = false;
          form.reset();
        }, 3000);
      }, 1200);
    });
  }

  /* ── SMOOTH SCROLL ─────────────────────────────────────────────── */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const id     = a.getAttribute('href').slice(1);
        const target = document.getElementById(id);
        if (!target) return;
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }

  /* ── HERO WORD STAGGER ─────────────────────────────────────────── */
  function animateHero() {
    const h1 = document.querySelector('.hero-h1');
    if (!h1) return;

    const words = h1.querySelectorAll('span');
    words.forEach((w, i) => {
      w.style.opacity    = '0';
      w.style.transform  = 'translateY(20px)';
      w.style.transition = `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.09}s,
                             transform 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.09}s`;
    });

    requestAnimationFrame(() => {
      setTimeout(() => {
        words.forEach(w => {
          w.style.opacity   = '1';
          w.style.transform = 'translateY(0)';
        });
        const heroL = document.querySelector('.hero-l.rv');
        if (heroL) heroL.classList.add('visible');
      }, 120);
    });
  }

  /* ── RUN ───────────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initForm();
    initSmoothScroll();
    animateHero();
  });

})();
