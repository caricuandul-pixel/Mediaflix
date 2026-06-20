"use client";

import { motion } from "framer-motion";

export default function HeroPattern() {
  const spacing = 140;
  const startX = 900;

  const lines = [
    {
      d: `M${startX} 0 L${startX + 260} 540 L${startX} 1080`,
      stroke: "rgba(255,255,255,0.18)",
      delay: 0,
    },
    {
      d: `M${startX + spacing} 0 L${startX + spacing + 260} 540 L${startX + spacing} 1080`,
      stroke: "rgba(255,255,255,0.10)",
      delay: 0.2,
    },
    {
      d: `M${startX + spacing * 2} 0 L${startX + spacing * 2 + 260} 540 L${startX + spacing * 2} 1080`,
      stroke: "rgba(249,115,22,0.35)", // 👈 accent lebih jelas
      delay: 0.4,
    },
  ];

  return (
    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{
          duration: 1.4,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <svg
          className="absolute top-1/2 left-1/2 h-[140vh] w-[140vw] -translate-x-1/2 -translate-y-1/2"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="none"
        >
          {lines.map((line, i) => (
            <motion.path
              key={i}
              d={line.d}
              stroke={line.stroke}
              strokeWidth="80"
              fill="none"
              strokeLinecap="round"
              initial={{
                opacity: 0,
                pathLength: 0,
              }}
              animate={{
                opacity: 1,
                pathLength: 1,
              }}
              transition={{
                duration: 1.2,
                delay: line.delay,
                ease: "easeOut",
              }}
            />
          ))}
        </svg>
      </motion.div>
    </div>
  );
}