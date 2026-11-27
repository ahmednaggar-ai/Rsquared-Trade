/* =================================================================
   BRAND CATALOGUE ENGINE
   Shared by every brand page (mbcrusher.html, lintec.html). The page
   loads its own data file first, which sets window.CATALOG
   (assets/js/data/<brand>.js). Renders:
     <page>                                   overview of all product lines
     <page>?type=<category id>                that line's products
     <page>?type=<category id>&model=<id>     one product's details
                                              (products with description/specs/variants/gallery)
   Navigation updates the URL without reloading, so links can be shared
   and the browser back button works.
   ================================================================= */
(function () {
  'use strict';

  var DATA = window.CATALOG;
  if (!DATA) return;

  var BRAND = DATA.brand || { name: 'Products', page: location.pathname.split('/').pop() || 'index.html' };
  var CATS = DATA.categories;
  var CARRIERS = DATA.carriers || {};
  var WORD = BRAND.productWord || ['Model', 'Models'];
  var QUOTE_URL = 'index.html?brand=' + encodeURIComponent(BRAND.quoteBrand || BRAND.name);

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
    if (!id) return BRAND.page;
    return BRAND.page + '?type=' + encodeURIComponent(id) + (model ? '&model=' + encodeURIComponent(model) : '');
  };
  var hasDetails = function (p) { return !!(p && (p.description || p.specs || p.variants || p.gallery || p.sections || p.specGroups)); };
  var countLabel = function (n) { return n + ' ' + (n === 1 ? WORD[0] : WORD[1]).toLowerCase(); };

  // "variants" = a model comparison table: { columns: [model names], rows: [{ label, values: [...] }] }
  var variantRow = function (p, label) {
    if (!p.variants) return null;
    for (var i = 0; i < p.variants.rows.length; i++) if (p.variants.rows[i].label.toLowerCase() === label) return p.variants.rows[i];
    return null;
  };
  // "80 tph", "120–160 tph" … -> "80–240 tph" (min–max over all models)
  var variantRange = function (p, label) {
    var row = variantRow(p, label);
    if (!row) return null;
    var nums = [], unit = '';
    row.values.forEach(function (v) {
      (String(v).match(/\d+(?:\.\d+)?/g) || []).forEach(function (x) { nums.push(+x); });
      var u = String(v).match(/[a-z]+$/i); if (u) unit = u[0];
    });
    if (!nums.length) return null;
    var lo = Math.min.apply(null, nums), hi = Math.max.apply(null, nums);
    return (lo === hi ? lo : lo + '–' + hi) + (unit ? ' ' + unit : '');
  };
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
    var brandCrumb = '<li><a href="' + urlFor(null) + '" data-cat="">' + esc(BRAND.name) + '</a></li>';
    if (m) {
      crumbs += brandCrumb +
        '<li><a href="' + urlFor(c.id) + '" data-cat="' + c.id + '">' + esc(c.name) + '</a></li>' +
        '<li aria-current="page">' + esc(m.name) + '</li>';
      el.eyebrow.textContent = BRAND.name + ' · ' + c.name;
      el.title.textContent = m.name;
      el.lead.textContent = m.tagline || c.summary;
      var spec = function (label) {
        // only short values fit the header (long free text stays in the specs table)
        for (var i = 0; i < (m.specs || []).length; i++) if (m.specs[i].label.toLowerCase() === label) return m.specs[i].value.length <= 18 ? m.specs[i].value : null;
        return null;
      };
      el.stats.innerHTML = m.highlights && m.highlights.length
        ? m.highlights.slice(0, 3).map(function (h) { return stat(h.value, h.label); }).join('')
        : m.variants
        ? stat(m.variants.columns.length, m.variants.columns.length === 1 ? 'Model' : 'Models') +
          (variantRange(m, 'capacity') ? stat(variantRange(m, 'capacity'), 'Capacity') : '') +
          (variantRange(m, 'batch size') ? stat(variantRange(m, 'batch size'), 'Batch size') : '')
        : (spec('weight') ? stat(spec('weight'), 'Weight') : '') +
          (spec('load capacity') ? stat(spec('load capacity'), 'Load capacity') : '') +
          (m.carriers && m.carriers.length ? stat(rangeText(m.carriers[0]), (CARRIERS[m.carriers[0].type] || {}).label || 'Carrier') : '');
      // white-background product shots sit on a white plate; real photos get a photo frame
      el.visual.innerHTML = m.photo
        ? '<span class="catalog-hero__photo"><img src="' + esc(m.image) + '" alt="" width="900" height="675"></span>'
        : '<span class="catalog-hero__plate"><img src="' + esc(m.image) + '" alt="" width="360" height="360"></span>';
      document.title = m.name + ' – ' + c.name + ' – ' + BRAND.name + ' – Rsquared Trade';
    } else if (c) {
      crumbs += brandCrumb + '<li aria-current="page">' + esc(c.name) + '</li>';
      el.eyebrow.textContent = c.series ? BRAND.name + ' · ' + c.series + ' series' : BRAND.name;
      el.title.textContent = c.name;
      el.lead.textContent = c.summary;
      var first = c.products[0] || {};
      el.stats.innerHTML = stat(c.products.length, c.products.length === 1 ? WORD[0] : WORD[1]) +
        (first.carriers ? stat(carrierSpan(c), 'Carrier range')
          : first.fits ? stat(countFits(c), 'Product lines served')
          : first.variants ? stat(c.products.reduce(function (n, p) { return n + (p.variants ? p.variants.columns.length : 0); }, 0), 'Models')
          : '');
      el.visual.innerHTML = c.iconStyle === 'photo'
        ? '<span class="catalog-hero__photo"><img src="' + esc(c.icon) + '" alt="" width="900" height="675"></span>'
        : '<img class="catalog-hero__product" src="' + esc(c.icon) + '" alt="" width="200" height="200">';
      document.title = c.name + ' – ' + BRAND.name + ' – Rsquared Trade';
    } else {
      crumbs += '<li aria-current="page">' + esc(BRAND.name) + '</li>';
      el.eyebrow.textContent = BRAND.origin || '';
      el.title.textContent = BRAND.name;
      el.lead.textContent = BRAND.lead || '';
      el.stats.innerHTML = stat(total, WORD[1]) + stat(CATS.length, 'Product lines') +
        (BRAND.stats || []).map(function (s) { return stat(s[0], s[1]); }).join('');
      el.visual.innerHTML = BRAND.logo
        ? '<span class="catalog-hero__logo"><img src="' + esc(BRAND.logo.src) + '" alt="' + esc(BRAND.name) + '" width="' + BRAND.logo.width + '" height="' + BRAND.logo.height + '"></span>'
        : '';
      document.title = BRAND.name + ' – Rsquared Trade';
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
    el.toolbar.innerHTML = '<p class="catalog__count">' + CATS.length + ' product lines · ' + countLabel(total) + '</p>';
    el.grid.className = 'catalog__grid catalog__grid--lines' + (CATS.length === 2 ? ' catalog__grid--two' : '');
    el.grid.innerHTML = CATS.map(function (c, i) {
      var photo = c.iconStyle === 'photo';
      return '<a class="line-card' + (photo ? ' line-card--photo' : '') + '" href="' + urlFor(c.id) + '" data-cat="' + c.id + '" style="--i:' + i + '">' +
        '<div class="line-card__media"><img src="' + esc(c.icon) + '" alt="" width="' + (photo ? 900 : 200) + '" height="' + (photo ? 675 : 200) + '" loading="lazy"></div>' +
        '<div class="line-card__body">' +
          (c.series ? '<p class="line-card__series">' + esc(c.series) + ' series</p>'
            : c.products.some(function (x) { return x.fits; }) ? '<p class="line-card__series">Add-ons &amp; kits</p>' : '') +
          '<h2 class="line-card__name">' + esc(c.name) + '</h2>' +
          '<p class="line-card__summary">' + esc(c.summary) + '</p>' +
          '<span class="line-card__foot"><span>' + countLabel(c.products.length) + '</span><span class="line-card__cta">View range <i class="fas fa-arrow-right" aria-hidden="true"></i></span></span>' +
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
    // no carrier data (e.g. asphalt plants): nothing to filter, just the count
    if (!c.products.some(function (p) { return p.carriers; })) {
      el.toolbar.innerHTML = '<p class="catalog__count" data-count></p>';
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
      var names = p.fits.indexOf('all') !== -1 ? ['All ' + BRAND.name + ' units'] : p.fits.map(function (f) { var x = byId(f); return x ? x.name : f; });
      specs = '<p class="mb-card__fits"><span>Works with</span> ' + names.map(esc).join(', ') + '</p>';
    } else if (p.variants) {
      // plants: the models in the series + capacity range
      var cap = variantRange(p, 'capacity');
      specs = '<ul class="mb-card__carriers mb-card__variants">' +
        '<li><span class="mb-card__carrier">' + 'Models' + '</span><span class="mb-card__range">' + esc(p.variants.columns.join(' · ')) + '</span></li>' +
        (cap ? '<li><span class="mb-card__carrier">Capacity</span><span class="mb-card__range">' + esc(cap) + '</span></li>' : '') +
        '</ul>';
    } else if (p.highlights && p.highlights.length) {
      // headline figures chosen in the data file (e.g. weight, power, bucket capacity)
      specs = '<ul class="mb-card__carriers mb-card__variants">' + p.highlights.slice(0, 3).map(function (h) {
        return '<li><span class="mb-card__carrier">' + esc(h.label) + '</span><span class="mb-card__range">' + esc(h.value) + '</span></li>';
      }).join('') + '</ul>';
    } else if (p.specs && p.specs.length) {
      // generic products: the first two short specs (long free-text values are left to the detail page)
      var short = p.specs.filter(function (s) { return s.value.length <= 32; }).slice(0, 2);
      if (short.length) {
        specs = '<ul class="mb-card__carriers mb-card__variants">' + short.map(function (s) {
          return '<li><span class="mb-card__carrier">' + esc(s.label) + '</span><span class="mb-card__range">' + esc(s.value) + '</span></li>';
        }).join('') + '</ul>';
      }
    }
    var img = '<img src="' + esc(p.image) + '" alt="' + esc(p.name) + '" width="' + (p.photo ? 900 : 360) + '" height="' + (p.photo ? 675 : 360) + '" loading="lazy" decoding="async">';
    var name = esc(p.name);
    return '<article class="mb-card' + (detail ? ' has-details' : '') + (p.photo ? ' mb-card--photo' : '') + '" id="' + esc(p.id) + '" style="--i:' + Math.min(i, 12) + '">' +
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

  /* ------------------- structured machine details ------------------- */
  var clip = function (s, n) { s = String(s); return s.length > n ? s.slice(0, n).replace(/\s+\S*$/, '') + '…' : s; };

  // The figures buyers compare first, looked up in the grouped specs (first match wins)
  var FIGURES = [
    { label: 'Operating weight', icon: 'fa-weight-hanging', re: /operating weight/i },
    { label: 'Engine power', icon: 'fa-tachometer-alt', re: /maximum power|net power|gross power|rated power/i },
    { label: 'Bucket capacity', icon: 'fa-cube', re: /bucket capacity/i },
    { label: 'Max digging depth', icon: 'fa-arrows-alt-v', re: /maximum digging depth|max\.? digging depth/i },
    { label: 'Max reach', icon: 'fa-arrows-alt-h', re: /maximum (digging )?reach|reach at ground/i },
    { label: 'Dump height', icon: 'fa-level-up-alt', re: /dumping height|dump height|loading height/i },
    { label: 'Blade width', icon: 'fa-ruler-horizontal', re: /blade width|blade length|drum width/i },
    { label: 'Travel speed', icon: 'fa-shipping-fast', re: /high speed|maximum speed|travel speed|forward speed/i },
    { label: 'Max torque', icon: 'fa-cog', re: /maximum torque/i }
  ];
  var keyFigures = function (p, max) {
    var out = [];
    FIGURES.forEach(function (f) {
      if (out.length >= (max || 6)) return;
      for (var g = 0; g < (p.specGroups || []).length; g++) {
        var grp = p.specGroups[g];
        for (var i = 0; i < grp.specs.length; i++) {
          var s = grp.specs[i];
          if (f.re.test(s.label) || (f.re.test(grp.title) && grp.specs.length === 1)) {
            var v = s.value.replace(/\s*@.*$/, '').trim();
            if (v && v.length <= 28) { out.push({ label: f.label, icon: f.icon, value: v }); return; }
          }
        }
      }
    });
    return out;
  };
  var keyFiguresStrip = function (p) {
    var figs = keyFigures(p, 6);
    if (!figs.length) return '';
    return '<section class="mb-figures" aria-label="Key figures">' + figs.map(function (f) {
      return '<div class="mb-figure"><i class="fas ' + f.icon + '" aria-hidden="true"></i>' +
        '<strong>' + esc(f.value) + '</strong><span>' + esc(f.label) + '</span></div>';
    }).join('') + '</section>';
  };

  var tabbedDetails = function (c, p) {
    var tabs = [];
    if (p.specGroups && p.specGroups.length) {
      var total = p.specGroups.reduce(function (n, g) { return n + g.specs.length; }, 0);
      tabs.push({
        id: 'specs', label: 'Specifications', count: total,
        html:
          '<div class="mb-spectool">' +
            '<div class="mb-spectool__nav" role="tablist" aria-label="Specification groups">' +
              '<button type="button" class="mb-spectool__group is-active" data-spec-group="all" aria-selected="true">All<span>' + total + '</span></button>' +
              p.specGroups.map(function (g, i) {
                return '<button type="button" class="mb-spectool__group" data-spec-group="' + i + '" aria-selected="false">' + esc(g.title) + '<span>' + g.specs.length + '</span></button>';
              }).join('') +
            '</div>' +
            '<div class="mb-spectool__panel">' +
              '<label class="mb-spectool__search"><i class="fas fa-search" aria-hidden="true"></i>' +
                '<span class="visually-hidden">Search specifications</span>' +
                '<input type="search" placeholder="Search specifications (e.g. engine, depth, pump)" data-spec-search></label>' +
              p.specGroups.map(function (g, i) {
                return '<div class="mb-spectool__block" data-spec-block="' + i + '">' +
                  '<h3 class="mb-spec-group__title">' + esc(g.title) + '</h3>' +
                  '<dl class="mb-spectool__rows">' + g.specs.map(function (s) {
                    return '<div data-spec-row><dt>' + esc(s.label) + '</dt><dd>' + esc(s.value) + '</dd></div>';
                  }).join('') + '</dl>' +
                '</div>';
              }).join('') +
              '<p class="mb-spectool__empty" data-spec-empty hidden>No specification matches your search.</p>' +
              (c.specNote ? '<p class="mb-specs__note"><i class="fas fa-info-circle" aria-hidden="true"></i> ' + esc(c.specNote) + '</p>' : '') +
              (p.source ? '<p class="mb-specs__note"><i class="fas fa-external-link-alt" aria-hidden="true"></i> Specifications from the manufacturer; <a href="' + esc(p.source) + '" target="_blank" rel="noopener">see the official page</a>.</p>' : '') +
            '</div>' +
          '</div>'
      });
    }
    if (p.sections && p.sections.length) {
      tabs.push({
        id: 'features', label: 'Features & benefits', count: p.sections.length,
        html: '<div class="mb-features-grid">' + p.sections.map(function (s, i) {
          return '<article class="mb-section">' +
            '<span class="mb-section__num">' + (i < 9 ? '0' : '') + (i + 1) + '</span>' +
            (s.title ? '<h3 class="mb-section__title">' + esc(s.title) + '</h3>' : '') +
            s.text.map(function (t) { return '<p>' + esc(t) + '</p>'; }).join('') +
          '</article>';
        }).join('') + '</div>'
      });
    }
    // compare the key figures of every model in this line, this one highlighted
    var peers = c.products.filter(function (x) { return x.specGroups; });
    if (peers.length > 1) {
      var rows = [], seen = {};
      peers.forEach(function (x) { keyFigures(x, 9).forEach(function (f) { if (!seen[f.label]) { seen[f.label] = 1; rows.push(f.label); } }); });
      var val = function (x, label) { var f = keyFigures(x, 9).filter(function (y) { return y.label === label; })[0]; return f ? f.value : '–'; };
      tabs.push({
        id: 'compare', label: 'Compare models', count: peers.length,
        html:
          '<div class="mb-variants__scroll mb-compare__scroll" tabindex="0" role="region" aria-label="Compare ' + esc(c.name) + '">' +
            '<table class="mb-variants mb-compare">' +
              '<thead><tr><th scope="col">' + esc(c.name) + '</th>' + peers.map(function (x) {
                var me = x === p;
                return '<th scope="col"' + (me ? ' class="is-current"' : '') + '>' +
                  (me ? esc(x.name) + '<small>This model</small>'
                      : '<a href="' + urlFor(c.id, x.id) + '" data-cat="' + c.id + '" data-model="' + esc(x.id) + '">' + esc(x.name) + '</a>') +
                '</th>';
              }).join('') + '</tr></thead>' +
              '<tbody>' + rows.map(function (r) {
                return '<tr><th scope="row">' + esc(r) + '</th>' + peers.map(function (x) {
                  return '<td' + (x === p ? ' class="is-current"' : '') + '>' + esc(val(x, r)) + '</td>';
                }).join('') + '</tr>';
              }).join('') + '</tbody>' +
            '</table>' +
          '</div>'
      });
    }
    if (!tabs.length) return '';
    return '<section class="mb-dtabs" data-dtabs>' +
      '<div class="mb-dtabs__bar" role="tablist" aria-label="Model details">' + tabs.map(function (t, i) {
        return '<button type="button" role="tab" class="mb-dtabs__tab' + (i ? '' : ' is-active') + '" id="dtab-' + t.id + '" aria-controls="dpanel-' + t.id + '" aria-selected="' + !i + '" data-dtab="' + t.id + '">' +
          esc(t.label) + '<span>' + t.count + '</span></button>';
      }).join('') + '</div>' +
      tabs.map(function (t, i) {
        return '<div class="mb-dtabs__panel" role="tabpanel" id="dpanel-' + t.id + '" aria-labelledby="dtab-' + t.id + '"' + (i ? ' hidden' : '') + '>' + t.html + '</div>';
      }).join('') +
    '</section>';
  };

  var showDetailTab = function (btn) {
    var root = btn.closest('[data-dtabs]');
    if (!root) return;
    Array.prototype.forEach.call(root.querySelectorAll('[data-dtab]'), function (b) {
      var on = b === btn;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-selected', String(on));
      b.tabIndex = on ? 0 : -1;
      var panel = document.getElementById(b.getAttribute('aria-controls'));
      if (panel) panel.hidden = !on;
      // compare table: bring "this model" into view when it's far to the right
      if (on && panel) {
        var cur = panel.querySelector('th.is-current'), scroller = panel.querySelector('.mb-compare__scroll');
        if (cur && scroller) scroller.scrollLeft = Math.max(0, cur.offsetLeft - (scroller.clientWidth - cur.offsetWidth) / 2);
      }
    });
  };
  // spec groups: "all" or one group; search filters rows across every group
  var showSpecGroup = function (which) {
    var root = el.grid.querySelector('.mb-spectool');
    if (!root) return;
    var search = root.querySelector('[data-spec-search]');
    if (search) search.value = '';
    Array.prototype.forEach.call(root.querySelectorAll('[data-spec-group]'), function (b) {
      var on = b.getAttribute('data-spec-group') === which;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-selected', String(on));
    });
    Array.prototype.forEach.call(root.querySelectorAll('[data-spec-block]'), function (blk) {
      blk.hidden = which !== 'all' && blk.getAttribute('data-spec-block') !== which;
      Array.prototype.forEach.call(blk.querySelectorAll('[data-spec-row]'), function (r) { r.hidden = false; });
    });
    var empty = root.querySelector('[data-spec-empty]');
    if (empty) empty.hidden = true;
  };
  var searchSpecs = function (q) {
    var root = el.grid.querySelector('.mb-spectool');
    if (!root) return;
    q = q.trim().toLowerCase();
    if (!q) { showSpecGroup('all'); return; }
    Array.prototype.forEach.call(root.querySelectorAll('[data-spec-group]'), function (b) {
      b.classList.remove('is-active'); b.setAttribute('aria-selected', 'false');
    });
    var any = false;
    Array.prototype.forEach.call(root.querySelectorAll('[data-spec-block]'), function (blk) {
      var title = blk.querySelector('h3').textContent.toLowerCase();
      var shown = 0;
      Array.prototype.forEach.call(blk.querySelectorAll('[data-spec-row]'), function (r) {
        var hit = title.indexOf(q) !== -1 || r.textContent.toLowerCase().indexOf(q) !== -1;
        r.hidden = !hit; if (hit) shown++;
      });
      blk.hidden = !shown; if (shown) any = true;
    });
    var empty = root.querySelector('[data-spec-empty]');
    if (empty) empty.hidden = any;
  };
  document.addEventListener('input', function (e) {
    if (e.target.matches && e.target.matches('[data-spec-search]')) searchSpecs(e.target.value);
  });
  // arrow keys move between the detail tabs
  document.addEventListener('keydown', function (e) {
    var t = e.target.closest && e.target.closest('[data-dtab]');
    if (!t || (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft')) return;
    var all = Array.prototype.slice.call(t.parentNode.querySelectorAll('[data-dtab]'));
    var next = all[(all.indexOf(t) + (e.key === 'ArrowRight' ? 1 : -1) + all.length) % all.length];
    showDetailTab(next); next.focus(); e.preventDefault();
  });

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

    var shots = [{ src: p.image, product: !p.photo }].concat((p.gallery || []).map(function (g) { return { src: g }; }));
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

    // plants: one column per model size, one row per figure (capacity, batch size …)
    if (p.variants) {
      specs +=
        '<section class="mb-specs" aria-labelledby="mb-variants-title">' +
          '<h2 class="mb-specs__title" id="mb-variants-title">Specifications</h2>' +
          '<div class="mb-variants__scroll" tabindex="0" role="region" aria-labelledby="mb-variants-title">' +
            '<table class="mb-variants">' +
              '<thead><tr><th scope="col">Model</th>' + p.variants.columns.map(function (m) { return '<th scope="col">' + esc(m) + '</th>'; }).join('') + '</tr></thead>' +
              '<tbody>' + p.variants.rows.map(function (r) {
                return '<tr><th scope="row">' + esc(r.label) + '</th>' + r.values.map(function (v) { return '<td>' + esc(v) + '</td>'; }).join('') + '</tr>';
              }).join('') + '</tbody>' +
            '</table>' +
          '</div>' +
          (c.specNote ? '<p class="mb-specs__note"><i class="fas fa-info-circle" aria-hidden="true"></i> ' + esc(c.specNote) + '</p>' : '') +
        '</section>';
    }
    var features = p.features && p.features.length
      ? '<h3 class="mb-detail__subhead">Key features</h3><ul class="mb-detail__features">' +
          p.features.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') + '</ul>'
      : '';

    // Machines with grouped specs / feature sections (e.g. HİDROMEK) get a structured layout instead
    // of long stacked blocks: a key-figures strip, then tabs (Specifications · Features · Compare).
    var sections = p.specGroups || p.sections ? keyFiguresStrip(p) + tabbedDetails(c, p) : '';

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
          (p.highlights && p.highlights.length
            ? '<ul class="mb-card__carriers mb-detail__carriers mb-card__variants">' + p.highlights.map(function (h) {
                return '<li><span class="mb-card__carrier">' + esc(h.label) + '</span><span class="mb-card__range">' + esc(h.value) + '</span></li>';
              }).join('') + '</ul>'
            : '') +
          (p.fits ? '<p class="mb-detail__fits"><span>Works with</span>' +
            (p.fits.indexOf('all') !== -1 ? ['All ' + BRAND.name + ' units'] : p.fits.map(function (f) { var x = byId(f); return x ? x.name : f; }))
              .map(function (n) { return '<em>' + esc(n) + '</em>'; }).join('') + '</p>' : '') +
          paragraphs.map(function (d) { return '<p class="mb-detail__text">' + esc(d) + '</p>'; }).join('') +
          // no description of its own: open with the first feature as a short intro
          (!paragraphs.length && p.sections && p.sections[0] && p.sections[0].text[0]
            ? '<p class="mb-detail__text">' + esc(clip(p.sections[0].text[0], 240)) + '</p>'
            : '') +
          (p.uses && p.uses.length ? '<ul class="mb-detail__uses">' + p.uses.map(function (u) { return '<li>' + esc(u) + '</li>'; }).join('') + '</ul>' : '') +
          features +
          '<div class="mb-detail__actions">' +
            '<a class="rs-btn rs-btn--accent" href="' + quoteUrl(p) + '">Request a quote <i class="fas fa-arrow-right" aria-hidden="true"></i></a>' +
            '<a class="rs-btn rs-btn--outline" href="tel:+20244875070"><i class="fas fa-phone-alt" aria-hidden="true"></i> +20 2 4487 5070</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
      sections +
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
        ? countLabel(c.products.length)
        : list.length + ' of ' + countLabel(c.products.length);
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
    var dtab = e.target.closest('[data-dtab]');
    if (dtab) { showDetailTab(dtab); return; }
    var grpBtn = e.target.closest('[data-spec-group]');
    if (grpBtn) { showSpecGroup(grpBtn.getAttribute('data-spec-group')); return; }
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

  // Deep link to a single product: <page>?type=...#product-id
  if (location.hash.length > 1) {
    var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) {
      target.classList.add('is-highlighted');
      setTimeout(function () { target.scrollIntoView({ block: 'center' }); }, 50);
    }
  }
})();
