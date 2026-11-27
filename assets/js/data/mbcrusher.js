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
    skid:       { label: "Skid steer loader" , icon: "assets/images/mbcrusher/icons/skid.svg" }
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
          "video": "https://www.rsquaredtrade.com/MB/Videos/crusherbucket%20MB-C50.mp4"
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
          "video": "https://www.rsquaredtrade.com/MB/Videos/crusherbucket%20BF60.1.mp4"
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
          "video": "https://www.rsquaredtrade.com/MB/Videos/crusherbucket%20BF70.2.mp4"
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
          "video": "https://www.rsquaredtrade.com/MB/Videos/crusherbucket%20BF80.3.mp4"
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
          "video": "https://www.rsquaredtrade.com/MB/Videos/crusherbucket%20BF90.3.mp4"
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
          "video": "https://www.rsquaredtrade.com/MB/Videos/crusherbucket%20BF120.4.mp4"
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
          "video": "https://www.rsquaredtrade.com/MB/Videos/crusherbucket%20BF135.8.mp4"
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
          "video": "https://www.rsquaredtrade.com/MB/Videos/crusherbucket%20BF150.10.mp4"
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
          "video": "https://www.rsquaredtrade.com/MB/Videos/crusherbucket%20MB-L120.mp4"
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
          "video": "https://www.rsquaredtrade.com/MB/Videos/crusherbucket%20MB-L140.mp4"
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
          "video": "https://www.rsquaredtrade.com/MB/Videos/crusherbucket%20MB-L160.mp4"
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
          "video": "https://www.rsquaredtrade.com/MB/Videos/crusherbucket%20MB-L200.mp4"
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
          "video": "https://www.rsquaredtrade.com/MB/Videos/screeningbucket%20%20LS170.mp4"
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
          "video": "https://www.rsquaredtrade.com/MB/Videos/screeningbucket%20LS220.mp4"
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
          "video": "https://www.rsquaredtrade.com/MB/Videos/screeningbucket%20S10.mp4"
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
          "video": "https://www.rsquaredtrade.com/MB/Videos/screeningbucket%20S14.mp4"
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
          "video": "https://www.rsquaredtrade.com/MB/Videos/screeningbucket%20S18.mp4"
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
          "video": "https://www.rsquaredtrade.com/MB/Videos/screeningbucket%20S23.mp4"
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
          "video": "https://www.rsquaredtrade.com/MB/Videos/Shafts%20Screener%20MB-HDS214.mp4"
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
          "video": "https://www.rsquaredtrade.com/MB/Videos/Shafts%20Screener%20MB-HDS314.mp4"
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
          "video": "https://www.rsquaredtrade.com/MB/Videos/Shafts%20Screener%20MB-HDS320.mp4"
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
          "video": "https://www.rsquaredtrade.com/MB/Videos/Shafts%20Screener%20MB-HDS323.mp4"
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
          "video": "https://www.rsquaredtrade.com/MB/Videos/Shafts%20Screener%20MB-HDS523.mp4"
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
          "video": "https://www.rsquaredtrade.com/MB/Videos/drumcutter%20R500.mp4"
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
          "video": "https://www.rsquaredtrade.com/MB/Videos/drumcutter%20R700.mp4"
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
          "video": "https://www.rsquaredtrade.com/MB/Videos/drumcutter%20R800.mp4"
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
          "video": "https://www.rsquaredtrade.com/MB/Videos/drumcutter%20R900.mp4"
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
          "video": "https://www.rsquaredtrade.com/MB/Videos/MB-G350%20-%20MB-G450_EN.mp4"
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
          "video": "https://www.rsquaredtrade.com/MB/Videos/MB-G350%20-%20MB-G450_EN.mp4"
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
          "video": "https://www.rsquaredtrade.com/MB/Videos/MB-G600%20-%20Kubota.mp4"
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
          "video": "https://www.rsquaredtrade.com/MB/Videos/The%20MB-G900%20grapple%20in%20a%20big%20demolition%20project.mp4"
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
          "video": "https://www.rsquaredtrade.com/MB/Videos/MB-G1000_EN.mp4"
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
          "video": "https://www.rsquaredtrade.com/MB/Videos/MB-G1200_Komatsu210_Croatia_moving%20and%20separating%20materials_wood.mp4"
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
          "video": "https://www.rsquaredtrade.com/MB/Videos/Grapple%20rotary%20movement%20MB-G1500.mp4"
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
              "name": "12 V Electrical Kit for 2 Hose Functionality"
            },
            {
              "name": "MB-P Pulverizer Kit"
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
              "name": "12 V Electrical Kit for 2 Hose Functionality"
            },
            {
              "name": "MB-P Pulverizer Kit"
            },
            {
              "name": "Forestry pruner kit"
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
              "name": "12 V Electrical Kit for 2 Hose Functionality"
            },
            {
              "name": "Crusher Kit"
            },
            {
              "name": "Pulverizer Kit"
            },
            {
              "name": "Shear Kit"
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
              "name": "12 V Electrical Kit for 2 Hose Functionality"
            },
            {
              "name": "Crusher Kit"
            },
            {
              "name": "Pulverizer Kit"
            },
            {
              "name": "Shear Kit"
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
              "name": "12 V Electrical Kit for 2 Hose Functionality"
            },
            {
              "name": "Crusher Kit"
            },
            {
              "name": "Pulverizer Kit"
            },
            {
              "name": "Shear Kit"
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
          ]
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
          ]
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
          ]
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
        }
      ]
    }
  ]
};
