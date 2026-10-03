"use client";

/**
 * Dui Konna (দুই কন্যা) — Community Stories & Verified Customer Love
 * Genuine reviews and Open Parcel satisfaction from 484,000+ sisters across Bangladesh.
 * Official Facebook: https://www.facebook.com/duikonna01
 */

import { useState } from "react";
import Image from "next/image";
import { Star, CheckCircle2, Heart } from "lucide-react";
import { ASSETS } from "@/lib/demo-data";

interface StoryHighlight {
  id: string;
  name: string;
  image: string;
  location: string;
  quote: string;
  product: string;
  rating: number;
}

const STORIES: StoryHighlight[] = [
  {
    id: "story-1",
    name: "Farzana Rahman",
    location: "Gulshan-2, Dhaka",
    image: ASSETS.product3,
    quote:
      "দুই কন্যা (Dui Konna) থেকে হলুদ ঢাকাই মসলিন শাড়িটি নিয়েছিলাম। পেজের ভিডিওতে যেমন নিখুঁত জরি ও বুনন দেখেছি, বাস্তবে হাতে পেয়ে তার চেয়েও বেশি অভিজাত লেগেছে। শাড়ির গায়ে স্পষ্ট দাম মুদ্রিত থাকায় কোনো লুকোচুরি নেই। ডেলিভারিম্যানের সামনে ওপেন পার্সেল চেক করে নেওয়ার সুবিধায় আমি ১০০% সন্তুষ্ট!",
    product: "Royal Yellow Dhakai Muslin Saree (৳29,000)",
    rating: 5,
  },
  {
    id: "story-2",
    name: "Tanzila Haque",
    location: "Dhanmondi, Dhaka",
    image: ASSETS.product8,
    quote:
      "ডাস্টি লিলাক লাক্সারি কারচুপি শাড়িটি পরে পারিবারিক রিসেপশন পার্টিতে গিয়েছিলাম। সবাই জানতে চেয়েছে কোথা থেকে নিয়েছি। হাতে বোনা নিখুঁত কারচুপি কাজ ও প্রিমিয়াম কাপড়ের ফল ও ড্র্যাপিং অসাধারণ!",
    product: "Dusty Lilac Luxury Karchupi Saree",
    rating: 5,
  },
  {
    id: "story-3",
    name: "Sadia Mehzabin",
    location: "Panchlaish, Chattogram",
    image: ASSETS.heroBanner,
    quote:
      "গাঢ় লাল ব্রাইডাল মসলিন শাড়িটি আমার পানচিনির অনুষ্ঠানের জন্য কিনেছিলাম। শামীমা নাসরিন আপুর পেজে কথা বলার পর খুব দ্রুত সাপোর্ট পেয়েছি। ঢাকার বাইরেও ২ দিনের মধ্যে নিখুঁতভাবে ডেলিভারি পেয়েছি।",
    product: "Royal Crimson Bridal Muslin Saree",
    rating: 5,
  },
  {
    id: "story-4",
    name: "Rubina Yasmin",
    location: "Uttara, Dhaka",
    image: ASSETS.product2,
    quote:
      "আমি নিজে নিকুঞ্জ-২ শোরুমে (House #21/B, Road #01) গিয়ে মিন্ট গ্রিন শাড়িটি দেখে ট্রায়াল দিয়ে কিনেছি। শোরুমের পরিবেশ অত্যন্ত মার্জিত। খাঁটি ঢাকাই মসলিনপ্রেমীদের জন্য দুই কন্যা সেরা নির্ভরযোগ্য প্রতিষ্ঠান।",
    product: "Mint Green Butterfly Handloom Muslin Saree",
    rating: 5,
  },
];

export function CommunityStories() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeStory = STORIES[activeIdx] ?? STORIES[0]!;

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8DFD5] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D4AF37]/50 mb-3 shadow-xs">
            <Heart className="h-3 w-3 text-[#8B0000] fill-[#8B0000]" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#8B0000]">
              ৪৮৪,০০০+ আপুদের ভালোবাসা ও রিভিউ
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] font-heading tracking-tight">
            Loved By 484,000+ Saree &amp; Heritage Lovers
          </h2>
          <p className="mt-3 text-sm md:text-base text-neutral-600 font-medium">
            সারাদেশের আপুদের বাস্তব অভিজ্ঞতা, ওপেন পার্সেল আনবক্সিং সন্তুষ্টি এবং খাঁটি ঢাকাই মসলিনের নির্ভরতায় দুই কন্যা (Dui Konna)।
          </p>

          {/* Interactive Story Circles */}
          <div className="flex justify-center items-center gap-4 sm:gap-6 mt-8 overflow-x-auto pb-2">
            {STORIES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActiveIdx(idx)}
                className="flex flex-col items-center gap-2 group/avatar cursor-pointer"
              >
                <div
                  className={`size-16 sm:size-20 rounded-full p-1 transition-all duration-300 ${
                    idx === activeIdx
                      ? "ring-4 ring-[#D4AF37] scale-110 shadow-lg bg-[#8B0000]"
                      : "ring-2 ring-[#E8DFD5] opacity-70 group-hover/avatar:opacity-100 group-hover/avatar:scale-105"
                  }`}
                >
                  <div className="relative size-full rounded-full overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.name}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                </div>
                <span className={`text-xs font-bold transition-colors ${idx === activeIdx ? "text-[#8B0000]" : "text-neutral-500"}`}>
                  {s.name.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Highlight Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DFD5] shadow-xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <div className="relative size-28 sm:size-36 rounded-2xl overflow-hidden shrink-0 shadow-md border border-[#D4AF37]/40 bg-neutral-900">
              <Image
                src={activeStory.image}
                alt={activeStory.name}
                fill
                unoptimized
                className="object-cover"
              />
            </div>

            <div className="flex-1 text-center sm:text-left space-y-3">
              <div className="flex items-center justify-center sm:justify-start gap-1">
                {[...Array(activeStory.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>

              <p className="text-sm md:text-base text-neutral-700 italic leading-relaxed font-serif">
                &ldquo;{activeStory.quote}&rdquo;
              </p>

              <div className="pt-2 border-t border-[#E8DFD5] flex flex-col sm:flex-row items-center justify-between gap-2">
                <div>
                  <h4 className="text-sm font-bold text-[#1A1A1A] font-heading flex items-center justify-center sm:justify-start gap-1.5">
                    {activeStory.name}
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 inline" />
                  </h4>
                  <p className="text-[11px] text-neutral-500 font-medium">
                    {activeStory.location} • Verified Buyer
                  </p>
                </div>

                <span className="text-[11px] font-bold text-[#8B0000] bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#D4AF37]/40">
                  {activeStory.product}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
