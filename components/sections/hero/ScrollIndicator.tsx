"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 0.5,
      }}
      className="
        absolute
        bottom-10
        left-1/2
        -translate-x-1/2
      "
    >
      <div className="flex flex-col items-center">
        <span
          className="
            text-xs
            uppercase
            tracking-[0.3em]
            text-white/50
          "
        >
          Scroll
        </span>

        <div
          className="
            mt-3
            h-10
            w-[1px]
            bg-white/40
          "
        />
      </div>
    </motion.div>
  );
}