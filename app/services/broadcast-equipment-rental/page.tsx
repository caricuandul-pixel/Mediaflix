import ServiceHero from "@/components/public/services/detail/ServiceHero";
import ServiceOverview from "@/components/public/services/detail/ServiceOverview";
import ServiceCapabilities from "@/components/public/services/detail/ServiceCapabilities";
import ServicePackage from "@/components/public/services/detail/ServicePackage";
import ServiceTechnology from "@/components/public/services/detail/ServiceTechnology";
import ServiceWorkflow from "@/components/public/services/detail/ServiceWorkflow";
import ServiceCTA from "@/components/public/services/detail/ServiceCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Broadcast Equipment Rental | MEDIAFLIX.ID",
  description:
    "Professional broadcast equipment rental services for live productions, sports events, television broadcasts, and streaming operations.",
};
export default function RentalEquipmentBroadcastPage() {
  const service = {
    hero: {
      eyebrow: "Rental Equipment Broadcast",

      titlePrefix:
        "Professional Broadcast",
      title:
        "Equipment Rental Solutions",

      description:
        "Enterprise-grade broadcast equipment rental services for live productions, sports events, television broadcasts, streaming operations, and large-scale media productions with flexible deployment options.",

      video: "/videos/service-1.mp4",

      stats: [
        {
          value: "100+",
          label: "Equipment Units",
        },
        {
          value: "24/7",
          label: "Technical Support",
        },
        {
          value: "Nationwide",
          label: "Deployment Coverage",
        },
      ],
    },

    overview: {
      label: "Overview",

      titlePrefix:
        "Complete Broadcast",
      title:
        "Equipment Rental Ecosystem",

      description:
        "Access professional-grade production equipment without the burden of ownership. Our rental solutions provide broadcasters, production houses, event organizers, and media companies with reliable technology backed by experienced technical support.",

      highlights: [
        {
          title: "Professional Broadcast Equipment",
          description: "",
        },
        {
          title: "Flexible Rental Packages",
          description: "",
        },
        {
          title: "Technical Deployment Support",
          description: "",
        },
      ],
    },

    capabilities: {
      label: "Capabilities",

      titlePrefix:
        "Comprehensive Equipment",
      title:
        "Rental Services",

      description:
        "Broadcast-ready equipment solutions supporting productions of every scale.",

      items: [
        {
          title: "Broadcast Cameras",
          description:
            "Professional broadcast cameras for sports, studio, live events, and television productions.",
        },

        {
          title: "Video Switchers",
          description:
            "Multi-camera switching systems supporting HD, 4K, and advanced production workflows.",
        },

        {
          title: "Audio Systems",
          description:
            "Broadcast-grade audio consoles, wireless microphones, and signal processing equipment.",
        },

        {
          title: "Replay Systems",
          description:
            "Professional replay and highlights systems for sports and live event productions.",
        },

        {
          title: "Streaming Equipment",
          description:
            "Encoding, transmission, and streaming infrastructure for digital distribution.",
        },

        {
          title: "Production Accessories",
          description:
            "Monitors, intercom systems, converters, cabling, networking, and supporting equipment.",
        },
      ],
    },

    packages: {
      label: "Packages",

      titlePrefix:
        "Equipment",
      title:
        "Rental Packages",

      description:
        "Flexible rental options tailored to production requirements and operational scale.",

      items: [
        {
          title: "Essential Package",

          description:
            "Ideal for small events and basic streaming productions.",

          deliverables: [
            "Broadcast Camera Package",
            "Basic Audio Equipment",
            "Monitoring System",
            "Technical Assistance",
          ],
        },

        {
          title: "Professional Package",

          description:
            "Designed for multicamera productions and corporate broadcasts.",

          deliverables: [
            "Multi-Camera System",
            "Video Switcher",
            "Audio Mixing Console",
            "Streaming Encoder",
            "Technical Crew Support",
          ],
        },

        {
          title: "Enterprise Package",

          description:
            "Large-scale broadcast infrastructure for major productions.",

          deliverables: [
            "Full Broadcast Equipment Set",
            "Replay System",
            "Advanced Networking",
            "Redundant Signal Workflow",
            "24/7 Engineering Support",
          ],
        },
      ],
    },

    technology: {
      label: "Technology",

      titlePrefix:
        "Professional Broadcast",
      title:
        "Technology Inventory",

      description:
        "Modern equipment inventory maintained to professional broadcast standards.",

      image:
        "/images/mf-(27).jpg",

      items: [
        {
          title: "4K Broadcast Cameras",
          description:
            "Professional imaging systems supporting high-end production workflows.",
        },

        {
          title: "Production Switchers",
          description:
            "Advanced switching platforms for live broadcast environments.",
        },

        {
          title: "Signal Processing Systems",
          description:
            "Reliable conversion, routing, and distribution infrastructure.",
        },

        {
          title: "Streaming Infrastructure",
          description:
            "Enterprise-grade encoding and content delivery systems.",
        },
      ],
    },

    workflow: {
      label: "Workflow",

      titlePrefix:
        "Equipment",
      title:
        "Rental Workflow",

      description:
        "Efficient rental process ensuring equipment readiness and operational reliability.",

      items: [
        {
          step: "01",

          title: "Consultation",

          description:
            "Assess production requirements and determine equipment needs.",
        },

        {
          step: "02",

          title: "Preparation",

          description:
            "Equipment allocation, testing, and system configuration.",
        },

        {
          step: "03",

          title: "Deployment",

          description:
            "Equipment delivery, setup, and operational support.",
        },

        {
          step: "04",

          title: "Collection",

          description:
            "Equipment retrieval, inspection, and post-production support.",
        },
      ],
    },

    cta: {
      title:
        "Need Professional Broadcast Equipment?",

      description:
        "Partner with MEDIAFLIX.ID for reliable broadcast equipment rental solutions backed by experienced engineers and nationwide deployment capabilities.",

      primaryLabel: "Request Equipment",

      secondaryLabel: "Talk to Specialist",
    },
  };

  return (
    <main className="bg-[#05070B]">
      <ServiceHero data={service.hero} />

      <ServiceOverview data={service.overview} />

      <ServiceCapabilities
        data={service.capabilities}
      />

      <ServicePackage data={service.packages} />

      <ServiceTechnology
        data={service.technology}
      />

      <ServiceWorkflow data={service.workflow} />

      <ServiceCTA data={service.cta} />
    </main>
  );
}