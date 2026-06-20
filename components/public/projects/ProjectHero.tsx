"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";

import { ProjectData } from "@/data/projects/types";

interface ProjectHeroProps {
  project: ProjectData;
}

export default function ProjectHero({
  project,
}: ProjectHeroProps) {
  return (
    <section  className="
    relative
    overflow-hidden
    pt-40
    pb-12
    lg:pb-16
  ">
      {/* Background */}

      <div className="absolute inset-0">
        <Image
          fill
          priority
          src={project.coverImage}
          alt={project.title}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/80" />

        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-black/30
            via-black/70
            to-black
          "
        />
      </div>

      {/* Glow */}

      <div
        className="
          absolute
          top-20
          left-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-orange-500/20
          blur-[160px]
        "
      />

      <Container >
        <div
          className="
            grid
            gap-14
            lg:grid-cols-2
            lg:items-center
          "
        >
          {/* Content */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <span
              className="
                inline-flex
                rounded-full
                border border-orange-500/30
                bg-orange-500/10
                px-4 py-2
                text-xs
                uppercase
                tracking-[0.3em]
                text-orange-400
              "
            >
              {project.category}
            </span>

            <h1
              className="
                mt-8
                max-w-4xl
                text-5xl
                font-semibold
                leading-tight
                text-white
                md:text-6xl
              "
            >
              {project.title}
            </h1>

            <div
              className="
                mt-10
                flex
                flex-wrap
                gap-4
              "
            >
              {[
                {
                  label: "Client",
                  value: project.client,
                },
                {
                  label: "Year",
                  value: project.year,
                },
                {
                  label: "Location",
                  value: project.location,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="
                    rounded-2xl
                    border border-white/10
                    bg-white/[0.03]
                    px-5 py-4
                    backdrop-blur-xl
                  "
                >
                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-[0.2em]
                      text-zinc-500
                    "
                  >
                    {item.label}
                  </p>

                  <p className="mt-2 text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Cover */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
              "
            >
              <div className="aspect-[16/10] relative">
                <Image
                  fill
                  src={project.coverImage}
                  alt={project.title}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}