"use client";

/**
 * 365 Fashion House — Luxury Royal Violet & Imperial Gold Footer
 * Pioneer in Authentic Pakistani Attires in Bangladesh
 * Dhaka - 1206, Bangladesh
 * Official Facebook: https://www.facebook.com/365FashionHouse/
 */

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ArrowUpRight, Sparkles, Check, Phone, Mail, MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { toast } from "sonner";

const shopLinks = [
  { href: "/collections/pakistani-lawn", label: "Luxury Pakistani Lawn" },
  { href: "/collections/organza-chiffon", label: "Organza & Chiffon Luxury" },
  { href: "/collections/designer-pret", label: "Ready-to-Wear Designer Pret" },
  { href: "/collections/festive-party", label: "Festive & Party Couture" },
  { href: "/collections/silk-velvet", label: "Silk & Velvet Luxury" },
];

const helpLinks = [
  { href: "/track-order", label: "Track My Order" },
  { href: "/delivery-info", label: "Delivery & Shipping Info" },
  { href: "/refund-policy", label: "Open Parcel & Refund Policy" },
  { href: "/faq", label: "Frequently Asked Questions (FAQ)" },
  { href: "/contact", label: "Contact & Dhaka Hub" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/about", label: "Our Story & Authenticity" },
];

export function Footer({ settings = {} }: { settings?: Record<string, any> }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    toast.success("Welcome to 365 Fashion House VIP Club! Use promo code 365VIP for 15% off your order.");
  };

  return (
    <>
      <footer className="bg-[#120E1C] text-[#FAF8F5] relative overflow-hidden border-t border-[#6C3483]/30">
        {/* Giant 365 Fashion Watermark Typography */}
        <div className="absolute -bottom-10 right-0 pointer-events-none select-none text-[110px] md:text-[200px] font-bold text-white/[0.02] font-heading leading-none">
          365 FASHION
        </div>

        {/* 1. VIP Club Newsletter Banner */}
        <div className="border-b border-white/10 py-16 md:py-20 relative bg-gradient-to-b from-transparent to-[#191426]/60">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AC0D]/40">
                <Sparkles className="h-3.5 w-3.5 text-[#F39C12]" />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#F39C12]">
                  365 FASHION HOUSE VIP CLUB
                </span>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-heading">
                Be The First To Access Original Pakistani Drops
              </h3>
              <p className="text-xs md:text-sm text-neutral-300 max-w-lg mx-auto leading-relaxed">
                Join 58,000+ fashion lovers across Bangladesh. Get instant notifications on original Pakistani luxury lawn drops, Agha Noor pret launches, and festive Eid collections.
              </p>

              {subscribed ? (
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs font-bold tracking-wider">
                  <Check className="h-4 w-4" />
                  <span>Welcome! Use Promo Code: 365VIP</span>
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
                    className="h-13 px-6 rounded-full bg-white/10 border border-[#6C3483]/50 text-white placeholder:text-neutral-400 text-xs focus:outline-none focus:border-[#D4AC0D] flex-1 backdrop-blur-md"
                  />
                  <button
                    type="submit"
                    className="h-13 px-8 rounded-full bg-[#6C3483] hover:bg-[#D4AC0D] text-white hover:text-[#191426] border border-[#D4AC0D]/60 text-xs font-bold uppercase tracking-[0.16em] transition-all shadow-lg active:scale-98 cursor-pointer"
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
                      : "/365-assets/logo.jpg"
                  }
                  alt="365 Fashion House"
                  width={54}
                  height={54}
                  className="h-13 w-13 object-cover rounded-full ring-2 ring-[#6C3483]/60 group-hover:scale-105 transition-transform"
                />
                <div>
                  <p className="text-lg font-bold text-white tracking-wider font-heading leading-tight">
                    365 Fashion House
                  </p>
                  <p className="text-[10px] text-[#D4AC0D] font-semibold tracking-[0.2em] uppercase">
                    Pioneer in Authentic Pakistani Attires
                  </p>
                </div>
              </Link>
              <p className="text-xs md:text-sm text-neutral-300 leading-relaxed max-w-sm">
                Bangladesh&apos;s pioneer fashion house for 100% genuine Pakistani & Indian designer attires. Dedicated to authenticity, luxury lawn, handcrafted organza, and seamless customer service with Open Parcel inspection.
              </p>

              {/* Direct Contact Info */}
              <div className="space-y-2.5 text-xs text-neutral-300 pt-1">
                <p className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-[#D4AC0D] shrink-0 mt-0.5" />
                  <span>{BUSINESS.ADDRESS}</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-[#D4AC0D] shrink-0" />
                  <a href={`tel:${BUSINESS.PHONE.replace(/[^0-9+]/g, "")}`} className="hover:text-[#F39C12] transition-colors">
                    {BUSINESS.PHONE} (Hotline & WhatsApp)
                  </a>
                </p>
                <p className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-[#D4AC0D] shrink-0" />
                  <a href={`mailto:${BUSINESS.EMAIL}`} className="hover:text-[#F39C12] transition-colors">
                    {BUSINESS.EMAIL}
                  </a>
                </p>
              </div>
            </div>

            {/* Collections Links (Col 2) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4AC0D]">
                Collections
              </h4>
              <ul className="space-y-2.5 text-xs text-neutral-300 font-medium">
                {shopLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-[#F39C12] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Client Concierge (Col 2) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4AC0D]">
                Customer Care
              </h4>
              <ul className="space-y-2.5 text-xs text-neutral-300 font-medium">
                {helpLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-[#F39C12] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Proof & Official Community (Col 3) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4AC0D]">
                Official Channels
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Connect with our active 58,000+ community for daily Facebook updates, product unboxings, new arrival catalogs, and instant inbox orders.
              </p>

              <div className="space-y-2 pt-1">
                <a
                  href={BUSINESS.FACEBOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-white/10 hover:bg-[#191426] text-white text-xs font-bold transition-all border border-white/15 hover:border-[#6C3483]/60"
                >
                  <span className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-[#1877F2] animate-pulse" />
                    Facebook Page (58K+ Followers)
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#F39C12]" />
                </a>

                <a
                  href={BUSINESS.INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-white/10 hover:bg-[#191426] text-white text-xs font-bold transition-all border border-white/15 hover:border-[#6C3483]/60"
                >
                  <span className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-[#E1306C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                    Instagram (@365fashionhouse)
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#F39C12]" />
                </a>

                <a
                  href={BUSINESS.WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366] text-white text-xs font-bold transition-all border border-[#25D366]/40"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-[#25D366]" />
                    WhatsApp: 01714-404008
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
              &copy; {new Date().getFullYear()} 365 Fashion House (৩৬৫ ফ্যাশন হাউস). All Rights Reserved. Pioneer in Authentic Pakistani Attires in Bangladesh.
            </p>
            <div className="flex items-center gap-4 text-[11px] text-[#F39C12]">
              <span>✓ 100% Authentic Product</span>
              <span>•</span>
              <span>Open Parcel Inspection</span>
              <span>•</span>
              <span>Cash On Delivery</span>
              <span>•</span>
              <span>bKash / Nagad</span>
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
        <span className="hidden sm:inline font-sans tracking-wide">WhatsApp Support</span>
      </a>
    </>
  );
}
