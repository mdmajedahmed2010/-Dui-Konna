"use client";

/**
 * Enaya's | Sylhet — Mobile Navigation Overlay
 * Elevate Your Style | Luxury Women's Boutique & Authentic Pakistani Designer Fashion
 * Nayasarak Point, Sylhet, Bangladesh — https://www.facebook.com/Enayas.Sylhet/
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
        "Pakistani Lawn": ["Shop All Pakistani Lawn", "Mint Green Embroidered Lawn 3pc", "Pastel Powder Blue Floral Suit", "Pure Lawn with Chiffon Dupatta"],
        "Designer Pre-Orders": ["Shop All Pre-Orders", "Sadabahar Original Luxury 3pc", "Russian Silk Champagne Set", "Bell Bottom Cutwork Suits"],
        "Party Wear": ["Shop All Party Wear", "Midnight Black Royal Zardozi", "Crimson Magenta Suit", "Sage Green Embroidered Organza"],
        "Farsi & Co-ords": ["Shop All Farsi Sets", "Ivory Cream Navy Embroidered Kurti", "Pure Cotton Flared Farsi Salwar 2pc", "Rose Pink Striped Daily Set"],
        "Velvet Luxury": ["Shop All Velvet", "Royal Micro-Velvet Kaftan", "Festive Embroidered Shawl Set"]
    };

    return (
        <>
            {/* Minimal line trigger button */}
            <button
                onClick={() => setOpen(true)}
                className="lg:hidden flex items-center justify-center size-10 text-foreground/80 hover:bg-neutral-100 rounded-full transition-all duration-200"
                aria-label="Open navigation menu"
            >
                <Menu className="h-6 w-6 text-[#3D0B3D]" strokeWidth={1.75} />
            </button>

            {/* Premium Full-Screen Navigation Panel Overlay */}
            {open && typeof document !== "undefined" && createPortal(
                <div className="fixed top-0 left-0 w-screen h-[100dvh] bg-[#FAF7F5] z-[9999] flex flex-col overflow-y-auto animate-slide-up">
                    {/* Header bar within overlay */}
                    <div className="flex h-16 items-center justify-between px-6 border-b border-[#EDE1D8] bg-white">
                        <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
                            <Image
                                src="/logo.jpg"
                                alt="Enaya's | Sylhet"
                                width={36}
                                height={36}
                                className="h-9 w-9 object-cover rounded-full ring-2 ring-[#D4AF37]/50"
                            />
                            <div className="flex flex-col">
                                <span className="font-heading text-sm font-extrabold tracking-tight text-[#3D0B3D] uppercase leading-none">
                                    Enaya's | Sylhet
                                </span>
                                <span className="text-[9px] font-semibold tracking-widest text-[#D4AF37] uppercase">
                                    Elevate Your Style
                                </span>
                            </div>
                        </Link>
                        
                        <button
                            onClick={() => setOpen(false)}
                            className="flex items-center justify-center size-10 text-foreground hover:bg-neutral-100 rounded-full transition-all duration-200"
                            aria-label="Close navigation menu"
                        >
                            <X className="h-6 w-6 text-[#3D0B3D]" strokeWidth={1.5} />
                        </button>
                    </div>

                    {/* Touch-Optimized Accordion Navigation Links */}
                    <nav className="flex-1 px-6 py-4" aria-label="Mobile navigation">
                        <div className="flex flex-col">
                            {links.map((link) => {
                                const hasSubCategories = link.label in categoriesWithSubs;
                                const isAccordionActive = activeAccordion === link.label;

                                return (
                                    <div key={link.href} className="border-b border-[#EDE1D8]/60">
                                        {hasSubCategories ? (
                                            <div>
                                                <button
                                                    onClick={() => toggleAccordion(link.label)}
                                                    className="w-full min-h-[56px] py-4 flex justify-between items-center text-[15px] font-semibold tracking-wide text-[#2D082D] hover:text-[#3D0B3D] transition-colors"
                                                    aria-expanded={isAccordionActive}
                                                >
                                                    {link.label}
                                                    {isAccordionActive ? (
                                                        <ChevronUp className="h-4 w-4 text-[#D4AF37]" strokeWidth={2} />
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
                                                                    className="text-[14px] text-muted-foreground hover:text-[#3D0B3D] transition-colors font-medium py-1"
                                                                >
                                                                    {subLabel}
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
                                                className="w-full min-h-[56px] py-4 flex items-center text-[15px] font-semibold tracking-wide text-[#2D082D] hover:text-[#3D0B3D] transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Extra brand & utility links */}
                        <div className="flex flex-col gap-4 mt-8 pr-2">
                            <Link
                                href="/track-order"
                                onClick={() => setOpen(false)}
                                className="text-sm font-medium text-muted-foreground hover:text-[#3D0B3D] transition-colors"
                            >
                                Track My Order
                            </Link>
                            <Link
                                href="/contact"
                                onClick={() => setOpen(false)}
                                className="text-sm font-medium text-muted-foreground hover:text-[#3D0B3D] transition-colors"
                            >
                                Visit Nayasarak Point Outlet
                            </Link>
                            <Link
                                href="/refund-policy"
                                onClick={() => setOpen(false)}
                                className="text-sm font-medium text-muted-foreground hover:text-[#3D0B3D] transition-colors"
                            >
                                Open Parcel & Refund Policy
                            </Link>
                        </div>
                    </nav>

                    {/* Action cards in footer */}
                    <div className="px-6 py-5 border-t border-[#EDE1D8] bg-white mt-auto">
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
                                className="flex items-center justify-center gap-2 h-12 bg-[#FAF7F5] border border-[#EDE1D8] text-xs font-bold text-[#3D0B3D] hover:bg-neutral-100 rounded-xl transition-colors shadow-xs"
                            >
                                <User className="h-4 w-4 text-[#D4AF37]" strokeWidth={1.5} />
                                My Account
                            </Link>
                            <Link
                                href="/cart"
                                onClick={() => setOpen(false)}
                                className="flex items-center justify-center gap-2 h-12 bg-[#3D0B3D] text-[#F3C649] text-xs font-bold hover:bg-[#4A0E4E] rounded-xl transition-colors shadow-xs"
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
