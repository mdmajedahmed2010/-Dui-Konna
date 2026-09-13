"use client";

/**
 * 3 sis xclusive | Sylhet — Haute Couture Header
 * JUST FOR WOMEN | 17 Years of Trust in Fashion
 * Authentic Pakistani Designer Fashion & Luxury Ethnic Wear
 * Website: https://3sisxclusivebd.com — https://www.facebook.com/3.sis.xclusive/
 */

import Link from "next/link";
import Image from "next/image";
import { User, MessageCircle, MapPin, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { MobileNav } from "./mobile-nav";
import { CartButton } from "./cart-button";
import { SearchBar } from "./search-bar";
import { MegaMenu } from "../storefront/mega-menu";
import { BUSINESS } from "@/lib/constants";
import { ASSETS } from "@/lib/demo-data";

const navLinks = [
  { href: "/collections/pakistani-lawn", label: "Pakistani Lawn" },
  { href: "/collections/designer-luxury", label: "Designer Pre-Orders" },
  { href: "/collections/party-wear", label: "Party Wear" },
  { href: "/collections/casual-sets", label: "Casual & Daily Chic" },
  { href: "/collections/vintage-florals", label: "Vintage Florals" },
  { href: "/about", label: "About 3 sis" },
];

const megaMenuData: Record<
  string,
  {
    categories: { label: string; href: string }[];
    styles: { label: string; href: string }[];
    featured: { title: string; subtitle: string; image: string; href: string };
  }
> = {
  "Pakistani Lawn": {
    categories: [
      { label: "Shop All Pakistani Lawn", href: "/collections/pakistani-lawn" },
      { label: "Midnight Black & Fuchsia 3pc", href: "/collections/pakistani-lawn" },
      { label: "Mustard Gold Neckline Lawn Set", href: "/collections/pakistani-lawn" },
      { label: "Royal Indigo Kashmiri Floral Suit", href: "/collections/pakistani-lawn" },
    ],
    styles: [
      { label: "100% Directly Imported Pakistani", href: "/collections/pakistani-lawn" },
      { label: "Summer Lightweight Breathable", href: "/collections/pakistani-lawn" },
      { label: "Eid Festive Lawn Specials", href: "/collections/pakistani-lawn" },
    ],
    featured: {
      title: "Festive Pure Lawn 3-Piece",
      subtitle: "Authentic Pakistani needlework & lightweight dupattas — From ৳3,950",
      image: ASSETS.img1,
      href: "/collections/pakistani-lawn",
    },
  },
  "Designer Pre-Orders": {
    categories: [
      { label: "Shop All Designer Pre-Orders", href: "/collections/designer-luxury" },
      { label: "Ruby Crimson & Cream Floral Luxury", href: "/collections/designer-luxury" },
      { label: "Golden Ochre Traditional Paisley", href: "/collections/designer-luxury" },
      { label: "Luxury Cutwork Dupattas", href: "/collections/designer-luxury" },
    ],
    styles: [
      { label: "17 Years of Trust in Fashion", href: "/collections/designer-luxury" },
      { label: "Handcrafted Zardozi & Adda Work", href: "/collections/designer-luxury" },
      { label: "20-30% Advance Pre-Order Booking", href: "/collections/designer-luxury" },
    ],
    featured: {
      title: "Direct Pakistani Luxury Imports",
      subtitle: "Pure silk dupattas & intricate embellishments — From ৳4,250",
      image: ASSETS.img5,
      href: "/collections/designer-luxury",
    },
  },
  "Party Wear": {
    categories: [
      { label: "Shop All Party Wear", href: "/collections/party-wear" },
      { label: "Deep Navy Floral Scalloped Set", href: "/collections/party-wear" },
      { label: "Royal Zardozi Festive Suits", href: "/collections/party-wear" },
      { label: "Cutwork Organza Ensembles", href: "/collections/party-wear" },
    ],
    styles: [
      { label: "Zardozi & Adda Work Necklines", href: "/collections/party-wear" },
      { label: "Luxury Organza & Silk Ensembles", href: "/collections/party-wear" },
      { label: "Wedding & Evening Elegance", href: "/collections/party-wear" },
    ],
    featured: {
      title: "Royal Scalloped Festive Wear",
      subtitle: "Hand-embellished evening couture — From ৳4,450",
      image: ASSETS.img4,
      href: "/collections/party-wear",
    },
  },
  "Casual & Daily Chic": {
    categories: [
      { label: "Shop All Daily Chic", href: "/collections/casual-sets" },
      { label: "Lavender Orchid & Lemon Yellow Set", href: "/collections/casual-sets" },
      { label: "Pure Cotton Flared Sets", href: "/collections/casual-sets" },
      { label: "Everyday Boutique Essentials", href: "/collections/casual-sets" },
    ],
    styles: [
      { label: "Relaxed Unstitched & Stitched Options", href: "/collections/casual-sets" },
      { label: "Pure Breathable Cotton", href: "/collections/casual-sets" },
      { label: "Effortless Feminine Grace", href: "/collections/casual-sets" },
    ],
    featured: {
      title: "Signature Daily Chic Sets",
      subtitle: "Vibrant floral prints with handcrafted softness — From ৳3,650",
      image: ASSETS.img8,
      href: "/collections/casual-sets",
    },
  },
};

export function Header({ settings = {} }: { settings?: Record<string, unknown> }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const marqueeItems = [
    "🌸 100% DIRECTLY IMPORTED PAKISTANI LUXURY DRESSES",
    "✦ 17 YEARS OF TRUST IN FASHION — JUST FOR WOMEN",
    "🌸 OPEN PARCEL POLICY — প্যাকেট খুলে দেখে পেমেন্ট করুন",
    "✦ 53,000+ FACEBOOK SISTERS COMMUNITY • 5.0 ★ RATING",
    "🌸 WHATSAPP & HOTLINE: 01674-054386",
    "✦ 3 SIS XCLUSIVE | SYLHET — AUTHENTIC ETHNIC ELEGANCE",
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* 1. Endless Haute Marquee Ticker */}
      <div className="bg-[#4A1525] text-[#F3C649] overflow-hidden py-2 border-b border-[#D4AF37]/30 select-none">
        <div className="animate-marquee flex items-center gap-10 whitespace-nowrap text-[10px] md:text-[11px] font-semibold tracking-[0.2em] uppercase">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <span key={idx} className="flex items-center gap-3">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* 2. Floating Luxury Glass Island */}
      <div
        className={`w-full transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-2xl shadow-[0_10px_30px_-10px_rgba(139,38,62,0.15)] border-b border-[#D4AF37]/25 py-1.5"
            : "bg-[#FAF4F0]/95 backdrop-blur-xl border-b border-[#EBDCD5] py-2.5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex h-16 md:h-18 items-center justify-between">
            {/* Left: Mobile menu + Brand Identity */}
            <div className="flex items-center gap-3 md:gap-5">
              <MobileNav links={navLinks} />
              <Link href="/" className="flex items-center gap-3 group/brand">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#D4708A] opacity-70 blur-[2px] group-hover/brand:opacity-100 transition-opacity" />
                  <Image
                    src={
                      typeof settings?.store_logo === "string" && settings.store_logo
                        ? settings.store_logo
                        : "/logo.jpg"
                    }
                    alt="3 sis xclusive"
                    width={48}
                    height={48}
                    className="relative h-11 w-11 md:h-12 md:w-12 object-cover rounded-full ring-2 ring-[#D4AF37]/50 shadow-sm transition-transform duration-500 group-hover/brand:scale-105"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-[16px] md:text-[18px] font-bold tracking-[0.06em] text-[#8B263E] font-heading leading-none">
                      3 SIS
                    </p>
                    <span className="text-[11px] font-semibold tracking-[0.25em] text-[#D4AF37] uppercase font-sans">
                      XCLUSIVE
                    </span>
                  </div>
                  <p className="text-[9px] font-medium tracking-[0.22em] text-[#8B263E]/80 uppercase mt-0.5 hidden sm:block">
                    JUST FOR WOMEN • 17 YRS TRUST
                  </p>
                </div>
              </Link>
            </div>

            {/* Center: Desktop Navigation with Couture Mega Menu */}
            <nav className="hidden lg:flex items-center gap-7 static" aria-label="Main navigation">
              {navLinks.map((link) => {
                const hasMegaMenu = link.label in megaMenuData;
                const menu = megaMenuData[link.label];

                if (hasMegaMenu && menu) {
                  return (
                    <MegaMenu key={link.href} label={link.label} href={link.href} data={menu} />
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    prefetch={true}
                    className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#2A151C]/85 hover:text-[#8B263E] py-4 block transition-all relative group/nav"
                  >
                    {link.label}
                    <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#8B263E] to-[#D4AF37] group-hover/nav:w-full transition-all duration-300 rounded-full" />
                  </Link>
                );
              })}
            </nav>

            {/* Right: Quick WhatsApp Concierge + Search + Cart + Account */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Trust Badge */}
              <div
                className="hidden 2xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF4F0] border border-[#D4AF37]/40 text-[#8B263E] text-[10.5px] font-semibold"
              >
                <Sparkles className="h-3 w-3 text-[#D4AF37]" />
                <span>17 Years Trust</span>
              </div>

              {/* WhatsApp Quick Order button */}
              <a
                href={BUSINESS.WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF4F0] hover:bg-[#8B263E] text-[#8B263E] hover:text-white border border-[#D4AF37]/50 transition-all duration-300 text-[11px] font-bold tracking-wide shadow-xs group/wa active:scale-[0.97]"
              >
                <MessageCircle className="h-3.5 w-3.5 text-[#25D366] group-hover/wa:text-[#F3C649] transition-colors" />
                <span>WhatsApp: {BUSINESS.PHONE}</span>
              </a>

              <SearchBar />
              <CartButton />

              <Link
                href="/account"
                className="flex items-center justify-center size-10 rounded-full text-[#8B263E] hover:text-white hover:bg-[#8B263E] transition-all duration-300 bg-white border border-[#EBDCD5] shadow-xs active:scale-[0.95]"
                aria-label="My account"
              >
                <User className="h-4.5 w-4.5 stroke-[1.7]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
