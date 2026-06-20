"use client";

import { useEffect, useRef, useState } from "react";

import { CameraState } from "../engine/camera";
import { interpolateCamera } from "../utils/mapMath";

export function useCameraAnimation(
  target: CameraState,
  duration = 600
) {
  const [camera, setCamera] =
    useState<CameraState>(target);

  const fromRef = useRef<CameraState>(target);
  const frameRef = useRef<number | null>(null);

 useEffect(() => {
  const start = performance.now();

  fromRef.current = camera;

  const animate = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);

    setCamera(
      interpolateCamera(fromRef.current, target, progress)
    );

    if (progress < 1) {
      frameRef.current = requestAnimationFrame(animate);
    }
  };

  frameRef.current = requestAnimationFrame(animate);

  return () => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
  };
}, [target, duration, camera]); // ✅ FIX FINAL
  return camera;
}