"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";
import HeroPattern from "@/components/sections/hero/HeroPattern";

export interface ServiceHeroData {
  eyebrow: string;
  title: string;
  titlePrefix?: string;
  description: string;

  image?: string;
  video?: string;

  primaryButton?: string;
  secondaryButton?: string;
}

interface ServiceHeroProps {
  data: ServiceHeroData;
}

const fadeUp = {
  initial: {
    opacity: 0,
    y: 30,
    filter: "blur(10px)",
  },
  whileInView: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

export default function ServiceHero({
  data,
}: ServiceHeroProps) {
  return (
    <section className="relative h-screen overflow-hidden bg-[#05070B]">
      {/* VIDEO */}
     {data.video && (
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 h-full w-full object-cover scale-[1.03]"
  >
    <source src={data.video} type="video/mp4" />
  </video>
)}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/30" />

      {/* CINEMATIC GRADIENT */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-black/10
          via-black/50
          to-[#05070B]
        "
      />

      {/* SCANLINE */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay">
        <div className="h-full w-full bg-[linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:100%_4px]" />
      </div>

      <HeroPattern />

      {/* GLOWS */}
      <div className="absolute right-0 top-0 h-[900px] w-[900px] rounded-full bg-orange-500/10 blur-[250px]" />

      <div className="absolute left-0 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-[180px]" />

      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-end">
        <Container>
          <div className="max-w-4xl pb-28 md:pb-32">
            <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7 }}
  className="relative z-10 max-w-4xl"
>
  {/* LABEL BOX */}
  <div className="relative inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 overflow-hidden">
    
    {/* SHINE */}
    <motion.div
      animate={{ x: ["-120%", "220%"] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      }}
      className="
        absolute inset-0
        w-1/2
        skew-x-[-20deg]
        bg-gradient-to-r
        from-transparent
        via-white/10
        to-transparent
      "
    />

    {/* DOT */}
    <span className="relative flex h-2.5 w-2.5">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-60" />
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" />
    </span>

    {/* TEXT */}
    <span className="relative text-[11px] md:text-xs uppercase tracking-[0.35em] text-white/70">
      {data.eyebrow}
    </span>
  </div>

 
</motion.div>


            {/* TITLE */}
            <motion.h1
              variants={fadeUp}
              initial="initial"
              animate="whileInView"
              transition={{
                delay: 0.15,
                duration: 0.8,
              }}
              className="
                mt-8
                max-w-4xl
                text-4xl
                font-semibold
                leading-[1]
                tracking-[-0.04em]
                text-white
                md:text-5xl
                xl:text-6xl
              "
            >
             <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">{data.titlePrefix}{""}</span> 
              {data.title}
            </motion.h1>

            {/* DESCRIPTION */}
            {/* <motion.p
              variants={fadeUp}
              initial="initial"
              animate="whileInView"
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-relaxed
                text-zinc-300
              "
            >
              {data.description}
            </motion.p> */}

            {/* BUTTONS */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="whileInView"
              transition={{
                delay: 0.45,
                duration: 0.8,
              }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="#contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-orange-500
                  px-8
                  py-4
                  font-medium
                  text-black
                  transition-all
                  duration-300
                  hover:bg-orange-400
                  hover:shadow-[0_0_40px_rgba(249,115,22,0.3)]
                "
              >
                {data.primaryButton || "Start Project"}

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#overview"
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-8
                  py-4
                  font-medium
                  text-white
                  backdrop-blur-xl
                  transition
                  hover:bg-white/[0.06]
                "
              >
                {data.secondaryButton || "Learn More"}
              </Link>
            </motion.div>
          </div>
        </Container>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#05070B] to-transparent" />
    </section>
  );
}