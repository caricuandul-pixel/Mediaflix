// FILE PATH: components/sections/global-presence/GlobalPresence.tsx

"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

import Container from "@/components/ui/Container";

import Region from "./Region";
import Country from "./Country";
import Project from "./Project";
import WorldMap from "./WorldMap";

import { continents } from "./globalPresence.data";

import type {
  Country as CountryType,
  Project as ProjectType,
  MapLevel,
} from "./globalPresence.types";

interface GlobalPresenceProps {
  compact?: boolean;
}

export default function GlobalPresence({
  compact = false,
}: GlobalPresenceProps) {
  /**
   * Stabilkan data regions agar tidak membuat
   * array baru di setiap render
   */
  const regions = useMemo(
    () => continents?.[0]?.regions ?? [],
    []
  );

  /**
   * State utama navigasi map
   */
  const [activeRegionId, setActiveRegionId] =
    useState<string>("");

  const [activeCountryId, setActiveCountryId] =
    useState<string>("");

  const [activeProject, setActiveProject] =
    useState<ProjectType | null>(null);

  const [level, setLevel] =
    useState<MapLevel>("world");


  /**
   * Region aktif berdasarkan ID
   */
  const activeRegion = useMemo(
    () =>
      regions.find(
        (region) => region.id === activeRegionId
      ) ?? null,
    [regions, activeRegionId]
  );


  /**
   * Country aktif berdasarkan region & country ID
   */
  const activeCountry = useMemo<CountryType | null>(() => {
    if (!activeRegion) {
      return null;
    }

    return (
      activeRegion.countries.find(
        (country) =>
          country.id === activeCountryId
      ) ??
      activeRegion.countries[0] ??
      null
    );
  }, [activeRegion, activeCountryId]);


  /**
   * Ketika memilih region:
   * - pindah ke region
   * - pilih country pertama sebagai default
   * - reset project
   */
  const handleRegionChange = (
    regionId: string
  ) => {
    const selectedRegion = regions.find(
      (region) => region.id === regionId
    );

    setActiveRegionId(regionId);

    setActiveCountryId(
      selectedRegion?.countries[0]?.id ?? ""
    );

    setActiveProject(null);

    setLevel("region");
  };


  /**
   * Ketika memilih country
   */
  const handleCountryChange = (
    countryId: string
  ) => {
    setActiveCountryId(countryId);

    setActiveProject(null);

    setLevel("country");
  };


  /**
   * Kembali ke tampilan dunia
   */
  const handleResetToWorld = () => {
    setActiveRegionId("");

    setActiveCountryId("");

    setActiveProject(null);

    setLevel("world");
  };


  return (
    <section
      className={`
        relative
        overflow-hidden
        bg-[#05070B]
        ${compact ? "py-16" : "py-32"}
      `}
    >
      {/* Grid Background */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* Ambient Glow */}
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

          {/* Header */}
          <div className="mb-24 flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">

            <div className="max-w-3xl">

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="
                  inline-flex
                  items-center
                  gap-3
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
                  <span className="absolute h-full w-full animate-ping rounded-full bg-orange-400" />

                  <span className="relative h-2.5 w-2.5 rounded-full bg-orange-500" />
                </span>

                <span className="text-[10px] uppercase tracking-[0.35em] text-white/70 md:text-xs">
                  <span className="text-orange-400">
                    MEDIAFLIX.ID
                  </span>

                  <span className="mx-2">
                    •
                  </span>

                  Global Operations
                </span>
              </motion.div>


              <h2 className="mt-8 text-5xl font-bold leading-none text-white md:text-7xl xl:text-8xl">
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Broadcasting
                </span>

                <br />

                Beyond Borders
              </h2>


              <p className="mt-8 text-lg leading-relaxed text-zinc-400 md:text-xl">
                Global enterprise, broadcasting,
                live streaming and production
                operations across Asia.
              </p>

            </div>


            {level !== "world" && (
              <motion.button
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                onClick={handleResetToWorld}
                className="
                  h-max
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-5
                  py-3
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-orange-400
                  backdrop-blur-md
                  transition
                  hover:border-orange-500/20
                  hover:bg-orange-500/10
                "
              >
                ← Reset View
              </motion.button>
            )}

          </div>


          {/* World Map */}
          <WorldMap
            level={level}
            activeRegion={activeRegion}
            activeCountry={activeCountry}
            activeProject={activeProject}
            onProjectHover={setActiveProject}
          />


          {/* Navigation */}
          <div className="mt-10 grid gap-6 xl:grid-cols-3">

            <Region
              regions={regions}
              activeRegion={activeRegionId}
              onSelect={handleRegionChange}
            />

            <Country
              countries={
                activeRegion?.countries ?? []
              }
              activeCountry={activeCountryId}
              onSelect={handleCountryChange}
            />

            <Project
              projects={
                activeCountry?.projects ?? []
              }
              countryName={
                activeCountry?.name ??
                "No Country"
              }
            />

          </div>

        </div>
      </Container>
    </section>
  );
}