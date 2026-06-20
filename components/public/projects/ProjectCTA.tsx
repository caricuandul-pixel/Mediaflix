"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";

export default function ProjectCTA() {
  return (
    <section className="py-24">
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
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.03]
            p-10
            md:p-16
            backdrop-blur-xl
          "
        >
          {/* Glow */}

          <div
            className="
              absolute
              right-0
              top-0
              h-80
              w-80
              rounded-full
              bg-orange-500/20
              blur-[120px]
            "
          />

          <div className="relative z-10">
            <span
              className="
                text-sm
                uppercase
                tracking-[0.3em]
                text-orange-400
              "
            >
              Start Your Next Production
            </span>

            <h2
              className="
                mt-6
                max-w-3xl
                text-4xl
                font-semibold
                text-white
                md:text-5xl
              "
            >
              Ready To Build Your Next Production?
            </h2>

            <p
              className="
                mt-6
                max-w-2xl
                text-zinc-400
              "
            >
              Work with MEDIAFLIX to create
              broadcast, streaming, and event
              production experiences that deliver
              real impact.
            </p>

            <div
              className="
                mt-10
                flex
                flex-wrap
                gap-4
              "
            >
              <Link
                href="/contact"
                className="
                  rounded-full
                  bg-orange-500
                  px-8
                  py-4
                  font-medium
                  text-white
                  transition
                  hover:bg-orange-400
                "
              >
                Start Project
              </Link>

              <Link
                href="/contact"
                className="
                  rounded-full
                  border
                  border-white/10
                  px-8
                  py-4
                  text-white
                  transition
                  hover:border-orange-500/40
                "
              >
                Contact Team
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}