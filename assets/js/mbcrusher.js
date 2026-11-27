/* =================================================================
   MB CRUSHER CATALOGUE
   One page for every product line. Reads window.MB_CRUSHER
   (assets/js/data/mbcrusher.js) and renders:
     mbcrusher.html                                   overview of all product lines
     mbcrusher.html?type=<category id>                that line's products
     mbcrusher.html?type=<category id>&model=<id>     one product's details
                                                      (products that have description/specs/gallery)
   Navigation updates the URL without reloading, so links can be shared
   and the browser back button works.
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
  var urlFor = function (id, model) {
    if (!id) return 'mbcrusher.html';
    return 'mbcrusher.html?type=' + encodeURIComponent(id) + (model ? '&model=' + encodeURIComponent(model) : '');
  };
  var hasDetails = function (p) { return !!(p && (p.description || p.specs || p.gallery)); };
  var productOf = function (c, id) {
    if (!c || !id) return null;
    for (var i = 0; i < c.products.length; i++) if (c.products[i].id === id) return c.products[i];
    return null;
  };
  var quoteUrl = function (p) { return QUOTE_URL + (p ? '&product=' + encodeURIComponent(p.name) : '') + '#contact'; };
  var fmtT = function (n) { return String(n).replace(/\.0+$/, ''); };
  var rangeText = function (c) {
    return c.max == null ? '≥ ' + fmtT(c.min) + ' t' : fmtT(c.min) + '–' + fmtT(c.max) + ' t';
  };
  var total = CATS.reduce(function (n, c) { return n + c.products.length; }, 0);

  /* --------------------------- state --------------------------- */
  var state = { cat: null, model: null, carrier: 'any', weight: '', fits: 'all' };

  var readUrl = function () {
    var p = new URLSearchParams(location.search);
    var c = byId(p.get('type'));
    var m = productOf(c, p.get('model'));
    state.cat = c ? c.id : null;
    state.model = hasDetails(m) ? m.id : null;
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
    var m = productOf(c, state.model);
    var crumbs = '<li><a href="index.html">Home</a></li><li><a href="index.html#brand">Brands</a></li>';
    if (m) {
      crumbs += '<li><a href="' + urlFor(null) + '" data-cat="">MB Crusher</a></li>' +
        '<li><a href="' + urlFor(c.id) + '" data-cat="' + c.id + '">' + esc(c.name) + '</a></li>' +
        '<li aria-current="page">' + esc(m.name) + '</li>';
      el.eyebrow.textContent = 'MB Crusher · ' + c.name;
      el.title.textContent = m.name;
      el.lead.textContent = m.tagline || c.summary;
      var spec = function (label) {
        for (var i = 0; i < (m.specs || []).length; i++) if (m.specs[i].label.toLowerCase() === label) return m.specs[i].value;
        return null;
      };
      el.stats.innerHTML =
        (spec('weight') ? stat(spec('weight'), 'Weight') : '') +
        (spec('load capacity') ? stat(spec('load capacity'), 'Load capacity') : '') +
        (m.carriers && m.carriers.length ? stat(rangeText(m.carriers[0]), (CARRIERS[m.carriers[0].type] || {}).label || 'Carrier') : '');
      // product photos have white backgrounds: present them on a white plate
      el.visual.innerHTML = '<span class="catalog-hero__plate"><img src="' + esc(m.image) + '" alt="" width="360" height="360"></span>';
      document.title = m.name + ' – ' + c.name + ' – MB Crusher – Rsquared Trade';
    } else if (c) {
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
    var quote = quoteUrl(p);
    var detail = hasDetails(p);
    var dUrl = urlFor(c.id, p.id);
    var dAttrs = ' href="' + dUrl + '" data-cat="' + c.id + '" data-model="' + esc(p.id) + '"';
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
    var img = '<img src="' + esc(p.image) + '" alt="' + esc(p.name) + '" width="360" height="360" loading="lazy" decoding="async">';
    var name = esc(p.name);
    return '<article class="mb-card' + (detail ? ' has-details' : '') + '" id="' + esc(p.id) + '" style="--i:' + Math.min(i, 12) + '">' +
      (detail ? '<a class="mb-card__media"' + dAttrs + ' tabindex="-1" aria-hidden="true">' + img + '</a>' : '<div class="mb-card__media">' + img + '</div>') +
      '<div class="mb-card__body">' +
        (p.group ? '<p class="mb-card__group">' + esc(p.group) + '</p>' : '') +
        '<h3 class="mb-card__name">' + (detail ? '<a' + dAttrs + '>' + name + '</a>' : name) + '</h3>' +
        (p.tagline ? '<p class="mb-card__tagline">' + esc(p.tagline) + '</p>' : '') +
        specs +
      '</div>' +
      (detail
        ? '<div class="mb-card__actions"><a class="mb-card__cta mb-card__cta--details"' + dAttrs + '>Details &amp; specs <i class="fas fa-arrow-right" aria-hidden="true"></i></a>' +
          '<a class="mb-card__cta mb-card__cta--quote" href="' + quote + '">Quote</a></div>'
        : '<a class="mb-card__cta" href="' + quote + '">Request a quote <i class="fas fa-arrow-right" aria-hidden="true"></i></a>') +
    '</article>';
  };

  /* ---------------------------- detail ---------------------------- */
  var renderDetail = function (c, p) {
    var list = c.products;
    var idx = list.indexOf(p);
    var withDetails = list.filter(hasDetails);
    var di = withDetails.indexOf(p);
    var prev = withDetails[(di - 1 + withDetails.length) % withDetails.length];
    var next = withDetails[(di + 1) % withDetails.length];

    el.toolbar.innerHTML =
      '<a class="catalog-back" href="' + urlFor(c.id) + '" data-cat="' + c.id + '"><i class="fas fa-arrow-left" aria-hidden="true"></i> All ' + esc(c.name.toLowerCase()) + '</a>' +
      '<p class="catalog__count">Model ' + (idx + 1) + ' of ' + list.length + '</p>';

    var shots = [{ src: p.image, product: true }].concat((p.gallery || []).map(function (g) { return { src: g }; }));
    var many = shots.length > 1;
    var slides = shots.map(function (s, i) {
      return '<div class="mb-detail__slide' + (s.product ? ' is-product' : '') + '" role="group" aria-roledescription="slide" aria-label="' + (i + 1) + ' of ' + shots.length + '"' + (i ? ' aria-hidden="true"' : '') + '>' +
        '<img src="' + esc(s.src) + '" alt="' + (i === 0 ? esc(p.name) : esc(p.name) + ' – photo ' + i) + '" width="640" height="640" draggable="false"' + (i ? ' loading="lazy"' : '') + ' decoding="async"></div>';
    }).join('');
    var mainGallery =
      '<div class="mb-detail__main" data-gallery tabindex="0" aria-roledescription="carousel" aria-label="Photos of ' + esc(p.name) + '">' +
        '<div class="mb-detail__track" data-track>' + slides + '</div>' +
        (many
          ? '<button type="button" class="mb-detail__nav mb-detail__nav--prev" data-gal-prev aria-label="Previous photo"><i class="fas fa-chevron-left" aria-hidden="true"></i></button>' +
            '<button type="button" class="mb-detail__nav mb-detail__nav--next" data-gal-next aria-label="Next photo"><i class="fas fa-chevron-right" aria-hidden="true"></i></button>' +
            '<span class="mb-detail__counter" data-gal-counter aria-live="polite">1 / ' + shots.length + '</span>' +
            '<span class="mb-detail__progress" data-gal-progress></span>'
          : '') +
      '</div>';
    var thumbs = many ? '<div class="mb-detail__thumbs" role="group" aria-label="Choose a photo">' + shots.map(function (s, i) {
      return '<button type="button" class="mb-detail__thumb' + (i === 0 ? ' is-active' : '') + (s.product ? ' is-product' : '') + '" data-thumb="' + i + '" aria-label="Show photo ' + (i + 1) + ' of ' + shots.length + '" aria-pressed="' + (i === 0) + '">' +
        '<img src="' + esc(s.src) + '" alt="" width="120" height="120" loading="lazy" decoding="async"></button>';
    }).join('') + '</div>' : '';

    var carriers = p.carriers ? '<ul class="mb-card__carriers mb-detail__carriers">' + p.carriers.map(function (r) {
      var t = CARRIERS[r.type] || { label: r.type, icon: '' };
      return '<li><img src="' + esc(t.icon) + '" alt="" width="36" height="36"><span class="mb-card__carrier">' + esc(t.label) + '</span><span class="mb-card__range">' + rangeText(r) + '</span></li>';
    }).join('') + '</ul>' : '';

    var specs = p.specs && p.specs.length
      ? '<section class="mb-specs" aria-labelledby="mb-specs-title">' +
          '<h2 class="mb-specs__title" id="mb-specs-title">Technical features</h2>' +
          '<dl class="mb-specs__table">' +
            '<div><dt>Model</dt><dd>' + esc(p.name) + '</dd></div>' +
            p.specs.map(function (s) { return '<div><dt>' + esc(s.label) + '</dt><dd>' + esc(s.value) + '</dd></div>'; }).join('') +
          '</dl>' +
          (c.specNote ? '<p class="mb-specs__note"><i class="fas fa-info-circle" aria-hidden="true"></i> ' + esc(c.specNote) + '</p>' : '') +
        '</section>'
      : '';

    // accessories: "It's available for …" repeats what the "Works with" chips already say
    var avail = /\bavailable for\b/i;
    var tagline = p.fits && avail.test(p.tagline || '') ? '' : p.tagline;
    var paragraphs = (p.description || []).filter(function (d) { return !(p.fits && avail.test(d) && d.length < 90); });

    el.grid.className = 'catalog__detail';
    el.grid.innerHTML =
      '<div class="mb-detail">' +
        '<div class="mb-detail__gallery">' +
          mainGallery +
          thumbs +
        '</div>' +
        '<div class="mb-detail__info">' +
          '<p class="mb-detail__eyebrow">' + esc(c.name) + (c.series ? ' · ' + esc(c.series) + ' series' : '') + '</p>' +
          '<h2 class="mb-detail__name">' + esc(p.name) + '</h2>' +
          (tagline ? '<p class="mb-detail__tagline">' + esc(tagline) + '</p>' : '') +
          carriers +
          (p.fits ? '<p class="mb-detail__fits"><span>Works with</span>' +
            (p.fits.indexOf('all') !== -1 ? ['All MB units'] : p.fits.map(function (f) { var x = byId(f); return x ? x.name : f; }))
              .map(function (n) { return '<em>' + esc(n) + '</em>'; }).join('') + '</p>' : '') +
          paragraphs.map(function (d) { return '<p class="mb-detail__text">' + esc(d) + '</p>'; }).join('') +
          (p.uses && p.uses.length ? '<ul class="mb-detail__uses">' + p.uses.map(function (u) { return '<li>' + esc(u) + '</li>'; }).join('') + '</ul>' : '') +
          '<div class="mb-detail__actions">' +
            '<a class="rs-btn rs-btn--accent" href="' + quoteUrl(p) + '">Request a quote <i class="fas fa-arrow-right" aria-hidden="true"></i></a>' +
            '<a class="rs-btn rs-btn--outline" href="tel:+20244875070"><i class="fas fa-phone-alt" aria-hidden="true"></i> +20 2 4487 5070</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
      specs +
      (withDetails.length > 1
        ? '<nav class="mb-pager" aria-label="Other models">' +
            '<a href="' + urlFor(c.id, prev.id) + '" data-cat="' + c.id + '" data-model="' + esc(prev.id) + '"><span><i class="fas fa-arrow-left" aria-hidden="true"></i> Previous</span><strong>' + esc(prev.name) + '</strong></a>' +
            '<a href="' + urlFor(c.id, next.id) + '" data-cat="' + c.id + '" data-model="' + esc(next.id) + '"><span>Next <i class="fas fa-arrow-right" aria-hidden="true"></i></span><strong>' + esc(next.name) + '</strong></a>' +
          '</nav>'
        : '');

    if (p.video) {
      el.video.innerHTML = '<h2 class="catalog__video-title">See the ' + esc(p.name) + ' at work</h2>' +
        '<video controls preload="none" playsinline' + (p.gallery && p.gallery[0] ? ' poster="' + esc(p.gallery[0]) + '"' : '') + '>' +
        '<source src="' + esc(p.video) + '" type="video/mp4"></video>';
      el.video.hidden = false;
    } else {
      el.video.hidden = true;
      el.video.innerHTML = '';
    }
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

  /* --------------------------- gallery slider --------------------------- */
  // Auto-advances every INTERVAL; swipe/drag, arrows, thumbnails and ←/→ keys
  // move it by hand. Pauses on hover, focus, drag, when off-screen or the tab
  // is hidden; no auto-play for visitors who prefer reduced motion.
  var INTERVAL = 4500;
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var gallery = null;

  var destroyGallery = function () {
    if (!gallery) return;
    clearTimeout(gallery.timer);
    if (gallery.io) gallery.io.disconnect();
    gallery = null;
  };

  var initGallery = function () {
    destroyGallery();
    var root = el.grid.querySelector('[data-gallery]');
    var track = root && root.querySelector('[data-track]');
    if (!track) return;
    var slides = track.children;
    var n = slides.length;
    if (n < 2) return;

    var g = gallery = { i: 0, timer: null, io: null, hover: false, focus: false, drag: false, visible: true };
    var counter = root.querySelector('[data-gal-counter]');
    var progress = root.querySelector('[data-gal-progress]');
    var thumbs = el.grid.querySelectorAll('[data-thumb]');

    var paused = function () {
      return reduceMotion || g.hover || g.focus || g.drag || !g.visible || document.hidden ||
        document.documentElement.classList.contains('js-loading'); // still behind the loading screen
    };
    var restartProgress = function () {
      if (!progress) return;
      progress.classList.remove('is-running');
      void progress.offsetWidth; // restart the CSS animation
      if (!paused()) progress.classList.add('is-running');
    };
    var schedule = function () {
      clearTimeout(g.timer);
      restartProgress();
      if (!paused()) g.timer = setTimeout(function () { go(g.i + 1); }, INTERVAL);
    };
    var place = function (offsetPx, animate) {
      track.style.transition = animate === false ? 'none' : '';
      track.style.transform = 'translateX(calc(' + (-g.i * 100) + '% + ' + (offsetPx || 0) + 'px))';
    };
    var go = function (i) {
      g.i = (i % n + n) % n;
      place(0);
      Array.prototype.forEach.call(slides, function (s, k) { s.setAttribute('aria-hidden', String(k !== g.i)); });
      Array.prototype.forEach.call(thumbs, function (t, k) {
        t.classList.toggle('is-active', k === g.i);
        t.setAttribute('aria-pressed', String(k === g.i));
      });
      if (counter) counter.textContent = (g.i + 1) + ' / ' + n;
      schedule();
    };
    g.go = go;
    g.schedule = schedule;

    // hover / keyboard focus pause it
    root.addEventListener('mouseenter', function () { g.hover = true; schedule(); });
    root.addEventListener('mouseleave', function () { g.hover = false; schedule(); });
    // only keyboard focus pauses it (a mouse click on an arrow also focuses the button)
    root.addEventListener('focusin', function (e) {
      var kb = true;
      try { kb = e.target.matches(':focus-visible'); } catch (err) {}
      g.focus = kb; schedule();
    });
    root.addEventListener('focusout', function () { g.focus = false; schedule(); });
    root.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(g.i - 1); }
      if (e.key === 'ArrowRight') { e.preventDefault(); go(g.i + 1); }
    });
    root.querySelector('[data-gal-prev]').addEventListener('click', function () { go(g.i - 1); });
    root.querySelector('[data-gal-next]').addEventListener('click', function () { go(g.i + 1); });

    // swipe / drag (mouse, touch, pen); vertical page scrolling still works (touch-action: pan-y)
    var startX = 0, startY = 0, dx = 0, pointerId = null, horizontal = null;
    track.addEventListener('pointerdown', function (e) {
      if (e.button !== 0) return;
      pointerId = e.pointerId; startX = e.clientX; startY = e.clientY; dx = 0; horizontal = null;
      g.drag = true; schedule();
    });
    track.addEventListener('pointermove', function (e) {
      if (e.pointerId !== pointerId) return;
      var mx = e.clientX - startX, my = e.clientY - startY;
      if (horizontal === null && (Math.abs(mx) > 6 || Math.abs(my) > 6)) {
        horizontal = Math.abs(mx) > Math.abs(my);
        if (horizontal) track.setPointerCapture(pointerId);
      }
      if (!horizontal) return;
      dx = mx;
      // resist at the ends of the strip
      if ((g.i === 0 && dx > 0) || (g.i === n - 1 && dx < 0)) dx = dx / 3;
      place(dx, false);
    });
    var end = function (e) {
      if (e.pointerId !== pointerId) return;
      pointerId = null;
      g.drag = false;
      var width = root.clientWidth || 1;
      if (horizontal && Math.abs(dx) > Math.min(60, width * .15)) go(g.i + (dx < 0 ? 1 : -1));
      else { place(0); schedule(); }
      // a real drag shouldn't also count as a click on the image
      if (horizontal && Math.abs(dx) > 6) root.dataset.justDragged = '1';
      setTimeout(function () { delete root.dataset.justDragged; }, 0);
    };
    track.addEventListener('pointerup', end);
    track.addEventListener('pointercancel', end);

    // only run while the gallery is on screen
    if ('IntersectionObserver' in window) {
      g.io = new IntersectionObserver(function (entries) {
        g.visible = entries[0].isIntersecting;
        schedule();
      }, { threshold: 0.35 });
      g.io.observe(root);
    }
    go(0);
  };
  document.addEventListener('visibilitychange', function () { if (gallery) gallery.schedule(); });
  // start the clock when the loading screen lifts (site.js removes .js-loading)
  if (window.MutationObserver) {
    new MutationObserver(function () { if (gallery) gallery.schedule(); })
      .observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  }

  /* ---------------------------- render ---------------------------- */
  var render = function () {
    renderTabs();
    renderHero();
    var c = byId(state.cat);
    var m = productOf(c, state.model);
    destroyGallery();
    if (m) {
      renderDetail(c, m);
      initGallery();
    } else if (c) {
      renderToolbar(c);
      renderProducts();
      renderVideo(c);
    } else {
      renderOverview();
    }
  };

  var go = function (id, push, model) {
    var url = urlFor(id, model);
    if (push) history.pushState({ cat: id, model: model || null }, '', url);
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
      go(a.getAttribute('data-cat') || null, true, a.getAttribute('data-model'));
      return;
    }
    var thumb = e.target.closest('[data-thumb]');
    if (thumb) {
      if (gallery) gallery.go(+thumb.getAttribute('data-thumb'));
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
