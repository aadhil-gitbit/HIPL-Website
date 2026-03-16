(function () {
  const NAV_CONTAINER_ID = 'shared-nav';

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      if ([...document.scripts].some((s) => s.src && s.src.includes(src))) {
        resolve();
        return;
      }
      const script = document.createElement('script');
      script.src = src;
      script.defer = true;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  async function ensureDataLoaded() {
    const loaders = [];
    if (typeof SITE_CONFIG === 'undefined' && typeof window.SITE_CONFIG === 'undefined') loaders.push(loadScript('site-config.js'));
    if (typeof PRODUCTS === 'undefined' && typeof window.PRODUCTS === 'undefined') loaders.push(loadScript('products-data.js'));
    if (loaders.length) {
      try {
        await Promise.all(loaders);
      } catch (error) {
        console.warn('Shared nav: failed to load supporting data files.', error);
      }
    }
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function getNavConfig() {
    const globalConfig = typeof SITE_CONFIG !== 'undefined' ? SITE_CONFIG : window.SITE_CONFIG;
    const fromConfig = globalConfig && globalConfig.navigationConfig;
    if (fromConfig) return fromConfig;

    return {
      homeLink: 'index.html',
      primaryLinks: [{ label: 'About', href: 'about.html' }, { label: 'Downloads', href: 'downloads.html' }, { label: 'Dealers', href: 'dealers.html' }],
      productsCategories: [],
      solutionsLinks: [{ label: 'All Solutions', href: 'solutions.html' }],
      cta: { label: 'Contact', href: 'contact.html' }
    };
  }

  function getProducts() {
    const globalProducts = typeof PRODUCTS !== 'undefined' ? PRODUCTS : window.PRODUCTS;
    return Array.isArray(globalProducts) ? globalProducts : [];
  }

  function currentPath() {
    return (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  }

  function isActiveLink(href) {
    const current = currentPath();
    const clean = (href || '').toLowerCase();
    return clean === current || (current === '' && clean === 'index.html');
  }

  function renderNav() {
    const mount = document.getElementById(NAV_CONTAINER_ID);
    if (!mount) return;

    const navConfig = getNavConfig();
    const products = getProducts();

    const searchItems = products.map((product) => ({
      label: product.name,
      category: product.category,
      href: `product-detail.html?id=${encodeURIComponent(product.id)}`
    }));

    const productsMenu = (navConfig.productsCategories || [])
      .map((item) => `<li><a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a></li>`)
      .join('');

    const solutionsMenu = (navConfig.solutionsLinks || [])
      .map((item) => `<li><a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a></li>`)
      .join('');

    const primaryLinks = (navConfig.primaryLinks || [])
      .map((item) => `<li><a href="${escapeHtml(item.href)}" ${isActiveLink(item.href) ? 'aria-current="page"' : ''}>${escapeHtml(item.label)}</a></li>`)
      .join('');

    mount.innerHTML = `
      <style>
        .shared-nav{position:sticky;top:0;z-index:1200;background:#131313;color:#fff;font-family:'DM Sans',sans-serif}
        .shared-nav__inner{max-width:1240px;margin:0 auto;padding:0 20px;height:72px;display:flex;align-items:center;gap:18px}
        .shared-nav__logo{font-family:'Bebas Neue',sans-serif;font-size:28px;color:#fff;text-decoration:none;letter-spacing:.04em}
        .shared-nav__desktop{display:flex;align-items:center;gap:16px;list-style:none;margin:0;padding:0;flex:1}
        .shared-nav__desktop a,.shared-nav__trigger{color:#fff;text-decoration:none;background:none;border:none;font:inherit;cursor:pointer;display:inline-flex;align-items:center;gap:6px;padding:10px 8px}
        .shared-nav__trigger[aria-expanded="true"]{color:#00e5ff}
        .shared-nav__menu{position:relative}
        .shared-nav__flyout{position:absolute;left:0;top:100%;min-width:240px;background:#1f1f1f;border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:8px;display:none;list-style:none;margin:8px 0 0}
        .shared-nav__menu.open .shared-nav__flyout{display:block}
        .shared-nav__flyout a{display:block;padding:10px;border-radius:6px}
        .shared-nav__flyout a:hover,.shared-nav__flyout a:focus{background:rgba(0,229,255,.12);outline:none}
        .shared-nav__actions{display:flex;align-items:center;gap:10px}
        .shared-nav__search-btn{background:none;border:1px solid rgba(255,255,255,.35);color:#fff;padding:8px 12px;border-radius:999px;cursor:pointer}
        .shared-nav__cta{background:#00bcd4;color:#031214 !important;padding:9px 14px;border-radius:999px;font-weight:700}
        .shared-nav__mobile-toggle{display:none;background:none;border:none;color:#fff;font-size:24px}
        .shared-nav__mobile{display:none;background:#171717;border-top:1px solid rgba(255,255,255,.08);padding:10px 20px 18px}
        .shared-nav__mobile a,.shared-nav__accordion-btn{display:block;width:100%;text-align:left;padding:11px 0;color:#fff;text-decoration:none;background:none;border:none;font:inherit}
        .shared-nav__accordion-panel{display:none;padding-left:12px}
        .shared-nav__accordion.open .shared-nav__accordion-panel{display:block}

        .nav-search-overlay{position:fixed;inset:0;background:rgba(0,0,0,.72);display:none;align-items:flex-start;justify-content:center;z-index:1300;padding-top:10vh}
        .nav-search-overlay.open{display:flex}
        .nav-search{width:min(760px,92vw);background:#fff;color:#1a1a1a;border-radius:12px;padding:14px}
        .nav-search input{width:100%;font-size:16px;padding:12px;border:1px solid #ddd;border-radius:8px}
        .nav-search__results{margin-top:10px;max-height:52vh;overflow:auto}
        .nav-search__item{display:block;padding:10px;border-radius:8px;color:#1a1a1a;text-decoration:none}
        .nav-search__item:hover,.nav-search__item:focus{background:#f3f8fa}
        .nav-search__meta{font-size:12px;opacity:.65}

        @media (max-width: 980px){
          .shared-nav__desktop,.shared-nav__actions .shared-nav__cta{display:none}
          .shared-nav__mobile-toggle{display:block;margin-left:auto}
          .shared-nav__mobile.open{display:block}
        }
      </style>
      <header class="shared-nav" role="banner">
        <div class="shared-nav__inner">
          <a class="shared-nav__logo" href="${escapeHtml(navConfig.homeLink || 'index.html')}">HARDEX</a>
          <ul class="shared-nav__desktop" role="menubar">
            ${primaryLinks}
            <li class="shared-nav__menu" data-menu>
              <button class="shared-nav__trigger" aria-expanded="false" aria-haspopup="true">Products ▾</button>
              <ul class="shared-nav__flyout" role="menu">${productsMenu}</ul>
            </li>
            <li class="shared-nav__menu" data-menu>
              <button class="shared-nav__trigger" aria-expanded="false" aria-haspopup="true">Solutions ▾</button>
              <ul class="shared-nav__flyout" role="menu">${solutionsMenu}</ul>
            </li>
          </ul>
          <div class="shared-nav__actions">
            <button class="shared-nav__search-btn" type="button">Search</button>
            <a href="${escapeHtml(navConfig.cta && navConfig.cta.href || 'contact.html')}" class="shared-nav__cta">${escapeHtml(navConfig.cta && navConfig.cta.label || 'Contact')}</a>
          </div>
          <button class="shared-nav__mobile-toggle" type="button" aria-expanded="false" aria-controls="shared-nav-mobile">☰</button>
        </div>
        <nav id="shared-nav-mobile" class="shared-nav__mobile" aria-label="Mobile navigation">
          ${(navConfig.primaryLinks || []).map((item) => `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`).join('')}
          <div class="shared-nav__accordion" data-accordion>
            <button class="shared-nav__accordion-btn" type="button" aria-expanded="false">Products</button>
            <div class="shared-nav__accordion-panel">${(navConfig.productsCategories || []).map((item) => `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`).join('')}</div>
          </div>
          <div class="shared-nav__accordion" data-accordion>
            <button class="shared-nav__accordion-btn" type="button" aria-expanded="false">Solutions</button>
            <div class="shared-nav__accordion-panel">${(navConfig.solutionsLinks || []).map((item) => `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`).join('')}</div>
          </div>
          <a href="${escapeHtml(navConfig.cta && navConfig.cta.href || 'contact.html')}" class="shared-nav__cta" style="display:inline-block;margin-top:8px">${escapeHtml(navConfig.cta && navConfig.cta.label || 'Contact')}</a>
        </nav>
      </header>
      <div class="nav-search-overlay" id="nav-search-overlay" aria-hidden="true">
        <div class="nav-search" role="dialog" aria-modal="true" aria-label="Search products">
          <input id="nav-search-input" type="search" placeholder="Search products by name or category" autocomplete="off" />
          <div class="nav-search__results" id="nav-search-results"></div>
        </div>
      </div>
    `;

    wireDesktopMenus(mount);
    wireMobileMenu(mount);
    wireSearch(mount, searchItems);
  }

  function wireDesktopMenus(root) {
    const menus = root.querySelectorAll('[data-menu]');
    let openMenu = null;

    function closeMenu(menu) {
      if (!menu) return;
      menu.classList.remove('open');
      const trigger = menu.querySelector('.shared-nav__trigger');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
      openMenu = null;
    }

    function open(menu) {
      if (openMenu && openMenu !== menu) closeMenu(openMenu);
      menu.classList.add('open');
      const trigger = menu.querySelector('.shared-nav__trigger');
      if (trigger) trigger.setAttribute('aria-expanded', 'true');
      openMenu = menu;
      const firstItem = menu.querySelector('.shared-nav__flyout a');
      if (firstItem) firstItem.focus();
    }

    menus.forEach((menu) => {
      const trigger = menu.querySelector('.shared-nav__trigger');
      const flyout = menu.querySelector('.shared-nav__flyout');
      if (!trigger || !flyout) return;

      trigger.addEventListener('click', () => {
        const isOpen = menu.classList.contains('open');
        if (isOpen) closeMenu(menu);
        else open(menu);
      });

      trigger.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowDown') {
          event.preventDefault();
          open(menu);
        }
        if (event.key === 'Escape') {
          closeMenu(menu);
          trigger.focus();
        }
      });

      flyout.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          event.preventDefault();
          closeMenu(menu);
          trigger.focus();
        }
      });
    });

    document.addEventListener('click', (event) => {
      if (openMenu && !openMenu.contains(event.target)) closeMenu(openMenu);
    });
  }

  function wireMobileMenu(root) {
    const toggle = root.querySelector('.shared-nav__mobile-toggle');
    const mobile = root.querySelector('.shared-nav__mobile');
    if (toggle && mobile) {
      toggle.addEventListener('click', () => {
        const isOpen = mobile.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(isOpen));
      });
    }

    root.querySelectorAll('[data-accordion]').forEach((accordion) => {
      const button = accordion.querySelector('.shared-nav__accordion-btn');
      if (!button) return;
      button.addEventListener('click', () => {
        const isOpen = accordion.classList.toggle('open');
        button.setAttribute('aria-expanded', String(isOpen));
      });
    });
  }

  function wireSearch(root, items) {
    const openBtn = root.querySelector('.shared-nav__search-btn');
    const overlay = root.querySelector('#nav-search-overlay');
    const input = root.querySelector('#nav-search-input');
    const results = root.querySelector('#nav-search-results');
    if (!openBtn || !overlay || !input || !results) return;

    function renderResults(list) {
      if (!list.length) {
        results.innerHTML = '<p style="padding:10px 4px;color:#555">No products found.</p>';
        return;
      }
      results.innerHTML = list
        .map((item) => `<a class="nav-search__item" href="${escapeHtml(item.href)}"><strong>${escapeHtml(item.label)}</strong><div class="nav-search__meta">${escapeHtml(item.category || '')}</div></a>`)
        .join('');
    }

    function openSearch() {
      overlay.classList.add('open');
      overlay.setAttribute('aria-hidden', 'false');
      renderResults(items);
      requestAnimationFrame(() => input.focus());
    }

    function closeSearch() {
      overlay.classList.remove('open');
      overlay.setAttribute('aria-hidden', 'true');
      openBtn.focus();
    }

    openBtn.addEventListener('click', openSearch);
    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      const filtered = q
        ? items.filter((item) => item.label.toLowerCase().includes(q) || (item.category || '').toLowerCase().includes(q))
        : items;
      renderResults(filtered);
    });

    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) closeSearch();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && overlay.classList.contains('open')) closeSearch();
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        openSearch();
      }
    });
  }

  async function init() {
    await ensureDataLoaded();
    renderNav();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
