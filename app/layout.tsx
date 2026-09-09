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

// Global metadata — Enaya's | Sylhet
export const metadata: Metadata = {
  title: {
    default: "Enaya's | Sylhet — Elevate Your Style | Luxury Pakistani Designer Boutique",
    template: "%s — Enaya's Sylhet",
  },
  description:
    "Elevate Your Style with Enaya's | Sylhet. Authentic Pakistani designer suits, pure lawn 3-piece sets, organza & georgette party wear, and luxury pret. Visit our outlet at Nayasarak Point, Sylhet or order online with Open Parcel Policy.",
  keywords: [
    "Enayas Sylhet",
    "Enaya's",
    "Pakistani Lawn Sylhet",
    "Pakistani Designer Suit Bangladesh",
    "Sadabahar Sylhet",
    "Party Wear Sylhet",
    "Nayasarak Boutique Sylhet",
    "Luxury Pret BD",
    "Enayas",
  ],
  authors: [{ name: "Enaya's | Sylhet" }],
  creator: "Enaya's | Sylhet",
  openGraph: {
    type: "website",
    locale: "en_BD",
    siteName: "Enaya's | Sylhet",
    title: "Enaya's | Sylhet — Elevate Your Style",
    description:
      "Authentic Pakistani designer suits, pure lawn collections, and luxury festive couture in Sylhet. Nationwide cash on delivery with Open Parcel inspection policy.",
    images: ["/banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Enaya's Sylhet",
  },
};

export const viewport: Viewport = {
  themeColor: "#3D0B3D",
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
          color="#8b1e3f"
          height={3}
          showSpinner={false}
          shadow="0 0 12px #8b1e3f, 0 0 6px #f7c8d0"
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
