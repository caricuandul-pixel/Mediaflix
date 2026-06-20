"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowRight,
  MessageSquare,
} from "lucide-react";

import Container from "@/components/ui/Container";

export default function RegionsCTA() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-32
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-orange-500/10
          blur-[220px]
        "
      />

      <Container>
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
            duration: 0.8,
          }}
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-gradient-to-br
            from-white/[0.05]
            via-white/[0.03]
            to-white/[0.02]
            p-12
            text-center
            backdrop-blur-xl
            md:p-20
          "
        >
          {/* Internal Glow */}

          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.12),transparent_60%)]
            "
          />

          {/* Content */}

          <div className="relative z-10">
            {/* Label */}

            <span
              className="
                text-sm
                uppercase
                tracking-[0.35em]
                text-orange-400
              "
            >
              Global Operations
            </span>

            {/* Heading */}

            <h2
              className="
                mx-auto
                mt-6
                max-w-4xl
                text-4xl
                font-semibold
                leading-tight
                text-white
                md:text-6xl
              "
            >
              Ready To Launch
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
                Your Next Global Production?
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                mx-auto
                mt-8
                max-w-3xl
                text-lg
                leading-relaxed
                text-zinc-400
              "
            >
              Whether you are planning an
              international conference,
              multi-country live broadcast,
              hybrid event, or remote
              production workflow,
              MEDIAFLIX is ready to support
              your project anywhere in the
              world.
            </p>

            {/* Buttons */}

            <div
              className="
                mt-12
                flex
                flex-col
                items-center
                justify-center
                gap-4
                sm:flex-row
              "
            >
              {/* Primary */}

              <Link
                href="/contact"
                className="
                  group
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
                  hover:bg-orange-600
                  hover:shadow-[0_0_40px_rgba(249,115,22,0.35)]
                "
              >
                Start Project

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              {/* Secondary */}

              <Link
                href="/contact"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-8
                  py-4
                  font-medium
                  text-white
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-orange-500/30
                  hover:bg-white/[0.08]
                "
              >
                <MessageSquare
                  size={18}
                />

                Contact Team
              </Link>
            </div>

            {/* Bottom Stats */}

            <div
              className="
                mt-16
                grid
                gap-8
                border-t
                border-white/10
                pt-10
                md:grid-cols-3
              "
            >
              <div>
                <p
                  className="
                    text-3xl
                    font-bold
                    text-white
                  "
                >
                  Worldwide
                </p>

                <p
                  className="
                    mt-2
                    text-sm
                    text-zinc-400
                  "
                >
                  Coverage
                </p>
              </div>

              <div>
                <p
                  className="
                    text-3xl
                    font-bold
                    text-white
                  "
                >
                  24/7
                </p>

                <p
                  className="
                    mt-2
                    text-sm
                    text-zinc-400
                  "
                >
                  Technical Support
                </p>
              </div>

              <div>
                <p
                  className="
                    text-3xl
                    font-bold
                    text-white
                  "
                >
                  Global
                </p>

                <p
                  className="
                    mt-2
                    text-sm
                    text-zinc-400
                  "
                >
                  Production Network
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}