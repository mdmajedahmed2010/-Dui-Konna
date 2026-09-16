"use client";

/**
 * Closet by Tanzz — Brand Heritage & Boutique Social Proof
 * Editorial storytelling with live metrics, Natore Tower outlet, and authentic craft values
 * Wear Tanzz, Wear confidence — https://www.facebook.com/Closetbytanzz/
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
      value: "51,000+",
      label: "Facebook Sisters",
      sub: "Active luxury fashion community",
    },
    {
      icon: Award,
      value: "100%",
      label: "Fabric & Color Guarantee",
      sub: "Premium Zam Zam & artisan cotton",
    },
    {
      icon: ShieldCheck,
      value: "Open Parcel",
      label: "Inspection Guarantee",
      sub: "Check your dress before paying COD",
    },
    {
      icon: MapPin,
      value: "Uttara Outlet",
      label: "Natore Tower (Lift-2)",
      sub: "Shop 12, Rajlokkhi, Sector 3",
    },
  ];

  return (
    <section className="py-16 md:py-28 bg-white border-b border-[#E8DFD3] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage with Floating Quote Badge (Col-span 6) */}
          <div className="lg:col-span-6 relative">
            <div className="double-bezel-card aspect-[4/5] max-w-md mx-auto shadow-2xl">
              <div className="double-bezel-inner h-full w-full relative overflow-hidden bg-neutral-900">
                <Image
                  src={ASSETS.img2}
                  alt="Closet by Tanzz Boutique Craftsmanship"
                  fill
                  quality={90}
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

                {/* Floating Dhaka Showroom Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/60 shadow-lg text-[#121212]">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#121212] flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#C5A059]" />
                    <span>NATORE TOWER, UTTARA, DHAKA</span>
                  </p>
                  <p className="text-xs md:text-sm font-medium leading-snug mt-1.5 font-serif italic text-neutral-800">
                    &ldquo;আরাম, সৌন্দর্য আর স্টাইল—সবকিছু একসাথে! Wear Tanzz, Wear confidence.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Brand Manifesto & Value Grid (Col-span 6) */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF8F5] border border-[#E8DFD3] mb-3">
                <Sparkles className="h-3 w-3 text-[#C5A059]" />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#121212]">
                  BOUTIQUE HERITAGE & VISION
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#121212] font-heading tracking-tight leading-[1.12]">
                Empowering Women Through Luxury & Confidence
              </h2>
              <p className="mt-4 text-sm md:text-base text-neutral-600 leading-relaxed font-medium">
                Closet by Tanzz stands for empowering women with graceful, high-quality, and comfortable three-piece attire. From pure cotton Zam Zam lawn to royal Kashmiri jaal and artisan boutique ensembles, every design is selected to bring you timeless elegance. Serving over 51,000+ sisters across Bangladesh, we uphold complete customer trust with our signature Open Parcel inspection policy.
              </p>
            </div>

            {/* Metrics 2x2 Bento */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-4 md:p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD3] space-y-1 hover:border-[#C5A059]/50 transition-all hover:shadow-sm"
                >
                  <div className="size-8 rounded-full bg-white text-[#C5A059] flex items-center justify-center mb-2 shadow-2xs">
                    <m.icon className="h-4 w-4 text-[#C5A059]" />
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-[#121212] font-sans">
                    {m.value}
                  </p>
                  <p className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">
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
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#121212] hover:bg-[#2A2418] text-white text-xs font-bold uppercase tracking-[0.18em] shadow-md transition-all active:scale-[0.98]"
              >
                <span>Join 51K+ Facebook Family</span>
                <ArrowUpRight className="h-4 w-4 text-[#C5A059]" />
              </a>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#FAF8F5] text-[#121212] text-xs font-bold uppercase tracking-[0.16em] border border-[#E8DFD3] transition-all"
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
