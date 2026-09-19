"use client";

/**
 * Tazeen's (tazeensbd) — Interactive "Shop The Look" Couture Lookbook
 * Allows customers to interact directly with editorial saree imagery and purchase styled pieces
 * Pink City Shopping Complex, Gulshan-2 & Sector 11, Uttara, Dhaka, Bangladesh
 * Official Facebook: https://www.facebook.com/tazeensbd/
 */

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ShoppingBag, ArrowUpRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ASSETS } from "@/lib/demo-data";
import { useCartStore } from "@/store/cart-store";
import { toast } from "sonner";

interface LookbookSpot {
  id: string;
  name: string;
  category: string;
  price: number;
  comparePrice: number;
  slug: string;
  image: string;
  x: number; // percentage from left
  y: number; // percentage from top
  sizes: string[];
}

interface CoutureLook {
  id: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  heroImage: string;
  spots: LookbookSpot[];
}

const COUTURE_LOOKS: CoutureLook[] = [
  {
    id: "look-1",
    tabLabel: "Sequin Border Saree",
    title: "Signature Sequin Champagne Gold",
    subtitle: "Shimmering circular metallic sequin border with braided tassels and lightweight linen tissue drape.",
    heroImage: ASSETS.sareeChampagne,
    spots: [
      {
        id: "spot-1",
        name: "Tazeen's Signature Sequin Border Saree — Champagne Beige Gold",
        category: "Sequin & Tissue Sarees",
        price: 3850,
        comparePrice: 4500,
        slug: "tazeens-signature-sequin-border-saree-champagne-beige-gold",
        image: ASSETS.sareeChampagne,
        x: 50,
        y: 45,
        sizes: ["Standard Saree", "With Fall & Pico Ready"],
      },
    ],
  },
  {
    id: "look-2",
    tabLabel: "Heritage Zari Katan",
    title: "Royal Crimson Maroon Striped Saree",
    subtitle: "Fine vertical gold zari stripes, korvai temple borders, and opulent gold brocade pallu presented in our signature box.",
    heroImage: ASSETS.sareeKatanMaroon,
    spots: [
      {
        id: "spot-2",
        name: "Tazeen's Heritage Zari Striped Silk Saree — Royal Crimson Maroon",
        category: "Heritage Katan & Silk",
        price: 5850,
        comparePrice: 6800,
        slug: "tazeens-heritage-zari-striped-silk-saree-royal-crimson-maroon",
        image: ASSETS.sareeKatanMaroon,
        x: 50,
        y: 40,
        sizes: ["Standard Saree", "With Fall & Pico Ready"],
      },
    ],
  },
  {
    id: "look-3",
    tabLabel: "Boutique 3-Piece",
    title: "Classic Indigo Ajrakh Block Set",
    subtitle: "Timeless geometric Ajrakh patterns, hand-embroidered neckline yolk panel, and pure cotton comfort.",
    heroImage: ASSETS.threePieceAjrakh,
    spots: [
      {
        id: "spot-3",
        name: "Tazeen's Classic Indigo Ajrakh Block Print 3-Piece Set",
        category: "Boutique Three-Piece Sets",
        price: 2450,
        comparePrice: 2950,
        slug: "tazeens-classic-indigo-ajrakh-block-print-3piece-set",
        image: ASSETS.threePieceAjrakh,
        x: 50,
        y: 42,
        sizes: ["Unstitched 3-Piece", "Semi-Stitched"],
      },
    ],
  },
];

