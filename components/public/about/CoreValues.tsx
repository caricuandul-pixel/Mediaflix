"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const values = [
  {
    number: "01",
    title: "Innovation",
    description:
      "Continuously embracing new technologies, advanced workflows, and creative approaches to build future-ready broadcast experiences.",
  },
  {
    number: "02",
    title: "Excellence",
    description:
      "Maintaining world-class standards throughout every stage of planning, production, and delivery.",
  },
  {
    number: "03",
    title: "Reliability",
    description:
      "Delivering dependable operations, technical precision, and trusted execution for mission-critical productions.",
  },
  {
    number: "04",
    title: "Collaboration",
    description:
      "Building strong partnerships with clients, crews, and stakeholders to achieve exceptional outcomes.",
  },
];

export default function CoreValues() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#05070B]
        py-28
        md:py-40
      "
    >
      {/* Subtle Grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "90px 90px",
        }}
      />

      {/* Premium Top Gradient */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-72
          bg-gradient-to-b
          from-orange-500/8
          to-transparent
        "
      />

      <Container>
        <div className="relative z-10">
          {/* Header */}
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              mx-auto
              mb-20
              max-w-4xl
              text-center
            "
          >
            <p
              className="
                text-xs
                uppercase
                tracking-[0.45em]
                text-orange-400
              "
            >
              MEDIAFLIX.ID • Core Values
            </p>

            <h2
              className="
                mt-6
                text-5xl
                font-bold
                leading-[0.9]
                tracking-[-0.04em]
                text-white
                md:text-7xl
              "
            >
              Principles Behind Every

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
                Great Production
              </span>
            </h2>

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
              Our values define how we innovate,
              collaborate, and deliver world-class
              broadcast experiences across global markets.
            </p>
          </motion.div>

          {/* Core Value Cards */}
          <div
            className="
              grid
              gap-6
              md:grid-cols-2
            "
          >
            {values.map((value, index) => (
              <motion.article
                key={value.number}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.02,
                }}
                whileHover={{
                  y: -6,
                }}
                  className="
                  group
                  relative
                  overflow-hidden
                  rounded-[40px]
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
                    right-0
                    top-0
                    h-48
                    w-48
                    rounded-full
                    bg-orange-500/0
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover:bg-orange-500/20
                  "
                />
                {/* Header */}
<div className="flex items-start gap-5">
  {/* Number */}
  <div
    className="
      shrink-0
      text-5xl
      font-bold
      leading-none
      text-orange-500/20
      transition-colors
      duration-300
      group-hover:text-orange-500/40
    "
  >
    {value.number}
  </div>

  {/* Title + Line */}
  <div className="flex-1">
    <h3
      className="
        text-3xl
        font-semibold
        leading-none
        text-white
        transition-colors
        duration-300
        group-hover:text-orange-400
      "
    >
      {value.title}
    </h3>

    <div
      className="
        mt-5
        h-px
        w-24
        bg-gradient-to-r
        from-orange-500
        to-transparent
      "
    />
  </div>
</div>

              

                {/* Description */}
                <p
                  className="
                    mt-6
                    text-lg
                    leading-relaxed
                    text-zinc-400
                  "
                >
                  {value.description}
                </p>
                {/* Bottom Accent */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-gradient-to-r
                    from-orange-500
                    to-orange-300
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </motion.article>
            ))}
          </div>

          {/* Final Statement */}
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
              duration: 0.2,
              delay: 0.2,
            }}
            className="
              mt-8
              rounded-[32px]
              border
              border-white/10
              bg-[#0B0E13]
              p-10
              text-center
            "
          >
            <p
              className="
                text-2xl
                font-medium
                leading-relaxed
                text-white
                md:text-3xl
              "
            >
              “Great productions are built on strong values,
              disciplined execution, and a relentless commitment
              to quality.”
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}