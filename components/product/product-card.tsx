"use client";

/**
 * Blossom — Product Card (Premium v4.0)
 * Enhanced with wishlist button, low stock badge, and hover action bar.
 */

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, Heart } from "lucide-react";
import { useQuickViewStore } from "@/store/quick-view-store";
import { useWishlistStore } from "@/store/wishlist-store";
import { CURRENCY } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";

export interface ProductCardProps {
  id: string;
  name: string;
  slug: string;
  price: number;
  compareAtPrice?: number | null;
  image: string;
  category?: string;
  isNew?: boolean;
  isSoldOut?: boolean;
  images?: string[];
  secondaryImage?: string;
  isBestseller?: boolean;
  stock?: number;
}

function getSecondaryImage(
  image: string,
  images?: string[],
  explicitSecondary?: string
): string {
  if (explicitSecondary && explicitSecondary !== image) return explicitSecondary;
  if (images && Array.isArray(images) && images.length > 1) {
    const second = images.find(
      (img) => img && img !== image && img !== "null" && img !== "undefined"
    );
    if (second) return second;
  }
  return image;
}

export function ProductCard({
  id,
  name,
  slug,
  price,
  compareAtPrice,
  image,
  category,
  isNew,
  isSoldOut,
  images,
  secondaryImage: explicitSecondary,
  isBestseller,
  stock,
}: ProductCardProps) {
  const hasDiscount = compareAtPrice && compareAtPrice > price;
  const discountPercent = hasDiscount
    ? Math.round(((compareAtPrice - price) / compareAtPrice) * 100)
    : 0;

  const secondaryImage = getSecondaryImage(image, images, explicitSecondary);
  const hasSecondaryImage = secondaryImage !== image && Boolean(secondaryImage);

  const openQuickView = useQuickViewStore((state) => state.openQuickView);
  const wishlistItems = useWishlistStore((state) => state.items);
  const toggleWishlistItem = useWishlistStore((state) => state.toggleItem);
  const isWishlisted = wishlistItems.some((i) => i.id === id);

  const [primaryLoaded, setPrimaryLoaded] = useState(false);
  const [secondaryLoaded, setSecondaryLoaded] = useState(false);
  const [secondaryError, setSecondaryError] = useState(false);

  const canShowSecondary = hasSecondaryImage && secondaryLoaded && !secondaryError;

  const isLowStock = !isSoldOut && typeof stock === "number" && stock > 0 && stock <= 5;

  const handleQuickViewClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    openQuickView({
      id,
      name,
      slug,
      price,
      compareAtPrice,
      image,
      category,
      isNew,
      isSoldOut,
    });
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlistItem({
      id,
      name,
      slug,
      price,
      image,
    });
  };

  return (
    <div className="double-bezel-card group/pcard h-full flex flex-col justify-between">
      <div className="double-bezel-inner flex flex-col h-full justify-between bg-white">
        <Link
          href={`/products/${slug}`}
          className="block relative aspect-[3/4] overflow-hidden bg-neutral-100"
          aria-label={`View ${name} - ${CURRENCY.SYMBOL}${price}`}
        >
          {/* Primary Image */}
          <Image
            src={image || "/images/products/placeholder.jpg"}
            alt={name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            quality={92}
            unoptimized
            className={`object-cover object-top transition-all duration-700 ${
              canShowSecondary
                ? "group-hover/pcard:opacity-0 scale-100 group-hover/pcard:scale-105"
                : "group-hover/pcard:scale-105"
            }`}
            onLoad={() => setPrimaryLoaded(true)}
            onError={() => setPrimaryLoaded(true)}
          />

          {/* Secondary Image Swap on Hover */}
          {hasSecondaryImage && !secondaryError && (
            <Image
              src={secondaryImage}
              alt={`${name} detail view`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              quality={92}
              unoptimized
              className={`object-cover object-top absolute inset-0 transition-all duration-700 scale-102 group-hover/pcard:scale-100 ${
                canShowSecondary ? "opacity-0 group-hover/pcard:opacity-100" : "opacity-0"
              }`}
              onLoad={() => setSecondaryLoaded(true)}
              onError={() => setSecondaryError(true)}
            />
          )}

          {/* Badges — Top Left */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            {isBestseller && (
              <span className="inline-flex items-center px-2.5 py-0.5 bg-[#3D0B3D] text-[#fff8f9] text-[9.5px] font-extrabold uppercase tracking-[0.16em] rounded-full shadow-xs">
                ★ Bestseller
              </span>
            )}
            {isNew && !isBestseller && (
              <span className="inline-flex items-center px-2.5 py-0.5 bg-[#fdf2f5] text-[#3D0B3D] border border-[#f7c8d0] text-[9.5px] font-bold uppercase tracking-[0.16em] rounded-full shadow-xs">
                New Season
              </span>
            )}
            {hasDiscount && (
              <span className="inline-flex items-center px-2 py-0.5 bg-[#3D0B3D] text-white text-[9.5px] font-bold tracking-wide rounded-full shadow-xs">
                -{discountPercent}%
              </span>
            )}
            {isLowStock && (
              <span className="inline-flex items-center px-2 py-0.5 bg-amber-600 text-white text-[9px] font-bold tracking-wide rounded-full shadow-xs animate-pulse">
                Low Stock
              </span>
            )}
          </div>

          {/* Wishlist Button — Top Right */}
          <button
            onClick={handleWishlistClick}
            className={`absolute top-3 right-3 z-20 flex items-center justify-center h-8 w-8 rounded-full border transition-all duration-300 cursor-pointer backdrop-blur-md ${
              isWishlisted
                ? "bg-[#3D0B3D] border-[#3D0B3D] text-white opacity-100 shadow-md scale-105"
                : "bg-white/90 border-[#f0dde3] text-[#3D0B3D] hover:bg-white hover:scale-110 shadow-xs"
            }`}
            title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart className={`h-3.5 w-3.5 ${isWishlisted ? "fill-white" : "stroke-[1.8]"}`} />
          </button>

          {/* Sold Out Overlay */}
          {isSoldOut && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/75 z-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2b0914] border border-[#f0dde3] px-3 py-1 bg-white/90 rounded-full">
                Sold Out
              </span>
            </div>
          )}

          {/* Quick View Hover Button (Eye Icon) */}
          {!isSoldOut && (
            <button
              onClick={handleQuickViewClick}
              className="absolute bottom-3 right-3 z-20 flex items-center justify-center h-9 w-9 rounded-full bg-white/95 text-[#3D0B3D] border border-[#f0dde3] hover:bg-[#3D0B3D] hover:text-white shadow-md transition-all duration-300 cursor-pointer md:opacity-0 md:group-hover/pcard:opacity-100 hover:scale-110"
              title="Quick View"
              aria-label="Quick View"
            >
              <Eye className="h-4 w-4" strokeWidth={1.7} />
            </button>
          )}
        </Link>

        {/* Product Info */}
        <div className="p-3.5 bg-white space-y-1">
          {category && (
            <p className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-[#3D0B3D]">
              {category}
            </p>
          )}
          <Link href={`/products/${slug}`}>
            <h3 className="text-xs md:text-[13.5px] font-bold leading-snug text-[#2b0914] line-clamp-2 hover:text-[#3D0B3D] transition-colors">
              {name}
            </h3>
          </Link>

          <div className="flex items-center gap-2 pt-1">
            <span className="text-sm md:text-base font-bold text-[#3D0B3D] font-sans">
              {formatPrice(price)}
            </span>
            {hasDiscount && (
              <span className="text-xs text-neutral-400 line-through font-medium">
                {formatPrice(compareAtPrice)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
