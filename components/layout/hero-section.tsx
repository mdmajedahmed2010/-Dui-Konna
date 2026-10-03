"use client";

/**
 * Dui Konna (দুই কন্যা) — Hero Section
 * Authentic Dhakai Muslin Sarees, Dhakai Jamdani & Luxury Karchupi
 * Founder: Shamima Nasrin • Nikunja-2, Khilkhet, Dhaka-1229
 */

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ASSETS } from "@/lib/demo-data";
import { BUSINESS } from "@/lib/constants";

const slides = [
  {
    image: ASSETS.heroBanner,
    title: "DUI KONNA (দুই কন্যা)",
    subtitle: "ঐতিহ্যবাহী খাঁটি ঢাকাই মসলিন শাড়ি, জামদানি ও লাক্সারি কারচুপি কালেকশন।",
    link: "/categories/exclusive-muslin-saree",
    overline: "✦ ৪৮৪,০০০+ Facebook Community • Shamima Nasrin ✦",
  },
  {
    image: ASSETS.product3,
    title: "ROYAL YELLOW DHAKAI MUSLIN (৳২৯,০০০)",
    subtitle: "নিখুঁত সোনালী জরির ঐতিহ্যবাহী নকশা ও খাঁটি তাঁত বুনন।",
    link: "/products/royal-yellow-mustard-gold-dhakai-muslin-saree-29000",
    overline: "✦ ১০০% খাঁটি ঢাকাই মসলিন গ্যারান্টি ✦",
  },
  {
    image: ASSETS.product8,
    title: "DUSTY LILAC LUXURY KARCHUPI",
    subtitle: "হাতে বোনা সূক্ষ্ম কারচুপি কাজ, পার্ল ও স্টোনের চোখজুড়ানো কারুকাজ।",
    link: "/products/dusty-lilac-lavender-luxury-karchupi-designer-saree",
    overline: "✦ ওপেন পার্সেল গ্যারান্টি ও নিকুঞ্জ-২ শোরুম ✦",
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  // Automatic slide rotation every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-[#8B0000] group">
      {/* Active and Inactive Slides Container */}
      {slides.map((slide, index) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            unoptimized
            priority={index === 0}
            className="object-cover object-center scale-100 transition-transform duration-[7000ms] ease-out motion-safe:scale-105"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

          {/* Text Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center p-6 md:p-12 z-20">
            <div className="max-w-2xl space-y-4">
              <span className="inline-block text-[#D4AF37] text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase bg-black/40 px-3.5 py-1 rounded-full border border-[#D4AF37]/40 backdrop-blur-xs">
                {slide.overline}
              </span>
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white font-serif leading-tight">
                {slide.title}
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-neutral-200 max-w-lg mx-auto leading-relaxed">
                {slide.subtitle}
              </p>
              <div className="pt-2">
                <Link
                  href={slide.link}
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-[#8B0000] hover:bg-[#6B0000] text-[#D4AF37] hover:text-white text-xs font-bold tracking-[0.2em] uppercase rounded-full shadow-lg border border-[#D4AF37]/50 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Shop Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 size-10 rounded-full bg-black/40 text-white border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60 cursor-pointer"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        onClick={handleNext}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 size-10 rounded-full bg-black/40 text-white border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60 cursor-pointer"
      >
        <ChevronRight className="size-5" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              idx === current ? "w-8 bg-[#D4AF37]" : "w-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
