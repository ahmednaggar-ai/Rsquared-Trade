/* =================================================================
   MB CRUSHER CATALOGUE DATA
   The single source for mbcrusher.html. To add, edit or remove a product,
   change it here; the page builds itself from this file (assets/js/catalog.js,
   the same engine as lintec.html – see the field reference in
   assets/js/data/lintec.js for the plant-specific fields).

   brand fields
     name, page, quoteBrand (value of the brand choice in the contact form),
     origin (header eyebrow), lead (header text), logo, productWord,
     stats (extra header stats after the automatic counts)

   product fields
     id          unique, used in links: mbcrusher.html?type=<category>&model=<id>
     name        model name
     tagline     short line under the name (optional)
     image       product photo (WebP)
     carriers    machines it fits + weight range in tonnes
                 type: one of the keys in CATALOG.carriers
                 max: null means "from <min> t upwards"
     group       (accessories) heading the item is listed under
     fits        (accessories) category ids it works with, or ['all']

   optional detail fields (a product with any of these gets a detail view)
     description paragraphs of text
     uses        short list of typical uses (shown as bullet points)
     specs       [{ label, value }] technical features, shown as a table
     gallery     job-site photos (WebP)
     video       .mp4 URL or a Vimeo/YouTube link, loaded only when the visitor presses play
     accessories [{ name, id? }] compatible accessories (id links to that accessory's page)
     downloads   [{ label, href }] product sheets (PDF)

   category fields
     specNote    line shown under every spec table in that category
   ================================================================= */
