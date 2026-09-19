"use client";

/**
 * Tazeen's — Contact & Customer Care
 * Showroom 1: Shop #55 (1st Floor), Pink City Shopping Complex, Plot 15, Road 103, Gulshan-2, Dhaka
 * Showroom 2: Fairytale (Tahfeem Fashion), Meena Bazar Building (3rd Floor), Sector 11, Uttara, Dhaka
 * Hotlines: 01790-030434 / 01773-770042
 * Email: tazeens2001@gmail.com
 * Official Facebook: https://www.facebook.com/tazeensbd/
 */

import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageCircle, Sparkles, Navigation, Send } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { ASSETS } from "@/lib/demo-data";

const contactDetails = [
  {
    icon: Phone,
    label: "হটলাইন ও WhatsApp",
    value: `${BUSINESS.PHONE} / ${BUSINESS.PHONE_ALT}`,
    href: `tel:${BUSINESS.PHONE.replace(/[^0-9+]/g, "")}`,
    note: BUSINESS.STORE_HOURS,
  },
  {
    icon: MessageCircle,
    label: "Facebook Messenger",
    value: "Tazeen's (50K+ Community)",
    href: BUSINESS.FACEBOOK,
    note: "শাড়ির লাইভ ভিডিও, ফ্যাব্রিক ডিটেইলস বা অর্ডারের জন্য সরাসরি ইনবক্স করুন",
  },
  {
    icon: Mail,
    label: "অফিসিয়াল ইমেইল",
    value: BUSINESS.EMAIL,
    href: `mailto:${BUSINESS.EMAIL}`,
    note: "কাস্টমার সাপোর্ট ও তথ্যের জন্য সরাসরি মেইল করতে পারেন",
  },
  {
    icon: MapPin,
    label: "শোরুম ১ (গুলশান)",
    value: BUSINESS.SHOWROOM_GULSHAN,
    href: "https://maps.google.com/?q=Pink+City+Shopping+Complex+Gulshan+Dhaka",
    note: "প্রতিদিন সকাল ১০:৩০টা থেকে রাত ৮:৩০টা পর্যন্ত খোলা",
  },
  {
    icon: MapPin,
    label: "শোরুম ২ (উত্তরা)",
    value: BUSINESS.SHOWROOM_UTTARA,
    href: "https://maps.google.com/?q=Sector+11+Uttara+Dhaka",
    note: "প্রতিদিন সকাল ১০:৩০টা থেকে রাত ৯:০০টা পর্যন্ত খোলা",
  },
  {
    icon: Clock,
    label: "অনলাইন অর্ডার ও সাপোর্ট",
    value: BUSINESS.STORE_HOURS_BN,
    href: null,
    note: "অনলাইন মেসেঞ্জার ও WhatsApp সাপোর্ট প্রতিদিন গভীর রাত পর্যন্ত সক্রিয়",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      {/* Hero Section */}
      <section className="relative h-[45vh] md:h-[50vh] overflow-hidden bg-[#50001B]">
        <Image
          src={ASSETS.heroImage}
          alt="Tazeen's — আমাদের সাথে যোগাযোগ করুন"
          fill
          unoptimized
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#50001B]/85 via-[#720026]/70 to-[#50001B]/95" />
        <div className="absolute inset-0 flex items-center justify-center flex-col text-center px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.28em] font-bold text-[#D4AF37]">
              যোগাযোগ ও সহায়তা • CONNECT WITH TAZEEN&apos;S
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-3 font-heading">
            Contact & Showrooms
          </h1>
          <p className="text-[#E8DFD5] text-base md:text-lg font-medium tracking-wide max-w-xl">
            {BUSINESS.NAME} — {BUSINESS.TAGLINE}
          </p>
        </div>
      </section>

      {/* Tagline Strip */}
      <section className="bg-[#720026] py-3.5 px-6 text-center border-t border-[#D4AF37]/30">
        <p className="text-[#FAF7F2] text-sm font-semibold tracking-wide flex items-center justify-center gap-2">
          <span className="text-[#D4AF37]">✦</span>
          <span>দ্রুততম অর্ডার ও কালেকশন বুকিংয়ের জন্য আমাদের WhatsApp ({BUSINESS.PHONE}) অথবা Facebook Inbox-এ যোগাযোগ করুন</span>
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
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#720026] font-bold mb-3">
                  আমাদের শোরুম ও যোগাযোগের ঠিকানা
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-tight mb-4 font-heading">
                  আপনার যেকোনো প্রশ্নে
                  <br />
                  <span className="italic font-normal text-[#720026]">আমরা সর্বদা আনন্দিত</span>
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {BUSINESS.NAME} — প্রিমিয়াম সিকুইন পাড় শাড়ি, ঐতিহ্যবাহী গোল্ড জরি কাতান এবং এক্সক্লুসিভ বুটিক থ্রি-পিসের জন্য দেশের শীর্ষস্থানীয় ব্র্যান্ড। সরাসরি আমাদের শোরুমে এসে দেখে নিন অথবা ঘরে বসেই অর্ডার করুন।
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E8DFD5] hover:border-[#D4AF37] hover:shadow-md transition-all group"
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-full bg-rose-50 text-[#720026] border border-[#720026]/20 flex items-center justify-center group-hover:bg-[#720026] group-hover:text-white transition-colors">
                      <detail.icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-[#720026] font-bold">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target={detail.href.startsWith("http") ? "_blank" : undefined}
                          rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-sm font-bold text-[#1A1A1A] hover:text-[#720026] transition-colors block"
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
                  <span>Facebook Page (50K+)</span>
                </a>
              </div>
            </div>

            {/* Right: Message Form */}
            <div className="bg-white border border-[#E8DFD5] rounded-3xl p-8 md:p-10 shadow-sm">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-1 font-heading">সরাসরি বার্তা পাঠান</h3>
                <p className="text-xs text-neutral-500">
                  আপনার বার্তা পাওয়ার পর আমাদের প্রতিনিধি অতি দ্রুত আপনার সাথে যোগাযোগ করবেন।
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(`ধন্যবাদ! আপনার বার্তা গৃহীত হয়েছে।\nদ্রুততম রেসপন্সের জন্য অনুগ্রহ করে আমাদের অফিসিয়াল WhatsApp (${BUSINESS.PHONE})-এ নক করুন!`);
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
                      placeholder="Your Name"
                      className="w-full h-11 px-4 border border-[#E8DFD5] rounded-xl text-sm text-[#1A1A1A] placeholder:text-neutral-400 focus:outline-none focus:border-[#720026] focus:ring-1 focus:ring-[#720026]/20 transition-colors bg-[#FAF7F2]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#1A1A1A] mb-2">
                      মোবাইল নম্বর *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="01790-030434"
                      className="w-full h-11 px-4 border border-[#E8DFD5] rounded-xl text-sm text-[#1A1A1A] placeholder:text-neutral-400 focus:outline-none focus:border-[#720026] focus:ring-1 focus:ring-[#720026]/20 transition-colors bg-[#FAF7F2]"
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
                    className="w-full h-11 px-4 border border-[#E8DFD5] rounded-xl text-sm text-[#1A1A1A] placeholder:text-neutral-400 focus:outline-none focus:border-[#720026] focus:ring-1 focus:ring-[#720026]/20 transition-colors bg-[#FAF7F2]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#1A1A1A] mb-2">
                    জিজ্ঞাসার বিষয় *
                  </label>
                  <select
                    required
                    className="w-full h-11 px-4 border border-[#E8DFD5] rounded-xl text-sm text-[#1A1A1A] focus:outline-none focus:border-[#720026] focus:ring-1 focus:ring-[#720026]/20 transition-colors bg-[#FAF7F2]"
                  >
                    <option value="">বিষয় নির্বাচন করুন</option>
                    <option value="sequin-saree">Metallic Sequin Border Sarees</option>
                    <option value="royal-katan">Heritage Royal Zari Katan</option>
                    <option value="three-piece">Designer Boutique 3-Piece Sets</option>
                    <option value="haldi-yellow">Haldi & Festive Collections</option>
                    <option value="open-parcel">Open Parcel & ডেলিভারি পলিসি তথ্য</option>
                    <option value="showroom">শোরুম ভিজিট সংক্রান্ত তথ্য</option>
                    <option value="other">অন্যান্য জিজ্ঞাসা</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#1A1A1A] mb-2">
                    আপনার বার্তা বা শাড়ির বিবরণ *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="পছন্দের শাড়ির রঙ, মডেল বা কোনো প্রশ্ন লিখুন..."
                    className="w-full px-4 py-3 border border-[#E8DFD5] rounded-xl text-sm text-[#1A1A1A] placeholder:text-neutral-400 focus:outline-none focus:border-[#720026] focus:ring-1 focus:ring-[#720026]/20 transition-colors resize-none bg-[#FAF7F2]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-13 bg-[#720026] hover:bg-[#50001B] text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-md active:scale-[0.99] py-4 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  <span>মেসেজ পাঠান</span>
                </button>

                <p className="text-[11px] text-center text-neutral-500">
                  জরুরি প্রয়োজনে সরাসরি কল বা{" "}
                  <a
                    href={BUSINESS.WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#720026] font-bold hover:underline"
                  >
                    WhatsApp ({BUSINESS.PHONE})
                  </a>{" "}
                  করুন।
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Operations & Nationwide Logistics Hub */}
      <section className="bg-white py-14 px-6 border-t border-[#E8DFD5]">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center justify-center size-12 rounded-full bg-rose-50 text-[#720026] border border-[#720026]/20 mx-auto mb-2">
            <Navigation className="h-6 w-6 text-[#720026]" />
          </div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#720026] font-bold">
            সারাদেশে দ্রুততম হোম ডেলিভারি হাব
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] font-heading">
            {BUSINESS.NAME} — {BUSINESS.TAGLINE}
          </h2>
          <p className="text-sm text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            গুলশান ও উত্তরা শোরুম থেকে পরিচালিত সেন্ট্রাল কোয়ালিটি চেকিং ও প্যাকেজিং হাবের মাধ্যমে সমগ্র বাংলাদেশে Steadfast / Pathao / Paperfly কুরিয়ারের মাধ্যমে ২ থেকে ৪ কার্যদিবসের মধ্যে ওপেন পার্সেল সহ পার্সেল পৌঁছে দেওয়া হয়।
          </p>
          <p className="text-xs text-neutral-500 font-semibold">
            ঢাকা সিটির ভিতরে ডেলিভারি চার্জ মাত্র ৳৮০ | ঢাকা সিটির বাইরে ৳১৫০ (ক্যাশ অন ডেলিভারি প্রযোজ্য)
          </p>
        </div>
      </section>
    </main>
  );
}
