"use client";

/**
 * 3 sis xclusive — Contact & Boutique Visit
 * Sylhet, Bangladesh
 * Phone / WhatsApp: 01674-054386
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
    note: "Sat–Thu: 10:30 AM – 9:30 PM | Fri: 3:00 PM – 10:00 PM",
  },
  {
    icon: MessageCircle,
    label: "Facebook Inbox",
    value: "3 sis xclusive",
    href: BUSINESS.FACEBOOK,
    note: "Order বা ড্রেন ইনকোয়ারির জন্য সরাসরি মেসেজ দিন",
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
    href: "https://maps.google.com/?q=Nayasarak+Point+Sylhet",
    note: "Landmark: Beside Noyashorok Kabab / Nari Shop Building",
  },
  {
    icon: Clock,
    label: "আউটলেট খোলার সময়",
    value: "শনিবার–বৃহস্পতিবার: ১০:৩০ AM – ৯:৩০ PM (শুক্রবার ৩:০০ PM – ১০:০০ PM)",
    href: null,
    note: "অনলাইন সাপোর্ট প্রতিদিন রাত ১১টা পর্যন্ত সক্রিয়",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#faf7f5]">
      {/* Hero Section */}
      <section className="relative h-[45vh] md:h-[50vh] overflow-hidden bg-[#8B263E]">
        <Image
          src="/banner.jpg"
          alt="3 sis xclusive Sylhet — আমাদের সাথে যোগাযোগ করুন"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#8B263E]/70 via-[#8B263E]/50 to-[#8B263E]/95" />
        <div className="absolute inset-0 flex items-center justify-center flex-col text-center px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.28em] font-bold text-[#D4AF37]">
              আমাদের সাথে যোগাযোগ • VISIT & CONNECT
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-3 font-heading">
            Visit & Contact Us
          </h1>
          <p className="text-[#ebdcd0] text-base md:text-lg font-medium tracking-wide max-w-xl">
            নয়াসড়ক পয়েন্টের শোরুমে আপনার আগমন সাদরে আমন্ত্রিত
          </p>
        </div>
      </section>

      {/* Tagline Strip */}
      <section className="bg-[#8B263E] py-3.5 px-6 text-center border-t border-[#D4AF37]/30">
        <p className="text-[#ebdcd0] text-sm font-semibold tracking-wide flex items-center justify-center gap-2">
          <span className="text-[#D4AF37]">✦</span>
          <span>দ্রুততম প্রি-অর্ডার ও সাপোর্টের জন্য আমাদের WhatsApp (01674-054386) অথবা Facebook Inbox-এ যোগাযোগ করুন</span>
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
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#8B263E] font-bold mb-3">
                  যোগাযোগ ও লোকেশন
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e1622] leading-tight mb-4 font-heading">
                  আমাদের আউটলেটে আসুন অথবা
                  <br />
                  <span className="italic font-normal text-[#8B263E]">সরাসরি কথা বলুন</span>
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  3 sis xclusive — ১০০% আসল পাকিস্তানি লাক্সারি লন, ব্রাইডাল প্রিট ও ভেলভেট পোশাকের বিশ্বস্ত ঠিকানা। যেকোনো প্রোডাক্ট স্টক, সাইজ বা কাস্টম প্রি-অর্ডারের জন্য আমাদের সাথে যোগাযোগ করুন।
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#ebdcd0] hover:border-[#8B263E] hover:shadow-md transition-all group"
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#fdf5fa] text-[#8B263E] flex items-center justify-center group-hover:bg-[#8B263E] group-hover:text-white transition-colors">
                      <detail.icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-[#8B263E] font-bold">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target={detail.href.startsWith("http") ? "_blank" : undefined}
                          rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-sm font-bold text-[#1e1622] hover:text-[#8B263E] transition-colors block"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-sm font-bold text-[#1e1622]">{detail.value}</p>
                      )}
                      <p className="text-xs text-neutral-500 font-medium">{detail.note}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons: WhatsApp & Facebook */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={BUSINESS.WHATSAPP}
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
                  <span>Facebook Inbox</span>
                </a>
              </div>
            </div>

            {/* Right: Message Form */}
            <div className="bg-white border border-[#ebdcd0] rounded-3xl p-8 md:p-10 shadow-sm">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#1e1622] mb-1 font-heading">মেসেজ পাঠান</h3>
                <p className="text-xs text-neutral-500">
                  আমরা দ্রুত আপনার বার্তা পর্যালোচনা করে ফোন বা হোয়াটসঅ্যাপে উত্তর দিব।
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("ধন্যবাদ! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।\nদ্রুততম রেসপন্সের জন্য অনুগ্রহ করে আমাদের হোয়াটসঅ্যাপ (01674-054386)-এ নক করুন!");
                }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#8B263E] mb-2">
                      আপনার নাম *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      className="w-full h-11 px-4 border border-[#ebdcd0] rounded-xl text-sm text-[#1e1622] placeholder:text-neutral-400 focus:outline-none focus:border-[#8B263E] focus:ring-1 focus:ring-[#8B263E]/20 transition-colors bg-[#faf7f5]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#8B263E] mb-2">
                      ফোন নম্বর *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="01674-054386"
                      className="w-full h-11 px-4 border border-[#ebdcd0] rounded-xl text-sm text-[#1e1622] placeholder:text-neutral-400 focus:outline-none focus:border-[#8B263E] focus:ring-1 focus:ring-[#8B263E]/20 transition-colors bg-[#faf7f5]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#8B263E] mb-2">
                    ইমেইল (ঐচ্ছিক)
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full h-11 px-4 border border-[#ebdcd0] rounded-xl text-sm text-[#1e1622] placeholder:text-neutral-400 focus:outline-none focus:border-[#8B263E] focus:ring-1 focus:ring-[#8B263E]/20 transition-colors bg-[#faf7f5]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#8B263E] mb-2">
                    বিষয় *
                  </label>
                  <select
                    required
                    className="w-full h-11 px-4 border border-[#ebdcd0] rounded-xl text-sm text-[#1e1622] focus:outline-none focus:border-[#8B263E] focus:ring-1 focus:ring-[#8B263E]/20 transition-colors bg-[#faf7f5]"
                  >
                    <option value="">বিষয় নির্বাচন করুন</option>
                    <option value="lawn">Pakistani Luxury Lawn 3-Piece</option>
                    <option value="pret">Designer Luxury Pret</option>
                    <option value="party">Party Wear & Festive Suits</option>
                    <option value="casual">Casual Farsi & Everyday Sets</option>
                    <option value="velvet">Velvet Luxury Collection</option>
                    <option value="preorder">Pakistani Designer Pre-Order</option>
                    <option value="outlet">নয়াসড়ক আউটলেট ভিজিট ও ট্রায়াল</option>
                    <option value="other">অন্যান্য</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#8B263E] mb-2">
                    আপনার বার্তা *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="পছন্দের ড্রেসের নাম, সাইজ বা কোনো প্রশ্ন লিখুন..."
                    className="w-full px-4 py-3 border border-[#ebdcd0] rounded-xl text-sm text-[#1e1622] placeholder:text-neutral-400 focus:outline-none focus:border-[#8B263E] focus:ring-1 focus:ring-[#8B263E]/20 transition-colors resize-none bg-[#faf7f5]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-13 bg-[#8B263E] hover:bg-[#5E182A] text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-md border border-[#D4AF37]/40 active:scale-[0.99] py-4 cursor-pointer"
                >
                  মেসেজ পাঠান →
                </button>

                <p className="text-[11px] text-center text-neutral-500">
                  ইনস্ট্যান্ট সাড়ার জন্য{" "}
                  <a
                    href={BUSINESS.WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8B263E] font-bold hover:underline"
                  >
                    WhatsApp (01674-054386)
                  </a>{" "}
                  করুন।
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Outlet Location & Directions Card */}
      <section className="bg-white py-14 px-6 border-t border-[#ebdcd0]">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center justify-center size-12 rounded-full bg-[#fdf5fa] text-[#8B263E] mx-auto mb-2">
            <Navigation className="h-6 w-6 text-[#D4AF37]" />
          </div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#8B263E] font-bold">
            ফিজিক্যাল আউটলেট ডিরেকশন
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e1622] font-heading">
            3 sis xclusive — JUST FOR WOMEN
          </h2>
          <p className="text-sm text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            {BUSINESS.ADDRESS}
          </p>
          <p className="text-xs text-neutral-500">
            সরাসরি যোগাযোগ বা হোম ডেলিভারির জন্য আমাদের হটলাইন বা ফেসবুক ইনবক্সে মেসেজ দিন।
          </p>
        </div>
      </section>
    </main>
  );
}
