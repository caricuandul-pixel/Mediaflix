"use client";

import { motion } from "framer-motion";

interface Props {
  id: string;
}

export default function ServiceItem({ id }: Props) {
  return (
    <motion.button
      type="button"
      whileHover={{ x: 10 }}
      whileTap={{ scale: 0.98 }}
      className="
        group
        flex
        w-full
        items-center
        justify-between
        border-b
        border-white/10
        py-8
        text-left
        transition-all
        duration-300
      "
    >
      {/* Service Number */}
      <span
        className="
          text-xl
          font-light
          tracking-[0.2em]
          text-orange-500
        "
      >
        {id}
      </span>

      {/* Explore */}
      <div
        className="
          flex
          items-center
          gap-3
          text-sm
          font-medium
          uppercase
          tracking-[0.2em]
          text-zinc-400
          transition-all
          duration-300
          group-hover:text-orange-400
        "
      >
        Explore Service

        <span
          className="
            text-lg
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        >
          →
        </span>
      </div>
    </motion.button>
  );
}