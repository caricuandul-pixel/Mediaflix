"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import ServicesDropdown from "./ServicesDropdown";
import { navItems } from "./navigation";

export default function DesktopMenu() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex items-center gap-8">
      {navItems.slice(0, 2).map((item) => {
        const active = pathname === item.href;

        return (
          <motion.div
            key={item.name}
            whileHover={{ y: -2 }}
          >
            <Link
              href={item.href}
              className={`
                relative
                group
                text-sm
                font-medium
                transition-all

                ${
                  active
                    ? "text-orange-500"
                    : "text-white/70 hover:text-white"
                }
              `}
            >
              {item.name}

              <span
                className={`
                  absolute
                  -bottom-2
                  left-0
                  h-[2px]
                  rounded-full
                  bg-orange-500
                  transition-all
                  duration-300

                  ${
                    active
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }
                `}
              />
            </Link>
          </motion.div>
        );
      })}

      <ServicesDropdown />

      {navItems.slice(2).map((item) => {
        const active = pathname === item.href;

        return (
          <motion.div
            key={item.name}
            whileHover={{ y: -2 }}
          >
            <Link
              href={item.href}
              className={`
                relative
                group
                text-sm
                font-medium
                transition-all

                ${
                  active
                    ? "text-orange-500"
                    : "text-white/70 hover:text-white"
                }
              `}
            >
              {item.name}

              <span
                className={`
                  absolute
                  -bottom-2
                  left-0
                  h-[2px]
                  rounded-full
                  bg-orange-500
                  transition-all
                  duration-300

                  ${
                    active
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }
                `}
              />
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}