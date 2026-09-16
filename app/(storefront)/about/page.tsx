import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, MapPin, Phone, ShieldCheck, Heart, Award } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { ASSETS } from "@/lib/demo-data";

export const metadata: Metadata = {
  title: "About Us | Closet by Tanzz",
  description:
    "Discover Closet by Tanzz — International Luxury Collection & Highest Quality Women's Fashion with our flagship showroom at Natore Tower (2nd Floor, Lift-2, Shop 12), Rajlokkhi, Sector 3, Uttara, Dhaka.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 bg-[#121212] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.22),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A059]/40 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#C5A059]" />
            <span className="text-[10.5px] uppercase tracking-[0.25em] text-[#C5A059] font-bold">
              আমাদের পরিচিতি • ABOUT US
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight font-heading mb-4 text-white">
            Closet by Tanzz
          </h1>
          <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-sans max-w-2xl mx-auto">
            {BUSINESS.TAGLINE} — International Luxury Collection & Highest Quality Women&apos;s Fashion. Operating our physical showroom at Natore Tower, Rajlokkhi, Uttara, Dhaka with an honest Open Parcel Policy.
          </p>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Brand Photo */}
          <div className="lg:col-span-6 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-[#E8DFD5] bg-neutral-900">
            <Image
              src={ASSETS.img2}
              alt="Closet by Tanzz Uttara Boutique Showroom"
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#121212]/95 backdrop-blur-md border border-[#C5A059]/40 px-5 py-3 rounded-xl text-white shadow-lg">
              <p className="text-[9px] uppercase tracking-[0.22em] font-bold text-[#C5A059] flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#C5A059]" />
                FLAGSHIP SHOWROOM
              </p>
              <p className="text-xs font-semibold mt-0.5">{BUSINESS.ADDRESS}</p>
            </div>
          </div>

          {/* Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#121212] font-bold">
                আমাদের দর্শন • OUR PHILOSOPHY
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-[#121212] font-heading leading-tight">
                Wear Tanzz, Wear Confidence
              </h2>
            </div>

            <div className="border-l-2 border-[#C5A059] pl-4 py-1 text-[#121212] italic text-sm font-serif">
              &ldquo;We believe elegance begins when comfort meets craftsmanship. Every ensemble we curate reflects uncompromising quality and contemporary poise.&rdquo;
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed">
              ঢাকার উত্তরার প্রাণকেন্দ্র রাজলক্ষ্মীর নাটোরে টাওয়ারে (লিফট-২, ৩য় তলা, শপ ১২) আমাদের নিজস্ব ফ্ল্যাগশিপ শোরুম এবং অনলাইনে ৫১,০০০+ ফলোয়ারের সক্রিয় ফেসবুক পরিবারের মাধ্যমে Closet by Tanzz আজ বাংলাদেশের নারীদের ফ্যাশনে এক অত্যন্ত বিশ্বস্ত ও সমাদৃত নাম।
            </p>

            <p className="text-sm text-neutral-600 leading-relaxed">
              আমরা Zam Zam Lawn, Designer Boutique Three-Piece, Party & Festive Couture এবং Artisan Block Print কালেকশন সরাসরি বিশ্বস্ত সোর্স থেকে নিয়ে আসি। ক্রেতাদের পূর্ণ নিশ্চিন্ততার জন্য আমাদের প্রতিটি অর্ডারে রয়েছে <strong className="text-[#121212]">Open Parcel Policy</strong> — পার্সেল গ্রহণের পূর্বে ডেলিভারিম্যানের সামনে কাপড়, ফিনিশিং ও রঙ দেখে নেওয়ার শতভাগ সুবিধা।
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-[#E8DFD5]">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#121212]">51K+</p>
                <p className="text-[10px] uppercase tracking-wide text-neutral-500 font-bold mt-1">
                  FB Family
                </p>
              </div>
              <div className="text-center border-x border-[#E8DFD5]">
                <p className="text-2xl font-bold text-[#121212]">100%</p>
                <p className="text-[10px] uppercase tracking-wide text-neutral-500 font-bold mt-1">
                  Quality Guaranteed
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#121212]">Open Parcel</p>
                <p className="text-[10px] uppercase tracking-wide text-neutral-500 font-bold mt-1">
                  COD Check
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
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#121212] font-bold mb-2">
              আমাদের সিগনেচার কালেকশন
            </p>
            <h2 className="text-3xl font-bold text-[#121212] font-heading">Curated Categories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                name: "Zam Zam Lawn 3-Piece",
                desc: "Breathable pure lawn three-piece sets with vivid color fastness and feather-light dupattas.",
                img: ASSETS.img4,
                href: "/collections/zam-zam-lawn",
              },
              {
                name: "Designer Boutique Pret",
                desc: "Fine neckline embroidery, luxury threadwork, and artisanal cuts for elevated wear.",
                img: ASSETS.img2,
                href: "/collections/designer-boutique",
              },
              {
                name: "Festive & Party Wear",
                desc: "Opulent party sets, royal color palettes, and rich dupattas perfect for special occasions.",
                img: ASSETS.img3,
                href: "/collections/festive-party",
              },
              {
                name: "Artisan Block Prints",
                desc: "Traditional block craftsmanship reimagined with botanical and contemporary motifs.",
                img: ASSETS.img1,
                href: "/collections/artisan-block",
              },
              {
                name: "Casual Chic Co-ords",
                desc: "Everyday luxury two-piece and three-piece cotton suits for effortless style.",
                img: ASSETS.img6,
                href: "/collections/casual-chic",
              },
              {
                name: "Showroom Exclusives",
                desc: "Special seasonal drops and limited-edition ensembles available at our Uttara showroom.",
                img: ASSETS.img8,
                href: "/collections/new-arrivals",
              },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-xs hover:shadow-lg transition-all duration-300 border border-[#E8DFD5] hover:border-[#121212]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/70 via-transparent to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[#121212] text-sm mb-1">{item.name}</h3>
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
          <h2 className="text-3xl font-bold text-[#121212] mb-4 font-heading">সরাসরি শোরুমে আসুন অথবা যোগাযোগ করুন</h2>
          <p className="text-neutral-600 mb-10 max-w-xl mx-auto text-sm">
            আমাদের এক্সক্লুসিভ কালেকশন উপভোগ করতে উত্তরা শোরুমে ভিজিট করুন। সরাসরি WhatsApp বা Facebook-এ অর্ডার করুন অথবা ওয়েবসাইট থেকে সহজে চেকআউট করুন।
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#E8DFD5] shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#FAF8F5] text-[#121212] border border-[#C5A059]/40 flex items-center justify-center mx-auto mb-3">
                <MapPin className="h-5 w-5 text-[#C5A059]" />
              </div>
              <h3 className="font-bold text-[#121212] text-sm mb-2">শোরুমের ঠিকানা</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {BUSINESS.ADDRESS}
              </p>
              <p className="text-[11px] text-[#121212] font-semibold mt-2">
                {BUSINESS.STORE_HOURS}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E8DFD5] shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#FAF8F5] text-[#121212] border border-[#C5A059]/40 flex items-center justify-center mx-auto mb-3">
                <Phone className="h-5 w-5 text-[#C5A059]" />
              </div>
              <h3 className="font-bold text-[#121212] text-sm mb-2">ফোন ও WhatsApp</h3>
              <a
                href={`tel:${BUSINESS.PHONE}`}
                className="text-xs text-[#121212] font-bold hover:underline block"
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
              <div className="w-10 h-10 rounded-full bg-[#FAF8F5] text-[#121212] border border-[#C5A059]/40 flex items-center justify-center mx-auto mb-3">
                <svg className="h-5 w-5 text-[#C5A059]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#121212] text-sm mb-2">Facebook Page</h3>
              <a
                href={BUSINESS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#121212] font-bold hover:underline"
              >
                facebook.com/Closetbytanzz
              </a>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-10 bg-[#121212] text-[#C5A059] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#222222] transition-all duration-300 rounded-full shadow-md border border-[#C5A059]/40 active:scale-[0.98]"
            >
              Contact Us Page →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
