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

// Global metadata — 365 Fashion House
export const metadata: Metadata = {
  metadataBase: new URL("https://365fashionhouse.com"),
  title: {
    default: "365 Fashion House — Pioneer in Authentic Pakistani Attires in Bangladesh",
    template: "%s — 365 Fashion House",
  },
  description:
    "365 Fashion House is the pioneer fashion house in Bangladesh for 100% authentic Pakistani & Indian designer attires. Explore luxury lawn 3-piece sets, organza & chiffon suits, ready-to-wear kurtis, and festive Eid collections with Open Parcel Policy.",
  keywords: [
    "365 Fashion House",
    "365 Fashion House Bangladesh",
    "Pakistani Lawn Dhaka",
    "Authentic Pakistani Suits Bangladesh",
    "Agha Noor Kurti BD",
    "Khaadi Luxury Lawn",
    "Pakistani Three Piece BD",
    "Women Designer Wear Dhaka",
    "Luxury Pret BD",
  ],
  authors: [{ name: "365 Fashion House" }],
  creator: "365 Fashion House",
  openGraph: {
    type: "website",
    locale: "en_BD",
    siteName: "365 Fashion House",
    title: "365 Fashion House — Pioneer in Authentic Pakistani Attires",
    description:
      "Shop 100% original Pakistani & Indian designer lawn, organza, chiffon, and festive couture. Nationwide Cash on Delivery with Open Parcel Inspection.",
    images: ["/banner.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "365 Fashion House",
  },
};

export const viewport: Viewport = {
  themeColor: "#6C3483",
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
          color="#6C3483"
          height={3}
          showSpinner={false}
          shadow="0 0 12px #6C3483, 0 0 6px #F39C12"
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
