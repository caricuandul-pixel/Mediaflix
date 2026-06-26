"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { serviceItems } from "./navigation";

export default function ServicesDropdown() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const active =
    pathname === "/services" ||
    pathname.startsWith("/services/");

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
            flex
            items-center
            justify-center
            rounded-full
            px-4
            py-2.5
            text-sm
            font-medium
            transition-all
            duration-300
          "
        >
          {active && (
            <motion.span
              layoutId="nav-active"
              className="
                absolute
                inset-0
                rounded-full
                border
                border-orange-500/20
                bg-orange-500/10
                shadow-[0_0_20px_rgba(249,115,22,0.15)]
              "
              transition={{
                type: "spring",
                stiffness: 450,
                damping: 35,
              }}
            />
          )}

          <span
            className={`
              relative
              z-10
              transition-colors
              duration-300

              ${
                active
                  ? "font-semibold text-orange-400"
                  : "text-white/75 group-hover:text-white"
              }
            `}
          >
            Services
          </span>
        </Link>

        <button
          className={`
            transition-colors
            duration-300

            ${
              active
                ? "text-orange-400"
                : "text-white/50 hover:text-white"
            }
          `}
        >
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${
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

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-orange-500/10
                via-transparent
                to-orange-400/10
              "
            />

            {/* Inner Border */}

            <div
              className="
                absolute
                inset-[1px]
                rounded-[31px]
                border
                border-white/5
              "
            />

            <div className="relative z-10">
              {/* Header */}

              <div
                className="
                  mb-4
                  border-b
                  border-white/10
                  px-2
                  pb-4
                "
              >
                <p
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.35em]
                    text-orange-400
                  "
                >
                  MEDIAFLIX.ID
                </p>

                <h3
                  className="
                    mt-2
                    text-lg
                    font-semibold
                    text-white
                  "
                >
                  Production Services
                </h3>

                <p
                  className="
                    mt-1
                    text-sm
                    text-zinc-500
                  "
                >
                  Enterprise-grade broadcast,
                  streaming, production and
                  engineering solutions.
                </p>
              </div>

              {/* Services */}

              <div className="grid grid-cols-2 gap-2">
                                {serviceItems.map((service) => {
                  const Icon = service.icon;

                  const serviceActive =
                    pathname === service.href ||
                    pathname.startsWith(
                      `${service.href}/`
                    );

                  return (
                    <motion.div
                      key={service.name}
                      whileHover={{
                        x: 4,
                      }}
                    >
                      <Link
                        href={service.href}
                        onClick={() =>
                          setIsOpen(false)
                        }
                        className={`
                          group
                          flex
                          items-center
                          gap-3
                          rounded-2xl
                          border
                          px-4
                          py-4
                          transition-all
                          duration-300

                          ${
                            serviceActive
                              ? `
                                border-orange-500/30
                                bg-orange-500/10
                              `
                              : `
                                border-transparent
                                bg-white/[0.02]
                                hover:border-orange-500/20
                                hover:bg-white/[0.05]
                              `
                          }
                        `}
                      >
                        {/* Icon */}

                        <div
                          className={`
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            border
                            transition-all
                            duration-300

                            ${
                              serviceActive
                                ? `
                                  border-orange-500/30
                                  bg-orange-500/20
                                  text-orange-400
                                `
                                : `
                                  border-white/10
                                  bg-orange-500/10
                                  text-orange-400
                                  group-hover:scale-105
                                  group-hover:bg-orange-500
                                  group-hover:text-white
                                `
                            }
                          `}
                        >
                          <Icon size={18} />
                        </div>

                        {/* Content */}

                        <div>
                          <h4
                            className={`
                              text-sm
                              transition-colors
                              duration-300

                              ${
                                serviceActive
                                  ? "font-semibold text-orange-400"
                                  : "font-medium text-white/80 group-hover:text-white"
                              }
                            `}
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

              <div
                className="
                  mt-4
                  border-t
                  border-white/10
                  pt-4
                "
              >
                <Link
                  href="/services"
                  onClick={() =>
                    setIsOpen(false)
                  }
                  className={`
                    flex
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    py-3
                    text-sm
                    font-medium
                    transition-all
                    duration-300

                    ${
                      active
                        ? `
                          border-orange-500/30
                          bg-orange-500/15
                          text-orange-400
                        `
                        : `
                          border-orange-500/20
                          bg-orange-500/10
                          text-orange-400
                          hover:bg-orange-500/15
                        `
                    }
                  `}
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