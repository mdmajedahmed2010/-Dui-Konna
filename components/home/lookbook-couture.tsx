"use client";

/**
 * Closet by Tanzz — Interactive "Shop The Look" Couture Lookbook
 * Allows customers to interact directly with editorial imagery and purchase styled pieces
 * Natore Tower, Uttara, Dhaka — https://www.facebook.com/Closetbytanzz/
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
    tabLabel: "Artisan Block & Florals",
    title: "Vintage Rose & Botanical Block",
    subtitle: "Artisan botanical block print on fine lawn with contrasting lightweight dupatta.",
    heroImage: ASSETS.img1,
    spots: [
      {
        id: "spot-1",
        name: "Vintage Rose & Botanical Block Lawn 3-Piece",
        category: "Artisan Block",
        price: 1450,
        comparePrice: 1750,
        slug: "vintage-rose-botanical-block-lawn-3piece",
        image: ASSETS.img1,
        x: 48,
        y: 40,
        sizes: ["Free Size (Up to 44)"],
      },
      {
        id: "spot-2",
        name: "Pastel Blossom Summer Symphony 3-Piece",
        category: "Zam Zam Lawn",
        price: 1450,
        comparePrice: 1750,
        slug: "pastel-blossom-summer-symphony-3piece",
        image: ASSETS.img4,
        x: 68,
        y: 70,
        sizes: ["Free Size (Up to 44)"],
      },
    ],
  },
  {
    id: "look-2",
    tabLabel: "Zam Zam Summer Lawn",
    title: "Sunlit Floral Symphony",
    subtitle: "Breathable Zam Zam pure lawn crafted for effortless daytime luxury and everyday grace.",
    heroImage: ASSETS.img4,
    spots: [
      {
        id: "spot-3",
        name: "Pastel Blossom Summer Symphony 3-Piece",
        category: "Zam Zam Lawn",
        price: 1450,
        comparePrice: 1750,
        slug: "pastel-blossom-summer-symphony-3piece",
        image: ASSETS.img4,
        x: 50,
        y: 36,
        sizes: ["Free Size (Up to 44)"],
      },
      {
        id: "spot-4",
        name: "Emerald Paisley Embroidered Luxury 3-Piece",
        category: "Designer Boutique",
        price: 1550,
        comparePrice: 1850,
        slug: "emerald-paisley-embroidered-luxury-3piece",
        image: ASSETS.img2,
        x: 65,
        y: 65,
        sizes: ["Free Size (Up to 44)"],
      },
    ],
  },
  {
    id: "look-3",
    tabLabel: "Festive & Royal Evening",
    title: "Regal Navy & Gold Embroidered",
    subtitle: "Intricate neckline embroidery and ornate border detailing paired with soft lawn drape.",
    heroImage: ASSETS.img3,
    spots: [
      {
        id: "spot-5",
        name: "Regal Navy & Gold Embroidered Festive 3-Piece",
        category: "Festive & Party",
        price: 1550,
        comparePrice: 1900,
        slug: "regal-navy-gold-embroidered-festive-3piece",
        image: ASSETS.img3,
        x: 50,
        y: 42,
        sizes: ["Free Size (Up to 44)"],
      },
      {
        id: "spot-6",
        name: "Crimson Scarlet Royal Festive 3-Piece",
        category: "Festive & Party",
        price: 1550,
        comparePrice: 1900,
        slug: "crimson-scarlet-royal-festive-3piece",
        image: ASSETS.img5,
        x: 72,
        y: 60,
        sizes: ["Free Size (Up to 44)"],
      },
    ],
  },
];

const defaultLook = COUTURE_LOOKS[0]!;
const defaultSpot = defaultLook.spots[0]!;

export function LookbookCouture() {
  const [activeLookIdx, setActiveLookIdx] = useState(0);
  const [activeSpot, setActiveSpot] = useState<LookbookSpot | null>(defaultSpot);
  const [selectedSize, setSelectedSize] = useState<string>(defaultSpot.sizes[0] ?? "Free Size");
  const [isAdding, setIsAdding] = useState(false);

  const addItemToCart = useCartStore((state) => state.addItem);
  const currentLook = COUTURE_LOOKS[activeLookIdx] ?? defaultLook;

  const handleTabChange = (idx: number) => {
    setActiveLookIdx(idx);
    const look = COUTURE_LOOKS[idx] ?? defaultLook;
    const firstSpot = look.spots[0] ?? null;
    setActiveSpot(firstSpot);
    if (firstSpot && firstSpot.sizes[0]) {
      setSelectedSize(firstSpot.sizes[0]);
    }
  };

  const handleSelectSpot = (spot: LookbookSpot) => {
    setActiveSpot(spot);
    if (spot.sizes[0]) {
      setSelectedSize(spot.sizes[0]);
    }
  };

  const handleQuickAdd = () => {
    if (!activeSpot) return;
    setIsAdding(true);

    addItemToCart({
      productId: activeSpot.id,
      variantId: `${activeSpot.id}-${selectedSize}`,
      name: activeSpot.name,
      price: activeSpot.price,
      image: activeSpot.image,
      size: selectedSize,
      color: "Default",
      quantity: 1,
    });

    toast.success(`Added ${activeSpot.name} (${selectedSize}) to bag!`, {
      description: "✓ Open Parcel Policy • Check before paying on delivery.",
    });

    setTimeout(() => {
      setIsAdding(false);
    }, 600);
  };

  return (
    <section className="py-16 md:py-28 bg-[#FAF8F5] border-b border-[#E8DFD5] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#C5A059]/40 shadow-xs mb-3">
            <Sparkles className="h-3 w-3 text-[#C5A059]" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#121212]">
              INTERACTIVE LOOKBOOK
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#121212] font-heading tracking-tight">
            Shop The Look
          </h2>
          <p className="mt-3 text-sm md:text-base text-neutral-600 font-medium">
            Touch any glowing pin on the photoshoot model to reveal garment details and add curated 3-piece sets directly to your bag.
          </p>

          {/* Look Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-6">
            {COUTURE_LOOKS.map((look, idx) => (
              <button
                key={look.id}
                onClick={() => handleTabChange(idx)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  idx === activeLookIdx
                    ? "bg-[#121212] text-[#C5A059] shadow-md scale-105 border border-[#C5A059]"
                    : "bg-white text-neutral-700 hover:bg-neutral-100 border border-[#E8DFD5]"
                }`}
              >
                {look.tabLabel}
              </button>
            ))}
          </div>
        </div>

        {/* ── Main Interactive Lookbook Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Full Editorial Interactive Canvas with Hotspot Pins (Col-span 7) */}
          <div className="lg:col-span-7 relative">
            <div className="double-bezel-card aspect-[4/5] sm:aspect-[3/4] max-w-xl mx-auto shadow-xl border border-[#C5A059]/30 rounded-3xl p-2 bg-gradient-to-b from-[#FAF8F5] to-[#E8DFD5]">
              <div className="double-bezel-inner h-full w-full relative overflow-hidden rounded-2xl bg-neutral-900">
                <Image
                  src={currentLook.heroImage}
                  alt={currentLook.title}
                  fill
                  quality={95}
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />

                {/* Hotspot Pins on Outfit */}
                {currentLook.spots.map((spot) => {
                  const isSelected = activeSpot?.id === spot.id;
                  return (
                    <div
                      key={spot.id}
                      style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                      className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                    >
                      <button
                        onClick={() => handleSelectSpot(spot)}
                        className={`relative flex items-center justify-center size-9 rounded-full transition-all duration-300 cursor-pointer ${
                          isSelected
                            ? "bg-[#121212] text-[#C5A059] scale-125 shadow-[0_0_16px_rgba(197,160,89,0.8)] ring-4 ring-[#C5A059]"
                            : "bg-white/95 text-[#121212] hover:scale-110 shadow-lg border border-[#C5A059]"
                        }`}
                        aria-label={`Select ${spot.name}`}
                      >
                        <span className="absolute inset-0 rounded-full animate-hotspot bg-[#C5A059]/30" />
                        <ShoppingBag className="h-4 w-4 relative z-10" />
                      </button>
                    </div>
                  );
                })}

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold font-heading text-white">{currentLook.title}</p>
                    <p className="text-[10px] text-white/80">{currentLook.subtitle}</p>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest bg-[#C5A059] text-[#121212] px-2.5 py-1 rounded">
                    {currentLook.spots.length} Styled Pieces
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Selected Garment Purchase Card (Col-span 5) */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              {activeSpot && (
                <motion.div
                  key={activeSpot.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white rounded-3xl p-6 md:p-8 border border-[#E8DFD5] shadow-xl space-y-6"
                >
                  {/* Category & Name */}
                  <div>
                    <span className="inline-block text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#121212] bg-[#FAF8F5] border border-[#C5A059]/40 px-3 py-1 rounded-full mb-3">
                      ✦ {activeSpot.category}
                    </span>
                    <h3 className="text-2xl font-bold text-[#121212] font-heading leading-tight">
                      {activeSpot.name}
                    </h3>
                    <div className="flex items-baseline gap-3 mt-2">
                      <span className="text-2xl font-bold text-[#121212] font-sans">
                        ৳{activeSpot.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-neutral-400 line-through">
                        ৳{activeSpot.comparePrice.toLocaleString()}
                      </span>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        Save ৳{(activeSpot.comparePrice - activeSpot.price).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Thumbnail Preview */}
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-100 border border-[#C5A059]/30">
                    <Image
                      src={activeSpot.image}
                      alt={activeSpot.name}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>

                  {/* Size Selector */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-[#121212] uppercase tracking-wider">
                        Select Size
                      </span>
                      <span className="text-emerald-700 font-medium">✓ Open Parcel Policy</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeSpot.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            selectedSize === size
                              ? "bg-[#121212] text-[#C5A059] shadow-sm ring-2 ring-[#C5A059]"
                              : "bg-[#FAF8F5] text-neutral-700 hover:bg-neutral-100 border border-[#E8DFD5]"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons: 1-Tap Add to Bag + Full Details */}
                  <div className="space-y-3 pt-2">
                    <button
                      onClick={handleQuickAdd}
                      disabled={isAdding}
                      className="w-full py-4 rounded-full bg-[#121212] hover:bg-[#222222] text-[#C5A059] text-xs font-bold uppercase tracking-[0.2em] shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)] flex items-center justify-center gap-2.5 transition-all duration-300 active:scale-[0.98] cursor-pointer border border-[#C5A059]/40"
                    >
                      {isAdding ? (
                        <>
                          <Check className="h-4 w-4" />
                          <span>Added to Bag!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="h-4 w-4" />
                          <span>Add Outfit to Bag • ৳{activeSpot.price.toLocaleString()}</span>
                        </>
                      )}
                    </button>

                    <Link
                      href={`/products/${activeSpot.slug}`}
                      className="w-full py-3 rounded-full bg-white hover:bg-[#FAF8F5] text-[#121212] text-xs font-bold uppercase tracking-[0.16em] border border-[#C5A059]/50 flex items-center justify-center gap-2 transition-all hover:border-[#121212]"
                    >
                      <span>Full Product Details</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-[#C5A059]" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
