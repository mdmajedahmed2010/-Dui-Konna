/**
 * Tazeen's (tazeensbd) — Product Data & Catalog
 * Smart & Elegant Heritage Sarees & Designer Boutique Wear
 * Pink City Shopping Complex, Gulshan-2 & Sector 11, Uttara, Dhaka, Bangladesh
 * Official Facebook: https://www.facebook.com/tazeensbd/
 * All authentic product assets served locally from /tazeens-assets/
 */

import type { ProductCardProps } from "@/components/product/product-card";

// ═══════════════════════════════════════════
// Asset image paths (local, /tazeens-assets/)
// ═══════════════════════════════════════════
export const ASSETS = {
  logo: "/tazeens-assets/logo.jpg",
  banner: "/tazeens-assets/hero-banner.jpg",
  heroImage: "/tazeens-assets/hero-banner.jpg",
  // Real Authentic Assets from Tazeen's Official Collection
  sareeChampagne: "/tazeens-assets/saree-sequin-champagne.jpg",
  sareePurple: "/tazeens-assets/saree-sequin-purple.jpg",
  sareeFuchsia: "/tazeens-assets/saree-sequin-fuchsia.jpg",
  sareeAubergine: "/tazeens-assets/saree-sequin-aubergine.jpg",
  sareeSlateGrey: "/tazeens-assets/saree-sequin-slategrey.jpg",
  sareeYellow: "/tazeens-assets/saree-sequin-yellow.jpg",
  sareeKatanMaroon: "/tazeens-assets/saree-katan-maroon-zari.jpg",
  threePieceAjrakh: "/tazeens-assets/threepiece-ajrakh-indigo.jpg",
  threePieceEthnic: "/tazeens-assets/threepiece-ethnic-mirrorwork.jpg",
  threePieceLavender: "/tazeens-assets/threepiece-lavender-floral.jpg",
  // Backward compatibility keys
  img1: "/tazeens-assets/saree-sequin-champagne.jpg",
  img2: "/tazeens-assets/saree-sequin-purple.jpg",
  img3: "/tazeens-assets/saree-katan-maroon-zari.jpg",
  img4: "/tazeens-assets/threepiece-ajrakh-indigo.jpg",
  img5: "/tazeens-assets/threepiece-lavender-floral.jpg",
  img6: "/tazeens-assets/saree-sequin-yellow.jpg",
  img7: "/tazeens-assets/saree-sequin-fuchsia.jpg",
  img8: "/tazeens-assets/saree-sequin-aubergine.jpg",
  img9: "/tazeens-assets/saree-sequin-slategrey.jpg",
  img10: "/tazeens-assets/threepiece-ethnic-mirrorwork.jpg",
};

// ═══════════════════════════════════════════
// Product Categories — Tazeen's
// ═══════════════════════════════════════════
export const CATEGORIES = [
  {
    name: "Sequin & Tissue Sarees",
    slug: "sequin-tissue-sarees",
    description:
      "Exclusive linen, tissue & soft blend sarees adorned with delicate metallic sequin borders, geometric pallus, and handcrafted fringe tassels in breathtaking hues.",
    image: ASSETS.sareeChampagne,
    productCount: 18,
  },
  {
    name: "Heritage Katan & Silk",
    slug: "heritage-katan-silk",
    description:
      "Timeless bridal and festive katan, banarasi silk, and antique zari striped weaves embodying regal South Asian heritage and heirloom craftsmanship.",
    image: ASSETS.sareeKatanMaroon,
    productCount: 15,
  },
  {
    name: "Boutique Three-Piece Sets",
    slug: "boutique-three-piece",
    description:
      "Handcrafted unstitched & stitched designer salwar kameez sets featuring Ajrakh geometric prints, kantha mirror-work yokes, and botanical watercolor lawns.",
    image: ASSETS.threePieceAjrakh,
    productCount: 16,
  },
  {
    name: "Muslin & Tussar Sarees",
    slug: "muslin-tussar-sarees",
    description:
      "Featherweight Matka muslin, pure Tussar silk, and soft linen jamdani sarees woven for effortless elegance, comfort, and sophisticated daily luxury.",
    image: ASSETS.sareeAubergine,
    productCount: 12,
  },
  {
    name: "Handloom & Cotton Sarees",
    slug: "handloom-cotton-sarees",
    description:
      "Breathable authentic handloom cotton sarees, vibrant khadi textures, and pastel festive weaves ideal for summer celebrations and cultural events.",
    image: ASSETS.sareeYellow,
    productCount: 14,
  },
];

