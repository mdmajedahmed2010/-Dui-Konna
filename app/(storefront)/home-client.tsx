/* eslint-disable */
"use client";

/**
 * Ash and Aspen — Haute Couture Storefront Orchestrator
 * Customer-Centric Marketplace Portal for 100% Genuine Pakistani Attires
 * House #76, Gausul Azam Avenue, Sector #13, Uttara, Dhaka - 1230 — https://www.facebook.com/ashandaspenclothing/
 * All images served locally from /public/ash-and-aspen/
 */

import { BlossomPetalsOverlay } from "@/components/effects/blossom-petals";
import { HeroCouture } from "@/components/home/hero-couture";
import { TrustBadges } from "@/components/home/trust-badges";
import { BentoShowcase } from "@/components/home/bento-showcase";
import { CuratedArrivals, type CuratedProduct } from "@/components/home/curated-arrivals";
import { LookbookCouture } from "@/components/home/lookbook-couture";
import { HeritageCouture } from "@/components/home/heritage-couture";
import { CommunityStories } from "@/components/home/community-stories";
import { ASSETS, ALL_PRODUCTS } from "@/lib/demo-data";

/* ──────────────── Default Curated Catalog — Ash and Aspen ──────────────── */
const DEFAULT_PRODUCTS: CuratedProduct[] = ALL_PRODUCTS.map((p) => ({
  id: p.id,
  name: p.name,
  category: p.category || "Pakistani Designer Lawn",
  price: p.price,
  compareAtPrice: p.compareAtPrice ?? Math.round(p.price * 1.18),
  image: p.image,
  secondaryImage: p.images && p.images.length > 1 ? p.images[1]! : p.image,
  slug: p.slug,
  tag: p.isBestseller ? "BESTSELLER" : p.isNew ? "NEW ARRIVAL" : "AUTHENTIC",
  sizes: ["Unstitched", "Semi-Stitched", "Stitched Pret"],
}));

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
            category: p.category?.name || "Ash and Aspen Collection",
            price: pPrice,
            compareAtPrice: Math.round(pPrice * 1.18),
            image: img,
            secondaryImage: secImg,
            slug: p.slug,
            tag: p.isFeatured ? "EXCLUSIVE" : undefined,
            sizes: p.variants?.map((v: any) => v.size).filter(Boolean) || ["Unstitched", "Semi-Stitched"],
          };
        })
      : DEFAULT_PRODUCTS;

  return (
    <div className="relative flex flex-col bg-[#FAF7F2] overflow-hidden">
      {/* 1. Ambient Floating Terracotta & Slate Shimmer (Canvas-based, GPU accelerated) */}
      <BlossomPetalsOverlay />

      {/* 2. Cinematic Haute Couture Hero with Interactive Garment Hotspots */}
      <HeroCouture />

      {/* 3. Open Parcel Guarantee & Uttara Showroom Trust Badges */}
      <TrustBadges />

      {/* 4. Asymmetric Magazine Bento Collection Showcase */}
      <BentoShowcase />

      {/* 5. Curated Arrivals with Double-Bezel Hardware Cards & 1-Tap Quick-Size Picker */}
      <CuratedArrivals products={mappedProducts} />

      {/* 6. Interactive "Shop The Look" Lookbook with Garment Pins */}
      <LookbookCouture />

      {/* 7. Brand Heritage & 81,000+ Community Social Proof */}
      <HeritageCouture />

      {/* 8. Community Stories & Verified Customer Love */}
      <CommunityStories />
    </div>
  );
}

