"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";

import ProjectCard from "../cards/ProjectCard";

import { ProjectData } from "@/data/projects/types";

interface ProjectsGridProps {
  projects: ProjectData[];
}

export default function ProjectsGrid({
  projects,
}: ProjectsGridProps) {
  return (
    <section
      id="projects"
      className="
        relative
        py-32
      "
    >
      <Container>
        {/* Section Header */}

        <div className="mb-20 max-w-3xl">
          <span
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-orange-400
            "
          >
            Portfolio
          </span>

          <h2
            className="
              mt-4
              text-4xl
              font-semibold
              text-white
              md:text-5xl
            "
          >
            Featured Productions &
            Case Studies
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-relaxed
              text-zinc-400
            "
          >
            A curated selection of
            broadcasting, streaming,
            hybrid event, studio production,
            and technical engineering
            projects delivered by MEDIAFLIX.
          </p>
        </div>

        {/* Grid */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}