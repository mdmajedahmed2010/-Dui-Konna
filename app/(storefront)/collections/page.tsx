/**
 * Dui Konna (দুই কন্যা) — All Collections Page
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
    `Explore exclusive ${BUSINESS.NAME} collections — Authentic Dhakai Muslin Sarees, Dhakai Jamdani, Bridal Crimson Muslin, Luxury Karchupi & Pastel Heritage.`,
};

export default async function CollectionsPage() {
  const curatedCollections = [
    {
      title: "Authentic Dhakai Muslin",
      image: "/duikonna-assets/fb_cover_landscape.jpg",
      href: "/collections/dhakai-muslin-saree",
      tag: "100% PURE MUSLIN",
      desc: "প্রাচীন ঐতিহ্যবাহী খাঁটি ঢাকাই মসলিন শাড়ি — অসাধারণ কোমলতা, আভিজাত্য ও ১২ হাত স্ট্যান্ডার্ড ড্র্যাপ।",
    },
    {
      title: "Dhakai Jamdani Heritage",
      image: "/duikonna-assets/fb_photo_2.jpg",
      href: "/collections/dhakai-jamdani",
      tag: "HANDWOVEN CRAFT",
      desc: "নিখুঁত সুতোয় হাতে বোনা ঢাকাই জামদানি — উৎসব ও ঐতিহ্যের অপরূপ মিলন।",
    },
    {
      title: "Bridal Crimson Muslin",
      image: "/duikonna-assets/fb_photo_4.jpg",
      href: "/collections/bridal-red-muslin",
      tag: "ROYAL BRIDAL",
      desc: "বিয়ে, বউভাত ও রাজকীয় সন্ধ্যার জন্য খাঁটি লাল মসলিন শাড়ি স্বর্ণালি জরির কারুকাজে।",
    },
    {
      title: "Luxury Karchupi & Organza",
      image: "/duikonna-assets/product-03-royal-yellow.jpg",
      href: "/collections/luxury-karchupi-saree",
      tag: "COUTURE EMBROIDERY",
      desc: "নিপুণ হাতের কারচুপি, কাটদানা ও জারদৌসি কারুকাজ সংবলিত রাজকীয় ডিজাইনার শাড়ি।",
    },
    {
      title: "Pastel Heritage Muslin",
      image: "/duikonna-assets/fb_photo_3.jpg",
      href: "/collections/pastel-heritage-muslin",
      tag: "ELEGANT PASTELS",
      desc: "হালকা পিচ, ল্যাভেন্ডার ও মিন্ট শেডের আধুনিক মার্জিত ঐতিহ্যের মেলবন্ধন।",
    },
    {
      title: "Shamima Nasrin Curated Masterpieces",
      image: "/duikonna-assets/fb_photo_6.jpg",
      href: "/collections/dhakai-muslin-saree",
      tag: "FOUNDER'S CHOICE",
      desc: "স্বত্বাধিকারী শামীমা নাসরিনের বিশেষ পছন্দের মাস্টারপিস শাড়ি ও নিকুঞ্জ-২ শোরুম স্পেশাল।",
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
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
        <Breadcrumb items={[{ label: "All Collections" }]} />

        {/* Luxury Header */}
        <div className="mt-10 mb-14 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full border border-[#8B0000]/30 bg-[#8B0000]/5 text-[#8B0000] text-[10px] uppercase tracking-[0.28em] font-bold mb-4">
            ✦ DUI KONNA (দুই কন্যা) CURATIONS ✦
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#8B0000] font-serif">
            All Collections
          </h1>
          <div className="w-20 h-[2px] bg-[#D4AF37] mx-auto mt-5" />
          <p className="text-neutral-700 mt-4 text-sm md:text-base max-w-xl mx-auto font-sans">
            ১০০% খাঁটি ঐতিহ্যবাহী ঢাকai মসলিন, রাজকীয় ব্রাইডাল রেড, হাতে বোনা জামদানি এবং এক্সক্লুসিভ কারচুপি কাজের শাড়ির পূর্ণাঙ্গ সম্ভার।
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
            <h3 className="text-xl font-serif text-[#181513]">Shop by Category</h3>
            <Link
              href="/categories"
              className="text-xs uppercase tracking-widest font-bold text-[#8B0000] hover:underline"
            >
              View All Categories →
            </Link>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/collections/${cat.slug}`}
                className="px-4 py-2 rounded-xl border border-[#E8DFD5] bg-white hover:bg-[#8B0000] hover:text-white transition-colors text-xs font-semibold uppercase tracking-wider"
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
