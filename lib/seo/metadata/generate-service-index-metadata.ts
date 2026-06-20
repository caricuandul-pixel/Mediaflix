import type { Metadata } from "next";

import {
     SERVICE_INDEX_KEYWORDS,
  GLOBAL_SEO_KEYWORDS,
  GEO_SEO_KEYWORDS,
  PROFESSIONAL_KEYWORDS,
  ENTERPRISE_KEYWORDS,
  INTENT_KEYWORDS,
  AUTHORITY_KEYWORDS,
  NETWORK_KEYWORDS,
  MEDIA_TECH_KEYWORDS,
} from "@/lib/seo";

const keywords = [
     ...SERVICE_INDEX_KEYWORDS,
  ...GLOBAL_SEO_KEYWORDS,
  ...GEO_SEO_KEYWORDS,
  ...PROFESSIONAL_KEYWORDS,
  ...ENTERPRISE_KEYWORDS,
  ...INTENT_KEYWORDS,
  ...AUTHORITY_KEYWORDS,
  ...NETWORK_KEYWORDS,
  ...MEDIA_TECH_KEYWORDS,
];

export const SERVICE_INDEX_METADATA: Metadata = {
  title:
    "Professional Broadcast Production Services | Live Streaming | Studio Production | Event Production | MEDIAFLIX",

  description:
    "MEDIAFLIX provides professional broadcast production, live streaming, studio production, event production, technical engineering, and broadcast equipment rental services across Indonesia, Asia Pacific, and international markets.",

  keywords,

  metadataBase: new URL(
    "https://mediaflix.id"
  ),

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title:
      "Professional Broadcast Production Services | MEDIAFLIX",

    description:
      "Enterprise-grade broadcast production, live streaming, studio production, event production, engineering, and equipment rental services.",

    url:
      "https://mediaflix.id/services",

    siteName:
      "MEDIAFLIX",

    locale:
      "en_US",

    type:
      "website",

    images: [
      {
        url:
          "/images/og/services-og.jpg",

        width: 1200,

        height: 630,

        alt:
          "MEDIAFLIX Professional Broadcast Production Services",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "Professional Broadcast Production Services | MEDIAFLIX",

    description:
      "Broadcast production, live streaming, studio production, event production, engineering, and equipment rental services.",

    images: [
      "/images/og/services-og.jpg",
    ],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category:
    "Broadcast Production",

  applicationName:
    "MEDIAFLIX",
};