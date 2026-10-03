/**
 * Dui Konna (দুই কন্যা) — 404 Not Found Page
 * Authentic Dhakai Muslin & Luxury Sarees
 * Showroom: House #21/B, Road #01, Nikunja-2, Khilkhet, Dhaka-1229
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
          <div className="relative size-24 rounded-full overflow-hidden ring-4 ring-[#D4AF37]/40 shadow-xl border-2 border-white">
            <Image
              src="/duikonna-assets/fb_logo_square.jpg"
              alt={BUSINESS.NAME}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 404 Text */}
        <div className="space-y-3">
          <p className="text-8xl md:text-9xl font-bold text-[#8B0000]/10 leading-none font-serif">404</p>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#181513] font-serif">
            পেজটি পাওয়া যাচ্ছে না
          </h1>
          <p className="text-sm text-neutral-600 leading-relaxed max-w-sm mx-auto font-medium">
            দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি সরানো হয়েছে বা আর নেই। {BUSINESS.NAME}-এর ১০০% আসল ঐতিহ্যবাহী ঢাকাই মসলিন ও লাক্সারি শাড়ির কালেকশন দেখতে হোমপেজে ফিরে যান।
          </p>
        </div>

        {/* Brand Tagline */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#D4AF37]/40 shadow-xs">
          <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
          <p className="text-[11px] text-[#8B0000] font-bold tracking-wide uppercase">
            {BUSINESS.NAME} — {BUSINESS.TAGLINE}
          </p>
          <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-[#8B0000] text-[#D4AF37] font-bold text-xs uppercase tracking-[0.16em] hover:bg-[#660000] transition-all shadow-md active:scale-[0.98] border border-[#D4AF37]/40"
          >
            <Home className="h-4 w-4 text-[#D4AF37]" />
            <span>হোম পেজে যান</span>
          </Link>
          <Link
            href="/collections"
            className="inline-flex items-center justify-center h-12 px-7 rounded-full border border-[#E8DFD5] bg-white text-[#181513] text-xs font-bold uppercase tracking-[0.14em] hover:bg-[#8B0000]/5 hover:border-[#8B0000] transition-all shadow-xs"
          >
            কালেকশন দেখুন
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="pt-4 border-t border-[#E8DFD5]">
          <p className="text-xs text-neutral-500 mb-3 font-medium">জনপ্রিয় শাড়ি কালেকশন:</p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-[#181513]">
            <Link href="/collections/dhakai-muslin-saree" className="hover:underline hover:text-[#8B0000]">
              ঢাকাই মসলিন শাড়ি
            </Link>
            <span className="text-[#D4AF37]">•</span>
            <Link href="/collections/dhakai-jamdani" className="hover:underline hover:text-[#8B0000]">
              ঢাকাই জামদানি
            </Link>
            <span className="text-[#D4AF37]">•</span>
            <Link href="/collections/bridal-red-muslin" className="hover:underline hover:text-[#8B0000]">
              ব্রাইডাল রেড মসলিন
            </Link>
            <span className="text-[#D4AF37]">•</span>
            <Link href="/collections/luxury-karchupi-saree" className="hover:underline hover:text-[#8B0000]">
              লাক্সারি কারচুপি শাড়ি
            </Link>
            <span className="text-[#D4AF37]">•</span>
            <Link href="/contact" className="hover:underline hover:text-[#8B0000]">
              নিকুঞ্জ-২ শোরুম ও যোগাযোগ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
