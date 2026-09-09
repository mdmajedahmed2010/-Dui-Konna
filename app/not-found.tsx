/**
 * Enaya's | Sylhet — 404 Not Found Page
 * Authentic Pakistani Luxury Suits & Designer Collections
 * Outlet: Parents View 1st Floor, 20 Nayasarak Point, Sylhet
 */

import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowLeft, Home } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-[#faf7f5]">
      <div className="text-center space-y-8 max-w-lg">
        {/* Brand Logo */}
        <div className="flex justify-center">
          <div className="relative size-24 rounded-full overflow-hidden ring-4 ring-[#D4AF37]/40 shadow-xl border-2 border-white">
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
          <p className="text-8xl md:text-9xl font-bold text-[#3D0B3D]/10 leading-none font-serif">404</p>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1e1622] font-heading">
            পেজটি পাওয়া যাচ্ছে না
          </h1>
          <p className="text-sm text-neutral-600 leading-relaxed max-w-sm mx-auto font-medium">
            দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি সরানো হয়েছে বা আর নেই। Enaya&apos;s | Sylhet-এর এক্সক্লুসিভ কালেকশন দেখতে হোমপেজে ফিরে যান।
          </p>
        </div>

        {/* Brand Tagline */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#D4AF37]/40 shadow-xs">
          <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
          <p className="text-[11px] text-[#3D0B3D] font-bold tracking-wide uppercase">
            Enaya&apos;s | Sylhet — 100% Original Pakistani Pret
          </p>
          <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-[#3D0B3D] text-white font-bold text-xs uppercase tracking-[0.16em] hover:bg-[#280728] transition-all shadow-md active:scale-[0.98] border border-[#D4AF37]/40"
          >
            <Home className="h-4 w-4 text-[#D4AF37]" />
            <span>হোম পেজে যান</span>
          </Link>
          <Link
            href="/collections/pakistani-lawn"
            className="inline-flex items-center justify-center h-12 px-7 rounded-full border border-[#ebdcd0] bg-white text-[#3D0B3D] text-xs font-bold uppercase tracking-[0.14em] hover:bg-[#faf7f5] hover:border-[#3D0B3D] transition-all shadow-xs"
          >
            কালেকশন দেখুন
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="pt-4 border-t border-[#ebdcd0]">
          <p className="text-xs text-neutral-500 mb-3 font-medium">জনপ্রিয় কালেকশন:</p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-[#3D0B3D]">
            <Link href="/collections/pakistani-lawn" className="hover:underline">
              Pakistani Lawn
            </Link>
            <span className="text-[#D4AF37]">•</span>
            <Link href="/collections/designer-pret" className="hover:underline">
              Designer Pret
            </Link>
            <span className="text-[#D4AF37]">•</span>
            <Link href="/collections/party-wear" className="hover:underline">
              Party Wear
            </Link>
            <span className="text-[#D4AF37]">•</span>
            <Link href="/collections/velvet-luxury" className="hover:underline">
              Velvet Luxury
            </Link>
            <span className="text-[#D4AF37]">•</span>
            <Link href="/contact" className="hover:underline">
              আউটলেট ও যোগাযোগ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
