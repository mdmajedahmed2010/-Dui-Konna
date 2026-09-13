/**
 * 3 sis xclusive — Terms & Conditions
 * Authentic Pakistani Luxury Suits & Designer Collections
 * Outlet: Sylhet, Bangladesh
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, MapPin, Phone, ShieldCheck } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions — 3 sis xclusive",
  description:
    "3 sis xclusive Terms & Conditions: Open Parcel Policy, Ready Stock Cash on Delivery, and Pakistani Pre-Order guidelines.",
};

const sections = [
  {
    id: "01",
    title: "আমাদের পরিচয় ও বুটিক মডেল",
    content: `3 sis xclusive সিলেটে প্রিমিয়াম পাকিস্তানি লাক্সারি লন, ব্রাইডাল প্রিট, ভেলভেট ও এক্সক্লুসিভ ডিজাইনার পোশাকের একটি বিশ্বস্ত বুটিক ব্র্যান্ড। 

আমাদের ফ্ল্যাগশিপ আউটলেট: Parents View (1st Floor), R/A AL-Helal, 20 Nayasarak Point (Beside Noyashorok Kabab / Nari Shop Building), Sylhet।
আমরা সরাসরি পাকিস্তান থেকে ১০০% অরিজিনাল ব্র্যান্ডেড কালেকশন সংগ্রহ করি।`,
  },
  {
    id: "02",
    title: "Order Process ও Pre-Order নীতিমালা",
    content: `অর্ডার করতে ওয়েবসাইটে সরাসরি চেকআউট করুন অথবা আমাদের WhatsApp (01674-054386) বা Facebook Page-এ ইনবক্স করুন। 

✅ Ready Stock (রেডি স্টক):
• সিলেট ভেতরে ও সারা বাংলাদেশে সম্পূর্ণ Cash on Delivery (COD) প্রযোজ্য।
• ডেলিভারির সময় ডেলিভারি ম্যানের সামনে প্যাকেট খুলে চেক করার Open Parcel সুবিধা।

✅ Pakistani Pre-Order (প্রি-অর্ডার):
• Be 100% sure before placing an order. পাকিস্তানি ডিজাইনারদের সাথে প্রসেস শুরুর পর Order cancel is Not Allowed।
• প্রি-অর্ডারে ২০%–৩০% অগ্রিম পেমেন্ট বাধ্যতামূলক (বিশেষ ডিজাইনের ক্ষেত্রে ৫০%)।
• ডেলিভারি সময়: ২৫–৩৫ কার্যদিবস।
• নির্দিষ্ট মেয়াদের মধ্যে ডেলিভারি দিতে না পারলে আপনার অগ্রিম টাকা তাৎক্ষণিকভাবে (Instantly) ফেরত দেওয়া হবে।`,
  },
  {
    id: "03",
    title: "Delivery Policy ও চার্জ",
    content: `ডেলিভারি চার্জ:
• সিলেট সিটির ভিতরে: ৳80
• সিলেটের বাইরে সারা বাংলাদেশে: ৳150 (Steadfast Courier / SA Paribahan)

ডেলিভারি সময়:
• সিলেট সিটিতে: ২৪–৪৮ ঘন্টা (১-২ কার্যদিবস)
• সিলেটের বাইরে: ২–৪ কার্যদিবস`,
  },
  {
    id: "04",
    title: "Open Parcel Policy ও এক্সচেঞ্জ নীতিমালা",
    content: `You have to check products in front of the delivery man. ডেলিভারি ম্যানের সামনে পার্সেল খুলে ফেব্রিক ও সাইজ দেখে নিন। কোনো সমস্যা পরিলক্ষিত হলে সাথে সাথে আমাদের কল করুন (01674-054386)।

যৌক্তিক কারণ ছাড়া পণ্য ফেরত গ্রহণযোগ্য নয়। সাইজ সংক্রান্ত কোনো এক্সচেঞ্জ প্রয়োজন হলে সর্বোচ্চ ৩ দিনের মধ্যে যোগাযোগ করতে হবে।`,
  },
  {
    id: "05",
    title: "পণ্যের গুণমান ও ১০০% অরিজিনালিটি নিশ্চয়তা",
    content: `3 sis xclusive-এর প্রতিটি পোশাক:
• ১০০% আসল পাকিস্তানি ব্র্যান্ডেড ফেব্রিক ও ড্রেস (Aghanoor, Sadabahar, Gul Ahmed, Maria.B)
• নিখুঁত কারুকাজ ও উন্নত ফেব্রিক কোয়ালিটি
• শোরুমে সরাসরি এসে যাচাই করে ট্রায়াল দেওয়ার সুবিধা`,
  },
  {
    id: "06",
    title: "Privacy ও তথ্যের নিরাপত্তা",
    content: `আপনার নাম, ফোন নম্বর ও ডেলিভারি ঠিকানা শুধুমাত্র অর্ডার ডেলিভারি সম্পন্ন করার কাজে ব্যবহার করা হয়। আমরা কখনো কোনো গ্রাহকের তথ্য তৃতীয় পক্ষের কাছে বিক্রি বা শেয়ার করি না।`,
  },
  {
    id: "07",
    title: "যোগাযোগ ও আউটলেট ভিজিট",
    content: `যেকোনো প্রশ্ন, অর্ডার ট্র্যাকিং বা পরামর্শের জন্য:

শোরুম: ${BUSINESS.ADDRESS}
সময়: শনি–বৃহস্পতি ১০:৩০ AM – ৯:৩০ PM | শুক্র ৩:০০ PM – ১০:০০ PM
ফোন / WhatsApp: ${BUSINESS.PHONE}
Facebook: ${BUSINESS.FACEBOOK}`,
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#faf7f5]">
      {/* Page Header */}
      <section className="bg-[#8B263E] py-16 md:py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#D4AF37] translate-x-1/2 -translate-y-1/2 blur-2xl" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] uppercase tracking-[0.28em] font-bold">
            <Sparkles className="h-3.5 w-3.5" />
            <span>TERMS OF SERVICE</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight font-heading">
            Terms & Conditions
          </h1>
          <p className="text-[#ebdcd0] text-sm leading-relaxed">
            3 sis xclusive-এ কেনাকাটা করার আগে আমাদের শর্তাবলী ও সেবা নীতিমালা পড়ে নিন।
          </p>
          <p className="text-[#D4AF37]/80 text-xs font-mono font-bold">সর্বশেষ আপডেট: সেপ্টেম্বর ২০২৬</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-7">
          {sections.map((section) => (
            <div
              key={section.id}
              id={`section-${section.id}`}
              className="rounded-2xl p-6 md:p-8 bg-white border border-[#ebdcd0] border-l-4 border-l-[#8B263E] shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[11px] font-mono text-[#8B263E] font-bold bg-[#fdf5fa] px-2.5 py-0.5 rounded-full border border-[#f0d0e6]">
                  {section.id}
                </span>
                <h2 className="text-base md:text-lg font-bold text-[#1e1622]">
                  {section.title}
                </h2>
              </div>
              <div className="text-sm text-neutral-600 leading-relaxed whitespace-pre-line font-medium">
                {section.content}
              </div>
            </div>
          ))}

          {/* Acceptance Notice */}
          <div className="text-center pt-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#D4AF37]/40 shadow-xs">
              <span className="text-[#D4AF37] text-sm">✦</span>
              <p className="text-xs text-[#8B263E] font-bold">
                3 sis xclusive-এ অর্ডার করে আপনি এই Terms & Conditions-এ সম্মত হচ্ছেন
              </p>
              <span className="text-[#D4AF37] text-sm">✦</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href="/refund-policy"
                className="text-xs text-[#8B263E] hover:underline font-bold uppercase tracking-wider"
              >
                Refund Policy →
              </Link>
              <span className="text-[#D4AF37] hidden sm:inline">|</span>
              <Link
                href="/contact"
                className="text-xs text-[#8B263E] hover:underline font-bold uppercase tracking-wider"
              >
                Contact & Outlet →
              </Link>
              <span className="text-[#D4AF37] hidden sm:inline">|</span>
              <Link
                href="/privacy-policy"
                className="text-xs text-[#8B263E] hover:underline font-bold uppercase tracking-wider"
              >
                Privacy Policy →
              </Link>
            </div>

            <div className="pt-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center h-12 px-10 bg-[#8B263E] text-white text-xs font-bold uppercase tracking-[0.16em] rounded-full hover:bg-[#280728] transition-all shadow-md border border-[#D4AF37]/40"
              >
                Explore Collections
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
