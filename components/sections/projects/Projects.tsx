"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

import Container from "@/components/ui/Container";

import FeaturedProjectCard from "./FeaturedProjectCard";
import ProjectList from "./ProjectList";

import { projects } from "./projects.data";

export default function Projects() {
  const [activeProject, setActiveProject] =
    useState(0);

  const featuredProject =
    projects[activeProject];

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#05070B]
        py-32
        md:py-40
        xl:py-48
      "
    >
      {/* GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]

          [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)]

          [background-size:80px_80px]
        "
      />

      {/* TOP RIGHT GLOW */}
      <div
        className="
          absolute
          right-0
          top-0

          h-[700px]
          w-[700px]

          rounded-full

          bg-orange-500/10

          blur-[180px]
        "
      />

      {/* BOTTOM LEFT GLOW */}
      <div
        className="
          absolute
          bottom-0
          left-0

          h-[500px]
          w-[500px]

          rounded-full

          bg-orange-500/5

          blur-[160px]
        "
      />

      <Container>
        <div className="relative z-10">
          {/* HEADER */}
          <div
            className="
              mb-24

              grid
              gap-12

              lg:grid-cols-[1.4fr_0.6fr]
            "
          >
            <div>
             <motion.div
              whileHover={{
                scale: 1.03,
              }}
              className="
                relative
                inline-flex
                items-center
                gap-3

                overflow-hidden

                rounded-full

                border
                border-white/10

                bg-white/[0.03]

                px-5
                py-3

                backdrop-blur-xl
              "
            >
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping

                    rounded-full

                    bg-orange-400
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2.5
                    w-2.5

                    rounded-full

                    bg-orange-500
                  "
                />
              </span>

              <span
                className="
                  text-[10px]
                  md:text-xs

                  uppercase

                  tracking-[0.35em]

                  text-white/70
                "
              >
                <span className="text-orange-400">
                  MEDIAFLIX.ID
                </span>

                <span className="mx-2">
                  •
                </span>

                Featured Work
              </span>
            </motion.div>

              <h2
                className="
                  mt-6

                  max-w-5xl

                  text-5xl
                  md:text-7xl

                  font-bold

                  leading-[0.92]

                  tracking-tight

                  text-white
                "
              >
                Broadcasting Live
                <br />
                Moments Across Asia
              </h2>

              <div
                className="
                  mt-8

                  inline-flex
                  items-center
                  gap-3

                  text-sm

                  text-zinc-500
                "
              >
                <span
                  className="
                    h-2
                    w-2

                    rounded-full

                    bg-orange-500
                  "
                />

                Selected Productions &
                Case Studies
              </div>
            </div>

            <div className="flex items-end">
              <p
                className="
                  max-w-md

                  text-lg

                  leading-relaxed

                  text-zinc-400
                "
              >
                Delivering world-class
                broadcast production,
                live events, studio
                operations, and technical
                engineering across sports,
                entertainment, corporate,
                and government sectors.
              </p>
            </div>
          </div>

          {/* DIVIDER */}
          <div
            className="
              relative
              mb-14
              h-px
            "
          >
            <div
              className="
                absolute
                inset-0

                bg-white/10
              "
            />

            <div
              className="
                absolute
                left-0
                top-0

                h-full
                w-40

                bg-orange-500
              "
            />
          </div>

          {/* TABS */}
          <div
            className="
              mb-12

              flex
              items-center
              gap-10
            "
          >
            <button
              className="
                border-b-2
                border-orange-500

                pb-3

                text-sm
                font-medium

                uppercase

                tracking-[0.15em]

                text-white
              "
            >
              Projects
            </button>

            <button
              className="
                pb-3

                text-sm
                font-medium

                uppercase

                tracking-[0.15em]

                text-zinc-500

                transition-colors
                duration-300

                hover:text-white
              "
            >
              News
            </button>
          </div>

          {/* MAIN LAYOUT */}
          <div
            className="
              grid
              gap-10

              lg:grid-cols-[1.1fr_0.9fr]
            "
          >
            {/* FEATURED PROJECT */}
            <AnimatePresence mode="wait">
              <motion.div
                key={featuredProject.id}
                initial={{
                  opacity: 0,
                  scale: 1.03,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.45,
                }}
              >
                <FeaturedProjectCard
  project={{
    ...featuredProject,
    id: featuredProject.id.toString() // Mengubah angka menjadi string
  }}
/>
              </motion.div>
            </AnimatePresence>

            {/* PROJECT LIST */}
            <ProjectList
              projects={projects}
              activeProject={
                activeProject
              }
              setActiveProject={
                setActiveProject
              }
            />
          </div>
        </div>
      </Container>
    </section>
  );
}