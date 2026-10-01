"use client";

/**
 * Shopping Queen by Orni — Brand Story Component
 * Authentic Pakistani Lawn, Festive Couture & Kim Pearl Skincare
 */

import Link from "next/link";
import Image from "next/image";
import { ASSETS } from "@/lib/demo-data";
import { BUSINESS } from "@/lib/constants";

export function BrandStory() {
  return (
    <section className="bg-[#FAF6F0] border-t border-[#D4AF37]/20 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Photo */}
          <div className="lg:col-span-6 relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-md group reveal">
            <Image
              src="/shoppingqueen-assets/sq-product-03-rose-pink.jpg"
              alt="Shopping Queen by Orni — Exclusive Pakistani Lawn & Festive Couture"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Accent overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.2),transparent_50%)]" />
            {/* Heritage badge */}
            <div className="absolute bottom-5 left-5 bg-[#6B1D2F]/90 backdrop-blur-sm border border-[#D4AF37]/40 px-4 py-2.5 rounded-xl">
              <p className="text-[#D4AF37] text-[9.5px] uppercase tracking-[0.25em] font-bold">{BUSINESS.NAME}</p>
              <p className="text-white text-xs font-semibold mt-0.5">190K+ Facebook Community • Dhaka, BD</p>
            </div>
          </div>

          {/* Right Side: Brand Narrative */}
          <div className="lg:col-span-6 space-y-6 lg:pl-8 reveal [transition-delay:200ms]">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#6B1D2F] font-bold">
              আমাদের গল্প • Our Heritage
            </p>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-[#1A1A1A] font-serif">
              Authentic Pakistani Lawn & Couture,
              <br />
              <span className="italic font-normal text-[#6B1D2F]">Curated with Pure Elegance</span>
            </h2>

            <div className="border-l-4 border-[#6B1D2F] pl-4 py-1 text-[#6B1D2F] italic text-sm">
              &ldquo;Shopping Queen by Orni curates authentic Pakistani lawn suits, festive partywear, and original Thai Kim pearl skincare with our signature Open Parcel Guarantee.&rdquo;
            </div>

            <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
              <p>
                {BUSINESS.NAME} ({BUSINESS.NAME_BN}) অর্ণি ইসলামের পরিচালনায় বাংলাদেশের ১৯০,০০০+ আপুদের ভরসার প্রতীক। আমাদের প্রতিটি পোশাক ও স্কিনকেয়ার প্রোডাক্ট খাঁটি এবং বাছাইকৃত।
              </p>
              <p>
                ডেলিভারির সময় ডেলিভারি ম্যানের সামনে পার্সেল খুলে কোয়ালিটি, ফেব্রিক ও সিল মিলিয়ে দেখে নেওয়ার শতভাগ স্বাধীনতা (Open Parcel Policy) রয়েছে আমাদের প্রতিটি অর্ডারে।
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center justify-center h-12 px-8 bg-[#6B1D2F] text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-[#521322] transition-all shadow-md active:scale-95"
              >
                Explore Orni&apos;s Story →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
