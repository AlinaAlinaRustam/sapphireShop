import { type } from "@testing-library/user-event/dist/type";

export const products = [
  {
    sku: "AL2023",
    image: [
      "/images/w6.webp",
      "/images/ws1.webp",
      "/images/ws2.webp",
      "/images/ws3.webp",
    ],
    type: "summer-24",
    collection: "unstitch",
    fabric: "lawn",
    category: "women",
    campain: "new-arrivals",
    salePrice: 40,
    price: 3489,
    title: "2 PIECE - PRINTED LAWN SUIT",
    discription:
      "Immerse yourself in summer florals with our two-piece printed suit in blue featuring a lawn shirt and a blended tissue dupatta.",
    details: {
      topFabric: "Printed Lawn | 3m",
      topcolor: "Blue",
      topdetails: "Printed Lawn Shirt 3M",
      dupattadetails: "Printed Blended Tissue Dupatta 2.5M",
      dupattaFabric: "Blended Tissue | 2.5m",
      dupattacolor: "Blue",
      trouserdetails: "",
      trousercolor: "",
      trouserfabric: "",
    },
  },
  {
    sku: "AL2024",
    image: [
      "/images/w7.webp",
      "/images/ws4.webp",
      "/images/ws5.webp",
      "/images/ws6.webp",
    ],
    type: "lawn-24",
    collection: "unstitch",
    fabric: "lawn",
    category: "women",
    salePrice: 30,
    campain: "new-arrivals",
    price: 3489,
    title: "3 PIECE - PRINTED LAWN SUIT",
    discription:
      "Immerse yourself in a floral fantasy with our two-piece multicoloured suit featuring a lawn shirt and cambric trousers.",
    details: {
      topFabric: "Printed Lawn Shirt 3M",
      topcolor: "Multicolor",
      topdetails: "Printed Lawn Shirt 3M",
      trouserdetails: "Printed Cambric Trouser 2.5M",
      trousercolor: "Multicolor",
      trouserfabric: "Cambric",
    },
  },
  {
    sku: "AL2025",
    image: [
      "/images/w8.webp",
      "/images/ws7.webp",
      "/images/ws8.webp",
      "/images/ws9.webp",
    ],
    type: "2-piece",
    collection: "unstitch",
    fabric: "lawn",
    category: "women",
    campain: "new-arrivals",
    price: 3489,
    title: "2 PIECE - PRINTED SATIN SUIT",
    discription:
      "Make a sophisticated statement with our black and off white two-piece suit featuring a blended satin shirt and trousers.",
    details: {
      topFabric: "Blended Satin",
      topcolor: "Black & Off white",
      topdetails: "Printed Blended Satin Shirt 2.5M",
      trouserdetails: "Printed Blended Satin Trouser 1.85M",
      trousercolor: "Blended Satin",
      trouserfabric: "Black & Off white",
    },
  },
  {
    sku: "AL2026",
    image: [
      "/images/ws10.webp",
      "/images/w1.avif",
      "/images/ws11.webp",
      "/images/ws12.webp",
    ],
    type: "summer-24",
    collection: "unstitch",
    fabric: "lawn",
    category: "women",
    campain: "new-arrivals",
    price: 5990,
    title: "3 PIECE - PRINTED SATIN SUIT",
    discription:
      "Make a bespoke statement with our three-piece printed grey suit featuring a blended satin shirt, blended tissue dupatta and raw silk trousers.",
    details: {
      topFabric: "Blended Satin",
      topFabric: " Grey",
      topdetails: "Printed Blended Satin Shirt 2.3M",
      dupattadetails: "Printed Blended Tissue Dupatta 2.5M",
      dupattaFabric: "Blended Tissue | 2.5m",
      dupattacolor: "Grey",
      trouserdetails: "Dyed Viscose Raw Silk Trouser 2.5M",
      trousercolor: "Grey",
      trouserfabric: "Viscose Raw Silk",
    },
  },
  {
    sku: "AL2027",
    image: [
      "/images/w20.webp",
      "/images/w21.webp",
      "/images/w22.webp",
      "/images/w23.webp",
    ],
    type: "1-piece",
    collection: "unstitch",
    fabric: "lawn",
    category: "women",
    campain: "new-arrivals",
    price: 3489,
    title: " PRINTED LAWN SHIRT",
    discription:
      "Make a statement this season with our printed green shirt.",

    details: {
      topFabric: "Printed Lawn | 3m",
      topFabric: "Green",
      topdetails: "Printed Lawn Shirt 3M",
    },
  },
  {
    sku: "AL2028",
    image: [
      "/images/w24.webp",
      "/images/w25.webp",
      "/images/w26.webp",
      "/images/w27.webp",
    ],
    type: "1-piece ",
    collection: "unstitch",
    fabric: "lawn",
    category: "women",
    campain: "new-arrivals",
    price: 3489,
    title: "PRINTED LAWN SUIT",
    discription:
      "Make a statement with our olive green printed shirt.",
    details: {
      topFabric: "Printed Lawn Shirt 3M",
      topcolor: "Olice",
      topdetails: "Printed Lawn Shirt 3M",
      
    },
  },
  {
    sku: "AL2029",
    image: [
      "/images/w28.webp",
      "/images/w29.webp",
      "/images/w30.webp",
      
    ],
    type: "dupatta",
    collection: "ready-to-wear",
    fabric: "voil",
    category: "women",
    campain: "new-arrivals",
    price: 3489,
    title: "PRINTED VOILE DUPATTA",
    discription:
      "Complete your look with our black and white printed voile dupatta.",
    details: {
        dupattadetails: "Printed Voil Dupatta 2.5M",
        dupattaFabric: " Voile ",
        dupattacolor: "Black & White",
    },
  },
  {
    sku: "AL2030",
    image: [
      "/images/w32.webp",
      "/images/w33.webp",
      "/images/w34.webp",
      "/images/w31.webp",
     
    ],
    type: "bottom",
    collection: "ready-to-wear",
    fabric: "cotton",
    category: "women",
    campain: "new-arrivals",
    price: 5990,
    title: "EMBROIDERED JACQUARD SHIRT",
    discription:
      "Dyed Front with Embroidery, Dyed Back, Full Sleeves, Round Neckline with a slit",
    details: {
      topFabric: "Cotton Jacquard",
      topcolor: "  Yellow",
      topdetails: "Printed Blended Satin Shirt 2.3M",
    
    },
  },
  {
    sku: "AL2031",
    image: [
      "/images/w36.webp",
      "/images/w37.webp",
      "/images/w38.webp",
      "/images/w35.webp",
    ],
    type: "shirts",
    collection: "ready-to-wear",
    fabric: "lawn",
    category: "women",
    campain: "new-arrivals",
    salePrice: 40,
    price: 3489,
    title: "2 PIECE - PRINTED LAWN SUIT",
    discription:
      "Printed Front, Printed Back, Full Sleeves, Round Neckline with a placket",

    details: {
      topFabric: "lawn",
      topcolor: "Black & White",
      topdetails: "Printed Lawn Shirt ",
      
    },
  },
  {
    sku: "AL2032",
    image: [
      "/images/w40.webp",
      "/images/w41.webp",
      "/images/w42.webp",
      "/images/w43.webp",
    ],
    type: "short-sleeve",
    collection: "ready-to-wear",
    fabric: "cotton",
    category: "women",
    campain: "new-arrivals",
    price: 3489,
    title: "EMBROIDERED JACQUARD SHIRT",
    discription:
      "Elevate your summer style with our deep pink embroidered A-line shirt, with a round neckline",
    details: {
      topFabric: "Cotton Jacquard",
      topcolor: "Deep Pink",
      topdetails: "Dyed Front with Embroidery, Dyed Back, Full Sleeves, Round Neckline",
      
    },
  },
  {
    sku: "AL2033",
    image: [
      "/images/w44.webp",
      "/images/w45.webp",
      "/images/w46.webp",
      "/images/w47.webp",
    ],
    type: "shirts",
    collection: "ready-to-wear",
    fabric: "lawn",
    category: "women",
    salePrice: 40,
    campain: "new-arrivals",
    price: 3489,
    title: "PRINTED LAWN SHIRT",
    discription:
      "Keep it classic in our black, long A-line printed cambric shirt featuring a round neckline with a slit.",
    details: {
      topFabric: "Blended Satin",
      topcolor: "Black & Off white",
      topdetails: "Printed Front, Printed Back, Full Sleeves, Round Neckline with a slit",
      
    },
  },
 
  {
    sku: "AL2001",
    image: [
      "/images/w48.webp",
      "/images/w49.webp",
      "/images/w50.webp",
      "/images/w51.webp",
    ],
    type: "pajama",
    collection: "sleep-wear",
    fabric: "cotton",
    category: "women",
    campain: "Summer new-arrivals",
    price: 5990,
    title: "SEERSUCKER WIDE-LEG TROUSERS",
    discription:
      "Super wide leg trousers in seersucker fabric. Adjustable waist with drawcord. Side pockets..",
    details: {
      topFabric: " 98% Cotton 2% Lycra",
      topcolor: " orange",
      
     
    },
  },
  {
    sku: "AL2222",
    image: [
      "/images/w48.webp",
      "/images/w49.webp",
      "/images/w50.webp",
      "/images/w51.webp",
    ],
    type: "sets",
    collection: "sleep-wear",
    fabric: "cotton",
    category: "women",
    campain: "Summer new-arrivals",
    price: 5990,
    title: "SEERSUCKER WIDE-LEG TROUSERS",
    discription:
      "Super wide leg trousers in seersucker fabric. Adjustable waist with drawcord. Side pockets..",
    details: {
      topFabric: " 98% Cotton 2% Lycra",
      topcolor: " orange",
      
     
    },
  },
  {
    sku: "AL2232",
    image: [
      "/images/wes2.webp",
      "/images/wes2.webp",
      "/images/wes3.webp",
      "/images/wes4.webp",
    ],
    type: "t-shirt-sleep",
    collection: "sleep-wear",
    fabric: "cotton",
    category: "women",
    campain: "Summer new-arrivals",
    price: 5990,
    title: "SEERSUCKER WIDE-LEG TROUSERS",
    discription:
      "Super wide leg trousers in seersucker fabric. Adjustable waist with drawcord. Side pockets..",
    details: {
      topFabric: " 98% Cotton 2% Lycra",
      topcolor: " orange",
      
     
    },
  },
  {
    sku: "AL202",
    image: [
      "/images/w52.webp",
      "/images/w53.webp",
      "/images/w54.webp",
      "/images/w55.webp",
    ],
    type: "dresses-sleep",
    collection: "Sleep-wear",
    fabric: "cotton",
    category: "women",
    campain: "Summer new-arrivals",
    price: 5990,
    title: "SEERSUCKER WIDE-LEG TROUSERS",
    discription:
      "Super wide leg trousers in seersucker fabric. Adjustable waist with drawcord. Side pockets..",
    details: {
      topFabric: " 98% Cotton 2% Lycra",
      topcolor: " orange",
      
     
    },
  },
  {
    sku: "AL2034",
    image: [
      "/images/m3.webp",
      "/images/ms1.webp",
      "/images/ms2.webp",
    
    ],
    type: "Summer-24",
    collection: "unstitched",
    fabric: "cotton",
    category: "men",
    campain: "Summer new-arrivals",
    price: 5990,
    salePrice: 30,
    title: "SATIN SUIT",
    discription:
      "Make a dapper statement with our navy blue two-piece wash and wear dobby suit",
    details: {
      topFabric: " 100% Fine Cotton",
      topcolor: " Navy Blue",
      
     
    },
  },
  {
    sku: "AL2002",
    image: [
      "/images/m4.webp",
      "/images/ms3.webp",
      "/images/ms4.webp",
      "/images/ms5.webp",
    ],
    type: "kurtas",
    collection: "unstitched",
    fabric: "cotton",
    category: "men",
    campain: "Summer new-arrivals",
    price: 5990,
    title: "WASH & WEAR DOBBY SUIT",
    discription:
      "Super wide leg trousers in seersucker fabric. Adjustable waist with drawcord. Side pockets..",
    details: {
      topFabric: " Blended Viscose Fabric",
      topcolor: " Dark Green",
      
     
    },
  },
  {
    sku: "AL2003",
    image: [
      "/images/m5.webp",
      "/images/ms6.jpg",
      "/images/ms7.webp",
      
    ],
    type: "outfits",
    collection: "unstitched",
    fabric: "cotton",
    category: "men",
    campain: "Summer new-arrivals",
    price: 5990,
    salePrice: 50,
    title: "SEERSUCKER WIDE-LEG TROUSERS",
    discription:
      "Super wide leg trousers in seersucker fabric. Adjustable waist with drawcord. Side pockets..",
    details: {
      topFabric: " 98% Cotton 2% Lycra",
      topcolor: " white",
      
     
    },
  },
  {
    sku: "AL2004",
    image: [
      "/images/m6.webp",
      "/images/ms8.webp",
      "/images/ms9.jpg",
      
    ],
    type: "outfits",
    collection: "unstitched",
    fabric: "cotton",
    category: "men",
    campain: "Summer new-arrivals",
    price: 5990,
    title: "WASH & WEAR DOBBY SUIT",
    discription:
      "Super wide leg trousers in seersucker fabric. Adjustable waist with drawcord. Side pockets..",
    details: {
      topFabric: " 98% Cotton 2% Lycra",
      topcolor: " Black",
      
     
    },
  },
  {
    sku: "AL2005",
    image: [
      "/images/m12.webp",
      "/images/ms3.webp",
      "/images/ms4.webp",
      "/images/ms5.webp",
    ],
    type: "summer-24s",
    collection: "stitch",
    fabric: "Blended Viscose",
    category: "men",
    salePrice: 30,
    campain: "Summer new-arrivals",
    price: 5990,
    title: "EMBROIDERED WASH & WEAR KURTA",
    discription:
      "Super wide leg trousers in seersucker fabric. Adjustable waist with drawcord. Side pockets..",
    details: {
      topFabric: "  Blended Viscose",
      topcolor: "Grey ",
      
     
    },
  },
  {
    sku: "AL2006",
    image: [
      "/images/m13.webp",
      "/images/ms12.webp",
      "/images/ms13.webp",
      "/images/ms14.webp",
    ],
    type: "fabric-glossary",
    collection: "unstitched",
    fabric: "cotton",
    category: "men",
    campain: "Summer new-arrivals",
    price: 5990,
    title: "EMBROIDERED WASH & WEAR KURTA",
    discription:
      "Super wide leg trousers in seersucker fabric. Adjustable waist with drawcord. Side pockets..",
    details: {
      topFabric: " Blended Viscose",
      topcolor: " Sky Blue",
      
     
    },
  },
  {
    sku: "AL2036",
    image: [
      "/images/wes2.webp",
      "/images/wes2.webp",
      "/images/wes3.webp",
      "/images/wes4.webp",
    ],
    type: "t-shirt",
    collection: "west",
    fabric: "cotton",
    category: "women",
    campain: "Summer new-arrivals",
    price: 5990,
    title: "WHITE T-SHIRT",
    discription:
      "Denim-effect short sleeved dress with belt. V neck and front button through opening. Side pockets and side slits.",
    details: {
      topFabric: " 100% Cotton",
      topcolor: " Denim Blue",
      
     
    },
  },
  {
    sku: "AL2082",
    image: [
      "/images/w56.webp",
      "/images/w57.webp",
      "/images/w58.webp",
      "/images/w59.webp",
    ],
    type: "w-summer-24",
    collection: "west",
    fabric: "cotton",
    category: "women",
    campain: "Summer new-arrivals",
    price: 5990,
    title: "DENIM-EFFECT SHORT SLEEVED DRESS",
    discription:
      "Denim-effect short sleeved dress with belt. V neck and front button through opening. Side pockets and side slits.",
    details: {
      topFabric: " 100% Cotton",
      topcolor: " Denim Blue",
      
     
    },
  },
  {
    sku: "AL2081",
    image: [
      "/images/w56.webp",
      "/images/w57.webp",
      "/images/w58.webp",
      "/images/w59.webp",
    ],
    type: "top",
    collection: "west",
    fabric: "cotton",
    category: "women",
    campain: "Summer new-arrivals",
    price: 5990,
    title: "DENIM-EFFECT SHORT SLEEVED DRESS",
    discription:
      "Denim-effect short sleeved dress with belt. V neck and front button through opening. Side pockets and side slits.",
    details: {
      topFabric: " 100% Cotton",
      topcolor: " Denim Blue",
      
     
    },
  },
  {
    sku: "AL2083",
    image: [
      "/images/wes5.webp",
      "/images/wes6.webp",
      "/images/wes7.webp",
      "/images/wes8.webp",
    ],
    type: "dresses",
    collection: "west",
    fabric: "cotton",
    category: "women",
    campain: "Summer new-arrivals",
    price: 5990,
    title: "Gingham Tier Dress",
    discription:
      "Denim-effect short sleeved dress with belt. V neck and front button through opening. Side pockets and side slits.",
    details: {
      topFabric: " 100% Cotton",
      topcolor: " Denim Blue",
      
     
    },
  },
  {
    sku: "AL2039",
    image: [
      "/images/w72.webp",
      "/images/w73.webp",
      "/images/w74.webp",
      "/images/w75.webp",
    ],
    type: "abbaya",
    collection: "modest-wear",
    fabric: "polyster",
    category: "women",
    campain: "Summer new-arrivals",
    price: 5990,
    title: "HAND EMBELLISHED KAFTAN ABAYA SET",
    discription:
      "Top with embroidered collar. Front button through opening. Puffed sleeves with cuffs.",
    details: {
      topFabric: " 100% Polyester",
      topcolor: "Pink",
      
     
    },
  },
  {
    sku: "AL2040",
    image: [
      "/images/68.webp",
      "/images/69.webp",
      "/images/w70.webp",
      "/images/w71.webp",
    ],
    type: "abbaya",
    salePrice: 30,
    collection: "modest-wear",
    fabric: "polyster",
    category: "women",
    campain: "Summer new-arrivals",
    price: 5990,
    title: "FRONT OPEN ABAYA SET",
    discription:
      "Full length, front open abaya set in soft and drapey chiffon fabric. Inner abaya in Nida fabric. Diamante detail on front and back. Hijab with diamante detai",
    details: {
      topFabric: " 100% Polyester",
      topcolor: "Black",
      
     
    },
  },
  {
    sku: "AL2010",
    image: [
      
      "/images/ks1.webp",
      "/images/ks2.webp",
      "/images/ks3.webp",
    ],
    type: "girl-kurtas",
    collection: "girls",
    fabric: "lawn",
    category: "kids",
    campain: "new-arrivals",
    price: 3489,
    title: "2 PIECE - EMBROIDERED LAWN SUIT",
    discription:"Embroidered Shirt detail with pintucks pleated right, left and central panel with round hem, Plain Back, Plain Sleeves",
      
    details: {
      topFabric: "Cambric",
      topcolor: "Mustard",
      topdetails: "Printed Lawn Shirt 3M",
      dupattadetails: "Add sunshine to your little girls's closet in our mustard embroidered sleeveless shirt and matching culottes.",
     
    },
  },
  {
    sku: "AL2011",
    image: [
      
      "/images/ks4.webp",
      "/images/ks5.webp",
      "/images/ks6.webp",
    ],
    type: "boy-kurtas",
    collection: "boys",
    fabric: "lawn",
    category: "kids",
    campain: "new-arrivals",
    price: 3489,
    title: "2 PIECE - PRINTED LAWN SUIT",
    discription:
      "Printed Kurta with hidden placket, detail with contrast top stitch on placket, Printed Back, Printed Sleeves",
    details: {
      topFabric: "Cambric",
      topcolor: "Maron",
      topdetails: "Let your little man shine this season in our maroon printed kurta and straight trousers.",
    },
  },
  {
    sku: "AL2011",
    image: [
      
      
      "/images/ks5.webp",
      "/images/ks6.webp",
      "/images/ks4.webp",
    ],
    type: "summer-24b",
    collection: "boys",
    fabric: "lawn",
    category: "kids",
    campain: "new-arrivals",
    price: 3489,
    title: "2 PIECE - PRINTED LAWN SUIT",
    discription:
      "Printed Kurta with hidden placket, detail with contrast top stitch on placket, Printed Back, Printed Sleeves",
    details: {
      topFabric: "Cambric",
      topcolor: "Maron",
      topdetails: "Let your little man shine this season in our maroon printed kurta and straight trousers.",
    },
  },
  {
    sku: "AL2012",
    image: [
     
      "/images/ks7.webp",
      "/images/ks8.webp",
      "/images/ks7.webp",
      "/images/ks8.webp",
      
    ],
    type: "girls-bedding",
    collection: "kids-bedding",
    fabric: "lawn",
    category: "kids",
    campain: "new-arrivals",
    price: 3489,
    title: "MELONIE - QUILT COVER",
    discription:
      "Savour the colours of summer at home with our watermelon-themed, multicoloured, 100% cotton quilt cover and pillowcases.",
    details: {
      topFabric: "100% Cotton",
      topcolor: "Multi",
      
     
    },
  },
  {
    sku: "AL2013",
    image: [
      "/images/k4.webp",
      "/images/ks9.webp",
      "/images/ks10.webp",
    ],
    type: "Outfits",
    collection: "girls",
    fabric: "lawn",
    category: "kids",
    campain: "new-arrivals",
    price: 3489,
    title: "2 PIECE - PRINTED LAWN SUIT",
    discription:
      "Immerse yourself in summer florals with our two-piece printed suit in blue featuring a lawn shirt and a blended tissue dupatta.",
    details: {
      topFabric: "Printed Lawn | 3m",
      topFabric: "Blue",
      topdetails: "Printed Lawn Shirt 3M",
     
      
      trousercolor: "Navy Blue",
      trouserfabric: "Cambric",
    },
  },
  {
    sku: "AL2014",
    image: [
      "/images/k15.webp",
      "/images/ks11.webp",
      "/images/ks12.webp",
      
    ],
    type: "outfits-b",
    collection: "boys",
    fabric: "lawn",
    category: "kids",
    campain: "new-arrivals",
    price: 3489,
    title: "EMBROIDERED WASH & WEAR SUIT",
    discription:
      "Printed Kurta with hidden placket, detail with contrast top stitch on placket, Printed Back, Printed Sleeves.",
    details: {
      topFabric: "100% Cotton",
      topcolor: "Multi",
      
     
    },
  },
  {
    sku: "AL2077",
    image: [
      "/images/ks13.webp",
      "/images/ks14.webp",
      "/images/ks13.webp",
      "/images/ks14.webp",
      
      
    ],
    type: "boys-bedding",
    collection: "bedding",
    fabric: "lawn",
    category: "kids",
    salePrice: 50,
    campain: "new-arrivals",
    price: 3489,
    title: "EMBROIDERED WASH & WEAR SUIT",
    discription:
      "Curate a picture-perfect OOTD for your little one in our mint green, embroidered loose-fit kurta and straight trousers.",
    details: {
      topFabric: "Summer Wash & Wear",
      topcolor: "Mint & Green",
      topdetails: "Embroidered Loose fit short kurta , Plain Back, Plain Sleeves",
     
    },
  },
  
  {
    sku: "AL2067",
    image: [
      "/images/k7.webp",
      "/images/ks15.webp",
      "/images/ks17.webp",
      
    ],
    type: "fusion",
    collection: "girls",
    fabric: "lawn",
    category: "kids",
    campain: "new-arrivals",
    price: 3489,
    title: "EMBROIDERED WASH & WEAR SUIT",
    discription:
      "Printed Kurta with hidden placket, detail with contrast top stitch on placket, Printed Back, Printed Sleeves.",
    details: {
      topFabric: "100% Cotton",
      topcolor: "Multi",
      
     
    },
  },
  {
    sku: "AL2067",
    image: [
      "/images/k7.webp",
      "/images/ks15.webp",
      "/images/ks17.webp",
      
    ],
    type: "g-bottom",
    collection: "girls",
    fabric: "lawn",
    category: "kids",
    campain: "new-arrivals",
    price: 3489,
    title: "EMBROIDERED WASH & WEAR SUIT",
    discription:
      "Printed Kurta with hidden placket, detail with contrast top stitch on placket, Printed Back, Printed Sleeves.",
    details: {
      topFabric: "100% Cotton",
      topcolor: "Multi",
      
     
    },
  },
  {
    sku: "AL2015",
    image: [
      "/images/b4.webp",
      "/images/bs1.webp",
      "/images/bs2.webp",
      
    ],
    type: 'lips',
    collection: "Cosmetics",
    category: "beauty",
    campain: "new-arrivals",
    price: 3489,
    title: "HYDRATING LIPSTICK - BERRY RED",
    discription:
      "A nourishing, hydrating, and long-lasting lipstick that is infused with candelilla wax and castor oil to deliver the ultimate pigment with a high gloss finish.",
    details: {
      
      topcolor: "Red",
      
     
    },
  },
  {
    sku: "AL2016",
    image: [
      "/images/b6.webp",
      "/images/bs3.webp",
      "/images/bs4.webp",
      
    ],
    type: 'eyes',
    collection: "Cosmetics",
    category: "beauty",
    campain: "new-arrivals",
    price: 3489,
    title: "EYESHADOW PALETTE - SMOKEY GLOW",
    discription:
      "A premium quality eyeshadow palette consisting of six easy-to-blend, soft mattes, and dazzling shimmers. With their lightweight, sheer, and metallic finishes, these eyeshadows can be used to create a natural or a dramatic eye look for all your occasions.",
    details: {
      
      topcolor: "Smokey Glow",
      
     
    },
  },
  {
    sku: "AL24676",
    image: [
      "/images/n1.webp",
      "/images/n1.webp",
      "/images/n1.webp",
      "/images/n1.webp",
      
    ],
    type: 'nails',
    collection: "Cosmetics",
    category: "beauty",
    campain: "new-arrivals",
    price: 3489,
    title: "EYESHADOW PALETTE - SMOKEY GLOW",
    discription:
      "A premium quality eyeshadow palette consisting of six easy-to-blend, soft mattes, and dazzling shimmers. With their lightweight, sheer, and metallic finishes, these eyeshadows can be used to create a natural or a dramatic eye look for all your occasions.",
    details: {
      
      topcolor: "Smokey Glow",
      
     
    },
  },
  {
    sku: "AL20383",
    image: [
      "/images/bf1.webp",
      "/images/bf2.webp",
      "/images/bf1.webp",
      "/images/bf2.webp",
      
      
    ],
    type: 'face',
    collection: "Cosmetics",
    category: "beauty",
    campain: "new-arrivals",
    price: 3489,
    title: "EYESHADOW PALETTE - SMOKEY GLOW",
    discription:
      "A premium quality eyeshadow palette consisting of six easy-to-blend, soft mattes, and dazzling shimmers. With their lightweight, sheer, and metallic finishes, these eyeshadows can be used to create a natural or a dramatic eye look for all your occasions.",
    details: {
      
      topcolor: "Smokey Glow",
      
     
    },
  },
  {
    sku: "AL2017",
    image: [
      "/images/b9.webp",
      "/images/bs5.webp",
      "/images/bs6.webp",
      
    ],
    type: 'floral',
    collection: "shop-by-scents",
    salePrice: 50,
    category: "beauty",
    campain: "new-arrivals",
    price: 3489,
    title: "DREAM",
    discription:
      "An absolute Dream scent featuring jasmine, bergamot and magnolia top notes.",
    details: {
      
      
     
    },
  },
  {
    sku: "AL2018",
    image: [
      "/images/b10.webp",
      "/images/bs7.webp",
      "/images/bs8.webp",
      
    ],
    type: 'fruity',
    collection: "shop-by-scents",
    category: "beauty",
    campain: "new-arrivals",
    price: 3489,
    title: "Diamond Glow",
    discription:
      "An absolute Dream scent featuring jasmine, bergamot and magnolia top notes.",
    details: {
      
      
     
    },
  },
  {
    sku: "AL2448",
    image: [
      "/images/b12.webp",
      "/images/b12.webp",
      "/images/b12.webp",
     
      
    ],
    type: 'oriental',
    collection: "shop-by-scents",
    category: "beauty",
    campain: "new-arrivals",
    price: 3489,
    title: "IMPULSE",
    discription:
      "An absolute Dream scent featuring jasmine, bergamot and magnolia top notes.",
    details: {
      
      
     
    },
  },
  {
    sku: "AL2878",
    image: [
      "/images/b13.webp",
      "/images/b13.webp",
      "/images/b13.webp",
      "/images/b13.webp",
      
      
    ],
    type: 'woody',
    collection: "shop-by-scents",
    category: "beauty",
    campain: "new-arrivals",
    price: 3489,
    title: "ENIDMA",
    discription:
      "An absolute Dream scent featuring jasmine, bergamot and magnolia top notes.",
    details: {
      
      
     
    },
  },
  {
    sku: "AL2019",
    image: [
      "/images/bf5.webp",
      "/images/bf5.webp",
      "/images/bf5.webp",
      "/images/bf5.webp",
     
      
      
    ],
    type: 'body-mists',
    collection: "Fragrences",
    category: "beauty",
    campain: "new-arrivals",
    price: 3489,
    title: "Bloom",
    discription:
      "An absolute Dream scent featuring jasmine, bergamot and magnolia top notes.",
    details: {
      
      
     
    },
  },
  {
    sku: "AL2020",
    image: [
      "/images/b11.webp",
      "/images/bs11.webp",
     
      "/images/bs11.webp",
      "/images/b11.webp",
    
      
    ],
    type: 'women-fragrences',
    collection: "Fragrences",
    category: "beauty",
    campain: "new-arrivals",
    price: 3489,
    title: "CHARM",
    discription:
      "An absolute Dream scent featuring jasmine, bergamot and magnolia top notes.",
    details: {
      
      
     
    },
  },
  {
    sku: "AL2058",
    image: [
      "/images/bs7.webp",
      "/images/bs8.webp",
      "/images/bs7.webp",
      "/images/bs8.webp",
     
    
      
    ],
    type: 'women-fragrences',
    collection: "Fragrences",
    category: "beauty",
    campain: "new-arrivals",
    price: 3489,
    title: "DIAMOND",
    discription:
      "An absolute Dream scent featuring jasmine, bergamot and magnolia top notes.",
    details: {
      
      
     
    },
  },
 
  {
    sku: "AL2858",
    image: [
      "/images/bf3.webp",
      "/images/b14.webp",
      "/images/bf3.webp",
      "/images/b14.webp",
     
    
      
    ],
    type: 'men-fragrences',
    collection: "Fragrences",
    category: "beauty",
    campain: "new-arrivals",
    price: 3489,
    title: "VELVET",
    discription:
      "An absolute Dream scent featuring jasmine, bergamot and magnolia top notes.",
    details: {
      
      
     
    },
  },
  {
    sku: "AL2021",
    image: [
      "/images/h7.webp",
      "/images/h8.webp",
      "/images/h8.webp",
    "/images/h7.webp",
      
    ],
    type: '',
    collection: "bath-linen",
    category: "home",
    campain: "new-arrivals",
    price: 3489,
    title: "Wilderness - Bed Set",
    discription:
      "Elevate your summer space with our black and brown coloured quilt cover and pillowcases featuring cheetah print designs.",
    details: {
      
      
     
    },
  },
  {
    sku: "AL2022",
    image: [
      "/images/h8.webp",
      "/images/h8.webp",
      "/images/h8.webp",
    
      
    ],
    type: 'bedsets',
    collection: "Bedding",
    category: "home",
    salePrice: 30,
    campain: "new-arrivals",
    price: 3489,
    title: "Pillow Set",
    discription:
      "Elevate your summer space with our black and brown coloured quilt cover and pillowcases featuring cheetah print designs.",
    details: {
      
      
     
    },
  },
  {
    sku: "AL2099",
    image: [
      "/images/h9.webp",
     "/images/h10.webp",
      "/images/h10.webp",
    
      
    ],
    type: 'bedsheets',
    collection: "Bedding",
    category: "home",
    campain: "new-arrivals",
    price: 3489,
    title: "Pillow Set",
    discription:
      "An absolute Dream scent featuring jasmine, bergamot and magnolia top notes.",
    details: {
      
      
     
    },
  },
  {
    sku: "AL2098",
    image: [
      "/images/h10.webp",
      "/images/h9.webp",
      "/images/h10.webp",
      
    
      
    ],
    type: 'fittedsheets',
    collection: "Bedding",
    salePrice: 30,
    category: "home",
    campain: "new-arrivals",
    price: 3489,
    title: "Field Bouquet - Bed Set",
    discription:
      "An absolute Dream scent featuring jasmine, bergamot and magnolia top notes.",
    details: {
      
      
     
    },
  },
  
  {
    sku: "AL2097",
    image: [
      "/images/h13.webp",
      "/images/h14.webp",
      "/images/h13.webp",
    
      
    ],
    type: 'bedspreads',
    collection: "Bedding",
    salePrice: 40,
    category: "home",
    campain: "new-arrivals",
    price: 3489,
    title: "Floral Fantasy - Fitted Sheet",
    discription:
      "An absolute Dream scent featuring jasmine, bergamot and magnolia top notes.",
    details: {
      
      
     
    },
  },
  {
    sku: "AL2096",
    image: [
      "/images/h20.webp",
      "/images/h20.webp",
      "/images/h20.webp",
    
    
      
    ],
    type: 'towels',
    collection: "bath-linen",
    category: "home",
    campain: "new-arrivals",
    price: 3489,
    title: "Whipped Cream - Hand Towel",

    discription:
      "An absolute Dream scent featuring jasmine, bergamot and magnolia top notes.",
    details: {
      
      
     
    },
  },
  {
    sku: "AL2095",
    image: [
      "/images/h22.webp",
      "/images/h23.webp",
      "/images/h22.webp",
      "/images/h22.webp",
    
      
    ],
    type: 'table-runner',
    collection: "Table & Kitchen Linen",
    category: "home",
    campain: "new-arrivals",
    price: 3489,
    title: "Deep Claret - Hand Towel",
    discription:
      "Our scarlet hued hand towel features a dobby border.",
    details: {
      
      
     
    },
  },
  {
    sku: "AL2094",
    image: [
      "/images/h24.webp",
      "/images/h25.webp",
      "/images/h24.webp",
    
      
    ],
    type: 'cusions&covers',
    collection: "living",
    category: "home",
    campain: "new-arrivals",
    salePrice: 50,
    price: 3489,
    title: "Cheetah - Cushion Cover",
    discription:
      "Curate statement corners this season with our gold and plum, square cushion cover featuring digital cheetah printed design.",
    details: {
      
      
     
    },
  },
  {
    sku: "AL2093",
    image: [
      "/images/h19.webp",
      "/images/h18.webp",
      "/images/h17.webp",
      "/images/h19.webp",
    
      
    ],
    collection: "shop-by-type",
    category: "home",
    campain: "new-arrivals",
    price: 3489,
    title: "Wilderness - Bed in a Bag",
    discription:
      "An absolute Dream scent featuring jasmine, bergamot and magnolia top notes.",
    details: {
      
      
     
    },
  },

];
export  const category = products.category
export default category;