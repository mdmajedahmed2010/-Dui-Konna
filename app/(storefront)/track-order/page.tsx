/**
 * Dui Konna (দুই কন্যা) — Order Tracking Page
 * Public — no login required
 * Order Number (e.g. DK-XXXXX) + Phone দিয়ে track
 */

import type { Metadata } from "next";
import { TrackOrderForm } from "@/components/order/track-order-form";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Track Your Order | ${BUSINESS.NAME} (${BUSINESS.NAME_BN})`,
  description: `Track your ${BUSINESS.NAME} parcel delivery status with your order number and phone.`,
};

export default function TrackOrderPage() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-12 md:py-16 bg-[#FAF7F2]">
      <div className="max-w-md w-full mx-auto text-center space-y-8 bg-white p-8 md:p-10 rounded-2xl border border-[#E8DFD5] shadow-sm">
        <div className="space-y-2">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#8B0000] font-bold">
            লাইভ অর্ডার ট্র্যাকিং
          </span>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight font-serif text-[#1A1A1A]">
            Track Your Saree Order
          </h1>
          <p className="text-xs text-neutral-500 leading-relaxed">
            আপনার অর্ডার নম্বর (যেমন: DK-XXXXX) এবং মোবাইল নম্বর প্রদান করে পার্সেলের বর্তমান কুরিয়ার ও ডেলিভারি স্ট্যাটাস জেনে নিন।
          </p>
        </div>

        <TrackOrderForm />
      </div>
    </div>
  );
}
