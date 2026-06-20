// FILE PATH: components/sections/global-presence/ProjectTooltip.tsx

"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image"; // Mengimpor optimasi Image Next.js agar tidak error merah
import { Project } from "./globalPresence.types";

interface Props {
  activeProject: Project | null; // PERBAIKAN: Nama diubah dari 'project' menjadi 'activeProject' agar singkron dengan WorldMap.tsx
}

export default function ProjectTooltip({ activeProject }: Props) {
  return (
    <AnimatePresence>
      {activeProject && (
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 20,
            scale: 0.95,
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut"
          }}
          className="
            absolute
            bottom-6
            right-6
            z-50

            w-[320px]
            overflow-hidden
            rounded-3xl
            border
            border-orange-500/20
            bg-[#0B0F14]/95
            backdrop-blur-xl
            shadow-[0_20px_80px_rgba(249,115,22,0.15)]
          "
        >
          {/* IMAGE BANNER */}
          <div className="relative h-40 overflow-hidden w-full bg-gray-950">
            {activeProject.thumbnail && (
              <Image
                src={activeProject.thumbnail}
                alt={activeProject.title}
                fill
                sizes="320px"
                className="object-cover"
                priority
              />
            )}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#0B0F14]
                via-[#0B0F14]/30
                to-transparent
                z-10
              "
            />

            <div className="absolute left-4 top-4 z-20">
              <span
                className="
                  rounded-full
                  border
                  border-orange-500/20
                  bg-orange-500/10
                  px-3
                  py-1
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-orange-300
                "
              >
                Enterprise Project
              </span>
            </div>
          </div>

          {/* CONTENT ACCENT */}
          <div className="p-4 relative z-20">
            <h4 className="text-sm font-bold text-white tracking-wide">
              {activeProject.title}
            </h4>

            {activeProject.description && (
              <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                {activeProject.description}
              </p>
            )}

            {/* LIVE INDICATOR STATUS */}
            <div
              className="
                mt-4
                flex
                items-center
                gap-3
                border-t
                border-white/10
                pt-3
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-green-400
                    opacity-75
                  "
                />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>

              <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-500 font-medium">
                Active Operation
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