// ═══════════════════════════════════════════
// Collections — Featured Curations
// ═══════════════════════════════════════════
export const FEATURED_COLLECTIONS = [
  {
    id: "col-sequin-sarees",
    title: "Signature Sequin Edit 2026",
    slug: "sequin-tissue-sarees",
    subtitle: "Linen Tissue Blend Sarees with Metallic Sequin Borders & Tassels — 6 Exclusive Shades",
    image: ASSETS.sareeChampagne,
    itemCount: 18,
  },
  {
    id: "col-heritage-katan",
    title: "Royal Bridal Katan & Zari",
    slug: "heritage-katan-silk",
    subtitle: "Maroon, Gold & Emerald Brocade Silk Sarees for Weddings & Grand Occasions",
    image: ASSETS.sareeKatanMaroon,
    itemCount: 15,
  },
  {
    id: "col-boutique-threepiece",
    title: "Artisan Boutique 3-Piece Series",
    slug: "boutique-three-piece",
    subtitle: "Ajrakh Prints, Kantha Mirror Yokes & Botanical Watercolor Pure Cotton Lawns",
    image: ASSETS.threePieceAjrakh,
    itemCount: 16,
  },
  {
    id: "col-pastel-muslin",
    title: "Pastel Muslin & Tussar Drape",
    slug: "muslin-tussar-sarees",
    subtitle: "Airy Light Silhouettes, Floral Sheers & Smart Casual Everyday Elegance",
    image: ASSETS.threePieceLavender,
    itemCount: 12,
  },
];

