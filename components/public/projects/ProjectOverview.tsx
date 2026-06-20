"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";

import { ProjectData } from "@/data/projects/types";

interface ProjectOverviewProps {
  project: ProjectData;
}

export default function ProjectOverview({
  project,
}: ProjectOverviewProps) {
  return (
    <section className="py-24">
      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <span
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-orange-400
            "
          >
            Overview
          </span>

          <h2
            className="
              mt-4
              text-4xl
              font-semibold
              text-white
            "
          >
            Project Overview
          </h2>

          <p
            className="
              mt-8
              max-w-4xl
              text-lg
              leading-relaxed
              text-zinc-300
            "
          >
            {project.description}
          </p>

          <div className="mt-12">
            <h3
              className="
                text-xl
                font-medium
                text-white
              "
            >
              Technologies Used
            </h3>

            <div
              className="
                mt-6
                flex
                flex-wrap
                gap-3
              "
            >
              {project.technologies.map(
                (tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-full
                      border border-white/10
                      bg-white/[0.03]
                      px-4 py-2
                      text-sm
                      text-zinc-300
                    "
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}