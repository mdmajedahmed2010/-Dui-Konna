/* eslint-disable */
"use client";

/**
 * Shopping Queen by Orni — Haute Couture Storefront Orchestrator
 * Authentic Pakistani Lawn, Festive Couture & Kim Pearl Skincare
 * Official: https://www.facebook.com/Shoppingqueenbyorni (190,000+ Community)
 * All authentic assets served locally from /shoppingqueen-assets/
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

/* ──────────────── Default Curated Catalog — Shopping Queen by Orni ──────────────── */
const DEFAULT_PRODUCTS: CuratedProduct[] = ALL_PRODUCTS.map((p) => ({
  id: p.id,
  name: p.name,
  category: p.category || "Pakistani Lawn 3-Piece",
  price: p.price,
  compareAtPrice: p.compareAtPrice ?? Math.round(p.price * 1.15),
  image: p.image,
  secondaryImage: p.images && p.images.length > 1 ? p.images[1]! : p.image,
  slug: p.slug,
  tag: p.isBestseller ? "BESTSELLER" : p.isNew ? "NEW ARRIVAL" : "FEATURED",
  sizes: p.category?.includes("Skincare") ? ["20g Single Jar", "Combo Pack (2 Jars)"] : ["Unstitched 3-Piece", "Semi-Stitched"],
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
          const img = p.variants?.[0]?.images?.[0] || ASSETS.product1;
          const secImg = p.variants?.[0]?.images?.[1] || img;
          const pPrice = Number(p.variants?.[0]?.price ?? p.basePrice);
          return {
            id: p.id,
            name: p.name,
            category: p.category?.name || "Orni Signature Collection",
            price: pPrice,
            compareAtPrice: Math.round(pPrice * 1.15),
            image: img,
            secondaryImage: secImg,
            slug: p.slug,
            tag: p.isFeatured ? "EXCLUSIVE" : undefined,
            sizes: p.variants?.map((v: any) => v.size).filter(Boolean) || ["Unstitched 3-Piece"],
          };
        })
      : DEFAULT_PRODUCTS;

  return (
    <div className="relative flex flex-col bg-[#FAF6F0] overflow-hidden">
      {/* 1. Ambient Floating Gold & Crimson Shimmer */}
      <BlossomPetalsOverlay />

      {/* 2. Cinematic Haute Couture Hero with Interactive Hotspots */}
      <HeroCouture />

      {/* 3. Open Parcel Guarantee & 190K+ Community Trust Badges */}
      <TrustBadges />

      {/* 4. Asymmetric Magazine Bento Showcase */}
      <BentoShowcase />

      {/* 5. Curated Arrivals with Double-Bezel Hardware Cards & 1-Tap Quick-Add */}
      <CuratedArrivals products={mappedProducts} />

      {/* 6. Interactive "Shop The Look" Lookbook with Garment Pins */}
      <LookbookCouture />

      {/* 7. Brand Heritage & 190,000+ Community Social Proof */}
      <HeritageCouture />

      {/* 8. Community Stories & Verified Customer Love */}
      <CommunityStories />
    </div>
  );
}
