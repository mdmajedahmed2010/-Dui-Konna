"use client";

/**
 * Tazeen's (tazeensbd) — Asymmetric Haute Bento Showcase
 * Breaks visual monotony with dynamic, magazine-style bento card architecture
 * Pink City Shopping Complex, Gulshan-2 & Sector 11, Uttara, Dhaka, Bangladesh
 * Official Facebook: https://www.facebook.com/tazeensbd/
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
    title: "Signature Sequin Border Sarees",
    subtitle:
      "Handcrafted linen tissue blend sarees with glistening metallic sequin borders, geometric pallus, and artisanal tassels across 6 luxury shades.",
    tag: "SIGNATURE SEQUIN",
    priceNote: "From ৳3,850",
    image: ASSETS.sareeChampagne,
    href: "/collections/sequin-tissue-sarees",
    gridClass: "lg:col-span-7 lg:row-span-2 min-h-[380px] lg:min-h-[520px]",
    accentColor: "#720026",
  },
  {
    title: "Heritage Katan & Zari Silk",
    subtitle:
      "Royal crimson maroon and bridal banarasi silk with vertical gold zari stripes, korvai temple borders, and festive opulence.",
    tag: "ROYAL KATAN",
    priceNote: "From ৳5,850",
    image: ASSETS.sareeKatanMaroon,
    href: "/collections/heritage-katan-silk",
    gridClass: "lg:col-span-5 min-h-[250px] lg:min-h-[245px]",
  },
  {
    title: "Boutique Three-Piece Sets",
    subtitle:
      "Handcrafted unstitched & stitched salwar kameez featuring monochrome Ajrakh block prints, mirror-work yokes, and pure cotton comfort.",
    tag: "ARTISAN 3-PIECE",
    priceNote: "From ৳2,450",
    image: ASSETS.threePieceAjrakh,
    href: "/collections/boutique-three-piece",
    gridClass: "lg:col-span-5 min-h-[250px] lg:min-h-[245px]",
  },
  {
    title: "Pastel Muslin & Watercolor Lawn",
    subtitle:
      "Soft watercolor botanical floral prints, sheer lightweight dupattas, and understated everyday luxury for modern women.",
    tag: "PASTEL MUSLIN",
    priceNote: "From ৳2,350",
    image: ASSETS.threePieceLavender,
    href: "/collections/muslin-tussar-sarees",
    gridClass: "lg:col-span-6 min-h-[260px] lg:min-h-[300px]",
  },
  {
    title: "Festive Haldi & Gaye Holud Edit",
    subtitle:
      "Radiant canary mustard sequin border sarees and festive handlooms curated for wedding festivities and joyful celebrations.",
    tag: "HALDI CELEBRATION",
    priceNote: "From ৳3,850",
    image: ASSETS.sareeYellow,
    href: "/collections/handloom-cotton-sarees",
    gridClass: "lg:col-span-6 min-h-[260px] lg:min-h-[300px]",
  },
];

export function BentoShowcase() {
  return (
    <section className="py-16 md:py-28 bg-[#FAF7F2] border-b border-[#E8DFD3] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D4AF37]/40 mb-3 shadow-xs">
              <Sparkles className="h-3 w-3 text-[#D4AF37]" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#720026]">
                TAZEEN&apos;S CURATIONS
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] font-heading tracking-tight">
              The Tazeen&apos;s Wardrobe
            </h2>
            <p className="mt-3 text-sm md:text-base text-neutral-600 font-medium">
              Explore authentic handwoven sarees, royal bridal katan, signature sequin borders, and boutique three-piece sets from our Pink City &amp; Uttara showrooms with Open Parcel inspection across Bangladesh.
            </p>
          </div>

          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#720026] hover:text-[#D4AF37] transition-colors group/link self-start md:self-end"
          >
            <span>View All Categories</span>
            <ArrowUpRight className="h-4 w-4 text-[#D4AF37] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
          {BENTO_ITEMS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`group relative overflow-hidden rounded-3xl border border-[#E8DFD3] bg-neutral-900 shadow-sm hover:shadow-xl transition-all duration-500 hover:border-[#D4AF37]/70 ${item.gridClass}`}
            >
              <Link href={item.href} className="absolute inset-0 z-20">
                <span className="sr-only">Explore {item.title}</span>
              </Link>

              {/* Background Product Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                unoptimized
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106 opacity-85 group-hover:opacity-95"
              />

              {/* Dark Gradient Veil */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent transition-opacity duration-300" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
                <div className="flex items-center justify-between">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[9px] md:text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#D4AF37]">
                    {item.tag}
                  </span>
                  <span className="text-xs font-bold font-mono text-white/90 bg-black/40 px-2.5 py-1 rounded-lg backdrop-blur-sm border border-white/10">
                    {item.priceNote}
                  </span>
                </div>

                <div className="space-y-2 max-w-md">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white font-heading tracking-tight leading-tight group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
