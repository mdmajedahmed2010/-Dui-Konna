import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, MapPin, Phone, ShieldCheck, Heart, Award, CheckCircle2, Truck, Mail } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { ASSETS } from "@/lib/demo-data";

export const metadata: Metadata = {
  title: `About Us | ${BUSINESS.NAME} — Smart & Elegant Heritage Sarees & Boutique Couture`,
  description:
    "Discover Tazeen's (তাজিন'স) — Bangladesh's prestigious fashion destination for exclusive sequin border sarees, heritage katan & silk, and bespoke boutique 3-piece sets. Showrooms at Pink City Shopping Complex, Gulshan-2 and Sector 11, Uttara, Dhaka with transparent Open Parcel delivery nationwide.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 bg-[#50001B] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.25),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span className="text-[10.5px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold">
              আমাদের পরিচিতি • ABOUT US
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight font-heading mb-4 text-white">
            {BUSINESS.NAME}
          </h1>
          <p className="text-sm md:text-base text-neutral-200 leading-relaxed font-sans max-w-2xl mx-auto">
            {BUSINESS.TAGLINE} — Renowned for timeless South Asian heritage sarees, exclusive metallic sequin borders, and artisanal boutique wear. Experience our signature Open Parcel inspection policy nationwide.
          </p>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Brand Photo */}
          <div className="lg:col-span-6 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-[#E8DFD5] bg-[#50001B]">
            <Image
              src={ASSETS.heroImage}
              alt="Tazeen's Flagship Saree & Boutique Couture"
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#1A1A1A]/95 backdrop-blur-md border border-[#D4AF37]/40 px-5 py-3 rounded-xl text-white shadow-lg">
              <p className="text-[9px] uppercase tracking-[0.22em] font-bold text-[#D4AF37] flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#D4AF37]" />
                FLAGSHIP SHOWROOMS IN GULSHAN & UTTARA
              </p>
              <p className="text-xs font-semibold mt-0.5">Pink City (Gulshan-2) & Sector 11 (Uttara), Dhaka</p>
            </div>
          </div>

          {/* Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#720026] font-bold">
                আমাদের দর্শন • OUR HERITAGE & MISSION
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-[#1A1A1A] font-heading leading-tight">
                Smart & Elegant Sarees, Curated with Regality & Passion
              </h2>
            </div>

            <div className="border-l-3 border-[#720026] pl-4 py-2 text-[#720026] italic text-sm font-serif bg-rose-50/60 rounded-r-lg">
              &ldquo;Tazeen&apos;s is dedicated to enriching every woman&apos;s wardrobe with genuine handcrafted sarees and boutique elegance that speak of class, individuality, and timeless beauty.&rdquo;
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed">
              <strong>{BUSINESS.NAME}</strong> ({BUSINESS.NAME_BN}) দীর্ঘদিন ধরে বাংলাদেশের মার্জিত রুচিশীল নারীদের কাছে প্রিমিয়াম শাড়ি ও এক্সক্লুসিভ বুটিক পোশাক পৌঁছে দিচ্ছে। গুলশান-২ এর পিংক সিটি শপিং কমপ্লেক্স (দোকান #৫৫) এবং উত্তরা সেক্টর ১১ এর মীনা বাজার ভবনে আমাদের দুইটি সুবিশাল শোরুমে সরাসরি এসে পছন্দের শাড়ি ও পোশাক দেখে নেওয়ার পাশাপাশি সারা বাংলাদেশে রয়েছে আমাদের দ্রুততম হোম ডেলিভারি সুবিধা।
            </p>

            <p className="text-sm text-neutral-600 leading-relaxed">
              আমাদের সিগনেচার সিকুইন পাড় শাড়ি, ঐতিহ্যবাহী গোল্ড জরি কাতান এবং হ্যান্ডলুম থ্রি-পিস কালেকশন প্রতিটি উৎসব ও পারিবারিক আয়োজনে যোগ করে আভিজাত্য। সম্মানিত গ্রাহকদের শতভাগ নিশ্চিন্ত রাখতে আমরা বজায় রাখি কঠোর <strong className="text-[#720026]">Open Parcel Policy</strong> — পার্সেল হাতে পেয়ে ডেলিভারিম্যানের সামনে শাড়ির কাপড়, কাজ ও রঙ দেখে নিশ্চিত হয়ে মূল্য পরিশোধ করুন।
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-[#E8DFD5]">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#720026]">50K+</p>
                <p className="text-[10px] uppercase tracking-wide text-neutral-500 font-bold mt-1">
                  FB Community
                </p>
              </div>
              <div className="text-center border-x border-[#E8DFD5]">
                <p className="text-2xl font-bold text-[#D4AF37]">2 Showrooms</p>
                <p className="text-[10px] uppercase tracking-wide text-neutral-500 font-bold mt-1">
                  Gulshan & Uttara
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#720026]">Open Parcel</p>
                <p className="text-[10px] uppercase tracking-wide text-neutral-500 font-bold mt-1">
                  COD Inspection
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Collections */}
      <section className="py-16 bg-[#F4EFEA] px-6 border-t border-[#E8DFD5]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#720026] font-bold mb-2">
              আমাদের সিগনেচার শাড়ি ও বুটিক কালেকশন
            </p>
            <h2 className="text-3xl font-bold text-[#1A1A1A] font-heading">Curated Attires</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                name: "Metallic Sequin Border Sarees",
                desc: "Shimmering party sarees with lustrous metallic border trims, contrast pallus, and fringed tassels.",
                img: ASSETS.sareeChampagne,
                href: "/collections/sequin-border-sarees",
              },
              {
                name: "Heritage Zari Katan & Silk",
                desc: "Regal bridal katan sarees with opulent antique gold zari stripes and handcrafted polka-dot borders.",
                img: ASSETS.sareeKatanMaroon,
                href: "/collections/royal-katan-heritage",
              },
              {
                name: "Ajrakh & Ethnic Boutique 3-Piece",
                desc: "Authentic modal cotton block print and mirror-work unstitched designer boutique ensembles.",
                img: ASSETS.threePieceAjrakh,
                href: "/collections/boutique-three-piece",
              },
              {
                name: "Royal Purple Party Couture",
                desc: "Dramatic deep amethyst and aubergine draped silhouettes designed for grand evening soirees.",
                img: ASSETS.sareePurple,
                href: "/collections/sequin-border-sarees",
              },
              {
                name: "Haldi & Festive Sun Yellow",
                desc: "Vibrant yellow sarees with sparkling borders crafted specifically for haldi and daytime festivities.",
                img: ASSETS.sareeYellow,
                href: "/collections/haldi-festive-yellow",
              },
              {
                name: "Botanical Floral Lawn & Chiffon",
                desc: "Breathable pastels and delicate floral prints offering supreme comfort for all-day celebrations.",
                img: ASSETS.threePieceLavender,
                href: "/collections/boutique-three-piece",
              },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-xs hover:shadow-lg transition-all duration-300 border border-[#E8DFD5] hover:border-[#D4AF37]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/75 via-transparent to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[#1A1A1A] text-sm mb-1 group-hover:text-[#720026] transition-colors">{item.name}</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom & Contact Information */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4 font-heading">আমাদের শোরুম ও যোগাযোগের ঠিকানা</h2>
          <p className="text-neutral-600 mb-10 max-w-xl mx-auto text-sm">
            ওয়েবসাইট থেকে সরাসরি কার্টে যুক্ত করে চেকআউট করুন, অথবা সরাসরি আমাদের গুলশান ও উত্তরা শোরুমে এসে ঘুরে যান। যেকোনো তথ্য বা শাড়ির ভিডিও দেখতে আমাদের WhatsApp বা Facebook পেজে যোগাযোগ করুন।
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#E8DFD5] shadow-xs text-left">
              <div className="w-10 h-10 rounded-full bg-rose-50 text-[#720026] border border-[#720026]/20 flex items-center justify-center mb-3">
                <MapPin className="h-5 w-5 text-[#720026]" />
              </div>
              <h3 className="font-bold text-[#1A1A1A] text-sm mb-1">গুলশান শোরুম</h3>
              <p className="text-xs text-[#720026] font-semibold mb-2">Shop #55 (1st Floor), Pink City</p>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Pink City Shopping Complex, Plot 15, Road 103, Gulshan-2, Dhaka-1212
              </p>
              <p className="text-[11px] text-neutral-500 font-medium mt-2">
                প্রতিদিন সকাল ১০:৩০টা — রাত ৮:৩০টা
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E8DFD5] shadow-xs text-left">
              <div className="w-10 h-10 rounded-full bg-amber-50 text-[#D4AF37] border border-[#D4AF37]/30 flex items-center justify-center mb-3">
                <MapPin className="h-5 w-5 text-[#D4AF37]" />
              </div>
              <h3 className="font-bold text-[#1A1A1A] text-sm mb-1">উত্তরা শোরুম</h3>
              <p className="text-xs text-[#D4AF37] font-bold mb-2">Fairytale (Tahfeem Fashion)</p>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Meena Bazar Building (3rd Floor), Sector 11, Uttara, Dhaka-1230
              </p>
              <p className="text-[11px] text-neutral-500 font-medium mt-2">
                প্রতিদিন সকাল ১০:৩০টা — রাত ৯:০০টা
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E8DFD5] shadow-xs text-left">
              <div className="w-10 h-10 rounded-full bg-rose-50 text-[#720026] border border-[#720026]/20 flex items-center justify-center mb-3">
                <Phone className="h-5 w-5 text-[#720026]" />
              </div>
              <h3 className="font-bold text-[#1A1A1A] text-sm mb-1">হটলাইন ও অনলাইন হেল্প</h3>
              <p className="text-xs text-neutral-600 mb-2">যেকোনো প্রশ্ন বা অর্ডারের জন্য:</p>
              <a
                href={`tel:${BUSINESS.PHONE}`}
                className="text-xs text-[#1A1A1A] font-bold hover:underline block"
              >
                {BUSINESS.PHONE}
              </a>
              <a
                href={`tel:${BUSINESS.PHONE_ALT}`}
                className="text-xs text-[#1A1A1A] font-bold hover:underline block mt-0.5"
              >
                {BUSINESS.PHONE_ALT}
              </a>
              <a
                href={BUSINESS.WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-emerald-600 font-bold hover:underline block mt-1.5"
              >
                Direct WhatsApp Chat
              </a>
              <a
                href={BUSINESS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#720026] font-semibold hover:underline block mt-1"
              >
                facebook.com/tazeensbd
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-8 bg-[#720026] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#50001B] transition-all duration-300 rounded-full shadow-md active:scale-[0.98]"
            >
              Contact Us Page →
            </Link>
            <Link
              href="/delivery-info"
              className="inline-flex items-center justify-center h-12 px-8 bg-white text-[#1A1A1A] border border-[#E8DFD5] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#FAF7F2] hover:border-[#D4AF37] transition-all duration-300 rounded-full shadow-xs active:scale-[0.98]"
            >
              Delivery & Open Parcel Info
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
