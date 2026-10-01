"use client";

/**
 * Shopping Queen by Orni — Haute Couture Header
 * Authentic Pakistani Suits, Exclusive Festive Partywear & Natural Glow Skincare
 * Dhaka, Bangladesh • Facebook: https://www.facebook.com/Shoppingqueenbyorni
 * 190,500+ Followers • Open Parcel Inspection Nationwide
 */

import Link from "next/link";
import Image from "next/image";
import { User, MessageCircle, Sparkles, Crown } from "lucide-react";
import { useState, useEffect } from "react";
import { MobileNav } from "./mobile-nav";
import { CartButton } from "./cart-button";
import { SearchBar } from "./search-bar";
import { MegaMenu } from "../storefront/mega-menu";
import { BUSINESS } from "@/lib/constants";
import { ASSETS } from "@/lib/demo-data";

const navLinks = [
  { href: "/collections/pakistani-lawn", label: "Pakistani Lawn" },
  { href: "/collections/festive-party", label: "Festive Partywear" },
  { href: "/collections/premium-cotton", label: "Pure Cotton" },
  { href: "/collections/chunri-traditional", label: "Chunri Edit" },
  { href: "/collections/orni-signature", label: "Orni Signature" },
  { href: "/collections/skincare-glow", label: "Skincare Glow" },
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
      { label: "Royal Blue Embroidered Lawn 3-Piece", href: "/products/shopping-queen-royal-blue-embroidered-pakistani-lawn-3-piece" },
      { label: "Turquoise Aqua Floral Digital Lawn", href: "/products/shopping-queen-turquoise-aqua-digital-floral-lawn-3-piece" },
      { label: "Lime Green & Cyan Ombre Lawn", href: "/products/shopping-queen-lime-green-cyan-ombre-floral-designer-lawn-3-piece" },
      { label: "Traditional Bandhani Chunri 3-Piece", href: "/products/shopping-queen-traditional-chunri-bandhani-orange-red-printed-3-piece" },
    ],
    styles: [
      { label: "Digital Floral Prints & Voile Dupatta", href: "/collections/pakistani-lawn" },
      { label: "Intricate Neckline Zari Embroidery", href: "/collections/pakistani-lawn" },
      { label: "100% Breathable Swiss Cotton Fabric", href: "/collections/pakistani-lawn" },
    ],
    featured: {
      title: "Royal Blue Embroidered Pakistani Lawn",
      subtitle: "Classic ethnic print with pure lawn dupatta — ৳1,650",
      image: ASSETS.product1,
      href: "/collections/pakistani-lawn",
    },
  },
  "Festive Partywear": {
    categories: [
      { label: "Shop All Festive Partywear", href: "/collections/festive-party" },
      { label: "Royal Maroon & Zari Heavily Embroidered Suit", href: "/products/shopping-queen-royal-maroon-zari-heavily-embroidered-partywear-suit" },
      { label: "Luxury Blush Pink Heavy Embroidered Festive Suit", href: "/products/shopping-queen-luxury-blush-pink-heavily-embroidered-festive-suit" },
      { label: "Regal Black & Antique Zari Festive Gown", href: "/products/shopping-queen-regal-black-antique-zari-heavy-embroidered-festive-gown" },
    ],
    styles: [
      { label: "Heavy Antique Zari & Cutwork Borders", href: "/collections/festive-party" },
      { label: "Organza, Chiffon & Velvet Accents", href: "/collections/festive-party" },
      { label: "Wedding, Dawat & Grand Reception Ready", href: "/collections/festive-party" },
    ],
    featured: {
      title: "Royal Maroon & Zari Heavy Embroidered Suit",
      subtitle: "Opulent partywear with rich floral threadwork — ৳2,650",
      image: ASSETS.product5,
      href: "/collections/festive-party",
    },
  },
  "Pure Cotton": {
    categories: [
      { label: "Shop All Pure Cotton & Handloom", href: "/collections/premium-cotton" },
      { label: "Cornflower Blue Embroidered Cotton", href: "/products/shopping-queen-cornflower-blue-handloom-embroidered-cotton-3-piece" },
      { label: "Cream Beige Floral Embroidered Cotton", href: "/products/shopping-queen-cream-beige-floral-embroidered-pure-cotton-3-piece" },
      { label: "Mint Sea Green Handloom Cotton", href: "/products/shopping-queen-mint-sea-green-embroidered-handloom-cotton-3-piece" },
    ],
    styles: [
      { label: "Handloom Cotton Weaves", href: "/collections/premium-cotton" },
      { label: "Delicate Neckline Embroidery", href: "/collections/premium-cotton" },
      { label: "Soft Everyday Comfort Wear", href: "/collections/premium-cotton" },
    ],
    featured: {
      title: "Cornflower Blue Handloom Cotton 3-Piece",
      subtitle: "Soft breathable texture with delicate thread work — ৳1,450",
      image: ASSETS.product3,
      href: "/collections/premium-cotton",
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
    "👑 SHOPPING QUEEN BY ORNI • এক্সক্লুসিভ পাকিস্তানি লন, পার্টিওয়্যার ও স্কিনকেয়ার",
    "✦ ১৯০,০০০+ আপুদের ভালোবাসায় নির্ভরযোগ্য ফ্যাশন প্রতিষ্ঠান",
    "👑 ওপেন পার্সেল গ্যারান্টি — পার্সেল খুলে দেখে চেক করে পেমেন্ট করার নিশ্চিন্ত সুবিধা",
    "✦ ঢাকা ডেলিভারি চার্জ ৮০ টাকা • ঢাকার বাইরে ১৫০ টাকা • ২ বা ততোধিক ড্রেসে সারাদেশে ফ্রি ডেলিভারি",
    "👑 KIM WHITENING PEARL & SNOWLUS CREAM — রাতের যত্নে প্রাকৃতিক উজ্জ্বলতা ✨",
    "✦ হটলাইন ও হোয়াটসঅ্যাপ: 01611-467735 / 01935-711304",
    "👑 অরিজিনাল কোয়ালিটি ও সুলভ মূল্যে শতভাগ নিশ্চয়তা",
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* 1. Endless Haute Marquee Ticker */}
      <div className="bg-[#6B1D2F] text-[#D4AF37] overflow-hidden py-2 border-b border-[#D4AF37]/30 select-none">
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
            ? "bg-white/95 backdrop-blur-2xl shadow-[0_10px_30px_-10px_rgba(107,29,47,0.18)] border-b border-[#D4AF37]/30 py-1.5"
            : "bg-[#FAF6F0]/95 backdrop-blur-xl border-b border-[#E8DFD3] py-2.5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex h-16 md:h-18 items-center justify-between">
            {/* Left: Mobile menu + Brand Identity */}
            <div className="flex items-center gap-3 md:gap-5">
              <MobileNav links={navLinks} />
              <Link href="/" className="flex items-center gap-3 group/brand">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#6B1D2F] via-[#D4AF37] to-[#E85D75] opacity-75 blur-[2px] group-hover/brand:opacity-100 transition-opacity" />
                  <Image
                    src={
                      typeof settings?.store_logo === "string" && settings.store_logo
                        ? settings.store_logo
                        : "/shoppingqueen-assets/logo.avif"
                    }
                    alt="Shopping Queen by Orni"
                    width={52}
                    height={52}
                    className="relative h-11 w-11 md:h-13 md:w-13 object-cover bg-white rounded-full ring-2 ring-[#D4AF37] shadow-sm transition-transform duration-500 group-hover/brand:scale-105"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <Crown className="h-4 w-4 text-[#D4AF37]" />
                    <p className="text-[18px] md:text-[21px] font-bold tracking-[0.01em] text-[#6B1D2F] font-heading leading-none">
                      Shopping Queen
                    </p>
                  </div>
                  <p className="text-[9px] font-semibold tracking-[0.18em] text-[#D4AF37] uppercase mt-0.5">
                    BY ORNI • 190K+ SISTERS
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
                    className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#1A1A1A]/85 hover:text-[#6B1D2F] py-4 block transition-all relative group/nav"
                  >
                    {link.label}
                    <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#6B1D2F] to-[#D4AF37] group-hover/nav:w-full transition-all duration-300 rounded-full" />
                  </Link>
                );
              })}
            </nav>

            {/* Right: Quick WhatsApp Concierge + Search + Cart + Account */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Trust Badge */}
              <div className="hidden 2xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6F0] border border-[#D4AF37]/35 text-[#6B1D2F] text-[10.5px] font-semibold">
                <Sparkles className="h-3 w-3 text-[#D4AF37]" />
                <span>পার্সেল খুলে দেখে চেক করার সুবিধা</span>
              </div>

              {/* WhatsApp Quick Order button */}
              <a
                href={BUSINESS.WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6F0] hover:bg-[#6B1D2F] text-[#6B1D2F] hover:text-[#D4AF37] border border-[#D4AF37]/40 transition-all duration-300 text-[11px] font-bold tracking-wide shadow-xs group/wa active:scale-[0.97]"
              >
                <MessageCircle className="h-3.5 w-3.5 text-[#25D366] group-hover/wa:text-[#D4AF37] transition-colors" />
                <span>Hotline: {BUSINESS.PHONE}</span>
              </a>

              <SearchBar />
              <CartButton />

              <Link
                href="/account"
                className="flex items-center justify-center size-10 rounded-full text-[#1A1A1A] hover:text-white hover:bg-[#6B1D2F] transition-all duration-300 bg-white border border-[#E8DFD3] shadow-xs active:scale-[0.95]"
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
