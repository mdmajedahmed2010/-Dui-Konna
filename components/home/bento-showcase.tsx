"use client";

/**
 * 365 Fashion House — Asymmetric Haute Bento Showcase
 * Breaks visual monotony with dynamic, magazine-style bento card architecture
 * Pioneer in Authentic Pakistani Attires in Bangladesh — https://www.facebook.com/365FashionHouse/
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
    title: "Luxury Pakistani Lawn",
    subtitle: "100% authentic unstitched 3-piece designer lawn sets with intricate resham neckline embroidery, digital floral borders & organza dupattas.",
    tag: "ORIGINAL LAWN EDIT",
    priceNote: "From ৳3,850",
    image: ASSETS.img1,
    href: "/collections/pakistani-lawn",
    gridClass: "lg:col-span-7 lg:row-span-2 min-h-[380px] lg:min-h-[520px]",
    accentColor: "#191426",
  },
  {
    title: "Ready-to-Wear Designer Pret",
    subtitle: "Agha Noor & Asim Jofa stitched kurtis featuring delicate pearl finishes, neckline beads, and flared bell sleeves.",
    tag: "AGHA NOOR PRET",
    priceNote: "From ৳3,650",
    image: ASSETS.img3,
    href: "/collections/designer-pret",
    gridClass: "lg:col-span-5 min-h-[250px] lg:min-h-[245px]",
  },
  {
    title: "Festive & Party Couture",
    subtitle: "Royal crimson velvet shirts, heavy gold tilla embroidery, and celebratory flared anarkali kalidars for weddings and Eid.",
    tag: "ROYAL FESTIVE",
    priceNote: "From ৳4,950",
    image: ASSETS.img4,
    href: "/collections/festive-party",
    gridClass: "lg:col-span-5 min-h-[250px] lg:min-h-[245px]",
  },
  {
    title: "Organza & Chiffon Luxury",
    subtitle: "Beechtree & designer pastel organza ensembles with delicate ivory threadwork, matching slips, and scallop dupattas.",
    tag: "PASTEL ORGANZA",
    priceNote: "From ৳4,650",
    image: ASSETS.img5,
    href: "/collections/organza-chiffon",
    gridClass: "lg:col-span-6 min-h-[260px] lg:min-h-[300px]",
  },
  {
    title: "Silk & Velvet Luxury",
    subtitle: "Rich jewel-toned velvet shirts, raw silk trousers, and heavily embroidered shawl ensembles for evening elegance.",
    tag: "ROYAL VELVET",
    priceNote: "From ৳4,950",
    image: ASSETS.img6,
    href: "/collections/silk-velvet",
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#6C3483]/30 mb-3 shadow-xs">
              <Sparkles className="h-3 w-3 text-[#6C3483]" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#191426]">
                ORIGINAL PAKISTANI COLLECTIONS
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#191426] font-heading tracking-tight">
              The 365 Fashion Wardrobe
            </h2>
            <p className="mt-3 text-sm md:text-base text-neutral-600 font-medium">
              Explore 100% genuine Pakistani luxury lawn, handcrafted organza pret, festive Eid couture, and designer anarkali gowns with Open Parcel inspection across Bangladesh.
            </p>
          </div>

          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#191426] hover:text-[#6C3483] transition-colors group/link self-start md:self-end"
          >
            <span>View All Categories</span>
            <ArrowUpRight className="h-4 w-4 text-[#6C3483] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
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
              className={`group relative overflow-hidden rounded-3xl border border-[#E8DFD3] bg-neutral-900 shadow-sm hover:shadow-xl transition-all duration-500 hover:border-[#6C3483]/60 ${item.gridClass}`}
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
                  <span className="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[9px] md:text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#F39C12]">
                    {item.tag}
                  </span>
                  <span className="text-xs font-bold font-mono text-white/90 bg-black/40 px-2.5 py-1 rounded-lg backdrop-blur-sm border border-white/10">
                    {item.priceNote}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white font-heading tracking-tight flex items-center justify-between">
                    <span>{item.title}</span>
                    <div className="size-8 rounded-full bg-white/20 group-hover:bg-[#6C3483] flex items-center justify-center text-white transition-colors duration-300 shrink-0">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-300 line-clamp-2 max-w-lg leading-relaxed font-sans font-medium">
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
