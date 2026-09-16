/**
 * Blossom — JSON-LD Structured Data Components
 * SOP §৭ — SEO (Organization, BreadcrumbList, Product schemas)
 */

import { BUSINESS } from "@/lib/constants";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BUSINESS.NAME,
    url: BUSINESS.WEBSITE,
    logo: `${BUSINESS.WEBSITE}/logo.jpg`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS.PHONE,
      contactType: "customer service",
      areaServed: "BD",
      availableLanguage: ["English", "Bengali"],
    },
    sameAs: [BUSINESS.FACEBOOK, BUSINESS.INSTAGRAM, BUSINESS.YOUTUBE].filter(Boolean),
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.ADDRESS,
      addressLocality: "Uttara, Dhaka",
      postalCode: "1230",
      addressCountry: "BD",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: BUSINESS.NAME,
    image: `${BUSINESS.WEBSITE}/logo.jpg`,
    url: BUSINESS.WEBSITE,
    telephone: BUSINESS.PHONE,
    priceRange: "৳৳",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.ADDRESS,
      addressLocality: "Uttara, Dhaka",
      postalCode: "1230",
      addressCountry: "BD",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.8759,
      longitude: 90.3795,
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
          "Thursday"
        ],
        opens: "10:30",
        closes: "21:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "15:00",
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
        item: "https://moccasin-bat-178323.hostingersite.com",
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        ...(item.url && {
          item: `https://moccasin-bat-178323.hostingersite.com${item.url}`,
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