// ═══════════════════════════════════════════
// All Products — Tazeen's Official Catalog
// ═══════════════════════════════════════════
export const ALL_PRODUCTS: ProductCardProps[] = [
  {
    id: "TZ-001",
    name: "Tazeen's Signature Sequin Border Saree — Champagne Beige Gold",
    slug: "tazeens-signature-sequin-border-saree-champagne-beige-gold",
    price: 3850,
    compareAtPrice: 4500,
    image: ASSETS.sareeChampagne,
    images: [ASSETS.sareeChampagne, ASSETS.sareeYellow],
    category: "Sequin & Tissue Sarees",
    isNew: true,
    isBestseller: true,
    stock: 22,
  },
  {
    id: "TZ-002",
    name: "Tazeen's Signature Sequin Border Saree — Royal Plum Purple",
    slug: "tazeens-signature-sequin-border-saree-royal-plum-purple",
    price: 3850,
    compareAtPrice: 4500,
    image: ASSETS.sareePurple,
    images: [ASSETS.sareePurple, ASSETS.sareeAubergine],
    category: "Sequin & Tissue Sarees",
    isNew: true,
    isBestseller: true,
    stock: 18,
  },
  {
    id: "TZ-003",
    name: "Tazeen's Signature Sequin Border Saree — Rose Fuchsia Blossom",
    slug: "tazeens-signature-sequin-border-saree-rose-fuchsia-blossom",
    price: 3850,
    compareAtPrice: 4500,
    image: ASSETS.sareeFuchsia,
    images: [ASSETS.sareeFuchsia, ASSETS.sareePurple],
    category: "Sequin & Tissue Sarees",
    isNew: true,
    isBestseller: true,
    stock: 20,
  },
  {
    id: "TZ-004",
    name: "Tazeen's Signature Sequin Border Saree — Rich Violet Aubergine",
    slug: "tazeens-signature-sequin-border-saree-rich-violet-aubergine",
    price: 3850,
    compareAtPrice: 4500,
    image: ASSETS.sareeAubergine,
    images: [ASSETS.sareeAubergine, ASSETS.sareeFuchsia],
    category: "Sequin & Tissue Sarees",
    isNew: true,
    isBestseller: true,
    stock: 16,
  },
  {
    id: "TZ-005",
    name: "Tazeen's Signature Sequin Border Saree — Charcoal Slate Metallic",
    slug: "tazeens-signature-sequin-border-saree-charcoal-slate-metallic",
    price: 3850,
    compareAtPrice: 4500,
    image: ASSETS.sareeSlateGrey,
    images: [ASSETS.sareeSlateGrey, ASSETS.sareeChampagne],
    category: "Sequin & Tissue Sarees",
    isNew: true,
    isBestseller: false,
    stock: 15,
  },
  {
    id: "TZ-006",
    name: "Tazeen's Signature Sequin Border Saree — Bright Canary Mustard",
    slug: "tazeens-signature-sequin-border-saree-bright-canary-mustard",
    price: 3850,
    compareAtPrice: 4500,
    image: ASSETS.sareeYellow,
    images: [ASSETS.sareeYellow, ASSETS.sareeChampagne],
    category: "Sequin & Tissue Sarees",
    isNew: true,
    isBestseller: true,
    stock: 24,
  },
  {
    id: "TZ-007",
    name: "Tazeen's Heritage Zari Striped Silk Saree — Royal Crimson Maroon",
    slug: "tazeens-heritage-zari-striped-silk-saree-royal-crimson-maroon",
    price: 5850,
    compareAtPrice: 6800,
    image: ASSETS.sareeKatanMaroon,
    images: [ASSETS.sareeKatanMaroon, ASSETS.banner],
    category: "Heritage Katan & Silk",
    isNew: true,
    isBestseller: true,
    stock: 12,
  },
  {
    id: "TZ-008",
    name: "Tazeen's Classic Indigo Ajrakh Block Print 3-Piece Set",
    slug: "tazeens-classic-indigo-ajrakh-block-print-3piece-set",
    price: 2450,
    compareAtPrice: 2950,
    image: ASSETS.threePieceAjrakh,
    images: [ASSETS.threePieceAjrakh, ASSETS.threePieceEthnic],
    category: "Boutique Three-Piece Sets",
    isNew: true,
    isBestseller: true,
    stock: 25,
  },
  {
    id: "TZ-009",
    name: "Tazeen's Earthy Ethnic Mirror-Work & Kantha Yoke 3-Piece Set",
    slug: "tazeens-earthy-ethnic-mirrorwork-kantha-yoke-3piece-set",
    price: 2650,
    compareAtPrice: 3200,
    image: ASSETS.threePieceEthnic,
    images: [ASSETS.threePieceEthnic, ASSETS.threePieceAjrakh],
    category: "Boutique Three-Piece Sets",
    isNew: true,
    isBestseller: true,
    stock: 20,
  },
  {
    id: "TZ-010",
    name: "Tazeen's Pastel Lavender Botanical Watercolor Lawn 3-Piece Set",
    slug: "tazeens-pastel-lavender-botanical-watercolor-lawn-3piece-set",
    price: 2350,
    compareAtPrice: 2800,
    image: ASSETS.threePieceLavender,
    images: [ASSETS.threePieceLavender, ASSETS.threePieceAjrakh],
    category: "Boutique Three-Piece Sets",
    isNew: true,
    isBestseller: true,
    stock: 22,
  },
  {
    id: "TZ-011",
    name: "Tazeen's Royal Crimson Bridal Katan Saree — Antique Gold Brocade",
    slug: "tazeens-royal-crimson-bridal-katan-saree-antique-gold-brocade",
    price: 8500,
    compareAtPrice: 9800,
    image: ASSETS.banner,
    images: [ASSETS.banner, ASSETS.sareeKatanMaroon],
    category: "Heritage Katan & Silk",
    isNew: true,
    isBestseller: true,
    stock: 8,
  },
  {
    id: "TZ-012",
    name: "Tazeen's Emerald Green Embroidered Silk Festive Saree",
    slug: "tazeens-emerald-green-embroidered-silk-festive-saree",
    price: 6950,
    compareAtPrice: 7900,
    image: ASSETS.banner,
    images: [ASSETS.banner, ASSETS.sareeKatanMaroon],
    category: "Heritage Katan & Silk",
    isNew: true,
    isBestseller: false,
    stock: 10,
  },
];

// ═══════════════════════════════════════════
// Filtered Helper Collections
// ═══════════════════════════════════════════
export const NEW_ARRIVALS = ALL_PRODUCTS.filter((p) => p.isNew);
export const FEATURED_PRODUCTS = ALL_PRODUCTS.slice(0, 8);
export const SEQUIN_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Sequin & Tissue Sarees");
export const KATAN_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Heritage Katan & Silk");
export const THREEPIECE_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Boutique Three-Piece Sets");
export const MUSLIN_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Muslin & Tussar Sarees");
export const COTTON_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Handloom & Cotton Sarees");

