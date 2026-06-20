"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { RegionData } from "@/data/regions/types";

interface RegionCardProps {
  region: RegionData;
}

export default function RegionCard({
  region,
}: RegionCardProps) {
  return (
    <motion.article
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
      className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-orange-500/40
      "
    >
      {/* Image */}

      <div
        className="
          relative
          aspect-[16/10]
          overflow-hidden
        "
      >
        <Image
          fill
          src={region.image}
          alt={region.name}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/90
            via-black/20
            to-transparent
          "
        />
      </div>

      {/* Content */}

      <div className="p-8">
        <h3
          className="
            text-2xl
            font-semibold
            text-white
          "
        >
          {region.name}
        </h3>

        <p
          className="
            mt-4
            leading-relaxed
            text-zinc-400
          "
        >
          {region.description}
        </p>

        {/* Countries */}

        <div
          className="
            mt-6
            flex
            flex-wrap
            gap-2
          "
        >
          {region.countries
            .slice(0, 4)
            .map((country) => (
              <span
                key={country}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-3
                  py-1
                  text-xs
                  text-zinc-300
                "
              >
                {country}
              </span>
            ))}
        </div>
      </div>

      {/* Glow */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      >
        <div
          className="
            absolute
            -right-24
            -top-24
            h-56
            w-56
            rounded-full
            bg-orange-500/10
            blur-[100px]
          "
        />
      </div>
    </motion.article>
  );
}