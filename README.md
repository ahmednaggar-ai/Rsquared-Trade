# Rsquared Trade – website

Static site (HTML, CSS, vanilla JS). No build step: open `index.html` or serve the folder with any static server.

## Structure

```
index.html                 Home page: hero, about, brands, contact
mbcrusher.html             MB Crusher catalogue (every product line on one page)
lintec.html                Lintec & Linnhoff asphalt plants (same catalogue engine)
optimas.html               Optimas paving machines & tools (same catalogue engine)
hidromek.html              HİDROMEK construction machines (same catalogue engine)
assets/
  css/
    vendor/                Bootstrap 5 (grid/utilities only) and Font Awesome
    main.css               Shared by every page: tokens, navbar, buttons, footer, scroll reveal
    home.css               index.html only
    catalog.css            brand catalogue pages (mbcrusher, lintec, optimas, hidromek)
  fonts/fontawesome/       Icon font files used by fontawesome.min.css
  js/
    site.js                Shared: navbar, scroll reveal, footer year, contact form, home hero slideshow
    catalog.js             Brand catalogue engine: renders a brand page from its data file
    data/mbcrusher.js      All MB Crusher product lines and products
    data/lintec.js         All Lintec & Linnhoff plants (models table, features, photos)
    data/optimas.js        All Optimas products (from optimas.de/en/products: text, specs, photos)
    data/hidromek.js       All HİDROMEK models (from hidromek.com/europe-EN: highlights, features, grouped specs)
  images/
    brand/                 Rsquared logos + favicon
    partners/              MB Crusher, Lintec & Linnhoff, Optimas logos
    home/hero/             Hero video, poster and slides
    home/about/            About & brand-card photos
    mbcrusher/
      categories/          One image per product line, named by line id
      products/<line>/     One image per product, named by product id
      icons/               Carrier machine icons (excavator, crane, demolition)
    lintec/                products/ (card photos), gallery/<plant>/
    optimas/<product>/     1.webp (card/main photo) + gallery photos, up to 5 per product
    hidromek/<model>/      main.webp, photo-N.webp (job site), view-N.webp (360° angles)
```

Each page loads: `vendor/*.css` → `main.css` → its own page CSS, then `site.js`.
Brand pages also load their data file, then `catalog.js`.

**Add another brand page**: copy `optimas.html`, point it at a new `assets/js/data/<brand>.js`
that sets `window.CATALOG = { brand, categories }` (see the field notes at the top of the existing data files).

## Common tasks

**Add or edit an MB Crusher product** – edit `assets/js/data/mbcrusher.js`.
Put the photo at `assets/images/mbcrusher/products/<line id>/<product id>.webp` and set `image` to that path.
The field reference is at the top of the data file.

**Give a product a detail page** – add any of `description`, `specs`, `gallery`, `video` to it in the data file
(see the crusher buckets for examples). Its card then gets a "Details & specs" link. Gallery photos go in
`assets/images/mbcrusher/gallery/<model>/`. Videos are linked from the live server
(`https://www.rsquaredtrade.com/MB/Videos/…`) and only load when a visitor presses play.

**Link straight to a product line or product**
`mbcrusher.html?type=drum-cutters` (line) or `mbcrusher.html?type=crusher-buckets&model=bf90-3-s4` (product details)

**Quote links** – `index.html?brand=MB%20Crusher&product=BF90.3%20S4#contact` opens the contact form with the brand selected and the message pre-filled.

**Contact form** – until a form service is configured, it opens the visitor's email app addressed to info@rsquaredtrade.com.
To receive submissions directly, replace `FORM_ID` in the form's `action` in `index.html` with a real FormBold (or similar) endpoint.

## Images

Use WebP. Product photos are 360×360; hero slides come in 960w and 1920w versions for `srcset`.
