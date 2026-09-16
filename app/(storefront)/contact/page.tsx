"use client";

/**
 * Closet by Tanzz — Contact & Boutique Visit
 * Natore Tower, Rajlokkhi, Uttara, Dhaka
 * Phone / WhatsApp: 01610-663812
 */

import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageCircle, Sparkles, Navigation } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const contactDetails = [
  {
    icon: Phone,
    label: "ফোন / হোয়াটসঅ্যাপ",
    value: BUSINESS.PHONE,
    href: `tel:${BUSINESS.PHONE.replace(/[^0-9+]/g, "")}`,
    note: BUSINESS.STORE_HOURS,
  },
  {
    icon: MessageCircle,
    label: "Facebook Inbox",
    value: "Closet by Tanzz",
    href: BUSINESS.FACEBOOK,
    note: "Order বা ড্রেস ইনকোয়ারির জন্য সরাসরি মেসেজ দিন",
  },
  {
    icon: Mail,
    label: "ইমেইল",
    value: BUSINESS.EMAIL,
    href: `mailto:${BUSINESS.EMAIL}`,
    note: "যেকোনো বাণিজ্যিক বা স্পেশাল অর্ডারে ইমেইল করুন",
  },
  {
    icon: MapPin,
    label: "ফ্ল্যাগশিপ শোরুম",
    value: BUSINESS.ADDRESS,
    href: "https://maps.google.com/?q=Natore+Tower+Uttara+Dhaka",
    note: "Landmark: Rajlokkhi, Sector 3, Uttara (Lift-2, 2nd Floor, Shop 12)",
  },
  {
    icon: Clock,
    label: "শোরুম খোলার সময়",
    value: BUSINESS.STORE_HOURS_BN,
    href: null,
    note: "অনলাইন সাপোর্ট প্রতিদিন রাত ১১টা পর্যন্ত সক্রিয়",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* Hero Section */}
      <section className="relative h-[45vh] md:h-[50vh] overflow-hidden bg-[#121212]">
        <Image
          src="/banner.png"
          alt="Closet by Tanzz — আমাদের সাথে যোগাযোগ করুন"
          fill
          unoptimized
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/80 via-[#121212]/60 to-[#121212]/95" />
        <div className="absolute inset-0 flex items-center justify-center flex-col text-center px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A059]/40 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#C5A059]" />
            <span className="text-[10px] uppercase tracking-[0.28em] font-bold text-[#C5A059]">
              আমাদের সাথে যোগাযোগ • VISIT & CONNECT
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-3 font-heading">
            Visit & Contact Us
          </h1>
          <p className="text-[#E8DFD5] text-base md:text-lg font-medium tracking-wide max-w-xl">
            উত্তরা নাটোরে টাওয়ারের শোরুমে আপনার আগমন সাদরে আমন্ত্রিত
          </p>
        </div>
      </section>

      {/* Tagline Strip */}
      <section className="bg-[#121212] py-3.5 px-6 text-center border-t border-[#C5A059]/30">
        <p className="text-[#E8DFD5] text-sm font-semibold tracking-wide flex items-center justify-center gap-2">
          <span className="text-[#C5A059]">✦</span>
          <span>দ্রুততম অর্ডার ও সাপোর্টের জন্য আমাদের WhatsApp (01610-663812) অথবা Facebook Inbox-এ যোগাযোগ করুন</span>
          <span className="text-[#C5A059]">✦</span>
        </p>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Contact Details */}
            <div className="space-y-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#121212] font-bold mb-3">
                  যোগাযোগ ও লোকেশন
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#121212] leading-tight mb-4 font-heading">
                  আমাদের শোরুমে আসুন অথবা
                  <br />
                  <span className="italic font-normal text-[#C5A059]">সরাসরি কথা বলুন</span>
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Closet by Tanzz — প্রিমিয়াম উইমেনস ফ্যাশন, জাম জাম লন ও উৎসবমুখর পোশাকের বিশ্বস্ত ঠিকানা। যেকোনো প্রোডাক্ট স্টক, সাইজ বা হোম ডেলিভারির জন্য আমাদের সাথে যোগাযোগ করুন।
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E8DFD5] hover:border-[#121212] hover:shadow-md transition-all group"
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#FAF8F5] text-[#121212] border border-[#C5A059]/30 flex items-center justify-center group-hover:bg-[#121212] group-hover:text-[#C5A059] transition-colors">
                      <detail.icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-[#121212] font-bold">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target={detail.href.startsWith("http") ? "_blank" : undefined}
                          rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-sm font-bold text-[#121212] hover:text-[#C5A059] transition-colors block"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-sm font-bold text-[#121212]">{detail.value}</p>
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
                  <span>Facebook Page (51K+)</span>
                </a>
              </div>
            </div>

            {/* Right: Message Form */}
            <div className="bg-white border border-[#E8DFD5] rounded-3xl p-8 md:p-10 shadow-sm">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#121212] mb-1 font-heading">মেসেজ পাঠান</h3>
                <p className="text-xs text-neutral-500">
                  আমরা দ্রুত আপনার বার্তা পর্যালোচনা করে ফোন বা হোয়াটসঅ্যাপে উত্তর দিব।
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("ধন্যবাদ! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।\nদ্রুততম রেসপন্সের জন্য অনুগ্রহ করে আমাদের হোয়াটসঅ্যাপ (01610-663812)-এ নক করুন!");
                }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#121212] mb-2">
                      আপনার নাম *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      className="w-full h-11 px-4 border border-[#E8DFD5] rounded-xl text-sm text-[#121212] placeholder:text-neutral-400 focus:outline-none focus:border-[#121212] focus:ring-1 focus:ring-[#121212]/20 transition-colors bg-[#FAF8F5]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#121212] mb-2">
                      ফোন নম্বর *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="01610-663812"
                      className="w-full h-11 px-4 border border-[#E8DFD5] rounded-xl text-sm text-[#121212] placeholder:text-neutral-400 focus:outline-none focus:border-[#121212] focus:ring-1 focus:ring-[#121212]/20 transition-colors bg-[#FAF8F5]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#121212] mb-2">
                    ইমেইল (ঐচ্ছিক)
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full h-11 px-4 border border-[#E8DFD5] rounded-xl text-sm text-[#121212] placeholder:text-neutral-400 focus:outline-none focus:border-[#121212] focus:ring-1 focus:ring-[#121212]/20 transition-colors bg-[#FAF8F5]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#121212] mb-2">
                    বিষয় *
                  </label>
                  <select
                    required
                    className="w-full h-11 px-4 border border-[#E8DFD5] rounded-xl text-sm text-[#121212] focus:outline-none focus:border-[#121212] focus:ring-1 focus:ring-[#121212]/20 transition-colors bg-[#FAF8F5]"
                  >
                    <option value="">বিষয় নির্বাচন করুন</option>
                    <option value="lawn">Zam Zam Summer Lawn 3-Piece</option>
                    <option value="boutique">Designer Boutique Pret</option>
                    <option value="festive">Festive & Party Wear Suits</option>
                    <option value="block">Artisan Block Prints</option>
                    <option value="casual">Casual Chic Co-ords</option>
                    <option value="showroom">উত্তরা শোরুম ভিজিট ও স্টক অনুসন্ধান</option>
                    <option value="other">অন্যান্য</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#121212] mb-2">
                    আপনার বার্তা *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="পছন্দের ড্রেসের নাম, সাইজ বা কোনো প্রশ্ন লিখুন..."
                    className="w-full px-4 py-3 border border-[#E8DFD5] rounded-xl text-sm text-[#121212] placeholder:text-neutral-400 focus:outline-none focus:border-[#121212] focus:ring-1 focus:ring-[#121212]/20 transition-colors resize-none bg-[#FAF8F5]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-13 bg-[#121212] hover:bg-[#222222] text-[#C5A059] text-xs font-bold uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-md border border-[#C5A059]/40 active:scale-[0.99] py-4 cursor-pointer"
                >
                  মেসেজ পাঠান →
                </button>

                <p className="text-[11px] text-center text-neutral-500">
                  ইনস্ট্যান্ট সাড়ার জন্য{" "}
                  <a
                    href={BUSINESS.WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#121212] font-bold hover:underline"
                  >
                    WhatsApp (01610-663812)
                  </a>{" "}
                  করুন।
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Outlet Location & Directions Card */}
      <section className="bg-white py-14 px-6 border-t border-[#E8DFD5]">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center justify-center size-12 rounded-full bg-[#FAF8F5] text-[#121212] border border-[#C5A059]/40 mx-auto mb-2">
            <Navigation className="h-6 w-6 text-[#C5A059]" />
          </div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#121212] font-bold">
            ফিজিক্যাল শোরুম ডিরেকশন
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#121212] font-heading">
            Closet by Tanzz — HIGHEST QUALITY WOMEN&apos;S FASHION
          </h2>
          <p className="text-sm text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            {BUSINESS.ADDRESS}
          </p>
          <p className="text-xs text-neutral-500">
            সরাসরি শোরুম ভিজিট বা সারাদেশে হোম ডেলিভারির জন্য আমাদের হটলাইন বা ফেসবুক পেজে যোগাযোগ করুন।
          </p>
        </div>
      </section>
    </main>
  );
}
