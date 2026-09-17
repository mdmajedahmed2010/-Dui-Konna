"use client";

/**
 * Ash and Aspen — Community Stories & Verified Sisterhood
 * Customer testimonials, unboxing feedback, Uttara showroom visits, and Open Parcel satisfaction
 * Official Facebook Page: https://www.facebook.com/ashandaspenclothing/
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
      "Ash and Aspen-এর ফেসবুক পেজ থেকে Gulaal Luxury Lawn Peach Blossom ড্রেসটি নিয়েছিলাম। ডেলিভারির সময় রাইডারের সামনে পার্সেল খুলে চেক করে নেওয়ার সুবিধা (Open Parcel Policy) থাকায় সম্পূর্ণ নিশ্চিন্তে নিয়েছি। কাপড়ের কোয়ালিটি, কালার এবং সুতার কাজ ১০০% অরিজিনাল!",
    product: "Gulaal Luxury Lawn — Peach Blossom",
    rating: 5,
  },
  {
    id: "story-2",
    name: "Sabrina Hossain",
    location: "Gulshan-2, Dhaka",
    image: ASSETS.img3,
    quote:
      "নূর অর্গানজা ফ্রক ড্রেসটি হাতে পেয়ে সত্যি মুগ্ধ। প্রজাপতির নিখুঁত এমব্রয়ডারি ব্যাক মোটিফ আর সুতার ফিনিশিং অসাধারণ! বাংলাদেশে আসল পাকিস্তানি প্রিটের জন্য Ash and Aspen সত্যিই সবচেয়ে বিশ্বস্ত।",
    product: "Nur Organza Butterfly Luxe Frock",
    rating: 5,
  },
  {
    id: "story-3",
    name: "Nusrat Jahan",
    location: "Nasirabad, Chattogram",
    image: ASSETS.img2,
    quote:
      "ঢাকার বাইরে থাকি বলে পাকিস্তানি লন আসল হবে কিনা কিছুটা দ্বিধায় ছিলাম, কিন্তু মাত্র ৪৮ ঘণ্টায় পার্সেল হাতে পেয়েছি। সাদাবাহার টাউপে-ব্লু থ্রি-পিস সেটটির ফেব্রিক ও ওড়না একদম নিখুঁত। ১০০% জেনুইন প্রোডাক্ট!",
    product: "Sadabahar Embroidered Pret 3-Piece",
    rating: 5,
  },
  {
    id: "story-4",
    name: "Farhana Yasmin",
    location: "Sector 13, Uttara, Dhaka",
    image: ASSETS.img4,
    quote:
      "উত্তরা ১৩ নম্বর সেক্টরে Ash and Aspen-এর স্টুডিওতে সরাসরি গিয়ে আইভরি চিকনকারি সেটটি দেখে নিয়েছি। ম্যাটেরিয়াল ও কাজের ফিনিশিং চোখে দেখার মতো। আন্তরিক কাস্টমার সার্ভিসের জন্য Ash and Aspen আমার প্রথম পছন্দ!",
    product: "Ivory Chikankari Heavy Embroidered Set",
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E29578]/40 mb-3 shadow-xs">
            <Heart className="h-3 w-3 text-[#E29578] fill-[#E29578]" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#484860]">
              ASH & ASPEN COMMUNITY • 81K+ FANS
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] font-heading tracking-tight">
            Loved By 81,000+ Fashion Lovers
          </h2>
          <p className="mt-3 text-sm md:text-base text-neutral-600 font-medium">
            Real styling moments, unboxing happiness, and genuine love from 81,000+ verified Ash and Aspen clients across Bangladesh with a 96% positive rating.
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
                      ? "ring-4 ring-[#E29578] scale-110 shadow-lg bg-[#1A1A1A]"
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
                <span className={`text-xs font-bold transition-colors ${idx === activeIdx ? "text-[#E29578]" : "text-neutral-500"}`}>
                  {s.name.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Highlight Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DFD5] shadow-xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <div className="relative size-28 sm:size-36 rounded-2xl overflow-hidden shrink-0 shadow-md border border-[#E29578]/30 bg-neutral-900">
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
                  <Star key={i} className="h-4 w-4 fill-[#E29578] text-[#E29578]" />
                ))}
                <span className="text-xs font-bold text-neutral-600 ml-1.5 font-sans">
                  5.0 Verified Review
                </span>
              </div>

              <p className="text-sm md:text-base text-neutral-800 leading-relaxed font-serif italic">
                &ldquo;{activeStory.quote}&rdquo;
              </p>

              <div className="pt-2 border-t border-[#E8DFD5] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div>
                  <span className="font-bold text-[#1A1A1A] block sm:inline">
                    {activeStory.name}
                  </span>
                  <span className="text-neutral-500 sm:ml-2">
                    ({activeStory.location})
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[#484860] font-bold bg-[#FAF7F2] px-2.5 py-1 rounded-full border border-[#E29578]/30 self-center sm:self-auto">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#E29578]" />
                  <span className="truncate max-w-[200px]">{activeStory.product}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

