"use client";

import {
  Project,
} from "../types/globalPresence.types";

interface Props {
  projects: Project[];

  activeProject:
    | Project
    | null;

  hoverProject: (
    project:
      | Project
      | null
  ) => void;

  selectProject: (
    project: Project
  ) => void;
}

export default function ProjectMarkers({
  projects,

  activeProject,

  hoverProject,

  selectProject,
}: Props) {
  return (
    <>
      {projects.map(
        (project) => {
          const active =
            activeProject?.id ===
            project.id;

          return (
            <g
              key={
                project.id
              }
              onMouseEnter={() =>
                hoverProject(
                  project
                )
              }
              onMouseLeave={() =>
                hoverProject(
                  null
                )
              }
              onClick={() =>
                selectProject(
                  project
                )
              }
              className="cursor-pointer"
            >
              <circle
                cx={
                  project
                    .location.x
                }
                cy={
                  project
                    .location.y
                }
                r={
                  active
                    ? 10
                    : 7
                }
              />

              <text
                x={
                  project
                    .location.x +
                  12
                }
                y={
                  project
                    .location.y
                }
              >
                {
                  project.title
                }
              </text>
            </g>
          );
        }
      )}
    </>
  );
}