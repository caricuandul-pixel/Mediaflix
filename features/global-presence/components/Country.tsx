"use client";

import type {
  Country,
} from "../types/globalPresence.types";

interface CountryProps {
  countries: Country[];

  activeCountry:
    | Country
    | null;

  onSelect: (
    country: Country
  ) => void;
}

export default function Country({
  countries,
  activeCountry,
  onSelect,
}: CountryProps) {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold">
        Countries
      </h3>

      {countries.map(
        (country) => {
          const active =
            activeCountry?.id ===
            country.id;

          return (
            <button
              key={country.id}
              onClick={() =>
                onSelect(
                  country
                )
              }
              className={`
                w-full
                text-left
                px-3
                py-2
                rounded-md
                border

                ${
                  active
                    ? "bg-orange-500 text-white"
                    : "bg-white"
                }
              `}
            >
              {country.name}
            </button>
          );
        }
      )}
    </div>
  );
}