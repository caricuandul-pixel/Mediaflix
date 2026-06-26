"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { services } from "@/components/public/services/data/services";

export default function Services() {
  const [active, setActive] = useState(0);

  const activeService = services[active];

  if (!activeService) return null;

  return (
    <section className="relative overflow-hidden bg-[#05070B] py-32">
      {/* Background Grid */}
      <div
        className="
          absolute inset-0 opacity-[0.03]
          [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[180px]" />
      <div className="absolute left-0 top-0 h-[600px] w-[600px] bg-sky-500/5 blur-[180px]" />
      <div className="absolute bottom-0 right-0 h-[600px] w-[600px] bg-orange-500/5 blur-[180px]" />

      <Container>
        <div className="relative z-10">
          {/* ================= HEADER ================= */}
          <div className="mb-24 max-w-6xl">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur-xl"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" />
              </span>

              <span className="text-[10px] uppercase tracking-[0.35em] text-white/70 md:text-xs">
                <span className="text-orange-400">MEDIAFLIX.ID</span>
                <span className="mx-2">•</span>
                Services
              </span>
            </motion.div>

            <h2 className="mt-8 text-5xl font-bold leading-none text-white md:text-7xl xl:text-8xl">
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                Broadcast
              </span>
              <br />
              Engineering Services
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
              Delivering broadcast production, live streaming, technical
              engineering, studio operations, and event execution for global
              productions.
            </p>
          </div>

          {/* ================= CONTENT ================= */}
          <div className="grid gap-16 lg:grid-cols-[420px_1fr]">
            {/* ================= SIDEBAR ================= */}
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10" />

              <div className="flex flex-col">
                {services.map((service, index) => {
                  const isActive = active === index;

                  return (
                    <button
                      key={service.slug}
                      onMouseEnter={() => setActive(index)}
                      onFocus={() => setActive(index)}
                      className="group relative py-8 pl-8 pr-4 text-left"
                    >
                      {isActive && (
                        <motion.div
                          layoutId="active-service"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 35,
                          }}
                          className="absolute left-0 top-0 h-full w-[3px] rounded-full bg-orange-500"
                        />
                      )}

                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div
                            className={`text-[11px] tracking-[0.35em] transition-colors ${
                              isActive
                                ? "text-orange-500"
                                : "text-zinc-600"
                            }`}
                          >
                            {service.id}
                          </div>

                          <h3
                            className={`mt-3 text-xl font-semibold transition-all duration-300 md:text-2xl ${
                              isActive
                                ? "text-white"
                                : "text-zinc-500 group-hover:text-zinc-300"
                            }`}
                          >
                            {service.title}
                          </h3>
                        </div>

                        <span
                          className={`text-lg transition-all duration-300 ${
                            isActive
                              ? "translate-x-0 text-orange-500"
                              : "-translate-x-1 text-zinc-700"
                          }`}
                        >
                          →
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ================= SHOWCASE ================= */}
            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-zinc-950">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.slug}
                  initial={{
                    opacity: 0,
                    scale: 1.05,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.98,
                  }}
                  transition={{
                    duration: 0.45,
                  }}
                  className="relative min-h-[650px]"
                >
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    fill
                    priority={active === 0}
                    sizes="(max-width:1024px)100vw,60vw"
                    className="object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-black/40 to-transparent" />

                  {/* Bottom Content */}
                  <div className="absolute bottom-0 left-0 w-full p-10 md:p-14">
                    {/* <div className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs tracking-[0.3em] text-orange-400">
                      {activeService.id}
                    </div> */}

                    <h3 className="mt-6 text-4xl font-bold text-white md:text-5xl">
                      {activeService.title}
                    </h3>

                    {/* <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
                      {activeService.description}
                    </p> */}

                    <div className="mt-8 flex flex-wrap gap-3">
  {activeService.capabilities.map((capability) => (
    <span
      key={capability}
      className="
        rounded-full
        border
        border-white/10
        bg-white/5
        px-4
        py-2
        text-sm
        text-orange-300
        backdrop-blur-sm
      "
    >
      {capability}
    </span>
  ))}
</div>

<div className="mt-10">
  <Link
    href={`/services/${activeService.slug}`}
    className="
      group inline-flex
      items-center
      gap-4
      rounded-full
      border
      border-orange-500/40
      bg-orange-500/10
      px-7
      py-4
      text-sm
      font-semibold
      uppercase
      tracking-[0.25em]
      text-orange-300
      backdrop-blur-xl
      transition-all
      duration-300
      hover:border-orange-400
      hover:bg-orange-500
      hover:text-white
      hover:shadow-[0_0_40px_rgba(249,115,22,.35)]
    "
  >
    Explore Service

    <motion.span
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
      className="text-lg"
    >
      →
    </motion.span>
  </Link>
</div>
                    
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}