// Backward compatibility aliases
export const LAWN_PRODUCTS = THREEPIECE_PRODUCTS;
export const ORGANZA_PRODUCTS = SEQUIN_PRODUCTS;
export const PRET_PRODUCTS = THREEPIECE_PRODUCTS;
export const PARTY_PRODUCTS = KATAN_PRODUCTS;
export const SILK_PRODUCTS = KATAN_PRODUCTS;
export const DESIGNER_PRODUCTS = THREEPIECE_PRODUCTS;
export const CASUAL_PRODUCTS = THREEPIECE_PRODUCTS;
export const VINTAGE_PRODUCTS = KATAN_PRODUCTS;
export const FARSI_PRODUCTS = THREEPIECE_PRODUCTS;
export const VELVET_PRODUCTS = KATAN_PRODUCTS;
export const JEWELRY_PRODUCTS = SEQUIN_PRODUCTS;
export const COORD_PRODUCTS = THREEPIECE_PRODUCTS;
export const ABAYA_PRODUCTS = THREEPIECE_PRODUCTS;
export const KAFTAN_PRODUCTS = THREEPIECE_PRODUCTS;
export const DRESS_PRODUCTS = THREEPIECE_PRODUCTS;
export const KURTI_PRODUCTS = THREEPIECE_PRODUCTS;
export const CHIFFON_PRODUCTS = SEQUIN_PRODUCTS;
export const BRIDAL_PRODUCTS = KATAN_PRODUCTS;

// Helper to filter by category slug
export function getProductsByCategory(slug: string): ProductCardProps[] {
  switch (slug) {
    case "sequin-tissue-sarees":
    case "organza-chiffon":
      return SEQUIN_PRODUCTS;
    case "heritage-katan-silk":
    case "festive-party":
    case "bridal-katan":
      return KATAN_PRODUCTS;
    case "boutique-three-piece":
    case "pakistani-lawn":
    case "designer-pret":
      return THREEPIECE_PRODUCTS;
    case "muslin-tussar-sarees":
      return MUSLIN_PRODUCTS.length > 0 ? MUSLIN_PRODUCTS : ALL_PRODUCTS.slice(1, 5);
    case "handloom-cotton-sarees":
    case "casual-lite":
      return COTTON_PRODUCTS.length > 0 ? COTTON_PRODUCTS : ALL_PRODUCTS.slice(4, 8);
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
  const catName = catObj?.name || "Sequin & Tissue Sarees";
  const catSlug = catObj?.slug || "sequin-tissue-sarees";
  const imgs = p.images && p.images.length > 0 ? p.images : [p.image];
  const isSaree = (p.category ?? "").toLowerCase().includes("saree") || (p.category ?? "").toLowerCase().includes("katan");

  return {
    name: p.name,
    slug: p.slug,
    description: `${p.name} — Curated by Tazeen's (Pink City Shopping Complex, Gulshan-2 & Sector 11, Uttara, Dhaka). 100% authentic handloom craftsmanship, smart & elegant finish, and transparent budget-friendly pricing. Open parcel inspection guaranteed upon delivery across all 64 districts in Bangladesh.`,
    price: p.price,
    isFeatured: p.isBestseller ?? true,
    images: imgs,
    category: {
      name: catName,
      slug: catSlug,
    },
    variants: isSaree
      ? [
          {
            size: "Standard Saree (With Running Blouse Piece)",
            color: "As Shown in Picture",
            price: p.price,
            stock: Math.max(5, Math.floor((p.stock ?? 15) / 2)),
            images: imgs,
          },
          {
            size: "Saree with Fall & Pico Ready",
            color: "As Shown in Picture",
            price: p.price + 250,
            stock: Math.max(3, Math.floor((p.stock ?? 15) / 3)),
            images: imgs,
          },
        ]
      : [
          {
            size: "Unstitched 3-Piece Set",
            color: "As Shown in Picture",
            price: p.price,
            stock: Math.max(5, Math.floor((p.stock ?? 15) / 2)),
            images: imgs,
          },
          {
            size: "Semi-Stitched Premium",
            color: "As Shown in Picture",
            price: p.price + 350,
            stock: Math.max(3, Math.floor((p.stock ?? 15) / 3)),
            images: imgs,
          },
        ],
  };
});
