"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";

export interface ServiceWorkflowItem {
  step: string;
  title: string;
  description: string;
}

export interface ServiceWorkflowData {
  label: string;
  titlePrefix?: string;
  title: string;
  description: string;
  items: ServiceWorkflowItem[];
}

interface ServiceWorkflowProps {
  data: ServiceWorkflowData;
}

export default function ServiceWorkflow({
  data,
}: ServiceWorkflowProps) {
  return (
    <section className="relative overflow-hidden bg-[#05070B] py-32 lg:py-40">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        {/* Grid */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),
            linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
            bg-[size:80px_80px]
          "
        />

        {/* Flow Glow */}
        <div className="absolute right-1/2 top-0 h-[700px] w-[700px] translate-x-1/2 rounded-full bg-orange-500/10 blur-[220px]" />
        <div className="absolute left-0 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-600/10 blur-[200px]" />

        {/* Timeline Energy Line */}
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-orange-500/30 via-orange-500/10 to-transparent" />
      </div>

      <Container>
        {/* HEADER */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7 }}
  className="relative z-10 max-w-4xl"
>
  {/* LABEL BOX */}
  <div className="relative inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 overflow-hidden">
    
    {/* SHINE */}
    <motion.div
      animate={{ x: ["-120%", "220%"] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      }}
      className="
        absolute inset-0
        w-1/2
        skew-x-[-20deg]
        bg-gradient-to-r
        from-transparent
        via-white/10
        to-transparent
      "
    />

    {/* DOT */}
    <span className="relative flex h-2.5 w-2.5">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-60" />
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" />
    </span>

    {/* TEXT */}
    <span className="relative text-[11px] md:text-xs uppercase tracking-[0.35em] text-white/70">
      {data.label}
    </span>
  </div>

  {/* TITLE */}
  <h2 className="mt-8 text-4xl font-semibold leading-tight text-white md:text-5xl xl:text-6xl">
    <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
      {data.titlePrefix}
    </span>
    {data.title}
  </h2>

  {/* DESCRIPTION */}
  <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
    {data.description}
  </p>
</motion.div>

        {/* TIMELINE SYSTEM */}
        <div className="relative z-10 mt-24">
          {/* Central line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />

          <div className="space-y-16 lg:space-y-0">
            {data.items.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.step}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className={`
                    relative grid lg:grid-cols-2 gap-10 items-center
                    ${isLeft ? "" : "lg:[&>*:first-child]:order-2"}
                  `}
                >
                  {/* CONTENT CARD */}
                  <div className="relative">
                    <div
                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-[44px]
                        border
                        border-white/10
                        bg-white/[0.03]
                        p-8
                        backdrop-blur-2xl
                      "
                    >
                      {/* Glow */}
                      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent" />
                      </div>

                      {/* Step Badge */}
                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center gap-3 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5">
                          <span className="text-xs font-medium uppercase tracking-[0.3em] text-orange-400">
                            Step {item.step}
                          </span>
                        </div>

                        <div className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_15px_rgba(251,146,60,0.8)]" />
                      </div>

                      {/* Title */}
                      <h3 className="mt-6 text-2xl font-semibold text-white">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-4 text-zinc-400 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Bottom Signal */}
                      <div className="mt-8 h-px w-full bg-gradient-to-r from-orange-500/50 to-transparent" />
                    </div>
                  </div>

                  {/* TIMELINE NODE */}
                  <div className="hidden lg:flex justify-center relative">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-orange-500/30 bg-black">
                      <div className="h-3 w-3 rounded-full bg-orange-400 shadow-[0_0_25px_rgba(251,146,60,0.8)]" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM STATUS STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative z-10 mt-24 overflow-hidden rounded-[44px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-orange-400">
                Production Flow Status
              </p>

              <h3 className="mt-4 text-2xl font-semibold text-white">
                End-to-End Broadcast Workflow Execution
              </h3>

              <p className="mt-4 text-zinc-400">
                Every production follows a structured pipeline from planning,
                setup, live execution, monitoring, to post-production delivery
                ensuring enterprise-grade broadcast reliability.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-2xl font-semibold text-white">Live</p>
                <p className="text-xs text-zinc-500">Execution</p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-white">Sync</p>
                <p className="text-xs text-zinc-500">Pipeline</p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-white">Auto</p>
                <p className="text-xs text-zinc-500">Delivery</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}