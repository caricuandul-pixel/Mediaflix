"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";

export interface ServiceProjectItem {
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface ServiceProjectsData {
  label: string;
  titlePrefix?: string;
  title: string;
  description: string;
  items: ServiceProjectItem[];
}

interface ServiceProjectsProps {
  data: ServiceProjectsData;
}

export default function ServiceProjects({
  data,
}: ServiceProjectsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = data.items[activeIndex];

  return (
    <section className="relative bg-[#05070B] py-32">
      {/* Grid Background */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),
          linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      {/* Orange Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[200px]" />

      <Container>
        {/* HEADER */}
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
      {data.label}
    </span>
  </div>

  <h2 className="mt-8 text-4xl font-semibold leading-tight text-white md:text-5xl xl:text-6xl">
        <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">{data.titlePrefix}{""}</span> 
        {data.title}
      </h2>

      <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
        {data.description}
      </p>
</motion.div>
        

        {/* CONTENT */}
        <div className="relative z-10 mt-20 grid gap-16 lg:grid-cols-2">
          {/* LEFT LIST */}
          <div className="space-y-4">
            {data.items.map((item, index) => (
              <button
                key={item.title}
                onClick={() => setActiveIndex(index)}
                className={`
                  w-full text-left rounded-[32px]
                  border transition
                  p-6 backdrop-blur-xl
                  ${
                    activeIndex === index
                      ? "border-orange-500/40 bg-orange-500/10"
                      : "border-white/10 bg-white/[0.03]"
                  }
                `}
              >
                <p className="text-sm uppercase tracking-[0.2em] text-orange-400">
                  {item.category}
                </p>

                <h3 className="mt-2 text-lg font-medium text-white">
                  {item.title}
                </h3>
              </button>
            ))}
          </div>

          {/* RIGHT FEATURED */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.title}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="relative"
              >
                {/* Image */}
                <div className="overflow-hidden rounded-[40px] border border-white/10">
                  <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={activeProject.image}
                    alt={activeProject.title}
                    fill
                    
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover"
                      />
                    </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070B]/70 via-transparent to-transparent" />
                </div>

                {/* Info Card */}
                <div className="mt-6 rounded-[32px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                  <p className="text-sm uppercase tracking-[0.2em] text-orange-400">
                    {activeProject.category}
                  </p>

                  <h3 className="mt-2 text-xl font-medium text-white">
                    {activeProject.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {activeProject.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}