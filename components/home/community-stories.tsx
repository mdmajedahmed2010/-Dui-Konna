"use client";

/**
 * Tazeen's — Community Stories & Verified Customer Love
 * Genuine reviews, showroom visit experiences (Pink City Gulshan & Sector 11 Uttara),
 * and Open Parcel satisfaction from 50,000+ patrons across Bangladesh.
 * Official Facebook: https://www.facebook.com/tazeensbd/
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
    location: "Gulshan-2, Dhaka",
    image: ASSETS.sareeChampagne,
    quote:
      "Tazeen's-এর শ্যাম্পেন গোল্ড সিকুইন পাড় শাড়িটি হাতে পেয়ে সত্যি মুগ্ধ হয়েছি। ডেলিভারির সময় রাইডারের সামনে পার্সেল খুলে শাড়ির ফেব্রিক ও সিকুইন ওয়ার্ক চেক করে নেওয়ার ওপেন পার্সেল সুবিধা থাকায় সম্পূর্ণ নিশ্চিন্তে কেনাকাটা করেছি। কাপড়ের কোয়ালিটি ও ফিনিশিং ১০০% প্রিমিয়াম!",
    product: "Champagne Gold Sequin Border Saree",
    rating: 5,
  },
  {
    id: "story-2",
    name: "Sabrina Hossain",
    location: "Sector 11, Uttara, Dhaka",
    image: ASSETS.sareeKatanMaroon,
    quote:
      "উত্তরা সেক্টর ১১ শোরুমে সরাসরি গিয়ে মেরুন রয়্যাল কাতান শাড়িটি কিনেছিলাম। গোল্ড জরি স্ট্রাইপ আর ক্লাসিক পোকা-ডট বর্ডারের কাজ অত্যন্ত নিখুঁত। বিয়ের অনুষ্ঠানের জন্য পরিবারের সবাই প্রশংসা করেছে। Tazeen's সত্যিই আস্থার জায়গা।",
    product: "Heritage Royal Zari Striped Katan Saree",
    rating: 5,
  },
  {
    id: "story-3",
    name: "Nusrat Jahan",
    location: "Nasirabad, Chattogram",
    image: ASSETS.sareePurple,
    quote:
      "চট্টগ্রাম থেকে অনলাইনে অর্ডার করেছিলাম। মাত্র ৪৮ ঘণ্টার মধ্যে অক্ষত অবস্থায় ডেলিভারি পেয়েছি। রয়্যাল পার্পল সিকুইন শাড়ির ড্র্যাপ এবং রঙ ছবির চেয়েও বাস্তব চোখে অনেক বেশি লাক্সারিয়াস। প্যাকেজিং ও কাস্টমার কেয়ার সার্ভিস অসাধারণ!",
    product: "Royal Purple Metallic Sequin Saree",
    rating: 5,
  },
  {
    id: "story-4",
    name: "Farhana Yasmin",
    location: "Pink City, Gulshan, Dhaka",
    image: ASSETS.threePieceAjrakh,
    quote:
      "পিংক সিটির শপ #৫৫ থেকে আজরাখ ইন্ডিকো থ্রি-পিস কালেকশনটি নিয়েছিলাম। পিওর মোডাল কটন ফেব্রিক আর ঐতিহ্যবাহী ব্লক প্রিন্টের ওড়না এত আরামদায়ক যে সারাদিন পরেও ক্লান্তি আসে না। Tazeen's-এর ডিজাইন সবসময় পরিপাটি ও মার্জিত।",
    product: "Ajrakh Indigo Boutique 3-Piece Set",
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D4AF37]/40 mb-3 shadow-xs">
            <Heart className="h-3 w-3 text-[#720026] fill-[#720026]" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#720026]">
              TAZEEN&apos;S SISTERHOOD • 50K+ PATRONS
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] font-heading tracking-tight">
            Loved By 50,000+ Saree & Fashion Lovers
          </h2>
          <p className="mt-3 text-sm md:text-base text-neutral-600 font-medium">
            Real styling moments, celebratory unboxing smiles, and cherished memories from patrons across Bangladesh who trust Tazeen&apos;s for authentic ethnic couture.
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
                      ? "ring-4 ring-[#D4AF37] scale-110 shadow-lg bg-[#720026]"
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
                <span className={`text-xs font-bold transition-colors ${idx === activeIdx ? "text-[#720026]" : "text-neutral-500"}`}>
                  {s.name.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Highlight Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DFD5] shadow-xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <div className="relative size-28 sm:size-36 rounded-2xl overflow-hidden shrink-0 shadow-md border border-[#D4AF37]/30 bg-neutral-900">
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
                <span className="text-xs font-bold text-neutral-600 ml-1.5 font-sans">
                  5.0 Verified Patron
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

                <div className="inline-flex items-center gap-1.5 text-[#720026] font-bold bg-[#FAF7F2] px-2.5 py-1 rounded-full border border-[#D4AF37]/30 self-center sm:self-auto">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#D4AF37]" />
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
