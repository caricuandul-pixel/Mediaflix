// src/utils/projects/getProjectBySlug.ts

import { projects } from "@/data/projects/projects";

export function getProjectBySlug(slug: string) {
  return projects.find(
    (project) => project.slug === slug
  );
}