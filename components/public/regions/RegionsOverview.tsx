"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";

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

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

const stats = [
  {
    value: "20+",
    label: "Countries Supported",
  },
  {
    value: "4",
    label: "Strategic Regions",
  },
  {
    value: "24/7",
    label: "Technical Support",
  },
  {
    value: "Global",
    label: "Remote Production",
  },
];

export default function RegionsOverview() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-32
        bg-gradient-to-b
        from-[#05070B]
        via-[#070A10]
        to-[#05070B]
      "
    >
      {/* Background Pattern */}

      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]
          bg-[size:80px_80px]
          opacity-30
        "
      />

      {/* Center Glow */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-orange-500/10
          blur-[180px]
        "
      />

      {/* Right Glow */}

      <div
        className="
          absolute
          right-0
          top-1/3
          h-[450px]
          w-[450px]
          rounded-full
          bg-orange-500/5
          blur-[220px]
        "
      />

      {/* Left Glow */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-orange-500/5
          blur-[180px]
        "
      />

      <Container>
        <div
          className="
            relative
            z-10
            grid
            gap-16
            lg:grid-cols-2
            lg:gap-24
          "
        >
          {/* Left Content */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span
              className="
                text-sm
                uppercase
                tracking-[0.35em]
                text-orange-400
              "
            >
              Global Reach
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
              Global Reach.

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
                Local Execution.
              </span>
            </h2>
          </motion.div>

          {/* Right Content */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p
              className="
                text-lg
                leading-relaxed
                text-zinc-400
              "
            >
              MEDIAFLIX operates through a
              flexible production and media
              technology network that enables
              high-quality delivery across
              multiple countries, regions,
              and time zones.
            </p>

            <p
              className="
                mt-6
                text-lg
                leading-relaxed
                text-zinc-400
              "
            >
              From international conferences
              and corporate broadcasts to
              large-scale sporting events and
              hybrid productions, our teams
              combine remote workflows,
              on-site execution, and cloud
              infrastructure to support
              projects anywhere in the world.
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            relative
            z-10
            mt-24
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {stats.map((item) => (
            <motion.div
              key={item.label}
              variants={cardVariant}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-xl
              "
            >
              {/* Hover Glow */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-orange-500/0
                  via-transparent
                  to-orange-500/0
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:opacity-100
                  group-hover:from-orange-500/10
                  group-hover:to-orange-500/5
                "
              />

              {/* Border Glow */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-[32px]
                  ring-1
                  ring-orange-500/0
                  transition-all
                  duration-500
                  group-hover:ring-orange-500/30
                "
              />

              <div className="relative z-10">
                <motion.p
  whileHover={{
    scale: 1.08,
  }}
  className="
    text-5xl
    font-bold
    tracking-tight
    text-white
    transition-colors
    duration-500
    group-hover:text-orange-400
  "
>
  {item.value}
</motion.p>

<p
  className="
    mt-3
    text-zinc-400
    transition-colors
    duration-500
    group-hover:text-orange-300
  "
>
  {item.label}
</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}