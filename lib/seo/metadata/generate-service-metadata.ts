import { Metadata } from "next";

import {
  GLOBAL_SEO_KEYWORDS,
  GEO_SEO_KEYWORDS,
  PROFESSIONAL_KEYWORDS,
  ENTERPRISE_KEYWORDS,
  INTENT_KEYWORDS,
  ENGINEERING_KEYWORDS,
  STREAMING_KEYWORDS,
  STUDIO_KEYWORDS,
  EVENT_KEYWORDS,
  RENTAL_KEYWORDS,
  AUTHORITY_KEYWORDS,
  NETWORK_KEYWORDS,
  MEDIA_TECH_KEYWORDS,
  FUTURE_KEYWORDS,
} from "@/lib/seo";

import {
  serviceSeoMap,
  ServiceSlug,
} from "../service-seo-map";

export function generateServiceMetadata(
  slug: ServiceSlug
): Metadata {
  const seo = serviceSeoMap[slug];

  const keywords = [
    ...GLOBAL_SEO_KEYWORDS,
    ...GEO_SEO_KEYWORDS,
    ...PROFESSIONAL_KEYWORDS,
    ...ENTERPRISE_KEYWORDS,
    ...INTENT_KEYWORDS,
    ...ENGINEERING_KEYWORDS,
    ...STREAMING_KEYWORDS,
    ...STUDIO_KEYWORDS,
    ...EVENT_KEYWORDS,
    ...RENTAL_KEYWORDS,
    ...AUTHORITY_KEYWORDS,
    ...NETWORK_KEYWORDS,
    ...MEDIA_TECH_KEYWORDS,
    ...FUTURE_KEYWORDS,
    ...seo.keywords,
  ];

  return {
    title: seo.title,

    description: seo.description,

    keywords,

    alternates: {
      canonical: `https://mediaflix.id/services/${slug}`,
    },

    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `https://mediaflix.id/services/${slug}`,
      siteName: "MEDIAFLIX",
      type: "website",
      locale: "en_US",
    },

    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },

    robots: {
      index: true,
      follow: true,

      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}