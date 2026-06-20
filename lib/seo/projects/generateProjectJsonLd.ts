// src/lib/seo/projects/generateProjectJsonLd.ts

import { ProjectData } from "@/data/projects/types";

export function generateProjectJsonLd(
  project: ProjectData
) {
  return {
    "@context":
      "https://schema.org",

    "@type":
      "CreativeWork",

    name:
      project.title,

    description:
      project.description,

    image:
      project.coverImage,

    creator: {
      "@type":
        "Organization",

      name:
        "MEDIAFLIX",
    },

    about:
      project.category,

    keywords: [
      ...project.services,
      ...project.technologies,
    ],
  };
}