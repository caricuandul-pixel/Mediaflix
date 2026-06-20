"use client";

import { motion } from "framer-motion";

interface Props {
  id: string;
  title: string;
  description: string;
}

export default function ServiceItem({
  id,
  title,
  description,
}: Props) {
  return (
    <motion.div
      whileHover={{
        x: 12,
      }}
      className="
        group
        border-b
        border-white/10
        py-10
        transition-all
      "
    >
      <div
        className="
          grid
          gap-6
          lg:grid-cols-[120px_1fr_80px]
        "
      >
        <div
          className="
            text-2xl
            font-light
            text-orange-500
          "
        >
          {id}
        </div>

        <div>
          <h3
            className="
              text-3xl
              font-semibold
              text-white
              transition-all
              group-hover:text-orange-500
            "
          >
            {title}
          </h3>

          <p
            className="
              mt-4
              max-w-2xl
              text-zinc-400
            "
          >
            {description}
          </p>
        </div>

        <div
          className="
            text-right
            text-3xl
            text-zinc-600
            transition-all
            group-hover:text-orange-500
          "
        >
          →
        </div>
      </div>
    </motion.div>
  );
}