"use client";

/**
 * Closet by Tanzz — Trust Badges & Open Parcel Assurance
 * Premium Women's Fashion | Natore Tower, Rajlokkhi, Uttara Showroom
 */

import { useEffect, useRef, useState } from "react";
import { CreditCard, Award, Users, MapPin, Eye, PhoneCall } from "lucide-react";

const badges = [
  {
    icon: Award,
    title: "১০০% প্রিমিয়াম কালেকশন",
    description: "Zam Zam Lawn & Festive 3-Piece",
  },
  {
    icon: Eye,
    title: "Open Parcel Policy",
    description: "প্যাকেট খুলে চেক করে মূল্য পরিশোধ",
  },
  {
    icon: CreditCard,
    title: "Cash on Delivery",
    description: "Dhaka ৳80 | Outside ৳150",
  },
  {
    icon: MapPin,
    title: "উত্তরা শোরুম",
    description: "Natore Tower (2nd Fl), Uttara",
  },
  {
    icon: Users,
    title: "৫১,০০০+ সিস্টার্স",
    description: "Facebook Fashion Community",
  },
  {
    icon: PhoneCall,
    title: "সরাসরি সাপোর্ট",
    description: "01610-663812 (WhatsApp)",
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
    <section ref={sectionRef} className="bg-[#FAF8F5] border-y border-[#E8DFD5] py-14 md:py-18 relative">
      {/* Gold divider line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059]/60 to-transparent" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6">
          {badges.map((badge, i) => (
            <div
              key={badge.title}
              className={`group flex flex-col items-center text-center gap-3 p-5 md:p-6 rounded-2xl bg-white border border-[#E8DFD5] shadow-xs transition-all duration-500 hover:shadow-md hover:border-[#C5A059]/70 hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-6 scale-[0.98]"
              }`}
              style={{
                transitionDelay: isVisible ? `${i * 80}ms` : "0ms",
              }}
            >
              <div className="flex items-center justify-center size-12 md:size-13 rounded-full bg-[#FAF8F5] text-[#121212] border border-[#C5A059]/30 transition-all duration-500 group-hover:bg-[#121212] group-hover:text-[#C5A059] group-hover:border-[#121212] shadow-xs">
                <badge.icon className="h-5.5 w-5.5 stroke-[1.5]" />
              </div>

              <div className="space-y-1">
                <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.14em] text-[#121212] font-sans">
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
