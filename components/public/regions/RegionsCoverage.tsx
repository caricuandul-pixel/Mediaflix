"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";

import RegionCard from "./cards/RegionCard";

import { getAllRegions } from "@/utils/regions";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function RegionsCoverage() {
  const regions = getAllRegions();

  return (
    <section
      id="coverage"
      className="
        relative
        overflow-hidden
        py-32
        bg-[#05070B]
      "
    >
      {/* Background Pattern */}

      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]
          bg-[size:80px_80px]
          opacity-20
        "
      />

      {/* Center Glow */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-[600px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-orange-500/10
          blur-[220px]
        "
      />

      {/* Right Glow */}

      <div
        className="
          absolute
          right-0
          top-1/3
          h-[500px]
          w-[500px]
          rounded-full
          bg-orange-500/5
          blur-[200px]
        "
      />

      {/* Left Glow */}

      <div
        className="
          absolute
          left-0
          bottom-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-orange-500/5
          blur-[180px]
        "
      />

      <Container>
        {/* Header */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            z-10
            mx-auto
            mb-24
            max-w-4xl
            text-center
          "
        >
          <span
            className="
              text-sm
              uppercase
              tracking-[0.35em]
              text-orange-400
            "
          >
            Coverage
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-semibold
              leading-[0.95]
              tracking-[-0.04em]
              text-white
              md:text-6xl
            "
          >
            Strategic Regions

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
              Worldwide
            </span>
          </h2>

          <div
            className="
              mx-auto
              mt-8
              h-px
              w-24
              bg-gradient-to-r
              from-transparent
              via-orange-500
              to-transparent
            "
          />

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              leading-relaxed
              text-zinc-400
            "
          >
            Through a combination of on-site
            operations, remote workflows,
            cloud infrastructure, and strategic
            technology partnerships, MEDIAFLIX
            supports broadcast, streaming,
            production, and engineering projects
            across multiple regions worldwide.
          </p>
        </motion.div>

        {/* Regions Grid */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="
            relative
            z-10
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {regions.map((region) => (
            <motion.div
              key={region.slug}
              variants={fadeUp}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <RegionCard region={region} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}