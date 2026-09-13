import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Truck, Eye, Phone, AlertTriangle, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Refund & Pre-Order Policy — 3 sis xclusive",
  description:
    "3 sis xclusive Open Parcel Policy, 100% Original Pakistani Pret Pre-Order terms, and Cash on Delivery exchange guidelines.",
};

const policyPoints = [
  {
    icon: Eye,
    title: "Open Parcel Policy — ডেলিভারিতে পণ্য চেক বাধ্যতামূলক",
    body: "You have to check products in front of the delivery man. ডেলিভারি ম্যানের সামনে প্যাকেট খুলে ফেব্রিক, কালার, সাইজ ও এম্ব্রয়ডারি চেক করে নিন। কোনো অসঙ্গতি দেখলে সাথে সাথে 01674-054386 নম্বরে কল করুন অথবা ডেলিভারি ম্যানকে সরাসরি কথা বলতে বলুন।",
    type: "warning",
  },
  {
    icon: Clock,
    title: "Pre-Order ডেলিভারি সময় (২৫-৩৫ দিন) ও রিফান্ড গ্যারান্টি",
    body: "Pre-order products are directly sourced and dispatched from Pakistan. Delivery time is within 25-35 days insha'Allah. কোনো কারণে নির্দিষ্ট সময়ের মধ্যে পণ্য ডেলিভারি দিতে ব্যর্থ হলে আপনার অগ্রিম টাকা তাৎক্ষণিকভাবে (Instantly) রিফান্ড প্রদান করা হবে!",
    type: "success",
  },
  {
    icon: AlertTriangle,
    title: "Pre-Order অ্যাডভান্স পেমেন্ট শর্তাবলী",
    body: "Be 100% sure before placing a pre-order. পাকিস্তানি ডিজাইনারদের কাছে অর্ডার কনফার্মেশনের পর Order cancel is Not Allowed। প্রি-অর্ডারে ২০%–৩০% অগ্রিম পেমেন্ট বাধ্যতামূলক (হাই-ভ্যালু বা কাস্টমাইজড পণ্যের ক্ষেত্রে ৫০%)।",
    type: "warning",
  },
  {
    icon: Truck,
    title: "Delivery সিস্টেম ও চার্জ",
    body: "সিলেট সিটি ভেতরে: ৳80 (ক্যাশ অন ডেলিভারি, ১-২ কার্যদিবস)। সিলেটের বাইরে সারা বাংলাদেশে: ৳150 (Steadfast Courier / SA Paribahan, ২-৪ কার্যদিবস)। রেডি স্টক পণ্যে সম্পূর্ণ ক্যাশ অন ডেলিভারি প্রযোজ্য।",
    type: "info",
  },
  {
    icon: ShieldCheck,
    title: "রিটার্ন ও এক্সচেঞ্জ নীতিমালা",
    body: "যৌক্তিক কারণ (ভুল সাইজ বা মেনুফ্যাকচারিং ত্রুটি) ব্যতীত পণ্য ফেরত প্রযোজ্য নয়। যেকোনো সমস্যা ডেলিভারি গ্রহণের সময় বা সর্বোচ্চ ৩ দিনের মধ্যে জানাতে হবে। কোনো পণ্য ১৫ দিনের বেশি হোল্ড রাখা গ্রহণযোগ্য নয় (তবে বিশেষ পারিবারিক কারণে আগে জানালে বিবেচনা করা হবে)।",
    type: "info",
  },
];

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-[#faf7f5]">
      {/* Page Header */}
      <section className="bg-[#8B263E] py-16 md:py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[#D4AF37] -translate-x-1/2 -translate-y-1/2 blur-2xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#D4AF37] translate-x-1/2 translate-y-1/2 blur-2xl" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] uppercase tracking-[0.28em] font-bold">
            <Sparkles className="h-3.5 w-3.5" />
            <span>TRANSPARENCY & TRUST</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight font-heading">
            Refund & Pre-Order Policy
          </h1>
          <p className="text-[#ebdcd0] text-sm md:text-base leading-relaxed">
            3 sis xclusive-এ অর্ডার করার পূর্বে আমাদের ওপেন পার্সেল ও প্রি-অর্ডার নীতিমালা জেনে নিন।
          </p>
        </div>
      </section>

      {/* Main Alert */}
      <section className="bg-[#8B263E] py-4 px-6 border-t border-[#D4AF37]/30">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 justify-center flex-wrap text-center">
            <CheckCircle2 className="h-5 w-5 text-[#D4AF37] shrink-0" />
            <p className="text-[#faf7f5] text-sm font-bold tracking-wide">
              ১০০% সততা ও ওপেন পার্সেল চেকিং — পার্সেল দেখে বুঝে নিন আপনার পছন্দের পোশাক
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
                    ? "bg-amber-50/70 border-amber-200 border-l-4 border-l-amber-500"
                    : point.type === "success"
                    ? "bg-emerald-50/70 border-emerald-200 border-l-4 border-l-emerald-500"
                    : "bg-white border-[#ebdcd0] border-l-4 border-l-[#8B263E]"
                }`}
              >
                <div
                  className={`flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center ${
                    point.type === "warning"
                      ? "bg-amber-100 text-amber-800"
                      : point.type === "success"
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-[#fdf5fa] text-[#8B263E]"
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
                          ? "text-emerald-900"
                          : "text-[#1e1622]"
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
          <div className="text-center space-y-4 bg-white rounded-3xl p-8 border border-[#ebdcd0] shadow-sm">
            <h3 className="text-lg font-bold text-[#1e1622] font-heading">
              কোনো প্রশ্ন বা ডেলিভারি সহায়তা প্রয়োজন?
            </h3>
            <p className="text-sm text-neutral-600 max-w-md mx-auto">
              আমাদের টিম সরাসরি ফোন বা হোয়াটসঅ্যাপে আপনাকে সাহায্য করতে প্রস্তুত।
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={BUSINESS.WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-8 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-[0.14em] rounded-full transition-all shadow-sm"
              >
                WhatsApp (01674-054386)
              </a>
              <a
                href={`tel:${BUSINESS.PHONE}`}
                className="inline-flex items-center justify-center gap-2 h-12 px-7 border-2 border-[#8B263E] text-[#8B263E] text-xs font-bold uppercase tracking-[0.14em] rounded-full hover:bg-[#8B263E] hover:text-white transition-all"
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
