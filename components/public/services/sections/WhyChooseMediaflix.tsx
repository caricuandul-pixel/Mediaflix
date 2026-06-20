"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import { advantages } from "../data/advantages";

export default function WhyChooseMediaflix() {
  return (
    <section className="relative overflow-hidden bg-[#05070B] py-32">
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

      {/* Top Border */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[220px]" />

      <Container>
        <div className="relative z-10 grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left Side */}
          <div className="lg:sticky lg:top-32 lg:self-start">
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
            >
              <span className="text-sm uppercase tracking-[0.25em] text-orange-400">
                Why Mediaflix
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                Why Leading
                <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Organizations
                </span>
                Work With MEDIAFLIX.ID
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
                Trusted by organizations requiring reliable production,
                engineering excellence and scalable operational support
                across broadcast, streaming and live event environments.
              </p>
            </motion.div>
          </div>

          {/* Right Side */}
          <div className="grid gap-6">
            {advantages.map((item, index) => (
              <motion.div
                key={item.title}
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
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -4,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[36px]
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
                {/* Accent Line */}
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-300 transition-all duration-700 group-hover:w-full" />

                {/* Gloss */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />

                {/* Shine */}
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute -left-[120%] top-0 h-full w-[60%] rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover:left-[140%]" />
                </div>

                <div className="relative z-10 flex items-start gap-6">
                  {/* Number */}
                  <div
                    className="
                      relative
                      flex
                      h-16
                      w-16
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-orange-500/20
                      bg-orange-500/10
                    "
                  >
                    <span className="text-lg font-semibold text-orange-400">
                      {item.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3
                      className="
                        text-2xl
                        font-semibold
                        text-white
                        transition-all
                        duration-300
                        group-hover:text-orange-400
                      "
                    >
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
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
          className="
            relative
            mt-24
            overflow-hidden
            rounded-[40px]
            border
            border-orange-500/10
            bg-gradient-to-b
            from-white/[0.04]
            to-white/[0.02]
            p-12
            backdrop-blur-xl
          "
        >
          {/* Accent */}
          <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-300" />

          {/* Gloss */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />

          {/* Glow */}
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-2">
            <div>
              <span className="text-sm uppercase tracking-[0.2em] text-orange-400">
                Trusted Broadcast Partner
              </span>

              <h3 className="mt-4 text-4xl font-bold text-white md:text-5xl">
                Built Around
                <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Operational Excellence
                </span>
              </h3>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-zinc-400">
                Every project is supported by experienced specialists,
                structured workflows and scalable production resources,
                ensuring consistent delivery across broadcast,
                streaming, studio and live event environments.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}