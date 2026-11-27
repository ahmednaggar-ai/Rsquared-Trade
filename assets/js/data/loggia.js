/* =================================================================
   LOGGIA CATALOGUE DATA
   The single source for loggia.html (rendered by assets/js/catalog.js,
   the same engine as mbcrusher.html). Product lines, texts, pack sizes
   and data sheets come from the official range at loggia.it/en/gamma-prodotti/.

   product fields: as in assets/js/data/mbcrusher.js and lintec.js, plus
     group      sub-line heading shown on the card (e.g. "Eco line")
     specs      product codes with pack size (code -> size · pieces per box)
     downloads  technical / safety data sheets
     source     the product's page on loggia.it
   ================================================================= */
window.CATALOG = {
  brand: {
    "name": "Loggia",
    "page": "loggia.html",
    "quoteBrand": "Loggia",
    "origin": "Italy · Represented in Egypt by Rsquared Trade",
    "lead": "Colour, protection and matter: a complete range of professional indoor and outdoor paints and a wide decorative line for walls and floors, made in Italy.",
    "logo": {
      "src": "assets/images/partners/loggia.png",
      "width": 155,
      "height": 112
    },
    "productWord": [
      "Product",
      "Products"
    ],
    "stats": []
  },
  categories: [
    {
      id: "wall-coverings",
      name: "Decorative Wall Coverings",
      series: "Material & Empire decor",
      summary: "Made-in-Italy decorative coatings for interior walls: lime-based textured coatings, marble, stone, metal and pearl effects, and the Empire decor collections.",
      icon: "assets/images/loggia/wall-coverings/decorinfinito.webp",
      iconStyle: "photo",
      specNote: "Product codes and pack sizes as listed by Loggia. Colours and availability on request.",
      products: [
        {
          "id": "decorinfinito",
          "name": "Infinite",
          "tagline": "The lime-based material coating, both for interior and exterior use, formaldehyde free and vocal zero.",
          "image": "assets/images/loggia/wall-coverings/decorinfinito.webp",
          "photo": true,
          "group": "Material coatings",
          "description": [
            "Plan, design and create the decorative effect that reflects your style and the design of your environment with Infinito, the materic wall covering adapts perfectly to any situation thanks to the many possibilities of working the product and its finishing effects. Lime-based material with green properties, produced with zero formaldehyde and class A+.",
            "Infinito is a material thickness coating that can be combined with different finishing effects that allow you to recreate totally different shades, glosses and thickness effects. Urban marble, scratched, spatulate, polished, from imperial marble to the most precious finishes from liquid marble. The combinations of the product with the finishes or with other material products such as Plasma 3D and Pasma Fusion are infinite.",
            "Infinite is the decorated space as an expression of matter,is abstract, informal, modern, contemporary art."
          ],
          "gallery": [
            "assets/images/loggia/wall-coverings/decorinfinito/1.webp",
            "assets/images/loggia/wall-coverings/decorinfinito/2.webp",
            "assets/images/loggia/wall-coverings/decorinfinito/3.webp",
            "assets/images/loggia/wall-coverings/decorinfinito/4.webp"
          ],
          "video": "https://www.youtube.com/watch?v=skVwQhdYReg",
          "source": "https://www.loggia.it/en/decorinfinito/"
        },
        {
          "id": "infinito-fotocatalitico",
          "name": "Infinite Photocatalytic",
          "tagline": "The Photocatalytic Textured Coating (Line Umana) for interior and exterior formaldehyde free lime-based",
          "image": "assets/images/loggia/wall-coverings/infinito-fotocatalitico.webp",
          "photo": true,
          "group": "Material coatings",
          "description": [
            "From the line Umana has been formulated INFINITO FOTOCATALITICO The performance material based on 36-month seasoned slaked lime, with the ability to be de-polluting and to break down smog, bacteria, viruses and microorganisms thanks to its photocatalytic capabilities. It retains its workability characteristics that allow easy drafting and the possibility of finishes such as Silver Fashion that give an iridescent effect while maintaining its qualities.",
            "INFINTIO is also \"formaldehyde free\" CLASS A+ with the certified capacity to reduce 98% of formaldehyde in 48 hours compared to that produced by other materials in the environment.",
            "Thanks to its special composition, Infinito is a product suitable for both indoor and outdoor restyling. Its de-polluting photocatalytic qualities make it suitable for use in environments such as gyms, hospitals, schools and homes without sacrificing design and decor finishing.",
            "It adapts to any environment thanks to its minimalist design, at the same time giving structure to the walls thanks to the lime putty and the materiality that can be achieved."
          ],
          "gallery": [
            "assets/images/loggia/wall-coverings/infinito-fotocatalitico/1.webp"
          ],
          "source": "https://www.loggia.it/en/infinito-fotocatalitico/"
        },
        {
          "id": "infinito-carrara",
          "name": "Infinite Carrara",
          "tagline": "Thick lime-based textured coating that creates the true effect of natural marble.",
          "image": "assets/images/loggia/wall-coverings/infinito-carrara.webp",
          "photo": true,
          "group": "Material coatings",
          "description": [
            "Micronised Carrara marble. A lime-based thick textured coating that creates the true effect of natural marble."
          ],
          "gallery": [
            "assets/images/loggia/wall-coverings/infinito-carrara/1.webp"
          ],
          "downloads": [
            {
              "label": "CATALOGUE - COLOUR CHART",
              "href": "https://www.loggia.it/cataloghi/MONhttps://www.dropbox.com/scl/fi/x20xes5v195o5dd4i6rgh/CATALOGO_INFINITO-CARRARA.pdf?rlkey=b4tgh58a2tw1288ezv2gdgqh4&st=2ky58rsx&dl=0OLITH.pdf"
            }
          ],
          "video": "https://www.youtube.com/watch?v=H0tyw918jNc",
          "source": "https://www.loggia.it/en/infinito-carrara/"
        },
        {
          "id": "riflesso",
          "name": "Reflection",
          "tagline": "I Mirò. Lime-based mirror stucco.",
          "image": "assets/images/loggia/wall-coverings/riflesso.webp",
          "photo": true,
          "group": "Material coatings",
          "description": [
            "Riflesso is a high quality decorative mineral coating formulated with special lime putty and inert natural minerals and latest generation fillers. This formula makes it possible to obtain a super-smooth and ultra-glossy effect with a simple spatula application. A mirror-like stucco with important technical advantages, workability and versatility of application, even with stencil effects.",
            "Thanks to its special composition, Riflesso is a self-polishing mirror lime putty, suitable for the restyling of both classical and modern environments. With its play of light, Riflesso adapts to any environment, giving it brightness and depth. At the same time, thanks to its materiality, it gives structure to the walls, contributing to the creation of minimal and luminous design environments, even with strong colours."
          ],
          "gallery": [
            "assets/images/loggia/wall-coverings/riflesso/1.webp",
            "assets/images/loggia/wall-coverings/riflesso/2.webp",
            "assets/images/loggia/wall-coverings/riflesso/3.webp"
          ],
          "video": "https://www.youtube.com/watch?v=qRBkHP9VKAc",
          "source": "https://www.loggia.it/en/riflesso/"
        },
        {
          "id": "volare",
          "name": "Fly",
          "tagline": "The super matt material coating with a marbling effect for interior and exterior use.",
          "image": "assets/images/loggia/wall-coverings/volare.webp",
          "photo": true,
          "group": "Material coatings",
          "description": [
            "A fascinating wall covering with the reflections of silk and the feel of velvet, for a high-quality finish in both antique and modern settings with a",
            "Volare is a high quality decorative mineral coating formulated with special slaked lime and inert natural minerals and latest generation fillers. This formula makes it possible to obtain a super-smooth and opaque marble effect with a simple spatula application. Use: high quality interior walls and external protection of buildings to give them the elegance that only the uniqueness of VOLARE can give.",
            "Thanks to its special composition, Volare is a product suitable for both indoor and outdoor restyling. Thin and delicate to the touch and ultra-resistant in the material. Volare fits into any environment thanks to its minimalist design, while at the same time giving structure to the walls and contributing to the creation of sophisticated environments."
          ],
          "gallery": [
            "assets/images/loggia/wall-coverings/volare/1.webp",
            "assets/images/loggia/wall-coverings/volare/2.webp",
            "assets/images/loggia/wall-coverings/volare/3.webp",
            "assets/images/loggia/wall-coverings/volare/4.webp"
          ],
          "video": "https://www.youtube.com/watch?v=hpxR_c1Z2iw",
          "source": "https://www.loggia.it/en/portfolio-items/volare-3/"
        },
        {
          "id": "uniq",
          "name": "Uniq",
          "tagline": "The single-handed pearlescent material decoration.",
          "image": "assets/images/loggia/wall-coverings/uniq.webp",
          "photo": true,
          "group": "Material coatings",
          "description": [
            "Uniq is a single-coat pearlescent textured decorative coating. This formula makes it possible to obtain a pearlescent textured effect already in the first coat and walls with multi-coloured pearlescent finishes and shades by working the various colours wet-on-wet in a single application.",
            "Thanks to its special composition, Uniq is a unique product that is easy to apply and quick to create even large walls.",
            "It can be applied in a single coat, and shades and iridescences can be obtained that are suitable for the restyling of any environment, from the living room to the bedroom, up to the bathroom and shower room. A material that is thinner and more delicate to the touch but ultra-resistant."
          ],
          "gallery": [
            "assets/images/loggia/wall-coverings/uniq/1.webp",
            "assets/images/loggia/wall-coverings/uniq/2.webp"
          ],
          "source": "https://www.loggia.it/en/uniq-3/"
        },
        {
          "id": "canyon",
          "name": "Canyon",
          "tagline": "Cementitious coating for interior and exterior thick walls processed in multiple ways to achieve the characteristic rock effect.",
          "image": "assets/images/loggia/wall-coverings/canyon.webp",
          "photo": true,
          "group": "Material coatings",
          "description": [
            "Cementitious coating for interior and exterior thick walls processed in multiple ways to achieve the characteristic rock effect."
          ],
          "gallery": [
            "assets/images/loggia/wall-coverings/canyon/1.webp"
          ],
          "video": "https://www.youtube.com/watch?v=CszYvdEsh3U",
          "source": "https://www.loggia.it/en/canyon/"
        },
        {
          "id": "canyon-gravel",
          "name": "Canyon Gravel",
          "tagline": "The Canyon Gravel effect takes the rustic essence of natural stone to a level of contemporary elegance, turning the idea of rustic into a truly chic style.",
          "image": "assets/images/loggia/wall-coverings/canyon-gravel.webp",
          "photo": true,
          "group": "Material coatings",
          "description": [
            "The Canyon Gravel effect takes the rustic essence of natural stone to a level of contemporary elegance, turning the idea of rustic into a truly chic style."
          ],
          "gallery": [
            "assets/images/loggia/wall-coverings/canyon-gravel/1.webp"
          ],
          "downloads": [
            {
              "label": "CATALOGUE - COLOUR CHART",
              "href": "https://www.loggia.it/cataloghi/MONOLITH.pdf"
            }
          ],
          "video": "https://www.youtube.com/watch?v=U3xcGWM_cQg",
          "source": "https://www.loggia.it/en/canyon-gravel/"
        },
        {
          "id": "kymera",
          "name": "Kymera",
          "tagline": "Textured wall tiles with rust effect: kymera rust, kymera copper green, kymera turquoise.",
          "image": "assets/images/loggia/wall-coverings/kymera.webp",
          "photo": true,
          "group": "Material coatings",
          "description": [
            "Thick decorative coating. It reproduces the classic, antique and interesting effect of rust, corroded by time. Suitable for both rustic and modern environments, making any wall precious.",
            "Available in: Kymera Rust, Copper Green and Turquoise.",
            "Decorative coating that reproduces the rust effect of an iron surface naturally corroded by atmospheric agents. Oxidations, colours of iron combined with matter and time.",
            "Oxidised iron effect. Industrial style in its minimalist version.",
            "Copper green Kymera combined with rust Kymera on Infinito base."
          ],
          "gallery": [
            "assets/images/loggia/wall-coverings/kymera/1.webp",
            "assets/images/loggia/wall-coverings/kymera/2.webp",
            "assets/images/loggia/wall-coverings/kymera/3.webp"
          ],
          "downloads": [
            {
              "label": "CATALOGUE - COLOUR CHART",
              "href": "https://www.loggia.it/mobile/colors/linea-impero-split.pdf"
            }
          ],
          "video": "https://www.youtube.com/watch?v=ZbHVJNoMroE",
          "source": "https://www.loggia.it/en/kymera/"
        },
        {
          "id": "marmo-romano",
          "name": "Roman Marble",
          "tagline": "The lime-based material coating, both for interior and exterior use, formaldehyde free and vocal zero.",
          "image": "assets/images/loggia/wall-coverings/marmo-romano.webp",
          "photo": true,
          "group": "Material coatings",
          "description": [
            "Coating based on micronised hydrated lime, marble dust and silica sand, formulated with inorganic pigments, special additives and inert mineral fillers. It reproduces the classic stone effect. Excellent resistance to the aggressive agents present in industrial and marine areas, the product is also resistant to UV rays and mould."
          ],
          "gallery": [
            "assets/images/loggia/wall-coverings/marmo-romano/1.webp",
            "assets/images/loggia/wall-coverings/marmo-romano/2.webp",
            "assets/images/loggia/wall-coverings/marmo-romano/3.webp",
            "assets/images/loggia/wall-coverings/marmo-romano/4.webp"
          ],
          "downloads": [
            {
              "label": "CATALOGUE - COLOUR CHART",
              "href": "https://www.loggia.it/mobile/colors/linea-impero-split.pdf"
            }
          ],
          "video": "https://www.youtube.com/watch?v=gByy-lP2tnQ",
          "source": "https://www.loggia.it/en/marmo-romano/"
        },
        {
          "id": "mantra",
          "name": "Mantra Metal",
          "tagline": "Real metal applied by brush and spray on both smooth surfaces and as a finish on textural.",
          "image": "assets/images/loggia/wall-coverings/mantra.webp",
          "photo": true,
          "group": "Material coatings",
          "description": [
            "Mantra is a decorative coating that can be applied with a brush and reproduces the effect of real metal, from copper to bronze, tin and zinc to the reproduction of the real nuance of brass. It can be applied directly to walls, or as a finishing coat on material products such as infinity. In addition, the Mantra oxidation technique can be used with all metals and recreates different shades depending on the metal being oxidised.",
            "A product with exclusive advantages, MANTRA®, 5 metals that can be applied with a brush and oxidised to create shades that evoke the emotions of living in the environments you love."
          ],
          "gallery": [
            "assets/images/loggia/wall-coverings/mantra/1.webp",
            "assets/images/loggia/wall-coverings/mantra/2.webp"
          ],
          "video": "https://www.youtube.com/watch?v=_-WBjjaAYmc",
          "source": "https://www.loggia.it/en/mantra/"
        },
        {
          "id": "chromo-sistem",
          "name": "Chromo System",
          "tagline": "Metallic effect film",
          "image": "assets/images/loggia/wall-coverings/chromo-sistem.webp",
          "photo": true,
          "group": "Material coatings",
          "description": [
            "Chromo System is a chromatic film finish for decorative wall coverings, suitable for the restyling of modern rooms thanks to the brightness of the metallic effect obtained by transferring the film onto material products such as Infinito.",
            "Chromo system is a special, alternative decorative effect, like a metal film covering the walls, giving light and depth, colour effects and iridescent reflections. A high-impact decor that turns walls into decorative design elements."
          ],
          "gallery": [
            "assets/images/loggia/wall-coverings/chromo-sistem/1.webp",
            "assets/images/loggia/wall-coverings/chromo-sistem/2.webp",
            "assets/images/loggia/wall-coverings/chromo-sistem/3.webp"
          ],
          "source": "https://www.loggia.it/en/chromo-sistem/"
        },
        {
          "id": "ceramica",
          "name": "Ceramics",
          "tagline": "Ceramic finishing effect applicable on textured wall products.",
          "image": "assets/images/loggia/wall-coverings/ceramica.webp",
          "photo": true,
          "group": "Material coatings",
          "description": [
            "Decorative trowel finish for interiors with a glossy effect that allows the appearance of ceramics to be reproduced.",
            "Ceramic finishing effect applicable on textured wall products."
          ],
          "gallery": [
            "assets/images/loggia/wall-coverings/ceramica/1.webp"
          ],
          "downloads": [
            {
              "label": "CATALOGUE - COLOUR CHART",
              "href": "https://www.loggia.it/cataloghi/MONOLITH.pdf"
            }
          ],
          "video": "https://www.youtube.com/watch?v=U3xcGWM_cQg",
          "source": "https://www.loggia.it/en/ceramica/"
        },
        {
          "id": "keytown",
          "name": "Keytown",
          "tagline": "Aged metal effect coating",
          "image": "assets/images/loggia/wall-coverings/keytown.webp",
          "photo": true,
          "group": "Material coatings",
          "description": [
            "Keytown is a decorative wall covering that reproduces the corten effect with the possibility of maintaining a material thickness typical of the urban style with an industrial tendency.",
            "Different colour shades to recreate the effect of aged metal.",
            "Thanks to its particular composition, Keytown is suitable for the restyling of environments with an urban style and minimalist design. At the same time, thanks to its technical characteristics, it gives structure and makes the walls an integral part of the design of the environment."
          ],
          "gallery": [
            "assets/images/loggia/wall-coverings/keytown/1.webp",
            "assets/images/loggia/wall-coverings/keytown/2.webp",
            "assets/images/loggia/wall-coverings/keytown/3.webp"
          ],
          "source": "https://www.loggia.it/en/keytown/"
        },
        {
          "id": "microloggia",
          "name": "Microloggia",
          "tagline": "Microparticulated cement for interior and exterior walls and floors.",
          "image": "assets/images/loggia/wall-coverings/microloggia.webp",
          "photo": true,
          "group": "Material coatings",
          "description": [
            "Microloggia: Professional two-component microparticulate cement mortar for interior and exterior walls and floors with very high strength.",
            "MICROPARTICULATED CEMENT FOR FLOORS AND WALLS DECORATED ACCORDING TO YOUR STYLE!",
            "Professional two-component micro-partitioned cementitious mortar for interior and exterior use with very high strength.",
            "Thanks to its scratched style Microloggia is a suitable product for the reproduction of urban, industrial effects, a modern lifestyle and at the same time it gives rooms the art of passing time, history and matter.",
            "Due to its special composition, Microloggia can be applied to both smooth and tiled surfaces for indoor and outdoor use."
          ],
          "gallery": [
            "assets/images/loggia/wall-coverings/microloggia/1.webp"
          ],
          "video": "https://www.youtube.com/watch?v=NEBhec5TKXE",
          "source": "https://www.loggia.it/en/microloggia-3/"
        },
        {
          "id": "monolith-metal",
          "name": "Monolith Metal",
          "tagline": "The Metal Effect Single Component Wall and Floor Coating (with LCS technology)",
          "image": "assets/images/loggia/wall-coverings/monolith-metal.webp",
          "photo": true,
          "group": "Material coatings",
          "description": [
            "WALLS AND FLOORS: Precious Metals, Design and Light the Decor protagonist beyond the rules.",
            "Monolith is a ready-to-use single-component coating formulated with special resins and three-dimensional fibers. Thanks to innovative LCS technology, it has optimized strength and important pluses: LOGGIA CARBON SYSTEM, is an original and innovative application of Loggia Industria Vernici , of single- and multi-wall carbon nanotubes (CNTs).",
            "The system is designed to create a fibre matrix, compatible with the main binding systems available on the paint market, which can be used as a kind of \"active ingredient\" and introduced to improve the characteristics of an existing system, or be used as the basis for new products and technologies.",
            "The ready-to-use single-component material coating that revolutionises all your spaces, walls, floors and counters. The trendy industrial style in Metal version: Tin, copper, bronze, zinc and brass.",
            "LOGGIA CARBON SYSTEM (LCS) a \"reinforcement\" intended to fiber-reinforce high-performance paint products, giving the product mechanical performance unattainable with technologies used to date."
          ],
          "gallery": [
            "assets/images/loggia/wall-coverings/monolith-metal/1.webp",
            "assets/images/loggia/wall-coverings/monolith-metal/2.webp",
            "assets/images/loggia/wall-coverings/monolith-metal/3.webp",
            "assets/images/loggia/wall-coverings/monolith-metal/4.webp"
          ],
          "downloads": [
            {
              "label": "CATALOGUE - COLOUR CHART",
              "href": "https://www.loggia.it/cataloghi/MONOLITH.pdf"
            }
          ],
          "video": "https://www.youtube.com/watch?v=U3xcGWM_cQg",
          "source": "https://www.loggia.it/en/monolith-metal-3/"
        },
        {
          "id": "pietra-madre",
          "name": "Mother Stone",
          "tagline": "The unique hand-painted Antique Stone Effect Textile Cladding",
          "image": "assets/images/loggia/wall-coverings/pietra-madre.webp",
          "photo": true,
          "group": "Material coatings",
          "description": [
            "Reflections and plays of light for a minimalist design that enhances any environment! Pietra Madre is a material cladding with an antiqued stone effect that can be produced with a single hand. In the metal effect version it is available in the colours of tin, bronze, brass and copper, which allows for oxidised copper finishes in the colours of green.",
            "Colours that recall the sun, the desert; a design that recalls the materiality of rare stones.",
            "A decorative cladding with multiple fits and effects, from the most impactful to the minimal design that reflects the elegance of metals without ever losing the structure of the stone."
          ],
          "gallery": [
            "assets/images/loggia/wall-coverings/pietra-madre/1.webp",
            "assets/images/loggia/wall-coverings/pietra-madre/2.webp",
            "assets/images/loggia/wall-coverings/pietra-madre/3.webp"
          ],
          "source": "https://www.loggia.it/en/pietra-madre/"
        },
        {
          "id": "pietra-focata",
          "name": "Focused Stone",
          "tagline": "The stone and metal effect material coating",
          "image": "assets/images/loggia/wall-coverings/pietra-focata.webp",
          "photo": true,
          "group": "Material coatings",
          "description": [
            "Textured wall tiles with stone and fire metal effects!",
            "The explosive power of PIETRA FOCATA from urban chic to minimal style with precious metal reflections makes it modern, bright, elegant, suitable for upgrading any interior in a unique way.",
            "Walls without time and limits of evolution. PIETRA FOCATA takes on unique shapes and colours, foci that reveal all the power of fire. A timeless decor design, the protagonist of every room. Shapes, reflections, flames and materials, combined in the creation of designer finishes."
          ],
          "gallery": [
            "assets/images/loggia/wall-coverings/pietra-focata/1.webp",
            "assets/images/loggia/wall-coverings/pietra-focata/2.webp",
            "assets/images/loggia/wall-coverings/pietra-focata/3.webp"
          ],
          "source": "https://www.loggia.it/en/pietra-focata/"
        },
        {
          "id": "decorativi-lumina",
          "name": "Lumina",
          "tagline": "The timeless style of spatula effects, reflections of light and matter.",
          "image": "assets/images/loggia/wall-coverings/decorativi-lumina.webp",
          "photo": true,
          "group": "Empire decor",
          "description": [
            "Decorative Impero Spatulate Line: the complete spatulate range collects all Loggia, mirror, metallic, opaque and glazed stuccoes",
            "From lime stuccoes to Venetian stuccoes, from pearlescent spatulas to mirror effects. The Saptola decor line encompasses the timeless decor range",
            "Classic, modern, elegant, bright. Stucco in all its decor finishes can create rooms with unmistakable charm by highlighting all details.",
            "The decorative, synthetic marbled, glossy coating for interior environments.",
            "Lime putty natural stucco aged 3 years. Brillantissimo!"
          ],
          "gallery": [
            "assets/images/loggia/wall-coverings/decorativi-lumina/1.webp",
            "assets/images/loggia/wall-coverings/decorativi-lumina/2.webp",
            "assets/images/loggia/wall-coverings/decorativi-lumina/3.webp",
            "assets/images/loggia/wall-coverings/decorativi-lumina/4.webp"
          ],
          "source": "https://www.loggia.it/en/decorativi-lumina/"
        },
        {
          "id": "decorativi-fabrics",
          "name": "Fabrics",
          "tagline": "All-Italian elegance, silky, velvety, damask and silk effects.",
          "image": "assets/images/loggia/wall-coverings/decorativi-fabrics.webp",
          "photo": true,
          "group": "Empire decor",
          "description": [
            "Impero Damask Line decors: the complete range of all-Italian elegance, silky, velvety, damask and silk effects.",
            "From Florentine velvet effects, to the textures of fine silk, to the reflections of fine fabrics. The Damask decor line: All-Italian elegance, silky, velvety, damask and silk effects.",
            "Elegant and precious, the decors of the damask line recall the textures of Italian fabrics. A complete decor range to recreate refined environments with delicate finishes.",
            "Attractive interior wall tiles with pearlescent reflections.",
            "A charming interior wall covering with velvet highlights."
          ],
          "gallery": [
            "assets/images/loggia/wall-coverings/decorativi-fabrics/1.webp",
            "assets/images/loggia/wall-coverings/decorativi-fabrics/2.webp",
            "assets/images/loggia/wall-coverings/decorativi-fabrics/3.webp",
            "assets/images/loggia/wall-coverings/decorativi-fabrics/4.webp"
          ],
          "source": "https://www.loggia.it/en/decorativi-fabrics/"
        },
        {
          "id": "decorativi-pearlesse",
          "name": "Pearlesse",
          "tagline": "The delicacy of pearl effects to recreate refined environments.",
          "image": "assets/images/loggia/wall-coverings/decorativi-pearlesse.webp",
          "photo": true,
          "group": "Empire decor",
          "description": [
            "Decorative Impero Perlescenti Line: The delicacy of pearlescent effects to recreate refined environments.",
            "From pad pearl effects to maxi pearl applied by brush to create patterns of light and decor reflections throughout the room. Eccentric and at the same time precious, to bring walls to life by recreating a unique and delicate light.",
            "To recreate elegant, bright, softly coloured rooms, or eclectic style and strong colours, where light and colour meet to form walls that leave their mark, with an 'ultra pop' style.",
            "Bufferable glaze with a more intense pearlescent effect",
            "Attractive coating with pearlescent reflections, for fine finishes."
          ],
          "gallery": [
            "assets/images/loggia/wall-coverings/decorativi-pearlesse/1.webp",
            "assets/images/loggia/wall-coverings/decorativi-pearlesse/2.webp",
            "assets/images/loggia/wall-coverings/decorativi-pearlesse/3.webp",
            "assets/images/loggia/wall-coverings/decorativi-pearlesse/4.webp"
          ],
          "source": "https://www.loggia.it/en/decorativi-pearlesse/"
        },
        {
          "id": "decorativi-linea-impero-metallici",
          "name": "Metallum",
          "tagline": "The strength of real metal in an exclusive wall decor selection.",
          "image": "assets/images/loggia/wall-coverings/decorativi-linea-impero-metallici.webp",
          "photo": true,
          "group": "Empire decor",
          "description": [
            "Decor Line Impero Metallics: The power of real metal, an exclusive wall decor selection, all metals in different finishes.",
            "From the effects of bronze and copper to brass, zinc and tin. The line of metallic decors,the strength of real metal in an exclusive wall decor selection.",
            "A range of metal effect decors with the most diverse finishes. From brass foils that can be reproduced with Mantra, to the rust effects with an urban soul, of Kymera!",
            "Oxidised-effect decoration that faithfully reproduces the effect of oxidised metals.",
            "Decorative coating based on metal powders and epoxy resins, easily mouldable."
          ],
          "gallery": [
            "assets/images/loggia/wall-coverings/decorativi-linea-impero-metallici/1.webp",
            "assets/images/loggia/wall-coverings/decorativi-linea-impero-metallici/2.webp",
            "assets/images/loggia/wall-coverings/decorativi-linea-impero-metallici/3.webp",
            "assets/images/loggia/wall-coverings/decorativi-linea-impero-metallici/4.webp"
          ],
          "source": "https://www.loggia.it/en/decorativi-linea-impero-metallici/"
        },
        {
          "id": "decorativi-prisma",
          "name": "Prisma",
          "tagline": "A modern, bright style with a rock soul, for always modern environments.",
          "image": "assets/images/loggia/wall-coverings/decorativi-prisma.webp",
          "photo": true,
          "group": "Empire decor",
          "description": [
            "Metallic Impero Line decors: A modern, bright style with a rock soul, for always modern environments.",
            "From embossed effects such as Diamond to decor in bright nuances and soft metallic highlights such as Platinum, a decor range with metallic effects to reproduce every kind of finish, from the most delicate to the most sprightly.",
            "A modern, creative style with a Rock soul, to recreate modern and impactful environments, thanks to the combination of bright colours with a metallic effect.",
            "High-quality decorative cladding with slightly raised irregular metallic shades.",
            "Decorative interior wall cladding with iridescent colour effect in relief."
          ],
          "gallery": [
            "assets/images/loggia/wall-coverings/decorativi-prisma/1.webp",
            "assets/images/loggia/wall-coverings/decorativi-prisma/2.webp",
            "assets/images/loggia/wall-coverings/decorativi-prisma/3.webp",
            "assets/images/loggia/wall-coverings/decorativi-prisma/4.webp"
          ],
          "source": "https://www.loggia.it/en/decorativi-prisma/"
        },
        {
          "id": "decorativi-linea-impero-opachi",
          "name": "Opal",
          "tagline": "A retro soul that sets trends, a style that is always current and makes every detail stand out.",
          "image": "assets/images/loggia/wall-coverings/decorativi-linea-impero-opachi.webp",
          "photo": true,
          "group": "Empire decor",
          "description": [
            "Decorative Opaque Empire Line: A retro soul that sets trends, a timeless style that makes every detail stand out.",
            "The Ultra Matt effect is trending in the field of paints and watercolours, we find it from the most intense to the most elegant colours, combined with mirror and glazed products. But what about Decor Ultra Matt?",
            "The most loved by professionals all over the world, the Opaque style is trend-setting in all its aesthetic lines, the Empire line opaque range offers effects from delicate shades such as Tamponato, to the stide Shabby revisited and made modern.",
            "Varnish for washable paints, lime, silicates, quartz with ageing and protective effect.",
            "Semi-gloss varnish for vinyl paints with an ageing and protective effect."
          ],
          "gallery": [
            "assets/images/loggia/wall-coverings/decorativi-linea-impero-opachi/1.webp",
            "assets/images/loggia/wall-coverings/decorativi-linea-impero-opachi/2.webp",
            "assets/images/loggia/wall-coverings/decorativi-linea-impero-opachi/3.webp",
            "assets/images/loggia/wall-coverings/decorativi-linea-impero-opachi/4.webp"
          ],
          "source": "https://www.loggia.it/en/decorativi-linea-impero-opachi/"
        },
        {
          "id": "decorativi-tactile",
          "name": "Tactile",
          "tagline": "Irregular reliefs, plays of shapes, light and reflections, from opaque to iridescent and pearly effects.",
          "image": "assets/images/loggia/wall-coverings/decorativi-tactile.webp",
          "photo": true,
          "group": "Empire decor",
          "description": [
            "Impero Line Decorative Flakes: Irregular reliefs, plays of shapes, lights and reflections, from opaque to iridescent and pearly effects.",
            "The range of decorations with flakes, reproduce irregular relief effects to give thick, yet 'soft' effects to walls. We find the unmistakable Domus style with an ever-present modern touch",
            "thanks to the multicoloured bows of Domus Flower. An eccentric and at the same time slightly retro style. Irregular reliefs, games of shapes, lights and reflections, from opaque to iridescent and pearly effects.",
            "High-quality decorative cladding with irregular veiled and somewhat raised shades.",
            "Gold effect spotted decorative interior wall covering."
          ],
          "gallery": [
            "assets/images/loggia/wall-coverings/decorativi-tactile/1.webp",
            "assets/images/loggia/wall-coverings/decorativi-tactile/2.webp",
            "assets/images/loggia/wall-coverings/decorativi-tactile/3.webp",
            "assets/images/loggia/wall-coverings/decorativi-tactile/4.webp"
          ],
          "source": "https://www.loggia.it/en/decorativi-tactile/"
        },
        {
          "id": "decorativi-sablis",
          "name": "Sablis",
          "tagline": "From softer finishes such as cloud effects to diamond sandblasts to catch every eye.",
          "image": "assets/images/loggia/wall-coverings/decorativi-sablis.webp",
          "photo": true,
          "group": "Empire decor",
          "description": [
            "Decorative Impero Line Sandblasted: From softer finishes such as cloud effects to diamond sandblasted to catch every eye.",
            "From soft effects such as sharki cloud, with delicate reliefs and matt sandblasted for matt style, to more pronounced sandblasted finishes with different base colours, from metallic to gold to silver with the addition of precious light effects.",
            "The line of sandblasted effects is very wide and diverse, whether for more delicate tastes with pastel shades, or for lovers of eccentric fashion with bright colours and a diamond effect, for walls that leave their mark!",
            "High-quality sandblasted effect decorative coating with raised veiled shades.",
            "Join Accademia 21, become part of the Italian Plasmatori group, specialising in decorative techniques with the new Decor course or follow the Plasmatori path to get the six stars!"
          ],
          "gallery": [
            "assets/images/loggia/wall-coverings/decorativi-sablis/1.webp",
            "assets/images/loggia/wall-coverings/decorativi-sablis/2.webp"
          ],
          "source": "https://www.loggia.it/en/decorativi-sablis/"
        },
        {
          "id": "decorativi-linea-impero-glitterati",
          "name": "Gleam",
          "tagline": "Something glitters? A line dedicated to glitter lovers in all its forms and colours.",
          "image": "assets/images/loggia/wall-coverings/decorativi-linea-impero-glitterati.webp",
          "photo": true,
          "group": "Empire decor",
          "description": [
            "Decorative Glittered Empire Line: Something Glitters? A line dedicated to glitter lovers in all its forms and colours.",
            "Is there anything that glitters? Glitter comes to life on the walls and creates a light movement effect that accompanies and envelops the whole room!",
            "A style that never wanes, we always find a garment with a sparkling effect, so in the same way we embellish our environment!",
            "Iridescent thick coating with special iridescent effect glitter.",
            "Join Accademia 21, become part of the Italian Plasmatori group, specialising in decorative techniques with the new Decor course or follow the Plasmatori path to get the six stars!"
          ],
          "gallery": [
            "assets/images/loggia/wall-coverings/decorativi-linea-impero-glitterati/1.webp",
            "assets/images/loggia/wall-coverings/decorativi-linea-impero-glitterati/2.webp",
            "assets/images/loggia/wall-coverings/decorativi-linea-impero-glitterati/3.webp"
          ],
          "source": "https://www.loggia.it/en/decorativi-linea-impero-glitterati/"
        }
      ]
    },
    {
      id: "floor-coverings",
      name: "Floor Coverings",
      series: "Microcement, Monolith & epoxy",
      summary: "Decorative and professional floor coatings: microcement, Monolith single-component coatings with LCS technology, epoxy resin floors, primers and floor enamels.",
      icon: "assets/images/loggia/floor-coverings/moquette.webp",
      iconStyle: "photo",
      specNote: "Product codes and pack sizes as listed by Loggia. Colours and availability on request.",
      products: [
        {
          "id": "moquette",
          "name": "Moquette",
          "tagline": "Silky to the touch, elegant and super thin.",
          "image": "assets/images/loggia/floor-coverings/moquette.webp",
          "photo": true,
          "group": "Decorative floors",
          "description": [
            "Spatulate damask carpet effect coating. Carquette is a classy interior upholstery that recalls the shine of precious fabrics. Ideal for the decoration of interior walls and floors in prestigious antique or modern buildings.",
            "Spatulate damask wall tiles with Moquette effect gold/silver. Moquette is a classy interior wall covering that recalls the elegant, dyschromic effect ofcarpet. Ideal for indoor floor coverings of all kinds. Theoretical yield: 6-7 sqm/lt"
          ],
          "gallery": [
            "assets/images/loggia/floor-coverings/moquette/1.webp",
            "assets/images/loggia/floor-coverings/moquette/2.webp"
          ],
          "video": "https://www.youtube.com/watch?v=9g6xPvxJBTI",
          "source": "https://www.loggia.it/en/moquette-3/"
        },
        {
          "id": "microloggia",
          "name": "Microloggia",
          "tagline": "The fascination of Microcement in a unique design.",
          "image": "assets/images/loggia/floor-coverings/microloggia.webp",
          "photo": true,
          "group": "Decorative floors",
          "description": [
            "Microloggia: Professional two-component microparticulate cement mortar for interior and exterior walls and floors with very high strength.",
            "MICROPARTICULATED CEMENT FOR FLOORS AND WALLS DECORATED ACCORDING TO YOUR STYLE!",
            "Professional two-component micro-partitioned cementitious mortar for interior and exterior use with very high strength.",
            "Thanks to its scratched style Microloggia is a suitable product for the reproduction of urban, industrial effects, a modern lifestyle and at the same time it gives rooms the art of passing time, history and matter.",
            "Due to its special composition, Microloggia can be applied to both smooth and tiled surfaces for indoor and outdoor use."
          ],
          "gallery": [
            "assets/images/loggia/floor-coverings/microloggia/1.webp"
          ],
          "video": "https://www.youtube.com/watch?v=NEBhec5TKXE",
          "source": "https://www.loggia.it/en/microloggia-3/"
        },
        {
          "id": "superlevel60",
          "name": "SUPERLEVEL60",
          "tagline": "SUPERLEVEL60 is a self-levelling compound based on cement and special hydraulic binders, formulated for indoor and outdoor floors.",
          "image": "assets/images/loggia/floor-coverings/superlevel60.webp",
          "photo": true,
          "group": "Decorative floors",
          "description": [
            "Suitable for indoor and outdoor floors, industrial floors, schools, gyms, offices, shopping centres and warehouses."
          ],
          "gallery": [
            "assets/images/loggia/floor-coverings/superlevel60/1.webp"
          ],
          "downloads": [
            {
              "label": "CATALOGUE - COLOUR CHART",
              "href": "https://www.loggia.it/cataloghi/MONOLITH.pdf"
            }
          ],
          "video": "https://www.youtube.com/watch?v=U3xcGWM_cQg",
          "source": "https://www.loggia.it/en/superlevel60/"
        },
        {
          "id": "micromono",
          "name": "Micromono",
          "tagline": "Less is more. The minimal design that wins you over.",
          "image": "assets/images/loggia/floor-coverings/micromono.webp",
          "photo": true,
          "group": "Decorative floors",
          "description": [
            "MICROMONO is a thixotropic cementitious coating mixed with water, for both interior and exterior use.",
            "Suitable for exterior and interior coverings, stairs, furniture, bathrooms and seamless wall-to-floor surfaces."
          ],
          "gallery": [
            "assets/images/loggia/floor-coverings/micromono/1.webp"
          ],
          "downloads": [
            {
              "label": "CATALOGUE - COLOUR CHART",
              "href": "https://www.loggia.it/cataloghi/MONOLITH.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/micromono/"
        },
        {
          "id": "monolith",
          "name": "Monolith",
          "tagline": "The beauty of modern living.",
          "image": "assets/images/loggia/floor-coverings/monolith.webp",
          "photo": true,
          "group": "Decorative floors",
          "description": [
            "Monolith is a ready-to-use single-component coating formulated with special resins and three-dimensional fibers.",
            "Monolith is a ready-to-use one-component coating formulated with special resins and three-dimensional fibres. Thanks to innovative LCS technology it has optimised resistance and important plus points:",
            "LOGGIA CARBON SYSTEM, is an original and innovative application of Loggia Industria Vernici , of single- and multi-wall carbon nanotubes (CNTs).The system is designed to create a fibrocomposite matrix, compatible with the main binder systems available in the coatings market, which can be used as a kind of \"active ingredient\" and introduced to improve the characteristics of an existing system, or be used as the basis for new products and new technologies.",
            "Sfoglia il catalogo dedicato al prodotto, lasciati ispirare dagli ambienti."
          ],
          "gallery": [
            "assets/images/loggia/floor-coverings/monolith/1.webp",
            "assets/images/loggia/floor-coverings/monolith/2.webp",
            "assets/images/loggia/floor-coverings/monolith/3.webp"
          ],
          "video": "https://www.youtube.com/watch?v=U3xcGWM_cQg",
          "source": "https://www.loggia.it/en/monolith/"
        },
        {
          "id": "monolith-metal",
          "name": "Monolith Metal",
          "tagline": "Say Urban, say Monolith! Modern, versatile with unbeatable performance.",
          "image": "assets/images/loggia/floor-coverings/monolith-metal.webp",
          "photo": true,
          "group": "Decorative floors",
          "description": [
            "WALLS AND FLOORS: Precious Metals, Design and Light the Decor protagonist beyond the rules.",
            "Monolith is a ready-to-use single-component coating formulated with special resins and three-dimensional fibers. Thanks to innovative LCS technology, it has optimized strength and important pluses: LOGGIA CARBON SYSTEM, is an original and innovative application of Loggia Industria Vernici , of single- and multi-wall carbon nanotubes (CNTs).",
            "The system is designed to create a fibre matrix, compatible with the main binding systems available on the paint market, which can be used as a kind of \"active ingredient\" and introduced to improve the characteristics of an existing system, or be used as the basis for new products and technologies.",
            "The ready-to-use single-component material coating that revolutionises all your spaces, walls, floors and counters. The trendy industrial style in Metal version: Tin, copper, bronze, zinc and brass.",
            "LOGGIA CARBON SYSTEM (LCS) a \"reinforcement\" intended to fiber-reinforce high-performance paint products, giving the product mechanical performance unattainable with technologies used to date."
          ],
          "gallery": [
            "assets/images/loggia/floor-coverings/monolith-metal/1.webp",
            "assets/images/loggia/floor-coverings/monolith-metal/2.webp",
            "assets/images/loggia/floor-coverings/monolith-metal/3.webp",
            "assets/images/loggia/floor-coverings/monolith-metal/4.webp"
          ],
          "downloads": [
            {
              "label": "CATALOGUE - COLOUR CHART",
              "href": "https://www.loggia.it/cataloghi/MONOLITH.pdf"
            }
          ],
          "video": "https://www.youtube.com/watch?v=U3xcGWM_cQg",
          "source": "https://www.loggia.it/en/monolith-metal-3/"
        },
        {
          "id": "monolith-terrazzo",
          "name": "Monolith Terrace",
          "tagline": "Retro charm with a contemporary taste.",
          "image": "assets/images/loggia/floor-coverings/monolith-terrazzo.webp",
          "photo": true,
          "group": "Decorative floors",
          "description": [
            "Monolith Terrazzo effect is a flooring line tile with multicolored grits of various sizes inside.",
            "CONTINUOUS SURFACES: a discreet and sophisticated elegance.",
            "A \"must have\" design that creates flooring with retro charm and at the same time contemporary taste for its refined and minimal look."
          ],
          "gallery": [
            "assets/images/loggia/floor-coverings/monolith-terrazzo/1.webp"
          ],
          "downloads": [
            {
              "label": "CATALOGUE - COLOUR CHART",
              "href": "https://www.loggia.it/cataloghi/MONOLITH.pdf"
            }
          ],
          "video": "https://www.youtube.com/watch?v=U3xcGWM_cQg",
          "source": "https://www.loggia.it/en/monolith-terrazzo/"
        },
        {
          "id": "monolith-marmo",
          "name": "Monolith Marmo",
          "tagline": "Harmony and nature for a refined design.",
          "image": "assets/images/loggia/floor-coverings/monolith-marmo.webp",
          "photo": true,
          "group": "Decorative floors",
          "description": [
            "Monolith Marmo is a ready-to-use single-component coating, formulated with special resins and three-dimensional fibres."
          ],
          "gallery": [
            "assets/images/loggia/floor-coverings/monolith-marmo/1.webp"
          ],
          "downloads": [
            {
              "label": "CATALOGUE - COLOUR CHART",
              "href": "https://www.loggia.it/cataloghi/MONOLITH.pdf"
            }
          ],
          "video": "https://www.youtube.com/watch?v=U3xcGWM_cQg",
          "source": "https://www.loggia.it/en/monolith-marmo/"
        },
        {
          "id": "monolith-pietra",
          "name": "Monolith Pietra",
          "tagline": "Multicoloured grits for a chic concrete effect.",
          "image": "assets/images/loggia/floor-coverings/monolith-pietra.webp",
          "photo": true,
          "group": "Decorative floors",
          "description": [
            "Monolith Pietra is a concrete-effect coating containing multicoloured grits."
          ],
          "gallery": [
            "assets/images/loggia/floor-coverings/monolith-pietra/1.webp"
          ],
          "downloads": [
            {
              "label": "CATALOGUE - COLOUR CHART",
              "href": "https://www.loggia.it/cataloghi/MONOLITH.pdf"
            }
          ],
          "video": "https://www.youtube.com/watch?v=0tgJ-S7PJ0g",
          "source": "https://www.loggia.it/en/monolith-pietra/"
        },
        {
          "id": "epox-pavimenti-288",
          "name": "Epox Floors",
          "tagline": "Epox Floors, Epoxy Enamel.",
          "image": "assets/images/loggia/floor-coverings/epox-pavimenti-288.webp",
          "photo": true,
          "group": "Professional floors",
          "description": [
            "High resistance to abrasion, trampling and heavy traffic. Suitable as a finish for industrial floors.",
            "Epoxy enamel. High resistance to abrasion, alkalis and heavy traffic.Suitable as a topcoat for industrial floors. Catalysis: 50% with hardener EP1618"
          ],
          "specs": [
            {
              "label": "H060000X",
              "value": "20 kg · 1 piece per box"
            },
            {
              "label": "H060000M",
              "value": "5 kg · 2 pieces per box"
            },
            {
              "label": "H060000F",
              "value": "1 kg · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/floor-coverings/epox-pavimenti-288/1.webp",
            "assets/images/loggia/floor-coverings/epox-pavimenti-288/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=409&lang=1"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_H060000_17.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/epox-pavimenti-288/"
        },
        {
          "id": "resina-epox-plus-pavimenti",
          "name": "Epox Plus Resin Floors",
          "tagline": "Resin Epox Plus flooring, Epoxy enamel.",
          "image": "assets/images/loggia/floor-coverings/resina-epox-plus-pavimenti.webp",
          "photo": true,
          "group": "Professional floors",
          "description": [
            "High resistance to abrasion, trampling and heavy traffic. Suitable as a floor finish",
            "Epoxy resin. High resistance to abrasion, trampling and heavy traffic.Suitable as a topcoat for industrial and civil floors, shops, hotels, etc. Catalysis: 25%.with cat. EP 1618."
          ],
          "specs": [
            {
              "label": "E300000X",
              "value": "25 kg · 1 piece per box"
            },
            {
              "label": "E300000M",
              "value": "5 kg · 2 pieces per box"
            },
            {
              "label": "E300000F",
              "value": "1 kg · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/floor-coverings/resina-epox-plus-pavimenti/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=410&lang=1"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_E300000_4.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/resina-epox-plus-pavimenti/"
        },
        {
          "id": "epox-livel",
          "name": "Epox Livel",
          "tagline": "Epox Livel, self-levelling epoxy mortar.",
          "image": "assets/images/loggia/floor-coverings/epox-livel.webp",
          "photo": true,
          "group": "Professional floors",
          "description": [
            "Catalysis: 10% with cat. EP 1618. Colours: RAL colours",
            "Self-levelling epoxy mortar. Catalysis: at 10% with cat. EP 1618.",
            "Theoretical yield: 1 kg/sq.m. thickness for 1 cmof catalysed product."
          ],
          "specs": [
            {
              "label": "H010000U",
              "value": "25 kg · 1 piece per box"
            },
            {
              "label": "H010000M",
              "value": "5 kg · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/floor-coverings/epox-livel/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=413&lang=1"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/epox-livel/"
        },
        {
          "id": "vita-nuova-industrial",
          "name": "Vitanuova Industrial",
          "tagline": "EPOX PLUS micro-resin: a water-based, two-component, low-solvent, thin-layer coating for interior floors and walls.",
          "image": "assets/images/loggia/floor-coverings/vita-nuova-industrial.webp",
          "photo": true,
          "group": "Professional floors",
          "description": [
            "EPOX PLUS micro-resin: a water-based, two-component, low-solvent, thin-layer coating for interior floors and walls."
          ],
          "specs": [
            {
              "label": "Componente A · D116000G",
              "value": "2.5 kg · 2 pieces per box"
            },
            {
              "label": "Componente A · D116000F",
              "value": "1 kg · 6 pieces per box"
            },
            {
              "label": "Componente B · E116000B",
              "value": "0.75 kg · 2 pieces per box"
            },
            {
              "label": "Componente B · E116000A",
              "value": "0.3 kg · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/floor-coverings/vita-nuova-industrial/1.webp",
            "assets/images/loggia/floor-coverings/vita-nuova-industrial/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/dw/E115_it_562.pdf?v=2026/10/21/09/13/49"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/vita-nuova-industrial/"
        },
        {
          "id": "epoxfond-t",
          "name": "Epoxfond-t",
          "tagline": "Epoxfond-T, transparent epoxy insulating primer.",
          "image": "assets/images/loggia/floor-coverings/epoxfond-t.webp",
          "photo": true,
          "group": "Professional floors",
          "description": [
            "Catalysis: 50% with cat. EP 3070",
            "Transparent epoxy insulating primer. Catalysis: 50% with cat. EP 3070"
          ],
          "specs": [
            {
              "label": "G1100002",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "G1100005",
              "value": "5 L · 2 pieces per box"
            },
            {
              "label": "G1100007",
              "value": "1 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/floor-coverings/epoxfond-t/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=417&lang=1"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_G110000_4.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/epoxfond-t/"
        },
        {
          "id": "primer-ceramigres",
          "name": "Primer Ceramigres",
          "tagline": "Primer Ceramigres, Anchor for glazes on ceramics and stoneware.",
          "image": "assets/images/loggia/floor-coverings/primer-ceramigres.webp",
          "photo": true,
          "group": "Professional floors",
          "description": [
            "Catalysis: at 1% with cat. 21. Theoretical yield: 16-18 sqm/lt.",
            "Anchor for glazes on ceramics and stoneware. Catalysis: 1% with cat. 21.Theoretical coverage: 16-18 sqm./lt."
          ],
          "specs": [
            {
              "label": "E4700005",
              "value": "5 L · 2 pieces per box"
            },
            {
              "label": "E4700007",
              "value": "1 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/floor-coverings/primer-ceramigres/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=419&lang=1"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/primer-ceramigres/"
        },
        {
          "id": "unico",
          "name": "Unique",
          "tagline": "Water-based, eco-friendly, non-toxic, odourless enamel.",
          "image": "assets/images/loggia/floor-coverings/unico.webp",
          "photo": true,
          "group": "Professional floors",
          "description": [
            "Colours: standard. Theoretical coverage: 10 mq./lt.",
            "Single-coat synthetic urethane enamel for galvanised sheet metal and light alloys."
          ],
          "specs": [
            {
              "label": "D0400002",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "D0400005",
              "value": "5 L · 2 pieces per box"
            },
            {
              "label": "D0400006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "D0400004",
              "value": "0.75 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/floor-coverings/unico/1.webp",
            "assets/images/loggia/floor-coverings/unico/2.webp",
            "assets/images/loggia/floor-coverings/unico/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=475&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_D040000_15.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/unico/"
        }
      ]
    },
    {
      id: "plasma-3d",
      name: "Plasma 3D",
      series: "Patented 3D decorative line",
      summary: "The patented decorative coating applicable on any surface – walls, floors, doors, furniture, ceramics and wood – to restyle a space without demolition.",
      icon: "assets/images/loggia/plasma-3d/bi-plasma-3d.webp",
      iconStyle: "photo",
      specNote: "Product codes and pack sizes as listed by Loggia. Colours and availability on request.",
      products: [
        {
          "id": "linea-bellissima-2020",
          "name": "3D Plasma",
          "tagline": "Do you dream of designing your space according to your imagination, with no limits to the possibilities in colours, shapes and three-dimensionality?",
          "image": "assets/images/loggia/plasma-3d/linea-bellissima-2020/2.webp",
          "photo": true,
          "description": [
            "Do you dream of designing your space according to your imagination, with no limits to the possibilities in colours, shapes and three-dimensionality? Now you can with Plasma 3D, a range of decors in one product!",
            "PLASMA 3D: The Decor protagonist of every environment. The product with international patent that has revolutionised the world of decoratives. PLASMA 3D can be applied to any type of surface, from walls to floors, doors, furniture, laminates and anything else you want to give colours and shapes that were unthinkable until now.",
            "The Decor that revolutionised the way we think about colour.",
            "Walls, floors and surfaces that can be moulded into a multitude of shapes and colours that make each room unique and inimitable, and each creation a true work of art.",
            "Plasma 3D is colour that becomes decorated space, three-dimensional, deep, emotional. Expression of the dimension of matter, research, spontaneous art, culture of the true made in Italy,"
          ],
          "gallery": [
            "assets/images/loggia/plasma-3d/linea-bellissima-2020/1.webp",
            "assets/images/loggia/plasma-3d/linea-bellissima-2020/3.webp",
            "assets/images/loggia/plasma-3d/linea-bellissima-2020/4.webp",
            "assets/images/loggia/plasma-3d/linea-bellissima-2020.webp"
          ],
          "video": "https://www.youtube.com/watch?v=VBipPXIlMF8",
          "source": "https://www.loggia.it/en/linea-bellissima-2020/"
        },
        {
          "id": "bi-plasma-3d",
          "name": "Bi Plasma 3D",
          "tagline": "Bi Plasma 3D, the two-component material coating of the Bellissima line of Plasma 3D, is an innovative, resistant…",
          "image": "assets/images/loggia/plasma-3d/bi-plasma-3d.webp",
          "photo": true,
          "description": [
            "Bi Plasma 3D, the two-component material coating of the Bellissima line of Plasma 3D, is an innovative, resistant, ultra-versatile product that can be applied to walls, doors, furniture, counters and, above all, is suitable for restyling and applying to both pre-existing and self-levelling concrete floors.",
            "Bi Plasma 3D is suitable for trowel work and is available in a multitude of colours that can also be mixed together to create nuances and multicolour effects. Workability, elasticity and resistance to treading are just some of the product's advantages, large surfaces created without joints or signs of junction.",
            "Bi plasma 3D in all its versions opens the door to a world of possibilities that has no limits in terms of development and application in interior decoration.",
            "Thanks to its special composition, Bi Plasma 3D is suitable for trowel and smooth work and is available in a multitude of colours that can also be mixed together to create nuances and multicolour effects .Bi Plasma 3D adapts to any environment thanks to its minimalist design, while at the same time giving brightness thanks to its ultra-polish composition. It is suitable for the most complex artistic processes, thanks to the combination with other products or with Bi Plasma in its metal version, to the most linear and simple ones, thanks to its clean and essential design.",
            "Exceed the limits, always go further, research, observe, create and break the mould to find what you love, in the essence of the material of every project and creation."
          ],
          "gallery": [
            "assets/images/loggia/plasma-3d/bi-plasma-3d/1.webp",
            "assets/images/loggia/plasma-3d/bi-plasma-3d/2.webp",
            "assets/images/loggia/plasma-3d/bi-plasma-3d/3.webp"
          ],
          "video": "https://www.youtube.com/watch?v=9SjJOHLa5Io",
          "source": "https://www.loggia.it/en/bi-plasma-3d/"
        },
        {
          "id": "bi-plasma-3d-metal",
          "name": "Bi Plasma 3D Metal",
          "tagline": "Bi Plasma 3D Metal, brass, tin, zinc, copper and bronze, for creations with a metal effect to be combined with thick material products such as volare…",
          "image": "assets/images/loggia/plasma-3d/bi-plasma-3d-metal.webp",
          "photo": true,
          "description": [
            "Bi Plasma 3D Metal, brass, tin, zinc, copper and bronze, for creations with a metal effect to be combined with thick material products such as volare, infinito, or mixed with Bi Plasma 3D applicable to both walls and floors. Elegant, modern, professional and creative, in all its versions it opens the door to a world of possibilities that in the field of interior decoration has no limits of development and application.",
            "Bi Plasma3D Metal is obtained by mixing Base Bi Plasma Metal with metal powders: brass, tin, zinc, copper and bronze, for metal-effect creations that can be applied individually, spatula-applied in several wet-on-wet metal colours to recreate shaded metal effects and combined with thick material products such as volare, infinito.Bi plasma 3D, also in its Metal version, can be applied to both walls and floors.",
            "Elegant, modern, professional and creative, suitable for the restyling of any environment, from bathrooms to kitchens to hotel lobbies, the product's versatility allows for multiple effects and applications, from the simplest to the most sophisticated.",
            "Exceed the limits, always go further, research, observe, create and break the mould to find what you love, in the essence of the material of every project and creation.",
            "\"Your home should tell the story of who you are and be a collection of what you love.\""
          ],
          "gallery": [
            "assets/images/loggia/plasma-3d/bi-plasma-3d-metal/1.webp",
            "assets/images/loggia/plasma-3d/bi-plasma-3d-metal/2.webp",
            "assets/images/loggia/plasma-3d/bi-plasma-3d-metal/3.webp",
            "assets/images/loggia/plasma-3d/bi-plasma-3d-metal/4.webp"
          ],
          "video": "https://www.youtube.com/watch?v=9m_JuNOB0JY",
          "source": "https://www.loggia.it/en/bi-plasma-3d-metal/"
        },
        {
          "id": "plasma-3d-i-marmi",
          "name": "Plasma 3D Marbles",
          "tagline": "PLASMA MARBLES",
          "image": "assets/images/loggia/plasma-3d/plasma-3d-i-marmi.webp",
          "photo": true,
          "description": [
            "From the Bellissima line comes PLASMA 3D, infinite decorative effects in a single product, applicable on any surface and pliable in a multitude of effects: from Crocodile, Wood, Snake, Striped Marble, Viper, Wild, Vintage, Granite, to the stencil line. The new exclusive PLASMA 3D i Marmi line recreates the most precious veins and all the nuances you could wish for, to make every environment unique and precious, from walls to floors, up to furniture doors and objects dedicated to home design.",
            "Mirror effects, precious sheens and nuances that evoke a noble style, at the same time natural and precious. Thanks to its technical characteristics, PLASMA 3D I MARMI is suitable for creating ultra-polished spatula effects that recreate natural colour shades and the three-dimensional depth typical of the most precious marbles. The versatility of the product makes it possible to create walls with an ultra-modern design and refined geometries, thick stencil effects and colours in the most vivid of strong colours.Plasma 3D in all its versions opens the door to a world of possibilities that has no limits in terms of development and application in interior decoration.",
            "Exceed the limits, always go further, research, observe, create and break the mould to find what you love, in the essence of the material of every project and creation.",
            "\"Your home should tell the story of who you are and be a collection of what you love.\"",
            "3D Plasma and all versions of Plasma and Bi-Plasma made to be suitable for all application needs"
          ],
          "gallery": [
            "assets/images/loggia/plasma-3d/plasma-3d-i-marmi/1.webp",
            "assets/images/loggia/plasma-3d/plasma-3d-i-marmi/2.webp",
            "assets/images/loggia/plasma-3d/plasma-3d-i-marmi/3.webp",
            "assets/images/loggia/plasma-3d/plasma-3d-i-marmi/4.webp"
          ],
          "video": "https://www.youtube.com/watch?v=GALSPuMuh_k",
          "source": "https://www.loggia.it/en/plasma-3d-i-marmi/"
        },
        {
          "id": "plasma-3d-fusion",
          "name": "Plasma 3D Fusion",
          "tagline": "Plasma 3D Fusion was born out of the need to create new and fascinating decor motifs and reach ever higher limits…",
          "image": "assets/images/loggia/plasma-3d/plasma-3d-fusion.webp",
          "photo": true,
          "description": [
            "Plasma 3D Fusion was born out of the need to create new and fascinating decor motifs and reach ever higher limits, raising the bar of innovation design for users in search of new emotions. Plasma 3D Fusion is the result of experience in the field of decor to provide new and up-to-date solutions to the needs of designers and professionals in the field in their search for innovative products with linear design and multiple possibilities.",
            "Plasma 3D Fusion is a mouldable product with a metallic appearance that can be applied either thickly or smoothly. Plasma Fusion cantake on a variety of effects depending on the tool used to process it. You can have a striped effect, stencil textures,Marble, Granite and other possibilities depending on the combination of products. Plasma Fusion can be applied to infinity (perfectly dry) and Plasma 3d (with asmeared effect) to give a compact and smooth finish with the reflections of molten metal.",
            "Exceed the limits, always go further, research, observe, create and break the mould to find what you love, in the essence of the material of every project and creation.",
            "\"Your home should tell the story of who you are and be a collection of what you love.\"",
            "3D Plasma and all versions of Plasma and Bi-Plasma made to be suitable for all application needs"
          ],
          "gallery": [
            "assets/images/loggia/plasma-3d/plasma-3d-fusion/1.webp",
            "assets/images/loggia/plasma-3d/plasma-3d-fusion/2.webp",
            "assets/images/loggia/plasma-3d/plasma-3d-fusion/3.webp",
            "assets/images/loggia/plasma-3d/plasma-3d-fusion/4.webp"
          ],
          "video": "https://www.youtube.com/watch?v=ipDJTjOZN1U",
          "source": "https://www.loggia.it/en/plasma-3d-fusion/"
        },
        {
          "id": "plasma-3d-metal-monocomponente",
          "name": "Plasma 3D Metal Single Component",
          "tagline": "Plasma 3D Metal Single-component the easy-to-apply metal decorative to recreate walls like brass, tin…",
          "image": "assets/images/loggia/plasma-3d/plasma-3d-metal-monocomponente.webp",
          "photo": true,
          "description": [
            "Plasma 3D Metal Single-component the easy-to-apply metal decorative to recreate walls like brass, tin, zinc and bronze plates",
            "Plasma 3D Metal Single-component, brass, tin, zinc, copper and bronze, for metal-effect creations to be combined with thick material products such as fly, infinity, or mix with Plasma 3D applicable on both walls and floors. Elegant, modern, professional and creative, in all its versions it opens the door to a world of possibilities that in interior decoration has no limits of development and application.",
            "Exceed the limits, always go further, research, observe, create and break the mould to find what you love, in the essence of the material of every project and creation.",
            "\"Your home should tell the story of who you are and be a collection of what you love.\"",
            "3D Plasma and all versions of Plasma and Bi-Plasma made to be suitable for all application needs"
          ],
          "gallery": [
            "assets/images/loggia/plasma-3d/plasma-3d-metal-monocomponente/1.webp",
            "assets/images/loggia/plasma-3d/plasma-3d-metal-monocomponente/2.webp",
            "assets/images/loggia/plasma-3d/plasma-3d-metal-monocomponente/3.webp",
            "assets/images/loggia/plasma-3d/plasma-3d-metal-monocomponente/4.webp"
          ],
          "video": "https://www.youtube.com/watch?v=ZzFKEHI0y-A",
          "source": "https://www.loggia.it/en/plasma-3d-metal-monocomponente-2/"
        },
        {
          "id": "vetrificanti",
          "name": "Glazing",
          "tagline": "Mirror effects such as Liquid Crystal or natural effects such as Marble Wax. Choose the one that suits you best!",
          "image": "assets/images/loggia/plasma-3d/vetrificanti.webp",
          "photo": true,
          "description": [
            "Protective clear, is the line dedicated to the protection of delicate surfaces or to ensure greater performance and resistance to products in the flooring line or for the restyling of doors, furniture and surfaces at risk.",
            "A range of products that responds to the needs of surface protection reflecting all tastes, from the single-component Microglass glazing agent to Microglass Bi in all its matt and glossy formulations, Liquid Crystal that reflects the brilliance of marble to Bicera for natural results that maintain and enhance the performance of the product."
          ],
          "gallery": [
            "assets/images/loggia/plasma-3d/vetrificanti/1.webp",
            "assets/images/loggia/plasma-3d/vetrificanti/2.webp",
            "assets/images/loggia/plasma-3d/vetrificanti/3.webp",
            "assets/images/loggia/plasma-3d/vetrificanti/4.webp"
          ],
          "source": "https://www.loggia.it/en/vetrificanti/"
        }
      ]
    },
    {
      id: "interior-paints",
      name: "Interior Paints",
      series: "Water-based paints",
      summary: "Professional water-based paints for interior walls: tempera, washable, super-matt and satin finishes, plus the Eco line of anti-mould and breathable paints.",
      icon: "assets/images/loggia/interior-paints/casablanc-supertempera.webp",
      iconStyle: "photo",
      specNote: "Product codes and pack sizes as listed by Loggia. Colours and availability on request.",
      products: [
        {
          "id": "casablanc-supertempera",
          "name": "Casablanc Super Tempera",
          "tagline": "Tempera paint with titanium dioxide.",
          "image": "assets/images/loggia/interior-paints/casablanc-supertempera.webp",
          "photo": true,
          "group": "Indoor water paints",
          "description": [
            "Colours: white. Theoretical yield: 6 mq./lt."
          ],
          "specs": [
            {
              "label": "A0100000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A5800005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A5800006",
              "value": "2.5 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/casablanc-supertempera/1.webp",
            "assets/images/loggia/interior-paints/casablanc-supertempera/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=1&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A010000_7.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/casablanc-supertempera/"
        },
        {
          "id": "soffio",
          "name": "Soffio",
          "tagline": "Eco-friendly breathable paint for interior use.",
          "image": "assets/images/loggia/interior-paints/soffio.webp",
          "photo": true,
          "group": "Indoor water paints",
          "description": [
            "Colours: white. Theoretical coverage: 6 sqm/lt"
          ],
          "specs": [
            {
              "label": "A0200000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A0200005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A0200006",
              "value": "2.5 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/soffio/1.webp",
            "assets/images/loggia/interior-paints/soffio/2.webp",
            "assets/images/loggia/interior-paints/soffio/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=2&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A020000_5.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/soffio/"
        },
        {
          "id": "soffio-piu",
          "name": "Soffio Più",
          "tagline": "Breathable super opaque paint based on opaque fillers and titanium dioxide.",
          "image": "assets/images/loggia/interior-paints/soffio-piu.webp",
          "photo": true,
          "group": "Indoor water paints",
          "description": [
            "Colours: white. Theoretical coverage: 6 sqm/lt."
          ],
          "specs": [
            {
              "label": "A0300000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A0300005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A0300006",
              "value": "2.5 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/soffio-piu/1.webp",
            "assets/images/loggia/interior-paints/soffio-piu/2.webp",
            "assets/images/loggia/interior-paints/soffio-piu/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=3&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A030000_6.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/soffio-piu/"
        },
        {
          "id": "le-blanche",
          "name": "Le Blanche",
          "tagline": "Breathable, hydrophobic, water-repellent paint.",
          "image": "assets/images/loggia/interior-paints/le-blanche.webp",
          "photo": true,
          "group": "Indoor water paints",
          "description": [
            "Colours: white. Theoretical yield: 7 mq./lt."
          ],
          "specs": [
            {
              "label": "LeBlanche · A5700000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "LeBlanche · A5700005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "Anti-mould formula · A57000X0",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "Anti-mould formula · A57000X5",
              "value": "4 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/le-blanche/1.webp",
            "assets/images/loggia/interior-paints/le-blanche/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=4&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A570000_5.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/le-blanche/"
        },
        {
          "id": "biancore",
          "name": "Biancorè",
          "tagline": "Breathable, water-repellent, high-coverage water paint for interiors.",
          "image": "assets/images/loggia/interior-paints/biancore.webp",
          "photo": true,
          "group": "Indoor water paints",
          "description": [
            "Colours: white. Theoretical coverage: 11 mq./lt.",
            "High-coverage, water-repellent, breathable water-based paint for interior use."
          ],
          "specs": [
            {
              "label": "A5800000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A5800005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "Anti-mould formula · A58000X0",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "Anti-mould formula · A58000X5",
              "value": "4 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/biancore/1.webp",
            "assets/images/loggia/interior-paints/biancore/2.webp",
            "assets/images/loggia/interior-paints/biancore/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=5&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A580000_6.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/biancore/"
        },
        {
          "id": "traspirante-silossanico-per-interni",
          "name": "Traspirante Silossanico",
          "tagline": "Water-based paint for interior use based on siloxane binders.",
          "image": "assets/images/loggia/interior-paints/traspirante-silossanico-per-interni.webp",
          "photo": true,
          "group": "Indoor water paints",
          "description": [
            "Excellent whiteness. It favours the diffusion of water vapour. Theoretical yield 8 mq/l."
          ],
          "specs": [
            {
              "label": "A1210000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A1210005",
              "value": "4 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/traspirante-silossanico-per-interni/1.webp",
            "assets/images/loggia/interior-paints/traspirante-silossanico-per-interni/2.webp",
            "assets/images/loggia/interior-paints/traspirante-silossanico-per-interni/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=6&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/traspirante-silossanico-per-interni-2/"
        },
        {
          "id": "aria-soft",
          "name": "Soft Air",
          "tagline": "Washable breathable. Colours: white.",
          "image": "assets/images/loggia/interior-paints/aria-soft.webp",
          "photo": true,
          "group": "Indoor water paints",
          "description": [
            "Theoretical yield: 8 mq./lt.",
            "Colors: white. Theoretical yield: 8 mq./lt. per hand."
          ],
          "specs": [
            {
              "label": "A0400000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A0400005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A0400006",
              "value": "2.5 L · 1 piece per box"
            },
            {
              "label": "Gold · A1420000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "Gold · A1420005",
              "value": "4 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/aria-soft/1.webp",
            "assets/images/loggia/interior-paints/aria-soft/2.webp",
            "assets/images/loggia/interior-paints/aria-soft/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=492&lang=1"
            },
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=493&lang=1"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A040000_7.pdf"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A142000_5.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/aria-soft/"
        },
        {
          "id": "aria-soft-green",
          "name": "Air Soft Green",
          "tagline": "Washable breathable. Colours: white.",
          "image": "assets/images/loggia/interior-paints/aria-soft-green.webp",
          "photo": true,
          "group": "Indoor water paints",
          "description": [
            "Theoretical yield: 8 mq./lt."
          ],
          "specs": [
            {
              "label": "A3690001",
              "value": "10 L · 1 piece per box"
            },
            {
              "label": "A3690005",
              "value": "4 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/aria-soft-green/1.webp",
            "assets/images/loggia/interior-paints/aria-soft-green/2.webp",
            "assets/images/loggia/interior-paints/aria-soft-green/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=7&lang=1"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/aria-soft-green/"
        },
        {
          "id": "int-est",
          "name": "Lavabile INT & EST",
          "tagline": "Water-based paint for interiors and exteriors, washable, high coverage and yield.",
          "image": "assets/images/loggia/interior-paints/int-est.webp",
          "photo": true,
          "group": "Indoor water paints",
          "description": [
            "Theoretical coverage: 10 sqm/lt COD: A05",
            "Washable, high coverage, high performance water-based paint for interior and exterior use. Colours: white. Theoretical coverage: 9-10 sqm/lt. per coat"
          ],
          "specs": [
            {
              "label": "Int&Est · A0500000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "Int&Est · A0500005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "Int&Est · A0500005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "Int&Est · A05M0000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "Gold · A1430000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "Gold · A1430005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "Gold · A143M000",
              "value": "14 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/int-est/1.webp",
            "assets/images/loggia/interior-paints/int-est/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=8&lang=0"
            },
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=9&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A050000_13.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/int-est-2/"
        },
        {
          "id": "una-mano-unica",
          "name": "One Hand",
          "image": "assets/images/loggia/interior-paints/una-mano-unica.webp",
          "photo": true,
          "group": "Indoor water paints",
          "specs": [
            {
              "label": "A · A3210000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A · A3210001",
              "value": "10 L · 1 piece per box"
            },
            {
              "label": "A · A3210005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A · A3210006",
              "value": "2.5 L · 1 piece per box"
            },
            {
              "label": "Pigmented insulation · B2700005",
              "value": "5 L · 1 piece per box"
            },
            {
              "label": "Pigmented insulation · B2700001",
              "value": "1 L · 20 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/una-mano-unica/1.webp",
            "assets/images/loggia/interior-paints/una-mano-unica/2.webp",
            "assets/images/loggia/interior-paints/una-mano-unica/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=494&lang=1"
            },
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=471&lang=1"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A321000_3.pdf"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_B270000_4.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/una-mano-unica/"
        },
        {
          "id": "lavabile-eco",
          "name": "Washable Eco \"andrea's Colours",
          "tagline": "Breathable eco-friendly washable water paint with new generation resins and bactericides.",
          "image": "assets/images/loggia/interior-paints/lavabile-eco.webp",
          "photo": true,
          "group": "Indoor water paints",
          "description": [
            "For all rooms in the house including ceilings."
          ],
          "specs": [
            {
              "label": "A4100000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A4100005",
              "value": "4 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/lavabile-eco/1.webp",
            "assets/images/loggia/interior-paints/lavabile-eco/2.webp",
            "assets/images/loggia/interior-paints/lavabile-eco/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=10&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A410000_5.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/lavabile-eco-2/"
        },
        {
          "id": "titania-plus",
          "name": "Titania Plus",
          "tagline": "Super Washable Vinyl Satin with very high coverage and yield.",
          "image": "assets/images/loggia/interior-paints/titania-plus.webp",
          "photo": true,
          "group": "Indoor water paints",
          "description": [
            "Theoretical coverage: 13 sqm/lt. Colours: White.",
            "Super Washable Satin Vinyl with very high coverage and yield."
          ],
          "specs": [
            {
              "label": "A5500000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A5500005",
              "value": "4 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/titania-plus/1.webp",
            "assets/images/loggia/interior-paints/titania-plus/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=11&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A550000_5.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/titania-plus/"
        },
        {
          "id": "teknika-acrilica",
          "name": "Acrylic Teknika",
          "tagline": "Washable super opaque breathable acrylic.",
          "image": "assets/images/loggia/interior-paints/teknika-acrilica.webp",
          "photo": true,
          "group": "Indoor water paints",
          "description": [
            "Theoretical yield: 9 mq./lt."
          ],
          "specs": [
            {
              "label": "A2800000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A2800005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A28M0000",
              "value": "14 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/teknika-acrilica/1.webp",
            "assets/images/loggia/interior-paints/teknika-acrilica/2.webp",
            "assets/images/loggia/interior-paints/teknika-acrilica/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=12&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A280000_5.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/teknika-acrilica-2/"
        },
        {
          "id": "teknika-acrilica-super-opaca",
          "name": "Teknika Supersatin",
          "tagline": "Washable super opaque breathable acrylic.",
          "image": "assets/images/loggia/interior-paints/teknika-acrilica-super-opaca.webp",
          "photo": true,
          "group": "Indoor water paints",
          "description": [
            "Theoretical yield: 9 mq./lt.",
            "Washable acrylic super matt, breathable super opaque.",
            "Colors: white. Theoretical yield: 8-10 mq./lt. per hand."
          ],
          "specs": [
            {
              "label": "A1690000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A1690005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A169M000",
              "value": "14 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/teknika-acrilica-super-opaca/1.webp",
            "assets/images/loggia/interior-paints/teknika-acrilica-super-opaca/2.webp",
            "assets/images/loggia/interior-paints/teknika-acrilica-super-opaca/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=13&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/teknika-acrilica-super-opaca/"
        },
        {
          "id": "coloranda",
          "name": "Coloranda",
          "image": "assets/images/loggia/interior-paints/coloranda.webp",
          "photo": true,
          "group": "Indoor water paints",
          "specs": [
            {
              "label": "Coloranda Colors Medium · A195000A",
              "value": "0.1 L · 12 pieces per box"
            },
            {
              "label": "Coloranda Strong Colors · A19500FA",
              "value": "0.1 L · 12 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/coloranda/1.webp",
            "assets/images/loggia/interior-paints/coloranda/2.webp",
            "assets/images/loggia/interior-paints/coloranda/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=14&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A195000_4.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/coloranda/"
        },
        {
          "id": "opera-plus-color",
          "name": "Opera Plus Color",
          "tagline": "Semi-gloss acrylic washable with high coverage and yield.",
          "image": "assets/images/loggia/interior-paints/opera-plus-color.webp",
          "photo": true,
          "group": "Indoor water paints",
          "description": [
            "Semi-glossy in appearance,with high washability and high color rendering, the range of Opera Plus Color isdistinguished by excellent applicability and perfect adhesion to surfaces such asconcrete, plaster and plasterboard. Available in new shades that giverooms energy and vitality. Use. Suitable for paintinginterior walls and plasters."
          ],
          "specs": [
            {
              "label": "Medium Colours · A38V0006",
              "value": "2.5 L · 1 piece per box"
            },
            {
              "label": "Strong Colours · A38V00F6",
              "value": "2.5 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/opera-plus-color/1.webp",
            "assets/images/loggia/interior-paints/opera-plus-color/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=16&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A38V000_7.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/opera-plus-color/"
        },
        {
          "id": "opera",
          "name": "Opera",
          "tagline": "Washable acrylic super-white high coverage and yield.",
          "image": "assets/images/loggia/interior-paints/opera.webp",
          "photo": true,
          "group": "Indoor water paints",
          "description": [
            "Colours: white. Theoretical yield: 11 mq./lt.",
            "Washable super-white acrylic with high coverage and yield."
          ],
          "specs": [
            {
              "label": "A0600000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A0600005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A06M0000",
              "value": "14 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/opera/1.webp",
            "assets/images/loggia/interior-paints/opera/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=15&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A060000_11.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/opera/"
        },
        {
          "id": "opera-plus-semilucida",
          "name": "Opera Plus Semilucida",
          "tagline": "Super-washable acrylic finish with semi-gloss effect.",
          "image": "assets/images/loggia/interior-paints/opera-plus-semilucida.webp",
          "photo": true,
          "group": "Indoor water paints",
          "description": [
            "Colours: white. Theoretical coverage: 11 sqm/lt."
          ],
          "specs": [
            {
              "label": "A3800000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A3800005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A38M0000",
              "value": "14 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/opera-plus-semilucida/1.webp",
            "assets/images/loggia/interior-paints/opera-plus-semilucida/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=17&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A380000_8.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/opera-plus-semilucida-2/"
        },
        {
          "id": "opera-gold-supercoprente",
          "name": "Opera Gold Super Opaque",
          "tagline": "Super-washable acrylic topcoat with very high white point.",
          "image": "assets/images/loggia/interior-paints/opera-gold-supercoprente.webp",
          "photo": true,
          "group": "Indoor water paints",
          "description": [
            "Colours: white. Theoretical coverage: 11/12 sqm/lt. per coat."
          ],
          "specs": [
            {
              "label": "A1380000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A138000S",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A138M000",
              "value": "14 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/opera-gold-supercoprente/1.webp",
            "assets/images/loggia/interior-paints/opera-gold-supercoprente/2.webp"
          ],
          "downloads": [
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A580000_6.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/opera-gold-supercoprente/"
        },
        {
          "id": "opera-super-opaca",
          "name": "Opera Super Satin",
          "tagline": "Super-washable acrylic finish with super satin effect.",
          "image": "assets/images/loggia/interior-paints/opera-super-opaca.webp",
          "photo": true,
          "group": "Indoor water paints",
          "description": [
            "High yield. Colours: white. Theoretical coverage: 11 sqm/lt. per coat."
          ],
          "specs": [
            {
              "label": "A1570000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A1570005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A157M000",
              "value": "14 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/opera-super-opaca/1.webp",
            "assets/images/loggia/interior-paints/opera-super-opaca/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=19&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/opera-super-opaca/"
        },
        {
          "id": "divina",
          "name": "Divina",
          "tagline": "Superwashable matte satin acrylic with very high coverage and yield.",
          "image": "assets/images/loggia/interior-paints/divina.webp",
          "photo": true,
          "group": "Indoor water paints",
          "description": [
            "Theoretical yield: 13 sqm./lt.",
            "Divina is a superwashable acrylic satin mattewith very high coverage and yield.Theoretical yield: 9-10 sq.m./lt. per coat."
          ],
          "specs": [
            {
              "label": "A0800003",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A0800005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A0800004",
              "value": "0.75 L · 1 piece per box"
            },
            {
              "label": "A08M0003",
              "value": "14 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/divina/1.webp",
            "assets/images/loggia/interior-paints/divina/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=20&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A080000_4.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/divina2014-02-18-14-14-45_/"
        },
        {
          "id": "divina-color-base",
          "name": "Divina Color Base",
          "tagline": "Super-washable satin acrylic.",
          "image": "assets/images/loggia/interior-paints/divina-color-base.webp",
          "photo": true,
          "group": "Indoor water paints",
          "description": [
            "Colours: base colour chart. Theoretical coverage: 13 sqm/lt."
          ],
          "specs": [
            {
              "label": "A0700003",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A0700005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A0700004",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "A0700003",
              "value": "14 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/divina-color-base/1.webp",
            "assets/images/loggia/interior-paints/divina-color-base/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=21&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A070000_4.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/divina-color-base/"
        },
        {
          "id": "impero-matt-supercoprente-semilucido-569",
          "name": "Divina Color Base",
          "tagline": "Semi-gloss acrylic superwash (25-30 gloss) with very high coverage and yield.",
          "image": "assets/images/loggia/interior-paints/impero-matt-supercoprente-semilucido-569.webp",
          "photo": true,
          "group": "Indoor water paints",
          "description": [
            "Theoretical coverage: 13 sqm/lt.",
            "Semi-gloss acrylic superwashable (25-30 gloss) with very high coverage and coverage and yield."
          ],
          "specs": [
            {
              "label": "A1000003",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A1000005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A1000004",
              "value": "0.75 L · 1 piece per box"
            },
            {
              "label": "A10M0003",
              "value": "14 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/impero-matt-supercoprente-semilucido-569/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=22&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A100000_6.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/impero-matt-supercoprente-semilucido-569-2/"
        },
        {
          "id": "divina-brillant",
          "name": "Divina Brillant",
          "tagline": "Glossy acrylic superwash (60-70 gloss) with brilliant appearance and excellent washability properties and very high coverage.",
          "image": "assets/images/loggia/interior-paints/divina-brillant.webp",
          "photo": true,
          "group": "Indoor water paints",
          "description": [
            "Glossy acrylic superwash (60-70 gloss) with a brilliant appearance, excellent washability and very high coverage and yield. Theoretical coverage: 13 sqm/litre per coat."
          ],
          "specs": [
            {
              "label": "A3900003",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A3900005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A3900004",
              "value": "0.75 L · 1 piece per box"
            },
            {
              "label": "A39M0003",
              "value": "14 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/divina-brillant/1.webp",
            "assets/images/loggia/interior-paints/divina-brillant/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=23&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A390000_6.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/divina-brillant-2/"
        },
        {
          "id": "divina-gold-supercoprente",
          "name": "Divina Gold Supercoprente",
          "tagline": "Superwashable matte satin acrylic with very high coverage and yield.",
          "image": "assets/images/loggia/interior-paints/divina-gold-supercoprente.webp",
          "photo": true,
          "group": "Indoor water paints",
          "description": [
            "Theoretical yield: 13 sqm./lt.",
            "Superwashable acrylic with very high whiteness, excellent brushability and flowability and water-repellent properties."
          ],
          "specs": [
            {
              "label": "A2900003",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A2900005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A2900004",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "A29M0003",
              "value": "14 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/divina-gold-supercoprente/1.webp",
            "assets/images/loggia/interior-paints/divina-gold-supercoprente/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=24&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/divina-gold-supercoprente-2/"
        },
        {
          "id": "divina-colori-forti-base-a",
          "name": "Divina Strong Colors Based ON",
          "tagline": "Super-washable acrylic water-based paint with very high coverage and yield for strong BASE A colours.",
          "image": "assets/images/loggia/interior-paints/divina-colori-forti-base-a.webp",
          "photo": true,
          "group": "Indoor water paints",
          "description": [
            "Theoretical coverage: 13 mq./lt."
          ],
          "specs": [
            {
              "label": "LA250000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "LA250005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "LA250004",
              "value": "0.75 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/divina-colori-forti-base-a/1.webp",
            "assets/images/loggia/interior-paints/divina-colori-forti-base-a/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=25&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_LA25000_5.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/divina-colori-forti-base-a-2/"
        },
        {
          "id": "divina-airglass",
          "name": "Divina Airglass",
          "tagline": "Anti-condensation, anti-mould water paint with hollow glass spheres.",
          "image": "assets/images/loggia/interior-paints/divina-airglass.webp",
          "photo": true,
          "group": "Indoor water paints",
          "description": [
            "Colours: white. Theoretical coverage: 10 mq./lt.",
            "Interior paint with 3M hollow glass ballshigh solar reflectivity S.R.I., high wall breathability, anti-condensation and anti-mould.Energy savings of more than 20%. Colour: White. Theoretical coverage 4 sqm/litre for 3 coats."
          ],
          "specs": [
            {
              "label": "A0900000",
              "value": "4 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/divina-airglass/1.webp",
            "assets/images/loggia/interior-paints/divina-airglass/2.webp",
            "assets/images/loggia/interior-paints/divina-airglass/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=27&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A090000_6.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/divina-airglass/"
        },
        {
          "id": "superamerica",
          "name": "Superamerica",
          "tagline": "Super-covering washable paint for cardboard and walls in general indoors.",
          "image": "assets/images/loggia/interior-paints/superamerica.webp",
          "photo": true,
          "group": "Indoor water paints",
          "description": [
            "VERY HIGH COVERAGE. Colours: white. Theoretical coverage: 8-10 sqm/lt.",
            "Super-covering washable paint for plasterboard and interior walls in general. Very high coverage.",
            "Colours: white.Theoretical coverage: 8-10 sqm/litre per coat."
          ],
          "specs": [
            {
              "label": "A4000000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A4000005",
              "value": "4 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/superamerica/1.webp",
            "assets/images/loggia/interior-paints/superamerica/2.webp",
            "assets/images/loggia/interior-paints/superamerica/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=30&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/superamerica/"
        },
        {
          "id": "royal-paint-lavabile",
          "name": "Washable Royal Paint New England",
          "tagline": "Superwashable matte satin acrylic with very high coverage and yield.",
          "image": "assets/images/loggia/interior-paints/royal-paint-lavabile.webp",
          "photo": true,
          "group": "Indoor water paints",
          "description": [
            "Theoretical yield: 13 sqm./lt.",
            "Colours shown in the colour card.Theoretical coverage: 11 sqm/litre per coat."
          ],
          "specs": [
            {
              "label": "A1960000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A1960005",
              "value": "4 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/royal-paint-lavabile/1.webp",
            "assets/images/loggia/interior-paints/royal-paint-lavabile/2.webp",
            "assets/images/loggia/interior-paints/royal-paint-lavabile/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=28&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A196000_5.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/royal-paint-lavabile/"
        },
        {
          "id": "royal-paint-smalto",
          "name": "Royal Paint Enamel New England",
          "tagline": "Superwashable matte satin acrylic with very high coverage and yield.",
          "image": "assets/images/loggia/interior-paints/royal-paint-smalto.webp",
          "photo": true,
          "group": "Indoor water paints",
          "description": [
            "Theoretical yield: 13 sqm./lt.",
            "Water-based, satiny, non-toxic, odourless, eco-friendly enamel.Colours: of folder"
          ],
          "specs": [
            {
              "label": "D1220006",
              "value": "2.5 L · 1 piece per box"
            },
            {
              "label": "D1220004",
              "value": "0.75 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/royal-paint-smalto/1.webp",
            "assets/images/loggia/interior-paints/royal-paint-smalto/2.webp",
            "assets/images/loggia/interior-paints/royal-paint-smalto/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=29&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/royal-paint-smalto/"
        },
        {
          "id": "murasmalt",
          "name": "Murasmalt",
          "tagline": "Glossy, semi-glossy or matt wall enamel.",
          "image": "assets/images/loggia/interior-paints/murasmalt.webp",
          "photo": true,
          "group": "Indoor water paints",
          "description": [
            "Colours: white. Yield: 13 sqm/lt"
          ],
          "specs": [
            {
              "label": "Glossy · A7100000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "Glossy · A7100005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "Semi-gloss · A7300000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "Semi-gloss · A7300005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "Matt · A7200000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "Matt · A7200005",
              "value": "4 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/murasmalt/1.webp",
            "assets/images/loggia/interior-paints/murasmalt/2.webp",
            "assets/images/loggia/interior-paints/murasmalt/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=32&lang=0"
            },
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=34&lang=0"
            },
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=33&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A710000_7.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/murasmalt-2/"
        },
        {
          "id": "risanare-lavabile",
          "name": "Rehabilitate Washable",
          "tagline": "Washable acrylic sanitiser.",
          "image": "assets/images/loggia/interior-paints/risanare-lavabile.webp",
          "photo": true,
          "group": "Indoor water paints",
          "description": [
            "Prevents the formation of mould. Colours: white. Theoretical coverage: 11 sqm/lt.",
            "Colours: white. Theoretical coverage: 11 sqm/litre per coat."
          ],
          "specs": [
            {
              "label": "Renovation Washable · A3100000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "Renovation Washable · A3100005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "Semi-glossy · A31000L0",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "Semi-glossy · A31000L5",
              "value": "4 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/risanare-lavabile/1.webp",
            "assets/images/loggia/interior-paints/risanare-lavabile/2.webp",
            "assets/images/loggia/interior-paints/risanare-lavabile/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=31&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A310000_5.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/risanare-lavabile/"
        },
        {
          "id": "linea-bianca-tempera",
          "name": "Linea Bianca Tempera",
          "tagline": "Breathable water-based paint for ceilings.",
          "image": "assets/images/loggia/interior-paints/linea-bianca-tempera.webp",
          "photo": true,
          "group": "Indoor water paints",
          "description": [
            "Colours: white.Theoretical coverage: 6 sqm/lt. per coat"
          ],
          "specs": [
            {
              "label": "A5000000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A5000005",
              "value": "4 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/linea-bianca-tempera/1.webp",
            "assets/images/loggia/interior-paints/linea-bianca-tempera/2.webp",
            "assets/images/loggia/interior-paints/linea-bianca-tempera/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=81&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A500000_7.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/linea-bianca-tempera/"
        },
        {
          "id": "linea-bianca-semilavabile",
          "name": "Linea Bianca Semilavable",
          "tagline": "Breathable water-based paint for ceilings, bathrooms and kitchens.",
          "image": "assets/images/loggia/interior-paints/linea-bianca-semilavabile.webp",
          "photo": true,
          "group": "Indoor water paints",
          "description": [
            "Colours: white.Theoretical coverage: 6 sqm/lt. per coat"
          ],
          "specs": [
            {
              "label": "A5100000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A5100005",
              "value": "4 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/linea-bianca-semilavabile/1.webp",
            "assets/images/loggia/interior-paints/linea-bianca-semilavabile/2.webp",
            "assets/images/loggia/interior-paints/linea-bianca-semilavabile/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=82&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A510000_4.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/linea-bianca-semilavabile/"
        },
        {
          "id": "linea-bianca-lavabile",
          "name": "Linea Bianca Washable",
          "tagline": "Breathable water-based paint for walls in general.",
          "image": "assets/images/loggia/interior-paints/linea-bianca-lavabile.webp",
          "photo": true,
          "group": "Indoor water paints",
          "description": [
            "Colors: white.Theoretical yield: 8 sq.m./lt. per coat."
          ],
          "specs": [
            {
              "label": "A5200000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A5200005",
              "value": "4 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/linea-bianca-lavabile/1.webp",
            "assets/images/loggia/interior-paints/linea-bianca-lavabile/2.webp",
            "assets/images/loggia/interior-paints/linea-bianca-lavabile/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=83&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A520000_4.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/linea-bianca-lavabile/"
        },
        {
          "id": "risanare-steryl",
          "name": "Risanare Steryl",
          "tagline": "Washable breathable. Colours: white.",
          "image": "assets/images/loggia/interior-paints/risanare-steryl.webp",
          "photo": true,
          "group": "Eco line",
          "description": [
            "Theoretical yield: 8 mq./lt.",
            "Concentrated sanitising additive with a high-spectrum, effective and long-lasting active ingredient.Only suitable for good quality non-sanitising water paints where already purchased."
          ],
          "specs": [
            {
              "label": "A5140009",
              "value": "0.25 L · 8 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/risanare-steryl/1.webp",
            "assets/images/loggia/interior-paints/risanare-steryl/2.webp",
            "assets/images/loggia/interior-paints/risanare-steryl/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=461&lang=1"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/risanare-steryl/"
        },
        {
          "id": "risanare-acril",
          "name": "Risanare Acril",
          "tagline": "Washable breathable. Colours: white.",
          "image": "assets/images/loggia/interior-paints/risanare-acril.webp",
          "photo": true,
          "group": "Eco line",
          "description": [
            "Theoretical yield: 8 mq./lt.",
            "Super washable acrylic sanitiser with high coverage. Prevents the regeneration of fungal strains for a long time. Theoretical yield: 9 - 11 sqm/litre"
          ],
          "specs": [
            {
              "label": "A5150001",
              "value": "10 L · 1 piece per box"
            },
            {
              "label": "A5150005",
              "value": "4 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/risanare-acril/1.webp",
            "assets/images/loggia/interior-paints/risanare-acril/2.webp",
            "assets/images/loggia/interior-paints/risanare-acril/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=462&lang=1"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/risanare-acril/"
        },
        {
          "id": "risanare-termo",
          "name": "Risanare Termo",
          "tagline": "Washable breathable. Colours: white.",
          "image": "assets/images/loggia/interior-paints/risanare-termo.webp",
          "photo": true,
          "group": "Eco line",
          "description": [
            "Theoretical yield: 8 mq./lt.",
            "Anti-mould heat-insulating washable. Anti-condensation heat-insulating wall finish, it drastically reducesthermal conductivity by eliminating the thermal bridges that give rise to theformation of condensation. Ideal for renovating and insulating walls and ceilings in civil andindustrial environments subject to high concentrations of water vapour. Applied in several coatscan allow energy savings of up to 20%. Theoretical yield: 4-5 sqm/lt"
          ],
          "specs": [
            {
              "label": "A5160001",
              "value": "10 L · 1 piece per box"
            },
            {
              "label": "A5160005",
              "value": "4 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/risanare-termo/1.webp",
            "assets/images/loggia/interior-paints/risanare-termo/2.webp",
            "assets/images/loggia/interior-paints/risanare-termo/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=463&lang=1"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A516000_10.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/risanare-termo/"
        },
        {
          "id": "risanare-traspi",
          "name": "Risanare Traspi",
          "tagline": "Washable breathable. Colours: white.",
          "image": "assets/images/loggia/interior-paints/risanare-traspi.webp",
          "photo": true,
          "group": "Eco line",
          "description": [
            "Theoretical yield: 8 mq./lt.",
            "Breathable, sanitising, anti-mould finish. Sanitises and perfumes rooms,excellent coverage and whiteness. Transpiring and highly hygienic for interiors.Theoretical yield: 9 - 11 sqm/litre"
          ],
          "specs": [
            {
              "label": "A5170001",
              "value": "10 L · 1 piece per box"
            },
            {
              "label": "A5170005",
              "value": "4 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/risanare-traspi/1.webp",
            "assets/images/loggia/interior-paints/risanare-traspi/2.webp",
            "assets/images/loggia/interior-paints/risanare-traspi/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=464&lang=1"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/risanare-traspi/"
        },
        {
          "id": "risanare-cid",
          "name": "Risanare Cid",
          "tagline": "Washable breathable. Colours: white.",
          "image": "assets/images/loggia/interior-paints/risanare-cid.webp",
          "photo": true,
          "group": "Eco line",
          "description": [
            "Theoretical yield: 8 mq./lt.",
            "Highly concentrated anti-mould detergent.hygienic treatment with immediate action. Theoretical yield: variable, depending on the type of materialand the degree of surface contamination."
          ],
          "specs": [
            {
              "label": "A5110008",
              "value": "0.5 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/risanare-cid/1.webp",
            "assets/images/loggia/interior-paints/risanare-cid/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=458&lang=1"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A511000_11.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/risanare-cid/"
        },
        {
          "id": "risanare-stop",
          "name": "Risanare Stop",
          "tagline": "Washable breathable. Colours: white.",
          "image": "assets/images/loggia/interior-paints/risanare-stop.webp",
          "photo": true,
          "group": "Eco line",
          "description": [
            "Theoretical yield: 8 mq./lt.",
            "Long-lasting anti-mould protective agent. Acts in depth and protects surfaces fromfurther colonisation by mould. Theoretical yield: 14- 16 sqm/litre"
          ],
          "specs": [
            {
              "label": "A5120005",
              "value": "5 L · 1 piece per box"
            },
            {
              "label": "A5120007",
              "value": "1 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/risanare-stop/1.webp",
            "assets/images/loggia/interior-paints/risanare-stop/2.webp",
            "assets/images/loggia/interior-paints/risanare-stop/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=459&lang=1"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A512000_8.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/risanare-stop/"
        },
        {
          "id": "risanare-fix",
          "name": "Risanare Fix",
          "tagline": "Washable breathable. Colours: white.",
          "image": "assets/images/loggia/interior-paints/risanare-fix.webp",
          "photo": true,
          "group": "Eco line",
          "description": [
            "Theoretical yield: 8 mq./lt.",
            "Microemulsifying depth-consolidating sanitizer. Preserving action intime and also consolidating in depth. Dilution 1:1 - 1lt Water - 1lt Risanare Fix Theoretical yield: 8 - 10 sqm/lt"
          ],
          "specs": [
            {
              "label": "A5130005",
              "value": "5 L · 1 piece per box"
            },
            {
              "label": "A5130007",
              "value": "1 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/interior-paints/risanare-fix/1.webp",
            "assets/images/loggia/interior-paints/risanare-fix/2.webp",
            "assets/images/loggia/interior-paints/risanare-fix/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=460&lang=1"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A513000_6.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/risanare-fix/"
        }
      ]
    },
    {
      id: "exterior-paints",
      name: "Exterior Paints & Coatings",
      series: "Facades",
      summary: "Paints and thick coatings for facades: quartz, elastomeric, siloxane and silicate paints, scratched finishes and intonachini.",
      icon: "assets/images/loggia/exterior-paints/quarzo-liscio.webp",
      iconStyle: "photo",
      specNote: "Product codes and pack sizes as listed by Loggia. Colours and availability on request.",
      products: [
        {
          "id": "quarzo-liscio",
          "name": "Smooth Quartz",
          "tagline": "Professional fine quartz paint, high yield and coverage.",
          "image": "assets/images/loggia/exterior-paints/quarzo-liscio.webp",
          "photo": true,
          "group": "Outdoor water paints",
          "description": [
            "Colours: white. Theoretical coverage: 7 sqm/lt.",
            "Colours: white.Theoretical coverage: 7 sqm/litre per coat."
          ],
          "specs": [
            {
              "label": "A1100000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A1100005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A1100006",
              "value": "2.5 L · 1 piece per box"
            },
            {
              "label": "A12M0000",
              "value": "14 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/exterior-paints/quarzo-liscio/1.webp",
            "assets/images/loggia/exterior-paints/quarzo-liscio/2.webp",
            "assets/images/loggia/exterior-paints/quarzo-liscio/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=61&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A110000_5.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/quarzo-liscio/"
        },
        {
          "id": "quarzo-liscio-colorato",
          "name": "Smooth Coloured Quartz",
          "tagline": "Professional fine quartz coating, high yield and coverage.",
          "image": "assets/images/loggia/exterior-paints/quarzo-liscio-colorato.webp",
          "photo": true,
          "group": "Outdoor water paints",
          "description": [
            "Colours: standard. Theoretical coverage: 7 sqm/lt."
          ],
          "specs": [
            {
              "label": "A1200000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A1200005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A12M0000",
              "value": "14 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/exterior-paints/quarzo-liscio-colorato/1.webp",
            "assets/images/loggia/exterior-paints/quarzo-liscio-colorato/2.webp",
            "assets/images/loggia/exterior-paints/quarzo-liscio-colorato/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=62&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A120000_3.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/quarzo-liscio-colorato/"
        },
        {
          "id": "quarzo-bucciato",
          "name": "Textured Quartz",
          "tagline": "High-thickness, super-covering plastic coating.",
          "image": "assets/images/loggia/exterior-paints/quarzo-bucciato.webp",
          "photo": true,
          "group": "Outdoor water paints",
          "description": [
            "Colours: White. Theoretical Yield: 5-7 mq./lt.",
            "High-thickness, super-covering plastic coating.Colours: white. Theoretical yield: 5 mq./lt. per hand."
          ],
          "specs": [
            {
              "label": "A1300000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A1300005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A1300006",
              "value": "2.5 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/exterior-paints/quarzo-bucciato/1.webp",
            "assets/images/loggia/exterior-paints/quarzo-bucciato/2.webp",
            "assets/images/loggia/exterior-paints/quarzo-bucciato/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=63&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A130000_4.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/quarzo-bucciato/"
        },
        {
          "id": "tekno-q",
          "name": "Tekno Q",
          "tagline": "Medium grain quartz flour acrylic coating.",
          "image": "assets/images/loggia/exterior-paints/tekno-q.webp",
          "photo": true,
          "group": "Outdoor water paints",
          "description": [
            "Colours: as per colour chart. Theoretical coverage: 6-7 sqm/lt.",
            "Medium-grained quartz flour acrylic coating.Colours: white. Theoretical coverage: 6-7 sqm/lt. per coat."
          ],
          "specs": [
            {
              "label": "A1010000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A1010005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A101M000",
              "value": "14 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/exterior-paints/tekno-q/1.webp",
            "assets/images/loggia/exterior-paints/tekno-q/2.webp",
            "assets/images/loggia/exterior-paints/tekno-q/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=64&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A101000_6.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/tekno-q-2/"
        },
        {
          "id": "mister-quarzo-antialga-copy",
          "name": "Mister Quartz Anti-algae",
          "tagline": "Acrylic quartz flour coating.",
          "image": "assets/images/loggia/exterior-paints/mister-quarzo-antialga-copy.webp",
          "photo": true,
          "group": "Outdoor water paints",
          "description": [
            "Anti-algae and external mould, high yield and coverage. Colours: of folder. Theoretical yield: 7 sqm.",
            "Colors: white. Theoretical yield: 7 mq./lt. per hand."
          ],
          "specs": [
            {
              "label": "A1400000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A1400005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A14M0000",
              "value": "14 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/exterior-paints/mister-quarzo-antialga-copy/1.webp",
            "assets/images/loggia/exterior-paints/mister-quarzo-antialga-copy/2.webp",
            "assets/images/loggia/exterior-paints/mister-quarzo-antialga-copy/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://www.loggia.it/en/?wpdmdl=30525"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A140000_19.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/mister-quarzo-antialga-copy/"
        },
        {
          "id": "quarzo-plastico-lucido-vinilico",
          "name": "Glossy Vinyl Quartz",
          "tagline": "Glossy vinyl plastic coating.",
          "image": "assets/images/loggia/exterior-paints/quarzo-plastico-lucido-vinilico.webp",
          "photo": true,
          "group": "Outdoor water paints",
          "description": [
            "Colours: white. Theoretical coverage: 4-6 sqm/lt.",
            "Colours: as per colour chart.Theoretical coverage: 4-6 sqm/litre per coat."
          ],
          "specs": [
            {
              "label": "A6900003",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A6900005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A69M0003",
              "value": "14 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/exterior-paints/quarzo-plastico-lucido-vinilico/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=67&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/quarzo-plastico-lucido-vinilico/"
        },
        {
          "id": "impero-brill",
          "name": "Impero Brill",
          "tagline": "Glossy acrylic plastic coating, with textured or smooth effect.",
          "image": "assets/images/loggia/exterior-paints/impero-brill.webp",
          "photo": true,
          "group": "Outdoor water paints",
          "description": [
            "Colours: standard. Theoretical coverage: 6 sqm/lt."
          ],
          "specs": [
            {
              "label": "A1500003",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A1500005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A15M0000",
              "value": "14 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/exterior-paints/impero-brill/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=68&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A150000_4.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/impero-brill/"
        },
        {
          "id": "impero-matt-supercoprente-semilucido",
          "name": "Impero Matt Super Opaque",
          "tagline": "Semi-gloss acrylic plastic coating.",
          "image": "assets/images/loggia/exterior-paints/impero-matt-supercoprente-semilucido.webp",
          "photo": true,
          "group": "Outdoor water paints",
          "description": [
            "Colours: as per colour chart. Theoretical coverage: 6-8 sqm/lt.",
            "Semi-gloss acrylic plastic coating.Colours: White. Theoretical coverage: 6-8 sqm/lt. per coat."
          ],
          "specs": [
            {
              "label": "A2700003",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A2700005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A27M0000",
              "value": "14 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/exterior-paints/impero-matt-supercoprente-semilucido/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=69&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A270000_4.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/impero-matt-supercoprente-semilucido-2/"
        },
        {
          "id": "impero-quarzo",
          "name": "Impero Quartz Plus",
          "tagline": "Impero Quarzo is a super-covering plastic coating with very high yield and durability and coloured with invisible retouching.",
          "image": "assets/images/loggia/exterior-paints/impero-quarzo.webp",
          "photo": true,
          "group": "Outdoor water paints",
          "description": [
            "It has excellent coverage",
            "Colors: white. Theoretical yield: 8-10 mq./lt. per hand."
          ],
          "specs": [
            {
              "label": "Quartz Empire · A1600003",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "Quartz Empire · A1600005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "Quartz Empire · A16M0000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "Plus · A2070000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "Plus · A2070005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "Plus · A207M000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "Fund · A2080000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "Fund · A2080005",
              "value": "4 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/exterior-paints/impero-quarzo/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=474&lang=0"
            },
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=70&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A120000_3.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/impero-quarzo/"
        },
        {
          "id": "lavabile-elastomerica",
          "name": "Washable Elastomeric",
          "tagline": "Elastic paint for plasters or cements with cracks that cannot be filled (cobweb effect).",
          "image": "assets/images/loggia/exterior-paints/lavabile-elastomerica.webp",
          "photo": true,
          "group": "Outdoor water paints",
          "description": [
            "Colours: standard. Theoretical coverage: 7-8 sqm/lt.",
            "Colour: whiteTheoretical coverage: 9-10 sqm. per coat."
          ],
          "specs": [
            {
              "label": "A1930000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A1930005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A193M000",
              "value": "14 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/exterior-paints/lavabile-elastomerica/1.webp",
            "assets/images/loggia/exterior-paints/lavabile-elastomerica/2.webp",
            "assets/images/loggia/exterior-paints/lavabile-elastomerica/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=71&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/lavabile-elastomerica/"
        },
        {
          "id": "pittura-elastomerica",
          "name": "Elastomeric Paint",
          "tagline": "Elastic paint for plasters or cements with cracks that cannot be filled (cobweb effect).",
          "image": "assets/images/loggia/exterior-paints/pittura-elastomerica.webp",
          "photo": true,
          "group": "Outdoor water paints",
          "description": [
            "Colours: standard. Theoretical coverage: 7-8 sqm/lt.",
            "Colours: white.Theoretical coverage: 5-6 sqm. per coat"
          ],
          "specs": [
            {
              "label": "A4700000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A4700005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A47M0000",
              "value": "14 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/exterior-paints/pittura-elastomerica/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=72&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A470000_4.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/pittura-elastomerica/"
        },
        {
          "id": "quarzo-elastomerico",
          "name": "Elastomeric Quartz",
          "tagline": "Elastomeric plastic coating, resolving for walls with micro cracks.",
          "image": "assets/images/loggia/exterior-paints/quarzo-elastomerico.webp",
          "photo": true,
          "group": "Outdoor water paints",
          "description": [
            "Colours: White. Theoretical yield: 8-9 mq./lt.",
            "Colors: white. Theoretical yield: 5-6 mq./lt. per hand."
          ],
          "specs": [
            {
              "label": "A5900003",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A5900005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A59M0000",
              "value": "14 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/exterior-paints/quarzo-elastomerico/1.webp",
            "assets/images/loggia/exterior-paints/quarzo-elastomerico/2.webp",
            "assets/images/loggia/exterior-paints/quarzo-elastomerico/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=73&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A590000_4.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/quarzo-elastomerico/"
        },
        {
          "id": "calcecolor-linea-impero",
          "name": "Calcecolor Empire Line",
          "tagline": "Lime paint. Colours: White.",
          "image": "assets/images/loggia/exterior-paints/calcecolor-linea-impero.webp",
          "photo": true,
          "group": "Outdoor water paints",
          "description": [
            "Theoretical coverage: 4-5 sqm/lt.",
            "Colours: white. Theoretical coverage: 4-5 sqm/lt. per coat."
          ],
          "specs": [
            {
              "label": "A1900003",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A1900005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A19M0000",
              "value": "14 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/exterior-paints/calcecolor-linea-impero/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=74&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A190000_9.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/calcecolor-linea-impero/"
        },
        {
          "id": "silicolor-linea-impero",
          "name": "Silicolor Empire Line",
          "tagline": "Silicate paint. Colours: White.",
          "image": "assets/images/loggia/exterior-paints/silicolor-linea-impero.webp",
          "photo": true,
          "group": "Outdoor water paints",
          "description": [
            "Theoretical yield: 7-8 sq.m./lt.",
            "Colors: white. Theoretical yield: 7-8 mq./lt. per hand."
          ],
          "specs": [
            {
              "label": "A2000003",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A2000005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A20M0000",
              "value": "14 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/exterior-paints/silicolor-linea-impero/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=75&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A200000_4.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/silicolor-linea-impero/"
        },
        {
          "id": "totalsil",
          "name": "Totalsil",
          "tagline": "Silicate paint with universal anchorage where it is not possible to do a mineral cycle (on quartz).",
          "image": "assets/images/loggia/exterior-paints/totalsil.webp",
          "photo": true,
          "group": "Outdoor water paints",
          "description": [
            "Colours: White. Theoretical coverage: 7-8 sqm/lt.",
            "Colors: white. Theoretical yield: 7-8 mq./lt. per hand."
          ],
          "specs": [
            {
              "label": "A6400003",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A6400005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A64M0003",
              "value": "14 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/exterior-paints/totalsil/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=76&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A640000_3.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/totalsil/"
        },
        {
          "id": "pittura-acril-silossanica-plus-linea-impero",
          "name": "Acrylic Siloxane Paint",
          "tagline": "Acrylic - siloxanic water-repellent paint.",
          "image": "assets/images/loggia/exterior-paints/pittura-acril-silossanica-plus-linea-impero.webp",
          "photo": true,
          "group": "Outdoor water paints",
          "description": [
            "Colour: white. Theoretical yield: 7 mq./lt.",
            "High performance water-repellent acrylic - siloxane paint. Colour: white. Theoretical coverage: 7 sqm/lt. per coat."
          ],
          "specs": [
            {
              "label": "A2860000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A2860005",
              "value": "4 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/exterior-paints/pittura-acril-silossanica-plus-linea-impero/1.webp",
            "assets/images/loggia/exterior-paints/pittura-acril-silossanica-plus-linea-impero/2.webp",
            "assets/images/loggia/exterior-paints/pittura-acril-silossanica-plus-linea-impero/3.webp"
          ],
          "source": "https://www.loggia.it/en/prodotto/pittura-acril-silossanica-plus-linea-impero/"
        },
        {
          "id": "pittura-silossanica-linea-impero",
          "name": "Siloxane Paint",
          "tagline": "Silicone resin-based paint with high water repellency and water vapour diffusion.",
          "image": "assets/images/loggia/exterior-paints/pittura-silossanica-linea-impero.webp",
          "photo": true,
          "group": "Outdoor water paints",
          "description": [
            "Colour: white. Theoretical coverage: 8 mq./lt.",
            "Paint based on silicone resins with high water repellency and water-vapour permeability. Künzel diagram: Sd x W24 = 0.044 [< 0.2] kg/m/h0.5 (DIN 18550). Colour: white. Theoretical coverage: 9–10 m² per litre per coat."
          ],
          "specs": [
            {
              "label": "A3700003",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A3700005",
              "value": "4 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/exterior-paints/pittura-silossanica-linea-impero/1.webp",
            "assets/images/loggia/exterior-paints/pittura-silossanica-linea-impero/2.webp",
            "assets/images/loggia/exterior-paints/pittura-silossanica-linea-impero/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=79&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A370000_4.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/pittura-silossanica-linea-impero/"
        },
        {
          "id": "pliomarc-linea-impero",
          "name": "Pliomarc Empire Line",
          "tagline": "Pliolite coating. Colours: White.",
          "image": "assets/images/loggia/exterior-paints/pliomarc-linea-impero.webp",
          "photo": true,
          "group": "Outdoor water paints",
          "description": [
            "Theoretical coverage: 8 sqm/kg."
          ],
          "specs": [
            {
              "label": "A1800005",
              "value": "20 kg · 1 piece per box"
            },
            {
              "label": "A180000M",
              "value": "5 kg · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/exterior-paints/pliomarc-linea-impero/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=80&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A180000_9.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/pliomarc-linea-impero/"
        },
        {
          "id": "graffiato-linea-impero",
          "name": "Graffiato Linea Impero",
          "tagline": "Thick coating. Colours: white.",
          "image": "assets/images/loggia/exterior-paints/graffiato-linea-impero.webp",
          "photo": true,
          "group": "Thick coatings",
          "description": [
            "Theoretical coverage: 0.70-1.5 m²/kg depending on grain size and substrate."
          ],
          "specs": [
            {
              "label": "Scratched · A1700003",
              "value": "23 L · 1 piece per box"
            },
            {
              "label": "Scratched · A1700005",
              "value": "5 L · 1 piece per box"
            },
            {
              "label": "P/t base · L2PT1700",
              "value": "23 kg · 1 piece per box"
            },
            {
              "label": "P/t base · L2PT1705",
              "value": "5 kg · 1 piece per box"
            },
            {
              "label": "P/t base · L2PT1704",
              "value": "1 kg · 6 pieces per box"
            },
            {
              "label": "Base D/a · L2DA1700",
              "value": "22.3 kg · 1 piece per box"
            },
            {
              "label": "Base D/a · L2DA1705",
              "value": "4.85 kg · 1 piece per box"
            },
            {
              "label": "Base D/a · L2DA1704",
              "value": "0.97 kg · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/exterior-paints/graffiato-linea-impero/1.webp",
            "assets/images/loggia/exterior-paints/graffiato-linea-impero/2.webp",
            "assets/images/loggia/exterior-paints/graffiato-linea-impero/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=85&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A170000_5.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/graffiato-linea-impero/"
        },
        {
          "id": "effetto-rustico-leggero",
          "name": "Effetto Rustico Leggero",
          "tagline": "High-thickness, elastomeric, lightweight, anti-shrinkage and anti-crack coating for interior and exterior use.",
          "image": "assets/images/loggia/exterior-paints/effetto-rustico-leggero.webp",
          "photo": true,
          "group": "Thick coatings",
          "description": [
            "Colours: white for siloxane infill.",
            "High-thickness, lightweight, anti-shrinkage, crack-resistant elastomeric coating for interior and exterior use.",
            "Theoretical coverage: 2-3 l/sqm depending on grain and substrate. Grits: only 0,2-0,6 mm"
          ],
          "specs": [
            {
              "label": "A6800003",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A6800005",
              "value": "4 L · 1 piece per box"
            }
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=86&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A680000_4.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/effetto-rustico-leggero/"
        },
        {
          "id": "super-intonachino",
          "name": "Super Intonachini",
          "tagline": "Thick coating based on acrylsiloxy resins.",
          "image": "assets/images/loggia/exterior-paints/super-intonachino.webp",
          "photo": true,
          "group": "Thick coatings",
          "description": [
            "Colours: standard. Theoretical coverage: 1,5-3,5 kg/sqm depending on grain size and substrate. Grits: fine 0,6-0,8",
            "Colours: white.Theoretical coverage: 0.70-1.5 m²/kg. per coat.",
            "Colours: white.Theoretical coverage: 1.5-2 kg/sqm per coat depending on grit and substrate.Grits: fine 0.6-0.8 mm - medium 1.0-1.2 mm - large 1.5 mm",
            "Thick coating based on modified potassium silicate. Colours: white. Theoretical coverage: 1.5-2 kg/sq.m. per coat depending on grainand substrate. Grits: fine 0.6-0.8 mm - medium 1.0-1.2 mm - large 1.5 mm",
            "Thick coating based on acrylsiloxanic resins. Colours: white. Theoretical coverage: 1.5-2 kg/sq.m. per coat depending on grainand substrate. Grits: fine 0.6-0.8 mm - medium 1.0-1.2 mm - large 1.5 mm"
          ],
          "specs": [
            {
              "label": "Acrylic · A2100003",
              "value": "25 kg · 1 piece per box"
            },
            {
              "label": "Acrylic · A2100005",
              "value": "5 kg · 1 piece per box"
            },
            {
              "label": "Lime · A560000X",
              "value": "25 kg · 1 piece per box"
            },
            {
              "label": "Lime · A560000M",
              "value": "5 kg · 1 piece per box"
            },
            {
              "label": "Lime · a56m000X",
              "value": "25 kg · 1 piece per box"
            },
            {
              "label": "Silicate · A620000X",
              "value": "25 kg · 1 piece per box"
            },
            {
              "label": "Silicate · A620000M",
              "value": "5 kg · 1 piece per box"
            },
            {
              "label": "Silicate · a62m000X",
              "value": "25 kg · 1 piece per box"
            },
            {
              "label": "AcrilSiloxanic · A980000X",
              "value": "25 kg · 1 piece per box"
            },
            {
              "label": "AcrilSiloxanic · A980000M",
              "value": "5 kg · 1 piece per box"
            },
            {
              "label": "AcrilSiloxanic · a98m000X",
              "value": "25 kg · 1 piece per box"
            },
            {
              "label": "Siloxanes · A610000X",
              "value": "25 kg · 1 piece per box"
            },
            {
              "label": "Siloxanes · A610000M",
              "value": "5 kg · 1 piece per box"
            },
            {
              "label": "Siloxanes · a61m000X",
              "value": "25 kg · 1 piece per box"
            },
            {
              "label": "Acrylic Base · L2PT2100",
              "value": "25 kg · 1 piece per box"
            },
            {
              "label": "Acrylic Base · L2PT2105",
              "value": "5 kg · 1 piece per box"
            },
            {
              "label": "Acrylic Base · L2DA2100",
              "value": "24.25 kg · 1 piece per box"
            },
            {
              "label": "Acrylic Base · L2DA2105",
              "value": "4.85 kg · 1 piece per box"
            },
            {
              "label": "Silicate base · L2PT620X",
              "value": "25 kg · 1 piece per box"
            },
            {
              "label": "Silicate base · L2PT620M",
              "value": "5 kg · 1 piece per box"
            },
            {
              "label": "Silicate base · L2DA620X",
              "value": "24.25 kg · 1 piece per box"
            },
            {
              "label": "Silicate base · L2DA620M",
              "value": "4.85 kg · 1 piece per box"
            },
            {
              "label": "Lime Base · L2PT620X",
              "value": "25 kg · 1 piece per box"
            },
            {
              "label": "Lime Base · L2PT620M",
              "value": "5 kg · 1 piece per box"
            },
            {
              "label": "Lime Base · L2DA620X",
              "value": "24.25 kg · 1 piece per box"
            },
            {
              "label": "Lime Base · L2DA620M",
              "value": "4.85 kg · 1 piece per box"
            },
            {
              "label": "Siloxane base · L2PT610X",
              "value": "25 kg · 1 piece per box"
            }
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=88&lang=0"
            },
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=89&lang=0"
            },
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=90&lang=0"
            },
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=91&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/super-intonachino/"
        },
        {
          "id": "intonachino",
          "name": "Intonachini",
          "tagline": "Thick coating based on acrylsiloxy resins.",
          "image": "assets/images/loggia/exterior-paints/intonachino.webp",
          "photo": true,
          "group": "Thick coatings",
          "description": [
            "Colours: standard. Theoretical coverage: 1,5-3,5 kg/sqm depending on grain size and substrate. Grits: fine 0,6-0,8",
            "Thick coating based on slaked lime. Colours: white.Theoretical coverage: 1.5 - 2kg./sq.m. per coat depending on grain size and substrate.Grades: fine 0.6-0.8 mm - medium 1.0-1.2mm - large 1.5 mm",
            "Thick coating based on modified potassium silicate. Colours: white. Theoretical coverage: 1.5 - 2 kg/sqm per coat depending on grain size and substrate. Grits: Fine 0.6-0.8 mm -medium 1.0-1.2 mm - large 1.5 mm",
            "Thick coating based on acrylsiloxanic resins. Colours: white. Theoretical coverage:1,5 - 2 kg/sqm per coat depending on grain size and substrate. Grits: Fine 0.6-0.8 mm -medium 1.0-1.2 mm - large 1.5 mm",
            "Thick coating based on siloxanic resins. Colours: white. Theoretical coverage: 1.5 - 2kg/sqm per coat depending on grain size and substrate. Grits: fine 0.6-0.8 mm - medium 1.0-1.2mm - large 1.5 mm"
          ],
          "specs": [
            {
              "label": "Acrylic · A1730003",
              "value": "25 kg · 1 piece per box"
            },
            {
              "label": "Acrylic · A1730005",
              "value": "5 kg · 1 piece per box"
            },
            {
              "label": "Silicate · A174000X",
              "value": "25 kg · 1 piece per box"
            },
            {
              "label": "Silicate · A174000M",
              "value": "5 kg · 1 piece per box"
            },
            {
              "label": "AcrilSiloxanic · A175000X",
              "value": "25 kg · 1 piece per box"
            },
            {
              "label": "AcrilSiloxanic · A175000M",
              "value": "5 kg · 1 piece per box"
            },
            {
              "label": "Siloxanes · A176000X",
              "value": "25 kg · 1 piece per box"
            },
            {
              "label": "Siloxanes · A176000M",
              "value": "5 kg · 1 piece per box"
            },
            {
              "label": "Acrylic Base · L2PT1733",
              "value": "25 kg · 1 piece per box"
            },
            {
              "label": "Acrylic Base · L2PT1735",
              "value": "5 kg · 1 piece per box"
            },
            {
              "label": "Acrylic Base · L2DA1733",
              "value": "24.25 kg · 1 piece per box"
            },
            {
              "label": "Acrylic Base · L2DA1735",
              "value": "4.85 kg · 1 piece per box"
            },
            {
              "label": "Silicate base · L2PT174X",
              "value": "25 kg · 1 piece per box"
            },
            {
              "label": "Silicate base · L2PT174M",
              "value": "5 kg · 1 piece per box"
            },
            {
              "label": "Silicate base · L2DA174X",
              "value": "24.25 kg · 1 piece per box"
            },
            {
              "label": "Silicate base · L2DA174M",
              "value": "4.85 kg · 1 piece per box"
            },
            {
              "label": "Siloxane base · L2PT176X",
              "value": "25 kg · 1 piece per box"
            },
            {
              "label": "Siloxane base · L2PT176M",
              "value": "5 kg · 1 piece per box"
            },
            {
              "label": "Siloxane base · L2DA176X",
              "value": "24.25 kg · 1 piece per box"
            },
            {
              "label": "Siloxane base · L2DA176M",
              "value": "4.85 kg · 1 piece per box"
            },
            {
              "label": "Base Acrilsiloxanic · L2PT175X",
              "value": "25 kg · 1 piece per box"
            },
            {
              "label": "Base Acrilsiloxanic · L2PT175M",
              "value": "5 kg · 1 piece per box"
            },
            {
              "label": "Base Acrilsiloxanic · L2DA175X",
              "value": "24.25 kg · 1 piece per box"
            },
            {
              "label": "Base Acrilsiloxanic · L2DA175M",
              "value": "4.85 kg · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/exterior-paints/intonachino/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=93&lang=0"
            },
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=94&lang=0"
            },
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=95&lang=0"
            },
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=96&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/intonachino/"
        }
      ]
    },
    {
      id: "umana",
      name: "Umana Photocatalytic",
      series: "Air-purifying line",
      summary: "Photocatalytic paints that purify indoor air, breaking down smog, formaldehyde, bacteria, viruses and micro-organisms.",
      icon: "assets/images/loggia/umana/umana.webp",
      iconStyle: "photo",
      specNote: "Product codes and pack sizes as listed by Loggia. Colours and availability on request.",
      products: [
        {
          "id": "umana",
          "name": "Umana",
          "tagline": "Washable photocatalytic sanitizing nanotitanium paint, anti-mildew and anti-allergic bactericide.",
          "image": "assets/images/loggia/umana/umana.webp",
          "photo": true,
          "description": [
            "Theoretical yield: 10/11 sqm/lt. Colours: white.",
            "Nanotitanium hygienic, bactericidal, anti-mould and anti-allergenic photocatalytic washable paint.",
            "Resa teorica: 12-13 mq/lt. per mano. Colori: bianco."
          ],
          "specs": [
            {
              "label": "A9600001",
              "value": "10 L · 1 piece per box"
            },
            {
              "label": "A9600005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A9600006",
              "value": "2.5 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/umana/umana/1.webp",
            "assets/images/loggia/umana/umana/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=36&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A960000_10.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/umana/"
        },
        {
          "id": "umana-aria-nuova",
          "name": "Umana Aria Nuova",
          "tagline": "Washable photocatalytic sanitizing nanotitanium paint, anti-mildew and anti-allergic bactericide.",
          "image": "assets/images/loggia/umana/umana-aria-nuova.webp",
          "photo": true,
          "description": [
            "Theoretical yield: 10/11 sqm/lt. Colours: white.",
            "Photocatalytic, heat-insulating, anti-condensation and non-toxic washable paint for foodstuffs. Natural anti-bacterial, \"eats\" formaldehyde.",
            "Theoretical coverage 12 sqm/lt. per coat. 20% roller, 25% brush."
          ],
          "specs": [
            {
              "label": "A2250001",
              "value": "10 L · 1 piece per box"
            },
            {
              "label": "A2250005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A2250006",
              "value": "2.5 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/umana/umana-aria-nuova/1.webp",
            "assets/images/loggia/umana/umana-aria-nuova/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=37&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A225000_2.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/umana-aria-nuova/"
        },
        {
          "id": "umana-smalto-allacqua",
          "name": "Umana water-based enamel",
          "tagline": "Washable photocatalytic sanitizing nanotitanium paint, anti-mildew and anti-allergic bactericide.",
          "image": "assets/images/loggia/umana/umana-smalto-allacqua.webp",
          "photo": true,
          "description": [
            "Theoretical yield: 10/11 sqm/lt. Colours: white.",
            "Nanotitanium sanitizing water-based enamel, bactericide, anti-mould and anti-allergic."
          ],
          "specs": [
            {
              "label": "A9600SM6",
              "value": "2.5 L · 1 piece per box"
            },
            {
              "label": "A9600SM4",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "A9600SM8",
              "value": "0.5 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/umana/umana-smalto-allacqua/1.webp",
            "assets/images/loggia/umana/umana-smalto-allacqua/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=60&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/umana-smalto-allacqua/"
        },
        {
          "id": "umana-smalto-murale",
          "name": "Umana mural enamel",
          "tagline": "Concentrated dyes for water-based paints.",
          "image": "assets/images/loggia/umana/umana-smalto-murale.webp",
          "photo": true,
          "description": [
            "Water-based photocatalytic acrylic wall enamel for interiors both glossy and matte, featuring excellentdilatation and fast drying, non-yellowing. It is odorless, non-flammable, ideal forindoor application. Theoretical yield 14-16 sqm/lt"
          ],
          "specs": [
            {
              "label": "A96SMM01",
              "value": "10 L · 1 piece per box"
            },
            {
              "label": "A96SMM05",
              "value": "4 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/umana/umana-smalto-murale/1.webp",
            "assets/images/loggia/umana/umana-smalto-murale/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=60&lang=1"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A96SMM0_2.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/umana-smalto-murale/"
        },
        {
          "id": "umana-fondo-muro-e-legno",
          "name": "Umana bottom muro e legno",
          "tagline": "Concentrated dyes for water-based paints.",
          "image": "assets/images/loggia/umana/umana-fondo-muro-e-legno.webp",
          "photo": true,
          "description": [
            "Brushable, photocatalytic, synthetic cementitious filler primer. Theoretical yield 8-10 sq.m./lt. per coat"
          ],
          "specs": [
            {
              "label": "A96FLM06",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "A96FLM04",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "A96FLM08",
              "value": "0.5 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/umana/umana-fondo-muro-e-legno/1.webp",
            "assets/images/loggia/umana/umana-fondo-muro-e-legno/2.webp"
          ],
          "downloads": [
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A96FLM0_2.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/umana-fondo-muro-e-legno/"
        },
        {
          "id": "umana-antiruggine",
          "name": "Umana antiruggine",
          "tagline": "Concentrated dyes for water-based paints.",
          "image": "assets/images/loggia/umana/umana-antiruggine.webp",
          "photo": true,
          "description": [
            "High-coverage water-based anti-rust primer. Theoretical yield 10-12 sqm/lt per coat"
          ],
          "specs": [
            {
              "label": "A96ANT08",
              "value": "0.5 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/umana/umana-antiruggine/1.webp",
            "assets/images/loggia/umana/umana-antiruggine/2.webp"
          ],
          "source": "https://www.loggia.it/en/prodotto/umana-antiruggine/"
        },
        {
          "id": "umana-fissativo",
          "name": "Umana fixative",
          "tagline": "Washable photocatalytic sanitizing nanotitanium paint, anti-mildew and anti-allergic bactericide.",
          "image": "assets/images/loggia/umana/umana-fissativo.webp",
          "photo": true,
          "description": [
            "Theoretical yield: 10/11 sqm/lt. Colours: white.",
            "Theoretical yield (interior): 20 sqm/lt.Thinning 1:3"
          ],
          "specs": [
            {
              "label": "A9600FI5",
              "value": "5 L · 1 piece per box"
            },
            {
              "label": "A9600FI7",
              "value": "1 L · 20 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/umana/umana-fissativo/1.webp",
            "assets/images/loggia/umana/umana-fissativo/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=39&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/umana-fissativo/"
        },
        {
          "id": "umana-fissativo-termoisolante",
          "name": "Umana heat-insulating fixative",
          "tagline": "Washable photocatalytic sanitizing nanotitanium paint, anti-mildew and anti-allergic bactericide.",
          "image": "assets/images/loggia/umana/umana-fissativo-termoisolante.webp",
          "photo": true,
          "description": [
            "Theoretical yield: 10/11 sqm/lt. Colours: white.",
            "Photocatalytic acrylic fixative insulator with 3M® glass microspheres for Umana Aria Nuova .",
            "Theoretical coverage (indoor): 20 sqm/lt. Dilution 1:3"
          ],
          "specs": [
            {
              "label": "A2420000",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "A2420005",
              "value": "5 L · 1 piece per box"
            },
            {
              "label": "A2420007",
              "value": "1 L · 20 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/umana/umana-fissativo-termoisolante/1.webp",
            "assets/images/loggia/umana/umana-fissativo-termoisolante/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=40&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/umana-fissativo-termoisolante/"
        },
        {
          "id": "umana-smart",
          "name": "Umana Smart",
          "tagline": "Concentrated dyes for water-based paints.",
          "image": "assets/images/loggia/umana/umana-smart.webp",
          "photo": true,
          "description": [
            "Universal one-coat paint for wallsand plasterboard with photocatalytic properties.Theoretical yield 13 sq.m./lt. per coat."
          ],
          "specs": [
            {
              "label": "Smart · A3960001",
              "value": "10 L · 1 piece per box"
            },
            {
              "label": "Smart · A3960005",
              "value": "4 L · 2 pieces per box"
            },
            {
              "label": "Smart · A3960006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "Pigmented insulator · A96B2705",
              "value": "5 L · 1 piece per box"
            },
            {
              "label": "Pigmented insulator · A96B2707",
              "value": "1 L · 20 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/umana/umana-smart/1.webp",
            "assets/images/loggia/umana/umana-smart/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=41&lang=1"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A396000_4.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/umana-smart/"
        },
        {
          "id": "umana-guaina-vetrocamera",
          "name": "Umana double-glazing sheathing",
          "tagline": "Washable photocatalytic sanitizing nanotitanium paint, anti-mildew and anti-allergic bactericide.",
          "image": "assets/images/loggia/umana/umana-guaina-vetrocamera.webp",
          "photo": true,
          "description": [
            "Theoretical yield: 10/11 sqm/lt. Colours: white.",
            "Special photocatalytic coating enriched with hollow glass microspheres. It has ahigh solar reflectance index SRI. Ideal for waterproofing where you want toreduce the heating of buildings to achieve effective thermal insulation. Suitable on building roofs in general, old bituminous coverings, concrete slabs, metal canopies. Colours: White - Grey - Ox red - Ox green. Theoretical yield: 4 sqm/lt"
          ],
          "specs": [
            {
              "label": "A2220000",
              "value": "10 L · 1 piece per box"
            },
            {
              "label": "A2220005",
              "value": "4 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/umana/umana-guaina-vetrocamera/1.webp",
            "assets/images/loggia/umana/umana-guaina-vetrocamera/2.webp",
            "assets/images/loggia/umana/umana-guaina-vetrocamera/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=47&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/umana-guaina-vetrocamera/"
        },
        {
          "id": "umana-vetrocamera-acrilsilossanica",
          "name": "Umana acrilsillosanica double glazing",
          "tagline": "Washable photocatalytic sanitizing nanotitanium paint, anti-mildew and anti-allergic bactericide.",
          "image": "assets/images/loggia/umana/umana-vetrocamera-acrilsilossanica.webp",
          "photo": true,
          "description": [
            "Theoretical yield: 10/11 sqm/lt. Colours: white.",
            "Paint for exterior or interior use with 3M® hollow glass spheres with high reflectivity mSolar S.R.I., high breathability and water repellency. Photocatalytic. Energy saving of more than 20%. Colour: White. Theoretical yield: 10 sqm/lt"
          ],
          "specs": [
            {
              "label": "A2180000",
              "value": "10 L · 1 piece per box"
            },
            {
              "label": "A2180005",
              "value": "4 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/umana/umana-vetrocamera-acrilsilossanica/1.webp",
            "assets/images/loggia/umana/umana-vetrocamera-acrilsilossanica/2.webp",
            "assets/images/loggia/umana/umana-vetrocamera-acrilsilossanica/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=48&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A218000_3.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/umana-vetrocamera-acrilsilossanica/"
        },
        {
          "id": "umana-vetrointonaco",
          "name": "Umana glassintone",
          "tagline": "Washable photocatalytic sanitizing nanotitanium paint, anti-mildew and anti-allergic bactericide.",
          "image": "assets/images/loggia/umana/umana-vetrointonaco.webp",
          "photo": true,
          "description": [
            "Theoretical yield: 10/11 sqm/lt. Colours: white.",
            "Thick coating for outdoor use, thermal insulating with hollow spheres of 3M® glass with high COIBENTING properties. Photocatalytic . Savings energy content in excess of 20 %. Color: White. Yield: 1 sqm/kg"
          ],
          "specs": [
            {
              "label": "A2170000",
              "value": "10 L · 1 piece per box"
            },
            {
              "label": "A2170005",
              "value": "4 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/umana/umana-vetrointonaco/1.webp",
            "assets/images/loggia/umana/umana-vetrointonaco/2.webp",
            "assets/images/loggia/umana/umana-vetrointonaco/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=49&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A217000_2.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/umana-vetrointonaco/"
        },
        {
          "id": "umana-fissativo-termoisolante-building",
          "name": "Umana heat-insulating fixative (building)",
          "tagline": "Washable photocatalytic sanitizing nanotitanium paint, anti-mildew and anti-allergic bactericide.",
          "image": "assets/images/loggia/umana/umana-fissativo-termoisolante-building.webp",
          "photo": true,
          "description": [
            "Theoretical yield: 10/11 sqm/lt. Colours: white.",
            "Photocatalytic fixative primer for interior and exterior use. Produced with special acrylic resins, it is formulated with the addition of 3M® hollow glass microspheres, which provide thermal insulation, low water absorption and protection against humidity. The primer evens out the absorption of the substrate and consolidates the plaster."
          ],
          "specs": [
            {
              "label": "A2390000",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "A2390005",
              "value": "5 L · 1 piece per box"
            },
            {
              "label": "A2390007",
              "value": "1 L · 20 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/umana/umana-fissativo-termoisolante-building/1.webp",
            "assets/images/loggia/umana/umana-fissativo-termoisolante-building/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=50&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/umana-fissativo-termoisolante-building/"
        },
        {
          "id": "umana-acril-silossanica",
          "name": "Umana acrylic-siloxane",
          "tagline": "Washable photocatalytic sanitizing nanotitanium paint, anti-mildew and anti-allergic bactericide.",
          "image": "assets/images/loggia/umana/umana-acril-silossanica.webp",
          "photo": true,
          "description": [
            "Theoretical yield: 10/11 sqm/lt. Colours: white.",
            "Washable acrylsiloxane photocatalytic paint with nanotitanium, bactericidal, anti-mould and anti-allergic.Theoretical yield 7 sqm/litre per coat."
          ],
          "specs": [
            {
              "label": "A9600AS1",
              "value": "10 L · 1 piece per box"
            },
            {
              "label": "A9600AS5",
              "value": "4 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/umana/umana-acril-silossanica/1.webp",
            "assets/images/loggia/umana/umana-acril-silossanica/2.webp",
            "assets/images/loggia/umana/umana-acril-silossanica/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=51&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A9600AS_8.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/umana-acril-silossanica/"
        },
        {
          "id": "umana-minerale-ai-silicati",
          "name": "Umana silicate mineral",
          "tagline": "Washable photocatalytic sanitizing nanotitanium paint, anti-mildew and anti-allergic bactericide.",
          "image": "assets/images/loggia/umana/umana-minerale-ai-silicati.webp",
          "photo": true,
          "description": [
            "Theoretical yield: 10/11 sqm/lt. Colours: white.",
            "Washable silicate paint, photocatalytic, hygienic with nanotitanium, bactericidal, anti-mould and anti-allergic."
          ],
          "specs": [
            {
              "label": "A9600PS1",
              "value": "10 L · 1 piece per box"
            },
            {
              "label": "A9600PS5",
              "value": "4 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/umana/umana-minerale-ai-silicati/1.webp",
            "assets/images/loggia/umana/umana-minerale-ai-silicati/2.webp",
            "assets/images/loggia/umana/umana-minerale-ai-silicati/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=52&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A9600PS_5.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/umana-minerale-ai-silicati/"
        },
        {
          "id": "umana-trasparente-antigoccia",
          "name": "Umana transparent anti-drip",
          "tagline": "Washable photocatalytic sanitizing nanotitanium paint, anti-mildew and anti-allergic bactericide.",
          "image": "assets/images/loggia/umana/umana-trasparente-antigoccia.webp",
          "photo": true,
          "description": [
            "Theoretical yield: 10/11 sqm/lt. Colours: white.",
            "Transparent siloxanic with low dirt grip, water-repellent, photocatalytic. Formulated with resins containing special additives and silanes, they increase anchorage. Applied on stone, cement, it guarantees water repellency, protection and all the advantages of photocatalytic products.",
            "Theoretical yield: depends on the absorption of the support."
          ],
          "specs": [
            {
              "label": "A2210000",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "A2210005",
              "value": "5 L · 1 piece per box"
            },
            {
              "label": "A2210007",
              "value": "1 L · 20 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/umana/umana-trasparente-antigoccia/1.webp",
            "assets/images/loggia/umana/umana-trasparente-antigoccia/2.webp",
            "assets/images/loggia/umana/umana-trasparente-antigoccia/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=54&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A221000_5.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/umana-trasparente-antigoccia/"
        },
        {
          "id": "umana-clinic-new-air",
          "name": "Umana Clinic new air",
          "tagline": "Washable photocatalytic sanitizing nanotitanium paint, anti-mildew and anti-allergic bactericide.",
          "image": "assets/images/loggia/umana/umana-clinic-new-air.webp",
          "photo": true,
          "description": [
            "Theoretical yield: 10/11 sqm/lt. Colours: white.",
            "Photocatalytic, heat-insulating, anti-condensation and non-toxic washable paint for foodstuffs. Natural anti-bacterial, \"eats\" formaldehyde. With WITH TRIPLE DARK ACTIVE SYSTEM.",
            "Theoretical coverage 12 sqm/lt. per coat. 20% roller, 25% brush."
          ],
          "specs": [
            {
              "label": "A2350001",
              "value": "10 L · 1 piece per box"
            },
            {
              "label": "A2350005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A2350006",
              "value": "2.5 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/umana/umana-clinic-new-air/1.webp",
            "assets/images/loggia/umana/umana-clinic-new-air/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=42&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A235000_3.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/umana-clinic-new-air/"
        },
        {
          "id": "umana-clinic-fissativo-isolante",
          "name": "Umana Clinic insulating fixative",
          "tagline": "Washable photocatalytic sanitizing nanotitanium paint, anti-mildew and anti-allergic bactericide.",
          "image": "assets/images/loggia/umana/umana-clinic-fissativo-isolante.webp",
          "photo": true,
          "description": [
            "Theoretical yield: 10/11 sqm/lt. Colours: white.",
            "Photocatalytic acrylic fixative insulator for Umana Clinic New Air, with 3M® micro glass beads.",
            "Theoretical coverage (indoor): 20 sqm/lt. Dilution 1:3"
          ],
          "specs": [
            {
              "label": "A2430000",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "A2430005",
              "value": "5 L · 1 piece per box"
            },
            {
              "label": "A2430007",
              "value": "1 L · 20 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/umana/umana-clinic-fissativo-isolante/1.webp",
            "assets/images/loggia/umana/umana-clinic-fissativo-isolante/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=44&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/umana-clinic-fissativo-isolante/"
        },
        {
          "id": "umana-clinic-fissativo",
          "name": "Umana Clinic fixative",
          "tagline": "Washable photocatalytic sanitizing nanotitanium paint, anti-mildew and anti-allergic bactericide.",
          "image": "assets/images/loggia/umana/umana-clinic-fissativo.webp",
          "photo": true,
          "description": [
            "Theoretical yield: 10/11 sqm/lt. Colours: white.",
            "Theoretical coverage (indoors): 20 sqm/lt.Theoretical coverage (outdoors): 16 sqm/lt. Thinning 1:3"
          ],
          "specs": [
            {
              "label": "A2480005",
              "value": "5 L · 1 piece per box"
            },
            {
              "label": "A2480007",
              "value": "1 L · 20 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/umana/umana-clinic-fissativo/1.webp",
            "assets/images/loggia/umana/umana-clinic-fissativo/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=43&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/umana-clinic-fissativo/"
        },
        {
          "id": "umana-clinic-smalto",
          "name": "Umana Clinic enamel",
          "tagline": "Washable photocatalytic sanitizing nanotitanium paint, anti-mildew and anti-allergic bactericide.",
          "image": "assets/images/loggia/umana/umana-clinic-smalto.webp",
          "photo": true,
          "description": [
            "Theoretical yield: 10/11 sqm/lt. Colours: white.",
            "Nanotitanium sanitizing water-based enamel, bactericide, anti-mould and anti-allergic. with TRIPLE DARK ACTIVE system.Theoretical yield 10 sqm/lt. per hand."
          ],
          "specs": [
            {
              "label": "A2490006",
              "value": "2.5 L · 1 piece per box"
            },
            {
              "label": "A2490004",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "A2490008",
              "value": "0.5 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/umana/umana-clinic-smalto/1.webp",
            "assets/images/loggia/umana/umana-clinic-smalto/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=45&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/umana-clinic-smalto/"
        }
      ]
    },
    {
      id: "enamels",
      name: "Enamels, Sea & Industry",
      series: "Enamels & special lines",
      summary: "Enamels for every protection and design need, the Sea line for boats, pools and parquet, and the Industry line of food-safe paints, road marking and terrace coatings.",
      icon: "assets/images/loggia/enamels/roma-2000.webp",
      iconStyle: "photo",
      specNote: "Product codes and pack sizes as listed by Loggia. Colours and availability on request.",
      products: [
        {
          "id": "roma-2000",
          "name": "Roma 2000",
          "tagline": "Synthetic enamel with good coverage.",
          "image": "assets/images/loggia/enamels/roma-2000.webp",
          "photo": true,
          "group": "Enamels",
          "description": [
            "Colours: standard. Theoretical coverage: 10 sqm/lt.",
            "Colours: as per colour chart.Theoretical coverage: 10 sqm/litre per coat."
          ],
          "specs": [
            {
              "label": "D0000002",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "D0000005",
              "value": "5 L · 2 pieces per box"
            },
            {
              "label": "D0000006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "D0000004",
              "value": "0.75 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/enamels/roma-2000/1.webp",
            "assets/images/loggia/enamels/roma-2000/2.webp",
            "assets/images/loggia/enamels/roma-2000/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=270&lang=0"
            },
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=271&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_D000000_27.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/roma-2000/"
        },
        {
          "id": "brillantissimo",
          "name": "Brillantissimo",
          "tagline": "Glossy synthetic brush enamel, high coverage.",
          "image": "assets/images/loggia/enamels/brillantissimo.webp",
          "photo": true,
          "group": "Enamels",
          "description": [
            "Colours: as per colour chart. Theoretical coverage: 12 sqm/lt.",
            "Glossy synthetic urethane brush enamel, high coverage. Colours: dicartella. Theoretical coverage: 12 sqm/lt. per coat."
          ],
          "specs": [
            {
              "label": "D0100002",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "D0100005",
              "value": "5 L · 2 pieces per box"
            },
            {
              "label": "D0100006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "D0100004",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "D0100003",
              "value": "0.375 L · 6 pieces per box"
            },
            {
              "label": "D0100000",
              "value": "0.125 L · 12 pieces per box"
            },
            {
              "label": "Glossy bases · LP900006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "Glossy bases · LP900004",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "Glossy bases · LT900006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "Glossy bases · LT900004",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "Glossy bases · LD900006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "Glossy bases · LD900004",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "Glossy bases · LA900006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "Glossy bases · LA900004",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "Satin bases · LP800006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "Satin bases · LP800004",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "Satin bases · LT800006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "Satin bases · LT800004",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "Satin bases · LD800006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "Satin bases · LD800004",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "Satin bases · LA800006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "Satin bases · LA800004",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "Semi-gloss bases · LP290006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "Semi-gloss bases · LP290004",
              "value": "0.75 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/enamels/brillantissimo/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=272&lang=0"
            },
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=273&lang=0"
            },
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=274&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_D010000_12.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/brillantissimo/"
        },
        {
          "id": "oro-ricco",
          "name": "Oro Ricco",
          "tagline": "Synthetic enamel, gold effect.",
          "image": "assets/images/loggia/enamels/oro-ricco.webp",
          "photo": true,
          "group": "Enamels",
          "description": [
            "Synthetic enamel, gold effect."
          ],
          "specs": [
            {
              "label": "D0111114",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "D0111113",
              "value": "0.375 L · 6 pieces per box"
            },
            {
              "label": "D0111110",
              "value": "0.125 L · 12 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/enamels/oro-ricco/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=275&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_D011111_12.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/oro-ricco/"
        },
        {
          "id": "oro-pallido",
          "name": "Oro Pallido",
          "tagline": "Synthetic enamel, antique gold effect.",
          "image": "assets/images/loggia/enamels/oro-pallido.webp",
          "photo": true,
          "group": "Enamels",
          "description": [
            "Synthetic enamel, antique gold effect."
          ],
          "specs": [
            {
              "label": "D0122224",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "D0122223",
              "value": "0.375 L · 6 pieces per box"
            },
            {
              "label": "D0122220",
              "value": "0.125 L · 12 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/enamels/oro-pallido/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=276&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/oro-pallido/"
        },
        {
          "id": "argento",
          "name": "Silver",
          "tagline": "Synthetic enamel, silver effect.",
          "image": "assets/images/loggia/enamels/argento.webp",
          "photo": true,
          "group": "Enamels",
          "description": [
            "Synthetic enamel, silver effect."
          ],
          "specs": [
            {
              "label": "D0133334",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "D0133333",
              "value": "0.375 L · 6 pieces per box"
            },
            {
              "label": "D0133330",
              "value": "0.125 L · 12 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/enamels/argento/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=277&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_D013333_3.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/argento/"
        },
        {
          "id": "alluminio-argento",
          "name": "Aluminium Silver",
          "tagline": "Synthetic enamel, aluminium - silver effect.",
          "image": "assets/images/loggia/enamels/alluminio-argento.webp",
          "photo": true,
          "group": "Enamels",
          "description": [
            "Synthetic urethane enamel, aluminium silver effect."
          ],
          "specs": [
            {
              "label": "D0144444",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "D0144443",
              "value": "0.375 L · 6 pieces per box"
            },
            {
              "label": "D0144440",
              "value": "0.125 L · 12 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/enamels/alluminio-argento/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=278&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/alluminio-argento/"
        },
        {
          "id": "revolution",
          "name": "Revolution",
          "tagline": "Super glaze FOR ALL SURFACES: zinc, aluminium, iron, copper, wood and PVC.",
          "image": "assets/images/loggia/enamels/revolution.webp",
          "photo": true,
          "group": "Enamels",
          "description": [
            "Colours: as per colour chart. Theoretical coverage: 13-14 sqm/lt.",
            "Super enamel for all surfaces: zinc, aluminium, iron, copper, wood and PVC."
          ],
          "specs": [
            {
              "label": "D2400002",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "D2400005",
              "value": "5 L · 2 pieces per box"
            },
            {
              "label": "D2400006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "D2400004",
              "value": "0.75 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/enamels/revolution/1.webp",
            "assets/images/loggia/enamels/revolution/2.webp",
            "assets/images/loggia/enamels/revolution/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=280&lang=0"
            },
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=281&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A580000_6.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/revolution/"
        },
        {
          "id": "risolvo",
          "name": "Risolvo",
          "tagline": "Super Gel Nail Polish, directly on iron and wood rust, high solid.",
          "image": "assets/images/loggia/enamels/risolvo.webp",
          "photo": true,
          "group": "Enamels",
          "description": [
            "Colours: as per colour chart. Theoretical coverage: 12 sqm/lt",
            "One-coat synthetic urethane gel super enamel, directly on rust, ironand wood, high solid."
          ],
          "specs": [
            {
              "label": "D2300004",
              "value": "0.75 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/enamels/risolvo/1.webp",
            "assets/images/loggia/enamels/risolvo/2.webp",
            "assets/images/loggia/enamels/risolvo/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=282&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_D230000_14.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/risolvo/"
        },
        {
          "id": "unico",
          "name": "Unique",
          "tagline": "Water-based, eco-friendly, non-toxic, odourless enamel.",
          "image": "assets/images/loggia/enamels/unico.webp",
          "photo": true,
          "group": "Enamels",
          "description": [
            "Colours: standard. Theoretical coverage: 10 mq./lt.",
            "Single-coat synthetic urethane enamel for galvanised sheet metal and light alloys."
          ],
          "specs": [
            {
              "label": "D0400002",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "D0400005",
              "value": "5 L · 2 pieces per box"
            },
            {
              "label": "D0400006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "D0400004",
              "value": "0.75 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/enamels/unico/1.webp",
            "assets/images/loggia/enamels/unico/2.webp",
            "assets/images/loggia/enamels/unico/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=475&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_D040000_15.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/unico/"
        },
        {
          "id": "antiquites",
          "name": "Antiquites",
          "tagline": "Micaceous iron enamel with an anti-effect effect.",
          "image": "assets/images/loggia/enamels/antiquites.webp",
          "photo": true,
          "group": "Enamels",
          "description": [
            "Colours: of folder. Theoretical yield: 8 mq./lt.",
            "Micaceous iron urethane synthetic enamel with antique effect.Colours: as per colour chart. Theoretical coverage: 8 sqm/lt. per coat."
          ],
          "specs": [
            {
              "label": "D0500002",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "D0500006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "D0500004",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "Base 1 · LA160006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "Base 1 · LA160004",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "Base 2 · LA170006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "Base 2 · LA170004",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "Base 3 · LA180006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "Base 3 · LA180004",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "Base 4 · LA190006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "Base 4 · LA190004",
              "value": "0.75 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/enamels/antiquites/1.webp",
            "assets/images/loggia/enamels/antiquites/2.webp",
            "assets/images/loggia/enamels/antiquites/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=283&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_D050000_15.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/antiquites/"
        },
        {
          "id": "alluminio-a-t",
          "name": "Aluminium A.t",
          "tagline": "High-temperature resistant paint based on silicone resins and aluminium, resistant to 600°C.",
          "image": "assets/images/loggia/enamels/alluminio-a-t.webp",
          "photo": true,
          "group": "Enamels",
          "description": [
            "Theoretical yield: 10-12 sqm/lt.",
            "Very high temperature resistant paint based on silicone resins and aluminium, resistant to 600° C."
          ],
          "specs": [
            {
              "label": "Aluminium AT · E4500002",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "Aluminium AT · E4500005",
              "value": "5 L · 2 pieces per box"
            },
            {
              "label": "Aluminium AT · E4500004",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "Black · E45000N2",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "Black · E45000N5",
              "value": "5 L · 2 pieces per box"
            },
            {
              "label": "Black · E45000N4",
              "value": "0.75 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/enamels/alluminio-a-t/1.webp",
            "assets/images/loggia/enamels/alluminio-a-t/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=284&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_E450000_4.pdf"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_E45000N_4.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/alluminio-a-t/"
        },
        {
          "id": "flavia",
          "name": "Flavia",
          "tagline": "Water-based, eco-friendly, non-toxic, odourless enamel.",
          "image": "assets/images/loggia/enamels/flavia.webp",
          "photo": true,
          "group": "Enamels",
          "description": [
            "Colours: standard. Theoretical coverage: 10 mq./lt.",
            "Eco-friendly, water-based, non-toxic, odourless enamel."
          ],
          "specs": [
            {
              "label": "D0300002",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "D0300005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "D0300006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "D0300004",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "Glossy bases · LP120006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "Glossy bases · LP120004",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "Glossy bases · LP120002",
              "value": "0.2 L · 8 pieces per box"
            },
            {
              "label": "Glossy bases · LT120006",
              "value": "2.43 L · 2 pieces per box"
            },
            {
              "label": "Glossy bases · LT120004",
              "value": "0.73 L · 6 pieces per box"
            },
            {
              "label": "Glossy bases · LT120002",
              "value": "0.194 L · 8 pieces per box"
            },
            {
              "label": "Glossy bases · LD120006",
              "value": "2.37 L · 2 pieces per box"
            },
            {
              "label": "Glossy bases · LD120004",
              "value": "0.71 L · 6 pieces per box"
            },
            {
              "label": "Glossy bases · LD120002",
              "value": "0.19 L · 8 pieces per box"
            },
            {
              "label": "Glossy bases · LA120006",
              "value": "2.33 L · 2 pieces per box"
            },
            {
              "label": "Glossy bases · LA120004",
              "value": "0.7 L · 6 pieces per box"
            },
            {
              "label": "Glossy bases · LA120002",
              "value": "0.186 L · 8 pieces per box"
            },
            {
              "label": "Satin bases · LP130006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "Satin bases · LP130004",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "Satin bases · LP130002",
              "value": "0.2 L · 8 pieces per box"
            },
            {
              "label": "Satin bases · LT130006",
              "value": "2.43 L · 2 pieces per box"
            },
            {
              "label": "Satin bases · LT130004",
              "value": "0.73 L · 6 pieces per box"
            },
            {
              "label": "Satin bases · LT130002",
              "value": "0.194 L · 8 pieces per box"
            },
            {
              "label": "Satin bases · LD130006",
              "value": "2.37 L · 2 pieces per box"
            },
            {
              "label": "Satin bases · LD130004",
              "value": "0.71 L · 6 pieces per box"
            },
            {
              "label": "Satin bases · LD130002",
              "value": "0.19 L · 8 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/enamels/flavia/1.webp",
            "assets/images/loggia/enamels/flavia/2.webp",
            "assets/images/loggia/enamels/flavia/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=285&lang=0"
            },
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=286&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_D030000_6.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/flavia/"
        },
        {
          "id": "eko-cover-smalto-allacqua",
          "name": "Eko-cover Smalto All'acqua",
          "tagline": "High-temperature resistant paint based on silicone resins and aluminium, resistant to 600°C.",
          "image": "assets/images/loggia/enamels/eko-cover-smalto-allacqua.webp",
          "photo": true,
          "group": "Enamels",
          "description": [
            "Theoretical yield: 10-12 sqm/lt.",
            "Eco-friendly, water-based, non-toxic, odourless enamel."
          ],
          "specs": [
            {
              "label": "Eko-cover · D1240000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "Eko-cover · D1240005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "Eko-cover · D1240006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "Eko-cover · D1240004",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "Polished Base · LPT12406",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "Polished Base · LPT12404",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "Polished Base · LDA12406",
              "value": "2.33 L · 2 pieces per box"
            },
            {
              "label": "Polished Base · LDA12404",
              "value": "0.7 L · 6 pieces per box"
            },
            {
              "label": "Base Satin · LPT13406",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "Base Satin · LPT13404",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "Base Satin · LDA13406",
              "value": "2.33 L · 2 pieces per box"
            },
            {
              "label": "Base Satin · LDA13404",
              "value": "0.7 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/enamels/eko-cover-smalto-allacqua/1.webp",
            "assets/images/loggia/enamels/eko-cover-smalto-allacqua/2.webp",
            "assets/images/loggia/enamels/eko-cover-smalto-allacqua/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=287&lang=0"
            },
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=288&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/eko-cover-smalto-allacqua/"
        },
        {
          "id": "xxl",
          "name": "XXL",
          "tagline": "Waterborne urethane enamel for indoor and outdoor finishing based on water-thinnable acrylic urethane resins.",
          "image": "assets/images/loggia/enamels/xxl.webp",
          "photo": true,
          "group": "Enamels",
          "description": [
            "Colours: OX4 colours bundle."
          ],
          "specs": [
            {
              "label": "D3100006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "D3100004",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "P/t base · LPT31006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "P/t base · LPT31004",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "Base D/a · LDA31006",
              "value": "2.33 L · 2 pieces per box"
            },
            {
              "label": "Base D/a · LDA31004",
              "value": "0.7 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/enamels/xxl/1.webp",
            "assets/images/loggia/enamels/xxl/2.webp",
            "assets/images/loggia/enamels/xxl/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=289&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_D310000_5.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/xxl/"
        },
        {
          "id": "power-protection",
          "name": "Power Protection",
          "tagline": "High protection synthetic rust preventative brush.",
          "image": "assets/images/loggia/enamels/power-protection.webp",
          "photo": true,
          "group": "Enamels",
          "description": [
            "Colours: grey, red. Theoretical coverage: 8 sqm/lt.",
            "Two-component water-based polyurethane enamel, matt and glossy, for wood and parquet."
          ],
          "specs": [
            {
              "label": "Glossy · D1270006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "Glossy · D1270007",
              "value": "1 L · 6 pieces per box"
            },
            {
              "label": "Matt · D12700S6",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "Matt · D12700S7",
              "value": "1 L · 6 pieces per box"
            },
            {
              "label": "Polished catalyst · D1290006",
              "value": "0.6 L · 2 pieces per box"
            },
            {
              "label": "Polished catalyst · D1290007",
              "value": "0.24 L · 6 pieces per box"
            },
            {
              "label": "Opaque hardener · D12900S6",
              "value": "0.25 L · 2 pieces per box"
            },
            {
              "label": "Opaque hardener · D12900S7",
              "value": "0.1 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/enamels/power-protection/1.webp",
            "assets/images/loggia/enamels/power-protection/2.webp",
            "assets/images/loggia/enamels/power-protection/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=290&lang=0"
            },
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=291&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/power-protection/"
        },
        {
          "id": "cromatica",
          "name": "Chromatics",
          "tagline": "Cromatica is a water-based acrylic enamel for interior and exterior use.",
          "image": "assets/images/loggia/enamels/cromatica.webp",
          "photo": true,
          "group": "Enamels",
          "description": [
            "It has excellent gloss, is non-yellowing and dries quickly. Enamel with"
          ],
          "specs": [
            {
              "label": "D3200003",
              "value": "0.5 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/enamels/cromatica/1.webp",
            "assets/images/loggia/enamels/cromatica/2.webp",
            "assets/images/loggia/enamels/cromatica/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=292&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/cromatica/"
        },
        {
          "id": "vita-nuova",
          "name": "Vita Nuova",
          "tagline": "Vitanuova® is a two-component water-based enamel for interior use.",
          "image": "assets/images/loggia/enamels/vita-nuova.webp",
          "photo": true,
          "group": "Enamels",
          "description": [
            "It is ideal for concrete and stoneware floors, masonry, ceramic tiles, ceramic sanitary wareporcelain, bathtubs and also wood, steel,glass, stainless steel and galvanised sheet metal.",
            "Colours: as per colour chart. Yieldtheoretical 8-10 sqm/lt. per coat."
          ],
          "specs": [
            {
              "label": "D1150006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "D1150004",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "Catalyst · E1150007",
              "value": "0.933 L · 2 pieces per box"
            },
            {
              "label": "Catalyst · E1150008",
              "value": "0.28 L · 6 pieces per box"
            },
            {
              "label": "White acrylic finish · D1190006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "White acrylic finish · D1190004",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "Transparent polyurethane finish · D1180006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "Transparent polyurethane finish · D1180004",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "Bases · LP115006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "Bases · LP115004",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "Bases · LD115006",
              "value": "2.256 L · 2 pieces per box"
            },
            {
              "label": "Bases · LD115004",
              "value": "0.658 L · 6 pieces per box"
            },
            {
              "label": "Bases · LA115006",
              "value": "2.169 L · 2 pieces per box"
            },
            {
              "label": "Bases · LA115004",
              "value": "0.63 L · 6 pieces per box"
            },
            {
              "label": "Bases · E1150007",
              "value": "0.933 L · 2 pieces per box"
            },
            {
              "label": "Bases · E1150008",
              "value": "0.28 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/enamels/vita-nuova/1.webp",
            "assets/images/loggia/enamels/vita-nuova/2.webp",
            "assets/images/loggia/enamels/vita-nuova/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=293&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/vita-nuova/"
        },
        {
          "id": "acrilfond",
          "name": "Acrilfond",
          "tagline": "acrylicfond, anticorrosive primer for hulls, both in wood and metal and fibreglass.",
          "image": "assets/images/loggia/enamels/acrilfond.webp",
          "photo": true,
          "group": "Sea line",
          "description": [
            "An anticorrosive primer for hulls, both in wood and metal and fibreglass."
          ],
          "specs": [
            {
              "label": "E180000S",
              "value": "20 kg · 1 piece per box"
            },
            {
              "label": "E180000M",
              "value": "5 kg · 2 pieces per box"
            },
            {
              "label": "E180000F",
              "value": "1 kg · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/enamels/acrilfond/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=315&lang=1"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/acrilfond/"
        },
        {
          "id": "acrildur",
          "name": "Acrildur",
          "tagline": "Acrildur . Enamel for blankets and bathroom dries.",
          "image": "assets/images/loggia/enamels/acrildur.webp",
          "photo": true,
          "group": "Sea line",
          "description": [
            "Acrildur . Enamel for blankets and bathroom dries."
          ],
          "specs": [
            {
              "label": "E190000S",
              "value": "20 kg · 1 piece per box"
            },
            {
              "label": "E190000M",
              "value": "5 kg · 2 pieces per box"
            },
            {
              "label": "E190000F",
              "value": "1 kg · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/enamels/acrildur/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=316&lang=1"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/acrildur/"
        },
        {
          "id": "poliresin",
          "name": "Polyresin",
          "tagline": "Poliresin. Polyester resin kit with glass wool.",
          "image": "assets/images/loggia/enamels/poliresin.webp",
          "photo": true,
          "group": "Sea line",
          "description": [
            "Catalysis: 1.5% with peroxide cat."
          ],
          "specs": [
            {
              "label": "E350000S",
              "value": "20 kg · 1 piece per box"
            },
            {
              "label": "E350000M",
              "value": "5 kg · 2 pieces per box"
            },
            {
              "label": "E350000F",
              "value": "1 kg · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/enamels/poliresin/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=317&lang=1"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/poliresin2012-12-06-10-05-152141013868/"
        },
        {
          "id": "acril-trasp",
          "name": "Acril-trasp",
          "tagline": "acrylic clearcoat FOR PARQUET.",
          "image": "assets/images/loggia/enamels/acril-trasp.webp",
          "photo": true,
          "group": "Sea line",
          "description": [
            "Catalysis: 50% with cat. 4852. Theoretical coverage: 14 sqm/lt."
          ],
          "specs": [
            {
              "label": "H0200002",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "H0200005",
              "value": "5 L · 2 pieces per box"
            },
            {
              "label": "H0200004",
              "value": "0.75 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/enamels/acril-trasp/1.webp",
            "assets/images/loggia/enamels/acril-trasp/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=319&lang=1"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/acril-trasp/"
        },
        {
          "id": "gommalack-pur",
          "name": "Gommalack-pur",
          "tagline": "Gommalack-Pur, pure chlorinated rubber enamel FOR POOLS.",
          "image": "assets/images/loggia/enamels/gommalack-pur.webp",
          "photo": true,
          "group": "Sea line",
          "description": [
            "Colours: RAL colours. Theoretical coverage: 10 mq./lt.",
            "Gommalack-pur is thepure chlorinatedenamelfor swimming pools.Colours: RAL colours. Theoretical coverage: 10 sqm/lt."
          ],
          "specs": [
            {
              "label": "E1600002",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "E1600005",
              "value": "5 L · 2 pieces per box"
            },
            {
              "label": "E1600006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "E1600004",
              "value": "0.75 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/enamels/gommalack-pur/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=321&lang=1"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_E160000_5.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/gommalack-pur/"
        },
        {
          "id": "pliomarc-piscine",
          "name": "Pliomarc Swimming Pools",
          "tagline": "Gommalack-Pur, pure chlorinated rubber enamel FOR POOLS.",
          "image": "assets/images/loggia/enamels/pliomarc-piscine.webp",
          "photo": true,
          "group": "Sea line",
          "description": [
            "Colours: RAL colours. Theoretical coverage: 10 mq./lt.",
            "Solvent-based plastic paint, formulated with special pliolite resins, light-stable pigments and selected fillers. Suitable for the protection of highly aggressive structures. Excellent as a swimming pool finish. Recommended as a coating on old and new plasters and floors, industrial floors, concrete and asphalttennis and five-a-side football pitches."
          ],
          "specs": [
            {
              "label": "E670000S",
              "value": "20 kg · 1 piece per box"
            },
            {
              "label": "E670000M",
              "value": "5 kg · 2 pieces per box"
            },
            {
              "label": "E670000F",
              "value": "1 kg · 2 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/enamels/pliomarc-piscine/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=322&lang=1"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_E670000_6.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/pliomarc-piscine/"
        },
        {
          "id": "ceramipox",
          "name": "Ceramipox",
          "tagline": "Ceramipox, solvent-free glaze (with certification).",
          "image": "assets/images/loggia/enamels/ceramipox.webp",
          "photo": true,
          "group": "Industry line",
          "description": [
            "Colours: White. Catalysis: 5/1 with cat. EP148. Theoretical coverage: 6 sqm/Kg",
            "Solvent-free vitrifying enamel (with certification)."
          ],
          "specs": [
            {
              "label": "E260000X",
              "value": "25 kg · 1 piece per box"
            },
            {
              "label": "E260000M",
              "value": "5 kg · 2 pieces per box"
            },
            {
              "label": "E260000G",
              "value": "2.5 kg · 2 pieces per box"
            },
            {
              "label": "E260000F",
              "value": "1 kg · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/enamels/ceramipox/1.webp",
            "assets/images/loggia/enamels/ceramipox/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=323&lang=1"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_E260000_4.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/ceramipox2012-12-06-10-05-151166640264/"
        },
        {
          "id": "verniroad-rifra",
          "name": "Verniroad-rifra",
          "tagline": "Verniroad-Rifra, REFRIGERATING traffic paint.",
          "image": "assets/images/loggia/enamels/verniroad-rifra.webp",
          "photo": true,
          "group": "Industry line",
          "description": [
            "Colours: white, yellow. Theoretical yield: 7 mq./kg."
          ],
          "specs": [
            {
              "label": "E310000Z",
              "value": "30 kg · 1 piece per box"
            },
            {
              "label": "E310000M",
              "value": "5 kg · 2 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/enamels/verniroad-rifra/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=324&lang=1"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/verniroad-rifra2012-12-06-10-05-15437459209/"
        },
        {
          "id": "verniroad",
          "name": "Verniroad",
          "tagline": "Verniroad, Traffic island paint.",
          "image": "assets/images/loggia/enamels/verniroad.webp",
          "photo": true,
          "group": "Industry line",
          "description": [
            "Colours: white, yellow. Theoretical coverage: 7 sqm/kg."
          ],
          "specs": [
            {
              "label": "E320000Z",
              "value": "30 kg · 1 piece per box"
            },
            {
              "label": "E320000M",
              "value": "5 kg · 2 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/enamels/verniroad/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=326&lang=1"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_E320000_8.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/verniroad2012-12-06-10-05-151924812789/"
        },
        {
          "id": "verniroad-blu",
          "name": "Verniroad-blu",
          "tagline": "Verniroad-Blue, Traffic island paint.",
          "image": "assets/images/loggia/enamels/verniroad-blu.webp",
          "photo": true,
          "group": "Industry line",
          "description": [
            "Colours: blue. Theoretical coverage: 7 sqm/kg."
          ],
          "specs": [
            {
              "label": "E330000Z",
              "value": "30 kg · 1 piece per box"
            },
            {
              "label": "E330000M",
              "value": "5 kg · 2 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/enamels/verniroad-blu/1.webp",
            "assets/images/loggia/enamels/verniroad-blu/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=325&lang=1"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/verniroad-blu2012-12-06-10-05-151236782786/"
        },
        {
          "id": "allubim",
          "name": "Allubim",
          "tagline": "Allubim, Bituminous aluminium.",
          "image": "assets/images/loggia/enamels/allubim.webp",
          "photo": true,
          "group": "Industry line",
          "description": [
            "Allubim, Bituminous aluminium."
          ],
          "specs": [
            {
              "label": "H0300002",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "H0300005",
              "value": "5 L · 2 pieces per box"
            },
            {
              "label": "H0300006",
              "value": "2.5 L · 2 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/enamels/allubim/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=327&lang=1"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/allubim/"
        }
      ]
    },
    {
      id: "surface-preparation",
      name: "Surface Preparation",
      series: "Technical products",
      summary: "Technical products for preparing and protecting surfaces: insulators and fixatives, primers, wood impregnants, rust protection, sheaths, anti-graffiti, thinners and dyes.",
      icon: "assets/images/loggia/surface-preparation/fissamur.webp",
      iconStyle: "photo",
      specNote: "Product codes and pack sizes as listed by Loggia. Colours and availability on request.",
      products: [
        {
          "id": "fissamur",
          "name": "Fissamur",
          "tagline": "Vinyl fixative insulator.",
          "image": "assets/images/loggia/surface-preparation/fissamur.webp",
          "photo": true,
          "group": "Insulators & fixatives",
          "description": [
            "Insulating vinyl fixative. Theoretical coverage: 20 sqm/litre indoors - Theoretical coverage: 16 sqm/litre outdoorsThinning 1:3"
          ],
          "specs": [
            {
              "label": "B0100000",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "B0100003",
              "value": "10 L · 1 piece per box"
            },
            {
              "label": "B0100005",
              "value": "5 L · 1 piece per box"
            },
            {
              "label": "B0100007",
              "value": "1 L · 20 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/fissamur/1.webp",
            "assets/images/loggia/surface-preparation/fissamur/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=107&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_B010000_6.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/fissamur/"
        },
        {
          "id": "fissamur-concentrated",
          "name": "Fissamur Concentrated",
          "tagline": "Concentrated vinyl fixative insulator.",
          "image": "assets/images/loggia/surface-preparation/fissamur-concentrated.webp",
          "photo": true,
          "group": "Insulators & fixatives",
          "description": [
            "Theoretical yield: 12-16 mq./lt. Dilution up to 1:8",
            "Concentrated vinyl fixative insulator.Theoretical yield: 20 sq.m./l. inside - Theoretical yield: 16 sq.m./l. outsideDilution 1:8"
          ],
          "specs": [
            {
              "label": "B1800000",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "B1800003",
              "value": "10 L · 1 piece per box"
            },
            {
              "label": "B1800005",
              "value": "5 L · 1 piece per box"
            },
            {
              "label": "B1800007",
              "value": "1 L · 20 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/fissamur-concentrated/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=108&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_B180000_4.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/fissamur-concentrated-2/"
        },
        {
          "id": "fissacril",
          "name": "Fissacril",
          "tagline": "Acrylic fixative insulator.",
          "image": "assets/images/loggia/surface-preparation/fissacril.webp",
          "photo": true,
          "group": "Insulators & fixatives",
          "description": [
            "Theoretical yield: 8-10 mq./lt.",
            "Acrylic fixative insulator. Theoretical coverage: 20 sqm/litre indoors - Theoretical coverage: 16 sqm/litre outdoorsThinning 1:3"
          ],
          "specs": [
            {
              "label": "B0200000",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "B0200003",
              "value": "10 L · 1 piece per box"
            },
            {
              "label": "B0200005",
              "value": "5 L · 1 piece per box"
            },
            {
              "label": "B0200007",
              "value": "1 L · 20 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/fissacril/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=109&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_B020000_10.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/fissacril/"
        },
        {
          "id": "fissacril-concentrated",
          "name": "Fixacrylic Concentrated",
          "tagline": "Concentrated acrylic fixative insulator.",
          "image": "assets/images/loggia/surface-preparation/fissacril-concentrated.webp",
          "photo": true,
          "group": "Insulators & fixatives",
          "description": [
            "Theoretical coverage: 12-16 sqm/lt. Dilution up to 1:8",
            "Concentrated acrylic fixative insulation.Theoretical coverage: 20 sqm/litre indoors - Theoretical coverage: 16 sqm/litre outdoorsThinning 1:8"
          ],
          "specs": [
            {
              "label": "B1900000",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "B1900003",
              "value": "10 L · 1 piece per box"
            },
            {
              "label": "B1900005",
              "value": "5 L · 1 piece per box"
            },
            {
              "label": "B1900007",
              "value": "1 L · 20 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/fissacril-concentrated/1.webp",
            "assets/images/loggia/surface-preparation/fissacril-concentrated/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=110&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_B190000_6.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/fissacril-concentrated-2/"
        },
        {
          "id": "fissacril-sanificante",
          "name": "Fissacril Sanitizer",
          "tagline": "Concentrated acrylic fixative insulator.",
          "image": "assets/images/loggia/surface-preparation/fissacril-sanificante.webp",
          "photo": true,
          "group": "Insulators & fixatives",
          "description": [
            "Theoretical coverage: 12-16 sqm/lt. Dilution up to 1:8",
            "Anti-mould acrylic fixative insulator.Theoretical coverage: 8-10 sqm/lt.Thinning: 1:1 to 1:3 with water depending on substrate absorption."
          ],
          "specs": [
            {
              "label": "B2600000",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "B2600003",
              "value": "10 L · 1 piece per box"
            },
            {
              "label": "B2600005",
              "value": "5 L · 1 piece per box"
            },
            {
              "label": "B2600007",
              "value": "1 L · 20 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/fissacril-sanificante/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=111&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_B260000_9.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/fissacril-sanificante/"
        },
        {
          "id": "isolante-eco-i-colori-di-andrea",
          "name": "Eco Insulation - The Colors OF Andrea",
          "tagline": "Fixative insulation formulated with new generation resins.",
          "image": "assets/images/loggia/surface-preparation/isolante-eco-i-colori-di-andrea.webp",
          "photo": true,
          "group": "Insulators & fixatives",
          "description": [
            "ECO-COMPATIBLE. Theoretical coverage: 15 sqm/lt.",
            "Fixative insulation formulated with new generation resins.Eco-friendly.",
            "Theoretical yield (indoors): 20 m²/litre. Theoretical coverage (exterior): 16 sqm/lt. Dilution 1:3"
          ],
          "specs": [
            {
              "label": "B1300000",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "B1300005",
              "value": "5 L · 1 piece per box"
            },
            {
              "label": "B1300007",
              "value": "1 L · 20 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/isolante-eco-i-colori-di-andrea/1.webp",
            "assets/images/loggia/surface-preparation/isolante-eco-i-colori-di-andrea/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=112&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_B130000_4.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/isolante-eco-i-colori-di-andrea/"
        },
        {
          "id": "fissacal",
          "name": "Fissacal",
          "tagline": "Fixative insulator, for lime paints.",
          "image": "assets/images/loggia/surface-preparation/fissacal.webp",
          "photo": true,
          "group": "Insulators & fixatives",
          "description": [
            "Theoretical yield: 6-7 mq./lt.",
            "Isolating fixative, for lime paints. Theoretical coverage (indoors): 20 sqm/lt.Theoretical coverage (outdoors): 16 sqm/lt. Thinning 1:3"
          ],
          "specs": [
            {
              "label": "B0900000",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "B0900005",
              "value": "5 L · 1 piece per box"
            },
            {
              "label": "B0900007",
              "value": "1 L · 20 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/fissacal/1.webp",
            "assets/images/loggia/surface-preparation/fissacal/2.webp",
            "assets/images/loggia/surface-preparation/fissacal/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=113&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_B090000_6.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/fissacal/"
        },
        {
          "id": "silprimer",
          "name": "Silprimer",
          "tagline": "Silicate dye fixative.",
          "image": "assets/images/loggia/surface-preparation/silprimer.webp",
          "photo": true,
          "group": "Insulators & fixatives",
          "description": [
            "Theoretical yield: 8-10 mq./lt."
          ],
          "specs": [
            {
              "label": "B0400000",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "B0400005",
              "value": "5 L · 1 piece per box"
            },
            {
              "label": "B0400007",
              "value": "1 L · 20 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/silprimer/1.webp",
            "assets/images/loggia/surface-preparation/silprimer/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=114&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_B040000_3.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/silprimer/"
        },
        {
          "id": "isolante-silossanico",
          "name": "Siloxane Insulation",
          "tagline": "Isolating fixative for siloxane paints.",
          "image": "assets/images/loggia/surface-preparation/isolante-silossanico.webp",
          "photo": true,
          "group": "Insulators & fixatives",
          "description": [
            "Theoretical coverage: 12-14 sqm/lt.",
            "Theoretical coverage (indoors): 20 sqm/lt.Theoretical coverage (outdoors): 16 sqm/lt. Thinning 1:3"
          ],
          "specs": [
            {
              "label": "B1100003",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "B1100005",
              "value": "5 L · 1 piece per box"
            },
            {
              "label": "B1100001",
              "value": "1 L · 20 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/isolante-silossanico/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=115&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_B110000_4.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/isolante-silossanico/"
        },
        {
          "id": "isolante-acrilsilossanico",
          "name": "Acrylsiloxane Insulation",
          "tagline": "Isolating fixative for siloxane paints.",
          "image": "assets/images/loggia/surface-preparation/isolante-acrilsilossanico.webp",
          "photo": true,
          "group": "Insulators & fixatives",
          "description": [
            "Theoretical coverage: 12-14 sqm/lt.",
            "Theoretical coverage (indoors): 20 sqm/lt.Theoretical coverage (outdoors): 16 sqm/lt. Thinning 1:3"
          ],
          "specs": [
            {
              "label": "B3200000",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "B3200005",
              "value": "5 L · 1 piece per box"
            },
            {
              "label": "B3200007",
              "value": "1 L · 20 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/isolante-acrilsilossanico/1.webp",
            "assets/images/loggia/surface-preparation/isolante-acrilsilossanico/2.webp",
            "assets/images/loggia/surface-preparation/isolante-acrilsilossanico/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=491&lang=1"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/isolante-acrilsilossanico/"
        },
        {
          "id": "pliosolv",
          "name": "Pliosolv",
          "tagline": "Solvent-based acrylic fixative, based on PLIOLITE resins.",
          "image": "assets/images/loggia/surface-preparation/pliosolv.webp",
          "photo": true,
          "group": "Insulators & fixatives",
          "description": [
            "Micromolecular with very high penetration. Theoretical coverage: 15 sqm/lt."
          ],
          "specs": [
            {
              "label": "B0800002",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "B0800005",
              "value": "5 L · 1 piece per box"
            },
            {
              "label": "B080004",
              "value": "0.75 L · 6 pieces per box"
            }
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=116&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_B080000_4.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/pliosolv/"
        },
        {
          "id": "pliosol-s",
          "name": "Pliosol-s",
          "tagline": "INERTISING INERTISING FOR A LOVE.",
          "image": "assets/images/loggia/surface-preparation/pliosol-s.webp",
          "photo": true,
          "group": "Insulators & fixatives",
          "description": [
            "Micromolecular with very high penetration and blocking. Theoretical yield: 15 mq./lt.",
            "Inert asbestos impregnating agent. Micromolecularwith very high penetration and locking."
          ],
          "specs": [
            {
              "label": "B1000002",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "B1000005",
              "value": "5 L · 1 piece per box"
            }
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=117&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_B100000_4.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/pliosol-s/"
        },
        {
          "id": "fondo-elastomerico",
          "name": "Elastomeric Primer",
          "tagline": "Fibre reinforced primer for cycle with elastomeric paint.",
          "image": "assets/images/loggia/surface-preparation/fondo-elastomerico.webp",
          "photo": true,
          "group": "Insulators & fixatives",
          "description": [
            "Theoretical yield: 8-9 sqm./lt.",
            "Fibre-reinforced primer for elastomeric paint.Theoretical coverage: 5-6 sqm/litre."
          ],
          "specs": [
            {
              "label": "B1400000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "B1400005",
              "value": "4 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/fondo-elastomerico/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=118&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/fondo-elastomerico/"
        },
        {
          "id": "fondo-elastomerico-silossanico",
          "name": "Siloxane Elastomeric Primer",
          "tagline": "Fibre-reinforced primer based on siloxane binders for cycle with elastomeric paint.",
          "image": "assets/images/loggia/surface-preparation/fondo-elastomerico-silossanico.webp",
          "photo": true,
          "group": "Insulators & fixatives",
          "description": [
            "Theoretical yield 5-6 sqm/l"
          ],
          "specs": [
            {
              "label": "B2100000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "B2100005",
              "value": "4 L · 1 piece per box"
            }
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=119&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/fondo-elastomerico-silossanico-2/"
        },
        {
          "id": "fondo-di-contatto-acrilico",
          "name": "Acrylic Contact Primer",
          "tagline": "Bottom layer between synthetic paints and mineral paints.",
          "image": "assets/images/loggia/surface-preparation/fondo-di-contatto-acrilico.webp",
          "photo": true,
          "group": "Insulators & fixatives",
          "description": [
            "Antimicrocavitation. Product based on organic binders. Colour. White or pigmented on request. Theoretical yield: 4 - 5 sqm/lt.",
            "Bonding primer between synthetic and mineral paints.Anti-cracking. Product based on organic binders.",
            "Colour: Whiteor pigmented on request. Theoretical coverage: 4-5 sqm/lt."
          ],
          "specs": [
            {
              "label": "B1600000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "B1600005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "B16000F0",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "B16000F5",
              "value": "4 L · 1 piece per box"
            }
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=120&lang=0"
            },
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=121&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_B160000_4.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/fondo-di-contatto-acrilico/"
        },
        {
          "id": "fondo-di-contatto-linea-impero",
          "name": "Empire Line Contact Bottom",
          "tagline": "Bottom layer between synthetic paints and mineral paints.",
          "image": "assets/images/loggia/surface-preparation/fondo-di-contatto-linea-impero.webp",
          "photo": true,
          "group": "Insulators & fixatives",
          "description": [
            "Antimicrocavitation. Product based on potassium silicate and organic binders. Colour. White or pigmented on request. Theoretical yield: 0,8 - 1 sqm/lt.",
            "Bonding primer between synthetic and mineral paints.Anti-cracking. Product based on potassium silicate and organic binders.organic binders.",
            "Colour: White or pigmented on request. Theoretical yield: 4-5 sqm/lt."
          ],
          "specs": [
            {
              "label": "B1500003",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "B1500005",
              "value": "4 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/fondo-di-contatto-linea-impero/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=122&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_B150000_2.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/fondo-di-contatto-linea-impero/"
        },
        {
          "id": "rain-protex",
          "name": "Rain Protex",
          "tagline": "Concentrated acrylic fixative insulator.",
          "image": "assets/images/loggia/surface-preparation/rain-protex.webp",
          "photo": true,
          "group": "Insulators & fixatives",
          "description": [
            "Theoretical coverage: 12-16 sqm/lt. Dilution up to 1:8",
            "Siloxane clear coat with low dirt pick-up, formulated with resins containing special additives and silanes, which increase anchorage. Applied on stone, cement,it guarantees water repellency, protection and all the advantages of photocatalytic products. Yieldtheoretical: depends on the absorption of the substrate."
          ],
          "specs": [
            {
              "label": "A1560001",
              "value": "10 L · 1 piece per box"
            },
            {
              "label": "A1560005",
              "value": "5 L · 1 piece per box"
            },
            {
              "label": "A1560007",
              "value": "1 L · 20 pieces per box"
            },
            {
              "label": "No Water · B2400001",
              "value": "10 L · 10 pieces per box"
            },
            {
              "label": "No Water · B2400005",
              "value": "5 L · 1 piece per box"
            },
            {
              "label": "No Water · B2400007",
              "value": "1 L · 20 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/rain-protex/1.webp",
            "assets/images/loggia/surface-preparation/rain-protex/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=123&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A156000_4.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/rain-protex/"
        },
        {
          "id": "silinew",
          "name": "Silinew",
          "tagline": "Silicone impregnating agent, colourless.",
          "image": "assets/images/loggia/surface-preparation/silinew.webp",
          "photo": true,
          "group": "Insulators & fixatives",
          "description": [
            "Water-repellent for mineral-based materials with absorbent power. Theoretical coverage: 15 sqm/lt."
          ],
          "specs": [
            {
              "label": "B0500002",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "B0500005",
              "value": "5 L · 2 pieces per box"
            },
            {
              "label": "B0500007",
              "value": "1 L · 20 pieces per box"
            }
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=124&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_B050000_5.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/silinew/"
        },
        {
          "id": "idrostop",
          "name": "Hydrostop",
          "tagline": "Courtesy treatment. Protective regenerating anti-water regenerating non flaky.",
          "image": "assets/images/loggia/surface-preparation/idrostop.webp",
          "photo": true,
          "group": "Insulators & fixatives",
          "description": [
            "Theoretical yield: 8-10 mq./lt.",
            "Courtesy treatment. Protective regenerating non flaky anti-water."
          ],
          "specs": [
            {
              "label": "B0600002",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "B0600005",
              "value": "5 L · 2 pieces per box"
            },
            {
              "label": "B0600004",
              "value": "0.75 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/idrostop/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=125&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_B060000_4.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/idrostop/"
        },
        {
          "id": "rustik",
          "name": "Rustik",
          "tagline": "Treatment for terracotta.",
          "image": "assets/images/loggia/surface-preparation/rustik.webp",
          "photo": true,
          "group": "Insulators & fixatives",
          "description": [
            "High resistance to trampling. Theoretical yield: 15 mq./lt."
          ],
          "specs": [
            {
              "label": "B0700002",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "B0700005",
              "value": "5 L · 2 pieces per box"
            },
            {
              "label": "B0700004",
              "value": "0.75 L · 6 pieces per box"
            }
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=126&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_B070000_7.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/rustik/"
        },
        {
          "id": "rustik-fughe-per-terazzi",
          "name": "Rustik Terrazzo Joints",
          "tagline": "Joint treatment for terraces.",
          "image": "assets/images/loggia/surface-preparation/rustik-fughe-per-terazzi.webp",
          "photo": true,
          "group": "Insulators & fixatives",
          "description": [
            "Treatment for terracotta. High resistance to trampling."
          ],
          "specs": [
            {
              "label": "B1700002",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "B1700005",
              "value": "5 L · 2 pieces per box"
            },
            {
              "label": "B1700007",
              "value": "0.75 L · 6 pieces per box"
            }
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=127&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/rustik-fughe-per-terazzi/"
        },
        {
          "id": "fugasalnitro",
          "name": "Fugasalnitro",
          "tagline": "Ready-to-use solution to remove saltpetre stains, overpaintable.",
          "image": "assets/images/loggia/surface-preparation/fugasalnitro.webp",
          "photo": true,
          "group": "Insulators & fixatives",
          "description": [
            "Theoretical yield: 8-10 sqm./lt.",
            "Ready-to-use solution for removing saltpetre stains, overpaintable."
          ],
          "specs": [
            {
              "label": "B1200003",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "B1200005",
              "value": "5 L · 2 pieces per box"
            },
            {
              "label": "B1200001",
              "value": "1 L · 20 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/fugasalnitro/1.webp",
            "assets/images/loggia/surface-preparation/fugasalnitro/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=128&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_B120000_3.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/fugasalnitro/"
        },
        {
          "id": "isol-45",
          "name": "Isol 45",
          "tagline": "Solvent-based fixing agent for crumbling walls.",
          "image": "assets/images/loggia/surface-preparation/isol-45.webp",
          "photo": true,
          "group": "Insulators & fixatives",
          "description": [
            "Theoretical coverage: 15 sqm/lt."
          ],
          "specs": [
            {
              "label": "B0300002",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "B0300005",
              "value": "5 L · 2 pieces per box"
            },
            {
              "label": "B0300007",
              "value": "1 L · 20 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/isol-45/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=416&lang=1"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_B030000_10.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/isol-45/"
        },
        {
          "id": "lattiflex",
          "name": "Lattiflex",
          "tagline": "Concentrated acrylic fixative insulator.",
          "image": "assets/images/loggia/surface-preparation/lattiflex.webp",
          "photo": true,
          "group": "Insulators & fixatives",
          "description": [
            "Theoretical coverage: 12-16 sqm/lt. Dilution up to 1:8",
            "Consolidating agent for cement and plaster based on inorganic compounds and additives with highwith high penetrating power.",
            "Theoretical coverage: 0.5 - 1 litre per square metre depending on substrate absorption."
          ],
          "specs": [
            {
              "label": "B2200000",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "B2200005",
              "value": "5 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/lattiflex/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=129&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/lattiflex/"
        },
        {
          "id": "muffa-cid",
          "name": "Muffa Cid",
          "tagline": "Anti-mould liquid for wall surfaces, sanitizing.",
          "image": "assets/images/loggia/surface-preparation/muffa-cid.webp",
          "photo": true,
          "group": "Insulators & fixatives",
          "description": [
            "Theoretical yield: 16 sqm/lt.",
            "Anti-mould liquid for wall surfaces, sanitizing.Ready to use. Theoretical yield: 4-5 sqm./lt."
          ],
          "specs": [
            {
              "label": "A3000005",
              "value": "5 L · 1 piece per box"
            },
            {
              "label": "A3000007",
              "value": "1 L · 20 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/muffa-cid/1.webp",
            "assets/images/loggia/surface-preparation/muffa-cid/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=130&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A300000_9.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/muffa-cid/"
        },
        {
          "id": "sterylpaint",
          "name": "Sterylpaint",
          "tagline": "Biocidal additive for water-based paints.",
          "image": "assets/images/loggia/surface-preparation/sterylpaint.webp",
          "photo": true,
          "group": "Insulators & fixatives",
          "description": [
            "Dose for a 14 lt. pack of water paint."
          ],
          "specs": [
            {
              "label": "B2000002",
              "value": "0.2 L · 8 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/sterylpaint/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=131&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_B200000_2.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/sterylpaint-2/"
        },
        {
          "id": "prima-fond",
          "name": "First Fund",
          "tagline": "Prima Fond - Primer for Platinum Silver and Gold, Waxed Marble, Antique Marble.",
          "image": "assets/images/loggia/surface-preparation/prima-fond.webp",
          "photo": true,
          "group": "Primers",
          "description": [
            "Theoretical yield: 0.5 sqm/kg.",
            "Waxed Marble - Antique Marble - Platinum Gold - Platinum Silver",
            "Colourable primer to be used as a base coat on prepared walls. Theoretical coverage: 6 sqm/lt"
          ],
          "specs": [
            {
              "label": "A189000X",
              "value": "25 kg · 1 piece per box"
            },
            {
              "label": "A189000M",
              "value": "5 kg · 1 piece per box"
            },
            {
              "label": "A189000G",
              "value": "2.5 kg · 2 pieces per box"
            },
            {
              "label": "A189000F",
              "value": "1 kg · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/prima-fond/1.webp",
            "assets/images/loggia/surface-preparation/prima-fond/2.webp",
            "assets/images/loggia/surface-preparation/prima-fond/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=262&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/prima-fond/"
        },
        {
          "id": "universal-primer",
          "name": "Universal Primer",
          "tagline": "Universal primer, colourable acrylic primer to be used as a primer coat on walls prepared with Primer P3D wall, before Plasma 3D.",
          "image": "assets/images/loggia/surface-preparation/universal-primer.webp",
          "photo": true,
          "group": "Primers",
          "description": [
            "Plasma 3D - Plasma 3D Fusion - Plasma 3D i Marmi - Vanesia - Vanesia Glitter OroVanesia Glitter Argento - Vanesia Oro - Velluto Fiorentino - Velluto Fiorentino Glitter oroVelluto Fiorentino Glitter Argento - Velluto Fiorentino Oro - Seta d'AutoreSeta d'Autore Glitter oro - Seta d'Autore Glitter Argento - Dorotea Silver/GoldSeta d'Autore Oro - Stucco Antico - Kymera - Diamond Oro - Diamond ArgentoFashion - Perlato - Pearl Gold - Maxipearl - Waxed Effect - Luminor GoldLuminor Silver - Jeans Effect - Sharki - Sharki Gold - Sharki SilverSharki Silver Diamond - Sharki Gold Diamond Gold GlitterSharki Gold Diamond Glitter Silver - Sharki CloudSharki cloud silver - Sharki cloud gold - Sharki cast gold baseSharki aluminium base - Sharki copper base - Sharki bronze baseSharki satin base - Pure Gold - Diamond Gold - Replay",
            "Colourable acrylic primer to be used as a primer on prepared walls. Theoretical coverage: 12-14 sqm/lt. per coat."
          ],
          "specs": [
            {
              "label": "A4400005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A4400006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "A4400004",
              "value": "0.75 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/universal-primer/1.webp",
            "assets/images/loggia/surface-preparation/universal-primer/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=264&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/universal-primer/"
        },
        {
          "id": "intermedial-p3d-floor",
          "name": "Intermedial P3D Floor",
          "tagline": "Intermedial P3D floor Intermediate primer that can be coloured to be used as a primer on floors prepared with Epoxy Glazier",
          "image": "assets/images/loggia/surface-preparation/intermedial-p3d-floor.webp",
          "photo": true,
          "group": "Primers",
          "description": [
            "Intermedial P3D floor Intermediate primer that can be coloured to be used as a primer on floors prepared with Epoxy Glazier",
            "Plasma 3D, Plasma 3D Fusion, BiMetal, Plasma 3D i Marmi",
            "Intermediate primer that can be coloured for use as a primer on floorsor on wood before 3D plasma."
          ],
          "specs": [
            {
              "label": "A3040005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A3040006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "A3040004",
              "value": "0.75 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/intermedial-p3d-floor/1.webp",
            "assets/images/loggia/surface-preparation/intermedial-p3d-floor/2.webp",
            "assets/images/loggia/surface-preparation/intermedial-p3d-floor/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=265&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/intermedial-p3d-floor/"
        },
        {
          "id": "maxi-fond",
          "name": "Maxi Fond",
          "tagline": "Maxi Fond Fondo for Kymera, Domus Aurea, Domus Diamante Oro, Domus Diamante Argento, Domus Oro, Domus Argento, Domus Noir,",
          "image": "assets/images/loggia/surface-preparation/maxi-fond.webp",
          "photo": true,
          "group": "Primers",
          "description": [
            "Maxi Fond Fondo for Kymera, Domus Aurea, Domus Diamante Oro, Domus Diamante Argento, Domus Oro, Domus Argento, Domus Noir,",
            "Kymera Domus Aurea - Domus Diamante Oro Domus Diamante Argento - Domus Oro Domus Argento - Domus Noir - Domus Metallica - Domus Antique Pelle di Luna - Solaria Estasia Oro - Hellenica - Imprinting Stone",
            "Colourable primer for use as a primer on prepared walls.on prepared walls."
          ],
          "specs": [
            {
              "label": "A1910000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A1910005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A1910006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "A1910004",
              "value": "0.75 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/maxi-fond/1.webp",
            "assets/images/loggia/surface-preparation/maxi-fond/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=266&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/maxi-fond-2/"
        },
        {
          "id": "fond-plus",
          "name": "Fond Plus",
          "tagline": "Roman Marble, Moonskin, Hellenic, Precious Gold, Starlight, Silver Fashion.",
          "image": "assets/images/loggia/surface-preparation/fond-plus.webp",
          "photo": true,
          "group": "Primers",
          "description": [
            "Theoretical yield: 7 sq.m./kg.",
            "Roman Marble - Moon SkinHellenica - Precious GoldStarlight - Umana Silver - Montenapoleone",
            "Colourable primer for use as a primer on prepared walls.on prepared walls."
          ],
          "specs": [
            {
              "label": "A1920000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A1920005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A1920006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "A1920004",
              "value": "0.75 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/fond-plus/1.webp",
            "assets/images/loggia/surface-preparation/fond-plus/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=267&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/fond-plus/"
        },
        {
          "id": "fondo-town",
          "name": "Bottom Town",
          "tagline": "Maxi Fond Fondo for Kymera, Domus Aurea, Domus Diamante Oro, Domus Diamante Argento, Domus Oro, Domus Argento, Domus Noir,",
          "image": "assets/images/loggia/surface-preparation/fondo-town.webp",
          "photo": true,
          "group": "Primers",
          "description": [
            "Maxi Fond Fondo for Kymera, Domus Aurea, Domus Diamante Oro, Domus Diamante Argento, Domus Oro, Domus Argento, Domus Noir,",
            "Colourable primer to be used as a base coat for Keytownon prepared walls."
          ],
          "specs": [
            {
              "label": "A289000X",
              "value": "25 kg · 1 piece per box"
            },
            {
              "label": "A289000M",
              "value": "5 kg · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/fondo-town/1.webp",
            "assets/images/loggia/surface-preparation/fondo-town/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=269&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/fondo-town/"
        },
        {
          "id": "cement-block-all-acqua",
          "name": "Water Cement Block",
          "tagline": "White primer for wood and walls, non-toxic, WATER-INDOOR.",
          "image": "assets/images/loggia/surface-preparation/cement-block-all-acqua.webp",
          "photo": true,
          "group": "Wood impregnants",
          "description": [
            "Colours: white. Theoretical coverage: 8 mq./lt.",
            "White, non-toxic, odourless, water-based primer for wood and walls."
          ],
          "specs": [
            {
              "label": "D2100000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "D2100006",
              "value": "2.5 L · 1 piece per box"
            },
            {
              "label": "D2100004",
              "value": "4 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/cement-block-all-acqua/1.webp",
            "assets/images/loggia/surface-preparation/cement-block-all-acqua/2.webp",
            "assets/images/loggia/surface-preparation/cement-block-all-acqua/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=301&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_D210000_4.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/cement-block-all-acqua/"
        },
        {
          "id": "cristallo",
          "name": "Polished Crystal",
          "tagline": "Special one-component flatting.",
          "image": "assets/images/loggia/surface-preparation/cristallo.webp",
          "photo": true,
          "group": "Wood impregnants",
          "description": [
            "Theoretical yield: 10 mq./lt."
          ],
          "specs": [
            {
              "label": "D0600002",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "D0600005",
              "value": "5 L · 2 pieces per box"
            },
            {
              "label": "D0600006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "D0600004",
              "value": "0.75 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/cristallo/1.webp",
            "assets/images/loggia/surface-preparation/cristallo/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=302&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_D060000_12.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/cristallo/"
        },
        {
          "id": "cristallo-opaco",
          "name": "Opaque Crystal",
          "tagline": "Special one-component flatting.",
          "image": "assets/images/loggia/surface-preparation/cristallo-opaco.webp",
          "photo": true,
          "group": "Wood impregnants",
          "description": [
            "Theoretical yield: 10 mq./lt.",
            "Special one-component urethane flatting, matt finish."
          ],
          "specs": [
            {
              "label": "D06000S2",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "D06000S5",
              "value": "5 L · 2 pieces per box"
            },
            {
              "label": "D06000S6",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "D06000S4",
              "value": "0.75 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/cristallo-opaco/1.webp",
            "assets/images/loggia/surface-preparation/cristallo-opaco/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=303&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_D06000S_17.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/cristallo-opaco/"
        },
        {
          "id": "alta-marea",
          "name": "Alta Marea",
          "tagline": "Highly protective urethane MARINE Superflatting.",
          "image": "assets/images/loggia/surface-preparation/alta-marea.webp",
          "photo": true,
          "group": "Wood impregnants",
          "description": [
            "Theoretical coverage: 12 sqm/lt."
          ],
          "specs": [
            {
              "label": "D0700002",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "D0700005",
              "value": "5 L · 2 pieces per box"
            },
            {
              "label": "D0700006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "D0700004",
              "value": "0.75 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/alta-marea/1.webp",
            "assets/images/loggia/surface-preparation/alta-marea/2.webp",
            "assets/images/loggia/surface-preparation/alta-marea/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=304&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_D070000_11.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/alta-marea/"
        },
        {
          "id": "flatting-all-acqua-incolore",
          "name": "Colorless Water Flatting",
          "tagline": "Waterproof, non-toxic, odourless, eco-friendly flatting.",
          "image": "assets/images/loggia/surface-preparation/flatting-all-acqua-incolore.webp",
          "photo": true,
          "group": "Wood impregnants",
          "description": [
            "Colours: transparent. Theoretical yield: 12 mq./lt.",
            "Eco-friendly, water-based, non-toxic, odourless flatting."
          ],
          "specs": [
            {
              "label": "To water · D2700016",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "To water · D2700014",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "Matt · D2700116",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "Matt · D2700114",
              "value": "0.75 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/flatting-all-acqua-incolore/1.webp",
            "assets/images/loggia/surface-preparation/flatting-all-acqua-incolore/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=476&lang=0"
            },
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=477&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/flatting-all-acqua-incolore/"
        },
        {
          "id": "primo-legno",
          "name": "Primo Legno Impregnant",
          "tagline": "Transparent coloured biting solvent-based impregnating agent.",
          "image": "assets/images/loggia/surface-preparation/primo-legno.webp",
          "photo": true,
          "group": "Wood impregnants",
          "description": [
            "Theoretical coverage: 12 sqm/lt COD: D25",
            "White, water-based resin impregnation. Non-sagging, enhances the grain"
          ],
          "specs": [
            {
              "label": "solvent · D2500002",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "solvent · D2500005",
              "value": "4 L · 2 pieces per box"
            },
            {
              "label": "solvent · D2500006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "solvent · D2500004",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "to water · D2600002",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "to water · D2600005",
              "value": "4 L · 2 pieces per box"
            },
            {
              "label": "to water · D2600006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "to water · D2600004",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "to water · D1260002",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "to water · D1260005",
              "value": "4 L · 2 pieces per box"
            },
            {
              "label": "to water · D1260006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "to water · D1260004",
              "value": "0.75 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/primo-legno/1.webp",
            "assets/images/loggia/surface-preparation/primo-legno/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=305&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_D250000_11.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/primo-legno/"
        },
        {
          "id": "legno-nuovo",
          "name": "New Wood",
          "tagline": "Water-based, non-toxic, odourless, protective wood preservative.",
          "image": "assets/images/loggia/surface-preparation/legno-nuovo.webp",
          "photo": true,
          "group": "Wood impregnants",
          "description": [
            "Waxed coloured finish. Theoretical Yield: 16-18 sqm/lt per coat COD: D14",
            "Water-based, non-toxic, odorless protective impregnating agent for wood. Finishcolored waxed.Colors: from the color chart.Theoretical yield: 16-18 sq.m./lt per coat.",
            "Colours: as per colour chart.Theoretical coverage: 12 sqm/lt."
          ],
          "specs": [
            {
              "label": "Waxed water · D1400000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "Waxed water · D1400006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "Waxed water · D1400004",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "Waxed water · LN140006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "Waxed water · LN140004",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "Solvent waxed · D0800002",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "Solvent waxed · D0800005",
              "value": "5 L · 2 pieces per box"
            },
            {
              "label": "Solvent waxed · D0800006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "Solvent waxed · D0800004",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "Solvent waxed · LN150006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "Solvent waxed · LN150004",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "Solvent-based polish · D0900002",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "Solvent-based polish · D0900005",
              "value": "5 L · 2 pieces per box"
            },
            {
              "label": "Solvent-based polish · D0900006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "Solvent-based polish · D0900004",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "Solvent-based polish · LN150006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "Solvent-based polish · LN150004",
              "value": "0.75 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/legno-nuovo/1.webp",
            "assets/images/loggia/surface-preparation/legno-nuovo/2.webp",
            "assets/images/loggia/surface-preparation/legno-nuovo/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=306&lang=0"
            },
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=307&lang=1"
            },
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=488&lang=1"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_D140000_9.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/legno-nuovo/"
        },
        {
          "id": "uniformante-per-legno",
          "name": "Uniforming Agent For Wood",
          "tagline": "Transparent impregnating agent based on water-based resins.",
          "image": "assets/images/loggia/surface-preparation/uniformante-per-legno.webp",
          "photo": true,
          "group": "Wood impregnants",
          "description": [
            "Colours: of folder. Theoretical yield: 16 mq./lt.",
            "Uniforming agent for wood is an impregnating and uniformingmatt finish based on alkyd resins in the solvent phase. Its function isdecorative and protective. It evens and renews the appearance of aged wood."
          ],
          "specs": [
            {
              "label": "D3000006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "D3000004",
              "value": "0.75 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/uniformante-per-legno/1.webp",
            "assets/images/loggia/surface-preparation/uniformante-per-legno/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=308&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_D300000_8.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/uniformante-per-legno-2/"
        },
        {
          "id": "woodmarine",
          "name": "Woodmarine",
          "tagline": "Concentrated dyes for water-based paints.",
          "image": "assets/images/loggia/surface-preparation/woodmarine.webp",
          "photo": true,
          "group": "Wood impregnants",
          "description": [
            "Highly UV-resistant protective wood finishin marine environments. Theoretical yield: 8 sq.m./lt."
          ],
          "specs": [
            {
              "label": "D1210006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "D1210004",
              "value": "0.75 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/woodmarine/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=309&lang=1"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/woodmarine/"
        },
        {
          "id": "olio-di-teak",
          "name": "Teak Oil",
          "tagline": "Concentrated dyes for water-based paints.",
          "image": "assets/images/loggia/surface-preparation/olio-di-teak.webp",
          "photo": true,
          "group": "Wood impregnants",
          "description": [
            "Oil-based teak deck protector for boats.It penetrates the wood and protects it from UV rays and saltiness.Theoretical yield: 5-6 sq.m./lt."
          ],
          "specs": [
            {
              "label": "D1230000",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "D1230005",
              "value": "5 L · 2 pieces per box"
            },
            {
              "label": "D1230007",
              "value": "1 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/olio-di-teak/1.webp",
            "assets/images/loggia/surface-preparation/olio-di-teak/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=310&lang=1"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_D123000_10.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/olio-di-teak/"
        },
        {
          "id": "remosvelt",
          "name": "Remosvelt Water Gel",
          "tagline": "Universal paint stripper for enamels and paints.",
          "image": "assets/images/loggia/surface-preparation/remosvelt.webp",
          "photo": true,
          "group": "Wood impregnants",
          "description": [
            "Universal paint stripper for enamels and paints."
          ],
          "specs": [
            {
              "label": "E3800006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "E3800004",
              "value": "0.75 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/remosvelt/1.webp",
            "assets/images/loggia/surface-preparation/remosvelt/2.webp",
            "assets/images/loggia/surface-preparation/remosvelt/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=295&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/remosvelt/"
        },
        {
          "id": "cement-block",
          "name": "Cement Block",
          "tagline": "Synthetic primer for wood and wall, with brush.",
          "image": "assets/images/loggia/surface-preparation/cement-block.webp",
          "photo": true,
          "group": "Wood impregnants",
          "description": [
            "Colours: white. Theoretical yield: 8 mq./lt."
          ],
          "specs": [
            {
              "label": "D1000002",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "D1000005",
              "value": "5 L · 2 pieces per box"
            },
            {
              "label": "D1000006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "D1000004",
              "value": "0.75 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/cement-block/1.webp",
            "assets/images/loggia/surface-preparation/cement-block/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=300&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_D100000_15.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/cement-block/"
        },
        {
          "id": "rugginox",
          "name": "Rugginox",
          "tagline": "Rust converter.",
          "image": "assets/images/loggia/surface-preparation/rugginox.webp",
          "photo": true,
          "group": "Rust protection",
          "description": [
            "Rust converter."
          ],
          "specs": [
            {
              "label": "E3900005",
              "value": "5 L · 2 pieces per box"
            },
            {
              "label": "E3900007",
              "value": "1 L · 20 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/rugginox/1.webp",
            "assets/images/loggia/surface-preparation/rugginox/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=296&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_E390000_4.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/rugginox2014-02-08-16-46-27_/"
        },
        {
          "id": "protezione",
          "name": "Protection 1",
          "tagline": "High protection synthetic rust preventative brush.",
          "image": "assets/images/loggia/surface-preparation/protezione.webp",
          "photo": true,
          "group": "Rust protection",
          "description": [
            "Colours: grey, red. Theoretical coverage: 8 sqm/lt.",
            "Highly protective synthetic rust preventative brush-on."
          ],
          "specs": [
            {
              "label": "White/Black · D1300002",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "White/Black · D1300005",
              "value": "5 L · 2 pieces per box"
            },
            {
              "label": "White/Black · D1300006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "White/Black · D1300004",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "Orange · D2800002",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "Orange · D2800005",
              "value": "5 L · 2 pieces per box"
            },
            {
              "label": "Orange · D2800006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "Orange · D2800004",
              "value": "0.75 L · 6 pieces per box"
            },
            {
              "label": "OX Red - Light/dark grey · D1100002",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "OX Red - Light/dark grey · D1100005",
              "value": "5 L · 2 pieces per box"
            },
            {
              "label": "OX Red - Light/dark grey · D1100006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "OX Red - Light/dark grey · D1100004",
              "value": "0.75 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/protezione/1.webp",
            "assets/images/loggia/surface-preparation/protezione/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=297&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_D11000N_7.pdf"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_D11000R_7.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/protezione-1/"
        },
        {
          "id": "protezione-2",
          "name": "Protection 2",
          "tagline": "Synthetic rust remover with brush, FOR ZINCATED SHEETS.",
          "image": "assets/images/loggia/surface-preparation/protezione-2.webp",
          "photo": true,
          "group": "Rust protection",
          "description": [
            "Colour: light yellow. Theoretical yield: 8 mq./lt."
          ],
          "specs": [
            {
              "label": "D1200002",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "D1200005",
              "value": "5 L · 2 pieces per box"
            },
            {
              "label": "D1200006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "D1200004",
              "value": "0.75 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/protezione-2/1.webp",
            "assets/images/loggia/surface-preparation/protezione-2/2.webp",
            "assets/images/loggia/surface-preparation/protezione-2/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=298&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_D120000_9.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/protezione-2/"
        },
        {
          "id": "protezione-3",
          "name": "Protection 3",
          "tagline": "ATOXIC WATER-BASED rustproofing, odourless.",
          "image": "assets/images/loggia/surface-preparation/protezione-3.webp",
          "photo": true,
          "group": "Rust protection",
          "description": [
            "Colour: grey, red. Theoretical yield: 8 mq./lt.",
            "Colour: grey, red.Theoretical coverage: 8 sqm./lt. per coat"
          ],
          "specs": [
            {
              "label": "D1500000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "D1500006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "D1500004",
              "value": "0.75 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/protezione-3/1.webp",
            "assets/images/loggia/surface-preparation/protezione-3/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=299&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/protezione-3/"
        },
        {
          "id": "plastogum",
          "name": "Plastogum",
          "tagline": "Water-based liquid acrylic sheath for waterproofing and painting concrete tennis courts.",
          "image": "assets/images/loggia/surface-preparation/plastogum.webp",
          "photo": true,
          "group": "Sheaths & smoke covers",
          "description": [
            "Colours: white, grey, red ox, green ox.",
            "Water-based liquid acrylic sheathing for waterproofing and paintingconcrete tennis courts.",
            "Colours: white, grey, red ox, green ox.Theoretical yield: 1-2 kg./sq.m. per hand.",
            "Water-based fiber-reinforced liquid acrylic sheathing for waterproofingand painting concrete tennis courts, stronger, yetmore flexible. Colors: white, gray, ox red, ox green.Theoretical yield: 1-2 kg./sq.m. per coat."
          ],
          "specs": [
            {
              "label": "A360000S",
              "value": "20 kg · 1 piece per box"
            },
            {
              "label": "A360000L",
              "value": "10 kg · 1 piece per box"
            },
            {
              "label": "A360000M",
              "value": "5 kg · 1 piece per box"
            },
            {
              "label": "A360000F",
              "value": "1 kg · 6 pieces per box"
            },
            {
              "label": "Fiber-reinforced · A247000S",
              "value": "20 kg · 1 piece per box"
            },
            {
              "label": "Fiber-reinforced · A247000L",
              "value": "10 kg · 1 piece per box"
            },
            {
              "label": "Fiber-reinforced · A247000M",
              "value": "5 kg · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/plastogum/1.webp",
            "assets/images/loggia/surface-preparation/plastogum/2.webp",
            "assets/images/loggia/surface-preparation/plastogum/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=97&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A360000_5.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/plastogum/"
        },
        {
          "id": "loggia-gum",
          "name": "Gum Loggia",
          "tagline": "Styrene-acrylic liquid sheath with very high elasticity and durability.",
          "image": "assets/images/loggia/surface-preparation/loggia-gum.webp",
          "photo": true,
          "group": "Sheaths & smoke covers",
          "description": [
            "Colours: white, grey, ox red, ox green, transparent.",
            "Liquid styrene-acrylic sheath with very high elasticity and durability.",
            "Colours: white, grey, ox-red, ox-green and transparent. Theoretical coverage: 1-2 litres/sq.m. per coat"
          ],
          "specs": [
            {
              "label": "A2200000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A2200005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "A2200006",
              "value": "2.5 L · 1 piece per box"
            },
            {
              "label": "A2200004",
              "value": "0.75 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/loggia-gum/1.webp",
            "assets/images/loggia/surface-preparation/loggia-gum/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=98&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A220000_6.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/loggia-gum/"
        },
        {
          "id": "kit-biguaina",
          "name": "Biguain Kit",
          "tagline": "Highly elastic two-component waterproof cement sheathing.",
          "image": "assets/images/loggia/surface-preparation/kit-biguaina.webp",
          "photo": true,
          "group": "Sheaths & smoke covers",
          "description": [
            "Ideal for terraces, swimming pools, concrete tanks, etc. Colours: Dark grey."
          ],
          "specs": [
            {
              "label": "Dark Gray · A920000L",
              "value": "16 kg · 1 piece per box"
            },
            {
              "label": "Dark Gray · A920000H",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "Oxide Red · A92ROOXL",
              "value": "16 kg · 1 piece per box"
            },
            {
              "label": "Oxide Red · A92ROOXH",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "Light Gray · A92GRCHL",
              "value": "16 kg · 1 piece per box"
            },
            {
              "label": "Light Gray · A92GRCHH",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "Oxide Green · A92VEOXL",
              "value": "16 kg · 1 piece per box"
            },
            {
              "label": "Oxide Green · A92VEOXH",
              "value": "4 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/kit-biguaina/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=99&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A920000_4.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/kit-biguaina/"
        },
        {
          "id": "kit-triguaina",
          "name": "Triguain Kit",
          "tagline": "Two-component, highly elastic, thick, waterproof cementitious sheathing.",
          "image": "assets/images/loggia/surface-preparation/kit-triguaina.webp",
          "photo": true,
          "group": "Sheaths & smoke covers",
          "description": [
            "Application with a toothed roller is recommended. Ideal for",
            "Two-component, high-elasticity, thick waterproof cementitious sheathing.thickness. Recommended application with toothed Americana. Ideal for terraces, swimming pools, concrete tanks, etc.tanks, etc.",
            "Theoretical yield 1.5-2.0 kg/sq.m. per coat per mm of thickness."
          ],
          "specs": [
            {
              "label": "Part A · A132000S",
              "value": "15 kg · 1 piece per box"
            },
            {
              "label": "Part A · A132000M",
              "value": "3 kg · 1 piece per box"
            },
            {
              "label": "Part B · A1320005",
              "value": "5 kg · 1 piece per box"
            },
            {
              "label": "Part B · A1320007",
              "value": "1 kg · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/kit-triguaina/1.webp",
            "assets/images/loggia/surface-preparation/kit-triguaina/2.webp",
            "assets/images/loggia/surface-preparation/kit-triguaina/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=103&lang=0"
            },
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=104&lang=0"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/kit-triguaina-3/"
        },
        {
          "id": "amiant-stop",
          "name": "Amiant Stop",
          "tagline": "Paint for panels containing AMIANTOS.",
          "image": "assets/images/loggia/surface-preparation/amiant-stop.webp",
          "photo": true,
          "group": "Sheaths & smoke covers",
          "description": [
            "Colours: white, grey, ox red, ox green. Theoretical coverage: 10 sqm/lt.",
            "Paint for panels containing asbestos.Colours: white, grey, ox-red, ox-green.Theoretical coverage: 10 sqm/lt. per coat."
          ],
          "specs": [
            {
              "label": "A2300003",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A2300005",
              "value": "4 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/amiant-stop/1.webp",
            "assets/images/loggia/surface-preparation/amiant-stop/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=105&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A230000_6.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/amiant-stop/"
        },
        {
          "id": "tecnologgia",
          "name": "Technology",
          "tagline": "Anti-condensation smoke cover paint.",
          "image": "assets/images/loggia/surface-preparation/tecnologgia.webp",
          "photo": true,
          "group": "Sheaths & smoke covers",
          "description": [
            "Colours: white. Theoretical coverage: 9-10 sqm/lt.",
            "Colours: white. Theoretical coverage: 9-10 sqm/lt. per coat"
          ],
          "specs": [
            {
              "label": "Solvent · A240000S",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "Solvent · A240000M",
              "value": "5 L · 2 pieces per box"
            },
            {
              "label": "Solvent · A240000F",
              "value": "1 L · 6 pieces per box"
            },
            {
              "label": "Water · A2410000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "Water · A2410005",
              "value": "4 L · 1 piece per box"
            },
            {
              "label": "Water · A2410007",
              "value": "1 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/tecnologgia/1.webp",
            "assets/images/loggia/surface-preparation/tecnologgia/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=106&lang=0"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A241000_3.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/tecnologgia/"
        },
        {
          "id": "italian-graffiti-all-acqua-cer",
          "name": "Italian Water Graffiti CER",
          "tagline": "Protective ANTIVANDALISM, for marble and stone, based on waxes and special resins, colourless.",
          "image": "assets/images/loggia/surface-preparation/italian-graffiti-all-acqua-cer.webp",
          "photo": true,
          "group": "Anti-graffiti",
          "description": [
            "Theoretical yield: depending on absorption, 14-16 sq.m./l.",
            "Vandalism protection, for marble and stone, based on special waxes and resins, colourless.Theoretical yield: depending on absorption, 14-16 sqm/lt. (sacrificial after first washing)."
          ],
          "specs": [
            {
              "label": "D1600000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "D1600006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "D1600007",
              "value": "1 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/italian-graffiti-all-acqua-cer/1.webp",
            "assets/images/loggia/surface-preparation/italian-graffiti-all-acqua-cer/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=479&lang=1"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/italian-graffiti-all-acqua-cer/"
        },
        {
          "id": "italian-graffiti-all-acqua-sil",
          "name": "Italian Water Graffiti SIL",
          "tagline": "Anti-vandalism protective product for marble and stone, based on silicones and special resins, colourless.",
          "image": "assets/images/loggia/surface-preparation/italian-graffiti-all-acqua-sil.webp",
          "photo": true,
          "group": "Anti-graffiti",
          "description": [
            "Theoretical coverage: depending on absorption, 14-16 sqm/lt.",
            "Anti-vandalism protective agent for marble and stone, based on silicones and special resins, colourless.",
            "Theoretical yield: depending on absorption, 14-16 m2 /lt. (sacrificial after the first wash)"
          ],
          "specs": [
            {
              "label": "D1700000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "D1700006",
              "value": "2.5 L · 2 pieces per box"
            },
            {
              "label": "D1700007",
              "value": "1 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/italian-graffiti-all-acqua-sil/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=480&lang=1"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/italian-graffiti-all-acqua-sil/"
        },
        {
          "id": "italian-graffiti-solv",
          "name": "Italian Graffiti SOLV",
          "tagline": "Anti-vandalism protective product for marble and stone, based on silicones and special resins, colourless.",
          "image": "assets/images/loggia/surface-preparation/italian-graffiti-solv.webp",
          "photo": true,
          "group": "Anti-graffiti",
          "description": [
            "Theoretical coverage: depending on absorption, 14-16 sqm/lt.",
            "Vandalism protection, for marble and stone, based on special solvent resins, colourless.Two-component with cat.1:1 PU 1000.",
            "Theoretical yield: depending on absorption, 14-16 sqm/litre(permanent for at least 8-10 washes)"
          ],
          "specs": [
            {
              "label": "D1800003",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "D1800005",
              "value": "5 L · 2 pieces per box"
            },
            {
              "label": "D1800007",
              "value": "1 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/italian-graffiti-solv/1.webp",
            "assets/images/loggia/surface-preparation/italian-graffiti-solv/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=311&lang=1"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_D180000_4.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/italian-graffiti-solv/"
        },
        {
          "id": "togligraffiti-acqua-gel",
          "name": "Water Gel Scratch Remover",
          "tagline": "Water-based paint remover TO REMOVE GRAPHS from road signs and delicate surfaces where strong chemical aggression is not possible.",
          "image": "assets/images/loggia/surface-preparation/togligraffiti-acqua-gel.webp",
          "photo": true,
          "group": "Anti-graffiti",
          "description": [
            "Water-based paint stripper for removing graffiti from road signs and delicate surfaces where strong chemical attack is not possible."
          ],
          "specs": [
            {
              "label": "D2000003",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "D2000005",
              "value": "5 L · 2 pieces per box"
            },
            {
              "label": "D2000001",
              "value": "1 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/togligraffiti-acqua-gel/1.webp",
            "assets/images/loggia/surface-preparation/togligraffiti-acqua-gel/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=313&lang=1"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_D200000_2.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/togligraffiti-acqua-gel/"
        },
        {
          "id": "togligraffiti-solv-gel",
          "name": "Solv-gel Scratch Remover",
          "tagline": "Paint remover TO REMOVE GRAPHS from strong and resistant surfaces.",
          "image": "assets/images/loggia/surface-preparation/togligraffiti-solv-gel.webp",
          "photo": true,
          "group": "Anti-graffiti",
          "description": [
            "Graffiti remover for removing graffiti from strong, durable surfaces."
          ],
          "specs": [
            {
              "label": "D2200003",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "D2200005",
              "value": "5 L · 2 pieces per box"
            },
            {
              "label": "D2200001",
              "value": "1 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/togligraffiti-solv-gel/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=314&lang=1"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_D220000_2.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/togligraffiti-solv-gel/"
        },
        {
          "id": "acquaragia",
          "name": "Aquaraggy",
          "tagline": "Turpentine, thinners, loggia",
          "image": "assets/images/loggia/surface-preparation/acquaragia.webp",
          "photo": true,
          "group": "Thinners",
          "description": [
            "Turpentine, thinners, loggia"
          ],
          "specs": [
            {
              "label": "I0100005",
              "value": "5 L · 4 pieces per box"
            },
            {
              "label": "I0100007",
              "value": "1 L · 20 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/acquaragia/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=426&lang=1"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_I010000_5.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/acquaragia/"
        },
        {
          "id": "acquaragia-inodore",
          "name": "Odorless Aquarine",
          "tagline": "Odorless turpentine, thinners, Loggia",
          "image": "assets/images/loggia/surface-preparation/acquaragia-inodore.webp",
          "photo": true,
          "group": "Thinners",
          "description": [
            "Odorless turpentine, thinners, Loggia"
          ],
          "specs": [
            {
              "label": "I0200005",
              "value": "5 L · 4 pieces per box"
            },
            {
              "label": "I0200007",
              "value": "1 L · 20 pieces per box"
            }
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=427&lang=1"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_I020000_3.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/acquaragia-inodore/"
        },
        {
          "id": "diluente-sintetico-extra",
          "name": "Synthetic Thinner Extra",
          "image": "assets/images/loggia/surface-preparation/diluente-sintetico-extra.webp",
          "photo": true,
          "group": "Thinners",
          "specs": [
            {
              "label": "I0300005",
              "value": "5 L · 4 pieces per box"
            },
            {
              "label": "I0300007",
              "value": "1 L · 20 pieces per box"
            }
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=428&lang=1"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_I030000_10.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/diluente-sintetico-extra/"
        },
        {
          "id": "diluente-nitro-antinebbia",
          "name": "Nitro Anti-fog Thinner",
          "tagline": "Nitro Antifog Thinner, Thinners, lodge",
          "image": "assets/images/loggia/surface-preparation/diluente-nitro-antinebbia.webp",
          "photo": true,
          "group": "Thinners",
          "description": [
            "Nitro Antifog Thinner, Thinners, lodge"
          ],
          "specs": [
            {
              "label": "I0400001",
              "value": "25 L · 1 piece per box"
            },
            {
              "label": "I0400005",
              "value": "5 L · 4 pieces per box"
            },
            {
              "label": "I0400007",
              "value": "1 L · 20 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/diluente-nitro-antinebbia/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=429&lang=1"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_I040000_7.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/diluente-nitro-antinebbia/"
        },
        {
          "id": "diluente-poliuretanico",
          "name": "Polyurethane Thinner",
          "image": "assets/images/loggia/surface-preparation/diluente-poliuretanico.webp",
          "photo": true,
          "group": "Thinners",
          "specs": [
            {
              "label": "I0500005",
              "value": "5 L · 4 pieces per box"
            },
            {
              "label": "I0500007",
              "value": "1 L · 6 pieces per box"
            }
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=430&lang=1"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_I050000_4.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/diluente-poliuretanico/"
        },
        {
          "id": "diluente-epossidico-standard",
          "name": "Standard Epoxy Thinner",
          "tagline": "Standard Epoxy Thinner, thinners, loggia",
          "image": "assets/images/loggia/surface-preparation/diluente-epossidico-standard.webp",
          "photo": true,
          "group": "Thinners",
          "description": [
            "Standard Epoxy Thinner, thinners, loggia"
          ],
          "specs": [
            {
              "label": "I0600005",
              "value": "4 L · 4 pieces per box"
            },
            {
              "label": "I0600007",
              "value": "1 L · 6 pieces per box"
            }
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=431&lang=1"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_I060000_5.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/diluente-epossidico-standard/"
        },
        {
          "id": "diluente-acrilico-standard",
          "name": "Standard Acrylic Thinner",
          "tagline": "Standard Acrylic Thinner, Thinners, Lodge",
          "image": "assets/images/loggia/surface-preparation/diluente-acrilico-standard.webp",
          "photo": true,
          "group": "Thinners",
          "description": [
            "Standard Acrylic Thinner, Thinners, Lodge"
          ],
          "specs": [
            {
              "label": "I0700005",
              "value": "4 L · 4 pieces per box"
            },
            {
              "label": "I0700007",
              "value": "1 L · 20 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/diluente-acrilico-standard/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=432&lang=1"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_I070000_5.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/diluente-acrilico-standard/"
        },
        {
          "id": "diluente-acrilico-lento",
          "name": "Slow Acrylic Thinner",
          "tagline": "Acrylic Thinner Slow, loggia , thinner",
          "image": "assets/images/loggia/surface-preparation/diluente-acrilico-lento.webp",
          "photo": true,
          "group": "Thinners",
          "description": [
            "Acrylic Thinner Slow, loggia , thinner"
          ],
          "specs": [
            {
              "label": "I0800005",
              "value": "4 L · 4 pieces per box"
            },
            {
              "label": "I0800007",
              "value": "1 L · 20 pieces per box"
            }
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=433&lang=1"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_I080000_4.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/diluente-acrilico-lento/"
        },
        {
          "id": "diluente-acrilico-rapido",
          "name": "Rapid Acrylic Thinner",
          "tagline": "Rapid Acrylic Thinner, thinners, loggia",
          "image": "assets/images/loggia/surface-preparation/diluente-acrilico-rapido.webp",
          "photo": true,
          "group": "Thinners",
          "description": [
            "Rapid Acrylic Thinner, thinners, loggia"
          ],
          "specs": [
            {
              "label": "I0900005",
              "value": "4 L · 4 pieces per box"
            },
            {
              "label": "I0900007",
              "value": "1 L · 20 pieces per box"
            }
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=434&lang=1"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_I090000_4.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/diluente-acrilico-rapido/"
        },
        {
          "id": "diluente-per-spartitraffico",
          "name": "Traffic Island Thinner",
          "image": "assets/images/loggia/surface-preparation/diluente-per-spartitraffico.webp",
          "photo": true,
          "group": "Thinners",
          "specs": [
            {
              "label": "I1000001",
              "value": "25 L · 1 piece per box"
            },
            {
              "label": "I1000005",
              "value": "5 L · 4 pieces per box"
            },
            {
              "label": "I1000007",
              "value": "1 L · 20 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/diluente-per-spartitraffico/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=435&lang=1"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_I100000_2.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/diluente-per-spartitraffico/"
        },
        {
          "id": "acetone-puro",
          "name": "Pure Acetone",
          "tagline": "Pure Acetone, Thinners, Loggia",
          "image": "assets/images/loggia/surface-preparation/acetone-puro.webp",
          "photo": true,
          "group": "Thinners",
          "description": [
            "Pure Acetone, Thinners, Loggia"
          ],
          "specs": [
            {
              "label": "I1100005",
              "value": "5 L · 4 pieces per box"
            },
            {
              "label": "I1100007",
              "value": "1 L · 20 pieces per box"
            }
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=436&lang=1"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_I110000_2.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/acetone-puro/"
        },
        {
          "id": "olio-di-lino-cotto",
          "name": "Boiled Linseed Oil",
          "image": "assets/images/loggia/surface-preparation/olio-di-lino-cotto.webp",
          "photo": true,
          "group": "Thinners",
          "specs": [
            {
              "label": "I1200005",
              "value": "5 L · 4 pieces per box"
            },
            {
              "label": "I1200007",
              "value": "1 L · 20 pieces per box"
            }
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=437&lang=1"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/olio-di-lino-cotto/"
        },
        {
          "id": "diluente-per-ceramipox",
          "name": "Thinner For Ceramipox",
          "tagline": "Thinner for Ceramipox, thinners, lodge",
          "image": "assets/images/loggia/surface-preparation/diluente-per-ceramipox.webp",
          "photo": true,
          "group": "Thinners",
          "description": [
            "Thinner for Ceramipox, thinners, lodge"
          ],
          "specs": [
            {
              "label": "I1300005",
              "value": "5 L · 4 pieces per box"
            },
            {
              "label": "I1300007",
              "value": "1 L · 20 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/diluente-per-ceramipox/1.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=438&lang=1"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/diluente-per-ceramipox/"
        },
        {
          "id": "diluente-epossidico-b-b",
          "name": "Epoxy Thinner B/B",
          "tagline": "B/B Epoxy Thinner, thinners, loggia",
          "image": "assets/images/loggia/surface-preparation/diluente-epossidico-b-b.webp",
          "photo": true,
          "group": "Thinners",
          "description": [
            "B/B Epoxy Thinner, thinners, loggia"
          ],
          "specs": [
            {
              "label": "I1700005",
              "value": "4 L · 4 pieces per box"
            },
            {
              "label": "I1700007",
              "value": "1 L · 6 pieces per box"
            }
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=439&lang=1"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/diluente-epossidico-b-b/"
        },
        {
          "id": "diluente-per-2-coat-slow",
          "name": "Thinner For 2 Coat Slow",
          "tagline": "Thinner for 2 Coat Slow, thinners, lodge",
          "image": "assets/images/loggia/surface-preparation/diluente-per-2-coat-slow.webp",
          "photo": true,
          "group": "Thinners",
          "description": [
            "Thinner for 2 Coat Slow, thinners, lodge"
          ],
          "specs": [
            {
              "label": "I1800005",
              "value": "4 L · 4 pieces per box"
            },
            {
              "label": "I1800007",
              "value": "1 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/diluente-per-2-coat-slow/1.webp",
            "assets/images/loggia/surface-preparation/diluente-per-2-coat-slow/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=440&lang=1"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/diluente-per-2-coat-slow/"
        },
        {
          "id": "diluente-per-2-coat-standard",
          "name": "Thinner For 2 Coat Standard",
          "tagline": "Thinner for 2 Coat Standard, thinners, lodge",
          "image": "assets/images/loggia/surface-preparation/diluente-per-2-coat-standard.webp",
          "photo": true,
          "group": "Thinners",
          "description": [
            "Thinner for 2 Coat Standard, thinners, lodge"
          ],
          "specs": [
            {
              "label": "I1900005",
              "value": "4 L · 4 pieces per box"
            },
            {
              "label": "I1900007",
              "value": "1 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/diluente-per-2-coat-standard/1.webp",
            "assets/images/loggia/surface-preparation/diluente-per-2-coat-standard/2.webp",
            "assets/images/loggia/surface-preparation/diluente-per-2-coat-standard/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=441&lang=1"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/diluente-per-2-coat-standard/"
        },
        {
          "id": "diluente-per-2-coat-rapido",
          "name": "Thinner For 2 Coat Fast",
          "tagline": "Thinner for 2 Coat Rapido, loggia, thinners",
          "image": "assets/images/loggia/surface-preparation/diluente-per-2-coat-rapido.webp",
          "photo": true,
          "group": "Thinners",
          "description": [
            "Thinner for 2 Coat Rapido, loggia, thinners"
          ],
          "specs": [
            {
              "label": "I2000005",
              "value": "4 L · 4 pieces per box"
            },
            {
              "label": "I2000007",
              "value": "1 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/diluente-per-2-coat-rapido/1.webp",
            "assets/images/loggia/surface-preparation/diluente-per-2-coat-rapido/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=442&lang=1"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/diluente-per-2-coat-rapido/"
        },
        {
          "id": "coloranti",
          "name": "Colorants",
          "tagline": "Concentrated dyes for water-based paints.",
          "image": "assets/images/loggia/surface-preparation/coloranti.webp",
          "photo": true,
          "group": "Colorants",
          "description": [
            "Concentrated dyes for water-based paints."
          ],
          "specs": [
            {
              "label": "A3400000",
              "value": "40 ml · 12 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/coloranti/1.webp",
            "assets/images/loggia/surface-preparation/coloranti/2.webp",
            "assets/images/loggia/surface-preparation/coloranti/3.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://www.loggia.it/en/?wpdmdl=1319"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A340000_4.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/prodotto/coloranti/"
        },
        {
          "id": "coloranti-blister",
          "name": "Blister Dyes",
          "tagline": "Concentrated dyes for water-based paints.",
          "image": "assets/images/loggia/surface-preparation/coloranti-blister.webp",
          "photo": true,
          "group": "Colorants",
          "description": [
            "Concentrated dyes for water-based paints."
          ],
          "specs": [
            {
              "label": "A3500000",
              "value": "40 ml · 12 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/coloranti-blister/1.webp",
            "assets/images/loggia/surface-preparation/coloranti-blister/2.webp"
          ],
          "source": "https://www.loggia.it/en/prodotto/coloranti-blister/"
        },
        {
          "id": "toner-smart-point-loggia",
          "name": "Toner Smart Point Lodge",
          "tagline": "Concentrated dyes for water-based paints.",
          "image": "assets/images/loggia/surface-preparation/toner-smart-point-loggia.webp",
          "photo": true,
          "group": "Colorants",
          "description": [
            "Concentrated water-based dye paste.Conf. XXL14 for 14lt - XL 4 for 4lt."
          ],
          "specs": [
            {
              "label": "XXL 14 · A323000A",
              "value": "0.1 L"
            },
            {
              "label": "XL4 · A322000A",
              "value": "0.1 L"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/toner-smart-point-loggia/1.webp"
          ],
          "source": "https://www.loggia.it/en/prodotto/toner-smart-point-loggia/"
        },
        {
          "id": "toner-smart-point-umana",
          "name": "Toner Smart Point Umana",
          "tagline": "Concentrated dyes for water-based paints.",
          "image": "assets/images/loggia/surface-preparation/toner-smart-point-umana.webp",
          "photo": true,
          "group": "Colorants",
          "description": [
            "Concentrated dyes for water-based paints."
          ],
          "specs": [
            {
              "label": "XL10 · A331000A",
              "value": "0.1 L"
            },
            {
              "label": "XL4 · A324000A",
              "value": "0.1 L"
            }
          ],
          "gallery": [
            "assets/images/loggia/surface-preparation/toner-smart-point-umana/1.webp",
            "assets/images/loggia/surface-preparation/toner-smart-point-umana/2.webp"
          ],
          "source": "https://www.loggia.it/en/prodotto/toner-smart-point-umana/"
        }
      ]
    },
    {
      id: "etron",
      name: "ETRON Waterproofing",
      series: "Membranes & sheaths",
      summary: "Reinforced and non-reinforced waterproofing membranes and sheaths, fibre-reinforced with carbon nanotubes and synthetic fibres, plus technical flooring products.",
      icon: "assets/images/loggia/etron/etron-hybrid.webp",
      iconStyle: "photo",
      specNote: "Product codes and pack sizes as listed by Loggia. Colours and availability on request.",
      products: [
        {
          "id": "etron-hybrid",
          "name": "ETRON Hybrid",
          "tagline": "Single-component liquid membrane reinforced with carbon and synthetic fibres and carbon nanotubes.",
          "image": "assets/images/loggia/etron/etron-hybrid.webp",
          "photo": true,
          "description": [
            "Hybrid is a reinforced single-component liquid membrane with carbon and synthetic fibres plus carbon nanofibres (nanotubes), forming a very strong, waterproof, anti-ponding structure.",
            "Ready to use, applied by roller, trowel or brush. Formulated with styrene-acrylic resins and high-quality additives, with pigments for UV resistance; the fibres and nanotubes keep the membrane from degrading over time.",
            "Use: waterproofing balconies, terraces, bathrooms and any surface that must be protected from water infiltration and withstand foot traffic. Can be tiled over or screeded; no reinforcement mesh needed.",
            "Theoretical coverage (as supplied): approx. 2 kg/m², minimum thickness 1.5–1.6 mm."
          ],
          "specs": [
            {
              "label": "A435000S",
              "value": "20 kg · 1 piece per box"
            },
            {
              "label": "A435000L",
              "value": "8 kg · 1 piece per box"
            },
            {
              "label": "A435000M",
              "value": "4 kg · 1 piece per box"
            },
            {
              "label": "A435000F",
              "value": "1 kg · 6 pieces per box"
            },
            {
              "label": "A435F00S",
              "value": "20 kg · 1 piece per box"
            },
            {
              "label": "A435F00L",
              "value": "8 kg · 1 piece per box"
            },
            {
              "label": "A435F00M",
              "value": "4 kg · 1 piece per box"
            },
            {
              "label": "A435F00F",
              "value": "1 kg · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/etron/etron-hybrid/1.webp",
            "assets/images/loggia/etron/etron-hybrid/2.webp",
            "assets/images/loggia/etron/etron-hybrid/3.webp",
            "assets/images/loggia/etron/etron-hybrid/4.webp"
          ],
          "source": "https://www.loggia.it/en/etron-hybrid/"
        },
        {
          "id": "etron-fybro",
          "name": "ETRON Fybro",
          "tagline": "Fibre-reinforced single-component liquid membrane.",
          "image": "assets/images/loggia/etron/etron-fybro.webp",
          "photo": true,
          "description": [
            "FYBRO is a fibre-reinforced single-component liquid membrane that forms an elastic, waterproof, anti-ponding film with good resistance to foot traffic.",
            "Ready to use. Formulated with styrene-acrylic resins and additives, with pigments for UV resistance; the synthetic fibres improve the structure of the substrate, so no extra reinforcement mesh is needed. Can be tiled over.",
            "Use: waterproofing balconies, terraces, bathrooms and any surface that must be protected from water infiltration and withstand foot traffic.",
            "Theoretical coverage (as supplied): approx. 2 kg/m², minimum thickness 1.5–1.6 mm."
          ],
          "specs": [
            {
              "label": "A404000S",
              "value": "20 kg · 1 piece per box"
            },
            {
              "label": "A404000L",
              "value": "8 kg · 1 piece per box"
            },
            {
              "label": "A404000M",
              "value": "4 kg · 1 piece per box"
            },
            {
              "label": "A404000F",
              "value": "1 kg · 6 pieces per box"
            },
            {
              "label": "A404F000S",
              "value": "20 kg · 1 piece per box"
            },
            {
              "label": "A404F000L",
              "value": "8 kg · 1 piece per box"
            },
            {
              "label": "A404F000M",
              "value": "4 kg · 1 piece per box"
            },
            {
              "label": "A404F000F",
              "value": "1 kg · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/etron/etron-fybro/1.webp",
            "assets/images/loggia/etron/etron-fybro/2.webp",
            "assets/images/loggia/etron/etron-fybro/3.webp",
            "assets/images/loggia/etron/etron-fybro/4.webp"
          ],
          "source": "https://www.loggia.it/en/etron-fybro/"
        },
        {
          "id": "etron-liquid",
          "name": "ETRON Liquid",
          "tagline": "Single-component liquid sheath, applied by roller, trowel or brush.",
          "image": "assets/images/loggia/etron/etron-liquid.webp",
          "photo": true,
          "description": [
            "LIQUID is a single-component liquid sheath that forms an elastic, waterproof, anti-ponding film with good resistance to foot traffic.",
            "Ready to use and easy to apply, with excellent adhesion on any surface, high elasticity and high resistance to UV rays and weather.",
            "Use: waterproofing balconies, terraces, bathrooms and any surface that must be protected from water infiltration and withstand foot traffic.",
            "Theoretical coverage (as supplied): approx. 2 kg/m², minimum thickness 1.5–1.6 mm."
          ],
          "specs": [
            {
              "label": "A403000S",
              "value": "20 kg · 1 piece per box"
            },
            {
              "label": "A403000L",
              "value": "8 kg · 1 piece per box"
            },
            {
              "label": "A403000M",
              "value": "4 kg · 1 piece per box"
            },
            {
              "label": "A403000F",
              "value": "1 kg · 6 pieces per box"
            },
            {
              "label": "A403F000S",
              "value": "20 kg · 1 piece per box"
            },
            {
              "label": "A403F000L",
              "value": "8 kg · 1 piece per box"
            },
            {
              "label": "A403F000M",
              "value": "4 kg · 1 piece per box"
            },
            {
              "label": "A403F000F",
              "value": "1 kg · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/etron/etron-liquid/1.webp",
            "assets/images/loggia/etron/etron-liquid/2.webp",
            "assets/images/loggia/etron/etron-liquid/3.webp",
            "assets/images/loggia/etron/etron-liquid/4.webp"
          ],
          "source": "https://www.loggia.it/en/etron-liquid/"
        },
        {
          "id": "etron-bimalta",
          "name": "ETRON Bimalta",
          "tagline": "Two-component, highly elastic cementitious waterproofing sheath.",
          "image": "assets/images/loggia/etron/etron-bimalta.webp",
          "photo": true,
          "description": [
            "BIMALTA is a waterproofing cementitious sheath, quick and easy to apply. Highly elastic, it is formulated with special acrylic polymers and selected aggregates.",
            "Suitable for waterproofing terraces, swimming pools, concrete tanks and more. It bridges cracks of over 1 mm and lasts over time. Once applied it can be left exposed, covered with acrylic sheaths or tiled.",
            "No infiltration or efflorescence on the screed, and economical because it can also be applied over old floors.",
            "Theoretical coverage: 2–2.5 kg/m², depending on the substrate."
          ],
          "specs": [
            {
              "label": "A431GRSCL",
              "value": "12 kg - pt. A · 1 piece per box"
            },
            {
              "label": "A431PARBL",
              "value": "4 kg - pt. B · 1 piece per box"
            },
            {
              "label": "A431GRCHL",
              "value": "12 kg - pt. A · 1 piece per box"
            },
            {
              "label": "A431PARBL",
              "value": "4 kg - pt. B · 1 piece per box"
            },
            {
              "label": "A431ROOXL",
              "value": "12 kg - pt. A · 1 piece per box"
            },
            {
              "label": "A431PARBL",
              "value": "4 kg - pt. B · 1 piece per box"
            },
            {
              "label": "A431VEOXL",
              "value": "12 kg - pt. A · 1 piece per box"
            },
            {
              "label": "A431PARBL",
              "value": "4 kg - pt. B · 1 piece per box"
            },
            {
              "label": "A431GRSCH",
              "value": "3 kg - pt. A · 1 piece per box"
            },
            {
              "label": "A431PARBH",
              "value": "1 kg - pt. B · 1 piece per box"
            },
            {
              "label": "A431GRCHH",
              "value": "3 kg - pt. A · 1 piece per box"
            },
            {
              "label": "A431PARBH",
              "value": "1 kg - pt. B · 1 piece per box"
            },
            {
              "label": "A431ROOXH",
              "value": "3 kg - pt. A · 1 piece per box"
            },
            {
              "label": "A431PARBH",
              "value": "1 kg - pt. B · 1 piece per box"
            },
            {
              "label": "A431VEOXH",
              "value": "3 kg - pt. A · 1 piece per box"
            },
            {
              "label": "A431PARBH",
              "value": "1 kg - pt. B · 1 piece per box"
            },
            {
              "label": "A432GRSCL",
              "value": "12 kg - pt. A · 1 piece per box"
            },
            {
              "label": "A432PARBL",
              "value": "4 kg - pt. B · 1 piece per box"
            },
            {
              "label": "A432GRCHL",
              "value": "12 kg - pt. A · 1 piece per box"
            },
            {
              "label": "A432PARBL",
              "value": "4 kg - pt. B · 1 piece per box"
            },
            {
              "label": "A432ROOXL",
              "value": "12 kg - pt. A · 1 piece per box"
            },
            {
              "label": "A432PARBL",
              "value": "4 kg - pt. B · 1 piece per box"
            },
            {
              "label": "A432VEOXL",
              "value": "12 kg - pt. A · 1 piece per box"
            },
            {
              "label": "A432PARBL",
              "value": "4 kg - pt. B · 1 piece per box"
            },
            {
              "label": "A432GRSCH",
              "value": "3 kg - pt. A · 1 piece per box"
            },
            {
              "label": "A432PARBH",
              "value": "1 kg - pt. B · 1 piece per box"
            },
            {
              "label": "A432GRCHH",
              "value": "3 kg - pt. A · 1 piece per box"
            },
            {
              "label": "A432PARBH",
              "value": "1 kg - pt. B · 1 piece per box"
            },
            {
              "label": "A432ROOXH",
              "value": "3 kg - pt. A · 1 piece per box"
            },
            {
              "label": "A432PARBH",
              "value": "1 kg - pt. B · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/etron/etron-bimalta/1.webp",
            "assets/images/loggia/etron/etron-bimalta/2.webp",
            "assets/images/loggia/etron/etron-bimalta/3.webp",
            "assets/images/loggia/etron/etron-bimalta/4.webp"
          ],
          "source": "https://www.loggia.it/en/etron-bimalta/"
        },
        {
          "id": "etron-thermo-solar",
          "name": "ETRON Thermo Solar",
          "tagline": "Reflective, heat-insulating single-component liquid membrane.",
          "image": "assets/images/loggia/etron/etron-thermo-solar.webp",
          "photo": true,
          "description": [
            "Thermo Solar is ideal for waterproofing where effective thermal insulation of the building is also wanted.",
            "High solar reflectance, effective thermal insulation and high elasticity, with resistance to weather, sun and chemical attack from pollutants.",
            "Use: building roofs in general, old bituminous coverings, concrete slabs and metal canopies."
          ],
          "specs": [
            {
              "label": "A8960000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A8960001",
              "value": "10 L · 1 piece per box"
            },
            {
              "label": "A8970000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A8970001",
              "value": "10 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/etron/etron-thermo-solar/1.webp",
            "assets/images/loggia/etron/etron-thermo-solar/2.webp",
            "assets/images/loggia/etron/etron-thermo-solar/3.webp",
            "assets/images/loggia/etron/etron-thermo-solar/4.webp"
          ],
          "source": "https://www.loggia.it/en/etron-thermo-solar/"
        },
        {
          "id": "etron-silver-solar",
          "name": "ETRON Silver Solar",
          "tagline": "Super-reflective aluminium protective finish for membranes and sheaths.",
          "image": "assets/images/loggia/etron/etron-silver-solar.webp",
          "photo": true,
          "description": [
            "SILVER SOLAR is a super-reflective protective finish for membranes and sheaths. With micro-acrylic fillers and lamellar aluminium pigments it reflects the sun’s rays, helping to keep the rooms below cooler.",
            "Use: protective finish for the sheaths of the ETRON line."
          ],
          "specs": [
            {
              "label": "A8990000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A8990005",
              "value": "5 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/etron/etron-silver-solar/1.webp",
            "assets/images/loggia/etron/etron-silver-solar/2.webp",
            "assets/images/loggia/etron/etron-silver-solar/3.webp",
            "assets/images/loggia/etron/etron-silver-solar/4.webp"
          ],
          "source": "https://www.loggia.it/en/etron-silver-solar/"
        },
        {
          "id": "etron-white-solar",
          "name": "ETRON White Solar",
          "tagline": "Super-reflective white protective finish for membranes and sheaths.",
          "image": "assets/images/loggia/etron/etron-white-solar.webp",
          "photo": true,
          "description": [
            "WHITE SOLAR is a super-reflective protective finish for membranes and sheaths. With micro-acrylic fillers and nano-technological lamellar white pigments it reflects the sun’s rays, helping to keep the rooms below cooler.",
            "Use: protective finish for the sheaths of the ETRON line."
          ],
          "specs": [
            {
              "label": "A8980000",
              "value": "14 L · 1 piece per box"
            },
            {
              "label": "A8980005",
              "value": "5 L · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/etron/etron-white-solar/1.webp",
            "assets/images/loggia/etron/etron-white-solar/2.webp",
            "assets/images/loggia/etron/etron-white-solar/3.webp",
            "assets/images/loggia/etron/etron-white-solar/4.webp"
          ],
          "source": "https://www.loggia.it/en/etron-white-solar/"
        },
        {
          "id": "etron-smalto-pool",
          "name": "ETRON Smalto Pool",
          "tagline": "Chlorinated rubber enamel for swimming pools.",
          "image": "assets/images/loggia/etron/etron-smalto-pool.webp",
          "photo": true,
          "description": [
            "SMALTO POOL is based on chlorinated rubber resins, highly resistant to weather and to chemically aggressive environments. Its light-fast pigments keep the colour stable.",
            "Use: finishing swimming pools and industrial structures and plants that need extra protection from the weather and high resistance."
          ],
          "specs": [
            {
              "label": "A4270000S",
              "value": "20 kg · 1 piece per box"
            },
            {
              "label": "A4270000M",
              "value": "5 kg · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/etron/etron-smalto-pool/1.webp",
            "assets/images/loggia/etron/etron-smalto-pool/2.webp",
            "assets/images/loggia/etron/etron-smalto-pool/3.webp",
            "assets/images/loggia/etron/etron-smalto-pool/4.webp"
          ],
          "source": "https://www.loggia.it/en/etron-smalto-pool/"
        },
        {
          "id": "etron-plio-pool",
          "name": "ETRON Plio Pool",
          "tagline": "Elastic solvent-based paint for swimming pools and floors.",
          "image": "assets/images/loggia/etron/etron-plio-pool.webp",
          "photo": true,
          "description": [
            "PLIO POOL is a solvent-based plastic paint formulated with special Pliolite resins, light-stable pigments and selected fillers, for protecting and finishing swimming pools.",
            "Use: swimming pools, old and new plaster and floors, industrial floors, and concrete or asphalt tennis and five-a-side courts."
          ],
          "specs": [
            {
              "label": "A428000S",
              "value": "20 kg · 1 piece per box"
            },
            {
              "label": "A428000M",
              "value": "5 kg · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/etron/etron-plio-pool/1.webp",
            "assets/images/loggia/etron/etron-plio-pool/2.webp",
            "assets/images/loggia/etron/etron-plio-pool/3.webp",
            "assets/images/loggia/etron/etron-plio-pool/4.webp"
          ],
          "source": "https://www.loggia.it/en/etron-plio-pool/"
        },
        {
          "id": "etron-supertekniko",
          "name": "ETRON Supertekniko",
          "tagline": "Transparent waterproofing protection for tiled terraces.",
          "image": "assets/images/loggia/etron/etron-supertekniko.webp",
          "photo": true,
          "description": [
            "SUPERTEKNIKO is a ready-to-use kit that solves water infiltration even on the most difficult substrates, such as the joints of a tiled terrace.",
            "The kit has two products: one for the first coat (waterproofing) and one for the second coat (protective finish).",
            "Theoretical coverage: about 10–13 m² per litre, depending on how absorbent the substrate is."
          ],
          "specs": [
            {
              "label": "A4330005",
              "value": "5 L · 1 piece per box"
            },
            {
              "label": "A4330007",
              "value": "1 L · 6 pieces per box"
            },
            {
              "label": "A4340005",
              "value": "5 L · 1 piece per box"
            },
            {
              "label": "A4340007",
              "value": "1 L · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/etron/etron-supertekniko/1.webp",
            "assets/images/loggia/etron/etron-supertekniko/2.webp",
            "assets/images/loggia/etron/etron-supertekniko/3.webp",
            "assets/images/loggia/etron/etron-supertekniko/4.webp"
          ],
          "source": "https://www.loggia.it/en/etron-supertekniko/"
        },
        {
          "id": "etron-micro-ground",
          "name": "ETRON Micro Ground",
          "tagline": "Single-component pozzolanic cement base coat.",
          "image": "assets/images/loggia/etron/etron-micro-ground.webp",
          "photo": true,
          "description": [
            "MICRO GROUND is a single-component cement base coat for interior and exterior surfaces, made of cement and special fillers that make it highly waterproof and resistant. Excellent adhesion and high surface hardness make it suitable for foot traffic and medium vehicle traffic.",
            "For tiles, cement substrates, balconies, saunas, pools, showers and patios: waterproofing under tiles, or covered with microcement or decorative synthetic resins, indoors and outdoors.",
            "Apply at least two coats with a stainless-steel trowel, embedding a 75 g/m² fibreglass mesh."
          ],
          "specs": [
            {
              "label": "A474000L",
              "value": "14 kg · 1 piece per box"
            },
            {
              "label": "A474000M",
              "value": "5 kg · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/etron/etron-micro-ground/1.webp",
            "assets/images/loggia/etron/etron-micro-ground/2.webp",
            "assets/images/loggia/etron/etron-micro-ground/3.webp",
            "assets/images/loggia/etron/etron-micro-ground/4.webp"
          ],
          "source": "https://www.loggia.it/en/etron-micro-ground/"
        },
        {
          "id": "etron-vapor-barrier",
          "name": "ETRON Vapor Barrier",
          "tagline": "Three-component mortar against rising damp, reinforced with carbon nanotubes.",
          "image": "assets/images/loggia/etron/etron-vapor-barrier.webp",
          "photo": true,
          "description": [
            "A waterproof shield of very high resistance, reinforced with carbon nanotubes, with excellent adhesion on any surface.",
            "Use: protecting places with high humidity due to poor air circulation, such as basements and cellars, and keeping damp away from substrates that will receive further coatings.",
            "Laboratory tests show it also protects LOGGIA decorative finishes used outdoors, such as MONOLITH, when applied before the finishing product."
          ],
          "specs": [
            {
              "label": "A406000S",
              "value": "18 kg"
            },
            {
              "label": "A406CPAS",
              "value": "2.20 L (component A)"
            },
            {
              "label": "A406CPBS",
              "value": "3.60 L (component B)"
            },
            {
              "label": "A406CPCS",
              "value": "11.88 kg (component C)"
            }
          ],
          "gallery": [
            "assets/images/loggia/etron/etron-vapor-barrier/1.webp",
            "assets/images/loggia/etron/etron-vapor-barrier/2.webp",
            "assets/images/loggia/etron/etron-vapor-barrier/3.webp",
            "assets/images/loggia/etron/etron-vapor-barrier/4.webp"
          ],
          "source": "https://www.loggia.it/en/etron-vapor-barrier/"
        },
        {
          "id": "etron-superlevel",
          "name": "ETRON Superlevel",
          "tagline": "Tintable self-levelling floor mortar in powder.",
          "image": "assets/images/loggia/etron/etron-superlevel.webp",
          "photo": true,
          "description": [
            "SUPERLEVEL is a high-performance self-levelling mortar for indoor and outdoor floors: wear-resistant, suitable for low and high temperatures, fast-setting and easy to work, based on cement and special hydraulic binders.",
            "SUPERLEVEL 50 is very fluid, for high-performance floors over large areas without closely spaced joints and with high abrasion resistance. SUPERLEVEL 60 is the tintable version, also for large areas with high abrasion resistance.",
            "Coverage: 2 kg/m² per millimetre of thickness · walkable after 24 h."
          ],
          "specs": [
            {
              "label": "A453000P",
              "value": "15 kg · 1 piece per box"
            },
            {
              "label": "A453000M",
              "value": "5 kg · 1 piece per box"
            },
            {
              "label": "A454000P",
              "value": "15 kg · 1 piece per box"
            },
            {
              "label": "A454000M",
              "value": "5 kg · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/etron/etron-superlevel/1.webp",
            "assets/images/loggia/etron/etron-superlevel/2.webp"
          ],
          "source": "https://www.loggia.it/en/etron-superlevel/"
        },
        {
          "id": "etron-microprimer-tecnico",
          "name": "ETRON Microprimer Tecnico",
          "tagline": "Ready-to-use bonding primer (water- or solvent-based).",
          "image": "assets/images/loggia/etron/etron-microprimer-tecnico.webp",
          "photo": true,
          "description": [
            "MICROPRIMER TECNICO is the bonding primer for the ETRON line, formulated with selected styrene-micro-acrylic resins with deep penetration and strong adhesion on compact substrates.",
            "Use: bonding base coat on new or previously painted substrates, indoors and outdoors.",
            "Theoretical coverage: 10–15 m² per litre, depending on how absorbent the substrate is."
          ],
          "specs": [
            {
              "label": "A4070000",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "A4070005",
              "value": "5 L · 1 piece per box"
            },
            {
              "label": "A4070007",
              "value": "1 L · 20 pieces per box"
            },
            {
              "label": "A4090000",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "A4090005",
              "value": "5 L · 1 piece per box"
            },
            {
              "label": "A4090007",
              "value": "1 L · 20 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/etron/etron-microprimer-tecnico/1.webp",
            "assets/images/loggia/etron/etron-microprimer-tecnico/2.webp",
            "assets/images/loggia/etron/etron-microprimer-tecnico/3.webp",
            "assets/images/loggia/etron/etron-microprimer-tecnico/4.webp"
          ],
          "source": "https://www.loggia.it/en/etron-microprimer-tecnico/"
        },
        {
          "id": "etron-microprimer-attak",
          "name": "ETRON Microprimer Attak",
          "tagline": "Very high-adhesion bonding primer for tiles and ceramics.",
          "image": "assets/images/loggia/etron/etron-microprimer-attak.webp",
          "photo": true,
          "description": [
            "MICROPRIMER ATTAK is a very high-adhesion bonding primer on tiles and ceramics for the products of the ETRON line."
          ],
          "specs": [
            {
              "label": "A408000M",
              "value": "5 kg · 1 piece per box"
            },
            {
              "label": "A408000F",
              "value": "1 kg · 6 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/etron/etron-microprimer-attak/1.webp",
            "assets/images/loggia/etron/etron-microprimer-attak/2.webp",
            "assets/images/loggia/etron/etron-microprimer-attak/3.webp",
            "assets/images/loggia/etron/etron-microprimer-attak/4.webp"
          ],
          "source": "https://www.loggia.it/en/etron-microprimer-attak/"
        },
        {
          "id": "etron-micromono",
          "name": "ETRON Micromono",
          "tagline": "Single-component microcement in powder (MICROMONO 300 and 500).",
          "image": "assets/images/loggia/etron/etron-micromono.webp",
          "photo": true,
          "description": [
            "MICROMONO 300 is a very high-performance single-component cementitious finish, applied by trowel, for floors, walls and furniture, indoors and outdoors. Coverage 0.8 kg/m² · light foot traffic after 72 h · fully cured in 28 days.",
            "MICROMONO 500 is a very high-performance single-component cementitious mortar, applied by trowel, for floors and walls indoors and outdoors. Coverage 0.9 kg/m² per coat · light foot traffic after 72 h · fully cured in 28 days."
          ],
          "specs": [
            {
              "label": "A453000P",
              "value": "15 kg · 1 piece per box"
            },
            {
              "label": "A453000M",
              "value": "5 kg · 1 piece per box"
            },
            {
              "label": "A467000P",
              "value": "15 kg · 1 piece per box"
            },
            {
              "label": "A454000M",
              "value": "5 kg · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/etron/etron-micromono/1.webp",
            "assets/images/loggia/etron/etron-micromono/2.webp"
          ],
          "source": "https://www.loggia.it/en/etron-micromono/"
        },
        {
          "id": "etron-draining-carpet",
          "name": "ETRON Draining Carpet",
          "tagline": "Draining, non-yellowing coating for outdoor paving made of natural stone aggregates.",
          "image": "assets/images/loggia/etron/etron-draining-carpet.webp",
          "photo": true,
          "description": [
            "DRAINING CARPET is a draining, non-yellowing coating for outdoor paving, made of natural stone aggregates.",
            "The ideal way to enhance outdoor spaces such as pavements, pedestrian areas, cycle paths, squares, courtyards, gardens and pool surrounds."
          ],
          "specs": [
            {
              "label": "A527B00M",
              "value": "25 kg · 1 piece per box"
            },
            {
              "label": "A527A00M",
              "value": "8 kg · 1 piece per box"
            },
            {
              "label": "A527A00L",
              "value": "4 kg · 1 piece per box"
            },
            {
              "label": "A527A00B",
              "value": "1 kg · 1 piece per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/etron/etron-draining-carpet/1.webp",
            "assets/images/loggia/etron/etron-draining-carpet/2.webp",
            "assets/images/loggia/etron/etron-draining-carpet/3.webp",
            "assets/images/loggia/etron/etron-draining-carpet/4.webp"
          ],
          "source": "https://www.loggia.it/en/etron-draining-carpet/"
        }
      ]
    },
    {
      id: "sanitizing",
      name: "Sanitizing Line",
      series: "Risanare & Amorina",
      summary: "Surface cleaning and hand hygiene products: the Risanare sanitizers and the Amorina alcohol-based range.",
      icon: "assets/images/loggia/sanitizing/risanare-form.webp",
      iconStyle: "photo",
      specNote: "Product codes and pack sizes as listed by Loggia. Colours and availability on request.",
      products: [
        {
          "id": "risanare-form",
          "name": "Restore Form",
          "image": "assets/images/loggia/sanitizing/risanare-form.webp",
          "photo": true,
          "specs": [
            {
              "label": "A5190000",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "A5190005",
              "value": "5 L · 4 pieces per box"
            },
            {
              "label": "A5190007",
              "value": "1 L · 12 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/sanitizing/risanare-form/1.webp",
            "assets/images/loggia/sanitizing/risanare-form/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=466&lang=1"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A519000_2.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/risanare-form/"
        },
        {
          "id": "risanare-eco-form",
          "name": "Restore Eco Form",
          "image": "assets/images/loggia/sanitizing/risanare-eco-form.webp",
          "photo": true,
          "specs": [
            {
              "label": "A5230005",
              "value": "5 L · 4 pieces per box"
            },
            {
              "label": "A5180007",
              "value": "1 L · 12 pieces per box"
            },
            {
              "label": "A5180004",
              "value": "0.75 L · 12 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/sanitizing/risanare-eco-form/1.webp",
            "assets/images/loggia/sanitizing/risanare-eco-form/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=470&lang=1"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A518000_4.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/risanare-eco-form/"
        },
        {
          "id": "risanare-clorex-igienizzante",
          "name": "Restore Clorex",
          "image": "assets/images/loggia/sanitizing/risanare-clorex-igienizzante.webp",
          "photo": true,
          "specs": [
            {
              "label": "A5180000",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "A5180001",
              "value": "10 L · 1 piece per box"
            },
            {
              "label": "A5180005",
              "value": "5 L · 4 pieces per box"
            },
            {
              "label": "A5180007",
              "value": "1 L · 12 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/sanitizing/risanare-clorex-igienizzante/1.webp",
            "assets/images/loggia/sanitizing/risanare-clorex-igienizzante/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=465&lang=1"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A518000_4.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/risanare-clorex-igienizzante/"
        },
        {
          "id": "risanare-alcool-70-igienizzante",
          "name": "Restore Alcohol 70",
          "image": "assets/images/loggia/sanitizing/risanare-alcool-70-igienizzante.webp",
          "photo": true,
          "specs": [
            {
              "label": "A5210005",
              "value": "5 L · 4 pieces per box"
            },
            {
              "label": "A5210007",
              "value": "1 L · 12 pieces per box"
            },
            {
              "label": "A5210004",
              "value": "0.75 L · 12 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/sanitizing/risanare-alcool-70-igienizzante/1.webp",
            "assets/images/loggia/sanitizing/risanare-alcool-70-igienizzante/2.webp"
          ],
          "downloads": [
            {
              "label": "Technical data sheet",
              "href": "https://loggia.docs-online.it/pages/prodotto.php?titolo=467&lang=1"
            },
            {
              "label": "Safety data sheet (EN)",
              "href": "https://www.loggia.it/wp-content/uploads/sds/EN/CLP_EN_A521000_8.pdf"
            }
          ],
          "source": "https://www.loggia.it/en/risanare-alcool-70-igienizzante/"
        },
        {
          "id": "amorina-alcool-70",
          "name": "Amorine Alcohol 70",
          "image": "assets/images/loggia/sanitizing/amorina-alcool-70.webp",
          "photo": true,
          "specs": [
            {
              "label": "A6140004",
              "value": "0.75 L · 12 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/sanitizing/amorina-alcool-70/1.webp",
            "assets/images/loggia/sanitizing/amorina-alcool-70/2.webp"
          ],
          "source": "https://www.loggia.it/en/amorina-alcool-70/"
        },
        {
          "id": "amorina-dosatore",
          "name": "Amorine Dispenser",
          "image": "assets/images/loggia/sanitizing/amorina-dosatore.webp",
          "photo": true,
          "specs": [
            {
              "label": "A6110007",
              "value": "1 L · 12 pieces per box"
            },
            {
              "label": "A6110008",
              "value": "0.5 L · 20 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/sanitizing/amorina-dosatore/1.webp",
            "assets/images/loggia/sanitizing/amorina-dosatore/2.webp"
          ],
          "source": "https://www.loggia.it/en/amorina-dosatore/"
        },
        {
          "id": "amorina-ecoform",
          "name": "Amorina Ecoform",
          "image": "assets/images/loggia/sanitizing/amorina-ecoform.webp",
          "photo": true,
          "specs": [
            {
              "label": "A6150004",
              "value": "0.75 L · 12 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/sanitizing/amorina-ecoform/1.webp",
            "assets/images/loggia/sanitizing/amorina-ecoform/2.webp"
          ],
          "source": "https://www.loggia.it/en/amorina-ecoform/"
        },
        {
          "id": "amorina-gel",
          "name": "Amorine Gel",
          "image": "assets/images/loggia/sanitizing/amorina-gel.webp",
          "photo": true,
          "specs": [
            {
              "label": "A6110002",
              "value": "60 ml · 54 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/sanitizing/amorina-gel/1.webp",
            "assets/images/loggia/sanitizing/amorina-gel/2.webp"
          ],
          "source": "https://www.loggia.it/en/amorina-gel/"
        },
        {
          "id": "amorina-spray",
          "name": "Amorine Spray",
          "image": "assets/images/loggia/sanitizing/amorina-spray.webp",
          "photo": true,
          "specs": [
            {
              "label": "A6110004",
              "value": "100 ml · 54 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/sanitizing/amorina-spray/1.webp",
            "assets/images/loggia/sanitizing/amorina-spray/2.webp"
          ],
          "source": "https://www.loggia.it/en/amorina-spray/"
        },
        {
          "id": "amorina",
          "name": "Amorine",
          "image": "assets/images/loggia/sanitizing/amorina.webp",
          "photo": true,
          "specs": [
            {
              "label": "A6110000",
              "value": "20 L · 1 piece per box"
            },
            {
              "label": "A6110001",
              "value": "10 L · 1 piece per box"
            },
            {
              "label": "A6110005",
              "value": "5 L · 4 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/sanitizing/amorina/1.webp",
            "assets/images/loggia/sanitizing/amorina/2.webp"
          ],
          "source": "https://www.loggia.it/en/amorina/"
        },
        {
          "id": "amorina-tappo-flip",
          "name": "Amorina Cap Flip",
          "image": "assets/images/loggia/sanitizing/amorina-tappo-flip.webp",
          "photo": true,
          "specs": [
            {
              "label": "A611FLIP7",
              "value": "1 L · 12 pieces per box"
            },
            {
              "label": "A611FLIP8",
              "value": "0.5 L · 20 pieces per box"
            }
          ],
          "gallery": [
            "assets/images/loggia/sanitizing/amorina-tappo-flip/1.webp",
            "assets/images/loggia/sanitizing/amorina-tappo-flip/2.webp"
          ],
          "source": "https://www.loggia.it/en/amorina-tappo-flip/"
        }
      ]
    }
  ]
};
