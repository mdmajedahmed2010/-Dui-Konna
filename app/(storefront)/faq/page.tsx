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
  Store
} from "lucide-react";
import { BUSINESS } from "@/lib/constants";

interface FAQItem {
  question: string;
  answer: string;
  category: "muslin" | "saree-care" | "delivery" | "payment" | "showroom";
}

const FAQS: FAQItem[] = [
  {
    category: "muslin",
    question: "দুই কন্যা (Dui Konna)-র ঢাকাই মসলিন শাড়ি কি শতভাগ খাঁটি ও তাঁতে বোনা?",
    answer: "হ্যাঁ, সম্পূর্ণ নিশ্চিত থাকুন। দুই কন্যার প্রতিটি ঢাকাই মসলিন শাড়ি বাংলার সুপ্রাচীন ঐতিহ্যবাহী তাঁতিদের নিপুণ হাতে বোনা। এতে ব্যবহৃত হয় সূক্ষ্ম রেশমি সুতা ও খাঁটি স্বর্ণালী জরির কারুকাজ। প্রতিটি শাড়ির বুনন, জমিন ও আঁচল স্বত্বাধিকারী শামীমা নাসরিন নিজে পুঙ্খানুপুঙ্খভাবে পরীক্ষা করেন।",
  },
  {
    category: "muslin",
    question: "শাড়ির দৈর্ঘ্য ও সাথে ব্লাউজ পিস আছে কি?",
    answer: "আমাদের প্রতিটি প্রিমিয়াম ঢাকাই মসলিন ও জামদানি শাড়ির মাপ স্ট্যান্ডার্ড ১২ হাত (প্রায় ৫.৫ মিটার) এবং সাথে পর্যাপ্ত ব্লাউজ পিস অন্তর্ভুক্ত থাকে। শাড়িগুলো অত্যন্ত হালকা, নরম ও আরামদায়ক ড্র্যাপিং প্রদান করে।",
  },
  {
    category: "muslin",
    question: "শাড়ির দাম কি ফিক্সড নাকি আলোচনা সাপেক্ষ?",
    answer: "দুই কন্যা সবসময় স্বচ্ছতায় বিশ্বাসী। আমাদের প্রোডাক্টের দাম ফিক্সড এবং সরাসরি ট্যাগে মুদ্রিত থাকে (যেমন হলুদ মসলিন শাড়ির গায়ে স্পষ্ট ৳২৯,০০০ মুদ্রিত)। অনলাইনে মেসেজে দাম লুকিয়ে রাখা বা কাস্টমারভেদে ভিন্ন দাম নেওয়ার কোনো সুযোগ নেই।",
  },
  {
    category: "delivery",
    question: "ওপেন পার্সেল (Open Parcel Policy) কী এবং ডেলিভারিতে আমি কি শাড়ি খুলে দেখতে পারব?",
    answer: "অবশ্যই! আমাদের মূল গ্যারান্টি হলো শতভাগ ওপেন পার্সেল সুবিধা। ডেলিভারি ম্যান যখন আপনার ঠিকানায় পার্সেল নিয়ে আসবেন, আপনি তার সামনেই প্যাকেট খুলে শাড়ির কাপড়, রঙ, আঁচলের জরির কাজ ও ব্লাউজ পিস ভালো করে চেক করে দেখে নিতে পারবেন। সন্তুষ্ট হওয়ার পর ক্যাশ পেমেন্ট করে পার্সেল গ্রহণ করবেন।",
  },
  {
    category: "delivery",
    question: "ডেলিভারি চার্জ কত এবং ফ্রি ডেলিভারি পাওয়ার উপায় কী?",
    answer: `ঢাকা সিটির ভেতরে ডেলিভারি চার্জ মাত্র ৳${BUSINESS.DELIVERY_CHARGE_INSIDE} (২৪–৪৮ ঘণ্টা) এবং ঢাকার বাইরে বাংলাদেশের যেকোনো জেলা বা উপজেলায় ডেলিভারি চার্জ ৳${BUSINESS.DELIVERY_CHARGE_OUTSIDE} (২–৩ দিন)। স্পেশাল অফার: যেকোনো ২ বা ততোধিক শাড়ি একসাথে অর্ডার করলে সারা বাংলাদেশে ডেলিভারি সম্পূর্ণ ফ্রি!`,
  },
  {
    category: "payment",
    question: "পেমেন্ট করার পদ্ধতি কী? ক্যাশ অন ডেলিভারি (COD) সুবিধা আছে কি?",
    answer: "সারা বাংলাদেশে আমাদের ১০০% ক্যাশ অন ডেলিভারি (Cash on Delivery) সুবিধা রয়েছে। পার্সেল হাতে পেয়ে ডেলিভারিম্যানের সামনে চেক করে নগদ টাকা পরিশোধ করবেন। এছাড়াও আপনি চাইলে bKash বা Nagad-এর মাধ্যমে পেমেন্ট করতে পারেন। কোনো আগাম পেমেন্ট ছাড়াই অর্ডার করা যায়।",
  },
  {
    category: "showroom",
    question: "আপনাদের কি ফিজিক্যাল শোরুম আছে? সরাসরি গিয়ে দেখে কেনা যাবে কি?",
    answer: `হ্যাঁ! আমাদের ফ্ল্যাগশিপ শোরুম ঢাকার নিকুঞ্জ-২ এ অবস্থিত: ${BUSINESS.ADDRESS} (House #21/B, Road #01, Nikunja-2, Khilkhet, Dhaka-1229)। সপ্তাহের ৭ দিনই সকাল ১১:০০টা থেকে রাত ৯:০০টা পর্যন্ত শোরুম খোলা থাকে। আপনি সরাসরি এসে নিজের চোখে শাড়ির আভিজাত্য দেখে ট্রায়াল দিয়ে কিনতে পারবেন।`,
  },
  {
    category: "saree-care",
    question: "ঢাকাই মসলিন ও জামদানি শাড়ির যত্ন ও ধোয়ার নিয়ম কী?",
    answer: "খাঁটি ঢাকাই মসলিন ও জরি বোনা শাড়ি ঘরে সাধারণ ডিটারজেন্টে ধোয়া যাবে না। এগুলো সবসময় প্রফেশনাল ড্রাই ক্লিন (Dry Clean Only) করাতে হবে। শাড়ি সংরক্ষণের সময় প্লাস্টিক প্যাকেটে না রেখে সুতি বা মসলিন কাপড়ের কভারে মুড়িয়ে ছায়াযুক্ত ও শুষ্ক স্থানে রাখতে হবে। মাঝে মাঝে ভাঁজ বদলে দিতে হবে।",
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
      <section className="relative py-16 md:py-24 bg-[#8B0000] text-white text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.25),transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] uppercase tracking-[0.28em] font-bold">
            <Sparkles className="h-3.5 w-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight font-serif">
            সাধারণ জিজ্ঞাসা ও উত্তর (FAQ)
          </h1>
          <p className="text-[#FAF7F2] text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {BUSINESS.NAME} ({BUSINESS.NAME_BN})-এ ঢাকাই মসলিন শাড়ি নির্বাচন, ওপেন পার্সেল পলিসি, নিকুঞ্জ-২ শোরুম ভিজিট ও কেয়ার সম্পর্কিত সব প্রশ্নের উত্তর।
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="max-w-4xl mx-auto px-6 -mt-6 relative z-20">
        <div className="bg-white rounded-2xl p-2 shadow-md border border-[#E8DFD5] flex items-center justify-center gap-2 flex-wrap">
          {[
            { id: "all", label: "সব প্রশ্ন (All)" },
            { id: "muslin", label: "খাঁটি ঢাকাই মসলিন শাড়ি" },
            { id: "delivery", label: "ডেলিভারি ও ওপেন পার্সেল" },
            { id: "showroom", label: "নিকুঞ্জ-২ শোরুম তথ্য" },
            { id: "saree-care", label: "শাড়ির যত্ন ও ড্রাই ক্লিন" },
            { id: "payment", label: "পেমেন্ট ও অর্ডার পদ্ধতি" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveCategory(tab.id);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? "bg-[#8B0000] text-[#D4AF37] shadow-xs"
                  : "text-[#1A1A1A] hover:bg-rose-50 hover:text-[#8B0000]"
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
                      isOpen ? "bg-[#8B0000] text-[#D4AF37]" : "bg-rose-50 text-[#8B0000]"
                    }`}>
                      <HelpCircle className="h-4 w-4" />
                    </div>
                    <span className="font-bold text-sm md:text-base text-[#1A1A1A] font-serif">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-neutral-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#8B0000]" : ""
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
        <div className="max-w-3xl mx-auto mt-14 bg-gradient-to-r from-[#8B0000] to-[#5A0000] text-white rounded-3xl p-8 md:p-10 text-center relative overflow-hidden shadow-xl border border-[#D4AF37]/30">
          <div className="relative z-10 space-y-4">
            <h3 className="text-xl md:text-2xl font-bold font-serif">
              আরও কোনো শাড়ি সম্পর্কে জানতে চান?
            </h3>
            <p className="text-neutral-200 text-sm max-w-lg mx-auto leading-relaxed">
              দুই কন্যার কাস্টমার কেয়ার টিম ও শোরুম প্রতিনিধি আপনাকে সহায়তা করতে প্রস্তুত। সরাসরি ফোন, হোয়াটসঅ্যাপ বা ফেসবুক মেসেঞ্জারে যোগাযোগ করুন।
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
              <a
                href={BUSINESS.WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-12 px-7 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-[0.14em] rounded-full transition-all shadow-md"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp ({BUSINESS.PHONE_ALT})</span>
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
                <span>Facebook (484K+)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
