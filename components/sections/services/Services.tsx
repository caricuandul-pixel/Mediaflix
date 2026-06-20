"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import Container from "@/components/ui/Container";
import { services } from "./services.data";

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="
        relative overflow-hidden py-32
        bg-[#05070B]
      "
    >
      {/* GRID */}
      <div
        className="
          absolute inset-0 opacity-[0.03]
          [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* GLOW */}
      <div
        className="
          absolute left-1/2 top-0
          h-[700px] w-[700px]
          -translate-x-1/2
          rounded-full
          bg-orange-500/10
          blur-[180px]
        "
      />

      <div
        className="
          absolute left-0 top-0
          h-[600px] w-[600px]
          bg-sky-500/5
          blur-[180px]
        "
      />

      <div
        className="
          absolute bottom-0 right-0
          h-[600px] w-[600px]
          bg-orange-500/5
          blur-[180px]
        "
      />

      <Container>
        <div className="relative z-10">
          {/* HEADER */}
          <div className="mb-24 max-w-6xl">
            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              className="
                inline-flex items-center gap-3
                overflow-hidden rounded-full
                border border-white/10
                bg-white/[0.03]
                px-5 py-3
                backdrop-blur-xl
              "
            >
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className="
                    absolute inline-flex
                    h-full w-full
                    animate-ping
                    rounded-full
                    bg-orange-400
                  "
                />
                <span
                  className="
                    relative inline-flex
                    h-2.5 w-2.5
                    rounded-full
                    bg-orange-500
                  "
                />
              </span>

              <span
                className="
                  text-[10px]
                  md:text-xs
                  uppercase
                  tracking-[0.35em]
                  text-white/70
                "
              >
                <span className="text-orange-400">
                  MEDIAFLIX.ID
                </span>
                <span className="mx-2">•</span>
                Services
              </span>
            </motion.div>

            <h2
              className="
                mt-8
                text-5xl
                md:text-7xl
                xl:text-8xl
                font-bold
                leading-none
                text-white
              "
            >
              <span
                className="
                  bg-gradient-to-r
                  from-orange-400
                  via-orange-500
                  to-orange-600
                  bg-clip-text
                  text-transparent
                "
              >
                Broadcast
              </span>
              <br />
              Engineering Services
            </h2>

            <p
              className="
                mt-8
                max-w-3xl
                text-lg
                md:text-xl
                leading-relaxed
                text-zinc-400
              "
            >
              Delivering broadcast production, live streaming, technical
              engineering, studio operations, and event execution for global
              productions.
            </p>
          </div>

          {/* CONTENT */}
          <div className="grid gap-16 lg:grid-cols-[420px_1fr]">
            {/* SIDEBAR */}
            <div className="relative pl-8">
              {/* BACKBONE */}
              <div
                className="
                  absolute left-0 top-0 bottom-0
                  w-px bg-white/10
                "
              />

              <div className="flex flex-col">
                {services.map((service, index) => {
                  const isActive = active === index;

                  return (
                    <button
                      key={service.id}
                      onMouseEnter={() => setActive(index)}
                      onFocus={() => setActive(index)}
                      className="
                        group relative
                        py-8 pl-8 pr-4
                        text-left
                      "
                    >
                      {isActive && (
                        <motion.div
                          layoutId="service-indicator"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 35,
                          }}
                          className="
                            absolute
                            left-0 top-0
                            h-full
                            w-[3px]
                            rounded-full
                            bg-orange-500
                          "
                        />
                      )}

                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div
                            className={`
                              text-[11px]
                              tracking-[0.35em]
                              transition-colors
                              ${isActive ? "text-orange-500" : "text-zinc-600"}
                            `}
                          >
                            {service.id}
                          </div>

                          <h3
                            className={`
                              mt-3
                              text-xl
                              md:text-2xl
                              font-semibold
                              transition-colors
                              ${isActive ? "text-white" : "text-zinc-500"}
                            `}
                          >
                            {service.title}
                          </h3>
                        </div>

                        <span
                          className={`
                            text-lg
                            transition-all
                            duration-300
                            ${
                              isActive
                                ? "translate-x-0 text-orange-500"
                                : "-translate-x-1 text-zinc-700"
                            }
                          `}
                        >
                          →
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* SHOWCASE */}
            <div
              className="
                relative min-h-[620px]
                overflow-hidden
                rounded-[40px]
                border border-white/10
                bg-white/[0.02]
              "
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 h-full w-full"
                >
                  <Image
                    src={services[active].image}
                    alt={services[active].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                    priority={active === 0}
                  />
                  {/* Gradasi Gelap Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
