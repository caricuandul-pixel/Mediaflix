"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";

import { ProjectData } from "@/data/projects/types";

interface ProjectGalleryProps {
  project: ProjectData;
}

export default function ProjectGallery({
  project,
}: ProjectGalleryProps) {
  if (!project.gallery.length) {
    return null;
  }

  return (
    <section className="py-24">
      <Container>
        {/* Header */}

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
          className="mb-14"
        >
          <span
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-orange-400
            "
          >
            Gallery
          </span>

          <h2
            className="
              mt-4
              text-4xl
              font-semibold
              text-white
              md:text-5xl
            "
          >
            Project Gallery
          </h2>
        </motion.div>

        {/* Grid */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="
            grid
            gap-8
            md:grid-cols-2
          "
        >
          {project.gallery.map(
            (image, index) => (
              <motion.div
                key={image}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 40,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.7,
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
                "
              >
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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                    src={image}
                    alt={`${project.title} ${index + 1}`}
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-110
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

                  {/* Glass Caption */}

                  <div
                    className="
                      absolute
                      bottom-5
                      left-5
                      right-5
                    "
                  >
                    <div
                      className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/10
                        px-5
                        py-4
                        backdrop-blur-xl
                      "
                    >
                      <p
                        className="
                          text-xs
                          uppercase
                          tracking-[0.2em]
                          text-orange-400
                        "
                      >
                        MEDIAFLIX PROJECT
                      </p>

                      <p
                        className="
                          mt-2
                          text-white
                          font-medium
                        "
                      >
                        {project.title}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </motion.div>
      </Container>
    </section>
  );
}