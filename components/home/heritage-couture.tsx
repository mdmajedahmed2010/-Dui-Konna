"use client";

/**
 * 3 sis xclusive — Brand Heritage & Boutique Social Proof
 * Editorial storytelling with live metrics, 17 Years of Trust outlet, and authentic craft values
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
      value: "53,000+",
      label: "Facebook Sisters",
      sub: "Active luxury fashion community",
    },
    {
      icon: Award,
      value: "100%",
      label: "Original Pakistani Curation",
      sub: "Aghanoor, Gul Ahmed & luxury lawn",
    },
    {
      icon: ShieldCheck,
      value: "Open Parcel",
      label: "Inspection Guarantee",
      sub: "Check your dress before paying COD",
    },
    {
      icon: MapPin,
      value: "Heritage & Legacy",
      label: "17 Years of Trust",
      sub: "Trusted Fashion Destination",
    },
  ];

  return (
    <section className="py-16 md:py-28 bg-white border-b border-[#ebdcd0] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage with Floating Quote Badge (Col-span 6) */}
          <div className="lg:col-span-6 relative">
            <div className="double-bezel-card aspect-[4/5] max-w-md mx-auto shadow-2xl">
              <div className="double-bezel-inner h-full w-full relative overflow-hidden bg-neutral-900">
                <Image
                  src={ASSETS.img2}
                  alt="3 sis xclusive Sylhet Boutique Craftsmanship"
                  fill
                  quality={90}
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

                {/* Floating Sylhet Origin Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/60 shadow-lg text-[#1e1622]">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#8B263E] flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#D4AF37]" />
                    <span>NAYASARAK POINT, SYLHET</span>
                  </p>
                  <p className="text-xs md:text-sm font-medium leading-snug mt-1.5 font-serif italic text-neutral-800">
                    &ldquo;Modest elegance and regal Pakistani luxury crafted for the modern Bengali queen.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Brand Manifesto & Value Grid (Col-span 6) */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fdf5fa] border border-[#f0d0e6] mb-3">
                <Sparkles className="h-3 w-3 text-[#D4AF37]" />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#8B263E]">
                  BOUTIQUE HERITAGE & CRAFT
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1e1622] font-heading tracking-tight leading-[1.12]">
                Sylhet&apos;s Sanctuary For Pakistani Luxury Pret
              </h2>
              <p className="mt-4 text-sm md:text-base text-neutral-600 leading-relaxed font-medium">
                3 sis xclusive was born out of 17 years of passionate dedication to authentic Pakistani couture, intricate embroidery, and timeless fashion just for women. Serving over 53,000+ sisters across all 64 districts of Bangladesh, we deliver genuine imported elegance with our signature Open Parcel inspection guarantee.
              </p>
            </div>

            {/* Metrics 2x2 Bento */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-4 md:p-5 rounded-2xl bg-[#faf7f5] border border-[#ebdcd0] space-y-1 hover:border-[#8B263E]/40 transition-all hover:shadow-sm"
                >
                  <div className="size-8 rounded-full bg-[#fdf5fa] text-[#8B263E] flex items-center justify-center mb-2">
                    <m.icon className="h-4 w-4 text-[#8B263E]" />
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-[#1e1622] font-sans">
                    {m.value}
                  </p>
                  <p className="text-xs font-bold text-[#8B263E] uppercase tracking-wider">
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
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#8B263E] hover:bg-[#280728] text-white text-xs font-bold uppercase tracking-[0.18em] shadow-md transition-all active:scale-[0.98]"
              >
                <span>Join 34K+ Facebook Family</span>
                <ArrowUpRight className="h-4 w-4 text-[#D4AF37]" />
              </a>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#faf7f5] text-[#8B263E] text-xs font-bold uppercase tracking-[0.16em] border border-[#ebdcd0] transition-all"
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
