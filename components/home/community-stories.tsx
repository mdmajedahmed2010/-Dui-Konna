"use client";

/**
 * Closet by Tanzz — Community Stories & Verified Sisterhood
 * Customer testimonials, unboxing feedback, Natore Tower showroom visits, and Open Parcel satisfaction
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
    name: "Tanzina Afroze",
    location: "Sector 7, Uttara, Dhaka",
    image: ASSETS.img1,
    quote:
      "Closet by Tanzz-এর ফেসবুক লাইভ দেখে Vintage Rose 3-piece ড্রেসটি অর্ডার করেছিলাম। ডেলিভারির সময় ডেলিভারি ম্যানের সামনে পার্সেল খুলে চেক করে নেয়ার সুযোগ (Open Parcel) পেয়েছি। কাপড়ের কোয়ালিটি, কালার এবং সফটনেস অসাধারণ!",
    product: "Vintage Rose Botanical Block 3-Piece",
    rating: 5,
  },
  {
    id: "story-2",
    name: "Sabrina Hossain",
    location: "Gulshan-2, Dhaka",
    image: ASSETS.img3,
    quote:
      "উত্তরা নাটোরে টাওয়ারের শোরুমে সরাসরি গিয়ে Regal Navy সেটটি নিয়েছিলাম। ড্রেসের গলার এমব্রয়ডারি আর ওড়নার ফিনিশিং অনেক গর্জিয়াস। তানয আপুর কালেকশন সত্যিই আভিজাত্যে ভরপুর।",
    product: "Regal Navy & Gold Embroidered Festive",
    rating: 5,
  },
  {
    id: "story-3",
    name: "Nusrat Jahan",
    location: "Nasirabad, Chattogram",
    image: ASSETS.img4,
    quote:
      "ঢাকার বাইরে থাকি বলে কিছুটা দ্বিধায় ছিলাম, কিন্তু মাত্র ৪৮ ঘণ্টায় পার্সেল হাতে পেয়েছি। Zam Zam কটন লন ড্রেসটি গরমে পরার জন্য একদম পারফেক্ট। ১০০% জেনুইন ফেব্রিক!",
    product: "Pastel Blossom Summer Symphony 3-Piece",
    rating: 5,
  },
  {
    id: "story-4",
    name: "Farhana Yasmin",
    location: "Dhanmondi, Dhaka",
    image: ASSETS.img2,
    quote:
      "সবসময়ই Closet by Tanzz থেকে ড্রেস নেই। তাদের দাম এবং কোয়ালিটির ব্যালেন্স সেরা। ডেলিভারি সার্ভিসও খুব দ্রুত। 'Wear Tanzz, Wear confidence' কথাটা শতভাগ সত্যি!",
    product: "Emerald Paisley Luxury 3-Piece",
    rating: 5,
  },
];

export function CommunityStories() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeStory = STORIES[activeIdx] ?? STORIES[0]!;

  return (
    <section className="py-16 md:py-24 bg-[#FAF8F5] border-b border-[#E8DFD5] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#C5A059]/40 mb-3 shadow-xs">
            <Heart className="h-3 w-3 text-[#C5A059] fill-[#C5A059]" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#121212]">
              TANZZ SISTERHOOD • 51K+ COMMUNITY
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#121212] font-heading tracking-tight">
            Cherished By Our Sisters
          </h2>
          <p className="mt-3 text-sm md:text-base text-neutral-600 font-medium">
            Real styling moments, unboxing happiness, and genuine love from 51,000+ verified Closet by Tanzz clients across Bangladesh.
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
                      ? "ring-4 ring-[#C5A059] scale-110 shadow-lg bg-[#121212]"
                      : "ring-2 ring-[#E8DFD5] opacity-75 group-hover/avatar:opacity-100 bg-white"
                  }`}
                >
                  <div className="relative size-full rounded-full overflow-hidden bg-neutral-100">
                    <Image
                      src={s.image}
                      alt={s.name}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                </div>
                <span className="text-[11px] font-bold text-[#121212] truncate max-w-[80px]">
                  {s.name.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Highlighted Review Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 md:p-10 border border-[#E8DFD5] shadow-xl text-center relative">
          <div className="flex justify-center gap-1 text-[#C5A059] mb-4">
            {[...Array(activeStory.rating)].map((_, i) => (
              <Star key={i} className="size-4 sm:size-5 fill-[#C5A059]" />
            ))}
          </div>

          <p className="text-base sm:text-lg md:text-xl font-medium text-[#121212] leading-relaxed italic font-serif max-w-2xl mx-auto">
            &ldquo;{activeStory.quote}&rdquo;
          </p>

          <div className="mt-6 pt-4 border-t border-[#E8DFD5]/80 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs">
            <span className="font-bold text-[#121212] flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-[#C5A059]" />
              {activeStory.name}
            </span>
            <span className="hidden sm:inline text-neutral-300">•</span>
            <span className="text-neutral-500 font-medium">{activeStory.location}</span>
            <span className="hidden sm:inline text-neutral-300">•</span>
            <span className="font-semibold text-[#121212] bg-[#FAF8F5] px-3 py-1 rounded-full border border-[#C5A059]/40">
              {activeStory.product}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
