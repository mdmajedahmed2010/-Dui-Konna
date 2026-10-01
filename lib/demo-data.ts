/**
 * Shopping Queen by Orni — Official Product Data & Catalog
 * Authentic Pakistani Suits, Exclusive Festive Partywear & Orni's Natural Glow Skincare
 * Dhaka, Bangladesh • Facebook: https://www.facebook.com/Shoppingqueenbyorni
 * 190,500+ Followers • Open Parcel Inspection Nationwide
 * All assets served locally from /shoppingqueen-assets/
 */

import type { ProductCardProps } from "@/components/product/product-card";

// ═══════════════════════════════════════════
// Asset image paths (local, /shoppingqueen-assets/)
// ═══════════════════════════════════════════
export const ASSETS = {
  logo: "/shoppingqueen-assets/logo.avif",
  banner: "/shoppingqueen-assets/banner.avif",
  heroImage: "/shoppingqueen-assets/hero-banner.avif",
  // 12 Authentic Assets from Shopping Queen by Orni
  product1: "/shoppingqueen-assets/sq-product-01-royal-blue.jpg",
  product2: "/shoppingqueen-assets/sq-product-02-aqua-teal.jpg",
  product3: "/shoppingqueen-assets/sq-product-03-cornflower-blue.jpg",
  product4: "/shoppingqueen-assets/sq-product-04-blush-pink-luxury.jpg",
  product5: "/shoppingqueen-assets/sq-product-05-maroon-wine-luxury.jpg",
  product6: "/shoppingqueen-assets/sq-product-06-orni-signature-pink.jpg",
  product7: "/shoppingqueen-assets/sq-product-07-cream-beige-cotton.jpg",
  product8: "/shoppingqueen-assets/sq-product-08-mint-sea-green.jpg",
  product9: "/shoppingqueen-assets/sq-product-09-chunri-orange-red.jpg",
  product10: "/shoppingqueen-assets/sq-product-10-lime-floral-lawn.jpg",
  product11: "/shoppingqueen-assets/sq-product-11-black-gold-festive.jpg",
  product12: "/shoppingqueen-assets/sq-product-12-kim-whitening-cream.avif",
  // Backward compatibility keys
  sareeChampagne: "/shoppingqueen-assets/sq-product-04-blush-pink-luxury.jpg",
  sareePurple: "/shoppingqueen-assets/sq-product-05-maroon-wine-luxury.jpg",
  sareeFuchsia: "/shoppingqueen-assets/sq-product-06-orni-signature-pink.jpg",
  sareeAubergine: "/shoppingqueen-assets/sq-product-11-black-gold-festive.jpg",
  sareeSlateGrey: "/shoppingqueen-assets/sq-product-01-royal-blue.jpg",
  sareeYellow: "/shoppingqueen-assets/sq-product-09-chunri-orange-red.jpg",
  sareeKatanMaroon: "/shoppingqueen-assets/sq-product-05-maroon-wine-luxury.jpg",
  threePieceAjrakh: "/shoppingqueen-assets/sq-product-01-royal-blue.jpg",
  threePieceEthnic: "/shoppingqueen-assets/sq-product-03-cornflower-blue.jpg",
  threePieceLavender: "/shoppingqueen-assets/sq-product-02-aqua-teal.jpg",
  img1: "/shoppingqueen-assets/sq-product-01-royal-blue.jpg",
  img2: "/shoppingqueen-assets/sq-product-02-aqua-teal.jpg",
  img3: "/shoppingqueen-assets/sq-product-05-maroon-wine-luxury.jpg",
  img4: "/shoppingqueen-assets/sq-product-04-blush-pink-luxury.jpg",
  img5: "/shoppingqueen-assets/sq-product-06-orni-signature-pink.jpg",
  img6: "/shoppingqueen-assets/sq-product-09-chunri-orange-red.jpg",
  img7: "/shoppingqueen-assets/sq-product-07-cream-beige-cotton.jpg",
  img8: "/shoppingqueen-assets/sq-product-08-mint-sea-green.jpg",
  img9: "/shoppingqueen-assets/sq-product-10-lime-floral-lawn.jpg",
  img10: "/shoppingqueen-assets/sq-product-11-black-gold-festive.jpg",
};

