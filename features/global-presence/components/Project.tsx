"use client";

import type {
  Project,
} from "../types/globalPresence.types";

interface ProjectProps {
  projects: Project[];

  activeProject:
    | Project
    | null;

  onSelect: (
    project: Project
  ) => void;
}

export default function Project({
  projects,
  activeProject,
  onSelect,
}: ProjectProps) {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold">
        Projects
      </h3>

      {projects.map(
        (project) => {
          const active =
            activeProject?.id ===
            project.id;

          return (
            <button
              key={project.id}
              onClick={() =>
                onSelect(
                  project
                )
              }
              className={`
                w-full
                text-left
                px-3
                py-2
                rounded-md
                border

                ${
                  active
                    ? "bg-orange-500 text-white"
                    : "bg-white"
                }
              `}
            >
              {project.title}
            </button>
          );
        }
      )}
    </div>
  );
}