export function LookbookCouture() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSpotId, setActiveSpotId] = useState<string>("spot-1");
  const [selectedSize, setSelectedSize] = useState<string>("Standard Saree");
  const [isAdding, setIsAdding] = useState(false);

  const addItem = useCartStore((state) => state.addItem);

  const currentLook = COUTURE_LOOKS[activeTab] ?? COUTURE_LOOKS[0]!;
  const activeSpot =
    currentLook.spots.find((s) => s.id === activeSpotId) ?? currentLook.spots[0]!;

  const handleTabChange = (idx: number) => {
    setActiveTab(idx);
    const newLook = COUTURE_LOOKS[idx];
    if (newLook && newLook.spots.length > 0) {
      const firstSpot = newLook.spots[0]!;
      setActiveSpotId(firstSpot.id);
      setSelectedSize(firstSpot.sizes[0] ?? "Standard Saree");
    }
  };

  const handleAddToCart = () => {
    setIsAdding(true);
    addItem({
      variantId: `${activeSpot.slug}-${selectedSize.replace(/\s+/g, "-")}`,
      productId: activeSpot.slug,
      name: activeSpot.name,
      price: activeSpot.price,
      quantity: 1,
      size: selectedSize,
      color: "As Pictured",
      image: activeSpot.image,
      stock: 15,
    });
    toast.success(`${activeSpot.name} added to your shopping bag!`, {
      description: "✓ Open Parcel Policy • Cash on delivery available nationwide.",
    });
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <section className="py-16 md:py-28 bg-white border-b border-[#E8DFD5] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/30 mb-3 shadow-xs">
            <Sparkles className="h-3 w-3 text-[#D4AF37]" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#720026]">
              INTERACTIVE STYLING • TAZEEN&apos;S LOOKBOOK
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] font-heading tracking-tight">
            Shop The Saree &amp; Boutique Look
          </h2>
          <p className="mt-3 text-sm md:text-base text-neutral-600 font-medium">
            Explore styled heritage drapes directly from Tazeen&apos;s. Tap any pin to inspect artisan details, select your option, and order with Open Parcel guarantee.
          </p>

          {/* Couture Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-6">
            {COUTURE_LOOKS.map((look, idx) => (
              <button
                key={look.id}
                onClick={() => handleTabChange(idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer ${
                  idx === activeTab
                    ? "bg-[#720026] text-[#D4AF37] shadow-md border border-[#D4AF37]/50"
                    : "bg-[#FAF7F2] text-neutral-600 hover:text-[#720026] hover:bg-neutral-100 border border-[#E8DFD5]"
                }`}
              >
                {look.tabLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Lookbook Stage: Left Image + Right Breakdown Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Editorial Image with Interactive Pins */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-[2rem] overflow-hidden bg-neutral-900 border border-[#E8DFD5] shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentLook.id}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentLook.heroImage}
                    alt={currentLook.title}
                    fill
                    unoptimized
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Garment Pins on Image */}
              {currentLook.spots.map((spot) => {
                const isActive = activeSpotId === spot.id;
                return (
                  <div
                    key={spot.id}
                    className="absolute z-20"
                    style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  >
                    <button
                      onClick={() => {
                        setActiveSpotId(spot.id);
                        setSelectedSize(spot.sizes[0] ?? "Standard Saree");
                      }}
                      className={`relative flex items-center justify-center size-9 rounded-full shadow-2xl transition-transform duration-300 cursor-pointer ${
                        isActive
                          ? "bg-[#720026] text-[#D4AF37] scale-110 ring-4 ring-[#D4AF37]/50"
                          : "bg-white/90 backdrop-blur-md text-[#1A1A1A] hover:scale-105 ring-2 ring-black/10"
                      }`}
                      aria-label={`Inspect ${spot.name}`}
                    >
                      <Sparkles className="h-4 w-4" />
                      {!isActive && (
                        <span className="size-2 rounded-full bg-[#720026] absolute -top-0.5 -right-0.5 animate-pulse" />
                      )}
                    </button>
                  </div>
                );
              })}

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#D4AF37] bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 inline-block mb-2">
                  EDITORIAL HIGHLIGHT
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading">
                  {currentLook.title}
                </h3>
                <p className="text-xs text-neutral-200 line-clamp-1 mt-1 max-w-lg">
                  {currentLook.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Garment Detail & Direct Purchase Module */}
          <div className="lg:col-span-5">
            <div className="p-6 md:p-8 rounded-3xl bg-[#FAF7F2] border border-[#E8DFD5] shadow-lg space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#720026]">
                  {activeSpot.category}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] font-heading mt-1 leading-snug">
                  {activeSpot.name}
                </h3>
                <div className="flex items-baseline gap-3 mt-3">
                  <span className="text-2xl font-bold text-[#720026] font-sans">
                    ৳{activeSpot.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-neutral-400 line-through">
                    ৳{activeSpot.comparePrice.toLocaleString()}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                    SAVE ৳{(activeSpot.comparePrice - activeSpot.price).toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Size / Option Selector */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 block">
                  Select Specification / Option
                </label>
                <div className="flex flex-wrap gap-2">
                  {activeSpot.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        selectedSize === sz
                          ? "bg-[#720026] text-[#D4AF37] border-2 border-[#D4AF37] shadow-sm font-bold"
                          : "bg-white text-neutral-700 border border-[#E8DFD5] hover:bg-neutral-100"
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleAddToCart}
                  disabled={isAdding}
                  className="w-full h-13 rounded-full bg-[#720026] hover:bg-[#8D0030] text-[#D4AF37] hover:text-white font-bold text-xs uppercase tracking-[0.16em] transition-all flex items-center justify-center gap-2 shadow-md active:scale-98 cursor-pointer disabled:opacity-50"
                >
                  {isAdding ? (
                    <>
                      <Check className="h-4 w-4" />
                      <span>Adding to Bag...</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="h-4 w-4" />
                      <span>Add to Bag — ৳{activeSpot.price.toLocaleString()}</span>
                    </>
                  )}
                </button>

                <Link
                  href={`/products/${activeSpot.slug}`}
                  className="w-full h-11 rounded-full bg-white hover:bg-[#FAF7F2] text-[#1A1A1A] border border-[#E8DFD5] text-xs font-semibold tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>View Complete Details</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#720026]" />
                </Link>
              </div>

              {/* Trust Callout */}
              <div className="pt-4 border-t border-[#E8DFD5] text-[11px] text-neutral-500 space-y-1">
                <p>✓ <strong>Open Parcel Policy:</strong> Check in front of delivery person before payment</p>
                <p>✓ <strong>Inside Dhaka ৳80</strong> (1–2 days) | <strong>Outside Dhaka ৳150</strong> (2–4 days)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
