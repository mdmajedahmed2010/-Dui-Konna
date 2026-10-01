/**
 * Shopping Queen by Orni — Privacy Policy
 * Authentic Pakistani Lawn, Festive Couture & Kim Pearl Skincare in Bangladesh
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ShieldCheck } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy Policy | ${BUSINESS.NAME}`,
  description:
    "Shopping Queen by Orni Privacy Policy: আমরা আপনার ব্যক্তিগত তথ্যের সর্বোচ্চ গোপনীয়তা ও সুরক্ষায় প্রতিশ্রুতিবদ্ধ।",
};

const privacySections = [
  {
    id: "01",
    title: "আমরা কোন তথ্য সংগ্রহ করি?",
    content: `আপনি যখন আমাদের ওয়েবসাইট, WhatsApp (${BUSINESS.PHONE}) বা Facebook Page-এ পোশাক বা স্কিনকেয়ার প্রোডাক্ট অর্ডার করেন, তখন আমরা কেবল প্রয়োজনীয় তথ্য গ্রহণ করি:
• আপনার পূর্ণ নাম
• মোবাইল / যোগাযোগ নম্বর
• ডেলিভারি ঠিকানা (ঢাকা অথবা দেশের অন্যান্য জেলা)
• ইমেইল এড্রেস (যদি প্রদান করেন)

আমরা কোনো Payment Card তথ্য, গোপন পিন নম্বর বা সংবেদনশীল ব্যাংকিং ডাটা সংরক্ষণ করি না। ক্যাশ অন ডেলিভারি (COD) পদ্ধতিতে পার্সেল হাতে পেয়ে চেক করে মূল্য পরিশোধ করবেন।`,
  },
  {
    id: "02",
    title: "আমরা এই তথ্য কীভাবে ব্যবহার করি?",
    content: `আপনার প্রদত্ত তথ্য শুধুমাত্র নিম্নলিখিত উদ্দেশ্যে ব্যবহৃত হয়:
• অর্ডার নিশ্চিতকরণ ও প্রসেসিং
• কুরিয়ার ডেলিভারি কোঅর্ডিনেশন (Steadfast Courier / Pathao / Paperfly)
• কাস্টমার সাপোর্ট ও পার্সেল ট্র্যাকিং নোটিফিকেশন প্রদান
• নতুন কালেকশন বা অর্ণি ইসলামের বিশেষ অফার আপডেট (সম্মতিক্রমে)`,
  },
  {
    id: "03",
    title: "তৃতীয় পক্ষের সাথে তথ্য শেয়ারিং নীতি",
    content: `আমরা আপনার ব্যক্তিগত তথ্য কখনো কোনো তৃতীয় পক্ষের কাছে বিক্রি, ভাড়া বা বাণিজ্যিক প্রচারণামূলক উদ্দেশ্যে হস্তান্তর করি না।

শুধুমাত্র ডেলিভারি পার্টনার (কুরিয়ার প্রতিনিধি) আপনার নাম, ঠিকানা ও ফোন নম্বর দেখতে পান — যাতে তারা নিরাপদে আপনার কাছে ওপেন পার্সেল পৌঁছে দিতে পারেন।`,
  },
  {
    id: "04",
    title: "Facebook Messenger & WhatsApp যোগাযোগ",
    content: `Facebook Messenger বা WhatsApp-এর মাধ্যমে প্রেরিত প্রতিটি বার্তা, স্ক্রিনশট ও অর্ডার ডিটেইলস সম্পূর্ণ নিরাপদ ও শুধুমাত্র অর্ডার সমন্বয়ের কাজে ব্যবহৃত হয়।`,
  },
  {
    id: "05",
    title: "তথ্যের সর্বোচ্চ নিরাপত্তা ও এনক্রিপশন",
    content: `আমাদের প্ল্যাটফর্মে আধুনিক SSL এনক্রিপশন ব্যবহৃত হয়। গ্রাহকের সংরক্ষিত তথ্য সুরক্ষিত ডাটাবেজে সংরক্ষিত থাকে এবং শুধুমাত্র অনুমোদিত টিম মেম্বারদের দ্বারা পরিচালিত হয়।`,
  },
  {
    id: "06",
    title: "আপনার অধিকার ও আমাদের সাথে যোগাযোগ",
    content: `আপনার সংরক্ষিত তথ্য সংশোধন বা ডিলিট করার পূর্ণ অধিকার রয়েছে। যেকোনো তথ্যের জন্য আমাদের হটলাইন বা ইমেইলে যোগাযোগ করতে পারেন:

হেডকোয়ার্টার্স: ${BUSINESS.ADDRESS}
হটলাইন ও WhatsApp: ${BUSINESS.PHONE} / ${BUSINESS.PHONE_ALT}
ইমেইল: ${BUSINESS.EMAIL}`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FAF6F0]">
      {/* Page Header */}
      <section className="bg-[#6B1D2F] py-16 md:py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#6B1D2F] -translate-x-1/2 translate-y-1/2 blur-2xl" />
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#D4AF37] translate-x-1/2 -translate-y-1/2 blur-2xl" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] uppercase tracking-[0.28em] font-bold">
            <Sparkles className="h-3.5 w-3.5" />
            <span>DATA PROTECTION</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight font-serif">
            Privacy Policy
          </h1>
          <p className="text-[#FAF6F0] text-sm leading-relaxed">
            {BUSINESS.NAME} আপনার ব্যক্তিগত তথ্যের গোপনীয়তা ও নিরাপত্তাকে সর্বোচ্চ সম্মান জানায়।
          </p>
          <p className="text-[#D4AF37] text-xs font-mono font-bold">সর্বশেষ আপডেট: অক্টোবর ২০২৬</p>
        </div>
      </section>

      {/* Commitment Strip */}
      <section className="bg-[#521322] py-4 px-6 text-center border-t border-[#D4AF37]/30">
        <p className="text-[#FAF6F0] text-sm font-semibold tracking-wide">
          ✦ আপনার তথ্য কখনোই তৃতীয় পক্ষের কাছে বিক্রি বা অননুমোদিত শেয়ার করা হয় না ✦
        </p>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Intro */}
          <div className="bg-white border border-[#E8DFD5] rounded-2xl p-6 md:p-8 mb-8 border-l-4 border-l-[#6B1D2F] shadow-xs">
            <p className="text-sm text-neutral-600 leading-relaxed font-medium">
              {BUSINESS.NAME} ({BUSINESS.NAME_BN}) আপনার আস্থাকে সর্বোচ্চ মূল্যায়ন করে। এই গোপনীয়তা নীতি
              আপনাকে স্পষ্টভাবে অবহিত করে আমরা কীভাবে আপনার তথ্য নিরাপদ রাখি।
              আমাদের ওয়েবসাইট বা ফেসবুক পেজের মাধ্যমে কেনাকাটা করার মাধ্যমে আপনি এই নীতিমালায় সম্মতি প্রকাশ করছেন।
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-5 mb-12">
            {privacySections.map((section) => (
              <div
                key={section.id}
                className="bg-white border border-[#E8DFD5] rounded-2xl p-6 border-l-4 border-l-[#6B1D2F] shadow-xs"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] font-mono text-[#6B1D2F] font-bold bg-rose-50 px-2.5 py-0.5 rounded-full border border-[#6B1D2F]/30">
                    {section.id}
                  </span>
                  <h2 className="text-base font-bold text-[#1A1A1A] font-serif">{section.title}</h2>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed whitespace-pre-line font-medium">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="bg-[#F4EFEA] rounded-3xl p-8 text-center border border-[#D4AF37]/30 shadow-xs">
            <h3 className="text-lg font-bold text-[#1A1A1A] mb-2 font-serif">
              গোপনীয়তা বা তথ্য সুরক্ষা সম্পর্কে প্রশ্ন আছে?
            </h3>
            <p className="text-sm text-neutral-600 mb-6 max-w-md mx-auto">
              আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন — আমরা আপনার প্রতিটি প্রশ্নের উত্তর দিতে আনন্দিত।
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={BUSINESS.WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-8 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-[0.14em] rounded-full transition-all shadow-sm"
              >
                WhatsApp Chat
              </a>
              <a
                href={`mailto:${BUSINESS.EMAIL}`}
                className="inline-flex items-center justify-center h-12 px-7 border-2 border-[#6B1D2F] text-[#6B1D2F] text-xs font-bold uppercase tracking-[0.14em] rounded-full hover:bg-[#6B1D2F] hover:text-white transition-all"
              >
                {BUSINESS.EMAIL}
              </a>
            </div>
          </div>

          {/* Policy Links */}
          <div className="flex items-center justify-center gap-6 text-xs text-neutral-500 pt-8 font-semibold uppercase tracking-wider">
            <Link href="/terms" className="hover:text-[#6B1D2F] transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-[#D4AF37]">·</span>
            <Link href="/refund-policy" className="hover:text-[#6B1D2F] transition-colors">
              Open Parcel & Refund
            </Link>
            <span className="text-[#D4AF37]">·</span>
            <Link href="/contact" className="hover:text-[#6B1D2F] transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
