"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import Container from "@/components/ui/Container";

import FeaturedProjectCard from "./FeaturedProjectCard";
import ProjectList from "./ProjectList";

import { projects } from "@/data/projects/projects";
import { news } from "@/components/public/news/news.data";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const [activeTab, setActiveTab] = useState<"projects" | "news">(
    "projects"
  );

  const featuredProjects = projects.filter((p) => p.featured);
  const featuredProject = featuredProjects[activeProject];

  /* =========================
     NEWS SORT (NEWEST FIRST)
  ========================= */
  const sortedNews = [...news].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const latestNews = sortedNews[0];
  const allNews = sortedNews;

  return (
    <section className="relative overflow-hidden bg-[#05070B] py-32 md:py-40 xl:py-48">

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:80px_80px]" />

      {/* GLOW EFFECT */}
      <div className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full bg-orange-500/10 blur-[180px]" />
      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-[160px]" />

      <Container>
        <div className="relative z-10">

          {/* HEADER */}
          <div className="mb-24 grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold text-white leading-[0.92]">
                Broadcasting Live
                <br />
                Moments Across Nation
              </h2>

              <div className="mt-6 text-zinc-500 text-sm">
                MEDIAFLIX Production Hub
              </div>
            </div>

            <div className="flex items-end">
              <p className="text-zinc-400 max-w-sm">
                Projects and News unified system for broadcast, media, and
                live production updates.
              </p>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="relative mb-14 h-px">
            <div className="absolute inset-0 bg-white/10" />
            <div className="absolute left-0 top-0 h-full w-40 bg-orange-500" />
          </div>

          {/* TABS */}
          <div className="mb-12 flex gap-10">
            <button
              onClick={() => setActiveTab("projects")}
              className={`pb-3 text-sm uppercase tracking-[0.15em] transition ${
                activeTab === "projects"
                  ? "border-b-2 border-orange-500 text-white"
                  : "text-zinc-500 hover:text-white"
              }`}
            >
              Projects
            </button>

            <button
              onClick={() => setActiveTab("news")}
              className={`pb-3 text-sm uppercase tracking-[0.15em] transition ${
                activeTab === "news"
                  ? "border-b-2 border-orange-500 text-white"
                  : "text-zinc-500 hover:text-white"
              }`}
            >
              News
            </button>
          </div>

          {/* MAIN GRID */}
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">

            {/* =========================
                PROJECTS TAB
            ========================= */}
            {activeTab === "projects" && (
              <>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={featuredProject.slug}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45 }}
                  >
                    <FeaturedProjectCard project={featuredProject} />
                  </motion.div>
                </AnimatePresence>

                <ProjectList
                  projects={featuredProjects}
                  activeProject={activeProject}
                  setActiveProject={setActiveProject}
                />
              </>
            )}

            {/* =========================
                NEWS TAB (LATEST + SIDEBAR)
            ========================= */}
            {activeTab === "news" && (
              <>
                {/* MAIN LATEST NEWS */}
                <div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={latestNews.slug}
                      initial={{ opacity: 0, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.45 }}
                    >
                      <Link href={`/news/${latestNews.slug}`}>
                        <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0B0F14]">

                          {/* IMAGE */}
                          <div className="relative h-[420px]">
                            <Image
                              src={latestNews.image}
                              alt={latestNews.title}
                              fill
                              className="object-cover"
                            />
                          </div>

                          {/* CONTENT */}
                          <div className="p-6">
                            <p className="text-xs text-orange-400 uppercase">
                              {latestNews.category}
                            </p>

                            <h3 className="mt-3 text-2xl font-bold text-white">
                              {latestNews.title}
                            </h3>

                            <p className="mt-3 text-zinc-400">
                              {latestNews.excerpt}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* SIDEBAR NEWS LIST */}
                <div className="space-y-4 max-h-[600px] overflow-auto pr-2">

                  <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4">
                    Latest Updates
                  </h3>

                  {allNews.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/news/${item.slug}`}
                      className="flex gap-4 group"
                    >
                      <div className="relative w-20 h-16 rounded overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition"
                        />
                      </div>

                      <div>
                        <p className="text-xs text-orange-400">
                          {item.category}
                        </p>
                        <p className="text-sm text-white group-hover:text-orange-300">
                          {item.title}
                        </p>
                        <p className="text-xs text-zinc-500">
                          {item.date}
                        </p>
                      </div>
                    </Link>
                  ))}

                  {/* VIEW ALL NEWS BUTTON */}
                  <div className="pt-6 mt-6 border-t border-white/10">
                    <Link
                      href="/news"
                      className="
                        inline-flex
                        items-center
                        justify-center
                        w-full
                        gap-2
                        rounded-lg
                        border
                        border-white/10
                        bg-white/[0.03]
                        px-4
                        py-3
                        text-sm
                        text-white
                        transition
                        hover:border-orange-500/40
                        hover:bg-orange-500/10
                      "
                    >
                      View All News
                      <span className="text-orange-400">→</span>
                    </Link>
                  </div>

                </div>
              </>
            )}

          </div>
        </div>
      </Container>
    </section>
  );
}