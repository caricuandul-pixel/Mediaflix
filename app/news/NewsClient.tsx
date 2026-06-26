"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Container from "@/components/ui/Container";

import { news } from "@/components/public/news/news.data";
import FeaturedNewsCard from "@/components/public/news/FeaturedNewsCard";
import NewsSidebar from "@/components/public/news/NewsSidebar";
import NewsGrid from "@/components/public/news/NewsGrid";

export default function NewsClient() {
  /* ===========================
     SORT NEWS (NEWEST FIRST)
  =========================== */

  const sortedNews = [...news].sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );

  const featuredNews = sortedNews.filter(
    (item) => item.featured
  );

  const initialIndex =
    featuredNews.length > 0
      ? sortedNews.findIndex(
          (item) => item.slug === featuredNews[0].slug
        )
      : 0;

  const [activeNews, setActiveNews] =
    useState(initialIndex);

  const activeItem = sortedNews[activeNews];

  return (
    <section className="relative overflow-hidden bg-[#040608] py-24 md:py-35 xl:py-40">
      {/* =====================================
          BACKGROUND
      ====================================== */}

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)] [background-size:90px_90px]" />

      {/* Glow */}
      <div className="absolute -right-60 -top-60 h-[900px] w-[900px] rounded-full bg-orange-500/10 blur-[220px]" />

      <div className="absolute -left-72 bottom-[-320px] h-[900px] w-[900px] rounded-full bg-orange-400/5 blur-[220px]" />

      {/* Blur Circle */}
      <div className="absolute left-1/2 top-32 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.02] blur-[160px]" />

      <Container>
        <div className="relative z-10">
          {/* =====================================
              BACK BUTTON
          ====================================== */}

          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-16"
          >
            <Link
              href="/"
              className="
                inline-flex
                items-center
                gap-3
                text-sm
                text-zinc-400
                transition
                hover:text-white
                group
              "
            >
              <span className="transition duration-300 group-hover:-translate-x-1">
                ←
              </span>

              <span>Back to Home</span>
            </Link>
          </motion.div>

          {/* =====================================
              HERO
          ====================================== */}

          <div className="grid gap-20 lg:grid-cols-[1.25fr_.75fr]">
            {/* =========================
                LEFT
            ========================= */}

            <div>
              {/* Badge */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-orange-500/20
                  bg-orange-500/10
                  px-5
                  py-3
                  backdrop-blur-xl
                "
              >
                <span className="h-2.5 w-2.5 rounded-full bg-orange-400 shadow-[0_0_20px_#f97316]" />

                <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-orange-100/90">
                  MEDIAFLIX • NEWSROOM
                </span>
              </motion.div>

              {/* Heading */}

         <motion.h1
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.15 }}
  className="
    mt-8
    max-w-4xl
    text-[36px]
    sm:text-[44px]
    md:text-[56px]
    lg:text-[64px]
    xl:text-[72px]
    font-extrabold
    leading-[1]
    tracking-[-0.03em]
    text-white
  "
