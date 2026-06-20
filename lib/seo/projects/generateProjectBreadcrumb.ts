// src/lib/seo/projects/generateProjectBreadcrumb.ts

import { ProjectData } from "@/data/projects/types";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://mediaflix.id";

export function generateProjectBreadcrumb(
  project: ProjectData
) {
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
          SITE_URL,
      },

      {
        "@type":
          "ListItem",

        position: 2,

        name: "Projects",

        item:
          `${SITE_URL}/projects`,
      },

      {
        "@type":
          "ListItem",

        position: 3,

        name:
          project.title,

        item:
          `${SITE_URL}/projects/${project.slug}`,
      },
    ],
  };
}