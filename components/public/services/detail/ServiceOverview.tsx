"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export interface ServiceOverviewItem {
  title: string;
  description: string;
}

export interface ServiceOverviewData {
  label: string;
  titlePrefix?: string;
  title: string;
  description: string;
  highlights: ServiceOverviewItem[];
}

interface ServiceOverviewProps {
  data: ServiceOverviewData;
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
};

export default function ServiceOverview({
  data,
}: ServiceOverviewProps) {
  return (
    <section className="relative overflow-hidden bg-[#05070B] py-32 lg:py-40">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),
            linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
            bg-[size:80px_80px]
          "
        />

        <div className="absolute -left-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-orange-500/10 blur-[180px]" />
        <div className="absolute right-0 top-20 h-[420px] w-[420px] rounded-full bg-orange-600/10 blur-[180px]" />
      </div>

      <Container>
        <div className="relative z-10 grid gap-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* LEFT SIDE */}
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
        <h2 className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.0] text-white md:text-5xl xl:text-5xl">
  {data.titlePrefix && (
    <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
      {data.titlePrefix}
    </span>
  )}

  {data.title}
</h2>
  <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
              {data.description}
            </p>
            <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
        

            {/* METRICS */}
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                { value: "24/7", label: "Operational Support" },
                { value: "100%", label: "Scalable Workflow" },
                { value: "Global", label: "Production Standard" },
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl"
                >
                  <p className="text-3xl font-semibold text-white">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm text-zinc-500">
                    {metric.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
</motion.div>
          

          {/* RIGHT SIDE */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            {/* MAIN CARD */}
            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl lg:p-10">
              {/* TOP LINE */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

              {/* HEADER */}
              <div className="mb-10 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-orange-400">
                    Enterprise Overview
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    Key Highlights
                  </h3>
                </div>

                <div className="h-3 w-3 rounded-full bg-orange-400 shadow-[0_0_20px_rgba(251,146,60,1)]" />
              </div>

            {/* HIGHLIGHTS */}
<div className="grid gap-5">
  {data.highlights.map((item, index) => (
    <motion.div
      key={item.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      whileHover={{ y: -6 }}
      className="
        group
        relative
        overflow-hidden
        rounded-[40px]
        border
        border-white/10
        bg-gradient-to-b
        from-white/[0.04]
        to-white/[0.02]
        p-6
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-orange-500/30
        hover:shadow-[0_20px_60px_rgba(249,115,22,0.12)]
      "
    >
      {/* TOP LINE (ANIMATED LIKE COREVALUES) */}
      <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-300 transition-all duration-700 group-hover:w-full" />

      {/* LEFT ACCENT */}
      <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-orange-400 to-orange-600 opacity-70" />

      {/* HOVER GLOW */}
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

      {/* SHINE EFFECT (COREVALUES STYLE) */}
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -left-[120%] top-0 h-full w-[60%] rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover:left-[140%]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex gap-5">
        <div
          className="
            flex h-11 w-11 shrink-0 items-center justify-center
            rounded-full border border-orange-500/20
            bg-orange-500/10 text-sm font-semibold text-orange-400
          "
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        <div>
          <h4
            className="
              text-lg font-semibold text-white
              transition-colors duration-300
              group-hover:text-orange-400
            "
          >
            {item.title}
          </h4>

          {item.description && (
            <p
              className="
                mt-2 text-sm leading-relaxed text-zinc-400
                transition-colors duration-300
                group-hover:text-zinc-300
              "
            >
              {item.description}
            </p>
          )}
        </div>
      </div>

      {/* BOTTOM LINE (MATCH COREVALUES) */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 transition-all duration-500 group-hover:w-full" />
    </motion.div>
  ))}
</div>
            </div>

            {/* FLOATING CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute -bottom-8 -right-6 hidden rounded-[28px] border border-white/10 bg-black/60 px-6 py-5 backdrop-blur-xl lg:block"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-orange-400">
                Enterprise Grade
              </p>
              <p className="mt-2 text-2xl font-semibold text-white">
                Broadcast Ready
              </p>
            </motion.div>

            {/* GLOW */}
            <div className="absolute -bottom-16 -right-16 h-52 w-52 rounded-full bg-orange-500/10 blur-[120px]" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}