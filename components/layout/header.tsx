"use client";

/**
 * Tazeen's (tazeensbd) — Haute Couture Header
 * Smart & Elegant Heritage Sarees & Designer Boutique Wear
 * Pink City Shopping Complex, Gulshan-2 & Sector 11, Uttara, Dhaka, Bangladesh
 * Official Facebook: https://www.facebook.com/tazeensbd/
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
  { href: "/collections/sequin-tissue-sarees", label: "Sequin Sarees" },
  { href: "/collections/heritage-katan-silk", label: "Heritage Katan" },
  { href: "/collections/boutique-three-piece", label: "Boutique 3-Piece" },
  { href: "/collections/muslin-tussar-sarees", label: "Muslin & Tussar" },
  { href: "/collections/handloom-cotton-sarees", label: "Handloom Cotton" },
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
  "Sequin Sarees": {
    categories: [
      { label: "Shop All Sequin Sarees", href: "/collections/sequin-tissue-sarees" },
      { label: "Champagne Beige Gold", href: "/products/tazeens-signature-sequin-border-saree-champagne-beige-gold" },
      { label: "Royal Plum Purple", href: "/products/tazeens-signature-sequin-border-saree-royal-plum-purple" },
      { label: "Rose Fuchsia Blossom", href: "/products/tazeens-signature-sequin-border-saree-rose-fuchsia-blossom" },
      { label: "Rich Violet Aubergine", href: "/products/tazeens-signature-sequin-border-saree-rich-violet-aubergine" },
    ],
    styles: [
      { label: "Handcrafted Sequin Borders", href: "/collections/sequin-tissue-sarees" },
      { label: "Artisanal Fringe Tassels", href: "/collections/sequin-tissue-sarees" },
      { label: "Lightweight Linen-Tissue Blend", href: "/collections/sequin-tissue-sarees" },
    ],
    featured: {
      title: "Signature Sequin Border Saree",
      subtitle: "Champagne Beige with shimmering metallic border & tassels — ৳3,850",
      image: ASSETS.sareeChampagne,
      href: "/collections/sequin-tissue-sarees",
    },
  },
  "Heritage Katan": {
    categories: [
      { label: "Shop All Heritage Katan & Silk", href: "/collections/heritage-katan-silk" },
      { label: "Maroon Zari Striped Saree", href: "/products/tazeens-heritage-zari-striped-silk-saree-royal-crimson-maroon" },
      { label: "Royal Crimson Bridal Katan", href: "/products/tazeens-royal-crimson-bridal-katan-saree-antique-gold-brocade" },
      { label: "Emerald Embroidered Silk", href: "/products/tazeens-emerald-green-embroidered-silk-festive-saree" },
    ],
    styles: [
      { label: "Antique Gold Zari Brocade", href: "/collections/heritage-katan-silk" },
      { label: "Temple Korvai Border Heritage", href: "/collections/heritage-katan-silk" },
      { label: "Bridal & Wedding Dawat Edit", href: "/collections/heritage-katan-silk" },
    ],
    featured: {
      title: "Maroon Zari Striped Silk Saree",
      subtitle: "Royal crimson with golden temple border in signature gift box — ৳5,850",
      image: ASSETS.sareeKatanMaroon,
      href: "/collections/heritage-katan-silk",
    },
  },
  "Boutique 3-Piece": {
    categories: [
      { label: "Shop All Boutique 3-Piece", href: "/collections/boutique-three-piece" },
      { label: "Classic Indigo Ajrakh Set", href: "/products/tazeens-classic-indigo-ajrakh-block-print-3piece-set" },
      { label: "Earthy Mirror & Kantha Yoke", href: "/products/tazeens-earthy-ethnic-mirrorwork-kantha-yoke-3piece-set" },
      { label: "Pastel Lavender Botanical Lawn", href: "/products/tazeens-pastel-lavender-botanical-watercolor-lawn-3piece-set" },
    ],
    styles: [
      { label: "Ajrakh Geometric Block Prints", href: "/collections/boutique-three-piece" },
      { label: "Hand-Stitched Mirror Work Yokes", href: "/collections/boutique-three-piece" },
      { label: "100% Breathable Pure Cotton Lawns", href: "/collections/boutique-three-piece" },
    ],
    featured: {
      title: "Classic Indigo Ajrakh 3-Piece",
      subtitle: "Embroidered neck placket & block print dupatta — ৳2,450",
      image: ASSETS.threePieceAjrakh,
      href: "/collections/boutique-three-piece",
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
    "✨ TAZEEN'S • SMART & ELEGANT HERITAGE SAREES & BOUTIQUE PRET",
    "✦ EXCLUSIVE SEQUIN BORDER SAREES & BRIDAL KATAN SILK",
    "✨ OPEN PARCEL POLICY — রাইডারের সামনে দেখে বুঝে নিন আপনার শাড়ি ও পোশাক",
    "✦ SHOWROOMS: PINK CITY (GULSHAN-2) & SECTOR 11 (UTTARA), DHAKA",
    "✨ DHAKA DELIVERY ৳80 • OUTSIDE DHAKA ৳150 • CASH ON DELIVERY",
    "✦ CALL & WHATSAPP: 01790-030434 / 01773-770042",
    "✨ 50,000+ FACEBOOK SISTERS & 98% POSITIVE RECOMMENDATION",
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* 1. Endless Haute Marquee Ticker */}
      <div className="bg-[#720026] text-[#D4AF37] overflow-hidden py-2 border-b border-[#D4AF37]/30 select-none">
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
            ? "bg-white/95 backdrop-blur-2xl shadow-[0_10px_30px_-10px_rgba(114,0,38,0.15)] border-b border-[#D4AF37]/25 py-1.5"
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
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#720026] via-[#D4AF37] to-[#C2185B] opacity-75 blur-[2px] group-hover/brand:opacity-100 transition-opacity" />
                  <Image
                    src={
                      typeof settings?.store_logo === "string" && settings.store_logo
                        ? settings.store_logo
                        : "/tazeens-assets/logo.jpg"
                    }
                    alt="Tazeen's"
                    width={48}
                    height={48}
                    className="relative h-11 w-11 md:h-12 md:w-12 object-contain bg-white rounded-full ring-2 ring-[#D4AF37]/70 shadow-sm transition-transform duration-500 group-hover/brand:scale-105 p-0.5"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-[19px] md:text-[22px] font-bold tracking-[0.02em] text-[#720026] font-heading leading-none">
                      Tazeen&apos;s
                    </p>
                  </div>
                  <p className="text-[8.5px] font-semibold tracking-[0.16em] text-[#D4AF37] uppercase mt-0.5 hidden sm:block">
                    GULSHAN &amp; UTTARA SHOWROOMS
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
                    className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#1A1A1A]/85 hover:text-[#720026] py-4 block transition-all relative group/nav"
                  >
                    {link.label}
                    <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#720026] to-[#D4AF37] group-hover/nav:w-full transition-all duration-300 rounded-full" />
                  </Link>
                );
              })}
            </nav>

            {/* Right: Quick WhatsApp Concierge + Search + Cart + Account */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Trust Badge */}
              <div className="hidden 2xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/30 text-[#720026] text-[10.5px] font-semibold">
                <Sparkles className="h-3 w-3 text-[#D4AF37]" />
                <span>100% Authentic Handloom</span>
              </div>

              {/* WhatsApp Quick Order button */}
              <a
                href={BUSINESS.WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] hover:bg-[#720026] text-[#720026] hover:text-[#D4AF37] border border-[#D4AF37]/40 transition-all duration-300 text-[11px] font-bold tracking-wide shadow-xs group/wa active:scale-[0.97]"
              >
                <MessageCircle className="h-3.5 w-3.5 text-[#25D366] group-hover/wa:text-[#D4AF37] transition-colors" />
                <span>WhatsApp: {BUSINESS.PHONE}</span>
              </a>

              <SearchBar />
              <CartButton />

              <Link
                href="/account"
                className="flex items-center justify-center size-10 rounded-full text-[#1A1A1A] hover:text-white hover:bg-[#720026] transition-all duration-300 bg-white border border-[#E8DFD3] shadow-xs active:scale-[0.95]"
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
