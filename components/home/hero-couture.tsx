"use client";

/**
 * 365 Fashion House — Cinematic Haute Couture Hero
 * Asymmetric Editorial Split with Interactive Garment Hotspots & Fluid Physics
 * Pioneer in Authentic Pakistani Attires in Bangladesh — https://www.facebook.com/365FashionHouse/
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
    category: "365 FASHION HOUSE • PIONEER IN BANGLADESH",
    title: "AUTHENTIC",
    italicWord: "Pakistani Attires",
    subtitle:
      "Welcome to 365 Fashion House. Explore 100% original Pakistani designer lawn, organza pret, and festive couture. Delivered across Bangladesh with Open Parcel inspection.",
    link: "/collections/pakistani-lawn",
    hotspot: {
      name: "Mahee's Luxury Lawn 3-Piece Unstitched Suit — Lilac Blossom",
      price: 3850,
      comparePrice: 4500,
      slug: "mahees-luxury-lawn-3piece-unstitched-suit-lilac-blossom",
      x: 65,
      y: 45,
    },
  },
  {
    id: "slide-2",
    image: ASSETS.img2,
    category: "PAKISTANI LUXURY LAWN",
    title: "KHAADI SIGNATURE",
    italicWord: "Luxury Lawn",
    subtitle:
      "Intricate embroidered neckline, digital print border lace, and pure silk lawn dupatta in elegant mint ivory.",
    link: "/collections/pakistani-lawn",
    hotspot: {
      name: "Khaadi Signature Luxury Lawn 3-Piece — Mint Ivory Oasis",
      price: 4250,
      comparePrice: 4950,
      slug: "khaadi-signature-luxury-lawn-3piece-mint-ivory-oasis",
      x: 50,
      y: 40,
    },
  },
  {
    id: "slide-3",
    image: ASSETS.img3,
    category: "READY-TO-WEAR PRET",
    title: "AGHA NOOR",
    italicWord: "Designer Pret",
    subtitle:
      "Pure organza embroidered kurti with multicolor resham floral motifs, pearl neckline, and bell sleeves.",
    link: "/collections/designer-pret",
    hotspot: {
      name: "Agha Noor Festive Organza Kurti — Pistachio Floral Glow",
      price: 3650,
      comparePrice: 4200,
      slug: "agha-noor-festive-organza-kurti-pistachio-floral-glow",
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
      slug: activeSlide.hotspot.slug,
      price: activeSlide.hotspot.price,
      compareAtPrice: activeSlide.hotspot.comparePrice,
      image: activeSlide.image,
      category: activeSlide.category,
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-white to-[#FAF8F5] pt-6 pb-16 md:pt-10 md:pb-24 border-b border-[#E8DFD3]">
      {/* Decorative ambient radial gradients */}
      <div className="absolute top-10 left-1/4 -z-10 h-96 w-96 rounded-full bg-[#6C3483]/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 -z-10 h-80 w-80 rounded-full bg-[#F39C12]/15 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ──────────────── Left Column: Editorial Typography & CTAs ──────────────── */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8 z-10">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#6C3483]/30 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-[#F39C12] animate-ping" />
              <Sparkles className="h-3.5 w-3.5 text-[#6C3483]" />
              <span className="text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#191426]">
                {activeSlide.category}
              </span>
            </div>

            {/* Massive Editorial Headline with AnimatePresence */}
            <div className="overflow-hidden min-h-[140px] md:min-h-[190px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -25 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[68px] font-bold text-[#191426] font-heading leading-[1.06] tracking-tight">
                    {activeSlide.title}{" "}
                    <span className="font-serif italic font-normal text-[#6C3483] block sm:inline">
                      {activeSlide.italicWord}
                    </span>
                  </h1>
                  <p className="mt-4 md:mt-5 text-sm md:text-base text-neutral-600 max-w-lg leading-relaxed font-sans font-medium">
                    {activeSlide.subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Nested "Button-in-Button" Luxury CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href={activeSlide.link}
                className="group relative inline-flex items-center gap-4 pl-7 pr-3.5 py-3.5 rounded-full bg-[#191426] text-[#F39C12] text-xs font-bold uppercase tracking-[0.18em] shadow-[0_10px_25px_-5px_rgba(25,20,38,0.35)] hover:bg-[#6C3483] hover:text-white transition-all duration-300 active:scale-[0.98] cursor-pointer"
              >
                <span>Explore Pakistani Drops</span>
                {/* Button-in-Button Circular Trailing Icon */}
                <div className="flex items-center justify-center size-8 rounded-full bg-[#F39C12]/20 group-hover:bg-white text-[#F39C12] group-hover:text-[#6C3483] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#FAF8F5] text-[#191426] text-xs font-bold uppercase tracking-[0.16em] border border-[#6C3483]/30 transition-all duration-300 hover:border-[#191426] active:scale-[0.98] shadow-xs"
              >
                <MapPin className="h-3.5 w-3.5 text-[#6C3483]" />
                <span>Contact & Dhaka Hub</span>
              </Link>
            </div>

            {/* Micro-Social Proof Trust Pills */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#E8DFD3]">
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-[#191426]">
                  <Star className="h-3.5 w-3.5 fill-[#F39C12] text-[#F39C12]" />
                  <span className="text-xs font-bold font-sans">5.0 ★ Rating</span>
                </div>
                <span className="text-[10px] text-neutral-500 font-medium">58K+ Community</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-[#191426]">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#6C3483]" />
                  <span className="text-xs font-bold font-sans">100% Original</span>
                </div>
                <span className="text-[10px] text-neutral-500 font-medium">Pakistani Attires</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-[#191426]">
                  <ShoppingBag className="h-3.5 w-3.5 text-[#D4AC0D]" />
                  <span className="text-xs font-bold font-sans">Open Parcel</span>
                </div>
                <span className="text-[10px] text-neutral-500 font-medium">Check Before Pay</span>
              </div>
            </div>
          </div>

          {/* ──────────────── Right Column: Double-Bezel Model Visual & Interactive Hotspot ──────────────── */}
          <div className="lg:col-span-6 relative">
            {/* Outer Machine Bezel Shell */}
            <div className="double-bezel-card aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] max-w-lg mx-auto lg:max-w-none shadow-2xl border border-[#6C3483]/25 rounded-3xl p-2 bg-gradient-to-b from-[#FAF8F5] to-[#E8DFD3]">
              <div className="double-bezel-inner h-full w-full relative group/hero overflow-hidden rounded-2xl bg-neutral-900">
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide.id}
                    initial={{ scale: 1.08, opacity: 0.8 }}
                    animate={{ scale: 1.0, opacity: 1 }}
                    exit={{ scale: 1.04, opacity: 0.5 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeSlide.image}
                      alt={activeSlide.title}
                      fill
                      priority
                      quality={95}
                      unoptimized
                      className="object-cover object-center transition-transform duration-[4000ms] group-hover/hero:scale-105"
                    />
                    {/* Subtle aesthetic gradient vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/15 pointer-events-none" />
                  </motion.div>
                </AnimatePresence>

                {/* ── Interactive Garment Hotspot Pin ── */}
                <div
                  style={{
                    left: `${activeSlide.hotspot.x}%`,
                    top: `${activeSlide.hotspot.y}%`,
                  }}
                  className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
                >
                  {/* Glowing Hotspot Button */}
                  <button
                    onClick={() => setShowHotspotTooltip(!showHotspotTooltip)}
                    className="relative flex items-center justify-center size-9 rounded-full bg-white/95 text-[#191426] shadow-lg border border-[#6C3483] transition-transform hover:scale-110 active:scale-95 cursor-pointer"
                    aria-label="View featured piece details"
                  >
                    <span className="absolute inset-0 rounded-full animate-hotspot bg-[#6C3483]/30" />
                    <Sparkles className="h-4 w-4 relative z-10 text-[#6C3483]" />
                  </button>

                  {/* Floating Glassmorphic Product Card Tooltip */}
                  <AnimatePresence>
                    {showHotspotTooltip && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.92 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute left-1/2 -translate-x-1/2 top-11 w-64 p-3 rounded-2xl bg-white/95 backdrop-blur-xl border border-[#6C3483]/40 shadow-xl z-40 text-left"
                      >
                        <div className="flex items-start gap-2.5">
                          <div className="relative size-12 rounded-lg overflow-hidden shrink-0 bg-neutral-100 border border-[#6C3483]/30">
                            <Image
                              src={activeSlide.image}
                              alt={activeSlide.hotspot.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="inline-block text-[9px] font-bold uppercase tracking-wider text-[#6C3483] bg-[#FAF8F5] border border-[#6C3483]/30 px-1.5 py-0.5 rounded">
                              Original Piece
                            </span>
                            <p className="text-[11px] font-bold text-[#191426] truncate mt-0.5">
                              {activeSlide.hotspot.name}
                            </p>
                            <div className="flex items-center gap-1.5 mt-0.5">
                              <span className="text-xs font-bold text-[#191426]">
                                ৳{activeSlide.hotspot.price.toLocaleString()}
                              </span>
                              <span className="text-[10px] text-neutral-400 line-through">
                                ৳{activeSlide.hotspot.comparePrice.toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={handleHotspotClick}
                          className="mt-2.5 w-full py-1.5 rounded-lg bg-[#191426] hover:bg-[#6C3483] text-[#F39C12] hover:text-white text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Eye className="h-3 w-3" />
                          <span>Quick View & Order</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom Slide Switcher Controller */}
                <div className="absolute bottom-4 inset-x-4 z-20 flex items-center justify-between p-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-white">
                  <div className="flex items-center gap-2">
                    {HERO_SLIDES.map((slide, idx) => (
                      <button
                        key={slide.id}
                        onClick={() => handleSlideChange(idx)}
                        className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                          idx === currentIdx
                            ? "bg-[#6C3483] text-white shadow-sm font-extrabold"
                            : "text-white/70 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        0{idx + 1}
                      </button>
                    ))}
                  </div>

                  <span className="text-[9.5px] tracking-widest uppercase font-mono text-white/80">
                    365 FASHION HOUSE EDITORIAL
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
