"use client";

/**
 * Dui Konna (দুই কন্যা) — Haute Couture Hero Experience
 * Asymmetric Editorial Canvas with Interactive Saree Hotspots
 * Nikunja-2, Khilkhet, Dhaka-1229 • Facebook: https://www.facebook.com/duikonna01
 * 484,000+ Followers • Authentic Dhakai Muslin & Luxury Sarees
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
    image: ASSETS.heroBanner,
    category: "শামীমা নাসরিন সিগনেচার • ৪৮৪K+ আপুদের পরিবার",
    title: "রাজকীয় ঢাকাই",
    italicWord: "মসলিন কালেকশন ✨",
    subtitle:
      "বাংলার সুপ্রাচীন ঐতিহ্যে বোনা খাঁটি ঢাকai মসলিন শাড়ি। নিখুঁত তাঁত বুনন, স্বর্ণালী জরির সূক্ষ্ম নকশা এবং রাজকীয় লাল ও সোনালী আভিজাত্য—প্রতিটি ব্রাইডাল ও উৎসবের সাজে সম্পূর্ণ অনন্য।",
    link: "/categories/exclusive-muslin-saree",
    hotspot: {
      name: "Royal Yellow & Mustard Gold Dhakai Muslin Saree (৳29,000 Verified)",
      price: 29000,
      comparePrice: 32000,
      slug: "royal-yellow-mustard-gold-dhakai-muslin-saree-29000",
      x: 48,
      y: 50,
    },
  },
  {
    id: "slide-2",
    image: ASSETS.product8,
    category: "LUXURY KARCHUPI & ORGANZA",
    title: "DUSTY LILAC",
    italicWord: "লাক্সারি কারচুপি শাড়ি",
    subtitle:
      "হাতে বোনা সূক্ষ্ম কারচুপি কাজ ও পার্ল-স্টোনের চোখজুড়ানো কারুকাজ। ডাস্টি লিলাক প্যাস্টেল শেডের এই অভিজাত শাড়িতে ফুটে ওঠে স্নিগ্ধতা ও মর্ডান এলিগ্যান্স।",
    link: "/products/dusty-lilac-lavender-luxury-karchupi-designer-saree",
    hotspot: {
      name: "Dusty Lilac Lavender Luxury Karchupi Handcrafted Saree",
      price: 28000,
      comparePrice: 31500,
      slug: "dusty-lilac-lavender-luxury-karchupi-designer-saree",
      x: 52,
      y: 42,
    },
  },
  {
    id: "slide-3",
    image: ASSETS.product1,
    category: "HERITAGE HANDLOOM MUSLIN",
    title: "RUST ORANGE",
    italicWord: "বাটারফ্লাই জরি মসলিন",
    subtitle:
      "উষ্ণ রাস্ট অরেঞ্জ শেডে প্রজাপতি মোটিফের সোনালী জরির অনবদ্য অলংকরণ। আভিজাত্যপ্রিয় নারীদের পারিবারিক উৎসব ও সান্ধ্যকালীন অনুষ্ঠানের পরম পছন্দ।",
    link: "/products/rust-orange-butterfly-zari-woven-dhakai-muslin-saree",
    hotspot: {
      name: "Rust Orange Butterfly Zari Woven Dhakai Muslin Saree",
      price: 24500,
      comparePrice: 27500,
      slug: "rust-orange-butterfly-zari-woven-dhakai-muslin-saree",
      x: 46,
      y: 45,
    },
  },
  {
    id: "slide-4",
    image: ASSETS.product5,
    category: "DHAKAI JAMDANI COLLECTION",
    title: "PEARL WHITE",
    italicWord: "মাল্টিকালার ঢাকাই জামদানি",
    subtitle:
      "খাঁটি পার্ল হোয়াইট সুতার জমিনে জ্যামিতিক নকশার মাল্টিকালার থ্রেড ওয়ার্ক ও ঐতিহ্যবাহী জামদানি পাড়। বাংলার শতবর্ষী ঐতিহ্যের এক নিখুঁত রূপ।",
    link: "/products/pearl-white-multicolor-geometric-dhakai-jamdani-saree",
    hotspot: {
      name: "Pearl White Multicolor Geometric Dhakai Jamdani Saree",
      price: 27500,
      comparePrice: 30000,
      slug: "pearl-white-multicolor-geometric-dhakai-jamdani-saree",
      x: 50,
      y: 48,
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
      stock: 15,
      isNew: true,
    });
  };

  return (
    <section className="relative w-full bg-[#FAF7F2] overflow-hidden border-b border-[#E8DFD3]">
      {/* Background Decorative Typography */}
      <div className="absolute top-1/2 -left-12 -translate-y-1/2 pointer-events-none select-none text-[100px] md:text-[220px] font-bold text-black/[0.02] font-heading leading-none whitespace-nowrap z-0">
        DUI KONNA
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT: Editorial Storytelling & Direct Conversion CTA (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8 order-2 lg:order-1">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D4AF37]/50 shadow-xs">
              <Crown className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span className="text-[10px] md:text-[11px] font-bold tracking-[0.16em] uppercase text-[#8B0000]">
                {activeSlide.category}
              </span>
            </div>

            {/* Haute Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1A1A1A] font-heading leading-[1.08]">
                {activeSlide.title} <br />
                <span className="italic font-normal font-serif text-[#8B0000] tracking-normal">
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
                className="h-12 md:h-13 px-8 rounded-full bg-[#8B0000] hover:bg-[#6B0000] text-[#D4AF37] hover:text-white text-xs md:text-sm font-bold tracking-[0.14em] uppercase transition-all duration-300 shadow-md flex items-center justify-center gap-2 group/btn active:scale-98"
              >
                <span>অর্ডার করুন / View Collection</span>
                <ArrowUpRight className="h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </Link>

              <a
                href={BUSINESS.WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 md:h-13 px-6 rounded-full bg-white hover:bg-[#FAF7F2] text-[#8B0000] border border-[#D4AF37]/40 text-xs md:text-sm font-semibold tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Sparkles className="h-4 w-4 text-[#D4AF37]" />
                <span>হটলাইন: {BUSINESS.PHONE}</span>
              </a>
            </div>

            {/* Value Indicators Row */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#E8DFD3]">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-[#8B0000]">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <span className="text-xs font-bold text-[#1A1A1A] font-heading">৪৮৪K+ ফলোয়ার</span>
                </div>
                <p className="text-[10px] text-neutral-500">Facebook Community</p>
              </div>

              <div className="space-y-0.5 border-x border-[#E8DFD3] px-3">
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  <ShieldCheck className="h-3.5 w-3.5 fill-current" />
                  <span className="text-xs font-bold text-[#1A1A1A] font-heading">১০০% খাঁটি মসলিন</span>
                </div>
                <p className="text-[10px] text-neutral-500">তাঁত বুনন গ্যারান্টি</p>
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
              <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-tr from-[#8B0000]/20 via-[#D4AF37]/20 to-[#E85D75]/20 blur-xl opacity-70" />

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
                    <span className="size-2.5 rounded-full bg-[#8B0000] animate-ping absolute" />
                    <span className="size-2.5 rounded-full bg-[#8B0000] relative z-10" />
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
                          <span className="text-sm font-bold text-[#8B0000] font-heading">
                            ৳{activeSlide.hotspot.price.toLocaleString()}
                          </span>
                          <span className="text-[10px] text-neutral-400 line-through">
                            ৳{activeSlide.hotspot.comparePrice.toLocaleString()}
                          </span>
                        </div>

                        <button
                          onClick={handleHotspotClick}
                          className="mt-2.5 w-full py-1.5 rounded-lg bg-[#8B0000] hover:bg-[#6B0000] text-[#D4AF37] hover:text-white text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
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
                            ? "bg-[#8B0000] text-[#D4AF37] shadow-sm font-extrabold"
                            : "text-white/70 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        0{idx + 1}
                      </button>
                    ))}
                  </div>

                  <span className="text-[9.5px] tracking-widest uppercase font-mono text-[#D4AF37]">
                    DUI KONNA • দুই কন্যা
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
