import { Project } from "../types/globalPresence.types";

/**
 * Ambil titik tengah dari beberapa project
 */
export function getProjectsCentroid(projects: Project[]) {
  if (!projects.length) {
    return null;
  }

  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  projects.forEach((p) => {
    minX = Math.min(minX, p.location.x);
    minY = Math.min(minY, p.location.y);

    maxX = Math.max(maxX, p.location.x);
    maxY = Math.max(maxY, p.location.y);
  });

  return {
    x: (minX + maxX) / 2,
    y: (minY + maxY) / 2,
  };
}

/**
 * fallback marker jika SVG tidak punya selector valid
 */
export function fallbackMarker(projects: Project[]) {
  return projects?.[0]?.location ?? null;
}