/* eslint-disable */
"use client";

/**
 * Tazeen's — Haute Couture Storefront Orchestrator
 * Smart & Elegant Heritage Sarees & Boutique Collections
 * Pink City Gulshan & Sector 11 Uttara, Dhaka — https://www.facebook.com/tazeensbd/
 * All authentic assets served locally from /tazeens-assets/
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

/* ──────────────── Default Curated Catalog — Tazeen's ──────────────── */
const DEFAULT_PRODUCTS: CuratedProduct[] = ALL_PRODUCTS.map((p) => ({
  id: p.id,
  name: p.name,
  category: p.category || "Sequin & Tissue Sarees",
  price: p.price,
  compareAtPrice: p.compareAtPrice ?? Math.round(p.price * 1.15),
  image: p.image,
  secondaryImage: p.images && p.images.length > 1 ? p.images[1]! : p.image,
  slug: p.slug,
  tag: p.isBestseller ? "BESTSELLER" : p.isNew ? "NEW ARRIVAL" : "HERITAGE",
  sizes: ["Free Size Saree (6.5 yards)", "With Unstitched Blouse Piece"],
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
          const img = p.variants?.[0]?.images?.[0] || ASSETS.sareeChampagne;
          const secImg = p.variants?.[0]?.images?.[1] || img;
          const pPrice = Number(p.variants?.[0]?.price ?? p.basePrice);
          return {
            id: p.id,
            name: p.name,
            category: p.category?.name || "Tazeen's Collection",
            price: pPrice,
            compareAtPrice: Math.round(pPrice * 1.15),
            image: img,
            secondaryImage: secImg,
            slug: p.slug,
            tag: p.isFeatured ? "EXCLUSIVE" : undefined,
            sizes: p.variants?.map((v: any) => v.size).filter(Boolean) || ["Free Size (6.5 Yards)"],
          };
        })
      : DEFAULT_PRODUCTS;

  return (
    <div className="relative flex flex-col bg-[#FAF7F2] overflow-hidden">
      {/* 1. Ambient Floating Gold & Crimson Shimmer */}
      <BlossomPetalsOverlay />

      {/* 2. Cinematic Haute Couture Hero with Interactive Saree Hotspots */}
      <HeroCouture />

      {/* 3. Open Parcel Guarantee & Gulshan + Uttara Showrooms Trust Badges */}
      <TrustBadges />

      {/* 4. Asymmetric Magazine Bento Saree & Boutique Showcase */}
      <BentoShowcase />

      {/* 5. Curated Arrivals with Double-Bezel Hardware Cards & 1-Tap Quick-Size Picker */}
      <CuratedArrivals products={mappedProducts} />

      {/* 6. Interactive "Shop The Saree Look" Lookbook with Garment Pins */}
      <LookbookCouture />

      {/* 7. Brand Heritage & 50,000+ Community Social Proof */}
      <HeritageCouture />

      {/* 8. Community Stories & Verified Customer Love */}
      <CommunityStories />
    </div>
  );
}
