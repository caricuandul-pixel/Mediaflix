import { ServiceData } from "./types";

import { broadcastProduction } from "./broadcast-production";
import { liveStreaming } from "./live-streaming";
import { studioProduction } from "./studio-production";
import { eventProduction } from "./event-production";
import { technicalEngineering } from "./technical-engineering";
import { broadcastEquipmentRental } from "./broadcast-equipment-rental";

export const services: ServiceData[] = [
  broadcastProduction,
  liveStreaming,
  studioProduction,
  eventProduction,
  technicalEngineering,
  broadcastEquipmentRental,
];

export const serviceMap: Record<string, ServiceData> =
  Object.fromEntries(
    services.map((service) => [
      service.slug,
      service,
    ])
  );

export function getServiceBySlug(
  slug: string
): ServiceData | undefined {
  return serviceMap[slug];
}

export function getRelatedServices(
  slugs: string[]
): {
  slug: string;
  title: string;
  description: string;
}[] {
  return slugs
    .map((slug) => serviceMap[slug])
    .filter(
      (
        service
      ): service is ServiceData => Boolean(service)
    )
    .map((service) => ({
      slug: service.slug,
      title: service.hero.title,
      description: service.hero.description,
    }));
}

export function getAllServiceSlugs(): string[] {
  return services.map(
    (service) => service.slug
  );
}