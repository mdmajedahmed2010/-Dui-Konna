"use client";

/**
 * Shopping Queen by Orni — Brand Heritage & Social Proof
 * Dhaka, Bangladesh • Official Facebook: https://www.facebook.com/Shoppingqueenbyorni
 * 190,500+ Followers • Open Parcel Inspection Nationwide
 */

import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowUpRight, Award, Users, ShieldCheck, Crown } from "lucide-react";
import { ASSETS } from "@/lib/demo-data";
import { BUSINESS } from "@/lib/constants";

export function HeritageCouture() {
  const metrics = [
    {
      icon: Users,
      value: "190,000+",
      label: "Facebook Family",
      sub: "১৯০,৫০০+ আপুদের ভালোবাসায় সক্রিয় পেজ",
    },
    {
      icon: Award,
      value: "১০০%",
      label: "Authenticity Guarantee",
      sub: "প্রিমিয়াম কোয়ালিটি পাকিস্তানি লন ও পার্টিওয়্যার",
    },
    {
      icon: ShieldCheck,
      value: "Open Parcel",
      label: "Inspection Guarantee",
      sub: "ডেলিভারিম্যানের সামনে চেক করে পেমেন্ট",
    },
    {
      icon: Crown,
      value: "Natural Glow",
      label: "Kim Whitening Cream",
      sub: "রাতের যত্নে দাগহীন প্রাকৃতিক লাবণ্য",
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
                  src={ASSETS.product6}
                  alt="Orni Islam — Shopping Queen by Orni"
                  fill
                  quality={90}
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/60 shadow-lg text-[#1A1A1A]">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#6B1D2F] flex items-center gap-1.5">
                    <Crown className="h-3.5 w-3.5 text-[#D4AF37]" />
                    <span>অর্ণি ইসলাম • SHOPPING QUEEN BY ORNI</span>
                  </p>
                  <p className="text-xs md:text-sm font-medium leading-snug mt-1.5 font-serif italic text-neutral-800">
                    &ldquo;দেশী-বিদেশী বিভিন্ন ব্র্যান্ডের মেয়েদের সালোয়ার কামিজ সুলভ মূল্যে এবং রাতের যত্নে প্রাকৃতিক উজ্জ্বলতা।&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Brand Manifesto & Value Grid (Col-span 6) */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF6F0] border border-[#D4AF37]/50 mb-3">
                <Crown className="h-3 w-3 text-[#D4AF37]" />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#6B1D2F]">
                  TRUSTED BRAND SINCE DAY ONE
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] font-heading tracking-tight leading-[1.14]">
                কেন ১৯০,০০০+ নারী শপিং কুইন বাই অর্নি-কে বেছে নেন?
              </h2>
              <p className="mt-4 text-sm md:text-base text-neutral-600 leading-relaxed font-medium">
                অনলাইনে কেনাকাটায় সবচেয়ে বড় ভয় হলো ছবির সাথে কাজের মিল না থাকা। শপিং কুইন বাই অর্নি-তে আমরা বিশ্বাস করি সম্পূর্ণ স্বচ্ছতায়। প্রতিটি পোশাক অর্ণি ইসলাম নিজে লাইভ ও ভিডিওতে বিস্তারিতভাবে দেখান। আর সবচেয়ে বড় সুবিধা হলো—আপনার হাতে পার্সেল পৌঁছালে ডেলিভারিম্যানের সামনে খুলে দেখে চেক করে তারপর পেমেন্ট করতে পারবেন।
              </p>
            </div>

            {/* Metrics 2x2 Bento */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-4 md:p-5 rounded-2xl bg-[#FAF6F0] border border-[#E8DFD3] space-y-1 hover:border-[#D4AF37]/60 transition-all hover:shadow-sm"
                >
                  <div className="size-8 rounded-full bg-white text-[#6B1D2F] flex items-center justify-center mb-2 shadow-2xs border border-[#E8DFD3]">
                    <m.icon className="h-4 w-4 text-[#6B1D2F]" />
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-[#1A1A1A] font-sans">
                    {m.value}
                  </p>
                  <p className="text-xs font-bold text-[#6B1D2F] uppercase tracking-wider">
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
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#6B1D2F] hover:bg-[#4A101D] text-[#D4AF37] hover:text-white text-xs font-bold uppercase tracking-[0.18em] shadow-md transition-all active:scale-[0.98]"
              >
                <span>Join 190K+ Facebook Community</span>
                <ArrowUpRight className="h-4 w-4 text-[#D4AF37]" />
              </a>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#FAF6F0] text-[#1A1A1A] text-xs font-bold uppercase tracking-[0.16em] border border-[#E8DFD3] transition-all hover:border-[#D4AF37]"
              >
                <span>About Orni &amp; Brand Story</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
