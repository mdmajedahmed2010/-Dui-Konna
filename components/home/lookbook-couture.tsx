"use client";

/**
 * Ash and Aspen (ash and aspen) — Interactive "Shop The Look" Couture Lookbook
 * Allows customers to interact directly with editorial imagery and purchase styled pieces
 * House #76, Gausul Azam Avenue, Sector #13, Uttara, Dhaka - 1230, Bangladesh
 * Official Facebook: https://www.facebook.com/ashandaspenclothing/
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
    tabLabel: "Gulaal Luxury Lawn",
    title: "Gulaal Seafoam Mint Whisper",
    subtitle: "Pure luxury lawn with intricate resham neckline embroidery, laser cutwork hem lace, and printed organza dupatta.",
    heroImage: ASSETS.img1,
    spots: [
      {
        id: "spot-1",
        name: "Gulaal Luxury Lawn 3-Piece Embroidered Suit — Seafoam Mint Whisper",
        category: "Luxury Pakistani Lawn",
        price: 4250,
        comparePrice: 4950,
        slug: "gulaal-luxury-lawn-3piece-embroidered-suit-seafoam-mint-whisper",
        image: ASSETS.img1,
        x: 48,
        y: 40,
        sizes: ["Unstitched (3-Piece)", "Stitched Ready-to-Wear (M)", "Stitched Ready-to-Wear (L)"],
      },
    ],
  },
  {
    id: "look-2",
    tabLabel: "Nur Festive Chikankari",
    title: "Nur Royal Ivory Schiffli Kameez",
    subtitle: "Heavily embroidered center panel with detailed schiffli cutwork, dyed trousers, and embroidered soft chiffon dupatta.",
    heroImage: ASSETS.img2,
    spots: [
      {
        id: "spot-2",
        name: "Nur Festive Chikankari & Schiffli Long Kameez 3-Piece — Royal Ivory",
        category: "Luxury Pakistani Lawn",
        price: 4450,
        comparePrice: 5200,
        slug: "nur-festive-chikankari-schiffli-long-kameez-3piece-royal-ivory",
        image: ASSETS.img2,
        x: 50,
        y: 40,
        sizes: ["Unstitched (3-Piece)", "Stitched Ready-to-Wear (M)", "Stitched Ready-to-Wear (L)"],
      },
    ],
  },
  {
    id: "look-3",
    tabLabel: "Sadabahar Designer Pret",
    title: "Sadabahar Sandy Taupe Floral",
    subtitle: "Authentic stitched Pakistani pret with royal blue botanical prints, scalloped sleeve lace, and printed trousers.",
    heroImage: ASSETS.img3,
    spots: [
      {
        id: "spot-3",
        name: "Sadabahar Stitched 3-Piece Pret Suit — Sandy Taupe & Royal Indigo",
        category: "Ready-to-Wear Designer Pret",
        price: 3650,
        comparePrice: 4200,
        slug: "sadabahar-stitched-3piece-pret-suit-sandy-taupe-royal-indigo",
        image: ASSETS.img3,
        x: 50,
        y: 42,
        sizes: ["S (Chest 36)", "M (Chest 38)", "L (Chest 40)", "XL (Chest 42)"],
      },
    ],
  },
];

export function LookbookCouture() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSpotId, setActiveSpotId] = useState<string>("spot-1");
  const [selectedSize, setSelectedSize] = useState<string>("Unstitched (3-Piece)");
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
      setSelectedSize(firstSpot.sizes[0] ?? "Unstitched (3-Piece)");
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
      stock: 12,
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF7F2] border border-[#E29578]/30 mb-3 shadow-xs">
            <Sparkles className="h-3 w-3 text-[#E29578]" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#1A1A1A]">
              INTERACTIVE STYLING • ASH &amp; ASPEN LOOKBOOK
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] font-heading tracking-tight">
            Shop The Pakistani Look
          </h2>
          <p className="mt-3 text-sm md:text-base text-neutral-600 font-medium">
            Explore styled couture ensembles directly from Ash and Aspen. Tap any garment pin to inspect authentic details, select your size, and order with Open Parcel guarantee.
          </p>

          {/* Couture Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-6">
            {COUTURE_LOOKS.map((look, idx) => (
              <button
                key={look.id}
                onClick={() => handleTabChange(idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer ${
                  idx === activeTab
                    ? "bg-[#1A1A1A] text-[#E29578] shadow-md border border-[#E29578]/50"
                    : "bg-[#FAF7F2] text-neutral-600 hover:text-[#1A1A1A] hover:bg-neutral-100 border border-[#E8DFD5]"
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
                        setSelectedSize(spot.sizes[0] ?? "Unstitched (3-Piece)");
                      }}
                      className={`relative flex items-center justify-center size-9 rounded-full shadow-2xl transition-transform duration-300 cursor-pointer ${
                        isActive
                          ? "bg-[#E29578] text-white scale-110 ring-4 ring-[#E29578]/50"
                          : "bg-white/90 backdrop-blur-md text-[#1A1A1A] hover:scale-105 ring-2 ring-black/10"
                      }`}
                      aria-label={`Inspect ${spot.name}`}
                    >
                      <Sparkles className="h-4 w-4" />
                      {!isActive && (
                        <span className="size-2 rounded-full bg-[#E29578] absolute -top-0.5 -right-0.5 animate-pulse" />
                      )}
                    </button>
                  </div>
                );
              })}

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#E29578] bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 inline-block mb-2">
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

          {/* Right: Active Garment Checkout Card (5 Cols) */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSpot.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="p-6 md:p-8 rounded-3xl bg-[#FAF7F2] border border-[#E8DFD5] shadow-lg space-y-6"
              >
                <div className="flex items-center justify-between border-b border-[#E8DFD5] pb-4">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#E29578]">
                    {activeSpot.category}
                  </span>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    In Stock (Uttara Hub)
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xl md:text-2xl font-bold font-heading text-[#1A1A1A] leading-snug">
                    {activeSpot.name}
                  </h4>
                  <div className="flex items-baseline gap-3 pt-1">
                    <span className="text-2xl md:text-3xl font-bold text-[#E29578] font-heading">
                      ৳{activeSpot.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-neutral-400 line-through">
                      ৳{activeSpot.comparePrice.toLocaleString()}
                    </span>
                    <span className="text-xs font-bold text-emerald-600">
                      Save ৳{(activeSpot.comparePrice - activeSpot.price).toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Size Selection Grid */}
                <div className="space-y-2.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] block">
                    Select Edition / Size:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {activeSpot.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`p-2.5 rounded-xl text-xs font-semibold text-center border transition-all cursor-pointer ${
                          selectedSize === size
                            ? "bg-[#1A1A1A] text-[#FAF7F2] border-[#1A1A1A] shadow-xs"
                            : "bg-white text-neutral-700 border-[#E8DFD5] hover:border-[#E29578]"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Open Parcel Guarantee Banner */}
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD5] text-[11px] text-neutral-600 flex items-center gap-2.5">
                  <span className="size-2 rounded-full bg-emerald-500 shrink-0" />
                  <span>
                    <strong>Open Parcel Guaranteed:</strong> Check authentic fabric &amp; embroidery with rider before paying.
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2.5 pt-2">
                  <button
                    onClick={handleAddToCart}
                    disabled={isAdding}
                    className="w-full h-13 rounded-full bg-[#E29578] hover:bg-[#D38062] text-white text-xs md:text-sm font-bold uppercase tracking-[0.16em] transition-all shadow-md flex items-center justify-center gap-2 active:scale-98 cursor-pointer disabled:opacity-75"
                  >
                    {isAdding ? (
                      <>
                        <Check className="h-4 w-4" />
                        <span>Added To Bag</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="h-4 w-4" />
                        <span>Add To Bag — ৳{activeSpot.price.toLocaleString()}</span>
                      </>
                    )}
                  </button>

                  <Link
                    href={`/products/${activeSpot.slug}`}
                    className="w-full h-11 rounded-full bg-white hover:bg-neutral-100 text-[#1A1A1A] border border-[#E8DFD5] text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <span>View Full Garment Details</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
