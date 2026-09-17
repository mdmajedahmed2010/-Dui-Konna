"use client";

/**
 * 365 Fashion House — Community Stories & Verified Sisterhood
 * Customer testimonials, unboxing feedback, Dhaka hub orders, and Open Parcel satisfaction
 * Pioneer in Authentic Pakistani Attires in Bangladesh — https://www.facebook.com/365FashionHouse/
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
      "365 Fashion House-এর ফেসবুক পেজ থেকে Mahee's Luxury Lawn Lilac ড্রেসটি অর্ডার করেছিলাম। ডেলিভারির সময় রাইডারের সামনে পার্সেল খুলে চেক করে নেওয়ার সুবিধা (Open Parcel Policy) থাকায় সম্পূর্ণ নিশ্চিন্তে নিয়েছি। কাপড়ের কোয়ালিটি, কালার এবং সুতার কাজ ১০০% অরিজিনাল!",
    product: "Mahee's Luxury Lawn 3-Piece — Lilac Blossom",
    rating: 5,
  },
  {
    id: "story-2",
    name: "Sabrina Hossain",
    location: "Gulshan-2, Dhaka",
    image: ASSETS.img3,
    quote:
      "আঘা নূর পিস্তাচিও অরগাঞ্জা কুর্তিটি হাতে পেয়ে সত্যি মুগ্ধ। গলার পার্ল ফিনিশিং আর মাল্টিকালার রেশম সুতার কাজ এতো নিখুঁত! বাংলাদেশে আসল পাকিস্তানি প্রিটের জন্য 365 Fashion House সত্যিই সবচেয়ে বিশ্বস্ত।",
    product: "Agha Noor Festive Organza Kurti",
    rating: 5,
  },
  {
    id: "story-3",
    name: "Nusrat Jahan",
    location: "Nasirabad, Chattogram",
    image: ASSETS.img2,
    quote:
      "ঢাকার বাইরে থাকি বলে পাকিস্তানি লন আসল হবে কিনা কিছুটা দ্বিধায় ছিলাম, কিন্তু মাত্র ৪৮ ঘণ্টায় পার্সেল হাতে পেয়েছি। খাদি সিগনেচার লন সেটটির প্রিমিয়াম ফেব্রিক ও ওড়না একদম নিখুঁত। ১০০% জেনুইন প্রোডাক্ট!",
    product: "Khaadi Signature Luxury Lawn 3-Piece",
    rating: 5,
  },
  {
    id: "story-4",
    name: "Farhana Yasmin",
    location: "Dhanmondi, Dhaka",
    image: ASSETS.img4,
    quote:
      "ঈদের প্রোগ্রামের জন্য শেভরন ক্রিমসন ভেলভেট ড্রেসটি নিয়েছিলাম। ড্রেসের তিল্লা ও জারির গ্ল্যামার সবাইকে মুগ্ধ করেছে। দাম ও মানের অসাধারণ ব্যালেন্সের জন্য 365 Fashion House আমার প্রথম পছন্দ!",
    product: "Chevron Royal Festive Chiffon & Velvet",
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#6C3483]/30 mb-3 shadow-xs">
            <Heart className="h-3 w-3 text-[#6C3483] fill-[#6C3483]" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#191426]">
              365 SISTERHOOD • 58K+ COMMUNITY
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#191426] font-heading tracking-tight">
            Cherished By 58,000+ Sisters
          </h2>
          <p className="mt-3 text-sm md:text-base text-neutral-600 font-medium">
            Real styling moments, unboxing happiness, and genuine love from 58,000+ verified 365 Fashion House clients across Bangladesh.
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
                      ? "ring-4 ring-[#6C3483] scale-110 shadow-lg bg-[#191426]"
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
                <span className={`text-xs font-bold transition-colors ${idx === activeIdx ? "text-[#6C3483]" : "text-neutral-500"}`}>
                  {s.name.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Highlight Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DFD5] shadow-xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <div className="relative size-28 sm:size-36 rounded-2xl overflow-hidden shrink-0 shadow-md border border-[#6C3483]/30 bg-neutral-900">
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
                  <Star key={i} className="h-4 w-4 fill-[#F39C12] text-[#F39C12]" />
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
                  <span className="font-bold text-[#191426] block sm:inline">
                    {activeStory.name}
                  </span>
                  <span className="text-neutral-500 sm:ml-2">
                    ({activeStory.location})
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[#6C3483] font-bold bg-[#FAF8F5] px-2.5 py-1 rounded-full border border-[#6C3483]/20 self-center sm:self-auto">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#6C3483]" />
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
