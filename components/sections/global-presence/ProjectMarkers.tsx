// FILE PATH: components/sections/global-presence/ProjectMarkers.tsx

"use client";

import { motion } from "framer-motion";
import { Project } from "./globalPresence.types";

interface Props {
  projects: Project[];
  activeProject?: Project | null;
  onProjectHover?: (project: Project | null) => void;
  onSelect?: (project: Project) => void;
}

export default function ProjectMarkers({
  projects,
  activeProject,
  onProjectHover,
  onSelect,
}: Props) {
  if (!projects?.length) {
    return null;
  }

  return (
    <>
      {projects.map((project) => {
        const isActive = activeProject?.id === project.id;

        return (
          <g
            key={project.id}
            transform={`translate(${project.location.x} ${project.location.y})`}
            style={{ cursor: "pointer" }}
            onClick={() => onSelect?.(project)}
            // Pemicu hover utama diletakkan pada grup pembungkus
            onMouseEnter={() => onProjectHover?.(project)}
            onMouseLeave={() => onProjectHover?.(null)}
          >
            {/* PULSE GLOW BACKGROUND */}
            <circle
              r={isActive ? 36 : 28}
              fill="rgba(249,115,22,.15)"
            >
              <animate
                attributeName="r"
                values={isActive ? "20;42;20" : "14;32;14"}
                dur="2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="1;0;1"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>

            {/* OUTER RING */}
            <motion.circle
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              r={isActive ? 14 : 10}
              fill="rgba(249,115,22,.35)"
            />

            {/* CORE POINT */}
            <motion.circle
              whileHover={{ scale: 1.2 }}
              r={isActive ? 8 : 6}
              fill={isActive ? "#fb923c" : "#f97316"}
            />

            {/* CENTER BEAD */}
            <circle r="3" fill="#ffffff" />

            {/* ACTIVE GLOW LIMITER */}
            {isActive && (
              <circle
                r="18"
                fill="none"
                stroke="#fb923c"
                strokeWidth="2"
                opacity="0.8"
              >
                <animate
                  attributeName="r"
                  values="14;24;14"
                  dur="1.8s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="1;0;1"
                  dur="1.8s"
                  repeatCount="indefinite"
                />
              </circle>
            )}
          </g>
        );
      })}
    </>
  );
}
