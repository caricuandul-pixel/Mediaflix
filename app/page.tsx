import type { Metadata } from "next";

import Hero from "@/components/sections/hero/Hero";
import Services from "@/components/sections/services/Services";
import Projects from "@/components/sections/projects/Projects";
import Clients from "@/components/sections/clients/Clients";
import CTA from "@/components/sections/CTA";
import InstagramFeed from "@/components/InstagramFeed";

export const metadata: Metadata = {
  title: "MEDIAFLIX.ID | Broadcast & Media Technology Solutions",
  description:
    "MEDIAFLIX.ID provides professional broadcast solutions, live streaming services, broadcast equipment rental, production systems, media technology integration, and nationwide deployment support.",

  keywords: [
    "broadcast solutions",
    "live streaming",
    "broadcast equipment rental",
    "media technology",
    "video production",
    "broadcast systems",
    "streaming services",
    "broadcast engineering",
    "production equipment",
    "MEDIAFLIX.ID",
  ],

  alternates: {
    canonical: "https://mediaflix.id",
  },

  openGraph: {
    title: "MEDIAFLIX.ID | Broadcast & Media Technology Solutions",
    description:
      "Professional broadcast solutions, live streaming services, production systems, and media technology integration.",
    url: "https://mediaflix.id",
    siteName: "MEDIAFLIX.ID",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MEDIAFLIX.ID",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MEDIAFLIX.ID | Broadcast & Media Technology Solutions",
    description:
      "Professional broadcast solutions, live streaming services, production systems, and media technology integration.",
    images: ["/images/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
     
      <Services />
      <Projects />
      <Clients />
      <InstagramFeed />
      <CTA />
    </>
  );
}