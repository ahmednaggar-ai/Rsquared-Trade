/* =================================================================
   MB CRUSHER CATALOGUE
   One page for every product line. Reads window.MB_CRUSHER
   (assets/js/data/mbcrusher.js) and renders:
     mbcrusher.html                       overview of all product lines
     mbcrusher.html?type=<category id>    that line's products
   Switching tabs updates the URL without reloading, so links can be
   shared and the browser back button works.
   ================================================================= */
(function () {
  'use strict';

  var DATA = window.MB_CRUSHER;
  if (!DATA) return;

  var CATS = DATA.categories;
  var CARRIERS = DATA.carriers;
  var QUOTE_URL = 'index.html?brand=' + encodeURIComponent('MB Crusher');

  var $ = function (sel) { return document.querySelector(sel); };
  var el = {
    crumbs: $('[data-crumbs]'),
    eyebrow: $('[data-hero-eyebrow]'),
    title: $('[data-hero-title]'),
    lead: $('[data-hero-lead]'),
    stats: $('[data-hero-stats]'),
    visual: $('[data-hero-visual]'),
    tabs: $('[data-tabs]'),
    toolbar: $('[data-toolbar]'),
    grid: $('[data-grid]'),
    video: $('[data-video]')
  };

  var esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  var byId = function (id) {
    for (var i = 0; i < CATS.length; i++) if (CATS[i].id === id) return CATS[i];
    return null;
  };
  var urlFor = function (id) { return id ? 'mbcrusher.html?type=' + encodeURIComponent(id) : 'mbcrusher.html'; };
  var fmtT = function (n) { return String(n).replace(/\.0+$/, ''); };
  var rangeText = function (c) {
    return c.max == null ? '≥ ' + fmtT(c.min) + ' t' : fmtT(c.min) + '–' + fmtT(c.max) + ' t';
  };
  var total = CATS.reduce(function (n, c) { return n + c.products.length; }, 0);

  /* --------------------------- state --------------------------- */
  var state = { cat: null, carrier: 'any', weight: '', fits: 'all' };

  var readUrl = function () {
    var p = new URLSearchParams(location.search);
    var c = byId(p.get('type'));
    state.cat = c ? c.id : null;
    state.carrier = 'any';
    state.weight = '';
    state.fits = 'all';
  };

  /* ---------------------------- tabs ---------------------------- */
  var renderTabs = function () {
    var html = '<a class="catalog-tab' + (state.cat ? '' : ' is-active') + '" href="' + urlFor(null) + '" data-cat=""' +
      (state.cat ? '' : ' aria-current="page"') + '>Overview</a>';
    CATS.forEach(function (c) {
      var on = c.id === state.cat;
      html += '<a class="catalog-tab' + (on ? ' is-active' : '') + '" href="' + urlFor(c.id) + '" data-cat="' + c.id + '"' +
        (on ? ' aria-current="page"' : '') + '>' + esc(c.name) + ' <span>' + c.products.length + '</span></a>';
    });
    el.tabs.innerHTML = html;
    var active = el.tabs.querySelector('.is-active');
    if (active && active.scrollIntoView) {
      // keep the active tab visible in the horizontally scrolling bar (mobile)
      var list = el.tabs;
      list.scrollLeft = active.offsetLeft - (list.clientWidth - active.offsetWidth) / 2;
    }
  };

  /* ---------------------------- hero ---------------------------- */
  var renderHero = function () {
    var c = byId(state.cat);
    var crumbs = '<li><a href="index.html">Home</a></li><li><a href="index.html#brand">Brands</a></li>';
    if (c) {
      crumbs += '<li><a href="' + urlFor(null) + '" data-cat="">MB Crusher</a></li><li aria-current="page">' + esc(c.name) + '</li>';
      el.eyebrow.textContent = c.series ? 'MB Crusher · ' + c.series + ' series' : 'MB Crusher';
      el.title.textContent = c.name;
      el.lead.textContent = c.summary;
      el.stats.innerHTML = stat(c.products.length, c.products.length === 1 ? 'Model' : 'Models') +
        (c.products[0].carriers ? stat(carrierSpan(c), 'Carrier range') : stat(countFits(c), 'Product lines served'));
      el.visual.innerHTML = '<img class="catalog-hero__product" src="' + esc(c.icon) + '" alt="" width="200" height="200">';
      document.title = c.name + ' – MB Crusher – Rsquared Trade';
    } else {
      crumbs += '<li aria-current="page">MB Crusher</li>';
      el.eyebrow.textContent = 'Italy · Represented in Egypt by Rsquared Trade';
      el.title.textContent = 'MB Crusher';
      el.lead.textContent = 'For over 20 years MB has offered the largest line of patented crusher buckets and attachments for excavators, skid loaders and backhoes of all sizes.';
      el.stats.innerHTML = stat(total, 'Models') + stat(CATS.length, 'Product lines') + stat('7', 'International subsidiaries');
      el.visual.innerHTML = '<span class="catalog-hero__logo"><img src="assets/images/partners/mb-crusher.png" alt="MB Crusher" width="754" height="271"></span>';
      document.title = 'MB Crusher – Rsquared Trade';
    }
    el.crumbs.innerHTML = crumbs;
  };
  var stat = function (v, label) {
    return '<div class="catalog-stat"><strong>' + esc(v) + '</strong><span>' + esc(label) + '</span></div>';
  };
  var carrierSpan = function (c) {
    var lo = Infinity, hi = 0;
    c.products.forEach(function (p) {
      (p.carriers || []).forEach(function (r) {
        lo = Math.min(lo, r.min);
        hi = Math.max(hi, r.max == null ? r.min : r.max);
      });
    });
    return lo === Infinity ? '–' : fmtT(lo) + '–' + fmtT(hi) + ' t';
  };
  var countFits = function (c) {
    var s = {};
    c.products.forEach(function (p) { (p.fits || []).forEach(function (f) { if (f !== 'all') s[f] = 1; }); });
    return Object.keys(s).length;
  };

  /* --------------------------- overview --------------------------- */
  var renderOverview = function () {
    el.toolbar.innerHTML = '<p class="catalog__count">' + CATS.length + ' product lines · ' + total + ' models</p>';
    el.grid.className = 'catalog__grid catalog__grid--lines';
    el.grid.innerHTML = CATS.map(function (c, i) {
      return '<a class="line-card" href="' + urlFor(c.id) + '" data-cat="' + c.id + '" style="--i:' + i + '">' +
        '<div class="line-card__media"><img src="' + esc(c.icon) + '" alt="" width="200" height="200" loading="lazy"></div>' +
        '<div class="line-card__body">' +
          (c.series ? '<p class="line-card__series">' + esc(c.series) + ' series</p>' : '<p class="line-card__series">Add-ons &amp; kits</p>') +
          '<h2 class="line-card__name">' + esc(c.name) + '</h2>' +
          '<p class="line-card__summary">' + esc(c.summary) + '</p>' +
          '<span class="line-card__foot"><span>' + c.products.length + ' models</span><span class="line-card__cta">View range <i class="fas fa-arrow-right" aria-hidden="true"></i></span></span>' +
        '</div></a>';
    }).join('');
    el.video.hidden = true;
    el.video.innerHTML = '';
  };

  /* --------------------------- category --------------------------- */
  var matches = function (p) {
    if (p.fits) {
      return state.fits === 'all' || p.fits.indexOf('all') !== -1 || p.fits.indexOf(state.fits) !== -1;
    }
    var w = parseFloat(state.weight);
    var list = (p.carriers || []).filter(function (c) { return state.carrier === 'any' || c.type === state.carrier; });
    if (!list.length) return state.carrier === 'any' && isNaN(w);
    if (isNaN(w)) return true;
    return list.some(function (c) { return w >= c.min && (c.max == null || w <= c.max); });
  };

  var renderToolbar = function (c) {
    if (c.products[0] && c.products[0].fits) {
      // accessories: filter by the product line they fit
      var opts = [['all', 'All']].concat(CATS.filter(function (x) { return x.id !== 'accessories'; }).map(function (x) { return [x.id, x.name]; }));
      el.toolbar.innerHTML =
        '<p class="catalog__count" data-count></p>' +
        '<div class="catalog-filter" role="group" aria-label="Show accessories for">' +
          '<span class="catalog-filter__label">Works with</span>' +
          opts.map(function (o) {
            return '<button type="button" class="catalog-chip' + (state.fits === o[0] ? ' is-active' : '') + '" data-fits="' + o[0] + '" aria-pressed="' + (state.fits === o[0]) + '">' + esc(o[1]) + '</button>';
          }).join('') +
        '</div>';
      return;
    }
    // attachments: "does it fit my machine?" filter
    var types = {};
    c.products.forEach(function (p) { (p.carriers || []).forEach(function (r) { types[r.type] = 1; }); });
    var typeOpts = '<option value="any">Any machine</option>' + Object.keys(CARRIERS).filter(function (t) { return types[t]; }).map(function (t) {
      return '<option value="' + t + '"' + (state.carrier === t ? ' selected' : '') + '>' + esc(CARRIERS[t].label) + '</option>';
    }).join('');
    el.toolbar.innerHTML =
      '<p class="catalog__count" data-count></p>' +
      '<form class="catalog-fit" data-fit-form>' +
        '<span class="catalog-filter__label">Find models for my</span>' +
        '<label class="visually-hidden" for="fit-type">Machine type</label>' +
        '<select id="fit-type" data-fit-type>' + typeOpts + '</select>' +
        '<label class="catalog-fit__weight"><span class="visually-hidden">Machine weight in tonnes</span>' +
          '<input type="number" inputmode="decimal" min="0" step="0.5" placeholder="Weight" value="' + esc(state.weight) + '" data-fit-weight>' +
          '<span aria-hidden="true">t</span></label>' +
        '<button type="button" class="catalog-fit__reset" data-fit-reset' + (state.weight || state.carrier !== 'any' ? '' : ' hidden') + '>Clear</button>' +
      '</form>';
  };

  var card = function (p, c, i) {
    var quote = QUOTE_URL + '&product=' + encodeURIComponent(p.name) + '#contact';
    var specs = '';
    if (p.carriers) {
      specs = '<ul class="mb-card__carriers">' + p.carriers.map(function (r) {
        var t = CARRIERS[r.type] || { label: r.type, icon: '' };
        return '<li><img src="' + esc(t.icon) + '" alt="" width="36" height="36"><span class="mb-card__carrier">' + esc(t.label) + '</span><span class="mb-card__range">' + rangeText(r) + '</span></li>';
      }).join('') + '</ul>';
    } else if (p.fits) {
      var names = p.fits.indexOf('all') !== -1 ? ['All MB units'] : p.fits.map(function (f) { var x = byId(f); return x ? x.name : f; });
      specs = '<p class="mb-card__fits"><span>Works with</span> ' + names.map(esc).join(', ') + '</p>';
    }
    return '<article class="mb-card" id="' + esc(p.id) + '" style="--i:' + Math.min(i, 12) + '">' +
      '<div class="mb-card__media"><img src="' + esc(p.image) + '" alt="' + esc(p.name) + '" width="360" height="360" loading="lazy" decoding="async"></div>' +
      '<div class="mb-card__body">' +
        (p.group ? '<p class="mb-card__group">' + esc(p.group) + '</p>' : '') +
        '<h3 class="mb-card__name">' + esc(p.name) + '</h3>' +
        (p.tagline ? '<p class="mb-card__tagline">' + esc(p.tagline) + '</p>' : '') +
        specs +
      '</div>' +
      '<a class="mb-card__cta" href="' + quote + '">Request a quote <i class="fas fa-arrow-right" aria-hidden="true"></i></a>' +
    '</article>';
  };

  var renderProducts = function () {
    var c = byId(state.cat);
    if (!c) return; // overview is showing (e.g. a late input event after going back)
    var list = c.products.filter(matches);
    var count = el.toolbar.querySelector('[data-count]');
    if (count) {
      count.textContent = list.length === c.products.length
        ? c.products.length + ' models'
        : list.length + ' of ' + c.products.length + ' models';
    }
    el.grid.className = 'catalog__grid catalog__grid--products';
    el.grid.innerHTML = list.length ? list.map(function (p, i) { return card(p, c, i); }).join('') :
      '<div class="catalog__empty"><p><strong>No models match that machine.</strong> Try another weight, or ask us – we can help you find the right attachment.</p>' +
      '<a class="rs-btn rs-btn--accent rs-btn--sm" href="' + QUOTE_URL + '#contact">Ask our team</a></div>';
  };

  var renderVideo = function (c) {
    if (c.video) {
      el.video.innerHTML = '<h2 class="catalog__video-title">See the ' + esc(c.name.toLowerCase()) + ' at work</h2>' +
        '<video controls preload="none" playsinline><source src="' + esc(c.video) + '" type="video/mp4"></video>';
      el.video.hidden = false;
    } else {
      el.video.hidden = true;
      el.video.innerHTML = '';
    }
  };

  /* ---------------------------- render ---------------------------- */
  var render = function () {
    renderTabs();
    renderHero();
    if (state.cat) {
      var c = byId(state.cat);
      renderToolbar(c);
      renderProducts();
      renderVideo(c);
    } else {
      renderOverview();
    }
  };

  var go = function (id, push) {
    var url = urlFor(id);
    if (push) history.pushState({ cat: id }, '', url);
    readUrl();
    render();
    // bring the products into view when switching from further down the page
    var hero = document.querySelector('.catalog-hero');
    var top = hero ? hero.offsetTop + hero.offsetHeight - 66 : 0; // 66 ≈ height of the scrolled navbar
    if (push && window.pageYOffset > top) {
      window.scrollTo({ top: top, behavior: 'smooth' });
    }
  };

  /* ---------------------------- events ---------------------------- */
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[data-cat]');
    if (a && !e.metaKey && !e.ctrlKey && !e.shiftKey && e.button === 0) {
      e.preventDefault();
      go(a.getAttribute('data-cat') || null, true);
      return;
    }
    var chip = e.target.closest('[data-fits]');
    if (chip) {
      state.fits = chip.getAttribute('data-fits');
      Array.prototype.forEach.call(el.toolbar.querySelectorAll('[data-fits]'), function (b) {
        var on = b === chip;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', String(on));
      });
      renderProducts();
      return;
    }
    if (e.target.closest('[data-fit-reset]')) {
      state.weight = '';
      state.carrier = 'any';
      renderToolbar(byId(state.cat));
      renderProducts();
    }
  });

  var onFitChange = function () {
    var w = el.toolbar.querySelector('[data-fit-weight]');
    var t = el.toolbar.querySelector('[data-fit-type]');
    if (!w || !t) return;
    state.weight = w.value;
    state.carrier = t.value;
    var reset = el.toolbar.querySelector('[data-fit-reset]');
    if (reset) reset.hidden = !(state.weight || state.carrier !== 'any');
    renderProducts();
  };
  el.toolbar.addEventListener('input', onFitChange);
  el.toolbar.addEventListener('change', onFitChange);
  el.toolbar.addEventListener('submit', function (e) { e.preventDefault(); });

  window.addEventListener('popstate', function () { readUrl(); render(); });

  /* ----------------------------- start ----------------------------- */
  readUrl();
  render();

  // Deep link to a single product: mbcrusher.html?type=...#product-id
  if (location.hash.length > 1) {
    var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) {
      target.classList.add('is-highlighted');
      setTimeout(function () { target.scrollIntoView({ block: 'center' }); }, 50);
    }
  }
})();
