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

// Global metadata — Ash and Aspen
export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.WEBSITE),
  title: {
    default: "Ash and Aspen — Authentic Pakistani Attires & Designer Wear",
    template: "%s — Ash and Aspen",
  },
  description:
    "Ash and Aspen is an online marketplace portal committed to customer satisfaction by delivering 100% genuine Pakistani designer attire. Explore Gulaal luxury lawn, Nur festive organza, Sadabahar stitched pret, and formal collections with Open Parcel inspection across Bangladesh.",
  keywords: [
    "Ash and Aspen",
    "Ash and Aspen Bangladesh",
    "Ash and Aspen Clothing",
    "Pakistani Lawn Uttara",
    "Authentic Pakistani Suits Bangladesh",
    "Gulaal Luxury Lawn BD",
    "Nur Organza Kurti BD",
    "Sadabahar Pret BD",
    "Women Designer Wear Dhaka",
    "Pakistani Three Piece BD",
    "Luxury Pret BD",
  ],
  authors: [{ name: "Ash and Aspen" }],
  creator: "Ash and Aspen",
  openGraph: {
    type: "website",
    locale: "en_BD",
    siteName: "Ash and Aspen",
    title: "Ash and Aspen — Authentic Pakistani Attires & Luxury Designer Wear",
    description:
      "Shop 100% original Pakistani designer lawn, organza, chiffon, and festive couture. Nationwide Cash on Delivery with Open Parcel Inspection.",
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
    title: "Ash and Aspen",
  },
};

export const viewport: Viewport = {
  themeColor: "#E29578",
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

