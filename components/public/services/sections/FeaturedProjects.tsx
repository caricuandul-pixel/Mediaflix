"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";
import { featuredProjects } from "../data/featuredProjects";

export default function FeaturedProjects() {
  // Menggunakan fallback data pertama dengan aman
  const [activeProject, setActiveProject] = useState(
    featuredProjects[0]
  );

  return (
    <section className="relative overflow-hidden bg-[#05070B] py-28">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[160px]" />

      <Container>
        <div className="relative z-10">
          {/* Header */}
          <div className="mb-16 max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-orange-500" />

              <span className="text-xs uppercase tracking-[0.2em] text-zinc-300">
                MEDIAFLIX.ID • Featured Projects
              </span>
            </div>

            <h2 className="text-4xl font-bold text-white md:text-6xl">
              Proven Results
              <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                Across Productions
              </span>
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.6fr_0.8fr]">
            {/* Featured Project Display */}
            <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl">
              <div className="relative h-[520px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.id.toString()}
                    initial={{
                      opacity: 0,
                      scale: 1.03,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.45,
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeProject.image}
                      alt={activeProject.title}
                      fill
                      priority // Ditambahkan karena ini area utama LCP halaman
                      sizes="(max-width: 1024px) 100vw, 65vw"
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-[#05070B]/50 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <div className="mb-4 inline-flex rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-xl">
                    <span className="text-sm text-orange-400">
                      {activeProject.category}
                    </span>
                  </div>

                  <h3 className="text-4xl font-bold text-white">
                    {activeProject.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-lg text-zinc-300">
                    {activeProject.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Project Selection List */}
            <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
              {featuredProjects.map((project) => {
                // Konversi .toString() untuk menghindari konflik tipe number/string pada ID
                const active =
                  activeProject.id.toString() === project.id.toString();

                return (
                  <button
                    key={project.id}
                    onMouseEnter={() =>
                      setActiveProject(project)
                    }
                    onClick={() =>
                      setActiveProject(project)
                    }
                    className="group w-full text-left"
                  >
                    <div className="py-6">
                      <div className="mb-2 text-sm text-orange-400">
                        {project.id}
                      </div>

                      <h3
                        className={`
                          text-xl font-semibold transition-colors
                          ${
                            active
                              ? "text-white"
                              : "text-zinc-400 group-hover:text-white"
                          }
                        `}
                      >
                        {project.title}
                      </h3>

                      <div className="mt-4 flex items-center gap-2 text-sm text-zinc-500">
                        View Project

                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </div>

                      {project.id.toString() !==
                        featuredProjects.at(-1)?.id.toString() && (
                        <div className="mt-6 h-px bg-white/10" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
