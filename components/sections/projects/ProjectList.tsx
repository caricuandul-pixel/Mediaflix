"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  country: string;
  year: string;
  image: string;
}

interface Props {
  projects: Project[];
  activeProject: number;
  setActiveProject: React.Dispatch<
    React.SetStateAction<number>
  >;
}

export default function ProjectList({
  projects,
  activeProject,
  setActiveProject,
}: Props) {
  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="mb-10 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-orange-500">
            Latest Work
          </p>

          <h3 className="mt-2 text-2xl font-semibold text-white">
            Projects
          </h3>
        </div>

        <Link
          href="/projects"
          className="
            group
            inline-flex
            items-center
            gap-2
            text-sm
            text-zinc-400
            transition-colors
            hover:text-orange-500
          "
        >
          View All

          <motion.span
            className="text-orange-500"
            whileHover={{
              x: 4,
            }}
          >
            →
          </motion.span>
        </Link>
      </div>

      {/* Project List */}
      <div className="flex flex-col">
        {projects.map((project, index) => {
          const active = activeProject === index;

          return (
            <button
              key={project.id}
              onMouseEnter={() =>
                setActiveProject(index)
              }
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                px-6
                py-7
                text-left
                transition-all
                duration-300
              "
            >
              {/* Hover Background */}
              <div
                className={`
                  absolute
                  inset-0
                  transition-opacity
                  duration-500
                  ${
                    active
                      ? "opacity-100"
                      : "opacity-0"
                  }
                `}
              >
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-orange-500/[0.06]
                    via-orange-500/[0.02]
                    to-transparent
                  "
                />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <div>
                    {/* Number */}
                    <div
                      className={`
                        text-xs
                        tracking-[0.35em]
                        transition-colors
                        duration-300
                        ${
                          active
                            ? "text-orange-500"
                            : "text-zinc-600"
                        }
                      `}
                    >
                      {project.id}
                    </div>

                    {/* Title */}
                    <h4
                      className={`
                        mt-3
                        text-2xl
                        font-semibold
                        transition-all
                        duration-300
                        ${
                          active
                            ? "text-white"
                            : "text-zinc-500"
                        }
                      `}
                    >
                      {project.title}
                    </h4>
                  </div>

                  {/* Arrow */}
                  <motion.span
                    animate={{
                      x: active ? 8 : 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className={`
                      text-xl
                      ${
                        active
                          ? "text-orange-500"
                          : "text-zinc-600"
                      }
                    `}
                  >
                    →
                  </motion.span>
                </div>

                {/* Animated Line */}
                <div className="relative mt-5 h-[2px] overflow-hidden">
                  {/* Base line */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-white/10
                    "
                  />

                  {active && (
                    <>
                      {/* Orange Line */}
                      <motion.div
                        layoutId="project-line"
                        className="
                          absolute
                          inset-y-0
                          left-0
                          w-full
                          bg-orange-500
                        "
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 35,
                        }}
                      />

                      {/* Gloss Sweep */}
                      <motion.div
                        className="
                          absolute
                          top-0
                          h-full
                          w-24
                          bg-gradient-to-r
                          from-transparent
                          via-white/90
                          to-transparent
                          blur-[1px]
                        "
                        animate={{
                          x: [-100, 600],
                        }}
                        transition={{
                          duration: 1.8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Footer Link */}
      {/* <div className="mt-auto pt-8">
        <Link
          href="/projects"
          className="
            inline-flex
            items-center
            gap-3
            text-sm
            font-medium
            text-orange-500
            transition-all
            hover:gap-4
          "
        >
          Explore All Projects
          <span>→</span>
        </Link>
      </div> */}
    </div>
  );
}