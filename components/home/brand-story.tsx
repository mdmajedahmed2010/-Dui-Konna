"use client";

/**
 * Ash and Aspen — Brand Story Component
 * 100% Genuine Pakistani Designer Attires & Haute Couture
 * House #76, Gausul Azam Avenue, Sector #13, Uttara, Dhaka - 1230 — https://www.facebook.com/ashandaspenclothing/
 */

import Link from "next/link";
import Image from "next/image";
import { ASSETS } from "@/lib/demo-data";
import { BUSINESS } from "@/lib/constants";

export function BrandStory() {
  return (
    <section className="bg-[#FAF7F2] border-t border-[#E29578]/20 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Photo */}
          <div className="lg:col-span-6 relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] rounded-sm overflow-hidden shadow-sm group reveal">
            <Image
              src={ASSETS.img2}
              alt="Ash and Aspen — Authentic Pakistani Luxury Couture"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Ash and Aspen accent overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(226,149,120,0.15),transparent_50%)]" />
            {/* Heritage badge */}
            <div className="absolute bottom-5 left-5 bg-[#1A1A1A]/85 backdrop-blur-sm border border-[#E29578]/40 px-4 py-2.5 rounded-sm">
              <p className="text-[#E29578] text-[9.5px] uppercase tracking-[0.25em] font-bold">{BUSINESS.NAME}</p>
              <p className="text-white text-xs font-semibold mt-0.5">Uttara, Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Right Side: Brand Narrative */}
          <div className="lg:col-span-6 space-y-6 lg:pl-8 reveal [transition-delay:200ms]">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#E29578] font-bold">
              আমাদের গল্প • Our Heritage
            </p>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-[#1A1A1A] font-heading">
              100% Genuine Pakistani Attires,
              <br />
              <span className="italic font-normal text-[#E29578]">Crafted for Timeless Elegance</span>
            </h2>

            <div className="border-l-2 border-[#E29578] pl-4 py-1 text-[#1A1A1A] italic text-sm">
              &ldquo;Ash and Aspen brings authentic Pakistani designer lawn, organza couture, and luxury stitched pret with our signature Open Parcel Guarantee.&rdquo;
            </div>

            <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
              <p>
                Ash and Aspen বাংলাদেশের ফ্যাশনসচেতন নারীদের জন্য নিয়ে এসেছে শতভাগ আসল পাকিস্তানি ডিজাইনার পোশাকের এক্সক্লুসিভ সম্ভার। গুল আহমেদ, গুলাল, সাদাবাহার, নুর এবং ক্রিমসনের মতো শীর্ষস্থানীয় ফ্যাশন হাউজের আসল পোশাক এখন আপনার দোরগোড়ায়।
              </p>
              <p>
                ডেলিভারির সময় ডেলিভারি ম্যানের সামনে পার্সেল খুলে কোয়ালিটি ও ডিজাইন মিলিয়ে দেখে নেওয়ার শতভাগ স্বাধীনতা (Open Parcel Policy) রয়েছে আমাদের প্রতিটি অর্ডারে।
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-[#E29578]/20">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#1A1A1A]">{BUSINESS.FOLLOWERS}</p>
                <p className="text-[10px] uppercase tracking-wide text-neutral-500 font-semibold">Community</p>
              </div>
              <div className="text-center border-x border-[#E29578]/20">
                <p className="text-2xl font-bold text-[#E29578]">{BUSINESS.RECOMMEND_RATE}</p>
                <p className="text-[10px] uppercase tracking-wide text-neutral-500 font-semibold">Satisfaction</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#1A1A1A]">100%</p>
                <p className="text-[10px] uppercase tracking-wide text-neutral-500 font-semibold">Authentic</p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center justify-center h-12 px-8 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#E29578] transition-all duration-300 rounded-sm shadow-luxury border border-[#E29578]/40 active:scale-[0.98]"
              >
                আমাদের সম্পর্কে আরও জানুন →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
