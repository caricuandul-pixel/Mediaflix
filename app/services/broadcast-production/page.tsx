import ServiceHero from "@/components/public/services/detail/ServiceHero";
import ServiceOverview from "@/components/public/services/detail/ServiceOverview";
import ServiceCapabilities from "@/components/public/services/detail/ServiceCapabilities";
import ServiceTechnology from "@/components/public/services/detail/ServiceTechnology";
import ServiceWorkflow from "@/components/public/services/detail/ServiceWorkflow";
import ServicePackage from "@/components/public/services/detail/ServicePackage";
import ServiceCTA from "@/components/public/services/detail/ServiceCTA";

import {
  generateServiceMetadata,
  generateServiceJsonLd,
} from "@/lib/seo";

import {
  Radio,
  Camera,
  Mic,
  Layers,
  RotateCcw,
  Share2,
} from "lucide-react";

// ✅ SEO METADATA (SERVER ONLY)
export const metadata =
  generateServiceMetadata("broadcast-production");

export default function BroadcastProductionPage() {
  // ❗ JSON-LD harus tetap string aman (server render safe)
  const serviceJsonLd =
    generateServiceJsonLd("broadcast-production");

  const service = {
    hero: {
      eyebrow: "Broadcast Production",
      titlePrefix: "World-Class Live ",
      title: "Broadcast Production Infrastructure",
      description:
        "Broadcast Production • Live Streaming • System Engineering",
      video: "/videos/play_720p-1.mp4",
      buttonLabel: "Start Your Production",
      buttonHref: "/contact",
      stats: [
        { value: "4K / 8K", label: "Production Ready" },
        { value: "24/7", label: "Operations" },
        { value: "Global", label: "Distribution" },
      ],
    },

    overview: {
      label: "Overview",
      titlePrefix: "Next Generation ",
      title: "Broadcast Production Ecosystem",
      description:
        "MEDIAFLIX designs, deploys, and operates professional broadcast production environments combining advanced technology, experienced crews, and scalable workflows for modern live media operations.",
      highlights: [
        {
          title: "Live Production Engineering",
          description:
            "Experienced broadcast engineers and technical directors managing mission-critical productions.",
        },
        {
          title: "Multi-Camera Coverage",
          description:
            "Coordinated camera systems designed for immersive audience experiences.",
        },
        {
          title: "Real-Time Delivery",
          description:
            "Low-latency signal processing and distribution across television, OTT, and digital platforms.",
        },
      ],
    },

    capabilities: {
      label: "Capabilities",
      titlePrefix: "Enterprise ",
      title: "Broadcast Capabilities",
      description:
        "Comprehensive production services supporting every stage of modern broadcast operations.",
      items: [
        {
          title: "Live Switching",
          description:
            "Professional multi-camera switching and live program direction.",
          icon: <Radio size={22} />,
        },
        {
          title: "Camera Direction",
          description:
            "Dynamic camera orchestration and cinematic storytelling.",
          icon: <Camera size={22} />,
        },
        {
          title: "Audio Engineering",
          description:
            "Broadcast-grade audio acquisition, mixing, and monitoring.",
          icon: <Mic size={22} />,
        },
        {
          title: "Graphics Integration",
          description:
            "Real-time graphics, scoreboards, lower thirds, and branding systems.",
          icon: <Layers size={22} />,
        },
        {
          title: "Replay & Highlights",
          description:
            "Instant replay workflows and highlight generation systems.",
          icon: <RotateCcw size={22} />,
        },
        {
          title: "Signal Distribution",
          description:
            "Reliable content routing and multi-platform delivery infrastructure.",
          icon: <Share2 size={22} />,
        },
      ],
    },

    technology: {
      label: "Technology",
      titlePrefix: "Broadcast",
      title: "Infrastructure Stack",
      description:
        "Modern broadcast technology architecture built for reliability, scalability, and performance.",
      image: "/images/mf-(5).jpg",
      items: [
        {
          title: "Live Encoding Engine",
          description:
            "Adaptive bitrate encoding with ultra-low latency streaming.",
        },
        {
          title: "Production Control Room",
          description:
            "Centralized switching, monitoring, and operational management.",
        },
        {
          title: "Cloud Broadcast Infrastructure",
          description:
            "Scalable cloud-based processing and content delivery systems.",
        },
        {
          title: "Signal Processing Pipeline",
          description:
            "Real-time video and audio processing with enterprise redundancy.",
        },
      ],
    },

    workflow: {
      label: "Workflow",
      titlePrefix: "Broadcast",
      title: "Production Workflow",
      description:
        "Structured operational framework ensuring reliable execution from planning through distribution.",
      items: [
        {
          step: "01",
          title: "Pre-Production Planning",
          description:
            "Requirements gathering, technical planning, scheduling, and workflow design.",
        },
        {
          step: "02",
          title: "System Deployment",
          description:
            "Equipment installation, signal testing, and infrastructure setup.",
        },
        {
          step: "03",
          title: "Live Production Execution",
          description:
            "Real-time production management, monitoring, and broadcast operation.",
        },
        {
          step: "04",
          title: "Distribution & Delivery",
          description:
            "Multi-platform content delivery for television, OTT, and social media.",
        },
      ],
    },

    packages: {
      label: "Packages",
      titlePrefix: "Production ",
      title: "Packages",
      description:
        "Flexible production solutions tailored for events of every scale and complexity.",
      items: [
        {
          title: "Starter Broadcast",
          subtitle: "Entry Level",
          description:
            "Designed for local events, corporate meetings, conferences, and community productions.",
          deliverables: [
            "2–4 Camera Setup",
            "HD Live Streaming",
            "Basic Live Switching",
            "Audio Management",
            "Single Platform Delivery",
          ],
          idealFor:
            "Corporate Events, Seminars, Internal Broadcasts",
          timeline: "1–2 Days Setup",
        },
        {
          title: "Professional Broadcast",
          subtitle: "Most Popular",
          description:
            "Built for sports competitions, esports tournaments, concerts, and large-scale events.",
          deliverables: [
            "6–10 Camera Setup",
            "Replay System",
            "Live Graphics Package",
            "Commentary Integration",
            "Multi-Platform Streaming",
          ],
          idealFor:
            "Sports Events, Esports, Entertainment Productions",
          timeline: "3–5 Days Setup",
        },
        {
          title: "Enterprise Broadcast",
          subtitle: "Premium Solution",
          description:
            "International-grade broadcast operation supporting complex multi-location productions.",
          deliverables: [
            "12+ Camera Infrastructure",
            "4K / 8K Production",
            "Redundant Broadcast Systems",
            "Remote Production Capability",
            "Global Distribution Network",
          ],
          idealFor:
            "International Events, Broadcast Networks, Major Tournaments",
          timeline: "Custom Deployment",
        },
      ],
    },

    cta: {
      title:
        "Ready to Build Your Broadcast Production System?",
      description:
        "Partner with MEDIAFLIX to create reliable, scalable, and world-class live production experiences for your audience.",
      primaryLabel: "Start Production",
      secondaryLabel: "Talk To Our Team",
    },
  };

  return (
    <>
      {/* ✅ JSON-LD wajib string */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd),
        }}
      />

      <main className="bg-[#05070B]">
        <ServiceHero data={service.hero} />
        <ServiceOverview data={service.overview} />
        <ServiceCapabilities data={service.capabilities} />
        <ServiceTechnology data={service.technology} />
        <ServiceWorkflow data={service.workflow} />
        <ServicePackage data={service.packages} />
        <ServiceCTA data={service.cta} />
      </main>
    </>
  );
}