"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  HelpCircle, 
  ChevronDown, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  CreditCard, 
  RefreshCcw 
} from "lucide-react";
import { BUSINESS } from "@/lib/constants";

interface FAQItem {
  question: string;
  answer: string;
  category: "authenticity" | "delivery" | "payment" | "return";
}

const FAQS: FAQItem[] = [
  {
    category: "authenticity",
    question: "Ash and Aspen-এর পোশাকগুলো কি আসলেই ১০০% আসল পাকিস্তানি?",
    answer: "হ্যাঁ, শতভাগ নিশ্চিত। Ash and Aspen (অ্যাশ অ্যান্ড অ্যাসপেন) একটি বিশ্বস্ত মার্কেটপ্লেস পোর্টাল যা গ্রাহক সন্তুষ্টি নিশ্চিত করতে শুধুমাত্র ১০০% অরিজিনাল পাকিস্তানি ব্র্যান্ডের পোশাক সরাসরি সংগ্রহ করে। আমরা কোনো রেপ্লিকা বা কপি বিক্রি করি না। Gulaal, Nur, Sadabahar সহ প্রতিটি পোশাকে অথেনটিক ফেব্রিক, খাঁটি সুতার কারুকাজ এবং নিখুঁত ফিনিশিং বজায় থাকে।",
  },
  {
    category: "delivery",
    question: "ওপেন পার্সেল (Open Parcel Policy) কী এবং এটি কীভাবে কাজ করে?",
    answer: "ওপেন পার্সেল হলো গ্রাহকের শতভাগ নিশ্চিন্ততার পলিসি। কুরিয়ার প্রতিনিধি আপনার ঠিকানায় পার্সেল নিয়ে আসার পর, আপনি তার উপস্থিতিতে পার্সেলের প্যাকেট খুলে পোশাকটির ফেব্রিক, রঙ, এমব্রয়ডারি ও ওড়না দেখে নিতে পারবেন। সবকিছু মনমতো হলে ডেলিভারিম্যানকে ক্যাশ পেমেন্ট করে পার্সেল গ্রহণ করবেন।",
  },
  {
    category: "delivery",
    question: "ডেলিভারি চার্জ কত এবং ডেলিভারি হতে কত দিন সময় লাগে?",
    answer: `ঢাকা সিটির ভেতরে ডেলিভারি চার্জ মাত্র ৳${BUSINESS.DELIVERY_CHARGE_INSIDE} এবং সময় লাগে ২৪ থেকে ৪৮ ঘণ্টা (১–২ কার্যদিবস)। ঢাকা সিটির বাইরে বাংলাদেশের যেকোনো জেলা বা উপজেলায় ডেলিভারি চার্জ ৳${BUSINESS.DELIVERY_CHARGE_OUTSIDE} এবং সময় লাগে ২ থেকে ৪ কার্যদিবস। আমরা Steadfast, Pathao ও Paperfly কুরিয়ারের মাধ্যমে দ্রুত ও নিরাপদ হোম ডেলিভারি নিশ্চিত করি।`,
  },
  {
    category: "payment",
    question: "পেমেন্ট করার পদ্ধতি কী? ক্যাশ অন ডেলিভারি (COD) সুবিধা আছে কি?",
    answer: "আমাদের সমস্ত রেডি স্টক কালেকশনে সারাদেশে সম্পূর্ণ ক্যাশ অন ডেলিভারি (Cash on Delivery) সুবিধা রয়েছে। অর্থাৎ পার্সেল হাতে পেয়ে চেক করে সম্পূর্ণ মূল্য পরিশোধ করবেন। এছাড়াও আপনি চাইলে bKash, Nagad বা Rocket-এর মাধ্যমে ডিজিটাল পেমেন্ট সম্পন্ন করতে পারেন।",
  },
  {
    category: "return",
    question: "পোশাকে কোনো সমস্যা থাকলে রিটার্ন বা এক্সচেঞ্জের নিয়ম কী?",
    answer: `ডেলিভারিম্যানের সামনে চেক করার পর যদি কোনো কাপড় ত্রুটিযুক্ত বা ভুল অর্ডার হিসেবে প্রতীয়মান হয়, তবে আপনি কোনো পণ্যমূল্য পরিশোধ না করেই পার্সেলটি সরাসরি রিটার্ন করতে পারবেন (শুধুমাত্র ডেলিভারি চার্জ প্রযোজ্য হতে পারে)। ডেলিভারি গ্রহণের পর কোনো অসঙ্গতি ধরা পড়লে সর্বোচ্চ ৪৮ ঘণ্টার মধ্যে আমাদের হটলাইন (${BUSINESS.PHONE}) বা Facebook ইনবক্সে আনবক্সিং প্রমাণ সহ জানান। ৩ দিনের এক্সচেঞ্জ সুবিধা প্রযোজ্য।`,
  },
  {
    category: "authenticity",
    question: "আনস্টিচড (Unstitched) ও রেডিমেড (Pret) ড্রেসের মধ্যে তফাত কী?",
    answer: "আনস্টিচড থ্রি-পিসে জামার কামিজ, সালোয়ার ও দুপাট্টা আলাদা ফেব্রিক পিস হিসেবে থাকে যা আপনার নিজস্ব মাপ অনুযায়ী দর্জি দিয়ে তৈরি করে নিতে হয়। আর রেডিমেড বা প্রিট (Pret) ড্রেসগুলো স্ট্যান্ডার্ড সাইজে তৈরি থাকে যা সরাসরি পরিধানযোগ্য।",
  },
  {
    category: "payment",
    question: "ফেসবুক মেসেঞ্জার বা হোয়াটসঅ্যাপে কীভাবে সরাসরি অর্ডার করব?",
    answer: `যেকোনো ড্রেসের স্ক্রিনশট বা নাম লিখে আমাদের অফিসিয়াল WhatsApp (${BUSINESS.PHONE}) অথবা ফেসবুক পেজের (facebook.com/ashandaspenclothing) ইনবক্সে মেসেজ দিন। আমাদের প্রতিনিধি সাথে সাথে স্টকের অবস্থা জানিয়ে আপনার নাম, পূর্ণ ঠিকানা ও মোবাইল নম্বর নিয়ে অর্ডার কনফার্ম করে দেবেন।`,
  },
  {
    category: "authenticity",
    question: "পোশাকের রঙের স্থায়িত্ব এবং ওয়াশ কেয়ার কেমন?",
    answer: "যেহেতু এগুলো আন্তর্জাতিক মানের অরিজিনাল পাকিস্তানি লন ও পিওর শিফন/অর্গানজা ফেব্রিক, তাই রঙের দীর্ঘস্থায়িত্ব নিশ্চিত। তবে এমব্রয়ডারি ও কাজের দীর্ঘস্থায়িত্ব রক্ষার জন্য ড্রাই ওয়াশ (Dry Wash) অথবা হালকা ঠাণ্ডা পানিতে শ্যাম্পু দিয়ে আলতো হাতে ধোয়া বাঞ্ছনীয়। সরাসরি কড়া রোদে শুকানো পরিহার করুন।",
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = activeCategory === "all" 
    ? FAQS 
    : FAQS.filter(f => f.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-[#1A1A1A] text-white text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(226,149,120,0.25),transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#E29578]/40 text-[#E29578] text-[10px] uppercase tracking-[0.28em] font-bold">
            <Sparkles className="h-3.5 w-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight font-heading">
            সাধারণ জিজ্ঞাসা ও উত্তর
          </h1>
          <p className="text-[#E8DFD5] text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {BUSINESS.NAME}-এ কেনাকাটা, অথেনটিসিটি, ওপেন পার্সেল ও ডেলিভারি সম্পর্কিত আপনার মনের সমস্ত প্রশ্নের সহজ সমাধান।
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="max-w-4xl mx-auto px-6 -mt-6 relative z-20">
        <div className="bg-white rounded-2xl p-2 shadow-md border border-[#E8DFD5] flex items-center justify-center gap-2 flex-wrap">
          {[
            { id: "all", label: "সব প্রশ্ন (All)" },
            { id: "authenticity", label: "আসল পাকিস্তানি ফেব্রিক" },
            { id: "delivery", label: "ডেলিভারি ও ওপেন পার্সেল" },
            { id: "payment", label: "পেমেন্ট ও COD" },
            { id: "return", label: "রিটার্ন ও এক্সচেঞ্জ" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveCategory(tab.id);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? "bg-[#1A1A1A] text-white shadow-xs"
                  : "text-[#1A1A1A] hover:bg-orange-50 hover:text-[#E29578]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-14 md:py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#E29578] shadow-md ring-1 ring-[#E29578]/20"
                    : "bg-white/80 border-[#E8DFD5] hover:border-[#E29578]/50"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className={`size-8 rounded-full flex items-center justify-center shrink-0 ${
                      isOpen ? "bg-[#E29578] text-white" : "bg-orange-50 text-[#E29578]"
                    }`}>
                      <HelpCircle className="h-4 w-4" />
                    </div>
                    <span className="font-bold text-sm md:text-base text-[#1A1A1A]">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-neutral-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#E29578]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100">
                    <p className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E8DFD5] font-medium">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="max-w-3xl mx-auto mt-14 bg-gradient-to-r from-[#1A1A1A] to-[#2B2B38] text-white rounded-3xl p-8 md:p-10 text-center relative overflow-hidden shadow-xl border border-[#E29578]/30">
          <div className="relative z-10 space-y-4">
            <h3 className="text-xl md:text-2xl font-bold font-heading">
              আরও কিছু জানতে চান?
            </h3>
            <p className="text-neutral-300 text-sm max-w-lg mx-auto leading-relaxed">
              আমাদের সাপোর্ট টিম সার্বক্ষণিক সক্রিয়। সরাসরি ফোন, হোয়াটসঅ্যাপ বা ফেসবুক মেসেঞ্জারে যোগাযোগ করে যেকোনো তথ্য জেনে নিন।
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
              <a
                href={BUSINESS.WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-12 px-7 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-[0.14em] rounded-full transition-all shadow-md"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp ({BUSINESS.PHONE})</span>
              </a>
              <a
                href={BUSINESS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-12 px-7 bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs font-bold uppercase tracking-[0.14em] rounded-full transition-all shadow-md"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Facebook Messenger</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

