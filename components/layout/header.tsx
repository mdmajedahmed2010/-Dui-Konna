"use client";

/**
 * Dui Konna (দুই কন্যা) — Haute Couture Header
 * Exclusive Muslin Sarees, Authentic Dhakai Jamdani & Luxury Ethnic Couture
 * Showroom: House #21/B, Road #01, Nikunja-2, Khilkhet, Dhaka-1229
 * Facebook: https://www.facebook.com/duikonna01 • 484,000+ Followers
 * Open Parcel Inspection Nationwide
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
  { href: "/collections/exclusive-muslin", label: "Exclusive Muslin" },
  { href: "/collections/dhakai-jamdani", label: "Dhakai Jamdani" },
  { href: "/collections/bridal-festive", label: "Bridal Red Muslin" },
  { href: "/collections/luxury-karchupi", label: "Luxury Karchupi" },
  { href: "/collections/pastel-heritage", label: "Pastel Heritage" },
  { href: "/collections/muslin-four-piece", label: "4-Piece Sets" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Showroom & Contact" },
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
  "Exclusive Muslin": {
    categories: [
      { label: "Shop All Exclusive Muslin Sarees", href: "/collections/exclusive-muslin" },
      { label: "Royal Mustard Gold Dhakai Muslin Saree (৳২৯,০০০)", href: "/products/dui-konna-royal-mustard-gold-handwoven-dhakai-muslin-saree" },
      { label: "Terracotta Rust Orange Butterfly Zari Muslin", href: "/products/dui-konna-terracotta-rust-orange-butterfly-zari-muslin-saree" },
      { label: "Mauve Plum Chevron Zigzag Zari Muslin", href: "/products/dui-konna-mauve-plum-chevron-zigzag-zari-muslin-saree" },
      { label: "Dual-Tone Sage Green & Magenta Contrast Muslin", href: "/products/dui-konna-dual-tone-sage-green-magenta-contrast-muslin-saree" },
    ],
    styles: [
      { label: "১০০% হাতে বোনা খাঁটি ঢাকাই মসলিন জমিন", href: "/collections/exclusive-muslin" },
      { label: "সিগনেচার বাটারফ্লাই বুটি ও জিগজ্যাগ শেভরন পাড়", href: "/collections/exclusive-muslin" },
      { label: "ম্যাচিং রানিং ব্লাউজ পিস ও ট্যাসেলযুক্ত আঁচল", href: "/collections/exclusive-muslin" },
    ],
    featured: {
      title: "Royal Mustard Gold Dhakai Muslin Saree",
      subtitle: "খাঁটি গোল্ডেন জরি বুটি ও রাজকীয় আঁচল — ৳২৯,০০০",
      image: ASSETS.product3,
      href: "/collections/exclusive-muslin",
    },
  },
  "Dhakai Jamdani": {
    categories: [
      { label: "Shop All Dhakai Jamdani Sarees", href: "/collections/dhakai-jamdani" },
      { label: "Pearl White Multicolor Geometric Jamdani Saree", href: "/products/dui-konna-pearl-white-multicolor-geometric-dhakai-jamdani-muslin-saree" },
      { label: "Traditional Handloom Heritage Weaves", href: "/collections/dhakai-jamdani" },
      { label: "Festive Dhakai Jamdani Specials", href: "/collections/dhakai-jamdani" },
    ],
    styles: [
      { label: "বহু রঙের জ্যামিতিক নকশা ও ঐতিহ্যবাহী পাড়", href: "/collections/dhakai-jamdani" },
      { label: "মসলিন বেসে সূক্ষ্ম সুতার রাজকীয় কারুকাজ", href: "/collections/dhakai-jamdani" },
      { label: "বিয়ে, উৎসব ও পারিবারিক সংবর্ধনার অনন্য পোশাক", href: "/collections/dhakai-jamdani" },
    ],
    featured: {
      title: "Pearl White Multicolor Dhakai Jamdani",
      subtitle: "পার্ল হোয়াইট বেসে রঙিন জ্যামিতিক নকশা — ৳২৭,৫০০",
      image: ASSETS.product5,
      href: "/collections/dhakai-jamdani",
    },
  },
  "Luxury Karchupi": {
    categories: [
      { label: "Shop All Luxury Karchupi Sarees", href: "/collections/luxury-karchupi" },
      { label: "Dusty Lilac Lavender Luxury Karchupi Saree", href: "/products/dui-konna-dusty-lilac-lavender-luxury-karchupi-organza-saree" },
      { label: "Dusty Mauve Full Drape Floral Karchupi Saree", href: "/products/dui-konna-dusty-mauve-full-drape-floral-karchupi-heritage-saree" },
      { label: "Handcrafted Zardozi & Sequin Bridal Couture", href: "/collections/luxury-karchupi" },
    ],
    styles: [
      { label: "হাতে খোদাইকৃত মুক্তা, সিকোয়েন্স ও জারদৌসি কাজ", href: "/collections/luxury-karchupi" },
      { label: "লাইটওয়েট প্রিমিয়াম অর্গাঞ্জা ও সফট মসলিন ড্র্যাপ", href: "/collections/luxury-karchupi" },
      { label: "শামীমা নাসরিন সিগনেচার ডিজাইনার আর্ট", href: "/collections/luxury-karchupi" },
    ],
    featured: {
      title: "Dusty Lilac Lavender Luxury Karchupi",
      subtitle: "জরি, জারদৌসি ও মুক্তার সূক্ষ্ম কারুকাজ — ৳২৮,০০০",
      image: ASSETS.product8,
      href: "/collections/luxury-karchupi",
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
    "🦋 DUI KONNA (দুই কন্যা) • এক্সক্লুসিভ ঢাকাই মসলিন শাড়ি ও এথনিক লাক্সারি ওয়্যার",
    "✦ ৪৮৪,০০০+ আপুদের ভালোবাসায় নিকুঞ্জ-২ এর বিশ্বস্ত ব্র্যান্ড",
    "🦋 ওপেন পার্সেল গ্যারান্টি — পার্সেল খুলে শাড়ি দেখে চেক করে পেমেন্ট করার নিশ্চিন্ত সুবিধা",
    "✦ ঢাকা ডেলিভারি চার্জ ৮০ টাকা • ঢাকার বাইরে ১৫০ টাকা • ২ বা ততোধিক শাড়িতে সারাদেশে ফ্রি ডেলিভারি",
    "🦋 সরাসরি শোরুম ভিজিট করুন: হাউস #২১/বি, রোড #০১, নিকুঞ্জ-২, খিলক্ষেত, ঢাকা (প্রতিদিন ১১টা - ৯টা)",
    "✦ হটলাইন ও হোয়াটসঅ্যাপ: 01339-364462 / 01741-954490",
    "🦋 খাঁটি ঢাকাই মসলিন ও ঐতিহ্যবাহী জামদানির সবচেয়ে অনন্য কালেকশন",
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* 1. Endless Haute Marquee Ticker */}
      <div className="bg-[#8B0000] text-[#D4AF37] overflow-hidden py-2 border-b border-[#D4AF37]/30 select-none">
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
            ? "bg-white/95 backdrop-blur-2xl shadow-[0_10px_30px_-10px_rgba(139,0,0,0.18)] border-b border-[#D4AF37]/30 py-1.5"
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
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#8B0000] via-[#D4AF37] to-[#C8A2C8] opacity-75 blur-[2px] group-hover/brand:opacity-100 transition-opacity" />
                  <Image
                    src={
                      typeof settings?.store_logo === "string" && settings.store_logo
                        ? settings.store_logo
                        : "/duikonna-assets/logo.png"
                    }
                    alt="Dui Konna (দুই কন্যা)"
                    width={52}
                    height={52}
                    className="relative h-11 w-11 md:h-13 md:w-13 object-cover bg-black rounded-full ring-2 ring-[#D4AF37] shadow-sm transition-transform duration-500 group-hover/brand:scale-105"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#D4AF37] text-base">🦋</span>
                    <p className="text-[19px] md:text-[22px] font-bold tracking-[0.02em] text-[#8B0000] font-heading leading-none">
                      Dui Konna
                    </p>
                  </div>
                  <p className="text-[9.5px] font-semibold tracking-[0.2em] text-[#D4AF37] uppercase mt-0.5">
                    দুই কন্যা • MUSLIN HERITAGE
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
                    className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#181513]/85 hover:text-[#8B0000] py-4 block transition-all relative group/nav"
                  >
                    {link.label}
                    <span className="absolute bottom-2 left-0 w-0 h-0.5 bg-[#8B0000] transition-all duration-300 group-hover/nav:w-full" />
                  </Link>
                );
              })}
            </nav>

            {/* Right: Actions (Search, Account, Cart, Facebook) */}
            <div className="flex items-center gap-2 sm:gap-4">
              <SearchBar />

              {/* Facebook Page Direct Link */}
              <a
                href={BUSINESS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#8B0000]/10 hover:bg-[#8B0000] text-[#8B0000] hover:text-[#D4AF37] border border-[#8B0000]/30 transition-all text-[11px] font-bold tracking-wider"
                title="Dui Konna Facebook Page (484K+ Followers)"
              >
                <span>FB: 484K+</span>
              </a>

              {/* User Account / Login */}
              <Link
                href="/account"
                aria-label="User Account"
                className="flex items-center justify-center size-10 rounded-full text-foreground/80 hover:text-[#8B0000] hover:bg-[#FAF7F2] transition-colors"
              >
                <User className="h-5 w-5" strokeWidth={1.75} />
              </Link>

              {/* Shopping Bag Button */}
              <CartButton />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
