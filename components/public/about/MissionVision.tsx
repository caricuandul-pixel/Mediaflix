"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";

const missions = [
  "Deliver premium broadcast and live production services with exceptional execution standards.",
  "Maintain enterprise-level operational excellence through reliability, precision, and consistency.",
  "Support partners with innovative and scalable production solutions tailored to their objectives.",
  "Build long-term relationships founded on trust, collaboration, and measurable results.",
];

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-[#05070B] py-32">
      {/* ===================================================== */}
      {/* BACKGROUND */}
      {/* ===================================================== */}

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Top Accent Line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

      {/* Main Glow */}
      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[180px]" />

      {/* Secondary Glow */}
      <div className="absolute right-0 top-1/2 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-[180px]" />

      {/* Left Glow */}
      <div className="absolute left-[-150px] top-1/3 h-[400px] w-[400px] rounded-full bg-orange-500/5 blur-[140px]" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.75)_100%)]" />

      <Container>
        <div className="relative z-10">
          {/* ===================================================== */}
          {/* HEADER */}
          {/* ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="mx-auto max-w-5xl text-center"
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
                tracking-[0.3em]
                text-orange-400
                backdrop-blur-xl
              "
            >
              MEDIAFLIX.ID • Vision & Mission
            </div>

            <h2 className="mt-8 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Driven By Purpose

              <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                Powered By Excellence
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
              Every production, broadcast, and media experience is guided by a
              clear vision and an unwavering commitment to operational
              excellence.
            </p>
          </motion.div>

          {/* ===================================================== */}
          {/* VISION */}
          {/* ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            whileHover={{
              y: -4,
            }}
            className="
              group
              relative
              mt-20
              overflow-hidden
              rounded-[40px]
              border
              border-orange-500/10
              bg-gradient-to-b
              from-white/[0.04]
              to-white/[0.02]
              p-10
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-orange-500/30
              hover:shadow-[0_20px_80px_rgba(249,115,22,0.12)]
              xl:p-16
            "
          >
            {/* Glow */}
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-orange-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

            {/* Shine */}
            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
              <div className="absolute -left-[120%] top-0 h-full w-[60%] rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover:left-[140%]" />
            </div>

            {/* Accent Line */}
            <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-300 transition-all duration-700 group-hover:w-full" />

            {/* Gloss */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />

            <div className="relative z-10 max-w-5xl">
              <div
                className="
                  inline-flex
                  rounded-full
                  border
                  border-orange-500/20
                  bg-orange-500/10
                  px-4
                  py-2
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-orange-400
                "
              >
                Vision
              </div>

              <h3
                className="
                  mt-8
                  text-4xl
                  font-bold
                  leading-tight
                  text-white
                  transition-all
                  duration-300
                  group-hover:text-orange-400
                  md:text-5xl
                  xl:text-6xl
                "
              >
                Shaping The Future

                <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Of Broadcast Excellence
                </span>
              </h3>

              <p className="mt-8 max-w-4xl text-xl leading-relaxed text-zinc-300">
                To become the most trusted broadcast and media production
                partner across Asia, delivering world-class experiences through
                innovation, creativity, and operational excellence.
              </p>
            </div>
          </motion.div>

          {/* ===================================================== */}
          {/* MISSION */}
          {/* ===================================================== */}

          <div className="mt-20">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="mb-12"
            >
              <div
                className="
                  inline-flex
                  rounded-full
                  border
                  border-orange-500/20
                  bg-orange-500/10
                  px-4
                  py-2
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-orange-400
                "
              >
                Mission
              </div>

              <h3 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
                How We Deliver

                <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Every Production
                </span>
              </h3>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2">
              {missions.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-orange-500/10
                    bg-gradient-to-b
                    from-white/[0.04]
                    to-white/[0.02]
                    p-8
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-orange-500/30
                    hover:shadow-[0_20px_60px_rgba(249,115,22,0.12)]
                  "
                >
                  {/* Glow */}
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* Shine */}
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute -left-[120%] top-0 h-full w-[60%] rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover:left-[140%]" />
                  </div>

                  {/* Accent Line */}
                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-300 transition-all duration-700 group-hover:w-full" />

                  {/* Gloss */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />

                  <div className="relative z-10 flex items-start gap-5">
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        bg-orange-500/10
                        text-sm
                        font-semibold
                        text-orange-400
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>
                     

                      <p className="leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                        {item}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}