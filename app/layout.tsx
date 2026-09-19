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

// Global metadata — Tazeen's
export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.WEBSITE),
  title: {
    default: "Tazeen's — Smart & Elegant Heritage Sarees & Boutique Pret",
    template: "%s — Tazeen's",
  },
  description:
    "Tazeen's is a premier fashion boutique in Bangladesh specializing in exclusive sequin border sarees, royal katan & banarasi silk, designer three-piece salwar kameez, and artisan cotton collections. Showrooms at Pink City (Gulshan-2) & Sector 11 (Uttara), Dhaka.",
  keywords: [
    "Tazeen's",
    "Tazeen's Saree",
    "tazeensbd",
    "Tazeen's Bangladesh",
    "Pink City Gulshan Saree",
    "Uttara Boutique Dhaka",
    "Sequin Border Saree BD",
    "Bridal Katan Saree BD",
    "Boutique Three Piece BD",
    "Ajrakh Block Print 3-Piece",
    "Smart Elegant Saree Dhaka",
    "Linen Jamdani Saree",
  ],
  authors: [{ name: "Tazeen's" }],
  creator: "Tazeen's",
  openGraph: {
    type: "website",
    locale: "en_BD",
    siteName: "Tazeen's",
    title: "Tazeen's — Smart & Elegant Heritage Sarees & Boutique Pret",
    description:
      "Shop exclusive sequin border sarees, bridal katan, and boutique three-piece sets. Nationwide Cash on Delivery (৳80 Inside Dhaka) with open parcel inspection.",
    images: ["/tazeens-assets/hero-banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Tazeen's",
  },
};

export const viewport: Viewport = {
  themeColor: "#720026",
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

