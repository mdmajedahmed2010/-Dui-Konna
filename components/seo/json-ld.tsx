/**
 * Shopping Queen by Orni — JSON-LD Structured Data Components
 * SEO (Organization, BreadcrumbList, Product schemas)
 */

import { BUSINESS } from "@/lib/constants";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BUSINESS.NAME,
    url: BUSINESS.WEBSITE,
    logo: `${BUSINESS.WEBSITE}/shoppingqueen-assets/logo.avif`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS.PHONE,
      contactType: "customer service",
      areaServed: "BD",
      availableLanguage: ["Bengali", "English"],
    },
    sameAs: [BUSINESS.FACEBOOK, BUSINESS.INSTAGRAM, BUSINESS.YOUTUBE].filter(Boolean),
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.ADDRESS,
      addressLocality: "Dhaka",
      postalCode: "1200",
      addressCountry: "BD",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: BUSINESS.NAME,
    image: `${BUSINESS.WEBSITE}/shoppingqueen-assets/logo.avif`,
    url: BUSINESS.WEBSITE,
    telephone: BUSINESS.PHONE,
    priceRange: "৳৳",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.ADDRESS,
      addressLocality: "Dhaka",
      postalCode: "1200",
      addressCountry: "BD",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Saturday",
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        opens: "10:00",
        closes: "22:00"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}

export function WebsiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BUSINESS.NAME,
    url: BUSINESS.WEBSITE,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BUSINESS.WEBSITE}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbJsonLdProps {
  items: { name: string; url?: string }[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BUSINESS.WEBSITE,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        ...(item.url && {
          item: `${BUSINESS.WEBSITE}${item.url}`,
        }),
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
