"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import {
  stats,
  capabilities,
} from "../data/capabilities";

export default function BroadcastCapabilities() {
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
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

      {/* Glow */}
      <div className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full bg-orange-500/10 blur-[220px]" />

      <div className="absolute left-0 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-[180px]" />

      <Container>
        <div className="relative z-10">
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
            viewport={{
              once: true,
            }}
            className="mx-auto mb-20 max-w-4xl text-center"
          >
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              Broadcast

              <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                Infrastructure
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Technology, engineering and operational resources designed
              to support complex productions across broadcast, streaming,
              studio and live event environments.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="mb-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
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
                {/* Accent Line */}
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-300 transition-all duration-700 group-hover:w-full" />

                {/* Gloss */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />

                {/* Shine */}
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute -left-[120%] top-0 h-full w-[60%] rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover:left-[140%]" />
                </div>

                <div className="relative z-10">
                  <div className="text-5xl font-bold text-white transition-colors duration-300 group-hover:text-orange-400">
                    {item.value}
                  </div>

                  <div className="mt-3 text-sm uppercase tracking-[0.15em] text-zinc-500">
                    {item.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Capability Cards */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((item, index) => (
              <motion.div
                key={item.id}
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
                  duration: 0.5,
                  delay: index * 0.06,
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
                {/* Accent */}
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-300 transition-all duration-700 group-hover:w-full" />

                {/* Gloss */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />

                {/* Shine */}
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute -left-[120%] top-0 h-full w-[60%] rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover:left-[140%]" />
                </div>

                <div className="relative z-10">
                  <div className="mb-6 text-sm font-medium tracking-[0.15em] text-orange-400">
                    {item.id}
                  </div>

                  <h3 className="text-2xl font-semibold text-white transition-all duration-300 group-hover:text-orange-400">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                    {item.description}
                  </p>

                  <div className="mt-8 h-px bg-gradient-to-r from-orange-500/30 via-white/10 to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Infrastructure Statement */}
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
              mt-20
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

            <div className="relative z-10 grid gap-10 lg:grid-cols-2">
              <div>
                <span className="text-sm uppercase tracking-[0.2em] text-orange-400">
                  Infrastructure Statement
                </span>

                <h3 className="mt-4 text-4xl font-bold text-white md:text-5xl">
                  Built For

                  <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                    Reliable Operations
                  </span>
                </h3>
              </div>

              <div>
                <p className="text-lg leading-relaxed text-zinc-400">
                  MEDIAFLIX.ID combines engineering expertise,
                  production resources and operational workflows into
                  a unified ecosystem designed for complex live
                  productions, broadcast environments and modern
                  streaming operations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}