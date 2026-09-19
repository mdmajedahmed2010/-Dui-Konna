/**
 * Tazeen's — Terms & Conditions
 * Online Portal for Smart & Elegant Heritage Sarees & Boutique Collections
 * Showrooms: Pink City Gulshan-2 & Sector 11 Uttara, Dhaka
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${BUSINESS.NAME}`,
  description:
    "Tazeen's Terms & Conditions: Open Parcel Policy, 100% Authentic Handloom & Saree Guarantee, Cash on Delivery, and delivery guidelines.",
};

const sections = [
  {
    id: "01",
    title: "আমাদের পরিচয় ও ব্যবসায়িক দর্শন",
    content: `${BUSINESS.NAME} (${BUSINESS.NAME_BN}) বাংলাদেশের রুচিশীল নারীদের জন্য এক্সক্লুসিভ শাড়ি ও মার্জিত বুটিক পোশাকের বিশ্বস্ত ঠিকানা। 

শোরুম ১: ${BUSINESS.SHOWROOM_GULSHAN}
শোরুম ২: ${BUSINESS.SHOWROOM_UTTARA}
আমরা নিজস্ব তত্ত্বাবধানে তৈরি প্রিমিয়াম সিকুইন পাড় শাড়ি, ঐতিহ্যবাহী গোল্ড জরি কাতান এবং খাঁটি সুতার হ্যান্ডলুম বুটিক পোশাক সরবরাহ করি।`,
  },
  {
    id: "02",
    title: "অর্ডার প্রসেসিং ও ডেলিভারি পদ্ধতি",
    content: `অর্ডার করতে ওয়েবসাইটে কার্টে যোগ করে চেকআউট করুন অথবা আমাদের WhatsApp (${BUSINESS.PHONE}) বা Facebook Page-এ ইনবক্স করুন। 

✅ Ready Stock (রেডি স্টক):
• ঢাকা সিটি ও সারা বাংলাদেশে সম্পূর্ণ Cash on Delivery (COD) প্রযোজ্য।
• ডেলিভারির সময় ডেলিভারি ম্যানের সামনে প্যাকেট খুলে চেক করার Open Parcel সুবিধা।
• ঢাকা সিটিতে ২৪–৪৮ ঘন্টা (১-২ কার্যদিবস)।
• ঢাকার বাইরে ২–৪ কার্যদিবস।`,
  },
  {
    id: "03",
    title: "ডেলিভারি চার্জ ও সময়সূচী",
    content: `ডেলিভারি চার্জ:
• ঢাকা সিটির ভিতরে: ৳${BUSINESS.DELIVERY_CHARGE_INSIDE}
• ঢাকার বাইরে সারা বাংলাদেশে: ৳${BUSINESS.DELIVERY_CHARGE_OUTSIDE} (Steadfast / Pathao / RedX Courier)

ডেলিভারি সময়সীমা:
• ঢাকা সিটিতে: ২৪–৪৮ ঘন্টা (১-২ কার্যদিবস)
• ঢাকার বাইরে: ২–৪ কার্যদিবস`,
  },
  {
    id: "04",
    title: "Open Parcel Policy ও এক্সচেঞ্জ নীতিমালা",
    content: `You have to check products in front of the delivery man. ডেলিভারি ম্যানের সামনে পার্সেল খুলে শাড়ির ফেব্রিক, কাজ ও রঙ দেখে নিন। কোনো সমস্যা পরিলক্ষিত হলে সাথে সাথে আমাদের কল করুন (${BUSINESS.PHONE})।

যৌক্তিক কারণ ছাড়া পণ্য ফেরত গ্রহণযোগ্য নয়। কোনো ত্রুটি থাকলে ডেলিভারি গ্রহণের সময় বা সর্বোচ্চ ৪৮ ঘণ্টার মধ্যে আনবক্সিং প্রমাণ সহ আমাদের কাস্টমার সার্ভিসে যোগাযোগ করতে হবে অথবা সরাসরি গুলশান বা উত্তরা শোরুমে এসে এক্সচেঞ্জ করে নিতে পারেন।`,
  },
  {
    id: "05",
    title: "১০০% অথেনটিক হ্যান্ডলুম ও কোয়ালিটি নিশ্চয়তা",
    content: `${BUSINESS.NAME}-এর প্রতিটি শাড়ি:
• প্রিমিয়াম কোয়ালিটি ফেব্রিক (টিস্যু, লিনেন, কটন ও সিল্ক ব্লেন্ড)
• নিখুঁত মেটালিক সিকুইন পাড় ও ক্লাসিক অ্যান্টিক গোল্ড জরি বর্ডার
• বিশ্বস্ত ডেলিভারিম্যানের উপস্থিতিতে সরাসরি পরখ করে গ্রহণের শতভাগ নিশ্চয়তা`,
  },
  {
    id: "06",
    title: "Privacy ও তথ্যের নিরাপত্তা",
    content: `আপনার নাম, ফোন নম্বর ও ডেলিভারি ঠিকানা শুধুমাত্র কুরিয়ার ডেলিভারি সম্পন্ন করার কাজে ব্যবহার করা হয়। আমরা কখনো কোনো গ্রাহকের তথ্য তৃতীয় পক্ষের কাছে বিক্রি বা শেয়ার করি না।`,
  },
  {
    id: "07",
    title: "যোগাযোগ ও কাস্টমার কেয়ার",
    content: `যেকোনো প্রশ্ন, শাড়ির লাইভ ভিডিও বা পরামর্শের জন্য:

শোরুম ১: ${BUSINESS.SHOWROOM_GULSHAN}
শোরুম ২: ${BUSINESS.SHOWROOM_UTTARA}
সময়: ${BUSINESS.STORE_HOURS}
ফোন / WhatsApp: ${BUSINESS.PHONE} / ${BUSINESS.PHONE_ALT}
ইমেইল: ${BUSINESS.EMAIL}
Facebook: ${BUSINESS.FACEBOOK}`,
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      {/* Page Header */}
      <section className="bg-[#50001B] py-16 md:py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#720026] translate-x-1/2 -translate-y-1/2 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#D4AF37] -translate-x-1/2 translate-y-1/2 blur-2xl" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] uppercase tracking-[0.28em] font-bold">
            <Sparkles className="h-3.5 w-3.5" />
            <span>TERMS OF SERVICE</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight font-heading">
            Terms & Conditions
          </h1>
          <p className="text-[#E8DFD5] text-sm leading-relaxed">
            {BUSINESS.NAME}-এ কেনাকাটা করার পূর্বে আমাদের শর্তাবলী ও সেবা নীতিমালা পড়ে নিন।
          </p>
          <p className="text-[#D4AF37] text-xs font-mono font-bold">সর্বশেষ আপডেট: সেপ্টেম্বর ২০২৬</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-7">
          {sections.map((section) => (
            <div
              key={section.id}
              id={`section-${section.id}`}
              className="rounded-2xl p-6 md:p-8 bg-white border border-[#E8DFD5] border-l-4 border-l-[#720026] shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[11px] font-mono text-[#720026] font-bold bg-rose-50 px-2.5 py-0.5 rounded-full border border-[#720026]/30">
                  {section.id}
                </span>
                <h2 className="text-base md:text-lg font-bold text-[#1A1A1A]">
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
              <span className="text-[#720026] text-sm">✦</span>
              <p className="text-xs text-[#1A1A1A] font-bold">
                {BUSINESS.NAME}-এ অর্ডার করে আপনি এই Terms & Conditions-এ সম্মত হচ্ছেন
              </p>
              <span className="text-[#720026] text-sm">✦</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href="/refund-policy"
                className="text-xs text-[#720026] hover:text-[#50001B] hover:underline font-bold uppercase tracking-wider"
              >
                Open Parcel Policy →
              </Link>
              <span className="text-[#D4AF37] hidden sm:inline">|</span>
              <Link
                href="/delivery-info"
                className="text-xs text-[#720026] hover:text-[#50001B] hover:underline font-bold uppercase tracking-wider"
              >
                Delivery Guide →
              </Link>
              <span className="text-[#D4AF37] hidden sm:inline">|</span>
              <Link
                href="/faq"
                className="text-xs text-[#720026] hover:text-[#50001B] hover:underline font-bold uppercase tracking-wider"
              >
                FAQ Page →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
