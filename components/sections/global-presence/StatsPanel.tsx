// FILE PATH: components/sections/global-presence/StatsPanel.tsx

"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "40+",
    label: "Projects Delivered",
  },
  {
    value: "8",
    label: "Countries",
  },
  {
    value: "60+",
    label: "Crew Members",
  },
  {
    value: "24/7",
    label: "Operations",
  },
];

export default function StatsPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-8
        backdrop-blur-xl
      "
    >
      <div className="grid gap-8">
        {stats.map((item) => (
          <div
            key={item.label}
            className="
              border-b
              border-white/10
              pb-6
              last:border-b-0
            "
          >
            <h3
              className="
                text-5xl
                font-bold
                text-white
              "
            >
              {item.value}
            </h3>

            <p
              className="
                mt-2
                text-sm
                uppercase
                tracking-[0.2em]
                text-zinc-500
              "
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
