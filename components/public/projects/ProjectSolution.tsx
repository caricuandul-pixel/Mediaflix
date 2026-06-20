"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";

import { ProjectData } from "@/data/projects/types";

interface ProjectSolutionProps {
  project: ProjectData;
}

export default function ProjectSolution({
  project,
}: ProjectSolutionProps) {
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
            Solution
          </span>

          <h2
            className="
              mt-4
              text-4xl
              font-semibold
              text-white
            "
          >
            Our Solution
          </h2>

          <div
            className="
              mt-10
              rounded-[32px]
              border
              border-cyan-500/20
              bg-white/[0.03]
              p-10
              backdrop-blur-xl
            "
          >
            <p
              className="
                text-lg
                leading-relaxed
                text-zinc-300
              "
            >
              {project.solution}
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}