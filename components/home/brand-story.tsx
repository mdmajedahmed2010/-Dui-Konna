"use client";

/**
 * Blossom Clothing — Brand Story Component
 * Explore Your Style | Luxury Women's Fashion & Modest Wear
 * Dhaka, Bangladesh — https://www.facebook.com/blossomclothing195/
 */

import Link from "next/link";
import Image from "next/image";

export function BrandStory() {
  return (
    <section className="bg-[#fcf9fa] border-t border-[#8b1e3f]/15 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Photo */}
          <div className="lg:col-span-6 relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] rounded-sm overflow-hidden shadow-sm group reveal">
            <Image
              src="/blossom-assets/767161577_1062801416685993_5281384838796713463_n.jpg"
              alt="Blossom Clothing — Explore Your Style"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Blossom accent overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(247,200,208,0.15),transparent_50%)]" />
            {/* Heritage badge */}
            <div className="absolute bottom-5 left-5 bg-[#8b1e3f]/85 backdrop-blur-sm border border-[#f7c8d0]/40 px-4 py-2.5 rounded-sm">
              <p className="text-[#f7c8d0] text-[9.5px] uppercase tracking-[0.25em] font-bold">Blossom Clothing</p>
              <p className="text-white text-xs font-semibold mt-0.5">Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Right Side: Brand Narrative */}
          <div className="lg:col-span-6 space-y-6 lg:pl-8 reveal [transition-delay:200ms]">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#8b1e3f] font-bold">
              আমাদের গল্প • Our Story
            </p>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-[#1a0008] font-heading">
              Explore Your Style,
              <br />
              <span className="italic font-normal text-[#8b1e3f]/85">Curated with Feminine Grace</span>
            </h2>

            <div className="border-l-2 border-[#8b1e3f]/40 pl-4 py-1 text-[#8b1e3f] italic text-sm">
              &ldquo;Blossom Clothing brings contemporary co-ord sets, Dubai Cherry abayas, and chic modest fashion to empower your unique personal style.&rdquo;
            </div>

            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Blossom Clothing বাংলাদেশের ফ্যাশনসচেতন নারীদের জন্য নিয়ে এসেছে আধুনিক, রুচিশীল ও মার্জিত পোশাকের অনন্য সম্ভার। আমাদের প্রতিটি কো-অর্ড সেট, লাক্সারি অ্যাবায়া ও কাফতান তৈরিতে ব্যবহৃত হয় প্রিমিয়াম ও আরামদায়ক ফেব্রিক।
              </p>
              <p>
                যেকোনো উৎসব, ঘরোয়া আড্ডা কিংবা ক্যাজুয়াল আউটফিট — আমাদের কালেকশনগুলো অর্ডার করে সহজে ঘরে বসেই সারা দেশে ক্যাশ অন ডেলিভারিতে সংগ্রহ করতে পারেন।
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-[#8b1e3f]/20">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#8b1e3f]">15K+</p>
                <p className="text-[10px] uppercase tracking-wide text-muted-foreground font-semibold">Followers</p>
              </div>
              <div className="text-center border-x border-[#8b1e3f]/20">
                <p className="text-2xl font-bold text-[#8b1e3f]">98%</p>
                <p className="text-[10px] uppercase tracking-wide text-muted-foreground font-semibold">Positive Feedback</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#8b1e3f]">100%</p>
                <p className="text-[10px] uppercase tracking-wide text-muted-foreground font-semibold">Quality Assured</p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center justify-center h-12 px-8 bg-[#8b1e3f] text-[#fff8f9] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#6e142f] transition-all duration-300 rounded-sm shadow-luxury border border-[#f7c8d0]/40 active:scale-[0.98]"
              >
                আমাদের সম্পর্কে জানুন →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
