"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";

import { projects } from "@/data/projects/projects";
import { ProjectData } from "@/data/projects/types";

interface ProjectRelatedProps {
  project: ProjectData;
}

export default function ProjectRelated({
  project,
}: ProjectRelatedProps) {
  const relatedProjects = projects
    .filter((item) => item.slug !== project.slug)
    .map((item) => {
      let score = 0;

      // Same category
      if (item.category === project.category) {
        score += 100;
      }

      // Shared services
      score +=
        item.services.filter((service) =>
          project.services.includes(service)
        ).length * 40;

      // Shared technologies
      score +=
        item.technologies.filter((tech) =>
          project.technologies.includes(tech)
        ).length * 20;

      // Featured bonus
      if (item.featured) {
        score += 10;
      }

      // Newer projects first
      score += Number(item.year);

      return {
        ...item,
        score,
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  if (!relatedProjects.length) return null;

  return (
    <section className="py-24">
      <Container>
        <motion.div
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
        >
          <span
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-orange-400
            "
          >
            More Projects
          </span>

          <h2
            className="
              mt-5
              text-4xl
              font-semibold
              text-white
              md:text-5xl
            "
          >
            Related Projects
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              text-zinc-400
            "
          >
            Discover more production works that showcase
            MEDIAFLIX expertise across broadcasting,
            live streaming, hybrid events, and digital
            production.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {relatedProjects.map((item, index) => (
              <motion.div
                key={item.slug}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
              >
                <Link
                  href={`/projects/${item.slug}`}
                  className="
                    group
                    block
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-orange-500/40
                    hover:bg-white/[0.05]
                    hover:shadow-[0_20px_60px_rgba(249,115,22,0.15)]
                  "
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.coverImage}
                      alt={item.title}
                      fill
                      sizes="(max-width:768px)100vw,(max-width:1280px)50vw,33vw"
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/80
                        via-black/20
                        to-transparent
                      "
                    />
                  </div>

                  <div className="p-7">
                    <span
                      className="
                        text-xs
                        uppercase
                        tracking-[0.25em]
                        text-orange-400
                      "
                    >
                      {item.category}
                    </span>

                    <h3
                      className="
                        mt-3
                        text-2xl
                        font-semibold
                        text-white
                        transition-colors
                        duration-300
                        group-hover:text-orange-400
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        line-clamp-3
                        text-sm
                        leading-7
                        text-zinc-400
                      "
                    >
                      {item.excerpt}
                    </p>

                    <div
                      className="
                        mt-8
                        flex
                        items-center
                        justify-between
                        border-t
                        border-white/10
                        pt-5
                      "
                    >
                      <div>
                        <p className="text-xs text-zinc-500">
                          Client
                        </p>

                        <p className="mt-1 text-sm text-white">
                          {item.client}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-xs text-zinc-500">
                          Year
                        </p>

                        <p className="mt-1 text-sm text-white">
                          {item.year}
                        </p>
                      </div>
                    </div>

                    <div
                      className="
                        mt-6
                        flex
                        items-center
                        gap-2
                        text-sm
                        font-medium
                        text-orange-400
                      "
                    >
                      View Project

                      <ArrowRight
                        size={16}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}