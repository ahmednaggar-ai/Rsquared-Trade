/* =================================================================
   MB CRUSHER CATALOGUE DATA
   The single source for mbcrusher.html. To add, edit or remove a product,
   change it here; the page builds itself from this file.

   product fields
     id        unique, used in links (mbcrusher.html?type=<category>#<id>)
     name      model name
     tagline   short line under the name (optional)
     image     product photo (WebP)
     carriers  machines it fits + weight range in tonnes
               type: one of the keys in MB_CRUSHER.carriers
               max: null means "from <min> t upwards"
     group     (accessories) heading the item is listed under
     fits      (accessories) category ids it works with, or ['all']
   category.video: path to an .mp4 to show on the category page, or null
   ================================================================= */
window.MB_CRUSHER = {
  carriers: {
    excavator:  { label: 'Excavator',          icon: 'assets/images/mbcrusher/icons/excavator.webp' },
    crane:      { label: 'Crane',              icon: 'assets/images/mbcrusher/icons/crane.webp' },
    demolition: { label: 'Demolition machine', icon: 'assets/images/mbcrusher/icons/demolition.webp' }
  },
  categories: [
    {
      id: "crusher-buckets",
      name: "Crusher Buckets",
      series: "BF / MB-L",
      summary: "The latest-generation crusher. It can be fitted to any excavator, skid loader, loader and backhoe loader.",
      icon: "assets/images/mbcrusher/categories/crusher-buckets.webp",
      video: null /* legacy page used MB/Videos/Crusher_Buckets.mp4 (file not in repo) */,
      products: [
        {"id": "mb-c50-s4", "name": "MB-C50 S4", "tagline": "MB's little work of magic", "image": "assets/images/mbcrusher/products/crusher-buckets/mb-c50-s4.webp", "carriers": [{"type": "crane", "min": 5, "max": 9},{"type": "excavator", "min": 5, "max": 8}]},
        {"id": "bf60-1-s4", "name": "BF60.1 S4", "tagline": "Small but for great needs", "image": "assets/images/mbcrusher/products/crusher-buckets/bf60-1-s4.webp", "carriers": [{"type": "excavator", "min": 8, "max": 18}]},
        {"id": "bf70-2-s4", "name": "BF70.2 S4", "tagline": "Handy and compact", "image": "assets/images/mbcrusher/products/crusher-buckets/bf70-2-s4.webp", "carriers": [{"type": "excavator", "min": 15, "max": 25}]},
        {"id": "bf80-3-s4", "name": "BF80.3 S4", "tagline": "Light and reliable", "image": "assets/images/mbcrusher/products/crusher-buckets/bf80-3-s4.webp", "carriers": [{"type": "excavator", "min": 18.5, "max": 29}]},
        {"id": "bf90-3-s4", "name": "BF90.3 S4", "tagline": "The bucket that made history", "image": "assets/images/mbcrusher/products/crusher-buckets/bf90-3-s4.webp", "carriers": [{"type": "excavator", "min": 21, "max": 32}]},
        {"id": "bf120-4-s4", "name": "BF120.4 S4", "tagline": "Ideal for large projects", "image": "assets/images/mbcrusher/products/crusher-buckets/bf120-4-s4.webp", "carriers": [{"type": "excavator", "min": 30, "max": 45}]},
        {"id": "bf135-8", "name": "BF135.8", "tagline": "Inexhaustible power", "image": "assets/images/mbcrusher/products/crusher-buckets/bf135-8.webp", "carriers": [{"type": "excavator", "min": 43, "max": 80}]},
        {"id": "bf150-10", "name": "BF150.10", "tagline": "The records bucket", "image": "assets/images/mbcrusher/products/crusher-buckets/bf150-10.webp", "carriers": [{"type": "excavator", "min": 70, "max": 100}]},
        {"id": "mb-l120-s2", "name": "MB-L120 S2", "tagline": "Great in a small package", "image": "assets/images/mbcrusher/products/crusher-buckets/mb-l120-s2.webp", "carriers": [{"type": "excavator", "min": 4, "max": 9},{"type": "demolition", "min": 6.6, "max": 12},{"type": "crane", "min": 3, "max": 6}]},
        {"id": "mb-l140-s2", "name": "MB-L140 S2", "tagline": "Compact with performance", "image": "assets/images/mbcrusher/products/crusher-buckets/mb-l140-s2.webp", "carriers": [{"type": "excavator", "min": 4, "max": 10},{"type": "demolition", "min": 7, "max": 13},{"type": "crane", "min": 3, "max": 6}]},
        {"id": "mb-l160-s2", "name": "MB-L160 S2", "tagline": "Practical, handy, and efficient", "image": "assets/images/mbcrusher/products/crusher-buckets/mb-l160-s2.webp", "carriers": [{"type": "excavator", "min": 7, "max": 11},{"type": "demolition", "min": 7, "max": 11},{"type": "crane", "min": 4.5, "max": 7}]},
        {"id": "mb-l200-s2", "name": "MB-L200 S2", "tagline": "The crusher bucket changes shape", "image": "assets/images/mbcrusher/products/crusher-buckets/mb-l200-s2.webp", "carriers": [{"type": "excavator", "min": 7, "max": 12},{"type": "demolition", "min": 7, "max": 12},{"type": "crane", "min": 6, "max": 8}]}
      ]
    },
    {
      id: "screening-buckets",
      name: "Screening Buckets",
      series: "MB-S / MB-LS",
      summary: "Perfect for the selection of natural materials, both before and after the crushing phase.",
      icon: "assets/images/mbcrusher/categories/screening-buckets.webp",
      video: null /* legacy page used MB/Videos/Screening Bucket.mp4 (file not in repo) */,
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
      video: null /* legacy page used MB/Videos/Shafts Screener.mp4 (file not in repo) */,
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
      video: null /* legacy page used MB/Videos/Drum_Cutter.mp4 (file not in repo) */,
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
      video: null /* legacy page used MB/Videos/MB-G350 - MB-G450_EN.mp4 (file not in repo) */,
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
      video: null,
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
