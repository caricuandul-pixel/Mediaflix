"use client";

import WorldPaths from "./WorldPaths";

import { getMapTransform } from "../engine/transform";

// import RegionMarkers from "./RegionMarkers";
// import CountryMarkers from "./CountryMarkers";
// import ProjectMarkers from "./ProjectMarkers";

import type {
  Region,
  Country,
  Project,
} from "../types/globalPresence.types";

interface WorldMapProps {
  level:
    | "world"
    | "region"
    | "country";

  camera: {
    x: number;
    y: number;
    scale: number;
  };

  activeRegion:
    | Region
    | null;

  activeCountry:
    | Country
    | null;

  activeProject:
    | Project
    | null;

  goToWorld: () => void;

  goToRegion: (
    region: Region
  ) => void;

  goToCountry: (
    country: Country
  ) => void;

  hoverProject: (
    project:
      | Project
      | null
  ) => void;

  selectProject: (
    project: Project
  ) => void;
}

export default function WorldMap({
  level,
  camera,

  activeRegion,
  activeCountry,

  // activeProject,

  goToWorld,
  // goToRegion,
  // goToCountry,

  // hoverProject,
  // selectProject,
}: WorldMapProps) {
  console.log(camera);
  console.log(
  "LEVEL",
  level
);

console.log(
  "CAMERA",
  camera
);

console.log(
  "ACTIVE REGION",
  activeRegion?.name
);

console.log(
  "ACTIVE COUNTRY",
  activeCountry?.name
);
  return (
    <div
      className="
        relative
        w-full
        h-[700px]
      "
    >
     <svg
  viewBox="-20 -20 2040 897"
  className="w-full h-full"
>
  <g transform={getMapTransform(camera)}>
  <WorldPaths />

  <circle
    cx="1400"
    cy="520"
    r="40"
    fill="red"
  />

  <circle
    cx="1450"
    cy="560"
    r="30"
    fill="blue"
  />
</g>
</svg>

      {level !==
        "world" && (
        <button
          onClick={goToWorld}
          className="
            absolute
            left-6
            top-6
            z-50

            rounded-xl

            border
            border-white/10

            bg-black/60

            px-4
            py-2

            text-sm
            text-white

            backdrop-blur
          "
        >
          Back
        </button>
      )}
    </div>
  );
}