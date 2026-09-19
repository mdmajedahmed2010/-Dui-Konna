"use client";

/**
 * Tazeen's (tazeensbd) — Curated Haute Arrivals Showcase
 * Features double-bezel cards, interactive category filtering, and 1-tap quick-size add
 * Pink City Shopping Complex, Gulshan-2 & Sector 11, Uttara, Dhaka, Bangladesh
 * Official Facebook: https://www.facebook.com/tazeensbd/
 */

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Eye, Heart, ArrowUpRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuickViewStore } from "@/store/quick-view-store";
import { useWishlistStore } from "@/store/wishlist-store";
import { useCartStore } from "@/store/cart-store";
import { toast } from "sonner";

export interface CuratedProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  compareAtPrice: number;
  image: string;
  secondaryImage?: string;
  slug: string;
  tag?: string;
  sizes?: string[];
}

const CATEGORY_TABS = [
  "All Collections",
  "Sequin Sarees",
  "Heritage Katan",
  "Boutique 3-Piece",
  "Muslin & Tussar",
  "Handloom Cotton",
];

export function CuratedArrivals({ products }: { products: CuratedProduct[] }) {
  const [activeTab, setActiveTab] = useState("All Collections");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  const openQuickView = useQuickViewStore((state) => state.openQuickView);
  const wishlistItems = useWishlistStore((state) => state.items);
  const toggleWishlist = useWishlistStore((state) => state.toggleItem);
  const addItemToCart = useCartStore((state) => state.addItem);

  const filteredProducts =
    activeTab === "All Collections"
      ? products
      : products.filter((p) => {
          const cat = p.category.toLowerCase();
          if (activeTab === "Sequin Sarees") return cat.includes("sequin") || cat.includes("tissue");
          if (activeTab === "Heritage Katan") return cat.includes("katan") || cat.includes("silk");
          if (activeTab === "Boutique 3-Piece") return cat.includes("three") || cat.includes("piece") || cat.includes("boutique");
          if (activeTab === "Muslin & Tussar") return cat.includes("muslin") || cat.includes("tussar");
          if (activeTab === "Handloom Cotton") return cat.includes("cotton") || cat.includes("handloom");
          return true;
        });

  const handleQuickAdd = (product: CuratedProduct, size: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    addItemToCart({
      productId: product.id,
      variantId: `${product.id}-${size}`,
      name: product.name,
      price: product.price,
      image: product.image,
      size,
      color: "Default",
      quantity: 1,
    });

    setAddedProductId(`${product.id}-${size}`);
    toast.success(`Added ${product.name} to bag!`, {
      description: "✓ Open Parcel Policy • Cash on delivery available nationwide.",
    });

    setTimeout(() => {
      setAddedProductId(null);
    }, 1500);
  };

  return (
    <section className="py-16 md:py-28 bg-[#FAF8F5] border-b border-[#E8DFD5] relative">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        {/* Section Heading & Category Tabs */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D4AF37]/40 mb-3 shadow-xs">
            <Sparkles className="h-3 w-3 text-[#D4AF37]" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#720026]">
              TAZEEN&apos;S NEW ARRIVALS 2026
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] font-heading tracking-tight">
            Curated Saree &amp; Boutique Arrivals
          </h2>
          <p className="mt-3 text-sm md:text-base text-neutral-600 font-medium">
            100% authentic handloom sequin sarees, royal bridal katan, and handcrafted boutique 3-piece sets curated with pride by Tazeen&apos;s.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {CATEGORY_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeTab === tab
                    ? "bg-[#720026] text-[#D4AF37] shadow-md border border-[#D4AF37] scale-105"
                    : "bg-white text-neutral-700 hover:bg-[#FAF7F2] border border-[#E8DFD5]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid with Double-Bezel Architecture */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          <AnimatePresence>
            {filteredProducts.slice(0, 8).map((product) => {
              const isWishlisted = wishlistItems.some((i) => i.id === product.id);
              const sizes = product.sizes || ["Standard Saree", "With Fall-Pico"];
              const isHovered = hoveredCard === product.id;

              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="group/card"
                  onMouseEnter={() => setHoveredCard(product.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Double-Bezel Card Outer Shell */}
                  <div className="double-bezel-card h-full flex flex-col justify-between border border-[#E8DFD5] rounded-2xl p-2 bg-white shadow-xs hover:shadow-xl transition-all duration-300">
                    <div className="double-bezel-inner">
                      {/* Image & Quick Action Overlay */}
                      <Link
                        href={`/products/${product.slug}`}
                        className="block relative aspect-[3/4] overflow-hidden rounded-xl bg-neutral-100"
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          quality={90}
                          unoptimized
                          className="object-cover object-top transition-transform duration-[1200ms] group-hover/card:scale-108"
                        />

                        {/* Top Badges: Tag & Wishlist */}
                        <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
                          {product.tag ? (
                            <span className="px-2.5 py-1 rounded-full bg-[#720026] text-[#D4AF37] text-[9.5px] font-extrabold uppercase tracking-[0.16em] shadow-sm border border-[#D4AF37]/40">
                              {product.tag}
                            </span>
                          ) : (
                            <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#720026] text-[9.5px] font-bold uppercase tracking-wider border border-[#E8DFD5]">
                              Tazeen&apos;s
                            </span>
                          )}

                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              toggleWishlist({
                                id: product.id,
                                name: product.name,
                                slug: product.slug,
                                price: product.price,
                                image: product.image,
                              });
                            }}
                            className={`size-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 cursor-pointer ${
                              isWishlisted
                                ? "bg-[#720026] text-[#D4AF37] shadow-md scale-110 border border-[#D4AF37]"
                                : "bg-white/90 text-[#121212] hover:bg-white hover:scale-110"
                            }`}
                            aria-label="Wishlist"
                          >
                            <Heart
                              className={`h-4 w-4 ${isWishlisted ? "fill-[#D4AF37] text-[#D4AF37]" : "stroke-[1.8]"}`}
                            />
                          </button>
                        </div>

                        {/* Quick-View Action Eye */}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            openQuickView({
                              id: product.id,
                              name: product.name,
                              slug: product.slug,
                              price: product.price,
                              compareAtPrice: product.compareAtPrice,
                              image: product.image,
                              category: product.category,
                            });
                          }}
                          className="absolute bottom-16 right-3 size-9 rounded-full bg-white/95 text-[#720026] shadow-lg flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer z-20 border border-[#D4AF37]/40"
                          aria-label="Quick View"
                        >
                          <Eye className="h-4 w-4" />
                        </button>

                        {/* Slide-up Quick Size Bar on Hover */}
                        <div
                          className={`absolute inset-x-2 bottom-2 p-2 rounded-xl bg-white/95 backdrop-blur-xl border border-[#D4AF37]/40 shadow-lg transition-all duration-300 z-20 ${
                            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
                          }`}
                        >
                          <p className="text-[9px] font-bold text-center text-neutral-500 uppercase tracking-wider mb-1.5">
                            Quick Add
                          </p>
                          <div className="flex justify-center gap-1.5">
                            {sizes.map((size) => {
                              const isJustAdded = addedProductId === `${product.id}-${size}`;
                              return (
                                <button
                                  key={size}
                                  onClick={(e) => handleQuickAdd(product, size, e)}
                                  className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                                    isJustAdded
                                      ? "bg-emerald-600 text-white"
                                      : "bg-[#FAF8F5] hover:bg-[#720026] text-[#720026] hover:text-[#D4AF37] border border-[#E8DFD5]"
                                  }`}
                                >
                                  {isJustAdded ? <Check className="h-3 w-3 inline" /> : size}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </Link>

                      {/* Product Meta Details */}
                      <div className="p-4 bg-white">
                        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#720026]">
                          {product.category}
                        </span>
                        <Link href={`/products/${product.slug}`}>
                          <h3 className="text-sm font-bold text-[#121212] truncate hover:text-[#720026] transition-colors mt-0.5">
                            {product.name}
                          </h3>
                        </Link>
                        <div className="flex items-baseline gap-2 mt-1.5">
                          <span className="text-base font-bold text-[#720026] font-sans">
                            ৳{product.price.toLocaleString()}
                          </span>
                          {product.compareAtPrice && product.compareAtPrice > product.price && (
                            <span className="text-xs text-neutral-400 line-through">
                              ৳{product.compareAtPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View All Collection CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/collections/sequin-tissue-sarees"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white hover:bg-[#720026] text-[#720026] hover:text-[#D4AF37] border border-[#D4AF37]/50 text-xs font-bold uppercase tracking-[0.2em] shadow-sm hover:shadow-lg transition-all duration-300 group/all active:scale-[0.98]"
          >
            <span>Explore Entire Saree Collection</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/all:translate-x-0.5 group-hover/all:-translate-y-0.5 text-[#D4AF37]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
