import type { Metadata } from "next";

import ProjectCTA from "@/components/public/projects/ProjectCTA";

import ProjectListingHero from "@/components/public/projects/ProjectListingHero";

import ProjectsGrid from "@/components/public/projects/sections/ProjectsGrid";

import { getAllProjects } from "@/utils/projects";

export const metadata: Metadata = {
  title:
    "Projects | MEDIAFLIX",

  description:
    "Explore MEDIAFLIX portfolio projects across broadcasting, streaming, studio production, and hybrid event solutions.",
};

export default function ProjectsPage() {
  const projects =
    getAllProjects();

  return (
    <>
      <ProjectListingHero />

      <ProjectsGrid
        projects={projects}
      />

      <ProjectCTA />
    </>
  );
}