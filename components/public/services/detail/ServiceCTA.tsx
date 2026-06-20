"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";

export interface ServiceCTAData {
  title: string;
  description: string;
  primaryLabel: string;
  secondaryLabel: string;
}

interface ServiceCTAProps {
  data: ServiceCTAData;
}

export default function ServiceCTA({
  data,
}: ServiceCTAProps) {
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

        {/* Cinematic Glow Core */}
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[240px]" />
        <div className="absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-600/10 blur-[200px]" />
        <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[200px]" />

        {/* Film Grain Overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22 viewBox=%220 0 400 400%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22/%3E%3C/filter%3E%3Crect width=%22400%22 height=%22400%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')",
          }}
        />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="
            relative z-10
            mx-auto max-w-5xl
            text-center
            rounded-[48px]
            border border-white/10
            bg-white/[0.03]
            backdrop-blur-2xl
            p-12 md:p-20
            shadow-[0_0_120px_rgba(249,115,22,0.08)]
          "
        >
          {/* TOP SIGNAL LINE */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

          {/* STATUS BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-orange-500/20
              bg-orange-500/10
              px-5
              py-2.5
              backdrop-blur-xl
            "
          >
            <span className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_20px_rgba(251,146,60,0.9)]" />
            <span className="text-xs font-medium uppercase tracking-[0.35em] text-orange-400">
              Broadcast Ready
            </span>
          </motion.div>

          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="
              mt-10
              text-4xl
              font-semibold
              leading-tight
              text-white
              md:text-5xl
              xl:text-6xl
            "
          >
            {data.title}
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              leading-relaxed
              text-zinc-400
            "
          >
            {data.description}
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="
              mt-12
              flex
              flex-col
              sm:flex-row
              items-center
              justify-center
              gap-5
            "
          >
            <button
              className="
                group
                relative
                overflow-hidden
                rounded-full
                bg-orange-500
                px-10
                py-4
                font-medium
                text-black
                transition
                hover:bg-orange-400
              "
            >
              <span className="relative z-10">
                {data.primaryLabel}
              </span>

              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </button>

            <button
              className="
                rounded-full
                border
                border-white/20
                bg-white/[0.02]
                px-10
                py-4
                text-white
                backdrop-blur-xl
                transition
                hover:bg-white/[0.05]
              "
            >
              {data.secondaryLabel}
            </button>
          </motion.div>

          {/* DIVIDER */}
          <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* TRUST STRIP */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-zinc-500">
            <span>International Broadcast Production</span>
            <span className="hidden sm:inline">•</span>
            <span>Live Events</span>
            <span className="hidden sm:inline">•</span>
            <span>Sports Coverage</span>
            <span className="hidden sm:inline">•</span>
            <span>Multi-Platform Delivery</span>
          </div>

          {/* FLOATING SIGNAL */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -bottom-8
              left-10
              hidden
              lg:block
              rounded-[28px]
              border
              border-white/10
              bg-black/60
              px-6
              py-4
              backdrop-blur-2xl
            "
          >
            <p className="text-xs uppercase tracking-[0.35em] text-orange-400">
              Live System
            </p>
            <p className="mt-2 text-white">
              Ready for Deployment
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}