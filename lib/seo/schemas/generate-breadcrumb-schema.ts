import { ServiceData } from "@/data/services/types";

export function generateBreadcrumbSchema(
  service: ServiceData
) {
  return {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",

        position: 1,

        name: "Home",

        item: "https://mediaflix.id",
      },

      {
        "@type": "ListItem",

        position: 2,

        name: "Services",

        item: "https://mediaflix.id/services",
      },

      {
        "@type": "ListItem",

        position: 3,

        name: service.hero.title,

        item: `https://mediaflix.id/services/${service.slug}`,
      },
    ],
  };
}