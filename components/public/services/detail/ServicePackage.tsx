"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";

export interface ServicePackageItem {
title: string;
subtitle?: string;
description: string;
deliverables: string[];
idealFor?: string;
timeline?: string;
}

export interface ServicePackageData {
label: string;
titlePrefix?: string;
title: string;
description: string;
items: ServicePackageItem[];
}

interface ServicePackageProps {
data: ServicePackageData;
}

export default function ServicePackage({
data,
}: ServicePackageProps) {
return ( <section className="relative overflow-hidden bg-[#05070B] py-32 lg:py-40">
{/* BACKGROUND */} <div className="absolute inset-0"> <div
       className="
         absolute inset-0
         bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),
         linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
         bg-[size:80px_80px]
       "
     />


    <div className="absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-orange-500/10 blur-[200px]" />
    <div className="absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-600/10 blur-[200px]" />
  </div>

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
    
    {/* PACKAGE GRID */}
    <div className="relative z-10 mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {data.items.map((item, index) => {
        const isFeatured = index === 1;

        const ctaText =
          index === 0
            ? "Request Proposal"
            : index === 1
            ? "Start Consultation"
            : "Contact Sales";

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.2,
              delay: index * 0.08,
            }}
            whileHover={{
              y: -12,
              scale: isFeatured ? 1.02 : 1.01,
            }}
            className={`
              group relative flex h-full flex-col overflow-hidden
              rounded-[40px] border backdrop-blur-2xl
              transition-all duration-500
              ${
                isFeatured
                  ? `
                    border-orange-500/40
                    bg-gradient-to-b
                    from-orange-500/[0.08]
                    via-orange-500/[0.03]
                    to-transparent
                    xl:scale-[1.03]
                  `
                  : `
                    border-white/10
                    bg-white/[0.03]
                  `
              }
            `}
          >
            {/* SHINE */}
            <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
              <div className="absolute -left-[120%] top-0 h-full w-[60%] rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover:left-[140%]" />
            </div>

            {/* TOP LINE */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 transition group-hover:opacity-100" />

            {/* FEATURED */}
            {isFeatured && (
              <div className="absolute right-6 top-6 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-orange-300">
                Most Popular
              </div>
            )}

            {/* CONTENT */}
            <div className="relative z-10 flex h-full flex-col p-8 lg:p-10">
              <div>
                <h3 className="text-2xl font-semibold text-white transition group-hover:text-orange-300">
                  {item.title}
                </h3>

                {item.subtitle && (
                  <div className="mt-3 inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-orange-300">
                      {item.subtitle}
                    </span>
                  </div>
                )}

                <p className="mt-5 text-sm leading-relaxed text-zinc-400 transition group-hover:text-zinc-300">
                  {item.description}
                </p>

                <div className="my-8 h-px bg-gradient-to-r from-orange-500/40 to-transparent" />

                {/* DELIVERABLES */}
                <div className="space-y-4">
                  {item.deliverables.map((deliverable) => (
                    <div
                      key={deliverable}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(251,146,60,0.8)]" />

                      <span className="text-sm leading-relaxed text-zinc-300">
                        {deliverable}
                      </span>
                    </div>
                  ))}
                </div>

                {/* METADATA */}
                {(item.idealFor || item.timeline) && (
                  <div className="mt-8 border-t border-white/10 pt-6">
                    <div className="grid gap-5">
                      {item.idealFor && (
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                            Ideal For
                          </p>

                          <p className="mt-2 text-sm text-zinc-300">
                            {item.idealFor}
                          </p>
                        </div>
                      )}

                      {item.timeline && (
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                            Deployment
                          </p>

                          <p className="mt-2 text-sm text-zinc-300">
                            {item.timeline}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="mt-auto pt-10">
                <button
                  className={`
                    relative flex w-full items-center justify-center
                    overflow-hidden rounded-2xl border px-6 py-4
                    text-sm font-medium transition-all duration-300
                    ${
                      isFeatured
                        ? "border-orange-500 bg-orange-500 text-white hover:bg-orange-400"
                        : "border-white/10 bg-white/[0.04] text-white hover:border-orange-500/40 hover:bg-orange-500/10"
                    }
                  `}
                >
                  <span className="relative z-10">
                    {ctaText}
                  </span>

                  <ArrowRight className="ml-3 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  </div>
                </button>
              </div>
            </div>

            {/* HOVER GLOW */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent" />
            </div>

            {/* FEATURED GLOW */}
            {isFeatured && (
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-orange-500/10 blur-[120px]" />
            )}
          </motion.div>
        );
      })}
    </div>

    {/* CUSTOM SOLUTION MESSAGE */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2 }}
      className="relative z-10 mt-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

        <span className="mt-8 inline-block text-xs uppercase tracking-[0.4em] text-orange-400">
          Tailored Solutions
        </span>

        <h3 className="mt-5 text-3xl font-semibold text-white">
          Need Something Beyond Standard Packages?
        </h3>

        <p className="mt-5 text-zinc-400">
          Every production environment has unique requirements.
          Our engineering team can design a fully customized
          workflow, infrastructure architecture, crew allocation,
          and deployment strategy tailored to your project.
        </p>
      </div>
    </motion.div>
  </Container>
</section>


);
}
