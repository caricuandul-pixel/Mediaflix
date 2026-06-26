import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { ArrowLeft } from "lucide-react";
import type {
  Metadata,
} from "next";

import {
  projectSlugs,
} from "@/data/projects/project-slugs";

import {
  getProjectBySlug,
} from "@/utils/projects";

import {
  generateProjectMetadata,
  generateProjectJsonLd,
  generateProjectBreadcrumb,
} from "@/lib/seo/projects";

import ProjectHero from "@/components/public/projects/ProjectHero";

import ProjectOverview from "@/components/public/projects/ProjectOverview";

import ProjectGallery from "@/components/public/projects/ProjectGallery";

import ProjectChallenge from "@/components/public/projects/ProjectChallenge";

import ProjectSolution from "@/components/public/projects/ProjectSolution";

import ProjectResult from "@/components/public/projects/ProjectResult";

import ProjectCTA from "@/components/public/projects/ProjectCTA";
import ProjectRelated from "@/components/public/projects/ProjectRelated";

export async function generateStaticParams() {
  return projectSlugs.map(
    (slug) => ({
      slug,
    })
  );
}

export async function generateMetadata(
  {
    params,
  }: {
    params: Promise<{
      slug: string;
    }>;
  }
): Promise<Metadata> {
  const { slug } =
    await params;

  const project =
    getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return generateProjectMetadata(
    project
  );
}

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } =
    await params;

  const project =
    getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const jsonLd =
    generateProjectJsonLd(
      project
    );

  const breadcrumbLd =
    generateProjectBreadcrumb(
      project
    );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              jsonLd
            ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              breadcrumbLd
            ),
        }}
      />

      <ProjectHero
        project={project}
      />
<Container >
  <Link
    href="/projects"
    className="inline-flex items-center gap-2 mt-5 text-sm text-muted-foreground transition-colors hover:text-foreground"
  >
    <ArrowLeft className="h-4 w-4" />
    <span className="text-orange-400">Back to Projects</span>
  </Link>
</Container>
      <ProjectOverview
        project={project}
      />

      <ProjectGallery
        project={project}
      />

      <ProjectChallenge
        project={project}
      />

      <ProjectSolution
        project={project}
      />

      <ProjectResult
        project={project}
      />
      <ProjectRelated
  project={project}
/>


      <ProjectCTA />
    </>
  );
}