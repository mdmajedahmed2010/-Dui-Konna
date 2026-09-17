/**
 * 365 Fashion House — 404 Not Found Page
 * Authentic Pakistani Attires & Designer Couture in Bangladesh
 * Hub: Dhaka - 1206, Bangladesh
 */

import Link from "next/link";
import Image from "next/image";
import { Sparkles, Home } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-[#FAF7F2]">
      <div className="text-center space-y-8 max-w-lg">
        {/* Brand Logo */}
        <div className="flex justify-center">
          <div className="relative size-24 rounded-full overflow-hidden ring-4 ring-[#D4AC0D]/40 shadow-xl border-2 border-white">
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
          <p className="text-8xl md:text-9xl font-bold text-[#6C3483]/10 leading-none font-serif">404</p>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#191426] font-heading">
            পেজটি পাওয়া যাচ্ছে না
          </h1>
          <p className="text-sm text-neutral-600 leading-relaxed max-w-sm mx-auto font-medium">
            দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি সরানো হয়েছে বা আর নেই। {BUSINESS.NAME}-এর ১০০% আসল পাকিস্তানি কালেকশন দেখতে হোমপেজে ফিরে যান।
          </p>
        </div>

        {/* Brand Tagline */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#D4AC0D]/40 shadow-xs">
          <Sparkles className="h-3.5 w-3.5 text-[#F39C12]" />
          <p className="text-[11px] text-[#6C3483] font-bold tracking-wide uppercase">
            {BUSINESS.NAME} — {BUSINESS.TAGLINE}
          </p>
          <Sparkles className="h-3.5 w-3.5 text-[#F39C12]" />
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-[#6C3483] text-[#F39C12] font-bold text-xs uppercase tracking-[0.16em] hover:bg-[#5B2C6F] transition-all shadow-md active:scale-[0.98] border border-[#D4AC0D]/40"
          >
            <Home className="h-4 w-4 text-[#F39C12]" />
            <span>হোম পেজে যান</span>
          </Link>
          <Link
            href="/collections/pakistani-lawn"
            className="inline-flex items-center justify-center h-12 px-7 rounded-full border border-[#E8DFD5] bg-white text-[#191426] text-xs font-bold uppercase tracking-[0.14em] hover:bg-purple-50 hover:border-[#6C3483] transition-all shadow-xs"
          >
            কালেকশন দেখুন
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="pt-4 border-t border-[#E8DFD5]">
          <p className="text-xs text-neutral-500 mb-3 font-medium">জনপ্রিয় পাকিস্তানি কালেকশন:</p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-[#191426]">
            <Link href="/collections/pakistani-lawn" className="hover:underline hover:text-[#6C3483]">
              Pakistani Lawn
            </Link>
            <span className="text-[#D4AC0D]">•</span>
            <Link href="/collections/organza-chiffon" className="hover:underline hover:text-[#6C3483]">
              Organza & Chiffon
            </Link>
            <span className="text-[#D4AC0D]">•</span>
            <Link href="/collections/festive-party" className="hover:underline hover:text-[#6C3483]">
              Festive & Party
            </Link>
            <span className="text-[#D4AC0D]">•</span>
            <Link href="/collections/silk-velvet" className="hover:underline hover:text-[#6C3483]">
              Silk & Velvet
            </Link>
            <span className="text-[#D4AC0D]">•</span>
            <Link href="/contact" className="hover:underline hover:text-[#6C3483]">
              যোগাযোগ ও সহায়তা
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
