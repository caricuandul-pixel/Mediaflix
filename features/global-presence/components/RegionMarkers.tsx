"use client";

import { continents } from "../data/continents.data";

import { Region } from "../types/globalPresence.types";

interface Props {
  onSelect: (
    region: Region
  ) => void;
}

export default function RegionMarkers({
  onSelect,
}: Props) {
  return (
    <>
      {continents.flatMap(
        (continent) =>
          continent.regions.map(
            (region) => (
              <g
                key={region.id}
                className="
                  cursor-pointer
                "
                onClick={() =>
                  onSelect(region)
                }
              >
                <circle
                  cx={
                    region.location.x
                  }
                  cy={
                    region.location.y
                  }
                  r={12}
                  fill="#f97316"
                />

                <text
                  x={
                    region.location.x +
                    18
                  }
                  y={
                    region.location.y
                  }
                  fill="white"
                  fontSize="16"
                >
                  {region.name}
                </text>
              </g>
            )
          )
      )}
    </>
  );
}