/**
 * Enaya's | Sylhet — Product Data & Catalog
 * Elevate Your Style | Luxury Women's Boutique & Authentic Pakistani Designer Fashion
 * Nayasarak Point, Sylhet, Bangladesh — https://www.facebook.com/Enayas.Sylhet/
 * All images served locally from /public/enayas-assets/
 */

import type { ProductCardProps } from "@/components/product/product-card";

// ═══════════════════════════════════════════
// Asset image paths (local, /public/enayas-assets/)
// ═══════════════════════════════════════════
export const ASSETS = {
  logo: "/logo.jpg",
  banner: "/banner.jpg",
  heroImage: "/banner.jpg",
  img1: "/enayas-assets/719352002_1286458136803756_4691248053674653785_n.jpg", // Ivory Kurti with Navy Embroidery & Palazzo
  img2: "/enayas-assets/715711023_1284853183630918_5862540271831156994_n.jpg", // Boutique Racks with Enaya's Tags
  img3: "/enayas-assets/719135606_1286458063470430_8962135561909446686_n.jpg", // Midnight Black Zardozi Festive Suit
  img4: "/enayas-assets/675125574_1249000667216170_7745782444532547030_n.jpg", // Powder Blue Embroidered 3pc Suit
  img5: "/enayas-assets/707826824_1279140170868886_3190213517486885594_n.jpg", // Crimson Magenta Suit with Lime Dupatta
  img6: "/enayas-assets/709737585_1279951017454468_6214352059036910036_n.jpg", // Russian Silk Champagne Handmade Adda Kurti
  img7: "/enayas-assets/709865523_1278333164282920_1859523836051406463_n.jpg", // Mint Green Pakistani Lawn Suit
  img8: "/enayas-assets/668325784_1238512208265016_877673681815563832_n.jpg", // Pure Cotton White Farsi Kurti
  img9: "/enayas-assets/707774863_1279140164202220_9001242221184187792_n.jpg", // Sage Green Organza Client Review
  img10: "/enayas-assets/710651719_1279138907535679_2355904992786898129_n.jpg", // Pink Striped Kurti with Floral Trouser
  img11: "/enayas-assets/710651720_1279138910869012_4457400297116198386_n.jpg", // Full Client Feedback Ensemble
  img12: "/enayas-assets/719352002_1286458136803756_4691248053674653785_n.jpg",
};

// ═══════════════════════════════════════════
// Product Categories — Enaya's | Sylhet
// ═══════════════════════════════════════════
export const CATEGORIES = [
  {
    name: "Pakistani Lawn Collection",
    slug: "pakistani-lawn",
    description: "Authentic premium Pakistani pure lawn 3-piece sets with intricate neckline needlework and lightweight dupattas.",
    image: ASSETS.img7,
    productCount: 8,
  },
  {
    name: "Designer Luxury & Pre-Orders",
    slug: "designer-luxury",
    description: "100% original Sadabahar, Jaz & Russian Silk couture sets with handmade adda work and silk dupattas.",
    image: ASSETS.img2,
    productCount: 6,
  },
  {
    name: "Party Wear & Festive Organza",
    slug: "party-wear",
    description: "Exquisite hand-embellished party ensembles, zardozi work, organza dupattas, and celebratory formal wear.",
    image: ASSETS.img3,
    productCount: 7,
  },
  {
    name: "Casual & Farsi Sets",
    slug: "farsi-sets",
    description: "Breathable pure cotton farsi sets, farsi salwars, and effortless daily luxury 2-piece and 3-piece suits.",
    image: ASSETS.img1,
    productCount: 5,
  },
  {
    name: "Velvet & Winter Luxury",
    slug: "velvet-luxury",
    description: "Regal micro-velvet embroidered kaftans, winter shawls, and rich festive suits for the cooler seasons.",
    image: ASSETS.img6,
    productCount: 4,
  },
  {
    name: "Boutique Jewelry & Beauty",
    slug: "boutique-jewelry",
    description: "Curated traditional earrings, festive jhumkas, and complementary styling accents for every ensemble.",
    image: ASSETS.img5,
    productCount: 5,
  },
];

