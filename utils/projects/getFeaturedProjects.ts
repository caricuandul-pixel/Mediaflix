// src/utils/projects/getFeaturedProjects.ts

import { projects } from "@/data/projects/projects";

export function getFeaturedProjects() {
  return projects.filter(
    (project) => project.featured
  );
}