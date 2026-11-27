/* =================================================================
   MB CRUSHER CATALOGUE DATA
   The single source for mbcrusher.html. To add, edit or remove a product,
   change it here; the page builds itself from this file.

   product fields
     id          unique, used in links: mbcrusher.html?type=<category>&model=<id>
     name        model name
     tagline     short line under the name (optional)
     image       product photo (WebP)
     carriers    machines it fits + weight range in tonnes
                 type: one of the keys in MB_CRUSHER.carriers
                 max: null means "from <min> t upwards"
     group       (accessories) heading the item is listed under
     fits        (accessories) category ids it works with, or ['all']

   optional detail fields (a product with any of these gets a detail view)
     description paragraphs of text
     specs       [{ label, value }] technical features, shown as a table
     gallery     job-site photos (WebP)
     video       .mp4 URL, loaded only when the visitor presses play

   category fields
     specNote    line shown under every spec table in that category
   ================================================================= */
window.MB_CRUSHER = {
  carriers: {
    excavator:  { label: "Excavator"         , icon: "assets/images/mbcrusher/icons/excavator.webp" },
    crane:      { label: "Crane"             , icon: "assets/images/mbcrusher/icons/crane.webp" },
    demolition: { label: "Demolition machine", icon: "assets/images/mbcrusher/icons/demolition.webp" }
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
      products: [
        {"id": "mb-ls170-s2", "name": "MB-LS170 S2", "tagline": "Innovative and handy", "image": "assets/images/mbcrusher/products/screening-buckets/mb-ls170-s2.webp", "carriers": [{"type": "crane", "min": 8, "max": 15},{"type": "excavator", "min": 6.5, "max": 11}]},
        {"id": "mb-ls220-s2", "name": "MB-LS220 S2", "tagline": "Great and Powerful", "image": "assets/images/mbcrusher/products/screening-buckets/mb-ls220-s2.webp", "carriers": [{"type": "crane", "min": 15, "max": 25},{"type": "excavator", "min": 12, "max": 25}]},
        {"id": "mb-s10-s4", "name": "MB-S10 S4", "tagline": "Small and efficient", "image": "assets/images/mbcrusher/products/screening-buckets/mb-s10-s4.webp", "carriers": [{"type": "crane", "min": 4, "max": 9},{"type": "excavator", "min": 4, "max": 9}]},
        {"id": "mb-s14-s4", "name": "MB-S14 S4", "tagline": "Handy with high performance", "image": "assets/images/mbcrusher/products/screening-buckets/mb-s14-s4.webp", "carriers": [{"type": "excavator", "min": 9, "max": 20}]},
        {"id": "mb-s18-s4", "name": "MB-S18 S4", "tagline": "Great performance", "image": "assets/images/mbcrusher/products/screening-buckets/mb-s18-s4.webp", "carriers": [{"type": "excavator", "min": 20, "max": 35}]},
        {"id": "mb-s23", "name": "MB-S23", "tagline": "The biggest in the world", "image": "assets/images/mbcrusher/products/screening-buckets/mb-s23.webp"}
      ]
    },
    {
      id: "shaft-screeners",
      name: "Shaft Screeners",
      series: "MB-HDS",
      summary: "The ideal solution for processing all kinds of waste material, quickly repurposing it into re-usable and profitable material.",
      icon: "assets/images/mbcrusher/categories/shaft-screeners.webp",
      products: [
        {"id": "mb-hds214", "name": "MB-HDS214", "image": "assets/images/mbcrusher/products/shaft-screeners/mb-hds214.webp", "carriers": [{"type": "excavator", "min": 5, "max": 8},{"type": "demolition", "min": 6, "max": 12},{"type": "crane", "min": 3.5, "max": null}]},
        {"id": "mb-hds314", "name": "MB-HDS314", "image": "assets/images/mbcrusher/products/shaft-screeners/mb-hds314.webp", "carriers": [{"type": "excavator", "min": 6, "max": 10},{"type": "demolition", "min": 6, "max": 10},{"type": "crane", "min": 3.5, "max": null}]},
        {"id": "mb-hds320", "name": "MB-HDS320", "image": "assets/images/mbcrusher/products/shaft-screeners/mb-hds320.webp", "carriers": [{"type": "excavator", "min": 9, "max": 12},{"type": "demolition", "min": 9, "max": 12},{"type": "crane", "min": 3.5, "max": null}]},
        {"id": "mb-hds323", "name": "MB-HDS323", "image": "assets/images/mbcrusher/products/shaft-screeners/mb-hds323.webp", "carriers": [{"type": "excavator", "min": 10, "max": 15},{"type": "demolition", "min": 10, "max": 15},{"type": "crane", "min": 3.5, "max": null}]},
        {"id": "mb-hds523", "name": "MB-HDS523", "image": "assets/images/mbcrusher/products/shaft-screeners/mb-hds523.webp", "carriers": [{"type": "excavator", "min": 30, "max": 45}]}
      ]
    },
    {
      id: "drum-cutters",
      name: "Drum Cutters",
      series: "MB-R",
      summary: "Suitable for any application requiring hard material to be cut or ground away.",
      icon: "assets/images/mbcrusher/categories/drum-cutters.webp",
      products: [
        {"id": "mb-r500", "name": "MB-R500", "tagline": "The Jack of all trades", "image": "assets/images/mbcrusher/products/drum-cutters/mb-r500.webp", "carriers": [{"type": "crane", "min": 3.5, "max": 11},{"type": "excavator", "min": 3.5, "max": 6}]},
        {"id": "mb-r700", "name": "MB-R700", "tagline": "Small and efficient", "image": "assets/images/mbcrusher/products/drum-cutters/mb-r700.webp", "carriers": [{"type": "crane", "min": 6, "max": 13},{"type": "excavator", "min": 6, "max": 10}]},
        {"id": "mb-r800", "name": "MB-R800", "tagline": "Agile and efficient", "image": "assets/images/mbcrusher/products/drum-cutters/mb-r800.webp", "carriers": [{"type": "excavator", "min": 10, "max": 22}]},
        {"id": "mb-r900", "name": "MB-R900", "tagline": "Great performance", "image": "assets/images/mbcrusher/products/drum-cutters/mb-r900.webp", "carriers": [{"type": "excavator", "min": 19, "max": 35}]}
      ]
    },
    {
      id: "sorting-grapples",
      name: "Sorting Grapples",
      series: "MB-G",
      summary: "Designed for handling, sorting and loading demolition materials.",
      icon: "assets/images/mbcrusher/categories/sorting-grapples.webp",
      products: [
        {"id": "mb-g350-s4", "name": "MB-G350 S4", "tagline": "Compact and precise", "image": "assets/images/mbcrusher/products/sorting-grapples/mb-g350-s4.webp", "carriers": [{"type": "excavator", "min": 1.3, "max": 2.6}]},
        {"id": "mb-g450-s4", "name": "MB-G450 S4", "tagline": "Agile and versatile", "image": "assets/images/mbcrusher/products/sorting-grapples/mb-g450-s4.webp", "carriers": [{"type": "excavator", "min": 3, "max": 6}]},
        {"id": "mb-g600-s4", "name": "MB-G600 S4", "tagline": "Small and efficient", "image": "assets/images/mbcrusher/products/sorting-grapples/mb-g600-s4.webp", "carriers": [{"type": "excavator", "min": 6, "max": 12}]},
        {"id": "mb-g900-s4", "name": "MB-G900 S4", "tagline": "Handy with high performance", "image": "assets/images/mbcrusher/products/sorting-grapples/mb-g900-s4.webp", "carriers": [{"type": "excavator", "min": 12, "max": 18}]},
        {"id": "mb-g1000-s4", "name": "MB-G1000 S4", "tagline": "Efficient and reliable", "image": "assets/images/mbcrusher/products/sorting-grapples/mb-g1000-s4.webp", "carriers": [{"type": "excavator", "min": 18, "max": 25}]},
        {"id": "mb-g1200-s4", "name": "MB-G1200 S4", "tagline": "Great performance", "image": "assets/images/mbcrusher/products/sorting-grapples/mb-g1200-s4.webp", "carriers": [{"type": "excavator", "min": 18, "max": 30}]},
        {"id": "mb-g1500-s4", "name": "MB-G1500 S4", "tagline": "Handy, practical, efficient", "image": "assets/images/mbcrusher/products/sorting-grapples/mb-g1500-s4.webp", "carriers": [{"type": "excavator", "min": 20, "max": 30}]}
      ]
    },
    {
      id: "accessories",
      name: "Accessories",
      series: null,
      summary: "MB Crusher accessories complement and add value to MB attachments, personalising and optimising the work process on any job site.",
      icon: "assets/images/mbcrusher/categories/accessories.webp",
      products: [
        {"id": "24-v-iron-separator", "name": "24 V Iron separator", "tagline": "It's available for MB's crushing attachments.", "image": "assets/images/mbcrusher/products/accessories/24-v-iron-separator.webp", "group": null, "fits": ["crusher-buckets"]},
        {"id": "the-dust-suppression-kit", "name": "The dust suppression kit", "tagline": "This kit is available for the crusher attachments.", "image": "assets/images/mbcrusher/products/accessories/the-dust-suppression-kit.webp", "group": null, "fits": ["crusher-buckets"]},
        {"id": "coupling", "name": "Coupling", "tagline": "Available for all MB units.", "image": "assets/images/mbcrusher/products/accessories/coupling.webp", "group": null, "fits": ["all"]},
        {"id": "spare-parts-kit", "name": "Spare parts kit", "tagline": "Available for all MB units.", "image": "assets/images/mbcrusher/products/accessories/spare-parts-kit.webp", "group": null, "fits": ["all"]},
        {"id": "warranty-extension-gold-24", "name": "Warranty extension gold 24", "tagline": "Available for all MB units.", "image": "assets/images/mbcrusher/products/accessories/warranty-extension-gold-24.webp", "group": null, "fits": ["all"]},
        {"id": "hour-meter", "name": "Hour meter", "tagline": "It's available for both MB's crushing and screening attachments.", "image": "assets/images/mbcrusher/products/accessories/hour-meter.webp", "group": null, "fits": ["crusher-buckets", "screening-buckets"]},
        {"id": "basket-protection-kit", "name": "Basket protection kit", "tagline": "It's available for all MB screening buckets.", "image": "assets/images/mbcrusher/products/accessories/basket-protection-kit.webp", "group": null, "fits": ["screening-buckets"]},
        {"id": "shaft-holder", "name": "Shaft holder", "tagline": "It's available for all MB-HDS models.", "image": "assets/images/mbcrusher/products/accessories/shaft-holder.webp", "group": null, "fits": ["shaft-screeners"]},
        {"id": "rc-compost-kit", "name": "RC compost kit", "tagline": "It's available for all MB-HDS models.", "image": "assets/images/mbcrusher/products/accessories/rc-compost-kit.webp", "group": "Shaft kits", "fits": ["shaft-screeners"]},
        {"id": "rc-mixer-kit", "name": "RC mixer kit", "tagline": "It's available for all MB-HDS models.", "image": "assets/images/mbcrusher/products/accessories/rc-mixer-kit.webp", "group": "Shaft kits", "fits": ["shaft-screeners"]},
        {"id": "re8-re16-fine-sifting-kit-compost-kit", "name": "RE8/RE16 fine sifting kit compost kit", "tagline": "It's available for all MB-HDS models.", "image": "assets/images/mbcrusher/products/accessories/re8-re16-fine-sifting-kit-compost-kit.webp", "group": "Shaft kits", "fits": ["shaft-screeners"]},
        {"id": "rq20-rq50-medium-sifting-kit", "name": "RQ20/RQ50 medium sifting kit", "tagline": "It's available for all MB-HDS models.", "image": "assets/images/mbcrusher/products/accessories/rq20-rq50-medium-sifting-kit.webp", "group": "Shaft kits", "fits": ["shaft-screeners"]},
        {"id": "drum-cover-kit", "name": "Drum cover kit", "tagline": "Available for the MB-R500", "image": "assets/images/mbcrusher/products/accessories/drum-cover-kit.webp", "group": null, "fits": ["drum-cutters"]},
        {"id": "cutting-depth-adjustment-kit", "name": "Cutting depth adjustment kit", "tagline": "Available for the MB-R500", "image": "assets/images/mbcrusher/products/accessories/cutting-depth-adjustment-kit.webp", "group": null, "fits": ["drum-cutters"]},
        {"id": "cutter-body-rotation-kit", "name": "Cutter body rotation kit", "tagline": "Available for the MB-R500", "image": "assets/images/mbcrusher/products/accessories/cutter-body-rotation-kit.webp", "group": null, "fits": ["drum-cutters"]},
        {"id": "rock-and-asphalt-pick-kit", "name": "Rock and asphalt pick kit", "tagline": "It's available for all MB drum cutters.", "image": "assets/images/mbcrusher/products/accessories/rock-and-asphalt-pick-kit.webp", "group": null, "fits": ["drum-cutters"]},
        {"id": "drum-kit", "name": "Drum kit", "tagline": "It's available for all MB drum cutters.", "image": "assets/images/mbcrusher/products/accessories/drum-kit.webp", "group": null, "fits": ["drum-cutters"]},
        {"id": "power-transmission-kit", "name": "Power transmission kit", "tagline": "Available for the MB-R500.", "image": "assets/images/mbcrusher/products/accessories/power-transmission-kit.webp", "group": null, "fits": ["drum-cutters"]},
        {"id": "oil-temperature-reducing-device", "name": "Oil temperature reducing device", "tagline": "It's available for all MB drum cutters.", "image": "assets/images/mbcrusher/products/accessories/oil-temperature-reducing-device.webp", "group": null, "fits": ["drum-cutters"]},
        {"id": "rotation-power-extender-kit", "name": "Rotation power extender kit", "tagline": "It's available for MB Grapple models.", "image": "assets/images/mbcrusher/products/accessories/rotation-power-extender-kit.webp", "group": null, "fits": ["sorting-grapples"]},
        {"id": "multi-purpose-blade-kit", "name": "Multi-purpose blade kit", "tagline": "It's available for all MB Grapple models.", "image": "assets/images/mbcrusher/products/accessories/multi-purpose-blade-kit.webp", "group": null, "fits": ["sorting-grapples"]},
        {"id": "clamshell-kit", "name": "Clamshell kit", "tagline": "It's available for all MB Grapple models.", "image": "assets/images/mbcrusher/products/accessories/clamshell-kit.webp", "group": null, "fits": ["sorting-grapples"]},
        {"id": "grip-improvement-kit", "name": "Grip improvement kit", "tagline": "It's available for all MB Grapple models.", "image": "assets/images/mbcrusher/products/accessories/grip-improvement-kit.webp", "group": null, "fits": ["sorting-grapples"]},
        {"id": "tilting-lift-rubber-protection-kit", "name": "Tilting lift rubber protection kit", "tagline": "It's available for all MB Grapple models.", "image": "assets/images/mbcrusher/products/accessories/tilting-lift-rubber-protection-kit.webp", "group": null, "fits": ["sorting-grapples"]}
      ]
    }
  ]
};
