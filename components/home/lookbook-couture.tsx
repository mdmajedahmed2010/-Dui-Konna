"use client";

/**
 * Enaya's | Sylhet — Interactive "Shop The Look" Couture Lookbook
 * Allows customers to interact directly with editorial imagery and purchase styled pieces
 * Nayasarak Point, Sylhet — https://www.facebook.com/Enayas.Sylhet/
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
    tabLabel: "Signature Farsi & Co-ords",
    title: "Ivory & Navy Artisanal Grace",
    subtitle: "Pure cotton embroidered kurti paired with wide-leg palazzo and contrasting sheer dupatta.",
    heroImage: ASSETS.img1,
    spots: [
      {
        id: "spot-1",
        name: "Ivory Cream Embroidered Kurti with Navy Dupatta & Palazzo",
        category: "Casual & Farsi Sets",
        price: 2650,
        comparePrice: 3100,
        slug: "ivory-cream-embroidered-kurti-with-navy-dupatta-palazzo",
        image: ASSETS.img1,
        x: 48,
        y: 40,
        sizes: ["38", "40", "42", "44"],
      },
      {
        id: "spot-2",
        name: "Pure Cotton Flared Farsi Salwar Daily Boutique 2-Piece",
        category: "Casual & Farsi Sets",
        price: 2250,
        comparePrice: 2650,
        slug: "pure-cotton-flared-farsi-salwar-daily-boutique-2piece",
        image: ASSETS.img8,
        x: 68,
        y: 70,
        sizes: ["Free Size (38-42)"],
      },
    ],
  },
  {
    id: "look-2",
    tabLabel: "Original Pakistani Couture",
    title: "Sadabahar Luxury Pret",
    subtitle: "100% Original Pakistani designer couture with intricate needlework and pure silk dupattas.",
    heroImage: ASSETS.img2,
    spots: [
      {
        id: "spot-3",
        name: "Sadabahar Original Luxury Embroidered Couture 3-Piece",
        category: "Designer Luxury & Pre-Orders",
        price: 13500,
        comparePrice: 15500,
        slug: "sadabahar-original-luxury-embroidered-couture-3piece",
        image: ASSETS.img2,
        x: 52,
        y: 36,
        sizes: ["38", "40", "42", "44"],
      },
      {
        id: "spot-4",
        name: "Russian Silk Champagne Handcrafted Adda Work Ensemble",
        category: "Designer Luxury & Pre-Orders",
        price: 12800,
        comparePrice: 14500,
        slug: "russian-silk-champagne-handcrafted-adda-work-ensemble",
        image: ASSETS.img6,
        x: 65,
        y: 65,
        sizes: ["38", "40", "42"],
      },
    ],
  },
  {
    id: "look-3",
    tabLabel: "Midnight Festive Soirée",
    title: "Royal Zardozi Evening Wear",
    subtitle: "Midnight black formal suit embellished with silver and crystal zardozi handwork.",
    heroImage: ASSETS.img3,
    spots: [
      {
        id: "spot-5",
        name: "Midnight Black Royal Zardozi Hand-Embellished Formal Suit",
        category: "Party Wear & Festive Organza",
        price: 6850,
        comparePrice: 7800,
        slug: "midnight-black-royal-zardozi-hand-embellished-formal-suit",
        image: ASSETS.img3,
        x: 50,
        y: 42,
        sizes: ["38", "40", "42", "44"],
      },
      {
        id: "spot-6",
        name: "Crimson Magenta Embroidered Suit with Lime Silk Dupatta",
        category: "Party Wear & Festive Organza",
        price: 6250,
        comparePrice: 7200,
        slug: "crimson-magenta-embroidered-suit-with-lime-silk-dupatta",
        image: ASSETS.img5,
        x: 72,
        y: 60,
        sizes: ["38", "40", "42"],
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
    <section className="py-16 md:py-28 bg-[#FAF7F5] border-b border-[#EDE1D8] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D4AF37]/40 shadow-xs mb-3">
            <Sparkles className="h-3 w-3 text-[#D4AF37]" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#3D0B3D]">
              INTERACTIVE LOOKBOOK
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E1622] font-heading tracking-tight">
            Shop The Look
          </h2>
          <p className="mt-3 text-sm md:text-base text-neutral-600 font-medium">
            Touch any glowing pin on the model to reveal garment details and add styled looks directly to your bag.
          </p>

          {/* Look Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-6">
            {COUTURE_LOOKS.map((look, idx) => (
              <button
                key={look.id}
                onClick={() => handleTabChange(idx)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  idx === activeLookIdx
                    ? "bg-[#3D0B3D] text-[#F3C649] shadow-md scale-105"
                    : "bg-white text-[#3D0B3D] hover:bg-neutral-100 border border-[#EDE1D8]"
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
            <div className="double-bezel-card aspect-[4/5] sm:aspect-[3/4] max-w-xl mx-auto shadow-xl border border-[#D4AF37]/30 rounded-3xl p-2 bg-gradient-to-b from-[#FAF7F5] to-[#EDE1D8]">
              <div className="double-bezel-inner h-full w-full relative overflow-hidden rounded-2xl bg-neutral-900">
                <Image
                  src={currentLook.heroImage}
                  alt={currentLook.title}
                  fill
                  quality={95}
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />

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
                            ? "bg-[#3D0B3D] text-[#F3C649] scale-125 shadow-[0_0_16px_rgba(212,175,55,0.8)] ring-4 ring-[#D4AF37]"
                            : "bg-white/95 text-[#3D0B3D] hover:scale-110 shadow-lg border border-[#D4AF37]"
                        }`}
                        aria-label={`Select ${spot.name}`}
                      >
                        <span className="absolute inset-0 rounded-full animate-hotspot bg-[#D4AF37]/30" />
                        <ShoppingBag className="h-4 w-4 relative z-10" />
                      </button>
                    </div>
                  );
                })}

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-white flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold font-heading">{currentLook.title}</p>
                    <p className="text-[10px] text-white/80">{currentLook.subtitle}</p>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest bg-[#D4AF37] text-[#3D0B3D] px-2 py-1 rounded">
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
                  className="bg-white rounded-3xl p-6 md:p-8 border border-[#EDE1D8] shadow-xl space-y-6"
                >
                  {/* Category & Name */}
                  <div>
                    <span className="inline-block text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#3D0B3D] bg-[#FAF7F5] border border-[#D4AF37]/30 px-3 py-1 rounded-full mb-3">
                      ✦ {activeSpot.category}
                    </span>
                    <h3 className="text-2xl font-bold text-[#1E1622] font-heading leading-tight">
                      {activeSpot.name}
                    </h3>
                    <div className="flex items-baseline gap-3 mt-2">
                      <span className="text-2xl font-bold text-[#3D0B3D] font-sans">
                        ৳{activeSpot.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-neutral-400 line-through">
                        ৳{activeSpot.comparePrice.toLocaleString()}
                      </span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                        Save ৳{(activeSpot.comparePrice - activeSpot.price).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Thumbnail Preview */}
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-100 border border-[#D4AF37]/30">
                    <Image
                      src={activeSpot.image}
                      alt={activeSpot.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Size Selector */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-[#1E1622] uppercase tracking-wider">
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
                              ? "bg-[#3D0B3D] text-[#F3C649] shadow-sm ring-2 ring-[#D4AF37]"
                              : "bg-[#FAF7F5] text-[#3D0B3D] hover:bg-neutral-100 border border-[#EDE1D8]"
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
                      className="w-full py-4 rounded-full bg-[#3D0B3D] hover:bg-[#4A0E4E] text-[#F3C649] text-xs font-bold uppercase tracking-[0.2em] shadow-[0_10px_25px_-5px_rgba(61,11,61,0.4)] flex items-center justify-center gap-2.5 transition-all duration-300 active:scale-[0.98] cursor-pointer"
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
                      className="w-full py-3 rounded-full bg-white hover:bg-[#FAF7F5] text-[#3D0B3D] text-xs font-bold uppercase tracking-[0.16em] border border-[#D4AF37]/50 flex items-center justify-center gap-2 transition-all hover:border-[#3D0B3D]"
                    >
                      <span>Full Product Details</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-[#D4AF37]" />
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
