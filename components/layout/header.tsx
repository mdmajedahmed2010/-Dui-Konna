"use client";

/**
 * Closet by Tanzz — Haute Couture Header
 * Wear Tanzz, Wear confidence
 * INTERNATIONAL LUXURY COLLECTION • HIGHEST QUALITY WOMEN'S FASHION
 * Natore Tower, Sector 3, Uttara, Dhaka — https://www.facebook.com/Closetbytanzz/
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
  { href: "/collections/zam-zam-lawn", label: "Zam Zam Lawn" },
  { href: "/collections/designer-boutique", label: "Designer Boutique" },
  { href: "/collections/festive-party-wear", label: "Festive & Party" },
  { href: "/collections/casual-chic", label: "Casual Chic" },
  { href: "/collections/artisan-block", label: "Artisan Block" },
  { href: "/about", label: "About Tanzz" },
];

const megaMenuData: Record<
  string,
  {
    categories: { label: string; href: string }[];
    styles: { label: string; href: string }[];
    featured: { title: string; subtitle: string; image: string; href: string };
  }
> = {
  "Zam Zam Lawn": {
    categories: [
      { label: "Shop All Zam Zam Lawn", href: "/collections/zam-zam-lawn" },
      { label: "Lime Yellow & Emerald Floral", href: "/collections/zam-zam-lawn" },
      { label: "Olive Pistachio & Teal Floral", href: "/collections/zam-zam-lawn" },
      { label: "Ruby Crimson Vintage Rose", href: "/collections/zam-zam-lawn" },
    ],
    styles: [
      { label: "100% Pure Soft Cotton Lawn", href: "/collections/zam-zam-lawn" },
      { label: "Summer Lightweight Breathable", href: "/collections/zam-zam-lawn" },
      { label: "Everyday & Office Wear Edit", href: "/collections/zam-zam-lawn" },
    ],
    featured: {
      title: "Zam Zam Pure Lawn 3-Piece",
      subtitle: "Comfortable digital prints & soft drape dupatta — From ৳1,350",
      image: ASSETS.img4,
      href: "/collections/zam-zam-lawn",
    },
  },
  "Designer Boutique": {
    categories: [
      { label: "Shop All Designer Boutique", href: "/collections/designer-boutique" },
      { label: "Royal Iris Purple Botanical Suit", href: "/collections/designer-boutique" },
      { label: "Ochre Rust & Charcoal Paisley", href: "/collections/designer-boutique" },
      { label: "Parrot Green & Royal Blue Geometric", href: "/collections/designer-boutique" },
    ],
    styles: [
      { label: "Exclusive Boutique Edition", href: "/collections/designer-boutique" },
      { label: "Contrasting Printed Dupattas", href: "/collections/designer-boutique" },
      { label: "Wear Tanzz, Wear Confidence", href: "/collections/designer-boutique" },
    ],
    featured: {
      title: "Artisan Designer Pret",
      subtitle: "Signature floral motifs & vibrant contrasts — From ৳1,450",
      image: ASSETS.img5,
      href: "/collections/designer-boutique",
    },
  },
  "Festive & Party": {
    categories: [
      { label: "Shop All Festive & Party Wear", href: "/collections/festive-party-wear" },
      { label: "Crimson Maroon Kashmiri Jaal 3pc", href: "/collections/festive-party-wear" },
      { label: "Ruby Crimson Vintage Rose Set", href: "/collections/festive-party-wear" },
      { label: "Midnight Black Festive Block Suit", href: "/collections/festive-party-wear" },
    ],
    styles: [
      { label: "Traditional Kashmiri Jaal Motifs", href: "/collections/festive-party-wear" },
      { label: "Eid & Dawat Celebratory Edit", href: "/collections/festive-party-wear" },
      { label: "Rich Deep Jewel Tones", href: "/collections/festive-party-wear" },
    ],
    featured: {
      title: "Royal Kashmiri Festive 3-Piece",
      subtitle: "Intricate jaal design & celebratory grandeur — From ৳1,550",
      image: ASSETS.img3,
      href: "/collections/festive-party-wear",
    },
  },
  "Casual Chic": {
    categories: [
      { label: "Shop All Casual Chic", href: "/collections/casual-chic" },
      { label: "Cerulean Blue & Sunflower 3pc", href: "/collections/casual-chic" },
      { label: "Neon Lime & Cyan Chevron Geometric", href: "/collections/casual-chic" },
      { label: "Pure Cotton Flared Everyday Suits", href: "/collections/casual-chic" },
    ],
    styles: [
      { label: "Modern Geometric & Chevron Patterns", href: "/collections/casual-chic" },
      { label: "Ultra-Breathable Daily Comfort", href: "/collections/casual-chic" },
      { label: "Effortless Feminine Grace", href: "/collections/casual-chic" },
    ],
    featured: {
      title: "Signature Casual Chic Sets",
      subtitle: "Vibrant prints with handcrafted softness — From ৳1,350",
      image: ASSETS.img10,
      href: "/collections/casual-chic",
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
    "✨ WEAR TANZZ, WEAR CONFIDENCE • 51,000+ FACEBOOK SISTERS",
    "✦ OPEN PARCEL POLICY — রাইডারের সামনে দেখে বুঝে নিন আপনার পোশাক",
    "✨ NATORE TOWER, UTTARA SHOWROOM — LIFT-2, SHOP NO. 12",
    "✦ WHATSAPP & HOTLINE: 01610-663812 • NATIONWIDE CASH ON DELIVERY",
    "✨ 100% QUALITY & COLOR GUARANTEE ON ALL 3-PIECE COLLECTIONS",
    "✦ CLOSET BY TANZZ — INTERNATIONAL LUXURY COLLECTION",
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* 1. Endless Haute Marquee Ticker */}
      <div className="bg-[#0B0B0B] text-[#C5A059] overflow-hidden py-2 border-b border-[#C5A059]/30 select-none">
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
            ? "bg-white/95 backdrop-blur-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.12)] border-b border-[#C5A059]/25 py-1.5"
            : "bg-[#FAF8F5]/95 backdrop-blur-xl border-b border-[#E8DFD3] py-2.5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex h-16 md:h-18 items-center justify-between">
            {/* Left: Mobile menu + Brand Identity */}
            <div className="flex items-center gap-3 md:gap-5">
              <MobileNav links={navLinks} />
              <Link href="/" className="flex items-center gap-3 group/brand">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#C5A059] to-[#E6C280] opacity-70 blur-[2px] group-hover/brand:opacity-100 transition-opacity" />
                  <Image
                    src={
                      typeof settings?.store_logo === "string" && settings.store_logo
                        ? settings.store_logo
                        : "/logo.jpg"
                    }
                    alt="Closet by Tanzz"
                    width={48}
                    height={48}
                    className="relative h-11 w-11 md:h-12 md:w-12 object-cover rounded-full ring-2 ring-[#C5A059]/60 shadow-sm transition-transform duration-500 group-hover/brand:scale-105"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-[17px] md:text-[19px] font-bold tracking-[0.06em] text-[#121212] font-heading leading-none">
                      CLOSET
                    </p>
                    <span className="text-[12px] font-semibold tracking-[0.18em] text-[#C5A059] uppercase font-sans">
                      by Tanzz
                    </span>
                  </div>
                  <p className="text-[9px] font-medium tracking-[0.2em] text-[#121212]/70 uppercase mt-0.5 hidden sm:block">
                    WEAR TANZZ, WEAR CONFIDENCE
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
                    className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#1A1A1A]/85 hover:text-[#C5A059] py-4 block transition-all relative group/nav"
                  >
                    {link.label}
                    <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#121212] to-[#C5A059] group-hover/nav:w-full transition-all duration-300 rounded-full" />
                  </Link>
                );
              })}
            </nav>

            {/* Right: Quick WhatsApp Concierge + Search + Cart + Account */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Trust Badge */}
              <div
                className="hidden 2xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 text-[#121212] text-[10.5px] font-semibold"
              >
                <Sparkles className="h-3 w-3 text-[#C5A059]" />
                <span>Uttara Showroom</span>
              </div>

              {/* WhatsApp Quick Order button */}
              <a
                href={BUSINESS.WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] hover:bg-[#121212] text-[#121212] hover:text-[#C5A059] border border-[#C5A059]/50 transition-all duration-300 text-[11px] font-bold tracking-wide shadow-xs group/wa active:scale-[0.97]"
              >
                <MessageCircle className="h-3.5 w-3.5 text-[#25D366] group-hover/wa:text-[#C5A059] transition-colors" />
                <span>WhatsApp: {BUSINESS.PHONE}</span>
              </a>

              <SearchBar />
              <CartButton />

              <Link
                href="/account"
                className="flex items-center justify-center size-10 rounded-full text-[#121212] hover:text-white hover:bg-[#121212] transition-all duration-300 bg-white border border-[#E8DFD3] shadow-xs active:scale-[0.95]"
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
