import {
  serviceSeoMap,
  ServiceSlug,
} from "../service-seo-map";

export function generateServiceJsonLd(
  slug: ServiceSlug
) {
  const seo = serviceSeoMap[slug];

  return {
    "@context": "https://schema.org",

    "@type": "Service",

    name: seo.title,

    description: seo.description,

    serviceType: seo.serviceType,

    provider: {
      "@type": "Organization",

      name: "MEDIAFLIX",

      url: "https://mediaflix.id",
    },

    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },

    url: `https://mediaflix.id/services/${slug}`,
  };
}