"use client";

/**
 * Closet by Tanzz — Luxury Noir & Imperial Gold Footer
 * Wear Tanzz, Wear confidence | INTERNATIONAL LUXURY COLLECTION
 * Natore Tower, 2nd Floor, Shop 12, Rajlokkhi, Sector 3, Uttara, Dhaka
 * Official Facebook: https://www.facebook.com/Closetbytanzz/
 */

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ArrowUpRight, Sparkles, Check, Phone, Mail, MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { toast } from "sonner";

const shopLinks = [
  { href: "/collections/zam-zam-lawn", label: "Zam Zam Lawn Collection" },
  { href: "/collections/designer-boutique", label: "Designer Boutique Collection" },
  { href: "/collections/festive-party-wear", label: "Festive & Party Wear" },
  { href: "/collections/casual-chic", label: "Casual Chic Sets" },
  { href: "/collections/artisan-block", label: "Artisan Block & Florals" },
];

const helpLinks = [
  { href: "/track-order", label: "Track Order" },
  { href: "/contact", label: "Visit Uttara Flagship Outlet" },
  { href: "/refund-policy", label: "Open Parcel & Refund Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/about", label: "Our Story & Brand Vision" },
];

export function Footer({ settings = {} }: { settings?: Record<string, any> }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    toast.success("Welcome to Closet by Tanzz VIP Club! Use promo code TANZZ10 for 10% off your order.");
  };

  return (
    <>
      <footer className="bg-[#0B0B0B] text-[#FAF8F5] relative overflow-hidden border-t border-[#C5A059]/30">
        {/* Giant Tanzz Watermark Typography */}
        <div className="absolute -bottom-10 right-0 pointer-events-none select-none text-[120px] md:text-[220px] font-bold text-white/[0.02] font-heading leading-none">
          TANZZ
        </div>

        {/* 1. VIP Club Newsletter Banner */}
        <div className="border-b border-white/10 py-16 md:py-20 relative bg-gradient-to-b from-transparent to-[#141414]/50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A059]/30">
                <Sparkles className="h-3.5 w-3.5 text-[#C5A059]" />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#C5A059]">
                  CLOSET BY TANZZ VIP CLUB
                </span>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-heading">
                Be The First To Wear New Drops
              </h3>
              <p className="text-xs md:text-sm text-neutral-300 max-w-lg mx-auto leading-relaxed">
                Join 51,000+ fashion connoisseurs across Bangladesh. Get early access to authentic Zam Zam lawn drops, designer boutique launches, and festive Eid collections.
              </p>

              {subscribed ? (
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs font-bold tracking-wider">
                  <Check className="h-4 w-4" />
                  <span>Welcome! Use Promo Code: TANZZ10</span>
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
                    className="h-13 px-6 rounded-full bg-white/10 border border-[#C5A059]/30 text-white placeholder:text-neutral-400 text-xs focus:outline-none focus:border-[#C5A059] flex-1 backdrop-blur-md"
                  />
                  <button
                    type="submit"
                    className="h-13 px-8 rounded-full bg-[#1A1A1A] hover:bg-[#C5A059] text-[#C5A059] hover:text-[#0B0B0B] border border-[#C5A059]/60 text-xs font-bold uppercase tracking-[0.16em] transition-all shadow-lg active:scale-98 cursor-pointer"
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
                      : "/logo.jpg"
                  }
                  alt="Closet by Tanzz"
                  width={54}
                  height={54}
                  className="h-13 w-13 object-cover rounded-full ring-2 ring-[#C5A059]/60 group-hover:scale-105 transition-transform"
                />
                <div>
                  <p className="text-lg font-bold text-white tracking-wider font-heading leading-tight">
                    Closet by Tanzz
                  </p>
                  <p className="text-[10px] text-[#C5A059] font-semibold tracking-[0.22em] uppercase">
                    Wear Tanzz, Wear confidence
                  </p>
                </div>
              </Link>
              <p className="text-xs md:text-sm text-neutral-300 leading-relaxed max-w-sm">
                Dhaka&apos;s premier boutique destination for authentic Zam Zam pure lawn, festive Kashmiri ensembles, artisan boutique prints, and luxury women&apos;s pret.
              </p>

              {/* Direct Contact Info */}
              <div className="space-y-2.5 text-xs text-neutral-300 pt-1">
                <p className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>{BUSINESS.ADDRESS}</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-[#C5A059] shrink-0" />
                  <a href={`tel:${BUSINESS.PHONE.replace(/[^0-9+]/g, "")}`} className="hover:text-[#C5A059] transition-colors">
                    {BUSINESS.PHONE} (Hotline & WhatsApp)
                  </a>
                </p>
                <p className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-[#C5A059] shrink-0" />
                  <a href={`mailto:${BUSINESS.EMAIL}`} className="hover:text-[#C5A059] transition-colors">
                    {BUSINESS.EMAIL}
                  </a>
                </p>
              </div>
            </div>

            {/* Collections Links (Col 2) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#C5A059]">
                Collections
              </h4>
              <ul className="space-y-2.5 text-xs text-neutral-300 font-medium">
                {shopLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-[#C5A059] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Client Concierge (Col 2) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#C5A059]">
                Customer Care
              </h4>
              <ul className="space-y-2.5 text-xs text-neutral-300 font-medium">
                {helpLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-[#C5A059] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Proof & Official Community (Col 3) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#C5A059]">
                Official Channels
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Connect with our active 51,000+ community for daily Facebook live sessions, unboxing videos, new arrivals reels, and instant inbox orders.
              </p>

              <div className="space-y-2 pt-1">
                <a
                  href={BUSINESS.FACEBOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-white/10 hover:bg-[#1A1A1A] text-white text-xs font-bold transition-all border border-white/15 hover:border-[#C5A059]/50"
                >
                  <span className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-[#1877F2] animate-pulse" />
                    Facebook Page (51K+ Followers)
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#C5A059]" />
                </a>

                <a
                  href={BUSINESS.INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-white/10 hover:bg-[#1A1A1A] text-white text-xs font-bold transition-all border border-white/15 hover:border-[#C5A059]/50"
                >
                  <span className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-[#E1306C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                    Instagram (@closetbytanzz)
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#C5A059]" />
                </a>

                <a
                  href={BUSINESS.WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366] text-white text-xs font-bold transition-all border border-[#25D366]/40"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-[#25D366]" />
                    WhatsApp: 01610-663812
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
              &copy; {new Date().getFullYear()} Closet by Tanzz (ক্লোজেট বাই তানয). All Rights Reserved. Wear Tanzz, Wear confidence.
            </p>
            <div className="flex items-center gap-4 text-[11px] text-[#C5A059]">
              <span>✓ Open Parcel Policy</span>
              <span>•</span>
              <span>Cash On Delivery</span>
              <span>•</span>
              <span>bKash / Nagad</span>
              <span>•</span>
              <span>Natore Tower Uttara Showroom</span>
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
        <span className="hidden sm:inline font-sans tracking-wide">WhatsApp Concierge</span>
      </a>
    </>
  );
}
