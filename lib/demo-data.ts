/**
 * Closet by Tanzz — Product Data & Catalog
 * Wear Tanzz, Wear confidence
 * INTERNATIONAL LUXURY COLLECTION • HIGHEST QUALITY WOMEN'S FASHION
 * Flagship Outlet: Natore Tower, 2nd Floor (Lift-2), Shop 12, Rajlokkhi, Sector 3, Uttara, Dhaka
 * Official Facebook: https://www.facebook.com/Closetbytanzz/
 * All authentic product assets served locally from /closet-assets/
 */

import type { ProductCardProps } from "@/components/product/product-card";

// ═══════════════════════════════════════════
// Asset image paths (local, /closet-assets/)
// ═══════════════════════════════════════════
export const ASSETS = {
  logo: "/logo.jpg",
  banner: "/banner.png",
  heroImage: "/banner.png",
  // 10 Authenticated Suits from Closet by Tanzz Official Collection
  img1: "/closet-assets/803600842_122143125021083007_2035521878955599249_n.jpg", // Midnight Black Block & Floral Cotton 3-Piece
  img2: "/closet-assets/805151080_122143124991083007_7257189970054253160_n.jpg", // Ochre Rust & Charcoal Paisley Artisan 3-Piece
  img3: "/closet-assets/805151087_122143125045083007_2796624569478887804_n.jpg", // Crimson Maroon Kashmiri Jaal Festive 3-Piece
  img4: "/closet-assets/805732916_122143124913083007_2630712321699380120_n.jpg", // Lime Yellow & Emerald Floral Zam Zam Lawn 3-Piece
  img5: "/closet-assets/805732919_122143125009083007_6402505884971846294_n.jpg", // Royal Iris Purple Botanical Designer 3-Piece
  img6: "/closet-assets/805808526_122143124955083007_2480102337445790704_n.jpg", // Olive Pistachio & Teal Floral Artisan Cotton 3-Piece
  img7: "/closet-assets/805808528_122143125033083007_5496230437881167896_n.jpg", // Parrot Green & Royal Blue Geometric Floral 3-Piece
  img8: "/closet-assets/805859759_122143125063083007_4745425037713713061_n.jpg", // Ruby Crimson Vintage Rose Boutique 3-Piece
  img9: "/closet-assets/806023153_122143124967083007_2327262680210015895_n.jpg", // Neon Lime & Cyan Zigzag Geometric 3-Piece
  img10: "/closet-assets/806035829_122143124943083007_1954992920464883745_n.jpg", // Cerulean Blue & Sunburst Sunflower Boutique 3-Piece
};

// ═══════════════════════════════════════════
// Product Categories — Closet by Tanzz
// ═══════════════════════════════════════════
export const CATEGORIES = [
  {
    name: "Zam Zam Lawn Collection",
    slug: "zam-zam-lawn",
    description: "Ultra-breathable 100% pure cotton Zam Zam lawn 3-piece sets with intricate neckline prints, floral motifs, and lightweight dupattas.",
    image: ASSETS.img4,
    productCount: 10,
  },
  {
    name: "Designer Boutique Collection",
    slug: "designer-boutique",
    description: "Exclusive artisan designer suits with rich contrasting dupattas, intricate digital block motifs, and high-fashion aesthetics.",
    image: ASSETS.img5,
    productCount: 8,
  },
  {
    name: "Festive & Party Wear",
    slug: "festive-party-wear",
    description: "Royal Kashmiri jaal, rich crimson embroidery, and celebratory ensembles curated for weddings, dawats, and Eid festivals.",
    image: ASSETS.img3,
    productCount: 7,
  },
  {
    name: "Casual Chic & Everyday Sets",
    slug: "casual-chic",
    description: "Vibrant and comfortable two-piece and three-piece cotton suits designed for effortless elegance and summer ease.",
    image: ASSETS.img10,
    productCount: 6,
  },
  {
    name: "Artisan Block & Vintage Florals",
    slug: "artisan-block",
    description: "Classic handcrafted block print motifs, monochrome contrasts, and timeless botanical prints on pure luxury cotton.",
    image: ASSETS.img1,
    productCount: 6,
  },
];

