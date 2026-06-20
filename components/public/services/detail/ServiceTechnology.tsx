"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Container from "@/components/ui/Container";

export interface ServiceTechnologyItem {
  title: string;
  description: string;
}

export interface ServiceTechnologyData {
  label: string;
  titlePrefix?: string;
  title: string;
  description: string;
  image: string;
  items: ServiceTechnologyItem[];
}

interface ServiceTechnologyProps {
  data: ServiceTechnologyData;
}

export default function ServiceTechnology({
  data,
}: ServiceTechnologyProps) {
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

        {/* Signal Glow System */}
        <div className="absolute left-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-orange-500/10 blur-[220px]" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-orange-600/10 blur-[200px]" />

        {/* Data Flow Lines */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-orange-500 to-transparent" />
          <div className="absolute left-2/4 top-0 h-full w-px bg-gradient-to-b from-orange-500/50 to-transparent" />
          <div className="absolute left-3/4 top-0 h-full w-px bg-gradient-to-b from-orange-500/30 to-transparent" />
        </div>
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
        {/* MAIN SYSTEM LAYOUT */}
        <div className="relative z-10 mt-24 grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* LEFT: CONTROL ROOM VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[44px] border border-white/10 bg-white/[0.02]">
              <div className="relative aspect-[4/5]">
                <motion.div
                  animate={{
                    scale: [1, 1.06, 1],
                  }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={data.image}
                    alt={data.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover"
                    priority
                  />
                </motion.div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-[#05070B]/30 to-transparent" />
              </div>

              {/* TECH FRAME */}
              <div className="absolute inset-0 border border-orange-500/10" />
              <div className="absolute left-6 top-6 h-16 w-16 border-l border-t border-orange-400/60" />
              <div className="absolute bottom-6 right-6 h-16 w-16 border-b border-r border-orange-400/60" />
            </div>

            {/* FLOATING SYSTEM LABEL */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -bottom-8
                left-8
                rounded-[28px]
                border
                border-white/10
                bg-black/60
                px-6
                py-5
                backdrop-blur-2xl
              "
            >
              <p className="text-xs uppercase tracking-[0.35em] text-orange-400">
                Broadcast Infrastructure
              </p>

              <p className="mt-2 text-xl font-semibold text-white">
                Live Production Systems
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT: SYSTEM MODULES */}
          <div className="space-y-6">
            {data.items.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ x: 6 }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[36px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-7
                  backdrop-blur-2xl
                "
              >
                {/* SIGNAL LINE */}
                <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-orange-500 to-orange-600" />

                {/* HOVER GLOW */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-500/20 bg-orange-500/10">
                      <span className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_12px_rgba(251,146,60,0.8)]" />
                    </div>

                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                    {item.description}
                  </p>

                  {/* STATUS */}
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-green-400" />
                    <span className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                      Active System Module
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BOTTOM INFRASTRUCTURE STRIP */}
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
                Infrastructure Layer
              </p>

              <h3 className="mt-4 text-2xl font-semibold text-white">
                Integrated Broadcast Technology Ecosystem
              </h3>

              <p className="mt-4 text-zinc-400">
                MEDIAFLIX technology stack integrates live production systems,
                cloud-based streaming infrastructure, multi-camera control
                environments, and real-time signal processing for enterprise
                broadcast operations.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-2xl font-semibold text-white">4K+</p>
                <p className="text-xs text-zinc-500">Processing</p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-white">Low Latency</p>
                <p className="text-xs text-zinc-500">Pipeline</p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-white">Cloud Sync</p>
                <p className="text-xs text-zinc-500">System</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}