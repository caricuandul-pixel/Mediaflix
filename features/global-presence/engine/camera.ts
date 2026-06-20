export interface CameraState {
  x: number;
  y: number;
  scale: number;
}

export const DEFAULT_CAMERA: CameraState = {
  x: 0,
  y: 0,
  scale: 1,
};