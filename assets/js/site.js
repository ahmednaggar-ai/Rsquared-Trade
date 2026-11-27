/* =================================================================
   SITE SCRIPT (every page)
   - Loader: branded intro, once per session, waits only for the first screen
   - Navbar: solid on scroll, mobile menu, active-section highlight
   - Hero: lightweight cross-fade slideshow (replaces jQuery Vegas)
     * slide 1 paints instantly from a ~30 KB poster, then the video
       (1.9 MB, was a 52 MB GIF) fades in once it can play
     * the other slides download only after the page has loaded
   ================================================================= */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var conn = navigator.connection || {};
  var saveData = !!conn.saveData || /(^|-)2g$/.test(conn.effectiveType || '');

  /* ---------------------------- THEME ----------------------------- */
  // The <head> script already applied the theme before first paint.
  // Here: the toggle button, and following the system setting until the
  // visitor makes their own choice.
  (function () {
    var html = document.documentElement;
    var KEY = 'rs-theme';
    var media = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
    var saved = function () { try { return localStorage.getItem(KEY); } catch (e) { return null; } };
    var current = function () { return html.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'; };

    var buttons = document.querySelectorAll('[data-theme-toggle]');
    var label = function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      Array.prototype.forEach.call(buttons, function (b) {
        b.setAttribute('aria-label', 'Switch to ' + next + ' theme');
        b.setAttribute('title', 'Switch to ' + next + ' theme');
      });
    };
    var apply = function (theme, animate) {
      if (animate && !reduceMotion) {
        html.classList.add('theme-anim');
        setTimeout(function () { html.classList.remove('theme-anim'); }, 400);
      }
      html.setAttribute('data-theme', theme);
      label();
    };

    if (!html.hasAttribute('data-theme')) apply(media && media.matches ? 'dark' : 'light');
    label();

    Array.prototype.forEach.call(buttons, function (b) {
      b.addEventListener('click', function () {
        var next = current() === 'dark' ? 'light' : 'dark';
        try { localStorage.setItem(KEY, next); } catch (e) {}
        apply(next, true);
      });
    });

    if (media) {
      var onSystem = function (e) {
        var s = saved();
        if (s !== 'light' && s !== 'dark') apply(e.matches ? 'dark' : 'light', true);
      };
      if (media.addEventListener) media.addEventListener('change', onSystem);
      else if (media.addListener) media.addListener(onSystem);
    }
  })();

  /* ---------------------------- LOADER ---------------------------- */
  // Shown on every page load, in two phases:
  //   1. waiting  – until the page has fully loaded (window "load" + fonts);
  //                 the bar shows an indeterminate sweep. Capped at WAIT_MAX.
  //   2. intro    – a full DURATION (3s) animation starting only once the page
  //                 is ready: bar fills 0→100%, business lines appear one by
  //                 one, then the shutter lifts.
  (function () {
    var html = document.documentElement;
    var loader = document.querySelector('[data-loader]');
    if (!loader) return;
    if (!html.classList.contains('js-loading')) { loader.parentNode.removeChild(loader); return; }

    var bar = loader.querySelector('[data-loader-progress]');
    var percent = loader.querySelector('[data-loader-percent]');
    var DURATION = 3000, WAIT_MAX = 8000;
    var finished = false, running = false, introStart = 0;

    var pageReady = new Promise(function (resolve) {
      if (document.readyState === 'complete') resolve();
      else window.addEventListener('load', resolve, { once: true });
    }).then(function () {
      return document.fonts && document.fonts.ready ? document.fonts.ready : null;
    });

    var setProgress = function (p) {
      p = Math.round(p);
      if (bar) bar.style.setProperty('--rs-progress', p + '%');
      if (percent) percent.textContent = p + '%';
    };
    var ease = function (t) { return t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }; // ease-in-out
    var tick = function () {
      if (finished) return;
      var t = Math.min((performance.now() - introStart) / DURATION, 1);
      setProgress(ease(t) * 100);
      if (t >= 1) return finish();
      requestAnimationFrame(tick);
    };
    var startIntro = function () {
      if (running) return;
      running = true;
      introStart = performance.now();
      setProgress(0);
      loader.classList.add('is-running'); // starts the business-line animation in CSS
      requestAnimationFrame(tick);
    };

    var finish = function () {
      if (finished) return;
      finished = true;
      setProgress(100);
      setTimeout(function () {
        loader.classList.add('is-done');     // shutter lifts
        html.classList.remove('js-loading'); // hero content animates in underneath
        setTimeout(function () {
          if (loader.parentNode) loader.parentNode.removeChild(loader);
        }, 1000);
      }, 150);
    };
    pageReady.then(startIntro);
    setTimeout(startIntro, WAIT_MAX); // very slow connection: don't wait forever
  })();

  /* ---------------------------- NAVBAR ---------------------------- */
  var nav = document.querySelector('[data-nav]');
  if (nav) {
    var toggle = nav.querySelector('[data-nav-toggle]');
    var links = nav.querySelectorAll('.rs-nav__link');

    var onScroll = function () {
      nav.classList.toggle('is-scrolled', window.pageYOffset > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    var setOpen = function (open) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    toggle.addEventListener('click', function () {
      setOpen(!nav.classList.contains('is-open'));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setOpen(false);
        toggle.focus();
      }
    });
    document.addEventListener('click', function (e) {
      if (nav.classList.contains('is-open') && !nav.contains(e.target)) setOpen(false);
    });

    // Highlight the link for the section currently in view
    if ('IntersectionObserver' in window) {
      var byId = {};
      Array.prototype.forEach.call(links, function (a) {
        var id = a.getAttribute('href').slice(1);
        var section = document.getElementById(id);
        if (section) byId[id] = { link: a, section: section };
      });
      var visible = {};
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { visible[en.target.id] = en.isIntersecting; });
        // the last visible section in document order wins
        var current = null;
        Object.keys(byId).forEach(function (id) { if (visible[id]) current = id; });
        if (!current) return;
        Array.prototype.forEach.call(links, function (a) { a.classList.remove('is-active'); });
        byId[current].link.classList.add('is-active');
      }, { rootMargin: '-45% 0px -50% 0px' });
      Object.keys(byId).forEach(function (id) { spy.observe(byId[id].section); });
    }
  }

  /* ------------------ SCROLL REVEAL + COUNTERS -------------------- */
  var revealEls = document.querySelectorAll('.reveal');
  var counters = document.querySelectorAll('[data-count]');

  var countUp = function (el) {
    var target = parseInt(el.getAttribute('data-count'), 10) || 0;
    if (reduceMotion) { el.textContent = target; return; }
    var start = null, dur = 1600;
    var step = function (t) {
      if (start === null) start = t;
      var p = Math.min((t - start) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))); // ease-out
      if (p < 1) requestAnimationFrame(step);
    };
    el.textContent = '0';
    requestAnimationFrame(step);
  };

  if ('IntersectionObserver' in window && (revealEls.length || counters.length)) {
    document.documentElement.classList.add('reveal-ready');
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add('is-visible');
        Array.prototype.forEach.call(en.target.querySelectorAll('[data-count]'), countUp);
        revealObs.unobserve(en.target);
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });
    Array.prototype.forEach.call(revealEls, function (el) { revealObs.observe(el); });
  }

  /* ------------------------- FOOTER YEAR -------------------------- */
  Array.prototype.forEach.call(document.querySelectorAll('[data-year]'), function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ------------------------- CONTACT FORM ------------------------- */
  // While the form service isn't configured (action still contains FORM_ID),
  // open the visitor's email app with the message pre-filled instead of
  // posting to a dead endpoint.
  var form = document.querySelector('[data-contact-form]');
  if (form) {
    var status = form.querySelector('[data-contact-status]');

    // Prefill from "Request a quote" links: index.html?brand=MB%20Crusher&product=BF90.3%20S4#contact
    var params = new URLSearchParams(window.location.search);
    var qBrand = params.get('brand');
    var qProduct = params.get('product');
    if (qBrand) {
      Array.prototype.forEach.call(form.querySelectorAll('input[name="interest"]'), function (r) {
        if (r.value === qBrand) r.checked = true;
      });
    }
    if (qProduct && form.elements.message && !form.elements.message.value) {
      // "MB Crusher BF90.3 S4", but just "Lintec CSD" (the name already says the brand)
      var brandWords = (qBrand || '').toLowerCase().split(/[^a-z]+/).filter(function (w) { return w.length > 2; });
      var named = brandWords.some(function (w) { return qProduct.toLowerCase().indexOf(w) !== -1; });
      form.elements.message.value = "I'd like a quote for the " + (qBrand && !named ? qBrand + ' ' : '') + qProduct + '.';
    }

    // In-page links like "Ask about HİDROMEK" (data-prefill-message) start the
    // message for the visitor, without overwriting anything they typed.
    var lastPrefill = '';
    document.addEventListener('click', function (e) {
      var a = e.target.closest('[data-prefill-message]');
      if (!a || !form.elements.message) return;
      var msg = form.elements.message;
      if (!msg.value.trim() || msg.value === lastPrefill) {
        lastPrefill = a.getAttribute('data-prefill-message');
        msg.value = lastPrefill;
      }
    });

    form.addEventListener('submit', function (e) {
      var action = form.getAttribute('action') || '';
      if (action && action.indexOf('FORM_ID') === -1) return; // real endpoint: normal POST
      e.preventDefault();
      var val = function (n) {
        var f = form.elements[n];
        if (!f) return '';
        if (f.length && !f.tagName) { // radio group
          for (var i = 0; i < f.length; i++) if (f[i].checked) return f[i].value;
          return '';
        }
        return (f.value || '').trim();
      };
      var name = val('name');
      var body = [
        'Name: ' + name,
        'Email: ' + val('email'),
        'Phone: ' + (val('phone') || '-'),
        'Interested in: ' + val('interest'),
        '',
        val('message')
      ].join('\n');
      var subject = 'Website enquiry' + (val('interest') && val('interest') !== 'Not sure yet' ? ' – ' + val('interest') : '') + ' – ' + name;
      window.location.href = 'mailto:' + form.getAttribute('data-fallback-email') +
        '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      if (status) {
        status.textContent = 'Your email app should open with the message ready to send.';
        status.classList.add('is-success');
      }
    });
  }

  /* ------------------------ BRAND SHOWCASE ------------------------ */
  // Tabs choose the brand panel. While the section is on screen it moves to
  // the next brand when the active tab's progress bar fills (CSS animation, so
  // pausing on hover/focus is just animation-play-state). Choosing a brand
  // yourself stops the auto-advance.
  (function () {
    var show = document.querySelector('[data-brand-show]');
    if (!show) return;
    var tabs = Array.prototype.slice.call(show.querySelectorAll('[data-brand-tab]'));
    var panels = Array.prototype.slice.call(show.querySelectorAll('[data-brand-panel]'));
    var nav = show.querySelector('[role="tablist"]');
    var current = 0;
    var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

    show.classList.add('is-ready');
    if (!reduce) show.classList.add('is-auto');

    var select = function (i, focus) {
      current = (i + tabs.length) % tabs.length;
      tabs.forEach(function (t, k) {
        var on = k === current;
        t.classList.toggle('is-active', on);
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
      });
      panels.forEach(function (p, k) { p.classList.toggle('is-active', k === current); });
      if (focus) tabs[current].focus({ preventScroll: true });
      // keep the active tab visible in the swipeable row (small screens) without moving the page
      if (nav.scrollWidth > nav.clientWidth) {
        var t = tabs[current];
        nav.scrollTo({ left: t.offsetLeft - (nav.clientWidth - t.offsetWidth) / 2, behavior: reduce ? 'auto' : 'smooth' });
      }
    };
    var stopAuto = function () { show.classList.remove('is-auto'); };

    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { stopAuto(); select(i); });
      // the progress bar finishing = time for the next brand
      t.querySelector('.brand-show__timer').addEventListener('animationend', function () {
        if (show.classList.contains('is-auto') && i === current) select(current + 1);
      });
    });
    nav.addEventListener('keydown', function (e) {
      var k = e.key, next = null;
      if (k === 'ArrowDown' || k === 'ArrowRight') next = current + 1;
      else if (k === 'ArrowUp' || k === 'ArrowLeft') next = current - 1;
      else if (k === 'Home') next = 0;
      else if (k === 'End') next = tabs.length - 1;
      if (next === null) return;
      e.preventDefault();
      stopAuto();
      select(next, true);
    });

    // pause while the visitor is looking at / using a panel, or the section is off screen
    var hovering = false, focused = false, visible = false;
    var update = function () { show.classList.toggle('is-paused', hovering || focused || !visible || document.hidden); };
    show.addEventListener('mouseenter', function () { hovering = true; update(); });
    show.addEventListener('mouseleave', function () { hovering = false; update(); });
    show.addEventListener('focusin', function () { focused = true; update(); });
    show.addEventListener('focusout', function (e) { if (!show.contains(e.relatedTarget)) { focused = false; update(); } });
    document.addEventListener('visibilitychange', update);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) { visible = entries[0].isIntersecting; update(); }, { threshold: 0.35 }).observe(show);
    } else { visible = true; }
    update();
  })();

  /* ----------------------------- HERO ----------------------------- */
  var hero = document.querySelector('[data-hero]');
  if (!hero) return;

  var heroVideoCounter = 0;
  try {
    heroVideoCounter = parseInt(localStorage.getItem('rs-hero-video-counter') || '0', 10);
    if (isNaN(heroVideoCounter) || heroVideoCounter < 0) heroVideoCounter = 0;
  } catch (e) {}
  var initialSlide = heroVideoCounter % 2 === 0 ? 0 : 1;
  try {
    localStorage.setItem('rs-hero-video-counter', String((heroVideoCounter + 1) % 2));
  } catch (e) {}

  var media = hero.querySelector('.hero__media');
  var videoSlides = Array.prototype.slice.call(hero.querySelectorAll('.hero__slide--video'));
  var brandSlides = Array.prototype.slice.call(hero.querySelectorAll('.hero__slide--image'));
  var firstVideo = initialSlide === 0 ? videoSlides[0] : videoSlides[1];
  var secondVideo = initialSlide === 0 ? videoSlides[1] : videoSlides[0];
  if (media) {
    media.querySelectorAll('.hero__slide').forEach(function (slide) { slide.classList.remove('is-active'); });
    media.appendChild(firstVideo);
    brandSlides.forEach(function (slide) { media.appendChild(slide); });
    media.appendChild(secondVideo);
  }

  var slides = Array.prototype.slice.call(hero.querySelectorAll('.hero__slide'));
  var dotsWrap = hero.querySelector('[data-hero-dots]');
  var videos = Array.prototype.slice.call(hero.querySelectorAll('.hero__video'));
  var useVideo = videos.length > 0 && !reduceMotion && !saveData;
  var current = 0;
  var timer = null;
  var paused = false;
  var dots = [];

  // Load the remaining slide images once (after page load / on demand)
  var loadImage = function (slide) {
    var img = slide.querySelector('img[data-srcset]');
    if (!img) return Promise.resolve();
    return new Promise(function (resolve) {
      img.addEventListener('load', resolve, { once: true });
      img.addEventListener('error', resolve, { once: true });
      img.srcset = img.getAttribute('data-srcset');
      img.removeAttribute('data-srcset');
    });
  };
  var isLoaded = function (slide) {
    var img = slide.querySelector('img');
    return !img || (!img.hasAttribute('data-srcset') && img.complete && img.naturalWidth > 0);
  };
  var preloadRest = function () { slides.slice(1).forEach(loadImage); };

  // Video: attach sources only now so the bytes don't block the first paint
  var videoStarted = function (video) {
    return video.hasAttribute('data-started');
  };
  var startVideo = function (video) {
    if (!useVideo || !video) return;
    if (!videoStarted(video)) {
      video.setAttribute('data-started', 'true');
      Array.prototype.forEach.call(video.querySelectorAll('source[data-src]'), function (s) {
        s.src = s.getAttribute('data-src');
        s.removeAttribute('data-src');
      });
      video.addEventListener('playing', function () { video.classList.add('is-ready'); });
      video.load();
    } else {
      video.currentTime = 0;
    }
    var p = video.play();
    if (p && p.catch) p.catch(function () { /* autoplay blocked: poster stays */ });
  };
  var pauseVideos = function () {
    videos.forEach(function (video) { video.pause(); });
  };

  var slideDuration = function (i) {
    return parseInt(slides[i].getAttribute('data-duration'), 10) || 7000;
  };

  var schedule = function () {
    clearTimeout(timer);
    if (paused || slides.length < 2) return;
    var ms = slideDuration(current);
    if (dots[current]) dots[current].style.setProperty('--rs-slide-duration', ms + 'ms');
    timer = setTimeout(function () { go(current + 1); }, ms);
  };

  var go = function (i) {
    i = (i + slides.length) % slides.length;
    var target = slides[i];
    if (!isLoaded(target)) {
      // not downloaded yet: fetch it, then show it (max wait 4s)
      var done = false;
      var finish = function () { if (!done) { done = true; show(i); } };
      loadImage(target).then(finish);
      setTimeout(finish, 4000);
      return;
    }
    show(i);
  };

  var show = function (i) {
    if (current !== i) {
      slides[current].classList.remove('is-active');
      pauseVideos();
      // restart the Ken Burns animation
      var img = slides[i].querySelector('img');
      if (img) { img.style.animation = 'none'; void img.offsetWidth; img.style.animation = ''; }
      slides[i].classList.add('is-active');
      current = i;
    }
    var activeVideo = slides[i].querySelector('.hero__video');
    if (activeVideo) startVideo(activeVideo);
    dots.forEach(function (d, n) {
      d.classList.remove('is-active');
      d.setAttribute('aria-current', n === i ? 'true' : 'false');
    });
    if (dots[i]) { void dots[i].offsetWidth; dots[i].classList.add('is-active'); }
    schedule();
  };

  // Dots
  if (dotsWrap && slides.length > 1) {
    slides.forEach(function (_, n) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'hero__dot';
      b.setAttribute('aria-label', 'Show slide ' + (n + 1));
      b.addEventListener('click', function () { go(n); });
      dotsWrap.appendChild(b);
      dots.push(b);
    });
  }

  // Pause when the hero is off-screen or the tab is hidden (saves CPU/battery)
  var setPaused = function (p) {
    if (p === paused) return;
    paused = p;
    dots.forEach(function (d) { d.classList.toggle('is-paused', p); });
    if (p) {
      clearTimeout(timer);
      pauseVideos();
    } else {
      show(current); // restart the current slide so timer and progress bar stay in sync
    }
  };
  var heroVisible = true;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      heroVisible = entries[0].isIntersecting;
      setPaused(!heroVisible || document.hidden);
    }, { threshold: 0.1 }).observe(hero);
  }
  document.addEventListener('visibilitychange', function () {
    setPaused(document.hidden || !heroVisible);
  });

  // Kick off: first slide is already visible (poster)
  firstVideo.classList.add('is-active');
  show(0);
  if (document.readyState === 'complete') preloadRest();
  else window.addEventListener('load', preloadRest, { once: true });
})();
