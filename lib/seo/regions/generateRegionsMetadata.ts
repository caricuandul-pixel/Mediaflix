import type { Metadata } from "next";

export function generateRegionsMetadata(): Metadata {
  return {
    title:
      "Global Operations | MEDIAFLIX",

    description:
      "Explore MEDIAFLIX global broadcast production, live streaming, hybrid event, and media technology capabilities across Asia Pacific, Middle East, Europe, and North America.",

    keywords: [
      "global broadcast production",
      "international live streaming",
      "worldwide media production",
      "broadcast engineering",
      "hybrid event production",
      "remote production",
      "media technology partner",
      "global streaming solutions",
      "broadcast services worldwide",
      "MEDIAFLIX",
    ],

    openGraph: {
      title:
        "Global Operations | MEDIAFLIX",

      description:
        "Global broadcast production, live streaming, engineering, and media technology services across multiple regions worldwide.",

      type: "website",

      images: [
        {
          url:
            "/images/og/regions-og.jpg",

          width: 1200,

          height: 630,

          alt:
            "MEDIAFLIX Global Operations",
        },
      ],
    },

    twitter: {
      card:
        "summary_large_image",

      title:
        "Global Operations | MEDIAFLIX",

      description:
        "Worldwide broadcast production, streaming, and media technology solutions.",

      images: [
        "/images/og/regions-og.jpg",
      ],
    },

    alternates: {
      canonical:
        "https://mediaflix.id/regions",
    },
  };
}