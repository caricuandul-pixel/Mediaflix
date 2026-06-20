"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import GlobalPresence from "@/components/sections/global-presence/GlobalPresence";

const stats = [
  {
    value: "40+",
    label: "Projects Delivered",
  },
  {
    value: "8+",
    label: "Countries Covered",
  },
  {
    value: "60+",
    label: "Specialist Crew",
  },
  {
    value: "24/7",
    label: "Operations Support",
  },
];

export default function GlobalOperations() {
  return (
    <section className="relative overflow-hidden bg-[#05070B] py-32">
      {/* Grid */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),
          linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[220px]" />

      <Container >
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
          }}
          className="mx-auto mb-20 max-w-5xl text-center"
        >
          <div
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-orange-500/20
              bg-orange-500/10
              px-5
              py-2
              text-xs
              font-medium
              uppercase
              tracking-[0.25em]
              text-orange-400
            "
          >
            MEDIAFLIX.ID • Global Operations
          </div>

          <h2
            className="
              mt-6
              text-4xl
              font-bold
              leading-tight
              text-white
              md:text-6xl
            "
          >
            Operating Across
            <br />

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
              Multiple Markets
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-relaxed
              text-zinc-400
            "
          >
            Supporting international productions,
            live broadcasts, sports events,
            entertainment productions, and
            enterprise media operations across
            multiple countries and regions.
          </p>
        </motion.div>

        {/* World Map */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 1.03,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.45,
          }}
          className="
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
          "
        >
          <GlobalPresence compact />
        </motion.div>

        {/* Stats */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              className="
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                p-6
                backdrop-blur-xl
              "
            >
              <div
                className="
                  text-4xl
                  font-bold
                  text-white
                "
              >
                {item.value}
              </div>

              <div
                className="
                  mt-2
                  text-sm
                  text-zinc-500
                "
              >
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.15,
          }}
          className="
            mt-16
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.03]
            p-10
            text-center
            backdrop-blur-xl
          "
        >
          <h3
            className="
              text-2xl
              font-semibold
              text-white
              md:text-3xl
            "
          >
            Delivering Broadcast Excellence
            Across Borders
          </h3>

          <p
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-lg
              leading-relaxed
              text-zinc-400
            "
          >
            Our international experience allows
            MEDIAFLIX.ID to support productions
            of any scale with consistent quality,
            operational reliability, and world-class execution.
          </p>

          <Link
            href="/services"
            className="
              mt-8
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-orange-500
              px-8
              py-4
              font-medium
              text-white
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:bg-orange-400
            "
          >
            Explore Our Services

            <svg
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M5 12H19"
                strokeLinecap="round"
              />
              <path
                d="M13 6L19 12L13 18"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}