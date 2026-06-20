import { ServiceData } from "@/data/services/types";

export function generateServiceSchema(
  service: ServiceData
) {
  return {
    "@context": "https://schema.org",

    "@type": "Service",

    name: service.hero.title,

    description:
      service.hero.description,

    serviceType:
      service.hero.title,

    provider: {
      "@type": "Organization",

      name: "MEDIAFLIX",

      url: "https://mediaflix.id",
    },

    areaServed:
      service.coverage.map(
        (area) => ({
          "@type": "Place",

          name: area,
        })
      ),

    audience: {
      "@type":
        "BusinessAudience",
    },

    category:
      service.industries,
  };
}