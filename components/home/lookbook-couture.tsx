"use client";

/**
 * Shopping Queen by Orni — Interactive "Shop The Look" Lookbook
 * Direct editorial garment hotspot interaction and instant order
 * Dhaka, Bangladesh • Facebook: https://www.facebook.com/Shoppingqueenbyorni
 * 190,500+ Followers • Open Parcel Inspection Nationwide
 */

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Crown, ShoppingBag, ArrowUpRight, Check, Sparkles } from "lucide-react";
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
  x: number;
  y: number;
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
    tabLabel: "Pakistani Lawn",
    title: "Royal Blue Embroidered Lawn 3-Piece",
    subtitle: "সুইস কটন লন ফেব্রিক, নিখুঁত সুতার কাজ এবং সফট শিফন ওড়না সমৃদ্ধ প্রিমিয়াম ড্রেস।",
    heroImage: ASSETS.product1,
    spots: [
      {
        id: "spot-1",
        name: "Shopping Queen Royal Blue Embroidered Pakistani Lawn 3-Piece",
        category: "Pakistani Lawn Collection",
        price: 1650,
        comparePrice: 2200,
        slug: "shopping-queen-royal-blue-embroidered-pakistani-lawn-3-piece",
        image: ASSETS.product1,
        x: 50,
        y: 45,
        sizes: ["Unstitched 3-Piece", "Semi-Stitched"],
      },
    ],
  },
  {
    id: "look-2",
    tabLabel: "Festive Partywear",
    title: "Royal Maroon & Zari Heavy Embroidered Suit",
    subtitle: "বিয়ে ও দাওয়াতের জন্য ভারী জারি ও সিকোয়েন্স কারুকাজ খচিত রয়্যাল মেরুন থ্রি-পিস সেট।",
    heroImage: ASSETS.product5,
    spots: [
      {
        id: "spot-2",
        name: "Shopping Queen Royal Maroon & Zari Heavily Embroidered Partywear Suit",
        category: "Exclusive Festive Partywear",
        price: 2650,
        comparePrice: 3500,
        slug: "shopping-queen-royal-maroon-zari-heavily-embroidered-partywear-suit",
        image: ASSETS.product5,
        x: 50,
        y: 40,
        sizes: ["Unstitched 3-Piece", "Semi-Stitched"],
      },
    ],
  },
  {
    id: "look-3",
    tabLabel: "Orni Signature",
    title: "Rose Pink & Tangerine Designer Lawn Suit",
    subtitle: "অর্ণি ইসলামের সিগনেচার ডিজাইনার লন কালেকশন। আরামদায়ক পিওর কটন ফেব্রিক ও ক্ল্যাসিক ডিজাইন।",
    heroImage: ASSETS.product6,
    spots: [
      {
        id: "spot-3",
        name: "Orni Signature Edit — Rose Pink & Tangerine Designer Lawn Suit",
        category: "Orni Signature Edit",
        price: 1850,
        comparePrice: 2400,
        slug: "orni-signature-edit-rose-pink-tangerine-designer-lawn-suit",
        image: ASSETS.product6,
        x: 50,
        y: 42,
        sizes: ["Unstitched 3-Piece", "Semi-Stitched"],
      },
    ],
  },
  {
    id: "look-4",
    tabLabel: "Kim Pearl Skincare",
    title: "Kim Whitening Pearl & Snowlotus Cream",
    subtitle: "কিছু আত্মবিশ্বাসী প্রতিদিন, রাতের যত্নে প্রাকৃতিক উজ্জ্বলতা ✨ ত্বককে দাগমুক্ত ও কোমল করে।",
    heroImage: ASSETS.product12,
    spots: [
      {
        id: "spot-4",
        name: "Kim Whitening Pearl & Snowlotus Night Cream (Net Wt 20g) — Natural Glow",
        category: "Skincare & Natural Glow Care",
        price: 850,
        comparePrice: 1200,
        slug: "kim-whitening-pearl-and-snowlotus-night-cream-20g-natural-glow",
        image: ASSETS.product12,
        x: 50,
        y: 50,
        sizes: ["Single Pack 20g Jar", "Combo Pack (2 x 20g)"],
      },
    ],
  },
];

