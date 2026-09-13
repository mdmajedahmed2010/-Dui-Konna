"use client";

/**
 * 3 sis xclusive — Trust Badges & Open Parcel Assurance
 * Authentic Pakistani Luxury Suits | Nayasarak Point Flagship Boutique
 */

import { useEffect, useRef, useState } from "react";
import { Truck, ShieldCheck, CreditCard, Star, Award, Users, MapPin, Eye } from "lucide-react";

const badges = [
  {
    icon: Award,
    title: "১০০% অরিজিনাল",
    description: "Original Pakistani Luxury Suits",
  },
  {
    icon: Eye,
    title: "Open Parcel Policy",
    description: "প্যাকেট খুলে চেক করে মূল্য দিন",
  },
  {
    icon: CreditCard,
    title: "Cash on Delivery",
    description: "Sylhet ৳80 | Outside ৳150",
  },
  {
    icon: MapPin,
    title: "Nayasarak Outlet",
    description: "Parents View 1st Floor, Sylhet",
  },
  {
    icon: Users,
    title: "৩৪,০০০+ সিস্টার্স",
    description: "Trusted modest community in BD",
  },
  {
    icon: ShieldCheck,
    title: "Pre-Order Guarantee",
    description: "Time-bound or instant refund",
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
    <section ref={sectionRef} className="bg-[#faf7f5] border-y border-[#ebdcd0] py-14 md:py-18 relative">
      {/* Gold divider line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6">
          {badges.map((badge, i) => (
            <div
              key={badge.title}
              className={`group flex flex-col items-center text-center gap-3 p-5 md:p-6 rounded-2xl bg-white border border-[#ebdcd0] shadow-xs transition-all duration-500 hover:shadow-md hover:border-[#D4AF37]/60 hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-6 scale-[0.98]"
              }`}
              style={{
                transitionDelay: isVisible ? `${i * 80}ms` : "0ms",
              }}
            >
              <div className="flex items-center justify-center size-12 md:size-13 rounded-full bg-[#fdf5fa] text-[#8B263E] transition-all duration-500 group-hover:bg-[#8B263E] group-hover:text-white shadow-xs">
                <badge.icon className="h-5.5 w-5.5 stroke-[1.5]" />
              </div>

              <div className="space-y-1">
                <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.14em] text-[#8B263E] font-sans">
                  {badge.title}
                </p>
                <p className="text-[10px] md:text-[11px] text-neutral-500 leading-relaxed font-sans font-medium">
                  {badge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
