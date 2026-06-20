"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";
import HeroPattern from "@/components/sections/hero/HeroPattern";

const fadeUp = {
  initial: {
    opacity: 0,
    y: 40,
    filter: "blur(12px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

export default function ProjectListingHero() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#05070B]">
      {/* Video Background */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/videos/play_720p.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/20" />

      {/* Cinematic Gradient */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/10
          via-black/30
          to-[#05070B]
        "
      />

      {/* Pattern */}

      <HeroPattern />

      {/* Orange Glow */}

      <div
        className="
          absolute
          right-0
          top-0
          h-[900px]
          w-[900px]
          rounded-full
          bg-orange-500/10
          blur-[250px]
        "
      />

      {/* Secondary Glow */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-orange-500/5
          blur-[180px]
        "
      />

      {/* Content */}

      <div className="relative z-10 flex h-full items-end">
        <Container>
          <div className="max-w-3xl pb-28 md:pb-32">
            {/* Heading */}

            <motion.h1
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                text-5xl
                font-bold
                leading-[0.9]
                tracking-[-0.04em]
                text-white
                md:text-6xl
                xl:text-[5rem]
              "
            >
              MEDIAFLIX
              <span
                className="
                  bg-gradient-to-r
                  from-orange-400
                  via-orange-500
                  to-orange-600
                  bg-clip-text
                  text-transparent
                "
              >
                .ID
              </span>

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-orange-400
                  via-orange-500
                  to-orange-600
                  bg-clip-text
                  text-transparent
                "
              >
                PROJECTS
              </span>
            </motion.h1>

            {/* Subtitle */}

            <motion.p
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{
                delay: 0.2,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-8
                text-sm
                uppercase
                tracking-[0.35em]
                text-zinc-300
                md:text-base
              "
            >
              Broadcast • Streaming • Hybrid Events
            </motion.p>

            {/* Description */}

            <motion.p
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-relaxed
                text-zinc-300
              "
            >
              Explore selected MEDIAFLIX
              productions, live broadcasts,
              hybrid events, studio productions,
              and technical engineering projects
              delivered across Indonesia.
            </motion.p>

            {/* CTA */}

            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{
                delay: 0.4,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10"
            >
              <Link
                href="#projects"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/10
                  bg-orange-500
                  px-8
                  py-4
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:bg-orange-600
                  hover:shadow-[0_0_40px_rgba(249,115,22,0.35)]
                "
              >
                Explore Projects

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}