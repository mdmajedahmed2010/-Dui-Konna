import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, MapPin, Phone, ShieldCheck, Heart, Award, CheckCircle2, Truck, MessageCircle, Store, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { ASSETS } from "@/lib/demo-data";

export const metadata: Metadata = {
  title: `About Us | ${BUSINESS.NAME} (${BUSINESS.NAME_BN}) — Exclusive Dhakai Muslin & Luxury Sarees`,
  description:
    "Discover Dui Konna (দুই কন্যা) — Bangladesh's premier heritage fashion house founded by Shamima Nasrin. 484,000+ Facebook community, flagship showroom at Nikunja-2, Khilkhet, Dhaka, nationwide Open Parcel Cash on Delivery, and authentic handloom Dhakai Muslin & Jamdani sarees.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 bg-[#8B0000] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.25),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span className="text-[10.5px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold">
              আমাদের পরিচিতি • ABOUT DUI KONNA
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight font-serif mb-4 text-white">
            {BUSINESS.NAME} ({BUSINESS.NAME_BN})
          </h1>
          <p className="text-sm md:text-base text-neutral-200 leading-relaxed font-sans max-w-2xl mx-auto">
            {BUSINESS.TAGLINE} — বাংলাদেশের ৪৮৪,০০০+ মার্জিত রুচিশীল নারীদের আস্থার প্রতীক। খাঁটি ঢাকাই মসলিন শাড়ি, ঐতিহ্যবাহী জামদানি ও লাক্সারি কারচুপি কালেকশন।
          </p>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Brand Photo */}
          <div className="lg:col-span-6 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-[#E8DFD5] bg-[#8B0000]">
            <Image
              src={ASSETS.heroBanner}
              alt="Dui Konna - Exclusive Dhakai Muslin Collection"
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#181513]/95 backdrop-blur-md border border-[#D4AF37]/40 px-5 py-3 rounded-xl text-white shadow-lg">
              <p className="text-[9px] uppercase tracking-[0.22em] font-bold text-[#D4AF37] flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
                PROPRIETOR & FOUNDER: SHAMIMA NASRIN (শামীমা নাসরিন)
              </p>
              <p className="text-xs font-semibold mt-0.5">484,000+ Facebook Community • Nikunja-2 Flagship Showroom</p>
            </div>
          </div>

          {/* Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#8B0000] font-bold">
                আমাদের ঐতিহ্য ও দর্শন • OUR HERITAGE & PHILOSOPHY
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-[#1A1A1A] font-serif leading-tight">
                Dhakai Muslin Heritage Woven for Royalty
              </h2>
            </div>

            <div className="border-l-4 border-[#8B0000] pl-4 py-2 text-[#8B0000] italic text-sm font-serif bg-rose-50/70 rounded-r-lg">
              &ldquo;দুই কন্যা (Dui Konna)-র মূল লক্ষ্য হলো বাংলার শতবর্ষী অহংকার খাঁটি ঢাকাই মসলিনের গৌরব প্রতিটি নারীর কাছে পরম আভিজাত্য, বিশ্বস্ততা ও শতভাগ খাঁটি তাঁত বুননে পৌঁছে দেওয়া।&rdquo; — শামীমা নাসরিন
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed">
              <strong>{BUSINESS.NAME}</strong> ({BUSINESS.NAME_BN}) স্বত্বাধিকারী শামীমা নাসরিনের নেতৃত্বে প্রতিষ্ঠিত বাংলাদেশের অন্যতম শীর্ষস্থানীয় ঐতিহ্যবাহী শাড়ি ও ফ্যাশন হাউস। আমাদের ৪৮৪,০০০+ এরও বেশি সক্রিয় ফেসবুক পরিবার এবং নিয়মিত ফটোশুট ও লাইভ সেশনের মাধ্যমে সম্মানিত শাড়িপ্রেমী আপুদের সাথে নিবিড় সম্পর্ক গড়ে উঠেছে।
            </p>

            <p className="text-sm text-neutral-600 leading-relaxed">
              আমরা বিশেষভাবে উপস্থাপন করি ঐতিহ্যবাহী মাস্টার তাঁতিদের হাতে বোনা খাঁটি <strong className="text-[#8B0000]">ঢাকাই মসলিন শাড়ি</strong>, রাজকীয় লাল ব্রাইডাল মসলিন, ঢাকাই জামদানি, এক্সক্লুসিভ কারচুপি ও অরগাঞ্জা শাড়ি। প্রতিটি শাড়িতে ব্যবহৃত হয় খাঁটি রেশম সুতা ও চকচকে স্বর্ণালী জরি।
            </p>

            <p className="text-sm text-neutral-600 leading-relaxed">
              অনলাইনে দামি শাড়ি কেনাকাটায় আপনাদের শতভাগ নিশ্চিন্ত রাখতে আমরা চালু রেখেছি আমাদের সিগনেচার <strong className="text-[#8B0000]">ওপেন পার্সেল গ্যারান্টি (Open Parcel Policy)</strong>। পার্সেল হাতে পেয়ে ডেলিভারিম্যানের সামনে শাড়ির কাপড়, নকশা ও জরির কাজ ভালো করে দেখে নিশ্চিত হয়ে মূল্য পরিশোধ করার পূর্ণ স্বাধীনতা পাবেন। এছাড়াও সরাসরি শোরুমে এসে ট্রায়াল দিয়ে কেনার জন্য রয়েছে আমাদের নিকুঞ্জ-২ ফ্ল্যাগশিপ শো-রুম।
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-[#E8DFD5]">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#8B0000]">484K+</p>
                <p className="text-[10px] uppercase tracking-wide text-neutral-500 font-bold mt-1">
                  FB Community
                </p>
              </div>
              <div className="text-center border-x border-[#E8DFD5]">
                <p className="text-2xl font-bold text-[#D4AF37]">Open Parcel</p>
                <p className="text-[10px] uppercase tracking-wide text-neutral-500 font-bold mt-1">
                  হাতে পেয়ে চেক
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#8B0000]">নিকুঞ্জ-২</p>
                <p className="text-[10px] uppercase tracking-wide text-neutral-500 font-bold mt-1">
                  ফ্ল্যাগশিপ শোরুম
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
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#8B0000] font-bold mb-2">
              আমাদের মূল স্তম্ভসমূহ
            </p>
            <h2 className="text-3xl font-bold text-[#1A1A1A] font-serif">Why Dui Konna (দুই কন্যা)?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E8DFD5] shadow-xs hover:border-[#D4AF37] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#8B0000]/10 text-[#8B0000] flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-base text-[#1A1A1A] mb-2 font-serif">১০০% ওপেন পার্সেল গ্যারান্টি</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                ডেলিভারি ম্যানের সামনে প্যাকেট খুলে কাপড় ও জরি চেক করে পেমেন্ট করার নিশ্চিন্ত সুযোগ। কোনো সংশয় ছাড়াই নিশ্চিন্তে অর্ডার করুন।
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8DFD5] shadow-xs hover:border-[#D4AF37] transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#D4AF37] flex items-center justify-center mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-base text-[#1A1A1A] mb-2 font-serif">খাঁটি ঢাকাই মসলিন তাঁত</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                বাংলার ঐতিহ্যবাহী তাঁতিদের হাতে বোনা আসল ঢাকাই মসলিন ও জামদানি—কোনো সিন্থেটিক বা পাওয়ারলুম রেপ্লিকা নয়।
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8DFD5] shadow-xs hover:border-[#D4AF37] transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <Store className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-base text-[#1A1A1A] mb-2 font-serif">নিকুঞ্জ-২ ফ্ল্যাগশিপ শোরুম</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                হাউজ #২১/বি, রোড #০১, নিকুঞ্জ-২, খিলক্ষেত, ঢাকা। প্রতিদিন সকাল ১১:০০ থেকে রাত ৯:০০ পর্যন্ত সরাসরি ট্রায়াল দেওয়ার সুযোগ।
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8DFD5] shadow-xs hover:border-[#D4AF37] transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-base text-[#1A1A1A] mb-2 font-serif">শামীমা নাসরিনের সিগনেচার কিউরেশন</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                স্বত্বাধিকারী শামীমা নাসরিন প্রতিটি শাড়ির ডিজাইন ও ফেব্রিক নিজে যাচাই করেন, যাতে প্রতিটি গ্রাহক পান নিখুঁত রাজকীয় সৌন্দর্য।
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8DFD5] shadow-xs hover:border-[#D4AF37] transition-all">
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-[#8B0000] flex items-center justify-center mb-4">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-base text-[#1A1A1A] mb-2 font-serif">সারা দেশে ক্যাশ অন ডেলিভারি</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                ঢাকার ভেতর মাত্র ৳৮০ এবং ঢাকার বাইরে ৳১৫০। ২ বা ততোধিক শাড়িতে উপভোগ করুন সম্পূর্ণ ফ্রি হোম ডেলিভারি।
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8DFD5] shadow-xs hover:border-[#D4AF37] transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-base text-[#1A1A1A] mb-2 font-serif">হটলাইন ও হোয়াটসঅ্যাপ সেবা</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                হটলাইন (01339-364462) ও হোয়াটসঅ্যাপে (01741-954490) যে কোনো শাড়ির দাম, কালার বা ডেলিভারি সহায়তায় আমাদের টিম সদা প্রস্তুত।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Showroom & Contact Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4 font-serif">যোগাযোগ ও শোরুমের ঠিকানা</h2>
          <p className="text-neutral-600 mb-10 max-w-xl mx-auto text-sm">
            অনলাইনে সরাসরি অর্ডার করতে পারেন অথবা নিকুঞ্জ-২ শোরুমে এসে সরাসরি শাড়ি পরখ করতে পারেন।
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#E8DFD5] shadow-xs text-left">
              <div className="w-10 h-10 rounded-full bg-rose-50 text-[#8B0000] border border-[#8B0000]/20 flex items-center justify-center mb-3">
                <Store className="h-5 w-5 text-[#8B0000]" />
              </div>
              <h3 className="font-bold text-[#1A1A1A] text-sm mb-1">ফ্ল্যাগশিপ শোরুম</h3>
              <p className="text-xs text-[#8B0000] font-semibold mb-2">নিকুঞ্জ-২, খিলক্ষেত, ঢাকা</p>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {BUSINESS.ADDRESS}
              </p>
              <p className="text-[11px] text-neutral-500 font-medium mt-2 flex items-center gap-1">
                <Clock className="h-3 w-3 inline text-[#8B0000]" />
                প্রতিদিন সকাল ১১:০০টা — রাত ৯:০০টা
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E8DFD5] shadow-xs text-left">
              <div className="w-10 h-10 rounded-full bg-amber-50 text-[#D4AF37] border border-[#D4AF37]/30 flex items-center justify-center mb-3">
                <MessageCircle className="h-5 w-5 text-[#D4AF37]" />
              </div>
              <h3 className="font-bold text-[#1A1A1A] text-sm mb-1">ফেসবুক কমিউনিটি</h3>
              <p className="text-xs text-[#D4AF37] font-bold mb-2">৪৮৪,০০০+ ফ্যান পেজ</p>
              <p className="text-xs text-neutral-600 leading-relaxed">
                নতুন শাড়ির কালেকশন ও ভিডিও দেখতে যুক্ত থাকুন:
              </p>
              <a
                href={BUSINESS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#8B0000] font-bold hover:underline block mt-2"
              >
                facebook.com/duikonna01
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E8DFD5] shadow-xs text-left">
              <div className="w-10 h-10 rounded-full bg-rose-50 text-[#8B0000] border border-[#8B0000]/20 flex items-center justify-center mb-3">
                <Phone className="h-5 w-5 text-[#8B0000]" />
              </div>
              <h3 className="font-bold text-[#1A1A1A] text-sm mb-1">অর্ডার হটলাইন ও হোয়াটসঅ্যাপ</h3>
              <p className="text-xs text-neutral-600 mb-2">যেকোনো প্রশ্ন বা দ্রুত শাড়ি বুকিংয়ের জন্য:</p>
              <a
                href={`tel:${BUSINESS.PHONE}`}
                className="text-xs text-[#1A1A1A] font-bold hover:underline block"
              >
                হটলাইন: {BUSINESS.PHONE}
              </a>
              <a
                href={`tel:${BUSINESS.PHONE_ALT}`}
                className="text-xs text-[#1A1A1A] font-bold hover:underline block mt-0.5"
              >
                হোয়াটসঅ্যাপ: {BUSINESS.PHONE_ALT}
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
              className="inline-flex items-center justify-center h-12 px-8 bg-[#8B0000] text-[#D4AF37] hover:text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#6B0000] transition-all duration-300 rounded-full shadow-md active:scale-[0.98]"
            >
              Contact Us Page →
            </Link>
            <Link
              href="/delivery-info"
              className="inline-flex items-center justify-center h-12 px-8 bg-white text-[#1A1A1A] border border-[#E8DFD5] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#FAF7F2] hover:border-[#D4AF37] transition-all duration-300 rounded-full shadow-xs active:scale-[0.98]"
            >
              ডেলিভারি ও ওপেন পার্সেল পলিসি
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
