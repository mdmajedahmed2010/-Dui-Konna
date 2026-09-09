/**
 * Enaya's | Sylhet — Checkout Layout
 * Isolated layout for focused luxury checkout flow
 */

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf7f5]">
      {/* Minimal Header */}
      <header className="bg-white border-b border-[#ebdcd0] shadow-xs">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            href="/cart"
            className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#3D0B3D] hover:text-[#280728] font-bold transition-colors"
          >
            <ArrowLeft className="h-4 w-4 text-[#D4AF37]" />
            Back to Bag
          </Link>
          <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-[#3D0B3D] font-heading">
            <div className="relative size-8 rounded-full overflow-hidden border border-[#D4AF37]/50">
              <Image src="/logo.jpg" alt={BUSINESS.NAME} fill className="object-cover" />
            </div>
            <span>Enaya&apos;s</span>
            <span className="text-[10px] font-sans font-extrabold uppercase tracking-widest text-[#D4AF37] px-2 py-0.5 bg-[#3D0B3D] text-white rounded-full">
              Sylhet
            </span>
          </Link>
          <div className="flex items-center gap-1 text-[11px] font-bold text-neutral-500">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span className="hidden sm:inline">Open Parcel COD</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Minimal Footer */}
      <footer className="border-t border-[#ebdcd0] py-6 bg-white">
        <div className="container mx-auto px-4 text-center text-xs text-neutral-500 font-medium">
          <p>
            © {new Date().getFullYear()} {BUSINESS.NAME}. All rights reserved.{" "}
            <Link href="/terms" className="underline hover:text-[#3D0B3D]">
              Terms
            </Link>{" "}
            ·{" "}
            <Link href="/refund-policy" className="underline hover:text-[#3D0B3D]">
              Open Parcel & Refund Policy
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
