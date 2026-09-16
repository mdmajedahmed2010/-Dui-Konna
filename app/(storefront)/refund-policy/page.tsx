import type { Metadata } from "next";
import { ShieldCheck, Truck, Eye, Phone, AlertTriangle, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Refund & Return Policy — Closet by Tanzz",
  description:
    "Closet by Tanzz Open Parcel Policy, Return & Exchange guidelines, and Cash on Delivery terms across Bangladesh.",
};

const policyPoints = [
  {
    icon: Eye,
    title: "Open Parcel Policy — ডেলিভারিতে পণ্য চেক বাধ্যতামূলক",
    body: "You have to check products in front of the delivery man. ডেলিভারি ম্যানের সামনে প্যাকেট খুলে ফেব্রিক, কালার, সাইজ ও এম্ব্রয়ডারি চেক করে নিন। কোনো অসঙ্গতি দেখলে সাথে সাথে 01610-663812 নম্বরে কল করুন অথবা ডেলিভারি ম্যানকে সরাসরি কথা বলতে বলুন।",
    type: "warning",
  },
  {
    icon: CheckCircle2,
    title: "১০০% প্রিমিয়াম ফেব্রিক ও কোয়ালিটি নিশ্চয়তা",
    body: "Closet by Tanzz-এর প্রতিটি পোশাক সর্বোচ্চ কোয়ালিটি নিয়ন্ত্রণের মধ্য দিয়ে প্রস্তুত ও প্যাকেজিং করা হয়। আসল জাম জাম লন, লাক্সারি বাউটিক থ্রি-পিস ও পার্টি ওয়্যারের নিখুঁত ফিনিশিং নিশ্চিত করা আমাদের প্রধান অঙ্গীকার।",
    type: "success",
  },
  {
    icon: AlertTriangle,
    title: "অর্ডার কনফার্মেশন ও পলিসি",
    body: "অর্ডার প্লেস করার পর আমাদের কাস্টমার সাপোর্ট টিম থেকে ফোন বা হোয়াটসঅ্যাপের মাধ্যমে ঠিকানা ও ফোন নম্বর ভেরিফাই করা হবে। সঠিক ঠিকানা ও ফোন নম্বর প্রদান নিশ্চিত করুন যাতে নির্বিঘ্নে ডেলিভারি সম্পন্ন হতে পারে।",
    type: "warning",
  },
  {
    icon: Truck,
    title: "Delivery সিস্টেম ও চার্জ",
    body: "ঢাকা সিটির ভেতরে: ৳80 (ক্যাশ অন ডেলিভারি, ১-২ কার্যদিবস)। ঢাকার বাইরে সারা বাংলাদেশে: ৳150 (Steadfast Courier / রেডএক্স, ২-৪ কার্যদিবস)। রেডি স্টক পণ্যে সম্পূর্ণ ক্যাশ অন ডেলিভারি প্রযোজ্য।",
    type: "info",
  },
  {
    icon: ShieldCheck,
    title: "রিটার্ন ও এক্সচেঞ্জ নীতিমালা",
    body: "যৌক্তিক কারণ (ভুল সাইজ বা মেনুফ্যাকচারিং ডিফেক্ট) থাকলে ডেলিভারি গ্রহণের সময় ডেলিভারিম্যানের কাছে সরাসরি পণ্য ফেরত দিতে পারবেন (কেবল ডেলিভারি চার্জ প্রযোজ্য হবে)। ডেলিভারি গ্রহণের পর কোনো সমস্যা পরিলক্ষিত হলে সর্বোচ্চ ৩ দিনের মধ্যে আমাদের কাস্টমার সার্ভিসে জানান।",
    type: "info",
  },
];

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* Page Header */}
      <section className="bg-[#121212] py-16 md:py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[#C5A059] -translate-x-1/2 -translate-y-1/2 blur-2xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#C5A059] translate-x-1/2 translate-y-1/2 blur-2xl" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A059]/40 text-[#C5A059] text-[10px] uppercase tracking-[0.28em] font-bold">
            <Sparkles className="h-3.5 w-3.5" />
            <span>TRANSPARENCY & TRUST</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight font-heading">
            Refund & Open Parcel Policy
          </h1>
          <p className="text-[#E8DFD5] text-sm md:text-base leading-relaxed">
            Closet by Tanzz-এ অর্ডার করার পূর্বে আমাদের ওপেন পার্সেল ও ডেলিভারি নীতিমালা জেনে নিন।
          </p>
        </div>
      </section>

      {/* Main Alert */}
      <section className="bg-[#121212] py-4 px-6 border-t border-[#C5A059]/30">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 justify-center flex-wrap text-center">
            <CheckCircle2 className="h-5 w-5 text-[#C5A059] shrink-0" />
            <p className="text-[#FAF8F5] text-sm font-bold tracking-wide">
              ১০০% সততা ও ওপেন পার্সেল চেকিং — পার্সেল দেখে বুঝে নিন আপনার পছন্দের পোশাক
            </p>
            <CheckCircle2 className="h-5 w-5 text-[#C5A059] shrink-0" />
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
                    : "bg-white border-[#E8DFD5] border-l-4 border-l-[#121212]"
                }`}
              >
                <div
                  className={`flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center ${
                    point.type === "warning"
                      ? "bg-amber-100 text-amber-800"
                      : point.type === "success"
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-[#FAF8F5] text-[#121212] border border-[#C5A059]/30"
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
                          : "text-[#121212]"
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
            <h3 className="text-lg font-bold text-[#121212] font-heading">
              কোনো প্রশ্ন বা ডেলিভারি সহায়তা প্রয়োজন?
            </h3>
            <p className="text-sm text-neutral-600 max-w-md mx-auto">
              আমাদের কাস্টমার কেয়ার টিম সরাসরি ফোন বা হোয়াটসঅ্যাপে আপনাকে সাহায্য করতে প্রস্তুত।
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
                className="inline-flex items-center justify-center gap-2 h-12 px-7 border-2 border-[#121212] text-[#121212] text-xs font-bold uppercase tracking-[0.14em] rounded-full hover:bg-[#121212] hover:text-[#C5A059] transition-all"
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