// ═══════════════════════════════════════════
// Collections — Featured Curations
// ═══════════════════════════════════════════
export const FEATURED_COLLECTIONS = [
  {
    id: "col-zam-zam-lawn",
    title: "Summer Lawn & Zam Zam Edit 2026",
    slug: "zam-zam-lawn",
    subtitle: "Wear Tanzz, Wear Confidence — Pure Cotton Breathable 3-Piece Ensembles",
    image: ASSETS.img4,
    itemCount: 10,
  },
  {
    id: "col-designer-boutique",
    title: "International Luxury Pret",
    slug: "designer-boutique",
    subtitle: "Artisan Digital Prints & Contrasting Pure Dupattas — Handpicked Boutique Quality",
    image: ASSETS.img5,
    itemCount: 8,
  },
  {
    id: "col-festive-party-wear",
    title: "Royal Kashmiri & Festive Dawat",
    slug: "festive-party-wear",
    subtitle: "Celebratory Crimson & Intricate Jaal Ensembles with Open Parcel Inspection",
    image: ASSETS.img3,
    itemCount: 7,
  },
];

// ═══════════════════════════════════════════
// All Products — Closet by Tanzz Catalog
// ═══════════════════════════════════════════
export const ALL_PRODUCTS: ProductCardProps[] = [
  {
    id: "tanzz-001",
    name: "Midnight Black Block & Floral Embroidered Cotton 3-Piece",
    slug: "midnight-black-block-floral-embroidered-cotton-3piece",
    price: 1450,
    compareAtPrice: 1750,
    image: ASSETS.img1,
    images: [ASSETS.img1, ASSETS.img2],
    category: "Artisan Block & Vintage Florals",
    isNew: true,
    isBestseller: true,
    stock: 18,
  },
  {
    id: "tanzz-002",
    name: "Ochre Rust & Charcoal Paisley Artisan Boutique 3-Piece",
    slug: "ochre-rust-charcoal-paisley-artisan-boutique-3piece",
    price: 1450,
    compareAtPrice: 1750,
    image: ASSETS.img2,
    images: [ASSETS.img2, ASSETS.img1],
    category: "Designer Boutique Collection",
    isNew: true,
    stock: 14,
  },
  {
    id: "tanzz-003",
    name: "Crimson Maroon Kashmiri Jaal Festive Lawn 3-Piece",
    slug: "crimson-maroon-kashmiri-jaal-festive-lawn-3piece",
    price: 1550,
    compareAtPrice: 1850,
    image: ASSETS.img3,
    images: [ASSETS.img3, ASSETS.img8],
    category: "Festive & Party Wear",
    isNew: true,
    isBestseller: true,
    stock: 20,
  },
  {
    id: "tanzz-004",
    name: "Lime Yellow & Emerald Floral Zam Zam Lawn 3-Piece",
    slug: "lime-yellow-emerald-floral-zam-zam-lawn-3piece",
    price: 1350,
    compareAtPrice: 1650,
    image: ASSETS.img4,
    images: [ASSETS.img4, ASSETS.img7],
    category: "Zam Zam Lawn Collection",
    isNew: true,
    isBestseller: true,
    stock: 22,
  },
  {
    id: "tanzz-005",
    name: "Royal Iris Purple Botanical Designer Boutique 3-Piece",
    slug: "royal-iris-purple-botanical-designer-boutique-3piece",
    price: 1450,
    compareAtPrice: 1750,
    image: ASSETS.img5,
    images: [ASSETS.img5, ASSETS.img10],
    category: "Designer Boutique Collection",
    isNew: true,
    isBestseller: true,
    stock: 16,
  },
  {
    id: "tanzz-006",
    name: "Olive Pistachio & Teal Floral Artisan Cotton 3-Piece",
    slug: "olive-pistachio-teal-floral-artisan-cotton-3piece",
    price: 1350,
    compareAtPrice: 1650,
    image: ASSETS.img6,
    images: [ASSETS.img6, ASSETS.img7],
    category: "Zam Zam Lawn Collection",
    isNew: true,
    stock: 15,
  },
  {
    id: "tanzz-007",
    name: "Parrot Green & Royal Blue Geometric Floral 3-Piece",
    slug: "parrot-green-royal-blue-geometric-floral-3piece",
    price: 1350,
    compareAtPrice: 1650,
    image: ASSETS.img7,
    images: [ASSETS.img7, ASSETS.img4],
    category: "Designer Boutique Collection",
    isBestseller: true,
    stock: 17,
  },
  {
    id: "tanzz-008",
    name: "Ruby Crimson Vintage Rose Boutique Lawn 3-Piece",
    slug: "ruby-crimson-vintage-rose-boutique-lawn-3piece",
    price: 1450,
    compareAtPrice: 1750,
    image: ASSETS.img8,
    images: [ASSETS.img8, ASSETS.img3],
    category: "Festive & Party Wear",
    isNew: true,
    isBestseller: true,
    stock: 19,
  },
  {
    id: "tanzz-009",
    name: "Neon Lime & Cyan Chevron Geometric Cotton 3-Piece",
    slug: "neon-lime-cyan-chevron-geometric-cotton-3piece",
    price: 1350,
    compareAtPrice: 1650,
    image: ASSETS.img9,
    images: [ASSETS.img9, ASSETS.img4],
    category: "Casual Chic & Everyday Sets",
    isNew: true,
    stock: 15,
  },
  {
    id: "tanzz-010",
    name: "Cerulean Blue & Sunburst Sunflower Boutique 3-Piece",
    slug: "cerulean-blue-sunburst-sunflower-boutique-3piece",
    price: 1450,
    compareAtPrice: 1750,
    image: ASSETS.img10,
    images: [ASSETS.img10, ASSETS.img5],
    category: "Casual Chic & Everyday Sets",
    isNew: true,
    isBestseller: true,
    stock: 21,
  },
];

