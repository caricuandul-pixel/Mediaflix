"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";

import { ProjectData } from "@/data/projects/types";

interface ProjectResultProps {
  project: ProjectData;
}

export default function ProjectResult({
  project,
}: ProjectResultProps) {
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
            Results
          </span>

          <h2
            className="
              mt-4
              text-4xl
              font-semibold
              text-white
            "
          >
            Results & Impact
          </h2>

          <div
            className="
              mt-12
              grid
              gap-6
              md:grid-cols-2
              xl:grid-cols-4
            "
          >
            {project.results.map(
              (result, index) => (
                <motion.div
                  key={result}
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
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="
                    rounded-[24px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-6
                    backdrop-blur-xl
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-orange-500/15
                      text-orange-400
                    "
                  >
                    ✓
                  </div>

                  <p
                    className="
                      mt-4
                      font-medium
                      text-white
                    "
                  >
                    {result}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}