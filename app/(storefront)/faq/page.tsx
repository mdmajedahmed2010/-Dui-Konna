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
  RefreshCcw,
  Sparkle
} from "lucide-react";
import { BUSINESS } from "@/lib/constants";

interface FAQItem {
  question: string;
  answer: string;
  category: "lawn" | "skincare" | "delivery" | "payment" | "return";
}

const FAQS: FAQItem[] = [
  {
    category: "lawn",
    question: "Shopping Queen by Orni-এর পাকিস্তানি লন ও থ্রি-পিসের কাপড় ও সাইজ কেমন?",
    answer: "আমাদের প্রতিটি পাকিস্তানি লন থ্রি-পিস ১০০% পিওর লাক্সারি কটন ফ্যাব্রিকে তৈরি। কামিজের জন্য পর্যাপ্ত ৩ মিটার কাপড়, সফট ম্যাচিং সুতি বা সেমি-পিওর শিফন ওড়না (দোপাট্টা) এবং আরামদায়ক সুতি সালোয়ারের কাপড় দেওয়া থাকে। এটি আনস্টিচড (Unstitched) হওয়ায় যেকোনো বডি সাইজে আরামদায়কভাবে সেলাই করে পরা যায়।",
  },
  {
    category: "skincare",
    question: "Kim Whitening Pearl and Snowlotus Cream কি শতভাগ আসল এবং এটি কীভাবে ব্যবহার করতে হয়?",
    answer: "হ্যাঁ, আমাদের Kim Whitening Pearl and Snowlotus Cream (20g) শতভাগ আসল ও অথেনটিক থাইল্যান্ড ফর্মুলেশনে তৈরি। এতে রয়েছে প্রাকৃতিক স্নোলোটাস নির্যাস ও মুক্তা ভস্ম। এটি সম্পূর্ণ ক্ষতিকর কেমিক্যাল ও পারদ মুক্ত। রাতে মুখ ভালো ফেসওয়াশ দিয়ে ধুয়ে শুকানোর পর আঙুলে অল্প ক্রিম নিয়ে আলতো ম্যাসাজ করে লাগাতে হয়। কয়েক সপ্তাহ নিয়মিত ব্যবহারে ত্বক মসৃণ, দাগহীন ও প্রাকৃতিকভাবে উজ্জ্বল হয়।",
  },
  {
    category: "delivery",
    question: "ওপেন পার্সেল (Open Parcel Policy) কী এবং ডেলিভারিতে আমি কি প্যাকেট খুলে দেখতে পারব?",
    answer: "অবশ্যই! আমাদের মূল আকর্ষণ হলো শতভাগ ওপেন পার্সেল সুবিধা। ডেলিভারি ম্যান যখন আপনার ঠিকানায় পার্সেল নিয়ে আসবেন, আপনি তার সামনেই প্যাকেট খুলে কাপড়ের মান, রঙ, এমব্রয়ডারি বা কিম ক্রিমের ইনট্যাক্ট সিল চেক করে দেখে নিতে পারবেন। সন্তুষ্ট হওয়ার পর ক্যাশ পেমেন্ট করে পার্সেল গ্রহণ করবেন।",
  },
  {
    category: "delivery",
    question: "ডেলিভারি চার্জ কত এবং ফ্রি ডেলিভারি পাওয়ার উপায় কী?",
    answer: `ঢাকা সিটির ভেতরে ডেলিভারি চার্জ মাত্র ৳${BUSINESS.DELIVERY_CHARGE_INSIDE} এবং সময় লাগে ২৪–৪৮ ঘণ্টা। ঢাকা সিটির বাইরে বাংলাদেশের যেকোনো জেলা বা উপজেলায় ডেলিভারি চার্জ ৳${BUSINESS.DELIVERY_CHARGE_OUTSIDE} এবং সময় লাগে ২–৩ দিন। স্পেশাল অফার: যেকোনো ২ বা ততোধিক ড্রেস একসাথে অর্ডার করলে সারা বাংলাদেশে ডেলিভারি সম্পূর্ণ ফ্রি!`,
  },
  {
    category: "payment",
    question: "পেমেন্ট করার পদ্ধতি কী? ক্যাশ অন ডেলিভারি (COD) সুবিধা আছে কি?",
    answer: "সারা বাংলাদেশে আমাদের ১০০% ক্যাশ অন ডেলিভারি (Cash on Delivery) সুবিধা রয়েছে। পার্সেল হাতে পেয়ে ডেলিভারিম্যানের সামনে চেক করে নগদ টাকা পরিশোধ করবেন। এছাড়াও আপনি চাইলে bKash বা Nagad-এর মাধ্যমে পেমেন্ট করতে পারেন। কোনো আগাম পেমেন্ট ছাড়াই অর্ডার করা যায়।",
  },
  {
    category: "return",
    question: "পণ্য পছন্দ না হলে বা কোনো ডিফেক্ট থাকলে রিটার্ন করার নিয়ম কী?",
    answer: "ডেলিভারিম্যানের সামনে চেক করার সময় যদি পণ্যে কোনো রঙ বা ফেব্রিকের অমিল কিংবা সমস্যা দেখা যায়, আপনি কোনো দ্বিধা ছাড়াই সাথে সাথে পার্সেলটি রিটার্ন করতে পারেন (প্রযোজ্য ক্ষেত্রে শুধুমাত্র কুরিয়ার চার্জ দিয়ে)। কোনো সমস্যা হলে সাথে সাথে আমাদের হটলাইনে কল দিয়ে জানান।",
  },
  {
    category: "lawn",
    question: "পোশাকের রঙ পাকা থাকবে তো এবং ওয়াশ কেয়ার কীভাবে করতে হবে?",
    answer: "আমাদের পাকিস্তানি লন ও হ্যান্ডলুম কটন ড্রেসগুলো প্রিমিয়াম কোয়ালিটি নিশ্চিত করে আমদানি ও প্রস্তুত করা হয়। প্রথম ওয়াশে হালকা ঠাণ্ডা পানিতে শ্যাম্পু দিয়ে ধোয়া ভালো। ব্লিচ বা কড়া ডিটারজেন্ট পরিহার করুন এবং ছায়ায় শুকান। জরির অংশে সবসময় উল্টো পাশ থেকে মাঝারি তাপে ইস্ত্রি করুন।",
  },
  {
    category: "payment",
    question: "ফেসবুক লাইভ বা হোয়াটসঅ্যাপে কীভাবে দ্রুত অর্ডার করব?",
    answer: `অর্ণি ইসলামের ফেসবুক লাইভ সেশন চলাকালীন বা পেজের যেকোনো পোস্টের স্ক্রিনশট নিয়ে আমাদের WhatsApp (${BUSINESS.PHONE}) বা Facebook পেজের (Shopping Queen by Orni) ইনবক্সে মেসেজ পাঠালে আমাদের প্রতিনিধি স্টক নিশ্চিত করে আপনার নাম, মোবাইল ও ঠিকানা নিয়ে দ্রুত বুকিং সম্পন্ন করে দেবেন।`,
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = activeCategory === "all" 
    ? FAQS 
    : FAQS.filter(f => f.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#FAF6F0]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-[#6B1D2F] text-white text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.25),transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] uppercase tracking-[0.28em] font-bold">
            <Sparkles className="h-3.5 w-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight font-serif">
            সাধারণ জিজ্ঞাসা ও উত্তর (FAQ)
          </h1>
          <p className="text-[#FAF6F0] text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {BUSINESS.NAME}-এ ড্রেস ও স্কিনকেয়ার নির্বাচন, ওপেন পার্সেল পলিসি, ফ্রি ডেলিভারি অফার ও অর্ডার সম্পর্কিত আপনার সব প্রশ্নের সমাধান।
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="max-w-4xl mx-auto px-6 -mt-6 relative z-20">
        <div className="bg-white rounded-2xl p-2 shadow-md border border-[#E8DFD5] flex items-center justify-center gap-2 flex-wrap">
          {[
            { id: "all", label: "সব প্রশ্ন (All)" },
            { id: "lawn", label: "পাকিস্তানি লন ও পার্টিওয়্যার" },
            { id: "skincare", label: "কিম পার্ল ক্রিম (স্কিনকেয়ার)" },
            { id: "delivery", label: "ডেলিভারি ও ওপেন পার্সেল" },
            { id: "payment", label: "পেমেন্ট ও অর্ডার পদ্ধতি" },
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
                  ? "bg-[#6B1D2F] text-white shadow-xs"
                  : "text-[#1A1A1A] hover:bg-rose-50 hover:text-[#6B1D2F]"
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
                    ? "bg-white border-[#D4AF37] shadow-md ring-1 ring-[#D4AF37]/30"
                    : "bg-white/80 border-[#E8DFD5] hover:border-[#D4AF37]/50"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className={`size-8 rounded-full flex items-center justify-center shrink-0 ${
                      isOpen ? "bg-[#6B1D2F] text-white" : "bg-rose-50 text-[#6B1D2F]"
                    }`}>
                      <HelpCircle className="h-4 w-4" />
                    </div>
                    <span className="font-bold text-sm md:text-base text-[#1A1A1A] font-serif">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-neutral-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#6B1D2F]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100">
                    <p className="bg-[#FAF6F0] p-4 rounded-xl border border-[#E8DFD5] font-medium">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="max-w-3xl mx-auto mt-14 bg-gradient-to-r from-[#6B1D2F] to-[#521322] text-white rounded-3xl p-8 md:p-10 text-center relative overflow-hidden shadow-xl border border-[#D4AF37]/30">
          <div className="relative z-10 space-y-4">
            <h3 className="text-xl md:text-2xl font-bold font-serif">
              আরও কিছু জানতে চান?
            </h3>
            <p className="text-neutral-200 text-sm max-w-lg mx-auto leading-relaxed">
              অর্ণি ইসলাম ও কাস্টমার কেয়ার টিম আপনাকে সহায়তা করতে প্রস্তুত। সরাসরি ফোন, হোয়াটসঅ্যাপ বা ফেসবুক মেসেঞ্জারে যোগাযোগ করুন।
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
                <span>Facebook (190K+)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
