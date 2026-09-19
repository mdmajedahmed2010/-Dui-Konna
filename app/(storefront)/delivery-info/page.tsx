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
    "Tazeen's delivery rates, shipping timelines, courier procedures, and step-by-step Open Parcel checking guidelines for sarees and ethnic couture across Bangladesh.",
};

export default function DeliveryInfoPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-[#50001B] text-white text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.25),transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] uppercase tracking-[0.28em] font-bold">
            <Sparkles className="h-3.5 w-3.5" />
            <span>NATIONWIDE LOGISTICS & OPEN PARCEL</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight font-heading">
            Delivery & Open Parcel Guide
          </h1>
          <p className="text-[#E8DFD5] text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            সারাদেশে দ্রুততম হোম ডেলিভারি ও শতভাগ নিশ্চিন্তে পার্সেল খুলে শাড়ি ও বুটিক পোশাক দেখে নেওয়ার পূর্ণ নির্দেশিকা।
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">
        {/* Delivery Rates Grid */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#720026] font-bold">
              চার্জ ও সময়সূচী
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] font-heading">
              Delivery Coverage & Rates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#E8DFD5] shadow-xs relative overflow-hidden">
              <div className="w-2 h-full bg-[#720026] absolute left-0 top-0" />
              <div className="size-11 rounded-full bg-rose-50 text-[#720026] flex items-center justify-center mb-4 border border-[#720026]/20">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-lg text-[#1A1A1A] mb-1">ঢাকা সিটির ভিতরে</h3>
              <p className="text-3xl font-bold text-[#720026] mb-2">৳{BUSINESS.DELIVERY_CHARGE_INSIDE}</p>
              <div className="space-y-2 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#D4AF37]" />
                  <span>২৪ – ৪৮ ঘণ্টার মধ্যে হোম ডেলিভারি</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>ক্যাশ অন ডেলিভারি (COD) প্রযোজ্য</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-[#720026]" />
                  <span>ওপেন পার্সেল চেকিং সুবিধা</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-[#D4AF37] shadow-md relative overflow-hidden">
              <div className="absolute top-3 right-3 bg-[#D4AF37] text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                All 64 Districts
              </div>
              <div className="size-11 rounded-full bg-amber-50 text-[#D4AF37] flex items-center justify-center mb-4 border border-[#D4AF37]/30">
                <Truck className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-lg text-[#1A1A1A] mb-1">ঢাকার বাইরে সারাদেশে</h3>
              <p className="text-3xl font-bold text-[#1A1A1A] mb-2">৳{BUSINESS.DELIVERY_CHARGE_OUTSIDE}</p>
              <div className="space-y-2 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#D4AF37]" />
                  <span>২ – ৪ কার্যদিবসের মধ্যে ডেলিভারি</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>৬৪ জেলা ও উপজেলা পর্যায়ে হোম ডেলিভারি</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-[#720026]" />
                  <span>ডেলিভারিম্যানের সামনে ওপেন পার্সেল চেক</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E8DFD5] shadow-xs relative overflow-hidden">
              <div className="w-2 h-full bg-[#50001B] absolute left-0 top-0" />
              <div className="size-11 rounded-full bg-neutral-100 text-[#1A1A1A] flex items-center justify-center mb-4 border border-neutral-200">
                <ShieldCheck className="h-5 w-5 text-[#720026]" />
              </div>
              <h3 className="font-bold text-lg text-[#1A1A1A] mb-1">কুরিয়ার পার্টনার</h3>
              <p className="text-sm font-bold text-[#1A1A1A] mb-2">Steadfast, Pathao & RedX</p>
              <div className="space-y-2 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>লাইভ SMS ট্র্যাকিং নোটিফিকেশন</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>নিরাপদ বক্স ও ওয়াটারপ্রুফ প্যাকিং</span>
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-[#720026] text-xs font-bold uppercase tracking-wider">
              <Eye className="h-4 w-4" />
              <span>How Open Parcel Works</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] font-heading">
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
                desc: "ডেলিভারিম্যানের উপস্থিতিতে সাবধানে প্যাকেটের সিল খুলে শাড়ি বা পোশাকটি বের করুন।",
              },
              {
                step: "০৩",
                title: "শাড়ি পরখ করা",
                desc: "সিকুইন পাড়, কাতানের আসল জরি, কালার এবং বর্ডারের ফিনিশিং ভালোভাবে দেখে নিন।",
              },
              {
                step: "০৪",
                title: "পেমেন্ট ও গ্রহণ",
                desc: "সবকিছু নিখুঁত মনে হলে ক্যাশ মূল্য বুঝিয়ে দিয়ে রিসিট সহ শাড়িটি সানন্দে গ্রহণ করুন।",
              },
            ].map((s) => (
              <div key={s.step} className="bg-[#FAF7F2] rounded-2xl p-5 border border-[#E8DFD5] space-y-2">
                <span className="text-2xl font-bold text-[#720026] font-mono block">
                  {s.step}
                </span>
                <h3 className="font-bold text-sm text-[#1A1A1A]">{s.title}</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Alert Notice */}
          <div className="bg-amber-50 border-l-4 border-[#D4AF37] p-4 rounded-xl flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-[#D4AF37] shrink-0 mt-0.5" />
            <p className="text-xs text-neutral-800 leading-relaxed font-medium">
              <strong>জরুরি সতর্কতা:</strong> যদি কোনো ডেলিভারিম্যান প্যাকেট খুলতে আপত্তি জানায়, তবে অবিলম্বে ডেলিভারিম্যানকে উপস্থিত রেখে আমাদের হটলাইন <strong>{BUSINESS.PHONE}</strong> অথবা <strong>{BUSINESS.PHONE_ALT}</strong>-এ কল দিন। আমাদের কাস্টমার সাপোর্ট টিম সাথে সাথে কুরিয়ার কন্ট্রোল রুমে কথা বলে সমাধান করে দেবে।
            </p>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="bg-[#50001B] text-white rounded-3xl p-8 md:p-10 border border-[#D4AF37]/30 space-y-6">
          <div className="text-center space-y-2">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold">
              পেমেন্ট মাধ্যমসমূহ
            </p>
            <h2 className="text-2xl md:text-3xl font-bold font-heading">
              Secure & Convenient Payment
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2 backdrop-blur-sm">
              <div className="size-10 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center mx-auto">
                <CreditCard className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-sm">Cash on Delivery (COD)</h3>
              <p className="text-xs text-neutral-300">ডেলিভারিতে শাড়ি দেখে নগদ টাকা প্রদান করুন</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2 backdrop-blur-sm">
              <div className="size-10 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center mx-auto">
                <span className="font-bold text-xs">bKash</span>
              </div>
              <h3 className="font-bold text-sm">bKash Merchant / Personal</h3>
              <p className="text-xs text-neutral-300">মোবাইল ব্যাংকিংয়ের মাধ্যমে দ্রুত ও নিরাপদ পেমেন্ট</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2 backdrop-blur-sm">
              <div className="size-10 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center mx-auto">
                <span className="font-bold text-xs">Nagad</span>
              </div>
              <h3 className="font-bold text-sm">Nagad / Rocket</h3>
              <p className="text-xs text-neutral-300">ডাক বিভাগ ও ব্যাংক পরিচালিত ডিজিটাল পেমেন্ট</p>
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
              className="inline-flex items-center gap-2 h-12 px-7 bg-[#720026] hover:bg-[#50001B] text-white text-xs font-bold uppercase tracking-[0.14em] rounded-full transition-all shadow-md"
            >
              <Phone className="h-4 w-4" />
              <span>হটলাইন: {BUSINESS.PHONE}</span>
            </a>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 h-12 px-7 bg-white hover:bg-[#FAF7F2] text-[#1A1A1A] border border-[#E8DFD5] text-xs font-bold uppercase tracking-[0.14em] rounded-full transition-all shadow-xs hover:border-[#D4AF37]"
            >
              <span>সাধারণ জিজ্ঞাসা (FAQ) →</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
