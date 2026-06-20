// src/utils/projects/getRelatedProjects.ts

import { projects } from "@/data/projects/projects";

export function getRelatedProjects(
  slug: string,
  limit = 3
) {
  return projects
    .filter(
      (project) => project.slug !== slug
    )
    .slice(0, limit);
}