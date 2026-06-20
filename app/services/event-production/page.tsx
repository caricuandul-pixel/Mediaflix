import ServiceHero from "@/components/public/services/detail/ServiceHero";
import ServiceOverview from "@/components/public/services/detail/ServiceOverview";
import ServiceCapabilities from "@/components/public/services/detail/ServiceCapabilities";
import ServicePackage from "@/components/public/services/detail/ServicePackage";
import ServiceTechnology from "@/components/public/services/detail/ServiceTechnology";
import ServiceWorkflow from "@/components/public/services/detail/ServiceWorkflow";
import ServiceCTA from "@/components/public/services/detail/ServiceCTA";

import {
  generateServiceMetadata,
  generateServiceJsonLd,
} from "@/lib/seo";

export const metadata =
  generateServiceMetadata(
    "event-production"
  );

export default function EventProductionPage() {
  const serviceJsonLd =
    generateServiceJsonLd(
      "event-production"
    );

  const service = {
    hero: {
      eyebrow: "Event Production",

      titlePrefix:
        "Professional Event Production",
      title:
        "& Experience Management",

      description:
        "End-to-end event production solutions for corporate events, conferences, exhibitions, sports competitions, concerts, government programs, festivals, and hybrid experiences powered by professional execution and operational excellence.",

      video: "/videos/service-1.mp4",

      buttonLabel: "Start Your Event",

      buttonHref: "/contact",

      stats: [
        {
          value: "National",
          label: "Event Scale",
        },
        {
          value: "Hybrid",
          label: "Event Ready",
        },
        {
          value: "360°",
          label: "Production Service",
        },
      ],
    },

    overview: {
      label: "Overview",

      titlePrefix:
        "End-to-End",
      title:
        "Event Production Infrastructure",

      description:
        "MEDIAFLIX provides professional event production services covering planning, technical management, creative execution, audience engagement, live streaming integration, stage production, and operational excellence for corporate, government, sports, and entertainment events.",

      highlights: [
        {
          title:
            "Event Planning & Production Management",

          description:
            "Comprehensive planning, scheduling, coordination, and execution from concept to delivery.",
        },
        {
          title:
            "Technical Event Infrastructure",

          description:
            "Professional staging, audio systems, LED displays, visual technologies, and production control environments.",
        },
        {
          title:
            "Hybrid & Digital Event Integration",

          description:
            "Seamless integration between physical venues and online audiences through professional streaming workflows.",
        },
      ],
    },

    capabilities: {
      label: "Capabilities",

      titlePrefix:
        "Core",
      title:
        "Event Production Capabilities",

      description:
        "Professional event production services designed for reliability, creativity, audience engagement, and flawless execution.",

      items: [
        {
          title:
            "Production Management",

          description:
            "End-to-end planning, coordination, scheduling, logistics, and operational control.",
        },

        {
          title:
            "Stage Production",

          description:
            "Professional stage design, stage management, and show execution.",
        },

        {
          title:
            "Audio Visual Systems",

          description:
            "High-performance sound systems, LED displays, projection systems, and presentation technology.",
        },

        {
          title:
            "Hybrid Event Solutions",

          description:
            "Integrated physical and virtual event experiences with audience interaction tools.",
        },

        {
          title:
            "Live Streaming Integration",

          description:
            "Professional live streaming and broadcast support for wider audience reach.",
        },

        {
          title:
            "Audience Engagement",

          description:
            "Interactive solutions designed to maximize participation and event impact.",
        },
      ],
    },

    packages: {
      label: "Packages",

      titlePrefix:
        "Event Production",

      title:
        "Packages",

      description:
        "Flexible event production solutions designed for events of every size and complexity.",

      items: [
        {
          title:
            "Essential Event",

          subtitle:
            "Small Scale",

          description:
            "Ideal for corporate meetings, seminars, workshops, and community events.",

          deliverables: [
            "Event Coordination",
            "Basic AV System",
            "Production Support",
            "On-Site Management",
          ],

          idealFor:
            "Corporate Meetings, Seminars, Workshops",

          timeline:
            "1 Day Setup",
        },

        {
          title:
            "Professional Event",

          subtitle:
            "Most Popular",

          description:
            "Perfect for conferences, exhibitions, product launches, and hybrid events.",

          deliverables: [
            "Stage Production",
            "Advanced Audio Visual",
            "Live Streaming Integration",
            "Technical Crew",
          ],

          idealFor:
            "Conferences, Exhibitions, Product Launches",

          timeline:
            "2–5 Days Setup",
        },

        {
          title:
            "Enterprise Event",

          subtitle:
            "Premium Solution",

          description:
            "Large-scale event production supporting national and international audiences.",

          deliverables: [
            "Full Event Management",
            "LED & Broadcast Systems",
            "Hybrid Event Platform",
            "Dedicated Production Team",
          ],

          idealFor:
            "Government Events, Festivals, National Programs",

          timeline:
            "Custom Deployment",
        },
      ],
    },

    technology: {
      label: "Technology",

      titlePrefix:
        "Event Production",
      title:
        "Technology Infrastructure",

      description:
        "Modern event technology ecosystem supporting immersive audience experiences and reliable production workflows.",

      image:
        "/images/mf-(28).jpg",

      items: [
        {
          title:
            "Digital Event Platform",

          description:
            "Integrated registration, engagement, audience interaction, and event management tools.",
        },

        {
          title:
            "LED & Display Systems",

          description:
            "High-resolution visual display technology for impactful audience experiences.",
        },

        {
          title:
            "Production Control Center",

          description:
            "Centralized technical and operational management for event execution.",
        },

        {
          title:
            "Broadcast Integration",

          description:
            "Seamless integration between event production, live streaming, and broadcast systems.",
        },
      ],
    },

    workflow: {
      label: "Workflow",

      titlePrefix:
        "Event Production",
      title:
        "Workflow",

      description:
        "A structured event production process designed to ensure seamless execution and exceptional audience experiences.",

      items: [
        {
          step: "01",

          title:
            "Planning & Strategy",

          description:
            "Define objectives, audience requirements, production scope, creative direction, and logistics.",
        },

        {
          step: "02",

          title:
            "Production Setup",

          description:
            "Prepare staging, technical systems, venue infrastructure, and operational teams.",
        },

        {
          step: "03",

          title:
            "Event Execution",

          description:
            "Deliver live event operations, audience management, and technical production workflows.",
        },

        {
          step: "04",

          title:
            "Post Event Review",

          description:
            "Performance evaluation, reporting, documentation, analytics, and content delivery.",
        },
      ],
    },

    cta: {
      title:
        "Ready To Create An Exceptional Event Experience?",

      description:
        "Partner with MEDIAFLIX to deliver conferences, exhibitions, corporate events, sports competitions, festivals, government programs, and hybrid experiences powered by professional production systems and expert event management.",

      primaryLabel:
        "Start Planning",

      secondaryLabel:
        "Talk To Producer",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd
          ),
        }}
      />

      <main className="bg-[#05070B]">
        <ServiceHero data={service.hero} />

        <ServiceOverview
          data={service.overview}
        />

        <ServiceCapabilities
          data={service.capabilities}
        />

        <ServicePackage
          data={service.packages}
        />

        <ServiceTechnology
          data={service.technology}
        />

        <ServiceWorkflow
          data={service.workflow}
        />

        <ServiceCTA
          data={service.cta}
        />
      </main>
    </>
  );
}