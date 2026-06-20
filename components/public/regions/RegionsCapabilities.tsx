"use client";

import { motion } from "framer-motion";

import {
  Globe,
  Satellite,
  Cloud,
  Radio,
  MonitorPlay,
  Headphones,
} from "lucide-react";

import Container from "@/components/ui/Container";

const capabilities = [
  {
    title: "Multi-Country Production",
    description:
      "Coordinated production workflows across multiple countries and regions.",
    icon: Globe,
  },
  {
    title: "Remote Production",
    description:
      "Flexible REMI workflows enabling efficient global production delivery.",
    icon: MonitorPlay,
  },
  {
    title: "Cloud Broadcasting",
    description:
      "Scalable cloud-based infrastructure for live production and content distribution.",
    icon: Cloud,
  },
  {
    title: "Satellite Contribution",
    description:
      "Reliable international signal transport and broadcast contribution services.",
    icon: Satellite,
  },
  {
    title: "Hybrid Event Delivery",
    description:
      "Integrated on-site and virtual event production solutions worldwide.",
    icon: Radio,
  },
  {
    title: "24/7 Technical Support",
    description:
      "Dedicated engineering and technical operations support around the clock.",
    icon: Headphones,
  },
];

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

export default function RegionsCapabilities() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-32
        bg-[#05070B]
      "
    >
      {/* Grid Pattern */}

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
          blur-[220px]
        "
      />

      {/* Left Glow */}

      <div
        className="
          absolute
          bottom-0
          left-0
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
            duration: 0.2,
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
            Capabilities
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
            Global Production

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
              Capabilities
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
            Built to support complex international
            productions, large-scale broadcasts,
            hybrid events, remote workflows, and
            cloud-based operations across multiple
            regions worldwide.
          </p>
        </motion.div>

        {/* Cards */}

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
          {capabilities.map((capability) => {
            const Icon = capability.icon;

            return (
              <motion.div
                key={capability.title}
                variants={cardVariant}
                transition={{
                  duration: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -10,
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
                  transition-all
                  duration-500
                  hover:border-orange-500/30
                "
              >
                {/* Glow Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                    bg-gradient-to-br
                    from-orange-500/10
                    via-transparent
                    to-orange-500/5
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
                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-orange-500/20
                      bg-orange-500/10
                      transition-all
                      duration-500
                      group-hover:border-orange-500/40
                      group-hover:bg-orange-500/20
                    "
                  >
                    <Icon
                      className="
                        h-8
                        w-8
                        text-orange-400
                        transition-all
                        duration-500
                        group-hover:scale-110
                      "
                    />
                  </div>

                  {/* Title */}

                  <h3
                    className="
                      mt-6
                      text-xl
                      font-semibold
                      text-white
                      transition-colors
                      duration-500
                      group-hover:text-orange-400
                    "
                  >
                    {capability.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      mt-4
                      leading-relaxed
                      text-zinc-400
                      transition-colors
                      duration-500
                      group-hover:text-orange-200
                    "
                  >
                    {capability.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}