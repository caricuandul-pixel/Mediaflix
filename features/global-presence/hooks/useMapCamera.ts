"use client";

import { useCallback, useMemo, useState } from "react";

import {
  createInitialState,
  MapEngineState,
  resetToWorld,
  zoomToCountry,
  zoomToRegion,
} from "../engine/mapEngine";

import {
  Country,
  Project,
  Region,
} from "../types/globalPresence.types";

export function useMapCamera() {
  const [engineState, setEngineState] =
    useState<MapEngineState>(
      createInitialState()
    );

  const [activeProject, setActiveProject] =
    useState<Project | null>(null);

  const goToWorld = useCallback(() => {
    setEngineState((prev) =>
      resetToWorld(prev)
    );
    setActiveProject(null);
  }, []);

  const goToRegion = useCallback(
    (region: Region) => {
      setEngineState((prev) =>
        zoomToRegion(prev, region)
      );
      setActiveProject(null);
    },
    []
  );

  const goToCountry = useCallback(
    (country: Country) => {
      setEngineState((prev) =>
        zoomToCountry(prev, country)
      );
      setActiveProject(null);
    },
    []
  );

  const hoverProject = useCallback(
    (project: Project | null) => {
      setActiveProject(project);
    },
    []
  );

  const selectProject = useCallback(
    (project: Project) => {
      setActiveProject(project);
    },
    []
  );

  // ✅ FIX: jangan memo seluruh object besar (bisa trigger rerender aneh)
 return useMemo(
  () => ({
    level: engineState.level,
    camera: engineState.camera,
    activeRegion: engineState.region,
    activeCountry: engineState.country,
    activeProject,

    goToWorld,
    goToRegion,
    goToCountry,
    hoverProject,
    selectProject,
  }),
  [
    engineState.level,
    engineState.camera,
    engineState.region,
    engineState.country,
    activeProject,
    goToWorld,
    goToRegion,
    goToCountry,
    hoverProject,
    selectProject,
  ]
);
}