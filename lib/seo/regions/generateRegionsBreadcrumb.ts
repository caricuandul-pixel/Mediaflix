export function generateRegionsBreadcrumb() {
  return {
    "@context":
      "https://schema.org",

    "@type":
      "BreadcrumbList",

    itemListElement: [
      {
        "@type":
          "ListItem",

        position: 1,

        name: "Home",

        item:
          "https://mediaflix.id",
      },

      {
        "@type":
          "ListItem",

        position: 2,

        name:
          "Global Operations",

        item:
          "https://mediaflix.id/regions",
      },
    ],
  };
}