// ═══════════════════════════════════════════
// Collections — Featured Curations
// ═══════════════════════════════════════════
export const FEATURED_COLLECTIONS = [
  {
    id: "col-pakistani-lawn-festive",
    title: "Eid & Festive Lawn Edit",
    slug: "pakistani-lawn",
    subtitle: "Authentic Pure Lawn 3-Piece Sets with Embroidered Dupattas",
    image: ASSETS.img7,
    itemCount: 8,
  },
  {
    id: "col-designer-preorders",
    title: "Original Pakistani Designer Pre-Orders",
    slug: "designer-luxury",
    subtitle: "Sadabahar, Russian Silk & Luxury Handcrafted Pret",
    image: ASSETS.img2,
    itemCount: 6,
  },
  {
    id: "col-signature-farsi",
    title: "Enaya's Signature Farsi & Co-ords",
    slug: "farsi-sets",
    subtitle: "Pure Cotton Comfort with Artisanal Embroidery & Flared Salwars",
    image: ASSETS.img1,
    itemCount: 5,
  },
];

// ═══════════════════════════════════════════
// All Products — Enaya's Sylhet Catalog
// ═══════════════════════════════════════════
export const ALL_PRODUCTS: ProductCardProps[] = [
  // --- PAKISTANI LAWN COLLECTION ---
  {
    id: "eny-001",
    name: "Enaya's Mint Green Embroidered Pakistani Lawn 3-Piece",
    slug: "mint-green-embroidered-pakistani-lawn-3piece",
    price: 3850,
    compareAtPrice: 4400,
    image: ASSETS.img7,
    images: [ASSETS.img7, ASSETS.img4],
    category: "Pakistani Lawn Collection",
    isNew: true,
    isBestseller: true,
    stock: 14,
  },
  {
    id: "eny-002",
    name: "Powder Blue Pastel Embroidered Floral Lawn Set",
    slug: "powder-blue-pastel-embroidered-floral-lawn-set",
    price: 3950,
    compareAtPrice: 4600,
    image: ASSETS.img4,
    images: [ASSETS.img4, ASSETS.img7],
    category: "Pakistani Lawn Collection",
    isNew: true,
    stock: 12,
  },

  // --- DESIGNER LUXURY & PRE-ORDERS ---
  {
    id: "eny-003",
    name: "Sadabahar Original Luxury Embroidered Couture 3-Piece",
    slug: "sadabahar-original-luxury-embroidered-couture-3piece",
    price: 13500,
    compareAtPrice: 15500,
    image: ASSETS.img2,
    images: [ASSETS.img2, ASSETS.img6],
    category: "Designer Luxury & Pre-Orders",
    isNew: true,
    isBestseller: true,
    stock: 6,
  },
  {
    id: "eny-004",
    name: "Russian Silk Champagne Handcrafted Adda Work Ensemble",
    slug: "russian-silk-champagne-handcrafted-adda-work-ensemble",
    price: 12800,
    compareAtPrice: 14500,
    image: ASSETS.img6,
    images: [ASSETS.img6, ASSETS.img2],
    category: "Designer Luxury & Pre-Orders",
    isNew: true,
    stock: 5,
  },

  // --- PARTY WEAR & FESTIVE ORGANZA ---
  {
    id: "eny-005",
    name: "Midnight Black Royal Zardozi Hand-Embellished Formal Suit",
    slug: "midnight-black-royal-zardozi-hand-embellished-formal-suit",
    price: 6850,
    compareAtPrice: 7800,
    image: ASSETS.img3,
    images: [ASSETS.img3, ASSETS.img5],
    category: "Party Wear & Festive Organza",
    isNew: true,
    isBestseller: true,
    stock: 10,
  },
  {
    id: "eny-006",
    name: "Crimson Magenta Embroidered Suit with Lime Silk Dupatta",
    slug: "crimson-magenta-embroidered-suit-with-lime-silk-dupatta",
    price: 6250,
    compareAtPrice: 7200,
    image: ASSETS.img5,
    images: [ASSETS.img5, ASSETS.img3],
    category: "Party Wear & Festive Organza",
    isNew: true,
    stock: 9,
  },
  {
    id: "eny-007",
    name: "Sage Green Embroidered Organza Luxury Festive 3-Piece",
    slug: "sage-green-embroidered-organza-luxury-festive-3piece",
    price: 7450,
    compareAtPrice: 8500,
    image: ASSETS.img9,
    images: [ASSETS.img9, ASSETS.img3],
    category: "Party Wear & Festive Organza",
    isBestseller: true,
    stock: 8,
  },

  // --- CASUAL & FARSI SETS ---
  {
    id: "eny-008",
    name: "Ivory Cream Embroidered Kurti with Navy Dupatta & Palazzo",
    slug: "ivory-cream-embroidered-kurti-with-navy-dupatta-palazzo",
    price: 2650,
    compareAtPrice: 3100,
    image: ASSETS.img1,
    images: [ASSETS.img1, ASSETS.img8],
    category: "Casual & Farsi Sets",
    isNew: true,
    isBestseller: true,
    stock: 18,
  },
  {
    id: "eny-009",
    name: "Pure Cotton Flared Farsi Salwar Daily Boutique 2-Piece",
    slug: "pure-cotton-flared-farsi-salwar-daily-boutique-2piece",
    price: 2250,
    compareAtPrice: 2650,
    image: ASSETS.img8,
    images: [ASSETS.img8, ASSETS.img1],
    category: "Casual & Farsi Sets",
    stock: 15,
  },
  {
    id: "eny-010",
    name: "Rose Pink Striped Embroidered Kurti with Floral Trouser",
    slug: "rose-pink-striped-embroidered-kurti-with-floral-trouser",
    price: 2450,
    compareAtPrice: 2900,
    image: ASSETS.img10,
    images: [ASSETS.img10, ASSETS.img11],
    category: "Casual & Farsi Sets",
    stock: 12,
  },

  // --- VELVET & WINTER LUXURY ---
  {
    id: "eny-011",
    name: "Royal Micro-Velvet Embroidered Kaftan & Shawl Set",
    slug: "royal-micro-velvet-embroidered-kaftan-shawl-set",
    price: 6500,
    compareAtPrice: 7500,
    image: ASSETS.img6,
    images: [ASSETS.img6, ASSETS.img3],
    category: "Velvet & Winter Luxury",
    isNew: true,
    stock: 7,
  },

  // --- BOUTIQUE JEWELRY & BEAUTY ---
  {
    id: "eny-012",
    name: "Handcrafted Traditional Jhumka & Festive Earring Set",
    slug: "handcrafted-traditional-jhumka-festive-earring-set",
    price: 1450,
    compareAtPrice: 1800,
    image: ASSETS.img5,
    images: [ASSETS.img5, ASSETS.img9],
    category: "Boutique Jewelry & Beauty",
    stock: 20,
  },
];

