// FILE PATH: components/sections/global-presence/Region.tsx

"use client";

import { motion } from "framer-motion";
import { Region as RegionType } from "./globalPresence.types";

interface Props {
  regions?: RegionType[];
  activeRegion?: string;
  onSelect: (regionId: string) => void;
}

export default function Region({
  regions = [],
  activeRegion = "",
  onSelect,
}: Props) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-6
        backdrop-blur-xl
      "
    >
      {/* HEADER PANEL */}
      <div className="mb-6">
        <span
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.35em]
            text-orange-400
          "
        >
          Regions
        </span>

        <h3
          className="
            mt-3
            text-2xl
            font-bold
            text-white
          "
        >
          Asia Network
        </h3>

        <p
          className="
            mt-2
            text-sm
            text-zinc-400
          "
        >
          Select a region to explore countries and active projects.
        </p>
      </div>

      {/* EMPTY STATE */}
      {regions.length === 0 && (
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
          <p className="text-zinc-500">
            No regions available.
          </p>
        </div>
      )}

      {/* REGION BUTTON LIST */}
      <div
        className="
          flex
          flex-col
          gap-3
        "
      >
        {regions.map((region) => {
          const isActive = activeRegion === region.id;
          const totalCountries = region.countries?.length ?? 0;

          return (
            <motion.button
              key={region.id}
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              onClick={() => onSelect(region.id)}
              className={`
                relative
                overflow-hidden
                rounded-2xl
                border
                p-4
                text-left
                transition-all

                ${
                  isActive
                    ? `
                      border-orange-500/40
                      bg-orange-500/10
                    `
                    : `
                      border-white/10
                      bg-white/[0.02]
                      hover:border-orange-500/20
                    `
                }
              `}
            >
              {/* LAYOUT GLOW EFFECT */}
              {isActive && (
                <motion.div
                  layoutId="activeRegion"
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-orange-500/10
                    to-orange-400/5
                  "
                />
              )}

              <div className="relative z-10">
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >
                  <h4
                    className="
                      text-sm
                      font-semibold
                      text-white
                    "
                  >
                    {region.name}
                  </h4>

                  <span
                    className="
                      shrink-0
                      rounded-full
                      border
                      border-white/10
                      px-2
                      py-1
                      text-[10px]
                      font-medium
                      text-zinc-300
                    "
                  >
                    {totalCountries} Countries
                  </span>
                </div>

                {/* PROGRESS ANIMATION BAR */}
                <div
                  className="
                    mt-3
                    h-[2px]
                    w-full
                    overflow-hidden
                    rounded-full
                    bg-white/5
                  "
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: isActive ? "100%" : "35%" }}
                    transition={{ duration: 0.5 }}
                    className="
                      h-full
                      bg-gradient-to-r
                      from-orange-500
                      to-orange-300
                    "
                  />
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* PANEL FOOTER SUMMARY */}
      <div
        className="
          mt-6
          rounded-2xl
          border
          border-white/10
          bg-black/20
          p-4
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
          "
        >
          <span
            className="
              text-xs
              uppercase
              tracking-[0.25em]
              text-zinc-500
            "
          >
            Total Regions
          </span>

          <span
            className="
              text-lg
              font-bold
              text-orange-400
            "
          >
            {regions.length}
          </span>
        </div>
      </div>
    </div>
  );
}
