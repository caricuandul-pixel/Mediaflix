"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import { ArrowRight } from "lucide-react";

import { ProjectData } from "@/data/projects/types";

interface ProjectCardProps {
  project: ProjectData;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-orange-500/40
      "
    >
      {/* Full Clickable Overlay */}

      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 z-20"
        aria-label={project.title}
      />

      {/* Image */}

      <div
        className="
          relative
          aspect-[16/10]
          overflow-hidden
        "
      >
        <Image
          fill
          src={project.coverImage}
          alt={project.title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
          "
        />

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/80
            via-black/10
            to-transparent
          "
        />

        {/* Category */}

        <div
          className="
            absolute
            left-6
            top-6
            z-10
          "
        >
          <span
            className="
              rounded-full
              border
              border-orange-500/30
              bg-orange-500/10
              px-4
              py-2
              text-xs
              uppercase
              tracking-[0.2em]
              text-orange-400
              backdrop-blur-md
            "
          >
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}

      <div className="p-8">
        <h3
          className="
            text-2xl
            font-semibold
            text-white
            transition-colors
            duration-300
            group-hover:text-orange-300
          "
        >
          {project.title}
        </h3>

        <p
          className="
            mt-4
            line-clamp-3
            text-zinc-400
            leading-relaxed
          "
        >
          {project.excerpt}
        </p>

        {/* Footer */}

        <div
          className="
            mt-8
            flex
            items-center
            gap-3
            text-orange-400
          "
        >
          <span
            className="
              text-sm
              font-medium
              uppercase
              tracking-[0.2em]
            "
          >
            View Project
          </span>

          <ArrowRight
            className="
              h-4
              w-4
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </div>
      </div>

      {/* Glow */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      >
        <div
          className="
            absolute
            -right-20
            -top-20
            h-48
            w-48
            rounded-full
            bg-orange-500/10
            blur-[80px]
          "
        />
      </div>
    </motion.article>
  );
}