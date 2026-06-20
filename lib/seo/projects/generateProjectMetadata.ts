// src/lib/seo/projects/generateProjectMetadata.ts

import type { Metadata } from "next";

import type { ProjectData } from "@/data/projects/types";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://mediaflix.id";

export function generateProjectMetadata(
  project: ProjectData
): Metadata {
  const url =
    `${SITE_URL}/projects/${project.slug}`;

  return {
    title: project.seo.title,

    description:
      project.seo.description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: project.seo.title,

      description:
        project.seo.description,

      url,

      siteName: "MEDIAFLIX",

      type: "article",

      images: [
        {
          url: project.coverImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: project.seo.title,

      description:
        project.seo.description,

      images: [project.coverImage],
    },
  };
}