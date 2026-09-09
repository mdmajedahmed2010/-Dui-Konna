"use client";

/**
 * Blossom Clothing — Short Brand Story Section (Homepage)
 * Explore Your Style | Luxury Women's Fashion & Modest Wear
 * Dhaka, Bangladesh — https://www.facebook.com/blossomclothing195/
 */

import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function EditorialSection() {
  return (
    <section className="py-16 md:py-24 bg-[#fcf9fa] relative border-y border-[#8b1e3f]/20 overflow-hidden">
      <div className="absolute top-0 bottom-0 left-1/3 w-[1px] bg-[#f7c8d0]/40 hidden lg:block" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px 0px" }}
        className="container mx-auto px-4 md:px-12 lg:px-16 max-w-7xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="lg:col-span-5 relative group"
          >
            <div className="absolute -inset-2 bg-[#8b1e3f]/5 border border-[#f7c8d0]/60 rounded-sm -z-10 translate-x-3 translate-y-3 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-neutral-100 shadow-md">
              <Image
                src="/blossom-assets/768949723_1062801453352656_7035338309332001524_n.jpg"
                alt="Blossom Clothing — Explore Your Style"
                fill
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="lg:col-span-7 space-y-5 lg:pl-4"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#8b1e3f] animate-pulse" />
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#8b1e3f] font-bold">
                  ABOUT BLOSSOM CLOTHING
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-[1.15] text-[#1a0008] font-heading">
                Dedicated to <span className="italic font-normal text-[#8b1e3f]">Feminine Grace & Modest Style</span>
              </h2>
            </div>

            <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
              Blossom Clothing is a premier fashion atelier in Bangladesh dedicated to contemporary co-ord sets, authentic Dubai Cherry abayas, flowy kaftans, and graceful festive attire.
            </p>

            <div className="p-4 md:p-5 bg-white border-l-4 border-[#8b1e3f] rounded-sm shadow-sm">
              <p className="text-xs md:text-sm text-[#1a0008] leading-relaxed font-medium italic">
                &ldquo;We celebrate every woman&apos;s unique individuality with premium tailored fabrics, gentle pastel palettes, and seamless nationwide delivery across Bangladesh.&rdquo;
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/collections"
                className="inline-flex items-center justify-center h-12 px-8 bg-[#8b1e3f] hover:bg-[#6e142f] text-white text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-sm shadow-luxury border border-[#f7c8d0]/40 active:scale-[0.98]"
              >
                Explore Collections
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8b1e3f] border-b-2 border-[#8b1e3f] hover:border-[#6e142f] pb-1 transition-all"
              >
                Read Full Story
                <ArrowRight className="h-3.5 w-3.5 text-[#8b1e3f]" />
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
