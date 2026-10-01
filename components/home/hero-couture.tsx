"use client";

/**
 * Shopping Queen by Orni — Cinematic Haute Couture Hero
 * Asymmetric Editorial Split with Interactive Hotspots & Fluid Physics
 * Dhaka, Bangladesh • Facebook: https://www.facebook.com/Shoppingqueenbyorni
 * 190,500+ Followers • Open Parcel Inspection Nationwide
 */

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles, ShieldCheck, Star, Eye, ShoppingBag, Crown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ASSETS } from "@/lib/demo-data";
import { useQuickViewStore } from "@/store/quick-view-store";
import { BUSINESS } from "@/lib/constants";

export interface CoutureHeroSlide {
  id: string;
  image: string;
  category: string;
  title: string;
  italicWord: string;
  subtitle: string;
  link: string;
  hotspot: {
    name: string;
    price: number;
    comparePrice: number;
    slug: string;
    x: number; // percentage from left
    y: number; // percentage from top
  };
}

const HERO_SLIDES: CoutureHeroSlide[] = [
  {
    id: "slide-1",
    image: ASSETS.heroImage,
    category: "অর্ণি ইসলাম সিগনেচার • ১৯০K+ আপুদের বিশ্বাস",
    title: "রাতের যত্নে",
    italicWord: "প্রাকৃতিক উজ্জ্বলতা ✨",
    subtitle:
      "কিম হোয়াইটেনিং পার্ল অ্যান্ড স্নোলোটাস ক্রিম (Kim Whitening Pearl & Snowlotus Cream)। ত্বককে গভীরভাবে ময়েশ্চারাইজ করে, ব্রণ ও কালচে দাগ কমায় এবং রাতারাতি পুষ্টি দিয়ে ত্বক কোমল ও লাবণ্যময় করে। ১০০% ক্ষতিকারক কেমিক্যালমুক্ত ও প্রাকৃতিক উপাদান সমৃদ্ধ।",
    link: "/products/kim-whitening-pearl-and-snowlotus-night-cream-20g-natural-glow",
    hotspot: {
      name: "Kim Whitening Pearl & Snowlotus Night Cream (20g) — Natural Glow",
      price: 850,
      comparePrice: 1200,
      slug: "kim-whitening-pearl-and-snowlotus-night-cream-20g-natural-glow",
      x: 35,
      y: 72,
    },
  },
  {
    id: "slide-2",
    image: ASSETS.product5,
    category: "EXCLUSIVE FESTIVE PARTYWEAR",
    title: "ROYAL MAROON",
    italicWord: "লাক্সারি পার্টিওয়্যার স্যুট",
    subtitle:
      "বিয়ে, উৎসব ও দাওয়াতের জন্য ভারী জারি ও সিকোয়েন্স কারুকাজ খচিত রয়্যাল মেরুন থ্রি-পিস সেট। অর্ণি ইসলামের ফেভারিট কালেকশন—পার্সেল খুলে দেখে পেমেন্ট করার নিশ্চিন্ত সুযোগ।",
    link: "/products/shopping-queen-royal-maroon-zari-heavily-embroidered-partywear-suit",
    hotspot: {
      name: "Shopping Queen Royal Maroon & Zari Heavily Embroidered Partywear Suit",
      price: 2650,
      comparePrice: 3500,
      slug: "shopping-queen-royal-maroon-zari-heavily-embroidered-partywear-suit",
      x: 50,
      y: 42,
    },
  },
  {
    id: "slide-3",
    image: ASSETS.product6,
    category: "ORNI SIGNATURE LAWN EDIT",
    title: "ORNI SIGNATURE",
    italicWord: "রোজ পিঙ্ক & অরেঞ্জ লন",
    subtitle:
      "অর্ণি ইসলাম কর্তৃক ব্যক্তিগতভাবে উপস্থাপিত ও স্টাইল করা ডিজিটাল লন থ্রি-পিস। প্রাণবন্ত রঙ, প্রিমিয়াম সুতি ফেব্রিক এবং আরামদায়ক ক্লাসিক প্রিন্ট দোপাট্টা।",
    link: "/products/orni-signature-edit-rose-pink-tangerine-designer-lawn-suit",
    hotspot: {
      name: "Orni Signature Edit — Rose Pink & Tangerine Designer Lawn Suit",
      price: 1850,
      comparePrice: 2400,
      slug: "orni-signature-edit-rose-pink-tangerine-designer-lawn-suit",
      x: 48,
      y: 46,
    },
  },
  {
    id: "slide-4",
    image: ASSETS.product1,
    category: "PAKISTANI LAWN COLLECTION",
    title: "ROYAL BLUE",
    italicWord: "ডিজিটাল লন ৩-পিস",
    subtitle:
      "প্রিমিয়াম সুইস কটন লন ফেব্রিক্স, মার্জিত ব্লু শেড, নেকলাইনে নিখুঁত এমব্রয়ডারি এবং হালকা শিফন দোপাট্টা। অফিস ও আউটিংয়ের জন্য মানানসই।",
    link: "/products/shopping-queen-royal-blue-embroidered-pakistani-lawn-3-piece",
    hotspot: {
      name: "Shopping Queen Royal Blue Embroidered Pakistani Lawn 3-Piece",
      price: 1650,
      comparePrice: 2200,
      slug: "shopping-queen-royal-blue-embroidered-pakistani-lawn-3-piece",
      x: 52,
      y: 45,
    },
  },
];

