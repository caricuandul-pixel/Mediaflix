"use client";

import Link from "next/link";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { ChevronDown } from "lucide-react";

import {
  navItems,
  serviceItems,
} from "./navigation";

export default function MobileMenu({
  mobileMenu,
  setMobileMenu,
}: {
  mobileMenu: boolean;
  setMobileMenu: (value: boolean) => void;
}) {
  const [open, setOpen] = useState(true);

  return (
    <AnimatePresence>
      {mobileMenu && (
        <motion.div
          initial={{
            opacity: 0,
            y: -10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -10,
          }}
          className="
            absolute
            left-0
            top-[calc(100%+12px)]
            w-full

            rounded-[30px]

            border
            border-white/10

            bg-black/90
            backdrop-blur-2xl

            p-6
          "
        >
          <div className="space-y-5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() =>
                  setMobileMenu(false)
                }
                className="
                  block
                  text-lg
                  text-white
                "
              >
                {item.name}
              </Link>
            ))}

            <div className="h-px bg-white/10" />

            <button
              onClick={() => setOpen(!open)}
              className="
                flex
                w-full
                items-center
                justify-between
              "
            >
              <span className="text-lg text-white">
                Services
              </span>

              <ChevronDown
                className={`transition ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            {open && (
              <div className="grid grid-cols-2 gap-3">
                {serviceItems.map((service) => {
                  const Icon = service.icon;

                  return (
                    <Link
                      key={service.name}
                      href={service.href}
                      onClick={() =>
                        setMobileMenu(false)
                      }
                      className="
                        flex
                        items-center
                        gap-2

                        rounded-xl

                        border
                        border-white/10

                        bg-white/[0.03]

                        p-3

                        text-sm
                        text-white/80
                      "
                    >
                      <Icon
                        size={15}
                        className="text-orange-500"
                      />

                      {service.name}
                    </Link>
                  );
                })}
              </div>
            )}

            <a
              href="https://wa.me/628123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-4
                flex
                justify-center

                rounded-full

                bg-orange-500

                px-6
                py-4

                font-semibold
                text-white
              "
            >
              Konsultasi Sekarang
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}