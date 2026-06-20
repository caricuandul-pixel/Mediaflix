"use client";

import { useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";

import WorldSvg from "./WorldSvg";
import ProjectMarkers from "./ProjectMarkers";
import ProjectTooltip from "./ProjectTooltip";

import { Country, Region, Project } from "./globalPresence.types";
// import { countrySelectors } from "./globalPresence.selectors";
// import { regionMapPoints } from "./globalPresence.mapPoints";

interface Props {
  level: "world" | "region" | "country";
  activeRegion: Region | null;
  activeCountry: Country | null;
  activeProject: Project | null;
  onProjectHover: (project: Project | null) => void;
}

const MAP_W = 2040;
const MAP_H = 897;

export default function WorldMap({
  level,
  activeRegion,
  activeCountry,
  activeProject,
  onProjectHover,
}: Props) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mapRef.current;
    if (!el) return;

    const paths = el.querySelectorAll("path");

    paths.forEach((p) => {
      p.setAttribute(
        "fill",
        level === "world" ? "#1f2937" : "#0B0F17"
      );
    });
  }, [level]);

  const camera = useMemo(() => {
    if (level === "world") {
      return {
        transform: "scale(1)",
        transformOrigin: "50% 50%",
      };
    }

    let x = 1020;
    let y = 448;
    let scale = 1;

    if (level === "country" && activeCountry) {
      x = activeCountry.location.x;
      y = activeCountry.location.y;
      scale = activeCountry.location.scale ?? 3;
    } else if (activeRegion) {
      x = activeRegion.location.x;
      y = activeRegion.location.y;
      scale = activeRegion.location.scale;
    }

    return {
      transform: `scale(${scale})`,
      transformOrigin: `${(x / MAP_W) * 100}% ${(y / MAP_H) * 100}%`,
    };
  }, [level, activeRegion, activeCountry]);

  return (
    <div className="relative w-full overflow-hidden rounded-[40px] border border-white/10 bg-[#070A0F]">
      <div ref={mapRef} className="relative w-full h-[500px]">
        <motion.div
          animate={{ transform: camera.transform }}
          style={{ transformOrigin: camera.transformOrigin }}
          className="w-full h-full"
        >
          <WorldSvg
            level={level}
            className="w-full h-full"
            renderProjectMarkers={() => (
              level === "country" &&
              activeCountry && (
                <ProjectMarkers
                  projects={activeCountry.projects}
                  activeProject={activeProject}
                  onProjectHover={onProjectHover}
                />
              )
            )}
          />
        </motion.div>
      </div>

      <ProjectTooltip activeProject={activeProject} />
    </div>
  );
}