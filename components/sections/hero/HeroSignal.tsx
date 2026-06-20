"use client";

import { motion } from "framer-motion";

export default function HeroSignal() {
  return (
    <motion.div
      initial={{
        scaleX: 0,
        opacity: 0,
      }}
      animate={{
        scaleX: 1,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="
        mb-8
        h-[2px]
        w-32
        origin-left
        bg-orange-500
      "
    />
  );
}