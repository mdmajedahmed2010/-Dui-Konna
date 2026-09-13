"use client";

/**
 * 3 sis xclusive — Asymmetric Haute Bento Showcase
 * Breaks visual monotony with dynamic, magazine-style bento card architecture
 * Nayasarak Point, Sylhet — https://www.facebook.com/3.sis.xclusive/
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
    title: "Pakistani Lawn Collection",
    subtitle: "Authentic pure lawn 3-piece sets with intricate threadwork neckline and lightweight dupattas.",
    tag: "EID LAWN EDIT",
    priceNote: "From ৳3,850",
    image: ASSETS.img7,
    href: "/collections/pakistani-lawn",
    gridClass: "lg:col-span-7 lg:row-span-2 min-h-[380px] lg:min-h-[520px]",
    accentColor: "#8B263E",
  },
  {
    title: "Designer Luxury & Pre-Orders",
    subtitle: "100% Original Sadabahar, Jaz & Russian silk handcrafted couture with pure silk dupattas.",
    tag: "100% ORIGINAL PRET",
    priceNote: "From ৳12,800",
    image: ASSETS.img2,
    href: "/collections/designer-luxury",
    gridClass: "lg:col-span-5 min-h-[250px] lg:min-h-[245px]",
  },
  {
    title: "Party Wear & Festive Organza",
    subtitle: "Handcrafted adda work, zardozi needlework, and sheer organza dupattas for wedding soirees.",
    tag: "ROYAL ZARDOZI",
    priceNote: "From ৳6,250",
    image: ASSETS.img3,
    href: "/collections/party-wear",
    gridClass: "lg:col-span-5 min-h-[250px] lg:min-h-[245px]",
  },
  {
    title: "Signature Farsi & Co-ords",
    subtitle: "Pure breathable cotton farsi sets, farsi salwars, and effortless everyday boutique luxury.",
    tag: "DAILY CHIC",
    priceNote: "From ৳2,250",
    image: ASSETS.img1,
    href: "/collections/farsi-sets",
    gridClass: "lg:col-span-6 min-h-[260px] lg:min-h-[300px]",
  },
  {
    title: "Velvet & Winter Luxury",
    subtitle: "Rich micro-velvet embroidered kaftans and royal festive suits for celebratory evenings.",
    tag: "WINTER COUTURE",
    priceNote: "From ৳6,500",
    image: ASSETS.img6,
    href: "/collections/velvet-luxury",
    gridClass: "lg:col-span-6 min-h-[260px] lg:min-h-[300px]",
  },
];

export function BentoShowcase() {
  return (
    <section className="py-16 md:py-28 bg-[#FAF7F5] border-b border-[#EDE1D8] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D4AF37]/40 mb-3 shadow-xs">
              <Sparkles className="h-3 w-3 text-[#D4AF37]" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#8B263E]">
                CURATED COLLECTIONS
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E1622] font-heading tracking-tight">
              The 3 Sis Wardrobe
            </h2>
            <p className="mt-3 text-sm md:text-base text-neutral-600 font-medium">
              Explore authentic Pakistani luxury lawn, handcrafted Sadabahar pret, festive zardozi party wear, and pure cotton farsi sets in Sylhet.
            </p>
          </div>

          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#8B263E] hover:text-[#4A0E4E] transition-colors group/link self-start md:self-end"
          >
            <span>View All Categories</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 text-[#D4AF37]" />
          </Link>
        </div>

        {/* ── Asymmetric Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 md:gap-6">
          {BENTO_ITEMS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group/card relative overflow-hidden rounded-3xl border border-[#EDE1D8] bg-neutral-900 shadow-sm hover:shadow-xl transition-all duration-500 ${item.gridClass}`}
            >
              <Link href={item.href} className="block h-full w-full relative">
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  quality={90}
                  unoptimized
                  className="object-cover transition-transform duration-[1200ms] group-hover/card:scale-108"
                />

                {/* Cinematic multi-stop gradient for readable contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 transition-opacity duration-300" />

                {/* Top Tag & Price Note */}
                <div className="absolute top-5 inset-x-5 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white text-[10px] font-extrabold uppercase tracking-[0.2em] shadow-xs">
                    {item.tag}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#8B263E]/85 border border-[#D4AF37]/50 backdrop-blur-md text-[#F3C649] text-[10px] font-bold tracking-wider">
                    {item.priceNote}
                  </span>
                </div>

                {/* Bottom Content & Hover Icon */}
                <div className="absolute bottom-5 inset-x-5 z-10 text-white">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold font-heading group-hover/card:text-[#F3C649] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-neutral-300 mt-1 line-clamp-2 max-w-md font-sans">
                        {item.subtitle}
                      </p>
                    </div>

                    <div className="flex items-center justify-center size-10 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white group-hover/card:bg-[#D4AF37] group-hover/card:text-[#8B263E] transition-all duration-300 group-hover/card:scale-110 shrink-0">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
