"use client";

/**
 * Ash and Aspen (ash and aspen) — Cinematic Haute Couture Hero
 * Asymmetric Editorial Split with Interactive Garment Hotspots & Fluid Physics
 * House #76, Gausul Azam Avenue, Sector #13, Uttara, Dhaka - 1230, Bangladesh
 * Official Facebook: https://www.facebook.com/ashandaspenclothing/
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
    category: "ASH AND ASPEN • UTTARA SHOWROOM & ONLINE",
    title: "AUTHENTIC",
    italicWord: "Pakistani Attires",
    subtitle:
      "Welcome to Ash and Aspen. Explore 100% original Pakistani designer lawn, organza pret, and festive couture. Visit our showroom at House 76, Gausul Azam Avenue, Sector 13, Uttara, Dhaka or order online with Open Parcel inspection across Bangladesh.",
    link: "/collections/pakistani-lawn",
    hotspot: {
      name: "Gulaal Luxury Lawn 3-Piece Embroidered Suit — Seafoam Mint Whisper",
      price: 4250,
      comparePrice: 4950,
      slug: "gulaal-luxury-lawn-3piece-embroidered-suit-seafoam-mint-whisper",
      x: 65,
      y: 45,
    },
  },
  {
    id: "slide-2",
    image: ASSETS.img2,
    category: "PAKISTANI LUXURY LAWN",
    title: "NUR FESTIVE",
    italicWord: "Schiffli Kameez",
    subtitle:
      "Intricate center panel embroidery, laser cutwork daman, matching trousers, and pure embroidered chiffon dupatta in elegant royal ivory.",
    link: "/collections/pakistani-lawn",
    hotspot: {
      name: "Nur Festive Chikankari & Schiffli Long Kameez 3-Piece — Royal Ivory",
      price: 4450,
      comparePrice: 5200,
      slug: "nur-festive-chikankari-schiffli-long-kameez-3piece-royal-ivory",
      x: 50,
      y: 40,
    },
  },
  {
    id: "slide-3",
    image: ASSETS.img5,
    category: "READY-TO-WEAR PRET",
    title: "NUR ORGANZA",
    italicWord: "Butterfly Pret",
    subtitle:
      "Pure organza embroidered kurti with hand-painted butterfly motifs, floral threadwork, and pure lilac dupatta with botanical art.",
    link: "/collections/organza-chiffon",
    hotspot: {
      name: "Nur Luxury Organza Butterfly Ensemble — Lilac Petal Whisper",
      price: 3950,
      comparePrice: 4600,
      slug: "nur-luxury-organza-butterfly-ensemble-lilac-petal-whisper",
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
      stock: 12,
      isNew: true,
    });
  };

  return (
    <section className="relative w-full bg-[#FAF7F2] overflow-hidden border-b border-[#E8DFD3]">
      {/* Background Decorative Typography */}
      <div className="absolute top-1/2 -left-12 -translate-y-1/2 pointer-events-none select-none text-[120px] md:text-[220px] font-bold text-black/[0.02] font-heading leading-none whitespace-nowrap z-0">
        ASH &amp; ASPEN
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Editorial Storytelling & Direct Conversion CTA (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8 order-2 lg:order-1">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E29578]/40 shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-[#E29578]" />
              <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-[#1A1A1A]">
                {activeSlide.category}
              </span>
            </div>

            {/* Haute Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1A1A1A] font-heading leading-[1.08]">
                {activeSlide.title} <br />
                <span className="italic font-normal font-serif text-[#E29578] tracking-normal">
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
                className="h-12 md:h-13 px-8 rounded-full bg-[#1A1A1A] hover:bg-[#E29578] text-white hover:text-white text-xs md:text-sm font-bold tracking-[0.14em] uppercase transition-all duration-300 shadow-md flex items-center justify-center gap-2 group/btn active:scale-98"
              >
                <span>Explore Collection</span>
                <ArrowUpRight className="h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="/about"
                className="h-12 md:h-13 px-6 rounded-full bg-white hover:bg-[#FAF7F2] text-[#1A1A1A] border border-[#E8DFD3] text-xs md:text-sm font-semibold tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <MapPin className="h-4 w-4 text-[#E29578]" />
                <span>Visit Uttara Showroom</span>
              </Link>
            </div>

            {/* Value Indicators Row */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#E8DFD3]">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-[#E29578]">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <span className="text-xs font-bold text-[#1A1A1A] font-heading">81K+ Community</span>
                </div>
                <p className="text-[10px] text-neutral-500">Facebook Followers</p>
              </div>

              <div className="space-y-0.5 border-x border-[#E8DFD3] px-3">
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  <ShieldCheck className="h-3.5 w-3.5 fill-current" />
                  <span className="text-xs font-bold text-[#1A1A1A] font-heading">100% Genuine</span>
                </div>
                <p className="text-[10px] text-neutral-500">Original Pakistani Suits</p>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-emerald-600">
                  <ShoppingBag className="h-3.5 w-3.5" />
                  <span className="text-xs font-bold text-[#1A1A1A] font-heading">Open Parcel</span>
                </div>
                <p className="text-[10px] text-neutral-500">Inspect Before Paying</p>
              </div>
            </div>

          </div>

          {/* RIGHT: Asymmetric High-Fashion Editorial Canvas (7 Cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              
              {/* Luxury Frame Glow */}
              <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-tr from-[#E29578]/30 via-[#D4AF37]/20 to-[#484860]/20 blur-xl opacity-70" />

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
                    className="relative flex items-center justify-center size-8 rounded-full bg-white text-[#1A1A1A] shadow-xl hover:scale-110 active:scale-95 transition-transform duration-300 ring-4 ring-[#E29578]/60 cursor-pointer"
                    aria-label="View garment hotspot"
                  >
                    <span className="size-2.5 rounded-full bg-[#E29578] animate-ping absolute" />
                    <span className="size-2.5 rounded-full bg-[#E29578] relative z-10" />
                  </button>

                  {/* Hotspot Floating Card Tooltip */}
                  <AnimatePresence>
                    {showHotspotTooltip && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 top-10 w-64 p-3.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-[#E8DFD3] shadow-2xl z-30"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-[11px] font-bold text-[#1A1A1A] line-clamp-2 leading-snug">
                            {activeSlide.hotspot.name}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-sm font-bold text-[#E29578] font-heading">
                            ৳{activeSlide.hotspot.price.toLocaleString()}
                          </span>
                          <span className="text-[10px] text-neutral-400 line-through">
                            ৳{activeSlide.hotspot.comparePrice.toLocaleString()}
                          </span>
                        </div>

                        <button
                          onClick={handleHotspotClick}
                          className="mt-2.5 w-full py-1.5 rounded-lg bg-[#1A1A1A] hover:bg-[#E29578] text-[#E29578] hover:text-white text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Eye className="h-3 w-3" />
                          <span>Quick View &amp; Order</span>
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
                            ? "bg-[#E29578] text-white shadow-sm font-extrabold"
                            : "text-white/70 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        0{idx + 1}
                      </button>
                    ))}
                  </div>

                  <span className="text-[9.5px] tracking-widest uppercase font-mono text-white/80">
                    ASH AND ASPEN EDITORIAL
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
