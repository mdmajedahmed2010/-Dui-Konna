/**
 * Ash and Aspen (ash and aspen) — Product Data & Catalog
 * Luxury Pakistani Designer Attires & Ready-to-Wear Pret
 * 100% ORIGINAL PAKISTANI & INDIAN DESIGNER WEAR • LUXURY LAWN, ORGANZA & PRET
 * House #76, Gausul Azam Avenue, Sector #13, Uttara, Dhaka - 1230, Bangladesh
 * Official Facebook: https://www.facebook.com/ashandaspenclothing/
 * All authentic product assets served locally from /ash-and-aspen/
 */

import type { ProductCardProps } from "@/components/product/product-card";

// ═══════════════════════════════════════════
// Asset image paths (local, /ash-and-aspen/)
// ═══════════════════════════════════════════
export const ASSETS = {
  logo: "/ash-and-aspen/logo.jpg",
  banner: "/ash-and-aspen/banner.jpg",
  heroImage: "/ash-and-aspen/banner.jpg",
  // Authenticated Suits & Pret from Ash and Aspen Official Collection
  img1: "/ash-and-aspen/gulaal-mint-lawn.jpg", // Gulaal Luxury Lawn 3-Piece — Seafoam Mint Whisper
  img1_detail: "/ash-and-aspen/gulaal-mint-lawn.jpg",
  img2: "/ash-and-aspen/ivory-chikankari-front.jpg", // Nur Festive Chikankari Schiffli Long Kameez — Royal Ivory
  img2_back: "/ash-and-aspen/ivory-chikankari-angle.jpg",
  img3: "/ash-and-aspen/sadabahar-taupe-blue.jpg", // Sadabahar Stitched 3-Piece Pret — Sandy Taupe & Royal Indigo
  img3_detail: "/ash-and-aspen/sadabahar-taupe-blue.jpg",
  img4: "/ash-and-aspen/crimson-ruby-festive.jpg", // Ash & Aspen Festive Velvet & Chiffon 3-Piece — Ruby Crimson Empress
  img5: "/ash-and-aspen/nur-lavender-butterfly-detail.jpg", // Nur Luxury Organza Butterfly Ensemble — Lilac Petal Whisper
  img5_detail: "/ash-and-aspen/nur-lavender-butterfly-back.jpg",
  img6: "/ash-and-aspen/gulaal-peach-standing.jpg", // Gulaal Festive Lawn 3-Piece — Coral Peach & Emerald Teal
  img6_sitting: "/ash-and-aspen/gulaal-peach-sitting.jpg",
  img7: "/ash-and-aspen/ivory-chikankari-angle.jpg", // Ivory Chikankari Schiffli Suit Angle View
  img8: "/ash-and-aspen/gulaal-peach-sitting.jpg", // Gulaal Coral Peach Lawn
  img9: "/ash-and-aspen/nur-lavender-butterfly-back.jpg", // Lavender Butterfly Full Back
  img10: "/ash-and-aspen/gulaal-mint-lawn.jpg", // Seafoam Mint Lawn
};

// ═══════════════════════════════════════════
// Product Categories — Ash and Aspen
// ═══════════════════════════════════════════
export const CATEGORIES = [
  {
    name: "Luxury Pakistani Lawn",
    slug: "pakistani-lawn",
    description: "100% authentic pure lawn 3-piece designer unstitched & stitched suits with delicate schiffli & resham embroidery, laser cutwork borders, and printed organza/chiffon dupattas.",
    image: ASSETS.img1,
    productCount: 14,
  },
  {
    name: "Organza & Chiffon Luxury",
    slug: "organza-chiffon",
    description: "Handcrafted semi-formal and festive luxury organza and pure chiffon ensembles featuring botanical florals, tilla threadwork, and delicate scalloped borders.",
    image: ASSETS.img5,
    productCount: 12,
  },
  {
    name: "Ready-to-Wear Designer Pret",
    slug: "designer-pret",
    description: "Exclusive stitched designer 3-piece and 2-piece sets, printed cambric trousers, bell sleeve embellishments, and ready-to-wear kurtis.",
    image: ASSETS.img3,
    productCount: 10,
  },
  {
    name: "Festive & Party Couture",
    slug: "festive-party",
    description: "Celebratory luxury ensembles, royal crimson kalidars, heavy embroidered velvet shirts, and flared anarkalis tailored for Eid, weddings, and formal dawats.",
    image: ASSETS.img4,
    productCount: 11,
  },
  {
    name: "Casual Lite & Kurti",
    slug: "casual-lite",
    description: "Breezy daily-wear lawn tunics, light printed 2-piece sets, and comfortable designer pret for modern elegance with zero maintenance hassle.",
    image: ASSETS.img6,
    productCount: 8,
  },
];

