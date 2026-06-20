import { broadcastProductionSEO } from "./services/broadcast-production-seo";
import { liveStreamingSEO } from "./services/live-streaming-seo";
import { technicalEngineeringSEO }
  from "./services/technical-engineering-seo";
import { eventProductionSEO }
  from "./services/event-production-seo";
import { studioProductionSEO }
  from "./services/studio-production-seo";
  import { broadcastEquipmentRentalSEO }
  from "./services/rental-equipment-broadcast-seo";
export const serviceSeoMap = {
  "broadcast-production": broadcastProductionSEO,
  "live-streaming": liveStreamingSEO,
  "studio-production":  studioProductionSEO,
  "event-production": eventProductionSEO,
   "technical-engineering":
    technicalEngineeringSEO,
      "broadcast-equipment-rental":
    broadcastEquipmentRentalSEO,
} as const;

export type ServiceSlug =
  keyof typeof serviceSeoMap;

export const SERVICE_SEO_MAP = {
  "broadcast-production": [
    "Outside Broadcast Production",
    "Television Broadcast Production",
    "Multi Camera Broadcast Production",
    "Remote Broadcast Production",
  ],

  "live-streaming": [
    "Corporate Live Streaming",
    "Hybrid Event Streaming",
    "Webcast Production",
    "OTT Streaming Production",
  ],

  "studio-production": [
    "Studio Production",
    "Virtual Studio Production",
    "Podcast Production",
    "Talk Show Production",
  ],

  "event-production": [
    "Corporate Event Production",
    "Government Event Production",
    "Conference Production",
    "Festival Production",
  ],

  "technical-engineering": [
    "Broadcast Engineering",
    "Broadcast Infrastructure",
    "Broadcast Systems Integration",
    "Technical Broadcast Consulting",
  ],
  

"broadcast-equipment-rental": [
  "Broadcast Equipment Rental",
  "Broadcast Camera Rental",
  "Production Equipment Rental",
  "Video Switcher Rental",
  "Replay System Rental",
  "Audio Console Rental",
  "Live Production Equipment Rental",
  "Broadcast Gear Rental",
],
} as const;