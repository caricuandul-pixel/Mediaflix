import {
  MapPosition,
  MapView,
} from "../types/globalPresence.types";

import { CameraState } from "./camera";

const VIEWPORT_CENTER_X =
  1020;

const VIEWPORT_CENTER_Y =
  448.5;

export function createCamera(
  x: number,
  y: number,
  scale: number
): CameraState {
  return {
    x:
      VIEWPORT_CENTER_X -
      x * scale,

    y:
      VIEWPORT_CENTER_Y -
      y * scale,

    scale,
  };
}

export function createCameraFromView(
  view: MapView
): CameraState {
  return createCamera(
    view.x,
    view.y,
    view.scale
  );
}

export function createCameraFromPosition(
  position: MapPosition,
  scale = 1
): CameraState {
  return createCamera(
    position.x,
    position.y,
    scale
  );
}