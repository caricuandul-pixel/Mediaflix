"use client";

import Link from "next/link";
// import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Radio,
  MonitorPlay,
  CalendarDays,
  Settings,
} from "lucide-react";
import HeroPattern from "@/components/sections/hero/HeroPattern";
import Container from "@/components/ui/Container";
import { services } from "../data/services";

const featuredService = services[0];
const otherServices = services.slice(1);

const serviceIcons = {
  "Live Streaming": Radio,
  "Studio Production": MonitorPlay,
  "Event Production": CalendarDays,
  "Technical Engineering": Settings,
};

export default function ServiceCategories() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#05070B] py-28"
    >
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
      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[140px]" />

      <Container>
        <div className="relative z-10">
          {/* Header */}
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <h2 className="text-4xl font-bold text-white md:text-6xl">
              Integrated
              <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                Professional Services
              </span>
            </h2>

            <p className="mt-6 text-lg text-zinc-400">
              Production, streaming, engineering and event operations through
              one integrated ecosystem.
            </p>
          </div>

          <motion.div
  initial={{
    opacity: 0,
    y: 40,
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
  whileHover={{
    y: -4,
  }}
  className="
    group
    relative
    mb-8
    overflow-hidden
    rounded-[40px]
    border
    border-orange-500/10
    bg-gradient-to-b
    from-white/[0.05]
    to-white/[0.02]
    backdrop-blur-xl
    transition-all
    duration-500
    hover:border-orange-500/30
    hover:shadow-[0_30px_120px_rgba(249,115,22,0.15)]
  "
>
  {/* Orange Glow */}
  <div
    className="
      absolute
      -right-32
      -top-32
      h-[350px]
      w-[350px]
      rounded-full
      bg-orange-500/10
      blur-[120px]
      opacity-0
      transition-all
      duration-700
      group-hover:opacity-100
    "
  />

  {/* Gloss */}
  <div
    className="
      pointer-events-none
      absolute
      inset-0
      z-20
      bg-gradient-to-br
      from-white/[0.10]
      via-transparent
      to-transparent
    "
  />

  {/* Shine */}
  <div
    className="
      absolute
      inset-0
      z-20
      opacity-0
      transition
      duration-500
      group-hover:opacity-100
    "
  >
    <div
      className="
        absolute
        -left-[120%]
        top-0
        h-full
        w-[35%]
        rotate-12
        bg-gradient-to-r
        from-transparent
        via-white/10
        to-transparent
        transition-all
        duration-[1400ms]
        group-hover:left-[140%]
      "
    />
  </div>

  {/* Accent Line */}
  <div
    className="
      absolute
      left-0
      top-0
      z-30
      h-[2px]
      w-0
      bg-gradient-to-r
      from-orange-400
      via-orange-500
      to-orange-300
      transition-all
      duration-700
      group-hover:w-full
    "
  />

  <div className="relative h-[700px] overflow-hidden">
    {/* Video */}
    <video
      autoPlay
      muted
      loop
      playsInline
      className="
        absolute
        inset-0
        h-full
        w-full
        object-cover
        transition-transform
        duration-1000
        group-hover:scale-[1.03]
      "
    >
      <source
        src="/videos/play_720p.mp4"
        type="video/mp4"
      />
    </video>

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/50" />

    {/* Pattern */}
    <HeroPattern />

    {/* Gradient */}
    <div
      className="
        absolute
        inset-0
        bg-gradient-to-t
        from-[#05070B]
        via-[#05070B]/20
        to-transparent
      "
    />

    {/* Side Gradient */}
    <div
      className="
        absolute
        inset-0
        bg-gradient-to-r
        from-black/60
        via-black/20
        to-transparent
      "
    />

    {/* Glow */}
    <div
      className="
        absolute
        right-0
        top-0
        h-[500px]
        w-[500px]
        rounded-full
        bg-orange-500/10
        blur-[160px]
      "
    />

    {/* Content */}
    {/* Overlay */}
<div
  className="
    absolute
    inset-0
    bg-gradient-to-t
    from-black/90
    via-black/40
    to-transparent
    pointer-events-none
  "
/>

{/* Content */}
<div
  className="
    absolute
    bottom-0
    left-0
    z-20
    p-10
    md:p-14
  "
>
  <div
    className="
      mb-4
      text-sm
      uppercase
      tracking-[0.25em]
      text-orange-400
    "
  >
    {featuredService.id}
  </div>

  <h3
    className="
      text-5xl
      font-bold
      text-white
      transition-all
      duration-500
      md:text-7xl
      group-hover:bg-gradient-to-r
      group-hover:from-orange-300
      group-hover:via-orange-400
      group-hover:to-orange-500
      group-hover:bg-clip-text
      group-hover:text-transparent
    "
  >
    {featuredService.title}
  </h3>

  <p
    className="
      mt-6
      max-w-2xl
      text-lg
      leading-relaxed
      text-zinc-400
      transition-colors
      duration-500
      group-hover:text-zinc-200
    "
  >
    {featuredService.description}
  </p>

  <Link
    href={`/services/${featuredService.slug}`}
    className="
      relative
      z-30
      mt-10
      inline-flex
      items-center
      gap-3
      rounded-full
      bg-orange-500
      px-7
      py-4
      font-medium
      text-white
      transition-all
      duration-300
      hover:bg-orange-600
      hover:scale-105
    "
  >
    Explore Service

    <ArrowRight
      size={18}
      className="
        transition-transform
        duration-300
        group-hover:translate-x-1
      "
    />
  </Link>
</div>
  </div>
</motion.div>

          {/* Secondary Services */}
          <div className="grid gap-5 md:grid-cols-2">
            {otherServices.map((service, index) => {
              const Icon =
                serviceIcons[
                  service.title as keyof typeof serviceIcons
                ];

              return (
                <motion.div
                  key={service.id}
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
                  transition={{
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-orange-500/10
                    bg-gradient-to-b
                    from-white/[0.04]
                    to-white/[0.02]
                    p-6
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-orange-500/30
                    hover:shadow-2xl
                    hover:shadow-orange-500/10
                  "
                >
                  {/* Glow */}
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* Shine */}
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute -left-[120%] top-0 h-full w-[60%] rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover:left-[140%]" />
                  </div>

                  {/* Accent Line */}
                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-300 transition-all duration-700 group-hover:w-full" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{
                          rotate: 8,
                          scale: 1.08,
                        }}
                        className="
                          relative
                          rounded-2xl
                          bg-orange-500/10
                          p-4
                        "
                      >
                        <div className="absolute inset-0 rounded-2xl bg-orange-500/20 blur-xl opacity-0 transition duration-300 group-hover:opacity-100" />

                        {Icon && (
                          <Icon
                            size={28}
                            className="relative z-10 text-orange-500"
                          />
                        )}
                      </motion.div>

                      <div>
                        <div className="text-sm text-orange-400">
                          {service.id}
                        </div>

                        <h3 className="mt-1 text-xl font-semibold text-white">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-6 leading-relaxed text-zinc-400">
                      {service.description}
                    </p>

                    <Link
                      href={`/services/${service.slug}`}
                      className="
                        mt-8
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-medium
                        text-orange-400
                        transition-all
                        duration-300
                        hover:text-orange-300
                      "
                    >
                      Explore Service

                      <ArrowRight
                        size={16}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}