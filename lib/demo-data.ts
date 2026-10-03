/**
 * Dui Konna (দুই কন্যা) — Official Product Data & Catalog
 * Exclusive Muslin Sarees, Authentic Dhakai Jamdani & Luxury Ethnic Couture
 * Nikunja-2, Khilkhet, Dhaka • Facebook: https://www.facebook.com/duikonna01
 * 484,000+ Followers • Open Parcel Inspection Nationwide
 * All assets served locally from /duikonna-assets/
 */

import type { ProductCardProps } from "@/components/product/product-card";

// ═══════════════════════════════════════════
// Asset image paths (local, /duikonna-assets/)
// ═══════════════════════════════════════════
export const ASSETS = {
  logo: "/duikonna-assets/logo.png",
  banner: "/duikonna-assets/banner.jpg",
  heroImage: "/duikonna-assets/banner.jpg",
  heroBanner: "/duikonna-assets/banner.jpg",
  // 11 Authentic Assets from Dui Konna Facebook & Photoshoots
  product1: "/duikonna-assets/product-01-rust-orange.jpg",
  product2: "/duikonna-assets/product-02-mint-green.jpg",
  product3: "/duikonna-assets/product-03-royal-yellow.jpg", // Price tag: 29000 BDT
  product4: "/duikonna-assets/product-04-mauve-plum.jpg",
  product5: "/duikonna-assets/product-05-pearl-multicolor.jpg",
  product6: "/duikonna-assets/product-06-sage-magenta.jpg",
  product7: "/duikonna-assets/product-07-pistachio-green.jpg",
  product8: "/duikonna-assets/product-08-lavender-closeup.jpg",
  product9: "/duikonna-assets/product-09-lavender-portrait.jpg",
  product10: "/duikonna-assets/product-10-slate-grey.jpg",
  product11: "/duikonna-assets/product-11-lavender-drape.jpg",
  product12: "/duikonna-assets/banner.jpg",
  // Backward compatibility keys
  sareeChampagne: "/duikonna-assets/product-05-pearl-multicolor.jpg",
  sareePurple: "/duikonna-assets/product-04-mauve-plum.jpg",
  sareeFuchsia: "/duikonna-assets/product-06-sage-magenta.jpg",
  sareeAubergine: "/duikonna-assets/product-08-lavender-closeup.jpg",
  sareeSlateGrey: "/duikonna-assets/product-10-slate-grey.jpg",
  sareeYellow: "/duikonna-assets/product-03-royal-yellow.jpg",
  sareeKatanMaroon: "/duikonna-assets/banner.jpg",
  threePieceAjrakh: "/duikonna-assets/product-01-rust-orange.jpg",
  threePieceEthnic: "/duikonna-assets/product-02-mint-green.jpg",
  threePieceLavender: "/duikonna-assets/product-09-lavender-portrait.jpg",
  img1: "/duikonna-assets/product-01-rust-orange.jpg",
  img2: "/duikonna-assets/product-02-mint-green.jpg",
  img3: "/duikonna-assets/product-03-royal-yellow.jpg",
  img4: "/duikonna-assets/product-04-mauve-plum.jpg",
  img5: "/duikonna-assets/product-05-pearl-multicolor.jpg",
  img6: "/duikonna-assets/product-06-sage-magenta.jpg",
  img7: "/duikonna-assets/product-07-pistachio-green.jpg",
  img8: "/duikonna-assets/product-08-lavender-closeup.jpg",
  img9: "/duikonna-assets/product-09-lavender-portrait.jpg",
  img10: "/duikonna-assets/product-10-slate-grey.jpg",
};

