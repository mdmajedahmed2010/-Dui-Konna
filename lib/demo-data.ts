/**
 * 3 sis xclusive | Sylhet — Product Data & Catalog
 * JUST FOR WOMEN | 17 Years of Trust in Fashion
 * Authentic Pakistani Designer Fashion & Luxury Ethnic Wear
 * Website: https://3sisxclusivebd.com — https://www.facebook.com/3.sis.xclusive/
 * Images served locally from /3sis-assets/ and /logo.jpg, /banner.jpg
 */

import type { ProductCardProps } from "@/components/product/product-card";

// ═══════════════════════════════════════════
// Asset image paths (local, /3sis-assets/)
// ═══════════════════════════════════════════
export const ASSETS = {
  logo: "/logo.jpg",
  banner: "/banner.jpg",
  heroImage: "/banner.jpg",
  // 8 Unique Authenticated Pakistani Suits from 3 sis xclusive Facebook Gallery
  img1: "/3sis-assets/800826258_1506801031481814_6303140000895666714_n.jpg", // Midnight Black & Fuchsia Floral Pakistani Lawn 3-Piece
  img2: "/3sis-assets/800924822_1506800981481819_6411551772502174700_n.jpg", // Mustard Yellow Floral Embroidered Festive Lawn 3-Piece
  img3: "/3sis-assets/800965457_1506800931481824_8025347612245862636_n.jpg", // Royal Indigo Charcoal & Crimson Ajrakh/Floral Pure Lawn 3-Piece
  img4: "/3sis-assets/801044933_1506800921481825_5686609464407597657_n.jpg", // Deep Navy Embroidered Floral Lawn Set with Scalloped Dupatta
  img5: "/3sis-assets/801326646_1506801018148482_7421951335824253599_n.jpg", // Ruby Crimson & Cream Floral Luxury Embroidered Lawn 3-Piece
  img6: "/3sis-assets/801786074_1506801001481817_7782460407854916585_n.jpg", // Powder Sky Blue Pastel Vintage Floral Lawn 3-Piece
  img7: "/3sis-assets/801822238_1506800934815157_8101375858139007627_n.jpg", // Golden Ochre Traditional Paisley Embroidered 3-Piece
  img8: "/3sis-assets/801882656_1506801004815150_4924522512836901216_n.jpg", // Lavender Orchid & Lemon Floral Printed 3-Piece
};

// ═══════════════════════════════════════════
// Product Categories — 3 sis xclusive
// ═══════════════════════════════════════════
export const CATEGORIES = [
  {
    name: "Pakistani Lawn Collection",
    slug: "pakistani-lawn",
    description: "100% directly imported authentic Pakistani pure lawn 3-piece sets with intricate threadwork neckline, digital prints, and breathable dupattas.",
    image: ASSETS.img1,
    productCount: 8,
  },
  {
    name: "Designer Luxury & Pre-Orders",
    slug: "designer-luxury",
    description: "Original Pakistani designer couture sets featuring intricate zardozi, hand-cutwork embroidery, and pure silk dupattas.",
    image: ASSETS.img5,
    productCount: 6,
  },
  {
    name: "Party Wear & Festive Organza",
    slug: "party-wear",
    description: "Exquisite hand-embellished festive ensembles, zardozi needlework, scalloped organza borders, and celebratory formal wear.",
    image: ASSETS.img4,
    productCount: 7,
  },
  {
    name: "Casual & Daily Chic Sets",
    slug: "casual-sets",
    description: "Ultra-breathable daily luxury Pakistani 3-piece sets designed for effortless elegance and summer comfort.",
    image: ASSETS.img8,
    productCount: 5,
  },
  {
    name: "Vintage Florals & Pastels",
    slug: "vintage-florals",
    description: "Delicate pastel florals, powder blue hues, and antique botanical motifs crafted on premium cotton lawn.",
    image: ASSETS.img6,
    productCount: 5,
  },
];

// ═══════════════════════════════════════════
// Collections — Featured Curations
// ═══════════════════════════════════════════
export const FEATURED_COLLECTIONS = [
  {
    id: "col-pakistani-lawn-festive",
    title: "Eid & Summer Lawn Edit 2026",
    slug: "pakistani-lawn",
    subtitle: "Authentic Pakistani Pure Lawn 3-Piece Ensembles with Embroidered Dupattas",
    image: ASSETS.img1,
    itemCount: 8,
  },
  {
    id: "col-designer-luxury",
    title: "Direct Pakistani Luxury Imports",
    slug: "designer-luxury",
    subtitle: "17 Years of Trust — Original Pakistani Designer Pret & Silk Dupattas",
    image: ASSETS.img5,
    itemCount: 6,
  },
  {
    id: "col-vintage-pastels",
    title: "Vintage Floral & Pastel Harmony",
    slug: "vintage-florals",
    subtitle: "Powder Blues, Lilac & Soft Orchids in Premium Lightweight Cotton Lawn",
    image: ASSETS.img6,
    itemCount: 5,
  },
];

