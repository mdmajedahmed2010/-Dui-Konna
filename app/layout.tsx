import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/seo/json-ld";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from "nextjs-toploader";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { CartSyncManager } from "@/components/cart/cart-sync-manager";
import { unstable_cache } from "next/cache";
import { ServiceWorkerRegistry } from "@/components/pwa/service-worker-registry";
import { PostHogProvider } from "@/components/analytics/posthog-provider";
import { BUSINESS } from "@/lib/constants";

// Body font — modern, geometric, luxury editorial clarity
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Heading font — high-fashion variable serif for luxury pret
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

// Global metadata — Shopping Queen by Orni
export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.WEBSITE),
  title: {
    default: "Shopping Queen by Orni — পাকিস্তানি লন, পার্টিওয়্যার ও স্কিনকেয়ার",
    template: "%s — Shopping Queen by Orni",
  },
  description:
    "Shopping Queen by Orni (শপিং কুইন বাই অর্নি) — দেশী-বিদেশী বিভিন্ন ব্র্যান্ডের মেয়েদের সালোয়ার কামিজ, এক্সক্লুসিভ পাকিস্তানি লন, পার্টিওয়্যার এবং Kim Whitening Pearl Cream। ১৯০,০০০+ আপুদের ভরসা। সারাদেশে ক্যাশ অন হোম ডেলিভারি ও পার্সেল খুলে চেক করে পেমেন্ট করার নিশ্চিন্ত সুবিধা।",
  keywords: [
    "Shopping Queen by Orni",
    "শপিং কুইন বাই অর্নি",
    "Orni Islam",
    "অর্ণি ইসলাম",
    "Pakistani Lawn Dhaka",
    "পাকিস্তানি লন বাংলাদেশ",
    "Partywear Salwar Kameez BD",
    "Kim Whitening Pearl Cream",
    "Snowlotus Cream Orni",
    "Chunri Three Piece BD",
    "Cotton Three Piece Online Dhaka",
    "Shopping Queen Facebook Page",
  ],
  authors: [{ name: "Shopping Queen by Orni" }],
  creator: "Shopping Queen by Orni",
  openGraph: {
    type: "website",
    locale: "bn_BD",
    siteName: "Shopping Queen by Orni",
    title: "Shopping Queen by Orni — পাকিস্তানি লন, পার্টিওয়্যার ও স্কিনকেয়ার",
    description:
      "দেশী-বিদেশী বিভিন্ন ব্র্যান্ডের মেয়েদের সালোয়ার কামিজ সুলভ মূল্যে। সারাদেশে ক্যাশ অন হোম ডেলিভারি ও পার্সেল চেক করে পেমেন্ট।",
    images: ["/shoppingqueen-assets/banner.avif"],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Shopping Queen",
  },
};

export const viewport: Viewport = {
  themeColor: "#6B1D2F",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const userId = session?.user?.id;

  const getFavicon = unstable_cache(
    async () => {
      try {
        const setting = await prisma.siteSetting.findUnique({
          where: { key: "store_favicon" },
        });
        if (setting && setting.value) {
          return String(setting.value).replace(/['"]/g, "");
        }
      } catch {
        console.error("Failed to load favicon setting");
      }
      return "/favicon.ico";
    },
    ["favicon_setting"],
    { revalidate: 3600, tags: ["site_settings"] }
  );

  const faviconUrl = await getFavicon();

  return (
    <html
      lang="en"
      className={cn("h-full", jakarta.variable, playfair.variable)}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href={faviconUrl} />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased bg-background text-foreground">
        <CartSyncManager userId={userId} />
        {/* Skip to main content — Accessibility (WCAG AA) */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <NextTopLoader
          color="#E29578"
          height={3}
          showSpinner={false}
          shadow="0 0 12px #E29578, 0 0 6px #484860"
        />
        {/* Structured Data — SEO (SOP §৭) */}
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        {children}
        <Toaster position="top-right" richColors closeButton />
        <PostHogProvider />
        <ServiceWorkerRegistry />
      </body>
    </html>
  );
}

