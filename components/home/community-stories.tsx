"use client";

/**
 * Shopping Queen by Orni — Community Stories & Verified Customer Love
 * Genuine reviews and Open Parcel satisfaction from 190,000+ sisters across Bangladesh.
 * Official Facebook: https://www.facebook.com/Shoppingqueenbyorni
 */

import { useState } from "react";
import Image from "next/image";
import { Star, CheckCircle2, Heart, Crown } from "lucide-react";
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
    name: "Ayesha Siddiqua",
    location: "Dhanmondi, Dhaka",
    image: ASSETS.product1,
    quote:
      "Shopping Queen by Orni থেকে রয়েল ব্লু পাকিস্তানি লন থ্রি-পিসটি নিয়েছিলাম। অর্ণি আপুর ভিডিও ও লাইভে যেমন দেখেছি, বাস্তবে হাতে পেয়ে ঠিক তেমনই পেয়েছি। সবচেয়ে ভালো লেগেছে ডেলিভারিম্যানের সামনে পার্সেল খুলে চেক করে পেমেন্ট করার সুবিধা। কাপড়ের কোয়ালিটি ১০০% প্রিমিয়াম!",
    product: "Royal Blue Embroidered Pakistani Lawn 3-Piece",
    rating: 5,
  },
  {
    id: "story-2",
    name: "Sharmin Akter",
    location: "Uttara, Dhaka",
    image: ASSETS.product12,
    quote:
      "কিম হোয়াইটেনিং পার্ল অ্যান্ড স্নোলোটাস ক্রিমটি ব্যবহার করে মাত্র দুই সপ্তাহের মধ্যে মুখের কালচে দাগ হালকা হয়েছে এবং ত্বকে ন্যাচারাল গ্লো এসেছে। ক্ষতিকারক কেমিক্যাল ছাড়া এমন প্রাকৃতিক স্কিনকেয়ার সত্যি চমৎকার!",
    product: "Kim Whitening Pearl & Snowlotus Night Cream",
    rating: 5,
  },
  {
    id: "story-3",
    name: "Nusrat Parveen",
    location: "Nasirabad, Chattogram",
    image: ASSETS.product5,
    quote:
      "মেরুন ফেস্টিভ পার্টিওয়্যার ড্রেসটি পরিবারের বিয়ের অনুষ্ঠানের জন্য নিয়েছিলাম। ভারী জরি ও সিকোয়েন্স কারুকাজ এত নজরকাড়া যে সবাই প্রশংসা করেছে। অর্ণি আপুর পেজের ফাস্ট রেসপন্স ও দ্রুত ডেলিভারির জন্য ধন্যবাদ।",
    product: "Royal Maroon Heavily Embroidered Festive Suit",
    rating: 5,
  },
  {
    id: "story-4",
    name: "Mahbuba Khatun",
    location: "Zindabazar, Sylhet",
    image: ASSETS.product9,
    quote:
      "ট্র্যাডিশনাল চুনরি ও কটন থ্রি-পিস দুটো একসাথে অর্ডার করেছিলাম, তাই সারা বাংলাদেশে ফ্রি ডেলিভারি পেয়েছি। ঢাকার বাইরেও এত দ্রুত ক্যাশ অন ডেলিভারি এবং প্যাকেট দেখে নেওয়ার সুবিধা সত্যিই ভরসা জাগায়।",
    product: "Traditional Chunri Bandhani Orange-Red 3-Piece",
    rating: 5,
  },
];

export function CommunityStories() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeStory = STORIES[activeIdx] ?? STORIES[0]!;

  return (
    <section className="py-16 md:py-24 bg-[#FAF6F0] border-b border-[#E8DFD5] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D4AF37]/50 mb-3 shadow-xs">
            <Heart className="h-3 w-3 text-[#6B1D2F] fill-[#6B1D2F]" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#6B1D2F]">
              ১৯০,০০০+ আপুদের ভালোবাসা ও রিভিউ
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] font-heading tracking-tight">
            Loved By 190,000+ Fashion &amp; Glow Lovers
          </h2>
          <p className="mt-3 text-sm md:text-base text-neutral-600 font-medium">
            সারাদেশের আপুদের বাস্তব অভিজ্ঞতা, আনবক্সিং সন্তুষ্টি এবং খাঁটি কোয়ালিটির নির্ভরতায় শপিং কুইন বাই অর্নি।
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
                      ? "ring-4 ring-[#D4AF37] scale-110 shadow-lg bg-[#6B1D2F]"
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
                <span className={`text-xs font-bold transition-colors ${idx === activeIdx ? "text-[#6B1D2F]" : "text-neutral-500"}`}>
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

                <span className="text-[11px] font-bold text-[#6B1D2F] bg-[#FAF6F0] px-3 py-1 rounded-full border border-[#D4AF37]/40">
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
