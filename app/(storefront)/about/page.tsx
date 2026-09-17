import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, MapPin, Phone, ShieldCheck, Heart, Award, CheckCircle2, Truck } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { ASSETS } from "@/lib/demo-data";

export const metadata: Metadata = {
  title: `About Us | ${BUSINESS.NAME} — Authentic Pakistani Attires`,
  description:
    "Discover 365 Fashion House (৩৬৫ ফ্যাশন হাউস) — Bangladesh's premier destination for 100% authentic Pakistani designer lawn, festive couture, organza pret, and luxury velvet ensembles. Based in Dhaka - 1206 with transparent Open Parcel delivery nationwide.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 bg-[#191426] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,172,13,0.18),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AC0D]/40 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#F39C12]" />
            <span className="text-[10.5px] uppercase tracking-[0.25em] text-[#D4AC0D] font-bold">
              আমাদের পরিচিতি • ABOUT US
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight font-heading mb-4 text-white">
            {BUSINESS.NAME}
          </h1>
          <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-sans max-w-2xl mx-auto">
            {BUSINESS.TAGLINE} — বাংলাদেশে ১০০% অথেনটিক পাকিস্তানি ড্রেস, লাক্সারি লন এবং এক্সক্লুসিভ পার্টি পোশাকের বিশ্বস্ত অনলাইন ফ্যাশন হাউজ। বিশ্বস্ত ওপেন পার্সেল পলিসি ও হোম ডেলিভারি সুবিধা সহ।
          </p>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Brand Photo */}
          <div className="lg:col-span-6 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-[#E8DFD5] bg-[#191426]">
            <Image
              src="/365-assets/banner.png"
              alt="365 Fashion House Authentic Pakistani Collection"
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#191426]/95 backdrop-blur-md border border-[#D4AC0D]/40 px-5 py-3 rounded-xl text-white shadow-lg">
              <p className="text-[9px] uppercase tracking-[0.22em] font-bold text-[#F39C12] flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#F39C12]" />
                HEADQUARTERS & DISTRIBUTION HUB
              </p>
              <p className="text-xs font-semibold mt-0.5">{BUSINESS.ADDRESS}</p>
            </div>
          </div>

          {/* Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#6C3483] font-bold">
                আমাদের দর্শন • OUR HERITAGE & MISSION
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-[#191426] font-heading leading-tight">
                Authentic Pakistani Splendor, Crafted for You
              </h2>
            </div>

            <div className="border-l-3 border-[#D4AC0D] pl-4 py-1.5 text-[#6C3483] italic text-sm font-serif bg-purple-50/50 rounded-r-lg">
              &ldquo;We bridge Pakistani haute couture artistry directly with fashion-conscious women in Bangladesh, ensuring pure original fabrics, intricate embroidery, and unmatched elegance.&rdquo;
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed">
              <strong>{BUSINESS.NAME}</strong> ({BUSINESS.NAME_BN}) দীর্ঘদিন ধরে বাংলাদেশের ফ্যাশন প্রিয় বোনেদের কাছে ১০০% অরিজিনাল পাকিস্তানি থ্রি-পিস ও লাক্সারি পোশাক পৌঁছে দিতে নিষ্ঠার সাথে কাজ করছে। আমাদের ফেসবুক পেজে ৫৮,০০০+ বিশ্বস্ত পরিবারের আস্থাই আমাদের সবচেয়ে বড় শক্তি।
            </p>

            <p className="text-sm text-neutral-600 leading-relaxed">
              Khaadi, Maria.B, Agha Noor, Mahee&apos;s, Sana Safinaz সহ শীর্ষস্থানীয় পাকিস্তানি ব্র্যান্ডের প্রিমিয়াম লাক্সারি লন, ডিজিটাল প্রিন্ট ও অর্গানজা কুর্তি আমরা সরাসরি আমদানি করি। সম্মানিত গ্রাহকদের শতভাগ নিশ্চিন্ত রাখতে আমরা বজায় রাখি কঠোর <strong className="text-[#6C3483]">Open Parcel Policy</strong> — পার্সেল হাতে পেয়ে ডেলিভারিম্যানের সামনে দেখে নিশ্চিত হয়ে মূল্য পরিশোধ করুন।
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-[#E8DFD5]">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#6C3483]">58K+</p>
                <p className="text-[10px] uppercase tracking-wide text-neutral-500 font-bold mt-1">
                  FB Community
                </p>
              </div>
              <div className="text-center border-x border-[#E8DFD5]">
                <p className="text-2xl font-bold text-[#D4AC0D]">100%</p>
                <p className="text-[10px] uppercase tracking-wide text-neutral-500 font-bold mt-1">
                  Authentic Import
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#6C3483]">Open Parcel</p>
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
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#6C3483] font-bold mb-2">
              আমাদের সিগনেচার পাকিস্তানি কালেকশন
            </p>
            <h2 className="text-3xl font-bold text-[#191426] font-heading">Curated Attires</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                name: "Pakistani Luxury Lawn 3-Piece",
                desc: "Breathable pure Swiss lawn ensembles with cutwork dupattas and vivid floral aesthetics.",
                img: "/365-assets/lilac-lawn-suit.jpg",
                href: "/collections/pakistani-lawn",
              },
              {
                name: "Designer Festive & Party Wear",
                desc: "Opulent micro-velvet, pure chiffon zari threadwork, and royal crimson couture.",
                img: "/365-assets/royal-maroon-velvet.jpg",
                href: "/collections/festive-party",
              },
              {
                name: "Agha Noor Organza Pret",
                desc: "Handcrafted necklines, pearl embellishments, and artisanal pastel luxury kurtis.",
                img: "/365-assets/pistachio-kurti.jpg",
                href: "/collections/organza-chiffon",
              },
              {
                name: "Khaadi Signature Lawn",
                desc: "Refreshing mint hues, botanical foliage prints, and lightweight cotton voil dupattas.",
                img: "/365-assets/mint-lawn-front.jpg",
                href: "/collections/pakistani-lawn",
              },
              {
                name: "Velvet & Silk Couture",
                desc: "Rich winter party collections with intricate golden zardozi and thread embroidery.",
                img: "/365-assets/velvet-suit-fabric.jpg",
                href: "/collections/silk-velvet",
              },
              {
                name: "Designer Pret Kurti & Co-ords",
                desc: "Sophisticated everyday luxury for ladies seeking comfort and Pakistani styling.",
                img: "/365-assets/beechtree-blush-lawn.jpg",
                href: "/collections/designer-pret",
              },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-xs hover:shadow-lg transition-all duration-300 border border-[#E8DFD5] hover:border-[#6C3483]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#191426]/75 via-transparent to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[#191426] text-sm mb-1 group-hover:text-[#6C3483] transition-colors">{item.name}</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Ordering Information */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#191426] mb-4 font-heading">যোগাযোগ ও অর্ডার করার নিয়ম</h2>
          <p className="text-neutral-600 mb-10 max-w-xl mx-auto text-sm">
            ওয়েবসাইট থেকে সরাসরি কার্টে যুক্ত করে চেকআউট করুন, অথবা যেকোনো তথ্য ও বিশেষ কালেকশনের জন্য আমাদের অফিসিয়াল WhatsApp বা Facebook ইনবক্সে নক দিন।
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#E8DFD5] shadow-xs">
              <div className="w-10 h-10 rounded-full bg-purple-50 text-[#6C3483] border border-[#6C3483]/20 flex items-center justify-center mx-auto mb-3">
                <MapPin className="h-5 w-5 text-[#6C3483]" />
              </div>
              <h3 className="font-bold text-[#191426] text-sm mb-2">অফিস ও হাবের ঠিকানা</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {BUSINESS.ADDRESS}
              </p>
              <p className="text-[11px] text-[#6C3483] font-semibold mt-2">
                {BUSINESS.STORE_HOURS}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E8DFD5] shadow-xs">
              <div className="w-10 h-10 rounded-full bg-purple-50 text-[#6C3483] border border-[#6C3483]/20 flex items-center justify-center mx-auto mb-3">
                <Phone className="h-5 w-5 text-[#6C3483]" />
              </div>
              <h3 className="font-bold text-[#191426] text-sm mb-2">হটলাইন ও WhatsApp</h3>
              <a
                href={`tel:${BUSINESS.PHONE}`}
                className="text-xs text-[#191426] font-bold hover:underline block"
              >
                {BUSINESS.PHONE}
              </a>
              <a
                href={BUSINESS.WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-emerald-600 font-bold hover:underline block mt-1"
              >
                Direct WhatsApp Chat
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E8DFD5] shadow-xs">
              <div className="w-10 h-10 rounded-full bg-purple-50 text-[#6C3483] border border-[#6C3483]/20 flex items-center justify-center mx-auto mb-3">
                <svg className="h-5 w-5 text-[#6C3483]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#191426] text-sm mb-2">Facebook Community</h3>
              <a
                href={BUSINESS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#6C3483] font-bold hover:underline"
              >
                facebook.com/365FashionHouse
              </a>
              <p className="text-[11px] text-neutral-500 mt-1">৫১K+ থেকে ৫৮K+ সক্রিয় বোনদের পরিবার</p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-8 bg-[#6C3483] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#5B2C6F] transition-all duration-300 rounded-full shadow-md active:scale-[0.98]"
            >
              Contact Us Page →
            </Link>
            <Link
              href="/delivery-info"
              className="inline-flex items-center justify-center h-12 px-8 bg-white text-[#6C3483] border border-[#6C3483]/30 text-xs font-bold uppercase tracking-[0.2em] hover:bg-purple-50 transition-all duration-300 rounded-full shadow-xs active:scale-[0.98]"
            >
              Delivery & Open Parcel Info
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
