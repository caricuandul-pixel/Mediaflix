"use client";

import type { Region } from "../types/globalPresence.types";

interface RegionProps {
  regions: Region[];

  activeRegion: Region | null;

  onSelect: (
    region: Region
  ) => void;
}

export default function Region({
  regions,
  activeRegion,
  onSelect,
}: RegionProps) {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold">
        Regions
      </h3>

      {regions.map((region) => {
        const active =
          activeRegion?.id ===
          region.id;

        return (
          <button
            key={region.id}
            onClick={() =>
              onSelect(region)
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
            {region.name}
          </button>
        );
      })}
    </div>
  );
}