// ═══════════════════════════════════════════
// Collections — Featured Curations
// ═══════════════════════════════════════════
export const FEATURED_COLLECTIONS = [
  {
    id: "col-pakistani-lawn",
    title: "Gulaal Luxury Lawn Edit 2026",
    slug: "pakistani-lawn",
    subtitle: "100% Original Pakistani Designer Lawn 3-Piece with Open Parcel Inspection",
    image: ASSETS.img1,
    itemCount: 14,
  },
  {
    id: "col-festive-party",
    title: "Royal Festive & Eid Pret",
    slug: "festive-party",
    subtitle: "Heavy Resham, Tilla & Cutwork Embroidery on Premium Chiffon & Lawn",
    image: ASSETS.img4,
    itemCount: 11,
  },
  {
    id: "col-organza-pret",
    title: "Nur Organza & Butterfly Pret",
    slug: "organza-chiffon",
    subtitle: "Hand-painted Butterfly Botanicals & Floral Threadwork — Ready to Wear",
    image: ASSETS.img5,
    itemCount: 12,
  },
  {
    id: "col-sadabahar-pret",
    title: "Sadabahar Stitched Collection",
    slug: "designer-pret",
    subtitle: "Sophisticated Ready-to-Wear Stitched 3-Piece & 2-Piece Ensembles",
    image: ASSETS.img3,
    itemCount: 10,
  },
];

