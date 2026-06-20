// data/services/index.ts

export interface ServiceCard {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  capabilities: string[];
}

export const services: ServiceCard[] = [
  {
    id: "01",
    slug: "broadcast-production",
    title: "Broadcast Production",
    description:
      "Multi-camera production and television broadcasting solutions.",
    image: "/images/mf-(10).jpg",
    capabilities: [
      "Multi-Camera Production",
      "Live Sports Coverage",
      "Television Broadcasting",
      "Remote Production",
    ],
  },

  {
    id: "02",
    slug: "live-streaming",
    title: "Live Streaming",
    description:
      "Reliable streaming solutions for digital platforms and hybrid events.",
    image: "/images/mf-(18).jpg",
    capabilities: [
      "YouTube Streaming",
      "Hybrid Events",
      "CDN Delivery",
      "Multi Platform Distribution",
    ],
  },

  {
    id: "03",
    slug: "studio-production",
    title: "Studio Production",
    description:
      "Studio facilities and production environments for television, sports, entertainment, and branded content.",
    image: "/images/mf-(26).jpg",
    capabilities: [
      "Podcast Production",
      "Talk Show",
      "Commercial Production",
      "Virtual Studio",
    ],
  },

  {
    id: "04",
    slug: "event-production",
    title: "Event Production",
    description:
      "Comprehensive event production and operational management.",
    image: "/images/mf-(2).jpg",
    capabilities: [
      "Corporate Events",
      "Sports Events",
      "Concert Production",
      "Award Ceremonies",
    ],
  },

  {
    id: "05",
    slug: "technical-engineering",
    title: "Technical Engineering",
    description:
      "Broadcast system design, installation, consulting, and supervision.",
    image: "/images/mf-(5).jpg",
    capabilities: [
      "System Integration",
      "Broadcast Consulting",
      "Network Infrastructure",
      "Technical Supervision",
    ],
  },
];