// ═══════════════════════════════════════════
// Filtered Helper Collections
// ═══════════════════════════════════════════
export const NEW_ARRIVALS = ALL_PRODUCTS.filter((p) => p.isNew);
export const FEATURED_PRODUCTS = ALL_PRODUCTS.slice(0, 8);
export const LAWN_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Pakistani Lawn Collection");
export const DESIGNER_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Designer Luxury & Pre-Orders");
export const PARTY_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Party Wear & Festive Organza");
export const FARSI_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Casual & Farsi Sets");
export const VELVET_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Velvet & Winter Luxury");
export const JEWELRY_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Boutique Jewelry & Beauty");

// Backward compatibility aliases for previous routes
export const COORD_PRODUCTS = FARSI_PRODUCTS;
export const ABAYA_PRODUCTS = DESIGNER_PRODUCTS;
export const KAFTAN_PRODUCTS = VELVET_PRODUCTS;
export const DRESS_PRODUCTS = PARTY_PRODUCTS;
export const KURTI_PRODUCTS = LAWN_PRODUCTS;
export const ORGANZA_PRODUCTS = PARTY_PRODUCTS;
export const CHIFFON_PRODUCTS = LAWN_PRODUCTS;
export const BRIDAL_PRODUCTS = PARTY_PRODUCTS;

// Helper to filter by category slug
export function getProductsByCategory(slug: string): ProductCardProps[] {
  switch (slug) {
    case "pakistani-lawn":
      return LAWN_PRODUCTS;
    case "designer-luxury":
      return DESIGNER_PRODUCTS;
    case "party-wear":
      return PARTY_PRODUCTS;
    case "farsi-sets":
      return FARSI_PRODUCTS;
    case "velvet-luxury":
      return VELVET_PRODUCTS;
    case "boutique-jewelry":
      return JEWELRY_PRODUCTS;
    // Backward compatibility aliases
    case "coord-sets":
      return FARSI_PRODUCTS;
    case "abayas":
      return DESIGNER_PRODUCTS;
    case "kaftans":
      return VELVET_PRODUCTS;
    case "dresses":
      return PARTY_PRODUCTS;
    case "kurti-three-piece":
      return LAWN_PRODUCTS;
    case "new-arrivals":
      return NEW_ARRIVALS;
    case "featured":
      return FEATURED_PRODUCTS;
    default:
      return ALL_PRODUCTS;
  }
}
