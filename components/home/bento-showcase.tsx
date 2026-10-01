"use client";

/**
 * Shopping Queen by Orni — Asymmetric Haute Bento Showcase
 * Magazine-style bento card architecture showcasing Pakistani lawn, partywear & skincare
 * Dhaka, Bangladesh • Facebook: https://www.facebook.com/Shoppingqueenbyorni
 * 190,500+ Followers • Open Parcel Inspection Nationwide
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
    title: "Royal Pakistani Lawn Collection",
    subtitle:
      "প্রিমিয়াম সুইস কটন লন, ডিজিটাল ফ্লোরাল প্রিন্ট, সূক্ষ্ম নেকলাইন সুতার কাজ ও শিফন দোপাট্টা সমৃদ্ধ খাঁটি পাকিস্তানি ড্রেস সিরিজ।",
    tag: "PAKISTANI LAWN",
    priceNote: "From ৳1,550",
    image: ASSETS.product1,
    href: "/collections/pakistani-lawn",
    gridClass: "lg:col-span-7 lg:row-span-2 min-h-[380px] lg:min-h-[520px]",
    accentColor: "#6B1D2F",
  },
  {
    title: "Exclusive Festive Partywear",
    subtitle:
      "বিয়ে ও দাওয়াতের জন্য ভারী জারি, সিকোয়েন্স ও কাটওয়ার্ক এমব্রয়ডারি অর্গাঞ্জা ও জর্জেট গাউন।",
    tag: "ROYAL PARTYWEAR",
    priceNote: "From ৳2,450",
    image: ASSETS.product5,
    href: "/collections/festive-party",
    gridClass: "lg:col-span-5 min-h-[250px] lg:min-h-[245px]",
  },
  {
    title: "Orni Signature Edit",
    subtitle:
      "অর্ণি ইসলাম কর্তৃক নিজে স্টাইলকৃত ও উপস্থাপিত এক্সক্লুসিভ ডিজাইনার পোশাক।",
    tag: "ORNI SIGNATURE",
    priceNote: "From ৳1,850",
    image: ASSETS.product6,
    href: "/collections/orni-signature",
    gridClass: "lg:col-span-5 min-h-[250px] lg:min-h-[245px]",
  },
  {
    title: "Kim Whitening Pearl & Snowlotus Cream",
    subtitle:
      "কিছু আত্মবিশ্বাসী প্রতিদিন, রাতের যত্নে প্রাকৃতিক উজ্জ্বলতা ✨ প্রাকৃতিক উপাদান ও কেমিক্যালমুক্ত রূপচর্চা।",
    tag: "GLOW ESSENTIAL",
    priceNote: "Only ৳850",
    image: ASSETS.product12,
    href: "/collections/skincare-glow",
    gridClass: "lg:col-span-6 min-h-[260px] lg:min-h-[300px]",
  },
  {
    title: "Traditional Chunri & Handloom Cotton",
    subtitle:
      "ঐতিহ্যবাহী বান্ধনি ও পিওর কটন হ্যান্ডলুম থ্রি-পিস সেট — আরামদায়ক ও উৎসবমুখর।",
    tag: "CHUNRI & COTTON",
    priceNote: "From ৳1,450",
    image: ASSETS.product9,
    href: "/collections/chunri-traditional",
    gridClass: "lg:col-span-6 min-h-[260px] lg:min-h-[300px]",
  },
];

export function BentoShowcase() {
  return (
    <section className="py-16 md:py-28 bg-[#FAF6F0] border-b border-[#E8DFD3] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D4AF37]/50 mb-3 shadow-xs">
              <Crown className="h-3 w-3 text-[#D4AF37]" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#6B1D2F]">
                ORNI&apos;S CURATED PICKS
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] font-heading tracking-tight">
              Shopping Queen Wardrobe
            </h2>
            <p className="mt-3 text-sm md:text-base text-neutral-600 font-medium">
              দেশী-বিদেশী বিভিন্ন ব্র্যান্ডের মেয়েদের সালোয়ার কামিজ সুলভ মূল্যে। ডেলিভারিম্যানের সামনে পার্সেল খুলে চেক করে পেমেন্ট করার নিশ্চিন্ত সুবিধাসহ বাংলাদেশের সর্বত্র ক্যাশ অন হোম ডেলিভারি।
            </p>
          </div>

          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#6B1D2F] hover:text-[#D4AF37] transition-colors group/link self-start md:self-end"
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
