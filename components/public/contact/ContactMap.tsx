"use client";

import { motion } from "framer-motion";

import {
  MapPin,
  Globe,
  Radio,
} from "lucide-react";

import Container from "@/components/ui/Container";

const fadeUp = {
  initial: {
    opacity: 0,
    y: 30,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },
};


export default function ContactMap() {
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
          top-0
          h-[600px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-orange-500/5
          blur-[220px]
        "
      />

      <Container>

        {/* Header */}

        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mx-auto
            max-w-3xl
            text-center
          "
        >
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


          <h2
            className="
              mt-6
              text-4xl
              font-semibold
              text-white
              md:text-5xl
            "
          >
            Connected From Indonesia.
            <br />
            Operating Worldwide.
          </h2>


          <p
            className="
              mt-6
              text-lg
              leading-relaxed
              text-zinc-400
            "
          >
            Our headquarters and operational
            teams are based in Indonesia,
            supported by remote production
            workflows and global technology
            partnerships to deliver projects
            anywhere in the world.
          </p>

        </motion.div>


        {/* Map Card */}

        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="
            relative
            mt-20
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
          "
        >

          {/* Map Background */}

          <div
            className="
              relative
              flex
              h-[500px]
              items-center
              justify-center
              bg-gradient-to-br
              from-[#0A0E14]
              via-[#111827]
              to-black
            "
          >

            {/* Decorative circles */}

            <div
              className="
                absolute
                h-[600px]
                w-[600px]
                rounded-full
                border
                border-white/5
              "
            />

            <div
              className="
                absolute
                h-[350px]
                w-[350px]
                rounded-full
                border
                border-white/5
              "
            />


            {/* Location Marker */}

            <motion.div
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="
                relative
                z-10
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                bg-orange-500
                shadow-[0_0_60px_rgba(249,115,22,0.6)]
              "
            >
              <MapPin
                size={36}
                className="text-white"
              />
            </motion.div>


            {/* Floating Badges */}

            <div
              className="
                absolute
                left-10
                top-10
                rounded-full
                border
                border-white/10
                bg-white/[0.05]
                px-5
                py-3
                text-sm
                text-zinc-300
                backdrop-blur-xl
              "
            >
              🇮🇩 Indonesia HQ
            </div>


            <div
              className="
                absolute
                bottom-10
                right-10
                rounded-full
                border
                border-white/10
                bg-white/[0.05]
                px-5
                py-3
                text-sm
                text-zinc-300
                backdrop-blur-xl
              "
            >
              🌍 Global Operations
            </div>

          </div>


          {/* Bottom Info */}

          <div
            className="
              grid
              gap-8
              border-t
              border-white/10
              p-10
              md:grid-cols-3
            "
          >

            {/* Location */}

            <div className="flex gap-4">

              <MapPin
                className="
                  mt-1
                  text-orange-400
                "
              />

              <div>
                <h3 className="text-white font-semibold">
                  Headquarters
                </h3>

                <p className="mt-2 text-zinc-400">
                  Jakarta, Indonesia
                </p>
              </div>

            </div>


            {/* Coverage */}

            <div className="flex gap-4">

              <Globe
                className="
                  mt-1
                  text-orange-400
                "
              />

              <div>
                <h3 className="text-white font-semibold">
                  Global Reach
                </h3>

                <p className="mt-2 text-zinc-400">
                  Remote production support
                  worldwide.
                </p>
              </div>

            </div>


            {/* Technology */}

            <div className="flex gap-4">

              <Radio
                className="
                  mt-1
                  text-orange-400
                "
              />

              <div>
                <h3 className="text-white font-semibold">
                  Technology
                </h3>

                <p className="mt-2 text-zinc-400">
                  Cloud workflows, streaming
                  infrastructure, and broadcast
                  engineering.
                </p>
              </div>

            </div>

          </div>

        </motion.div>

      </Container>
    </section>
  );
}