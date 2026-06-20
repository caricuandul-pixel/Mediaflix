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
  generateServiceMetadata("live-streaming");

export default function LiveStreamingPage() {
  const serviceJsonLd =
    generateServiceJsonLd("live-streaming");

  const service = {
    hero: {
      eyebrow: "Live Streaming",

      titlePrefix: "Scalable Live Streaming ",
      title: "For Global Audiences",

      description:
        "Deliver seamless live experiences across YouTube, Facebook, OTT platforms, private networks, and enterprise environments through low-latency streaming infrastructure built for reliability, performance, and scale.",

      video: "/videos/service-1.mp4",

      buttonLabel: "Start Streaming",

      buttonHref: "/contact",

      stats: [
        {
          value: "4K",
          label: "Streaming Ready",
        },
        {
          value: "< 3s",
          label: "Low Latency",
        },
        {
          value: "Global",
          label: "Audience Reach",
        },
      ],
    },

    overview: {
      label: "Overview",

      titlePrefix: "Enterprise ",
      title: "Live Streaming Ecosystem",

      description:
        "MEDIAFLIX provides end-to-end live streaming solutions for sports, conferences, entertainment productions, government events, hybrid experiences, and enterprise communications. Our infrastructure is designed for reliability, scalability, and seamless audience engagement.",

      highlights: [
        {
          title: "Multi-Platform Distribution",
          description:
            "Simultaneously deliver content to multiple streaming destinations.",
        },
        {
          title: "Low-Latency Streaming",
          description:
            "Optimized workflows for near real-time audience interaction.",
        },
        {
          title: "Enterprise Monitoring",
          description:
            "Continuous monitoring and operational control throughout production.",
        },
      ],
    },

    capabilities: {
      label: "Capabilities",

      titlePrefix: "Core Streaming ",
      title: "Capabilities",

      description:
        "Advanced streaming infrastructure and operational expertise built for modern digital broadcasting environments.",

      items: [
        {
          title: "Multi-Platform Streaming",
          description:
            "Simultaneous delivery to YouTube, Facebook, OTT platforms, TikTok, LinkedIn Live, and private destinations.",
        },
        {
          title: "Low-Latency Delivery",
          description:
            "Near real-time streaming architecture optimized for audience interaction.",
        },
        {
          title: "Cloud Streaming Workflow",
          description:
            "Scalable cloud infrastructure supporting high-volume events.",
        },
        {
          title: "Content Distribution",
          description:
            "Global delivery architecture with optimized routing and redundancy.",
        },
        {
          title: "Live Monitoring",
          description:
            "Real-time stream monitoring and proactive issue management.",
        },
        {
          title: "Audience Analytics",
          description:
            "Comprehensive reporting, engagement tracking, and performance insights.",
        },
      ],
    },

    packages: {
      label: "Packages",

      titlePrefix: "Streaming Solutions",
      title: "",

      description:
        "Flexible streaming packages designed for different production scales and audience requirements.",

      items: [
        {
          title: "Starter Streaming",

          subtitle: "Entry Level",

          description:
            "Perfect for webinars, internal communications, training sessions, and small-scale events.",

          deliverables: [
            "Single Platform Streaming",
            "HD Streaming Quality",
            "Basic Monitoring",
          ],

          idealFor:
            "Webinars, Internal Events, Online Training",

          timeline: "1 Day Setup",
        },

        {
          title: "Professional Streaming",

          subtitle: "Most Popular",

          description:
            "Ideal for conferences, branded productions, product launches, and hybrid events.",

          deliverables: [
            "Multi-Platform Delivery",
            "4K Streaming Support",
            "Live Graphics Integration",
            "Advanced Monitoring",
          ],

          idealFor:
            "Conferences, Product Launches, Hybrid Events",

          timeline: "2–3 Days Setup",
        },

        {
          title: "Enterprise Streaming",

          subtitle: "Premium Solution",

          description:
            "Large-scale streaming architecture designed for national and international audiences.",

          deliverables: [
            "Global Distribution",
            "Cloud Redundancy",
            "Low-Latency Delivery",
            "24/7 Technical Support",
          ],

          idealFor:
            "National Events, International Conferences, Broadcast Networks",

          timeline: "Custom Deployment",
        },
      ],
    },

    technology: {
      label: "Technology",

      titlePrefix: "Streaming ",
      title: "Infrastructure Stack",

      description:
        "Modern streaming technology powering reliable and scalable digital experiences.",

      image:
        "/images/mf-(18).jpg",

      items: [
        {
          title: "Adaptive Streaming Engine",

          description:
            "Automatically adjusts stream quality based on network conditions.",
        },

        {
          title: "Cloud Distribution Layer",

          description:
            "Scalable cloud architecture supporting global delivery.",
        },

        {
          title: "Monitoring Dashboard",

          description:
            "Centralized visibility across all streaming operations.",
        },

        {
          title: "Content Delivery Network",

          description:
            "Optimized content routing for worldwide audience performance.",
        },
      ],
    },

    workflow: {
      label: "Workflow",

      titlePrefix: "Live Streaming ",
      title: "Workflow",

      description:
        "A structured process ensuring seamless delivery from planning to post-event reporting.",

      items: [
        {
          step: "01",

          title: "Planning",

          description:
            "Define objectives, audience targets, distribution channels, and technical requirements.",
        },

        {
          step: "02",

          title: "Configuration",

          description:
            "Set up encoders, destinations, monitoring systems, and redundancy workflows.",
        },

        {
          step: "03",

          title: "Live Streaming",

          description:
            "Execute and supervise live delivery with continuous operational monitoring.",
        },

        {
          step: "04",

          title: "Reporting",

          description:
            "Analyze audience engagement, reach, viewing behavior, and stream performance.",
        },
      ],
    },

    cta: {
      title:
        "Ready To Stream Without Limits?",

      description:
        "Partner with MEDIAFLIX to build reliable, scalable, and professional live streaming experiences for conferences, sports competitions, hybrid events, webinars, and enterprise productions.",

      primaryLabel: "Start Streaming",

      secondaryLabel: "Talk To Specialist",
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