// ═══════════════════════════════════════════
// Product Categories — Dui Konna
// ═══════════════════════════════════════════
export const CATEGORIES = [
  {
    name: "Exclusive Muslin Sarees",
    nameBn: "এক্সক্লুসিভ ঢাকাই মসলিন শাড়ি",
    slug: "exclusive-muslin",
    description:
      "হাতে বোনা খাঁটি ঢাকাই মসলিন শাড়ির সবচেয়ে অনন্য কালেকশন—বাটারফ্লাই মোটিফ, সোনালী জরি বুটি ও নিখুঁত কারুকাজ।",
    image: ASSETS.product3,
    productCount: 18,
  },
  {
    name: "Authentic Dhakai Jamdani",
    nameBn: "ঐতিহ্যবাহী ঢাকাই জামদানি",
    slug: "dhakai-jamdani",
    description:
      "শতবর্ষের ঐতিহ্যবাহী ঢাকাই তাঁতের খাঁটি জামদানি শাড়ি—রাজকীয় নকশা, বহু রঙের জ্যামিতিক বুটি ও মনকাড়া পাড়।",
    image: ASSETS.product5,
    productCount: 14,
  },
  {
    name: "Bridal & Festive Red Muslin",
    nameBn: "ব্রাইডাল ও ফেস্টিভ রেড মসলিন",
    slug: "bridal-festive",
    description:
      "বিয়ে, রিসেপশন ও উৎসবের জন্য এক্সক্লুসিভ রয়্যাল রেড মসলিন শাড়ি ট্রায়ো—ভারী সোনালী জরি ও জারদৌসি কারচুপি কাজ।",
    image: ASSETS.banner,
    productCount: 12,
  },
  {
    name: "Luxury Karchupi & Organza",
    nameBn: "লাক্সারি কারচুপি ও অর্গাঞ্জা মসলিন",
    slug: "luxury-karchupi",
    description:
      "নিখুঁত হস্তশিল্পে তৈরি মুক্তা, সিকোয়েন্স ও মেটালিক জরির সূক্ষ্ম কারচুপি কাজ খচিত প্রিমিয়াম শাড়ি কালেকশন।",
    image: ASSETS.product8,
    productCount: 10,
  },
  {
    name: "Pastel Heritage Muslin",
    nameBn: "প্যাস্টেল হেরিটেজ মসলিন",
    slug: "pastel-heritage",
    description:
      "মিন্ট গ্রিন, সফট পিস্তা, ল্যাভেন্ডার মভ এবং স্লিক স্লেট গ্রে রঙের মার্জিত ও চোখ জুড়ানো আভিজাত্যপূর্ণ মসলিন শাড়ি।",
    image: ASSETS.product2,
    productCount: 16,
  },
  {
    name: "Exclusive Muslin 4-Piece Sets",
    nameBn: "এক্সক্লুসিভ মসলিন ৪-পিস ড্রেস",
    slug: "muslin-four-piece",
    description:
      "আভিজাত্যপূর্ণ কারচুপি এমব্রয়ডারি করা মসলিন কামিজ, ম্যাচিং ইনার, সালোয়ার ও হ্যান্ডক্রাফটেড মসলিন দোপাট্টা সেট।",
    image: ASSETS.product1,
    productCount: 8,
  },
];

// ═══════════════════════════════════════════
// Collections — Featured Curations
// ═══════════════════════════════════════════
export const FEATURED_COLLECTIONS = [
  {
    id: "col-exclusive-muslin",
    title: "Dui Konna Royal Muslin 2026",
    titleBn: "দুই কন্যা রয়্যাল মসলিন সিরিজ",
    slug: "exclusive-muslin",
    subtitle: "খাঁটি ঢাকাই মসলিন, পিওর গোল্ড জরি বুটি ও বাটারফ্লাই উইভ — মাস্টারপিস এডিট",
    image: ASSETS.product3,
    itemCount: 18,
  },
  {
    id: "col-bridal-festive",
    title: "Grand Bridal Crimson Trio",
    titleBn: "গ্র্যান্ড ব্রাইডাল রেড মসলিন",
    slug: "bridal-festive",
    subtitle: "৩-মডেল স্পেশাল ফটোশুট এডিট — ভারী জরি, কাটওয়ার্ক ও কারচুপি ব্রাইডাল শাড়ি",
    image: ASSETS.banner,
    itemCount: 12,
  },
  {
    id: "col-dhakai-jamdani",
    title: "Heritage Dhakai Jamdani Prestige",
    titleBn: "ঐতিহ্যবাহী ঢাকাই জামদানি প্রস্টিজ",
    slug: "dhakai-jamdani",
    subtitle: "বহু রঙের জ্যামিতিক বুটি ও ট্যাসেলযুক্ত খাঁটি হ্যান্ডলুম জামদানি শিল্প",
    image: ASSETS.product5,
    itemCount: 14,
  },
  {
    id: "col-luxury-karchupi",
    title: "Shamima Nasrin Karchupi Couture",
    titleBn: "শামীমা নাসরিন কারচুপি সিগনেচার",
    slug: "luxury-karchupi",
    subtitle: "হাতে তৈরি মুক্তা, সিকোয়েন্স ও জারদৌসি কারুকাজ — উৎসব ও রিসেপশনের পরম শোভা",
    image: ASSETS.product8,
    itemCount: 10,
  },
];

