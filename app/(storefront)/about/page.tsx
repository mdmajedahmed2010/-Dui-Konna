import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, MapPin, Phone, ShieldCheck, Heart, Award, CheckCircle2, Truck, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { ASSETS } from "@/lib/demo-data";

export const metadata: Metadata = {
  title: `About Us | ${BUSINESS.NAME} — Exclusive Pakistani Lawn, Festive Couture & Kim Pearl Skincare`,
  description:
    "Discover Shopping Queen by Orni (শপিং কুইন বাই অর্ণি) — Bangladesh's trusted fashion & skincare house founded by Orni Islam. 190,000+ Facebook community, nationwide Open Parcel Cash on Delivery, Pakistani Lawn, festive partywear, and authentic Kim Whitening Pearl & Snowlotus Cream.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF6F0]">
      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 bg-[#6B1D2F] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.25),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span className="text-[10.5px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold">
              আমাদের পরিচিতি • ABOUT SHOPPING QUEEN BY ORNI
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight font-serif mb-4 text-white">
            {BUSINESS.NAME}
          </h1>
          <p className="text-sm md:text-base text-neutral-200 leading-relaxed font-sans max-w-2xl mx-auto">
            {BUSINESS.TAGLINE} — বাংলাদেশের ১৯০,০০০+ মার্জিত রুচিশীল নারীদের আস্থার প্রতীক। অরিজিনাল পাকিস্তানি লন, এক্সক্লুসিভ পার্টিওয়্যার এবং বিশ্বস্ত থাই কিম পার্ল হোয়াইটেনিং স্কিনকেয়ার।
          </p>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Brand Photo */}
          <div className="lg:col-span-6 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-[#E8DFD5] bg-[#6B1D2F]">
            <Image
              src="/shoppingqueen-assets/sq-product-03-rose-pink.jpg"
              alt="Shopping Queen by Orni - Founder Collection"
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#1A1A1A]/95 backdrop-blur-md border border-[#D4AF37]/40 px-5 py-3 rounded-xl text-white shadow-lg">
              <p className="text-[9px] uppercase tracking-[0.22em] font-bold text-[#D4AF37] flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
                FOUNDER & BRAND AMBASSADOR: ORNI ISLAM
              </p>
              <p className="text-xs font-semibold mt-0.5">190,000+ Facebook Community & Nationwide Delivery</p>
            </div>
          </div>

          {/* Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#6B1D2F] font-bold">
                আমাদের গল্প ও দর্শন • OUR STORY & HERITAGE
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-[#1A1A1A] font-serif leading-tight">
                Authentic Elegance Crafted for Every Queen
              </h2>
            </div>

            <div className="border-l-4 border-[#6B1D2F] pl-4 py-2 text-[#6B1D2F] italic text-sm font-serif bg-rose-50/70 rounded-r-lg">
              &ldquo;Shopping Queen by Orni-এর মূল লক্ষ্য হলো প্রতিটি নারীকে তার আত্মবিশ্বাস ও সৌন্দর্য উদযাপনে খাঁটি ও প্রিমিয়াম পোশাক এবং শতভাগ অর্গানিক স্কিনকেয়ার সরবরাহ করা।&rdquo; — অর্ণি ইসলাম
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed">
              <strong>{BUSINESS.NAME}</strong> ({BUSINESS.NAME_BN}) অর্ণি ইসলামের হাত ধরে প্রতিষ্ঠিত বাংলাদেশের অন্যতম জনপ্রিয় অনলাইন ফ্যাশন ও লাইফস্টাইল ব্র্যান্ড। আমাদের ১৯০,০০০+ এরও বেশি সক্রিয় ফেসবুক ফলোয়ার এবং নিয়মিত লাইভ সেশনের মাধ্যমে সম্মানিত কাস্টমারদের সঙ্গে সরাসরি সংযোগ স্থাপন করি।
            </p>

            <p className="text-sm text-neutral-600 leading-relaxed">
              আমরা বিশেষভাবে বাছাইকৃত ১০০% পিওর সুতি পাকিস্তানি লন ৩-পিস, গর্জিয়াস এমব্রয়ডারি পার্টিওয়্যার, হ্যান্ডলুম সুতি, ঐতিহ্যবাহী চুনরি এবং শতভাগ অরিজিনাল থাইল্যান্ড ফর্মুলেশনের <strong className="text-[#6B1D2F]">Kim Whitening Pearl and Snowlotus Cream (20g)</strong> সরবরাহ করি। প্রতিটি প্রোডাক্টের কোয়ালিটি অর্ণি ইসলাম নিজে যাচাই-বাছাই করেন।
            </p>

            <p className="text-sm text-neutral-600 leading-relaxed">
              অনলাইনে কেনাকাটায় আপনাদের শতভাগ নিশ্চিন্ত রাখতে আমরা চালু রেখেছি আমাদের সিগনেচার <strong className="text-[#6B1D2F]">ওপেন পার্সেল গ্যারান্টি (Open Parcel Policy)</strong>। পার্সেল হাতে পেয়ে ডেলিভারিম্যানের সামনে কাপড়, রঙ ও কাজ ভালোভাবে চেক করে নিশ্চিত হয়ে মূল্য পরিশোধ করার পূর্ণ স্বাধীনতা পাবেন।
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-[#E8DFD5]">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#6B1D2F]">190K+</p>
                <p className="text-[10px] uppercase tracking-wide text-neutral-500 font-bold mt-1">
                  FB Followers
                </p>
              </div>
              <div className="text-center border-x border-[#E8DFD5]">
                <p className="text-2xl font-bold text-[#D4AF37]">Open Parcel</p>
                <p className="text-[10px] uppercase tracking-wide text-neutral-500 font-bold mt-1">
                  হাতে পেয়ে চেক
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#6B1D2F]">24-48 hrs</p>
                <p className="text-[10px] uppercase tracking-wide text-neutral-500 font-bold mt-1">
                  দ্রুততম ডেলিভারি
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Pillars */}
      <section className="py-16 bg-[#F4EFEA] px-6 border-t border-[#E8DFD5]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#6B1D2F] font-bold mb-2">
              আমাদের মূল স্তম্ভসমূহ
            </p>
            <h2 className="text-3xl font-bold text-[#1A1A1A] font-serif">Why Shopping Queen by Orni?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E8DFD5] shadow-xs hover:border-[#D4AF37] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#6B1D2F]/10 text-[#6B1D2F] flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-base text-[#1A1A1A] mb-2 font-serif">১০০% ওপেন পার্সেল গ্যারান্টি</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                ডেলিভারি ম্যানের সামনে প্যাকেট খুলে কাপড় ও রঙ চেক করে পেমেন্ট করার নিশ্চিন্ত সুযোগ। কোনো অগ্রিম চার্জ ছাড়াই নিশ্চিন্তে অর্ডার করুন।
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8DFD5] shadow-xs hover:border-[#D4AF37] transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#D4AF37] flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-base text-[#1A1A1A] mb-2 font-serif">অথেনটিক প্রিমিয়াম কালেকশন</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                ১০০% প্রিমিয়াম সুতি লন, গর্জিয়াস শিফন দোপাট্টা এবং আসল থাই কিম স্নোলোটাস ও পার্ল ক্রিম — কোনো রকম কপি বা রেপ্লিকা নেই।
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8DFD5] shadow-xs hover:border-[#D4AF37] transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-base text-[#1A1A1A] mb-2 font-serif">সারা দেশে দ্রুত ডেলিভারি</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                ঢাকার ভেতর মাত্র ৳৮০ এবং ঢাকার বাইরে ৳১৫০। ২ বা ততোধিক ড্রেস অর্ডারে সম্পূর্ণ ফ্রি ডেলিভারি সুবিধা উপভোগ করুন।
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8DFD5] shadow-xs hover:border-[#D4AF37] transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-base text-[#1A1A1A] mb-2 font-serif">অর্ণি ইসলামের সরাসরি লাইভ</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                ফেসবুকে নিয়মিত লাইভ সেশনে প্রতিটি পোশাকের বাস্তব রঙ, কাপড়ের মান এবং ডিজাইন পুঙ্খানুপুঙ্খভাবে দেখানো হয়।
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8DFD5] shadow-xs hover:border-[#D4AF37] transition-all">
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-[#6B1D2F] flex items-center justify-center mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-base text-[#1A1A1A] mb-2 font-serif">সুলভ ও ন্যায্য মূল্য</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                মার্কেটের সবচেয়ে প্রিমিয়াম কোয়ালিটির ড্রেস এবং ক্রিম আমরা সরাসরি ইমপোর্ট ও সোর্স করে কাস্টমারদের জন্য ন্যায্য মূল্যে অফার করি।
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8DFD5] shadow-xs hover:border-[#D4AF37] transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-base text-[#1A1A1A] mb-2 font-serif">২৪/৭ কাস্টমার সাপোর্ট</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                ফেসবুক ইনবক্স, হোয়াটসঅ্যাপ এবং হটলাইন নাম্বারে যে কোনো অর্ডার, ডেলিভারি বা প্রোডাক্ট সহায়তায় আমাদের ডেডিকেটেড টিম সদাপ্রস্তুত।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Support Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4 font-serif">যোগাযোগ ও অফিসিয়াল ঠিকানা</h2>
          <p className="text-neutral-600 mb-10 max-w-xl mx-auto text-sm">
            ওয়েবসাইটে সরাসরি অর্ডার করতে পারেন অথবা ফেসবুক পেজ ও হোয়াটসঅ্যাপে ইনবক্স করুন।
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#E8DFD5] shadow-xs text-left">
              <div className="w-10 h-10 rounded-full bg-rose-50 text-[#6B1D2F] border border-[#6B1D2F]/20 flex items-center justify-center mb-3">
                <MapPin className="h-5 w-5 text-[#6B1D2F]" />
              </div>
              <h3 className="font-bold text-[#1A1A1A] text-sm mb-1">অফিস ও হাব</h3>
              <p className="text-xs text-[#6B1D2F] font-semibold mb-2">অনলাইন হেডকোয়ার্টার্স</p>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {BUSINESS.ADDRESS}
              </p>
              <p className="text-[11px] text-neutral-500 font-medium mt-2">
                প্রতিদিন সকাল ১০:০০টা — রাত ১০:০০টা
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E8DFD5] shadow-xs text-left">
              <div className="w-10 h-10 rounded-full bg-amber-50 text-[#D4AF37] border border-[#D4AF37]/30 flex items-center justify-center mb-3">
                <MessageCircle className="h-5 w-5 text-[#D4AF37]" />
              </div>
              <h3 className="font-bold text-[#1A1A1A] text-sm mb-1">ফেসবুক কমিউনিটি</h3>
              <p className="text-xs text-[#D4AF37] font-bold mb-2">১৯০,০০০+ ফ্যান পেজ</p>
              <p className="text-xs text-neutral-600 leading-relaxed">
                অর্ণি ইসলামের ফেসবুক লাইভ ও কালেকশন দেখতে যুক্ত থাকুন:
              </p>
              <a
                href={BUSINESS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#6B1D2F] font-bold hover:underline block mt-2"
              >
                fb.com/Shoppingqueenbyorni
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E8DFD5] shadow-xs text-left">
              <div className="w-10 h-10 rounded-full bg-rose-50 text-[#6B1D2F] border border-[#6B1D2F]/20 flex items-center justify-center mb-3">
                <Phone className="h-5 w-5 text-[#6B1D2F]" />
              </div>
              <h3 className="font-bold text-[#1A1A1A] text-sm mb-1">অর্ডার হটলাইন ও হোয়াটসঅ্যাপ</h3>
              <p className="text-xs text-neutral-600 mb-2">যেকোনো প্রশ্ন বা দ্রুত অর্ডারের জন্য:</p>
              <a
                href={`tel:${BUSINESS.PHONE}`}
                className="text-xs text-[#1A1A1A] font-bold hover:underline block"
              >
                {BUSINESS.PHONE}
              </a>
              <a
                href={`tel:${BUSINESS.PHONE_ALT}`}
                className="text-xs text-[#1A1A1A] font-bold hover:underline block mt-0.5"
              >
                {BUSINESS.PHONE_ALT}
              </a>
              <a
                href={BUSINESS.WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-emerald-600 font-bold hover:underline block mt-1.5"
              >
                হোয়াটসঅ্যাপে সরাসরি চ্যাট করুন
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-8 bg-[#6B1D2F] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#521322] transition-all duration-300 rounded-full shadow-md active:scale-[0.98]"
            >
              Contact Us Page →
            </Link>
            <Link
              href="/delivery-info"
              className="inline-flex items-center justify-center h-12 px-8 bg-white text-[#1A1A1A] border border-[#E8DFD5] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#FAF6F0] hover:border-[#D4AF37] transition-all duration-300 rounded-full shadow-xs active:scale-[0.98]"
            >
              ডেলিভারি ও ওপেন পার্সেল পলিসি
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
