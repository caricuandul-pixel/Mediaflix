"use client";

import { motion } from "framer-motion";
import {
  Radio,
  Camera,
  MonitorPlay,
  Settings,
  Wifi,
  Mic,
  ShieldCheck,
  Network,
} from "lucide-react";

import Container from "@/components/ui/Container";

const capabilities = [
  {
    id: "01",
    title: "Multi-Camera Production",
    description:
      "Comprehensive multi-camera workflows for broadcast and live productions.",
    icon: Camera,
  },
  {
    id: "02",
    title: "Remote Production",
    description:
      "Distributed production environments with centralized control.",
    icon: Network,
  },
  {
    id: "03",
    title: "Live Broadcasting",
    description:
      "Real-time television and digital platform broadcasting operations.",
    icon: Radio,
  },
  {
    id: "04",
    title: "Streaming Infrastructure",
    description:
      "Reliable streaming delivery for hybrid and digital experiences.",
    icon: Wifi,
  },
  {
    id: "05",
    title: "Studio Operations",
    description:
      "Professional studio environments for entertainment and branded content.",
    icon: MonitorPlay,
  },
  {
    id: "06",
    title: "Broadcast Engineering",
    description:
      "Engineering support, systems integration and technical supervision.",
    icon: Settings,
  },
  {
    id: "07",
    title: "Audio & Communications",
    description:
      "Professional intercom, commentary and audio management systems.",
    icon: Mic,
  },
  {
    id: "08",
    title: "24/7 Operational Support",
    description:
      "Continuous technical support and operational monitoring.",
    icon: ShieldCheck,
  },
];

export default function ServiceCapabilities() {
  return (
    <section className="relative overflow-hidden bg-[#05070B] py-32">
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
      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[180px]" />

      <Container>
        <div className="relative z-10">
          {/* Header */}
          <motion.div
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
            className="mx-auto mb-20 max-w-4xl text-center"
          >
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              Operational

              <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                Capabilities
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              A unified production ecosystem designed to support
              broadcast, streaming, studio and live event operations.
            </p>
          </motion.div>

          {/* Capability Grid */}
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
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
                    p-6
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-orange-500/30
                    hover:shadow-[0_20px_60px_rgba(249,115,22,0.12)]
                  "
                >
                  {/* Glow */}
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* Shine */}
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute -left-[120%] top-0 h-full w-[60%] rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover:left-[140%]" />
                  </div>

                  {/* Accent Line */}
                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-300 transition-all duration-700 group-hover:w-full" />

                  {/* Gloss */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />

                  <div className="relative z-10">
                    <div className="text-sm font-semibold text-orange-400">
                      {item.id}
                    </div>

                    <motion.div
                      whileHover={{
                        rotate: 8,
                        scale: 1.05,
                      }}
                      className="
                        relative
                        mt-5
                        inline-flex
                        rounded-2xl
                        bg-orange-500/10
                        p-4
                      "
                    >
                      <div className="absolute inset-0 rounded-2xl bg-orange-500/20 blur-xl opacity-0 transition duration-300 group-hover:opacity-100" />

                      <Icon
                        size={28}
                        className="relative z-10 text-orange-500"
                      />
                    </motion.div>

                    <h3
                      className="
                        mt-6
                        text-xl
                        font-semibold
                        text-white
                        transition-all
                        duration-300
                        group-hover:text-orange-400
                      "
                    >
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Capability Visual */}
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
            className="
              relative
              mt-16
              overflow-hidden
              rounded-[40px]
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
            "
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-[500px] w-full object-cover"
            >
              <source
                src="/videos/play_720p.mp4"
                type="video/mp4"
              />
            </video>

            <div className="absolute inset-0 bg-black/50" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-[#05070B]/30 to-transparent" />

            <div className="absolute bottom-0 left-0 p-10 md:p-14">
              <h3 className="text-3xl font-bold text-white md:text-5xl">
                Built For Broadcast
              </h3>

              <p className="mt-5 max-w-2xl text-lg text-zinc-300">
                Operational workflows, engineering expertise and production
                infrastructure designed for complex live productions.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}