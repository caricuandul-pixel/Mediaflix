"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";

const advantages = [
  {
    id: "01",
    title: "Enterprise Broadcast Standards",
    description:
      "Professional workflows, technical excellence, and operational discipline aligned with international production standards.",
  },
  {
    id: "02",
    title: "Global Production Experience",
    description:
      "Supporting productions across multiple markets, locations, and event scales with consistent delivery quality.",
  },
  {
    id: "03",
    title: "Scalable Production Crew",
    description:
      "Flexible deployment of specialists, engineers, operators, and production teams based on project requirements.",
  },
  {
    id: "04",
    title: "24/7 Operations Support",
    description:
      "Continuous technical support and operational readiness for live broadcasts and mission-critical productions.",
  },
];

export default function WhyMediaflix() {
  return (
    <section className="relative overflow-hidden bg-[#05070B] py-32">
      {/* Grid */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      {/* Glow */}
      <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-orange-500/10 blur-[180px]" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Content */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
            }}
            className="lg:sticky lg:top-32 lg:h-fit"
          >
            <div
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-orange-500/20
                bg-orange-500/10
                px-5
                py-2
                text-xs
                font-medium
                uppercase
                tracking-[0.25em]
                text-orange-400
              "
            >
              MEDIAFLIX.ID • Why Choose Us
            </div>

            <h2
              className="
                mt-6
                text-4xl
                font-bold
                leading-tight
                text-white
                md:text-6xl
              "
            >
              Built For
              <br />

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
                Modern Broadcast
              </span>

              <br />
              Operations
            </h2>

            <p
              className="
                mt-8
                max-w-xl
                text-lg
                leading-relaxed
                text-zinc-400
              "
            >
              MEDIAFLIX.ID combines production expertise,
              technical capability, and operational reliability
              to support organizations, brands, broadcasters,
              and event owners with premium media solutions.
            </p>

            <div className="mt-10">
              <Link
                href="/services"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-orange-500
                  px-8
                  py-4
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:bg-orange-400
                  hover:scale-[1.02]
                "
              >
                Explore Services

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M5 12H19"
                    strokeLinecap="round"
                  />
                  <path
                    d="M13 6L19 12L13 18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Right Cards */}
          <div className="space-y-6">
            {advantages.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[40px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                  backdrop-blur-xl
                "
              >
                {/* Hover Glow */}
                <div
                  className="
                    absolute
                    right-0
                    top-0
                    h-48
                    w-48
                    rounded-full
                    bg-orange-500/0
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover:bg-orange-500/20
                  "
                />

                <div className="relative z-10 flex gap-6">
                  {/* Number */}
                  <div
                    className="
                      text-5xl
                      font-bold
                      text-white/10
                      transition-colors
                      duration-300
                      group-hover:text-orange-500/20
                    "
                  >
                    {item.id}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div
                      className="
                        mb-5
                        h-px
                        w-20
                        bg-gradient-to-r
                        from-orange-500
                        to-transparent
                      "
                    />

                    <h3
                      className="
                        text-2xl
                        font-semibold
                        text-white
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        text-base
                        leading-relaxed
                        text-zinc-400
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-gradient-to-r
                    from-orange-500
                    to-orange-300
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="
            mt-20
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.03]
            p-10
            text-center
            backdrop-blur-xl
          "
        >
          <h3
            className="
              text-2xl
              font-semibold
              text-white
              md:text-3xl
            "
          >
            Trusted To Deliver Broadcast Experiences
            Across Multiple Markets And Production Scales.
          </h3>

          <p
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-lg
              leading-relaxed
              text-zinc-400
            "
          >
            From live events and sports productions to
            corporate communications and digital streaming,
            MEDIAFLIX.ID provides reliable end-to-end
            production support for every stage of the journey.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}