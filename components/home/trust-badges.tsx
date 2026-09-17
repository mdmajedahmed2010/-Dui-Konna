"use client";

/**
 * Ash and Aspen — Trust Badges & Open Parcel Assurance
 * Customer-Centric Marketplace Portal for 100% Genuine Pakistani Attires
 * House #76, Gausul Azam Avenue, Sector #13, Uttara, Dhaka - 1230 — https://www.facebook.com/ashandaspenclothing/
 */

import { useEffect, useRef, useState } from "react";
import { CreditCard, Award, Users, MapPin, Eye, PhoneCall } from "lucide-react";

const badges = [
  {
    icon: Award,
    title: "১০০% অথেনটিক পাকিস্তানি ড্রেস",
    description: "Original Gulaal, Nur & Sadabahar",
  },
  {
    icon: Eye,
    title: "Open Parcel Policy",
    description: "প্যাকেট খুলে চেক করে মূল্য পরিশোধ",
  },
  {
    icon: CreditCard,
    title: "Cash on Delivery",
    description: "ঢাকা ৳৮০ | সারা বাংলাদেশ ৳১৫০",
  },
  {
    icon: MapPin,
    title: "উত্তরা শোরুম",
    description: "Sector #13, Uttara, Dhaka",
  },
  {
    icon: Users,
    title: "৮১,০০০+ ফ্যানস",
    description: "Facebook Fashion Community",
  },
  {
    icon: PhoneCall,
    title: "সরাসরি সাপোর্ট",
    description: "01721-396111 (WhatsApp / Call)",
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
      className="py-12 md:py-16 bg-[#FAF7F2] border-y border-[#E8DFD3]"
      aria-label="Trust Badges"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {badges.map((badge, idx) => (
            <div
              key={badge.title}
              className={`flex flex-col items-center text-center p-4 rounded-2xl bg-white border border-[#E8DFD3] shadow-xs hover:border-[#E29578]/60 hover:shadow-md transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: `${idx * 60}ms`,
                transitionDuration: "500ms",
              }}
            >
              <div className="size-11 rounded-full bg-[#FAF7F2] text-[#E29578] flex items-center justify-center mb-3 border border-[#E29578]/30">
                <badge.icon className="h-5 w-5" />
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

