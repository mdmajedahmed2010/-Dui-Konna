/**
 * 365 Fashion House — Product Data & Catalog
 * Pioneer in Authentic Pakistani Attires in Bangladesh
 * 100% ORIGINAL PAKISTANI & INDIAN DESIGNER WEAR • LUXURY LAWN, ORGANZA & PRET
 * Dhaka - 1206, Bangladesh
 * Official Facebook: https://www.facebook.com/365FashionHouse/
 * All authentic product assets served locally from /365-assets/
 */

import type { ProductCardProps } from "@/components/product/product-card";

// ═══════════════════════════════════════════
// Asset image paths (local, /365-assets/)
// ═══════════════════════════════════════════
export const ASSETS = {
  logo: "/365-assets/logo.jpg",
  banner: "/365-assets/banner.jpg",
  heroImage: "/365-assets/banner.jpg",
  // 10 Authenticated Suits & Kurtis from 365 Fashion House Official Collection
  img1: "/365-assets/lilac-lawn-suit.jpg", // Mahee's Luxury Lawn 3-Piece — Lilac Blossom
  img1_detail: "/365-assets/lilac-lawn-suit-detail.jpg",
  img2: "/365-assets/mint-lawn-front.jpg", // Khaadi Signature Luxury Lawn 3-Piece — Mint Ivory Oasis
  img2_back: "/365-assets/mint-lawn-back.jpg",
  img3: "/365-assets/pistachio-kurti.jpg", // Agha Noor Festive Organza Kurti — Pistachio Floral Glow
  img3_detail: "/365-assets/pistachio-kurti-detail.jpg",
  img4: "/365-assets/royal-maroon-velvet.jpg", // Chevron Festive Chiffon & Velvet 3-Piece — Crimson Empress
  img5: "/365-assets/rose-quartz-organza.jpg", // Beechtree Pastel Organza Luxury 3-Piece — Rose Quartz
  img6: "/365-assets/emerald-anarkali-suit.jpg", // Festive Designer Flared Anarkali — Emerald Majesty
  img7: "/365-assets/mint-lawn-front.jpg", // Mint Lawn Front
  img8: "/365-assets/pistachio-kurti.jpg", // Pistachio Kurti
  img9: "/365-assets/lilac-lawn-suit.jpg", // Lilac Lawn
  img10: "/365-assets/royal-maroon-velvet.jpg", // Crimson Velvet
};

// ═══════════════════════════════════════════
// Product Categories — 365 Fashion House
// ═══════════════════════════════════════════
export const CATEGORIES = [
  {
    name: "Luxury Pakistani Lawn",
    slug: "pakistani-lawn",
    description: "100% authentic pure lawn 3-piece designer unstitched suits with intricate neckline embroidery, printed borders, and premium organza/chiffon dupattas.",
    image: ASSETS.img1,
    productCount: 12,
  },
  {
    name: "Organza & Chiffon Luxury",
    slug: "organza-chiffon",
    description: "Handcrafted semi-formal and festive luxury organza and chiffon ensembles featuring tilla, resham threadwork, and delicate cutwork borders.",
    image: ASSETS.img5,
    productCount: 10,
  },
  {
    name: "Ready-to-Wear Designer Pret",
    slug: "designer-pret",
    description: "Exclusive stitched designer kurtis, matching 2-piece sets, and ready-to-wear tunics with pearl necklines and bell sleeve embellishments.",
    image: ASSETS.img3,
    productCount: 8,
  },
  {
    name: "Festive & Party Couture",
    slug: "festive-party",
    description: "Celebratory luxury ensembles, royal zardozi kalidars, heavy velvet shirts, and flared anarkalis tailored for weddings, dawats, and Eid festivities.",
    image: ASSETS.img4,
    productCount: 9,
  },
  {
    name: "Silk & Velvet Luxury",
    slug: "silk-velvet",
    description: "Rich jewel-toned velvet shirts, raw silk trousers, and heavily embroidered shawl ensembles for winter galas and evening celebrations.",
    image: ASSETS.img6,
    productCount: 7,
  },
];

// ═══════════════════════════════════════════
// Collections — Featured Curations
// ═══════════════════════════════════════════
export const FEATURED_COLLECTIONS = [
  {
    id: "col-pakistani-lawn",
    title: "Pakistani Luxury Lawn Edit 2026",
    slug: "pakistani-lawn",
    subtitle: "100% Original Pakistani Designer Lawn 3-Piece with Open Parcel Inspection",
    image: ASSETS.img1,
    itemCount: 12,
  },
  {
    id: "col-festive-party",
    title: "Royal Festive & Eid Pret",
    slug: "festive-party",
    subtitle: "Heavy Zari, Tilla & Cutwork Embroidery on Premium Chiffon & Silk",
    image: ASSETS.img4,
    itemCount: 9,
  },
  {
    id: "col-organza-pret",
    title: "Agha Noor & Designer Pret",
    slug: "designer-pret",
    subtitle: "Signature Floral Embroidery & Pearl Embellishments — Ready to Wear",
    image: ASSETS.img3,
    itemCount: 8,
  },
];

