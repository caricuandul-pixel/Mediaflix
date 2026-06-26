"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import { clients } from "../../sections/clients/clients.data";

export default function Clients() {
  return (
    <section className="relative overflow-hidden bg-[#05070B] py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-orange-500/5 blur-[180px]" />
      </div>

      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-orange-400">
            TRUSTED BY
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Clients & Partners
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
            We are trusted by broadcasters, corporations, government
            institutions, sports organizations, and leading brands throughout
            Indonesia.
          </p>
        </motion.div>

        {/* Logo Wall */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {clients.map((client, index) => (
            <motion.div
              key={`${client.name}-${index}`}
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.02,
              }}
              whileHover={{
                y: -4,
              }}
              className="
                group
                relative
                flex
                h-28
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                border
                border-white/5
                bg-white/[0.025]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-orange-500/25
                hover:bg-white/[0.04]
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                  bg-[radial-gradient(circle_at_center,rgba(249,115,22,.10),transparent_70%)]
                "
              />

              {/* Logo */}
              <Image
                src={client.logo}
                alt={client.name}
                width={160}
                height={70}
                className="
                  relative
                  h-auto
                  max-h-12
                  w-auto
                  max-w-[150px]
                  object-contain
                  grayscale
                  opacity-60
                  transition-all
                  duration-500
                  group-hover:scale-105
                  group-hover:grayscale-0
                  group-hover:opacity-100
                "
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}