// ═══════════════════════════════════════════
// All Products — 3 sis xclusive Catalog
// ═══════════════════════════════════════════
export const ALL_PRODUCTS: ProductCardProps[] = [
  {
    id: "3sis-001",
    name: "3 Sis Midnight Black & Fuchsia Embroidered Pakistani Lawn 3-Piece",
    slug: "midnight-black-fuchsia-embroidered-pakistani-lawn-3piece",
    price: 3950,
    compareAtPrice: 4500,
    image: ASSETS.img1,
    images: [ASSETS.img1, ASSETS.img3],
    category: "Pakistani Lawn Collection",
    isNew: true,
    isBestseller: true,
    stock: 14,
  },
  {
    id: "3sis-002",
    name: "Mustard Gold Floral Neckline Embroidered Festive Lawn 3-Piece",
    slug: "mustard-gold-floral-neckline-embroidered-festive-lawn-3piece",
    price: 4150,
    compareAtPrice: 4750,
    image: ASSETS.img2,
    images: [ASSETS.img2, ASSETS.img7],
    category: "Pakistani Lawn Collection",
    isNew: true,
    stock: 12,
  },
  {
    id: "3sis-003",
    name: "Royal Indigo & Crimson Ajrakh Kashmiri Floral Pure Lawn 3-Piece",
    slug: "royal-indigo-crimson-ajrakh-kashmiri-floral-pure-lawn-3piece",
    price: 4250,
    compareAtPrice: 4850,
    image: ASSETS.img3,
    images: [ASSETS.img3, ASSETS.img1],
    category: "Pakistani Lawn Collection",
    isNew: true,
    isBestseller: true,
    stock: 15,
  },
  {
    id: "3sis-004",
    name: "Deep Navy Floral Embroidered Lawn Set with Scalloped Cutwork Dupatta",
    slug: "deep-navy-floral-embroidered-lawn-set-scalloped-dupatta",
    price: 4450,
    compareAtPrice: 5100,
    image: ASSETS.img4,
    images: [ASSETS.img4, ASSETS.img1],
    category: "Party Wear & Festive Organza",
    isNew: true,
    isBestseller: true,
    stock: 10,
  },
  {
    id: "3sis-005",
    name: "Ruby Crimson & Cream Floral Luxury Embroidered Lawn 3-Piece",
    slug: "ruby-crimson-cream-floral-luxury-embroidered-lawn-3piece",
    price: 4350,
    compareAtPrice: 4950,
    image: ASSETS.img5,
    images: [ASSETS.img5, ASSETS.img8],
    category: "Designer Luxury & Pre-Orders",
    isNew: true,
    isBestseller: true,
    stock: 11,
  },
  {
    id: "3sis-006",
    name: "Powder Sky Blue Pastel Vintage Botanical Lawn 3-Piece Suit",
    slug: "powder-sky-blue-pastel-vintage-botanical-lawn-3piece",
    price: 3950,
    compareAtPrice: 4600,
    image: ASSETS.img6,
    images: [ASSETS.img6, ASSETS.img8],
    category: "Vintage Florals & Pastels",
    isNew: true,
    stock: 9,
  },
  {
    id: "3sis-007",
    name: "Golden Ochre Traditional Paisley Embroidered Festive 3-Piece",
    slug: "golden-ochre-traditional-paisley-embroidered-festive-3piece",
    price: 4250,
    compareAtPrice: 4800,
    image: ASSETS.img7,
    images: [ASSETS.img7, ASSETS.img2],
    category: "Designer Luxury & Pre-Orders",
    isBestseller: true,
    stock: 8,
  },
  {
    id: "3sis-008",
    name: "Lavender Orchid & Lemon Yellow Floral Printed Boutique 3-Piece",
    slug: "lavender-orchid-lemon-yellow-floral-printed-boutique-3piece",
    price: 3650,
    compareAtPrice: 4200,
    image: ASSETS.img8,
    images: [ASSETS.img8, ASSETS.img6],
    category: "Casual & Daily Chic Sets",
    isNew: true,
    isBestseller: true,
    stock: 16,
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
export const CASUAL_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Casual & Daily Chic Sets");
export const VINTAGE_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Vintage Florals & Pastels");

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
    case "pakistani-lawn":
      return LAWN_PRODUCTS;
    case "designer-luxury":
      return DESIGNER_PRODUCTS;
    case "party-wear":
      return PARTY_PRODUCTS;
    case "casual-sets":
    case "farsi-sets":
      return CASUAL_PRODUCTS;
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
  const catName = catObj?.name || "Pakistani Lawn Collection";
  const catSlug = catObj?.slug || "pakistani-lawn";
  const imgs = p.images && p.images.length > 0 ? p.images : [p.image];
  return {
    name: p.name,
    slug: p.slug,
    description: `${p.name} — Authentically imported by 3 sis xclusive. 17 years of trust in women's fashion. 100% original Pakistani luxury lawn with exquisite embroidery, digital printing, and pure dupatta. Open Parcel Policy available on delivery.`,
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
        stock: Math.max(3, Math.floor((p.stock ?? 10) / 2)),
        images: imgs,
      },
      {
        size: "Stitched M (38-40)",
        color: "As Shown",
        price: p.price + 500,
        stock: Math.max(2, Math.floor((p.stock ?? 10) / 3)),
        images: imgs,
      },
      {
        size: "Stitched L (42-44)",
        color: "As Shown",
        price: p.price + 500,
        stock: Math.max(2, Math.floor((p.stock ?? 10) / 3)),
        images: imgs,
      },
    ],
  };
});
