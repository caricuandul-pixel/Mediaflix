"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";

import ProjectCard from "../cards/ProjectCard";

import { getFeaturedProjects } from "@/utils/projects";

export default function FeaturedProjects() {
  const projects =
    getFeaturedProjects();

  if (!projects.length) {
    return null;
  }

  const [featured, ...secondary] =
    projects;

  return (
    <section className="py-24">
      <Container>
        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mb-14"
        >
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
            Featured Projects
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-zinc-400
            "
          >
            Explore selected MEDIAFLIX
            productions across broadcast,
            streaming, studio, and hybrid
            event environments.
          </p>
        </motion.div>

        {/* Layout */}

        <div
          className="
            grid
            gap-8
            xl:grid-cols-[1.5fr_1fr]
          "
        >
          {/* Main Featured */}

          <ProjectCard
            project={featured}
          />

          {/* Secondary */}

          <div
            className="
              flex
              flex-col
              gap-8
            "
          >
            {secondary
              .slice(0, 2)
              .map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                />
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
}