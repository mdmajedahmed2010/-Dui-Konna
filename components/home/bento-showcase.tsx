"use client";

/**
 * Dui Konna (দুই কন্যা) — Asymmetric Haute Bento Showcase
 * Showcasing Authentic Dhakai Muslin, Dhakai Jamdani & Luxury Karchupi Sarees
 * Nikunja-2, Khilkhet, Dhaka-1229 • Facebook: https://www.facebook.com/duikonna01
 * 484,000+ Followers • Open Parcel Inspection Nationwide
 */

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Crown } from "lucide-react";
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
    title: "Exclusive Dhakai Muslin Saree",
    subtitle:
      "খাঁটি ঢাকাই মসলিনের রেশমি জমিন, মাস্টার উইভারদের নিখুঁত তাঁত বুনন ও রয়্যাল জরির অনবদ্য মোটিফ। বাংলার ঐতিহ্যবাহী আভিজাত্যের শিখর।",
    tag: "EXCLUSIVE MUSLIN",
    priceNote: "From ৳21,500",
    image: ASSETS.product3,
    href: "/categories/exclusive-muslin-saree",
    gridClass: "lg:col-span-7 lg:row-span-2 min-h-[380px] lg:min-h-[520px]",
    accentColor: "#8B0000",
  },
  {
    title: "Bridal & Festive Red Muslin",
    subtitle:
      "বিয়ে, পানচিনি ও মহোৎসবের জন্য গাঢ় লাল ও রয়্যাল গোল্ডেন জরির খাঁটি ঢাকাই মসলিন শাড়ি।",
    tag: "BRIDAL RED",
    priceNote: "From ৳25,500",
    image: ASSETS.heroBanner,
    href: "/categories/bridal-festive-red-muslin",
    gridClass: "lg:col-span-5 min-h-[250px] lg:min-h-[245px]",
  },
  {
    title: "Luxury Karchupi & Organza",
    subtitle:
      "ডাস্টি লিলাক ও ল্যাভেন্ডার প্যাস্টেল শেডে সূক্ষ্ম কারচুপি কাজ, পার্ল ও স্টোনের চোখজুড়ানো কারুকাজ।",
    tag: "KARCHUPI COUTURE",
    priceNote: "From ৳28,000",
    image: ASSETS.product8,
    href: "/categories/luxury-karchupi-organza",
    gridClass: "lg:col-span-5 min-h-[250px] lg:min-h-[245px]",
  },
  {
    title: "Authentic Dhakai Jamdani",
    subtitle:
      "পার্ল হোয়াইট ও মাল্টিকালার জ্যামিতিক নকশার ঐতিহ্যবাহী জামদানি শাড়ি—বাংলার শতবর্ষী গৌরব।",
    tag: "DHAKAI JAMDANI",
    priceNote: "From ৳27,500",
    image: ASSETS.product5,
    href: "/categories/dhakai-jamdani-saree",
    gridClass: "lg:col-span-6 min-h-[260px] lg:min-h-[300px]",
  },
  {
    title: "Pastel Heritage Handloom Muslin",
    subtitle:
      "মিন্ট গ্রিন, পেস্তা ও স্লেট অ্যাশ শেডের স্নিগ্ধ ও আরামদায়ক তাঁত বোনা শাড়ি কালেকশন।",
    tag: "PASTEL HERITAGE",
    priceNote: "From ৳21,500",
    image: ASSETS.product2,
    href: "/categories/pastel-heritage-muslin",
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D4AF37]/50 mb-3 shadow-xs">
              <Crown className="h-3 w-3 text-[#D4AF37]" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#8B0000]">
                SHAMIMA NASRIN&apos;S CURATED PICKS
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] font-heading tracking-tight">
              Dui Konna Couture Wardrobe
            </h2>
            <p className="mt-3 text-sm md:text-base text-neutral-600 font-medium">
              দুই কন্যার নিজস্ব ডিজাইনে প্রস্তুতকৃত খাঁটি ঢাকাই মসলিন, জামদানি ও লাক্সারি কারচুপি শাড়ির এক্সক্লুসিভ সম্ভার। ডেলিভারিম্যানের সামনে পার্সেল খুলে দেখে পেমেন্ট করার নিশ্চিন্ত সুবিধাসহ বাংলাদেশের সর্বত্র ক্যাশ অন হোম ডেলিভারি।
            </p>
          </div>

          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#8B0000] hover:text-[#D4AF37] transition-colors group/link self-start md:self-end"
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
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase border border-white/20">
                    {item.tag}
                  </span>
                  <span className="text-white/90 text-xs font-bold bg-black/40 px-3 py-1 rounded-full backdrop-blur-xs border border-white/10">
                    {item.priceNote}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white font-heading leading-tight group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-300 line-clamp-2 max-w-md">
                    {item.subtitle}
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] pt-1 uppercase tracking-wider">
                    <span>Shop Collection</span>
                    <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
