export function generateRegionsJsonLd() {
  return {
    "@context":
      "https://schema.org",

    "@type":
      "Organization",

    name:
      "MEDIAFLIX",

    url:
      "https://mediaflix.id",

    description:
      "Global broadcast production, live streaming, hybrid event production, and media technology solutions.",

    areaServed: [
      {
        "@type":
          "Place",

        name:
          "Asia Pacific",
      },

      {
        "@type":
          "Place",

        name:
          "Middle East",
      },

      {
        "@type":
          "Place",

        name:
          "Europe",
      },

      {
        "@type":
          "Place",

        name:
          "North America",
      },
    ],

    serviceType: [
      "Broadcast Production",
      "Live Streaming",
      "Hybrid Events",
      "Media Technology",
      "Remote Production",
      "Engineering Services",
    ],
  };
}