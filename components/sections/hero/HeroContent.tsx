"use client";

import { motion } from "framer-motion";

import HeroSignal from "./HeroSignal";

export default function HeroContent() {
  return (
    <div className="max-w-4xl">
      <HeroSignal />

      <motion.h1
        initial={{
          opacity: 0,
          y: 40,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.2,
          delay: 0.4,
        }}
        className="
          text-5xl
          font-bold
          leading-[1.05]
          text-white
          md:text-7xl
        "
      >
        Professional
        <br />
        Broadcast Production
      </motion.h1>

      <motion.p
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.2,
          delay: 0.8,
        }}
        className="
          mt-6
          text-lg
          text-zinc-300
        "
      >
        Across Asia and Beyond
      </motion.p>

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.2,
          delay: 1.1,
        }}
        className="mt-10"
      >
        <button
          className="
            rounded-full
            bg-orange-500
            px-8
            py-4
            font-semibold
            text-white
            transition
            duration-300
            hover:bg-orange-600
          "
        >
          Explore Projects
        </button>
      </motion.div>
    </div>
  );
}