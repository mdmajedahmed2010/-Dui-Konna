/**
 * Dui Konna (দুই কন্যা) — Terms & Conditions
 * Online Portal for Authentic Dhakai Muslin, Jamdani & Luxury Sarees
 * Founder: Shamima Nasrin • Flagship Showroom: Nikunja-2, Khilkhet, Dhaka-1229
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${BUSINESS.NAME} (${BUSINESS.NAME_BN})`,
  description:
    "Dui Konna Terms & Conditions: Open Parcel Policy, 100% Authentic Handloom Dhakai Muslin & Jamdani Guarantee, Cash on Delivery, and delivery terms.",
};

const sections = [
  {
    id: "01",
    title: "আমাদের পরিচয় ও ব্যবসায়িক দর্শন",
    content: `${BUSINESS.NAME} (${BUSINESS.NAME_BN}) বাংলাদেশের ৪৮৪,০০০+ মার্জিত রুচিশীল নারীদের আস্থার অনলাইন শাড়ি ও লাইফস্টাইল প্রতিষ্ঠান। 

স্বত্বাধিকারী ও প্রতিষ্ঠাতা: শামীমা নাসরিন (Shamima Nasrin)
ফ্ল্যাগশিপ শোরুম: ${BUSINESS.ADDRESS}
আমরা ঐতিহ্যবাহী মাস্টার তাঁতিদের হাতে বোনা ১০০% খাঁটি ঢাকাই মসলিন শাড়ি, ব্রাইডাল লাল মসলিন, ঢাকাই জামদানি এবং এক্সক্লুসিভ লাক্সারি কারচুপি শাড়ি সরবরাহ করি।`,
  },
  {
    id: "02",
    title: "অর্ডার প্রসেসিং ও ডেলিভারি পদ্ধতি",
    content: `অর্ডার করতে ওয়েবসাইটে সরাসরি কার্টে যোগ করে চেকআউট করুন অথবা আমাদের WhatsApp (${BUSINESS.PHONE_ALT}) বা Facebook Page-এ ইনবক্স করুন। 

✅ রেডি স্টক ও ডেলিভারি সুবিধা:
• ঢাকা সিটি ও সারা বাংলাদেশে সম্পূর্ণ Cash on Delivery (COD) প্রযোজ্য।
• ডেলিভারির সময় ডেলিভারি ম্যানের সামনে প্যাকেট খুলে চেক করার Open Parcel সুবিধা।
• ঢাকা সিটিতে ২৪–৪৮ ঘণ্টা।
• ঢাকার বাইরে ২–৩ কার্যদিবস।
• যেকোনো ২ বা ততোধিক শাড়ি অর্ডারে সারা দেশে ডেলিভারি সম্পূর্ণ ফ্রি!`,
  },
  {
    id: "03",
    title: "ডেলিভারি চার্জ ও সময়সূচী",
    content: `ডেলিভারি চার্জ:
• ঢাকা সিটির ভিতরে: ৳${BUSINESS.DELIVERY_CHARGE_INSIDE}
• ঢাকার বাইরে সারা বাংলাদেশে: ৳${BUSINESS.DELIVERY_CHARGE_OUTSIDE} (Steadfast / Pathao কুরিয়ার)
• ২ বা ততোধিক শাড়িতে ডেলিভারি চার্জ: ৳০ (সম্পূর্ণ ফ্রি)
• নিকুঞ্জ-২ শোরুম থেকে সরাসরি সেলফ-পিকআপ: ৳০ (ফ্রি)

ডেলিভারি সময়সীমা:
• ঢাকা সিটিতে: ২৪–৪৮ ঘণ্টা (১-২ দিন)
• ঢাকার বাইরে: ২–৩ কার্যদিবস`,
  },
  {
    id: "04",
    title: "Open Parcel Policy ও রিটার্ন নীতিমালা",
    content: `You have to check products in front of the delivery man. ডেলিভারি ম্যানের সামনে পার্সেল খুলে শাড়ির কাপড়, জরির কাজ, রঙ ও ব্লাউজ পিস দেখে নিন। কোনো সমস্যা পরিলক্ষিত হলে সাথে সাথে আমাদের কল করুন (${BUSINESS.PHONE})।

যৌক্তিক কারণ ছাড়া পণ্য ফেরত গ্রহণযোগ্য নয়। কোনো ত্রুটি থাকলে ডেলিভারি গ্রহণের সময় বা সর্বোচ্চ ২৪ ঘণ্টার মধ্যে আনবক্সিং প্রমাণ সহ আমাদের কাস্টমার সার্ভিসে যোগাযোগ করতে হবে অথবা নিকুঞ্জ-২ শোরুমে এসে ৭ দিনের মধ্যে এক্সচেঞ্জ করা যাবে।`,
  },
  {
    id: "05",
    title: "১০০% অথেনটিক ঢাকাই মসলিন নিশ্চয়তা",
    content: `${BUSINESS.NAME}-এর প্রতিটি পণ্য:
• ১০০% খাঁটি তাঁতে বোনা আসল ঢাকাই মসলিন ও জামদানি শাড়ি
• প্রতিটি শাড়ির গায়ে সঠিক মূল্য স্পষ্ট মুদ্রিত থাকে (Fixed & Transparent Pricing)
• বিশ্বস্ত ডেলিভারিম্যানের উপস্থিতিতে সরাসরি পরখ করে গ্রহণের শতভাগ নিশ্চয়তা`,
  },
  {
    id: "06",
    title: "Privacy ও তথ্যের নিরাপত্তা",
    content: `আপনার নাম, ফোন নম্বর ও ডেলিভারি ঠিকানা শুধুমাত্র কুরিয়ার ডেলিভারি সম্পন্ন করার কাজে ব্যবহার করা হয়। আমরা কখনো কোনো গ্রাহকের তথ্য তৃতীয় পক্ষের কাছে বিক্রি বা শেয়ার করি না।`,
  },
  {
    id: "07",
    title: "যোগাযোগ ও শোরুমের ঠিকানা",
    content: `যেকোনো প্রশ্ন, শাড়ির লাইভ ভিডিও বা শোরুম পরিদর্শনের জন্য:

শোরুম: ${BUSINESS.ADDRESS}
সময়: ${BUSINESS.STORE_HOURS} (সপ্তাহের ৭ দিনই খোলা)
হটলাইন: ${BUSINESS.PHONE}
হোয়াটসঅ্যাপ: ${BUSINESS.PHONE_ALT}
ইমেইল: ${BUSINESS.EMAIL}
Facebook: ${BUSINESS.FACEBOOK}`,
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      {/* Page Header */}
      <section className="bg-[#8B0000] py-16 md:py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#8B0000] translate-x-1/2 -translate-y-1/2 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#D4AF37] -translate-x-1/2 translate-y-1/2 blur-2xl" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] uppercase tracking-[0.28em] font-bold">
            <Sparkles className="h-3.5 w-3.5" />
            <span>TERMS OF SERVICE</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight font-serif">
            Terms &amp; Conditions
          </h1>
          <p className="text-[#FAF7F2] text-sm leading-relaxed">
            {BUSINESS.NAME} ({BUSINESS.NAME_BN})-এর সাথে কেনাকাটার নীতিমালা ও সেবাসমূহ।
          </p>
          <p className="text-[#D4AF37] text-xs font-mono font-bold">সর্বশেষ আপডেট: অক্টোবর ২০২৬</p>
        </div>
      </section>

      {/* Main Alert */}
      <section className="bg-[#6B0000] py-4 px-6 text-center border-t border-[#D4AF37]/30">
        <p className="text-[#FAF7F2] text-sm font-semibold tracking-wide">
          ✦ শতভাগ ওপেন পার্সেল চেকিং ও ক্যাশ অন ডেলিভারি নিশ্চয়তা ✦
        </p>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {sections.map((sec) => (
            <div key={sec.id} className="bg-white rounded-2xl p-6 md:p-8 border border-[#E8DFD5] shadow-xs space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-[#8B0000] bg-rose-50 px-2.5 py-1 rounded-lg border border-[#8B0000]/20">
                  {sec.id}
                </span>
                <h2 className="font-bold text-base md:text-lg text-[#1A1A1A] font-serif">{sec.title}</h2>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed whitespace-pre-line font-medium">
                {sec.content}
              </p>
            </div>
          ))}

          {/* Bottom CTA */}
          <div className="pt-8 text-center space-y-4">
            <p className="text-sm text-neutral-600">
              আমাদের প্রোডাক্ট সম্পর্কিত যে কোনো জিজ্ঞাসা থাকলে নিঃসংকোচে যোগাযোগ করুন:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-8 bg-[#8B0000] text-[#D4AF37] text-xs font-bold uppercase tracking-[0.16em] rounded-full hover:bg-[#6B0000] hover:text-white transition-all shadow-md"
              >
                যোগাযোগ পৃষ্ঠা →
              </Link>
              <Link
                href="/delivery-info"
                className="inline-flex items-center justify-center h-12 px-8 bg-white text-[#1A1A1A] border border-[#E8DFD5] text-xs font-bold uppercase tracking-[0.16em] rounded-full hover:bg-[#FAF7F2] hover:border-[#D4AF37] transition-all shadow-xs"
              >
                ডেলিভারি নির্দেশিকা
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
