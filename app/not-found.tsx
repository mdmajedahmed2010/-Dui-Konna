/**
 * Closet by Tanzz — 404 Not Found Page
 * International Luxury Collection & Highest Quality Women's Fashion
 * Showroom: Natore Tower, Rajlokkhi, Uttara, Dhaka
 */

import Link from "next/link";
import Image from "next/image";
import { Sparkles, Home } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-[#FAF8F5]">
      <div className="text-center space-y-8 max-w-lg">
        {/* Brand Logo */}
        <div className="flex justify-center">
          <div className="relative size-24 rounded-full overflow-hidden ring-4 ring-[#C5A059]/40 shadow-xl border-2 border-white">
            <Image
              src="/logo.jpg"
              alt={BUSINESS.NAME}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 404 Text */}
        <div className="space-y-3">
          <p className="text-8xl md:text-9xl font-bold text-[#121212]/10 leading-none font-serif">404</p>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#121212] font-heading">
            পেজটি পাওয়া যাচ্ছে না
          </h1>
          <p className="text-sm text-neutral-600 leading-relaxed max-w-sm mx-auto font-medium">
            দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি সরানো হয়েছে বা আর নেই। Closet by Tanzz-এর এক্সক্লুসিভ কালেকশন দেখতে হোমপেজে ফিরে যান।
          </p>
        </div>

        {/* Brand Tagline */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#C5A059]/40 shadow-xs">
          <Sparkles className="h-3.5 w-3.5 text-[#C5A059]" />
          <p className="text-[11px] text-[#121212] font-bold tracking-wide uppercase">
            Closet by Tanzz — Wear Tanzz, Wear confidence
          </p>
          <Sparkles className="h-3.5 w-3.5 text-[#C5A059]" />
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-[#121212] text-[#C5A059] font-bold text-xs uppercase tracking-[0.16em] hover:bg-[#222222] transition-all shadow-md active:scale-[0.98] border border-[#C5A059]/40"
          >
            <Home className="h-4 w-4 text-[#C5A059]" />
            <span>হোম পেজে যান</span>
          </Link>
          <Link
            href="/collections/zam-zam-lawn"
            className="inline-flex items-center justify-center h-12 px-7 rounded-full border border-[#E8DFD5] bg-white text-[#121212] text-xs font-bold uppercase tracking-[0.14em] hover:bg-[#FAF8F5] hover:border-[#121212] transition-all shadow-xs"
          >
            কালেকশন দেখুন
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="pt-4 border-t border-[#E8DFD5]">
          <p className="text-xs text-neutral-500 mb-3 font-medium">জনপ্রিয় কালেকশন:</p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-[#121212]">
            <Link href="/collections/zam-zam-lawn" className="hover:underline hover:text-[#C5A059]">
              Zam Zam Lawn
            </Link>
            <span className="text-[#C5A059]">•</span>
            <Link href="/collections/designer-boutique" className="hover:underline hover:text-[#C5A059]">
              Designer Boutique
            </Link>
            <span className="text-[#C5A059]">•</span>
            <Link href="/collections/festive-party" className="hover:underline hover:text-[#C5A059]">
              Festive & Party
            </Link>
            <span className="text-[#C5A059]">•</span>
            <Link href="/collections/artisan-block" className="hover:underline hover:text-[#C5A059]">
              Artisan Block
            </Link>
            <span className="text-[#C5A059]">•</span>
            <Link href="/contact" className="hover:underline hover:text-[#C5A059]">
              শোরুম ও যোগাযোগ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
