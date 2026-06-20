import Script from "next/script";

import RegionsHero from "@/components/public/regions/RegionsHero";
import RegionsOverview from "@/components/public/regions/RegionsOverview";
import RegionsCoverage from "@/components/public/regions/RegionsCoverage";
import RegionsCapabilities from "@/components/public/regions/RegionsCapabilities";
import RegionsNetwork from "@/components/public/regions/RegionsNetwork";
import RegionsCTA from "@/components/public/regions/RegionsCTA";

import {
  generateRegionsMetadata,
  generateRegionsJsonLd,
  generateRegionsBreadcrumb,
} from "@/lib/seo/regions";

export const metadata =
  generateRegionsMetadata();

export default function RegionsPage() {
  const jsonLd = [
    generateRegionsJsonLd(),
    generateRegionsBreadcrumb(),
  ];

  return (
    <>
      {/* SEO Schema */}

      <Script
        id="regions-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            jsonLd
          ),
        }}
      />

      {/* Hero */}

      <RegionsHero />

      {/* Overview */}

      <RegionsOverview />

      {/* Coverage */}

      <RegionsCoverage />

      {/* Capabilities */}

      <RegionsCapabilities />

      {/* Network */}

      <RegionsNetwork />

      {/* CTA */}

      <RegionsCTA />
    </>
  );
}