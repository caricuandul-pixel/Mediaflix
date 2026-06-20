
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
    "technical-engineering"
  );

export default function TechnicalEngineeringPage() {
  const serviceJsonLd =
    generateServiceJsonLd(
      "technical-engineering"
    );

  const service = {
    hero: {
      eyebrow: "Technical Engineering",

      titlePrefix:
        "Broadcast & Media",
      title:
        "Technical Engineering Solutions",

      description:
        "Enterprise-grade engineering services for broadcast facilities, live production systems, media infrastructure, transmission networks, control rooms, and mission-critical technical operations.",

      video:
        "/videos/service-1.mp4",

      buttonLabel:
        "Start Consultation",

      buttonHref:
        "/contact",

      stats: [
        {
          value: "24/7",
          label:
            "Engineering Support",
        },
        {
          value: "99.9%",
          label:
            "System Reliability",
        },
        {
          value: "Enterprise",
          label:
            "Infrastructure",
        },
      ],
    },

    overview: {
      label: "Overview",

      titlePrefix:
        "Engineering Infrastructure",
      title:
        "For Modern Media Operations",

      description:
        "MEDIAFLIX provides professional broadcast engineering services covering broadcast systems integration, signal architecture, network infrastructure, transmission workflows, control rooms, media facilities, and operational support designed for reliability, scalability, and long-term performance.",

      highlights: [
        {
          title:
            "Broadcast System Integration",

          description:
            "Integration of production, transmission, monitoring, and control systems into a unified operational environment.",
        },

        {
          title:
            "Network & Signal Architecture",

          description:
            "Design and optimization of media transport networks, signal routing, and broadcast workflows.",
        },

        {
          title:
            "Mission-Critical Technical Operations",

          description:
            "Engineering support for live productions, broadcast facilities, and high-availability infrastructures.",
        },
      ],
    },

    capabilities: {
      label: "Capabilities",

      titlePrefix:
        "Core",
      title:
        "Engineering Capabilities",

      description:
        "Advanced technical engineering expertise supporting production facilities, broadcast environments, and media infrastructure.",

      items: [
        {
          title:
            "Broadcast System Design",

          description:
            "Planning and implementation of broadcast workflows, control rooms, and production infrastructures.",
        },

        {
          title:
            "Signal Engineering",

          description:
            "Design, routing, monitoring, and optimization of video, audio, and data transmission systems.",
        },

        {
          title:
            "Network Infrastructure",

          description:
            "Enterprise-grade network architecture for media transport, remote production, and cloud connectivity.",
        },

        {
          title:
            "Technical Operations",

          description:
            "Operational engineering support ensuring stable performance during live productions and events.",
        },

        {
          title:
            "System Maintenance",

          description:
            "Preventive maintenance, diagnostics, upgrades, and performance optimization.",
        },

        {
          title:
            "Infrastructure Consulting",

          description:
            "Strategic technical planning for broadcasters, production companies, and media organizations.",
        },
      ],
    },

    packages: {
      label: "Packages",

      titlePrefix:
        "Engineering",
      title:
        "Service Packages",

      description:
        "Flexible engineering solutions tailored to infrastructure requirements and operational complexity.",

      items: [
        {
          title:
            "Technical Support",

          subtitle:
            "Operational Support",

          description:
            "Engineering assistance for live productions, events, and day-to-day broadcast operations.",

          deliverables: [
            "Engineering Crew",
            "Signal Monitoring",
            "Technical Troubleshooting",
            "Live Event Support",
          ],

          idealFor:
            "Events, Broadcast Operations, Production Facilities",

          timeline:
            "On Demand",
        },

        {
          title:
            "Infrastructure Deployment",

          subtitle:
            "Systems Integration",

          description:
            "Implementation and integration of broadcast, media, and network systems.",

          deliverables: [
            "System Installation",
            "Network Configuration",
            "Equipment Integration",
            "Performance Testing",
          ],

          idealFor:
            "Studios, Control Rooms, Production Facilities",

          timeline:
            "Project Based",
        },

        {
          title:
            "Enterprise Engineering",

          subtitle:
            "Consulting & Development",

          description:
            "Comprehensive engineering consultancy and infrastructure development for media organizations.",

          deliverables: [
            "Facility Design",
            "System Architecture",
            "Workflow Engineering",
            "Long-Term Technical Support",
          ],

          idealFor:
            "Broadcasters, Media Companies, Government Projects",

          timeline:
            "Custom Deployment",
        },
      ],
    },

    technology: {
      label: "Technology",

      titlePrefix:
        "Broadcast Engineering",
      title:
        "Technology Stack",

      description:
        "Modern engineering technologies powering resilient broadcast, media, and production infrastructures.",

      image:
        "/images/mf-(4).jpg",

      items: [
        {
          title:
            "IP-Based Broadcast Network",

          description:
            "High-performance network infrastructure supporting modern media transport workflows.",
        },

        {
          title:
            "Signal Monitoring System",

          description:
            "Real-time monitoring and diagnostics for broadcast signal integrity.",
        },

        {
          title:
            "Control & Management Platform",

          description:
            "Centralized infrastructure management and operational visibility.",
        },

        {
          title:
            "Cloud Connectivity Layer",

          description:
            "Hybrid infrastructure enabling cloud workflows and remote operations.",
        },
      ],
    },

    workflow: {
      label: "Workflow",

      titlePrefix:
        "Engineering",
      title:
        "Deployment Process",

      description:
        "Structured engineering methodology ensuring reliability, scalability, and operational excellence.",

      items: [
        {
          step: "01",

          title:
            "Assessment",

          description:
            "Evaluate existing infrastructure, requirements, operational objectives, and future scalability needs.",
        },

        {
          step: "02",

          title:
            "Engineering Design",

          description:
            "Develop technical architecture, workflows, system diagrams, and implementation plans.",
        },

        {
          step: "03",

          title:
            "Deployment",

          description:
            "Install, configure, integrate, and validate system performance through comprehensive testing.",
        },

        {
          step: "04",

          title:
            "Operations Support",

          description:
            "Provide maintenance, monitoring, optimization, and long-term engineering assistance.",
        },
      ],
    },

    cta: {
      title:
        "Ready To Build A Reliable Media Infrastructure?",

      description:
        "Partner with MEDIAFLIX to design, deploy, integrate, and maintain enterprise-grade engineering systems for broadcast facilities, live production environments, transmission networks, and media operations.",

      primaryLabel:
        "Start Consultation",

      secondaryLabel:
        "Talk To Engineer",
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
        <ServiceHero
          data={service.hero}
        />

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

