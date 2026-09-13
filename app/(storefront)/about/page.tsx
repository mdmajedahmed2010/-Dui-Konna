import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, MapPin, Phone, ShieldCheck, Heart, Award } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { ASSETS } from "@/lib/demo-data";

export const metadata: Metadata = {
  title: "About Us | 3 sis xclusive",
  description:
    "Discover 3 sis xclusive — Authentic Pakistani Luxury Lawn, Designer Pret, and Festive Couture with our physical outlet at Parents View 1st Floor, 20 Nayasarak Point, Sylhet.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#faf7f5]">
      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 bg-[#8B263E] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.18),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span className="text-[10.5px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold">
              আমাদের পরিচিতি • ABOUT US
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight font-heading mb-4 text-white">
            3 sis xclusive
          </h1>
          <p className="text-sm md:text-base text-neutral-200 leading-relaxed font-sans max-w-2xl mx-auto">
            Sylhet&apos;s premier destination for 100% original Pakistani luxury lawn, designer festive pret, regal velvet, and boutique jewelry — operating our flagship outlet at Nayasarak Point with an honest Open Parcel Policy.
          </p>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Brand Photo */}
          <div className="lg:col-span-6 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-[#ebdcd0] bg-neutral-900">
            <Image
              src={ASSETS.img2}
              alt="3 sis xclusive Sylhet Boutique Outlet"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#8B263E]/95 backdrop-blur-md border border-[#D4AF37]/40 px-5 py-3 rounded-xl text-white shadow-lg">
              <p className="text-[9px] uppercase tracking-[0.22em] font-bold text-[#D4AF37] flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#D4AF37]" />
                FLAGSHIP OUTLET
              </p>
              <p className="text-xs font-semibold mt-0.5">Parents View (1st Floor), 20 Nayasarak Point, Sylhet</p>
            </div>
          </div>

          {/* Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#8B263E] font-bold">
                আমাদের দর্শন • OUR MISSION
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-[#1e1622] font-heading leading-tight">
                Authentic Pakistani Luxury, Delivered With Trust
              </h2>
            </div>

            <div className="border-l-2 border-[#D4AF37] pl-4 py-1 text-[#8B263E] italic text-sm font-serif">
              &ldquo;We don&apos;t just sell dresses; we curate heirloom Pakistani garments and welcome every customer with complete transparency.&rdquo;
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed">
              সিলেটের প্রাণকেন্দ্র নয়াসড়ক পয়েন্টে আমাদের নিজস্ব ফ্ল্যাগশিপ আউটলেট (Parents View 1st Floor) এবং অনলাইনে ৫৩,০০০+ সদস্যের সক্রিয় ফেসবুক পরিবারের মাধ্যমে 3 sis xclusive আজ এক বিশ্বস্ত নাম। আমরা সরাসরি পাকিস্তান থেকে আসল Aghanoor, Sadabahar, Gul Ahmed, Maria.B ও Sana Safinaz-এর এক্সক্লুসিভ কালেকশন সংগ্রহ করি।
            </p>

            <p className="text-sm text-neutral-600 leading-relaxed">
              অনলাইনে কেনাকাটায় বিশ্বাস বাড়াতে আমাদের প্রতিটি ডেলিভারিতে রয়েছে <strong className="text-[#8B263E]">Open Parcel Policy</strong> — পার্সেল হাতে পেয়ে ডেলিভারিম্যানের সামনে কাপড়, এম্ব্রয়ডারি ও সাইজ মিলিয়ে দেখে তারপর টাকা পরিশোধের শতভাগ নিশ্চয়তা।
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-[#ebdcd0]">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#8B263E]">53K+</p>
                <p className="text-[10px] uppercase tracking-wide text-neutral-500 font-bold mt-1">
                  FB Community
                </p>
              </div>
              <div className="text-center border-x border-[#ebdcd0]">
                <p className="text-2xl font-bold text-[#8B263E]">100%</p>
                <p className="text-[10px] uppercase tracking-wide text-neutral-500 font-bold mt-1">
                  Original Pret
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#8B263E]">Open Parcel</p>
                <p className="text-[10px] uppercase tracking-wide text-neutral-500 font-bold mt-1">
                  COD Check
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Collections */}
      <section className="py-16 bg-[#f5efe9] px-6 border-t border-[#ebdcd0]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#8B263E] font-bold mb-2">
              আমাদের সিগনেচার কালেকশন
            </p>
            <h2 className="text-3xl font-bold text-[#1e1622] font-heading">Boutique Curations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                name: "Pakistani Lawn 3-Piece",
                desc: "Original Sadabahar, Gul Ahmed, and Sana Safinaz printed & embroidered lawn sets.",
                img: ASSETS.img1,
                href: "/collections/pakistani-lawn",
              },
              {
                name: "Designer Luxury Pret",
                desc: "Intricate organza, chanderi silk, and zari work couture party wear.",
                img: ASSETS.img3,
                href: "/collections/designer-pret",
              },
              {
                name: "Party Wear & Gowns",
                desc: "Regal silhouettes, sequin work farsi suits, and bridal ready garments.",
                img: ASSETS.img4,
                href: "/collections/party-wear",
              },
              {
                name: "Casual Farsi & Kurtis",
                desc: "Comfortable two-piece stitched linen, lawn, and daily luxury tunics.",
                img: ASSETS.img6,
                href: "/collections/casual-wear",
              },
              {
                name: "Velvet Luxury",
                desc: "Deep royal micro velvet suits with authentic tilla and zardozi embellishments.",
                img: ASSETS.img5,
                href: "/collections/velvet-luxury",
              },
              {
                name: "Boutique Jewelry",
                desc: "Handcrafted kundan jhumkas, meenakari chokers, and festive statement pieces.",
                img: ASSETS.img2,
                href: "/collections/jewelry",
              },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-xs hover:shadow-lg transition-all duration-300 border border-[#ebdcd0] hover:border-[#8B263E]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e1622]/70 via-transparent to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[#1e1622] text-sm mb-1">{item.name}</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Outlet Visit */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1e1622] mb-4 font-heading">সরাসরি আউটলেটে আসুন অথবা যোগাযোগ করুন</h2>
          <p className="text-neutral-600 mb-10 max-w-xl mx-auto text-sm">
            আমাদের ১৭ বছরের বিশ্বস্ত সেবা এবং এক্সক্লুসিভ পাকিস্তানি কালেকশন উপভোগ করুন। সরাসরি WhatsApp বা Facebook-এ অর্ডার করুন অথবা ওয়েবসাইট থেকে সহজে চেকআউট করুন।
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#ebdcd0] shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#fdf5fa] text-[#8B263E] flex items-center justify-center mx-auto mb-3">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-[#1e1622] text-sm mb-2">আউটলেট ঠিকানা</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {BUSINESS.ADDRESS}
              </p>
              <p className="text-[11px] text-[#8B263E] font-semibold mt-2">
                Sat–Thu: 10:30 AM – 9:30 PM | Fri: 3:00 PM – 10:00 PM
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#ebdcd0] shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#fdf5fa] text-[#8B263E] flex items-center justify-center mx-auto mb-3">
                <Phone className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-[#1e1622] text-sm mb-2">ফোন ও WhatsApp</h3>
              <a
                href={`tel:${BUSINESS.PHONE}`}
                className="text-xs text-[#8B263E] font-bold hover:underline block"
              >
                {BUSINESS.PHONE}
              </a>
              <a
                href={BUSINESS.WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#25D366] font-bold hover:underline block mt-1"
              >
                Direct WhatsApp Chat
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#ebdcd0] shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#fdf5fa] text-[#8B263E] flex items-center justify-center mx-auto mb-3">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#1e1622] text-sm mb-2">Facebook Page</h3>
              <a
                href={BUSINESS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#8B263E] font-bold hover:underline"
              >
                facebook.com/3.sis.xclusive
              </a>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-10 bg-[#8B263E] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#5E182A] transition-all duration-300 rounded-full shadow-md border border-[#D4AF37]/40 active:scale-[0.98]"
            >
              Contact Us Page →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