export function HeroCouture() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showHotspotTooltip, setShowHotspotTooltip] = useState(true);
  const openQuickView = useQuickViewStore((state) => state.openQuickView);

  const activeSlide = HERO_SLIDES[currentIdx] ?? HERO_SLIDES[0]!;
  const SLIDE_DURATION = 6500;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  const handleSlideChange = useCallback((idx: number) => {
    setCurrentIdx(idx);
  }, []);

  const handleHotspotClick = () => {
    openQuickView({
      id: activeSlide.hotspot.slug,
      name: activeSlide.hotspot.name,
      price: activeSlide.hotspot.price,
      compareAtPrice: activeSlide.hotspot.comparePrice,
      image: activeSlide.image,
      images: [activeSlide.image],
      category: activeSlide.category,
      slug: activeSlide.hotspot.slug,
      stock: 25,
      isNew: true,
    });
  };

  return (
    <section className="relative w-full bg-[#FAF6F0] overflow-hidden border-b border-[#E8DFD3]">
      {/* Background Decorative Typography */}
      <div className="absolute top-1/2 -left-12 -translate-y-1/2 pointer-events-none select-none text-[100px] md:text-[200px] font-bold text-black/[0.02] font-heading leading-none whitespace-nowrap z-0">
        SHOPPING QUEEN
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT: Editorial Storytelling & Direct Conversion CTA (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8 order-2 lg:order-1">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D4AF37]/50 shadow-xs">
              <Crown className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span className="text-[10px] md:text-[11px] font-bold tracking-[0.16em] uppercase text-[#6B1D2F]">
                {activeSlide.category}
              </span>
            </div>

            {/* Haute Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1A1A1A] font-heading leading-[1.08]">
                {activeSlide.title} <br />
                <span className="italic font-normal font-serif text-[#6B1D2F] tracking-normal">
                  {activeSlide.italicWord}
                </span>
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-neutral-600 font-sans leading-relaxed pt-2 max-w-lg">
                {activeSlide.subtitle}
              </p>
            </div>

            {/* Primary Action Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                href={activeSlide.link}
                className="h-12 md:h-13 px-8 rounded-full bg-[#6B1D2F] hover:bg-[#4A101D] text-[#D4AF37] hover:text-white text-xs md:text-sm font-bold tracking-[0.14em] uppercase transition-all duration-300 shadow-md flex items-center justify-center gap-2 group/btn active:scale-98"
              >
                <span>অর্ডার করুন / View Collection</span>
                <ArrowUpRight className="h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </Link>

              <a
                href={BUSINESS.WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 md:h-13 px-6 rounded-full bg-white hover:bg-[#FAF6F0] text-[#6B1D2F] border border-[#D4AF37]/40 text-xs md:text-sm font-semibold tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Sparkles className="h-4 w-4 text-[#D4AF37]" />
                <span>হটলাইন: {BUSINESS.PHONE}</span>
              </a>
            </div>

            {/* Value Indicators Row */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#E8DFD3]">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-[#6B1D2F]">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <span className="text-xs font-bold text-[#1A1A1A] font-heading">১৯০K+ ফলোয়ার</span>
                </div>
                <p className="text-[10px] text-neutral-500">Facebook Family</p>
              </div>

              <div className="space-y-0.5 border-x border-[#E8DFD3] px-3">
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  <ShieldCheck className="h-3.5 w-3.5 fill-current" />
                  <span className="text-xs font-bold text-[#1A1A1A] font-heading">১০০% আসল মান</span>
                </div>
                <p className="text-[10px] text-neutral-500">কোয়ালিটি গ্যারান্টি</p>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-emerald-600">
                  <ShoppingBag className="h-3.5 w-3.5" />
                  <span className="text-xs font-bold text-[#1A1A1A] font-heading">ওপেন পার্সেল</span>
                </div>
                <p className="text-[10px] text-neutral-500">দেখে চেক করে পেমেন্ট</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Asymmetric High-Fashion Editorial Canvas (7 Cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              {/* Luxury Frame Glow */}
              <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-tr from-[#6B1D2F]/20 via-[#D4AF37]/20 to-[#E85D75]/20 blur-xl opacity-70" />

              {/* Main Image Viewport with Aspect Ratio */}
              <div className="relative aspect-[4/5] sm:aspect-[16/11] md:aspect-[4/5] lg:aspect-[16/12] w-full rounded-[1.75rem] overflow-hidden bg-neutral-900 border-2 border-white shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide.id}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeSlide.image}
                      alt={activeSlide.hotspot.name}
                      fill
                      priority
                      unoptimized
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 60vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                  </motion.div>
                </AnimatePresence>

                {/* Garment Interactive Hotspot */}
                <div
                  className="absolute z-20"
                  style={{
                    left: `${activeSlide.hotspot.x}%`,
                    top: `${activeSlide.hotspot.y}%`,
                  }}
                >
                  <button
                    onClick={() => setShowHotspotTooltip(!showHotspotTooltip)}
                    className="relative flex items-center justify-center size-8 rounded-full bg-white text-[#1A1A1A] shadow-xl hover:scale-110 active:scale-95 transition-transform duration-300 ring-4 ring-[#D4AF37]/60 cursor-pointer"
                    aria-label="View hotspot"
                  >
                    <span className="size-2.5 rounded-full bg-[#6B1D2F] animate-ping absolute" />
                    <span className="size-2.5 rounded-full bg-[#6B1D2F] relative z-10" />
                  </button>

                  {/* Hotspot Floating Card Tooltip */}
                  <AnimatePresence>
                    {showHotspotTooltip && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 top-10 w-64 p-3.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-[#D4AF37]/40 shadow-2xl z-30"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-[11px] font-bold text-[#1A1A1A] line-clamp-2 leading-snug">
                            {activeSlide.hotspot.name}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-sm font-bold text-[#6B1D2F] font-heading">
                            ৳{activeSlide.hotspot.price.toLocaleString()}
                          </span>
                          <span className="text-[10px] text-neutral-400 line-through">
                            ৳{activeSlide.hotspot.comparePrice.toLocaleString()}
                          </span>
                        </div>

                        <button
                          onClick={handleHotspotClick}
                          className="mt-2.5 w-full py-1.5 rounded-lg bg-[#6B1D2F] hover:bg-[#4A101D] text-[#D4AF37] hover:text-white text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Eye className="h-3 w-3" />
                          <span>Quick View &amp; Order</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom Slide Switcher Controller */}
                <div className="absolute bottom-4 inset-x-4 z-20 flex items-center justify-between p-2 rounded-xl bg-black/50 backdrop-blur-md border border-white/15 text-white">
                  <div className="flex items-center gap-2">
                    {HERO_SLIDES.map((slide, idx) => (
                      <button
                        key={slide.id}
                        onClick={() => handleSlideChange(idx)}
                        className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                          idx === currentIdx
                            ? "bg-[#6B1D2F] text-[#D4AF37] shadow-sm font-extrabold"
                            : "text-white/70 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        0{idx + 1}
                      </button>
                    ))}
                  </div>

                  <span className="text-[9.5px] tracking-widest uppercase font-mono text-[#D4AF37]">
                    SHOPPING QUEEN BY ORNI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