// ═══════════════════════════════════════════
// Filtered Helper Collections
// ═══════════════════════════════════════════
export const NEW_ARRIVALS = ALL_PRODUCTS.filter((p) => p.isNew);
export const FEATURED_PRODUCTS = ALL_PRODUCTS.slice(0, 8);
export const LAWN_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Zam Zam Lawn Collection");
export const DESIGNER_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Designer Boutique Collection");
export const PARTY_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Festive & Party Wear");
export const CASUAL_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Casual Chic & Everyday Sets");
export const VINTAGE_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Artisan Block & Vintage Florals");

// Backward compatibility aliases
export const FARSI_PRODUCTS = CASUAL_PRODUCTS;
export const VELVET_PRODUCTS = DESIGNER_PRODUCTS;
export const JEWELRY_PRODUCTS = PARTY_PRODUCTS;
export const COORD_PRODUCTS = CASUAL_PRODUCTS;
export const ABAYA_PRODUCTS = DESIGNER_PRODUCTS;
export const KAFTAN_PRODUCTS = DESIGNER_PRODUCTS;
export const DRESS_PRODUCTS = PARTY_PRODUCTS;
export const KURTI_PRODUCTS = LAWN_PRODUCTS;
export const ORGANZA_PRODUCTS = PARTY_PRODUCTS;
export const CHIFFON_PRODUCTS = LAWN_PRODUCTS;
export const BRIDAL_PRODUCTS = PARTY_PRODUCTS;

// Helper to filter by category slug
export function getProductsByCategory(slug: string): ProductCardProps[] {
  switch (slug) {
    case "zam-zam-lawn":
    case "pakistani-lawn":
      return LAWN_PRODUCTS;
    case "designer-boutique":
    case "designer-luxury":
      return DESIGNER_PRODUCTS;
    case "festive-party-wear":
    case "party-wear":
      return PARTY_PRODUCTS;
    case "casual-chic":
    case "casual-sets":
    case "farsi-sets":
      return CASUAL_PRODUCTS;
    case "artisan-block":
    case "vintage-florals":
      return VINTAGE_PRODUCTS;
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
  const catName = catObj?.name || "Zam Zam Lawn Collection";
  const catSlug = catObj?.slug || "zam-zam-lawn";
  const imgs = p.images && p.images.length > 0 ? p.images : [p.image];
  return {
    name: p.name,
    slug: p.slug,
    description: `${p.name} — Curated by Closet by Tanzz. "Wear Tanzz, Wear confidence". 100% genuine boutique cotton lawn with vibrant digital print, soft breathable touch, and generous dupatta. Open Parcel Policy available on delivery across all 64 districts of Bangladesh.`,
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
        price: p.price + 350,
        stock: Math.max(3, Math.floor((p.stock ?? 15) / 3)),
        images: imgs,
      },
    ],
  };
});
