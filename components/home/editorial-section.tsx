"use client";

/**
 * Shopping Queen by Orni — Short Brand Story Section (Homepage)
 * Authentic Pakistani Lawn, Festive Couture & Kim Pearl Skincare
 */

import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ASSETS } from "@/lib/demo-data";
import { BUSINESS } from "@/lib/constants";

export function EditorialSection() {
  return (
    <section className="py-16 md:py-24 bg-[#FAF6F0] relative border-y border-[#D4AF37]/20 overflow-hidden">
      <div className="absolute top-0 bottom-0 left-1/3 w-[1px] bg-[#D4AF37]/20 hidden lg:block" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px 0px" }}
        className="container mx-auto px-4 md:px-12 lg:px-16 max-w-7xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="lg:col-span-5 relative group"
          >
            <div className="absolute -inset-2 bg-[#D4AF37]/10 border border-[#D4AF37]/40 rounded-2xl -z-10 translate-x-3 translate-y-3 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100 shadow-md">
              <Image
                src="/shoppingqueen-assets/sq-product-03-rose-pink.jpg"
                alt="Shopping Queen by Orni — Exclusive Pakistani Lawn & Festive Couture"
                fill
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="lg:col-span-7 space-y-5 lg:pl-4"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#6B1D2F] animate-pulse" />
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#6B1D2F] font-bold">
                  ABOUT {BUSINESS.NAME.toUpperCase()}
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-[1.15] text-[#1A1A1A] font-serif">
                Dedicated to <span className="italic font-normal text-[#6B1D2F]">Timeless Pakistani Elegance</span>
              </h2>
            </div>

            <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
              {BUSINESS.NAME} ({BUSINESS.NAME_BN}) বাংলাদেশের ১৯০,০০০+ সম্মানিত কাস্টমারদের জন্য ১০০% অরিজিনাল পাকিস্তানি লন ৩-পিস, গর্জিয়াস পার্টিওয়্যার এবং খাঁটি থাই কিম স্নোলোটাস ও পার্ল ক্রিম সরবরাহ করে।
            </p>

            <div className="p-4 md:p-5 bg-white border-l-4 border-[#6B1D2F] rounded-xl shadow-xs">
              <p className="text-xs md:text-sm text-[#1A1A1A] leading-relaxed font-medium italic">
                &ldquo;ওপেন পার্সেল গ্যারান্টি: ডেলিভারিম্যানের সামনে প্যাকেট খুলে কাপড় ও রঙ দেখে নিশ্চিত হয়ে মূল্য পরিশোধ করুন।&rdquo;
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/collections"
                className="inline-flex items-center justify-center h-12 px-8 bg-[#6B1D2F] hover:bg-[#521322] text-white text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-full shadow-md border border-[#D4AF37]/40 active:scale-[0.98]"
              >
                Explore Collections
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] border-b-2 border-[#6B1D2F] hover:text-[#6B1D2F] pb-1 transition-all"
              >
                Read Our Story
                <ArrowRight className="h-3.5 w-3.5 text-[#6B1D2F]" />
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
