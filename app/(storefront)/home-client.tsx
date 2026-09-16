/* eslint-disable */
"use client";

/**
 * Closet by Tanzz — Haute Couture Storefront Orchestrator
 * International Luxury Collection & Highest Quality Women's Fashion
 * Natore Tower, Rajlokkhi, Sector 3, Uttara, Dhaka — https://www.facebook.com/Closetbytanzz/
 * All images served locally from /public/closet-assets/
 */

import { BlossomPetalsOverlay } from "@/components/effects/blossom-petals";
import { HeroCouture } from "@/components/home/hero-couture";
import { BentoShowcase } from "@/components/home/bento-showcase";
import { CuratedArrivals, type CuratedProduct } from "@/components/home/curated-arrivals";
import { LookbookCouture } from "@/components/home/lookbook-couture";
import { HeritageCouture } from "@/components/home/heritage-couture";
import { CommunityStories } from "@/components/home/community-stories";
import { ASSETS } from "@/lib/demo-data";

/* ──────────────── Default Curated Catalog — Closet by Tanzz ──────────────── */
const DEFAULT_PRODUCTS: CuratedProduct[] = [
  {
    id: "tanzz-001",
    name: "Midnight Black Block & Floral Cotton 3-Piece",
    category: "Artisan Block & Florals",
    price: 1450,
    compareAtPrice: 1750,
    image: ASSETS.img1,
    secondaryImage: ASSETS.img2,
    slug: "midnight-black-block-floral-embroidered-cotton-3piece",
    tag: "BESTSELLER",
    sizes: ["Unstitched", "Semi-Stitched"],
  },
  {
    id: "tanzz-002",
    name: "Ochre Rust & Charcoal Paisley Boutique 3-Piece",
    category: "Designer Boutique",
    price: 1450,
    compareAtPrice: 1750,
    image: ASSETS.img2,
    secondaryImage: ASSETS.img1,
    slug: "ochre-rust-charcoal-paisley-artisan-boutique-3piece",
    tag: "NEW DROP",
    sizes: ["Unstitched", "Semi-Stitched"],
  },
  {
    id: "tanzz-003",
    name: "Crimson Maroon Kashmiri Jaal Festive 3-Piece",
    category: "Festive & Party Wear",
    price: 1550,
    compareAtPrice: 1850,
    image: ASSETS.img3,
    secondaryImage: ASSETS.img8,
    slug: "crimson-maroon-kashmiri-jaal-festive-lawn-3piece",
    tag: "ROYAL JAAL",
    sizes: ["Unstitched", "Semi-Stitched"],
  },
  {
    id: "tanzz-004",
    name: "Lime Yellow & Emerald Floral Zam Zam Lawn 3-Piece",
    category: "Zam Zam Lawn",
    price: 1350,
    compareAtPrice: 1650,
    image: ASSETS.img4,
    secondaryImage: ASSETS.img7,
    slug: "lime-yellow-emerald-floral-zam-zam-lawn-3piece",
    tag: "POPULAR",
    sizes: ["Unstitched", "Semi-Stitched"],
  },
  {
    id: "tanzz-005",
    name: "Royal Iris Purple Botanical Designer 3-Piece",
    category: "Designer Boutique",
    price: 1450,
    compareAtPrice: 1750,
    image: ASSETS.img5,
    secondaryImage: ASSETS.img10,
    slug: "royal-iris-purple-botanical-designer-boutique-3piece",
    tag: "HOTTEST SELLER",
    sizes: ["Unstitched", "Semi-Stitched"],
  },
  {
    id: "tanzz-006",
    name: "Olive Pistachio & Teal Floral Artisan Cotton 3-Piece",
    category: "Zam Zam Lawn",
    price: 1350,
    compareAtPrice: 1650,
    image: ASSETS.img6,
    secondaryImage: ASSETS.img7,
    slug: "olive-pistachio-teal-floral-artisan-cotton-3piece",
    tag: "SUMMER EDIT",
    sizes: ["Unstitched", "Semi-Stitched"],
  },
  {
    id: "tanzz-007",
    name: "Parrot Green & Royal Blue Geometric Floral 3-Piece",
    category: "Designer Boutique",
    price: 1350,
    compareAtPrice: 1650,
    image: ASSETS.img7,
    secondaryImage: ASSETS.img4,
    slug: "parrot-green-royal-blue-geometric-floral-3piece",
    tag: "FEATURED",
    sizes: ["Unstitched", "Semi-Stitched"],
  },
  {
    id: "tanzz-008",
    name: "Ruby Crimson Vintage Rose Boutique Lawn 3-Piece",
    category: "Festive & Party Wear",
    price: 1450,
    compareAtPrice: 1750,
    image: ASSETS.img8,
    secondaryImage: ASSETS.img3,
    slug: "ruby-crimson-vintage-rose-boutique-lawn-3piece",
    tag: "OPEN PARCEL",
    sizes: ["Unstitched", "Semi-Stitched"],
  },
  {
    id: "tanzz-009",
    name: "Neon Lime & Cyan Chevron Geometric Cotton 3-Piece",
    category: "Casual Chic Sets",
    price: 1350,
    compareAtPrice: 1650,
    image: ASSETS.img9,
    secondaryImage: ASSETS.img4,
    slug: "neon-lime-cyan-chevron-geometric-cotton-3piece",
    tag: "SUMMER GLOW",
    sizes: ["Unstitched", "Semi-Stitched"],
  },
  {
    id: "tanzz-010",
    name: "Cerulean Blue & Sunburst Sunflower Boutique 3-Piece",
    category: "Casual Chic Sets",
    price: 1450,
    compareAtPrice: 1750,
    image: ASSETS.img10,
    secondaryImage: ASSETS.img5,
    slug: "cerulean-blue-sunburst-sunflower-boutique-3piece",
    tag: "SUNFLOWER",
    sizes: ["Unstitched", "Semi-Stitched"],
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
