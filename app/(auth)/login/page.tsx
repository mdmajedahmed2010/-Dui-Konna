/**
 * Shopping Queen by Orni — Login Page
 * Route: /login
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { LoginForm } from "@/components/auth/login-form";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Login | ${BUSINESS.NAME}`,
  description: `Sign in to your ${BUSINESS.NAME} account.`,
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-[#FAF6F0]">
      <div className="w-full max-w-md space-y-8 bg-white p-8 md:p-10 rounded-2xl border border-[#E8DFD5] shadow-sm">
        {/* Header */}
        <div className="text-center space-y-3">
          <Link href="/" className="inline-flex flex-col items-center gap-2 group">
            <div className="relative size-12 rounded-full overflow-hidden border border-[#D4AF37]/50 shadow-xs">
              <Image
                src="/shoppingqueen-assets/logo.avif"
                alt={BUSINESS.NAME}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-[#6B1D2F] font-serif group-hover:text-[#521322] transition-colors">
              {BUSINESS.NAME}
            </span>
          </Link>
          <h1 className="text-xl font-bold text-[#1A1A1A] font-serif">Welcome Back</h1>
          <p className="text-xs text-neutral-500">Sign in to your account to track orders and rewards</p>
        </div>

        {/* Login Form */}
        <Suspense
          fallback={
            <div className="space-y-4 animate-pulse">
              <div className="h-10 bg-muted/30 rounded-md" />
              <div className="h-10 bg-muted/30 rounded-md" />
              <div className="h-12 bg-muted/40 rounded-md" />
            </div>
          }
        >
          <LoginForm />
        </Suspense>

        {/* Register Link */}
        <p className="text-center text-xs text-neutral-500">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-bold text-[#6B1D2F] hover:underline underline-offset-4"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