// ═══════════════════════════════════════════
// All Products — Dui Konna Official Catalog
// ═══════════════════════════════════════════
export const ALL_PRODUCTS: ProductCardProps[] = [
  {
    id: "DK-001",
    name: "Dui Konna Royal Mustard Gold Handwoven Dhakai Muslin Saree",
    slug: "dui-konna-royal-mustard-gold-handwoven-dhakai-muslin-saree",
    price: 29000,
    compareAtPrice: 34500,
    image: ASSETS.product3,
    images: [ASSETS.product3, ASSETS.product1, ASSETS.product2],
    category: "Exclusive Muslin Sarees",
    isNew: true,
    isBestseller: true,
    stock: 12,
  },
  {
    id: "DK-002",
    name: "Dui Konna Royal Red Bridal & Festive Muslin Saree Trio Special",
    slug: "dui-konna-royal-red-bridal-festive-muslin-saree-trio-special",
    price: 32500,
    compareAtPrice: 38000,
    image: ASSETS.banner,
    images: [ASSETS.banner, ASSETS.product3, ASSETS.product8],
    category: "Bridal & Festive Red Muslin",
    isNew: true,
    isBestseller: true,
    stock: 8,
  },
  {
    id: "DK-003",
    name: "Dui Konna Terracotta Rust Orange Butterfly Zari Muslin Saree",
    slug: "dui-konna-terracotta-rust-orange-butterfly-zari-muslin-saree",
    price: 24500,
    compareAtPrice: 28500,
    image: ASSETS.product1,
    images: [ASSETS.product1, ASSETS.product3, ASSETS.product2],
    category: "Exclusive Muslin Sarees",
    isNew: true,
    isBestseller: true,
    stock: 15,
  },
  {
    id: "DK-004",
    name: "Dui Konna Seafoam Mint Green Butterfly Handloom Muslin Saree",
    slug: "dui-konna-seafoam-mint-green-butterfly-handloom-muslin-saree",
    price: 22500,
    compareAtPrice: 26500,
    image: ASSETS.product2,
    images: [ASSETS.product2, ASSETS.product7, ASSETS.product1],
    category: "Pastel Heritage Muslin",
    isNew: true,
    isBestseller: true,
    stock: 18,
  },
  {
    id: "DK-005",
    name: "Dui Konna Mauve Plum Chevron Zigzag Zari Muslin Saree",
    slug: "dui-konna-mauve-plum-chevron-zigzag-zari-muslin-saree",
    price: 25500,
    compareAtPrice: 30000,
    image: ASSETS.product4,
    images: [ASSETS.product4, ASSETS.product8, ASSETS.product11],
    category: "Exclusive Muslin Sarees",
    isNew: true,
    isBestseller: true,
    stock: 14,
  },
  {
    id: "DK-006",
    name: "Dui Konna Pearl White Multicolor Geometric Dhakai Jamdani Muslin Saree",
    slug: "dui-konna-pearl-white-multicolor-geometric-dhakai-jamdani-muslin-saree",
    price: 27500,
    compareAtPrice: 32000,
    image: ASSETS.product5,
    images: [ASSETS.product5, ASSETS.product10, ASSETS.product3],
    category: "Authentic Dhakai Jamdani",
    isNew: true,
    isBestseller: true,
    stock: 10,
  },
  {
    id: "DK-007",
    name: "Dui Konna Dual-Tone Sage Green & Magenta Contrast Muslin Saree",
    slug: "dui-konna-dual-tone-sage-green-magenta-contrast-muslin-saree",
    price: 23500,
    compareAtPrice: 27500,
    image: ASSETS.product6,
    images: [ASSETS.product6, ASSETS.product2, ASSETS.product7],
    category: "Exclusive Muslin Sarees",
    isNew: true,
    isBestseller: false,
    stock: 16,
  },
  {
    id: "DK-008",
    name: "Dui Konna Light Pistachio Lime Handloom Zari Muslin Saree",
    slug: "dui-konna-light-pistachio-lime-handloom-zari-muslin-saree",
    price: 21500,
    compareAtPrice: 25000,
    image: ASSETS.product7,
    images: [ASSETS.product7, ASSETS.product2, ASSETS.product6],
    category: "Pastel Heritage Muslin",
    isNew: true,
    isBestseller: false,
    stock: 19,
  },
  {
    id: "DK-009",
    name: "Dui Konna Dusty Lilac Lavender Luxury Karchupi Organza Saree",
    slug: "dui-konna-dusty-lilac-lavender-luxury-karchupi-organza-saree",
    price: 28000,
    compareAtPrice: 33500,
    image: ASSETS.product8,
    images: [ASSETS.product8, ASSETS.product9, ASSETS.product11],
    category: "Luxury Karchupi & Organza",
    isNew: true,
    isBestseller: true,
    stock: 12,
  },
  {
    id: "DK-010",
    name: "Dui Konna Slate Silver Ash Pastel Geometric Handcrafted Muslin Saree",
    slug: "dui-konna-slate-silver-ash-pastel-geometric-handcrafted-muslin-saree",
    price: 23000,
    compareAtPrice: 27000,
    image: ASSETS.product10,
    images: [ASSETS.product10, ASSETS.product5, ASSETS.product2],
    category: "Pastel Heritage Muslin",
    isNew: true,
    isBestseller: false,
    stock: 15,
  },
  {
    id: "DK-011",
    name: "Dui Konna Dusty Mauve Full Drape Floral Karchupi Heritage Saree",
    slug: "dui-konna-dusty-mauve-full-drape-floral-karchupi-heritage-saree",
    price: 28000,
    compareAtPrice: 33500,
    image: ASSETS.product11,
    images: [ASSETS.product11, ASSETS.product8, ASSETS.product9],
    category: "Luxury Karchupi & Organza",
    isNew: true,
    isBestseller: true,
    stock: 11,
  },
  {
    id: "DK-012",
    name: "Dui Konna Exclusive Muslin 4-Piece Hand-Embroidered Festive Dress Set",
    slug: "dui-konna-exclusive-muslin-4-piece-hand-embroidered-festive-dress-set",
    price: 18500,
    compareAtPrice: 22000,
    image: ASSETS.product1,
    images: [ASSETS.product1, ASSETS.product2, ASSETS.product4],
    category: "Exclusive Muslin 4-Piece Sets",
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
export const MUSLIN_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Exclusive Muslin Sarees");
export const JAMDANI_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Authentic Dhakai Jamdani");
export const BRIDAL_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Bridal & Festive Red Muslin");
export const KARCHUPI_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Luxury Karchupi & Organza");
export const PASTEL_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Pastel Heritage Muslin");
export const FOURPIECE_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Exclusive Muslin 4-Piece Sets");

// Backward compatibility aliases
export const LAWN_PRODUCTS = MUSLIN_PRODUCTS;
export const PARTY_PRODUCTS = BRIDAL_PRODUCTS;
export const COTTON_PRODUCTS = PASTEL_PRODUCTS;
export const CHUNRI_PRODUCTS = JAMDANI_PRODUCTS;
export const SIGNATURE_PRODUCTS = KARCHUPI_PRODUCTS;
export const SKINCARE_PRODUCTS = FOURPIECE_PRODUCTS;
export const SEQUIN_PRODUCTS = KARCHUPI_PRODUCTS;
export const KATAN_PRODUCTS = BRIDAL_PRODUCTS;
export const THREEPIECE_PRODUCTS = FOURPIECE_PRODUCTS;
export const ORGANZA_PRODUCTS = KARCHUPI_PRODUCTS;
export const PRET_PRODUCTS = FOURPIECE_PRODUCTS;
export const SILK_PRODUCTS = MUSLIN_PRODUCTS;
export const DESIGNER_PRODUCTS = MUSLIN_PRODUCTS;
export const CASUAL_PRODUCTS = PASTEL_PRODUCTS;
export const VINTAGE_PRODUCTS = JAMDANI_PRODUCTS;
export const FARSI_PRODUCTS = MUSLIN_PRODUCTS;
export const VELVET_PRODUCTS = BRIDAL_PRODUCTS;
export const JEWELRY_PRODUCTS = KARCHUPI_PRODUCTS;
export const COORD_PRODUCTS = FOURPIECE_PRODUCTS;
export const ABAYA_PRODUCTS = FOURPIECE_PRODUCTS;
export const KAFTAN_PRODUCTS = FOURPIECE_PRODUCTS;
export const DRESS_PRODUCTS = FOURPIECE_PRODUCTS;
export const KURTI_PRODUCTS = PASTEL_PRODUCTS;
export const CHIFFON_PRODUCTS = KARCHUPI_PRODUCTS;

// Helper to filter by category slug
export function getProductsByCategory(slug: string): ProductCardProps[] {
  switch (slug) {
    case "exclusive-muslin":
    case "pakistani-lawn":
    case "boutique-three-piece":
      return MUSLIN_PRODUCTS;
    case "dhakai-jamdani":
    case "chunri-traditional":
      return JAMDANI_PRODUCTS;
    case "bridal-festive":
    case "festive-party":
    case "heritage-katan-silk":
    case "sequin-tissue-sarees":
      return BRIDAL_PRODUCTS;
    case "luxury-karchupi":
    case "orni-signature":
    case "skincare-glow":
      return KARCHUPI_PRODUCTS;
    case "pastel-heritage":
    case "premium-cotton":
    case "handloom-cotton-sarees":
    case "muslin-tussar-sarees":
      return PASTEL_PRODUCTS;
    case "muslin-four-piece":
      return FOURPIECE_PRODUCTS;
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
  const catName = catObj?.name || "Exclusive Muslin Sarees";
  const catSlug = catObj?.slug || "exclusive-muslin";
  const imgs = p.images && p.images.length > 0 ? p.images : [p.image];
  const isFourPiece = p.category === "Exclusive Muslin 4-Piece Sets";

  return {
    name: p.name,
    slug: p.slug,
    description: isFourPiece
      ? `${p.name} — দুই কন্যা (Dui Konna) এক্সক্লুসিভ ৪-পিস ড্রেস সেট। নিখুঁত কারচুপি কাজ খচিত মসলিন কামিজ, আরামদায়ক সফট ইনার লাইনিং, ম্যাচিং সালোয়ার এবং ভারী আঁচলের মসলিন ওড়না। শতভাগ প্রিমিয়াম মেটেরিয়াল, নিখুঁত ফিনিশিং এবং সারাদেশে ক্যাশ অন হোম ডেলিভারি ও পার্সেল খুলে চেক করে নেওয়ার সুবিধা।`
      : `${p.name} — দুই কন্যা (Dui Konna) এর সিগনেচার ঢাকাই মসলিন শাড়ি কালেকশন। খাঁটি মসলিন ফেব্রিক, নিখুঁত হাতে বোনা জরি বুটি, রাজকীয় পাড় এবং ম্যাচিং আনস্টিচড ব্লাউজ পিস। হাউস #২১/বি, রোড #০১, নিকুঞ্জ-২ শোরুম থেকে সরাসরি প্রস্তুতকৃত। দেশের ৬৪ জেলায় ক্যাশ অন হোম ডেলিভারি এবং ডেলিভারিম্যানের সামনে পার্সেল খুলে চেক করে পেমেন্ট করার শতভাগ নিশ্চিন্ত সুবিধা।`,
    price: p.price,
    isFeatured: p.isBestseller ?? true,
    images: imgs,
    category: {
      name: catName,
      slug: catSlug,
    },
    variants: isFourPiece
      ? [
          {
            size: "Semi-Stitched 4-Piece (Up to 46 Bust)",
            color: "As Shown in Picture",
            price: p.price,
            stock: 12,
            images: imgs,
          },
          {
            size: "Custom Tailored Fit",
            color: "As Shown in Picture",
            price: p.price + 500,
            stock: 8,
            images: imgs,
          },
        ]
      : [
          {
            size: "Standard Saree (12 Haat with Blouse Piece)",
            color: "As Shown in Picture",
            price: p.price,
            stock: Math.max(4, Math.floor((p.stock ?? 12) / 2)),
            images: imgs,
          },
          {
            size: "Fall & Pico Finished Premium Edition",
            color: "As Shown in Picture",
            price: p.price + 350,
            stock: Math.max(3, Math.floor((p.stock ?? 12) / 3)),
            images: imgs,
          },
        ],
  };
});