// ═══════════════════════════════════════════
// Product Categories — Shopping Queen by Orni
// ═══════════════════════════════════════════
export const CATEGORIES = [
  {
    name: "Pakistani Lawn Collection",
    nameBn: "পাকিস্তানি লন কালেকশন",
    slug: "pakistani-lawn",
    description:
      "প্রিমিয়াম সুইস কটন লন, ডিজিটাল ফ্লোরাল প্রিন্ট, সুতা এমব্রয়ডারি কাজ ও সফট শিফন বা ভয়েল দোপাট্টা সমৃদ্ধ ৩-পিস কালেকশন।",
    image: ASSETS.product1,
    productCount: 16,
  },
  {
    name: "Exclusive Festive Partywear",
    nameBn: "এক্সক্লুসিভ পার্টিওয়্যার ও ফেস্টিভ",
    slug: "festive-party",
    description:
      "বিয়ে, এনগেজমেন্ট ও উৎসবের জন্য বিলাসবহুল অর্গাঞ্জা, জর্জেট, সিকোয়েন্স ও জরি এমব্রয়ডারি ড্রেস কালেকশন।",
    image: ASSETS.product5,
    productCount: 12,
  },
  {
    name: "Premium Handloom & Pure Cotton",
    nameBn: "প্রিমিয়াম সুতি ও হ্যান্ডলুম থ্রি-পিস",
    slug: "premium-cotton",
    description:
      "দৈনন্দিন ব্যবহার ও অফিসের জন্য আরামদায়ক পিওর কটন ফেব্রিক, মার্জিত রঙের কম্বিনেশন এবং নেকলাইনে সূক্ষ্ম কাজ।",
    image: ASSETS.product7,
    productCount: 14,
  },
  {
    name: "Traditional Chunri & Bandhani",
    nameBn: "চুনরি ও ঐতিহ্যবাহী কালেকশন",
    slug: "chunri-traditional",
    description:
      "ঐতিহ্যবাহী বান্ধনি ও চুনরি প্রিন্ট, প্রাণবন্ত রঙের উৎসব ও খাঁটি দেশীয় ঐতিহ্যের মিশেলে তৈরি বিশেষ থ্রি-পিস।",
    image: ASSETS.product9,
    productCount: 8,
  },
  {
    name: "Orni Signature Edit",
    nameBn: "অর্ণি সিগনেচার কালেকশন",
    slug: "orni-signature",
    description:
      "অর্ণি ইসলাম কর্তৃক নিজে নির্বাচিত, স্টাইলকৃত ও প্রদর্শিত এক্সক্লুসিভ লিমিটেড এডিশন ফ্যাশন পোশাক।",
    image: ASSETS.product6,
    productCount: 10,
  },
  {
    name: "Skincare & Natural Glow Care",
    nameBn: "স্কিনকেয়ার ও গ্লো এসেনশিয়াল",
    slug: "skincare-glow",
    description:
      "Kim Whitening Pearl & Snowlotus Cream — প্রাকৃতিক উপাদানে তৈরি, ক্ষতিকারক কেমিক্যালমুক্ত রাতের যত্নে ত্বকের প্রাকৃতিক উজ্জ্বলতা।",
    image: ASSETS.product12,
    productCount: 6,
  },
];

