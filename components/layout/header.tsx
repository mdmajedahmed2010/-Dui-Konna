"use client";

/**
 * Ash and Aspen (ash and aspen) — Haute Couture Header
 * Luxury Pakistani Designer Attires & Ready-to-Wear Pret
 * House #76, Gausul Azam Avenue, Sector #13, Uttara, Dhaka - 1230, Bangladesh
 * Official Facebook: https://www.facebook.com/ashandaspenclothing/
 */

import Link from "next/link";
import Image from "next/image";
import { User, MessageCircle, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { MobileNav } from "./mobile-nav";
import { CartButton } from "./cart-button";
import { SearchBar } from "./search-bar";
import { MegaMenu } from "../storefront/mega-menu";
import { BUSINESS } from "@/lib/constants";
import { ASSETS } from "@/lib/demo-data";

const navLinks = [
  { href: "/collections/pakistani-lawn", label: "Pakistani Lawn" },
  { href: "/collections/organza-chiffon", label: "Organza & Chiffon" },
  { href: "/collections/designer-pret", label: "Designer Pret" },
  { href: "/collections/festive-party", label: "Festive & Party" },
  { href: "/collections/casual-lite", label: "Casual Lite" },
  { href: "/about", label: "About Us" },
  { href: "/faq", label: "FAQ" },
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
      { label: "Gulaal Seafoam Mint Lawn", href: "/products/gulaal-luxury-lawn-3piece-embroidered-suit-seafoam-mint-whisper" },
      { label: "Nur Festive Chikankari Kameez", href: "/products/nur-festive-chikankari-schiffli-long-kameez-3piece-royal-ivory" },
      { label: "Gulaal Coral Peach Lawn", href: "/products/gulaal-festive-lawn-3piece-tassels-coral-peach-emerald-teal" },
    ],
    styles: [
      { label: "100% Original Pakistani Lawn", href: "/collections/pakistani-lawn" },
      { label: "Pure Chiffon & Organza Dupattas", href: "/collections/pakistani-lawn" },
      { label: "Open Parcel Inspection Guaranteed", href: "/collections/pakistani-lawn" },
    ],
    featured: {
      title: "Gulaal Luxury Lawn 3-Piece",
      subtitle: "Intricate neckline embroidery & cutwork hem — ৳4,250",
      image: ASSETS.img1,
      href: "/collections/pakistani-lawn",
    },
  },
  "Organza & Chiffon": {
    categories: [
      { label: "Shop All Organza & Chiffon", href: "/collections/organza-chiffon" },
      { label: "Nur Lavender Butterfly Pret", href: "/products/nur-luxury-organza-butterfly-ensemble-lilac-petal-whisper" },
      { label: "Silk Chiffon Dupatta Kurti", href: "/products/nur-pure-silk-chiffon-dupatta-kurti-ensemble-lavender-dream" },
      { label: "Semi-Formal Luxury Pret", href: "/collections/organza-chiffon" },
    ],
    styles: [
      { label: "Exclusive Festive Organza", href: "/collections/organza-chiffon" },
      { label: "Handcrafted Resham & Tilla Work", href: "/collections/organza-chiffon" },
      { label: "Boutique Quality from Uttara Showroom", href: "/collections/organza-chiffon" },
    ],
    featured: {
      title: "Nur Organza Butterfly Ensemble",
      subtitle: "Pure lilac dupatta with hand-painted botanicals — ৳3,950",
      image: ASSETS.img5,
      href: "/collections/organza-chiffon",
    },
  },
  "Designer Pret": {
    categories: [
      { label: "Shop All Designer Pret", href: "/collections/designer-pret" },
      { label: "Sadabahar Sandy Taupe 3-Piece", href: "/products/sadabahar-stitched-3piece-pret-suit-sandy-taupe-royal-indigo" },
      { label: "Nur Royal Schiffli Stitched Suit", href: "/products/nur-royal-schiffli-embroidered-stitched-suit-pearl-cream-glow" },
      { label: "Ready-to-Wear Stitched Sets", href: "/collections/designer-pret" },
    ],
    styles: [
      { label: "Sadabahar Authentic Stitched Pret", href: "/collections/designer-pret" },
      { label: "Scalloped Lace & Bell Sleeves", href: "/collections/designer-pret" },
      { label: "Ready to Wear with No Tailoring Hassle", href: "/collections/designer-pret" },
    ],
    featured: {
      title: "Sadabahar Stitched 3-Piece",
      subtitle: "Sandy taupe & royal indigo floral pret — ৳3,650",
      image: ASSETS.img3,
      href: "/collections/designer-pret",
    },
  },
  "Festive & Party": {
    categories: [
      { label: "Shop All Festive & Party Wear", href: "/collections/festive-party" },
      { label: "Ruby Crimson Empress Velvet Suit", href: "/products/ash-aspen-festive-velvet-chiffon-3piece-ruby-crimson-empress" },
      { label: "Gulaal Tassel Festive Suit", href: "/products/gulaal-festive-lawn-3piece-tassels-coral-peach-emerald-teal" },
      { label: "Wedding & Dawat Couture", href: "/collections/festive-party" },
    ],
    styles: [
      { label: "Heavy Zari, Zardozi & Resham", href: "/collections/festive-party" },
      { label: "Eid & Festive Celebratory Edit", href: "/collections/festive-party" },
      { label: "Deep Jewel Tones & Silk Dupattas", href: "/collections/festive-party" },
    ],
    featured: {
      title: "Ruby Crimson Empress 3-Piece",
      subtitle: "Deep maroon lawn & bottle green chiffon — ৳4,650",
      image: ASSETS.img4,
      href: "/collections/festive-party",
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
    "✨ ASH AND ASPEN • LUXURY PAKISTANI DESIGNER ATTIRES",
    "✦ 100% ORIGINAL LAWN, ORGANZA & READY-TO-WEAR PRET",
    "✨ OPEN PARCEL POLICY — রাইডারের সামনে দেখে বুঝে নিন আপনার পোশাক",
    "✦ UTTARA SHOWROOM: HOUSE 76, GAUSUL AZAM AVENUE, SECTOR 13",
    "✨ DHAKA DELIVERY ৳80 • NATIONWIDE ৳150 • CASH ON DELIVERY",
    "✦ WHATSAPP & HOTLINE: 01721-396111 • DHAKA - 1230",
    "✨ 81,000+ FACEBOOK SISTERS & 96% POSITIVE RECOMMENDATION",
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* 1. Endless Haute Marquee Ticker */}
      <div className="bg-[#1A1A1A] text-[#E29578] overflow-hidden py-2 border-b border-[#E29578]/30 select-none">
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
            ? "bg-white/95 backdrop-blur-2xl shadow-[0_10px_30px_-10px_rgba(226,149,120,0.2)] border-b border-[#E29578]/25 py-1.5"
            : "bg-[#FAF7F2]/95 backdrop-blur-xl border-b border-[#E8DFD3] py-2.5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex h-16 md:h-18 items-center justify-between">
            {/* Left: Mobile menu + Brand Identity */}
            <div className="flex items-center gap-3 md:gap-5">
              <MobileNav links={navLinks} />
              <Link href="/" className="flex items-center gap-3 group/brand">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#E29578] via-[#D4AF37] to-[#484860] opacity-75 blur-[2px] group-hover/brand:opacity-100 transition-opacity" />
                  <Image
                    src={
                      typeof settings?.store_logo === "string" && settings.store_logo
                        ? settings.store_logo
                        : "/ash-and-aspen/logo.jpg"
                    }
                    alt="Ash and Aspen"
                    width={48}
                    height={48}
                    className="relative h-11 w-11 md:h-12 md:w-12 object-cover rounded-full ring-2 ring-[#E29578]/70 shadow-sm transition-transform duration-500 group-hover/brand:scale-105"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-[17px] md:text-[20px] font-bold tracking-[0.04em] text-[#1A1A1A] font-heading leading-none">
                      ash and aspen
                    </p>
                  </div>
                  <p className="text-[8.5px] font-semibold tracking-[0.16em] text-[#E29578] uppercase mt-0.5 hidden sm:block">
                    UTTARA SHOWROOM & ONLINE
                  </p>
                </div>
              </Link>
            </div>

            {/* Center: Desktop Navigation with Couture Mega Menu */}
            <nav className="hidden lg:flex items-center gap-6 static" aria-label="Main navigation">
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
                    className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#1A1A1A]/85 hover:text-[#E29578] py-4 block transition-all relative group/nav"
                  >
                    {link.label}
                    <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#E29578] to-[#D4AF37] group-hover/nav:w-full transition-all duration-300 rounded-full" />
                  </Link>
                );
              })}
            </nav>

            {/* Right: Quick WhatsApp Concierge + Search + Cart + Account */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Trust Badge */}
              <div
                className="hidden 2xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#E29578]/30 text-[#1A1A1A] text-[10.5px] font-semibold"
              >
                <Sparkles className="h-3 w-3 text-[#D4AF37]" />
                <span>100% Authentic</span>
              </div>

              {/* WhatsApp Quick Order button */}
              <a
                href={BUSINESS.WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-[#E29578] border border-[#E29578]/40 transition-all duration-300 text-[11px] font-bold tracking-wide shadow-xs group/wa active:scale-[0.97]"
              >
                <MessageCircle className="h-3.5 w-3.5 text-[#25D366] group-hover/wa:text-[#E29578] transition-colors" />
                <span>WhatsApp: {BUSINESS.PHONE}</span>
              </a>

              <SearchBar />
              <CartButton />

              <Link
                href="/account"
                className="flex items-center justify-center size-10 rounded-full text-[#1A1A1A] hover:text-white hover:bg-[#E29578] transition-all duration-300 bg-white border border-[#E8DFD3] shadow-xs active:scale-[0.95]"
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
