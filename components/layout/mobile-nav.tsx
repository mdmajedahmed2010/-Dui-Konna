"use client";

/**
 * Tazeen's (tazeensbd) — Mobile Navigation Overlay
 * Smart & Elegant Heritage Sarees & Designer Boutique Wear
 * Pink City Shopping Complex, Gulshan-2 & Sector 11, Uttara, Dhaka, Bangladesh
 * Official Facebook: https://www.facebook.com/tazeensbd/
 */

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag, User, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { useCartStore } from "@/store/cart-store";
import { BUSINESS } from "@/lib/constants";

interface MobileNavProps {
  links: { href: string; label: string }[];
}

export function MobileNav({ links }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  // Read cart items count dynamically from Zustand store
  const cartCount = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  // Prevent background body scroll when the overlay is active
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleAccordion = (label: string) => {
    setActiveAccordion(activeAccordion === label ? null : label);
  };

  // Subcategories matching Tazeen's collections
  const categoriesWithSubs: Record<string, string[]> = {
    "Sequin Sarees": [
      "Shop All Sequin Sarees",
      "Champagne Beige Gold",
      "Royal Plum Purple",
      "Rose Fuchsia Blossom",
      "Rich Violet Aubergine",
      "Charcoal Slate Metallic",
      "Bright Canary Mustard",
    ],
    "Heritage Katan": [
      "Shop All Heritage Katan",
      "Royal Crimson Maroon Zari",
      "Bridal Antique Gold Brocade",
      "Emerald Embroidered Silk",
    ],
    "Boutique 3-Piece": [
      "Shop All Boutique 3-Piece",
      "Classic Indigo Ajrakh Set",
      "Earthy Mirror & Kantha Yoke",
      "Pastel Lavender Botanical Lawn",
    ],
    "Muslin & Tussar": [
      "Shop All Muslin & Tussar",
      "Matka Muslin Sarees",
      "Semi-Tussar Silk Sarees",
      "Linen Jamdani Weaves",
    ],
    "Handloom Cotton": [
      "Shop All Handloom Cotton",
      "Authentic Cotton Weaves",
      "Summer Festive Cottons",
      "Daily Smart Wear",
    ],
  };

  return (
    <>
      {/* Minimal line trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden flex items-center justify-center size-10 text-foreground/80 hover:bg-neutral-100 rounded-full transition-all duration-200"
        aria-label="Open navigation menu"
      >
        <Menu className="h-6 w-6 text-[#720026]" strokeWidth={1.75} />
      </button>

      {/* Premium Full-Screen Navigation Panel Overlay */}
      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="fixed top-0 left-0 w-screen h-[100dvh] bg-[#FAF7F2] z-[9999] flex flex-col overflow-y-auto animate-slide-up">
            {/* Header bar within overlay */}
            <div className="flex h-16 items-center justify-between px-6 border-b border-[#E8DFD3] bg-white">
              <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
                <Image
                  src="/tazeens-assets/logo.jpg"
                  alt="Tazeen's"
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain bg-white rounded-full ring-2 ring-[#D4AF37]/70 p-0.5"
                />
                <div className="flex flex-col">
                  <span className="font-heading text-base font-extrabold tracking-tight text-[#720026] leading-none">
                    Tazeen&apos;s
                  </span>
                  <span className="text-[8.5px] font-semibold tracking-widest text-[#D4AF37] uppercase mt-0.5">
                    Gulshan &amp; Uttara Showrooms
                  </span>
                </div>
              </Link>

              <button
                onClick={() => setOpen(false)}
                className="flex items-center justify-center size-10 text-foreground hover:bg-neutral-100 rounded-full transition-all duration-200"
                aria-label="Close navigation menu"
              >
                <X className="h-6 w-6 text-[#1A1A1A]" strokeWidth={1.5} />
              </button>
            </div>

            {/* Touch-Optimized Accordion Navigation Links */}
            <nav className="flex-1 px-6 py-4" aria-label="Mobile navigation">
              <div className="flex flex-col">
                {links.map((link) => {
                  const hasSubCategories = link.label in categoriesWithSubs;
                  const isAccordionActive = activeAccordion === link.label;

                  return (
                    <div key={link.href} className="border-b border-[#E8DFD3]/60">
                      {hasSubCategories ? (
                        <div>
                          <button
                            onClick={() => toggleAccordion(link.label)}
                            className="w-full min-h-[56px] py-4 flex justify-between items-center text-[15px] font-semibold tracking-wide text-[#1A1A1A] hover:text-[#720026] transition-colors"
                            aria-expanded={isAccordionActive}
                          >
                            {link.label}
                            {isAccordionActive ? (
                              <ChevronUp className="h-4 w-4 text-[#720026]" strokeWidth={2} />
                            ) : (
                              <ChevronDown className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
                            )}
                          </button>

                          {/* Expandable Category Sub-menus */}
                          {isAccordionActive && (
                            <div className="pl-4 pb-5 flex flex-col gap-3 animate-slide-down">
                              {(categoriesWithSubs[link.label] ?? []).map((subLabel) => {
                                const isShopAll = subLabel.toLowerCase().startsWith("shop all");
                                const urlParam = isShopAll
                                  ? ""
                                  : `?filter=${subLabel.toLowerCase().replace(/\s+/g, "-")}`;
                                return (
                                  <Link
                                    key={subLabel}
                                    href={`${link.href}${urlParam}`}
                                    onClick={() => setOpen(false)}
                                    className="text-[13.5px] text-neutral-600 hover:text-[#720026] transition-colors py-1 flex items-center justify-between"
                                  >
                                    <span>{subLabel}</span>
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="block min-h-[56px] py-4 text-[15px] font-semibold tracking-wide text-[#1A1A1A] hover:text-[#720026] transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Secondary utility links */}
              <div className="mt-8 pt-6 border-t border-[#E8DFD3] flex flex-col gap-4">
                <Link
                  href="/track-order"
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-[#720026] transition-colors"
                >
                  Track My Order
                </Link>
                <Link
                  href="/delivery-info"
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-[#720026] transition-colors"
                >
                  Delivery &amp; Shipping Information (৳80 Inside Dhaka)
                </Link>
                <Link
                  href="/faq"
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-[#720026] transition-colors"
                >
                  Frequently Asked Questions (FAQ)
                </Link>
                <Link
                  href="/refund-policy"
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-[#720026] transition-colors"
                >
                  Open Parcel &amp; Return Policy
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-[#720026] transition-colors"
                >
                  Visit Gulshan &amp; Uttara Showrooms
                </Link>
              </div>
            </nav>

            {/* Action cards in footer */}
            <div className="px-6 py-5 border-t border-[#E8DFD3] bg-white mt-auto">
              <a
                href={BUSINESS.WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 h-12 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm mb-3 active:scale-[0.98]"
              >
                <span>WhatsApp Hotline ({BUSINESS.PHONE})</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/account"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 h-12 bg-[#FAF7F2] border border-[#E8DFD3] text-xs font-bold text-[#1A1A1A] hover:bg-neutral-100 rounded-xl transition-colors shadow-xs"
                >
                  <User className="h-4 w-4 text-[#720026]" strokeWidth={1.5} />
                  My Account
                </Link>
                <Link
                  href="/cart"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 h-12 bg-[#720026] text-[#D4AF37] text-xs font-bold hover:bg-[#50001B] rounded-xl transition-colors shadow-xs"
                >
                  <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
                  Bag ({cartCount})
                </Link>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
