"use client";

/**
 * Dui Konna (দুই কন্যা) — Brand Story Component
 * Authentic Dhakai Muslin Sarees, Jamdani & Luxury Karchupi
 * Nikunja-2, Khilkhet, Dhaka-1229 • Founder: Shamima Nasrin
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
              src={ASSETS.product8}
              alt="Dui Konna — Exclusive Dhakai Muslin & Luxury Sarees"
              fill
              unoptimized
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Accent overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.2),transparent_50%)]" />
            {/* Heritage badge */}
            <div className="absolute bottom-5 left-5 bg-[#8B0000]/90 backdrop-blur-sm border border-[#D4AF37]/40 px-4 py-2.5 rounded-xl">
              <p className="text-[#D4AF37] text-[9.5px] uppercase tracking-[0.25em] font-bold">{BUSINESS.NAME}</p>
              <p className="text-white text-xs font-semibold mt-0.5">484K+ Facebook Community • Nikunja-2, Dhaka</p>
            </div>
          </div>

          {/* Right Side: Brand Narrative */}
          <div className="lg:col-span-6 space-y-6 lg:pl-8 reveal [transition-delay:200ms]">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#8B0000] font-bold">
              আমাদের গল্প • Our Heritage
            </p>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-[#1A1A1A] font-serif">
              Authentic Dhakai Muslin &amp; Heritage Sarees,
              <br />
              <span className="italic font-normal text-[#8B0000]">Curated by Shamima Nasrin</span>
            </h2>

            <div className="border-l-4 border-[#8B0000] pl-4 py-1 text-[#8B0000] italic text-sm">
              &ldquo;দুই কন্যা (Dui Konna) বাংলার শতবর্ষী ঐতিহ্যের প্রতীক খাঁটি ঢাকাই মসলিন শাড়ি, জামদানি ও জমকালো কারচুপি শাড়ির অনন্য সমাহার।&rdquo;
            </div>

            <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
              <p>
                {BUSINESS.NAME} ({BUSINESS.NAME_BN}) স্বত্বাধিকারী শামীমা নাসরিনের দূরদর্শী পরিচালনায় আজ বাংলাদেশের ৪৮৪,০০০+ নারীর পরম আস্থার প্রতীক। তাঁতিদের নিপুণ হাতের নিখুঁত বুনন এবং খাঁটি সুতার স্পর্শে তৈরি আমাদের প্রতিটি শাড়ি।
              </p>
              <p>
                অনলাইনে অর্ডার করা প্রতিটি শাড়িতে রয়েছে ডেলিভারিম্যানের সামনে ওপেন পার্সেল চেক করার পূর্ণ সুবিধা। এছাড়াও ঢাকার নিকুঞ্জ-২ এ অবস্থিত আমাদের ফ্ল্যাগশিপ শোরুমে এসে সরাসরি পরখ করার আন্তরিক আমন্ত্রণ।
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B0000] hover:bg-[#6B0000] text-[#D4AF37] hover:text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Read Full Brand Story</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
