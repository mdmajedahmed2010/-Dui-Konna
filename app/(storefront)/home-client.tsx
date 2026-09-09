/* eslint-disable */
"use client";

/**
 * Enaya's | Sylhet — Haute Couture Storefront Orchestrator
 * Authentic Pakistani Luxury Suits & Designer Collections
 * Nayasarak Point, Sylhet, Bangladesh — https://www.facebook.com/Enayas.Sylhet/
 * All images served locally from /public/enayas-assets/
 */

import { BlossomPetalsOverlay } from "@/components/effects/blossom-petals";
import { HeroCouture } from "@/components/home/hero-couture";
import { BentoShowcase } from "@/components/home/bento-showcase";
import { CuratedArrivals, type CuratedProduct } from "@/components/home/curated-arrivals";
import { LookbookCouture } from "@/components/home/lookbook-couture";
import { HeritageCouture } from "@/components/home/heritage-couture";
import { CommunityStories } from "@/components/home/community-stories";
import { ASSETS } from "@/lib/demo-data";

/* ──────────────── Default Curated Catalog ──────────────── */
const DEFAULT_PRODUCTS: CuratedProduct[] = [
  {
    id: "eny-001",
    name: "Enaya's Mint Green Embroidered Pakistani Lawn 3-Piece",
    category: "Pakistani Lawn Collection",
    price: 3850,
    compareAtPrice: 4400,
    image: ASSETS.img7,
    secondaryImage: ASSETS.img4,
    slug: "mint-green-embroidered-pakistani-lawn-3piece",
    tag: "BESTSELLER",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "eny-002",
    name: "Powder Blue Pastel Embroidered Floral Lawn Set",
    category: "Pakistani Lawn Collection",
    price: 3950,
    compareAtPrice: 4600,
    image: ASSETS.img4,
    secondaryImage: ASSETS.img7,
    slug: "powder-blue-pastel-embroidered-floral-lawn-set",
    tag: "NEW SEASON",
    sizes: ["M", "L", "XL"],
  },
  {
    id: "eny-003",
    name: "Sadabahar Original Luxury Embroidered Couture 3-Piece",
    category: "Designer Luxury & Pre-Orders",
    price: 13500,
    compareAtPrice: 15500,
    image: ASSETS.img2,
    secondaryImage: ASSETS.img6,
    slug: "sadabahar-original-luxury-embroidered-couture-3piece",
    tag: "ORIGINAL PAKISTANI",
    sizes: ["M", "L", "XL"],
  },
  {
    id: "eny-005",
    name: "Midnight Black Royal Zardozi Hand-Embellished Formal Suit",
    category: "Party Wear & Festive Organza",
    price: 6850,
    compareAtPrice: 7800,
    image: ASSETS.img3,
    secondaryImage: ASSETS.img5,
    slug: "midnight-black-royal-zardozi-hand-embellished-formal-suit",
    tag: "FESTIVE",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "eny-008",
    name: "Ivory Cream Embroidered Kurti with Navy Dupatta & Palazzo",
    category: "Casual & Farsi Sets",
    price: 2650,
    compareAtPrice: 3100,
    image: ASSETS.img1,
    secondaryImage: ASSETS.img8,
    slug: "ivory-cream-embroidered-kurti-with-navy-dupatta-palazzo",
    tag: "BOUTIQUE EDIT",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "eny-009",
    name: "Pure Cotton Flared Farsi Salwar Daily Boutique 2-Piece",
    category: "Casual & Farsi Sets",
    price: 2250,
    compareAtPrice: 2650,
    image: ASSETS.img8,
    secondaryImage: ASSETS.img1,
    slug: "pure-cotton-flared-farsi-salwar-daily-boutique-2piece",
    tag: "SIGNATURE FARSI",
    sizes: ["Free Size", "M", "L", "XL"],
  },
  {
    id: "eny-006",
    name: "Crimson Magenta Embroidered Suit with Lime Silk Dupatta",
    category: "Party Wear & Festive Organza",
    price: 6250,
    compareAtPrice: 7200,
    image: ASSETS.img5,
    secondaryImage: ASSETS.img3,
    slug: "crimson-magenta-embroidered-suit-with-lime-silk-dupatta",
    tag: "POPULAR",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "eny-007",
    name: "Sage Green Embroidered Organza Luxury Festive 3-Piece",
    category: "Party Wear & Festive Organza",
    price: 7450,
    compareAtPrice: 8500,
    image: ASSETS.img9,
    secondaryImage: ASSETS.img3,
    slug: "sage-green-embroidered-organza-luxury-festive-3piece",
    tag: "OPEN PARCEL",
    sizes: ["M", "L", "XL"],
  },
];

export function HomeUI({
  dbProducts,
  dbCategories,
}: {
  dbProducts: any[];
  dbCategories: any[];
}) {
  const mappedProducts: CuratedProduct[] =
    dbProducts && dbProducts.length > 0
      ? dbProducts.map((p: any) => {
          const img = p.variants?.[0]?.images?.[0] || ASSETS.img1;
          const secImg = p.variants?.[0]?.images?.[1] || img;
          const pPrice = Number(p.variants?.[0]?.price ?? p.basePrice);
          return {
            id: p.id,
            name: p.name,
            category: p.category?.name || "Blossom Collection",
            price: pPrice,
            compareAtPrice: Math.round(pPrice * 1.18),
            image: img,
            secondaryImage: secImg,
            slug: p.slug,
            tag: p.isFeatured ? "EXCLUSIVE" : undefined,
            sizes: p.variants?.map((v: any) => v.size).filter(Boolean) || ["S", "M", "L", "XL"],
          };
        })
      : DEFAULT_PRODUCTS;

  return (
    <div className="relative flex flex-col bg-[#fcf9fa] overflow-hidden">
      {/* 1. Ambient Floating Blossom Petals (Canvas-based, GPU accelerated) */}
      <BlossomPetalsOverlay />

      {/* 2. Cinematic Haute Couture Hero with Interactive Garment Hotspots */}
      <HeroCouture />

      {/* 3. Asymmetric Magazine Bento Collection Showcase */}
      <BentoShowcase />

      {/* 4. Curated Arrivals with Double-Bezel Hardware Cards & 1-Tap Quick-Size Picker */}
      <CuratedArrivals products={mappedProducts} />

      {/* 5. Interactive "Shop The Look" Lookbook with Garment Pins */}
      <LookbookCouture />

      {/* 6. Brand Heritage & 61,000+ Community Social Proof */}
      <HeritageCouture />

      {/* 7. Community Stories & Verified Customer Love */}
      <CommunityStories />
    </div>
  );
}