// ═══════════════════════════════════════════
// All Products — Ash and Aspen Catalog
// ═══════════════════════════════════════════
export const ALL_PRODUCTS: ProductCardProps[] = [
  {
    id: "AA-001",
    name: "Gulaal Luxury Lawn 3-Piece Embroidered Suit — Seafoam Mint Whisper",
    slug: "gulaal-luxury-lawn-3piece-embroidered-suit-seafoam-mint-whisper",
    price: 4250,
    compareAtPrice: 4950,
    image: ASSETS.img1,
    images: [ASSETS.img1, ASSETS.img1_detail],
    category: "Luxury Pakistani Lawn",
    isNew: true,
    isBestseller: true,
    stock: 18,
  },
  {
    id: "AA-002",
    name: "Nur Festive Chikankari & Schiffli Long Kameez 3-Piece — Royal Ivory",
    slug: "nur-festive-chikankari-schiffli-long-kameez-3piece-royal-ivory",
    price: 4450,
    compareAtPrice: 5200,
    image: ASSETS.img2,
    images: [ASSETS.img2, ASSETS.img2_back],
    category: "Luxury Pakistani Lawn",
    isNew: true,
    isBestseller: true,
    stock: 15,
  },
  {
    id: "AA-003",
    name: "Sadabahar Stitched 3-Piece Pret Suit — Sandy Taupe & Royal Indigo",
    slug: "sadabahar-stitched-3piece-pret-suit-sandy-taupe-royal-indigo",
    price: 3650,
    compareAtPrice: 4200,
    image: ASSETS.img3,
    images: [ASSETS.img3, ASSETS.img3_detail],
    category: "Ready-to-Wear Designer Pret",
    isNew: true,
    isBestseller: true,
    stock: 16,
  },
  {
    id: "AA-004",
    name: "Ash & Aspen Festive Velvet & Chiffon 3-Piece — Ruby Crimson Empress",
    slug: "ash-aspen-festive-velvet-chiffon-3piece-ruby-crimson-empress",
    price: 4650,
    compareAtPrice: 5400,
    image: ASSETS.img4,
    images: [ASSETS.img4, ASSETS.img6],
    category: "Festive & Party Couture",
    isNew: true,
    isBestseller: true,
    stock: 12,
  },
  {
    id: "AA-005",
    name: "Nur Luxury Organza Butterfly Ensemble — Lilac Petal Whisper",
    slug: "nur-luxury-organza-butterfly-ensemble-lilac-petal-whisper",
    price: 3950,
    compareAtPrice: 4600,
    image: ASSETS.img5,
    images: [ASSETS.img5, ASSETS.img5_detail],
    category: "Organza & Chiffon Luxury",
    isNew: true,
    isBestseller: true,
    stock: 14,
  },
  {
    id: "AA-006",
    name: "Gulaal Festive Lawn 3-Piece with Tassels — Coral Peach & Emerald Teal",
    slug: "gulaal-festive-lawn-3piece-tassels-coral-peach-emerald-teal",
    price: 4350,
    compareAtPrice: 5100,
    image: ASSETS.img6,
    images: [ASSETS.img6, ASSETS.img6_sitting],
    category: "Luxury Pakistani Lawn",
    isNew: true,
    isBestseller: true,
    stock: 17,
  },
  {
    id: "AA-007",
    name: "Nur Royal Schiffli Embroidered Stitched Suit — Pearl Cream Glow",
    slug: "nur-royal-schiffli-embroidered-stitched-suit-pearl-cream-glow",
    price: 4150,
    compareAtPrice: 4800,
    image: ASSETS.img7,
    images: [ASSETS.img7, ASSETS.img2],
    category: "Ready-to-Wear Designer Pret",
    isBestseller: true,
    stock: 19,
  },
  {
    id: "AA-008",
    name: "Gulaal Signature Summer Lawn 3-Piece — Sunset Coral Blossom",
    slug: "gulaal-signature-summer-lawn-3piece-sunset-coral-blossom",
    price: 3950,
    compareAtPrice: 4650,
    image: ASSETS.img8,
    images: [ASSETS.img8, ASSETS.img6],
    category: "Luxury Pakistani Lawn",
    isNew: true,
    stock: 14,
  },
  {
    id: "AA-009",
    name: "Nur Pure Silk Chiffon Dupatta Kurti Ensemble — Lavender Dream",
    slug: "nur-pure-silk-chiffon-dupatta-kurti-ensemble-lavender-dream",
    price: 3850,
    compareAtPrice: 4500,
    image: ASSETS.img9,
    images: [ASSETS.img9, ASSETS.img5],
    category: "Organza & Chiffon Luxury",
    isNew: true,
    stock: 13,
  },
  {
    id: "AA-010",
    name: "Ash & Aspen Boutique Signature Pret Kurti — Mint Frost Schiffli",
    slug: "ash-aspen-boutique-signature-pret-kurti-mint-frost-schiffli",
    price: 3550,
    compareAtPrice: 4100,
    image: ASSETS.img10,
    images: [ASSETS.img10, ASSETS.img1_detail],
    category: "Casual Lite & Kurti",
    isNew: true,
    isBestseller: true,
    stock: 20,
  },
];

// ═══════════════════════════════════════════
// Filtered Helper Collections
// ═══════════════════════════════════════════
export const NEW_ARRIVALS = ALL_PRODUCTS.filter((p) => p.isNew);
export const FEATURED_PRODUCTS = ALL_PRODUCTS.slice(0, 8);
export const LAWN_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Luxury Pakistani Lawn");
export const ORGANZA_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Organza & Chiffon Luxury");
export const PRET_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Ready-to-Wear Designer Pret");
export const PARTY_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Festive & Party Couture");
export const SILK_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Casual Lite & Kurti");

