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

// Global metadata — Dui Konna (দুই কন্যা)
export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.WEBSITE),
  title: {
    default: "Dui Konna (দুই কন্যা) — এক্সক্লুসিভ ঢাকাই মসলিন ও জামদানি শাড়ি",
    template: "%s — Dui Konna (দুই কন্যা)",
  },
  description:
    "দুই কন্যা (Dui Konna) — আমাদের রয়েছে ঢাকাই মসলিন শাড়ির সবচেয়ে অনন্য কালেকশন। খাঁটি ঢাকাই মসলিন, ঐতিহ্যবাহী জামদানি, ব্রাইডাল রেড মসলিন ও এক্সক্লুসিভ কারচুপি পোশাক। ৪৮৪,০০০+ আপুদের ভরসা। শোরুম: নিকুঞ্জ-২, খিলক্ষেত, ঢাকা। সারাদেশে ক্যাশ অন হোম ডেলিভারি ও পার্সেল খুলে চেক করে পেমেন্ট করার নিশ্চিন্ত সুবিধা।",
  keywords: [
    "Dui Konna",
    "দুই কন্যা",
    "duikonna01",
    "Shamima Nasrin",
    "শামীমা নাসরিন",
    "Muslin Saree Dhaka",
    "ঢাকাই মসলিন শাড়ি",
    "Dhakai Jamdani Saree",
    "ঢাকাই জামদানি শাড়ি",
    "Bridal Red Muslin Saree",
    "Karchupi Saree BD",
    "Nikunja 2 Dui Konna Showroom",
    "Dui Konna Facebook Page",
  ],
  authors: [{ name: "Dui Konna" }],
  creator: "Dui Konna",
  openGraph: {
    type: "website",
    locale: "bn_BD",
    siteName: "Dui Konna",
    title: "Dui Konna (দুই কন্যা) — এক্সক্লুসিভ ঢাকাই মসলিন ও জামদানি শাড়ি",
    description:
      "আমাদের রয়েছে মসলিন শাড়ির সবচেয়ে অনন্য কালেকশন। নিকুঞ্জ-২ শোরুম ও অনলাইন হোম ডেলিভারি। পার্সেল খুলে চেক করে পেমেন্ট করার ১০০% নিশ্চিন্ত সুবিধা।",
    images: ["/duikonna-assets/banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Dui Konna",
  },
};

export const viewport: Viewport = {
  themeColor: "#8B0000",
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

