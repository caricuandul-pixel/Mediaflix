import { regions } from "@/data/regions/regions";

export function getRegionBySlug(
  slug: string
) {
  return regions.find(
    (region) => region.slug === slug
  );
}