/**
 * 3 sis xclusive — Privacy Policy
 * Authentic Pakistani Luxury Suits & Designer Collections
 * Outlet: Sylhet, Bangladesh
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ShieldCheck } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy — 3 sis xclusive",
  description:
    "3 sis xclusive Privacy Policy: আমরা আপনার ব্যক্তিগত তথ্যের নিরাপত্তাকে সর্বোচ্চ গুরুত্ব দিই।",
};

const privacySections = [
  {
    id: "01",
    title: "আমরা কোন তথ্য সংগ্রহ করি?",
    content: `আপনি যখন আমাদের ওয়েবসাইট, WhatsApp (01674-054386) বা Facebook Page-এ অর্ডার বা ইনকোয়ারি করেন, তখন আমরা নিচের তথ্য সংগ্রহ করি:
• আপনার নাম
• মোবাইল / ফোন নম্বর
• ডেলিভারি ঠিকানা (সিলেট অথবা দেশের অন্যান্য জেলা)
• ইমেইল এড্রেস (যদি প্রদান করেন)

আমরা কোনো Payment Card তথ্য, গোপন পাসওয়ার্ড বা সংবেদনশীল ব্যাংকিং তথ্য সংগ্রহ বা সংরক্ষণ করি না।`,
  },
  {
    id: "02",
    title: "আমরা এই তথ্য কীভাবে ব্যবহার করি?",
    content: `আপনার প্রদত্ত তথ্য শুধুমাত্র নিম্নলিখিত উদ্দেশ্যে ব্যবহৃত হয়:
• অর্ডার কনফার্মেশন ও প্রসেসিং
• কুরিয়ার ডেলিভারি কোঅর্ডিনেশন (Steadfast Courier / SA Paribahan)
• কাস্টমার সাপোর্ট ও প্রি-অর্ডার আপডেট প্রদান
• স্পেশাল ঈদ বা সিজনাল কালেকশন সংক্রান্ত আপডেট (গ্রাহকের সম্মতিক্রমে)`,
  },
  {
    id: "03",
    title: "তৃতীয় পক্ষের সাথে তথ্য শেয়ারিং নীতি",
    content: `আমরা আপনার ব্যক্তিগত তথ্য কখনো কোনো তৃতীয় পক্ষের কাছে বিক্রি, ভাড়া বা বাণিজ্যিক উদ্দেশ্যে শেয়ার করি না।

শুধুমাত্র ডেলিভারি পার্টনার (কুরিয়ার প্রতিনিধি) আপনার নাম, ঠিকানা ও ফোন নম্বর দেখতে পান — যাতে তারা সময়মতো আপনার পার্সেল পৌঁছে দিতে পারেন।`,
  },
  {
    id: "04",
    title: "Facebook & WhatsApp মেসেজিং",
    content: `Facebook Messenger বা WhatsApp-এর মাধ্যমে পাঠানো যেকোনো কথোপকথন ও অর্ডার ডিটেইলস সম্পূর্ণ নিরাপদ ও শুধুমাত্র অর্ডার ম্যানেজমেন্টের জন্য ব্যবহার করা হয়।`,
  },
  {
    id: "05",
    title: "তথ্যের সর্বোচ্চ নিরাপত্তা",
    content: `আমাদের প্ল্যাটফর্মে SSL এনক্রিপশন ব্যবহৃত হয়। গ্রাহকের সংরক্ষিত তথ্য সুরক্ষিত ডাটাবেজে এনক্রিপ্ট অবস্থায় থাকে এবং শুধুমাত্র অনুমোদিত টিম মেম্বারদের দ্বারা পরিচালিত হয়।`,
  },
  {
    id: "06",
    title: "আপনার অধিকার ও যোগাযোগ",
    content: `আপনার সংরক্ষিত তথ্য সংশোধন বা ডিলিট করার পূর্ণ অধিকার রয়েছে। এ সংক্রান্ত যেকোনো তথ্যের জন্য আমাদের আউটলেটে সরাসরি যোগাযোগ করতে পারেন অথবা হটলাইনে কল করতে পারেন:

শোরুম: ${BUSINESS.ADDRESS}
হটলাইন: ${BUSINESS.PHONE}
ইমেইল: ${BUSINESS.EMAIL}`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#faf7f5]">
      {/* Page Header */}
      <section className="bg-[#8B263E] py-16 md:py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#D4AF37] -translate-x-1/2 translate-y-1/2 blur-2xl" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] uppercase tracking-[0.28em] font-bold">
            <Sparkles className="h-3.5 w-3.5" />
            <span>DATA PROTECTION</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight font-heading">
            Privacy Policy
          </h1>
          <p className="text-[#ebdcd0] text-sm leading-relaxed">
            আমরা আপনার ব্যক্তিগত তথ্যের গোপনীয়তা ও নিরাপত্তাকে সর্বোচ্চ সম্মান জানাই।
          </p>
          <p className="text-[#D4AF37]/80 text-xs font-mono font-bold">সর্বশেষ আপডেট: সেপ্টেম্বর ২০২৬</p>
        </div>
      </section>

      {/* Commitment Strip */}
      <section className="bg-[#8B263E] py-4 px-6 text-center border-t border-[#D4AF37]/30">
        <p className="text-[#faf7f5] text-sm font-semibold tracking-wide">
          ✦ আপনার তথ্য কখনোই তৃতীয় পক্ষের কাছে বিক্রি বা অপব্যবহার করা হয় না ✦
        </p>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Intro */}
          <div className="bg-white border border-[#ebdcd0] rounded-2xl p-6 md:p-8 mb-8 border-l-4 border-l-[#D4AF37] shadow-xs">
            <p className="text-sm text-neutral-600 leading-relaxed font-medium">
              3 sis xclusive আপনার আস্থাকে সর্বোচ্চ মূল্যায়ন করে। এই গোপনীয়তা নীতি
              আপনাকে স্পষ্টভাবে অবহিত করে আমরা কোন তথ্য সংগ্রহ করি, কীভাবে ব্যবহার করি এবং কীভাবে সুরক্ষিত রাখি।
              আমাদের ওয়েবসাইট বা ফেসবুক পেজের মাধ্যমে কেনাকাটা করার মাধ্যমে আপনি এই নীতিমালায় সম্মতি প্রদান করছেন।
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-5 mb-12">
            {privacySections.map((section) => (
              <div
                key={section.id}
                className="bg-white border border-[#ebdcd0] rounded-2xl p-6 border-l-4 border-l-[#8B263E] shadow-xs"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] font-mono text-[#8B263E] font-bold bg-[#fdf5fa] px-2.5 py-0.5 rounded-full border border-[#f0d0e6]">
                    {section.id}
                  </span>
                  <h2 className="text-base font-bold text-[#1e1622]">{section.title}</h2>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed whitespace-pre-line font-medium">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="bg-[#f5efe9] rounded-3xl p-8 text-center border border-[#D4AF37]/30 shadow-xs">
            <h3 className="text-lg font-bold text-[#1e1622] mb-2 font-heading">
              গোপনীয়তা বা তথ্য সুরক্ষা সম্পর্কে প্রশ্ন আছে?
            </h3>
            <p className="text-sm text-neutral-600 mb-6 max-w-md mx-auto">
              আমাদের সাথে সরাসরি যোগাযোগ করুন — আমরা আপনার প্রতিটি প্রশ্নের উত্তর দিতে আনন্দিত।
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={BUSINESS.WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-8 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-[0.14em] rounded-full transition-all shadow-sm"
              >
                WhatsApp Chat
              </a>
              <a
                href={`mailto:${BUSINESS.EMAIL}`}
                className="inline-flex items-center justify-center h-12 px-7 border-2 border-[#8B263E] text-[#8B263E] text-xs font-bold uppercase tracking-[0.14em] rounded-full hover:bg-[#8B263E] hover:text-white transition-all"
              >
                {BUSINESS.EMAIL}
              </a>
            </div>
          </div>

          {/* Policy Links */}
          <div className="flex items-center justify-center gap-6 text-xs text-neutral-500 pt-8 font-semibold uppercase tracking-wider">
            <Link href="/terms" className="hover:text-[#8B263E] transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-[#D4AF37]">·</span>
            <Link
              href="/refund-policy"
              className="hover:text-[#8B263E] transition-colors"
            >
              Refund Policy
            </Link>
            <span className="text-[#D4AF37]">·</span>
            <Link href="/contact" className="hover:text-[#8B263E] transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
