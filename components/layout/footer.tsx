"use client";

/**
 * Dui Konna (দুই কন্যা) — Luxury Haute Couture Footer
 * Exclusive Muslin Sarees, Authentic Dhakai Jamdani & Luxury Ethnic Couture
 * Showroom: House #21/B, Road #01, Nikunja-2, Khilkhet, Dhaka-1229
 * Facebook: https://www.facebook.com/duikonna01 • 484,000+ Followers
 * Open Parcel Inspection Nationwide
 */

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ArrowUpRight, Sparkles, Check, Phone, Mail, MapPin, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { toast } from "sonner";

const shopLinks = [
  { href: "/collections/exclusive-muslin", label: "Exclusive Muslin Sarees" },
  { href: "/collections/dhakai-jamdani", label: "Authentic Dhakai Jamdani" },
  { href: "/collections/bridal-festive", label: "Bridal & Festive Red Muslin" },
  { href: "/collections/luxury-karchupi", label: "Luxury Karchupi & Organza" },
  { href: "/collections/pastel-heritage", label: "Pastel Heritage Muslin" },
  { href: "/collections/muslin-four-piece", label: "Exclusive Muslin 4-Piece Sets" },
];

const helpLinks = [
  { href: "/track-order", label: "Track My Order" },
  { href: "/delivery-info", label: "Delivery & Shipping Info (৳80/৳150)" },
  { href: "/refund-policy", label: "Open Parcel & Return Policy" },
  { href: "/faq", label: "Frequently Asked Questions (FAQ)" },
  { href: "/contact", label: "Showroom Location & Hotlines" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/about", label: "About Dui Konna & Shamima Nasrin" },
];

export function Footer({ settings = {} }: { settings?: Record<string, any> }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    toast.success("Welcome to Dui Konna VIP Heritage Club! Use promo code DUIKONNA10 for 10% off your order.");
  };

  return (
    <>
      <footer className="bg-[#121214] text-[#FAF7F2] relative overflow-hidden border-t border-[#D4AF37]/30">
        {/* Giant Watermark Typography */}
        <div className="absolute -bottom-10 right-0 pointer-events-none select-none text-[80px] md:text-[160px] font-bold text-white/[0.03] font-heading leading-none">
          DUI KONNA
        </div>

        {/* 1. VIP Club Newsletter Banner */}
        <div className="border-b border-white/10 py-16 md:py-20 relative bg-gradient-to-b from-transparent to-[#181513]/70">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/40">
                <span className="text-[#D4AF37] text-xs">🦋</span>
                <span className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#D4AF37]">
                  DUI KONNA VIP HERITAGE CLUB
                </span>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-heading">
                মসলিন ও জামদানির এক্সক্লুসিভ কালেকশন সবার আগে
              </h3>
              <p className="text-xs md:text-sm text-neutral-300 max-w-lg mx-auto leading-relaxed">
                ৪৮৪,০০০+ আপুদের বিশ্বস্ত পরিবারে যুক্ত থাকুন। নতুন ঢাকাই মসলিন শাড়ি, ব্রাইডাল কালেকশন ও স্পেশাল শোরুম অফারের তাৎক্ষণিক আপডেট পেতে সাবস্ক্রাইব করুন।
              </p>

              {subscribed ? (
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs font-bold tracking-wider">
                  <Check className="h-4 w-4" />
                  <span>Welcome! Use Promo Code: DUIKONNA10 (10% OFF)</span>
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
                    className="h-13 px-8 rounded-full bg-[#8B0000] hover:bg-[#A0121A] text-[#D4AF37] hover:text-white border border-[#D4AF37]/60 text-xs font-bold uppercase tracking-[0.16em] transition-all shadow-lg active:scale-98 cursor-pointer"
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
                    typeof settings?.store_logo === "string" && settings.store_logo
                      ? settings.store_logo
                      : "/duikonna-assets/logo.png"
                  }
                  alt="Dui Konna (দুই কন্যা)"
                  width={54}
                  height={54}
                  className="h-13 w-13 object-cover rounded-full ring-2 ring-[#D4AF37] group-hover:scale-105 transition-transform bg-black"
                />
                <div>
                  <p className="text-xl font-bold text-white tracking-wider font-heading leading-tight flex items-center gap-1.5">
                    <span className="text-[#D4AF37] text-base">🦋</span>
                    Dui Konna
                  </p>
                  <p className="text-[10px] text-[#D4AF37] font-semibold tracking-[0.2em] uppercase">
                    দুই কন্যা • NIKUNJA-2, DHAKA
                  </p>
                </div>
              </Link>
              <p className="text-xs md:text-sm text-neutral-300 leading-relaxed max-w-sm">
                &ldquo;আমাদের পেজে রয়েছে ঢাকাই মসলিন শাড়ির সবচেয়ে অনন্য কালেকশন এবং আমরা সবসময় সেরা পণ্য পরিবেশনে অঙ্গীকারবদ্ধ।&rdquo; শামীমা নাসরিনের পরিচালনায় খাঁটি হ্যান্ডক্রাফটেড ঐতিহ্য ও উন্মুক্ত পার্সেল চেক করার ১০০% নিরাপত্তা।
              </p>

              {/* Direct Contact Info */}
              <div className="space-y-2.5 text-xs text-neutral-300 pt-1">
                <p className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>
                    <strong>শোরুম:</strong> {BUSINESS.ADDRESS}
                  </span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Clock className="h-4 w-4 text-[#D4AF37] shrink-0" />
                  <span>
                    <strong>শোরুম সময়সূচি:</strong> প্রতিদিন সকাল ১১:০০ – রাত ৯:০০
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

            {/* Quick Links Column (Col 3) */}
            <div className="lg:col-span-3 space-y-4">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#D4AF37]">
                Collections &amp; Sarees
              </p>
              <ul className="space-y-2.5 text-xs text-neutral-400">
                {shopLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors flex items-center justify-between group"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="h-3 w-3 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help & Policies Column (Col 4) */}
            <div className="lg:col-span-4 space-y-4">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#D4AF37]">
                Customer Support &amp; Policies
              </p>
              <ul className="space-y-2.5 text-xs text-neutral-400">
                {helpLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors flex items-center justify-between group"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="h-3 w-3 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Channels */}
              <div className="pt-3">
                <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-2">
                  Official Channels:
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={BUSINESS.FACEBOOK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-[#8B0000] text-xs font-medium text-white transition-colors border border-white/20 flex items-center gap-1.5"
                  >
                    <span>Facebook (484K+)</span>
                    <ArrowUpRight className="h-3 w-3 text-[#D4AF37]" />
                  </a>
                  <a
                    href={BUSINESS.WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-full bg-emerald-950/80 hover:bg-emerald-900 text-xs font-medium text-emerald-300 transition-colors border border-emerald-500/40 flex items-center gap-1.5"
                  >
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Payment Icons */}
          <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37]">🦋</span>
              <p>
                &copy; {new Date().getFullYear()} Dui Konna (দুই কন্যা). Owner Shamima Nasrin. All Rights Reserved.
              </p>
            </div>
            <div className="flex items-center gap-4 text-[11px] text-neutral-400">
              <span>✓ Open Parcel Inspection</span>
              <span>•</span>
              <span>✓ Cash on Delivery</span>
              <span>•</span>
              <span>✓ 100% Authentic Handloom Muslin</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
