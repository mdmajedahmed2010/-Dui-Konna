"use client";

/**
 * Dui Konna (দুই কন্যা) — Brand Heritage & Social Proof
 * Founder: Shamima Nasrin • Showroom: Nikunja-2, Khilkhet, Dhaka-1229
 * Facebook: https://www.facebook.com/duikonna01 • 484,000+ Followers
 */

import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowUpRight, Award, Users, ShieldCheck, Crown, Store } from "lucide-react";
import { ASSETS } from "@/lib/demo-data";
import { BUSINESS } from "@/lib/constants";

export function HeritageCouture() {
  const metrics = [
    {
      icon: Users,
      value: "484,000+",
      label: "Facebook Family",
      sub: "৪৮৪,০০০+ আপুদের ভালোবাসায় সক্রিয় কমিউনিটি",
    },
    {
      icon: Award,
      value: "১০০%",
      label: "Dhakai Muslin Heritage",
      sub: "খাঁটি তাঁত বুনন ও রয়্যাল জরির নিখুঁত নকশা",
    },
    {
      icon: ShieldCheck,
      value: "Open Parcel",
      label: "Inspection Guarantee",
      sub: "ডেলিভারিম্যানের সামনে চেক করে পেমেন্ট",
    },
    {
      icon: Store,
      value: "নিকুঞ্জ-২",
      label: "Flagship Showroom",
      sub: "হাউজ ২১/বি, রোড ০১, খিলক্ষেত (১১টা-৯টা)",
    },
  ];

  return (
    <section className="py-16 md:py-28 bg-white border-b border-[#E8DFD3] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Visual Collage with Floating Quote Badge (Col-span 6) */}
          <div className="lg:col-span-6 relative">
            <div className="double-bezel-card aspect-[4/5] max-w-md mx-auto shadow-2xl">
              <div className="double-bezel-inner h-full w-full relative overflow-hidden bg-[#1A1A1A]">
                <Image
                  src={ASSETS.product9}
                  alt="Dui Konna Exclusive Muslin Drape — Shamima Nasrin"
                  fill
                  quality={90}
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/60 shadow-lg text-[#1A1A1A]">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#8B0000] flex items-center gap-1.5">
                    <Crown className="h-3.5 w-3.5 text-[#D4AF37]" />
                    <span>শামীমা নাসরিন • DUI KONNA FOUNDER</span>
                  </p>
                  <p className="text-xs md:text-sm font-medium leading-snug mt-1.5 font-serif italic text-neutral-800">
                    &ldquo;বাংলার ঐতিহ্যবাহী ঢাকাই মসলিনের গৌরব প্রতিটি নারীর কাছে পরম আভিজাত্য ও শতভাগ বিশুদ্ধতায় পৌঁছে দেওয়াই আমাদের লক্ষ্য।&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Brand Manifesto & Value Grid (Col-span 6) */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/50 mb-3">
                <Crown className="h-3 w-3 text-[#D4AF37]" />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#8B0000]">
                  DHAKAI MUSLIN HERITAGE
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] font-heading tracking-tight leading-[1.14]">
                কেন ৪৮৪,০০০+ নারী দুই কন্যা (Dui Konna)-কে বেছে নেন?
              </h2>
              <p className="mt-4 text-sm md:text-base text-neutral-600 leading-relaxed font-medium">
                অনলাইনে দামি মসলিন ও জামদানি কেনাকাটায় সবচেয়ে বড় দ্বিধা হলো কাপড়ের গুণমান ও আসল বুননের নিশ্চয়তা। দুই কন্যা-তে আমরা বিশ্বাস করি পূর্ণ সততা ও আভিজাত্যে। স্বত্বাধিকারী শামীমা নাসরিন-এর প্রত্যক্ষ তত্ত্বাবধানে তাঁতিদের হাত থেকে সরাসরি সংগৃহীত ১০০% খাঁটি ঢাকাই মসলিন শাড়ি। আর আপনার নিশ্চিন্ত কেনাকাটার জন্য রয়েছে ডেলিভারিম্যানের সামনে পার্সেল খুলে চেক করে নেওয়ার গ্যারান্টি কিংবা নিকুঞ্জ-২ শোরুমে সরাসরি এসে পছন্দের সুযোগ।
              </p>
            </div>

            {/* Metrics 2x2 Bento */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-4 md:p-5 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD3] space-y-1 hover:border-[#D4AF37]/60 transition-all hover:shadow-sm"
                >
                  <div className="size-8 rounded-full bg-white text-[#8B0000] flex items-center justify-center mb-2 shadow-2xs border border-[#E8DFD3]">
                    <m.icon className="h-4 w-4 text-[#8B0000]" />
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-[#1A1A1A] font-sans">
                    {m.value}
                  </p>
                  <p className="text-xs font-bold text-[#8B0000] uppercase tracking-wider">
                    {m.label}
                  </p>
                  <p className="text-[10px] text-neutral-500 font-medium">
                    {m.sub}
                  </p>
                </div>
              ))}
            </div>

            {/* Official Channels CTA */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={BUSINESS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#8B0000] hover:bg-[#6B0000] text-[#D4AF37] hover:text-white text-xs font-bold uppercase tracking-[0.18em] shadow-md transition-all active:scale-[0.98]"
              >
                <span>Join 484K+ Facebook Community</span>
                <ArrowUpRight className="h-4 w-4 text-[#D4AF37]" />
              </a>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#FAF7F2] text-[#1A1A1A] text-xs font-bold uppercase tracking-[0.16em] border border-[#E8DFD3] transition-all hover:border-[#D4AF37]"
              >
                <span>About Dui Konna &amp; Showroom</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
