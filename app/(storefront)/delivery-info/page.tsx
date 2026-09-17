import { Metadata } from "next";
import Link from "next/link";
import { 
  Truck, 
  Eye, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Phone, 
  CreditCard, 
  AlertCircle, 
  Sparkles 
} from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Delivery & Open Parcel Info | ${BUSINESS.NAME}`,
  description:
    "365 Fashion House delivery rates, shipping timelines, Steadfast & Pathao courier procedures, and step-by-step Open Parcel checking guidelines across Bangladesh.",
};

export default function DeliveryInfoPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-[#191426] text-white text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,172,13,0.2),transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AC0D]/40 text-[#F39C12] text-[10px] uppercase tracking-[0.28em] font-bold">
            <Sparkles className="h-3.5 w-3.5" />
            <span>NATIONWIDE LOGISTICS & OPEN PARCEL</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight font-heading">
            Delivery & Open Parcel Guide
          </h1>
          <p className="text-[#E8DFD5] text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            সারাদেশে দ্রুততম হোম ডেলিভারি ও শতভাগ নিশ্চিন্তে পার্সেল খুলে আসল পাকিস্তানি ড্রেস দেখে নেওয়ার পূর্ণ নির্দেশিকা।
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">
        {/* Delivery Rates Grid */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#6C3483] font-bold">
              চার্জ ও সময়সূচী
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#191426] font-heading">
              Delivery Coverage & Rates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#E8DFD5] shadow-xs relative overflow-hidden">
              <div className="w-2 h-full bg-[#6C3483] absolute left-0 top-0" />
              <div className="size-11 rounded-full bg-purple-50 text-[#6C3483] flex items-center justify-center mb-4">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-lg text-[#191426] mb-1">ঢাকা সিটির ভিতরে</h3>
              <p className="text-3xl font-bold text-[#6C3483] mb-2">৳{BUSINESS.DELIVERY_CHARGE_INSIDE}</p>
              <div className="space-y-2 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#D4AC0D]" />
                  <span>২৪ – ৪৮ ঘণ্টার মধ্যে হোম ডেলিভারি</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>ক্যাশ অন ডেলিভারি (COD) প্রযোজ্য</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-[#6C3483]" />
                  <span>ওপেন পার্সেল চেকিং সুবিধা</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-[#D4AC0D] shadow-md relative overflow-hidden">
              <div className="absolute top-3 right-3 bg-[#D4AC0D] text-[#191426] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                All Districts
              </div>
              <div className="size-11 rounded-full bg-amber-50 text-[#F39C12] flex items-center justify-center mb-4">
                <Truck className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-lg text-[#191426] mb-1">ঢাকার বাইরে সারাদেশে</h3>
              <p className="text-3xl font-bold text-[#6C3483] mb-2">৳{BUSINESS.DELIVERY_CHARGE_OUTSIDE}</p>
              <div className="space-y-2 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#D4AC0D]" />
                  <span>২ – ৪ কার্যদিবসের মধ্যে ডেলিভারি</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>৬৪ জেলা ও উপজেলা পর্যায়ে হোম ডেলিভারি</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-[#6C3483]" />
                  <span>ডেলিভারিম্যানের সামনে ওপেন পার্সেল চেক</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E8DFD5] shadow-xs relative overflow-hidden">
              <div className="w-2 h-full bg-[#191426] absolute left-0 top-0" />
              <div className="size-11 rounded-full bg-purple-50 text-[#191426] flex items-center justify-center mb-4">
                <ShieldCheck className="h-5 w-5 text-[#6C3483]" />
              </div>
              <h3 className="font-bold text-lg text-[#191426] mb-1">কুরিয়ার পার্টনার</h3>
              <p className="text-sm font-bold text-[#191426] mb-2">Steadfast & Pathao</p>
              <div className="space-y-2 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>লাইভ SMS ট্র্যাকিং নোটিফিকেশন</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>নিরাপদ প্যাকিং ও ওয়াটারপ্রুফ ব্যাগ</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>কল দিয়ে সময় নিশ্চিত করে ডেলিভারি</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step by Step Open Parcel Inspection */}
        <section className="bg-white rounded-3xl p-8 md:p-10 border border-[#E8DFD5] shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#F39C12] text-xs font-bold uppercase tracking-wider">
              <Eye className="h-4 w-4" />
              <span>How Open Parcel Works</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#191426] font-heading">
              ওপেন পার্সেল চেক করার ৪টি সহজ ধাপ
            </h2>
            <p className="text-neutral-600 text-xs md:text-sm">
              আমাদের মূল লক্ষ্য আপনার পূর্ণ সন্তুষ্টি। পার্সেল গ্রহণের সময় নিচের ধাপগুলো অনুসরণ করুন:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "০১",
                title: "কুরিয়ারের আগমন",
                desc: "ডেলিভারিম্যান আপনার ঠিকানায় পার্সেল নিয়ে পৌঁছালে তাকে ওপেন পার্সেল চেকের কথা বলুন।",
              },
              {
                step: "০২",
                title: "প্যাকেট খোলা",
                desc: "ডেলিভারিম্যানের উপস্থিতিতে সাবধানে প্যাকেটের সিল ও প্যাকিং খুলে ড্রেসটি বের করুন।",
              },
              {
                step: "০৩",
                title: "পোশাক পরখ করা",
                desc: "আসল পাকিস্তানি লন/অর্গানজা ফেব্রিক, কালার, এমব্রয়ডারি ও দুপাট্টার ফিনিশিং ভালোভাবে দেখে নিন।",
              },
              {
                step: "০৪",
                title: "পেমেন্ট ও গ্রহণ",
                desc: "সবকিছু মনমতো হলে ক্যাশ মূল্য বুঝিয়ে দিয়ে রিসিট সহ ড্রেসটি সানন্দে গ্রহণ করুন।",
              },
            ].map((s) => (
              <div key={s.step} className="bg-purple-50/50 rounded-2xl p-5 border border-purple-100 space-y-2">
                <span className="text-2xl font-bold text-[#6C3483] font-mono block">
                  {s.step}
                </span>
                <h3 className="font-bold text-sm text-[#191426]">{s.title}</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Alert Notice */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-xl flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-900 leading-relaxed font-medium">
              <strong>জরুরি সতর্কতা:</strong> যদি ডেলিভারিম্যান কোনো কারণে প্যাকেট খুলতে আপত্তি জানায়, তবে অবিলম্বে ডেলিভারিম্যানকে লাইনে রেখে আমাদের হটলাইন <strong>{BUSINESS.PHONE}</strong>-এ কল দিন। আমাদের কাস্টমার সাপোর্ট টিম সাথে সাথে কুরিয়ার কন্ট্রোল রুমে কথা বলে সমাধান করে দেবে।
            </p>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="bg-[#191426] text-white rounded-3xl p-8 md:p-10 border border-[#D4AC0D]/30 space-y-6">
          <div className="text-center space-y-2">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#D4AC0D] font-bold">
              পেমেন্ট মাধ্যমসমূহ
            </p>
            <h2 className="text-2xl md:text-3xl font-bold font-heading">
              Secure & Convenient Payment
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2 backdrop-blur-sm">
              <div className="size-10 rounded-full bg-[#D4AC0D]/20 text-[#F39C12] flex items-center justify-center mx-auto">
                <CreditCard className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-sm">Cash on Delivery (COD)</h3>
              <p className="text-xs text-neutral-400">ডেলিভারিতে পণ্য দেখে নগদ টাকা প্রদান করুন</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2 backdrop-blur-sm">
              <div className="size-10 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center mx-auto">
                <span className="font-bold text-xs">bKash</span>
              </div>
              <h3 className="font-bold text-sm">bKash Merchant / Send</h3>
              <p className="text-xs text-neutral-400">মোবাইল ব্যাংকিংয়ের মাধ্যমে দ্রুত ও নিরাপদ পেমেন্ট</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2 backdrop-blur-sm">
              <div className="size-10 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center mx-auto">
                <span className="font-bold text-xs">Nagad</span>
              </div>
              <h3 className="font-bold text-sm">Nagad / Rocket</h3>
              <p className="text-xs text-neutral-400">সরকারি ডাক বিভাগ পরিচালিত নগদ সুবিধা</p>
            </div>
          </div>
        </section>

        {/* Help CTA */}
        <section className="text-center space-y-4 pt-4">
          <p className="text-sm text-neutral-600">
            ডেলিভারি ট্র্যাক করতে বা জরুরি পার্সেল পাঠানোর অনুরোধ জানাতে কল করুন:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${BUSINESS.PHONE}`}
              className="inline-flex items-center gap-2 h-12 px-7 bg-[#6C3483] hover:bg-[#5B2C6F] text-white text-xs font-bold uppercase tracking-[0.14em] rounded-full transition-all shadow-md"
            >
              <Phone className="h-4 w-4" />
              <span>হটলাইন: {BUSINESS.PHONE}</span>
            </a>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 h-12 px-7 bg-white hover:bg-purple-50 text-[#6C3483] border border-[#6C3483]/30 text-xs font-bold uppercase tracking-[0.14em] rounded-full transition-all shadow-xs"
            >
              <span>সাধারণ জিজ্ঞাসা (FAQ) →</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
