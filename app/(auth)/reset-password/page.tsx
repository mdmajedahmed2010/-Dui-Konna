import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { ResetPasswordForm } from "@/components/auth/reset-password-form";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Reset Password | ${BUSINESS.NAME}`,
  description: `Set a new password for your ${BUSINESS.NAME} account.`,
};

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-[#FAF6F0]">
      <div className="w-full max-w-md space-y-8 bg-white p-8 md:p-10 rounded-2xl border border-[#E8DFD5] shadow-sm">
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
          <h1 className="text-xl font-bold text-[#1A1A1A] font-serif">Set a New Password</h1>
          <p className="text-xs text-neutral-500">
            Choose a strong password for your account
          </p>
        </div>

        <Suspense fallback={<div className="text-center text-xs text-neutral-500">Loading reset form...</div>}>
          <ResetPasswordForm />
        </Suspense>

        <p className="text-center text-xs text-neutral-500">
          Remembered your password?{" "}
          <Link
            href="/login"
            className="font-bold text-[#6B1D2F] hover:underline underline-offset-4"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
