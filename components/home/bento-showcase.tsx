"use client";

/**
 * Closet by Tanzz — Asymmetric Haute Bento Showcase
 * Breaks visual monotony with dynamic, magazine-style bento card architecture
 * Wear Tanzz, Wear confidence — https://www.facebook.com/Closetbytanzz/
 */

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { ASSETS } from "@/lib/demo-data";

interface BentoItem {
  title: string;
  subtitle: string;
  tag: string;
  priceNote: string;
  image: string;
  href: string;
  gridClass: string;
  accentColor?: string;
}

const BENTO_ITEMS: BentoItem[] = [
  {
    title: "Zam Zam Lawn Collection",
    subtitle: "Ultra-breathable 100% pure cotton Zam Zam lawn 3-piece sets with vibrant digital floral prints & soft dupattas.",
    tag: "SUMMER LAWN EDIT",
    priceNote: "From ৳1,350",
    image: ASSETS.img4,
    href: "/collections/zam-zam-lawn",
    gridClass: "lg:col-span-7 lg:row-span-2 min-h-[380px] lg:min-h-[520px]",
    accentColor: "#121212",
  },
  {
    title: "Designer Boutique Collection",
    subtitle: "Artisan digital prints, contrasting lightweight dupattas, and high-fashion boutique aesthetics.",
    tag: "SIGNATURE PRET",
    priceNote: "From ৳1,450",
    image: ASSETS.img5,
    href: "/collections/designer-boutique",
    gridClass: "lg:col-span-5 min-h-[250px] lg:min-h-[245px]",
  },
  {
    title: "Festive & Party Wear",
    subtitle: "Royal Kashmiri jaal prints, deep crimson jewel tones, and celebratory ensembles for weddings and dawats.",
    tag: "ROYAL JAAL",
    priceNote: "From ৳1,550",
    image: ASSETS.img3,
    href: "/collections/festive-party-wear",
    gridClass: "lg:col-span-5 min-h-[250px] lg:min-h-[245px]",
  },
  {
    title: "Artisan Block & Florals",
    subtitle: "Midnight black traditional block print motifs and monochrome elegance on pure soft cotton.",
    tag: "VINTAGE BLOCK",
    priceNote: "From ৳1,450",
    image: ASSETS.img1,
    href: "/collections/artisan-block",
    gridClass: "lg:col-span-6 min-h-[260px] lg:min-h-[300px]",
  },
  {
    title: "Casual Chic & Geometric Sets",
    subtitle: "Bright sunflower florals, neon chevron zigzags, and lightweight pure cotton suits for everyday comfort.",
    tag: "DAILY CHIC",
    priceNote: "From ৳1,350",
    image: ASSETS.img10,
    href: "/collections/casual-chic",
    gridClass: "lg:col-span-6 min-h-[260px] lg:min-h-[300px]",
  },
];

export function BentoShowcase() {
  return (
    <section className="py-16 md:py-28 bg-[#FAF8F5] border-b border-[#E8DFD3] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#C5A059]/40 mb-3 shadow-xs">
              <Sparkles className="h-3 w-3 text-[#C5A059]" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#121212]">
                CURATED COLLECTIONS
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#121212] font-heading tracking-tight">
              The Tanzz Wardrobe
            </h2>
            <p className="mt-3 text-sm md:text-base text-neutral-600 font-medium">
              Explore authentic pure cotton Zam Zam lawn, artisan designer boutique suits, festive Kashmiri jaal ensembles, and casual chic three-piece collections.
            </p>
          </div>

          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#121212] hover:text-[#C5A059] transition-colors group/link self-start md:self-end"
          >
            <span>View All Categories</span>
            <ArrowUpRight className="h-4 w-4 text-[#C5A059] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
          {BENTO_ITEMS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative rounded-3xl overflow-hidden shadow-lg border border-[#E8DFD3] bg-neutral-900 ${item.gridClass}`}
            >
              {/* Image Background with Pan Effect */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  quality={90}
                  unoptimized
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Gradient Vignette for Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 transition-opacity group-hover:opacity-90" />
              </div>

              {/* Tag / Price Pills at Top */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-[#121212] border border-[#C5A059]/40 shadow-xs">
                  {item.tag}
                </span>
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10.5px] font-mono font-bold text-[#C5A059] border border-[#C5A059]/30">
                  {item.priceNote}
                </span>
              </div>

              {/* Content Box at Bottom */}
              <div className="absolute bottom-0 inset-x-0 p-6 md:p-8 z-10 flex flex-col justify-end">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white font-heading tracking-tight leading-snug group-hover:text-[#C5A059] transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs md:text-sm text-neutral-300 line-clamp-2 leading-relaxed max-w-lg font-medium">
                  {item.subtitle}
                </p>

                {/* Explore Link CTA */}
                <div className="mt-4 pt-4 border-t border-white/15 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C5A059] flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                    <span>Explore Collection</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                  <div className="size-8 rounded-full bg-white/10 group-hover:bg-[#C5A059] text-white group-hover:text-[#121212] flex items-center justify-center transition-colors">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Full Card Link Overlay */}
              <Link href={item.href} className="absolute inset-0 z-20" aria-label={item.title}>
                <span className="sr-only">Explore {item.title}</span>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
