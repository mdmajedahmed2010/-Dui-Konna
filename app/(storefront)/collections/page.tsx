/**
 * Shopping Queen by Orni — All Collections Page
 * Route: /collections
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { prisma } from "@/lib/db";
import { CATEGORIES } from "@/lib/demo-data";
import { BUSINESS } from "@/lib/constants";

export const revalidate = 60;

export const metadata: Metadata = {
  title: `All Collections — ${BUSINESS.NAME}`,
  description:
    `Explore exclusive ${BUSINESS.NAME} collections — Pakistani Lawn 3-Piece, Festive Partywear, Kim Whitening Cream, and Handloom Cotton.`,
};

export default async function CollectionsPage() {
  const curatedCollections = [
    {
      title: "Pakistani Lawn 3-Piece",
      image: "/shoppingqueen-assets/sq-product-01-royal-blue.jpg",
      href: "/collections/pakistani-lawn-three-piece",
      tag: "ORIGINAL LAWN",
      desc: "১০০% পিওর লাক্সারি কটন পাকিস্তানি লন থ্রি-পিস, আরামদায়ক শিফন বা কটন ওড়না সহ।",
    },
    {
      title: "Festive & Partywear Couture",
      image: "/shoppingqueen-assets/sq-product-03-rose-pink.jpg",
      href: "/collections/festive-partywear",
      tag: "ORNI SIGNATURE",
      desc: "বিয়ে, পার্টি ও উৎসবের জন্য গর্জিয়াস জারদৌসি ও সিকুইন কাজ করা এক্সক্লুসিভ কালেকশন।",
    },
    {
      title: "Kim Whitening Pearl Skincare",
      image: "/shoppingqueen-assets/sq-product-12-kim-whitening-cream.avif",
      href: "/collections/kim-whitening-cream",
      tag: "100% THAI GENUINE",
      desc: "আসল থাই কিম স্নোলোটাস ও মুক্তা ভস্ম সমৃদ্ধ নাইট ক্রিম (20g) — দাগহীন প্রাকৃতিক উজ্জ্বলতা।",
    },
    {
      title: "Handloom Cotton & Chunri",
      image: "/shoppingqueen-assets/sq-product-04-emerald-green.jpg",
      href: "/collections/handloom-cotton-chunri",
      tag: "HERITAGE WEAVES",
      desc: "দেশীয় ঐতিহ্যবাহী খাঁটি সুতি ও চুনরি প্রিন্টের মার্জিত ৩-পিস পোশাক।",
    },
    {
      title: "Black & Gold Festive Edit",
      image: "/shoppingqueen-assets/sq-product-11-black-gold-festive.jpg",
      href: "/collections/festive-partywear",
      tag: "ROYAL NOIR",
      desc: "গভীর কালো ও অ্যান্টিক গোল্ড জরির রাজকীয় সংমিশ্রণে প্রস্তুত পার্টি পোশাক।",
    },
    {
      title: "Orni Signature Luxury Suite",
      image: "/shoppingqueen-assets/banner.avif",
      href: "/collections/pakistani-lawn-three-piece",
      tag: "FOUNDER'S CHOICE",
      desc: "অর্ণি ইসলামের ফেসবুক লাইভে প্রদর্শিত বেস্টসেলার ড্রেস ও বিশেষ কম্বো প্যাক।",
    },
  ];

  // Also fetch DB categories so users can easily browse by category too
  let categories = await prisma.category.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
  });

  if (categories.length === 0) {
    categories = CATEGORIES.map((cat, i) => ({
      id: `demo-cat-${i}`,
      name: cat.name,
      slug: cat.slug,
      parentId: null,
      image: cat.image,
      sortOrder: i,
      isActive: true,
      seoTitle: null,
      seoDesc: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
  }

  return (
    <div className="min-h-screen bg-[#FAF6F0]">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
        <Breadcrumb items={[{ label: "All Collections" }]} />

        {/* Luxury Header */}
        <div className="mt-10 mb-14 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full border border-[#6B1D2F]/40 bg-[#6B1D2F]/5 text-[#6B1D2F] text-[10px] uppercase tracking-[0.28em] font-bold mb-4">
            ✦ SHOPPING QUEEN BY ORNI CURATIONS ✦
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#6B1D2F] font-serif">
            All Collections
          </h1>
          <div className="w-20 h-[2px] bg-[#D4AF37] mx-auto mt-5" />
          <p className="text-neutral-600 mt-4 text-sm md:text-base max-w-xl mx-auto font-sans">
            অরিজিনাল পাকিস্তানি লন, গর্জিয়াস পার্টিওয়্যার এবং খাঁটি থাই কিম পার্ল ও স্নোলোটাস স্কিনকেয়ারের পূর্ণাঙ্গ কালেকশন।
          </p>
        </div>

        {/* Curated Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-9 mb-24">
          {curatedCollections.map((col) => (
            <Link
              key={col.title}
              href={col.href}
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 aspect-[4/5] bg-neutral-900 block border border-[#E8DFD5] hover:border-[#D4AF37]"
            >
              <Image
                src={col.image}
                alt={col.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-[1200ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-3.5 border border-[#D4AF37]/25 group-hover:border-[#D4AF37]/70 rounded-xl transition-all duration-500 pointer-events-none z-10" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-[9.5px] uppercase tracking-[0.24em] font-bold mb-2.5">
                  ✦ {col.tag}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold font-serif text-white group-hover:text-[#D4AF37] transition-colors">
                  {col.title}
                </h2>
                <p className="text-xs md:text-sm text-neutral-300 mt-2 line-clamp-2 leading-relaxed">
                  {col.desc}
                </p>
                <span className="text-[11px] text-[#D4AF37] uppercase tracking-[0.16em] font-bold mt-4 inline-flex items-center gap-1.5 group-hover:translate-x-1.5 transition-transform">
                  Explore Collection →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Category Switcher */}
        <div className="border-t border-[#E8DFD5] pt-12 pb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-serif text-[#1A1A1A]">Shop by Category</h3>
            <Link
              href="/categories"
              className="text-xs uppercase tracking-widest font-bold text-[#6B1D2F] hover:underline"
            >
              View All Categories →
            </Link>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/collections/${cat.slug}`}
                className="px-4 py-2 rounded-xl border border-[#E8DFD5] bg-white hover:bg-[#6B1D2F] hover:text-white transition-colors text-xs font-semibold uppercase tracking-wider"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
