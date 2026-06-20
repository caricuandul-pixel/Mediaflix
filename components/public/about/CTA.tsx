"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#05070B] py-32 md:py-40">
      {/* Top Accent */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

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

      {/* Main Glow */}
      <div className="absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[260px]" />

      {/* Secondary Glow */}
      <div className="absolute right-[-250px] top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-orange-500/5 blur-[220px]" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,rgba(0,0,0,0.4)_100%)]" />

      <Container >
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
          transition={{
            duration: 0.6,
          }}
          className="
            relative
            overflow-hidden
            rounded-[48px]
            border
            border-orange-500/10
            bg-gradient-to-b
            from-white/[0.04]
            to-white/[0.02]
            p-10
            backdrop-blur-xl
            md:p-16
            xl:p-20
          "
        >
          {/* Glow */}
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-orange-500/10 blur-[180px]" />

          {/* Accent Line */}
          <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-300" />

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-medium uppercase tracking-[0.3em] text-orange-400">
              MEDIAFLIX.ID • Let&#39;s create something amazing
            </div>

            <h2 className="mx-auto mt-8 max-w-5xl text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-white md:text-6xl xl:text-7xl">
              Ready To Create

              <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                World-Class Productions?
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
              Partner with MEDIAFLIX.ID to deliver broadcast,
              live streaming, remote production, and media
              experiences powered by technical excellence,
              operational reliability, and creative innovation.
            </p>

            {/* Buttons */}
            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
              <button
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-orange-500
                  px-8
                  py-4
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-orange-400
                  hover:shadow-[0_20px_60px_rgba(249,115,22,0.35)]
                "
              >
                Start A Project
                <ArrowRight size={18} />
              </button>

              <button
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-8
                  py-4
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-white
                  transition-all
                  duration-300
                  hover:border-orange-500/30
                  hover:bg-white/[0.05]
                "
              >
                Contact Us
              </button>
            </div>

            {/* Stats */}
            {/* <div className="mt-16 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-3">
              <div>
                <div className="text-4xl font-semibold text-white">
                  40+
                </div>

                <div className="mt-2 text-sm uppercase tracking-[0.2em] text-zinc-500">
                  Productions
                </div>
              </div>

              <div>
                <div className="text-4xl font-semibold text-white">
                  8+
                </div>

                <div className="mt-2 text-sm uppercase tracking-[0.2em] text-zinc-500">
                  Markets Served
                </div>
              </div>

              <div>
                <div className="text-4xl font-semibold text-white">
                  24/7
                </div>

                <div className="mt-2 text-sm uppercase tracking-[0.2em] text-zinc-500">
                  Operational Support
                </div>
              </div>
            </div> */}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}