// ═══════════════════════════════════════════
// Collections — Featured Curations
// ═══════════════════════════════════════════
export const FEATURED_COLLECTIONS = [
  {
    id: "col-pakistani-lawn",
    title: "Royal Pakistani Lawn 2026",
    titleBn: "রয়্যাল পাকিস্তানি লন সিরিজ",
    slug: "pakistani-lawn",
    subtitle: "সুইস কটন লন, ডিজিটাল প্রিন্ট ও শিফন দোপাট্টা — সামার স্পেশাল এডিট",
    image: ASSETS.product1,
    itemCount: 16,
  },
  {
    id: "col-festive-party",
    title: "Orni's Festive Glam Edit",
    titleBn: "অর্ণিজ ফেস্টিভ গ্ল্যাম এডিট",
    slug: "festive-party",
    subtitle: "হেভি জরি, সিকোয়েন্স ও কাটওয়ার্ক এমব্রয়ডারি লাক্সারি পার্টিওয়্যার",
    image: ASSETS.product5,
    itemCount: 12,
  },
  {
    id: "col-premium-cotton",
    title: "Daily Pure Cotton Elegance",
    titleBn: "ডেইলি পিওর কটন এলিগ্যান্স",
    slug: "premium-cotton",
    subtitle: "ক্যাম্পাস ও অফিসের জন্য আরামদায়ক সুতি থ্রি-পিস কালেকশন",
    image: ASSETS.product7,
    itemCount: 14,
  },
  {
    id: "col-kim-skincare",
    title: "Kim Whitening & Glow Care",
    titleBn: "কিম হোয়াইটেনিং পার্ল কেয়ার",
    slug: "skincare-glow",
    subtitle: "রাতের যত্নে প্রাকৃতিক উজ্জ্বলতা ও দাগহীন লাবণ্যময় ত্বক ✨",
    image: ASSETS.product12,
    itemCount: 6,
  },
];

// ═══════════════════════════════════════════
// All Products — Shopping Queen by Orni Official Catalog
// ═══════════════════════════════════════════
export const ALL_PRODUCTS: ProductCardProps[] = [
  {
    id: "SQO-001",
    name: "Shopping Queen Royal Blue Embroidered Pakistani Lawn 3-Piece",
    slug: "shopping-queen-royal-blue-embroidered-pakistani-lawn-3-piece",
    price: 1650,
    compareAtPrice: 2200,
    image: ASSETS.product1,
    images: [ASSETS.product1, ASSETS.product2],
    category: "Pakistani Lawn Collection",
    isNew: true,
    isBestseller: true,
    stock: 28,
  },
  {
    id: "SQO-002",
    name: "Shopping Queen Turquoise Aqua Digital Floral Lawn 3-Piece",
    slug: "shopping-queen-turquoise-aqua-digital-floral-lawn-3-piece",
    price: 1650,
    compareAtPrice: 2200,
    image: ASSETS.product2,
    images: [ASSETS.product2, ASSETS.product1],
    category: "Pakistani Lawn Collection",
    isNew: true,
    isBestseller: true,
    stock: 24,
  },
  {
    id: "SQO-003",
    name: "Shopping Queen Cornflower Blue Handloom Embroidered Cotton 3-Piece",
    slug: "shopping-queen-cornflower-blue-handloom-embroidered-cotton-3-piece",
    price: 1450,
    compareAtPrice: 1950,
    image: ASSETS.product3,
    images: [ASSETS.product3, ASSETS.product7, ASSETS.product8],
    category: "Premium Handloom & Pure Cotton",
    isNew: true,
    isBestseller: true,
    stock: 20,
  },
  {
    id: "SQO-004",
    name: "Shopping Queen Luxury Blush Pink Heavily Embroidered Festive Suit",
    slug: "shopping-queen-luxury-blush-pink-heavily-embroidered-festive-suit",
    price: 2450,
    compareAtPrice: 3200,
    image: ASSETS.product4,
    images: [ASSETS.product4, ASSETS.product5],
    category: "Exclusive Festive Partywear",
    isNew: true,
    isBestseller: true,
    stock: 18,
  },
  {
    id: "SQO-005",
    name: "Shopping Queen Royal Maroon & Zari Heavily Embroidered Partywear Suit",
    slug: "shopping-queen-royal-maroon-zari-heavily-embroidered-partywear-suit",
    price: 2650,
    compareAtPrice: 3500,
    image: ASSETS.product5,
    images: [ASSETS.product5, ASSETS.product4],
    category: "Exclusive Festive Partywear",
    isNew: true,
    isBestseller: true,
    stock: 15,
  },
  {
    id: "SQO-006",
    name: "Orni Signature Edit — Rose Pink & Tangerine Designer Lawn Suit",
    slug: "orni-signature-edit-rose-pink-tangerine-designer-lawn-suit",
    price: 1850,
    compareAtPrice: 2400,
    image: ASSETS.product6,
    images: [ASSETS.product6, ASSETS.product10],
    category: "Orni Signature Edit",
    isNew: true,
    isBestseller: true,
    stock: 30,
  },
  {
    id: "SQO-007",
    name: "Shopping Queen Cream Beige Floral Embroidered Pure Cotton 3-Piece",
    slug: "shopping-queen-cream-beige-floral-embroidered-pure-cotton-3-piece",
    price: 1450,
    compareAtPrice: 1950,
    image: ASSETS.product7,
    images: [ASSETS.product7, ASSETS.product3, ASSETS.product8],
    category: "Premium Handloom & Pure Cotton",
    isNew: true,
    isBestseller: true,
    stock: 22,
  },
  {
    id: "SQO-008",
    name: "Shopping Queen Mint Sea Green Embroidered Handloom Cotton 3-Piece",
    slug: "shopping-queen-mint-sea-green-embroidered-handloom-cotton-3-piece",
    price: 1450,
    compareAtPrice: 1950,
    image: ASSETS.product8,
    images: [ASSETS.product8, ASSETS.product7, ASSETS.product3],
    category: "Premium Handloom & Pure Cotton",
    isNew: true,
    isBestseller: false,
    stock: 25,
  },
  {
    id: "SQO-009",
    name: "Shopping Queen Traditional Chunri Bandhani Orange-Red Printed 3-Piece",
    slug: "shopping-queen-traditional-chunri-bandhani-orange-red-printed-3-piece",
    price: 1550,
    compareAtPrice: 2100,
    image: ASSETS.product9,
    images: [ASSETS.product9, ASSETS.product10],
    category: "Traditional Chunri & Bandhani",
    isNew: true,
    isBestseller: true,
    stock: 26,
  },
  {
    id: "SQO-010",
    name: "Shopping Queen Lime Green & Cyan Ombre Floral Designer Lawn 3-Piece",
    slug: "shopping-queen-lime-green-cyan-ombre-floral-designer-lawn-3-piece",
    price: 1550,
    compareAtPrice: 2100,
    image: ASSETS.product10,
    images: [ASSETS.product10, ASSETS.product9],
    category: "Pakistani Lawn Collection",
    isNew: true,
    isBestseller: false,
    stock: 20,
  },
  {
    id: "SQO-011",
    name: "Shopping Queen Regal Black & Antique Zari Heavy Embroidered Festive Gown",
    slug: "shopping-queen-regal-black-antique-zari-heavy-embroidered-festive-gown",
    price: 2850,
    compareAtPrice: 3800,
    image: ASSETS.product11,
    images: [ASSETS.product11, ASSETS.product5],
    category: "Exclusive Festive Partywear",
    isNew: true,
    isBestseller: true,
    stock: 14,
  },
  {
    id: "SQO-012",
    name: "Kim Whitening Pearl & Snowlotus Night Cream (Net Wt 20g) — Natural Glow",
    slug: "kim-whitening-pearl-and-snowlotus-night-cream-20g-natural-glow",
    price: 850,
    compareAtPrice: 1200,
    image: ASSETS.product12,
    images: [ASSETS.product12, ASSETS.banner],
    category: "Skincare & Natural Glow Care",
    isNew: true,
    isBestseller: true,
    stock: 50,
  },
];

