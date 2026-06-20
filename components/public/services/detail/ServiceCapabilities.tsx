"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export interface ServiceCapabilityItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface ServiceCapabilitiesData {
  label: string;
  titlePrefix?: string;
  title: string;
  description: string;
  items: ServiceCapabilityItem[];
}

interface ServiceCapabilitiesProps {
  data: ServiceCapabilitiesData;
}

export default function ServiceCapabilities({
  data,
}: ServiceCapabilitiesProps) {
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

        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[220px]" />
        <div className="absolute -left-32 bottom-0 h-[450px] w-[450px] rounded-full bg-orange-600/10 blur-[180px]" />
        <div className="absolute -right-32 top-1/3 h-[450px] w-[450px] rounded-full bg-orange-500/10 blur-[180px]" />
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

  <h2 className="mt-8 text-4xl font-semibold leading-tight text-white md:text-5xl xl:text-6xl">
        <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">{data.titlePrefix}{""}</span> 
        {data.title}
      </h2>

      <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
        {data.description}
      </p>
</motion.div>
      

        {/* CARDS */}
        <div className="relative z-10 mt-24 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {data.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -8 }}
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
                p-8
                backdrop-blur-2xl
                transition-all
                duration-300
                hover:border-orange-500/30
                hover:shadow-[0_20px_60px_rgba(249,115,22,0.12)]
              "
            >
              {/* TOP LINE */}
              <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-300 transition-all duration-700 group-hover:w-full" />

              {/* GLOW */}
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

              {/* SHINE */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -left-[120%] top-0 h-full w-[60%] rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover:left-[140%]" />
              </div>

              {/* NUMBER */}
              <div className="absolute right-6 top-6 text-5xl font-semibold text-white/[0.04] transition-colors duration-300 group-hover:text-orange-500/10">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="relative z-10">
                {/* ICON (UPDATED) */}
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 text-orange-400 shadow-[0_0_25px_rgba(249,115,22,0.15)] transition-all duration-300 group-hover:scale-110 group-hover:text-orange-300">
                  {item.icon ? (
                    item.icon
                  ) : (
                    <div className="h-2.5 w-2.5 rounded-full bg-orange-400" />
                  )}
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-orange-400">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-4 leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                  {item.description}
                </p>

                {/* DIVIDER */}
                <div className="mt-8 h-px w-full bg-gradient-to-r from-orange-500/50 to-transparent" />

                {/* STATUS */}
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-400" />
                  <span className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                    Enterprise Ready
                  </span>
                </div>
              </div>

              {/* BOTTOM LINE */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* BOTTOM BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="
            relative
            z-10
            mt-20
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.03]
            p-8
            backdrop-blur-2xl
          "
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-orange-400">
                Broadcast Infrastructure
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-white">
                Built for Enterprise Scale Production
              </h3>

              <p className="mt-4 max-w-3xl text-zinc-400">
                From live broadcast operations and multi-camera production workflows
                to streaming infrastructure and remote production systems, MEDIAFLIX
                delivers scalable solutions designed for modern media environments.
              </p>
            </div>

            <div className="flex gap-8">
              <div>
                <p className="text-3xl font-semibold text-white">24/7</p>
                <p className="mt-2 text-sm text-zinc-500">Operations</p>
              </div>

              <div>
                <p className="text-3xl font-semibold text-white">100%</p>
                <p className="mt-2 text-sm text-zinc-500">Scalable</p>
              </div>

              <div>
                <p className="text-3xl font-semibold text-white">Global</p>
                <p className="mt-2 text-sm text-zinc-500">Standard</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}