// ═══════════════════════════════════════════
// All Products — 365 Fashion House Catalog
// ═══════════════════════════════════════════
export const ALL_PRODUCTS: ProductCardProps[] = [
  {
    id: "365-001",
    name: "Mahee's Luxury Lawn 3-Piece Unstitched Suit — Lilac Blossom",
    slug: "mahees-luxury-lawn-3piece-unstitched-suit-lilac-blossom",
    price: 3850,
    compareAtPrice: 4500,
    image: ASSETS.img1,
    images: [ASSETS.img1, ASSETS.img1_detail],
    category: "Luxury Pakistani Lawn",
    isNew: true,
    isBestseller: true,
    stock: 18,
  },
  {
    id: "365-002",
    name: "Khaadi Signature Luxury Lawn 3-Piece — Mint Ivory Oasis",
    slug: "khaadi-signature-luxury-lawn-3piece-mint-ivory-oasis",
    price: 4250,
    compareAtPrice: 4950,
    image: ASSETS.img2,
    images: [ASSETS.img2, ASSETS.img2_back],
    category: "Luxury Pakistani Lawn",
    isNew: true,
    isBestseller: true,
    stock: 14,
  },
  {
    id: "365-003",
    name: "Agha Noor Festive Organza Kurti — Pistachio Floral Glow",
    slug: "agha-noor-festive-organza-kurti-pistachio-floral-glow",
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
    id: "365-004",
    name: "Chevron Royal Festive Chiffon & Velvet 3-Piece — Crimson Empress",
    slug: "chevron-royal-festive-chiffon-velvet-3piece-crimson-empress",
    price: 5450,
    compareAtPrice: 6200,
    image: ASSETS.img4,
    images: [ASSETS.img4, ASSETS.img1],
    category: "Festive & Party Couture",
    isNew: true,
    isBestseller: true,
    stock: 12,
  },
  {
    id: "365-005",
    name: "Beechtree Pastel Organza Luxury 3-Piece — Rose Quartz",
    slug: "beechtree-pastel-organza-luxury-3piece-rose-quartz",
    price: 4650,
    compareAtPrice: 5400,
    image: ASSETS.img5,
    images: [ASSETS.img5, ASSETS.img1],
    category: "Organza & Chiffon Luxury",
    isNew: true,
    stock: 15,
  },
  {
    id: "365-006",
    name: "Festive Designer Flared Anarkali Suit — Emerald Majesty",
    slug: "festive-designer-flared-anarkali-suit-emerald-majesty",
    price: 4950,
    compareAtPrice: 5800,
    image: ASSETS.img6,
    images: [ASSETS.img6, ASSETS.img4],
    category: "Festive & Party Couture",
    isNew: true,
    isBestseller: true,
    stock: 14,
  },
  {
    id: "365-007",
    name: "Sana Safinaz Muzlin Luxury Lawn 3-Piece — Pastel Whisper",
    slug: "sana-safinaz-muzlin-luxury-lawn-3piece-pastel-whisper",
    price: 3950,
    compareAtPrice: 4600,
    image: ASSETS.img2,
    images: [ASSETS.img2, ASSETS.img2_back],
    category: "Luxury Pakistani Lawn",
    isBestseller: true,
    stock: 20,
  },
  {
    id: "365-008",
    name: "Maria.B Luxury M.Prints Embroidered Lawn — Celestial Lilac",
    slug: "mariab-luxury-mprints-embroidered-lawn-celestial-lilac",
    price: 4450,
    compareAtPrice: 5200,
    image: ASSETS.img1,
    images: [ASSETS.img1, ASSETS.img1_detail],
    category: "Luxury Pakistani Lawn",
    isNew: true,
    stock: 17,
  },
  {
    id: "365-009",
    name: "Gul Ahmed Festive Silk & Chiffon 3-Piece — Royal Marigold",
    slug: "gul-ahmed-festive-silk-chiffon-3piece-royal-marigold",
    price: 5250,
    compareAtPrice: 6000,
    image: ASSETS.img6,
    images: [ASSETS.img6, ASSETS.img3],
    category: "Silk & Velvet Luxury",
    isNew: true,
    stock: 11,
  },
  {
    id: "365-010",
    name: "Asim Jofa Festive Pret Embroidered Kurti — Mint Frost",
    slug: "asim-jofa-festive-pret-embroidered-kurti-mint-frost",
    price: 3750,
    compareAtPrice: 4350,
    image: ASSETS.img3,
    images: [ASSETS.img3, ASSETS.img3_detail],
    category: "Ready-to-Wear Designer Pret",
    isNew: true,
    isBestseller: true,
    stock: 19,
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
export const SILK_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Silk & Velvet Luxury");

// Backward compatibility aliases
export const DESIGNER_PRODUCTS = PRET_PRODUCTS;
export const CASUAL_PRODUCTS = LAWN_PRODUCTS;
export const VINTAGE_PRODUCTS = LAWN_PRODUCTS;
export const FARSI_PRODUCTS = PRET_PRODUCTS;
export const VELVET_PRODUCTS = SILK_PRODUCTS;
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
    description: `${p.name} — Curated by 365 Fashion House. "Pioneer in Authentic Pakistani Attires in Bangladesh". 100% original designer fabric with intricate resham & tilla embroidery, premium drape dupatta, and dyed trouser. Open Parcel Policy guaranteed across all 64 districts of Bangladesh.`,
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
        size: "Semi-Stitched Free Size",
        color: "As Shown",
        price: p.price + 450,
        stock: Math.max(3, Math.floor((p.stock ?? 15) / 3)),
        images: imgs,
      },
    ],
  };
});
