"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";

import WorldMap from "./WorldMap";
import ProjectTooltip from "./ProjectTooltip";
import Region from "./Region";
import Country from "./Country";
import Project from "./Project";

import { continents } from "../data/continents.data";

import { useMapCamera } from "../hooks/useMapCamera";
import { useCameraAnimation } from "../hooks/useCameraAnimation";

export default function GlobalPresence() {
  const {
    level,
    camera,

    activeRegion,
    activeCountry,
    activeProject,

    goToWorld,
    goToRegion,
    goToCountry,

    hoverProject,
    selectProject,
  } = useMapCamera();

  const animatedCamera =
    useCameraAnimation(camera);

  const regions =
    continents?.[0]?.regions ?? [];

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#05070B]
        py-32
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

      {/* GLOW CENTER */}
      <div
        className="
          absolute
          left-1/2
          top-0

          h-[700px]
          w-[700px]

          -translate-x-1/2

          rounded-full

          bg-orange-500/10

          blur-[180px]
        "
      />

      {/* GLOW LEFT */}
      <div
        className="
          absolute
          left-0
          top-0

          h-[600px]
          w-[600px]

          bg-sky-500/5

          blur-[180px]
        "
      />

      {/* GLOW RIGHT */}
      <div
        className="
          absolute
          bottom-0
          right-0

          h-[600px]
          w-[600px]

          bg-orange-500/5

          blur-[180px]
        "
      />

      <Container>
        <div className="relative z-10">
          {/* HEADER */}
          <div className="mb-24 max-w-6xl">
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

                Global Operations
              </span>
            </motion.div>

            <h2
              className="
                mt-8

                text-5xl
                md:text-7xl
                xl:text-8xl

                font-bold

                leading-none

                text-white
              "
            >
              <span
                className="
                  bg-gradient-to-r
                  from-orange-400
                  via-orange-500
                  to-orange-600

                  bg-clip-text
                  text-transparent
                "
              >
                Broadcasting
              </span>

              <br />

              Beyond Borders
            </h2>

            <p
              className="
                mt-8
                max-w-3xl

                text-lg
                md:text-xl

                leading-relaxed

                text-zinc-400
              "
            >
              Global enterprise,
              broadcasting,
              live streaming and
              production operations
              across Asia.
            </p>
          </div>

          {/* MAP CARD */}
          <div
            className="
              relative

              overflow-hidden

              rounded-[32px]

              border
              border-white/10

              bg-white/[0.03]

              backdrop-blur-xl
            "
          >
            <WorldMap
              level={level}
              camera={animatedCamera}
              activeRegion={activeRegion}
              activeCountry={activeCountry}
              activeProject={activeProject}
              goToWorld={goToWorld}
              goToRegion={goToRegion}
              goToCountry={goToCountry}
              hoverProject={hoverProject}
              selectProject={selectProject}
            />

            <ProjectTooltip
              project={activeProject}
            />
          </div>

          {/* DATA GRID */}
          <div
            className="
              mt-10

              grid
              gap-6

              xl:grid-cols-3
            "
          >
            <Region
              regions={regions}
              activeRegion={activeRegion}
              onSelect={goToRegion}
            />

            <Country
              countries={
                activeRegion?.countries ??
                []
              }
              activeCountry={
                activeCountry
              }
              onSelect={goToCountry}
            />

            <Project
              projects={
                activeCountry?.projects ??
                []
              }
              activeProject={
                activeProject
              }
              onSelect={
                selectProject
              }
            />
          </div>
        </div>
      </Container>
    </section>
  );
}