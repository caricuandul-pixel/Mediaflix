"use client";

import { motion } from "framer-motion";

interface SectionBadgeProps {
  title: string;
  value?: string;
}

export default function SectionBadge({
  title,
  value,
}: SectionBadgeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="
        relative
        inline-flex
        items-center
        gap-3
        overflow-hidden

        rounded-full
        border
        border-white/10

        bg-white/[0.03]

        px-5
        py-3

        backdrop-blur-2xl
      "
    >
      <motion.div
        animate={{
          x: ["-120%", "220%"],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-0
          w-1/3
          skew-x-[-20deg]

          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
        "
      />

      <span className="relative flex h-2.5 w-2.5">
        <span
          className="
            absolute
            inline-flex
            h-full
            w-full
            animate-ping
            rounded-full
            bg-orange-400
            opacity-75
          "
        />

        <span
          className="
            relative
            inline-flex
            h-2.5
            w-2.5
            rounded-full
            bg-orange-500
          "
        />
      </span>

      <span
        className="
          relative
          text-[10px]
          uppercase
          tracking-[0.35em]
          text-white/60
        "
      >
        {title}
      </span>

      {value && (
        <>
          <span className="text-white/20">•</span>

          <span
            className="
              bg-gradient-to-r
              from-orange-400
              via-orange-500
              to-orange-600
              bg-clip-text
              text-transparent
              font-bold

              text-xs
              uppercase
              tracking-[0.2em]
            "
          >
            {value}
          </span>
        </>
      )}
    </motion.div>
  );
}