"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

import Container from "@/components/ui/Container";

export default function ServicesCTA() {
  return (
    <section className="relative overflow-hidden bg-[#05070B] py-28">
      {/* Grid Background */}
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

      {/* Orange Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[180px]" />

      <Container>
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
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl"
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-500/5" />

          {/* Decorative Glow */}
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />
          <div className="absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />

          <div className="relative px-8 py-16 md:px-16 md:py-20">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-orange-500" />

              <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-300">
                MEDIAFLIX.ID • Start A Conversation
              </span>
            </div>

            {/* Content */}
            <div className="max-w-4xl">
              <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
                Ready To Elevate
                <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Your Next Production?
                </span>
              </h2>

              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
                Partner with MEDIAFLIX.ID for broadcast production,
                live streaming, studio operations, technical
                engineering, and event production services designed
                for modern productions.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-orange-600"
              >
                Start A Project

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-orange-500/30 hover:bg-white/[0.05]"
              >
                <MessageCircle size={18} />

                Contact Our Team
              </Link>
            </div>

            {/* Bottom Metrics */}
            <div className="mt-16 grid gap-6 border-t border-white/10 pt-10 md:grid-cols-4">
              {[
                {
                  value: "40+",
                  label: "Projects Delivered",
                },
                {
                  value: "8",
                  label: "Countries Covered",
                },
                {
                  value: "60+",
                  label: "Specialist Crew",
                },
                {
                  value: "24/7",
                  label: "Operations Support",
                },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-3xl font-bold text-white">
                    {item.value}
                  </div>

                  <div className="mt-2 text-sm uppercase tracking-[0.12em] text-zinc-500">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}