// ═══════════════════════════════════════════
// Filtered Helper Collections
// ═══════════════════════════════════════════
export const NEW_ARRIVALS = ALL_PRODUCTS.filter((p) => p.isNew);
export const FEATURED_PRODUCTS = ALL_PRODUCTS.slice(0, 8);
export const LAWN_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Pakistani Lawn Collection");
export const PARTY_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Exclusive Festive Partywear");
export const COTTON_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Premium Handloom & Pure Cotton");
export const CHUNRI_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Traditional Chunri & Bandhani");
export const SIGNATURE_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Orni Signature Edit");
export const SKINCARE_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Skincare & Natural Glow Care");

// Backward compatibility aliases
export const SEQUIN_PRODUCTS = PARTY_PRODUCTS;
export const KATAN_PRODUCTS = PARTY_PRODUCTS;
export const THREEPIECE_PRODUCTS = LAWN_PRODUCTS;
export const MUSLIN_PRODUCTS = COTTON_PRODUCTS;
export const ORGANZA_PRODUCTS = PARTY_PRODUCTS;
export const PRET_PRODUCTS = LAWN_PRODUCTS;
export const SILK_PRODUCTS = PARTY_PRODUCTS;
export const DESIGNER_PRODUCTS = SIGNATURE_PRODUCTS;
export const CASUAL_PRODUCTS = COTTON_PRODUCTS;
export const VINTAGE_PRODUCTS = CHUNRI_PRODUCTS;
export const FARSI_PRODUCTS = LAWN_PRODUCTS;
export const VELVET_PRODUCTS = PARTY_PRODUCTS;
export const JEWELRY_PRODUCTS = SKINCARE_PRODUCTS;
export const COORD_PRODUCTS = LAWN_PRODUCTS;
export const ABAYA_PRODUCTS = PARTY_PRODUCTS;
export const KAFTAN_PRODUCTS = LAWN_PRODUCTS;
export const DRESS_PRODUCTS = LAWN_PRODUCTS;
export const KURTI_PRODUCTS = COTTON_PRODUCTS;
export const CHIFFON_PRODUCTS = PARTY_PRODUCTS;
export const BRIDAL_PRODUCTS = PARTY_PRODUCTS;

