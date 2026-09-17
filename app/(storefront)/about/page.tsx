import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, MapPin, Phone, ShieldCheck, Heart, Award, CheckCircle2, Truck, Mail } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { ASSETS } from "@/lib/demo-data";

export const metadata: Metadata = {
  title: `About Us | ${BUSINESS.NAME} — Authentic Pakistani Attires`,
  description:
    "Discover Ash and Aspen (অ্যাশ অ্যান্ড অ্যাসপেন) — Bangladesh's premier marketplace portal for 100% authentic Pakistani designer lawn, festive organza, luxury pret, and bespoke ensembles. Studio at Sector #13, Uttara, Dhaka with transparent Open Parcel delivery nationwide.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 bg-[#1A1A1A] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(226,149,120,0.22),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#E29578]/40 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#E29578]" />
            <span className="text-[10.5px] uppercase tracking-[0.25em] text-[#E29578] font-bold">
              আমাদের পরিচিতি • ABOUT US
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight font-heading mb-4 text-white">
            {BUSINESS.NAME}
          </h1>
          <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-sans max-w-2xl mx-auto">
            {BUSINESS.TAGLINE} — An online marketplace portal highly committed to ensuring customer satisfaction by delivering the best quality original Pakistani attires. Experience our signature Open Parcel inspection policy nationwide.
          </p>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Brand Photo */}
          <div className="lg:col-span-6 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-[#E8DFD5] bg-[#1A1A1A]">
            <Image
              src="/ash-and-aspen/banner.jpg"
              alt="Ash and Aspen Flagship Boutique Banner"
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#1A1A1A]/95 backdrop-blur-md border border-[#E29578]/40 px-5 py-3 rounded-xl text-white shadow-lg">
              <p className="text-[9px] uppercase tracking-[0.22em] font-bold text-[#E29578] flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#E29578]" />
                FLAGSHIP STUDIO & DISTRIBUTION HUB
              </p>
              <p className="text-xs font-semibold mt-0.5">{BUSINESS.ADDRESS}</p>
            </div>
          </div>

          {/* Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#484860] font-bold">
                আমাদের দর্শন • OUR HERITAGE & MISSION
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-[#1A1A1A] font-heading leading-tight">
                Authentic Pakistani Splendor, Delivered with Complete Trust
              </h2>
            </div>

            <div className="border-l-3 border-[#E29578] pl-4 py-2 text-[#484860] italic text-sm font-serif bg-orange-50/60 rounded-r-lg">
              &ldquo;Ash and Aspen is an online marketplace portal that is highly committed to ensuring customer satisfaction by delivering the best quality products.&rdquo;
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed">
              <strong>{BUSINESS.NAME}</strong> ({BUSINESS.NAME_BN}) দীর্ঘদিন ধরে বাংলাদেশের ফ্যাশন সচেতন নারীদের কাছে ১০০% অরিজিনাল পাকিস্তানি থ্রি-পিস, লাক্সারি লন এবং এক্সক্লুসিভ পার্টি পোশাক পৌঁছে দিতে কাজ করছে। আমাদের অফিসিয়াল ফেসবুক পেজে ৮১,০০০+ সক্রিয় শুভানুধ্যায়ী এবং ৯৬% পজিটিভ রেকমেন্ডেশন আমাদের সেবার নির্ভরযোগ্যতার প্রমাণ।
            </p>

            <p className="text-sm text-neutral-600 leading-relaxed">
              Gulaal, Nur, Sadabahar, Hz Collection এবং শীর্ষস্থানীয় পাকিস্তানি ডিজাইনার ব্র্যান্ডের প্রিমিয়াম কালেকশন আমরা সরাসরি সংগ্রহ করি। সম্মানিত গ্রাহকদের শতভাগ নিশ্চিন্ত রাখতে আমরা বজায় রাখি কঠোর <strong className="text-[#E29578]">Open Parcel Policy</strong> — পার্সেল হাতে পেয়ে ডেলিভারিম্যানের সামনে ড্রেসের কাপড় ও কাজ দেখে নিশ্চিত হয়ে মূল্য পরিশোধ করুন।
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-[#E8DFD5]">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#484860]">81K+</p>
                <p className="text-[10px] uppercase tracking-wide text-neutral-500 font-bold mt-1">
                  FB Family
                </p>
              </div>
              <div className="text-center border-x border-[#E8DFD5]">
                <p className="text-2xl font-bold text-[#E29578]">96%</p>
                <p className="text-[10px] uppercase tracking-wide text-neutral-500 font-bold mt-1">
                  Positive Rating
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#484860]">Open Parcel</p>
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
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#484860] font-bold mb-2">
              আমাদের সিগনেচার পাকিস্তানি কালেকশন
            </p>
            <h2 className="text-3xl font-bold text-[#1A1A1A] font-heading">Curated Attires</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                name: "Gulaal Luxury Lawn",
                desc: "Pure Swiss lawn ensembles with delicate resham thread embroidery and cutwork organza dupattas.",
                img: ASSETS.img1,
                href: "/collections/gulaal-luxury-lawn",
              },
              {
                name: "Nur Organza Butterfly Pret",
                desc: "Signature handcrafted back-embroidered butterfly couture in serene pastel shades.",
                img: ASSETS.img3,
                href: "/collections/nur-festive-organza",
              },
              {
                name: "Sadabahar Stitched 3-Piece",
                desc: "Taupe and slate blue tailored ready-to-wear outfits with authentic Pakistani stitching.",
                img: ASSETS.img2,
                href: "/collections/sadabahar-pret",
              },
              {
                name: "Ivory Chikankari Heavy Formals",
                desc: "Exquisite tone-on-tone chikankari craft on premium cotton-lawn with embroidered dupattas.",
                img: ASSETS.img4,
                href: "/collections/festive-luxury",
              },
              {
                name: "Crimson Ruby Velvet & Festive",
                desc: "Rich winter party collections with intricate golden zardozi, tilla, and royal embroideries.",
                img: ASSETS.img5,
                href: "/collections/festive-luxury",
              },
              {
                name: "Casual Lite & Ready-to-Wear",
                desc: "Sophisticated everyday luxury for women seeking breathable comfort and modest elegance.",
                img: ASSETS.img7,
                href: "/collections/casual-lite",
              },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-xs hover:shadow-lg transition-all duration-300 border border-[#E8DFD5] hover:border-[#E29578]"
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
                  <h3 className="font-bold text-[#1A1A1A] text-sm mb-1 group-hover:text-[#E29578] transition-colors">{item.name}</h3>
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
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4 font-heading">যোগাযোগ ও অর্ডার করার নিয়ম</h2>
          <p className="text-neutral-600 mb-10 max-w-xl mx-auto text-sm">
            ওয়েবসাইট থেকে সরাসরি কার্টে যুক্ত করে চেকআউট করুন, অথবা যেকোনো তথ্য ও ড্রেসের ছবির জন্য আমাদের অফিসিয়াল WhatsApp বা Facebook পেজে নক দিন।
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#E8DFD5] shadow-xs">
              <div className="w-10 h-10 rounded-full bg-orange-50 text-[#E29578] border border-[#E29578]/20 flex items-center justify-center mx-auto mb-3">
                <MapPin className="h-5 w-5 text-[#E29578]" />
              </div>
              <h3 className="font-bold text-[#1A1A1A] text-sm mb-2">শোরুম ও অফিস</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {BUSINESS.ADDRESS}
              </p>
              <p className="text-[11px] text-[#484860] font-semibold mt-2">
                {BUSINESS.STORE_HOURS}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E8DFD5] shadow-xs">
              <div className="w-10 h-10 rounded-full bg-orange-50 text-[#E29578] border border-[#E29578]/20 flex items-center justify-center mx-auto mb-3">
                <Phone className="h-5 w-5 text-[#E29578]" />
              </div>
              <h3 className="font-bold text-[#1A1A1A] text-sm mb-2">হটলাইন ও WhatsApp</h3>
              <a
                href={`tel:${BUSINESS.PHONE}`}
                className="text-xs text-[#1A1A1A] font-bold hover:underline block"
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
              <a
                href={`mailto:${BUSINESS.EMAIL}`}
                className="text-xs text-[#484860] hover:underline block mt-1"
              >
                {BUSINESS.EMAIL}
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E8DFD5] shadow-xs">
              <div className="w-10 h-10 rounded-full bg-orange-50 text-[#E29578] border border-[#E29578]/20 flex items-center justify-center mx-auto mb-3">
                <svg className="h-5 w-5 text-[#484860]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#1A1A1A] text-sm mb-2">Facebook Community</h3>
              <a
                href={BUSINESS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#484860] font-bold hover:underline"
              >
                facebook.com/ashandaspenclothing
              </a>
              <p className="text-[11px] text-neutral-500 mt-1">৮১K+ সক্রিয় অনুসারী ও ৯৬% রেটিং</p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-8 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#484860] transition-all duration-300 rounded-full shadow-md active:scale-[0.98]"
            >
              Contact Us Page →
            </Link>
            <Link
              href="/delivery-info"
              className="inline-flex items-center justify-center h-12 px-8 bg-white text-[#1A1A1A] border border-[#E8DFD5] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#FAF7F2] hover:border-[#E29578] transition-all duration-300 rounded-full shadow-xs active:scale-[0.98]"
            >
              Delivery & Open Parcel Info
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