export function LookbookCouture() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSpotId, setActiveSpotId] = useState<string>("spot-1");
  const [selectedSize, setSelectedSize] = useState<string>("Unstitched 3-Piece");
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
      setSelectedSize(firstSpot.sizes[0] ?? "Standard Size");
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
      stock: 25,
    });

    toast.success(`Added ${activeSpot.name} to your bag!`, {
      description: "✓ Open Parcel Policy • ক্যাশ অন ডেলিভারিতে চেক করে মূল্য পরিশোধ করুন।",
    });

    setTimeout(() => {
      setIsAdding(false);
    }, 1200);
  };

  return (
    <section className="py-16 md:py-28 bg-[#FAF6F0] border-b border-[#E8DFD3] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D4AF37]/50 mb-3 shadow-xs">
            <Crown className="h-3 w-3 text-[#D4AF37]" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#6B1D2F]">
              SHOP THE LOOKBOOK
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] font-heading tracking-tight">
            Orni&apos;s Signature Stylebook
          </h2>
          <p className="mt-3 text-sm md:text-base text-neutral-600 font-medium">
            অর্ণি ইসলাম কর্তৃক নির্বাচিত সেরা পাকিস্তানি লন, গর্জিয়াস পার্টিওয়্যার ও স্কিনকেয়ার সামগ্রী সরাসরি অর্ডার করুন।
          </p>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {COUTURE_LOOKS.map((look, idx) => (
              <button
                key={look.id}
                onClick={() => handleTabChange(idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeTab === idx
                    ? "bg-[#6B1D2F] text-[#D4AF37] shadow-lg border border-[#D4AF37] scale-105"
                    : "bg-white text-neutral-700 hover:bg-[#FAF6F0] border border-[#E8DFD3]"
                }`}
              >
                {look.tabLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Lookbook Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-6 md:p-10 border border-[#E8DFD3] shadow-md">
          {/* LEFT: Hero Lookbook Photo with Interactive Hotspots (7 Cols) */}
          <div className="lg:col-span-7 relative aspect-[4/5] sm:aspect-[16/12] lg:aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900 border border-[#E8DFD3]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentLook.id}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <Image
                  src={currentLook.heroImage}
                  alt={currentLook.title}
                  fill
                  unoptimized
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Hotspots */}
            {currentLook.spots.map((spot) => (
              <button
                key={spot.id}
                onClick={() => {
                  setActiveSpotId(spot.id);
                  setSelectedSize(spot.sizes[0] ?? "Standard Size");
                }}
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center size-9 rounded-full bg-white text-[#6B1D2F] shadow-2xl hover:scale-115 transition-transform duration-300 ring-4 ring-[#D4AF37] cursor-pointer"
                aria-label={`View ${spot.name}`}
              >
                <span className="size-3 rounded-full bg-[#6B1D2F] animate-ping absolute" />
                <span className="size-3 rounded-full bg-[#6B1D2F] relative z-10" />
              </button>
            ))}
          </div>

          {/* RIGHT: Curated Garment Details & 1-Tap Purchase (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D4AF37]">
                {activeSpot.category}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] font-heading leading-tight mt-1">
                {activeSpot.name}
              </h3>
              <p className="text-xs md:text-sm text-neutral-600 mt-2 leading-relaxed">
                {currentLook.subtitle}
              </p>
            </div>

            {/* Price Box */}
            <div className="flex items-baseline gap-3 p-4 rounded-2xl bg-[#FAF6F0] border border-[#E8DFD3]">
              <span className="text-2xl md:text-3xl font-bold text-[#6B1D2F] font-heading">
                ৳{activeSpot.price.toLocaleString()}
              </span>
              {activeSpot.comparePrice > activeSpot.price && (
                <span className="text-sm text-neutral-400 line-through">
                  ৳{activeSpot.comparePrice.toLocaleString()}
                </span>
              )}
              <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 ml-auto">
                ইন-স্টক
              </span>
            </div>

            {/* Size Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">
                Select Option / সাইজ নির্বাচন:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {activeSpot.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                      selectedSize === sz
                        ? "bg-[#6B1D2F] text-[#D4AF37] border-[#D4AF37] shadow-sm"
                        : "bg-white text-neutral-700 hover:bg-[#FAF6F0] border-[#E8DFD3]"
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
                className="w-full h-13 rounded-full bg-[#6B1D2F] hover:bg-[#4A101D] text-[#D4AF37] hover:text-white font-bold text-xs uppercase tracking-[0.16em] transition-all duration-300 shadow-md flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
              >
                {isAdding ? (
                  <>
                    <Check className="h-4 w-4 text-[#D4AF37]" />
                    <span>Added To Bag!</span>
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
                className="w-full h-11 rounded-full bg-white hover:bg-[#FAF6F0] text-[#6B1D2F] border border-[#D4AF37]/50 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
              >
                <span>View Full Product Details</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Assurance Note */}
            <p className="text-[11px] text-neutral-500 text-center">
              ✓ ক্যাশ অন ডেলিভারি • পার্সেল খুলে দেখে চেক করার সুযোগ • ঢাকা ৳৮০ / বাইরে ৳১৫০
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
