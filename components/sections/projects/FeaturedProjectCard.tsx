"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import type { ProjectData } from "@/data/projects/types";

interface FeaturedProjectCardProps {
  project: ProjectData;
}

export default function FeaturedProjectCard({
  project,
}: FeaturedProjectCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        scale: 1.02,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.45,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[40px]
        border
        border-white/10
        bg-zinc-900
      "
    >
      {/* Image */}
      <div className="relative min-h-[760px]">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          priority
          sizes="(max-width:768px)100vw,(max-width:1280px)55vw,50vw"
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#05070B]
            via-black/40
            to-black/10
          "
        />

        {/* Glow */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-tr
            from-orange-500/10
            via-transparent
            to-transparent
          "
        />

        {/* Content */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            p-8
            md:p-12
          "
        >
          {/* Tags */}
          {/* <div className="flex flex-wrap gap-3">
            <span
              className="
                rounded-full
                border
                border-white/20
                bg-white/10
                px-4
                py-2
                text-sm
                text-white
                backdrop-blur-md
              "
            >
              {project.location}
            </span>

            <span
              className="
                rounded-full
                border
                border-orange-500/30
                bg-orange-500/10
                px-4
                py-2
                text-sm
                text-orange-400
              "
            >
              {project.category}
            </span>

            <span
              className="
                rounded-full
                border
                border-white/10
                bg-black/30
                px-4
                py-2
                text-sm
                text-zinc-300
              "
            >
              {project.year}
            </span>
          </div> */}

          {/* Title */}
          <h3
            className="
              mt-8
              max-w-3xl
              text-4xl
              font-bold
              leading-tight
              text-white
              md:text-5xl
            "
          >
            {project.title}
          </h3>

          {/* Excerpt */}
          {/* <p
            className="
              mt-5
              max-w-2xl
              text-base
              leading-8
              text-zinc-300
              md:text-lg
            "
          >
            {project.excerpt}
          </p> */}

          {/* Footer */}
          <div
            className="
              mt-10
              flex
              flex-wrap
              items-center
              justify-between
              gap-6
            "
          >
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                Client
              </p>

              <p className="mt-2 text-lg font-medium text-white">
                {project.client}
              </p>
            </div>

            <Link
              href={`/projects/${project.slug}`}
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-orange-500/30
                bg-orange-500/10
                px-6
                py-3
                font-medium
                text-orange-400
                transition-all
                duration-300
                hover:bg-orange-500
                hover:text-white
              "
            >
              Explore Project

              <motion.span
                whileHover={{
                  x: 5,
                }}
              >
                →
              </motion.span>
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}