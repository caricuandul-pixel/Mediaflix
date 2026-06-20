"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { workflow } from "../data/workflow";

export default function WorkflowSection() {
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

      {/* Top Line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

      {/* Glow */}
      <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-orange-500/10 blur-[180px]" />

      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[180px]" />

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
            className="mx-auto mb-24 max-w-4xl text-center"
          >
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              Operational
              <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                Workflow
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              A structured framework designed to ensure consistency,
              reliability and operational excellence across every project.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Line */}
            <div className="absolute left-0 right-0 top-[52px] hidden h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent lg:block" />

            <div className="grid gap-6 lg:grid-cols-5">
              {workflow.map((step, index) => (
                <motion.div
                  key={step.id}
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
                    y: -6,
                  }}
                  className="group relative"
                >
                  {/* Step Circle */}
                  <div className="relative z-10 mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-orange-500/20 bg-[#0B0F15] backdrop-blur-xl">
                    <div className="absolute inset-0 rounded-full bg-orange-500/10 blur-xl opacity-0 transition duration-500 group-hover:opacity-100" />

                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/10">
                      <span className="text-lg font-semibold text-orange-400">
                        {step.id}
                      </span>
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className="
                      group/card
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
                    <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-300 transition-all duration-700 group-hover/card:w-full" />

                    {/* Gloss */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />

                    {/* Shine */}
                    <div className="absolute inset-0 opacity-0 transition duration-500 group-hover/card:opacity-100">
                      <div className="absolute -left-[120%] top-0 h-full w-[60%] rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover/card:left-[140%]" />
                    </div>

                    <div className="relative z-10">
                      <div className="mb-4 text-sm font-semibold text-orange-400">
                        STEP {step.id}
                      </div>

                      <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover/card:text-orange-400">
                        {step.title}
                      </h3>

                      <p className="mt-4 text-sm leading-relaxed text-zinc-400 transition-colors duration-300 group-hover/card:text-zinc-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Executive Statement */}
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
              p-10
              backdrop-blur-xl
            "
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />

            <div className="relative z-10 grid gap-8 lg:grid-cols-3">
              <div>
                <h3 className="text-3xl font-bold text-white md:text-4xl">
                  Enterprise-Level
                  <span className="block text-orange-400">
                    Project Delivery
                  </span>
                </h3>
              </div>

              <div className="lg:col-span-2">
                <p className="text-lg leading-relaxed text-zinc-400">
                  MEDIAFLIX.ID combines production expertise,
                  engineering capabilities and operational support
                  into a unified workflow built for broadcast,
                  live events and large-scale productions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}