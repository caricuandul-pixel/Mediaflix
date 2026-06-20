"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export interface ProjectCardData {
  id: string | number; // Mengizinkan ID berupa string atau number agar lebih fleksibel
  title: string;
  image: string;
  slug: string;
  country: string;
  category: string;
}

interface ProjectCardProps {
  project: ProjectCardData;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="relative overflow-hidden rounded-[40px]"
    >
      <div className="relative min-h-[760px]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          priority
          className="object-cover"
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/50
            to-transparent
          "
        />

        <div className="absolute bottom-0 left-0 p-12">
          <div className="flex gap-3">
            <span className="rounded-full border border-white/20 px-4 py-2 text-sm text-white">
              {project.country}
            </span>

            <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
              {project.category}
            </span>
          </div>

          <h3 className="mt-6 max-w-2xl text-5xl font-bold text-white">
            {project.title}
          </h3>

          <Link
            href={`/projects/${project.slug}`}
            className="mt-8 inline-flex items-center gap-3 text-orange-500"
          >
            Explore Project →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
