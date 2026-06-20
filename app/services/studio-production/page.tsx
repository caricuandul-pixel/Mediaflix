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
    "studio-production"
  );

export default function StudioProductionPage() {
  const serviceJsonLd =
    generateServiceJsonLd(
      "studio-production"
    );

  const service = {
    hero: {
      eyebrow: "Studio Production",

      titlePrefix:
        "Professional Studio ",
      title:
        "Production Environment",

      description:
        "Premium studio production solutions for podcasts, talk shows, television programs, webinars, corporate broadcasts, digital content creation, virtual productions, and live streaming powered by professional-grade infrastructure.",

      video:
        "/videos/service-1.mp4",

      buttonLabel: "Book Studio",

      buttonHref: "/contact",

      stats: [
        {
          value: "4K",
          label: "Production Ready",
        },
        {
          value: "Multi-Cam",
          label: "Studio Setup",
        },
        {
          value: "Broadcast",
          label: "Quality Standard",
        },
      ],
    },

    overview: {
      label: "Overview",

      titlePrefix:
        "Professional Studio",
      title:
        "Production Infrastructure",

      description:
        "MEDIAFLIX delivers professional studio production services for podcasts, talk shows, webinars, television programs, corporate broadcasts, virtual productions, and digital content creation powered by enterprise-grade facilities.",

      highlights: [
        {
          title:
            "Multi-Camera Studio Production",

          description:
            "Professional camera systems for dynamic studio productions.",
        },
        {
          title:
            "Broadcast-Grade Audio Environment",

          description:
            "Optimized acoustic treatment and audio engineering workflow.",
        },
        {
          title:
            "Flexible Production Configuration",

          description:
            "Adaptable studio layouts for different content formats.",
        },
      ],
    },

    capabilities: {
      label: "Capabilities",

      titlePrefix:
        "Core",
      title:
        "Studio Capabilities",

      description:
        "Professional production infrastructure supporting television, corporate, podcast, and digital content creation.",

      items: [
        {
          title:
            "Multi-Camera Production",

          description:
            "Broadcast-quality multi-camera studio operation and direction.",
        },
        {
          title:
            "Professional Lighting",

          description:
            "Flexible lighting systems for cinematic and broadcast applications.",
        },
        {
          title: "Audio Production",

          description:
            "Studio-grade audio capture, mixing, and monitoring solutions.",
        },
        {
          title:
            "Virtual Production",

          description:
            "Green screen and virtual environment production workflows.",
        },
        {
          title:
            "Live Streaming Integration",

          description:
            "Direct integration with live streaming and digital distribution platforms.",
        },
        {
          title:
            "Content Recording",

          description:
            "High-quality recording and archiving for post-production workflows.",
        },
      ],
    },

    packages: {
      label: "Packages",

      titlePrefix:
        "Studio ",
      title:
        "Production Packages",

      description:
        "Flexible production packages designed for creators, brands, organizations, and broadcasters.",

      items: [
        {
          title:
            "Starter Studio",

          subtitle:
            "Content Creator",

          description:
            "Perfect for podcasts, interviews, webinars, and content creators.",

          deliverables: [
            "Studio Space",
            "2 Camera Setup",
            "Basic Lighting",
            "Audio Recording",
          ],

          idealFor:
            "Podcasts, Interviews, Webinars",

          timeline:
            "Half Day Production",
        },

        {
          title:
            "Professional Studio",

          subtitle:
            "Most Popular",

          description:
            "Ideal for talk shows, webinars, branded content, and corporate productions.",

          deliverables: [
            "Multi-Camera Setup",
            "Advanced Lighting System",
            "Live Switching",
            "Recording & Streaming",
          ],

          idealFor:
            "Talk Shows, Corporate Content, Webinars",

          timeline:
            "1 Day Production",
        },

        {
          title:
            "Enterprise Studio",

          subtitle:
            "Broadcast Solution",

          description:
            "Complete broadcast-grade studio production environment.",

          deliverables: [
            "Broadcast Production Crew",
            "Full Lighting Design",
            "Live Graphics Integration",
            "Multi-Platform Distribution",
          ],

          idealFor:
            "Television Programs, Broadcast Networks, National Productions",

          timeline:
            "Custom Production",
        },
      ],
    },

    technology: {
      label: "Technology",

      titlePrefix:
        "Broadcast Studio",
      title:
        "Technology Stack",

      description:
        "Advanced studio technology designed to support modern broadcast and content production workflows.",

      image:
        "/images/mf-(13).jpg",

      items: [
        {
          title:
            "Broadcast Camera Systems",

          description:
            "Professional studio cameras delivering exceptional image quality.",
        },
        {
          title:
            "Intelligent Lighting Network",

          description:
            "Flexible lighting control system for multiple production scenarios.",
        },
        {
          title:
            "Audio Processing Engine",

          description:
            "Professional audio capture and monitoring infrastructure.",
        },
        {
          title:
            "Production Control Room",

          description:
            "Centralized switching, monitoring, and production management.",
        },
      ],
    },

    workflow: {
      label: "Workflow",

      titlePrefix:
        "Studio Productio",
      title:
        "Workflow",

      description:
        "A structured production workflow ensuring efficiency, quality, and consistency throughout every project.",

      items: [
        {
          step: "01",

          title:
            "Creative Planning",

          description:
            "Define production objectives, format, and technical requirements.",
        },
        {
          step: "02",

          title:
            "Studio Preparation",

          description:
            "Configure cameras, lighting, audio systems, and set design.",
        },
        {
          step: "03",

          title:
            "Production",

          description:
            "Execute recording, broadcasting, or live streaming operations.",
        },
        {
          step: "04",

          title:
            "Delivery",

          description:
            "Content delivery, post-production support, and distribution.",
        },
      ],
    },

    cta: {
      title:
        "Ready To Produce In A Professional Studio?",

      description:
        "Create professional podcasts, talk shows, webinars, television programs, and branded content using MEDIAFLIX studio facilities, production crews, and broadcast-grade technology.",

      primaryLabel:
        "Book Studio",

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
        <ServiceOverview data={service.overview} />
        <ServiceCapabilities data={service.capabilities} />
        <ServicePackage data={service.packages} />
        <ServiceTechnology data={service.technology} />
        <ServiceWorkflow data={service.workflow} />
        <ServiceCTA data={service.cta} />
      </main>
    </>
  );
}