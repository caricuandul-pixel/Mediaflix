import { CameraState } from "./camera";

export function getMapTransform(
  camera: CameraState
) {
  return `
    translate(
      ${camera.x}
      ${camera.y}
    )
    scale(${camera.scale})
  `;
}