"use client";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Container from "@/components/ui/Container";

import { news } from "./news.data";
import FeaturedNewsCard from "./FeaturedNewsCard";
import NewsSidebar from "./NewsSidebar";
import NewsGrid from "./NewsGrid";

export default function News() {
  const featuredNews = news.filter((n) => n.featured);
  const [activeNews, setActiveNews] = useState(0);

  const featuredItem = featuredNews[activeNews];

  return (
    <section className="relative overflow-hidden bg-[#05070B] py-32 md:py-40 xl:py-48">
      {/* background grid */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:80px_80px]" />

      <Container>
        <div className="relative z-10">
          {/* HEADER */}
          <div className="mb-24 grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
            <div>
              <motion.div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur-xl">
                <span className="text-orange-400 uppercase text-xs tracking-[0.3em]">
                  MEDIAFLIX.ID • NEWS
                </span>
              </motion.div>

              <h2 className="mt-6 text-5xl md:text-7xl font-bold text-white leading-[0.92]">
                Broadcast Insights
                <br />
                Industry Updates
              </h2>
            </div>

            <p className="text-zinc-400 text-lg max-w-md">
              Latest updates from broadcast production, live events,
              technology innovation, and media partnerships across global
              industries.
            </p>
             <div className="absolute top-6 left-6 z-50">
        <Link
          href="/"
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            px-4
            py-2
            text-xs
            text-white
            backdrop-blur-xl
            transition
            hover:border-orange-500/40
            hover:bg-orange-500/10
          "
        >
          <span className="text-orange-400">←</span>
          Back to Home
        </Link>
      </div>
          </div>
    
          {/* MAIN */}
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            {/* FEATURED */}
            <AnimatePresence mode="wait">
              <motion.div
                key={featuredItem.slug}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              >
                <FeaturedNewsCard news={featuredItem} />
              </motion.div>
            </AnimatePresence>

            {/* SIDEBAR */}
            <NewsSidebar
              items={featuredNews}
              activeIndex={activeNews}
              setActiveIndex={setActiveNews}
            />
          </div>

          {/* GRID */}
          <div className="mt-20">
            <NewsGrid items={news} />
          </div>
        </div>
      </Container>
    </section>
  );
}