"use client";

/**
 * 365 Fashion House — Haute Couture Header
 * Pioneer in Authentic Pakistani Attires in Bangladesh
 * 100% ORIGINAL PAKISTANI & INDIAN DESIGNER WEAR • LUXURY LAWN, ORGANZA & PRET
 * Dhaka - 1206, Bangladesh — https://www.facebook.com/365FashionHouse/
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
  { href: "/collections/organza-chiffon", label: "Organza & Chiffon" },
  { href: "/collections/designer-pret", label: "Designer Pret" },
  { href: "/collections/festive-party", label: "Festive & Party" },
  { href: "/collections/silk-velvet", label: "Silk & Velvet" },
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
      { label: "Mahee's Luxury Lawn Lilac", href: "/products/mahees-luxury-lawn-3piece-unstitched-suit-lilac-blossom" },
      { label: "Khaadi Signature Mint Oasis", href: "/products/khaadi-signature-luxury-lawn-3piece-mint-ivory-oasis" },
      { label: "Maria.B Embroidered Lawn", href: "/collections/pakistani-lawn" },
    ],
    styles: [
      { label: "100% Original Pakistani Lawn", href: "/collections/pakistani-lawn" },
      { label: "Pure Chiffon & Organza Dupattas", href: "/collections/pakistani-lawn" },
      { label: "Open Parcel Inspection Guaranteed", href: "/collections/pakistani-lawn" },
    ],
    featured: {
      title: "Mahee's Luxury Lawn 3-Piece",
      subtitle: "Intricate neckline embroidery & organza dupatta — ৳3,850",
      image: ASSETS.img1,
      href: "/collections/pakistani-lawn",
    },
  },
  "Organza & Chiffon": {
    categories: [
      { label: "Shop All Organza & Chiffon", href: "/collections/organza-chiffon" },
      { label: "Beechtree Rose Quartz 3-Piece", href: "/products/beechtree-pastel-organza-luxury-3piece-rose-quartz" },
      { label: "Pastel Threadwork Ensembles", href: "/collections/organza-chiffon" },
      { label: "Semi-Formal Luxury Pret", href: "/collections/organza-chiffon" },
    ],
    styles: [
      { label: "Exclusive Festive Organza", href: "/collections/organza-chiffon" },
      { label: "Handcrafted Resham & Tilla Work", href: "/collections/organza-chiffon" },
      { label: "Pioneer in Authentic Pakistani Attires", href: "/collections/organza-chiffon" },
    ],
    featured: {
      title: "Beechtree Luxury Organza",
      subtitle: "Soft rose quartz with ivory threadwork — ৳4,650",
      image: ASSETS.img5,
      href: "/collections/organza-chiffon",
    },
  },
  "Designer Pret": {
    categories: [
      { label: "Shop All Designer Pret", href: "/collections/designer-pret" },
      { label: "Agha Noor Pistachio Kurti", href: "/products/agha-noor-festive-organza-kurti-pistachio-floral-glow" },
      { label: "Asim Jofa Festive Pret Kurti", href: "/collections/designer-pret" },
      { label: "Ready-to-Wear Bell Sleeve Kurtis", href: "/collections/designer-pret" },
    ],
    styles: [
      { label: "Original Agha Noor Pret", href: "/collections/designer-pret" },
      { label: "Pearl & Mirror Embellishments", href: "/collections/designer-pret" },
      { label: "Ready to Wear with No Stitching Delay", href: "/collections/designer-pret" },
    ],
    featured: {
      title: "Agha Noor Festive Kurti",
      subtitle: "Multicolor resham floral embroidery & pearls — ৳3,650",
      image: ASSETS.img3,
      href: "/collections/designer-pret",
    },
  },
  "Festive & Party": {
    categories: [
      { label: "Shop All Festive & Party Wear", href: "/collections/festive-party" },
      { label: "Chevron Crimson Velvet Suit", href: "/products/chevron-royal-festive-chiffon-velvet-3piece-crimson-empress" },
      { label: "Emerald Flared Anarkali Suit", href: "/products/festive-designer-flared-anarkali-suit-emerald-majesty" },
      { label: "Wedding & Dawat Couture", href: "/collections/festive-party" },
    ],
    styles: [
      { label: "Heavy Zari, Zardozi & Sequins", href: "/collections/festive-party" },
      { label: "Eid & Festive Celebratory Edit", href: "/collections/festive-party" },
      { label: "Deep Jewel Tones & Gold Brocade", href: "/collections/festive-party" },
    ],
    featured: {
      title: "Chevron Royal Festive Suit",
      subtitle: "Crimson chiffon & velvet with heavy tilla — ৳5,450",
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
    "✨ 365 FASHION HOUSE • PIONEER IN AUTHENTIC PAKISTANI ATTIRES",
    "✦ 100% ORIGINAL DESIGNER LAWN, ORGANZA & LUXURY PRET",
    "✨ OPEN PARCEL POLICY — রাইডারের সামনে দেখে বুঝে নিন আপনার পোশাক",
    "✦ DHAKA DELIVERY ৳80 • NATIONWIDE ৳150 • CASH ON DELIVERY",
    "✨ WHATSAPP & HOTLINE: 01714-404008 • DHAKA - 1206",
    "✦ 58,000+ FACEBOOK SISTERS & 100% RECOMMENDATION RATE",
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* 1. Endless Haute Marquee Ticker */}
      <div className="bg-[#191426] text-[#F39C12] overflow-hidden py-2 border-b border-[#D4AC0D]/30 select-none">
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
            ? "bg-white/95 backdrop-blur-2xl shadow-[0_10px_30px_-10px_rgba(108,52,131,0.15)] border-b border-[#6C3483]/20 py-1.5"
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
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#6C3483] via-[#D4AC0D] to-[#F39C12] opacity-75 blur-[2px] group-hover/brand:opacity-100 transition-opacity" />
                  <Image
                    src={
                      typeof settings?.store_logo === "string" && settings.store_logo
                        ? settings.store_logo
                        : "/365-assets/logo.jpg"
                    }
                    alt="365 Fashion House"
                    width={48}
                    height={48}
                    className="relative h-11 w-11 md:h-12 md:w-12 object-cover rounded-full ring-2 ring-[#6C3483]/60 shadow-sm transition-transform duration-500 group-hover/brand:scale-105"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-[17px] md:text-[20px] font-bold tracking-[0.06em] text-[#191426] font-heading leading-none">
                      365
                    </p>
                    <span className="text-[12px] font-extrabold tracking-[0.18em] text-[#6C3483] uppercase font-sans">
                      FASHION HOUSE
                    </span>
                  </div>
                  <p className="text-[8.5px] font-semibold tracking-[0.16em] text-[#D4AC0D] uppercase mt-0.5 hidden sm:block">
                    AUTHENTIC PAKISTANI ATTIRES
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
                    className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#191426]/85 hover:text-[#6C3483] py-4 block transition-all relative group/nav"
                  >
                    {link.label}
                    <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#6C3483] to-[#D4AC0D] group-hover/nav:w-full transition-all duration-300 rounded-full" />
                  </Link>
                );
              })}
            </nav>

            {/* Right: Quick WhatsApp Concierge + Search + Cart + Account */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Trust Badge */}
              <div
                className="hidden 2xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#6C3483]/30 text-[#191426] text-[10.5px] font-semibold"
              >
                <Sparkles className="h-3 w-3 text-[#D4AC0D]" />
                <span>100% Authentic</span>
              </div>

              {/* WhatsApp Quick Order button */}
              <a
                href={BUSINESS.WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] hover:bg-[#191426] text-[#191426] hover:text-[#F39C12] border border-[#6C3483]/40 transition-all duration-300 text-[11px] font-bold tracking-wide shadow-xs group/wa active:scale-[0.97]"
              >
                <MessageCircle className="h-3.5 w-3.5 text-[#25D366] group-hover/wa:text-[#F39C12] transition-colors" />
                <span>WhatsApp: {BUSINESS.PHONE}</span>
              </a>

              <SearchBar />
              <CartButton />

              <Link
                href="/account"
                className="flex items-center justify-center size-10 rounded-full text-[#191426] hover:text-white hover:bg-[#6C3483] transition-all duration-300 bg-white border border-[#E8DFD3] shadow-xs active:scale-[0.95]"
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
