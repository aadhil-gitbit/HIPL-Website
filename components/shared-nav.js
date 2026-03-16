(function () {
  'use strict';

  const navRoot = document.getElementById('shared-nav');
  if (!navRoot) return;

  if (!document.getElementById('shared-nav-style')) {
    const style = document.createElement('style');
    style.id = 'shared-nav-style';
    style.textContent = `
      .shared-nav{position:fixed;top:0;left:0;right:0;z-index:1000;height:68px;display:flex;align-items:center;justify-content:space-between;padding:0 24px;background:rgba(13,13,13,.96);backdrop-filter:blur(10px);box-shadow:0 1px 0 rgba(255,255,255,.08)}
      .shared-nav .nav-logo{display:flex;flex-direction:column;line-height:1;gap:2px;color:#fff;text-decoration:none}
      .shared-nav .logo-word{font-family:'Bebas Neue',sans-serif;font-size:28px;letter-spacing:.04em;color:#fff}
      .shared-nav .logo-word em{font-style:normal;color:#00BCD4}
      .shared-nav .logo-sub{font-family:'DM Mono',monospace;font-size:9px;letter-spacing:.12em;color:rgba(255,255,255,.35);text-transform:uppercase}
      .shared-nav-links{display:flex;align-items:center;gap:24px;list-style:none;margin:0;padding:0}
      .shared-nav-links a{font-family:'DM Sans',sans-serif;font-size:13px;text-transform:uppercase;letter-spacing:.05em;color:rgba(255,255,255,.65);text-decoration:none}
      .shared-nav-links a.active,.shared-nav-links a:hover{color:#fff}
      .shared-nav-links a.nav-cta{background:#00BCD4;color:#0d0d0d;padding:9px 18px;border-radius:6px;font-weight:700}
      .shared-nav-toggle{display:none;background:none;border:none;color:#fff;font-size:24px;line-height:1}
      body{padding-top:68px}
      @media (max-width: 900px){
        .shared-nav-toggle{display:block}
        .shared-nav-links{position:absolute;top:68px;left:0;right:0;background:#0d0d0d;display:none;flex-direction:column;padding:16px}
        .shared-nav-links.open{display:flex}
      }
    `;
    document.head.appendChild(style);
  }

  navRoot.innerHTML = `
    <nav class="shared-nav" id="global-nav" aria-label="Main navigation">
      <a href="index.html" class="nav-logo">
        <div class="logo-word"><em>hard</em>ex</div>
        <div class="logo-sub">Green Chemistry · India</div>
      </a>
      <button class="shared-nav-toggle" id="shared-nav-toggle" aria-expanded="false" aria-label="Toggle navigation">☰</button>
      <ul class="shared-nav-links" id="shared-nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="solutions.html">Solutions</a></li>
        <li><a href="products.html">Products</a></li>
        <li><a href="dealers.html">Dealers</a></li>
        <li><a href="downloads.html">Downloads</a></li>
        <li><a href="contact.html" class="nav-cta">Get Quote</a></li>
      </ul>
    </nav>
  `;

  const toggle = document.getElementById('shared-nav-toggle');
  const links = document.getElementById('shared-nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const file = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  links?.querySelectorAll('a').forEach((a) => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (href === file || (file === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();
