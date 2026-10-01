"use client";

/**
 * Shopping Queen by Orni — Luxury Haute Couture Footer
 * Authentic Pakistani Suits, Exclusive Festive Partywear & Natural Glow Skincare
 * Dhaka, Bangladesh • Facebook: https://www.facebook.com/Shoppingqueenbyorni
 * 190,500+ Followers • Open Parcel Inspection Nationwide
 */

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ArrowUpRight, Sparkles, Check, Phone, Mail, MapPin, Crown } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { toast } from "sonner";

const shopLinks = [
  { href: "/collections/pakistani-lawn", label: "Pakistani Lawn Collection" },
  { href: "/collections/festive-party", label: "Exclusive Festive Partywear" },
  { href: "/collections/premium-cotton", label: "Premium Handloom & Pure Cotton" },
  { href: "/collections/chunri-traditional", label: "Traditional Chunri & Bandhani" },
  { href: "/collections/orni-signature", label: "Orni Signature Edit" },
  { href: "/collections/skincare-glow", label: "Kim Whitening & Glow Care" },
];

const helpLinks = [
  { href: "/track-order", label: "Track My Order" },
  { href: "/delivery-info", label: "Delivery & Shipping Info (৳80/৳150)" },
  { href: "/refund-policy", label: "Open Parcel & Return Policy" },
  { href: "/faq", label: "Frequently Asked Questions (FAQ)" },
  { href: "/contact", label: "Contact Us & Hotline" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/about", label: "About Orni Islam & Brand Story" },
];

export function Footer({ settings = {} }: { settings?: Record<string, any> }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    toast.success("Welcome to Shopping Queen VIP Club! Use promo code QUEENVIP for 15% off your order.");
  };

  return (
    <>
      <footer className="bg-[#121214] text-[#FAF6F0] relative overflow-hidden border-t border-[#D4AF37]/30">
        {/* Giant Watermark Typography */}
        <div className="absolute -bottom-10 right-0 pointer-events-none select-none text-[80px] md:text-[160px] font-bold text-white/[0.02] font-heading leading-none">
          SHOPPING QUEEN
        </div>

        {/* 1. VIP Club Newsletter Banner */}
        <div className="border-b border-white/10 py-16 md:py-20 relative bg-gradient-to-b from-transparent to-[#1A1A1A]/70">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/40">
                <Crown className="h-3.5 w-3.5 text-[#D4AF37]" />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#D4AF37]">
                  SHOPPING QUEEN VIP CLUB
                </span>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-heading">
                সবার আগে পান নতুন ড্রেস ও অফারের আপডেট
              </h3>
              <p className="text-xs md:text-sm text-neutral-300 max-w-lg mx-auto leading-relaxed">
                ১৯০,০০০+ আপুদের নির্ভরযোগ্য পরিবারে যুক্ত হোন। নতুন পাকিস্তানি লন, পার্টিওয়্যার কালেকশন এবং স্পেশাল অফারের তাৎক্ষণিক নোটিফিকেশন পেতে সাবস্ক্রাইব করুন।
              </p>

              {subscribed ? (
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs font-bold tracking-wider">
                  <Check className="h-4 w-4" />
                  <span>Welcome! Use Promo Code: QUEENVIP (15% OFF)</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto pt-2"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email address"
                    className="h-13 px-6 rounded-full bg-white/10 border border-[#D4AF37]/50 text-white placeholder:text-neutral-400 text-xs focus:outline-none focus:border-[#D4AF37] flex-1 backdrop-blur-md"
                  />
                  <button
                    type="submit"
                    className="h-13 px-8 rounded-full bg-[#6B1D2F] hover:bg-[#8D1D38] text-[#D4AF37] hover:text-white border border-[#D4AF37]/60 text-xs font-bold uppercase tracking-[0.16em] transition-all shadow-lg active:scale-98 cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* 2. Main Footer Navigation & Contact */}
        <div className="container mx-auto px-6 md:px-12 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12">
            {/* Brand Story Column (Col 5) */}
            <div className="lg:col-span-5 space-y-5">
              <Link href="/" className="inline-flex items-center gap-3 group">
                <Image
                  src={
                    typeof settings.store_logo === "string" && settings.store_logo
                      ? settings.store_logo
                      : "/shoppingqueen-assets/logo.avif"
                  }
                  alt="Shopping Queen by Orni"
                  width={54}
                  height={54}
                  className="h-13 w-13 object-cover rounded-full ring-2 ring-[#D4AF37] group-hover:scale-105 transition-transform"
                />
                <div>
                  <p className="text-xl font-bold text-white tracking-wider font-heading leading-tight flex items-center gap-1.5">
                    <Crown className="h-4 w-4 text-[#D4AF37]" />
                    Shopping Queen
                  </p>
                  <p className="text-[10px] text-[#D4AF37] font-semibold tracking-[0.18em] uppercase">
                    BY ORNI • DHAKA, BANGLADESH
                  </p>
                </div>
              </Link>
              <p className="text-xs md:text-sm text-neutral-300 leading-relaxed max-w-sm">
                দেশী-বিদেশী বিভিন্ন ব্র্যান্ডের মেয়েদের সালোয়ার কামিজ, এক্সক্লুসিভ পাকিস্তানি লন, গর্জিয়াস পার্টিওয়্যার এবং খাঁটি ন্যাচারাল স্কিনকেয়ার পণ্যের শীর্ষস্থানীয় প্রতিষ্ঠান। অর্ণি ইসলামের ব্যক্তিগত তত্ত্বাবধানে সেরা মান ও উন্মুক্ত পার্সেল চেক করার নিশ্চয়তা।
              </p>

              {/* Direct Contact Info */}
              <div className="space-y-2.5 text-xs text-neutral-300 pt-1">
                <p className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>
                    <strong>প্রধান কার্যালয়:</strong> {BUSINESS.ADDRESS}
                  </span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-[#D4AF37] shrink-0" />
                  <a href={`tel:${BUSINESS.PHONE.replace(/[^0-9+]/g, "")}`} className="hover:text-[#D4AF37] transition-colors">
                    {BUSINESS.PHONE} / {BUSINESS.PHONE_ALT} (হটলাইন ও হোয়াটসঅ্যাপ)
                  </a>
                </p>
                <p className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-[#D4AF37] shrink-0" />
                  <a href={`mailto:${BUSINESS.EMAIL}`} className="hover:text-[#D4AF37] transition-colors">
                    {BUSINESS.EMAIL}
                  </a>
                </p>
              </div>
            </div>

            {/* Collections Links (Col 2) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37]">
                Collections
              </h4>
              <ul className="space-y-2.5 text-xs text-neutral-300 font-medium">
                {shopLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-[#D4AF37] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Client Concierge (Col 2) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37]">
                Customer Care
              </h4>
              <ul className="space-y-2.5 text-xs text-neutral-300 font-medium">
                {helpLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-[#D4AF37] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Proof & Official Community (Col 3) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37]">
                Official Facebook Page
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                আমাদের সক্রিয় ১৯০,৫০০+ আপুদের ফেসবুক পরিবারে যোগ দিন নিয়মিত লাইভ শো, নতুন ভিডিও ক্যাটালগ এবং সরাসরি মেসেঞ্জার অর্ডারের জন্য।
              </p>

              <div className="space-y-2 pt-1">
                <a
                  href={BUSINESS.FACEBOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-white/10 hover:bg-[#1A1A1A] text-white text-xs font-bold transition-all border border-white/15 hover:border-[#D4AF37]/60"
                >
                  <span className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-[#1877F2] animate-pulse" />
                    Shopping Queen by Orni (190K+)
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#D4AF37]" />
                </a>

                <a
                  href={BUSINESS.WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366] text-white text-xs font-bold transition-all border border-[#25D366]/40"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-[#25D366]" />
                    WhatsApp Hotline: {BUSINESS.PHONE}
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Bottom Copyright & Trust Bar */}
        <div className="border-t border-white/10 py-6 text-xs text-neutral-400">
          <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-center md:text-left">
              &copy; {new Date().getFullYear()} Shopping Queen by Orni (শপিং কুইন বাই অর্নি). All Rights Reserved.
            </p>
            <div className="flex items-center gap-4 text-[11px] text-[#D4AF37] flex-wrap justify-center">
              <span>✓ ১০০% অরিজিনাল কোয়ালিটি</span>
              <span>•</span>
              <span>ওপেন পার্সেল চেকিং</span>
              <span>•</span>
              <span>সারাদেশে ক্যাশ অন ডেলিভারি</span>
              <span>•</span>
              <span>বিকাশ / নগদ পেমেন্ট</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Concierge Button (Bottom Right) */}
      <a
        href={BUSINESS.WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] text-white font-bold text-xs shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer group/flwa"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-5 w-5 fill-white text-[#25D366]" />
        <span className="hidden sm:inline font-sans tracking-wide">WhatsApp Hotline</span>
      </a>
    </>
  );
}