>
                Broadcast
                <br />
                Insights &
                <br />
                Industry Updates
              </motion.h1>

              {/* Description */}

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="
                  mt-10
                  max-w-2xl
                  text-lg
                  leading-8
                  text-zinc-400
                "
              >
                Discover the latest stories from MEDIAFLIX covering
                live production, broadcast engineering, media
                technology, and international event operations.
                Explore behind-the-scenes insights, innovation,
                and real-world production experiences.
              </motion.p>

              {/* CTA */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-12 flex flex-wrap items-center gap-5"
              >
                <Link
                  href="#stories"
                  className="
                    rounded-full
                    bg-orange-500
                    px-7
                    py-3.5
                    text-sm
                    font-medium
                    text-white
                    transition
                    hover:bg-orange-400
                  "
                >
                  Explore Stories
                </Link>

                <div className="text-sm text-zinc-500">
                  Updated weekly with broadcast insights.
                </div>
              </motion.div>
            </div>

            {/* =========================
                RIGHT
            ========================= */}

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
              className="flex flex-col justify-end"
            >
              <p className="max-w-sm text-base leading-8 text-zinc-500">
                From international sports broadcasts and corporate
                productions to cutting-edge media technology,
                our newsroom shares the knowledge behind every
                successful production.
              </p>

              {/* Stats */}

              <div className="mt-16 grid grid-cols-3 gap-8">
                <div>
                  <h3 className="text-5xl font-bold text-white">
                    {sortedNews.length}
                  </h3>

                  <span className="mt-2 block text-[11px] uppercase tracking-[0.35em] text-zinc-500">
                    Articles
                  </span>
                </div>

                <div>
                  <h3 className="text-5xl font-bold text-white">
                    24/7
                  </h3>

                  <span className="mt-2 block text-[11px] uppercase tracking-[0.35em] text-zinc-500">
                    Coverage
                  </span>
                </div>

                <div>
                  <h3 className="text-5xl font-bold text-white">
                    Global
                  </h3>

                  <span className="mt-2 block text-[11px] uppercase tracking-[0.35em] text-zinc-500">
                    Broadcast
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* =====================================
              PREMIUM DIVIDER
          ====================================== */}

          <div className="relative my-24">
            <div className="h-px bg-white/10" />

            <div className="absolute left-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-orange-500 shadow-[0_0_20px_#f97316]" />
          </div>

          {/* ==========
             Part 1B
             Dimulai dari Featured Section
          ========== */}
                    {/* =====================================
              FEATURED SECTION
          ====================================== */}

          <div className="grid items-start gap-12 lg:grid-cols-[1.35fr_.65fr]">
            {/* =========================
                FEATURED ARTICLE
            ========================= */}

            <div>
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.35em] text-orange-400">
                    Featured Story
                  </span>

                  <h2 className="mt-3 text-3xl font-bold text-white">
                    Editor&apos;s Highlight
                  </h2>
                </div>

                <div className="hidden text-right lg:block">
                  <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
                    Updated
                  </p>

                  <p className="mt-2 text-lg font-medium text-white">
                    {activeItem.date}
                  </p>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.slug}
                  initial={{
                    opacity: 0,
                    y: 20,
                    scale: 0.985,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                  transition={{
                    duration: 0.45,
                  }}
                >
                  <FeaturedNewsCard
                    news={activeItem}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* =========================
                SIDEBAR
            ========================= */}

            <motion.aside
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.15,
              }}
              className="
                sticky
                top-32
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
              "
            >
              {/* Header */}

              <div className="border-b border-white/10 p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.35em] text-orange-400">
                      News Feed
                    </span>

                    <h3 className="mt-3 text-xl font-semibold text-white">
                      Latest Articles
                    </h3>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-500/20 bg-orange-500/10">
                    <span className="text-sm font-semibold text-orange-400">
                      {sortedNews.length}
                    </span>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-zinc-500">
                  Browse the latest updates from our
                  newsroom covering broadcast,
                  production and media technology.
                </p>
              </div>

              {/* List */}

              <div className="max-h-[700px] overflow-y-auto p-5">
                <NewsSidebar
                  items={sortedNews}
                  activeIndex={activeNews}
                  setActiveIndex={setActiveNews}
                />
              </div>

              {/* Footer */}

              <div className="border-t border-white/10 px-7 py-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
                      Total Stories
                    </p>

                    <h4 className="mt-2 text-2xl font-bold text-white">
                      {sortedNews.length}
                    </h4>
                  </div>

                  <div className="h-12 w-px bg-white/10" />

                  <div className="text-right">
                    <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
                      Updated
                    </p>

                    <p className="mt-2 text-sm font-medium text-white">
                      Weekly
                    </p>
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>

          {/* =====================================
              SECTION DIVIDER
          ====================================== */}

          <div className="relative my-28">
            <div className="h-px bg-gradient-to-r from-orange-500 via-white/10 to-transparent" />

            <div className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-orange-500 shadow-[0_0_25px_#f97316]" />
          </div>

          {/* ==========
              Part 1C
              Latest Stories
          ========== */}
                    {/* =====================================
              LATEST STORIES
          ====================================== */}

          <section
            id="stories"
            className="scroll-mt-40"
          >
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              {/* Left */}

              <div>
                <span className="text-[11px] uppercase tracking-[0.4em] text-orange-400">
                  Latest Stories
                </span>

                <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-tight text-white md:text-5xl">
                  Explore the Latest Broadcast
                  <br />
                  News & Industry Insights
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                  Discover our latest stories covering live production,
                  media technology, broadcast engineering, corporate
                  events, and behind-the-scenes operations from the
                  MEDIAFLIX newsroom.
                </p>
              </div>

              {/* Right */}

              <div className="grid grid-cols-2 gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
                <div>
                  <div className="text-5xl font-black text-white">
                    {sortedNews.length}
                  </div>

                  <p className="mt-2 text-xs uppercase tracking-[0.35em] text-zinc-500">
                    Total Articles
                  </p>
                </div>

                <div>
                  <div className="text-5xl font-black text-white">
                    {featuredNews.length}
                  </div>

                  <p className="mt-2 text-xs uppercase tracking-[0.35em] text-zinc-500">
                    Featured
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}

            <div className="my-14 h-px bg-white/10" />

            {/* News Grid */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <NewsGrid items={sortedNews} />
            </motion.div>
          </section>

          {/* =====================================
              FOOTER CTA
          ====================================== */}

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
            transition={{
              duration: 0.5,
            }}
            className="mt-36 overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-10 md:p-16"
          >
            <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="text-[11px] uppercase tracking-[0.4em] text-orange-400">
                  Stay Updated
                </span>

                <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
                  Follow Every Broadcast.
                  <br />
                  Every Innovation.
                  <br />
                  Every Story.
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                  Stay connected with the MEDIAFLIX newsroom for
                  broadcast innovation, production highlights,
                  technology updates, and industry insights from
                  around the world.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <Link
                  href="/contact"
                  className="
                    rounded-full
                    bg-orange-500
                    px-8
                    py-4
                    text-center
                    text-sm
                    font-medium
                    text-white
                    transition
                    hover:bg-orange-400
                  "
                >
                  Contact Us
                </Link>

                <Link
                  href="/services"
                  className="
                    rounded-full
                    border
                    border-white/10
                    px-8
                    py-4
                    text-center
                    text-sm
                    font-medium
                    text-white
                    transition
                    hover:border-orange-500/40
                    hover:bg-white/5
                  "
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}