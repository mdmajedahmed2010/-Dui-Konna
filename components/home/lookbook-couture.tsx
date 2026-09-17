"use client";

/**
 * 365 Fashion House — Interactive "Shop The Look" Couture Lookbook
 * Allows customers to interact directly with editorial imagery and purchase styled pieces
 * Pioneer in Authentic Pakistani Attires in Bangladesh — https://www.facebook.com/365FashionHouse/
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
    tabLabel: "Pakistani Luxury Lawn",
    title: "Mahee's Lilac Blossom & Lace",
    subtitle: "Pure luxury lawn with intricate resham neckline embroidery, cutwork sleeves, and organza printed dupatta.",
    heroImage: ASSETS.img1,
    spots: [
      {
        id: "spot-1",
        name: "Mahee's Luxury Lawn 3-Piece Unstitched Suit — Lilac Blossom",
        category: "Luxury Pakistani Lawn",
        price: 3850,
        comparePrice: 4500,
        slug: "mahees-luxury-lawn-3piece-unstitched-suit-lilac-blossom",
        image: ASSETS.img1,
        x: 48,
        y: 40,
        sizes: ["Unstitched (3-Piece)", "Semi-Stitched Free Size"],
      },
    ],
  },
  {
    id: "look-2",
    tabLabel: "Khaadi Signature Edit",
    title: "Khaadi Mint Ivory Oasis",
    subtitle: "Digital printed lawn with heavy neckline embroidery, laser-cut hem lace, and printed silk lawn dupatta.",
    heroImage: ASSETS.img2,
    spots: [
      {
        id: "spot-2",
        name: "Khaadi Signature Luxury Lawn 3-Piece — Mint Ivory Oasis",
        category: "Luxury Pakistani Lawn",
        price: 4250,
        comparePrice: 4950,
        slug: "khaadi-signature-luxury-lawn-3piece-mint-ivory-oasis",
        image: ASSETS.img2,
        x: 50,
        y: 40,
        sizes: ["Unstitched (3-Piece)", "Semi-Stitched Free Size"],
      },
    ],
  },
  {
    id: "look-3",
    tabLabel: "Agha Noor Designer Pret",
    title: "Agha Noor Pistachio Floral Glow",
    subtitle: "Pure organza embroidered kurti with multicolor resham floral motifs, pearl neckline, and bell sleeves.",
    heroImage: ASSETS.img3,
    spots: [
      {
        id: "spot-3",
        name: "Agha Noor Festive Organza Kurti — Pistachio Floral Glow",
        category: "Ready-to-Wear Designer Pret",
        price: 3650,
        comparePrice: 4200,
        slug: "agha-noor-festive-organza-kurti-pistachio-floral-glow",
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
    const newLook = COUTURE_LOOKS[idx]!;
    if (newLook.spots[0]) {
      setActiveSpotId(newLook.spots[0].id);
      setSelectedSize(newLook.spots[0].sizes[0] || "Standard");
    }
  };

  const handleQuickAdd = () => {
    setIsAdding(true);
    addItem({
      variantId: `${activeSpot.id}-${selectedSize}`,
      productId: activeSpot.id,
      name: activeSpot.name,
      price: activeSpot.price,
      image: activeSpot.image,
      productSlug: activeSpot.slug,
      size: selectedSize,
      color: "Original Pakistani Edition",
      quantity: 1,
    });

    toast.success(`${activeSpot.name} added to your shopping bag!`);
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <section className="py-16 md:py-28 bg-white border-b border-[#E8DFD5] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF8F5] border border-[#6C3483]/30 mb-3 shadow-xs">
            <Sparkles className="h-3 w-3 text-[#6C3483]" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#191426]">
              INTERACTIVE STYLING • 365 LOOKBOOK
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#191426] font-heading tracking-tight">
            Shop The Pakistani Look
          </h2>
          <p className="mt-3 text-sm md:text-base text-neutral-600 font-medium">
            Explore styled couture ensembles directly from 365 Fashion House. Tap any garment pin to inspect authentic details, select your size, and order with Open Parcel guarantee.
          </p>

          {/* Couture Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-6">
            {COUTURE_LOOKS.map((look, idx) => (
              <button
                key={look.id}
                onClick={() => handleTabChange(idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer ${
                  idx === activeTab
                    ? "bg-[#191426] text-[#F39C12] shadow-md border border-[#6C3483]/50"
                    : "bg-[#FAF8F5] text-neutral-600 hover:text-[#191426] hover:bg-neutral-100 border border-[#E8DFD5]"
                }`}
              >
                {look.tabLabel}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Lookbook Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Interactive Garment Canvas (Col 7) */}
          <div className="lg:col-span-7 relative">
            <div className="double-bezel-card aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-[#6C3483]/30 bg-neutral-900 relative">
              <Image
                src={currentLook.heroImage}
                alt={currentLook.title}
                fill
                priority
                unoptimized
                className="object-cover object-top transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              {/* Garment Pins on Canvas */}
              {currentLook.spots.map((spot) => {
                const isSelected = spot.id === activeSpotId;
                return (
                  <div
                    key={spot.id}
                    style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                  >
                    <button
                      onClick={() => {
                        setActiveSpotId(spot.id);
                        setSelectedSize(spot.sizes[0] || "Standard");
                      }}
                      className={`group relative flex items-center justify-center size-10 rounded-full transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? "bg-[#6C3483] text-white ring-4 ring-white shadow-xl scale-110"
                          : "bg-white/95 text-[#191426] hover:scale-110 shadow-lg border border-[#6C3483]/50"
                      }`}
                      aria-label={`Select ${spot.name}`}
                    >
                      <span className="absolute inset-0 rounded-full animate-ping bg-[#6C3483]/30 opacity-75" />
                      <ShoppingBag className="h-4 w-4 relative z-10" />
                    </button>
                  </div>
                );
              })}

              {/* Bottom Look Caption */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/45 backdrop-blur-md border border-white/10 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-[#F39C12]">
                  {currentLook.title}
                </p>
                <p className="text-xs text-neutral-300 mt-0.5 line-clamp-1">
                  {currentLook.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Garment Detail & 1-Tap Purchase Module (Col 5) */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              {activeSpot && (
                <motion.div
                  key={activeSpot.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#FAF8F5] rounded-3xl p-6 md:p-8 border border-[#E8DFD5] shadow-lg space-y-6"
                >
                  {/* Category & Name */}
                  <div>
                    <span className="inline-block text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#191426] bg-white border border-[#6C3483]/30 px-3 py-1 rounded-full mb-3">
                      ✦ {activeSpot.category}
                    </span>
                    <h3 className="text-2xl font-bold text-[#191426] font-heading leading-tight">
                      {activeSpot.name}
                    </h3>
                    <div className="flex items-baseline gap-3 mt-2">
                      <span className="text-2xl font-bold text-[#191426] font-sans">
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
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-100 border border-[#6C3483]/30">
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
                      <span className="font-bold text-[#191426] uppercase tracking-wider">
                        Select Size / Option
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
                              ? "bg-[#191426] text-[#F39C12] shadow-sm ring-2 ring-[#6C3483]"
                              : "bg-white text-neutral-700 hover:bg-neutral-100 border border-[#E8DFD5]"
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
                      className="w-full py-4 rounded-full bg-[#191426] hover:bg-[#6C3483] text-[#F39C12] hover:text-white text-xs font-bold uppercase tracking-[0.2em] shadow-[0_10px_25px_-5px_rgba(25,20,38,0.3)] flex items-center justify-center gap-2.5 transition-all duration-300 active:scale-[0.98] cursor-pointer border border-[#6C3483]/40"
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
                      className="w-full py-3 rounded-full bg-white hover:bg-[#FAF8F5] text-[#191426] text-xs font-bold uppercase tracking-[0.16em] border border-[#6C3483]/40 flex items-center justify-center gap-2 transition-all hover:border-[#191426]"
                    >
                      <span>Full Product Details</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-[#6C3483]" />
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
