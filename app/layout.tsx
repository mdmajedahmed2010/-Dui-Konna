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

// Global metadata — Closet by Tanzz
export const metadata: Metadata = {
  metadataBase: new URL("https://closetbytanzz.com"),
  title: {
    default: "Closet by Tanzz — Wear Tanzz, Wear Confidence | Luxury Women's Fashion",
    template: "%s — Closet by Tanzz",
  },
  description:
    "Wear Tanzz, Wear confidence. Shop exclusive pure cotton Zam Zam lawn 3-piece sets, designer boutique suits, and festive luxury collections. Visit our flagship showroom at Natore Tower, Uttara, Dhaka or order online with Open Parcel Policy.",
  keywords: [
    "Closet by Tanzz",
    "Closet by Tanzz Uttara",
    "Zam Zam Lawn Bangladesh",
    "Pakistani Lawn Dhaka",
    "Designer Boutique Dhaka",
    "Three Piece Collection BD",
    "Women Fashion Uttara",
    "Luxury Pret BD",
  ],
  authors: [{ name: "Closet by Tanzz" }],
  creator: "Closet by Tanzz",
  openGraph: {
    type: "website",
    locale: "en_BD",
    siteName: "Closet by Tanzz",
    title: "Closet by Tanzz — Wear Tanzz, Wear Confidence",
    description:
      "Exclusive women's luxury fashion, Zam Zam lawn, designer three-piece suits, and festive collections. Flagship outlet at Natore Tower, Uttara. Nationwide Cash on Delivery with Open Parcel Policy.",
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
    title: "Closet by Tanzz",
  },
};

export const viewport: Viewport = {
  themeColor: "#C5A059",
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
          color="#C5A059"
          height={3}
          showSpinner={false}
          shadow="0 0 12px #C5A059, 0 0 6px #E6C280"
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
