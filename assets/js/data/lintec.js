/* =================================================================
   LINTEC & LINNHOFF CATALOGUE DATA
   The single source for lintec.html (rendered by assets/js/catalog.js,
   the same engine as mbcrusher.html). Edit products here.

   brand fields: see assets/js/data/mbcrusher.js

   product fields
     id, name, tagline, image   as in the MB Crusher data
     photo        true = image is a real photo (shown cropped to fill),
                  not a white-background product shot
     description  paragraphs of text
     features     bullet list, shown as "Key features"
     variants     model comparison table:
                  { columns: [model names], rows: [{ label, values: [one per model] }] }
                  rows labelled "Capacity" / "Batch size" also feed the card and header summaries
     gallery      photos (WebP)

   category fields
     iconStyle: "photo"  the category image is a photo (cropped to fill)
   ================================================================= */
window.CATALOG = {
  brand: {
    name: "Lintec & Linnhoff",
    page: "lintec.html",
    quoteBrand: "Lintec & Linnhoff",
    origin: "Germany · Represented in Egypt by Rsquared Trade",
    lead: "Environmentally friendly asphalt batch mix plants that reduce your carbon footprint, lower the energy used during mixing and let you recycle RAP material, for roads, bridges, tunnels and airport runways.",
    logo: { src: "assets/images/partners/lintec-linnhoff.png", width: 500, height: 122 },
    productWord: ["Plant series", "Plant series"],
    stats: [["30–400 tph", "Capacity range"]]
  },
  categories: [
    {
      id: "lintec",
      name: "Lintec Containerised Plants",
      series: "CSE / CSD / CSM",
      summary: "Asphalt batch mix plants built from ISO sea containers: modular, quick to ship and set up, with warm-mix and recycling options.",
      icon: "assets/images/lintec/products/cse.webp",
      iconStyle: "photo",
      products: [
        {
          "id": "cse",
          "name": "Lintec CSE",
          "tagline": "Containerised asphalt mixing plant",
          "image": "assets/images/lintec/products/cse.webp",
          "photo": true,
          "description": [
            "Embrace sustainable operations and eco-friendly technologies with the Lintec CSE containerised bitumen mixing plant. Launched at bauma 2019, this is an evolution of the CSM containerised asphalt plant which is testimony to our engineers’ tried and tested expertise, to combine tradition with new technologies to produce a premium product that suits your unique needs. Built from ISO sea containers, this flagship Lintec advanced containerised asphalt plant is the first of its kind in the industry. Its modular construction allows for easy transportation and installation on the job site."
          ],
          "features": [
            "The CSE asphalt plant is available in multi-optional versions customised to your needs",
            "The LEP95 warm mix asphalt system can be retrofitted to the plants",
            "The optional recycling system reduces the cost of new asphalt mixtures",
            "The pollution control unit and optional recycling system offers sustainability options",
            "Security is assured as the plant tower has access via one central lockable security",
            "The walkways and staircases provide convenient access to key areas",
            "All plants are pre-assembled with quality that’s guaranteed from rigorous test cycles ensuring fast and smooth setup",
            "Low shipping costs and efficient transportation"
          ],
          "variants": {
            "columns": [
              "CSE3000"
            ],
            "rows": [
              {
                "label": "Capacity",
                "values": [
                  "240 tph"
                ]
              },
              {
                "label": "Batch size",
                "values": [
                  "3000 kg"
                ]
              }
            ]
          },
          "gallery": [
            "assets/images/lintec/gallery/cse/1.webp",
            "assets/images/lintec/gallery/cse/2.webp",
            "assets/images/lintec/gallery/cse/3.webp",
            "assets/images/lintec/gallery/cse/4.webp"
          ]
        },
        {
          "id": "csd",
          "name": "Lintec CSD",
          "tagline": "Containerised asphalt mixing plant with double screen drum",
          "image": "assets/images/lintec/products/csd.webp",
          "photo": true,
          "description": [
            "Built in ISO certified sea containers, our flagship Lintec advanced containerised bitumen plant is the first of its kind in the industry. The CSD asphalt drum plant features a modular construction that allows for easy transportation and convenient installation, it’s the ideal choice for both small and big project requirements."
          ],
          "features": [
            "Superior and unique energy-saving technology that brings you to the cutting edge of sustainability",
            "Wide selection for various project needs with a low total cost of ownership",
            "The rigid ground area ensures stability on suitably compacted soil, so concrete foundation is not required which reduces plant setup cost",
            "Save more energy with Lintec's Double Screen Drum Technology which combines the heating and screening of the minerals in a single process unit",
            "Embrace sustainability with a pollution control unit and optional recycling system",
            "Security is assured as the plant tower has access via one central lockable security",
            "The walkways and staircases provide convenient access to key areas",
            "All plants are pre-assembled with quality that's guaranteed from rigorous test cycles ensuring fast and smooth setup",
            "Low shipping costs and efficient transportation"
          ],
          "variants": {
            "columns": [
              "CSD1200",
              "CSD1500/1510",
              "CSD2500B",
              "CSD3000"
            ],
            "rows": [
              {
                "label": "Capacity",
                "values": [
                  "80 tph",
                  "120 tph",
                  "160 tph",
                  "240 tph"
                ]
              },
              {
                "label": "Batch size",
                "values": [
                  "1350 kg",
                  "1650/1600 kg",
                  "2500 kg",
                  "3000 kg"
                ]
              }
            ]
          },
          "gallery": [
            "assets/images/lintec/gallery/csd/1.webp",
            "assets/images/lintec/gallery/csd/2.webp",
            "assets/images/lintec/gallery/csd/3.webp",
            "assets/images/lintec/gallery/csd/4.webp",
            "assets/images/lintec/gallery/csd/5.webp"
          ]
        },
        {
          "id": "csm",
          "name": "Lintec CSM",
          "tagline": "Containerised asphalt mixing plant",
          "image": "assets/images/lintec/products/csm.webp",
          "photo": true,
          "description": [
            "Embrace sustainable operations with eco-friendly technologies. Our company and engineers’ tried and tested expertise has allowed us to combine tradition with new technologies to produce a premium product that will suit our clients’ unique needs. Built from ISO sea containers, our flagship Lintec advanced containerised bitumen hot mix plant is the first of its kind in the industry. It features a modular construction that allows for easy transportation and convenient installation on the job site."
          ],
          "features": [
            "Our range of CSM containerised asphalt plants come in various sizes and performance capacities to meet any project needs",
            "The container's rigid ground area ensures stability on suitably compacted soil, so concrete foundation is not required which reduces plant setup cost",
            "Options include a quality recycling system that reduces costs of new asphalt mixtures",
            "Embrace sustainability with a pollution control unit and optional recycling system",
            "Security is assured as the plant tower has access via one central lockable security",
            "The walkways and staircases provide convenient access to key areas",
            "All plants are pre-assembled with quality that's guaranteed from rigorous test cycles ensuring fast and smooth setup",
            "Low shipping costs and efficient transportation"
          ],
          "variants": {
            "columns": [
              "CSM3000",
              "CSM4000",
              "CSM5000"
            ],
            "rows": [
              {
                "label": "Capacity",
                "values": [
                  "240 tph",
                  "320 tph",
                  "400 tph"
                ]
              },
              {
                "label": "Batch size",
                "values": [
                  "3000 kg",
                  "4000 kg",
                  "5000 kg"
                ]
              }
            ]
          },
          "gallery": [
            "assets/images/lintec/gallery/csm/1.webp",
            "assets/images/lintec/gallery/csm/2.webp",
            "assets/images/lintec/gallery/csm/3.webp",
            "assets/images/lintec/gallery/csm/4.webp"
          ]
        }
      ]
    },
    {
      id: "linnhoff",
      name: "Linnhoff Mobile & Compact Plants",
      series: "TSD / CMX / TRX",
      summary: "Mobile, compact and transportable asphalt batch mix plants with double screening drum technology for fast mobilisation and lower running costs.",
      icon: "assets/images/lintec/products/tsd.webp",
      iconStyle: "photo",
      products: [
        {
          "id": "tsd",
          "name": "Linnhoff TSD MobileMix",
          "tagline": "Mobile asphalt batch mix plant",
          "image": "assets/images/lintec/products/tsd.webp",
          "photo": true,
          "description": [
            "The Linnhoff TSD MobileMix Asphalt Batch Mix Plant series features mobility with ease of installation, enabling the bitumen mixing plants to be frequently relocated to different job sites. These hot mix asphalt plants are suitable for short-term projects or projects in remote locations. It is designed to maximise the plug-and-play convenience whilst minimising the time spent on mobilisation and demobilisation, with no heavy cranes and heavy-concrete foundations required for its setup."
          ],
          "features": [
            "Fully integrated four main mobile modules with built-in chassis that are designed to conform to international land transportation requirements and only prime movers are required for quick mobilisation and demobilisation",
            "Energy savings with double screening drum technology that reduce overall operating costs from less maintenance and fuel consumption by eliminating the need for hot elevators and vibrating screens",
            "Fast setup and dismantling with no heavy cranes and heavy-concrete foundations required",
            "Prewired with quick couple cables and rigorously tested prior to shipment for plug-and-play convenience",
            "Environmentally friendly with pollution control unit adopting ambient-air cleaning system that cleans exhaust gas and filters dust, ensuring clean air is released into the atmosphere",
            "Batch mixing system for quality hot mix asphalt",
            "Reliable performance with cutting-edge technology"
          ],
          "variants": {
            "columns": [
              "TSD1000",
              "TSD1500",
              "TSD2000"
            ],
            "rows": [
              {
                "label": "Capacity",
                "values": [
                  "40–60 tph",
                  "100–120 tph",
                  "120–160 tph"
                ]
              },
              {
                "label": "Batch size",
                "values": [
                  "1150 kg",
                  "1500 kg",
                  "2000 kg"
                ]
              }
            ]
          },
          "gallery": [
            "assets/images/lintec/gallery/tsd/1.webp",
            "assets/images/lintec/gallery/tsd/2.webp",
            "assets/images/lintec/gallery/tsd/3.webp",
            "assets/images/lintec/gallery/tsd/4.webp",
            "assets/images/lintec/gallery/tsd/5.webp"
          ]
        },
        {
          "id": "cmx",
          "name": "Linnhoff CMX CompactMix",
          "tagline": "Compact asphalt batch mix plant, shipped in sea containers",
          "image": "assets/images/lintec/products/cmx.webp",
          "photo": true,
          "description": [
            "Our CompactMix Asphalt Batch Mix Plant (CMX series) is specially designed to be transported in sea containers for economical shipment. Plus, its completely modular structure grants quick set up and dismantling processes. Linnhoff CMX series is a cost-effective modular asphalt mixing plant suitable for long-term projects or commercial sales."
          ],
          "features": [
            "Each plant module is configured to be transported in sea containers for economical shipment",
            "Energy savings with double screening drum technology that reduce overall operating costs from less maintenance and fuel consumption by eliminating the need for hot elevator and vibrating screens",
            "Each CMX module is prefabricated in factory, providing swift modular setup and dismantling, reducing installation time and labour costs",
            "Environmentally friendly with pollution control unit adopting ambient-air cleaning system that cleans exhaust gas and filters dust, ensuring clean air is released into the atmosphere",
            "Batch mixing system for quality hot mix asphalt",
            "Reliable performance with cutting-edge technology"
          ],
          "variants": {
            "columns": [
              "CMX1500",
              "CMX2000"
            ],
            "rows": [
              {
                "label": "Capacity",
                "values": [
                  "100–120 tph",
                  "120–160 tph"
                ]
              },
              {
                "label": "Batch size",
                "values": [
                  "1500 kg",
                  "2500 kg"
                ]
              }
            ]
          },
          "gallery": [
            "assets/images/lintec/gallery/cmx/1.webp",
            "assets/images/lintec/gallery/cmx/2.webp",
            "assets/images/lintec/gallery/cmx/3.webp",
            "assets/images/lintec/gallery/cmx/4.webp",
            "assets/images/lintec/gallery/cmx/5.webp"
          ]
        },
        {
          "id": "trx",
          "name": "Linnhoff TRX TransitMix",
          "tagline": "Transportable asphalt batch mix plant",
          "image": "assets/images/lintec/products/trx.webp",
          "photo": true,
          "description": [
            "Linnhoff TransitMix Asphalt Batch Plant (TRX) series is specially designed to be transported in sea containers for economical shipments. With a modular structure for quick set up and dismantling processes, it is a cost-efficient asphalt mixing plant highly suitable for short-term or small-scale projects."
          ],
          "features": [
            "Each plant module is configured to be transported in sea containers for economical shipment",
            "Energy savings with double screening drum technology that reduce overall operating costs from less maintenance and fuel consumption by eliminating the need for hot elevator and vibrating screens",
            "Each TRX module is prefabricated in factory, providing swift modular setup and dismantling, reducing installation time and labour costs",
            "Environmentally friendly with pollution control unit adopting ambient-air cleaning system that cleans exhaust gas and filters dust, ensuring clean air is released into the atmosphere",
            "Batch mixing system for quality hot mix asphalt",
            "Reliable performance with cutting-edge technology"
          ],
          "variants": {
            "columns": [
              "TRX800",
              "TRX1000",
              "TRX1300"
            ],
            "rows": [
              {
                "label": "Capacity",
                "values": [
                  "30–40 tph",
                  "40–60 tph",
                  "60–80 tph"
                ]
              },
              {
                "label": "Batch size",
                "values": [
                  "800 kg",
                  "1000 kg",
                  "1300 kg"
                ]
              }
            ]
          },
          "gallery": [
            "assets/images/lintec/gallery/trx/1.webp",
            "assets/images/lintec/gallery/trx/2.webp",
            "assets/images/lintec/gallery/trx/3.webp",
            "assets/images/lintec/gallery/trx/4.webp",
            "assets/images/lintec/gallery/trx/5.webp"
          ]
        }
      ]
    }
  ]
};
