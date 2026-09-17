"use client";

/**
 * Ash and Aspen — Contact & Customer Service
 * House #76, Gausul Azam Avenue, Sector #13, Uttara, Dhaka - 1230, Bangladesh
 * Hotline / WhatsApp: 01721-396111
 * Email: mohonashamima79@gmail.com
 */

import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageCircle, Sparkles, Navigation, Send } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const contactDetails = [
  {
    icon: Phone,
    label: "হটলাইন ও WhatsApp",
    value: BUSINESS.PHONE,
    href: `tel:${BUSINESS.PHONE.replace(/[^0-9+]/g, "")}`,
    note: BUSINESS.STORE_HOURS,
  },
  {
    icon: MessageCircle,
    label: "Facebook Messenger",
    value: "Ash and Aspen (81K+ Followers)",
    href: BUSINESS.FACEBOOK,
    note: "অর্ডার বা যেকোনো ড্রেস সাইজ ইনকোয়ারির জন্য সরাসরি মেসেজ দিন",
  },
  {
    icon: Mail,
    label: "অফিসিয়াল ইমেইল",
    value: BUSINESS.EMAIL,
    href: `mailto:${BUSINESS.EMAIL}`,
    note: "কাস্টমার সাপোর্ট ও কোয়ারির জন্য আমাদের সরাসরি মেইল করুন",
  },
  {
    icon: MapPin,
    label: "শোরুম ও ডিস্ট্রিবিউশন হাব",
    value: BUSINESS.ADDRESS,
    href: "https://maps.google.com/?q=House+76+Gausul+Azam+Avenue+Sector+13+Uttara+Dhaka",
    note: "House #76, Gausul Azam Avenue, Sector #13, Uttara, Dhaka - 1230",
  },
  {
    icon: Clock,
    label: "অর্ডার ও সাপোর্ট সময়",
    value: BUSINESS.STORE_HOURS_BN,
    href: null,
    note: "অনলাইন মেসেঞ্জার ও WhatsApp সাপোর্ট প্রতিদিন গভীর রাত পর্যন্ত সক্রিয়",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      {/* Hero Section */}
      <section className="relative h-[45vh] md:h-[50vh] overflow-hidden bg-[#1A1A1A]">
        <Image
          src="/ash-and-aspen/banner.jpg"
          alt="Ash and Aspen — আমাদের সাথে যোগাযোগ করুন"
          fill
          unoptimized
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/85 via-[#1A1A1A]/65 to-[#1A1A1A]/95" />
        <div className="absolute inset-0 flex items-center justify-center flex-col text-center px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#E29578]/40 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#E29578]" />
            <span className="text-[10px] uppercase tracking-[0.28em] font-bold text-[#E29578]">
              যোগাযোগ ও সহায়তা • CONNECT WITH ASH AND ASPEN
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-3 font-heading">
            Contact & Support
          </h1>
          <p className="text-[#E8DFD5] text-base md:text-lg font-medium tracking-wide max-w-xl">
            {BUSINESS.NAME} — অথেনটিক পাকিস্তানি পোশাকের নির্ভরযোগ্য ঠিকানা
          </p>
        </div>
      </section>

      {/* Tagline Strip */}
      <section className="bg-[#1A1A1A] py-3.5 px-6 text-center border-t border-[#E29578]/30">
        <p className="text-[#E8DFD5] text-sm font-semibold tracking-wide flex items-center justify-center gap-2">
          <span className="text-[#E29578]">✦</span>
          <span>দ্রুততম অর্ডার ও কালেকশন বুকিংয়ের জন্য আমাদের WhatsApp ({BUSINESS.PHONE}) অথবা Facebook Inbox-এ যোগাযোগ করুন</span>
          <span className="text-[#E29578]">✦</span>
        </p>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Contact Details */}
            <div className="space-y-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#484860] font-bold mb-3">
                  যোগাযোগের মাধ্যম
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-tight mb-4 font-heading">
                  আপনার যেকোনো প্রশ্নে
                  <br />
                  <span className="italic font-normal text-[#E29578]">আমরা সর্বদা পাশে আছি</span>
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {BUSINESS.NAME} — ১০০% আসল পাকিস্তানি লাক্সারি লন, অর্গানজা ও পার্টি ড্রেসের জন্য দেশের অন্যতম শীর্ষ বিশ্বস্ত প্ল্যাটফর্ম। যেকোনো পোশাকের স্টক, লাইভ ছবি বা ডেলিভারি তথ্যের জন্য নির্দ্বিধায় নক করুন।
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E8DFD5] hover:border-[#E29578] hover:shadow-md transition-all group"
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-full bg-orange-50 text-[#E29578] border border-[#E29578]/20 flex items-center justify-center group-hover:bg-[#E29578] group-hover:text-white transition-colors">
                      <detail.icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-[#484860] font-bold">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target={detail.href.startsWith("http") ? "_blank" : undefined}
                          rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-sm font-bold text-[#1A1A1A] hover:text-[#E29578] transition-colors block"
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
                  <span>Facebook Page (81K+)</span>
                </a>
              </div>
            </div>

            {/* Right: Message Form */}
            <div className="bg-white border border-[#E8DFD5] rounded-3xl p-8 md:p-10 shadow-sm">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-1 font-heading">সরাসরি মেসেজ পাঠান</h3>
                <p className="text-xs text-neutral-500">
                  আপনার মেসেজ পাওয়ার পর আমাদের প্রতিনিধি অতি দ্রুত আপনার সাথে যোগাযোগ করবেন।
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
                      className="w-full h-11 px-4 border border-[#E8DFD5] rounded-xl text-sm text-[#1A1A1A] placeholder:text-neutral-400 focus:outline-none focus:border-[#E29578] focus:ring-1 focus:ring-[#E29578]/20 transition-colors bg-[#FAF7F2]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#1A1A1A] mb-2">
                      মোবাইল নম্বর *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="01721-396111"
                      className="w-full h-11 px-4 border border-[#E8DFD5] rounded-xl text-sm text-[#1A1A1A] placeholder:text-neutral-400 focus:outline-none focus:border-[#E29578] focus:ring-1 focus:ring-[#E29578]/20 transition-colors bg-[#FAF7F2]"
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
                    className="w-full h-11 px-4 border border-[#E8DFD5] rounded-xl text-sm text-[#1A1A1A] placeholder:text-neutral-400 focus:outline-none focus:border-[#E29578] focus:ring-1 focus:ring-[#E29578]/20 transition-colors bg-[#FAF7F2]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#1A1A1A] mb-2">
                    জিজ্ঞাসার বিষয় *
                  </label>
                  <select
                    required
                    className="w-full h-11 px-4 border border-[#E8DFD5] rounded-xl text-sm text-[#1A1A1A] focus:outline-none focus:border-[#E29578] focus:ring-1 focus:ring-[#E29578]/20 transition-colors bg-[#FAF7F2]"
                  >
                    <option value="">বিষয় নির্বাচন করুন</option>
                    <option value="gulaal-lawn">Gulaal Luxury Lawn 3-Piece</option>
                    <option value="nur-organza">Nur Festive Organza Pret</option>
                    <option value="sadabahar-pret">Sadabahar Stitched Collection</option>
                    <option value="chikankari">Ivory Chikankari Heavy Formals</option>
                    <option value="casual-lite">Casual Lite Everyday</option>
                    <option value="open-parcel">Open Parcel & ডেলিভারি পলিসি তথ্য</option>
                    <option value="other">অন্যান্য জিজ্ঞাসা</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#1A1A1A] mb-2">
                    আপনার বার্তা বা ড্রেসের বিবরণ *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="পছন্দের ড্রেসের নাম, সাইজ বা কোনো প্রশ্ন লিখুন..."
                    className="w-full px-4 py-3 border border-[#E8DFD5] rounded-xl text-sm text-[#1A1A1A] placeholder:text-neutral-400 focus:outline-none focus:border-[#E29578] focus:ring-1 focus:ring-[#E29578]/20 transition-colors resize-none bg-[#FAF7F2]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-13 bg-[#1A1A1A] hover:bg-[#484860] text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-md active:scale-[0.99] py-4 cursor-pointer flex items-center justify-center gap-2"
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
                    className="text-[#E29578] font-bold hover:underline"
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
          <div className="inline-flex items-center justify-center size-12 rounded-full bg-orange-50 text-[#E29578] border border-[#E29578]/20 mx-auto mb-2">
            <Navigation className="h-6 w-6 text-[#E29578]" />
          </div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#484860] font-bold">
            সারাদেশে দ্রুততম হোম ডেলিভারি হাব
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] font-heading">
            {BUSINESS.NAME} — {BUSINESS.TAGLINE}
          </h2>
          <p className="text-sm text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            {BUSINESS.ADDRESS} থেকে পরিচালিত সেন্ট্রাল কোয়ালিটি চ্যাকিং ও ডিস্ট্রিবিউশন হাবের মাধ্যমে সমগ্র বাংলাদেশে Steadfast / Pathao / Paperfly কুরিয়ারের মাধ্যমে ২ থেকে ৪ কার্যদিবসের মধ্যে ওপেন পার্সেল সহ পার্সেল পৌঁছে দেওয়া হয়।
          </p>
          <p className="text-xs text-neutral-500">
            ঢাকা সিটির ভিতরে ডেলিভারি চার্জ মাত্র ৳৮০ | ঢাকা সিটির বাইরে ৳১৫০ (ক্যাশ অন ডেলিভারি প্রযোজ্য)
          </p>
        </div>
      </section>
    </main>
  );
}