// Helper to filter by category slug
export function getProductsByCategory(slug: string): ProductCardProps[] {
  switch (slug) {
    case "pakistani-lawn":
    case "pakistani-lawn-collection":
    case "boutique-three-piece":
      return LAWN_PRODUCTS;
    case "festive-party":
    case "exclusive-festive-partywear":
    case "heritage-katan-silk":
    case "sequin-tissue-sarees":
      return PARTY_PRODUCTS;
    case "premium-cotton":
    case "handloom-cotton-sarees":
    case "muslin-tussar-sarees":
      return COTTON_PRODUCTS;
    case "chunri-traditional":
      return CHUNRI_PRODUCTS;
    case "orni-signature":
      return SIGNATURE_PRODUCTS;
    case "skincare-glow":
      return SKINCARE_PRODUCTS;
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
  const isSkincare = p.category === "Skincare & Natural Glow Care";

  return {
    name: p.name,
    slug: p.slug,
    description: isSkincare
      ? `Kim Whitening Pearl and Snowlotus Cream (Net Wt 20g) — থাইল্যান্ডের জনপ্রিয় ফর্মুলা সমৃদ্ধ স্কিনকেয়ার নাইট ক্রিম। ত্বককে গভীরভাবে ময়েশ্চারাইজ করে, ব্রণ ও কালচে দাগ কমাতে সহায়তা করে এবং রাতারাতি পুষ্টি দিয়ে ত্বক কোমল ও লাবণ্যময় করে তোলে। ১০০% ক্ষতিকারক কেমিক্যালমুক্ত ও প্রাকৃতিক উপাদান সমৃদ্ধ। দেশব্যাপী হোম ডেলিভারি ও পার্সেল চেক করে পেমেন্ট করার সুযোগ।`
      : `${p.name} — শপিং কুইন বাই অর্নি (Shopping Queen by Orni) এক্সক্লুসিভ কালেকশন। ১০০% প্রিমিয়াম কোয়ালিটি ফেব্রিক, আকর্ষণীয় কালার কম্বিনেশন এবং সূক্ষ্ম কারুকাজ। সারাদেশের ৬৪ জেলায় ক্যাশ অন হোম ডেলিভারি এবং ডেলিভারিম্যানের সামনে পার্সেল খুলে দেখে চেক করে নেওয়ার ১০০% নিশ্চিন্ত সুবিধা।`,
    price: p.price,
    isFeatured: p.isBestseller ?? true,
    images: imgs,
    category: {
      name: catName,
      slug: catSlug,
    },
    variants: isSkincare
      ? [
          {
            size: "Single Pack (20g Jar)",
            color: "Original Pearl Cream",
            price: p.price,
            stock: 35,
            images: imgs,
          },
          {
            size: "Combo Pack (2 x 20g Jar) [Free Delivery]",
            color: "Original Pearl Cream",
            price: p.price * 2 - 100,
            stock: 15,
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
            size: "Semi-Stitched Premium Fit",
            color: "As Shown in Picture",
            price: p.price + 350,
            stock: Math.max(3, Math.floor((p.stock ?? 15) / 3)),
            images: imgs,
          },
        ],
  };
});
