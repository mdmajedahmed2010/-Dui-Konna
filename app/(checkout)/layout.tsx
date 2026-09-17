/**
 * 365 Fashion House — Checkout Layout
 * Isolated layout for focused luxury checkout flow
 */

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      {/* Minimal Header */}
      <header className="bg-white border-b border-[#E8DFD5] shadow-xs">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            href="/cart"
            className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#191426] hover:text-[#6C3483] font-bold transition-colors"
          >
            <ArrowLeft className="h-4 w-4 text-[#6C3483]" />
            Back to Bag
          </Link>
          <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-[#191426] font-heading">
            <div className="relative size-8 rounded-full overflow-hidden border border-[#D4AC0D]/50 shadow-xs">
              <Image src="/logo.jpg" alt={BUSINESS.NAME} fill className="object-cover" />
            </div>
            <span>{BUSINESS.NAME}</span>
            <span className="text-[9px] font-sans font-extrabold uppercase tracking-widest text-[#191426] px-2 py-0.5 bg-[#D4AC0D] rounded-full">
              DHAKA 1206
            </span>
          </Link>
          <div className="flex items-center gap-1 text-[11px] font-bold text-neutral-600">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span className="hidden sm:inline">Open Parcel COD</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Minimal Footer */}
      <footer className="border-t border-[#E8DFD5] py-6 bg-white">
        <div className="container mx-auto px-4 text-center text-xs text-neutral-500 font-medium">
          <p>
            © {new Date().getFullYear()} {BUSINESS.NAME}. All rights reserved.{" "}
            <Link href="/terms" className="underline hover:text-[#6C3483]">
              Terms
            </Link>{" "}
            ·{" "}
            <Link href="/refund-policy" className="underline hover:text-[#6C3483]">
              Open Parcel & Refund Policy
            </Link>{" "}
            ·{" "}
            <Link href="/delivery-info" className="underline hover:text-[#6C3483]">
              Delivery Info
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
