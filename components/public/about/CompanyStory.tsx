"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import HeroPattern from "@/components/sections/hero/HeroPattern";
import Container from "@/components/ui/Container";

const reveal = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const stats = [
  {
    value: "40+",
    label: "Productions Delivered",
  },
  {
    value: "8+",
    label: "Markets Served",
  },
  {
    value: "24/7",
    label: "Global Operations",
  },
  {
    value: "100%",
    label: "Production Commitment",
  },
];

export default function CompanyStory() {
  return (
    <section
      id="company-story"
      className="relative overflow-hidden bg-[#05070B] py-24 md:py-40"
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

      {/* Top Accent */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

      {/* Animated Glow */}
     <div
  className="
    absolute
    left-1/2
    top-0
    h-[900px]
    w-[900px]
    -translate-x-1/2
    rounded-full
    bg-orange-500/10
    blur-[220px]
  "
/>

      <div />

      <Container>
        {/* Header */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl"
        >
          <div className="text-sm uppercase tracking-[0.45em] text-orange-400">
            WHO WE ARE
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-[0.95] tracking-[-0.05em] text-white md:text-6xl xl:text-[4.5rem]">
            PROFESSIONAL

            <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              BROADCAST PRODUCTION
            </span>
          </h2>
        </motion.div>

        <div className="my-16 h-px w-full bg-white/10 md:my-20" />

        {/* Main Content */}
        <div className="grid gap-16 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          {/* Logo Card */}
          <motion.div
  initial={{
    opacity: 0,
    scale: 1.03,
  }}
  whileInView={{
    opacity: 1,
    scale: 1,
  }}
  viewport={{
    once: true,
  }}
  transition={{
    duration: 0.5,
  }}
  className="
    relative
    overflow-hidden
    min-h-[520px]
    flex
    items-center
    justify-center
  "
>
  {/* Grid */}
  <div
    className="
      absolute
      inset-0
      opacity-[0.04]
      bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),
      linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
      bg-[size:50px_50px]
    "
  />

  {/* Orange Glow */}
  <div
    className="
      absolute
      left-1/2
      top-1/2
      h-[600px]
      w-[600px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-orange-500/10
      blur-[180px]
    "
  />

  {/* Accent Lines */}
  <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

  {/* Logo */}
  <motion.div
    whileHover={{
      scale: 1.03,
    }}
    transition={{
      duration: 0.4,
    }}
    className="relative z-10"
  >
    <Image
      src="/images/mfxlogo.svg"
      alt="MEDIAFLIX.ID"
      width={1600}
      height={400}
      priority
      className="
        w-full
        max-w-[950px]
        h-auto
        object-contain
        drop-shadow-[0_0_60px_rgba(249,115,22,0.18)]
      "
    />
  </motion.div>

  {/* Bottom Info */}
  <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between border-t border-white/5 pt-8">
    <div>
      <div className="text-xs uppercase tracking-[0.35em] text-orange-400">
        Global Broadcast Company
      </div>

      <div className="mt-4 space-y-2 text-sm uppercase tracking-[0.2em] text-zinc-500">
        <div>Live Broadcast Operations</div>
        <div>Production Services</div>
        <div>Streaming & Distribution</div>
      </div>
    </div>

    <div className="text-xs uppercase tracking-[0.35em] text-orange-400/80">
      Since 2020
    </div>
  </div>
</motion.div>
          {/* Story */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="flex flex-col justify-center"
          >
            <div className="text-sm uppercase tracking-[0.35em] text-orange-400">
              Since 2020
            </div>

            <h3 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Delivering

              <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                Broadcast Excellence
              </span>
            </h3>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-zinc-400">
              <p>
                MEDIAFLIX.ID is a broadcast and media company delivering premium
                production, live streaming, and technical solutions for
                broadcasters, rights holders, brands, organizations, and event
                owners.
              </p>

              <p>
                Operating across multiple markets and production environments,
                our team combines technical expertise, creative innovation, and
                operational excellence to deliver world-class experiences at
                every scale.
              </p>

              <p>
                From live sports productions and entertainment broadcasts to
                corporate events and international productions, MEDIAFLIX.ID
                continues to expand its capabilities while maintaining the
                highest standards of quality, reliability, and execution.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
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
                delay: index * 0.08,
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
                p-8
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-orange-500/30
                hover:shadow-[0_20px_60px_rgba(249,115,22,0.12)]
              "
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-300 transition-all duration-700 group-hover:w-full" />

              <div className="relative z-10">
                <div className="text-5xl font-bold text-white transition-colors duration-300 group-hover:text-orange-400">
                  {item.value}
                </div>

                <div className="mt-3 text-sm uppercase tracking-[0.15em] text-zinc-500">
                  {item.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Showreel */}
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
          className="mt-24"
        >
          <div className="max-w-4xl">
            <div className="text-sm uppercase tracking-[0.35em] text-orange-400">
              Broadcast Showreel
            </div>

            <h3 className="mt-5 text-3xl font-semibold leading-[1] tracking-[-0.04em] text-white md:text-5xl">
              Experience Our

              <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                Production Excellence
              </span>
            </h3>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
              Discover how MEDIAFLIX.ID delivers premium broadcast experiences
              through technical precision, operational excellence, and
              world-class execution.
            </p>
          </div>

          <div
            className="
              group
              relative
              mt-10
              overflow-hidden
              rounded-[40px]
              border
              border-orange-500/10
              bg-gradient-to-b
              from-white/[0.04]
              to-white/[0.02]
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-orange-500/30
              hover:shadow-[0_20px_80px_rgba(249,115,22,0.12)]
            "
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-[280px] w-full object-cover md:h-[360px] xl:h-[420px]"
            >
              <source
                src="/videos/play_720p2.mp4"
                type="video/mp4"
              />
            </video>

            <div className="absolute inset-0 bg-black/25" />

            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-[#05070B]" />

            <HeroPattern />

            <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-[#05070B]/20 to-transparent" />
          </div>
        </motion.div>
      </Container>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
    </section>
  );
}