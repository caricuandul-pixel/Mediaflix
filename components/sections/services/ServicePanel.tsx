"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  id: string;
  title: string;
  description: string;
  image: string;
}

export default function ServicePanel({
  id,
  title,
  description,
  image,
}: Props) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
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
          border-white/5
          bg-zinc-950
        "
      >
        {/* IMAGE */}
        <div className="relative h-[600px] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            /* sizes diperbarui ke 100vw agar browser mengenali skala penuh container pada semua resolusi monitor */
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/55
            to-black/10
          "
        />

        {/* ORANGE GLOW */}
        <div
          className="
            absolute
            right-0
            top-0
            h-72
            w-72
            rounded-full
            bg-orange-500/15
            blur-3xl
          "
        />

        {/* CONTENT */}
        <div
          className="
            absolute
            bottom-0
            left-0
            z-10
            w-full
            p-8
            md:p-14
            lg:p-16
          "
        >
          {/* ID */}
          <div
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-orange-500/30
              bg-orange-500/10
              px-4
              py-2
              text-xs
              font-medium
              tracking-[0.25em]
              text-orange-400
            "
          >
            {id}
          </div>

          {/* TITLE */}
          <h3
            className="
              mt-6
              max-w-4xl
              text-4xl
              font-bold
              leading-[0.95]
              tracking-tight
              text-white
              md:text-6xl
              xl:text-7xl
            "
          >
            {title}
          </h3>

          {/* DESCRIPTION */}
          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-relaxed
              text-zinc-300
              md:text-lg
            "
          >
            {description}
          </p>

          {/* CTA */}
          <button
            type="button"
            className="
              mt-10
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-white/10
              bg-white/5
              px-6
              py-3
              text-sm
              font-medium
              text-white
              backdrop-blur-sm
              transition-all
              duration-300
              hover:border-orange-500/50
              hover:bg-orange-500/10
              hover:text-orange-300
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

        {/* BOTTOM BORDER ACCENT */}
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
