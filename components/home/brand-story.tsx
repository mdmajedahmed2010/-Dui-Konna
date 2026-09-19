"use client";

/**
 * Tazeen's — Brand Story Component
 * Smart & Elegant Heritage Sarees & Haute Couture
 * Showrooms: Pink City Gulshan-2 & Sector 11 Uttara, Dhaka — https://www.facebook.com/tazeensbd/
 */

import Link from "next/link";
import Image from "next/image";
import { ASSETS } from "@/lib/demo-data";
import { BUSINESS } from "@/lib/constants";

export function BrandStory() {
  return (
    <section className="bg-[#FAF7F2] border-t border-[#D4AF37]/20 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Photo */}
          <div className="lg:col-span-6 relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-md group reveal">
            <Image
              src={ASSETS.sareeKatanMaroon}
              alt="Tazeen's — Smart & Elegant Heritage Saree Couture"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Accent overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.2),transparent_50%)]" />
            {/* Heritage badge */}
            <div className="absolute bottom-5 left-5 bg-[#50001B]/90 backdrop-blur-sm border border-[#D4AF37]/40 px-4 py-2.5 rounded-xl">
              <p className="text-[#D4AF37] text-[9.5px] uppercase tracking-[0.25em] font-bold">{BUSINESS.NAME}</p>
              <p className="text-white text-xs font-semibold mt-0.5">Gulshan & Uttara, Dhaka</p>
            </div>
          </div>

          {/* Right Side: Brand Narrative */}
          <div className="lg:col-span-6 space-y-6 lg:pl-8 reveal [transition-delay:200ms]">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#720026] font-bold">
              আমাদের গল্প • Our Heritage
            </p>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-[#1A1A1A] font-heading">
              Smart & Elegant Heritage Sarees,
              <br />
              <span className="italic font-normal text-[#720026]">Crafted for Timeless Regality</span>
            </h2>

            <div className="border-l-2 border-[#720026] pl-4 py-1 text-[#720026] italic text-sm">
              &ldquo;Tazeen&apos;s curates majestic sequin border sarees, royal katan weaves, and artisanal boutique wear with our signature Open Parcel Guarantee.&rdquo;
            </div>

            <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
              <p>
                Tazeen&apos;s বাংলাদেশের রুচিশীল নারীদের জন্য নিয়ে এসেছে শতভাগ খাঁটি হ্যান্ডলুম ও আধুনিক ফ্যাব্রিকের মেলবন্ধন। মেটালিক সিকুইন পাড়, ট্র্যাডিশনাল অ্যান্টিক জরি কাতান এবং আরামদায়ক আজরাখ বুটিক কালেকশন এখন আপনার নাগালে।
              </p>
              <p>
                ডেলিভারির সময় ডেলিভারি ম্যানের সামনে পার্সেল খুলে কোয়ালিটি ও ফেব্রিক মিলিয়ে দেখে নেওয়ার শতভাগ স্বাধীনতা (Open Parcel Policy) রয়েছে আমাদের প্রতিটি অর্ডারে।
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center justify-center h-12 px-8 bg-[#720026] text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-[#50001B] transition-all shadow-md active:scale-95"
              >
                Explore Tazeen&apos;s Story →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
