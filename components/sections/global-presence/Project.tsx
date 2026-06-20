// FILE PATH: components/sections/global-presence/Project.tsx

"use client";

import { motion } from "framer-motion";
import SectionBadge from "@/components/ui/SectionBadge";
import { Project as ProjectType } from "./globalPresence.types";

interface Props {
  projects: ProjectType[];
  countryName: string;
}

export default function Project({
  projects,
  countryName,
}: Props) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-8
      "
    >
      {/* HEADER SECTION BADGE */}
      <div className="mb-6">
        <SectionBadge
          title="Projects"
          value={`${projects.length} Projects`}
        />
      </div>

      {/* ACTIVE COUNTRY INDICATOR */}
      <p
        className="
          mb-8
          text-sm
          uppercase
          tracking-[0.25em]
          text-zinc-500
        "
      >
        {countryName}
      </p>

      {/* ANIMATED PROJECT CONTAINER LIST */}
      <motion.div
        key={countryName}
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="space-y-3"
      >
        {projects.length === 0 ? (
          <div
            className="
              rounded-2xl
              border
              border-dashed
              border-white/10
              p-8
              text-center
            "
          >
            <p className="text-zinc-500 text-sm">
              No projects running in this market.
            </p>
          </div>
        ) : (
          projects.map((project) => (
            <div
              key={project.id}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.02]
                p-4

                text-sm
                font-medium
                text-zinc-300

                transition-all
                duration-300

                hover:border-orange-500/30
                hover:bg-white/[0.05]
                hover:text-white
              "
            >
              {project.title}
            </div>
          ))
        )}
      </motion.div>
    </div>
  );
}
