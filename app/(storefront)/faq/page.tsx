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
    question: "Tazeen's-এর শাড়ি ও বুটিক পোশাকের গুণগত মান কেমন?",
    answer: "Tazeen's (তাজিন'স) ২০০১ সাল থেকে প্রিমিয়াম শাড়ি ও মার্জিত বুটিক পোশাকের জন্য অত্যন্ত সুনামধন্য। আমাদের প্রতিটি সিকুইন পাড় শাড়ি, ঐতিহ্যবাহী গোল্ড জরি কাতান এবং হ্যান্ডলুম থ্রি-পিস নিখুঁত কারিগর দিয়ে নিজস্ব তত্ত্বাবধানে তৈরি ও বাছাইকৃত। কাপড়ের দীর্ঘস্থায়িত্ব, জরি ও সুতার নিখুঁত কাজ এবং পরিপাটি ড্র্যাপের নিশ্চয়তা শতভাগ।",
  },
  {
    category: "delivery",
    question: "ওপেন পার্সেল (Open Parcel Policy) কী এবং এটি কীভাবে কাজ করে?",
    answer: "ওপেন পার্সেল হলো গ্রাহকের শতভাগ নিশ্চিন্ততার পলিসি। কুরিয়ার প্রতিনিধি আপনার ঠিকানায় পার্সেল নিয়ে আসার পর, আপনি তার উপস্থিতিতে পার্সেলের প্যাকেট খুলে শাড়ির ফেব্রিক, রঙ, সিকুইন বা জরির কাজ এবং বর্ডার দেখে নিতে পারবেন। সবকিছু মনমতো হলে ডেলিভারিম্যানকে ক্যাশ পেমেন্ট করে পার্সেল গ্রহণ করবেন।",
  },
  {
    category: "delivery",
    question: "ডেলিভারি চার্জ কত এবং ডেলিভারি হতে কত দিন সময় লাগে?",
    answer: `ঢাকা সিটির ভেতরে ডেলিভারি চার্জ মাত্র ৳${BUSINESS.DELIVERY_CHARGE_INSIDE} এবং সময় লাগে ২৪ থেকে ৪৮ ঘণ্টা (১–২ কার্যদিবস)। ঢাকা সিটির বাইরে বাংলাদেশের যেকোনো জেলা বা উপজেলায় ডেলিভারি চার্জ ৳${BUSINESS.DELIVERY_CHARGE_OUTSIDE} এবং সময় লাগে ২ থেকে ৪ কার্যদিবস। আমরা Steadfast, Pathao ও RedX কুরিয়ারের মাধ্যমে নিরাপদ হোম ডেলিভারি নিশ্চিত করি।`,
  },
  {
    category: "payment",
    question: "পেমেন্ট করার পদ্ধতি কী? ক্যাশ অন ডেলিভারি (COD) সুবিধা আছে কি?",
    answer: "আমাদের সমস্ত শাড়ি ও বুটিক কালেকশনে সারাদেশে সম্পূর্ণ ক্যাশ অন ডেলিভারি (Cash on Delivery) সুবিধা রয়েছে। অর্থাৎ পার্সেল হাতে পেয়ে চেক করে সম্পূর্ণ মূল্য পরিশোধ করবেন। এছাড়াও আপনি চাইলে bKash, Nagad বা রকেটের মাধ্যমে ডিজিটাল পেমেন্ট সম্পন্ন করতে পারেন।",
  },
  {
    category: "return",
    question: "শাড়িতে কোনো সমস্যা থাকলে রিটার্ন বা এক্সচেঞ্জের নিয়ম কী?",
    answer: `ডেলিভারিম্যানের সামনে চেক করার পর যদি কোনো কাপড় ডিফেক্ট বা রঙের অমিল হিসেবে প্রতীয়মান হয়, তবে আপনি কোনো পণ্যমূল্য পরিশোধ না করেই পার্সেলটি সরাসরি রিটার্ন করতে পারবেন (শুধুমাত্র ডেলিভারি চার্জ প্রযোজ্য হতে পারে)। এছাড়াও আপনি আমাদের পিংক সিটি গুলশান অথবা উত্তরা সেক্টর ১১ শোরুমে এসে সরাসরি এক্সচেঞ্জ করে নিতে পারেন।`,
  },
  {
    category: "authenticity",
    question: "শাড়ির ওয়াশ কেয়ার ও যত্নের নিয়মাবলী কী?",
    answer: "সিকুইন পাড় ও জরি কাতান শাড়ির উজ্জ্বলতা এবং সুতার দীর্ঘস্থায়িত্ব রক্ষার জন্য ড্রাই ওয়াশ (Dry Wash) করানোই সবচেয়ে উত্তম। ঘরে ওয়াশ করতে চাইলে হালকা ঠাণ্ডা পানিতে শ্যাম্পু দিয়ে আলতো হাতে ধুয়ে ছায়ায় শুকাতে হবে। কখনোই কড়া রোদে সরাসরি শুকাবেন না এবং জরির অংশে উল্টো পাশ থেকে মাঝারি তাপে ইস্ত্রি করুন।",
  },
  {
    category: "payment",
    question: "সরাসরি শোরুমে গিয়ে শাড়ি দেখা ও কেনার সুযোগ আছে কি?",
    answer: "হ্যাঁ, অবশ্যই! আমাদের দুইটি ফ্ল্যাগশিপ শোরুম রয়েছে: ১) পিংক সিটি শপিং কমপ্লেক্স, শপ #৫৫ (১ম তলা), গুলশান-২, ঢাকা। ২) ফেয়ারিটেল (তাহফিম ফ্যাশন), মীনা বাজার বিল্ডিং (৩য় তলা), সেক্টর ১১, উত্তরা, ঢাকা। সরাসরি এসে হাজারো শাড়ির মধ্য থেকে পছন্দেরটি বেছে নিতে পারেন।",
  },
  {
    category: "authenticity",
    question: "ফেসবুক বা হোয়াটসঅ্যাপে কীভাবে সরাসরি অর্ডার করব?",
    answer: `যেকোনো শাড়ির ছবি বা নাম লিখে আমাদের অফিসিয়াল WhatsApp (${BUSINESS.PHONE}) অথবা ফেসবুক পেজের (facebook.com/tazeensbd) ইনবক্সে মেসেজ দিন। আমাদের প্রতিনিধি সাথে সাথে স্টকের অবস্থা জানিয়ে আপনার নাম, পূর্ণ ঠিকানা ও মোবাইল নম্বর নিয়ে অর্ডার কনফার্ম করে দেবেন।`,
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
      <section className="relative py-16 md:py-24 bg-[#50001B] text-white text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.25),transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] uppercase tracking-[0.28em] font-bold">
            <Sparkles className="h-3.5 w-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight font-heading">
            সাধারণ জিজ্ঞাসা ও উত্তর
          </h1>
          <p className="text-[#E8DFD5] text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {BUSINESS.NAME}-এ শাড়ি নির্বাচন, ওপেন পার্সেল, শোরুম ভিজিট ও ডেলিভারি সম্পর্কিত আপনার সমস্ত প্রশ্নের সহজ সমাধান।
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="max-w-4xl mx-auto px-6 -mt-6 relative z-20">
        <div className="bg-white rounded-2xl p-2 shadow-md border border-[#E8DFD5] flex items-center justify-center gap-2 flex-wrap">
          {[
            { id: "all", label: "সব প্রশ্ন (All)" },
            { id: "authenticity", label: "শাড়ির ফেব্রিক ও কোয়ালিটি" },
            { id: "delivery", label: "ডেলিভারি ও ওপেন পার্সেল" },
            { id: "payment", label: "পেমেন্ট ও শোরুম" },
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
                  ? "bg-[#720026] text-white shadow-xs"
                  : "text-[#1A1A1A] hover:bg-rose-50 hover:text-[#720026]"
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
                      isOpen ? "bg-[#720026] text-white" : "bg-rose-50 text-[#720026]"
                    }`}>
                      <HelpCircle className="h-4 w-4" />
                    </div>
                    <span className="font-bold text-sm md:text-base text-[#1A1A1A]">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-neutral-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#720026]" : ""
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
        <div className="max-w-3xl mx-auto mt-14 bg-gradient-to-r from-[#50001B] to-[#720026] text-white rounded-3xl p-8 md:p-10 text-center relative overflow-hidden shadow-xl border border-[#D4AF37]/30">
          <div className="relative z-10 space-y-4">
            <h3 className="text-xl md:text-2xl font-bold font-heading">
              আরও কিছু জানতে চান?
            </h3>
            <p className="text-neutral-200 text-sm max-w-lg mx-auto leading-relaxed">
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
