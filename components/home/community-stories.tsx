"use client";

/**
 * 3 sis xclusive — Community Stories & Verified Sisterhood
 * Instagram-style story circles with authentic customer quotes, Nayasarak boutique visits, and Open Parcel feedback
 */

import { useState } from "react";
import Image from "next/image";
import { Star, CheckCircle2, Heart, Sparkles } from "lucide-react";
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
    name: "Syeda Sumaiya Akter",
    location: "Shahjalal Uposhohor, Sylhet",
    image: ASSETS.img1,
    quote:
      "3 sis xclusive থেকে Sadabahar 3-Piece Luxury Lawn সেটটি নিয়েছিলাম। ডেলিভারির সময় ডেলিভারি ম্যানের সামনে পার্সেল খুলে চেক করে নেয়ার সুবিধা (Open Parcel) পেয়েছি। কাপড়ের কোয়ালিটি এবং নিখুঁত এম্ব্রয়ডারি সত্যিই ১০০% অরিজিনাল!",
    product: "Sadabahar Luxury Lawn 3-Piece",
    rating: 5,
  },
  {
    id: "story-2",
    name: "Nusrat Jahan Chowdhury",
    location: "Nayasarak, Sylhet",
    image: ASSETS.img3,
    quote:
      "3 sis xclusive-এর সাথে আমার দীর্ঘদিনের সম্পর্ক। ১৭ বছরের বিশ্বাসে তাদের যেকোনো পাকিস্তানি ড্রেস চোখ বন্ধ করে অর্ডার করা যায়। ফেব্রিক নিখুঁত আর প্রতিটি ড্রেস ১০০% অরিজিনাল!",
    product: "Kashmiri Pure Katan Suit",
    rating: 5,
  },
  {
    id: "story-3",
    name: "Farzana Anika",
    location: "Dhanmondi, Dhaka",
    image: ASSETS.img5,
    quote:
      "সিলেটের বাইরে থাকি বলে অনলাইনে অর্ডার করেছিলাম। মাত্র ২ দিনে সুন্দর প্যাকিংয়ে ঢাকায় পার্সেল পেয়েছি। রয়্যাল ভেলভেট কুর্তির ফিনিশিং প্রিমিয়াম!",
    product: "Royal Velvet Hand-Embroidered Set",
    rating: 5,
  },
  {
    id: "story-4",
    name: "Tasnia Mehnaz",
    location: "Amberkhana, Sylhet",
    image: ASSETS.img7,
    quote:
      "পাকিস্তানি ডিজাইনার প্রি-অর্ডার করেছিলাম। কথা অনুযায়ী নির্দিষ্ট সময়ের মধ্যেই অরিজিনাল ট্যাগ ও ব্যাগসহ পেয়েছি। এনায়াস সিলেট আমার সবচেয়ে বিশ্বস্ত বুটিক।",
    product: "Designer Organza Festive Pret",
    rating: 5,
  },
];

export function CommunityStories() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeStory = STORIES[activeIdx] ?? STORIES[0]!;

  return (
    <section className="py-16 md:py-24 bg-[#faf7f5] border-b border-[#ebdcd0] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#f0d0e6] mb-3 shadow-xs">
            <Heart className="h-3 w-3 text-[#8B263E] fill-[#8B263E]" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#8B263E]">
              3 SIS SISTERHOOD
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1e1622] font-heading tracking-tight">
            Cherished By Our Sisters
          </h2>
          <p className="mt-3 text-sm md:text-base text-neutral-600 font-medium">
            Real styling moments, unboxing reviews, and 17 years of trusted love from verified 3 sis xclusive clients across Bangladesh.
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
                      ? "ring-4 ring-[#8B263E] scale-110 shadow-lg"
                      : "ring-2 ring-[#ebdcd0] opacity-75 group-hover/avatar:opacity-100"
                  }`}
                >
                  <div className="relative size-full rounded-full overflow-hidden bg-neutral-100">
                    <Image
                      src={s.image}
                      alt={s.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <span className="text-[11px] font-bold text-[#1e1622] truncate max-w-[80px]">
                  {s.name.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Highlighted Review Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 md:p-10 border border-[#ebdcd0] shadow-xl text-center relative">
          <div className="flex justify-center gap-1 text-[#D4AF37] mb-4">
            {[...Array(activeStory.rating)].map((_, i) => (
              <Star key={i} className="size-4 sm:size-5 fill-[#D4AF37]" />
            ))}
          </div>

          <p className="text-base sm:text-lg md:text-xl font-medium text-[#1e1622] leading-relaxed italic font-serif max-w-2xl mx-auto">
            &ldquo;{activeStory.quote}&rdquo;
          </p>

          <div className="mt-6 pt-4 border-t border-[#ebdcd0]/80 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs">
            <span className="font-bold text-[#8B263E] flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-[#D4AF37]" />
              {activeStory.name}
            </span>
            <span className="hidden sm:inline text-neutral-300">•</span>
            <span className="text-neutral-500 font-medium">{activeStory.location}</span>
            <span className="hidden sm:inline text-neutral-300">•</span>
            <span className="font-semibold text-[#8B263E] bg-[#fdf5fa] px-3 py-1 rounded-full border border-[#f0d0e6]">
              {activeStory.product}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
