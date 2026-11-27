/* =================================================================
   HİDROMEK CATALOGUE DATA
   The single source for hidromek.html (rendered by assets/js/catalog.js,
   the same engine as the other brand pages). Edit models here.
   Content and images: HİDROMEK (hidromek.com/europe-EN/products).

   HİDROMEK-specific product fields
     highlights   [{ label, value }] – 2–3 headline figures for the card and header
     sections     [{ title, text: [paragraphs] }] – "Features & benefits" blocks
     specGroups   [{ title, specs: [{ label, value }] }] – technical specs by group
     source       the model's page on hidromek.com
   other fields: see assets/js/data/mbcrusher.js
   ================================================================= */
window.CATALOG = {
  brand: {
    name: "HİDROMEK",
    page: "hidromek.html",
    quoteBrand: "HİDROMEK",
    origin: "Türkiye · Represented in Egypt by Rsquared Trade",
    lead: "Founded in Ankara in 1978, HİDROMEK builds backhoe loaders, hydraulic excavators, wheel loaders, motor graders and soil compactors – the first construction machines designed by Turkish engineers.",
    logo: { src: "assets/images/partners/hidromek.png", width: 465, height: 60 },
    productWord: ["Model", "Models"],
    stats: [["1978", "Founded in Ankara"]]
  },
  categories: [
    {
      id: "backhoe-loaders",
      name: "Backhoe Loaders",
      series: null,
      summary: "Versatile loaders with a rear backhoe for digging, loading and site work, in side-shift and centre-mount versions.",
      icon: "assets/images/hidromek/hmk-102-b-alpha/main.webp",
      iconStyle: "photo",
      products: [
        {
          "id": "hmk-102-b-alpha",
          "name": "HMK 102 B ALPHA",
          "tagline": "Backhoe loader",
          "image": "assets/images/hidromek/hmk-102-b-alpha/main.webp",
          "photo": true,
          "highlights": [
            {
              "label": "Operating weight",
              "value": "9,300 kg"
            },
            {
              "label": "Max power",
              "value": "100 HP (74.4 kW)"
            },
            {
              "label": "Bucket capacity",
              "value": "1.1 m³"
            }
          ],
          "sections": [
            {
              "title": "",
              "text": [
                "K4 Series, designed for severe geographical conditions and heavy working conditions, increases your productivity with its strong structure and efficient hydraulic system providing maximum breakout force even at lower revolutions and having high oil flow.",
                "HİDROMEK K4 Series backhoe loaders facilitating works in excavation, infrastructure, superstructure, agriculture, forestry, landscaping and industrial areas thanks to their use with different attachments such as leveling shovel, forklift, hammer, auger, log, pendulum bucket, snow plow, scrap and paper collection bucket, bottom opening (big bag) bucket, stone collecting bucket, trapeze bucket, ripper and polyp attachment provide the benefits you expect."
              ]
            },
            {
              "title": "20% Faster",
              "text": [
                "K4 series backhoe loaders with accelerated movements through improved loader cylinder design do a lot of work in a short time during loading and unloading operations."
              ]
            },
            {
              "title": "3% More Efficient",
              "text": [
                "K4 Series backhoe loaders produce more work with less fuel as a result of the improvements made in cylinder design."
              ]
            }
          ],
          "specGroups": [
            {
              "title": "Engine",
              "specs": [
                {
                  "label": "Brand - model",
                  "value": "Perkins 904J-E36TA"
                },
                {
                  "label": "Maximum power",
                  "value": "100 HP (74.4 kW) @2200 rpm 110 HP (82 kW) @ 2200 rpm"
                },
                {
                  "label": "Displacement",
                  "value": "3,621 cc"
                },
                {
                  "label": "Type",
                  "value": "High power and torque output, water cooled turbocharged diesel engine."
                },
                {
                  "label": "Maximum torque",
                  "value": "430 Nm @1500 rpm 110 HP: 500 Nm @1500 rpm"
                },
                {
                  "label": "Bore & stroke",
                  "value": "ø 98 x 120 mm"
                },
                {
                  "label": "Emission class",
                  "value": "EU:Stage 5, US: Tier 4 final"
                }
              ]
            },
            {
              "title": "Hydraulic System",
              "specs": [
                {
                  "label": "Pressure",
                  "value": "255 bar"
                },
                {
                  "label": "Type",
                  "value": "Simple, reliable and high efficien tandem gear pump"
                },
                {
                  "label": "Auxilary pump flow",
                  "value": "57.2 L/min @2200 rpm"
                },
                {
                  "label": "Main pump flow",
                  "value": "90 L/min @2200 rpm"
                }
              ]
            },
            {
              "title": "Tires",
              "specs": [
                {
                  "label": "Front",
                  "value": "16/70 - 20 12 Ply Rating"
                },
                {
                  "label": "Rear",
                  "value": "16.9 - 28 14 Ply Rating (Optional: 18.4- 26 12 Ply Rating)"
                }
              ]
            },
            {
              "title": "Driving Speed",
              "specs": [
                {
                  "label": "1st gear",
                  "value": "4 km/h"
                },
                {
                  "label": "2nd gear",
                  "value": "7 km/h"
                },
                {
                  "label": "3rd gear",
                  "value": "9 km/h"
                },
                {
                  "label": "4th gear",
                  "value": "15 km/h"
                },
                {
                  "label": "5th gear",
                  "value": "22 km/h"
                },
                {
                  "label": "6th gear",
                  "value": "40 km/h"
                }
              ]
            },
            {
              "title": "Loader Performance",
              "specs": [
                {
                  "label": "Maximum loader bucket breakout force",
                  "value": "7,380 kgf"
                },
                {
                  "label": "Loader bucket capacity",
                  "value": "1.1 m³"
                },
                {
                  "label": "Maximum loading arm breakout force",
                  "value": "7,380 kgf"
                },
                {
                  "label": "Lifting capacity to maximum height",
                  "value": "3,660 kg"
                }
              ]
            },
            {
              "title": "Backhoe Performance",
              "specs": [
                {
                  "label": "Backhoe bucket capacity",
                  "value": "0.18 m³"
                },
                {
                  "label": "Maximum backhoe bucket breakout force",
                  "value": "7,020 kgf"
                },
                {
                  "label": "Maximum arm breakout force",
                  "value": "3,160 kgf"
                }
              ]
            },
            {
              "title": "Operating Weight",
              "specs": [
                {
                  "label": "Operating weight",
                  "value": "9,300 kg"
                }
              ]
            },
            {
              "title": "Transmission",
              "specs": [
                {
                  "label": "Number of gear",
                  "value": "6 forward, 3 reverse gears"
                }
              ]
            }
          ],
          "gallery": [
            "assets/images/hidromek/hmk-102-b-alpha/photo-1.webp",
            "assets/images/hidromek/hmk-102-b-alpha/photo-2.webp",
            "assets/images/hidromek/hmk-102-b-alpha/photo-3.webp",
            "assets/images/hidromek/hmk-102-b-alpha/photo-4.webp",
            "assets/images/hidromek/hmk-102-b-alpha/view-3.webp",
            "assets/images/hidromek/hmk-102-b-alpha/view-8.webp",
            "assets/images/hidromek/hmk-102-b-alpha/view-13.webp"
          ],
          "source": "https://www.hidromek.com/europe-en/products/backhoe-loaders/hmk-102-b-alpha"
        },
        {
          "id": "hmk-102-b-alpha-greentec",
          "name": "HMK 102 B ALPHA GREENTEC",
          "tagline": "Backhoe loader",
          "image": "assets/images/hidromek/hmk-102-b-alpha-greentec/main.webp",
          "photo": true,
          "highlights": [
            {
              "label": "Operating weight",
              "value": "8,950 kg"
            },
            {
              "label": "Max power",
              "value": "74.3 HP (55.4 kW)"
            },
            {
              "label": "Bucket capacity",
              "value": "1.0 m³"
            }
          ],
          "sections": [
            {
              "title": "",
              "text": [
                "K4 Series, designed for severe geographical conditions and heavy working conditions, increases your productivity with its strong structure and efficient hydraulic system providing maximum breakout force even at lower revolutions and having high oil flow.",
                "HİDROMEK K4 Series backhoe loaders facilitating works in excavation, infrastructure, superstructure, agriculture, forestry, landscaping and industrial areas thanks to their use with different attachments such as leveling shovel, forklift, hammer, auger, log, pendulum bucket, snow plow, scrap and paper collection bucket, bottom opening (big bag) bucket, stone collecting bucket, trapeze bucket, ripper and polyp attachment provide the benefits you expect."
              ]
            },
            {
              "title": "20% Faster",
              "text": [
                "K4 series backhoe loaders with accelerated movements through improved loader cylinder design do a lot of work in a short time during loading and unloading operations."
              ]
            },
            {
              "title": "3% More Efficient",
              "text": [
                "K4 Series backhoe loaders produce more work with less fuel as a result of the improvements made in cylinder design."
              ]
            }
          ],
          "specGroups": [
            {
              "title": "Engine",
              "specs": [
                {
                  "label": "Brand - model",
                  "value": "Perkins, 904J-E36TA"
                },
                {
                  "label": "Maximum power",
                  "value": "74.3 HP (55.4 kW) @2200 rpm"
                },
                {
                  "label": "Displacement",
                  "value": "3,621 cc"
                },
                {
                  "label": "Type",
                  "value": "High power and torque output, water cooled turbocharged diesel engine."
                },
                {
                  "label": "Maximum torque",
                  "value": "424 Nm @1200 rpm"
                },
                {
                  "label": "Bore & stroke",
                  "value": "ø 98 x 120 mm"
                },
                {
                  "label": "Emission class",
                  "value": "EU:Stage 5, US: Tier 4 final"
                }
              ]
            },
            {
              "title": "Hydraulic System",
              "specs": [
                {
                  "label": "Pressure",
                  "value": "227 bar"
                },
                {
                  "label": "Type",
                  "value": "Simple, reliable and high efficien tandem gear pump"
                },
                {
                  "label": "Auxilary pump flow",
                  "value": "57.2 L/min @2200 rpm"
                },
                {
                  "label": "Main pump flow",
                  "value": "90 L/min @2200 rpm"
                }
              ]
            },
            {
              "title": "Tires",
              "specs": [
                {
                  "label": "Front",
                  "value": "16/70 - 20 12 Ply Rating"
                },
                {
                  "label": "Rear",
                  "value": "16.9 - 28 14 Ply Rating (Optional: 18.4- 26 12 Ply Rating)"
                }
              ]
            },
            {
              "title": "Driving Speed",
              "specs": [
                {
                  "label": "1st gear",
                  "value": "4 km/h"
                },
                {
                  "label": "2nd gear",
                  "value": "7 km/h"
                },
                {
                  "label": "3rd gear",
                  "value": "9 km/h"
                },
                {
                  "label": "4th gear",
                  "value": "15 km/h"
                },
                {
                  "label": "5th gear",
                  "value": "24 km/h"
                },
                {
                  "label": "6th gear",
                  "value": "40 km/h"
                }
              ]
            },
            {
              "title": "Loader Performance",
              "specs": [
                {
                  "label": "Maximum loader bucket breakout force",
                  "value": "7,380 kgf"
                },
                {
                  "label": "Loader bucket capacity",
                  "value": "1.0 m³"
                },
                {
                  "label": "Maximum loading arm breakout force",
                  "value": "7,380 kgf"
                },
                {
                  "label": "Lifting capacity to maximum height",
                  "value": "3,660 kg"
                }
              ]
            },
            {
              "title": "Backhoe Performance",
              "specs": [
                {
                  "label": "Backhoe bucket capacity",
                  "value": "0.18 m³"
                },
                {
                  "label": "Maximum backhoe bucket breakout force",
                  "value": "6,865 kgf"
                },
                {
                  "label": "Maximum arm breakout force",
                  "value": "3,290 kgf"
                }
              ]
            },
            {
              "title": "Operating Weight",
              "specs": [
                {
                  "label": "Operating weight",
                  "value": "8,950 kg"
                }
              ]
            },
            {
              "title": "Transmission",
              "specs": [
                {
                  "label": "Type",
                  "value": "Autoshift transmission for heavy duty service"
                },
                {
                  "label": "Number of gear",
                  "value": "6 forward, 3 reverse gears"
                }
              ]
            }
          ],
          "source": "https://www.hidromek.com/europe-en/products/backhoe-loaders/hmk-102-b-alpha-greentec"
        },
        {
          "id": "hmk-102-b-supra",
          "name": "HMK 102 B SUPRA",
          "tagline": "Backhoe loader",
          "image": "assets/images/hidromek/hmk-102-b-supra/main.webp",
          "photo": true,
          "highlights": [
            {
              "label": "Operating weight",
              "value": "9,300 kg"
            },
            {
              "label": "Max power",
              "value": "100 HP (74.4 kW)"
            },
            {
              "label": "Bucket capacity",
              "value": "1.1 m³"
            }
          ],
          "sections": [
            {
              "title": "",
              "text": [
                "K4 Series, designed for severe geographical conditions and heavy working conditions, increases your productivity with its strong structure and efficient hydraulic system providing maximum breakout force even at lower revolutions and having high oil flow.",
                "HİDROMEK K4 Series backhoe loaders facilitating works in excavation, infrastructure, superstructure, agriculture, forestry, landscaping and industrial areas thanks to their use with different attachments such as leveling shovel, forklift, hammer, auger, log, pendulum bucket, snow plow, scrap and paper collection bucket, bottom opening (big bag) bucket, stone collecting bucket, trapeze bucket, ripper and polyp attachment provide the benefits you expect."
              ]
            },
            {
              "title": "20% Faster",
              "text": [
                "K4 series backhoe loaders with accelerated movements through improved loader cylinder design do a lot of work in a short time during loading and unloading operations."
              ]
            },
            {
              "title": "3% More Efficient",
              "text": [
                "K4 Series backhoe loaders produce more work with less fuel as a result of the improvements made in cylinder design."
              ]
            }
          ],
          "specGroups": [
            {
              "title": "Engine",
              "specs": [
                {
                  "label": "Brand - model",
                  "value": "Perkins, 904J-E36TA"
                },
                {
                  "label": "Maximum power",
                  "value": "100 HP (74.4 kW) @2200 rpm 110 HP (82 kW) @ 2200 rpm"
                },
                {
                  "label": "Displacement",
                  "value": "3,621 cc"
                },
                {
                  "label": "Type",
                  "value": "High power and torque output, water cooled turbocharged diesel engine."
                },
                {
                  "label": "Maximum torque",
                  "value": "430 Nm @1500 rpm 110 HP: 500 Nm @1500 rpm"
                },
                {
                  "label": "Bore & stroke",
                  "value": "ø 98 x 120 mm"
                },
                {
                  "label": "Emission class",
                  "value": "EU:Stage 5, US: Tier 4 final"
                }
              ]
            },
            {
              "title": "Hydraulic System",
              "specs": [
                {
                  "label": "Pressure",
                  "value": "255 bar"
                },
                {
                  "label": "Type",
                  "value": "Closed type hydraulic system with variable displacement piston type pump, renewable flowsharing and valves with regeneration"
                },
                {
                  "label": "Main pump flow",
                  "value": "163 L/min @2200 rpm"
                }
              ]
            },
            {
              "title": "Tires",
              "specs": [
                {
                  "label": "Front",
                  "value": "16/70 - 20 12 Ply Rating"
                },
                {
                  "label": "Rear",
                  "value": "16.9 - 28 14 Ply Rating (Optional: 18.4- 26 12 Ply Rating)"
                }
              ]
            },
            {
              "title": "Driving Speed",
              "specs": [
                {
                  "label": "1st gear",
                  "value": "4 km/h"
                },
                {
                  "label": "2nd gear",
                  "value": "7 km/h"
                },
                {
                  "label": "3rd gear",
                  "value": "9 km/h"
                },
                {
                  "label": "4th gear",
                  "value": "15 km/h"
                },
                {
                  "label": "5th gear",
                  "value": "24 km/h"
                },
                {
                  "label": "6th gear",
                  "value": "40 km/h"
                }
              ]
            },
            {
              "title": "Loader Performance",
              "specs": [
                {
                  "label": "Maximum loader bucket breakout force",
                  "value": "7,380 kgf"
                },
                {
                  "label": "Loader bucket capacity",
                  "value": "1.1 m³"
                },
                {
                  "label": "Maximum loading arm breakout force",
                  "value": "7,380 kgf"
                },
                {
                  "label": "Lifting capacity to maximum height",
                  "value": "3,660 kg"
                }
              ]
            },
            {
              "title": "Backhoe Performance",
              "specs": [
                {
                  "label": "Backhoe bucket capacity",
                  "value": "0.18 m³"
                },
                {
                  "label": "Maximum backhoe bucket breakout force",
                  "value": "7020"
                },
                {
                  "label": "Maximum arm breakout force",
                  "value": "3160"
                }
              ]
            },
            {
              "title": "Operating Weight",
              "specs": [
                {
                  "label": "Operating weight",
                  "value": "9,300 kg"
                }
              ]
            },
            {
              "title": "Transmission",
              "specs": [
                {
                  "label": "Type",
                  "value": "Autoshift transmission for heavy duty service"
                },
                {
                  "label": "Number of gear",
                  "value": "6 forward, 3 reverse gears with Lock-Up"
                }
              ]
            }
          ],
          "gallery": [
            "assets/images/hidromek/hmk-102-b-supra/photo-1.webp",
            "assets/images/hidromek/hmk-102-b-supra/photo-2.webp",
            "assets/images/hidromek/hmk-102-b-supra/photo-3.webp",
            "assets/images/hidromek/hmk-102-b-supra/photo-4.webp"
          ],
          "source": "https://www.hidromek.com/europe-en/products/backhoe-loaders/hmk-102-b-supra"
        },
        {
          "id": "hmk-102-s-alpha",
          "name": "HMK 102 S ALPHA",
          "tagline": "Backhoe loader",
          "image": "assets/images/hidromek/hmk-102-s-alpha/main.webp",
          "photo": true,
          "highlights": [
            {
              "label": "Operating weight",
              "value": "9,650 kg"
            },
            {
              "label": "Max power",
              "value": "100 HP (74.4 kW)"
            },
            {
              "label": "Bucket capacity",
              "value": "1.1 m³"
            }
          ],
          "sections": [
            {
              "title": "",
              "text": [
                "K4 Series, designed for severe geographical conditions and heavy working conditions, increases your productivity with its strong structure and efficient hydraulic system providing maximum breakout force even at lower revolutions and having high oil flow.",
                "HİDROMEK K4 Series backhoe loaders facilitating works in excavation, infrastructure, superstructure, agriculture, forestry, landscaping and industrial areas thanks to their use with different attachments such as leveling shovel, forklift, hammer, auger, log, pendulum bucket, snow plow, scrap and paper collection bucket, bottom opening (big bag) bucket, stone collecting bucket, trapeze bucket, ripper and polyp attachment provide the benefits you expect."
              ]
            },
            {
              "title": "20% Faster",
              "text": [
                "K4 series backhoe loaders with accelerated movements through improved loader cylinder design do a lot of work in a short time during loading and unloading operations."
              ]
            },
            {
              "title": "3% More Efficient",
              "text": [
                "K4 Series backhoe loaders produce more work with less fuel as a result of the improvements made in cylinder design."
              ]
            }
          ],
          "specGroups": [
            {
              "title": "Engine",
              "specs": [
                {
                  "label": "Brand - model",
                  "value": "Perkins, 904J-E36TA"
                },
                {
                  "label": "Maximum power",
                  "value": "100 HP (74.4 kW) @2200 rpm 110 HP (82 kW) @ 2200 rpm"
                },
                {
                  "label": "Displacement",
                  "value": "3,621 cc"
                },
                {
                  "label": "Type",
                  "value": "High power and torque output, water cooled turbocharged diesel engine."
                },
                {
                  "label": "Maximum torque",
                  "value": "430 Nm @1500 rpm 110 HP: 500 Nm @1500 rpm"
                },
                {
                  "label": "Bore & stroke",
                  "value": "ø 98 x 120 mm"
                },
                {
                  "label": "Emission class",
                  "value": "EU:Stage 5, US: Tier 4 final"
                }
              ]
            },
            {
              "title": "Hydraulic System",
              "specs": [
                {
                  "label": "Pressure",
                  "value": "255 bar"
                },
                {
                  "label": "Type",
                  "value": "Simple, reliable and high efficien tandem gear pump"
                },
                {
                  "label": "Auxilary pump flow",
                  "value": "57.2 L/min @2200 rpm"
                },
                {
                  "label": "Main pump flow",
                  "value": "90L/min @2200 rpm"
                }
              ]
            },
            {
              "title": "Tires",
              "specs": [
                {
                  "label": "Front",
                  "value": "16.9 - 28 14 Ply Rating"
                },
                {
                  "label": "Rear",
                  "value": "16.9 - 28 14 Ply Rating"
                }
              ]
            },
            {
              "title": "Driving Speed",
              "specs": [
                {
                  "label": "1st gear",
                  "value": "4 km/h"
                },
                {
                  "label": "2nd gear",
                  "value": "7 km/h"
                },
                {
                  "label": "3rd gear",
                  "value": "9 km/h"
                },
                {
                  "label": "4th gear",
                  "value": "15 km/h"
                },
                {
                  "label": "5th gear",
                  "value": "24 km/h"
                },
                {
                  "label": "6th gear",
                  "value": "40 km/h"
                }
              ]
            },
            {
              "title": "Loader Performance",
              "specs": [
                {
                  "label": "Maximum loader bucket breakout force",
                  "value": "7,380 kgf"
                },
                {
                  "label": "Loader bucket capacity",
                  "value": "1.1 m³"
                },
                {
                  "label": "Maximum loading arm breakout force",
                  "value": "7,380 kgf"
                },
                {
                  "label": "Lifting capacity to maximum height",
                  "value": "3,660 kg"
                }
              ]
            },
            {
              "title": "Backhoe Performance",
              "specs": [
                {
                  "label": "Backhoe bucket capacity",
                  "value": "0.18 m³"
                },
                {
                  "label": "Maximum backhoe bucket breakout force",
                  "value": "7,020 kgf"
                },
                {
                  "label": "Maximum arm breakout force",
                  "value": "3,160 kgf"
                }
              ]
            },
            {
              "title": "Operating Weight",
              "specs": [
                {
                  "label": "Operating weight",
                  "value": "9,650 kg"
                }
              ]
            },
            {
              "title": "Transmission",
              "specs": [
                {
                  "label": "Type",
                  "value": "Autoshift transmission for heavy duty service"
                },
                {
                  "label": "Number of gear",
                  "value": "6 forward, 3 reverse gears"
                }
              ]
            }
          ],
          "gallery": [
            "assets/images/hidromek/hmk-102-s-alpha/photo-1.webp",
            "assets/images/hidromek/hmk-102-s-alpha/photo-2.webp",
            "assets/images/hidromek/hmk-102-s-alpha/photo-3.webp",
            "assets/images/hidromek/hmk-102-s-alpha/view-3.webp",
            "assets/images/hidromek/hmk-102-s-alpha/view-8.webp",
            "assets/images/hidromek/hmk-102-s-alpha/view-13.webp"
          ],
          "source": "https://www.hidromek.com/europe-en/products/backhoe-loaders/hmk-102-s-alpha"
        },
        {
          "id": "hmk-102-s-supra",
          "name": "HMK 102 S SUPRA",
          "tagline": "Backhoe loader",
          "image": "assets/images/hidromek/hmk-102-s-supra/main.webp",
          "photo": true,
          "highlights": [
            {
              "label": "Operating weight",
              "value": "9,650 kg"
            },
            {
              "label": "Max power",
              "value": "100 HP (74.4 kW)"
            },
            {
              "label": "Bucket capacity",
              "value": "1.2 m³"
            }
          ],
          "sections": [
            {
              "title": "",
              "text": [
                "K4 Series, designed for severe geographical conditions and heavy working conditions, increases your productivity with its strong structure and efficient hydraulic system providing maximum breakout force even at lower revolutions and having high oil flow.",
                "HİDROMEK K4 Series backhoe loaders facilitating works in excavation, infrastructure, superstructure, agriculture, forestry, landscaping and industrial areas thanks to their use with different attachments such as leveling shovel, forklift, hammer, auger, log, pendulum bucket, snow plow, scrap and paper collection bucket, bottom opening (big bag) bucket, stone collecting bucket, trapeze bucket, ripper and polyp attachment provide the benefits you expect."
              ]
            },
            {
              "title": "20% Faster",
              "text": [
                "K4 series backhoe loaders with accelerated movements through improved loader cylinder design do a lot of work in a short time during loading and unloading operations."
              ]
            },
            {
              "title": "3% More Efficient",
              "text": [
                "K4 Series backhoe loaders produce more work with less fuel as a result of the improvements made in cylinder design."
              ]
            }
          ],
          "specGroups": [
            {
              "title": "Engine",
              "specs": [
                {
                  "label": "Brand - model",
                  "value": "Perkins, 904J-E36TA"
                },
                {
                  "label": "Maximum power",
                  "value": "100 HP (74.4 kW) @2200 rpm 110 HP (82 kW) @ 2200 rpm"
                },
                {
                  "label": "Displacement",
                  "value": "3,621 cc"
                },
                {
                  "label": "Type",
                  "value": "High power and torque output, water cooled turbocharged diesel engine."
                },
                {
                  "label": "Maximum torque",
                  "value": "430 Nm @1500 rpm 110 HP: 500 Nm @1500 rpm"
                },
                {
                  "label": "Bore & stroke",
                  "value": "ø 98 x 120 mm"
                },
                {
                  "label": "Emission class",
                  "value": "EU:Stage 5, US: Tier 4 final"
                }
              ]
            },
            {
              "title": "Hydraulic System",
              "specs": [
                {
                  "label": "Pressure",
                  "value": "255 bar"
                },
                {
                  "label": "Type",
                  "value": "Closed type hydraulic system with variable displacement piston type pump, renewable flowsharing and valves with regeneration"
                },
                {
                  "label": "Main pump flow",
                  "value": "163 L/min @2200 rpm"
                }
              ]
            },
            {
              "title": "Tires",
              "specs": [
                {
                  "label": "Front",
                  "value": "16.9 - 28 14 Ply Rating"
                },
                {
                  "label": "Rear",
                  "value": "16.9 - 28 14 Ply Rating"
                }
              ]
            },
            {
              "title": "Driving Speed",
              "specs": [
                {
                  "label": "1st gear",
                  "value": "4 km/h"
                },
                {
                  "label": "2nd gear",
                  "value": "7 km/h"
                },
                {
                  "label": "3rd gear",
                  "value": "9 km/h"
                },
                {
                  "label": "4th gear",
                  "value": "15 km/h"
                },
                {
                  "label": "5th gear",
                  "value": "24 km/h"
                },
                {
                  "label": "6th gear",
                  "value": "40 km/h"
                }
              ]
            },
            {
              "title": "Loader Performance",
              "specs": [
                {
                  "label": "Maximum loader bucket breakout force",
                  "value": "7,380 kgf"
                },
                {
                  "label": "Loader bucket capacity",
                  "value": "1.2 m³"
                },
                {
                  "label": "Maximum loading arm breakout force",
                  "value": "7,380 kgf"
                },
                {
                  "label": "Lifting capacity to maximum height",
                  "value": "3,660 kgf"
                }
              ]
            },
            {
              "title": "Backhoe Performance",
              "specs": [
                {
                  "label": "Backhoe bucket capacity",
                  "value": "0.18 m³"
                },
                {
                  "label": "Maximum backhoe bucket breakout force",
                  "value": "7,020 kgf"
                },
                {
                  "label": "Maximum arm breakout force",
                  "value": "3,160 kgf"
                }
              ]
            },
            {
              "title": "Operating Weight",
              "specs": [
                {
                  "label": "Operating weight",
                  "value": "9,650 kg"
                }
              ]
            },
            {
              "title": "Transmission",
              "specs": [
                {
                  "label": "Type",
                  "value": "Autoshift transmission for heavy duty service"
                },
                {
                  "label": "Number of gear",
                  "value": "6 forward, 3 reverse gears with Lock-Up"
                }
              ]
            }
          ],
          "gallery": [
            "assets/images/hidromek/hmk-102-s-supra/photo-1.webp",
            "assets/images/hidromek/hmk-102-s-supra/photo-2.webp",
            "assets/images/hidromek/hmk-102-s-supra/photo-3.webp",
            "assets/images/hidromek/hmk-102-s-supra/photo-4.webp",
            "assets/images/hidromek/hmk-102-s-supra/view-3.webp",
            "assets/images/hidromek/hmk-102-s-supra/view-8.webp",
            "assets/images/hidromek/hmk-102-s-supra/view-13.webp"
          ],
          "source": "https://www.hidromek.com/europe-en/products/backhoe-loaders/hmk-102-s-supra"
        },
        {
          "id": "hmk-62-ss",
          "name": "HMK 62 SS",
          "tagline": "Backhoe loader",
          "image": "assets/images/hidromek/hmk-62-ss/main.webp",
          "photo": true,
          "highlights": [
            {
              "label": "Operating weight",
              "value": "3,875 kg"
            },
            {
              "label": "Max power",
              "value": "65.1 HP (48.6 kW)"
            },
            {
              "label": "Bucket capacity",
              "value": "0.35 m³"
            }
          ],
          "sections": [
            {
              "title": "",
              "text": [
                "HİDROMEK HMK 62 SS provides customer with a compact but reliable and strong machine even in the toughest conditions and with long working hours.",
                "You can execute all works requiring two different machines, a mini excavator and a mini loader, with a single machine. HMK 62 SS offers you eligible investment costs and the possibility of spending less time for more work.",
                "The compact size of the machine, ability to turn 360 degree on its own axis, banana boom of backhoe, standard additional auxiliary hydraulic lines make HMK 62 SS ideal for urban constructions and agricultural applications where the space is often limited"
              ]
            }
          ],
          "specGroups": [
            {
              "title": "Engine",
              "specs": [
                {
                  "label": "Brand - model",
                  "value": "KUBOTA V2403-CR-T-EW03"
                },
                {
                  "label": "Maximum power",
                  "value": "65.1 HP (48.6 kW) @2700 rpm"
                },
                {
                  "label": "Displacement",
                  "value": "2434 cm3"
                },
                {
                  "label": "Type",
                  "value": "High power and torque output, water cooled turbocharged diesel engine."
                },
                {
                  "label": "Maximum torque",
                  "value": "199 Nm @1600 rpm"
                },
                {
                  "label": "Bore & stroke",
                  "value": "87 x 102.4 mm"
                },
                {
                  "label": "Emission class",
                  "value": "Stage V / Tier 4 Final (EU/EPA)"
                }
              ]
            },
            {
              "title": "Hydraulic System",
              "specs": [
                {
                  "label": "Pressure",
                  "value": "250 bar"
                },
                {
                  "label": "Main pump flow",
                  "value": "60 L/min @3000 rpm"
                }
              ]
            },
            {
              "title": "Tires",
              "specs": [
                {
                  "label": "Front",
                  "value": "10 x 16.5 10 Pr Skz"
                },
                {
                  "label": "Rear",
                  "value": "10 x 16.5 10 Pr Skz"
                }
              ]
            },
            {
              "title": "Loader Performance",
              "specs": [
                {
                  "label": "Maximum loader bucket breakout force",
                  "value": "2,883 kgf"
                },
                {
                  "label": "Loader bucket capacity",
                  "value": "0.35 m³"
                },
                {
                  "label": "Maximum loading arm breakout force",
                  "value": "2,600 kgf"
                },
                {
                  "label": "Lifting capacity to maximum height",
                  "value": "885 kg"
                }
              ]
            },
            {
              "title": "Backhoe Performance",
              "specs": [
                {
                  "label": "Backhoe bucket capacity",
                  "value": "0.06 m³"
                },
                {
                  "label": "Maximum backhoe bucket breakout force",
                  "value": "1,985 kgf"
                },
                {
                  "label": "Maximum arm breakout force",
                  "value": "1,500 kgf"
                }
              ]
            },
            {
              "title": "Operating Weight",
              "specs": [
                {
                  "label": "Operating weight",
                  "value": "3,875 kg"
                }
              ]
            }
          ],
          "gallery": [
            "assets/images/hidromek/hmk-62-ss/view-3.webp",
            "assets/images/hidromek/hmk-62-ss/view-8.webp",
            "assets/images/hidromek/hmk-62-ss/view-13.webp"
          ],
          "source": "https://www.hidromek.com/europe-en/products/backhoe-loaders/hmk-62-ss"
        },
        {
          "id": "hmk-62-t",
          "name": "HMK 62 T",
          "tagline": "Backhoe loader",
          "image": "assets/images/hidromek/hmk-62-t/main.webp",
          "photo": true,
          "highlights": [
            {
              "label": "Operating weight",
              "value": "5,280 kg"
            },
            {
              "label": "Max power",
              "value": "65.2 HP (48.6 kW)"
            },
            {
              "label": "Bucket capacity",
              "value": "0.45 m³"
            }
          ],
          "sections": [
            {
              "title": "",
              "text": [
                "Compact. Practical. Ergonomic!",
                "HMK 62 T mini crawler backhoe loader offers unmatched loader and excavator performance in narrow work areas, fields and agricultural areas with its compact dimensions, ability to rotate 360 degrees around its own axis at a single point, comfortable usage and easy working with different attachments.",
                "HMK 62 T always offers more than you need for different works with its high maneuverability and climbing ability, high level of loading, excavation efficiency and comfortable usage. In flat and sloping areas, HMK 62 T increases the productivity in your work with its comfortable and easy usage and excellent traction."
              ]
            }
          ],
          "specGroups": [
            {
              "title": "Engine",
              "specs": [
                {
                  "label": "Brand - model",
                  "value": "KUBOTA-V2403-CR-T-EW03"
                },
                {
                  "label": "Maximum power",
                  "value": "65.2 HP (48.6 kW) @2700 rpm"
                },
                {
                  "label": "Displacement",
                  "value": "2434 cm³"
                },
                {
                  "label": "Type",
                  "value": "Water-cooled, 4-stroke turbocharged diesel engine"
                },
                {
                  "label": "Maximum torque",
                  "value": "198.5 Nm @1600 rpm"
                },
                {
                  "label": "Bore & stroke",
                  "value": "87x102.4 mm"
                },
                {
                  "label": "Emission class",
                  "value": "EU: Stage V / US: Tier 4 final"
                }
              ]
            },
            {
              "title": "Hydraulic System",
              "specs": [
                {
                  "label": "Pressure",
                  "value": "220 bar"
                },
                {
                  "label": "Main pump flow",
                  "value": "60 L/min @2700 rpm"
                }
              ]
            },
            {
              "title": "Loader Performance",
              "specs": [
                {
                  "label": "Maximum loader bucket breakout force",
                  "value": "2,883 kgf"
                },
                {
                  "label": "Loader bucket capacity",
                  "value": "0.45 m³"
                },
                {
                  "label": "Maximum loading arm breakout force",
                  "value": "2,600 kgf"
                },
                {
                  "label": "Lifting capacity to maximum height",
                  "value": "863 kg"
                }
              ]
            },
            {
              "title": "Backhoe Performance",
              "specs": [
                {
                  "label": "Backhoe bucket capacity",
                  "value": "0.06 m³"
                },
                {
                  "label": "Maximum backhoe bucket breakout force",
                  "value": "1,985 kgf"
                },
                {
                  "label": "Maximum arm breakout force",
                  "value": "1,500 kgf"
                }
              ]
            },
            {
              "title": "Operating Weight",
              "specs": [
                {
                  "label": "Operating weight",
                  "value": "5,280 kg"
                }
              ]
            }
          ],
          "gallery": [
            "assets/images/hidromek/hmk-62-t/photo-1.webp",
            "assets/images/hidromek/hmk-62-t/photo-2.webp",
            "assets/images/hidromek/hmk-62-t/view-3.webp",
            "assets/images/hidromek/hmk-62-t/view-8.webp",
            "assets/images/hidromek/hmk-62-t/view-13.webp"
          ],
          "source": "https://www.hidromek.com/europe-en/products/backhoe-loaders/hmk-62-t"
        }
      ]
    },
    {
      id: "crawler-excavators",
      name: "Crawler Excavators",
      series: null,
      summary: "H4 Series crawler excavators from 14 to 52 tonnes, built for productivity, fuel saving and operator comfort.",
      icon: "assets/images/hidromek/hmk-140-lc/main.webp",
      iconStyle: "photo",
      products: [
        {
          "id": "hmk-140-lc",
          "name": "HMK 140 LC",
          "tagline": "Crawler excavator",
          "image": "assets/images/hidromek/hmk-140-lc/main.webp",
          "photo": true,
          "highlights": [
            {
              "label": "Operating weight",
              "value": "15,000 kg"
            },
            {
              "label": "Max power",
              "value": "106.7 HP (78.5 kW)"
            },
            {
              "label": "Bucket capacity",
              "value": "0.6 m³"
            }
          ],
          "sections": [
            {
              "title": "More durable",
              "text": [
                "Produced to have reinforced heavy duty construction considering maximum performance, long life and smooth operation in severe field conditions, HİDROMEK excavators ensure more durability with the improvements made in the new H4 Series. With their reinforced heavy duty construction produced at HİDROMEK's modern production facilities and going through sensitive quality-control processes, H4 Series excavators have excellent durability."
              ]
            },
            {
              "title": "Safe working environment – ROPS&FOPS cabin",
              "text": [
                "Having the standards of ROPS (Roll Over Protective Structure) & FOPS (Falling Object Protective Structure), H4 Series excavators provide maximum safety and durability."
              ]
            },
            {
              "title": "Wide vision capacity",
              "text": [
                "Designed with giving special importance to occupational safety, H4 Series ensure excellent vision by minimizing the blind spot on the side and rear cameras. Along with the increase in the number of led headlights, the night vision is significantly improved on H4 Series excavators; in addition, there are also red handles and warning labels providing maximum safety for the operator."
              ]
            },
            {
              "title": "Audio warning systems",
              "text": [
                "H4 Series excavators enable safer working environment with their automatic starting horn, swing warning system and travel warning system."
              ]
            }
          ],
          "specGroups": [
            {
              "title": "Operating Weight",
              "specs": [
                {
                  "label": "Operating weight",
                  "value": "15,000 kg"
                }
              ]
            },
            {
              "title": "Engine",
              "specs": [
                {
                  "label": "Maximum power",
                  "value": "106.7 HP (78.5 kW) @2000 rpm"
                },
                {
                  "label": "Maximum torque",
                  "value": "375 Nm @1800 rpm"
                },
                {
                  "label": "Brand - model",
                  "value": "ISUZU 4JJ1X"
                },
                {
                  "label": "Type",
                  "value": "Water cooled, 4 cycle, 4 cylinders, line type direct injection, turbocharger, intercooler, electronic diesel engine"
                },
                {
                  "label": "Number of cylinders",
                  "value": "4"
                },
                {
                  "label": "Bore x stroke",
                  "value": "95.4 mm x 104.9 mm"
                },
                {
                  "label": "Displacement",
                  "value": "2,999 cc"
                }
              ]
            },
            {
              "title": "Hydraulic System",
              "specs": [
                {
                  "label": "Pump type",
                  "value": "Double variable displacement axial piston pumps"
                },
                {
                  "label": "Maximum flow",
                  "value": "2 x 129 L/min"
                },
                {
                  "label": "Pilot pump",
                  "value": "20 L/min"
                },
                {
                  "label": "Attachment",
                  "value": "350 kgf/cm²"
                },
                {
                  "label": "Power boost",
                  "value": "372 kgf/cm²"
                },
                {
                  "label": "Travel",
                  "value": "350 kgf/cm²"
                },
                {
                  "label": "Swing",
                  "value": "300 kgf/cm²"
                },
                {
                  "label": "Pilot",
                  "value": "40 kgf/cm²"
                }
              ]
            },
            {
              "title": "Swing System",
              "specs": [
                {
                  "label": "Swing speed",
                  "value": "11.1 rpm"
                }
              ]
            },
            {
              "title": "Travel",
              "specs": [
                {
                  "label": "Maximum drawbar pull",
                  "value": "11,600 kgf"
                },
                {
                  "label": "High speed",
                  "value": "5.60 km/h"
                },
                {
                  "label": "Low speed",
                  "value": "3.30 km/h"
                }
              ]
            },
            {
              "title": "Digging Performance",
              "specs": [
                {
                  "label": "Bucket digging force (ISO)",
                  "value": "10,000 kgf"
                },
                {
                  "label": "Bucket capacity",
                  "value": "0.6 m³"
                },
                {
                  "label": "Arm breakout force (ISO)",
                  "value": "7,300 kgf"
                }
              ]
            },
            {
              "title": "Working Dimensions",
              "specs": [
                {
                  "label": "Boom dimension",
                  "value": "4,600 mm"
                },
                {
                  "label": "Arm dimension",
                  "value": "2,300 mm"
                },
                {
                  "label": "Maximum digging depth",
                  "value": "5,360 mm"
                },
                {
                  "label": "Maximum reach at ground level",
                  "value": "8,070 mm"
                }
              ]
            }
          ],
          "gallery": [
            "assets/images/hidromek/hmk-140-lc/photo-1.webp",
            "assets/images/hidromek/hmk-140-lc/photo-2.webp",
            "assets/images/hidromek/hmk-140-lc/photo-3.webp",
            "assets/images/hidromek/hmk-140-lc/photo-4.webp",
            "assets/images/hidromek/hmk-140-lc/view-3.webp",
            "assets/images/hidromek/hmk-140-lc/view-8.webp",
            "assets/images/hidromek/hmk-140-lc/view-13.webp"
          ],
          "source": "https://www.hidromek.com/europe-en/products/crawler-excavators/hmk-140-lc"
        },
        {
          "id": "hmk-145-lc-sr",
          "name": "HMK 145 LC SR",
          "tagline": "Crawler excavator",
          "image": "assets/images/hidromek/hmk-145-lc-sr/main.webp",
          "photo": true,
          "highlights": [
            {
              "label": "Operating weight",
              "value": "17,050 kg"
            },
            {
              "label": "Max power",
              "value": "106.7 HP (78.5 kW)"
            },
            {
              "label": "Bucket capacity",
              "value": "0.6 m³"
            }
          ],
          "sections": [
            {
              "title": "",
              "text": [
                "Dynamic!",
                "Ensures superior performance in all fields and conditions with its excellent maneuverability and easy usage provided through its high performance engine, quickness and short swing radius.",
                "Innovative!",
                "Provides top level operator safety and comfort with its technological equipment and electronic system.",
                "Compact!",
                "Due to its compact structure, it offers powerful and precise operation for its users especially in urban areas, narrow spaces and in different working fields such as construction, landscaping, material flooring and leveling."
              ]
            },
            {
              "title": "The most comfortable way to work in every field",
              "text": [
                "HMK 145 LCSR provides easy operation in urban areas and narrow spaces due to its shorter tail structure and swing radius compared to standard designed machines. Having high lifting capacity due to its short tail design and counterweight, HMK 145 LCSR also offers versatile usage with many different attachment options."
              ]
            }
          ],
          "specGroups": [
            {
              "title": "Operating Weight",
              "specs": [
                {
                  "label": "Operating weight",
                  "value": "17,050 kg"
                }
              ]
            },
            {
              "title": "Engine",
              "specs": [
                {
                  "label": "Maximum power",
                  "value": "106.7 HP (78.5 kW) @2000 rpm"
                },
                {
                  "label": "Maximum torque",
                  "value": "375 Nm @1800 rpm"
                },
                {
                  "label": "Brand - model",
                  "value": "ISUZU-4JJ1X"
                },
                {
                  "label": "Type",
                  "value": "Water cooled, 4 cycle, 4 cylinders, line type direct injection, turbocharger, electronic diesel engine"
                },
                {
                  "label": "Number of cylinders",
                  "value": "4"
                },
                {
                  "label": "Bore x stroke",
                  "value": "95.4 x 104.9 mm"
                },
                {
                  "label": "Displacement",
                  "value": "2,999 cc"
                },
                {
                  "label": "Emission class",
                  "value": "EU: Stage V"
                }
              ]
            },
            {
              "title": "Hydraulic System",
              "specs": [
                {
                  "label": "Pump type",
                  "value": "Double variable displacement axial piston pumps"
                },
                {
                  "label": "Maximum flow",
                  "value": "2 x 129 L/min"
                },
                {
                  "label": "Pilot pump",
                  "value": "Gear, 20 L/min"
                },
                {
                  "label": "Attachment",
                  "value": "350 kgf/cm²"
                },
                {
                  "label": "Power boost",
                  "value": "372 kgf/cm²"
                },
                {
                  "label": "Travel",
                  "value": "350 kgf/cm²"
                },
                {
                  "label": "Swing",
                  "value": "300 kgf/cm²"
                },
                {
                  "label": "Pilot",
                  "value": "40 kgf/cm²"
                }
              ]
            },
            {
              "title": "Swing System",
              "specs": [
                {
                  "label": "Swing speed",
                  "value": "11.3 rpm"
                }
              ]
            },
            {
              "title": "Travel",
              "specs": [
                {
                  "label": "Maximum drawbar pull",
                  "value": "11,230 kgf"
                },
                {
                  "label": "High speed",
                  "value": "5.7 km/h"
                },
                {
                  "label": "Low speed",
                  "value": "3.4 km/h"
                }
              ]
            },
            {
              "title": "Digging Performance",
              "specs": [
                {
                  "label": "Bucket digging force (ISO)",
                  "value": "10,000 kgf"
                },
                {
                  "label": "Bucket capacity",
                  "value": "0.6 m³"
                },
                {
                  "label": "Arm breakout force (ISO)",
                  "value": "7,300 kgf"
                }
              ]
            },
            {
              "title": "Working Dimensions",
              "specs": [
                {
                  "label": "Boom dimension",
                  "value": "4,600 mm"
                },
                {
                  "label": "Arm dimension",
                  "value": "2,300 mm"
                },
                {
                  "label": "Maximum digging depth",
                  "value": "5,360 mm"
                },
                {
                  "label": "Maximum reach at ground level",
                  "value": "8,040 mm"
                }
              ]
            }
          ],
          "gallery": [
            "assets/images/hidromek/hmk-145-lc-sr/photo-1.webp",
            "assets/images/hidromek/hmk-145-lc-sr/photo-2.webp",
            "assets/images/hidromek/hmk-145-lc-sr/photo-3.webp",
            "assets/images/hidromek/hmk-145-lc-sr/view-3.webp",
            "assets/images/hidromek/hmk-145-lc-sr/view-8.webp",
            "assets/images/hidromek/hmk-145-lc-sr/view-13.webp"
          ],
          "source": "https://www.hidromek.com/europe-en/products/crawler-excavators/hmk-145-lc-sr"
        },
        {
          "id": "hmk-210-lc",
          "name": "HMK 210 LC",
          "tagline": "Crawler excavator",
          "image": "assets/images/hidromek/hmk-210-lc/main.webp",
          "photo": true,
          "highlights": [
            {
              "label": "Operating weight",
              "value": "21,900 kg"
            },
            {
              "label": "Max power",
              "value": "172 HP (128 kW)"
            },
            {
              "label": "Bucket capacity",
              "value": "1.0 m³"
            }
          ],
          "specGroups": [
            {
              "title": "Operating Weight",
              "specs": [
                {
                  "label": "Operating weight",
                  "value": "21,900 kg"
                }
              ]
            },
            {
              "title": "Engine",
              "specs": [
                {
                  "label": "Maximum power",
                  "value": "172 HP (128 kW) @2000 rpm"
                },
                {
                  "label": "Maximum torque",
                  "value": "670 Nm @1600 rpm"
                },
                {
                  "label": "Brand - model",
                  "value": "ISUZU-4HK1X"
                },
                {
                  "label": "Type",
                  "value": "Water-cooled, 4 cycle, 4 cylinders, line type direct injection, turbocharger, intercooler, electronic diesel engine"
                },
                {
                  "label": "Number of cylinders",
                  "value": "4"
                },
                {
                  "label": "Bore x stroke",
                  "value": "115 mm x 125 mm"
                },
                {
                  "label": "Displacement",
                  "value": "5,193 cc"
                },
                {
                  "label": "Emission class",
                  "value": "EU: Stage V"
                }
              ]
            },
            {
              "title": "Hydraulic System",
              "specs": [
                {
                  "label": "Pump type",
                  "value": "Double variable displacement axial piston pumps"
                },
                {
                  "label": "Maximum flow",
                  "value": "2 x 221 L/min"
                },
                {
                  "label": "Pilot pump",
                  "value": "Gear, 20 L/min"
                },
                {
                  "label": "Attachment",
                  "value": "350 kgf/cm2"
                },
                {
                  "label": "Power boost",
                  "value": "370 kgf/cm2"
                },
                {
                  "label": "Travel",
                  "value": "350 kgf/cm2"
                },
                {
                  "label": "Swing",
                  "value": "306 kgf/cm2"
                },
                {
                  "label": "Pilot",
                  "value": "40 kgf/cm2"
                }
              ]
            },
            {
              "title": "Swing System",
              "specs": [
                {
                  "label": "Swing speed",
                  "value": "11.9 rpm"
                }
              ]
            },
            {
              "title": "Travel",
              "specs": [
                {
                  "label": "Maximum drawbar pull",
                  "value": "18,575 kgf"
                },
                {
                  "label": "High speed",
                  "value": "5.7 km/h"
                },
                {
                  "label": "Low speed",
                  "value": "3.8 km/h"
                }
              ]
            },
            {
              "title": "Digging Performance",
              "specs": [
                {
                  "label": "Bucket digging force (ISO)",
                  "value": "13,700 kgf"
                },
                {
                  "label": "Bucket capacity",
                  "value": "1.0 m³"
                },
                {
                  "label": "Arm breakout force (ISO)",
                  "value": "10,700 kgf"
                }
              ]
            },
            {
              "title": "Working Dimensions",
              "specs": [
                {
                  "label": "Boom dimension",
                  "value": "5.70 m"
                },
                {
                  "label": "Arm dimension",
                  "value": "2.92 m"
                },
                {
                  "label": "Maximum digging depth",
                  "value": "6,790 mm"
                },
                {
                  "label": "Maximum reach at ground level",
                  "value": "9,870 mm"
                }
              ]
            }
          ],
          "source": "https://www.hidromek.com/europe-en/products/crawler-excavators/hmk-210-lc"
        },
        {
          "id": "hmk-230-lc",
          "name": "HMK 230 LC",
          "tagline": "Crawler excavator",
          "image": "assets/images/hidromek/hmk-230-lc/main.webp",
          "photo": true,
          "highlights": [
            {
              "label": "Operating weight",
              "value": "23,700 kg"
            },
            {
              "label": "Max power",
              "value": "172 HP (128 kW)"
            },
            {
              "label": "Bucket capacity",
              "value": "1.10 m³"
            }
          ],
          "sections": [
            {
              "title": "More work within less time – 17 % More productive*",
              "text": [
                "Shortening the work cycle time with bigger bucket capacity and speed, H4 Series carry the productivity to the top level with their new technology."
              ]
            },
            {
              "title": "21% More efficient*",
              "text": [
                "With improvements to the attachment and hydraulic group, H4 Series excavators ensure more work within less time."
              ]
            },
            {
              "title": "7% Faster *",
              "text": [
                "With faster hydraulic movements due to developed hydraulic system design, H4 Series excavators ensure more work within less time."
              ]
            },
            {
              "title": "Safe working environment – ROPS&FOPS cabin",
              "text": [
                "Having the standards of ROPS (Roll Over Protective Structure) & FOPS (Falling Object Protective Structure), H4 Series excavators provide maximum safety and durability."
              ]
            },
            {
              "title": "Wide vision capacity",
              "text": [
                "Designed with giving special importance to occupational safety, H4 Series ensure excellent vision by minimizing the blind spot on the side and rear cameras. Along with the increase in the number of led headlights, the night vision is significantly improved on H4 Series excavators; in addition, there are also red handles and warning labels providing maximum safety for the operator."
              ]
            },
            {
              "title": "Audio warning systems",
              "text": [
                "H4 Series excavators enable safer working environment with their automatic starting horn, swing warning system and travel warning system.",
                "*The data are prepared in comparison with the previous serie in HP mode."
              ]
            }
          ],
          "specGroups": [
            {
              "title": "Operating Weight",
              "specs": [
                {
                  "label": "Operating weight",
                  "value": "23,700 kg"
                }
              ]
            },
            {
              "title": "Engine",
              "specs": [
                {
                  "label": "Maximum power",
                  "value": "172 HP (128 kW) @2000 rpm"
                },
                {
                  "label": "Maximum torque",
                  "value": "670 Nm @1600 rpm"
                },
                {
                  "label": "Brand - model",
                  "value": "ISUZU-4HK1X"
                },
                {
                  "label": "Type",
                  "value": "Water-cooled, 4 cycle, 4 cylinders, line type direct injection, turbocharger, intercooler, electronic diesel engine"
                },
                {
                  "label": "Number of cylinders",
                  "value": "4"
                },
                {
                  "label": "Bore x stroke",
                  "value": "115 x 125 mm"
                },
                {
                  "label": "Displacement",
                  "value": "5,193 cc"
                },
                {
                  "label": "Emission class",
                  "value": "EU: Stage V"
                }
              ]
            },
            {
              "title": "Hydraulic System",
              "specs": [
                {
                  "label": "Pump type",
                  "value": "Double variable displacement axial piston pumps"
                },
                {
                  "label": "Maximum flow",
                  "value": "2 x 221 L/min"
                },
                {
                  "label": "Pilot pump",
                  "value": "20 L/min"
                },
                {
                  "label": "Attachment",
                  "value": "350 kgf/cm²"
                },
                {
                  "label": "Power boost",
                  "value": "370 kgf/cm²"
                },
                {
                  "label": "Travel",
                  "value": "350 kgf/cm²"
                },
                {
                  "label": "Swing",
                  "value": "306 kgf/cm²"
                },
                {
                  "label": "Pilot",
                  "value": "40 kgf/cm²"
                }
              ]
            },
            {
              "title": "Swing System",
              "specs": [
                {
                  "label": "Swing speed",
                  "value": "11.9 rpm"
                }
              ]
            },
            {
              "title": "Travel",
              "specs": [
                {
                  "label": "Maximum drawbar pull",
                  "value": "21,877 kgf"
                },
                {
                  "label": "High speed",
                  "value": "5.8 km/h"
                },
                {
                  "label": "Low speed",
                  "value": "3.8 km/h"
                }
              ]
            },
            {
              "title": "Digging Performance",
              "specs": [
                {
                  "label": "Bucket digging force (ISO)",
                  "value": "15,800 kgf"
                },
                {
                  "label": "Bucket capacity",
                  "value": "1.10 m³"
                },
                {
                  "label": "Arm breakout force (ISO)",
                  "value": "10,900 kgf"
                }
              ]
            },
            {
              "title": "Working Dimensions",
              "specs": [
                {
                  "label": "Boom dimension",
                  "value": "5,700 mm"
                },
                {
                  "label": "Arm dimension",
                  "value": "2,920 mm"
                },
                {
                  "label": "Maximum digging depth",
                  "value": "6,730 mm"
                },
                {
                  "label": "Maximum reach at ground level",
                  "value": "9,810 mm"
                }
              ]
            }
          ],
          "gallery": [
            "assets/images/hidromek/hmk-230-lc/photo-1.webp",
            "assets/images/hidromek/hmk-230-lc/photo-2.webp",
            "assets/images/hidromek/hmk-230-lc/photo-3.webp",
            "assets/images/hidromek/hmk-230-lc/view-3.webp",
            "assets/images/hidromek/hmk-230-lc/view-8.webp",
            "assets/images/hidromek/hmk-230-lc/view-13.webp"
          ],
          "source": "https://www.hidromek.com/europe-en/products/crawler-excavators/hmk-230-lc"
        },
        {
          "id": "hmk-235-lcr",
          "name": "HMK 235 LCR",
          "tagline": "Crawler excavator",
          "image": "assets/images/hidromek/hmk-235-lcr/main.webp",
          "photo": true,
          "highlights": [
            {
              "label": "Operating weight",
              "value": "24,950 kg"
            },
            {
              "label": "Max power",
              "value": "172.2 HP (128.4 kW)"
            },
            {
              "label": "Bucket capacity",
              "value": "1.1 m³"
            }
          ],
          "specGroups": [
            {
              "title": "Operating Weight",
              "specs": [
                {
                  "label": "Operating weight",
                  "value": "24,950 kg"
                }
              ]
            },
            {
              "title": "Engine",
              "specs": [
                {
                  "label": "Maximum power",
                  "value": "172.2 HP (128.4 kW) @2000 rpm"
                },
                {
                  "label": "Maximum torque",
                  "value": "670 Nm @1600 rpm"
                },
                {
                  "label": "Brand - model",
                  "value": "ISUZU 4HK1XASW-01"
                },
                {
                  "label": "Type",
                  "value": "Water-cooled, 4 cycle, 4 cylinders, line type direct injection, turbocharger, intercooler, electronic diesel engine"
                },
                {
                  "label": "Number of cylinders",
                  "value": "4"
                },
                {
                  "label": "Bore x stroke",
                  "value": "115 mm x 125 mm"
                },
                {
                  "label": "Displacement",
                  "value": "5,193 cc"
                },
                {
                  "label": "Emission class",
                  "value": "EU: Stage V"
                }
              ]
            },
            {
              "title": "Hydraulic System",
              "specs": [
                {
                  "label": "Pump type",
                  "value": "Double variable displacement axial piston pumps"
                },
                {
                  "label": "Maximum flow",
                  "value": "2 x 233 L/min"
                },
                {
                  "label": "Pilot pump",
                  "value": "Gear, 20 L/min"
                },
                {
                  "label": "Attachment",
                  "value": "350 kgf/cm2"
                },
                {
                  "label": "Power boost",
                  "value": "375 kgf/cm2"
                },
                {
                  "label": "Travel",
                  "value": "350 kgf/cm"
                },
                {
                  "label": "Swing",
                  "value": "306 kgf/cm2"
                },
                {
                  "label": "Pilot",
                  "value": "40 kgf/cm2"
                }
              ]
            },
            {
              "title": "Swing System",
              "specs": [
                {
                  "label": "Swing speed",
                  "value": "11.9 rpm"
                }
              ]
            },
            {
              "title": "Travel",
              "specs": [
                {
                  "label": "Maximum drawbar pull",
                  "value": "21,080 kgf"
                },
                {
                  "label": "High speed",
                  "value": "5.2 km/h"
                },
                {
                  "label": "Low speed",
                  "value": "3.3 km/h"
                }
              ]
            },
            {
              "title": "Digging Performance",
              "specs": [
                {
                  "label": "Bucket digging force (ISO)",
                  "value": "15.000 (16.300) kgf"
                },
                {
                  "label": "Bucket capacity",
                  "value": "1.1 m³"
                },
                {
                  "label": "Arm breakout force (ISO)",
                  "value": "10.400 (11.300 ) kgf"
                }
              ]
            },
            {
              "title": "Working Dimensions",
              "specs": [
                {
                  "label": "Boom dimension",
                  "value": "*5,600 mm"
                },
                {
                  "label": "Arm dimension",
                  "value": "*2,920 mm"
                },
                {
                  "label": "Maximum digging depth",
                  "value": "6,550 mm"
                },
                {
                  "label": "Maximum reach at ground level",
                  "value": "9,760 mm"
                }
              ]
            }
          ],
          "source": "https://www.hidromek.com/europe-en/products/crawler-excavators/hmk-235-lcr"
        },
        {
          "id": "hmk-310-lc",
          "name": "HMK 310 LC",
          "tagline": "Crawler excavator",
          "image": "assets/images/hidromek/hmk-310-lc/main.webp",
          "photo": true,
          "highlights": [
            {
              "label": "Operating weight",
              "value": "32,200 kg"
            },
            {
              "label": "Max power",
              "value": "264 HP (197 kW)"
            },
            {
              "label": "Bucket capacity",
              "value": "1.6 m³"
            }
          ],
          "sections": [
            {
              "title": "More work within less time – 17 % More productive*",
              "text": [
                "Shortening the work cycle time with bigger bucket capacity and speed, H4 Series carry the productivity to the top level with their new technology."
              ]
            },
            {
              "title": "7% More efficient*",
              "text": [
                "With improvements to the attachment and hydraulic group, H4 Series excavators ensure more work within less time."
              ]
            },
            {
              "title": "10% Faster *",
              "text": [
                "With faster hydraulic movements due to developed hydraulic system design, H4 Series excavators ensure more work within less time.",
                "HİDROMEK's modern production facilities and going through sensitive quality-control processes, H4 Series excavators have excellent durability."
              ]
            },
            {
              "title": "Safe working environment – ROPS&FOPS cabin",
              "text": [
                "Having the standards of ROPS (Roll Over Protective Structure) & FOPS (Falling Object Protective Structure), H4 Series excavators provide maximum safety and durability."
              ]
            },
            {
              "title": "Wide vision capacity",
              "text": [
                "Designed with giving special importance to occupational safety, H4 Series ensure excellent vision by minimizing the blind spot on the side and rear cameras. Along with the increase in the number of led headlights, the night vision is significantly improved on H4 Series excavators; in addition, there are also red handles and warning labels providing maximum safety for the operator."
              ]
            },
            {
              "title": "Audio warning systems",
              "text": [
                "H4 Series excavators enable safer working environment with their automatic starting horn, swing warning system and travel warning system.",
                "*The data are prepared in comparison with the previous serie in HP mode."
              ]
            }
          ],
          "specGroups": [
            {
              "title": "Operating Weight",
              "specs": [
                {
                  "label": "Operating weight",
                  "value": "32,200 kg"
                }
              ]
            },
            {
              "title": "Engine",
              "specs": [
                {
                  "label": "Maximum power",
                  "value": "264 HP (197 kW) @1900 rpm"
                },
                {
                  "label": "Maximum torque",
                  "value": "1,050 Nm @1500 rpm"
                },
                {
                  "label": "Brand - model",
                  "value": "ISUZU-6HK1X"
                },
                {
                  "label": "Type",
                  "value": "Water-cooled, 4 cycle, 6 cylinders, line type direct injection, turbocharger, intercooler, electronic diesel engine"
                },
                {
                  "label": "Number of cylinders",
                  "value": "6"
                },
                {
                  "label": "Bore x stroke",
                  "value": "115 x 125 mm"
                },
                {
                  "label": "Displacement",
                  "value": "7,790 cc"
                },
                {
                  "label": "Emission class",
                  "value": "EU: Stage V"
                }
              ]
            },
            {
              "title": "Hydraulic System",
              "specs": [
                {
                  "label": "Pump type",
                  "value": "2 axial piston type pumps with doublevariable displacement and inclined plate"
                },
                {
                  "label": "Maximum flow",
                  "value": "2 x 266 L/m"
                },
                {
                  "label": "Pilot pump",
                  "value": "Gear type, 30.5 L/min"
                },
                {
                  "label": "Attachment",
                  "value": "350 kgf/cm²"
                },
                {
                  "label": "Power boost",
                  "value": "380 kgf/cm²"
                },
                {
                  "label": "Travel",
                  "value": "350 kgf/cm²"
                },
                {
                  "label": "Swing",
                  "value": "285 kgf/cm²"
                },
                {
                  "label": "Pilot",
                  "value": "40 kgf/cm²"
                }
              ]
            },
            {
              "title": "Swing System",
              "specs": [
                {
                  "label": "Swing speed",
                  "value": "10.4 rpm"
                }
              ]
            },
            {
              "title": "Travel",
              "specs": [
                {
                  "label": "Maximum drawbar pull",
                  "value": "25,460 kgf"
                },
                {
                  "label": "High speed",
                  "value": "5.1 km/h"
                },
                {
                  "label": "Low speed",
                  "value": "3.0 km/h"
                }
              ]
            },
            {
              "title": "Digging Performance",
              "specs": [
                {
                  "label": "Bucket digging force (ISO)",
                  "value": "21,300 kgf"
                },
                {
                  "label": "Bucket capacity",
                  "value": "1.6 m³"
                },
                {
                  "label": "Arm breakout force (ISO)",
                  "value": "17,800 kgf"
                }
              ]
            },
            {
              "title": "Working Dimensions",
              "specs": [
                {
                  "label": "Boom dimension",
                  "value": "6,280 mm"
                },
                {
                  "label": "Arm dimension",
                  "value": "2,500 mm"
                },
                {
                  "label": "Maximum digging depth",
                  "value": "6,760 mm"
                },
                {
                  "label": "Maximum reach at ground level",
                  "value": "10,150 mm"
                }
              ]
            }
          ],
          "gallery": [
            "assets/images/hidromek/hmk-310-lc/photo-1.webp",
            "assets/images/hidromek/hmk-310-lc/photo-2.webp",
            "assets/images/hidromek/hmk-310-lc/photo-3.webp",
            "assets/images/hidromek/hmk-310-lc/view-3.webp"
          ],
          "source": "https://www.hidromek.com/europe-en/products/crawler-excavators/hmk-310-lc"
        },
        {
          "id": "hmk-360-lc",
          "name": "HMK 360 LC",
          "tagline": "Crawler excavator",
          "image": "assets/images/hidromek/hmk-360-lc/main.webp",
          "photo": true,
          "highlights": [
            {
              "label": "Operating weight",
              "value": "38,700 kg"
            },
            {
              "label": "Max power",
              "value": "281 HP (210 kW)"
            },
            {
              "label": "Bucket capacity",
              "value": "Light M. 2.1 m³"
            }
          ],
          "sections": [
            {
              "title": "",
              "text": [
                "Takes productivity to the next level!",
                "HMK 360 LC crawler excavator provides high performance with its powerful engine and dynamics structure. Thanks to its boom and arm structure and earthmoving type bucket, it offers advantages especially in earthmoving works, digging and loading operations, and increases work efficiency to a higher level.",
                "HMK 360 LC makes a difference in earthmoving!",
                "HMK 360 LC makes a difference with its high performance in all kinds of works such as eartmoving, area arrangement, construction site preparations etc. through its tonnage, boom-arm length and earthmoving type bucket."
              ]
            }
          ],
          "specGroups": [
            {
              "title": "Operating Weight",
              "specs": [
                {
                  "label": "Operating weight",
                  "value": "38,700 kg"
                }
              ]
            },
            {
              "title": "Engine",
              "specs": [
                {
                  "label": "Maximum power",
                  "value": "281 HP (210 kW) @1900 rpm"
                },
                {
                  "label": "Maximum torque",
                  "value": "1,080 Nm @1500 rpm (Gross)"
                },
                {
                  "label": "Brand - model",
                  "value": "ISUZU-6HK1X"
                },
                {
                  "label": "Type",
                  "value": "Water-cooled, 4 cycle, 6 cylinders, line type direct injection, turbocharger, intercooler, electronic diesel engine"
                },
                {
                  "label": "Number of cylinders",
                  "value": "6"
                },
                {
                  "label": "Bore x stroke",
                  "value": "115 x 125 mm"
                },
                {
                  "label": "Displacement",
                  "value": "7,790 cc"
                },
                {
                  "label": "Emission class",
                  "value": "EU: Stage V"
                }
              ]
            },
            {
              "title": "Hydraulic System",
              "specs": [
                {
                  "label": "Pump type",
                  "value": "Double variable displacement axial piston pumps"
                },
                {
                  "label": "Maximum flow",
                  "value": "2 x 290 L"
                },
                {
                  "label": "Pilot pump",
                  "value": "Gear, 28.5 L/min"
                },
                {
                  "label": "Attachment",
                  "value": "350 kgf/cm²"
                },
                {
                  "label": "Travel",
                  "value": "350 kgf/cm²"
                },
                {
                  "label": "Swing",
                  "value": "285 kgf/cm²"
                },
                {
                  "label": "Pilot",
                  "value": "40 kgf/cm²"
                }
              ]
            },
            {
              "title": "Swing System",
              "specs": [
                {
                  "label": "Swing speed",
                  "value": "9.3 rpm"
                }
              ]
            },
            {
              "title": "Travel",
              "specs": [
                {
                  "label": "Maximum drawbar pull",
                  "value": "30,740 kgf"
                },
                {
                  "label": "High speed",
                  "value": "4.9 km/h"
                },
                {
                  "label": "Low speed",
                  "value": "2.9 km/h"
                }
              ]
            },
            {
              "title": "Digging Performance",
              "specs": [
                {
                  "label": "Bucket digging force (ISO)",
                  "value": "21,100 kgf"
                },
                {
                  "label": "Bucket capacity",
                  "value": "Light M. 2.1 m³"
                },
                {
                  "label": "Arm breakout force (ISO)",
                  "value": "16,400 kgf"
                }
              ]
            },
            {
              "title": "Working Dimensions",
              "specs": [
                {
                  "label": "Boom dimension",
                  "value": "6,500 mm"
                },
                {
                  "label": "Arm dimension",
                  "value": "3,200 mm"
                },
                {
                  "label": "Maximum digging depth",
                  "value": "7,630 mm"
                },
                {
                  "label": "Maximum reach at ground level",
                  "value": "11,180 mm"
                }
              ]
            }
          ],
          "source": "https://www.hidromek.com/europe-en/products/crawler-excavators/hmk-360-lc"
        },
        {
          "id": "hmk-390-lc-hd",
          "name": "HMK 390 LC HD",
          "tagline": "Crawler excavator",
          "image": "assets/images/hidromek/hmk-390-lc-hd/main.webp",
          "photo": true,
          "highlights": [
            {
              "label": "Operating weight",
              "value": "40,400 kg"
            },
            {
              "label": "Max power",
              "value": "281 HP (210 kW)"
            },
            {
              "label": "Bucket capacity",
              "value": "2.2 m³"
            }
          ],
          "sections": [
            {
              "title": "More work within less time – 17 % More productive*",
              "text": [
                "Shortening the work cycle time with bigger bucket capacity and speed, H4 Series carry the productivity to the top level with their new technology."
              ]
            },
            {
              "title": "14% More efficient*",
              "text": [
                "With improvements to the attachment and hydraulic group, H4 Series excavators ensure more work within less time."
              ]
            },
            {
              "title": "6% Faster *",
              "text": [
                "With faster hydraulic movements due to developed hydraulic system design, H4 Series excavators ensure more work within less time."
              ]
            },
            {
              "title": "Safe working environment – ROPS&FOPS cabin",
              "text": [
                "Having the standards of ROPS (Roll Over Protective Structure) & FOPS (Falling Object Protective Structure), H4 Series excavators provide maximum safety and durability."
              ]
            },
            {
              "title": "Wide vision capacity",
              "text": [
                "Designed with giving special importance to occupational safety, H4 Series ensure excellent vision by minimizing the blind spot on the side and rear cameras. Along with the increase in the number of led headlights, the night vision is significantly improved on H4 Series excavators; in addition, there are also red handles and warning labels providing maximum safety for the operator."
              ]
            },
            {
              "title": "Audio warning systems",
              "text": [
                "H4 Series excavators enable safer working environment with their automatic starting horn, swing warning system and travel warning system.",
                "*The data are prepared in comparison with the previous serie in HP mode."
              ]
            }
          ],
          "specGroups": [
            {
              "title": "Operating Weight",
              "specs": [
                {
                  "label": "Operating weight",
                  "value": "40,400 kg"
                }
              ]
            },
            {
              "title": "Engine",
              "specs": [
                {
                  "label": "Maximum power",
                  "value": "281 HP (210 kW) @1900 rpm"
                },
                {
                  "label": "Maximum torque",
                  "value": "1,080 Nm @1500 rpm (Gross)"
                },
                {
                  "label": "Brand - model",
                  "value": "ISUZU-6HK1X"
                },
                {
                  "label": "Type",
                  "value": "Water-cooled, 4 cycle, 6 cylinders, line type direct injection, turbocharger, intercooler, electronic diesel engine"
                },
                {
                  "label": "Number of cylinders",
                  "value": "6"
                },
                {
                  "label": "Bore x stroke",
                  "value": "115 x 125 mm"
                },
                {
                  "label": "Displacement",
                  "value": "7,790 cc"
                },
                {
                  "label": "Emission class",
                  "value": "EU: Stage V"
                }
              ]
            },
            {
              "title": "Hydraulic System",
              "specs": [
                {
                  "label": "Pump type",
                  "value": "Double variable displacement axial piston pumps"
                },
                {
                  "label": "Maximum flow",
                  "value": "2 x 300 L"
                },
                {
                  "label": "Pilot pump",
                  "value": "Gear, 28.5 L/min"
                },
                {
                  "label": "Attachment",
                  "value": "350 kgf/cm²"
                },
                {
                  "label": "Power boost",
                  "value": "380 kgf/cm²"
                },
                {
                  "label": "Travel",
                  "value": "350 kgf/cm²"
                },
                {
                  "label": "Swing",
                  "value": "285 kgf/cm²"
                },
                {
                  "label": "Pilot",
                  "value": "40 kgf/cm²"
                }
              ]
            },
            {
              "title": "Swing System",
              "specs": [
                {
                  "label": "Swing speed",
                  "value": "9.4 rpm"
                }
              ]
            },
            {
              "title": "Travel",
              "specs": [
                {
                  "label": "Maximum drawbar pull",
                  "value": "30,470 kgf"
                },
                {
                  "label": "High speed",
                  "value": "5.0 km/h"
                },
                {
                  "label": "Low speed",
                  "value": "2.9 km/h"
                }
              ]
            },
            {
              "title": "Digging Performance",
              "specs": [
                {
                  "label": "Bucket digging force (ISO)",
                  "value": "25,300 kgf"
                },
                {
                  "label": "Bucket capacity",
                  "value": "2.2 m³"
                },
                {
                  "label": "Arm breakout force (ISO)",
                  "value": "22,100 kgf"
                }
              ]
            },
            {
              "title": "Working Dimensions",
              "specs": [
                {
                  "label": "Boom dimension",
                  "value": "6,100 mm"
                },
                {
                  "label": "Arm dimension",
                  "value": "2,600 mm"
                },
                {
                  "label": "Maximum digging depth",
                  "value": "6,560 mm"
                },
                {
                  "label": "Maximum reach at ground level",
                  "value": "10,150 mm"
                }
              ]
            }
          ],
          "gallery": [
            "assets/images/hidromek/hmk-390-lc-hd/photo-1.webp",
            "assets/images/hidromek/hmk-390-lc-hd/photo-2.webp",
            "assets/images/hidromek/hmk-390-lc-hd/photo-3.webp",
            "assets/images/hidromek/hmk-390-lc-hd/view-3.webp",
            "assets/images/hidromek/hmk-390-lc-hd/view-8.webp",
            "assets/images/hidromek/hmk-390-lc-hd/view-13.webp"
          ],
          "source": "https://www.hidromek.com/europe-en/products/crawler-excavators/hmk-390-lc-hd"
        },
        {
          "id": "hmk-410-lc-uhd",
          "name": "HMK 410 LC UHD",
          "tagline": "Crawler excavator",
          "image": "assets/images/hidromek/hmk-410-lc-uhd/main.webp",
          "photo": true,
          "highlights": [
            {
              "label": "Operating weight",
              "value": "42,200 kg"
            },
            {
              "label": "Max power",
              "value": "281 HP (210kW)"
            },
            {
              "label": "Bucket capacity",
              "value": "2.5 m³"
            }
          ],
          "sections": [
            {
              "title": "More durable",
              "text": [
                "Produced to have reinforced heavy duty construction considering maximum performance, long life and smooth operation in severe field conditions, HİDROMEK excavators ensure more durability with the improvements made in the new H4 Series. With their reinforced heavy duty construction produced at HİDROMEK's modern production facilities and going through sensitive quality-control processes, H4 Series excavators have excellent durability."
              ]
            },
            {
              "title": "Wide vision capacity",
              "text": [
                "Designed with giving special importance to occupational safety, H4 Series ensure excellent vision by minimizing the blind spot on the side and rear cameras. Along with the increase in the number of led headlights, the night vision is significantly improved on H4 Series excavators; in addition, there are also red handles and warning labels providing maximum safety for the operator."
              ]
            },
            {
              "title": "Audio warning systems",
              "text": [
                "H4 Series excavators enable safer working environment with their automatic starting horn, swing warning system and travel warning system."
              ]
            }
          ],
          "specGroups": [
            {
              "title": "Operating Weight",
              "specs": [
                {
                  "label": "Operating weight",
                  "value": "42,200 kg"
                }
              ]
            },
            {
              "title": "Engine",
              "specs": [
                {
                  "label": "Maximum power",
                  "value": "281 HP (210kW)@1900 rpm"
                },
                {
                  "label": "Maximum torque",
                  "value": "1,080 Nm @1500 rpm"
                },
                {
                  "label": "Brand - model",
                  "value": "ISUZU 6HK1X"
                },
                {
                  "label": "Type",
                  "value": "Water-cooled, 4 cycle, 6 cylinders, line type direct injection, turbocharger, intercooler, electronic diesel engine"
                },
                {
                  "label": "Number of cylinders",
                  "value": "6"
                },
                {
                  "label": "Bore x stroke",
                  "value": "115 x 125 mm"
                },
                {
                  "label": "Displacement",
                  "value": "7,790 cc"
                },
                {
                  "label": "Emission class",
                  "value": "EU: Stage V"
                }
              ]
            },
            {
              "title": "Hydraulic System",
              "specs": [
                {
                  "label": "Pump type",
                  "value": "Double variable displacement axial piston pumps"
                },
                {
                  "label": "Maximum flow",
                  "value": "2 x 300 L/min"
                },
                {
                  "label": "Pilot pump",
                  "value": "28 L/min"
                },
                {
                  "label": "Attachment",
                  "value": "350 kgf/cm²"
                },
                {
                  "label": "Power boost",
                  "value": "380 kgf/cm²"
                },
                {
                  "label": "Travel",
                  "value": "350 kgf/cm²"
                },
                {
                  "label": "Swing",
                  "value": "285 kgf/cm²"
                },
                {
                  "label": "Pilot",
                  "value": "40 kgf/cm²"
                }
              ]
            },
            {
              "title": "Swing System",
              "specs": [
                {
                  "label": "Swing speed",
                  "value": "9.2 rpm"
                }
              ]
            },
            {
              "title": "Travel",
              "specs": [
                {
                  "label": "Maximum drawbar pull",
                  "value": "30,260 kgf"
                },
                {
                  "label": "High speed",
                  "value": "5.0 km/h"
                },
                {
                  "label": "Low speed",
                  "value": "3.0 km/h"
                }
              ]
            },
            {
              "title": "Digging Performance",
              "specs": [
                {
                  "label": "Bucket digging force (ISO)",
                  "value": "25,300 kgf"
                },
                {
                  "label": "Bucket capacity",
                  "value": "2.5 m³"
                },
                {
                  "label": "Arm breakout force (ISO)",
                  "value": "22,100 kgf"
                }
              ]
            },
            {
              "title": "Working Dimensions",
              "specs": [
                {
                  "label": "Boom dimension",
                  "value": "6,100 mm"
                },
                {
                  "label": "Arm dimension",
                  "value": "2,600 mm"
                },
                {
                  "label": "Maximum digging depth",
                  "value": "6,530 mm"
                },
                {
                  "label": "Maximum reach at ground level",
                  "value": "10,210 mm"
                }
              ]
            }
          ],
          "gallery": [
            "assets/images/hidromek/hmk-410-lc-uhd/photo-1.webp",
            "assets/images/hidromek/hmk-410-lc-uhd/photo-2.webp",
            "assets/images/hidromek/hmk-410-lc-uhd/photo-3.webp",
            "assets/images/hidromek/hmk-410-lc-uhd/view-3.webp",
            "assets/images/hidromek/hmk-410-lc-uhd/view-8.webp",
            "assets/images/hidromek/hmk-410-lc-uhd/view-13.webp"
          ],
          "source": "https://www.hidromek.com/europe-en/products/crawler-excavators/hmk-410-lc-uhd"
        },
        {
          "id": "hmk-500-lc-hd",
          "name": "HMK 500 LC HD",
          "tagline": "Crawler excavator",
          "image": "assets/images/hidromek/hmk-500-lc-hd/main.webp",
          "photo": true,
          "highlights": [
            {
              "label": "Operating weight",
              "value": "52,000 kg"
            },
            {
              "label": "Max power",
              "value": "362 HP (270 kW)"
            },
            {
              "label": "Bucket capacity",
              "value": "3.2 m³"
            }
          ],
          "sections": [
            {
              "title": "More Sturdier",
              "text": [
                "Owing to the improvements made in arm and boom structure, undercarriage and attachment groups by using more durable materials in H4 Series, HMK 500 LCHD has a more durable structure and offers high performance and long-life usage providing the strength and durability needed in marble quarries, mines and large construction sites."
              ]
            }
          ],
          "specGroups": [
            {
              "title": "Operating Weight",
              "specs": [
                {
                  "label": "Operating weight",
                  "value": "52,000 kg"
                }
              ]
            },
            {
              "title": "Engine",
              "specs": [
                {
                  "label": "Maximum power",
                  "value": "362 HP (270 kW) @2000 rpm"
                },
                {
                  "label": "Maximum torque",
                  "value": "1,650 Nm @1300 rpm (Gross)"
                },
                {
                  "label": "Brand - model",
                  "value": "ISUZU-6UZ1X"
                },
                {
                  "label": "Type",
                  "value": "Water-cooled, 4 cycle, 6 cylinders, line type, direct injection, turbocharger, intercooler, diesel engine"
                },
                {
                  "label": "Number of cylinders",
                  "value": "6"
                },
                {
                  "label": "Bore x stroke",
                  "value": "120 x 145 mm"
                },
                {
                  "label": "Displacement",
                  "value": "9,839 cc"
                },
                {
                  "label": "Emission class",
                  "value": "EU: Stage V"
                }
              ]
            },
            {
              "title": "Hydraulic System",
              "specs": [
                {
                  "label": "Pump type",
                  "value": "Double variable displacement axial piston pumps"
                },
                {
                  "label": "Maximum flow",
                  "value": "2 x 366 L/min"
                },
                {
                  "label": "Pilot pump",
                  "value": "28.5 L/min"
                },
                {
                  "label": "Attachment",
                  "value": "330 kgf/cm²"
                },
                {
                  "label": "Power boost",
                  "value": "355 kgf/cm²"
                },
                {
                  "label": "Travel",
                  "value": "330 kgf/cm²"
                },
                {
                  "label": "Swing",
                  "value": "330 kgf/cm²"
                },
                {
                  "label": "Pilot",
                  "value": "40 kgf/cm²"
                }
              ]
            },
            {
              "title": "Swing System",
              "specs": [
                {
                  "label": "Swing speed",
                  "value": "8.3 rpm"
                }
              ]
            },
            {
              "title": "Travel",
              "specs": [
                {
                  "label": "Maximum drawbar pull",
                  "value": "35,250 kgf"
                },
                {
                  "label": "High speed",
                  "value": "4.70 km/h"
                },
                {
                  "label": "Low speed",
                  "value": "2.85 km/h"
                }
              ]
            },
            {
              "title": "Digging Performance",
              "specs": [
                {
                  "label": "Bucket digging force (ISO)",
                  "value": "28,500 kgf"
                },
                {
                  "label": "Bucket capacity",
                  "value": "3.2 m³"
                },
                {
                  "label": "Arm breakout force (ISO)",
                  "value": "27,600 kgf"
                }
              ]
            },
            {
              "title": "Working Dimensions",
              "specs": [
                {
                  "label": "Boom dimension",
                  "value": "6,300 mm"
                },
                {
                  "label": "Arm dimension",
                  "value": "2,600 mm"
                },
                {
                  "label": "Maximum digging depth",
                  "value": "6,480 mm"
                },
                {
                  "label": "Maximum reach at ground level",
                  "value": "10,490 mm"
                }
              ]
            }
          ],
          "gallery": [
            "assets/images/hidromek/hmk-500-lc-hd/view-3.webp",
            "assets/images/hidromek/hmk-500-lc-hd/view-8.webp",
            "assets/images/hidromek/hmk-500-lc-hd/view-13.webp"
          ],
          "source": "https://www.hidromek.com/europe-en/products/crawler-excavators/hmk-500-lc-hd"
        },
        {
          "id": "hmk-520-lc-hd",
          "name": "HMK 520 LC HD",
          "tagline": "Crawler excavator",
          "image": "assets/images/hidromek/hmk-520-lc-hd/main.webp",
          "photo": true,
          "highlights": [
            {
              "label": "Operating weight",
              "value": "53,800 kg"
            },
            {
              "label": "Max power",
              "value": "362 HP (270 kW)"
            },
            {
              "label": "Bucket capacity",
              "value": "3.20 m³"
            }
          ],
          "sections": [
            {
              "title": "More Sturdier",
              "text": [
                "Owing to the improvements made in arm and boom structure, undercarriage and attachment groups by using more durable materials in H4 Series, HMK 520 LC HD has a more durable structure and offers high performance and long-life usage providing the strength and durability needed in marble quarries, mines and large construction sites."
              ]
            }
          ],
          "specGroups": [
            {
              "title": "Operating Weight",
              "specs": [
                {
                  "label": "Operating weight",
                  "value": "53,800 kg"
                }
              ]
            },
            {
              "title": "Engine",
              "specs": [
                {
                  "label": "Maximum power",
                  "value": "362 HP (270 kW) @1900 rpm"
                },
                {
                  "label": "Maximum torque",
                  "value": "1,650 Nm @1300 rpm (Gross)"
                },
                {
                  "label": "Brand - model",
                  "value": "ISUZU-6UZ1X"
                },
                {
                  "label": "Type",
                  "value": "Water-cooled, 4 cycle, 6 cylinders, line type, direct injection, turbocharger, intercooler, diesel engine"
                },
                {
                  "label": "Number of cylinders",
                  "value": "6"
                },
                {
                  "label": "Bore x stroke",
                  "value": "120 mm x 145 mm"
                },
                {
                  "label": "Displacement",
                  "value": "9,839 cc"
                },
                {
                  "label": "Emission class",
                  "value": "EU: Stage V"
                }
              ]
            },
            {
              "title": "Hydraulic System",
              "specs": [
                {
                  "label": "Pump type",
                  "value": "Double variable displacement axial piston pumps"
                },
                {
                  "label": "Maximum flow",
                  "value": "2 x 376 L/min"
                },
                {
                  "label": "Pilot pump",
                  "value": "29 L/min"
                },
                {
                  "label": "Attachment",
                  "value": "330 kgf/cm2"
                },
                {
                  "label": "Power boost",
                  "value": "355 kgf/cm2"
                },
                {
                  "label": "Travel",
                  "value": "330 kgf/cm2"
                },
                {
                  "label": "Swing",
                  "value": "330 kgf/cm2"
                },
                {
                  "label": "Pilot",
                  "value": "40 kgf/cm2"
                }
              ]
            },
            {
              "title": "Swing System",
              "specs": [
                {
                  "label": "Swing speed",
                  "value": "7.7 rpm"
                }
              ]
            },
            {
              "title": "Travel",
              "specs": [
                {
                  "label": "Maximum drawbar pull",
                  "value": "35,880 kgf"
                },
                {
                  "label": "High speed",
                  "value": "4.60 km/h"
                },
                {
                  "label": "Low speed",
                  "value": "2.80 km/h"
                }
              ]
            },
            {
              "title": "Digging Performance",
              "specs": [
                {
                  "label": "Bucket digging force (ISO)",
                  "value": "28,500 kgf"
                },
                {
                  "label": "Bucket capacity",
                  "value": "3.20 m³"
                },
                {
                  "label": "Arm breakout force (ISO)",
                  "value": "27,600 kgf"
                }
              ]
            },
            {
              "title": "Working Dimensions",
              "specs": [
                {
                  "label": "Boom dimension",
                  "value": "6,300 mm"
                },
                {
                  "label": "Arm dimension",
                  "value": "2,600 mm"
                },
                {
                  "label": "Maximum digging depth",
                  "value": "6,480 mm"
                },
                {
                  "label": "Maximum reach at ground level",
                  "value": "10,490 mm"
                }
              ]
            }
          ],
          "source": "https://www.hidromek.com/europe-en/products/crawler-excavators/hmk-520-lc-hd"
        }
      ]
    },
    {
      id: "wheel-excavators",
      name: "Wheel Excavators",
      series: null,
      summary: "Mobile excavators that move quickly between job sites, ideal for urban and road works.",
      icon: "assets/images/hidromek/hmk-150-wr/main.webp",
      iconStyle: "photo",
      products: [
        {
          "id": "hmk-150-wr",
          "name": "HMK 150 WR",
          "tagline": "Wheel excavator",
          "image": "assets/images/hidromek/hmk-150-wr/main.webp",
          "photo": true,
          "highlights": [
            {
              "label": "Operating weight",
              "value": "16,300 kg"
            },
            {
              "label": "Max power",
              "value": "141 HP (105 kW)"
            },
            {
              "label": "Bucket capacity",
              "value": "0.6 m³"
            }
          ],
          "sections": [
            {
              "title": "Versatile",
              "text": [
                "Providing comfortable working opportunity in many fields thanks to its shorter tail structure compared to standard designed machines and the advantage of the usage with different attachments, HMK 150 WR wheel excavator makes work easier by providing maximum performance, easy usage and operator comfort through its high technology and durable structure."
              ]
            },
            {
              "title": "Operational",
              "text": [
                "With its fast hydraulic movements thanks to the developed hydraulic system design of H4 Series, HMK 150 WR ensures operations in different fields to be completed in a short time with low cost thanks to its work cycle times, short swing radius and working dimentions."
              ]
            },
            {
              "title": "Innovative",
              "text": [
                "HMK 150 WR wheel excavator which has a superior technology and equipment, offers an ergonomic working environment by providing maximum comfort to its users through its advantages of easy and safe usage."
              ]
            }
          ],
          "specGroups": [
            {
              "title": "Engine",
              "specs": [
                {
                  "label": "Brand - model",
                  "value": "DEUTZ TCD 4.1"
                },
                {
                  "label": "Maximum power",
                  "value": "141 HP (105 kW) @2000 rpm"
                },
                {
                  "label": "Type",
                  "value": "Water cooled, 4 cycle"
                },
                {
                  "label": "Maximum torque",
                  "value": "550 Nm @1600 rpm"
                },
                {
                  "label": "Displacement",
                  "value": "4,038 cc"
                },
                {
                  "label": "Number of cylinders",
                  "value": "4"
                },
                {
                  "label": "Bore x stroke",
                  "value": "101 mm x 126 mm"
                },
                {
                  "label": "Emission class",
                  "value": "Stage V / Tier 4 Final (EU/EPA)"
                }
              ]
            },
            {
              "title": "Hydraulic System",
              "specs": [
                {
                  "label": "Type",
                  "value": "Double variable displacement axial piston pumps"
                },
                {
                  "label": "Maximum flow",
                  "value": "2 x 160 L/min"
                },
                {
                  "label": "Pilot pump",
                  "value": "20 L/min"
                },
                {
                  "label": "Attachment",
                  "value": "330 kgf/cm2"
                },
                {
                  "label": "Power boost",
                  "value": "360 kgf/cm²"
                },
                {
                  "label": "Travel",
                  "value": "370 kgf/cm2"
                },
                {
                  "label": "Swing",
                  "value": "260 kgf/cm²"
                },
                {
                  "label": "Pilot",
                  "value": "40 kgf/cm²"
                }
              ]
            },
            {
              "title": "Swing System",
              "specs": [
                {
                  "label": "Swing speed",
                  "value": "13 rpm"
                }
              ]
            },
            {
              "title": "Working Dimensions",
              "specs": [
                {
                  "label": "Boom dimension",
                  "value": "4,600 mm"
                },
                {
                  "label": "Arm dimension",
                  "value": "2,300 mm"
                },
                {
                  "label": "Maximum digging depth",
                  "value": "5,040 mm"
                },
                {
                  "label": "Maximum reach at ground level",
                  "value": "8,000 mm"
                }
              ]
            },
            {
              "title": "Travel",
              "specs": [
                {
                  "label": "Maximum drawbar pull",
                  "value": "10,150 kgf"
                },
                {
                  "label": "High speed",
                  "value": "33 km/h"
                },
                {
                  "label": "Low speed",
                  "value": "8.5 km/h"
                }
              ]
            },
            {
              "title": "Digging Performance",
              "specs": [
                {
                  "label": "Bucket digging force (ISO)",
                  "value": "10,800 kgf"
                },
                {
                  "label": "Arm breakout force (ISO)",
                  "value": "7,800 kgf"
                },
                {
                  "label": "Standard bucket capacity",
                  "value": "0.6 m³"
                }
              ]
            },
            {
              "title": "Operating Weight",
              "specs": [
                {
                  "label": "Operating weight",
                  "value": "16,300 kg"
                }
              ]
            }
          ],
          "gallery": [
            "assets/images/hidromek/hmk-150-wr/photo-1.webp",
            "assets/images/hidromek/hmk-150-wr/photo-2.webp",
            "assets/images/hidromek/hmk-150-wr/photo-3.webp",
            "assets/images/hidromek/hmk-150-wr/view-3.webp",
            "assets/images/hidromek/hmk-150-wr/view-8.webp",
            "assets/images/hidromek/hmk-150-wr/view-13.webp"
          ],
          "source": "https://www.hidromek.com/europe-en/products/wheel-excavators/hmk-150-wr"
        },
        {
          "id": "hmk-210-w",
          "name": "HMK 210 W",
          "tagline": "Wheel excavator",
          "image": "assets/images/hidromek/hmk-210-w/main.webp",
          "photo": true,
          "highlights": [
            {
              "label": "Operating weight",
              "value": "23,050 kg"
            },
            {
              "label": "Max power",
              "value": "172 HP (128 kW)"
            },
            {
              "label": "Bucket capacity",
              "value": "0.9 m³"
            }
          ],
          "sections": [
            {
              "title": "Shaped with Technology",
              "text": [
                "Electronic system of H4 Series excavators designed to protect the engine and hydraulic components to provide fuel saving and superior performance."
              ]
            },
            {
              "title": "Automatic Stop System",
              "text": [
                "In the new series, automatic stop system through configurable idling and stopping times provides fuel saving by stopping the engine after the machine is on idle. Automatic stop system in H4 Series helps to decrease the operational costs to minimum, and contributes to saving the environment."
              ]
            },
            {
              "title": "Safe fuel transfer pump",
              "text": [
                "\"Safe fuel transfer pump\" added to H4 Series stops the pump automatically when the tank is full and this feature gets activated also when the pump does not transfer fuel for 30 seconds, and ensures that the pump stops automatically."
              ]
            },
            {
              "title": "8\" Touch Control Panel",
              "text": [
                "8 inch touch control panel is positioned ergonomically at a point that the operator can easily reach it. Touch control panel having high quality hardware and a large screen easily enables to control the machine features and access to machine information."
              ]
            },
            {
              "title": "Power Boost Technology",
              "text": [
                "In H4 Series, power boost technology gets activated automatically in the conditions when the machine needs extra power, and ensures that the machine has the proper performance for the work."
              ]
            }
          ],
          "specGroups": [
            {
              "title": "Engine",
              "specs": [
                {
                  "label": "Brand - model",
                  "value": "ISUZU-4HK1X"
                },
                {
                  "label": "Maximum power",
                  "value": "172 HP (128 kW)@2000 rpm"
                },
                {
                  "label": "Type",
                  "value": "Water cooled diesel engine, 4 cycles"
                },
                {
                  "label": "Maximum torque",
                  "value": "670 Nm @1600 rpm"
                },
                {
                  "label": "Displacement",
                  "value": "5,193 cc"
                },
                {
                  "label": "Number of cylinders",
                  "value": "4"
                },
                {
                  "label": "Bore x stroke",
                  "value": "115 x 125 mm"
                },
                {
                  "label": "Emission class",
                  "value": "EU: Stage V"
                }
              ]
            },
            {
              "title": "Hydraulic System",
              "specs": [
                {
                  "label": "Type",
                  "value": "2 axial piston type pumps with double variable displacement and inclined plate"
                },
                {
                  "label": "Maximum flow",
                  "value": "2 x 233 L/min"
                },
                {
                  "label": "Pilot pump",
                  "value": "Gear type, 20 L/min"
                },
                {
                  "label": "Attachment",
                  "value": "350 kgf/cm2"
                },
                {
                  "label": "Power boost",
                  "value": "370 kgf/cm2"
                },
                {
                  "label": "Travel",
                  "value": "370 kgf/cm2"
                },
                {
                  "label": "Swing",
                  "value": "306 kgf/cm2"
                },
                {
                  "label": "Pilot",
                  "value": "40 kgf/cm2"
                }
              ]
            },
            {
              "title": "Swing System",
              "specs": [
                {
                  "label": "Swing speed",
                  "value": "11.90 rpm"
                }
              ]
            },
            {
              "title": "Working Dimensions",
              "specs": [
                {
                  "label": "Boom dimension",
                  "value": "5,600 mm"
                },
                {
                  "label": "Arm dimension",
                  "value": "2,400 mm"
                },
                {
                  "label": "Maximum digging depth",
                  "value": "5,760 mm"
                },
                {
                  "label": "Maximum reach at ground level",
                  "value": "9,170 mm"
                }
              ]
            },
            {
              "title": "Travel",
              "specs": [
                {
                  "label": "Maximum drawbar pull",
                  "value": "11,110 kgf"
                },
                {
                  "label": "High speed",
                  "value": "31 km/h"
                },
                {
                  "label": "Low speed",
                  "value": "7.7 km/h"
                }
              ]
            },
            {
              "title": "Digging Performance",
              "specs": [
                {
                  "label": "Bucket digging force (ISO)",
                  "value": "15,900 kgf"
                },
                {
                  "label": "Arm breakout force (ISO)",
                  "value": "12,600 kgf"
                },
                {
                  "label": "Standard bucket capacity",
                  "value": "0.9 m³"
                }
              ]
            },
            {
              "title": "Operating Weight",
              "specs": [
                {
                  "label": "Operating weight",
                  "value": "23,050 kg"
                }
              ]
            }
          ],
          "gallery": [
            "assets/images/hidromek/hmk-210-w/photo-1.webp",
            "assets/images/hidromek/hmk-210-w/photo-2.webp",
            "assets/images/hidromek/hmk-210-w/photo-3.webp",
            "assets/images/hidromek/hmk-210-w/view-3.webp",
            "assets/images/hidromek/hmk-210-w/view-8.webp",
            "assets/images/hidromek/hmk-210-w/view-13.webp"
          ],
          "source": "https://www.hidromek.com/europe-en/products/wheel-excavators/hmk-210-w"
        },
        {
          "id": "hmk-220-w",
          "name": "HMK 220 W",
          "tagline": "Wheel excavator",
          "image": "assets/images/hidromek/hmk-220-w/main.webp",
          "photo": true,
          "highlights": [
            {
              "label": "Operating weight",
              "value": "23,150 kg"
            },
            {
              "label": "Max power",
              "value": "172 HP (128 kW)"
            },
            {
              "label": "Bucket capacity",
              "value": "0.9 m³"
            }
          ],
          "sections": [
            {
              "title": "Shaped with Technology",
              "text": [
                "Electronic system of H4 Series excavators designed to protect the engine and hydraulic components to provide fuel saving and superior performance."
              ]
            },
            {
              "title": "Automatic Stop System",
              "text": [
                "In the new series, automatic stop system through configurable idling and stopping times provides fuel saving by stopping the engine after the machine is on idle. Automatic stop system in H4 Series helps to decrease the operational costs to minimum, and contributes to saving the environment."
              ]
            },
            {
              "title": "Safe fuel transfer pump",
              "text": [
                "\"Safe fuel transfer pump\" added to H4 Series stops the pump automatically when the tank is full and this feature gets activated also when the pump does not transfer fuel for 30 seconds, and ensures that the pump stops automatically."
              ]
            },
            {
              "title": "8\" Touch Control Panel",
              "text": [
                "8 inch touch control panel is positioned ergonomically at a point that the operator can easily reach it. Touch control panel having high quality hardware and a large screen easily enables to control the machine features and access to machine information."
              ]
            },
            {
              "title": "Power Boost Technology",
              "text": [
                "In H4 Series, power boost technology gets activated automatically in the conditions when the machine needs extra power, and ensures that the machine has the proper performance for the work."
              ]
            }
          ],
          "specGroups": [
            {
              "title": "Engine",
              "specs": [
                {
                  "label": "Brand - model",
                  "value": "ISUZU-4HK1X"
                },
                {
                  "label": "Maximum power",
                  "value": "172 HP (128 kW) @2000 rpm"
                },
                {
                  "label": "Type",
                  "value": "Water cooled diesel engine, 4 cycles"
                },
                {
                  "label": "Maximum torque",
                  "value": "670 Nm @1600 rpm"
                },
                {
                  "label": "Displacement",
                  "value": "5,193 cc"
                },
                {
                  "label": "Number of cylinders",
                  "value": "4"
                },
                {
                  "label": "Bore x stroke",
                  "value": "115 mm x 125 mm"
                },
                {
                  "label": "Emission class",
                  "value": "EU: Stage V"
                }
              ]
            },
            {
              "title": "Hydraulic System",
              "specs": [
                {
                  "label": "Type",
                  "value": "2 axial piston type pumps with double variable displacement and inclined plate"
                },
                {
                  "label": "Maximum flow",
                  "value": "2 x 233 L/min"
                },
                {
                  "label": "Pilot pump",
                  "value": "Gear type, 20 L/min"
                },
                {
                  "label": "Attachment",
                  "value": "330 kgf/cm2"
                },
                {
                  "label": "Power boost",
                  "value": "370 kgf/cm2"
                },
                {
                  "label": "Travel",
                  "value": "370 kgf/cm2"
                },
                {
                  "label": "Swing",
                  "value": "305 kgf/cm2"
                },
                {
                  "label": "Pilot",
                  "value": "40 kgf/cm2"
                }
              ]
            },
            {
              "title": "Swing System",
              "specs": [
                {
                  "label": "Swing speed",
                  "value": "11.9 rpm"
                }
              ]
            },
            {
              "title": "Working Dimensions",
              "specs": [
                {
                  "label": "Boom dimension",
                  "value": "5,600 mm"
                },
                {
                  "label": "Arm dimension",
                  "value": "2,400 mm"
                },
                {
                  "label": "Maximum digging depth",
                  "value": "5,760 mm"
                },
                {
                  "label": "Maximum reach at ground level",
                  "value": "9,170 mm"
                }
              ]
            },
            {
              "title": "Travel",
              "specs": [
                {
                  "label": "Maximum drawbar pull",
                  "value": "11,080 kgf"
                },
                {
                  "label": "High speed",
                  "value": "30 km/h"
                },
                {
                  "label": "Low speed",
                  "value": "7.5 km/h"
                }
              ]
            },
            {
              "title": "Digging Performance",
              "specs": [
                {
                  "label": "Bucket digging force (ISO)",
                  "value": "15,900 kgf"
                },
                {
                  "label": "Arm breakout force (ISO)",
                  "value": "12,600 kgf"
                },
                {
                  "label": "Standard bucket capacity",
                  "value": "0.9 m³"
                }
              ]
            },
            {
              "title": "Operating Weight",
              "specs": [
                {
                  "label": "Operating weight",
                  "value": "23,150 kg"
                }
              ]
            }
          ],
          "source": "https://www.hidromek.com/europe-en/products/wheel-excavators/hmk-220-w"
        }
      ]
    },
    {
      id: "special-purpose-excavators",
      name: "Special Purpose Excavators",
      series: null,
      summary: "Long-reach, material-handling, demolition and tunnel versions for specialised jobs.",
      icon: "assets/images/hidromek/hmk-210-w-mh/main.webp",
      iconStyle: "photo",
      products: [
        {
          "id": "hmk-210-w-mh",
          "name": "HMK 210 W MH",
          "tagline": "Special purpose excavator",
          "image": "assets/images/hidromek/hmk-210-w-mh/main.webp",
          "photo": true,
          "highlights": [
            {
              "label": "Operating weight",
              "value": "24,450 kg"
            },
            {
              "label": "Max power",
              "value": "172 HP (128 kW)"
            }
          ],
          "sections": [
            {
              "title": "",
              "text": [
                "H4 Series HMK 210 W MH introduces innovations such as improved performance, ease of control and versatility. It allows the operator to have perfect command ability and reliability and ensures low fuel consumption, easy maintenance and operator comfort. Along with other pieces of equipment, it is the leader in its class."
              ]
            }
          ],
          "specGroups": [
            {
              "title": "Digging Performance",
              "specs": [
                {
                  "label": "Cab raising",
                  "value": "2,400 mm"
                }
              ]
            },
            {
              "title": "Engine",
              "specs": [
                {
                  "label": "Brand - model",
                  "value": "ISUZU 4HK1X"
                },
                {
                  "label": "Type",
                  "value": "Water cooled diesel engine, 4 cycles"
                },
                {
                  "label": "Maximum power",
                  "value": "172 HP (128 kW)@2000 rpm"
                },
                {
                  "label": "Maximum torque",
                  "value": "670 Nm @1600 rpm"
                },
                {
                  "label": "Displacement",
                  "value": "5,193 cc"
                },
                {
                  "label": "Number of cylinders",
                  "value": "4"
                },
                {
                  "label": "Bore x stroke",
                  "value": "115 x 125 mm"
                },
                {
                  "label": "Emission class",
                  "value": "EU: Stage V"
                }
              ]
            },
            {
              "title": "Hydraulic System",
              "specs": [
                {
                  "label": "Type",
                  "value": "2 axial piston type pumps with double variable displacement and inclined plate"
                },
                {
                  "label": "Maximum flow",
                  "value": "2 x 233 L/min"
                },
                {
                  "label": "Pilot pump",
                  "value": "Gear type, 20 L/min"
                },
                {
                  "label": "Attachment",
                  "value": "350 kgf/cm2"
                },
                {
                  "label": "Power boost",
                  "value": "370 kgf/cm²"
                },
                {
                  "label": "Travel",
                  "value": "370 kgf/cm²"
                },
                {
                  "label": "Swing",
                  "value": "306 kgf/cm²"
                },
                {
                  "label": "Pilot",
                  "value": "40 kgf/cm²"
                }
              ]
            },
            {
              "title": "Swing System",
              "specs": [
                {
                  "label": "Swing speed",
                  "value": "11.90 rpm"
                }
              ]
            },
            {
              "title": "Travel",
              "specs": [
                {
                  "label": "Maximum drawbar pull",
                  "value": "11,120 kgf"
                },
                {
                  "label": "High speed",
                  "value": "31 km/h"
                },
                {
                  "label": "Low speed",
                  "value": "7.7 km/h"
                }
              ]
            },
            {
              "title": "Working Dimensions",
              "specs": [
                {
                  "label": "Grapple",
                  "value": "2,350 mm"
                },
                {
                  "label": "Maximum vertical digging depth",
                  "value": "4,270 mm"
                },
                {
                  "label": "Maximum digging reach",
                  "value": "11,020 mm"
                },
                {
                  "label": "Maximum reach at ground level",
                  "value": "10.81 m"
                },
                {
                  "label": "Boom dimension",
                  "value": "6,600 mm"
                },
                {
                  "label": "Arm dimensions",
                  "value": "4,600 mm"
                },
                {
                  "label": "Maximum dumping height",
                  "value": "3,130 mm"
                }
              ]
            },
            {
              "title": "Operating Weight",
              "specs": [
                {
                  "label": "Operating weight",
                  "value": "24,450 kg"
                }
              ]
            }
          ],
          "source": "https://www.hidromek.com/europe-en/products/special-purpose-excavators/hmk-210-w-mh"
        },
        {
          "id": "hmk-230-lc-lr",
          "name": "HMK 230 LC LR",
          "tagline": "Special purpose excavator",
          "image": "assets/images/hidromek/hmk-230-lc-lr/main.webp",
          "photo": true,
          "highlights": [
            {
              "label": "Operating weight",
              "value": "25,650 kg"
            },
            {
              "label": "Max power",
              "value": "172 HP (128 kW)"
            },
            {
              "label": "Bucket capacity",
              "value": "0.50 m³"
            }
          ],
          "sections": [
            {
              "title": "",
              "text": [
                "Producing solutions for different applications, HİDROMEK fully meets customer expectations in this segment with the HMK 230 LC LR model developed specifically for canal cleaning, stream improvement and sand quarries."
              ]
            }
          ],
          "specGroups": [
            {
              "title": "Digging Performance",
              "specs": [
                {
                  "label": "Reach distance",
                  "value": "15,070 mm"
                },
                {
                  "label": "Bucket digging force",
                  "value": "6,600 kgf"
                },
                {
                  "label": "Bucket capacity",
                  "value": "0.50 m³"
                },
                {
                  "label": "Arm crowd force (SAE)",
                  "value": "4,200 kgf"
                }
              ]
            },
            {
              "title": "Engine",
              "specs": [
                {
                  "label": "Brand - model",
                  "value": "ISUZU-4HK1X"
                },
                {
                  "label": "Type",
                  "value": "Water-cooled, 4 cycle, 4 cylinders, line type direct injection, turbocharger, intercooler, electronic diesel engine"
                },
                {
                  "label": "Maximum power",
                  "value": "172 HP (128 kW) @2000 rpm"
                },
                {
                  "label": "Maximum torque",
                  "value": "670 Nm @1600 rpm (Gross)"
                },
                {
                  "label": "Displacement",
                  "value": "5,193 cc"
                },
                {
                  "label": "Number of cylinders",
                  "value": "4"
                },
                {
                  "label": "Bore x stroke",
                  "value": "115 mm x 125 mm"
                },
                {
                  "label": "Emission class",
                  "value": "Stage V-EU"
                }
              ]
            },
            {
              "title": "Hydraulic System",
              "specs": [
                {
                  "label": "Type",
                  "value": "Double variable displacement axial piston pumps"
                },
                {
                  "label": "Maximum flow",
                  "value": "2 x 221 L/min"
                },
                {
                  "label": "Pilot pump",
                  "value": "Gear, 20 L/min"
                },
                {
                  "label": "Attachment",
                  "value": "350 kgf/cm2"
                },
                {
                  "label": "Power boost",
                  "value": "370 kgf/cm2"
                },
                {
                  "label": "Travel",
                  "value": "350 kgf/cm2"
                },
                {
                  "label": "Swing",
                  "value": "306 kgf/cm2"
                },
                {
                  "label": "Pilot",
                  "value": "40 kgf/cm2"
                }
              ]
            },
            {
              "title": "Swing System",
              "specs": [
                {
                  "label": "Swing speed",
                  "value": "11.9 rpm"
                }
              ]
            },
            {
              "title": "Travel",
              "specs": [
                {
                  "label": "Maximum drawbar pull",
                  "value": "18,310 kgf"
                },
                {
                  "label": "High speed",
                  "value": "5.8 km/h"
                },
                {
                  "label": "Low speed",
                  "value": "3.8 km/h"
                }
              ]
            },
            {
              "title": "Working Dimensions",
              "specs": [
                {
                  "label": "Maximum digging depth (2440 mm level)",
                  "value": "10,710 mm"
                },
                {
                  "label": "Minimum swing radius",
                  "value": "4,290 mm"
                },
                {
                  "label": "Minimum unloading height",
                  "value": "2,320 mm"
                },
                {
                  "label": "Maximum vertical digging depth",
                  "value": "10,930 mm"
                },
                {
                  "label": "Maximum reach at ground level",
                  "value": "14,960 mm"
                },
                {
                  "label": "Boom dimension",
                  "value": "8,500 mm"
                },
                {
                  "label": "Arm dimensions",
                  "value": "6,100 mm"
                },
                {
                  "label": "Maximum digging depth",
                  "value": "11,450 mm"
                },
                {
                  "label": "Maximum dumping height",
                  "value": "10,710 mm"
                }
              ]
            },
            {
              "title": "Operating Weight",
              "specs": [
                {
                  "label": "Operating weight",
                  "value": "25,650 kg"
                }
              ]
            }
          ],
          "source": "https://www.hidromek.com/europe-en/products/special-purpose-excavators/hmk-230-lc-lr"
        },
        {
          "id": "hmk-230-lc-mh",
          "name": "HMK 230 LC MH",
          "tagline": "Special purpose excavator",
          "image": "assets/images/hidromek/hmk-230-lc-mh/main.webp",
          "photo": true,
          "highlights": [
            {
              "label": "Operating weight",
              "value": "25,050 kg"
            },
            {
              "label": "Max power",
              "value": "172 HP (128 kW)"
            },
            {
              "label": "Max digging depth",
              "value": "6,160 mm"
            }
          ],
          "sections": [
            {
              "title": "",
              "text": [
                "Producing solutions for different applications, HİDROMEK fully meets customer expectations in this segment with HMK 230 LC MH model developed specifically for material handling, recycling and industrial facilities."
              ]
            }
          ],
          "specGroups": [
            {
              "title": "Digging Performance",
              "specs": [
                {
                  "label": "Reach distance",
                  "value": "11,020 mm"
                },
                {
                  "label": "Cab raising",
                  "value": "2,400 mm"
                }
              ]
            },
            {
              "title": "Engine",
              "specs": [
                {
                  "label": "Brand - model",
                  "value": "ISUZU-4HK1X"
                },
                {
                  "label": "Type",
                  "value": "Water-cooled, 4 cycle, 4 cylinders, line type direct injection, turbocharger, intercooler, electronic diesel engine"
                },
                {
                  "label": "Maximum power",
                  "value": "172 HP (128 kW) @2000 rpm"
                },
                {
                  "label": "Maximum torque",
                  "value": "670 Nm @1600 rpm"
                },
                {
                  "label": "Displacement",
                  "value": "5,193 cc"
                },
                {
                  "label": "Number of cylinders",
                  "value": "4"
                },
                {
                  "label": "Bore x stroke",
                  "value": "15 mm x 125 mm"
                },
                {
                  "label": "Emission class",
                  "value": "EU: Stage V"
                }
              ]
            },
            {
              "title": "Hydraulic System",
              "specs": [
                {
                  "label": "Type",
                  "value": "Double variable displacement axial piston pumps"
                },
                {
                  "label": "Maximum flow",
                  "value": "2 x 221 L/min"
                },
                {
                  "label": "Pilot pump",
                  "value": "20 L/min"
                },
                {
                  "label": "Attachment",
                  "value": "350 kgf/cm2"
                },
                {
                  "label": "Power boost",
                  "value": "370 kgf/cm2"
                },
                {
                  "label": "Travel",
                  "value": "350 kgf/cm2"
                },
                {
                  "label": "Swing",
                  "value": "306 kgf/cm2"
                },
                {
                  "label": "Pilot",
                  "value": "40 kgf/cm2"
                }
              ]
            },
            {
              "title": "Swing System",
              "specs": [
                {
                  "label": "Swing speed",
                  "value": "11.9 rpm"
                }
              ]
            },
            {
              "title": "Travel",
              "specs": [
                {
                  "label": "Maximum drawbar pull",
                  "value": "18,310 kgf"
                },
                {
                  "label": "High speed",
                  "value": "5.8 km/h"
                },
                {
                  "label": "Low speed",
                  "value": "3.8 km/h"
                }
              ]
            },
            {
              "title": "Working Dimensions",
              "specs": [
                {
                  "label": "Grapple",
                  "value": "2,350 mm"
                },
                {
                  "label": "Maximum digging depth (2440 mm level)",
                  "value": "6,160 mm"
                },
                {
                  "label": "Minimum swing radius",
                  "value": "3,910 mm"
                },
                {
                  "label": "Maximum vertical digging depth",
                  "value": "5,210 mm"
                },
                {
                  "label": "Maximum dumping clearance",
                  "value": "6,500 mm"
                },
                {
                  "label": "Minimum dumping clearance",
                  "value": "2,320 mm"
                },
                {
                  "label": "Maximum reach at ground level",
                  "value": "9,780 mm"
                },
                {
                  "label": "Boom dimension",
                  "value": "5,700 mm"
                },
                {
                  "label": "Arm dimensions",
                  "value": "2,920 mm"
                },
                {
                  "label": "Maximum digging depth",
                  "value": "6,340 mm"
                },
                {
                  "label": "Maximum dumping height",
                  "value": "6,500 mm"
                }
              ]
            },
            {
              "title": "Operating Weight",
              "specs": [
                {
                  "label": "Operating weight",
                  "value": "25,050 kg"
                }
              ]
            }
          ],
          "gallery": [
            "assets/images/hidromek/hmk-230-lc-mh/photo-1.webp",
            "assets/images/hidromek/hmk-230-lc-mh/photo-2.webp"
          ],
          "source": "https://www.hidromek.com/europe-en/products/special-purpose-excavators/hmk-230-lc-mh"
        },
        {
          "id": "hmk-230-lc-tx",
          "name": "HMK 230 LC TX",
          "tagline": "Special purpose excavator",
          "image": "assets/images/hidromek/hmk-230-lc-tx/main.webp",
          "photo": true,
          "highlights": [
            {
              "label": "Operating weight",
              "value": "23,350 kg"
            },
            {
              "label": "Max power",
              "value": "172 HP (128 kW)"
            }
          ],
          "sections": [
            {
              "title": "",
              "text": [
                "Producing solutions for different applications, HİDROMEK fully meets customer expectations in this segment with HMK 230 LC TX model specially developed for working in tunnel conditions."
              ]
            }
          ],
          "specGroups": [
            {
              "title": "Digging Performance",
              "specs": [
                {
                  "label": "Reach distance",
                  "value": "7,410 mm"
                },
                {
                  "label": "Arm crowd force (SAE)",
                  "value": "20,700 kgf"
                },
                {
                  "label": "At power max. force (SAE)",
                  "value": "17,700 kgf"
                },
                {
                  "label": "Ripper digging force (SAE)",
                  "value": "16,800 kgf"
                },
                {
                  "label": "Ripper digging force (ISO)",
                  "value": "21,500 kgf"
                }
              ]
            },
            {
              "title": "Engine",
              "specs": [
                {
                  "label": "Brand - model",
                  "value": "ISUZU-4HK1X"
                },
                {
                  "label": "Type",
                  "value": "Water-cooled, 4 cycle"
                },
                {
                  "label": "Maximum power",
                  "value": "172 HP (128 kW) @2000 rpm"
                },
                {
                  "label": "Maximum torque",
                  "value": "670 Nm @1600 rpm"
                },
                {
                  "label": "Displacement",
                  "value": "5,193 cc"
                },
                {
                  "label": "Number of cylinders",
                  "value": "4"
                },
                {
                  "label": "Bore x stroke",
                  "value": "115 x 125 mm"
                },
                {
                  "label": "Emission class",
                  "value": "Stage V-EU"
                }
              ]
            },
            {
              "title": "Hydraulic System",
              "specs": [
                {
                  "label": "Type",
                  "value": "Double variable displacement axial piston pumps"
                },
                {
                  "label": "Maximum flow",
                  "value": "2 x 221 L/min"
                },
                {
                  "label": "Pilot pump",
                  "value": "Gear, 20 L/min"
                },
                {
                  "label": "Attachment",
                  "value": "350 kgf/cm²"
                },
                {
                  "label": "Power boost",
                  "value": "370 kgf/cm²"
                },
                {
                  "label": "Travel",
                  "value": "350 kgf/cm²"
                },
                {
                  "label": "Swing",
                  "value": "306 kgf/cm²"
                },
                {
                  "label": "Pilot",
                  "value": "40 kgf/cm²"
                }
              ]
            },
            {
              "title": "Swing System",
              "specs": [
                {
                  "label": "Swing speed",
                  "value": "11.9 rpm"
                }
              ]
            },
            {
              "title": "Travel",
              "specs": [
                {
                  "label": "Maximum drawbar pull",
                  "value": "18,365 kgf"
                },
                {
                  "label": "High speed",
                  "value": "5.8 km/h"
                },
                {
                  "label": "Low speed",
                  "value": "3.8 km/h"
                }
              ]
            },
            {
              "title": "Working Dimensions",
              "specs": [
                {
                  "label": "Maximum working width",
                  "value": "7,040 mm"
                },
                {
                  "label": "Boom dimension",
                  "value": "2,700 mm"
                },
                {
                  "label": "Arm dimensions",
                  "value": "3,890 mm"
                }
              ]
            },
            {
              "title": "Operating Weight",
              "specs": [
                {
                  "label": "Operating weight",
                  "value": "23,350 kg"
                }
              ]
            }
          ],
          "source": "https://www.hidromek.com/europe-en/products/special-purpose-excavators/hmk-230-lc-tx"
        },
        {
          "id": "hmk-310-lc-lr",
          "name": "HMK 310 LC LR",
          "tagline": "Special purpose excavator",
          "image": "assets/images/hidromek/hmk-310-lc-lr/main.webp",
          "photo": true,
          "highlights": [
            {
              "label": "Operating weight",
              "value": "35,000 kg"
            },
            {
              "label": "Max power",
              "value": "264 HP (197 kW)"
            },
            {
              "label": "Max digging depth",
              "value": "14,140 mm"
            }
          ],
          "sections": [
            {
              "title": "",
              "text": [
                "Producing solutions for different applications, HİDROMEK fully meets customer expectations in this segment with the HMK 310 LC LR model developed specifically for canal cleaning, stream improvement and sand quarries."
              ]
            }
          ],
          "specGroups": [
            {
              "title": "Engine",
              "specs": [
                {
                  "label": "Brand - model",
                  "value": "ISUZU-6HK1X"
                },
                {
                  "label": "Type",
                  "value": "Water-cooled, 4 cycle, 6 cylinders, line type direct injection, turbocharger, intercooler, electronic diesel engine"
                },
                {
                  "label": "Maximum power",
                  "value": "264 HP (197 kW) @1800 rpm"
                },
                {
                  "label": "Maximum torque",
                  "value": "1,050 Nm @1500 rpm"
                },
                {
                  "label": "Displacement",
                  "value": "7,790 cc"
                },
                {
                  "label": "Number of cylinders",
                  "value": "6"
                },
                {
                  "label": "Bore x stroke",
                  "value": "115 mm x 125 mm"
                },
                {
                  "label": "Emission class",
                  "value": "Stage V-EU"
                }
              ]
            },
            {
              "title": "Hydraulic System",
              "specs": [
                {
                  "label": "Type",
                  "value": "2 axial piston type pumps with doublevariable displacement and inclined plate"
                },
                {
                  "label": "Maximum flow",
                  "value": "2 x 266 L/min"
                },
                {
                  "label": "Pilot pump",
                  "value": "Gear type, 30.5 L/min"
                },
                {
                  "label": "Attachment",
                  "value": "350 kgf/cm2"
                },
                {
                  "label": "Power boost",
                  "value": "380 kgf/cm2"
                },
                {
                  "label": "Travel",
                  "value": "350 kgf/cm²"
                },
                {
                  "label": "Swing",
                  "value": "285 kgf/cm²"
                },
                {
                  "label": "Pilot",
                  "value": "40 kgf/cm²"
                }
              ]
            },
            {
              "title": "Swing System",
              "specs": [
                {
                  "label": "Swing speed",
                  "value": "10.4 rpm"
                }
              ]
            },
            {
              "title": "Travel",
              "specs": [
                {
                  "label": "Maximum drawbar pull",
                  "value": "25,460 kgf"
                },
                {
                  "label": "High speed",
                  "value": "5.1 km/h"
                },
                {
                  "label": "Low speed",
                  "value": "3.0 km/h"
                }
              ]
            },
            {
              "title": "Working Dimensions",
              "specs": [
                {
                  "label": "Maximum digging depth (2440 mm level)",
                  "value": "14,140 mm"
                },
                {
                  "label": "Minimum swing radius",
                  "value": "5,930 mm"
                },
                {
                  "label": "Maximum vertical digging depth",
                  "value": "12,570 mm"
                },
                {
                  "label": "Maximum dumping clearance",
                  "value": "12,550 mm"
                },
                {
                  "label": "Minimum dumping clearance",
                  "value": "2,500 mm"
                },
                {
                  "label": "Maximum digging reach",
                  "value": "18,360 mm"
                },
                {
                  "label": "Maximum reach at ground level",
                  "value": "18,240 mm"
                },
                {
                  "label": "Boom dimension",
                  "value": "10,300 mm"
                },
                {
                  "label": "Arm dimensions",
                  "value": "7,800 mm"
                },
                {
                  "label": "Maximum digging depth",
                  "value": "14,250 mm"
                }
              ]
            },
            {
              "title": "Operating Weight",
              "specs": [
                {
                  "label": "Operating weight",
                  "value": "35,000 kg"
                }
              ]
            }
          ],
          "gallery": [
            "assets/images/hidromek/hmk-310-lc-lr/photo-1.webp",
            "assets/images/hidromek/hmk-310-lc-lr/photo-2.webp"
          ],
          "source": "https://www.hidromek.com/europe-en/products/special-purpose-excavators/hmk-310-lc-lr"
        },
        {
          "id": "hmk-390-lc-lr",
          "name": "HMK 390 LC LR",
          "tagline": "Special purpose excavator",
          "image": "assets/images/hidromek/hmk-390-lc-lr/main.webp",
          "photo": true,
          "highlights": [
            {
              "label": "Operating weight",
              "value": "42,100 kg"
            },
            {
              "label": "Max power",
              "value": "281 HP (210 kW)"
            },
            {
              "label": "Bucket capacity",
              "value": "1.0 m³"
            }
          ],
          "sections": [
            {
              "title": "",
              "text": [
                "HİDROMEK, which find solutions for different types of applications, satisfy the expectation of the clients on this segment with its speacial model HMK 390 LC LR designed for ditch cleanings and sand quarries. H4 Series HMK 390 LC LR introduces innovations such as improved performance, ease of control and versatility. It allows the operator to have perfect command ability and reliability and ensures low fuel consumption, easy maintenance and operator comfort. Along with other pieces of equipment, it is the leader in its class."
              ]
            }
          ],
          "specGroups": [
            {
              "title": "Digging Performance",
              "specs": [
                {
                  "label": "Bucket digging force",
                  "value": "10,400 kgf"
                },
                {
                  "label": "Bucket capacity",
                  "value": "1.0 m³"
                }
              ]
            },
            {
              "title": "Engine",
              "specs": [
                {
                  "label": "Brand - model",
                  "value": "ISUZU-6HK1X"
                },
                {
                  "label": "Type",
                  "value": "Water-cooled, 4 cycle"
                },
                {
                  "label": "Maximum power",
                  "value": "281 HP (210 kW) @1900 rpm"
                },
                {
                  "label": "Maximum torque",
                  "value": "1,080 Nm @1500 rpm"
                },
                {
                  "label": "Displacement",
                  "value": "7,790 cc"
                },
                {
                  "label": "Number of cylinders",
                  "value": "6"
                },
                {
                  "label": "Bore x stroke",
                  "value": "ø 115 mm x 125 mm"
                },
                {
                  "label": "Emission class",
                  "value": "Stage V-EU"
                }
              ]
            },
            {
              "title": "Hydraulic System",
              "specs": [
                {
                  "label": "Type",
                  "value": "Double variable displacement axial piston pumps"
                },
                {
                  "label": "Maximum flow",
                  "value": "2 x 300 L/min"
                },
                {
                  "label": "Pilot pump",
                  "value": "Gear, 28.5 L/min"
                },
                {
                  "label": "Attachment",
                  "value": "350 kgf/cm2"
                },
                {
                  "label": "Travel",
                  "value": "350 kgf/cm2"
                },
                {
                  "label": "Swing",
                  "value": "285 kgf/cm2"
                },
                {
                  "label": "Pilot",
                  "value": "40 kgf/cm2"
                }
              ]
            },
            {
              "title": "Swing System",
              "specs": [
                {
                  "label": "Swing speed",
                  "value": "9.4 rpm"
                }
              ]
            },
            {
              "title": "Travel",
              "specs": [
                {
                  "label": "Maximum drawbar pull",
                  "value": "30,470 kgf"
                },
                {
                  "label": "High speed",
                  "value": "5.0 km/h"
                },
                {
                  "label": "Low speed",
                  "value": "2.9 km/h"
                }
              ]
            },
            {
              "title": "Working Dimensions",
              "specs": [
                {
                  "label": "Maximum digging depth (2440 mm level)",
                  "value": "11,770 mm"
                },
                {
                  "label": "Minimum swing radius",
                  "value": "5,510 mm"
                },
                {
                  "label": "Maximum vertical digging depth",
                  "value": "11,280 mm"
                },
                {
                  "label": "Maximum dumping clearance",
                  "value": "12,680 mm"
                },
                {
                  "label": "Minimum dumping clearance",
                  "value": "3,790 mm"
                },
                {
                  "label": "Maximum digging reach",
                  "value": "17,010 mm"
                },
                {
                  "label": "Maximum reach at ground level",
                  "value": "16,870 mm"
                },
                {
                  "label": "Boom dimension",
                  "value": "10,000 mm"
                },
                {
                  "label": "Arm dimensions",
                  "value": "6,000 mm"
                },
                {
                  "label": "Maximum digging depth",
                  "value": "11,870 mm"
                },
                {
                  "label": "Maximum dumping height",
                  "value": "12,680 mm"
                }
              ]
            },
            {
              "title": "Operating Weight",
              "specs": [
                {
                  "label": "Operating weight",
                  "value": "42,100 kg"
                }
              ]
            }
          ],
          "gallery": [
            "assets/images/hidromek/hmk-390-lc-lr/view-3.webp",
            "assets/images/hidromek/hmk-390-lc-lr/view-8.webp",
            "assets/images/hidromek/hmk-390-lc-lr/view-13.webp"
          ],
          "source": "https://www.hidromek.com/europe-en/products/special-purpose-excavators/hmk-390-lc-lr"
        },
        {
          "id": "hmk-500-r",
          "name": "HMK 500 R",
          "tagline": "Special purpose excavator",
          "image": "assets/images/hidromek/hmk-500-r/main.webp",
          "photo": true,
          "highlights": [
            {
              "label": "Operating weight",
              "value": "55,100 kg"
            },
            {
              "label": "Max power",
              "value": "362 HP (270 kW)"
            },
            {
              "label": "Max digging depth",
              "value": "3,280 mm"
            }
          ],
          "sections": [
            {
              "title": "More Sturdier",
              "text": [
                "Owing to the improvements made in arm and boom structure, undercarriage and attachment groups by using more durable materials in H4 Series, HMK 500 R has a more durable structure and offers high performance and long-life usage providing the strength and durability needed in marble quarries, mines and large construction sites."
              ]
            }
          ],
          "specGroups": [
            {
              "title": "Digging Performance",
              "specs": [
                {
                  "label": "Arm crowd force (ISO)",
                  "value": "48.700 (53.200) kgf"
                },
                {
                  "label": "Ripper digging force (ISO)",
                  "value": "48.300 (52.700) kgf"
                }
              ]
            },
            {
              "title": "Engine",
              "specs": [
                {
                  "label": "Brand - model",
                  "value": "ISUZU-6UZ1X"
                },
                {
                  "label": "Type",
                  "value": "Water-cooled, 4 cycle, 6 cylinders, line type, direct injection, turbocharger, intercooler, diesel engine"
                },
                {
                  "label": "Maximum power",
                  "value": "362 HP (270 kW) @2000 rpm"
                },
                {
                  "label": "Maximum torque",
                  "value": "1,650 Nm @1300 rpm"
                },
                {
                  "label": "Displacement",
                  "value": "9,839 cc"
                },
                {
                  "label": "Number of cylinders",
                  "value": "6"
                },
                {
                  "label": "Bore x stroke",
                  "value": "ø 120 mm x 145 mm"
                },
                {
                  "label": "Emission class",
                  "value": "EU: Stage V"
                }
              ]
            },
            {
              "title": "Hydraulic System",
              "specs": [
                {
                  "label": "Type",
                  "value": "Double variable displacement axial piston pumps"
                },
                {
                  "label": "Maximum flow",
                  "value": "2 x 346 L/min"
                },
                {
                  "label": "Pilot pump",
                  "value": "Gear Type, 28.5 L/min"
                },
                {
                  "label": "Attachment",
                  "value": "330 kgf/cm2"
                },
                {
                  "label": "Power boost",
                  "value": "355 kgf/cm2"
                },
                {
                  "label": "Travel",
                  "value": "330 kgf/cm2"
                },
                {
                  "label": "Swing",
                  "value": "300 kgf/cm2"
                },
                {
                  "label": "Pilot",
                  "value": "40 kgf/cm2"
                }
              ]
            },
            {
              "title": "Swing System",
              "specs": [
                {
                  "label": "Swing speed",
                  "value": "8.3 rpm"
                }
              ]
            },
            {
              "title": "Travel",
              "specs": [
                {
                  "label": "Maximum drawbar pull",
                  "value": "35,250 kgf"
                },
                {
                  "label": "High speed",
                  "value": "4.70 km/h"
                },
                {
                  "label": "Low speed",
                  "value": "2.85 km/h"
                }
              ]
            },
            {
              "title": "Working Dimensions",
              "specs": [
                {
                  "label": "Minimum swing radius",
                  "value": "3,640 mm"
                },
                {
                  "label": "Maximum digging reach",
                  "value": "7,940 mm"
                },
                {
                  "label": "Maximum reach at ground level",
                  "value": "7,560 mm"
                },
                {
                  "label": "Boom dimension",
                  "value": "5,100 mm"
                },
                {
                  "label": "Arm dimensions",
                  "value": "1,800 mm"
                },
                {
                  "label": "Maximum digging depth",
                  "value": "3,280 mm"
                }
              ]
            },
            {
              "title": "Operating Weight",
              "specs": [
                {
                  "label": "Operating weight",
                  "value": "55,100 kg"
                }
              ]
            }
          ],
          "source": "https://www.hidromek.com/europe-en/products/special-purpose-excavators/hmk-500-r"
        },
        {
          "id": "hmk-520-lc-lr",
          "name": "HMK 520 LC LR",
          "tagline": "Special purpose excavator",
          "image": "assets/images/hidromek/hmk-520-lc-lr/main.webp",
          "photo": true,
          "highlights": [
            {
              "label": "Operating weight",
              "value": "54,900 kg"
            },
            {
              "label": "Max power",
              "value": "362 HP (270 kW)"
            },
            {
              "label": "Bucket capacity",
              "value": "1.00 m³"
            }
          ],
          "sections": [
            {
              "title": "",
              "text": [
                "Producing solutions for different applications, HİDROMEK fully meets customer expectations in this segment with the HMK 520 LC LR model developed specifically for canal cleaning, stream improvement and sand quarries."
              ]
            }
          ],
          "specGroups": [
            {
              "title": "Digging Performance",
              "specs": [
                {
                  "label": "Bucket digging force",
                  "value": "10,300 kgf"
                },
                {
                  "label": "Bucket capacity",
                  "value": "1.00 m³"
                },
                {
                  "label": "Arm crowd force (SAE)",
                  "value": "7,700 kgf"
                }
              ]
            },
            {
              "title": "Engine",
              "specs": [
                {
                  "label": "Brand - model",
                  "value": "ISUZU-6UZ1X"
                },
                {
                  "label": "Type",
                  "value": "Water-cooled, 4 cycle"
                },
                {
                  "label": "Maximum power",
                  "value": "362 HP (270 kW) @1900 rpm"
                },
                {
                  "label": "Maximum torque",
                  "value": "1,650 Nm @1300 rpm"
                },
                {
                  "label": "Displacement",
                  "value": "9,839 cc"
                },
                {
                  "label": "Number of cylinders",
                  "value": "6"
                },
                {
                  "label": "Bore x stroke",
                  "value": "ø 120 mm x 145 mm"
                },
                {
                  "label": "Emission class",
                  "value": "EU: Stage V"
                }
              ]
            },
            {
              "title": "Hydraulic System",
              "specs": [
                {
                  "label": "Type",
                  "value": "Double variable displacement axial piston pumps"
                },
                {
                  "label": "Maximum flow",
                  "value": "2 x 376 L/min"
                },
                {
                  "label": "Pilot pump",
                  "value": "29 L/min"
                },
                {
                  "label": "Attachment",
                  "value": "330 kgf/cm2"
                },
                {
                  "label": "Power boost",
                  "value": "355 kgf/cm2"
                },
                {
                  "label": "Travel",
                  "value": "330 kgf/cm2"
                },
                {
                  "label": "Swing",
                  "value": "330 kgf/cm2"
                },
                {
                  "label": "Pilot",
                  "value": "40 kgf/cm2"
                }
              ]
            },
            {
              "title": "Swing System",
              "specs": [
                {
                  "label": "Swing speed",
                  "value": "7.7 rpm"
                }
              ]
            },
            {
              "title": "Travel",
              "specs": [
                {
                  "label": "Maximum drawbar pull",
                  "value": "35,880 kgf"
                },
                {
                  "label": "High speed",
                  "value": "4.60 km/h"
                },
                {
                  "label": "Low speed",
                  "value": "2.80 km/h"
                }
              ]
            },
            {
              "title": "Working Dimensions",
              "specs": [
                {
                  "label": "Maximum digging depth (2440 mm level)",
                  "value": "14,140 mm"
                },
                {
                  "label": "Minimum swing radius",
                  "value": "6,240 mm"
                },
                {
                  "label": "Maximum vertical digging depth",
                  "value": "13,570 mm"
                },
                {
                  "label": "Maximum dumping clearance",
                  "value": "14,760 mm"
                },
                {
                  "label": "Minimum dumping clearance",
                  "value": "3,400 mm"
                },
                {
                  "label": "Maximum digging reach",
                  "value": "20,030 mm"
                },
                {
                  "label": "Maximum reach at ground level",
                  "value": "19,870 mm"
                },
                {
                  "label": "Boom dimension",
                  "value": "11,400 mm"
                },
                {
                  "label": "Arm dimensions",
                  "value": "8,200 mm"
                },
                {
                  "label": "Maximum digging depth",
                  "value": "14,210 mm"
                }
              ]
            },
            {
              "title": "Operating Weight",
              "specs": [
                {
                  "label": "Operating weight",
                  "value": "54,900 kg"
                }
              ]
            }
          ],
          "gallery": [
            "assets/images/hidromek/hmk-520-lc-lr/view-3.webp",
            "assets/images/hidromek/hmk-520-lc-lr/view-8.webp",
            "assets/images/hidromek/hmk-520-lc-lr/view-13.webp"
          ],
          "source": "https://www.hidromek.com/europe-en/products/special-purpose-excavators/hmk-520-lc-lr"
        }
      ]
    },
    {
      id: "wheel-loaders",
      name: "Wheel Loaders",
      series: null,
      summary: "Wheel loaders for loading, stockpiling and material handling in quarries and construction.",
      icon: "assets/images/hidromek/hmk-630-wl/main.webp",
      iconStyle: "photo",
      products: [
        {
          "id": "hmk-630-wl",
          "name": "HMK 630 WL",
          "tagline": "Wheel loader",
          "image": "assets/images/hidromek/hmk-630-wl/main.webp",
          "photo": true,
          "highlights": [
            {
              "label": "Operating weight",
              "value": "19,800 kg"
            },
            {
              "label": "Max power",
              "value": "252 HP (188 kW)"
            },
            {
              "label": "Bucket capacity",
              "value": "3.2 m³"
            }
          ],
          "sections": [
            {
              "title": "",
              "text": [
                "HMK 630 WL fully meets the expectations of its users with the features such as high performance, versatility, operator comfort and safety. HMK 630 WL wheel loader is commonly used by quarry enterprises and concrete plants, for industrial applications and public services and in many fields with different attachments providing productive and efficient work possibilities. Heavy duty type loader HMK 630 WL offers high breakout power and excellent control capability in severe working areas."
              ]
            }
          ],
          "specGroups": [
            {
              "title": "Engine",
              "specs": [
                {
                  "label": "Brand - model",
                  "value": "Mercedes-Benz OM936"
                },
                {
                  "label": "Type",
                  "value": "High power and torque output, water cooled, turbocharged diesel engine."
                },
                {
                  "label": "Maximum power",
                  "value": "252 HP (188 kW) @(1500-2000) rpm"
                },
                {
                  "label": "Maximum torque",
                  "value": "1,200 Nm @ (1200 - 1500) rpm"
                },
                {
                  "label": "Displacement",
                  "value": "7,700 cc"
                },
                {
                  "label": "Number of cylinders",
                  "value": "6 in line"
                },
                {
                  "label": "Bore x stroke",
                  "value": "110 x 135 mm"
                },
                {
                  "label": "Emission class",
                  "value": "EU: Stage V"
                }
              ]
            },
            {
              "title": "Transmission",
              "specs": [
                {
                  "label": "Number of gear",
                  "value": "5 forward, 3 reverse gears"
                }
              ]
            },
            {
              "title": "Driving Speed",
              "specs": [
                {
                  "label": "1st gear",
                  "value": "5 km/h"
                },
                {
                  "label": "2nd gear",
                  "value": "10 km/h"
                },
                {
                  "label": "3rd gear",
                  "value": "16 km/h"
                },
                {
                  "label": "4th gear",
                  "value": "25 km/h"
                },
                {
                  "label": "5th gear",
                  "value": "40 km/h"
                }
              ]
            },
            {
              "title": "Loader Performance",
              "specs": [
                {
                  "label": "Bucket capacity",
                  "value": "3.2 m³"
                },
                {
                  "label": "Maximum breakout force",
                  "value": "16,200 kg"
                },
                {
                  "label": "Static tipping load",
                  "value": "14,700 kg"
                }
              ]
            },
            {
              "title": "Operating Weight",
              "specs": [
                {
                  "label": "Operating weight",
                  "value": "19,800 kg"
                }
              ]
            },
            {
              "title": "Hydraulic System",
              "specs": [
                {
                  "label": "Type",
                  "value": "Closed center type hydraulic system with LS type variable displacement piston type pumps"
                },
                {
                  "label": "Pump flow",
                  "value": "283 L/min"
                },
                {
                  "label": "Pressure",
                  "value": "270 bar"
                }
              ]
            }
          ],
          "source": "https://www.hidromek.com/europe-en/products/wheel-loaders/hmk-630-wl"
        },
        {
          "id": "hmk-635-wl",
          "name": "HMK 635 WL",
          "tagline": "Wheel loader",
          "image": "assets/images/hidromek/hmk-635-wl/main.webp",
          "photo": true,
          "highlights": [
            {
              "label": "Operating weight",
              "value": "20,600 kg"
            },
            {
              "label": "Max power",
              "value": "282 HP (210 kW)"
            },
            {
              "label": "Bucket capacity",
              "value": "3.5 m³"
            }
          ],
          "sections": [
            {
              "title": "",
              "text": [
                "HMK 635 WL fully meets the expectations of its users with the features such as high performance, versatility, operator comfort and safety. HMK 635 WL wheel loader is commonly used by quarry enterprises and concrete plants, for industrial applications and public services and in many fields with different attachments providing productive and efficient work possibilities. Heavy duty type loader HMK 635 WL offers high breakout power and excellent control capability in severe working areas."
              ]
            }
          ],
          "specGroups": [
            {
              "title": "Engine",
              "specs": [
                {
                  "label": "Brand - model",
                  "value": "Mercedes-Benz MTU6R1000"
                },
                {
                  "label": "Type",
                  "value": "High power and torque output, water cooled, turbocharged diesel engine."
                },
                {
                  "label": "Maximum power",
                  "value": "282 HP (210 kW) @1800 rpm"
                },
                {
                  "label": "Maximum torque",
                  "value": "1,200 Nm @ (1200 - 1600 rpm)"
                },
                {
                  "label": "Displacement",
                  "value": "7,700 cc"
                },
                {
                  "label": "Number of cylinders",
                  "value": "6 in line"
                },
                {
                  "label": "Bore x stroke",
                  "value": "110 x 135 mm"
                },
                {
                  "label": "Emission class",
                  "value": "Stage V"
                }
              ]
            },
            {
              "title": "Transmission",
              "specs": [
                {
                  "label": "Number of gear",
                  "value": "5 forward, 3 reverse gears"
                }
              ]
            },
            {
              "title": "Driving Speed",
              "specs": [
                {
                  "label": "1st gear",
                  "value": "5 km/h"
                },
                {
                  "label": "2nd gear",
                  "value": "10 km/h"
                },
                {
                  "label": "3rd gear",
                  "value": "16 km/h"
                },
                {
                  "label": "4th gear",
                  "value": "25 km/h"
                },
                {
                  "label": "5th gear",
                  "value": "40 km/h"
                }
              ]
            },
            {
              "title": "Loader Performance",
              "specs": [
                {
                  "label": "Bucket capacity",
                  "value": "3.5 m³"
                },
                {
                  "label": "Maximum breakout force",
                  "value": "17,650 kgf"
                },
                {
                  "label": "Static tipping load",
                  "value": "15,900 kgf"
                }
              ]
            },
            {
              "title": "Operating Weight",
              "specs": [
                {
                  "label": "Operating weight",
                  "value": "20,600 kg"
                }
              ]
            },
            {
              "title": "Hydraulic System",
              "specs": [
                {
                  "label": "Type",
                  "value": "Closed center type hydraulic system with LS type variable displacement piston type pumps."
                },
                {
                  "label": "Pump flow",
                  "value": "283 L/min @2100 rpm"
                },
                {
                  "label": "Pressure",
                  "value": "300 bar"
                }
              ]
            }
          ],
          "gallery": [
            "assets/images/hidromek/hmk-635-wl/photo-1.webp",
            "assets/images/hidromek/hmk-635-wl/photo-2.webp",
            "assets/images/hidromek/hmk-635-wl/photo-3.webp",
            "assets/images/hidromek/hmk-635-wl/view-3.webp",
            "assets/images/hidromek/hmk-635-wl/view-8.webp",
            "assets/images/hidromek/hmk-635-wl/view-13.webp"
          ],
          "source": "https://www.hidromek.com/europe-en/products/wheel-loaders/hmk-635-wl"
        },
        {
          "id": "hmk-640-wl",
          "name": "HMK 640 WL",
          "tagline": "Wheel loader",
          "image": "assets/images/hidromek/hmk-640-wl/main.webp",
          "photo": true,
          "highlights": [
            {
              "label": "Operating weight",
              "value": "26,300 kg"
            },
            {
              "label": "Max power",
              "value": "321 HP (240 kW)"
            },
            {
              "label": "Bucket capacity",
              "value": "4.2 m³"
            }
          ],
          "sections": [
            {
              "title": "",
              "text": [
                "HMK 640 WL, which has 26.3 tons operating weight and 4.2 m³ bucket capacity, with its Mercedes engine having 324 HP and 1600 Nm torque provides its user with high loading capacity at low fuel consumption in a short cycle time. HMK 640 WL heavy-duty loader provides high breakout force and excellent control capability. It offers durability and efficiency for many years with its axles and components specifically used for demanding working conditions. With its ergonomic operator cabin with ROPS / FOPS certificates, comfort and high security are prioritize. Furthermore; it provides easy serviceability with its 35 degree tilting feature. HMK 640 WL wheel loader, offers high productivity and efficiency in areas such as quarry operation, gravel, mining and concrete batching plants. HMK 640 WL wheel loader, which has won international design awards such as Reddot Award, German Design Award, Good Design and Automotive Brand Contest, is frequently used in mining and quarry operations, concrete plants and industrial applications."
              ]
            }
          ],
          "specGroups": [
            {
              "title": "Engine",
              "specs": [
                {
                  "label": "Brand - model",
                  "value": "Mercedes-Benz 6R1100"
                },
                {
                  "label": "Type",
                  "value": "High power and torque output, water cooled, turbocharged diesel engine."
                },
                {
                  "label": "Maximum power",
                  "value": "321 HP (240 kW) @1600 rpm"
                },
                {
                  "label": "Maximum torque",
                  "value": "1,700 Nm @ 1300 rpm"
                },
                {
                  "label": "Displacement",
                  "value": "10,700 cc"
                },
                {
                  "label": "Number of cylinders",
                  "value": "6 in line"
                },
                {
                  "label": "Bore x stroke",
                  "value": "125 x 145 mm"
                },
                {
                  "label": "Emission class",
                  "value": "Stage V (EU/EPA)"
                }
              ]
            },
            {
              "title": "Transmission",
              "specs": [
                {
                  "label": "Number of gear",
                  "value": "5 forward, 3 reverse gears"
                }
              ]
            },
            {
              "title": "Driving Speed",
              "specs": [
                {
                  "label": "1st gear",
                  "value": "6 km/h"
                },
                {
                  "label": "2nd gear",
                  "value": "11 km/h"
                },
                {
                  "label": "3rd gear",
                  "value": "18 km/h"
                },
                {
                  "label": "4th gear",
                  "value": "25 km/h"
                },
                {
                  "label": "5th gear",
                  "value": "37 km/h"
                }
              ]
            },
            {
              "title": "Loader Performance",
              "specs": [
                {
                  "label": "Bucket capacity",
                  "value": "4.2 m³"
                },
                {
                  "label": "Maximum breakout force",
                  "value": "19,975 kgf"
                },
                {
                  "label": "Static tipping load",
                  "value": "19,269 kgf"
                }
              ]
            },
            {
              "title": "Operating Weight",
              "specs": [
                {
                  "label": "Operating weight",
                  "value": "26,300 kg"
                }
              ]
            },
            {
              "title": "Hydraulic System",
              "specs": [
                {
                  "label": "Type",
                  "value": "Closed center type hydraulic system with LS type variable displacement piston type pumps."
                },
                {
                  "label": "Pump flow",
                  "value": "203 L/min @1930 rpm"
                },
                {
                  "label": "Pressure",
                  "value": "250 bar"
                }
              ]
            }
          ],
          "gallery": [
            "assets/images/hidromek/hmk-640-wl/photo-1.webp",
            "assets/images/hidromek/hmk-640-wl/photo-2.webp",
            "assets/images/hidromek/hmk-640-wl/photo-3.webp",
            "assets/images/hidromek/hmk-640-wl/photo-4.webp",
            "assets/images/hidromek/hmk-640-wl/view-3.webp",
            "assets/images/hidromek/hmk-640-wl/view-8.webp",
            "assets/images/hidromek/hmk-640-wl/view-13.webp"
          ],
          "source": "https://www.hidromek.com/europe-en/products/wheel-loaders/hmk-640-wl"
        }
      ]
    },
    {
      id: "motor-graders",
      name: "Motor Graders",
      series: null,
      summary: "Motor graders for road building, levelling and maintenance.",
      icon: "assets/images/hidromek/hmk-230-mg/main.webp",
      iconStyle: "photo",
      products: [
        {
          "id": "hmk-230-mg",
          "name": "HMK 230 MG",
          "tagline": "Motor grader",
          "image": "assets/images/hidromek/hmk-230-mg/main.webp",
          "photo": true,
          "highlights": [
            {
              "label": "Operating weight",
              "value": "12,250 kg"
            },
            {
              "label": "Max power",
              "value": "124 HP (92.6 kW)"
            }
          ],
          "sections": [
            {
              "title": "",
              "text": [
                "HMK 230 MG has 129 horsepower and 3.1 m length blade. It is extremely compact and able to work in narrow places. Especially, in snow removal operations in the city traffic and in the arrangement of forest village roads, the machine works very successfully."
              ]
            }
          ],
          "specGroups": [
            {
              "title": "Engine",
              "specs": [
                {
                  "label": "Brand - model",
                  "value": "PERKINS 1204J-E44TA"
                },
                {
                  "label": "Maximum power",
                  "value": "124 HP (92.6 kW) @2200 rpm"
                },
                {
                  "label": "Maximum torque",
                  "value": "530 Nm @1400 rpm"
                },
                {
                  "label": "Displacement",
                  "value": "4,400 cc"
                },
                {
                  "label": "Number of cylinders",
                  "value": "4"
                },
                {
                  "label": "Emission class",
                  "value": "EU: Stage V"
                }
              ]
            },
            {
              "title": "Performance",
              "specs": [
                {
                  "label": "1st gear (forward)",
                  "value": "3.60 km/h"
                },
                {
                  "label": "2nd gear (forward)",
                  "value": "6.10 km/h"
                },
                {
                  "label": "3rd gear (forward)",
                  "value": "10 km/h"
                },
                {
                  "label": "4th gear (forward)",
                  "value": "14.80 km/h"
                },
                {
                  "label": "5th gear (forward)",
                  "value": "25.50 km/h"
                },
                {
                  "label": "6th gear (forward)",
                  "value": "45 km/h"
                }
              ]
            },
            {
              "title": "Transmission",
              "specs": [
                {
                  "label": "Type",
                  "value": "Direct Drive Powershift (planet gear, Hydraulic-Powered)"
                }
              ]
            },
            {
              "title": "Wheels",
              "specs": [
                {
                  "label": "Wheels",
                  "value": "11.00-20 16PR"
                }
              ]
            },
            {
              "title": "Hydraulic System",
              "specs": [
                {
                  "label": "Type",
                  "value": "Closed center system with load sensing capability"
                },
                {
                  "label": "Hydraulic pump",
                  "value": "Variable displacement piston pump"
                },
                {
                  "label": "Flow rate",
                  "value": "138.6 L/min"
                },
                {
                  "label": "Operating system pressure",
                  "value": "172 bar"
                }
              ]
            },
            {
              "title": "Blade",
              "specs": [
                {
                  "label": "Length x height x thickness",
                  "value": "3,100 mm x 610 mm"
                },
                {
                  "label": "Type",
                  "value": "Wear-resistant steel, with box section reinforcement with hydraulic side shift."
                },
                {
                  "label": "Max. bank cutting angle",
                  "value": "90°"
                },
                {
                  "label": "Cutting angle",
                  "value": "36-81 degree"
                },
                {
                  "label": "Circle turning angle",
                  "value": "360°"
                }
              ]
            },
            {
              "title": "Front Axle",
              "specs": [
                {
                  "label": "Oscillation",
                  "value": "30°"
                },
                {
                  "label": "Wheel lean",
                  "value": "20°"
                }
              ]
            },
            {
              "title": "Operating Weight",
              "specs": [
                {
                  "label": "Operating weight",
                  "value": "12,250 kg"
                }
              ]
            }
          ],
          "gallery": [
            "assets/images/hidromek/hmk-230-mg/photo-1.webp",
            "assets/images/hidromek/hmk-230-mg/photo-2.webp",
            "assets/images/hidromek/hmk-230-mg/photo-3.webp"
          ],
          "source": "https://www.hidromek.com/europe-en/products/motor-graders/hmk-230-mg"
        },
        {
          "id": "hmk-600-mg",
          "name": "HMK 600 MG",
          "tagline": "Motor grader",
          "image": "assets/images/hidromek/hmk-600-mg/main.webp",
          "photo": true,
          "highlights": [
            {
              "label": "Operating weight",
              "value": "18,250 kg"
            }
          ],
          "sections": [
            {
              "title": "Drivetrain",
              "text": [
                "The HMK 600 MG features 8 forward and 8 reverse gears! The HMK 600 MG offers its users manoeuvrability capabilities both from the steering wheel and from the joystick. The speed of the machine may be changed with the FNR button on the joystick (140kW - 160kW) and the steering movement may also be controlled by tilting the joysticks to the left or right. The joysticks also allow the operator to control the blade. Driving comfort is enhanced with automatic gear selection and cruise control equipment."
              ]
            },
            {
              "title": "Motor",
              "text": [
                "The HMK 600 MG's Mercedes engine, with a variable horsepower feature (187 - 214 HP) compliant with Stage IIIA (Tier III) exhaust emissions, is durable in challenging working environments. The variable horsepower feature targets higher efficiency and lower fuel consumption. The hydrostatic cooling fan, which can be operated at variable speeds depending on the engine temperature, is also automatically operated in the reverse direction to clean the cooling system and thus to increase the efficiency of operation."
              ]
            },
            {
              "title": "Hydraulic System",
              "text": [
                "Hydraulic pressure may be adjusted easily thanks to closed-loop central electro-hydraulic valve, which is fed by a variable flow-rate piston pump, and thus proper power for attachments may be provided. The load-sensing feature provides hydraulic flow according to the task that the machine will be performing. This adjustable hydraulic flow reduces heat and power loss, thus the machine's performance is improved."
              ]
            },
            {
              "title": "Cab",
              "text": [
                "The newly designed hexagonal cab of the HMK 600 MG provides the operator with a wide viewing angle, while the 7 \"TFT information display in the cab allows the operator to comfortably control the machine. The operator may monitor the data to be inspected from the screen while operating the machine. In addition, the operator may see the image of the rear-view camera from this screen, and may move the machine in a controlled manner while reversing."
              ]
            },
            {
              "title": "Frame Structure with High Strength",
              "text": [
                "The HMK 600 MG's strong frame was developed based on computer simulations and field tests. Thanks to its advanced design, the service life and durability of the machine have been improved."
              ]
            },
            {
              "title": "Blade Platform and Attachments",
              "text": [
                "The HMK 600 MG has excellent performance for a variety of tasks such as levelling, mixing, grading, digging, and ploughing of snow and ice in winter conditions. The standard blade length is 3.7 meters, and options of 4.01 and 4.31 meter blade lengths are available. Thanks to the \"Clutch System\", sudden and large impacts encountered by the blade are absorbed by the clutches and damage to the blade is prevented. Clutches on the circular swivel system protect the blade against overloads by sliding over each other in the event of high forces counter-acting against the blade. The HMK 600 MG also features 2 blade accumulators that improve the strength of the blade and thus provide ease of operation for the operator by absorbing the sudden vertical shocks to the blade."
              ]
            }
          ],
          "specGroups": [
            {
              "title": "Engine",
              "specs": [
                {
                  "label": "Brand - model",
                  "value": "Mercedes-Benz OM 936 LA"
                },
                {
                  "label": "Maximum power",
                  "value": "214 HP - 242 HP (160 - 180 kW) @2200 rpm"
                },
                {
                  "label": "Maximum torque",
                  "value": "1,000 Nm @ (1200 - 1600 rpm)"
                },
                {
                  "label": "Displacement",
                  "value": "7,700 cc"
                },
                {
                  "label": "Number of cylinders",
                  "value": "6"
                },
                {
                  "label": "Emission class",
                  "value": "EU: Stage V"
                }
              ]
            },
            {
              "title": "Performance",
              "specs": [
                {
                  "label": "1st gear (forward)",
                  "value": "4 km/h"
                },
                {
                  "label": "2nd gear (forward)",
                  "value": "5.4 km/h"
                },
                {
                  "label": "3rd gear (forward)",
                  "value": "8.2 km/h"
                },
                {
                  "label": "4th gear (forward)",
                  "value": "11.2 km/h"
                },
                {
                  "label": "5th gear (forward)",
                  "value": "16 km/h"
                },
                {
                  "label": "6th gear (forward)",
                  "value": "21.6 km/h"
                },
                {
                  "label": "7th gear (forward)",
                  "value": "32.9 km/h"
                },
                {
                  "label": "8th gear (forward)",
                  "value": "45.2 km/h"
                }
              ]
            },
            {
              "title": "Transmission",
              "specs": [
                {
                  "label": "Type",
                  "value": "Direct drive powershift (planetary gear, electro-hydraulic drive) 8 forward and 8 reverse gears."
                }
              ]
            },
            {
              "title": "Wheels",
              "specs": [
                {
                  "label": "Wheels",
                  "value": "14.00 - 24.00 - 16 PR"
                }
              ]
            },
            {
              "title": "Hydraulic System",
              "specs": [
                {
                  "label": "Type",
                  "value": "Closed-center system, with load sensing using electrohydraulic valve."
                },
                {
                  "label": "Hydraulic pump",
                  "value": "Variable-displacement piston pump"
                },
                {
                  "label": "Flow rate",
                  "value": "187 L/min"
                },
                {
                  "label": "Operating system pressure",
                  "value": "172 bar"
                }
              ]
            },
            {
              "title": "Blade",
              "specs": [
                {
                  "label": "Length x height x thickness",
                  "value": "3,710 mm x 720 mm x 22 mm"
                },
                {
                  "label": "Type",
                  "value": "Wear resistant steel, with box section reinforcement with hydraulic side shift."
                },
                {
                  "label": "Max. blade lift above ground",
                  "value": "495 mm"
                },
                {
                  "label": "Max. bank cutting angle",
                  "value": "90°"
                },
                {
                  "label": "Cutting angle",
                  "value": "43° - 92°"
                },
                {
                  "label": "Circle turning angle",
                  "value": "360°"
                }
              ]
            },
            {
              "title": "Front Axle",
              "specs": [
                {
                  "label": "Oscillation",
                  "value": "15° left or right (Total 30°)"
                },
                {
                  "label": "Wheel lean",
                  "value": "20° left or right (Total 40°)"
                },
                {
                  "label": "Ground clearance",
                  "value": "600 mm"
                }
              ]
            },
            {
              "title": "Operating Weight",
              "specs": [
                {
                  "label": "Operating weight",
                  "value": "18,250 kg"
                }
              ]
            }
          ],
          "gallery": [
            "assets/images/hidromek/hmk-600-mg/photo-1.webp",
            "assets/images/hidromek/hmk-600-mg/photo-2.webp",
            "assets/images/hidromek/hmk-600-mg/photo-3.webp",
            "assets/images/hidromek/hmk-600-mg/view-3.webp",
            "assets/images/hidromek/hmk-600-mg/view-8.webp",
            "assets/images/hidromek/hmk-600-mg/view-13.webp"
          ],
          "source": "https://www.hidromek.com/europe-en/products/motor-graders/hmk-600-mg"
        }
      ]
    },
    {
      id: "soil-compactors",
      name: "Soil Compactors",
      series: null,
      summary: "Single-drum soil compactors for embankments, roads and earthworks.",
      icon: "assets/images/hidromek/hmk-110-cs/main.webp",
      iconStyle: "photo",
      products: [
        {
          "id": "hmk-110-cs",
          "name": "HMK 110 CS",
          "tagline": "Soil compactor",
          "image": "assets/images/hidromek/hmk-110-cs/main.webp",
          "photo": true,
          "highlights": [
            {
              "label": "Operating weight",
              "value": "11,350 kg"
            },
            {
              "label": "Max power",
              "value": "154 HP (115 kW)"
            }
          ],
          "sections": [
            {
              "title": "",
              "text": [
                "Superior Compression! Superior Efficiency!",
                "HİDROMEK soil compactors work efficiently and with high performance by providing high level of compaction. In working areas, they make the necessary compaction in accordance with the structure of the soil with minimum number of passes. Having two working range as high eccentric moment and low eccentric moment, HİDROMEK soil compactors enable to compact different types of material with these features. While high eccentric moment provides effective operation on thick soil layer with high vibration energy, low eccentric moment offers superior surface sealing in the final compaction process allowing thin layers and fine works to be done easily.",
                "HİDROMEK soil compactors having high compaction featurein their class also increase performance in all conditions with their superior climbing ability on slopes."
              ]
            }
          ],
          "specGroups": [
            {
              "title": "Engine",
              "specs": [
                {
                  "label": "Brand - model",
                  "value": "DEUTZ"
                },
                {
                  "label": "Maximum power",
                  "value": "154 HP (115 kW) @2200 rpm"
                },
                {
                  "label": "Type",
                  "value": "TCD 4.1 L4"
                },
                {
                  "label": "Maximum torque",
                  "value": "609 Nm @1600 rpm"
                },
                {
                  "label": "Displacement",
                  "value": "4,038 cc"
                },
                {
                  "label": "Number of cylinders",
                  "value": "4 in line"
                },
                {
                  "label": "Bore x stroke",
                  "value": "101 mm x 126 mm"
                },
                {
                  "label": "Emission class",
                  "value": "Stage V"
                }
              ]
            },
            {
              "title": "Steering System",
              "specs": [
                {
                  "label": "Oscillation angle",
                  "value": "± 12˚"
                },
                {
                  "label": "Articulation angle",
                  "value": "± 35˚"
                }
              ]
            },
            {
              "title": "Tires",
              "specs": [
                {
                  "label": "Rear tires",
                  "value": "23.1-26 12 PR"
                }
              ]
            },
            {
              "title": "Vibration",
              "specs": [
                {
                  "label": "Vibration frequency, for high amplitude/for low amplitude",
                  "value": "27.5 / 30 Hz"
                },
                {
                  "label": "Amplitude, high/low",
                  "value": "1.9 / 0.9 mm"
                },
                {
                  "label": "Centrifugal force, for high amplitude/for low amplitude",
                  "value": "206 / 114 kN"
                }
              ]
            },
            {
              "title": "Driving Speed",
              "specs": [
                {
                  "label": "1st gear",
                  "value": "5 km/h"
                },
                {
                  "label": "2nd gear",
                  "value": "6 km/h"
                },
                {
                  "label": "3rd gear",
                  "value": "7 km/h"
                },
                {
                  "label": "4th gear",
                  "value": "12 km/h"
                },
                {
                  "label": "Maximum slope with vibration / without vibration",
                  "value": "% 51 / % 54"
                }
              ]
            },
            {
              "title": "Weight",
              "specs": [
                {
                  "label": "Drum (front axle load)",
                  "value": "6,200 kg"
                },
                {
                  "label": "Operating weight",
                  "value": "11,350 kg"
                },
                {
                  "label": "Wheels (rear axle load)",
                  "value": "5,150 kg"
                }
              ]
            }
          ],
          "source": "https://www.hidromek.com/europe-en/products/soil-compactors/hmk-110-cs"
        },
        {
          "id": "hmk-130-cs",
          "name": "HMK 130 CS",
          "tagline": "Soil compactor",
          "image": "assets/images/hidromek/hmk-130-cs/main.webp",
          "photo": true,
          "highlights": [
            {
              "label": "Operating weight",
              "value": "13,250 kg"
            },
            {
              "label": "Max power",
              "value": "154 HP (115 kW)"
            }
          ],
          "sections": [
            {
              "title": "",
              "text": [
                "Superior Compression! Superior Efficiency!",
                "HİDROMEK soil compactors work efficiently and with high performance by providing high level of compaction. In working areas, they make the necessary compaction in accordance with the structure of the soil with minimum number of passes. Having two working range as high eccentric moment and low eccentric moment, HİDROMEK soil compactors enable to compact different types of material with these features. While high eccentric moment provides effective operation on thick soil layer with high vibration energy, low eccentric moment offers superior surface sealing in the final compaction process allowing thin layers and fine works to be done easily.",
                "HİDROMEK soil compactors having high compaction feature in their class also increase performance in all conditions with their superior climbing ability on slopes."
              ]
            }
          ],
          "specGroups": [
            {
              "title": "Engine",
              "specs": [
                {
                  "label": "Brand - model",
                  "value": "DEUTZ"
                },
                {
                  "label": "Maximum power",
                  "value": "154 HP (115 kW) @2200 rpm"
                },
                {
                  "label": "Type",
                  "value": "TCD 4.1 L4 Diesel Engine"
                },
                {
                  "label": "Maximum torque",
                  "value": "609 Nm @1600 rpm"
                },
                {
                  "label": "Displacement",
                  "value": "4,038 cc"
                },
                {
                  "label": "Number of cylinders",
                  "value": "4 in line"
                },
                {
                  "label": "Bore x stroke",
                  "value": "101 mm x 126 mm"
                },
                {
                  "label": "Emission class",
                  "value": "Stage V"
                }
              ]
            },
            {
              "title": "Steering System",
              "specs": [
                {
                  "label": "Oscillation angle",
                  "value": "± 12˚"
                },
                {
                  "label": "Articulation angle",
                  "value": "± 35˚"
                }
              ]
            },
            {
              "title": "Tires",
              "specs": [
                {
                  "label": "Rear tires",
                  "value": "23.1-26 12 PR"
                }
              ]
            },
            {
              "title": "Vibration",
              "specs": [
                {
                  "label": "Vibration frequency, for high amplitude/for low amplitude",
                  "value": "28/30 Hz"
                },
                {
                  "label": "Amplitude, high/low",
                  "value": "1.95/0.85 mm"
                },
                {
                  "label": "Centrifugal force, for high amplitude/for low amplitude",
                  "value": "248/123 kN"
                }
              ]
            },
            {
              "title": "Driving Speed",
              "specs": [
                {
                  "label": "1st gear",
                  "value": "5 km/h"
                },
                {
                  "label": "2nd gear",
                  "value": "6 km/h"
                },
                {
                  "label": "3rd gear",
                  "value": "7 km/h"
                },
                {
                  "label": "4th gear",
                  "value": "12 km/h"
                },
                {
                  "label": "Maximum slope with vibration / without vibration",
                  "value": "% 44 / % 47"
                }
              ]
            },
            {
              "title": "Weight",
              "specs": [
                {
                  "label": "Drum (front axle load)",
                  "value": "7,850 kg"
                },
                {
                  "label": "Operating weight",
                  "value": "13,250 kg"
                },
                {
                  "label": "Wheels (rear axle load)",
                  "value": "5,400 kg"
                }
              ]
            }
          ],
          "gallery": [
            "assets/images/hidromek/hmk-130-cs/photo-1.webp",
            "assets/images/hidromek/hmk-130-cs/photo-2.webp",
            "assets/images/hidromek/hmk-130-cs/photo-3.webp",
            "assets/images/hidromek/hmk-130-cs/photo-4.webp",
            "assets/images/hidromek/hmk-130-cs/view-3.webp",
            "assets/images/hidromek/hmk-130-cs/view-8.webp",
            "assets/images/hidromek/hmk-130-cs/view-13.webp"
          ],
          "source": "https://www.hidromek.com/europe-en/products/soil-compactors/hmk-130-cs"
        },
        {
          "id": "hmk-160-cs",
          "name": "HMK 160 CS",
          "tagline": "Soil compactor",
          "image": "assets/images/hidromek/hmk-160-cs/main.webp",
          "photo": true,
          "highlights": [
            {
              "label": "Operating weight",
              "value": "16,200 kg"
            },
            {
              "label": "Max power",
              "value": "154 HP (115 kW)"
            }
          ],
          "sections": [
            {
              "title": "",
              "text": [
                "Superior Compression! Superior Efficiency!",
                "HİDROMEK soil compactors work efficiently and with high performance by providing high level of compaction. In working areas, they make the necessary compaction in accordance with the structure of the soil with minimum number of passes. Having two working range as high eccentric moment and low eccentric moment, HİDROMEK soil compactors enable to compact different types of material with these features. While high eccentric moment provides effective operation on thick soil layer with high vibration energy, low eccentric moment offers superior surface sealing in the final compaction process allowing thin layers and fine works to be done easily.",
                "HİDROMEK soil compactors having high compaction feature in their class also increase performance in all conditions with their superior climbing ability on slopes."
              ]
            }
          ],
          "specGroups": [
            {
              "title": "Engine",
              "specs": [
                {
                  "label": "Brand - model",
                  "value": "DEUTZ"
                },
                {
                  "label": "Maximum power",
                  "value": "154 HP (115 kW) @2200 rpm"
                },
                {
                  "label": "Type",
                  "value": "Diesel Engine"
                },
                {
                  "label": "Maximum torque",
                  "value": "609 Nm @1600 rpm"
                },
                {
                  "label": "Displacement",
                  "value": "4,038 cc"
                },
                {
                  "label": "Number of cylinders",
                  "value": "4 in line"
                },
                {
                  "label": "Bore x stroke",
                  "value": "101 mm x 126 mm"
                },
                {
                  "label": "Emission class",
                  "value": "Stage V"
                }
              ]
            },
            {
              "title": "Steering System",
              "specs": [
                {
                  "label": "Oscillation angle",
                  "value": "± 12˚"
                },
                {
                  "label": "Articulation angle",
                  "value": "± 35˚"
                }
              ]
            },
            {
              "title": "Tires",
              "specs": [
                {
                  "label": "Rear tires",
                  "value": "23.1-26 12 PR"
                }
              ]
            },
            {
              "title": "Vibration",
              "specs": [
                {
                  "label": "Vibration frequency, for high amplitude/for low amplitude",
                  "value": "26.5 / 28.5 Hz"
                },
                {
                  "label": "Amplitude, high/low",
                  "value": "2.20/0.9 mm"
                },
                {
                  "label": "Centrifugal force, for high amplitude/for low amplitude",
                  "value": "334/154 kN"
                }
              ]
            },
            {
              "title": "Driving Speed",
              "specs": [
                {
                  "label": "1st gear",
                  "value": "4 km/h"
                },
                {
                  "label": "2nd gear",
                  "value": "6 km/h"
                },
                {
                  "label": "3rd gear",
                  "value": "7 km/h"
                },
                {
                  "label": "4th gear",
                  "value": "12 km/h"
                },
                {
                  "label": "Maximum slope with vibration / without vibration",
                  "value": "% 45 / % 48"
                }
              ]
            },
            {
              "title": "Weight",
              "specs": [
                {
                  "label": "Drum (front axle load)",
                  "value": "10,700 kg"
                },
                {
                  "label": "Operating weight",
                  "value": "16,200 kg"
                },
                {
                  "label": "Wheels (rear axle load)",
                  "value": "5,500 kg"
                }
              ]
            }
          ],
          "source": "https://www.hidromek.com/europe-en/products/soil-compactors/hmk-160-cs"
        }
      ]
    }
  ]
};
