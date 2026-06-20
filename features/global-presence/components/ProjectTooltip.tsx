"use client";

import { Project } from "../types/globalPresence.types";
import Image from "next/image";
interface ProjectTooltipProps {
  project: Project | null;
}

export default function ProjectTooltip({
  project,
}: ProjectTooltipProps) {
  if (!project) {
    return null;
  }

  return (
    <div
      className="
        absolute
        right-6
        top-6
        z-50

        w-[320px]

        rounded-xl
        border

        bg-white
        shadow-xl

        overflow-hidden
      "
    >
      <div className="aspect-video bg-neutral-100">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="
            w-full
            h-full
            object-cover
          "
        />
      </div>

      <div className="p-4">
        <h3
          className="
            text-lg
            font-semibold
          "
        >
          {project.title}
        </h3>

        <p
          className="
            mt-2
            text-sm
            text-neutral-600
          "
        >
          {project.description}
        </p>
      </div>
    </div>
  );
}