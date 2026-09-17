"use client";

/**
 * Ash and Aspen (ash and aspen) — Mobile Navigation Overlay
 * Luxury Pakistani Designer Attires & Ready-to-Wear Pret
 * House #76, Gausul Azam Avenue, Sector #13, Uttara, Dhaka - 1230, Bangladesh
 * Official Facebook: https://www.facebook.com/ashandaspenclothing/
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
    const cartCount = useCartStore((state) => state.items.reduce((sum, item) => sum + item.quantity, 0));

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

    // Subcategories structured like desktop mega-menu
    const categoriesWithSubs: Record<string, string[]> = {
        "Pakistani Lawn": ["Shop All Pakistani Lawn", "Gulaal Seafoam Mint Lawn", "Nur Festive Chikankari Kameez", "Gulaal Coral Peach Lawn"],
        "Organza & Chiffon": ["Shop All Organza & Chiffon", "Nur Lavender Butterfly Pret", "Silk Chiffon Dupatta Kurti", "Semi-Formal Luxury Pret"],
        "Designer Pret": ["Shop All Designer Pret", "Sadabahar Sandy Taupe 3-Piece", "Nur Royal Schiffli Stitched Suit", "Ready-to-Wear Bell Sleeve Sets"],
        "Festive & Party": ["Shop All Festive & Party Wear", "Ruby Crimson Empress Velvet Suit", "Gulaal Tassel Festive Suit", "Wedding & Dawat Couture"],
        "Casual Lite": ["Shop All Casual Lite", "Boutique Signature Pret Kurti", "Summer Floral Lawn Tunics", "Daily Wear Stitched Sets"]
    };

    return (
        <>
            {/* Minimal line trigger button */}
            <button
                onClick={() => setOpen(true)}
                className="lg:hidden flex items-center justify-center size-10 text-foreground/80 hover:bg-neutral-100 rounded-full transition-all duration-200"
                aria-label="Open navigation menu"
            >
                <Menu className="h-6 w-6 text-[#1A1A1A]" strokeWidth={1.75} />
            </button>

            {/* Premium Full-Screen Navigation Panel Overlay */}
            {open && typeof document !== "undefined" && createPortal(
                <div className="fixed top-0 left-0 w-screen h-[100dvh] bg-[#FAF7F2] z-[9999] flex flex-col overflow-y-auto animate-slide-up">
                    {/* Header bar within overlay */}
                    <div className="flex h-16 items-center justify-between px-6 border-b border-[#E8DFD3] bg-white">
                        <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
                            <Image
                                src="/ash-and-aspen/logo.jpg"
                                alt="Ash and Aspen"
                                width={36}
                                height={36}
                                className="h-9 w-9 object-cover rounded-full ring-2 ring-[#E29578]/70"
                            />
                            <div className="flex flex-col">
                                <span className="font-heading text-sm font-extrabold tracking-tight text-[#1A1A1A] uppercase leading-none">
                                    Ash and Aspen
                                </span>
                                <span className="text-[8.5px] font-semibold tracking-widest text-[#E29578] uppercase mt-0.5">
                                    Uttara Showroom &amp; Online
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
                                                    className="w-full min-h-[56px] py-4 flex justify-between items-center text-[15px] font-semibold tracking-wide text-[#1A1A1A] hover:text-[#E29578] transition-colors"
                                                    aria-expanded={isAccordionActive}
                                                >
                                                    {link.label}
                                                    {isAccordionActive ? (
                                                        <ChevronUp className="h-4 w-4 text-[#E29578]" strokeWidth={2} />
                                                    ) : (
                                                        <ChevronDown className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
                                                    )}
                                                </button>
                                                
                                                {/* Expandable Category Sub-menus */}
                                                {isAccordionActive && (
                                                    <div className="pl-4 pb-5 flex flex-col gap-3 animate-slide-down">
                                                        {(categoriesWithSubs[link.label] ?? []).map((subLabel) => {
                                                            const isShopAll = subLabel.toLowerCase().startsWith("shop all");
                                                            const urlParam = isShopAll ? "" : `?filter=${subLabel.toLowerCase().replace(/\s+/g, "-")}`;
                                                            return (
                                                                <Link
                                                                    key={subLabel}
                                                                    href={`${link.href}${urlParam}`}
                                                                    onClick={() => setOpen(false)}
                                                                    className="text-[13.5px] text-neutral-600 hover:text-[#E29578] transition-colors py-1 flex items-center justify-between"
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
                                                className="block min-h-[56px] py-4 text-[15px] font-semibold tracking-wide text-[#1A1A1A] hover:text-[#E29578] transition-colors"
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
                                className="text-sm font-medium text-muted-foreground hover:text-[#E29578] transition-colors"
                            >
                                Track My Order
                            </Link>
                            <Link
                                href="/delivery-info"
                                onClick={() => setOpen(false)}
                                className="text-sm font-medium text-muted-foreground hover:text-[#E29578] transition-colors"
                            >
                                Delivery &amp; Shipping Information
                            </Link>
                            <Link
                                href="/faq"
                                onClick={() => setOpen(false)}
                                className="text-sm font-medium text-muted-foreground hover:text-[#E29578] transition-colors"
                            >
                                Frequently Asked Questions (FAQ)
                            </Link>
                            <Link
                                href="/refund-policy"
                                onClick={() => setOpen(false)}
                                className="text-sm font-medium text-muted-foreground hover:text-[#E29578] transition-colors"
                            >
                                Open Parcel &amp; Refund Policy
                            </Link>
                            <Link
                                href="/contact"
                                onClick={() => setOpen(false)}
                                className="text-sm font-medium text-muted-foreground hover:text-[#E29578] transition-colors"
                            >
                                Visit Uttara Showroom
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
                                <User className="h-4 w-4 text-[#E29578]" strokeWidth={1.5} />
                                My Account
                            </Link>
                            <Link
                                href="/cart"
                                onClick={() => setOpen(false)}
                                className="flex items-center justify-center gap-2 h-12 bg-[#1A1A1A] text-[#E29578] text-xs font-bold hover:bg-[#2A2A2A] rounded-xl transition-colors shadow-xs"
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
