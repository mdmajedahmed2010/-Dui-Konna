"use client";

/**
 * Enaya's | Sylhet — Haute Couture Header
 * Elevate Your Style | Luxury Women's Boutique & Authentic Pakistani Designer Fashion
 * Nayasarak Point, Sylhet, Bangladesh — https://www.facebook.com/Enayas.Sylhet/
 */

import Link from "next/link";
import Image from "next/image";
import { User, MessageCircle, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { MobileNav } from "./mobile-nav";
import { CartButton } from "./cart-button";
import { SearchBar } from "./search-bar";
import { MegaMenu } from "../storefront/mega-menu";
import { BUSINESS } from "@/lib/constants";

const navLinks = [
  { href: "/collections/pakistani-lawn", label: "Pakistani Lawn" },
  { href: "/collections/designer-luxury", label: "Designer Pre-Orders" },
  { href: "/collections/party-wear", label: "Party Wear" },
  { href: "/collections/farsi-sets", label: "Farsi & Co-ords" },
  { href: "/collections/velvet-luxury", label: "Velvet Luxury" },
  { href: "/about", label: "About Enaya's" },
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
      { label: "Mint Green Embroidered Lawn 3pc", href: "/collections/pakistani-lawn" },
      { label: "Pastel Powder Blue Floral Suit", href: "/collections/pakistani-lawn" },
      { label: "Pure Lawn with Chiffon Dupatta", href: "/collections/pakistani-lawn" },
    ],
    styles: [
      { label: "Ready to Wear Stitched (36-44)", href: "/collections/pakistani-lawn" },
      { label: "Summer Lightweight Breathable", href: "/collections/pakistani-lawn" },
      { label: "Eid Festive Lawn Specials", href: "/collections/pakistani-lawn" },
    ],
    featured: {
      title: "Festive Pure Lawn 3-Piece",
      subtitle: "Authentic Pakistani needlework & lightweight dupattas — From ৳3,850",
      image: "/enayas-assets/709865523_1278333164282920_1859523836051406463_n.jpg",
      href: "/collections/pakistani-lawn",
    },
  },
  "Designer Pre-Orders": {
    categories: [
      { label: "Shop All Designer Pre-Orders", href: "/collections/designer-luxury" },
      { label: "Sadabahar Original Luxury 3pc", href: "/collections/designer-luxury" },
      { label: "Russian Silk Champagne Set", href: "/collections/designer-luxury" },
      { label: "Bell Bottom Cutwork Suits", href: "/collections/designer-luxury" },
    ],
    styles: [
      { label: "100% Authentic Pakistani Pret", href: "/collections/designer-luxury" },
      { label: "Handmade Adda Work Craftsmanship", href: "/collections/designer-luxury" },
      { label: "20-30% Advance Pre-Order Booking", href: "/collections/designer-luxury" },
    ],
    featured: {
      title: "Sadabahar Luxury Pret",
      subtitle: "Pure silk dupattas & intricate embellishments — From ৳12,800",
      image: "/enayas-assets/715711023_1284853183630918_5862540271831156994_n.jpg",
      href: "/collections/designer-luxury",
    },
  },
  "Party Wear": {
    categories: [
      { label: "Shop All Party Wear", href: "/collections/party-wear" },
      { label: "Midnight Black Royal Zardozi Suit", href: "/collections/party-wear" },
      { label: "Crimson Magenta Embroidered Suit", href: "/collections/party-wear" },
      { label: "Sage Green Embroidered Organza 3pc", href: "/collections/party-wear" },
    ],
    styles: [
      { label: "Zardozi & Adda Work Necklines", href: "/collections/party-wear" },
      { label: "Luxury Organza & Silk Ensembles", href: "/collections/party-wear" },
      { label: "Wedding & Evening Elegance", href: "/collections/party-wear" },
    ],
    featured: {
      title: "Royal Zardozi Festive Wear",
      subtitle: "Hand-embellished evening couture — From ৳6,250",
      image: "/enayas-assets/719135606_1286458063470430_8962135561909446686_n.jpg",
      href: "/collections/party-wear",
    },
  },
  "Farsi & Co-ords": {
    categories: [
      { label: "Shop All Farsi Sets & Co-ords", href: "/collections/farsi-sets" },
      { label: "Ivory Cream Navy Embroidered Kurti", href: "/collections/farsi-sets" },
      { label: "Pure Cotton Flared Farsi Salwar 2pc", href: "/collections/farsi-sets" },
      { label: "Rose Pink Striped Daily Set", href: "/collections/farsi-sets" },
    ],
    styles: [
      { label: "Relaxed Free Size Cut (38-44)", href: "/collections/farsi-sets" },
      { label: "Pure Breathable Cotton", href: "/collections/farsi-sets" },
      { label: "Everyday Boutique Sophistication", href: "/collections/farsi-sets" },
    ],
    featured: {
      title: "Signature Farsi Salwar Sets",
      subtitle: "Flared silhouettes with handcrafted threadwork — From ৳2,250",
      image: "/enayas-assets/719352002_1286458136803756_4691248053674653785_n.jpg",
      href: "/collections/farsi-sets",
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
    "🌸 100% ORIGINAL PAKISTANI LUXURY SUITS",
    "✦ VISIT OUR OUTLET: 20 NAYASARAK POINT, SYLHET",
    "🌸 OPEN PARCEL POLICY — প্যাকেট খুলে দেখে পেমেন্ট করুন",
    "✦ 34,000+ FACEBOOK COMMUNITY • 5.0 ★ RATING",
    "🌸 WHATSAPP ORDERS: 01766-568408",
    "✦ ELEVATE YOUR STYLE — ENAYA'S | SYLHET",
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* 1. Endless Haute Marquee Ticker */}
      <div className="bg-[#2B052B] text-[#F3C649] overflow-hidden py-2 border-b border-[#D4AF37]/30 select-none">
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
            ? "bg-white/95 backdrop-blur-2xl shadow-[0_10px_30px_-10px_rgba(61,11,61,0.15)] border-b border-[#D4AF37]/25 py-1.5"
            : "bg-[#FAF7F5]/95 backdrop-blur-xl border-b border-[#EDE1D8] py-2.5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex h-16 md:h-18 items-center justify-between">
            {/* Left: Mobile menu + Brand Identity */}
            <div className="flex items-center gap-3 md:gap-5">
              <MobileNav links={navLinks} />
              <Link href="/" className="flex items-center gap-3 group/brand">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F48FB1] opacity-70 blur-[2px] group-hover/brand:opacity-100 transition-opacity" />
                  <Image
                    src={
                      typeof settings?.store_logo === "string" && settings.store_logo
                        ? settings.store_logo
                        : "/logo.jpg"
                    }
                    alt="Enaya's | Sylhet"
                    width={48}
                    height={48}
                    className="relative h-11 w-11 md:h-12 md:w-12 object-cover rounded-full ring-2 ring-[#D4AF37]/50 shadow-sm transition-transform duration-500 group-hover/brand:scale-105"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-[16px] md:text-[18px] font-bold tracking-[0.06em] text-[#3D0B3D] font-heading leading-none">
                      ENAYA'S
                    </p>
                    <span className="text-[11px] font-semibold tracking-[0.25em] text-[#D4AF37] uppercase font-sans">
                      SYLHET
                    </span>
                  </div>
                  <p className="text-[9px] font-medium tracking-[0.24em] text-[#3D0B3D]/75 uppercase mt-0.5 hidden sm:block">
                    Elevate Your Style
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
                    className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#2D082D]/85 hover:text-[#3D0B3D] py-4 block transition-all relative group/nav"
                  >
                    {link.label}
                    <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#3D0B3D] to-[#D4AF37] group-hover/nav:w-full transition-all duration-300 rounded-full" />
                  </Link>
                );
              })}
            </nav>

            {/* Right: Quick WhatsApp Concierge + Search + Cart + Account */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Outlet indicator badge */}
              <Link
                href="/contact"
                className="hidden 2xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F5] border border-[#D4AF37]/40 text-[#3D0B3D] text-[10.5px] font-semibold hover:bg-[#3D0B3D] hover:text-white transition-colors"
              >
                <MapPin className="h-3 w-3 text-[#D4AF37]" />
                <span>Nayasarak Outlet</span>
              </Link>

              {/* WhatsApp Quick Order button */}
              <a
                href={BUSINESS.WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F5] hover:bg-[#3D0B3D] text-[#3D0B3D] hover:text-white border border-[#D4AF37]/50 transition-all duration-300 text-[11px] font-bold tracking-wide shadow-xs group/wa active:scale-[0.97]"
              >
                <MessageCircle className="h-3.5 w-3.5 text-[#25D366] group-hover/wa:text-[#F3C649] transition-colors" />
                <span>WhatsApp Order</span>
              </a>

              <SearchBar />
              <CartButton />

              <Link
                href="/account"
                className="flex items-center justify-center size-10 rounded-full text-[#3D0B3D] hover:text-white hover:bg-[#3D0B3D] transition-all duration-300 bg-white border border-[#EDE1D8] shadow-xs active:scale-[0.95]"
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
