// src/data/projects/types.ts

export interface ProjectSEO {
  title: string;
  description: string;
}

export interface ProjectData {
  slug: string;

  title: string;
  excerpt: string;

  category: string;

  client: string;

  year: string;

  location: string;

  featured?: boolean;

  coverImage: string;

  gallery: string[];

  description: string;

  challenge: string;

  solution: string;

  results: string[];

  technologies: string[];

  services: string[];

  seo: ProjectSEO;
}