// Backward compatibility aliases
export const DESIGNER_PRODUCTS = PRET_PRODUCTS;
export const CASUAL_PRODUCTS = LAWN_PRODUCTS;
export const VINTAGE_PRODUCTS = LAWN_PRODUCTS;
export const FARSI_PRODUCTS = PRET_PRODUCTS;
export const VELVET_PRODUCTS = PARTY_PRODUCTS;
export const JEWELRY_PRODUCTS = PARTY_PRODUCTS;
export const COORD_PRODUCTS = PRET_PRODUCTS;
export const ABAYA_PRODUCTS = PARTY_PRODUCTS;
export const KAFTAN_PRODUCTS = PARTY_PRODUCTS;
export const DRESS_PRODUCTS = PARTY_PRODUCTS;
export const KURTI_PRODUCTS = PRET_PRODUCTS;
export const CHIFFON_PRODUCTS = ORGANZA_PRODUCTS;
export const BRIDAL_PRODUCTS = PARTY_PRODUCTS;

// Helper to filter by category slug
export function getProductsByCategory(slug: string): ProductCardProps[] {
  switch (slug) {
    case "pakistani-lawn":
    case "zam-zam-lawn":
      return LAWN_PRODUCTS;
    case "organza-chiffon":
      return ORGANZA_PRODUCTS;
    case "designer-pret":
    case "designer-boutique":
      return PRET_PRODUCTS;
    case "festive-party":
    case "festive-party-wear":
    case "party-wear":
      return PARTY_PRODUCTS;
    case "casual-lite":
    case "silk-velvet":
    case "casual-chic":
    case "artisan-block":
      return SILK_PRODUCTS;
    case "new-arrivals":
      return NEW_ARRIVALS;
    case "featured":
      return FEATURED_PRODUCTS;
    default:
      return ALL_PRODUCTS;
  }
}

// ═══════════════════════════════════════════
// Seeding Helpers & Backwards-Compatible Exports
// ═══════════════════════════════════════════
export const DEMO_CATEGORIES = CATEGORIES;

export const DEMO_PRODUCTS = ALL_PRODUCTS.map((p) => {
  const catObj = CATEGORIES.find((c) => c.name === p.category) || CATEGORIES[0];
  const catName = catObj?.name || "Luxury Pakistani Lawn";
  const catSlug = catObj?.slug || "pakistani-lawn";
  const imgs = p.images && p.images.length > 0 ? p.images : [p.image];
  return {
    name: p.name,
    slug: p.slug,
    description: `${p.name} — Curated by Ash and Aspen (House #76, Gausul Azam Avenue, Sector #13, Uttara, Dhaka). 100% original Pakistani designer fabric with intricate resham & schiffli embroidery, premium drape organza/chiffon dupatta, and dyed trousers. Open Parcel Policy guaranteed across all 64 districts of Bangladesh.`,
    price: p.price,
    isFeatured: p.isBestseller ?? true,
    images: imgs,
    category: {
      name: catName,
      slug: catSlug,
    },
    variants: [
      {
        size: "Unstitched (3-Piece)",
        color: "As Shown",
        price: p.price,
        stock: Math.max(5, Math.floor((p.stock ?? 15) / 2)),
        images: imgs,
      },
      {
        size: "Stitched Ready-to-Wear (M)",
        color: "As Shown",
        price: p.price + 450,
        stock: Math.max(3, Math.floor((p.stock ?? 15) / 3)),
        images: imgs,
      },
      {
        size: "Stitched Ready-to-Wear (L)",
        color: "As Shown",
        price: p.price + 450,
        stock: Math.max(3, Math.floor((p.stock ?? 15) / 4)),
        images: imgs,
      },
    ],
  };
});
