"use client";

/**
 * Tazeen's (tazeensbd) — Cinematic Haute Couture Hero
 * Asymmetric Editorial Split with Interactive Saree Hotspots & Fluid Physics
 * Pink City Shopping Complex, Gulshan-2 & Sector 11, Uttara, Dhaka, Bangladesh
 * Official Facebook: https://www.facebook.com/tazeensbd/
 */

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles, ShieldCheck, Star, MapPin, Eye, ShoppingBag } from "lucide-react";
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
    image: ASSETS.banner,
    category: "TAZEEN'S • GULSHAN & UTTARA SHOWROOMS",
    title: "SMART & ELEGANT",
    italicWord: "Heritage Sarees",
    subtitle:
      "Welcome to Tazeen's. Discover exclusive sequin border sarees, royal bridal katan, and handcrafted boutique 3-piece sets. Visit our showrooms at Pink City (Gulshan-2) & Sector 11 (Uttara), or order online with Open Parcel inspection across Bangladesh.",
    link: "/collections/sequin-tissue-sarees",
    hotspot: {
      name: "Tazeen's Signature Sequin Border Saree — Champagne Beige Gold",
      price: 3850,
      comparePrice: 4500,
      slug: "tazeens-signature-sequin-border-saree-champagne-beige-gold",
      x: 52,
      y: 48,
    },
  },
  {
    id: "slide-2",
    image: ASSETS.sareeKatanMaroon,
    category: "HERITAGE KATAN & SILK",
    title: "ROYAL CRIMSON",
    italicWord: "Zari Striped Saree",
    subtitle:
      "Pure blended silk with vertical antique gold zari stripes, korvai temple borders, and a royal turmeric gold pallu. Packaged in Tazeen's signature polka-dot gift box.",
    link: "/collections/heritage-katan-silk",
    hotspot: {
      name: "Tazeen's Heritage Zari Striped Silk Saree — Royal Crimson Maroon",
      price: 5850,
      comparePrice: 6800,
      slug: "tazeens-heritage-zari-striped-silk-saree-royal-crimson-maroon",
      x: 48,
      y: 45,
    },
  },
  {
    id: "slide-3",
    image: ASSETS.threePieceAjrakh,
    category: "BOUTIQUE THREE-PIECE SETS",
    title: "ARTISANAL",
    italicWord: "Ajrakh & Mirror Work",
    subtitle:
      "Authentic monochrome & indigo Ajrakh medallion block prints with hand-embroidered neckline panels, breathable cotton dupattas, and tailored comfort.",
    link: "/collections/boutique-three-piece",
    hotspot: {
      name: "Tazeen's Classic Indigo Ajrakh Block Print 3-Piece Set",
      price: 2450,
      comparePrice: 2950,
      slug: "tazeens-classic-indigo-ajrakh-block-print-3piece-set",
      x: 50,
      y: 42,
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
      <div className="absolute top-1/2 -left-12 -translate-y-1/2 pointer-events-none select-none text-[120px] md:text-[220px] font-bold text-black/[0.02] font-heading leading-none whitespace-nowrap z-0">
        TAZEEN&apos;S
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT: Editorial Storytelling & Direct Conversion CTA (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8 order-2 lg:order-1">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D4AF37]/40 shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-[#720026]">
                {activeSlide.category}
              </span>
            </div>

            {/* Haute Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1A1A1A] font-heading leading-[1.08]">
                {activeSlide.title} <br />
                <span className="italic font-normal font-serif text-[#720026] tracking-normal">
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
                className="h-12 md:h-13 px-8 rounded-full bg-[#720026] hover:bg-[#8D0030] text-[#D4AF37] hover:text-white text-xs md:text-sm font-bold tracking-[0.14em] uppercase transition-all duration-300 shadow-md flex items-center justify-center gap-2 group/btn active:scale-98"
              >
                <span>Explore Saree Collection</span>
                <ArrowUpRight className="h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="h-12 md:h-13 px-6 rounded-full bg-white hover:bg-[#FAF7F2] text-[#720026] border border-[#D4AF37]/40 text-xs md:text-sm font-semibold tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <MapPin className="h-4 w-4 text-[#D4AF37]" />
                <span>Visit Showrooms</span>
              </Link>
            </div>

            {/* Value Indicators Row */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#E8DFD3]">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-[#720026]">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <span className="text-xs font-bold text-[#1A1A1A] font-heading">50K+ Community</span>
                </div>
                <p className="text-[10px] text-neutral-500">Facebook Followers</p>
              </div>

              <div className="space-y-0.5 border-x border-[#E8DFD3] px-3">
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  <ShieldCheck className="h-3.5 w-3.5 fill-current" />
                  <span className="text-xs font-bold text-[#1A1A1A] font-heading">100% Authentic</span>
                </div>
                <p className="text-[10px] text-neutral-500">Handloom &amp; Boutique</p>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-emerald-600">
                  <ShoppingBag className="h-3.5 w-3.5" />
                  <span className="text-xs font-bold text-[#1A1A1A] font-heading">Open Parcel</span>
                </div>
                <p className="text-[10px] text-neutral-500">Check Before Paying</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Asymmetric High-Fashion Editorial Canvas (7 Cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              {/* Luxury Frame Glow */}
              <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-tr from-[#720026]/20 via-[#D4AF37]/20 to-[#C2185B]/20 blur-xl opacity-70" />

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
                    aria-label="View garment hotspot"
                  >
                    <span className="size-2.5 rounded-full bg-[#720026] animate-ping absolute" />
                    <span className="size-2.5 rounded-full bg-[#720026] relative z-10" />
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
                          <span className="text-sm font-bold text-[#720026] font-heading">
                            ৳{activeSlide.hotspot.price.toLocaleString()}
                          </span>
                          <span className="text-[10px] text-neutral-400 line-through">
                            ৳{activeSlide.hotspot.comparePrice.toLocaleString()}
                          </span>
                        </div>

                        <button
                          onClick={handleHotspotClick}
                          className="mt-2.5 w-full py-1.5 rounded-lg bg-[#720026] hover:bg-[#8D0030] text-[#D4AF37] hover:text-white text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
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
                            ? "bg-[#720026] text-[#D4AF37] shadow-sm font-extrabold"
                            : "text-white/70 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        0{idx + 1}
                      </button>
                    ))}
                  </div>

                  <span className="text-[9.5px] tracking-widest uppercase font-mono text-[#D4AF37]">
                    TAZEEN&apos;S EDITORIAL
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
