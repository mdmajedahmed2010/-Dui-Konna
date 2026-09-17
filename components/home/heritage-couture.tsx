"use client";

/**
 * Ash and Aspen — Brand Heritage & Boutique Social Proof
 * Editorial storytelling with live metrics, Uttara Sector 13 showroom, and authentic Pakistani craft values
 * Official Facebook Page: https://www.facebook.com/ashandaspenclothing/
 */

import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowUpRight, Award, Users, MapPin, ShieldCheck } from "lucide-react";
import { ASSETS } from "@/lib/demo-data";
import { BUSINESS } from "@/lib/constants";

export function HeritageCouture() {
  const metrics = [
    {
      icon: Users,
      value: "81,000+",
      label: "Facebook Family",
      sub: "96% positive recommendation score",
    },
    {
      icon: Award,
      value: "100%",
      label: "Authenticity Guarantee",
      sub: "Gulaal, Nur, Sadabahar & luxury designer wear",
    },
    {
      icon: ShieldCheck,
      value: "Open Parcel",
      label: "Inspection Guarantee",
      sub: "Check your dress before paying COD",
    },
    {
      icon: MapPin,
      value: "Uttara Showroom",
      label: "Sector #13, Uttara",
      sub: "House #76, Gausul Azam Avenue, Dhaka - 1230",
    },
  ];

  return (
    <section className="py-16 md:py-28 bg-white border-b border-[#E8DFD3] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage with Floating Quote Badge (Col-span 6) */}
          <div className="lg:col-span-6 relative">
            <div className="double-bezel-card aspect-[4/5] max-w-md mx-auto shadow-2xl">
              <div className="double-bezel-inner h-full w-full relative overflow-hidden bg-[#1A1A1A]">
                <Image
                  src={ASSETS.img2}
                  alt="Ash and Aspen Authentic Craftsmanship"
                  fill
                  quality={90}
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Floating Uttara Showroom Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/60 shadow-lg text-[#1A1A1A]">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#484860] flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#E29578]" />
                    <span>ASH AND ASPEN • UTTARA, DHAKA - 1230</span>
                  </p>
                  <p className="text-xs md:text-sm font-medium leading-snug mt-1.5 font-serif italic text-neutral-800">
                    &ldquo;Customer satisfaction is our utmost priority — delivering original Pakistani couture with complete trust.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Brand Manifesto & Value Grid (Col-span 6) */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF7F2] border border-[#E29578]/40 mb-3">
                <Sparkles className="h-3 w-3 text-[#E29578]" />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#484860]">
                  HERITAGE & AUTHENTICITY
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] font-heading tracking-tight leading-[1.14]">
                Authentic Pakistani Couture & Designer Elegance
              </h2>
              <p className="mt-4 text-sm md:text-base text-neutral-600 leading-relaxed font-medium">
                Ash and Aspen is an online marketplace portal that is highly committed to ensuring customer satisfaction by delivering the best quality products. From Gulaal pure luxury lawn and Nur organza couture to ready-to-wear Sadabahar stitched suits, every masterpiece is verified 100% genuine. Experience our customer-first Open Parcel Policy across Bangladesh or visit our flagship studio in Uttara Sector 13.
              </p>
            </div>

            {/* Metrics 2x2 Bento */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-4 md:p-5 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD3] space-y-1 hover:border-[#E29578]/60 transition-all hover:shadow-sm"
                >
                  <div className="size-8 rounded-full bg-white text-[#E29578] flex items-center justify-center mb-2 shadow-2xs border border-[#E8DFD3]">
                    <m.icon className="h-4 w-4 text-[#E29578]" />
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-[#1A1A1A] font-sans">
                    {m.value}
                  </p>
                  <p className="text-xs font-bold text-[#484860] uppercase tracking-wider">
                    {m.label}
                  </p>
                  <p className="text-[10px] text-neutral-500 font-medium">
                    {m.sub}
                  </p>
                </div>
              ))}
            </div>

            {/* Official Channels CTA */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={BUSINESS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#1A1A1A] hover:bg-[#484860] text-white text-xs font-bold uppercase tracking-[0.18em] shadow-md transition-all active:scale-[0.98]"
              >
                <span>Join 81K+ Facebook Family</span>
                <ArrowUpRight className="h-4 w-4 text-[#E29578]" />
              </a>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#FAF7F2] text-[#1A1A1A] text-xs font-bold uppercase tracking-[0.16em] border border-[#E8DFD3] transition-all hover:border-[#E29578]"
              >
                <span>Explore Our Story</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

