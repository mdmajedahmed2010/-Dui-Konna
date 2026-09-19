import type { Metadata } from "next";
import { ShieldCheck, Truck, Eye, Phone, AlertTriangle, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Open Parcel & Refund Policy | ${BUSINESS.NAME}`,
  description:
    "Tazeen's Open Parcel Inspection Policy, Return & Exchange guidelines, and Cash on Delivery terms across Bangladesh.",
};

const policyPoints = [
  {
    icon: Eye,
    title: "Open Parcel Policy — ডেলিভারিতে পণ্য চেক বাধ্যতামূলক",
    body: `You have to check products in front of the delivery man. ডেলিভারি ম্যানের সামনে পার্সেলের প্যাকেট খুলে শাড়ির ফেব্রিক, সিকুইন বা জরির কাজ, আঁচলের ফিনিশিং ও রঙ ভালো করে দেখে নিশ্চিত হয়ে নিন। কোনো অসঙ্গতি বা অমিল দেখলে সাথে সাথে আমাদের হটলাইন ${BUSINESS.PHONE}-এ কল করুন অথবা ডেলিভারি ম্যানের সাথে সরাসরি কথা বলিয়ে দিন।`,
    type: "warning",
  },
  {
    icon: CheckCircle2,
    title: "১০০% অথেনটিক হ্যান্ডলুম ও এক্সক্লুসিভ কালেকশন",
    body: `${BUSINESS.NAME}-এর প্রতিটি শাড়ি ও বুটিক পোশাক ১০০% আসল ও নিজস্ব কোয়ালিটি চ্যাকিং প্রক্রিয়ায় অনুমোদিত। ফেব্রিকের গুণগত মান, জরির স্থায়ী দীপ্তি এবং নিখুঁত হস্তশিল্পের ব্যাপারে আমাদের প্রতিশ্রুতি শতভাগ অটুট।`,
    type: "success",
  },
  {
    icon: AlertTriangle,
    title: "অর্ডার কনফার্মেশন ও কুরিয়ার ট্র্যাকিং",
    body: "অনলাইনে ওয়েবসাইট বা ফেসবুকে অর্ডার প্লেস করার পর আমাদের কাস্টমার সাপোর্ট টিম থেকে ফোন বা WhatsApp-এর মাধ্যমে ঠিকানা ও মোবাইল নম্বর নিশ্চিত করা হবে। সঠিক ঠিকানা ও বিকল্প ফোন নম্বর প্রদান নিশ্চিত করুন যাতে ডেলিভারি সময়মতো সম্পন্ন হতে পারে।",
    type: "warning",
  },
  {
    icon: Truck,
    title: "সারাদেশে ডেলিভারি চার্জ ও সময়সীমা",
    body: `ঢাকা সিটির ভেতরে ডেলিভারি চার্জ মাত্র ৳${BUSINESS.DELIVERY_CHARGE_INSIDE} (হোম ডেলিভারি, ১-২ কার্যদিবস)। ঢাকা সিটির বাইরে সারা বাংলাদেশে ৳${BUSINESS.DELIVERY_CHARGE_OUTSIDE} (Steadfast / Pathao / RedX Courier, ২-৪ কার্যদিবস)। রেডি স্টক শাড়িতে সম্পূর্ণ ক্যাশ অন ডেলিভারি (COD) সুবিধা রয়েছে।`,
    type: "info",
  },
  {
    icon: ShieldCheck,
    title: "রিটার্ন, এক্সচেঞ্জ ও শোরুম সার্ভিস নীতিমালা",
    body: "ডেলিভারি ম্যানের সামনে চেক করার পর যদি কোনো ডিফেক্ট বা রঙের বড় অমিল থাকে, তবে সাথে সাথে পার্সেল রিটার্ন করতে পারবেন (কেবল প্রযোজ্য ডেলিভারি চার্জ পরিশোধ করতে হবে)। ডেলিভারি গ্রহণের পর কোনো অপ্রত্যাশিত ত্রুটি চোখে পড়লে সর্বোচ্চ ৪৮ ঘণ্টার মধ্যে আনবক্সিং প্রমাণ সহ আমাদের ফেসবুক ইনবক্স বা WhatsApp-এ জানান। অথবা সরাসরি আমাদের পিংক সিটি (গুলশান-২) কিংবা উত্তরা শোরুমে এসে এক্সচেঞ্জ করে নিতে পারেন।",
    type: "info",
  },
];

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      {/* Page Header */}
      <section className="bg-[#50001B] py-16 md:py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[#720026] -translate-x-1/2 -translate-y-1/2 blur-2xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#D4AF37] translate-x-1/2 translate-y-1/2 blur-2xl" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] uppercase tracking-[0.28em] font-bold">
            <Sparkles className="h-3.5 w-3.5" />
            <span>TRANSPARENCY & TRUST</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight font-heading">
            Open Parcel & Refund Policy
          </h1>
          <p className="text-[#E8DFD5] text-sm md:text-base leading-relaxed">
            {BUSINESS.NAME}-এ অর্ডার করার পূর্বে আমাদের ওপেন পার্সেল ও ডেলিভারি নীতিমালা সম্পর্কে জেনে নিন।
          </p>
        </div>
      </section>

      {/* Main Alert */}
      <section className="bg-[#720026] py-4 px-6 border-t border-[#D4AF37]/30">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 justify-center flex-wrap text-center">
            <CheckCircle2 className="h-5 w-5 text-[#D4AF37] shrink-0" />
            <p className="text-[#FAF7F2] text-sm font-bold tracking-wide">
              ১০০% সততা ও ওপেন পার্সেল চেকিং — পার্সেল দেখে বুঝে নিন আপনার পছন্দের শাড়ি ও পোশাক
            </p>
            <CheckCircle2 className="h-5 w-5 text-[#D4AF37] shrink-0" />
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Policy Cards */}
          <div className="space-y-5 mb-14">
            {policyPoints.map((point, idx) => (
              <div
                key={point.title}
                className={`flex items-start gap-5 p-6 rounded-2xl border shadow-xs ${
                  point.type === "warning"
                    ? "bg-amber-50/80 border-amber-200 border-l-4 border-l-amber-500"
                    : point.type === "success"
                    ? "bg-rose-50/80 border-rose-200 border-l-4 border-l-[#720026]"
                    : "bg-white border-[#E8DFD5] border-l-4 border-l-[#50001B]"
                }`}
              >
                <div
                  className={`flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center ${
                    point.type === "warning"
                      ? "bg-amber-100 text-amber-800"
                      : point.type === "success"
                      ? "bg-rose-100 text-[#720026]"
                      : "bg-[#FAF7F2] text-[#1A1A1A] border border-[#E8DFD5]"
                  }`}
                >
                  <point.icon className="h-5 w-5" />
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-neutral-400 font-mono font-bold">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h2
                      className={`text-sm font-bold uppercase tracking-wide ${
                        point.type === "warning"
                          ? "text-amber-900"
                          : point.type === "success"
                          ? "text-[#720026]"
                          : "text-[#1A1A1A]"
                      }`}
                    >
                      {point.title}
                    </h2>
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed font-medium">{point.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact for Help */}
          <div className="text-center space-y-4 bg-white rounded-3xl p-8 border border-[#E8DFD5] shadow-sm">
            <h3 className="text-lg font-bold text-[#1A1A1A] font-heading">
              কোনো প্রশ্ন বা ডেলিভারি সহায়তা প্রয়োজন?
            </h3>
            <p className="text-sm text-neutral-600 max-w-md mx-auto">
              আমাদের ডেডিকেটেড কাস্টমার কেয়ার টিম সরাসরি ফোন বা হোয়াটসঅ্যাপে আপনাকে তাৎক্ষণিক সাহায্য করতে প্রস্তুত।
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={BUSINESS.WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-8 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-[0.14em] rounded-full transition-all shadow-sm"
              >
                WhatsApp ({BUSINESS.PHONE})
              </a>
              <a
                href={`tel:${BUSINESS.PHONE}`}
                className="inline-flex items-center justify-center gap-2 h-12 px-7 border-2 border-[#720026] text-[#720026] text-xs font-bold uppercase tracking-[0.14em] rounded-full hover:bg-[#720026] hover:text-white transition-all"
              >
                <Phone className="h-4 w-4" />
                <span>Call Hotline</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