window.CATALOG = {
  brand: {
    name: "MB Crusher",
    page: "mbcrusher.html",
    quoteBrand: "MB Crusher",
    origin: "Italy · Represented in Egypt by Rsquared Trade",
    lead: "For over 20 years MB has offered the largest line of patented crusher buckets and attachments for excavators, skid loaders and backhoes of all sizes.",
    logo: { src: "assets/images/partners/mb-crusher.png", width: 754, height: 271 },
    productWord: ["Model", "Models"],
    stats: [["7", "International subsidiaries"]]
  },
  carriers: {
    excavator:  { label: "Excavator"         , icon: "assets/images/mbcrusher/icons/excavator.webp" },
    crane:      { label: "Crane"             , icon: "assets/images/mbcrusher/icons/crane.webp" },
    demolition: { label: "Demolition machine", icon: "assets/images/mbcrusher/icons/demolition.webp" },
    backhoe:    { label: "Backhoe loader"    , icon: "assets/images/mbcrusher/icons/backhoe.svg" },
    skid:       { label: "Skid steer loader" , icon: "assets/images/mbcrusher/icons/skid.svg" },
    loader:     { label: "Wheel loader"      , icon: "assets/images/mbcrusher/icons/loader.svg" }
  },
  categories: [
    {
      id: "crusher-buckets",
      name: "Crusher Buckets",
      series: "BF / MB-L",
      summary: "The latest-generation crusher. It can be fitted to any excavator, skid loader, loader and backhoe loader.",
      icon: "assets/images/mbcrusher/categories/crusher-buckets.webp",
      specNote: "The hydraulic flow and pressure must both meet the required parameters.",
      products: [
        {
          "id": "mb-c50-s4",
          "name": "MB-C50 S4",
          "tagline": "MB's little work of magic",
          "image": "assets/images/mbcrusher/products/crusher-buckets/mb-c50-s4.webp",
          "carriers": [
            {
              "type": "crane",
              "min": 5,
              "max": 9
            },
            {
              "type": "excavator",
              "min": 5,
              "max": 8
            },
            {
              "type": "backhoe",
              "min": 8,
              "max": 9
            }
          ],
          "description": [
            "The MB-C50 is the smallest crusher bucket in the MB product line, weighing less than one Ton and designed to work on excavators starting from 5 Ton. It is suitable for mini excavators and great for small crushing jobs.",
            "Due to its reduced size and weight, the MB-C50 has proven to be particularly useful in landscaping and restricted areas, ensuring high performance in small size with a production rate of up to 10 m³/h."
          ],
          "specs": [
            {
              "label": "Weight",
              "value": "0.75 t"
            },
            {
              "label": "Load capacity",
              "value": "0.15 m³"
            },
            {
              "label": "Pressure",
              "value": "> 200 bar"
            },
            {
              "label": "Oil flow",
              "value": "90–130 L/min"
            },
            {
              "label": "Mouth opening width",
              "value": "540 mm"
            },
            {
              "label": "Mouth opening height",
              "value": "250 mm"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/c50/1.webp",
            "assets/images/mbcrusher/gallery/c50/2.webp",
            "assets/images/mbcrusher/gallery/c50/3.webp",
            "assets/images/mbcrusher/gallery/c50/4.webp"
          ],
          "video": "https://vimeo.com/302289235",
          "accessories": [
            {
              "name": "The dust supression kit",
              "id": "the-dust-suppression-kit"
            },
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Hour meter",
              "id": "hour-meter"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/899d82dc0cd439a3f56e4e791a99eb1a6d1db6e7/SchedaProdotto_A4_EU_MB-C50%20S4_EN_Rev20261125.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/bb6dc6398c745e568103b5eca04965cce110c0ef/SchedaProdotto_A4_US_MB-C50%20S4_EN_Rev20261125.pdf?download=1"
            }
          ]
        },
        {
          "id": "bf60-1-s4",
          "name": "BF60.1 S4",
          "tagline": "Small but for great needs",
          "image": "assets/images/mbcrusher/products/crusher-buckets/bf60-1-s4.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 8,
              "max": 18
            }
          ],
          "description": [
            "The BF60.1 crusher bucket, despite its compact size and reduced weight, is sturdy and resistant.",
            "Agile and powerful, it is MB's solution for small-scale sites.",
            "Its reduced weight and ease of installation allow for access to problematic and difficult-to-reach sites such as those in historical urban centres or in high altitude mountain areas."
          ],
          "specs": [
            {
              "label": "Weight",
              "value": "1.65 t"
            },
            {
              "label": "Load capacity",
              "value": "0.55 m³"
            },
            {
              "label": "Pressure",
              "value": "> 200 bar"
            },
            {
              "label": "Oil flow",
              "value": "120–180 L/min"
            },
            {
              "label": "Mouth opening width",
              "value": "610 mm"
            },
            {
              "label": "Mouth opening height",
              "value": "500 mm"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/60-1/bf60-1-takeuchi-tb2150-australia-demolition-material-2-640x640.webp",
            "assets/images/mbcrusher/gallery/60-1/bf60-1-takeuchi-tb2150-australia-demolition-material-3-640x640.webp",
            "assets/images/mbcrusher/gallery/60-1/bf60-1-volvo-portugal-granite-and-marble-hd-640x640.webp",
            "assets/images/mbcrusher/gallery/60-1/mb-c50-kobelco-reunion-inert-material-urban-jobsite-3-640x640.webp"
          ],
          "video": "https://vimeo.com/306792502",
          "accessories": [
            {
              "name": "24 V Iron separator",
              "id": "24-v-iron-separator"
            },
            {
              "name": "The dust supression kit",
              "id": "the-dust-suppression-kit"
            },
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Hour meter",
              "id": "hour-meter"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/9e1cfd794fad1739503fdff3694424d7001404c3/SchedaProdotto_A4_EU_BF60.1%20S4_EN_Rev20261125.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/f258547ee84eef9d26a71de4e0e5fe5601397102/SchedaProdotto_A4_US_BF60.1%20S4_EN_Rev20261125.pdf?download=1"
            }
          ]
        },
        {
          "id": "bf70-2-s4",
          "name": "BF70.2 S4",
          "tagline": "Handy and compact",
          "image": "assets/images/mbcrusher/products/crusher-buckets/bf70-2-s4.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 15,
              "max": 25
            }
          ],
          "description": [
            "When a combination of high performance and reduced size and weight is required, the BF70.2 crusher bucket comes into play.",
            "Small/medium-scale crushing work and urban sites are the ideal areas of application for this highly-resourceful machine."
          ],
          "specs": [
            {
              "label": "Weight",
              "value": "2.30 t"
            },
            {
              "label": "Load capacity",
              "value": "0.65 m³"
            },
            {
              "label": "Pressure",
              "value": "> 220 bar"
            },
            {
              "label": "Oil flow",
              "value": "150–200 L/min"
            },
            {
              "label": "Mouth opening width",
              "value": "740 mm"
            },
            {
              "label": "Mouth opening height",
              "value": "510 mm"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/70-2/1.webp",
            "assets/images/mbcrusher/gallery/70-2/2.webp",
            "assets/images/mbcrusher/gallery/70-2/3.webp",
            "assets/images/mbcrusher/gallery/70-2/4.webp"
          ],
          "video": "https://vimeo.com/336801282",
          "accessories": [
            {
              "name": "24 V Iron separator",
              "id": "24-v-iron-separator"
            },
            {
              "name": "The dust supression kit",
              "id": "the-dust-suppression-kit"
            },
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Hour meter",
              "id": "hour-meter"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/5c8ddc04f702099343a9484177781963ff24282d/SchedaProdotto_A4_EU_BF70.2%20S4_EN_Rev20261125.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/7f360c35de39301ac1c39ef874aac429085770c6/SchedaProdotto_A4_US_BF70.2%20S4_EN_Rev20261125.pdf?download=1"
            }
          ]
        },
        {
          "id": "bf80-3-s4",
          "name": "BF80.3 S4",
          "tagline": "Light and reliable",
          "image": "assets/images/mbcrusher/products/crusher-buckets/bf80-3-s4.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 18.5,
              "max": 29
            }
          ],
          "description": [
            "The BF80.3 crusher bucket is compact, versatile and ideal for operations of crushing and recycling, both outside and in enclosed spaces. Its reduced weight and size eases transportation, making it rapid and economical, while maintaining high levels of efficiency and productivity."
          ],
          "specs": [
            {
              "label": "Weight",
              "value": "3 t"
            },
            {
              "label": "Load capacity",
              "value": "0.70 m³"
            },
            {
              "label": "Pressure",
              "value": "> 220 bar"
            },
            {
              "label": "Oil flow",
              "value": "150–220 L/min"
            },
            {
              "label": "Mouth opening width",
              "value": "850 mm"
            },
            {
              "label": "Mouth opening height",
              "value": "510 mm"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/80-3/bf80-3-jcb-js-200-nc-bf90-3-hyundai-robex-lc-95-bahrain-aggregates-2-640x640.webp",
            "assets/images/mbcrusher/gallery/80-3/bf80-3-linkbelt-210-x2-argentina-rocks-3-640x640.webp",
            "assets/images/mbcrusher/gallery/80-3/bf80-3-with-iron-separator-france-sleepers-640x640.webp",
            "assets/images/mbcrusher/gallery/80-3/mb-c50-kobelco-reunion-inert-material-urban-jobsite-3-640x640.webp"
          ],
          "video": "https://vimeo.com/339508579",
          "accessories": [
            {
              "name": "24 V Iron separator",
              "id": "24-v-iron-separator"
            },
            {
              "name": "The dust supression kit",
              "id": "the-dust-suppression-kit"
            },
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Hour meter",
              "id": "hour-meter"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/ffdb5667bcab6bd91858401d261f52772f133c41/SchedaProdotto_A4_EU_BF80.3%20S4_EN_Rev20261125.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/be6bddb9ff4a1a49a2cc893f48728417d628d5ce/SchedaProdotto_A4_US_BF80.3%20S4_EN_Rev20261125.pdf?download=1"
            }
          ]
        },
        {
          "id": "bf90-3-s4",
          "name": "BF90.3 S4",
          "tagline": "The bucket that made history",
          "image": "assets/images/mbcrusher/products/crusher-buckets/bf90-3-s4.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 21,
              "max": 32
            }
          ],
          "description": [
            "Produced and patented by MB in 2001, the BF90.3 was the first crusher bucket to be made in the world.",
            "Designed to eliminate material friction in the loading phase and to resist even the most difficult conditions on site. The BF90.3 is extremely compact and versatile and has been improved and strengthened over the years.",
            "Suitable for all crushing operations, even the hardest, keeping its performance level with any type of inert material."
          ],
          "specs": [
            {
              "label": "Weight",
              "value": "3.50 t"
            },
            {
              "label": "Load capacity",
              "value": "0.90 m³"
            },
            {
              "label": "Pressure",
              "value": "> 220 bar"
            },
            {
              "label": "Oil flow",
              "value": "180–240 L/min"
            },
            {
              "label": "Mouth opening width",
              "value": "910 mm"
            },
            {
              "label": "Mouth opening height",
              "value": "540 mm"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/80-3/bf80-3-jcb-js-200-nc-bf90-3-hyundai-robex-lc-95-bahrain-aggregates-2-640x640.webp",
            "assets/images/mbcrusher/gallery/80-3/bf80-3-linkbelt-210-x2-argentina-rocks-3-640x640.webp",
            "assets/images/mbcrusher/gallery/80-3/bf80-3-with-iron-separator-france-sleepers-640x640.webp",
            "assets/images/mbcrusher/gallery/80-3/mb-c50-kobelco-reunion-inert-material-urban-jobsite-3-640x640.webp"
          ],
          "video": "https://vimeo.com/339541842",
          "accessories": [
            {
              "name": "24 V Iron separator",
              "id": "24-v-iron-separator"
            },
            {
              "name": "The dust supression kit",
              "id": "the-dust-suppression-kit"
            },
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Hour meter",
              "id": "hour-meter"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/51e878c265e9cad12e488e31af9a28616d034abf/SchedaProdotto_A4_EU_BF90.3%20S4_EN_Rev20261125.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/899d483ae8da406e671bd257b5cdceb973738c1f/SchedaProdotto_A4_US_BF90.3%20S4_EN_Rev20261125.pdf?download=1"
            }
          ]
        },
        {
          "id": "bf120-4-s4",
          "name": "BF120.4 S4",
          "tagline": "Ideal for large projects",
          "image": "assets/images/mbcrusher/products/crusher-buckets/bf120-4-s4.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 30,
              "max": 45
            }
          ],
          "description": [
            "The BF120.4 crusher bucket has been created to satisfy specific requirements of crushing in quarries, landfills and for all operations regarding the recycling of aggregates.",
            "It is a versatile and powerful machine which, in the space of just a few years, has established a strong presence in the sector of crushing in large-scale urban and non-urban sites."
          ],
          "specs": [
            {
              "label": "Weight",
              "value": "4.80 t"
            },
            {
              "label": "Load capacity",
              "value": "1.30 m³"
            },
            {
              "label": "Pressure",
              "value": "> 220 bar"
            },
            {
              "label": "Oil flow",
              "value": "190–260 L/min"
            },
            {
              "label": "Mouth opening width",
              "value": "1205 mm"
            },
            {
              "label": "Mouth opening height",
              "value": "540 mm"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/120-4/1.webp",
            "assets/images/mbcrusher/gallery/120-4/2.webp",
            "assets/images/mbcrusher/gallery/120-4/3.webp",
            "assets/images/mbcrusher/gallery/120-4/4.webp"
          ],
          "video": "https://vimeo.com/344519045",
          "accessories": [
            {
              "name": "24 V Iron separator",
              "id": "24-v-iron-separator"
            },
            {
              "name": "The dust supression kit",
              "id": "the-dust-suppression-kit"
            },
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Hour meter",
              "id": "hour-meter"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/d0f83cfda6b068b611a52cbdebac8a737e83862f/SchedaProdotto_A4_EU_BF120.4%20S4_EN_Rev20261125.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/05d7122869943267d02aba4413703e5636d2422c/SchedaProdotto_A4_US_BF120.4%20S4_EN_Rev20261125.pdf?download=1"
            }
          ]
        },
        {
          "id": "bf135-8",
          "name": "BF135.8",
          "tagline": "Inexhaustible power",
          "image": "assets/images/mbcrusher/products/crusher-buckets/bf135-8.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 43,
              "max": 80
            }
          ],
          "description": [
            "Suitable for excavators weighing over 43 Ton, the crusher bucket BF135.8 was created to meet the specific needs of crushing in quarries, for aggregates recycling operations in landfills, for volume reduction of materials resulting from demolition in large yards, or excavation, sewage systems and preparation of aggregates.",
            "With a productivity of 88 m³/h, a capacity of about 1.60 m³ and a total weight of 7.50 Ton the crusher bucket BF135.8 is versatile and handy."
          ],
          "specs": [
            {
              "label": "Weight",
              "value": "7.50 t"
            },
            {
              "label": "Load capacity",
              "value": "1.60 m³"
            },
            {
              "label": "Pressure",
              "value": "> 230 bar"
            },
            {
              "label": "Oil flow",
              "value": "320–380 L/min"
            },
            {
              "label": "Mouth opening width",
              "value": "1300 mm"
            },
            {
              "label": "Mouth opening height",
              "value": "600 mm"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/135-8/1.webp",
            "assets/images/mbcrusher/gallery/135-8/2.webp",
            "assets/images/mbcrusher/gallery/135-8/3.webp",
            "assets/images/mbcrusher/gallery/135-8/4.webp"
          ],
          "video": "https://vimeo.com/344547587",
          "accessories": [
            {
              "name": "24 V Iron separator",
              "id": "24-v-iron-separator"
            },
            {
              "name": "The dust supression kit",
              "id": "the-dust-suppression-kit"
            },
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Hour meter",
              "id": "hour-meter"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/54a398f9053a8b3083556ca588532905e8dc908a/SchedaProdotto_A4_EU_BF135.8_EN_Rev20261125.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/188145863f1d848ffa049f3bcc39cf205b5cef30/SchedaProdotto_A4_US_BF135.8_EN_Rev20261125.pdf?download=1"
            }
          ]
        },
        {
          "id": "bf150-10",
          "name": "BF150.10",
          "tagline": "The records bucket",
          "image": "assets/images/mbcrusher/products/crusher-buckets/bf150-10.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 70,
              "max": 100
            }
          ],
          "description": [
            "Unique in its kind in size and performance, the BF150.10 is the largest crusher bucket in the world. Designed for excavators exceeding 70 Ton and ideal for applications in quarry, mining, and general crushing on large job sites. The BF150.10 crusher bucket yields high results, productivity, and efficiency.",
            "Weighing over 10 Ton with a load capacity of 2.30 m³, the BF150.10 crusher bucket is a machine capable of a production that exceeds 120 m³/h.",
            "With an unmatched bucket opening of 1450 x 700 mm and an output adjustment from 100 to 200 mm, this machinery is essential for primary crushing in quarries and large scale operations."
          ],
          "specs": [
            {
              "label": "Weight",
              "value": "10.50 t"
            },
            {
              "label": "Load capacity",
              "value": "2.30 m³"
            },
            {
              "label": "Pressure",
              "value": "> 230 bar"
            },
            {
              "label": "Oil flow",
              "value": "380–430 L/min"
            },
            {
              "label": "Mouth opening width",
              "value": "1450 mm"
            },
            {
              "label": "Mouth opening height",
              "value": "700 mm"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/150-10/1.webp",
            "assets/images/mbcrusher/gallery/150-10/2.webp",
            "assets/images/mbcrusher/gallery/150-10/3.webp",
            "assets/images/mbcrusher/gallery/150-10/4.webp"
          ],
          "video": "https://vimeo.com/314443504",
          "accessories": [
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Hour meter",
              "id": "hour-meter"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/f404c61384e8583e2e9c9bfef76720cc896a2886/SchedaProdotto_A4_EU_BF150.10_EN_Rev20261125.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/31dc8bc4867200451ad95f076b6d130d40f10c41/SchedaProdotto_A4_US_BF150.10_EN_Rev20261125.pdf?download=1"
            }
          ]
        },
        {
          "id": "mb-l120-s2",
          "name": "MB-L120 S2",
          "tagline": "Great in a small package",
          "image": "assets/images/mbcrusher/products/crusher-buckets/mb-l120-s2.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 4,
              "max": 9
            },
            {
              "type": "demolition",
              "min": 6.6,
              "max": 12
            },
            {
              "type": "crane",
              "min": 3,
              "max": 6
            },
            {
              "type": "backhoe",
              "min": 5,
              "max": 9
            },
            {
              "type": "skid",
              "min": 3,
              "max": 6
            }
          ],
          "description": [
            "Small but packed with high performance. It meets the need that arises in small yards and limited spaces.",
            "The MB-L120 S2 crusher bucket is suitable for excavators, backhoes, loaders and telehandlers between 3 and 12 Ton.",
            "Easy to carry, compact, handy, easy to use, and low maintenance."
          ],
          "specs": [
            {
              "label": "Weight",
              "value": "0.95 t"
            },
            {
              "label": "Load capacity",
              "value": "0.19 m³"
            },
            {
              "label": "Pressure",
              "value": "> 200 bar"
            },
            {
              "label": "Counter pressure",
              "value": "< 10 bar"
            },
            {
              "label": "Oil flow",
              "value": "95 L/min"
            },
            {
              "label": "Mouth opening width",
              "value": "730 mm"
            },
            {
              "label": "Mouth opening height",
              "value": "250 mm"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/l120/1.webp",
            "assets/images/mbcrusher/gallery/l120/2.webp",
            "assets/images/mbcrusher/gallery/l120/3.webp",
            "assets/images/mbcrusher/gallery/l120/4.webp"
          ],
          "video": "https://vimeo.com/344740413",
          "accessories": [
            {
              "name": "The dust supression kit",
              "id": "the-dust-suppression-kit"
            },
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Hour meter",
              "id": "hour-meter"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/593ce70c408d4c00281754fc6b903dd76f895e7a/SchedaProdotto_A4_EU_MB-L120%20S2_EN_Rev20261125.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/f7f6bf64f5478bf422ebbb85a4bcf438501583b8/SchedaProdotto_A4_US_MB-L120%20S2_EN_Rev20261125.pdf?download=1"
            }
          ]
        },
        {
          "id": "mb-l140-s2",
          "name": "MB-L140 S2",
          "tagline": "Compact with performance",
          "image": "assets/images/mbcrusher/products/crusher-buckets/mb-l140-s2.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 4,
              "max": 10
            },
            {
              "type": "demolition",
              "min": 7,
              "max": 13
            },
            {
              "type": "crane",
              "min": 3,
              "max": 6
            },
            {
              "type": "backhoe",
              "min": 5,
              "max": 10
            },
            {
              "type": "skid",
              "min": 3,
              "max": 6
            }
          ],
          "description": [
            "Small, compact and easy to handle, despite its small size this machine offers the highest standards of productivity and quality.",
            "The MB-L140 S2 crusher bucket is suitable for excavators, backhoes, loaders and telehandlers between 3 and 13 Ton.",
            "This bucket is the perfect combination of versatility, performance, and practicality."
          ],
          "specs": [
            {
              "label": "Weight",
              "value": "0.98 t"
            },
            {
              "label": "Load capacity",
              "value": "0.20 m³"
            },
            {
              "label": "Pressure",
              "value": "> 200 bar"
            },
            {
              "label": "Counter pressure",
              "value": "< 10 bar"
            },
            {
              "label": "Oil flow",
              "value": "98 L/min"
            },
            {
              "label": "Mouth opening width",
              "value": "740 mm"
            },
            {
              "label": "Mouth opening height",
              "value": "250 mm"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/l140/1.webp",
            "assets/images/mbcrusher/gallery/l140/2.webp",
            "assets/images/mbcrusher/gallery/l140/3.webp",
            "assets/images/mbcrusher/gallery/l140/4.webp"
          ],
          "video": "https://vimeo.com/362735760",
          "accessories": [
            {
              "name": "The dust supression kit",
              "id": "the-dust-suppression-kit"
            },
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Hour meter",
              "id": "hour-meter"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/421deb263fba2ec56c1ccac01147c8c76a2612ae/SchedaProdotto_A4_EU_MB-L140%20S2_EN_Rev20261125.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/2ce98b5f001cc9169f2f3de7bc4be44c38c00677/SchedaProdotto_A4_US_MB-L140%20S2_EN_Rev20261125.pdf?download=1"
            }
          ]
        },
        {
          "id": "mb-l160-s2",
          "name": "MB-L160 S2",
          "tagline": "Practical, handy, and efficient",
          "image": "assets/images/mbcrusher/products/crusher-buckets/mb-l160-s2.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 7,
              "max": 11
            },
            {
              "type": "demolition",
              "min": 7,
              "max": 11
            },
            {
              "type": "crane",
              "min": 4.5,
              "max": 7
            },
            {
              "type": "backhoe",
              "min": 7,
              "max": 11
            },
            {
              "type": "skid",
              "min": 5,
              "max": 7
            }
          ],
          "description": [
            "The perfect combination of efficiency and mobility, designed to meet the needs of skid loaders and backhoes while maintaining the power and productivity of MB products.",
            "The MB-L160 S2 crusher bucket is suitable for excavators, backhoes, loaders and telehandlers between 4.5 and 16 Ton.",
            "The compact size is efficient and easy to use."
          ],
          "specs": [
            {
              "label": "Weight",
              "value": "1.45 t"
            },
            {
              "label": "Load capacity",
              "value": "0.35 m³"
            },
            {
              "label": "Pressure",
              "value": "> 200 bar"
            },
            {
              "label": "Counter pressure",
              "value": "< 10 bar"
            },
            {
              "label": "Oil flow",
              "value": "110 L/min"
            },
            {
              "label": "Mouth opening width",
              "value": "1100 mm"
            },
            {
              "label": "Mouth opening height",
              "value": "250 mm"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/l160/1.webp",
            "assets/images/mbcrusher/gallery/l160/2.webp",
            "assets/images/mbcrusher/gallery/l160/4.webp",
            "assets/images/mbcrusher/gallery/l160/mb-l160-4-640x640.webp"
          ],
          "video": "https://vimeo.com/1009820434",
          "accessories": [
            {
              "name": "The dust supression kit",
              "id": "the-dust-suppression-kit"
            },
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Hour meter",
              "id": "hour-meter"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/8e91a6f1cb54463757113b8ec7632e5ad6fd5595/SchedaProdotto_A4_EU_MB-L160%20S2_EN_Rev20261125.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/e0e5a60d01c3fa2b6bc689abf931bd1a75735b56/SchedaProdotto_A4_US_MB-L160%20S2_EN_Rev20261125.pdf?download=1"
            }
          ]
        },
        {
          "id": "mb-l200-s2",
          "name": "MB-L200 S2",
          "tagline": "The crusher bucket changes shape",
          "image": "assets/images/mbcrusher/products/crusher-buckets/mb-l200-s2.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 7,
              "max": 12
            },
            {
              "type": "demolition",
              "min": 7,
              "max": 12
            },
            {
              "type": "crane",
              "min": 6,
              "max": 8
            },
            {
              "type": "backhoe",
              "min": 7,
              "max": 12
            },
            {
              "type": "skid",
              "min": 6,
              "max": 8
            }
          ],
          "description": [
            "Made with the same materials and technology as the full line of MB crusher buckets, the MB-L200 S2 was designed on the basis of specific work requirements for skid loaders and backhoes.",
            "The MB-L200 S2 crusher bucket is suitable for excavators, backhoes, loaders and telehandlers between 6 and 17 Ton.",
            "Changing the shape of the crusher does not affect the high performance and resistance of MB products."
          ],
          "specs": [
            {
              "label": "Weight",
              "value": "1.50 t"
            },
            {
              "label": "Load capacity",
              "value": "0.43 m³"
            },
            {
              "label": "Pressure",
              "value": "> 200 bar"
            },
            {
              "label": "Counter pressure",
              "value": "< 10 bar"
            },
            {
              "label": "Oil flow",
              "value": "120 L/min"
            },
            {
              "label": "Mouth opening width",
              "value": "1150 mm"
            },
            {
              "label": "Mouth opening height",
              "value": "260 mm"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/l200/1.webp",
            "assets/images/mbcrusher/gallery/l200/2.webp",
            "assets/images/mbcrusher/gallery/l200/3.webp",
            "assets/images/mbcrusher/gallery/l200/4.webp"
          ],
          "video": "https://vimeo.com/344767365",
          "accessories": [
            {
              "name": "The dust supression kit",
              "id": "the-dust-suppression-kit"
            },
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Hour meter",
              "id": "hour-meter"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/0dfafe96f01cfda40af8587a35b7239f3eb3f188/SchedaProdotto_A4_EU_MB-L200%20S2_EN_Rev20261125.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/d4ecf9c1ff085a4e2e8eb9a11df5d125a27a91a5/SchedaProdotto_A4_US_MB-L200%20S2_EN_Rev20261125.pdf?download=1"
            }
          ]
        }
      ]
    },
    {
      id: "screening-buckets",
      name: "Screening Buckets",
      series: "MB-S / MB-LS",
      summary: "Perfect for the selection of natural materials, both before and after the crushing phase.",
      icon: "assets/images/mbcrusher/categories/screening-buckets.webp",
      specNote: "The hydraulic flow and pressure must both meet the required parameters.",
      products: [
        {
          "id": "mb-ls170-s2",
          "name": "MB-LS170 S2",
          "tagline": "Innovative and handy",
          "image": "assets/images/mbcrusher/products/screening-buckets/mb-ls170-s2.webp",
          "carriers": [
            {
              "type": "crane",
              "min": 8,
              "max": 15
            },
            {
              "type": "excavator",
              "min": 6.5,
              "max": 11
            },
            {
              "type": "backhoe",
              "min": 8,
              "max": 15
            },
            {
              "type": "loader",
              "min": 8,
              "max": 15
            }
          ],
          "description": [
            "Ideal for natural material selection either pre or post crushing stage, the screening MB-LS170 allows to cut down up to 60% of the crushing time and to recover material suitable to the type of processing desired to handle it in the best way.",
            "Particularly suitable for wheel loader and backhoe from 6.5 to 15 ton."
          ],
          "specs": [
            {
              "label": "Weight",
              "value": "1.45 t"
            },
            {
              "label": "Load capacity",
              "value": "1.10 m³"
            },
            {
              "label": "Pressure",
              "value": "> 160 bar"
            },
            {
              "label": "Counter pressure",
              "value": "< 40 bar"
            },
            {
              "label": "Oil flow",
              "value": "80 L/min"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/screening-buckets/screenbucket/1.webp",
            "assets/images/mbcrusher/gallery/screening-buckets/screenbucket/2.webp",
            "assets/images/mbcrusher/gallery/screening-buckets/screenbucket/3.webp",
            "assets/images/mbcrusher/gallery/screening-buckets/screenbucket/4.webp"
          ],
          "video": "https://vimeo.com/334890979",
          "accessories": [
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Hour meter",
              "id": "hour-meter"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/388f43ed70818dbcb33389b15b590c8557b17234/SchedaProdotto_A4_EU_MB-LS170%20S2_EN_Rev20261125.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/d4ce42e2b238d4ee47436c58805e85bef784e55a/SchedaProdotto_A4_US_MB-LS170%20S2_EN_Rev20261125.pdf?download=1"
            }
          ]
        },
        {
          "id": "mb-ls220-s2",
          "name": "MB-LS220 S2",
          "tagline": "Great and Powerful",
          "image": "assets/images/mbcrusher/products/screening-buckets/mb-ls220-s2.webp",
          "carriers": [
            {
              "type": "crane",
              "min": 15,
              "max": 25
            },
            {
              "type": "excavator",
              "min": 12,
              "max": 25
            },
            {
              "type": "loader",
              "min": 15,
              "max": 25
            }
          ],
          "description": [
            "The largest of the screening bucket MB designed for backhoe loaders, is ideal for the selection of natural materials in quarries and large yards. MB-LS220 allows to reduce up to 60% the crushing time and allows you to recover materials and handle it in the best way.",
            "Particularly suitable for backhoe and loaders from 12 to 25 Ton.",
            "Like the other screening buckets of MB range, MB-LS220 is equipped with interchangeable panels, available in different sieve sizes depending on the needs of the job. The simple assembly and dis-assembly of the screen panels makes for an easy change for different material output sizes."
          ],
          "specs": [
            {
              "label": "Weight",
              "value": "2.80 t"
            },
            {
              "label": "Load capacity",
              "value": "2.40 m³"
            },
            {
              "label": "Pressure",
              "value": "> 200 bar"
            },
            {
              "label": "Counter pressure",
              "value": "< 40 bar"
            },
            {
              "label": "Oil flow",
              "value": "120 L/min"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/screening-buckets/ls200/1.webp",
            "assets/images/mbcrusher/gallery/screening-buckets/ls200/2.webp",
            "assets/images/mbcrusher/gallery/screening-buckets/ls200/3.webp"
          ],
          "video": "https://vimeo.com/316053732",
          "accessories": [
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Hour meter",
              "id": "hour-meter"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/31e35e801d2000f564e1582204a8321f0214e04f/SchedaProdotto_A4_EU_MB-LS220%20S2_EN_Rev20261125.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/d6b150ee8e28382a74e74132ba55e6a41e7309eb/SchedaProdotto_A4_US_MB-LS220%20S2_EN_Rev20261125.pdf?download=1"
            }
          ]
        },
        {
          "id": "mb-s10-s4",
          "name": "MB-S10 S4",
          "tagline": "Small and efficient",
          "image": "assets/images/mbcrusher/products/screening-buckets/mb-s10-s4.webp",
          "carriers": [
            {
              "type": "crane",
              "min": 4,
              "max": 9
            },
            {
              "type": "excavator",
              "min": 4,
              "max": 9
            },
            {
              "type": "backhoe",
              "min": 8,
              "max": 9
            }
          ],
          "description": [
            "The MB-S10 S4 screening bucket is the ideal choice for small-scale sites in which the reduction of costs is remarkably advantageous as aided by rapid movement in limited spaces.",
            "Crucial in space limited applications.",
            "PRIMARY SELECTION:"
          ],
          "specs": [
            {
              "label": "Weight",
              "value": "0.41 t"
            },
            {
              "label": "Load capacity",
              "value": "0.32 m³"
            },
            {
              "label": "Pressure",
              "value": "> 130 bar"
            },
            {
              "label": "Counter pressure",
              "value": "< 40 bar"
            },
            {
              "label": "Oil flow",
              "value": "40 L/min"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/screening-buckets/s10/1.webp",
            "assets/images/mbcrusher/gallery/screening-buckets/s10/2.webp",
            "assets/images/mbcrusher/gallery/screening-buckets/s10/3.webp",
            "assets/images/mbcrusher/gallery/screening-buckets/s10/4.webp"
          ],
          "video": "https://vimeo.com/335379117",
          "accessories": [
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Hour meter",
              "id": "hour-meter"
            },
            {
              "name": "Basket protection kit",
              "id": "basket-protection-kit"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/1a013573d5fe080227d7ba141be8e1cdcd261fbc/SchedaProdotto_A4_EU_MB-S10%20S4_EN_Rev20261125.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/ef980c46c01cbcab616e194727c9ee9292f4ecac/SchedaProdotto_A4_US_MB-S10%20S4_EN_Rev20261125.pdf?download=1"
            }
          ]
        },
        {
          "id": "mb-s14-s4",
          "name": "MB-S14 S4",
          "tagline": "Handy with high performance",
          "image": "assets/images/mbcrusher/products/screening-buckets/mb-s14-s4.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 9,
              "max": 20
            }
          ],
          "description": [
            "The MB-S14 screening bucket has been specially designed for clients who require high performance in small and medium-scale sites. Compact and easy to transport, thanks to its reduced weight, it is essential in all situations requiring volumetric separation.",
            "A must in reducing volumes and optimizing the size of materials for specific uses.",
            "The screening buckets MB are equipped with baskets formed by interchangeable modular panels, available with holes of different sizes based on requirements."
          ],
          "specs": [
            {
              "label": "Weight",
              "value": "1.10 t"
            },
            {
              "label": "Load capacity",
              "value": "1.10 m³"
            },
            {
              "label": "Pressure",
              "value": "> 150 bar"
            },
            {
              "label": "Counter pressure",
              "value": "< 40 bar"
            },
            {
              "label": "Oil flow",
              "value": "60 L/min"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/screening-buckets/s14/1.webp",
            "assets/images/mbcrusher/gallery/screening-buckets/s14/2.webp",
            "assets/images/mbcrusher/gallery/screening-buckets/s14/3.webp",
            "assets/images/mbcrusher/gallery/screening-buckets/s14/4.webp"
          ],
          "video": "https://vimeo.com/284365219",
          "accessories": [
            {
              "name": "The dust supression kit",
              "id": "the-dust-suppression-kit"
            },
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Hour meter",
              "id": "hour-meter"
            },
            {
              "name": "Basket protection kit",
              "id": "basket-protection-kit"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/d87983a720489c69c86ef09eacceb9ed940fb903/SchedaProdotto_A4_EU_MB-S14%20S4_EN_Rev20261125.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/8d8caf22c3a165172926799606c623222d4adf92/SchedaProdotto_A4_US_MB-S14%20S4_EN_Rev20261125.pdf?download=1"
            }
          ]
        },
        {
          "id": "mb-s18-s4",
          "name": "MB-S18 S4",
          "tagline": "Great performance",
          "image": "assets/images/mbcrusher/products/screening-buckets/mb-s18-s4.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 20,
              "max": 35
            }
          ],
          "description": [
            "The MB-S18 screening bucket has been designed for medium and large-scale contexts that require high performance and large-scale production.",
            "This model is fitted with a metal separator that allows the rapid and efficient separation of iron from the material screened, as well as a spray for the reduction of dust resulting from operations.",
            "PRIMARY SELECTION:"
          ],
          "specs": [
            {
              "label": "Weight",
              "value": "2 t"
            },
            {
              "label": "Load capacity",
              "value": "2.40 m³"
            },
            {
              "label": "Pressure",
              "value": "> 200 bar"
            },
            {
              "label": "Counter pressure",
              "value": "< 40 bar"
            },
            {
              "label": "Oil flow",
              "value": "120 L/min"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/screening-buckets/s18/1.webp",
            "assets/images/mbcrusher/gallery/screening-buckets/s18/2.webp",
            "assets/images/mbcrusher/gallery/screening-buckets/s18/3.webp",
            "assets/images/mbcrusher/gallery/screening-buckets/s18/4.webp"
          ],
          "video": "https://vimeo.com/365212397",
          "accessories": [
            {
              "name": "The dust supression kit",
              "id": "the-dust-suppression-kit"
            },
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Hour meter",
              "id": "hour-meter"
            },
            {
              "name": "Basket protection kit",
              "id": "basket-protection-kit"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/132627a47c1beee3f073261b26a36c05336b6393/SchedaProdotto_A4_EU_MB-S18%20S4_EN_Rev20261125.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/2027af50fee3b81135781b89b78a9552b8ccd3a8/SchedaProdotto_A4_US_MB-S18%20S4_EN_Rev20261125.pdf?download=1"
            }
          ]
        },
        {
          "id": "mb-s23",
          "name": "MB-S23",
          "tagline": "The biggest in the world",
          "image": "assets/images/mbcrusher/products/screening-buckets/mb-s23.webp",
          "description": [
            "The largest screening bucket in the world, unique in its kind, can be used with excavators greater than 35 Ton.",
            "Ideal for use before or after crushing, the MB-S23 screening bucket will reduce crushing time up to 60%. It also allows the screening of natural material (quarry residues, dry soil, and river stone) of any kind, making it convenient for on-site processing.",
            "A must in reducing volumes and optimizing the size of materials for specific uses."
          ],
          "specs": [
            {
              "label": "Weight",
              "value": "3.66 t"
            },
            {
              "label": "Load capacity",
              "value": "3.75 m³"
            },
            {
              "label": "Pressure",
              "value": "> 320 bar"
            },
            {
              "label": "Counter pressure",
              "value": "< 5 bar"
            },
            {
              "label": "Oil flow",
              "value": "160 L/min"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/screening-buckets/s23/1.webp",
            "assets/images/mbcrusher/gallery/screening-buckets/s23/2.webp",
            "assets/images/mbcrusher/gallery/screening-buckets/s23/3.webp"
          ],
          "video": "https://vimeo.com/348139195",
          "carriers": [
            {
              "type": "excavator",
              "min": 35,
              "max": 50
            }
          ],
          "accessories": [
            {
              "name": "The dust supression kit",
              "id": "the-dust-suppression-kit"
            },
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Hour meter",
              "id": "hour-meter"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/a88b6612e98d215116575733da8c49fdaa6e5e82/SchedaProdotto_A4_EU_MB-S23_EN_Rev20261125.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/f0472ce8154dd99d3165f022d54c1b3c8e44ae99/SchedaProdotto_A4_US_MB-S23_EN_Rev20261125.pdf?download=1"
            }
          ]
        }
      ]
    },
    {
      id: "shaft-screeners",
      name: "Shaft Screeners",
      series: "MB-HDS",
      summary: "The ideal solution for processing all kinds of waste material, quickly repurposing it into re-usable and profitable material.",
      icon: "assets/images/mbcrusher/categories/shaft-screeners.webp",
      specNote: "The hydraulic flow and pressure must both meet the required parameters.",
      products: [
        {
          "id": "mb-hds207",
          "name": "MB-HDS207",
          "image": "assets/images/mbcrusher/products/shaft-screeners/mb-hds207.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 1.3,
              "max": 2.8
            },
            {
              "type": "backhoe",
              "min": 3,
              "max": 4
            }
          ],
          "description": [
            "Weighing 98 kg, the unit is suitable for mini excavators with an operating weight ranging from 1.3 to 2.8 tons.",
            "Optimally designed to collect and process material.",
            "The coupler’s connection is located in the centre of the machine and is lower compared to the rest of the structure. This design creates less stress on the frame, improving manoeuvrability and more precision when processing material. The design also increases productivity.",
            "The gears are protected, thanks to the fixed cover that shields them from harmful materials (sand, dirt, etc.)",
            "The welded cover behind the machine protects the bolts and side casings.",
            "The operator can easily replace the shafts on the job site.",
            "Maintenance is simple and happens directly on site.",
            "The shaft holder is included. The unit can be equipped with a kit that increases the unit’s load capacity, which goes from 50l to 60l.",
            "Note: Only compatible with the rear (backhoe) boom of a backhoe loader.",
            "Note: The package includes an RQ Shaft Kit. The weight may vary based on the installed kit."
          ],
          "specs": [
            {
              "label": "Oil flow rate",
              "value": "25–35 L/min"
            },
            {
              "label": "Load capacity",
              "value": "0.05 m³"
            },
            {
              "label": "Weight",
              "value": "98 kg"
            },
            {
              "label": "Pressure",
              "value": "200–220 bar"
            },
            {
              "label": "Back pressure",
              "value": "< 20 bar"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/shaft-screeners/mb-hds207/1.webp",
            "assets/images/mbcrusher/gallery/shaft-screeners/mb-hds207/2.webp"
          ],
          "video": "https://vimeo.com/687148555",
          "accessories": [
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Shafts holder",
              "id": "shaft-holder"
            },
            {
              "name": "RQ8 sifting kit",
              "id": "rq8-sifting-kit"
            },
            {
              "name": "RQ15 sifting kit",
              "id": "rq15-sifting-kit"
            },
            {
              "name": "RM mixer kit",
              "id": "rc-mixer-kit"
            },
            {
              "name": "Load capacity increase kit",
              "id": "load-capacity-increase-kit"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/f9427d57bcc739293afeac9d651dd199e5e144c0/SchedaProdotto_A4_EU_MB-HDS207_EN_Rev20261125.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/0cf3d33f6f426f8135d7e6264ae4785af5ed7eb6/SchedaProdotto_A4_US_MB-HDS207_EN_Rev20261125.pdf?download=1"
            }
          ]
        },
        {
          "id": "mb-hds307",
          "name": "MB-HDS307",
          "tagline": "For excavators",
          "image": "assets/images/mbcrusher/products/shaft-screeners/mb-hds307.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 2.5,
              "max": 5
            },
            {
              "type": "backhoe",
              "min": 4,
              "max": 6
            }
          ],
          "description": [
            "The new MB-HDS307 shafts screener for 2.5 to 5 tonne excavators is the ideal attachment for all sites that need to combine efficiency and versatility in a compact piece of equipment. It is perfect for selecting material for covering pipes or trenches and creating the bedding; aerating packed soil; reclaiming and cleaning soils from various demolition debris, stones or roots and moving materials of different types and sizes.",
            "Note: Only compatible with the rear (backhoe) boom of a backhoe loader.",
            "Note: The package includes an RQ Shaft Kit. The weight may vary based on the installed kit."
          ],
          "specs": [
            {
              "label": "Oil flow rate",
              "value": "25–35 L/min"
            },
            {
              "label": "Load capacity",
              "value": "0.08 m³"
            },
            {
              "label": "Weight",
              "value": "170 kg"
            },
            {
              "label": "Pressure",
              "value": "200–220 bar"
            },
            {
              "label": "Back pressure",
              "value": "< 20 bar"
            }
          ],
          "accessories": [
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Shafts holder",
              "id": "shaft-holder"
            },
            {
              "name": "RQ8 sifting kit",
              "id": "rq8-sifting-kit"
            },
            {
              "name": "RQ15 sifting kit",
              "id": "rq15-sifting-kit"
            },
            {
              "name": "RM mixer kit",
              "id": "rc-mixer-kit"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/fe2fa7f77e97d6560d7ae74a84861dc53ebf2b9a/SchedaProdotto_A4_EU_MB-HDS307_EN_Rev20261125.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/1c506e769bed505bf4a87f5ac56b3c2f9f5d5ec3/SchedaProdotto_A4_US_MB-HDS307_EN_Rev20261125.pdf?download=1"
            }
          ]
        },
        {
          "id": "mb-hds407",
          "name": "MB-HDS407",
          "tagline": "For excavators and backhoe loaders",
          "image": "assets/images/mbcrusher/products/shaft-screeners/mb-hds407.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 3.5,
              "max": 5.5
            },
            {
              "type": "backhoe",
              "min": 6,
              "max": 9
            }
          ],
          "description": [
            "Note: Only compatible with the rear (backhoe) boom of a backhoe loader.",
            "Note: The package includes an RQ Shaft Kit. The weight may vary based on the installed kit."
          ],
          "specs": [
            {
              "label": "Oil flow rate",
              "value": "25–35 L/min"
            },
            {
              "label": "Load capacity",
              "value": "0.14 m³"
            },
            {
              "label": "Weight",
              "value": "280 kg"
            },
            {
              "label": "Pressure",
              "value": "200–220 bar"
            },
            {
              "label": "Back pressure",
              "value": "< 20 bar"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/shaft-screeners/mb-hds407/1.webp"
          ],
          "accessories": [
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Shafts holder",
              "id": "shaft-holder"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/66ebceeeb7bb7e366922b7d93e1da0ab70858dd6/SchedaProdotto_A4_EU_MB-HDS407_EN_Rev20261119.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/e3741b709ff4e0c5607a9c92d959c1621e6d1f87/SchedaProdotto_A4_US_MB-HDS407_EN_Rev20261119.pdf?download=1"
            }
          ]
        },
        {
          "id": "mb-hds212",
          "name": "MB-HDS212",
          "image": "assets/images/mbcrusher/products/shaft-screeners/mb-hds212.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 5,
              "max": 10
            },
            {
              "type": "backhoe",
              "min": 8,
              "max": 9
            },
            {
              "type": "skid",
              "min": 3,
              "max": 4
            }
          ],
          "description": [
            "Weighing 480kg, the MB-HDS212 bucket is compatible with midi excavators with weights ranging from 5 to 10 tons, backhoe loaders weighing from 8 to 9 tons, and skid from 3 to 4 tons.",
            "The bucket’s shape is optimal when collecting and processing material",
            "The coupler’s connection is located at the top of the machine and is lower than the rest of the structure, causing less wear on the unit’s frame, greater manoeuvrability and more precision and control. It is designed to increase productivity.",
            "Thanks to the fixed covers, the gears are protected and the inside parts of the machine is shielded from potentially harmful materials (sand, dirt, etc.)",
            "The welded covers on the back of the machine shields the bolts and side casings.",
            "The operator can easily replace the shafts on site.",
            "Maintenance is simple and happens directly on site.",
            "The shaft holder is supplied. The shape of the unit enables the material to travel toward the rotating shafts, allowing for greater productivity.",
            "Note: Only compatible with the rear (backhoe) boom of a backhoe loader.",
            "Note: Skid steer loaders: please verify the machine's rated operating capacity.",
            "Note: The package includes an RQ Shaft Kit. The weight may vary based on the installed kit."
          ],
          "specs": [
            {
              "label": "Oil flow rate",
              "value": "75–100 L/min"
            },
            {
              "label": "Load capacity",
              "value": "0.15 m³"
            },
            {
              "label": "Weight",
              "value": "480 kg"
            },
            {
              "label": "Pressure",
              "value": "200–250 bar"
            },
            {
              "label": "Back pressure",
              "value": "< 20 bar"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/shaft-screeners/mb-hds212/1.webp",
            "assets/images/mbcrusher/gallery/shaft-screeners/mb-hds212/2.webp"
          ],
          "video": "https://vimeo.com/687148555",
          "accessories": [
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Shafts holder",
              "id": "shaft-holder"
            },
            {
              "name": "RQ8 sifting kit",
              "id": "rq8-sifting-kit"
            },
            {
              "name": "RQ20 sifting kit",
              "id": "rq20-rq50-medium-sifting-kit"
            },
            {
              "name": "RQ50 sifting kit",
              "id": "rq20-rq50-medium-sifting-kit"
            },
            {
              "name": "RM mixer kit",
              "id": "rc-mixer-kit"
            },
            {
              "name": "RE8 fine sifting kit",
              "id": "re8-re16-fine-sifting-kit-compost-kit"
            },
            {
              "name": "RE16 fine sifting kit",
              "id": "re8-re16-fine-sifting-kit-compost-kit"
            },
            {
              "name": "RC compost kit",
              "id": "rc-compost-kit"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/1d155484a31f6bc5febcf9bf3eb72247a13315e2/SchedaProdotto_A4_EU_MB-HDS212_EN_Rev20261119.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/eb32bead43bb39c4a2c50d0b33e52668409fd03f/SchedaProdotto_A4_US_MB-HDS212_EN_Rev20261119.pdf?download=1"
            }
          ]
        },
        {
          "id": "mb-hds312",
          "name": "MB-HDS312",
          "tagline": "For excavators",
          "image": "assets/images/mbcrusher/products/shaft-screeners/mb-hds312.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 7,
              "max": 11
            }
          ],
          "description": [
            "The new MB-HDS312 shafts screener for 7 to 11 tonne excavators is the ideal attachment for all sites that need to combine efficiency and versatility in a compact piece of equipment. It is perfect for selecting material for covering pipes or trenches and creating the bedding; aerating packed soil; reclaiming and cleaning soils from various demolition debris, stones or roots and moving materials of different types and sizes.",
            "Note: The package includes an RQ Shaft Kit. The weight may vary based on the installed kit."
          ],
          "specs": [
            {
              "label": "Oil flow rate",
              "value": "75–100 L/min"
            },
            {
              "label": "Load capacity",
              "value": "0.35 m³"
            },
            {
              "label": "Weight",
              "value": "720 kg"
            },
            {
              "label": "Pressure",
              "value": "200–250 bar"
            },
            {
              "label": "Back pressure",
              "value": "< 20 bar"
            }
          ],
          "accessories": [
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Shafts holder",
              "id": "shaft-holder"
            },
            {
              "name": "RQ8 sifting kit",
              "id": "rq8-sifting-kit"
            },
            {
              "name": "RQ20 sifting kit",
              "id": "rq20-rq50-medium-sifting-kit"
            },
            {
              "name": "RQ50 sifting kit",
              "id": "rq20-rq50-medium-sifting-kit"
            },
            {
              "name": "RM mixer kit",
              "id": "rc-mixer-kit"
            },
            {
              "name": "RE8 fine sifting kit",
              "id": "re8-re16-fine-sifting-kit-compost-kit"
            },
            {
              "name": "RE16 fine sifting kit",
              "id": "re8-re16-fine-sifting-kit-compost-kit"
            },
            {
              "name": "RC compost kit",
              "id": "rc-compost-kit"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/01385f351c94704e80be23b6bc629db5e1f542e4/SchedaProdotto_A4_EU_MB-HDS312_EN_Rev20261119.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/50e62b0c7c663efb709435f33803835e2b915605/SchedaProdotto_A4_US_MB-HDS312_EN_Rev20261119.pdf?download=1"
            }
          ]
        },
        {
          "id": "mb-hds214",
          "name": "MB-HDS214",
          "image": "assets/images/mbcrusher/products/shaft-screeners/mb-hds214.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 5,
              "max": 8
            },
            {
              "type": "demolition",
              "min": 6,
              "max": 12
            },
            {
              "type": "crane",
              "min": 3.5,
              "max": null
            },
            {
              "type": "backhoe",
              "min": 8,
              "max": 13
            },
            {
              "type": "skid",
              "min": 4,
              "max": 10
            }
          ],
          "description": [
            "Designed to be a real wild card: fitting for a wide range of job sites and various types of materials, with unprecedented simplicity and speed, without the need for specific training or specialized operators."
          ],
          "specs": [
            {
              "label": "Weight",
              "value": "0.82 t"
            },
            {
              "label": "Load capacity",
              "value": "0.5 m³"
            },
            {
              "label": "Pressure",
              "value": "> 200 bar"
            },
            {
              "label": "Oil flow",
              "value": "75 L/min"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/shaft-screeners/shaftscreener/1.webp",
            "assets/images/mbcrusher/gallery/shaft-screeners/shaftscreener/2.webp",
            "assets/images/mbcrusher/gallery/shaft-screeners/shaftscreener/3.webp",
            "assets/images/mbcrusher/gallery/shaft-screeners/shaftscreener/4.webp"
          ],
          "video": "https://vimeo.com/395677670",
          "accessories": [
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Shafts holder",
              "id": "shaft-holder"
            },
            {
              "name": "RQ8 sifting kit",
              "id": "rq8-sifting-kit"
            },
            {
              "name": "RQ15 sifting kit",
              "id": "rq15-sifting-kit"
            },
            {
              "name": "RQ20 sifting kit",
              "id": "rq20-rq50-medium-sifting-kit"
            },
            {
              "name": "RQ50 sifting kit",
              "id": "rq20-rq50-medium-sifting-kit"
            },
            {
              "name": "RM mixer kit",
              "id": "rc-mixer-kit"
            },
            {
              "name": "RE8 fine sifting kit",
              "id": "re8-re16-fine-sifting-kit-compost-kit"
            },
            {
              "name": "RE16 fine sifting kit",
              "id": "re8-re16-fine-sifting-kit-compost-kit"
            },
            {
              "name": "RC compost kit",
              "id": "rc-compost-kit"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/776fbe9fa4b330c2035eed6e38808fe697f86e2f/SchedaProdotto_A4_EU_MB-HDS214_EN_Rev20261119.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/4e5cb5c1aae7362f85270ce36ee95af11809a090/SchedaProdotto_A4_US_MB-HDS214_EN_Rev20261119.pdf?download=1"
            }
          ]
        },
        {
          "id": "mb-hds220",
          "name": "MB-HDS220",
          "image": "assets/images/mbcrusher/products/shaft-screeners/mb-hds220.webp",
          "carriers": [
            {
              "type": "backhoe",
              "min": 7,
              "max": 11
            },
            {
              "type": "skid",
              "min": 4.5,
              "max": 10
            }
          ],
          "description": [
            "1-tonne weight and a load capacity of 0.6 m3 for a versatile and reliable piece of equipment: MB Crusher brought the new MB-HDS220 padding bucket at Bauma 2022, suitable for loaders and skid steer loaders from 4.5 to 11 tons. Practicality, reliability and productivity on site Compact, versatile and extremely manoeuvrable, the new MB Crusher MB-HDS220 padding bucket is designed to make work easier, reduce processing time and save on operating costs. The size of its inlet mouth opening - 2.20 m - facilitates loading by ensuring that the tracks or wheels of the carrier machine remain clean. The inlet is designed to quickly convey material to the rotors. Maintenance is simple - greasing is centralised and done on-site, as with all MB Crusher products. The coupling system is designed to allow maximum freedom of movement of the operating machine. This system allows excellent visibility of the material to be worked on and of the site As with the other HDS models, the MB-HDS-220 allows the rotors to be changed easily and directly on-site by the operator. This makes it a versatile machine, with which different types of material can be processed easily and quickly.",
            "Note: Skid steer loaders: please verify the machine's rated operating capacity.",
            "Note: The package includes an RQ Shaft Kit. The weight may vary based on the installed kit."
          ],
          "specs": [
            {
              "label": "Oil flow rate",
              "value": "90–150 L/min"
            },
            {
              "label": "Load capacity",
              "value": "0.60 m³"
            },
            {
              "label": "Weight",
              "value": "1.00 t"
            },
            {
              "label": "Pressure",
              "value": "230–280 bar"
            },
            {
              "label": "Back pressure",
              "value": "< 20 bar"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/shaft-screeners/mb-hds220/1.webp",
            "assets/images/mbcrusher/gallery/shaft-screeners/mb-hds220/2.webp"
          ],
          "video": "https://vimeo.com/678564962",
          "accessories": [
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Shafts holder",
              "id": "shaft-holder"
            },
            {
              "name": "RQ8 sifting kit",
              "id": "rq8-sifting-kit"
            },
            {
              "name": "RQ20 sifting kit",
              "id": "rq20-rq50-medium-sifting-kit"
            },
            {
              "name": "RM mixer kit",
              "id": "rc-mixer-kit"
            },
            {
              "name": "RE8 fine sifting kit",
              "id": "re8-re16-fine-sifting-kit-compost-kit"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/4bf6bbe692c390da3e596e54b4cb30d66ff6d18f/SchedaProdotto_A4_EU_MB-HDS220_EN_Rev20261119.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/250f3fa6c7eee9715beb50b3492422765a1cfb86/SchedaProdotto_A4_US_MB-HDS220_EN_Rev20261119.pdf?download=1"
            }
          ]
        },
        {
          "id": "mb-hds412",
          "name": "MB-HDS412",
          "tagline": "For excavators",
          "image": "assets/images/mbcrusher/products/shaft-screeners/mb-hds412.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 10,
              "max": 14
            }
          ],
          "description": [
            "The new MB-HDS412 shafts screener for 10 to 14 tonne excavators is the ideal attachment for all sites that need to combine efficiency and versatility in a compact piece of equipment. It is perfect for selecting material for covering pipes or trenches and creating the bedding; aerating packed soil; reclaiming and cleaning soils from various demolition debris, stones or roots and moving materials of different types and sizes.",
            "Note: The package includes an RQ Shaft Kit. The weight may vary based on the installed kit."
          ],
          "specs": [
            {
              "label": "Oil flow rate",
              "value": "90–150 L/min"
            },
            {
              "label": "Load capacity",
              "value": "0.55 m³"
            },
            {
              "label": "Weight",
              "value": "1.20 t"
            },
            {
              "label": "Pressure",
              "value": "230–280 bar"
            },
            {
              "label": "Back pressure",
              "value": "< 20 bar"
            }
          ],
          "accessories": [
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Shafts holder",
              "id": "shaft-holder"
            },
            {
              "name": "RQ8 sifting kit",
              "id": "rq8-sifting-kit"
            },
            {
              "name": "RQ20 sifting kit",
              "id": "rq20-rq50-medium-sifting-kit"
            },
            {
              "name": "RQ50 sifting kit",
              "id": "rq20-rq50-medium-sifting-kit"
            },
            {
              "name": "RM mixer kit",
              "id": "rc-mixer-kit"
            },
            {
              "name": "RE8 fine sifting kit",
              "id": "re8-re16-fine-sifting-kit-compost-kit"
            },
            {
              "name": "RE16 fine sifting kit",
              "id": "re8-re16-fine-sifting-kit-compost-kit"
            },
            {
              "name": "RC compost kit",
              "id": "rc-compost-kit"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/ad62fe733eda0ea96631595bb70c1fa5e06a7585/SchedaProdotto_A4_EU_MB-HDS412_EN_Rev20261119.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/c444c957ed146644dbfad4e3d03c28d23f1230ec/SchedaProdotto_A4_US_MB-HDS412_EN_Rev20261119.pdf?download=1"
            }
          ]
        },
        {
          "id": "mb-hds314",
          "name": "MB-HDS314",
          "image": "assets/images/mbcrusher/products/shaft-screeners/mb-hds314.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 6,
              "max": 10
            },
            {
              "type": "demolition",
              "min": 6,
              "max": 10
            },
            {
              "type": "crane",
              "min": 3.5,
              "max": null
            },
            {
              "type": "loader",
              "min": 9,
              "max": 14
            }
          ],
          "description": [
            "Designed with our constructive approach towards reducing waste and increasing the profitability of the construction site, this machine is the latest “gem” in the MB Crusher line.",
            "What is new about the MB-HDS Shafts Screener? Its ability to adapt to a wide range of job sites and varied types of materials.",
            "It is the ideal solution for those who have to process various kind of waste material, which can be quickly repurposed into re-usable and profitable material."
          ],
          "specs": [
            {
              "label": "Weight",
              "value": "1.4 t"
            },
            {
              "label": "Load capacity",
              "value": "0.9 m³"
            },
            {
              "label": "Pressure",
              "value": "> 230 bar"
            },
            {
              "label": "Oil flow",
              "value": "100 L/min"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/shaft-screeners/hds314/1.webp",
            "assets/images/mbcrusher/gallery/shaft-screeners/hds314/2.webp",
            "assets/images/mbcrusher/gallery/shaft-screeners/hds314/3.webp",
            "assets/images/mbcrusher/gallery/shaft-screeners/hds314/4.webp"
          ],
          "video": "https://vimeo.com/395675815",
          "accessories": [
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Shafts holder",
              "id": "shaft-holder"
            },
            {
              "name": "RQ8 sifting kit",
              "id": "rq8-sifting-kit"
            },
            {
              "name": "RQ20 sifting kit",
              "id": "rq20-rq50-medium-sifting-kit"
            },
            {
              "name": "RQ50 sifting kit",
              "id": "rq20-rq50-medium-sifting-kit"
            },
            {
              "name": "RM mixer kit",
              "id": "rc-mixer-kit"
            },
            {
              "name": "RE8 fine sifting kit",
              "id": "re8-re16-fine-sifting-kit-compost-kit"
            },
            {
              "name": "RE16 fine sifting kit",
              "id": "re8-re16-fine-sifting-kit-compost-kit"
            },
            {
              "name": "RC compost kit",
              "id": "rc-compost-kit"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/0f70dd347f884876ef1986166eb35e828b750f20/SchedaProdotto_A4_EU_MB-HDS314_EN_Rev20261119.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/5d410b87ec4cb838c694889d9097f6213fe2a665/SchedaProdotto_A4_US_MB-HDS314_EN_Rev20261119.pdf?download=1"
            }
          ]
        },
        {
          "id": "mb-hds320",
          "name": "MB-HDS320",
          "image": "assets/images/mbcrusher/products/shaft-screeners/mb-hds320.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 9,
              "max": 12
            },
            {
              "type": "demolition",
              "min": 9,
              "max": 12
            },
            {
              "type": "crane",
              "min": 3.5,
              "max": null
            },
            {
              "type": "loader",
              "min": 11,
              "max": 14
            }
          ],
          "description": [
            "The new MB-HDS series selects and crushes excavation and demolition materials, asphalt, coal, organic materials, wood, bark, and light plastics. It also enables products to be re-purposed immediately on site. It is possible to transform one material into another effortlessly any time you need to: this is the most important and useful innovation.",
            "In fact, with the MB-HDS Screening Bucket, you can easily change the rotating shafts on site in complete safety: one person can do this in a matter of minutes."
          ],
          "specs": [
            {
              "label": "Weight",
              "value": "2.1 t"
            },
            {
              "label": "Load capacity",
              "value": "1.35 m³"
            },
            {
              "label": "Pressure",
              "value": "> 250 bar"
            },
            {
              "label": "Oil flow",
              "value": "120 L/min"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/shaft-screeners/hds320/1.webp",
            "assets/images/mbcrusher/gallery/shaft-screeners/hds320/2.webp",
            "assets/images/mbcrusher/gallery/shaft-screeners/hds320/3.webp",
            "assets/images/mbcrusher/gallery/shaft-screeners/hds320/4.webp"
          ],
          "video": "https://vimeo.com/395174157",
          "accessories": [
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Shafts holder",
              "id": "shaft-holder"
            },
            {
              "name": "RQ8 sifting kit",
              "id": "rq8-sifting-kit"
            },
            {
              "name": "RQ20 sifting kit",
              "id": "rq20-rq50-medium-sifting-kit"
            },
            {
              "name": "RQ50 sifting kit",
              "id": "rq20-rq50-medium-sifting-kit"
            },
            {
              "name": "RM mixer kit",
              "id": "rc-mixer-kit"
            },
            {
              "name": "RE8 fine sifting kit",
              "id": "re8-re16-fine-sifting-kit-compost-kit"
            },
            {
              "name": "RE16 fine sifting kit",
              "id": "re8-re16-fine-sifting-kit-compost-kit"
            },
            {
              "name": "RC compost kit",
              "id": "rc-compost-kit"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/f4d685490306b8e3c3f536037d492f6cdbd876df/SchedaProdotto_A4_EU_MB-HDS320_EN_Rev20261119.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/fd424461c2233bdebc05a1632a77981496c48ffe/SchedaProdotto_A4_US_MB-HDS320_EN_Rev20261119.pdf?download=1"
            }
          ]
        },
        {
          "id": "mb-hds323",
          "name": "MB-HDS323",
          "image": "assets/images/mbcrusher/products/shaft-screeners/mb-hds323.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 10,
              "max": 15
            },
            {
              "type": "demolition",
              "min": 10,
              "max": 15
            },
            {
              "type": "crane",
              "min": 3.5,
              "max": null
            },
            {
              "type": "loader",
              "min": 12,
              "max": 16
            }
          ],
          "description": [
            "Designed with our constructive approach towards reducing waste and increasing the profitability of the construction site, this machine is the latest “gem.” Designed and produced by an Italian company famous all over the world: what’s new about the MB-HDS Shafts Screener is its ability to adapt to a wide range of job sites and varied types of materials.",
            "It is the ideal solution for those who have to process various kind of waste material, which can be quickly repurposed into re-usable and profitable material."
          ],
          "specs": [
            {
              "label": "Weight",
              "value": "2.4 t"
            },
            {
              "label": "Load capacity",
              "value": "1.65 m³"
            },
            {
              "label": "Pressure",
              "value": "> 250 bar"
            },
            {
              "label": "Oil flow",
              "value": "120 L/min"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/shaft-screeners/hds323/1.webp",
            "assets/images/mbcrusher/gallery/shaft-screeners/hds323/2.webp",
            "assets/images/mbcrusher/gallery/shaft-screeners/hds323/3.webp",
            "assets/images/mbcrusher/gallery/shaft-screeners/hds323/4.webp"
          ],
          "video": "https://vimeo.com/395682734",
          "accessories": [
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Shafts holder",
              "id": "shaft-holder"
            },
            {
              "name": "RQ8 sifting kit",
              "id": "rq8-sifting-kit"
            },
            {
              "name": "RQ20 sifting kit",
              "id": "rq20-rq50-medium-sifting-kit"
            },
            {
              "name": "RQ50 sifting kit",
              "id": "rq20-rq50-medium-sifting-kit"
            },
            {
              "name": "RM mixer kit",
              "id": "rc-mixer-kit"
            },
            {
              "name": "RE8 fine sifting kit",
              "id": "re8-re16-fine-sifting-kit-compost-kit"
            },
            {
              "name": "RE16 fine sifting kit",
              "id": "re8-re16-fine-sifting-kit-compost-kit"
            },
            {
              "name": "RC compost kit",
              "id": "rc-compost-kit"
            },
            {
              "name": "Load capacity increase kit",
              "id": "load-capacity-increase-kit"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/ac6fae8bb1b3d9d16c48d222c971452a6dfc8e40/SchedaProdotto_A4_EU_MB-HDS323_EN_Rev20261119.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/109ee5f427ca33e81c2d146cae90585a4c62f242/SchedaProdotto_A4_US_MB-HDS323_EN_Rev20261119.pdf?download=1"
            }
          ]
        },
        {
          "id": "mb-hds523",
          "name": "MB-HDS523",
          "image": "assets/images/mbcrusher/products/shaft-screeners/mb-hds523.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 30,
              "max": 45
            }
          ],
          "description": [
            "The MB-HDS523 shafts screener is the equipment you want on-site for large quantities and large volumes. It’s the biggest, strongest, and toughest unit in the range.",
            "Created mainly for the mining and quarry industry, the attachment can also be used to move, sift, and aerate huge quantities of soil on excavation and earthmoving jobs and in large trenching and road works projects.",
            "Equipped with the “V Shaft System” designed to create a simultaneous dual screening effect and to increase production."
          ],
          "specs": [
            {
              "label": "Weight",
              "value": "3.35 t"
            },
            {
              "label": "Load capacity",
              "value": "2.00 m³"
            },
            {
              "label": "Pressure",
              "value": "> 250 bar"
            },
            {
              "label": "Oil flow",
              "value": "230 L/min"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/shaft-screeners/hd523/1.webp",
            "assets/images/mbcrusher/gallery/shaft-screeners/hd523/2.webp",
            "assets/images/mbcrusher/gallery/shaft-screeners/hd523/3.webp",
            "assets/images/mbcrusher/gallery/shaft-screeners/hd523/4.webp"
          ],
          "video": "https://vimeo.com/547995047",
          "accessories": [
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Shafts holder",
              "id": "shaft-holder"
            },
            {
              "name": "RQ8 sifting kit",
              "id": "rq8-sifting-kit"
            },
            {
              "name": "RQ20 sifting kit",
              "id": "rq20-rq50-medium-sifting-kit"
            },
            {
              "name": "RQ50 sifting kit",
              "id": "rq20-rq50-medium-sifting-kit"
            },
            {
              "name": "RM mixer kit",
              "id": "rc-mixer-kit"
            },
            {
              "name": "RE8 fine sifting kit",
              "id": "re8-re16-fine-sifting-kit-compost-kit"
            },
            {
              "name": "RE16 fine sifting kit",
              "id": "re8-re16-fine-sifting-kit-compost-kit"
            },
            {
              "name": "RC compost kit",
              "id": "rc-compost-kit"
            },
            {
              "name": "Load capacity increase kit",
              "id": "load-capacity-increase-kit"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/4a71fb2074f986b9c15fe381c42e68dab7572619/SchedaProdotto_A4_EU_MB-HDS523_EN_Rev20261119.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/78a8b1b6a901de8e922aab76f39d62b9b8498448/SchedaProdotto_A4_US_MB-HDS523_EN_Rev20261119.pdf?download=1"
            }
          ]
        },
        {
          "id": "mb-hds533",
          "name": "MB-HDS533",
          "tagline": "For excavators",
          "image": "assets/images/mbcrusher/products/shaft-screeners/mb-hds533.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 50,
              "max": 80
            },
            {
              "type": "loader",
              "min": 30,
              "max": 50
            }
          ],
          "description": [
            "Note: Loaders: please verify the machine's rated operating capacity.",
            "Note: The package includes an RQ Shaft Kit. The weight may vary based on the installed kit."
          ],
          "specs": [
            {
              "label": "Oil flow rate",
              "value": "230–250 L/min"
            },
            {
              "label": "Load capacity",
              "value": "3.80–5.20 m³"
            },
            {
              "label": "Weight",
              "value": "6.60 t"
            },
            {
              "label": "Pressure",
              "value": "250–300 bar"
            },
            {
              "label": "Back pressure",
              "value": "< 20 bar"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/shaft-screeners/mb-hds533/1.webp"
          ],
          "accessories": [
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Hour meter",
              "id": "hour-meter"
            },
            {
              "name": "Shafts holder",
              "id": "shaft-holder"
            },
            {
              "name": "RM mixer kit",
              "id": "rc-mixer-kit"
            },
            {
              "name": "RQ45 sifting kit",
              "id": "rq45-sifting-kit"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/9425f2f544a3328139378644fd1cfac7aaae50b6/SchedaProdotto_A4_EU_MB-HDS533_EN_Rev20261119.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/683c13d229b4e7a11d993e44e4672decb26717c5/SchedaProdotto_A4_US_MB-HDS533_EN_Rev20261119.pdf?download=1"
            }
          ]
        }
      ]
    },
    {
      id: "drum-cutters",
      name: "Drum Cutters",
      series: "MB-R",
      summary: "Suitable for any application requiring hard material to be cut or ground away.",
      icon: "assets/images/mbcrusher/categories/drum-cutters.webp",
      specNote: "The hydraulic flow and pressure must both meet the required parameters.",
      products: [
        {
          "id": "mb-r500",
          "name": "MB-R500",
          "tagline": "The Jack of all trades",
          "image": "assets/images/mbcrusher/products/drum-cutters/mb-r500.webp",
          "carriers": [
            {
              "type": "crane",
              "min": 3.5,
              "max": 11
            },
            {
              "type": "excavator",
              "min": 3.5,
              "max": 6
            },
            {
              "type": "skid",
              "min": 3.5,
              "max": 6
            }
          ],
          "description": [
            "The new MB-R500 is the smallest cutter head of MB Crusher range. It weighs only 300 kg and can be installed on mini and midi excavators from 3.5 to 11 tons, on skid steer loaders and backhoe loaders from 3.5 tons.",
            "Its powerful cutter head has a diameter of 500 mm and grinds with extreme precision. Its drum can be replaced on site in less than an hour, without the need to take the unit to a specialised workshop.",
            "It is easy to use and makes work on different sites easy, especially those that require precision."
          ],
          "specs": [
            {
              "label": "Cut width",
              "value": "450 mm"
            },
            {
              "label": "Speed (min/max)",
              "value": "80/120 rpm"
            },
            {
              "label": "Output torque",
              "value": "5000 Nm"
            },
            {
              "label": "Pressure",
              "value": "> 350 bar"
            },
            {
              "label": "Counter pressure",
              "value": "< 4 bar"
            },
            {
              "label": "Weight",
              "value": "0.3 t"
            },
            {
              "label": "Oil flow",
              "value": "60–120 L/min"
            },
            {
              "label": "Drum diameter",
              "value": "500 mm"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/drum-cutters/r500/1.webp",
            "assets/images/mbcrusher/gallery/drum-cutters/r500/2.webp",
            "assets/images/mbcrusher/gallery/drum-cutters/r500/3.webp",
            "assets/images/mbcrusher/gallery/drum-cutters/r500/4.webp"
          ],
          "video": "https://vimeo.com/360986142",
          "accessories": [
            {
              "name": "The dust supression kit",
              "id": "the-dust-suppression-kit"
            },
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Drum cover kit",
              "id": "drum-cover-kit"
            },
            {
              "name": "Cutting depth adjustment kit",
              "id": "cutting-depth-adjustment-kit"
            },
            {
              "name": "Cutter body rotation kit",
              "id": "cutter-body-rotation-kit"
            },
            {
              "name": "Rock and asphalt pick kits",
              "id": "rock-and-asphalt-pick-kit"
            },
            {
              "name": "Drum kit",
              "id": "drum-kit"
            },
            {
              "name": "Power transmission kit",
              "id": "power-transmission-kit"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/e9f9a922487f724bce5e9f2601affd192bee0870/SchedaProdotto_A4_EU_MB-R500_EN_Rev20261125.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/6f2cbc265910d5840b55fcbfe75c7ceb9a46e705/SchedaProdotto_A4_US_MB-R500_EN_Rev20261125.pdf?download=1"
            }
          ]
        },
        {
          "id": "mb-r700",
          "name": "MB-R700",
          "tagline": "Small and efficient",
          "image": "assets/images/mbcrusher/products/drum-cutters/mb-r700.webp",
          "carriers": [
            {
              "type": "crane",
              "min": 6,
              "max": 13
            },
            {
              "type": "excavator",
              "min": 6,
              "max": 10
            },
            {
              "type": "skid",
              "min": 6,
              "max": 10
            }
          ],
          "description": [
            "Precise and powerful, the MB-R700 drum cutter model allows the accurate processing of natural materials (rock and stone), and the levelling of plasterwork, wall coverings and surfaces in concrete.",
            "The low levels of noise generated, and the limited levels of vibration, render this machine ideal for use in delicate areas and residential centres."
          ],
          "specs": [
            {
              "label": "Cut width",
              "value": "890 mm"
            },
            {
              "label": "Pick force",
              "value": "19600 N"
            },
            {
              "label": "Speed (min/max)",
              "value": "80/110 rpm"
            },
            {
              "label": "Output torque",
              "value": "5000 Nm"
            },
            {
              "label": "Pressure",
              "value": "> 350 bar"
            },
            {
              "label": "Counter pressure",
              "value": "< 4 bar"
            },
            {
              "label": "Weight",
              "value": "0.6 t"
            },
            {
              "label": "Oil flow",
              "value": "110–180 L/min"
            },
            {
              "label": "Drum diameter",
              "value": "500 mm"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/drum-cutters/r700/1.webp",
            "assets/images/mbcrusher/gallery/drum-cutters/r700/2.webp",
            "assets/images/mbcrusher/gallery/drum-cutters/r700/3.webp"
          ],
          "video": "https://vimeo.com/295534087",
          "accessories": [
            {
              "name": "The dust supression kit",
              "id": "the-dust-suppression-kit"
            },
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Rock and asphalt pick kits",
              "id": "rock-and-asphalt-pick-kit"
            },
            {
              "name": "Drum kit",
              "id": "drum-kit"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/770f87a005c0f6abe956496c558bc3c47008ab33/SchedaProdotto_A4_EU_MB-R700_EN_Rev20261125.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/cae41dc60015d6e286858806d43da234d01c6f81/SchedaProdotto_A4_US_MB-R700_EN_Rev20261125.pdf?download=1"
            }
          ]
        },
        {
          "id": "mb-r800",
          "name": "MB-R800",
          "tagline": "Agile and efficient",
          "image": "assets/images/mbcrusher/products/drum-cutters/mb-r800.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 10,
              "max": 22
            }
          ],
          "description": [
            "Precise and powerful, the MB-R800 drum cutter allows for the accurate processing of natural materials (rock and stone), and the levelling of plasterwork, wall coatings and concrete surfaces.",
            "The low levels of noise generated, and the limited levels of vibration, render this machine ideal for use in quite and residential centres."
          ],
          "specs": [
            {
              "label": "Cut width",
              "value": "1015 mm"
            },
            {
              "label": "Pick force",
              "value": "33900 N"
            },
            {
              "label": "Speed (min/max)",
              "value": "60/80 rpm"
            },
            {
              "label": "Output torque",
              "value": "10000 Nm"
            },
            {
              "label": "Pressure",
              "value": "> 350 bar"
            },
            {
              "label": "Counter pressure",
              "value": "< 4 bar"
            },
            {
              "label": "Weight",
              "value": "1 t"
            },
            {
              "label": "Oil flow",
              "value": "200–300 L/min"
            },
            {
              "label": "Drum diameter",
              "value": "600 mm"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/drum-cutters/r800/1.webp",
            "assets/images/mbcrusher/gallery/drum-cutters/r800/mb-r800-komatsu-pc200-bolivia-rocks-granite-640x640.webp",
            "assets/images/mbcrusher/gallery/drum-cutters/r800/3.webp",
            "assets/images/mbcrusher/gallery/drum-cutters/r800/4.webp"
          ],
          "video": "https://vimeo.com/295529472",
          "accessories": [
            {
              "name": "The dust supression kit",
              "id": "the-dust-suppression-kit"
            },
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Rock and asphalt pick kits",
              "id": "rock-and-asphalt-pick-kit"
            },
            {
              "name": "Drum kit",
              "id": "drum-kit"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/1507a9ce0e3f4d59823fc6e400c0909d5cdda399/SchedaProdotto_A4_EU_MB-R800_EN_Rev20261125.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/ad9e14a729c01fb02a3bb2bb87be4375211dafd2/SchedaProdotto_A4_US_MB-R800_EN_Rev20261125.pdf?download=1"
            }
          ]
        },
        {
          "id": "mb-r900",
          "name": "MB-R900",
          "tagline": "Great performance",
          "image": "assets/images/mbcrusher/products/drum-cutters/mb-r900.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 19,
              "max": 35
            }
          ],
          "description": [
            "Precise and powerful, the MB-R900 drum cutter is the largest in the range and allows for the accurate processing of natural materials (rock and stone), and the levelling of plasterwork, wall coatings and concrete surfaces.",
            "The low levels of noise generated, and the limited levels of vibration, render this machine ideal for use in quite and residential centres.",
            "Suitable for any application requiring hard materials to be cut or ground away."
          ],
          "specs": [
            {
              "label": "Cut width",
              "value": "1130 mm"
            },
            {
              "label": "Pick force",
              "value": "40000 N"
            },
            {
              "label": "Speed (min/max)",
              "value": "60/80 rpm"
            },
            {
              "label": "Output torque",
              "value": "13200 Nm"
            },
            {
              "label": "Pressure",
              "value": "> 350 bar"
            },
            {
              "label": "Counter pressure",
              "value": "< 4 bar"
            },
            {
              "label": "Weight",
              "value": "1.4 t"
            },
            {
              "label": "Oil flow",
              "value": "250–350 L/min"
            },
            {
              "label": "Drum diameter",
              "value": "680 mm"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/drum-cutters/r900/1.webp",
            "assets/images/mbcrusher/gallery/drum-cutters/r900/2.webp",
            "assets/images/mbcrusher/gallery/drum-cutters/r900/3.webp"
          ],
          "video": "https://vimeo.com/334871138",
          "accessories": [
            {
              "name": "The dust supression kit",
              "id": "the-dust-suppression-kit"
            },
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Rock and asphalt pick kits",
              "id": "rock-and-asphalt-pick-kit"
            },
            {
              "name": "Drum kit",
              "id": "drum-kit"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/5ac40573996d36c42b5001f260e72a46b3bc888b/SchedaProdotto_A4_EU_MB-R900_EN_Rev20261125.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/cd39f4cc4a7f91085635ace04e3a180d0d19ca66/SchedaProdotto_A4_US_MB-R900_EN_Rev20261125.pdf?download=1"
            }
          ]
        }
      ]
    },
    {
      id: "sorting-grapples",
      name: "Sorting Grapples",
      series: "MB-G",
      summary: "Designed for handling, sorting and loading demolition materials.",
      icon: "assets/images/mbcrusher/categories/sorting-grapples.webp",
      specNote: "The hydraulic flow and pressure must both meet the required parameters.",
      products: [
        {
          "id": "mb-g350-s4",
          "name": "MB-G350 S4",
          "tagline": "Compact and precise",
          "image": "assets/images/mbcrusher/products/sorting-grapples/mb-g350-s4.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 1.3,
              "max": 2.6
            }
          ],
          "description": [
            "Compact, versatile, and precise, the MB-G350 sorting grapple works on mini-excavators to handle logs, rocks, debris, poles, to position stones for dry stone walls, separate branches from dirt, etc.",
            "The unit's jaws have a wide opening, so it can grab and handle large materials.",
            "It's equipped with a fall prevention valve, guaranteeing a safe job site. The unit can have an electrical kit installed for two-line functionality, allowing it to use the 360° rotation - even for mini-excavators which come with two hoses."
          ],
          "specs": [
            {
              "label": "Weight",
              "value": "85 kg"
            },
            {
              "label": "Load capacity",
              "value": "0.03 m³ / 30 L"
            },
            {
              "label": "Rotation",
              "value": "360°"
            },
            {
              "label": "Flow direction",
              "value": "5 L/min"
            },
            {
              "label": "Pressure of rotation",
              "value": "150 bar"
            },
            {
              "label": "Pressure (open/close)",
              "value": "200 bar"
            },
            {
              "label": "Oil flow (open/close)",
              "value": "15 L/min"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/sorting-grapples/sortinggrapler/1.webp",
            "assets/images/mbcrusher/gallery/sorting-grapples/sortinggrapler/2.webp",
            "assets/images/mbcrusher/gallery/sorting-grapples/sortinggrapler/3.webp",
            "assets/images/mbcrusher/gallery/sorting-grapples/sortinggrapler/4.webp"
          ],
          "video": "https://vimeo.com/604637830/1a9805045b",
          "accessories": [
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Clam shell kit",
              "id": "clamshell-kit"
            },
            {
              "name": "12 V Electrical Kit for 2 Hose Functionality",
              "id": "12-v-electrical-kit"
            },
            {
              "name": "Serrated side plate kit",
              "id": "serrated-side-plate-kit"
            },
            {
              "name": "Serrated side profile kit",
              "id": "serrated-side-profile-kit"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/b513c3d2b6cbb6c2c19c56d9dba59bd0db17229c/SchedaProdotto_A4_EU_MB-G350%20S4_EN_Rev20261119.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/e257e39194cb53230027af2716b398ca55b99825/SchedaProdotto_A4_US_MB-G350%20S4_EN_Rev20261119.pdf?download=1"
            }
          ]
        },
        {
          "id": "mb-g400-s4",
          "name": "MB-G400 S4",
          "tagline": "For mini excavator",
          "image": "assets/images/mbcrusher/products/sorting-grapples/mb-g400-s4.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 2.4,
              "max": 4
            }
          ],
          "description": [
            "Extremely compact and precise, the new MB-G400 sorting grapple for mini-excavators from 2.4 to 4 tons is designed to facilitate work on-site, in any application area. It is the ideal attachment for moving logs, stones, debris, and piles; placing stones for dry stone walls, and clearing fields of brushwood... Its claws opening is very wide, allowing it to grasp and handle even large materials; the material anti-fall valve guarantees maximum safety; the silent block allows work even in areas where noise needs to be kept under control; wear parts are made of Hardox; it is predisposed for the installation of an electrical kit for two-pipe functionality, which allows work with 360° rotation movement even with excavators that only have a two-pipe system; the interchangeable blades can be turned upside down to extend their life and is available in two versions, with or without a rotation turret."
          ],
          "specs": [
            {
              "label": "Weight",
              "value": "200 kg"
            },
            {
              "label": "Capacity (claws closed)",
              "value": "0.07 m³"
            },
            {
              "label": "Speed (min–max)",
              "value": "20–25 rpm"
            },
            {
              "label": "Rotation",
              "value": "360°"
            },
            {
              "label": "Oil pressure (rotation)",
              "value": "130–170 bar"
            },
            {
              "label": "Oil flow rate (rotation)",
              "value": "8–12 L/min"
            },
            {
              "label": "Oil pressure (opening/closing)",
              "value": "180–220 bar"
            },
            {
              "label": "Oil flow rate (opening/closing)",
              "value": "20–25 L/min"
            }
          ],
          "accessories": [
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Clam shell kit",
              "id": "clamshell-kit"
            },
            {
              "name": "12 V Electrical Kit for 2 Hose Functionality",
              "id": "12-v-electrical-kit"
            },
            {
              "name": "Serrated side plate kit",
              "id": "serrated-side-plate-kit"
            },
            {
              "name": "Serrated side profile kit",
              "id": "serrated-side-profile-kit"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/652b0e79ea7e458deb10e8783e9d1481e7ed76d3/SchedaProdotto_A4_EU_MB-G400%20S4_EN_Rev20261119.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/cf375d2163f6a58e961913040884edc72805e1ed/SchedaProdotto_A4_US_MB-G400%20S4_EN_Rev20261119.pdf?download=1"
            }
          ]
        },
        {
          "id": "mb-g450-s4",
          "name": "MB-G450 S4",
          "tagline": "Agile and versatile",
          "image": "assets/images/mbcrusher/products/sorting-grapples/mb-g450-s4.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 3,
              "max": 6
            }
          ],
          "description": [
            "The MB-G450 sorting grapple works on midi-excavators from 3 to 6 tons and can move and handle materials of different shapes and sizes. The unit's design allows it to have an electrical kit installed for two line fuctionality, allowing it to use 360° rotation, even with midi-excavators that only have two hoses.",
            "The unit's claws have a wide opening, making it able to handle large materials. It's equipped interchangeable blades, which can be flipped around to extend its life and an anti-fall valve."
          ],
          "specs": [
            {
              "label": "Weight",
              "value": "288 kg"
            },
            {
              "label": "Load capacity",
              "value": "0.10 m³ / 100 L"
            },
            {
              "label": "Rotation",
              "value": "360°"
            },
            {
              "label": "Flow direction",
              "value": "10 L/min"
            },
            {
              "label": "Pressure of rotation",
              "value": "150 bar"
            },
            {
              "label": "Pressure (open/close)",
              "value": "250 bar"
            },
            {
              "label": "Oil flow (open/close)",
              "value": "40 L/min"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/sorting-grapples/g450/1.webp",
            "assets/images/mbcrusher/gallery/sorting-grapples/g450/2.webp"
          ],
          "video": "https://vimeo.com/604637830/1a9805045b",
          "accessories": [
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Multi-purpose blade kit",
              "id": "multi-purpose-blade-kit"
            },
            {
              "name": "Clam shell kit",
              "id": "clamshell-kit"
            },
            {
              "name": "Grip improvement kit",
              "id": "grip-improvement-kit"
            },
            {
              "name": "Tilting lift rubber protection kit",
              "id": "tilting-lift-rubber-protection-kit"
            },
            {
              "name": "12 V Electrical Kit for 2 Hose Functionality",
              "id": "12-v-electrical-kit"
            },
            {
              "name": "Serrated side plate kit",
              "id": "serrated-side-plate-kit"
            },
            {
              "name": "Serrated side profile kit",
              "id": "serrated-side-profile-kit"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/83c45600905e34a99637593e18134dcac5fa96ee/SchedaProdotto_A4_EU_MB-G450%20S4_EN_Rev20261119.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/e12c51452a6ecc92f69e53bebe261b1d50941c5c/SchedaProdotto_A4_US_MB-G450%20S4_EN_Rev20261119.pdf?download=1"
            }
          ]
        },
        {
          "id": "mb-g500-s4",
          "name": "MB-G500 S4",
          "tagline": "For excavator",
          "image": "assets/images/mbcrusher/products/sorting-grapples/mb-g500-s4.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 5,
              "max": 8
            }
          ],
          "description": [
            "Extremely compact and precise, the new MB-G500 sorting grapple for mini-excavators from 5 to 7 tons is designed to facilitate work on-site, in any application area. It is the ideal attachment for moving logs, stones, debris, and piles; placing stones for dry stone walls, and clearing fields of brushwood... Its claws opening is very wide, allowing it to grasp and handle even large materials; the material anti-fall valve guarantees maximum safety; the silent block allows work even in areas where noise needs to be kept under control; wear parts are made of Hardox; it is predisposed for the installation of an electrical kit for two-pipe functionality, which allows work with 360° rotation movement even with excavators that only have a two-pipe system; the interchangeable blades can be turned upside down to extend their life and is available in two versions, with or without a rotation turret."
          ],
          "specs": [
            {
              "label": "Weight",
              "value": "420 kg"
            },
            {
              "label": "Capacity (claws closed)",
              "value": "0.18 m³"
            },
            {
              "label": "Speed (min–max)",
              "value": "20–25 rpm"
            },
            {
              "label": "Rotation",
              "value": "360°"
            },
            {
              "label": "Oil pressure (rotation)",
              "value": "160–200 bar"
            },
            {
              "label": "Oil flow rate (rotation)",
              "value": "15–25 L/min"
            },
            {
              "label": "Oil pressure (opening/closing)",
              "value": "180–250 bar"
            },
            {
              "label": "Oil flow rate (opening/closing)",
              "value": "30–40 L/min"
            }
          ],
          "accessories": [
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Multi-purpose blade kit",
              "id": "multi-purpose-blade-kit"
            },
            {
              "name": "Clam shell kit",
              "id": "clamshell-kit"
            },
            {
              "name": "Grip improvement kit",
              "id": "grip-improvement-kit"
            },
            {
              "name": "Tilting lift rubber protection kit",
              "id": "tilting-lift-rubber-protection-kit"
            },
            {
              "name": "12 V Electrical Kit for 2 Hose Functionality",
              "id": "12-v-electrical-kit"
            },
            {
              "name": "Serrated side plate kit",
              "id": "serrated-side-plate-kit"
            },
            {
              "name": "Serrated side profile kit",
              "id": "serrated-side-profile-kit"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/44e104c0a8372349a18ec78643ab9f420f87bc8e/SchedaProdotto_A4_EU_MB-G500%20S4_EN_Rev20261119.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/9b3c91e1d4b8a5b9a03c41ce2b277bceffcbf412/SchedaProdotto_A4_US_MB-G500%20S4_EN_Rev20261119.pdf?download=1"
            }
          ]
        },
        {
          "id": "mb-g600-s4",
          "name": "MB-G600 S4",
          "tagline": "Small and efficient",
          "image": "assets/images/mbcrusher/products/sorting-grapples/mb-g600-s4.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 6,
              "max": 12
            }
          ],
          "description": [
            "Designed for handling demolition materials and conceived according to the highest technological standards for any types of materials in a reliable way, with constance and total safety.",
            "Thanks to the interchangeable claws and the 360° hydraulic rotation it allows you to handle large loads and odd forms."
          ],
          "specs": [
            {
              "label": "Recommended excavator",
              "value": "6–12 t"
            },
            {
              "label": "Weight",
              "value": "0.60 t"
            },
            {
              "label": "Load capacity (claws closed)",
              "value": "0.29 m³ / 290 L"
            },
            {
              "label": "Rotation",
              "value": "360°"
            },
            {
              "label": "Flow direction",
              "value": "15–30 L/min"
            },
            {
              "label": "Pressure of rotation",
              "value": "> 160 bar"
            },
            {
              "label": "Pressure (open/close)",
              "value": "200–400 bar"
            },
            {
              "label": "Oil flow (open/close)",
              "value": "25 L/min"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/sorting-grapples/g600/1.webp",
            "assets/images/mbcrusher/gallery/sorting-grapples/g600/2.webp",
            "assets/images/mbcrusher/gallery/sorting-grapples/g600/3.webp",
            "assets/images/mbcrusher/gallery/sorting-grapples/g600/4.webp"
          ],
          "video": "https://vimeo.com/311426238",
          "accessories": [
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Rotation power extender kit",
              "id": "rotation-power-extender-kit"
            },
            {
              "name": "Multi-purpose blade kit",
              "id": "multi-purpose-blade-kit"
            },
            {
              "name": "Clam shell kit",
              "id": "clamshell-kit"
            },
            {
              "name": "Grip improvement kit",
              "id": "grip-improvement-kit"
            },
            {
              "name": "Tilting lift rubber protection kit",
              "id": "tilting-lift-rubber-protection-kit"
            },
            {
              "name": "Remote Power Control System",
              "id": "remote-power-control-system"
            },
            {
              "name": "12 V Electrical Kit for 2 Hose Functionality",
              "id": "12-v-electrical-kit"
            },
            {
              "name": "Serrated side plate kit",
              "id": "serrated-side-plate-kit"
            },
            {
              "name": "Serrated side profile kit",
              "id": "serrated-side-profile-kit"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/3dacf960a88cfe8215d133c01dfd56c65b46a30b/SchedaProdotto_A4_EU_MB-G600%20S4_EN_Rev20261119.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/1d4c0f6548a8f2595cc61bb899219f4cf13b6192/SchedaProdotto_A4_US_MB-G600%20S4_EN_Rev20261119.pdf?download=1"
            }
          ]
        },
        {
          "id": "mb-g900-s4",
          "name": "MB-G900 S4",
          "tagline": "Handy with high performance",
          "image": "assets/images/mbcrusher/products/sorting-grapples/mb-g900-s4.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 12,
              "max": 18
            }
          ],
          "description": [
            "Designed for Xing and handling demolition materials and conceived according to the highest technological standards for any types of materials in a reliable way, with constance and total safety.",
            "Thanks to the interchangeable claws and the 360° hydraulic rotation it allows you to handle large loads and odd forms."
          ],
          "specs": [
            {
              "label": "Weight",
              "value": "0.78 t"
            },
            {
              "label": "Load capacity (claws closed)",
              "value": "0.43 m³ / 430 L"
            },
            {
              "label": "Rotation",
              "value": "360°"
            },
            {
              "label": "Flow direction",
              "value": "15–30 L/min"
            },
            {
              "label": "Pressure of rotation",
              "value": "> 160 bar"
            },
            {
              "label": "Pressure (open/close)",
              "value": "200–300 bar"
            },
            {
              "label": "Oil flow (open/close)",
              "value": "30 L/min"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/sorting-grapples/g900/1.webp",
            "assets/images/mbcrusher/gallery/sorting-grapples/g900/2.webp",
            "assets/images/mbcrusher/gallery/sorting-grapples/g900/3.webp",
            "assets/images/mbcrusher/gallery/sorting-grapples/g900/4.webp"
          ],
          "video": "https://vimeo.com/293516684",
          "accessories": [
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Rotation power extender kit",
              "id": "rotation-power-extender-kit"
            },
            {
              "name": "Multi-purpose blade kit",
              "id": "multi-purpose-blade-kit"
            },
            {
              "name": "Clam shell kit",
              "id": "clamshell-kit"
            },
            {
              "name": "Grip improvement kit",
              "id": "grip-improvement-kit"
            },
            {
              "name": "Tilting lift rubber protection kit",
              "id": "tilting-lift-rubber-protection-kit"
            },
            {
              "name": "Remote Power Control System",
              "id": "remote-power-control-system"
            },
            {
              "name": "12 V Electrical Kit for 2 Hose Functionality",
              "id": "12-v-electrical-kit"
            },
            {
              "name": "Serrated side plate kit",
              "id": "serrated-side-plate-kit"
            },
            {
              "name": "Serrated side profile kit",
              "id": "serrated-side-profile-kit"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/329bc15beefe371fc167176ddfcfc05ba70165da/SchedaProdotto_A4_EU_MB-G900%20S4_EN_Rev20261119.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/22d169156255a4b7696cb779ec2b22783676015b/SchedaProdotto_A4_US_MB-G900%20S4_EN_Rev20261119.pdf?download=1"
            }
          ]
        },
        {
          "id": "mb-g940-s4",
          "name": "MB-G940 S4",
          "tagline": "For excavators",
          "image": "assets/images/mbcrusher/products/sorting-grapples/mb-g940-s4.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 17,
              "max": 22
            }
          ],
          "description": [
            "The MB Crusher MB-G940 S4 sorting grapple is designed for handling, sorting and separating materials on site. The optimised geometry ensures high gripping capacity and constant load control, while smooth movements enable fast, precise manoeuvres even during the most delicate operating phases. The robust structure guarantees long-term reliability and consistent performance even in demanding working conditions. Ideal for demolition, remediation, stockpile management and recycling centres, the MB-G940 S4 increases the excavator’s productivity, reduces cycle times and improves the overall efficiency of the job site."
          ],
          "specs": [
            {
              "label": "Weight",
              "value": "1.10 t"
            },
            {
              "label": "Capacity (claws closed)",
              "value": "0.46 m³"
            },
            {
              "label": "Speed (min–max)",
              "value": "20–25 rpm"
            },
            {
              "label": "Rotation",
              "value": "360°"
            },
            {
              "label": "Oil pressure (rotation)",
              "value": "160–220 bar"
            },
            {
              "label": "Oil flow rate (rotation)",
              "value": "20–35 L/min"
            },
            {
              "label": "Oil pressure (opening/closing)",
              "value": "200–400 bar"
            },
            {
              "label": "Oil flow rate (opening/closing)",
              "value": "60–70 L/min"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/sorting-grapples/mb-g940-s4/1.webp"
          ],
          "accessories": [
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Rotation power extender kit",
              "id": "rotation-power-extender-kit"
            },
            {
              "name": "Multi-purpose blade kit",
              "id": "multi-purpose-blade-kit"
            },
            {
              "name": "Clam shell kit",
              "id": "clamshell-kit"
            },
            {
              "name": "Grip improvement kit",
              "id": "grip-improvement-kit"
            },
            {
              "name": "Tilting lift rubber protection kit",
              "id": "tilting-lift-rubber-protection-kit"
            },
            {
              "name": "Remote Power Control System",
              "id": "remote-power-control-system"
            },
            {
              "name": "12 V Electrical Kit for 2 Hose Functionality",
              "id": "12-v-electrical-kit"
            },
            {
              "name": "Serrated side plate kit",
              "id": "serrated-side-plate-kit"
            },
            {
              "name": "Serrated side profile kit",
              "id": "serrated-side-profile-kit"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/7b73b73185ad1ee56a7916035e8987f3c2155ddb/SchedaProdotto_A4_EU_MB-G940%20S4_EN_Rev20261119.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/1ee02409b86b50c84de0e7a7a254fa1f66e68aeb/SchedaProdotto_A4_US_MB-G940%20S4_EN_Rev20261119.pdf?download=1"
            }
          ]
        },
        {
          "id": "mb-g1000-s4",
          "name": "MB-G1000 S4",
          "tagline": "Efficient and reliable",
          "image": "assets/images/mbcrusher/products/sorting-grapples/mb-g1000-s4.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 18,
              "max": 25
            }
          ],
          "description": [
            "Designed for excavators with an operating weight ranging from 18 to 25 tons. The unit provides high performance and meets the expectations needed to work in various fields.",
            "The strong closing force and precise movements makes it suitable for any construction site and makes it essential to sort various materials safely regardless of the weight or shape."
          ],
          "specs": [
            {
              "label": "Weight",
              "value": "1.615 t"
            },
            {
              "label": "Load capacity (claws closed)",
              "value": "0.44 m³ / 440 L"
            },
            {
              "label": "Rotation",
              "value": "360°"
            },
            {
              "label": "Flow direction",
              "value": "40–70 L/min"
            },
            {
              "label": "Pressure of rotation",
              "value": "> 220 bar"
            },
            {
              "label": "Pressure (open/close)",
              "value": "300–400 bar"
            },
            {
              "label": "Oil flow (open/close)",
              "value": "70 L/min"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/sorting-grapples/g1000/1.webp",
            "assets/images/mbcrusher/gallery/sorting-grapples/g1000/2.webp",
            "assets/images/mbcrusher/gallery/sorting-grapples/g1000/3.webp",
            "assets/images/mbcrusher/gallery/sorting-grapples/g1000/4.webp"
          ],
          "video": "https://vimeo.com/604649895/6900a4d045",
          "accessories": [
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Remote Power Control System",
              "id": "remote-power-control-system"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/63eeca6ff0a7117f34a48b05e05a4607c5a56da2/SchedaProdotto_A4_EU_MB-G1000%20S4_EN_Rev20261119.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/a10e0b4bca30d0057926b6638ad626873bd8dd76/SchedaProdotto_A4_US_MB-G1000%20S4_EN_Rev20261119.pdf?download=1"
            }
          ]
        },
        {
          "id": "mb-g1200-s4",
          "name": "MB-G1200 S4",
          "tagline": "Great performance",
          "image": "assets/images/mbcrusher/products/sorting-grapples/mb-g1200-s4.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 18,
              "max": 30
            }
          ],
          "description": [
            "Designed for Xing and handling demolition materials and conceived according to the highest technological standards for any types of materials in a reliable way, with constance and total safety.",
            "Thanks to the interchangeable claws and the 360° hydraulic rotation it allows you to handle large loads and odd forms."
          ],
          "specs": [
            {
              "label": "Weight",
              "value": "1.65 t"
            },
            {
              "label": "Load capacity (claws closed)",
              "value": "0.71 m³ / 710 L"
            },
            {
              "label": "Rotation",
              "value": "360°"
            },
            {
              "label": "Flow direction",
              "value": "20–35 L/min"
            },
            {
              "label": "Pressure of rotation",
              "value": "> 220 bar"
            },
            {
              "label": "Pressure (open/close)",
              "value": "300–400 bar"
            },
            {
              "label": "Oil flow (open/close)",
              "value": "70 L/min"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/sorting-grapples/g1200/1.webp",
            "assets/images/mbcrusher/gallery/sorting-grapples/g1200/2.webp",
            "assets/images/mbcrusher/gallery/sorting-grapples/g1200/3.webp",
            "assets/images/mbcrusher/gallery/sorting-grapples/g1200/5.webp"
          ],
          "video": "https://vimeo.com/360996155",
          "accessories": [
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Rotation power extender kit",
              "id": "rotation-power-extender-kit"
            },
            {
              "name": "Multi-purpose blade kit",
              "id": "multi-purpose-blade-kit"
            },
            {
              "name": "Clam shell kit",
              "id": "clamshell-kit"
            },
            {
              "name": "Grip improvement kit",
              "id": "grip-improvement-kit"
            },
            {
              "name": "Tilting lift rubber protection kit",
              "id": "tilting-lift-rubber-protection-kit"
            },
            {
              "name": "Remote Power Control System",
              "id": "remote-power-control-system"
            },
            {
              "name": "12 V Electrical Kit for 2 Hose Functionality",
              "id": "12-v-electrical-kit"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/f0bf5ae7da025621276e3df1567581f1e11df74f/SchedaProdotto_A4_EU_MB-G1200%20S4_EN_Rev20261119.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/b42d6bdb824dc27288e729b8ee636ff8712b519d/SchedaProdotto_A4_US_MB-G1200%20S4_EN_Rev20261119.pdf?download=1"
            }
          ]
        },
        {
          "id": "mb-g1500-s4",
          "name": "MB-G1500 S4",
          "tagline": "Handy, practical, efficient",
          "image": "assets/images/mbcrusher/products/sorting-grapples/mb-g1500-s4.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 20,
              "max": 30
            }
          ],
          "description": [
            "Designed for Xing and handling demolition materials and conceived according to the highest technological standards for any types of materials in a reliable way, with constance and total safety.",
            "Thanks to the interchangeable claws and the 360° hydraulic rotation it allows you to handle large loads and odd forms."
          ],
          "specs": [
            {
              "label": "Recommended excavator",
              "value": "20–30 t"
            },
            {
              "label": "Weight",
              "value": "2.05 t"
            },
            {
              "label": "Load capacity (claws closed)",
              "value": "1.43 m³ / 1430 L"
            },
            {
              "label": "Rotation",
              "value": "360°"
            },
            {
              "label": "Flow direction",
              "value": "20–35 L/min"
            },
            {
              "label": "Pressure of rotation",
              "value": "> 220 bar"
            },
            {
              "label": "Pressure (open/close)",
              "value": "300–400 bar"
            },
            {
              "label": "Oil flow (open/close)",
              "value": "70 L/min"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/sorting-grapples/g1500/1.webp",
            "assets/images/mbcrusher/gallery/sorting-grapples/g1500/2.webp",
            "assets/images/mbcrusher/gallery/sorting-grapples/g1500/3.webp"
          ],
          "video": "https://vimeo.com/313996467",
          "accessories": [
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "Rotation power extender kit",
              "id": "rotation-power-extender-kit"
            },
            {
              "name": "Multi-purpose blade kit",
              "id": "multi-purpose-blade-kit"
            },
            {
              "name": "Clam shell kit",
              "id": "clamshell-kit"
            },
            {
              "name": "Grip improvement kit",
              "id": "grip-improvement-kit"
            },
            {
              "name": "Tilting lift rubber protection kit",
              "id": "tilting-lift-rubber-protection-kit"
            },
            {
              "name": "Remote Power Control System",
              "id": "remote-power-control-system"
            },
            {
              "name": "12 V Electrical Kit for 2 Hose Functionality",
              "id": "12-v-electrical-kit"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/3a09d56a9b2b775528429e5b90f4048daa793849/SchedaProdotto_A4_EU_MB-G1500%20S4_EN_Rev20261119.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/1f8a13af735bf650d26db7170db9dd22459f8c13/SchedaProdotto_A4_US_MB-G1500%20S4_EN_Rev20261119.pdf?download=1"
            }
          ]
        }
      ]
    },
    {
      id: "demolition-pulverizers",
      name: "Demolition Pulverizers",
      series: "MB-P / MB-PT",
      summary: "Installed on excavators, backhoe loaders and skid steer loaders, they are designed for primary and secondary crushing. They offer precision for fast and effective demolition work. The 360° continuous hydraulic rotation facilitates the positioning of the attachment, enhancing maneuverability and ease of use.",
      icon: "assets/images/mbcrusher/categories/demolition-pulverizers.webp",
      products: [
        {
          "id": "mb-p160",
          "name": "MB-P160",
          "tagline": "For excavators and backhoe loaders",
          "image": "assets/images/mbcrusher/products/demolition-pulverizers/mb-p160.webp",
          "carriers": [
            {
              "type": "backhoe",
              "min": 4,
              "max": 6
            },
            {
              "type": "excavator",
              "min": 1.5,
              "max": 3
            }
          ],
          "description": [
            "The MB-P160 demolition pulveriser by MB Crusher is the compact solution designed for those working with excavators and backhoe loaders. It delivers power, control and reliability in primary and secondary demolition operations. It is ideal for safe volume reduction and for handling mixed materials quickly, even in the tightest spaces.",
            "Note: Only compatible with the rear (backhoe) boom of a backhoe loader."
          ],
          "specs": [
            {
              "label": "Weight",
              "value": "0.17 t"
            },
            {
              "label": "Pick force f1",
              "value": "23 t"
            },
            {
              "label": "Speed (min–max)",
              "value": "15–20 rpm"
            },
            {
              "label": "Rotation",
              "value": "360°"
            },
            {
              "label": "Oil pressure (rotation)",
              "value": "130–170 bar"
            },
            {
              "label": "Oil flow rate (rotation)",
              "value": "5–10 L/min"
            },
            {
              "label": "Oil pressure (opening - closing)",
              "value": "200–250 bar"
            },
            {
              "label": "Oil flow rate (opening - closing)",
              "value": "20–30 L/min"
            },
            {
              "label": "Blade force f2",
              "value": "58 t"
            }
          ],
          "accessories": [
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "12 V Electrical Kit for 2 Hose Functionality",
              "id": "12-v-electrical-kit"
            },
            {
              "name": "MB-P Pulverizer Kit",
              "id": "pulverizer-kit-mb-p"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/78b9c40f5e13e9c4f8909034b039f89f77d6422d/SchedaProdotto_A4_EU_MB-P160_EN_Rev20261120.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/1809340a931a9c58f0276a439100bec2e8083b36/SchedaProdotto_A4_US_MB-P160_EN_Rev20261120.pdf?download=1"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/demolition-pulverizers/mb-p160/1.webp",
            "assets/images/mbcrusher/gallery/demolition-pulverizers/mb-p160/2.webp"
          ]
        },
        {
          "id": "mb-p380",
          "name": "MB-P380",
          "tagline": "For excavators, backhoe loaders and skid steer loaders",
          "image": "assets/images/mbcrusher/products/demolition-pulverizers/mb-p380.webp",
          "carriers": [
            {
              "type": "backhoe",
              "min": 5,
              "max": 7
            },
            {
              "type": "excavator",
              "min": 3,
              "max": 6.5
            },
            {
              "type": "skid",
              "min": 3,
              "max": 5
            }
          ],
          "description": [
            "The MB-P380 demolition pulveriser by MB Crusher works with excavators, backhoe loaders and skid steer loaders. It is powerful, precise and can be equipped with the pulverizer kit. To increase the jaw opening, a plug tooth is available, which closes the tooth seat and helps prevent breakages. The Hardox structure, protected cylinders and fast jaw geometry ensure constant power in demolition and volume reduction.",
            "Note: Only compatible with the rear (backhoe) boom of a backhoe loader.",
            "Note: Skid steer loaders: please verify the machine's rated operating capacity."
          ],
          "specs": [
            {
              "label": "Weight",
              "value": "0.38 t"
            },
            {
              "label": "Pick force f1",
              "value": "32 t"
            },
            {
              "label": "Speed (min–max)",
              "value": "20–25 rpm"
            },
            {
              "label": "Rotation",
              "value": "360°"
            },
            {
              "label": "Oil pressure (rotation)",
              "value": "160–200 bar"
            },
            {
              "label": "Oil flow rate (rotation)",
              "value": "20–25 L/min"
            },
            {
              "label": "Oil pressure (opening - closing)",
              "value": "200–300 bar"
            },
            {
              "label": "Oil flow rate (opening - closing)",
              "value": "40–70 L/min"
            },
            {
              "label": "Blade force f2",
              "value": "87 t"
            }
          ],
          "accessories": [
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "12 V Electrical Kit for 2 Hose Functionality",
              "id": "12-v-electrical-kit"
            },
            {
              "name": "MB-P Pulverizer Kit",
              "id": "pulverizer-kit-mb-p"
            },
            {
              "name": "Forestry pruner kit",
              "id": "forestry-pruner-kit"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/aaba91750ad9c3eb93544c61d7b0af57fabfddf4/SchedaProdotto_A4_EU_MB-P380_EN_Rev20261120.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/66662561f62265a703fa201a92fde7ce35d30e74/SchedaProdotto_A4_US_MB-P380_EN_Rev20261120.pdf?download=1"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/demolition-pulverizers/mb-p380/1.webp",
            "assets/images/mbcrusher/gallery/demolition-pulverizers/mb-p380/2.webp",
            "assets/images/mbcrusher/gallery/demolition-pulverizers/mb-p380/3.webp"
          ]
        },
        {
          "id": "mb-pt650",
          "name": "MB-PT650",
          "tagline": "For excavators and backhoe loaders",
          "image": "assets/images/mbcrusher/products/demolition-pulverizers/mb-pt650.webp",
          "carriers": [
            {
              "type": "backhoe",
              "min": 6,
              "max": 10
            },
            {
              "type": "excavator",
              "min": 6.5,
              "max": 13
            }
          ],
          "description": [
            "The MB-PT650 by MB Crusher is a demolition pulveriser for excavators and backhoe loaders, designed for demolition jobs and on-site material handling. Its Hardox structure makes it robust and reliable. It can be equipped with three different kits: crusher kir, pulverizer kit and a shear kit for cutting metal. The kit changeover is quick and can be carried out directly on site. Blades and teeth can be replaced in the field and the cylinders are protected to ensure safe, risk-free operation.",
            "Note: Only compatible with the rear (backhoe) boom of a backhoe loader."
          ],
          "specs": [
            {
              "label": "Speed (min–max)",
              "value": "20–25 rpm"
            },
            {
              "label": "Rotation",
              "value": "360°"
            },
            {
              "label": "Oil pressure (rotation)",
              "value": "160–200 bar"
            },
            {
              "label": "Oil flow rate (rotation)",
              "value": "25–35 L/min"
            },
            {
              "label": "Oil pressure (opening - closing)",
              "value": "250–350 bar"
            },
            {
              "label": "Oil flow rate (opening - closing)",
              "value": "70–100 L/min"
            },
            {
              "label": "Main frame weight",
              "value": "0.50 t"
            }
          ],
          "accessories": [
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "12 V Electrical Kit for 2 Hose Functionality",
              "id": "12-v-electrical-kit"
            },
            {
              "name": "Crusher Kit",
              "id": "crusher-kit"
            },
            {
              "name": "Pulverizer Kit",
              "id": "pulverizer-kit-mb-pt"
            },
            {
              "name": "Shear Kit",
              "id": "shear-kit"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/2b626db7be69faa48c83ffb65f257506c128d994/SchedaProdotto_A4_EU_MB-PT650_EN_Rev20261119.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/490bbdd093a9f56cd525712aacaa7768a81f8b8d/SchedaProdotto_A4_US_MB-PT650_EN_Rev20261119.pdf?download=1"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/demolition-pulverizers/mb-pt650/1.webp",
            "assets/images/mbcrusher/gallery/demolition-pulverizers/mb-pt650/2.webp",
            "assets/images/mbcrusher/gallery/demolition-pulverizers/mb-pt650/3.webp",
            "assets/images/mbcrusher/gallery/demolition-pulverizers/mb-pt650/4.webp"
          ],
          "video": "https://vimeo.com/1067676935"
        },
        {
          "id": "mb-pt1150",
          "name": "MB-PT1150",
          "tagline": "For excavators",
          "image": "assets/images/mbcrusher/products/demolition-pulverizers/mb-pt1150.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 12,
              "max": 19
            }
          ],
          "description": [
            "The MB-PT1150 by MB Crusher is a robust and versatile demolition pulveriser, suitable for different types of demolition and material downsizing. It is made of Hardox and delivers stable performance even under heavy loads. It can be equipped with three interchangeable kits: crusher kit, pulverizer kit and a shear kit for cutting metal. Kit changeover is fast and does not require stopping the carrier. Blades and teeth are interchangeable and the centralised greasing system makes maintenance straightforward."
          ],
          "specs": [
            {
              "label": "Speed (min–max)",
              "value": "20–25 rpm"
            },
            {
              "label": "Rotation",
              "value": "360°"
            },
            {
              "label": "Oil pressure (rotation)",
              "value": "180–220 bar"
            },
            {
              "label": "Oil flow rate (rotation)",
              "value": "30–40 L/min"
            },
            {
              "label": "Oil pressure (opening - closing)",
              "value": "250–350 bar"
            },
            {
              "label": "Oil flow rate (opening - closing)",
              "value": "70–100 L/min"
            },
            {
              "label": "Main frame weight",
              "value": "0.85 t"
            }
          ],
          "accessories": [
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "12 V Electrical Kit for 2 Hose Functionality",
              "id": "12-v-electrical-kit"
            },
            {
              "name": "Crusher Kit",
              "id": "crusher-kit"
            },
            {
              "name": "Pulverizer Kit",
              "id": "pulverizer-kit-mb-pt"
            },
            {
              "name": "Shear Kit",
              "id": "shear-kit"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/1de664255e52ba1ed049d83b7a9973c59a95168a/SchedaProdotto_A4_EU_MB-PT1150_EN_Rev20261119.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/e3e6a2785b46c86e60cbf6cf3ea3a1d6650e63f9/SchedaProdotto_A4_US_MB-PT1150_EN_Rev20261119.pdf?download=1"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/demolition-pulverizers/mb-pt1150/1.webp"
          ],
          "video": "https://vimeo.com/1067676935"
        },
        {
          "id": "mb-pt1650",
          "name": "MB-PT1650",
          "tagline": "For excavators",
          "image": "assets/images/mbcrusher/products/demolition-pulverizers/mb-pt1650.webp",
          "carriers": [
            {
              "type": "excavator",
              "min": 19,
              "max": 25
            }
          ],
          "description": [
            "The MB-PT1650 is the most powerful model in the range, ideal for heavy-duty demolition and handling of structural materials. Made of Hardox, it guarantees consistent power and long service life. It can be equipped with all three operational kits, with quick changeover. Reversible blades, replaceable teeth, and protected cylinders allow safe operation even in the toughest conditions."
          ],
          "specs": [
            {
              "label": "Speed (min–max)",
              "value": "20–25 rpm"
            },
            {
              "label": "Rotation",
              "value": "360°"
            },
            {
              "label": "Oil pressure (rotation)",
              "value": "200–250 bar"
            },
            {
              "label": "Oil flow rate (rotation)",
              "value": "30–40 L/min"
            },
            {
              "label": "Oil pressure (opening - closing)",
              "value": "300–350 bar"
            },
            {
              "label": "Oil flow rate (opening - closing)",
              "value": "100–150 L/min"
            },
            {
              "label": "Main frame weight",
              "value": "1.20 t"
            }
          ],
          "accessories": [
            {
              "name": "Warranty extension gold 24",
              "id": "warranty-extension-gold-24"
            },
            {
              "name": "12 V Electrical Kit for 2 Hose Functionality",
              "id": "12-v-electrical-kit"
            },
            {
              "name": "Crusher Kit",
              "id": "crusher-kit"
            },
            {
              "name": "Pulverizer Kit",
              "id": "pulverizer-kit-mb-pt"
            },
            {
              "name": "Shear Kit",
              "id": "shear-kit"
            }
          ],
          "downloads": [
            {
              "label": "Product sheet – metric system",
              "href": "https://storage.onpage.it/8d955cbd06cd64c3724cd4bfc741218dc4642e40/SchedaProdotto_A4_EU_MB-PT1650_EN_Rev20261119.pdf?download=1"
            },
            {
              "label": "Product sheet – imperial system",
              "href": "https://storage.onpage.it/f47dc196f94de06d31f28227d10d4eb6e236bb7b/SchedaProdotto_A4_US_MB-PT1650_EN_Rev20261119.pdf?download=1"
            }
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/demolition-pulverizers/mb-pt1650/1.webp",
            "assets/images/mbcrusher/gallery/demolition-pulverizers/mb-pt1650/2.webp",
            "assets/images/mbcrusher/gallery/demolition-pulverizers/mb-pt1650/3.webp",
            "assets/images/mbcrusher/gallery/demolition-pulverizers/mb-pt1650/4.webp"
          ],
          "video": "https://vimeo.com/1067676935"
        }
      ]
    },
    {
      id: "accessories",
      name: "Accessories",
      series: null,
      summary: "MB Crusher accessories complement and add value to MB attachments, personalising and optimising the work process on any job site.",
      icon: "assets/images/mbcrusher/categories/accessories.webp",
      products: [
        {
          "id": "24-v-iron-separator",
          "name": "24 V Iron separator",
          "tagline": "Essential for the separation of rebar",
          "image": "assets/images/mbcrusher/products/accessories/24-v-iron-separator.webp",
          "group": null,
          "fits": [
            "crusher-buckets"
          ],
          "description": [
            "The 24 V MB iron separator is perfect for separating iron from crushed or screened material. It's easy to install and is supplied with a complete support installation kit.",
            "It's available for MB's crushing attachments."
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/accessories/ironseprator/1.webp",
            "assets/images/mbcrusher/gallery/accessories/ironseprator/2.webp",
            "assets/images/mbcrusher/gallery/accessories/ironseprator/3.webp"
          ],
          "video": "https://vimeo.com/336771532"
        },
        {
          "id": "the-dust-suppression-kit",
          "name": "The dust suppression kit",
          "tagline": "This kit is available for the crusher attachments.",
          "image": "assets/images/mbcrusher/products/accessories/the-dust-suppression-kit.webp",
          "group": null,
          "fits": [
            "crusher-buckets"
          ],
          "description": [
            "The MB dust suppression kit nebulizes micro particles of water. Its primary function is to reduce dust emissions from crushing or screening.",
            "This kit is available for the crusher attachments.",
            "It is also available in different sizes, to accommodate the clients' needs."
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/accessories/dustsupp/1.webp",
            "assets/images/mbcrusher/gallery/accessories/dustsupp/2.webp"
          ],
          "video": "https://vimeo.com/239948602"
        },
        {
          "id": "coupling",
          "name": "Coupling",
          "tagline": "Available for all MB units.",
          "image": "assets/images/mbcrusher/products/accessories/coupling.webp",
          "group": null,
          "fits": [
            "all"
          ],
          "description": [
            "It connects the MB unit to the carrier machine.",
            "Available for all MB units."
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/accessories/coupling/1.webp",
            "assets/images/mbcrusher/gallery/accessories/coupling/2.webp"
          ]
        },
        {
          "id": "spare-parts-kit",
          "name": "Spare parts kit",
          "tagline": "Available for all MB units.",
          "image": "assets/images/mbcrusher/products/accessories/spare-parts-kit.webp",
          "group": null,
          "fits": [
            "all"
          ],
          "description": [
            "This kit of original spare parts is available for each model, to ensure the MB unit maintains 100% efficiency and productivity.",
            "Available for all MB units."
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/accessories/sparepart/mb-icon-kitricambi-640x640.webp"
          ]
        },
        {
          "id": "warranty-extension-gold-24",
          "name": "Warranty extension gold 24",
          "tagline": "Available for all MB units.",
          "image": "assets/images/mbcrusher/products/accessories/warranty-extension-gold-24.webp",
          "group": null,
          "fits": [
            "all"
          ],
          "description": [
            "MB Crusher offers the possibility of purchasing a 24-month warranty extension.",
            "Available for all MB units."
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/accessories/warranty/mb-icon-garanziah24-640x640.webp"
          ]
        },
        {
          "id": "hour-meter",
          "name": "Hour meter",
          "tagline": "It's available for both MB's crushing and screening attachments.",
          "image": "assets/images/mbcrusher/products/accessories/hour-meter.webp",
          "group": null,
          "fits": [
            "crusher-buckets",
            "screening-buckets"
          ],
          "description": [
            "An instrument that tracks the MB unit's working hours.",
            "It's available for both MB's crushing and screening attachments."
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/accessories/hourmeter/mb-icon-contaore-640x640.webp"
          ]
        },
        {
          "id": "basket-protection-kit",
          "name": "Basket protection kit",
          "tagline": "It's available for all MB screening buckets.",
          "image": "assets/images/mbcrusher/products/accessories/basket-protection-kit.webp",
          "group": null,
          "fits": [
            "screening-buckets"
          ],
          "description": [
            "The MB basket protection kit protects the basket and its frame from strong impacts.",
            "It allows the operator to easily navigate the screening attachment.",
            "It's available for all MB screening buckets."
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/accessories/basketprotectkit/1.webp",
            "assets/images/mbcrusher/gallery/accessories/basketprotectkit/2.webp",
            "assets/images/mbcrusher/gallery/accessories/basketprotectkit/3.webp",
            "assets/images/mbcrusher/gallery/accessories/basketprotectkit/4.webp"
          ]
        },
        {
          "id": "shaft-holder",
          "name": "Shaft holder",
          "tagline": "It's available for all MB-HDS models.",
          "image": "assets/images/mbcrusher/products/accessories/shaft-holder.webp",
          "group": null,
          "fits": [
            "shaft-screeners"
          ],
          "description": [
            "It is available for all MB-HDS models."
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/accessories/shaftholder/pallet-contenitore-porta-rotori-640x640.webp"
          ]
        },
        {
          "id": "load-capacity-increase-kit",
          "name": "Load capacity increase kit",
          "tagline": "Available for the MB-HDS207.",
          "image": "assets/images/mbcrusher/products/accessories/load-capacity-increase-kit.webp",
          "group": null,
          "fits": [
            "shaft-screeners"
          ],
          "description": [
            "The load capacity kit can be installed on the MB-HDS207 to increase its load capacity from 50l to 60l."
          ]
        },
        {
          "id": "rc-compost-kit",
          "name": "RC compost kit",
          "tagline": "It's available for all MB-HDS models.",
          "image": "assets/images/mbcrusher/products/accessories/rc-compost-kit.webp",
          "group": "Shaft kits",
          "fits": [
            "shaft-screeners"
          ],
          "description": [
            "It is available for all MB-HDS models."
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/accessories/rcvompost/kitcompostaggiorc.webp"
          ]
        },
        {
          "id": "rc-mixer-kit",
          "name": "RM mixer kit",
          "tagline": "It's available for all MB-HDS models.",
          "image": "assets/images/mbcrusher/products/accessories/rc-mixer-kit.webp",
          "group": "Shaft kits",
          "fits": [
            "shaft-screeners"
          ],
          "description": [
            "It is available for all MB-HDS models."
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/accessories/rmmixer/kitmiscelatorerm.webp"
          ],
          "uses": [
            "Soil aeration",
            "Compost aeration",
            "Breaking down charcoal",
            "Crushing glass",
            "Crushing drywall"
          ]
        },
        {
          "id": "re8-re16-fine-sifting-kit-compost-kit",
          "name": "RE8/RE16 fine sifting kit",
          "tagline": "It's available for all MB-HDS models.",
          "image": "assets/images/mbcrusher/products/accessories/re8-re16-fine-sifting-kit-compost-kit.webp",
          "group": "Shaft kits",
          "fits": [
            "shaft-screeners"
          ],
          "description": [
            "Sifting damp/dry soil",
            "It is available for all MB-HDS models."
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/accessories/re8/kitvagliaturafine-re16.webp"
          ]
        },
        {
          "id": "rq20-rq50-medium-sifting-kit",
          "name": "RQ20/RQ50 medium sifting kit",
          "tagline": "It's available for all MB-HDS models.",
          "image": "assets/images/mbcrusher/products/accessories/rq20-rq50-medium-sifting-kit.webp",
          "group": "Shaft kits",
          "fits": [
            "shaft-screeners"
          ],
          "description": [
            "It is available for all MB-HDS models."
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/accessories/rq/kitvagliaturamedia-rq20.webp"
          ],
          "uses": [
            "Sifting damp/dry soil",
            "Soil aeration"
          ]
        },
        {
          "id": "rq8-sifting-kit",
          "name": "RQ8 sifting kit",
          "tagline": "Available for 11 shaft screener models.",
          "image": "assets/images/mbcrusher/products/accessories/rq8-sifting-kit.webp",
          "group": "Shaft kits",
          "fits": [
            "shaft-screeners"
          ],
          "description": [
            "Adjustment: 8 mm",
            "Available for the MB-HDS207, MB-HDS307, MB-HDS212, MB-HDS312, MB-HDS214, MB-HDS220, MB-HDS412, MB-HDS314, MB-HDS320, MB-HDS323 and MB-HDS523."
          ]
        },
        {
          "id": "rq15-sifting-kit",
          "name": "RQ15 sifting kit",
          "tagline": "Available for the MB-HDS207 and MB-HDS307.",
          "image": "assets/images/mbcrusher/products/accessories/rq15-sifting-kit.webp",
          "group": "Shaft kits",
          "fits": [
            "shaft-screeners"
          ],
          "description": [
            "Adjustment: 15 mm"
          ]
        },
        {
          "id": "rq45-sifting-kit",
          "name": "RQ45 sifting kit",
          "tagline": "Available for the MB-HDS533.",
          "image": "assets/images/mbcrusher/products/accessories/rq45-sifting-kit.webp",
          "group": "Shaft kits",
          "fits": [
            "shaft-screeners"
          ],
          "description": [
            "The RQ45 Sifting Kit allows for the effective screening of both wet and dry soil, improving soil aeration. With an 45 mm adjustment, it optimises material handling with precision and versatility."
          ]
        },
        {
          "id": "drum-cover-kit",
          "name": "Drum cover kit",
          "tagline": "Available for the MB-R500",
          "image": "assets/images/mbcrusher/products/accessories/drum-cover-kit.webp",
          "group": null,
          "fits": [
            "drum-cutters"
          ],
          "description": [
            "Reduces dust emission significantly , allowing it to work in enclosed spaces.",
            "Available for the MB-R500."
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/accessories/drumcoverkit/1.webp",
            "assets/images/mbcrusher/gallery/accessories/drumcoverkit/2.webp"
          ],
          "video": "https://vimeo.com/295574686"
        },
        {
          "id": "cutting-depth-adjustment-kit",
          "name": "Cutting depth adjustment kit",
          "tagline": "Available for the MB-R500",
          "image": "assets/images/mbcrusher/products/accessories/cutting-depth-adjustment-kit.webp",
          "group": null,
          "fits": [
            "drum-cutters"
          ],
          "description": [
            "For leveling and milling surfaces with precision. For example: milling a road or a city square to prepare it for resurfacing.",
            "Available for the MB-R500."
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/accessories/cuttingdepth/1.webp",
            "assets/images/mbcrusher/gallery/accessories/cuttingdepth/2.webp"
          ]
        },
        {
          "id": "cutter-body-rotation-kit",
          "name": "Cutter body rotation kit",
          "tagline": "Available for the MB-R500",
          "image": "assets/images/mbcrusher/products/accessories/cutter-body-rotation-kit.webp",
          "group": null,
          "fits": [
            "drum-cutters"
          ],
          "description": [
            "Allows the operator to rotate the drum cutter directly from the carrier machine's cabin. Requires a rotational circuit.",
            "Available for the MB-R500."
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/accessories/cuttingdepth/3.webp"
          ]
        },
        {
          "id": "rock-and-asphalt-pick-kit",
          "name": "Rock and asphalt pick kit",
          "tagline": "It's available for all MB drum cutters.",
          "image": "assets/images/mbcrusher/products/accessories/rock-and-asphalt-pick-kit.webp",
          "group": null,
          "fits": [
            "drum-cutters"
          ],
          "description": [
            "Different picks to work with different materials, depending on the job.",
            "It's available for all MB drum cutters."
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/accessories/cuttingdepth/4.webp"
          ]
        },
        {
          "id": "drum-kit",
          "name": "Drum kit",
          "tagline": "It's available for all MB drum cutters.",
          "image": "assets/images/mbcrusher/products/accessories/drum-kit.webp",
          "group": null,
          "fits": [
            "drum-cutters"
          ],
          "description": [
            "The Drums can be removed directly on the job site, without the intervention of a specialised workshop.",
            "It's available for all MB drum cutters."
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/accessories/cuttingdepth/5.webp"
          ]
        },
        {
          "id": "power-transmission-kit",
          "name": "Power transmission kit",
          "tagline": "Available for the MB-R500.",
          "image": "assets/images/mbcrusher/products/accessories/power-transmission-kit.webp",
          "group": null,
          "fits": [
            "drum-cutters"
          ],
          "description": [
            "Increases the unit's efficiency and milling force.",
            "Available for the MB-R500."
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/accessories/access/powertranskit.webp"
          ]
        },
        {
          "id": "oil-temperature-reducing-device",
          "name": "Oil temperature reducing device",
          "tagline": "It's available for all MB drum cutters.",
          "image": "assets/images/mbcrusher/products/accessories/oil-temperature-reducing-device.webp",
          "group": null,
          "fits": [
            "drum-cutters"
          ],
          "description": [
            "Reduces the carrier machine's oil temperature, without altering its performance.",
            "It's available for all MB drum cutters."
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/accessories/access/oil.webp"
          ]
        },
        {
          "id": "rotation-power-extender-kit",
          "name": "Rotation power extender kit",
          "tagline": "It's available for MB Grapple models.",
          "image": "assets/images/mbcrusher/products/accessories/rotation-power-extender-kit.webp",
          "group": null,
          "fits": [
            "sorting-grapples"
          ],
          "description": [
            "It magnifies the rotation strength of the grapples and allows to move heavy material with extreme ease.",
            "The MB rotation power extender kit can be installed on the top part of the MB grapple.",
            "It is available for MB Grapple models."
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/accessories/access/rotationpower.webp"
          ]
        },
        {
          "id": "multi-purpose-blade-kit",
          "name": "Multi-purpose blade kit",
          "tagline": "It's available for all MB Grapple models.",
          "image": "assets/images/mbcrusher/products/accessories/multi-purpose-blade-kit.webp",
          "group": null,
          "fits": [
            "sorting-grapples"
          ],
          "description": [
            "The MB multipurpose blade kit is a replacement of the yellow blade at the end of the MB grapple. It allows the client to move material of any shape and form.",
            "It has a double blade feature: it is toothed on one side and smooth on the other.",
            "The blades are easily and quickly interchangeable."
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/accessories/multipurpose/1.webp",
            "assets/images/mbcrusher/gallery/accessories/multipurpose/2.webp",
            "assets/images/mbcrusher/gallery/accessories/multipurpose/3.webp",
            "assets/images/mbcrusher/gallery/accessories/multipurpose/4.webp"
          ]
        },
        {
          "id": "clamshell-kit",
          "name": "Clamshell kit",
          "tagline": "It's available for all MB Grapple models.",
          "image": "assets/images/mbcrusher/products/accessories/clamshell-kit.webp",
          "group": null,
          "fits": [
            "sorting-grapples"
          ],
          "description": [
            "It allows to move particularly heavy and unusual shapes with ease, grip and precision.",
            "It can be installed on the internal side of the MB grapple attachment."
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/accessories/calmshell/1.webp",
            "assets/images/mbcrusher/gallery/accessories/calmshell/2.webp",
            "assets/images/mbcrusher/gallery/accessories/calmshell/3.webp",
            "assets/images/mbcrusher/gallery/accessories/calmshell/4.webp"
          ]
        },
        {
          "id": "grip-improvement-kit",
          "name": "Grip improvement kit",
          "tagline": "It's available for all MB Grapple models.",
          "image": "assets/images/mbcrusher/products/accessories/grip-improvement-kit.webp",
          "group": null,
          "fits": [
            "sorting-grapples"
          ],
          "description": [
            "It allows to move particularly heavy and unusual shapes with ease, grip and precision.",
            "The MB grip improvement kit is installed on the internal side of the MB grapple.",
            "It is available for all MB Grapple models."
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/accessories/gripimprov/1.webp",
            "assets/images/mbcrusher/gallery/accessories/gripimprov/2.webp",
            "assets/images/mbcrusher/gallery/accessories/gripimprov/3.webp"
          ]
        },
        {
          "id": "tilting-lift-rubber-protection-kit",
          "name": "Tilting lift rubber protection kit",
          "tagline": "It's available for all MB Grapple models.",
          "image": "assets/images/mbcrusher/products/accessories/tilting-lift-rubber-protection-kit.webp",
          "group": null,
          "fits": [
            "sorting-grapples"
          ],
          "description": [
            "It allows to move particularly heavy and unusual shapes with ease, grip and precision.",
            "It can be installed on the internal side of the MB grapple attachment."
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/accessories/tit/1.webp",
            "assets/images/mbcrusher/gallery/accessories/tit/2.webp",
            "assets/images/mbcrusher/gallery/accessories/tit/3.webp"
          ]
        },
        {
          "id": "remote-power-control-system",
          "name": "Remote Power Control System",
          "tagline": "Available for 5 sorting grapple models.",
          "image": "assets/images/mbcrusher/products/accessories/remote-power-control-system.webp",
          "group": null,
          "fits": [
            "sorting-grapples"
          ],
          "description": [
            "The KIT allows you to adjust the clamping force directly from the operator cab, by either increasing or decreasing the pressure. Available from the MB-G600 model.",
            "Available for the MB-G600 S4, MB-G900 S4, MB-G1000 S4, MB-G1200 S4 and MB-G1500 S4."
          ]
        },
        {
          "id": "12-v-electrical-kit",
          "name": "12 V Electrical kit for 2-hose functionality",
          "tagline": "Available for 6 sorting grapple models.",
          "image": "assets/images/mbcrusher/products/accessories/12-v-electrical-kit.webp",
          "group": null,
          "fits": [
            "sorting-grapples"
          ],
          "description": [
            "Utilize the 360° rotation even with excavators that only have two hoses.",
            "Available for the MB-G400 S4, MB-G500 S4, MB-G600 S4, MB-G900 S4, MB-G1200 S4 and MB-G1500 S4."
          ]
        },
        {
          "id": "serrated-side-plate-kit",
          "name": "Serrated side plate kit",
          "tagline": "Available for 6 sorting grapple models.",
          "image": "assets/images/mbcrusher/products/accessories/serrated-side-plate-kit.webp",
          "group": null,
          "fits": [
            "sorting-grapples"
          ],
          "description": [
            "For handling material of particular shapes.",
            "Available for the MB-G350 S4, MB-G400 S4, MB-G450 S4, MB-G500 S4, MB-G600 S4 and MB-G900 S4."
          ]
        },
        {
          "id": "serrated-side-profile-kit",
          "name": "Serrated side profile kit",
          "tagline": "Available for 5 sorting grapple models.",
          "image": "assets/images/mbcrusher/products/accessories/serrated-side-profile-kit.webp",
          "group": null,
          "fits": [
            "sorting-grapples"
          ],
          "description": [
            "The contoured teeth of the profile improve the grip on materials with particular shapes.",
            "Available for the MB-G350 S4, MB-G400 S4, MB-G450 S4, MB-G500 S4 and MB-G900 S4."
          ]
        },
        {
          "id": "pulverizer-kit-mb-p",
          "name": "Pulverizer kit (MB-P)",
          "tagline": "Available for the MB-P160 and MB-P380.",
          "image": "assets/images/mbcrusher/products/accessories/pulverizer-kit-mb-p.webp",
          "group": "Pulverizer kits",
          "fits": [
            "demolition-pulverizers"
          ],
          "description": [
            "The MB Crusher pulverizer kit, designed for MB-P demolition pulverizers, is engineered to demolish and downsize blocks and demolition materials, preparing them for recycling. The reinforced jaws ensure a secure grip and precise crushing action, producing finer, easier-to-handle material. Installation is quick and carried out directly on site. It is the ideal solution to speed up debris management, reduce processing stages, and increase jobsite operational efficiency."
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/accessories/pulverizer-kit-mb-p/1.webp"
          ]
        },
        {
          "id": "crusher-kit",
          "name": "Crusher kit",
          "tagline": "Available for the MB-PT650, MB-PT1150 and MB-PT1650.",
          "image": "assets/images/mbcrusher/products/accessories/crusher-kit.webp",
          "group": "Pulverizer kits",
          "fits": [
            "demolition-pulverizers"
          ],
          "description": [
            "The MB Crusher crusher kit is designed for demolishing reinforced concrete structures. It delivers high power, precision and a wide jaw opening to break columns, beams and load-bearing elements. It can be mounted on MB-PT demolition pulverizers in just a few minutes, directly on site, with no downtime. It is the most effective solution to start demolition and immediately separate materials."
          ]
        },
        {
          "id": "pulverizer-kit-mb-pt",
          "name": "Pulverizer kit (MB-PT)",
          "tagline": "Available for the MB-PT650, MB-PT1150 and MB-PT1650.",
          "image": "assets/images/mbcrusher/products/accessories/pulverizer-kit-mb-pt.webp",
          "group": "Pulverizer kits",
          "fits": [
            "demolition-pulverizers"
          ],
          "description": [
            "The MB Crusher pulverizer kit, designed for the MB-PT demolition pulverizers, makes it possible to demolish and downsize blocks and construction materials directly on site, streamlining subsequent handling, recovery, or recycling operations. The reinforced jaws ensure a secure grip and effective crushing action, guaranteeing precision and consistency during operation. This allows the material to be reduced in a controlled way, improving debris management during jobsite activities. Installation is quick and easy and can be carried out directly on site."
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/accessories/pulverizer-kit-mb-pt/1.webp"
          ]
        },
        {
          "id": "shear-kit",
          "name": "Shear kit",
          "tagline": "Available for the MB-PT650, MB-PT1150 and MB-PT1650.",
          "image": "assets/images/mbcrusher/products/accessories/shear-kit.webp",
          "group": "Pulverizer kits",
          "fits": [
            "demolition-pulverizers"
          ],
          "description": [
            "The MB Crusher shear kit is specifically designed for cutting steel and metal in demolition applications. The reversible blades ensure precision, long service life and clean cuts, even on thick structures. It can be mounted on MB-PT demolition pulverisers in just a few minutes, directly on site. It is the ideal kit for mixed processing, dismantling operations and the fast separation of metal materials."
          ]
        },
        {
          "id": "forestry-pruner-kit",
          "name": "Forestry pruner kit",
          "tagline": "Available for the MB-P380.",
          "image": "assets/images/mbcrusher/products/accessories/forestry-pruner-kit.webp",
          "group": "Pulverizer kits",
          "fits": [
            "demolition-pulverizers"
          ],
          "description": [
            "The MB Crusher forestry pruner kit is designed for cutting and de-branching plants, branches, and woody material. Installed on the demolition pulverizer, it expands the attachment’s range of applications, making it ideal for forestry operations and green area maintenance. Its dedicated configuration ensures clean, controlled cuts, optimizing on-site vegetation reduction and material handling. The kit is quick to install and allows fast reconfiguration of the attachment based on operational needs, increasing versatility and productivity."
          ],
          "gallery": [
            "assets/images/mbcrusher/gallery/accessories/forestry-pruner-kit/1.webp"
          ]
        }
      ]
    }
  ]
};
