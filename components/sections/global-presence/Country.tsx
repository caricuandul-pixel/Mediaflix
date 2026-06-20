"use client";

import { motion } from "framer-motion";

// Memperbaiki error TS2865: Menggunakan import type dan alias nama agar tidak bentrok dengan komponen lokal
import type { Country as CountryType } from "./globalPresence.types";

interface Props {
  countries: CountryType[];

  activeCountry: string;

  onSelect: (
    countryId: string
  ) => void;
}

export default function Country({
  countries,
  activeCountry,
  onSelect,
}: Props) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10

        bg-white/[0.03]

        p-6

        backdrop-blur-xl
      "
    >
      {/* HEADER */}
      <div className="mb-6">
        <span
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.35em]

            text-orange-400
          "
        >
          Countries
        </span>

        <h3
          className="
            mt-3

            text-2xl
            font-bold

            text-white
          "
        >
          Active Markets
        </h3>

        <p
          className="
            mt-2
            text-sm
            text-zinc-400
          "
        >
          Explore countries within the
          selected region.
        </p>
      </div>

      {/* EMPTY */}
      {countries.length === 0 && (
        <div
          className="
            rounded-2xl

            border
            border-dashed
            border-white/10

            p-8

            text-center
          "
        >
          <p className="text-zinc-500">
            No countries available.
          </p>
        </div>
      )}

      {/* COUNTRY LIST */}
      <div
        className="
          flex
          flex-col
          gap-3
        "
      >
        {countries.map((country) => {
          const isActive =
            activeCountry ===
            country.id;

          return (
            <motion.button
              key={country.id}
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              onClick={() =>
                onSelect(country.id)
              }
              className={`
                relative

                overflow-hidden

                rounded-2xl

                border

                p-4

                text-left

                transition-all

                ${
                  isActive
                    ? `
                      border-orange-500/40
                      bg-orange-500/10
                    `
                    : `
                      border-white/10
                      bg-white/[0.02]

                      hover:border-orange-500/20
                    `
                }
              `}
            >
              {isActive && (
                <motion.div
                  layoutId="activeCountry"

                  className="
                    absolute
                    inset-0

                    bg-gradient-to-r
                    from-orange-500/10
                    to-orange-400/5
                  "
                />
              )}

              <div className="relative z-10">
                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >
                  <h4
                    className="
                      text-sm
                      font-semibold

                      text-white
                    "
                  >
                    {country.name}
                  </h4>

                  <span
                    className="
                      rounded-full

                      border
                      border-white/10

                      px-2
                      py-1

                      text-[10px]
                      font-medium

                      text-zinc-300
                    "
                  >
                    {
                      country.projects
                        ?.length
                    }{" "}
                    Projects
                  </span>
                </div>

                <div
                  className="
                    mt-3

                    flex
                    items-center
                    justify-between
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <span
                      className="
                        h-2
                        w-2

                        rounded-full

                        bg-green-400
                      "
                    />

                    <span
                      className="
                        text-xs

                        uppercase
                        tracking-[0.2em]

                        text-zinc-500
                      "
                    >
                      Active
                    </span>
                  </div>

                  <span
                    className="
                      text-xs
                      text-zinc-500
                    "
                  >
                    {country.code}
                  </span>
                </div>

                <div
                  className="
                    mt-3

                    h-[2px]
                    w-full

                    overflow-hidden

                    rounded-full

                    bg-white/5
                  "
                >
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width:
                        isActive
                          ? "100%"
                          : "35%",
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="
                      h-full

                      bg-gradient-to-r
                      from-orange-500
                      to-orange-300
                    "
                  />
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* FOOTER */}
      <div
        className="
          mt-6

          rounded-2xl

          border
          border-white/10

          bg-black/20

          p-4
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
          "
        >
          <span
            className="
              text-xs
              uppercase
              tracking-[0.25em]

              text-zinc-500
            "
          >
            Total Countries
          </span>

          <span
            className="
              text-lg
              font-bold

              text-orange-400
            "
          >
            {countries.length}
          </span>
        </div>
      </div>
    </div>
  );
}
