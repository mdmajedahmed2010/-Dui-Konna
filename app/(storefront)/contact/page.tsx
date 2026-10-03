"use client";

/**
 * Dui Konna (দুই কন্যা) — Contact & Customer Care
 * Hotlines: 01339-364462 / +880 1741-954490 (WhatsApp)
 * Official Facebook: https://www.facebook.com/duikonna01 (484,000+ Community)
 * Email: shamimanasrin1239@gmail.com
 * Flagship Showroom: House #21/B, Road #01, Nikunja-2, Khilkhet, Dhaka-1229
 */

import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageCircle, Sparkles, Send, Store, Truck } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { ASSETS } from "@/lib/demo-data";

const contactDetails = [
  {
    icon: Phone,
    label: "অফিসিয়াল হটলাইন ও কল",
    value: `${BUSINESS.PHONE} / ${BUSINESS.PHONE_ALT}`,
    href: `tel:${BUSINESS.PHONE.replace(/[^0-9+]/g, "")}`,
    note: "সকাল ১১:০০টা থেকে রাত ৯:০০টা (প্রতিদিন খোলা)",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp চ্যাট ও সাপোর্ট",
    value: "+880 1741-954490",
    href: BUSINESS.WHATSAPP_LINK,
    note: "শাড়ির ক্লোজআপ ভিডিও, স্পেসিফিকেশন বা দ্রুত বুকিংয়ে নক করুন",
  },
  {
    icon: MessageCircle,
    label: "Facebook Page (484K+ Community)",
    value: "Dui Konna (দুই কন্যা)",
    href: BUSINESS.FACEBOOK,
    note: "নতুন মসলিন ড্রপ, ফটোশুট ও ইনবক্স মেসেজিং",
  },
  {
    icon: Mail,
    label: "অফিসিয়াল ইমেইল",
    value: BUSINESS.EMAIL,
    href: `mailto:${BUSINESS.EMAIL}`,
    note: "কাস্টমার সাপোর্ট ও প্রাতিষ্ঠানিক যোগাযোগ",
  },
  {
    icon: Store,
    label: "ফ্ল্যাগশিপ শোরুমের ঠিকানা",
    value: BUSINESS.ADDRESS,
    href: null,
    note: "নিকুঞ্জ-২, খিলক্ষেত, ঢাকা — সরাসরি এসে ট্রায়াল দিয়ে কেনার সুবিধা",
  },
  {
    icon: Clock,
    label: "শোরুম ও অনলাইন সেবার সময়",
    value: BUSINESS.STORE_HOURS_BN,
    href: null,
    note: "সপ্তাহের ৭ দিনই শোরুম খোলা থাকে (১১:০০ AM – ৯:০০ PM)",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      {/* Hero Section */}
      <section className="relative h-[45vh] md:h-[50vh] overflow-hidden bg-[#8B0000]">
        <Image
          src={ASSETS.heroBanner}
          alt="Dui Konna — আমাদের সাথে যোগাযোগ করুন"
          fill
          unoptimized
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#8B0000]/85 via-[#8B0000]/70 to-[#5A0000]/95" />
        <div className="absolute inset-0 flex items-center justify-center flex-col text-center px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.28em] font-bold text-[#D4AF37]">
              যোগাযোগ ও শোরুম সহায়তা • CONNECT WITH DUI KONNA
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-3 font-serif">
            Contact &amp; Showroom
          </h1>
          <p className="text-[#FAF7F2] text-base md:text-lg font-medium tracking-wide max-w-xl">
            {BUSINESS.NAME} ({BUSINESS.NAME_BN}) — {BUSINESS.TAGLINE}
          </p>
        </div>
      </section>

      {/* Tagline Strip */}
      <section className="bg-[#8B0000] py-3.5 px-6 text-center border-t border-[#D4AF37]/30">
        <p className="text-[#FAF7F2] text-sm font-semibold tracking-wide flex items-center justify-center gap-2 flex-wrap">
          <span className="text-[#D4AF37]">✦</span>
          <span>দ্রুততম শাড়ি বুকিং ও তথ্যের জন্য কল করুন: {BUSINESS.PHONE} অথবা WhatsApp-এ নক দিন: {BUSINESS.PHONE_ALT}</span>
          <span className="text-[#D4AF37]">✦</span>
        </p>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Contact Details */}
            <div className="space-y-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#8B0000] font-bold mb-3">
                  অফিসিয়াল যোগাযোগ ও শোরুম
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-tight mb-4 font-serif">
                  আপনার যেকোনো শাড়ির প্রয়োজনে
                  <br />
                  <span className="italic font-normal text-[#8B0000]">আমরা আছি আপনার পাশে</span>
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {BUSINESS.NAME} — খাঁটি ঢাকai মসলিন শাড়ি, ঐতিহ্যবাহী জামদানি, ব্রাইডাল রেড মসলিন ও লাক্সারি কারচুপি শাড়ির জন্য দেশের ৪৮৪,০০০+ নারীর বিশ্বস্ত ঠিকানা। শোরুমে এসে সরাসরি দেখা বা অনলাইনে ডেলিভারি সংক্রান্ত যেকোনো তথ্যে যোগাযোগ করুন।
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E8DFD5] hover:border-[#D4AF37] hover:shadow-md transition-all group"
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-full bg-rose-50 text-[#8B0000] border border-[#8B0000]/20 flex items-center justify-center group-hover:bg-[#8B0000] group-hover:text-white transition-colors">
                      <detail.icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-[#8B0000] font-bold">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target={detail.href.startsWith("http") ? "_blank" : undefined}
                          rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-sm font-bold text-[#1A1A1A] hover:text-[#8B0000] transition-colors block"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-sm font-bold text-[#1A1A1A]">{detail.value}</p>
                      )}
                      <p className="text-xs text-neutral-500 font-medium">{detail.note}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons: WhatsApp & Facebook */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={BUSINESS.WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 h-13 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-[0.15em] rounded-full transition-all shadow-md active:scale-[0.99]"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp Chat</span>
                </a>

                <a
                  href={BUSINESS.FACEBOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 h-13 bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs font-bold uppercase tracking-[0.15em] rounded-full transition-all shadow-md active:scale-[0.99]"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Facebook (484K+)</span>
                </a>
              </div>
            </div>

            {/* Right: Message Form */}
            <div className="bg-white border border-[#E8DFD5] rounded-3xl p-8 md:p-10 shadow-sm">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-1 font-serif">সরাসরি বার্তা পাঠান</h3>
                <p className="text-xs text-neutral-500">
                  আপনার নাম ও মোবাইল নম্বর সহ বার্তা দিন। শোরুমের প্রতিনিধি দ্রুত যোগাযোগ করবেন।
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(`ধন্যবাদ! আপনার বার্তা সফলভাবে জমা হয়েছে।\nদ্রুততম রেসপন্সের জন্য আমাদের অফিসিয়াল WhatsApp (${BUSINESS.PHONE_ALT}) বা Facebook পেজে যোগাযোগ করুন!`);
                }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#1A1A1A] mb-2">
                      আপনার পূর্ণ নাম *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="আপনার নাম"
                      className="w-full h-11 px-4 border border-[#E8DFD5] rounded-xl text-sm text-[#1A1A1A] placeholder:text-neutral-400 focus:outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000]/20 transition-colors bg-[#FAF7F2]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#1A1A1A] mb-2">
                      মোবাইল নম্বর *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="01339-364462"
                      className="w-full h-11 px-4 border border-[#E8DFD5] rounded-xl text-sm text-[#1A1A1A] placeholder:text-neutral-400 focus:outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000]/20 transition-colors bg-[#FAF7F2]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#1A1A1A] mb-2">
                    ইমেইল এড্রেস (ঐচ্ছিক)
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full h-11 px-4 border border-[#E8DFD5] rounded-xl text-sm text-[#1A1A1A] placeholder:text-neutral-400 focus:outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000]/20 transition-colors bg-[#FAF7F2]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#1A1A1A] mb-2">
                    জিজ্ঞাসার বিষয় *
                  </label>
                  <select
                    required
                    className="w-full h-11 px-4 border border-[#E8DFD5] rounded-xl text-sm text-[#1A1A1A] focus:outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000]/20 transition-colors bg-[#FAF7F2]"
                  >
                    <option value="">বিষয় নির্বাচন করুন</option>
                    <option value="exclusive-muslin">খাঁটি ঢাকাই মসলিন শাড়ি (Exclusive Muslin)</option>
                    <option value="bridal-red">ব্রাইডাল ও ফেস্টিভ রেড মসলিন</option>
                    <option value="karchupi">লাক্সারি কারচুপি ও অরগাঞ্জা শাড়ি</option>
                    <option value="jamdani">ঐতিহ্যবাহী ঢাকাই জামদানি</option>
                    <option value="pastel-muslin">প্যাস্টেল হেরিটেজ হ্যান্ডলুম মসলিন</option>
                    <option value="muslin-4piece">মসলিন ৪-পিস ড্রেস সেট</option>
                    <option value="showroom-visit">নিকুঞ্জ-২ শোরুম ভিজিট ও অ্যাপয়েন্টমেন্ট</option>
                    <option value="delivery-open-parcel">Open Parcel ও কুরিয়ার ডেলিভারি তথ্য</option>
                    <option value="other">অন্যান্য জিজ্ঞাসা</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#1A1A1A] mb-2">
                    আপনার বার্তা বা বিস্তারিত তথ্য *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="পছন্দের শাড়ির নাম, রঙ, আঁচলের কাজ বা কোনো জিজ্ঞাসা লিখুন..."
                    className="w-full px-4 py-3 border border-[#E8DFD5] rounded-xl text-sm text-[#1A1A1A] placeholder:text-neutral-400 focus:outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000]/20 transition-colors resize-none bg-[#FAF7F2]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-13 bg-[#8B0000] hover:bg-[#6B0000] text-[#D4AF37] hover:text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-md active:scale-[0.99] py-4 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  <span>মেসেজ পাঠান</span>
                </button>

                <p className="text-[11px] text-center text-neutral-500">
                  তাৎক্ষণিক সহায়তায় কল করুন{" "}
                  <a href={`tel:${BUSINESS.PHONE}`} className="text-[#8B0000] font-bold hover:underline">
                    {BUSINESS.PHONE}
                  </a>{" "}
                  অথবা{" "}
                  <a
                    href={BUSINESS.WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 font-bold hover:underline"
                  >
                    WhatsApp ({BUSINESS.PHONE_ALT})
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Nationwide Logistics Hub */}
      <section className="bg-white py-14 px-6 border-t border-[#E8DFD5]">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center justify-center size-12 rounded-full bg-rose-50 text-[#8B0000] border border-[#8B0000]/20 mx-auto mb-2">
            <Truck className="h-6 w-6 text-[#8B0000]" />
          </div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#8B0000] font-bold">
            সারাদেশে শতভাগ নির্ভরযোগ্য হোম ডেলিভারি
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] font-serif">
            {BUSINESS.NAME} — {BUSINESS.TAGLINE}
          </h2>
          <p className="text-sm text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            নিকুঞ্জ-২ ফ্ল্যাগশিপ হাব থেকে Steadfast, Pathao ও নির্ভরযোগ্য কুরিয়ারের মাধ্যমে সারা বাংলাদেশে ২ থেকে ৩ কার্যদিবসের মধ্যে ওপেন পার্সেল চেকিং সুবিধাসহ শাড়ি পৌঁছে দেওয়া হয়।
          </p>
          <p className="text-xs text-neutral-700 font-semibold">
            ঢাকা সিটির ভেতরে ডেলিভারি চার্জ মাত্র ৳৮০ | ঢাকা সিটির বাইরে ৳১৫০ | ২ বা ততোধিক শাড়িতে ফ্রি ডেলিভারি
          </p>
        </div>
      </section>
    </main>
  );
}
