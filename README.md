# Rsquared Trade – website

Static site (HTML, CSS, vanilla JS). No build step: open `index.html` or serve the folder with any static server.

## Structure

```
index.html                 Home page: hero, about, brands, contact
mbcrusher.html             MB Crusher catalogue (every product line on one page)
assets/
  css/
    vendor/                Bootstrap 5 (grid/utilities only) and Font Awesome
    main.css               Shared by every page: tokens, navbar, buttons, footer, scroll reveal
    home.css               index.html only
    mbcrusher.css          mbcrusher.html only
  fonts/fontawesome/       Icon font files used by fontawesome.min.css
  js/
    site.js                Shared: navbar, scroll reveal, footer year, contact form, home hero slideshow
    mbcrusher.js           Renders the MB Crusher catalogue from the data file
    data/mbcrusher.js      All MB Crusher product lines and products (edit this to change the catalogue)
  images/
    brand/                 Rsquared logos + favicon
    partners/              MB Crusher, Lintec & Linnhoff, Optimas logos
    home/hero/             Hero video, poster and slides
    home/about/            About & brand-card photos
    mbcrusher/
      categories/          One image per product line, named by line id
      products/<line>/     One image per product, named by product id
      icons/               Carrier machine icons (excavator, crane, demolition)
```

Each page loads: `vendor/*.css` → `main.css` → its own page CSS, then `site.js` (+ `mbcrusher.js` on the catalogue).

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
