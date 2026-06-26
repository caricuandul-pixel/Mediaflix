"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  image: string;
}

export default function ServicePanel({ image }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative"
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-[40px]
          border
          border-white/10
          bg-zinc-950
        "
      >
        {/* IMAGE */}
        <div className="relative h-[650px] overflow-hidden">
          <Image
            src={image}
            alt="Service"
            fill
            sizes="100vw"
            className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />
        </div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        {/* GLOW */}
        <div
          className="
            absolute
            left-1/2
            bottom-0
            h-80
            w-80
            -translate-x-1/2
            rounded-full
            bg-orange-500/20
            blur-[120px]
          "
        />

        {/* CTA */}
        <div
          className="
            absolute
            bottom-12
            left-1/2
            z-20
            -translate-x-1/2
          "
        >
          <button
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-white/15
              bg-white/10
              px-8
              py-4
              text-sm
              font-medium
              tracking-[0.2em]
              uppercase
              text-white
              backdrop-blur-xl
              transition-all
              duration-500
              hover:border-orange-500
              hover:bg-orange-500
              hover:text-black
            "
          >
            Explore Service

            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </button>
        </div>

        {/* Hover Border */}
        <div
          className="
            absolute
            bottom-0
            left-0
            h-[2px]
            w-0
            bg-orange-500
            transition-all
            duration-700
            group-hover:w-full
          "
        />
      </div>
    </motion.article>
  );
}