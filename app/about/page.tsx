import type { Metadata } from "next";

import AboutHero from "@/components/public/about/AboutHero";
import CompanyStory from "@/components/public/about/CompanyStory";
import MissionVision from "@/components/public/about/MissionVision";
import CoreValues from "@/components/public/about/CoreValues";
import WhyMediaflix from "@/components/public/about/WhyMediaflix";
import Leadership from "@/components/public/about/Leadership";
import FAQ from "@/components/public/about/FAQ";
import CTA from "@/components/public/about/CTA";

export const metadata: Metadata = {
  title: "About Us",

  description:
    "Learn about MEDIAFLIX.ID, a trusted broadcast and media technology company delivering professional broadcast solutions, live production systems, streaming infrastructure, equipment rental, and nationwide technical support.",

  keywords: [
    "about mediaflix",
    "broadcast company indonesia",
    "media technology company",
    "broadcast engineering",
    "live production solutions",
    "streaming infrastructure",
    "broadcast equipment rental",
    "media technology partner",
    "broadcast services indonesia",
  ],

  alternates: {
    canonical: "https://mediaflix.id/about",
  },

  openGraph: {
    title: "About MEDIAFLIX.ID",
    description:
      "Discover MEDIAFLIX.ID's vision, mission, leadership, capabilities, and commitment to delivering world-class broadcast and media technology solutions.",
    url: "https://mediaflix.id/about",
    siteName: "MEDIAFLIX.ID",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "About MEDIAFLIX.ID",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About MEDIAFLIX.ID",
    description:
      "Learn about MEDIAFLIX.ID, our vision, mission, leadership team, and broadcast technology expertise.",
    images: ["/images/og/about-og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <main className="bg-[#05070B]">
      <AboutHero />

      <CompanyStory />

      <MissionVision />

      {/* <Leadership /> */}

      <WhyMediaflix />

      <CoreValues />

      <FAQ />

      <CTA />

      
    </main>
  );
}
