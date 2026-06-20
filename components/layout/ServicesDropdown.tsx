"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { serviceItems } from "./navigation";

export default function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger */}
      <div className="flex items-center gap-1">
        <Link
          href="/services"
          className="
            group
            relative
            text-sm
            font-medium
            text-white/70
            transition
            duration-300
            hover:text-white
          "
        >
          Services

          <span
            className="
              absolute
              -bottom-2
              left-0
              h-[2px]
              w-0
              rounded-full
              bg-orange-500
              transition-all
              duration-300
              group-hover:w-full
            "
          />
        </Link>

        <button className="text-white/50 transition hover:text-white">
          <ChevronDown
            size={16}
            className={`transition duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 16,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 10,
              scale: 0.96,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              absolute
              left-1/2
              top-[145%]
              z-50
              w-[620px]
              -translate-x-1/2
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-black/80
              p-4
              shadow-[0_20px_80px_rgba(0,0,0,0.55)]
              backdrop-blur-3xl
            "
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-400/10" />

            {/* Inner Border */}
            <div className="absolute inset-[1px] rounded-[31px] border border-white/5" />

            <div className="relative z-10">
              {/* Header */}
              <div className="mb-4 px-2 pb-4 border-b border-white/10">
                <p className="text-[11px] uppercase tracking-[0.35em] text-orange-400">
                  MEDIAFLIX.ID
                </p>

                <h3 className="mt-2 text-lg font-semibold text-white">
                  Production Services
                </h3>

                <p className="mt-1 text-sm text-zinc-500">
                  Enterprise-grade broadcast, streaming,
                  production and engineering solutions.
                </p>
              </div>

              {/* Services */}
              <div className="grid grid-cols-2 gap-2">
                {serviceItems.map((service) => {
                  const Icon = service.icon;

                  return (
                    <motion.div
                      key={service.name}
                      whileHover={{
                        x: 4,
                      }}
                    >
                      <Link
                        href={service.href}
                        className="
                          group
                          flex
                          items-center
                          gap-3
                          rounded-2xl
                          border
                          border-transparent
                          bg-white/[0.02]
                          px-4
                          py-4
                          transition
                          duration-300
                          hover:border-orange-500/20
                          hover:bg-white/[0.05]
                        "
                      >
                        {/* Icon */}
                        <div
                          className="
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-white/10
                            bg-orange-500/10
                            text-orange-400
                            transition
                            duration-300
                            group-hover:scale-105
                            group-hover:text-white
                          "
                        >
                          <Icon size={18} />
                        </div>

                        {/* Content */}
                        <div>
                          <h4
                            className="
                              text-sm
                              font-medium
                              text-white/80
                              transition
                              duration-300
                              group-hover:text-white
                            "
                          >
                            {service.name}
                          </h4>

                          <p className="mt-1 text-xs text-zinc-500">
                            Explore service details
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="mt-4 border-t border-white/10 pt-4">
                <Link
                  href="/services"
                  className="
                    flex
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-orange-500/20
                    bg-orange-500/10
                    py-3
                    text-sm
                    font-medium
                    text-orange-400
                    transition
                    hover:bg-orange-500/15
                  "
                >
                  View All Services
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}