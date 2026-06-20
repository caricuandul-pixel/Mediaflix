"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";

const networkStats = [
  {
    value: "50+",
    label: "Partner Facilities",
  },
  {
    value: "20+",
    label: "Technology Partners",
  },
  {
    value: "100+",
    label: "Production Crew Network",
  },
  {
    value: "Global",
    label: "Remote Production Capability",
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

export default function RegionsNetwork() {
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
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-orange-500/10
          blur-[240px]
        "
      />

      {/* Right Glow */}

      <div
        className="
          absolute
          right-0
          top-1/4
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
            duration: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            z-10
            mx-auto
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
            Global Network
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
            Built For Worldwide

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
              Production Delivery
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
            MEDIAFLIX combines strategic
            partnerships, cloud workflows,
            engineering expertise, and
            distributed production teams to
            support complex projects anywhere
            in the world.
          </p>
        </motion.div>

        {/* Stats */}

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
            mt-20
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {networkStats.map((item) => (
            <motion.div
              key={item.label}
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
                p-10
                text-center
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-orange-500/30
              "
            >
              {/* Glow */}

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
                <h3
                  className="
                    text-5xl
                    font-bold
                    tracking-tight
                    text-white
                    transition-all
                    duration-500
                    group-hover:bg-gradient-to-r
                    group-hover:from-orange-400
                    group-hover:via-orange-500
                    group-hover:to-orange-600
                    group-hover:bg-clip-text
                    group-hover:text-transparent
                  "
                >
                  {item.value}
                </h3>

                <p
                  className="
                    mt-5
                    text-sm
                    uppercase
                    tracking-[0.2em]
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

        {/* Bottom Banner */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 0.2,
            delay: 0.2,
          }}
          className="
            relative
            z-10
            mt-24
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-gradient-to-br
            from-white/[0.04]
            to-white/[0.02]
            p-10
            backdrop-blur-xl
          "
        >
          {/* Banner Glow */}

          <div
            className="
              absolute
              right-0
              top-0
              h-80
              w-80
              rounded-full
              bg-orange-500/10
              blur-[120px]
            "
          />

          <div
            className="
              relative
              grid
              gap-10
              lg:grid-cols-2
              lg:items-center
            "
          >
            <div>
              <span
                className="
                  text-sm
                  uppercase
                  tracking-[0.35em]
                  text-orange-400
                "
              >
                Worldwide Operations
              </span>

              <h3
                className="
                  mt-4
                  text-3xl
                  font-semibold
                  leading-tight
                  text-white
                  md:text-4xl
                "
              >
                One Network.

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
                  Unlimited Reach.
                </span>
              </h3>
            </div>

            <p
              className="
                text-lg
                leading-relaxed
                text-zinc-400
              "
            >
              Through remote production
              technology, cloud infrastructure,
              strategic partnerships, and
              experienced technical teams,
              MEDIAFLIX can support projects
              from virtually any location
              worldwide.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}