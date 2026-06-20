import {
  CameraState,
  DEFAULT_CAMERA,
} from "./camera";

import {
  // createCameraFromPosition,
  createCameraFromView,
} from "./camera.utils";

import {
  Country,
  Region,
} from "../types/globalPresence.types";

export type MapLevel =
  | "world"
  | "region"
  | "country";

export interface MapEngineState {
  level: MapLevel;

  camera: CameraState;

  region: Region | null;

  country: Country | null;
}

export function createInitialState(): MapEngineState {
  return {
    level: "world",

    camera: DEFAULT_CAMERA,

    region: null,

    country: null,
  };
}

export function resetToWorld(
  state: MapEngineState
): MapEngineState {
  return {
    ...state,

    level: "world",

    camera: DEFAULT_CAMERA,

    region: null,

    country: null,
  };
}

export function zoomToRegion(
  state: MapEngineState,
  region: Region
): MapEngineState {
  return {
    ...state,

    level: "region",

    region,

    country: null,

    camera:
      createCameraFromView(
        region.location
      ),
  };
}

export function zoomToCountry(
  state: MapEngineState,
  country: Country
): MapEngineState {
  return {
    ...state,

    level: "country",

    country,

    camera:
      state.camera,
  };
}