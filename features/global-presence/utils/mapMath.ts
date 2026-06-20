export function lerp(
  start: number,
  end: number,
  t: number
) {
  return start + (end - start) * t;
}

export function easeOutCubic(
  t: number
) {
  return (
    1 -
    Math.pow(1 - t, 3)
  );
}

export function interpolateCamera(
  start: {
    x: number;
    y: number;
    scale: number;
  },

  end: {
    x: number;
    y: number;
    scale: number;
  },

  progress: number
) {
  const eased =
    easeOutCubic(progress);

  return {
    x: lerp(
      start.x,
      end.x,
      eased
    ),

    y: lerp(
      start.y,
      end.y,
      eased
    ),

    scale: lerp(
      start.scale,
      end.scale,
      eased
    ),
  };
}