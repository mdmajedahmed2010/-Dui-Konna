"use client";

/**
 * Shopping Queen by Orni — Trust Badges & Open Parcel Assurance
 * Authentic Pakistani Suits, Exclusive Festive Partywear & Natural Glow Skincare
 * Dhaka, Bangladesh • Facebook: https://www.facebook.com/Shoppingqueenbyorni
 * 190,500+ Followers • Open Parcel Inspection Nationwide
 */

import { useEffect, useRef, useState } from "react";
import { CreditCard, Award, Users, Sparkles, Eye, PhoneCall } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const badges = [
  {
    icon: Award,
    title: "১০০% অরিজিনাল কোয়ালিটি",
    description: "Authentic Pakistani Lawn & Suits",
  },
  {
    icon: Eye,
    title: "Open Parcel Guarantee",
    description: "পার্সেল খুলে দেখে চেক করে পেমেন্ট",
  },
  {
    icon: CreditCard,
    title: "Cash on Delivery",
    description: "ঢাকা ৳৮০ | বাইরে ৳১৫০ | ২+ ড্রেসে ফ্রি",
  },
  {
    icon: Sparkles,
    title: "প্রাকৃতিক স্কিনকেয়ার",
    description: "Kim Pearl & Snowlotus Cream",
  },
  {
    icon: Users,
    title: "১৯০,০০০+ আপুদের পরিবার",
    description: "Official Facebook Community",
  },
  {
    icon: PhoneCall,
    title: "সরাসরি হটলাইন",
    description: `${BUSINESS.PHONE} (WhatsApp / Call)`,
  },
];

export function TrustBadges() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16 bg-[#FAF6F0] border-y border-[#E8DFD3]"
      aria-label="Trust Badges"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {badges.map((badge, idx) => (
            <div
              key={badge.title}
              className={`flex flex-col items-center text-center p-4 rounded-2xl bg-white border border-[#E8DFD3] shadow-xs hover:border-[#D4AF37]/60 hover:shadow-md transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: `${idx * 60}ms`,
                transitionDuration: "500ms",
              }}
            >
              <div className="size-11 rounded-full bg-[#FAF6F0] text-[#6B1D2F] flex items-center justify-center mb-3 border border-[#D4AF37]/40">
                <badge.icon className="h-5 w-5 text-[#6B1D2F]" />
              </div>
              <h3 className="text-xs md:text-sm font-bold text-[#1A1A1A] leading-tight">
                {badge.title}
              </h3>
              <p className="text-[10px] md:text-[11px] text-neutral-500 font-medium mt-1">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
