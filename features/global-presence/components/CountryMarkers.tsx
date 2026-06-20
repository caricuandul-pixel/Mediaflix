"use client";

import {
  Country,
  Region,
} from "../types/globalPresence.types";

interface Props {
  region: Region;

  onSelect: (
    country: Country
  ) => void;
}

export default function CountryMarkers({
  region,
  onSelect,
}: Props) {
  return (
    <>
      {region.countries.map(
        (country) => (
          <g
            key={country.id}
            className="cursor-pointer"
            onClick={() =>
              onSelect(country)
            }
          >
            {/* sementara hidden */}

            <circle
              cx={0}
              cy={0}
              r={0}
            />
          </g>
        )
      )}
    </>
  );
}