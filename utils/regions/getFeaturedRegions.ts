import { regions } from "@/data/regions/regions";

export function getFeaturedRegions() {
  return regions.filter(
    (region) => region.featured
  );
}