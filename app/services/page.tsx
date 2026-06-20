import ServicesHero from "@/components/public/services/sections/ServicesHero";
import ServiceCategories from "@/components/public/services/sections/ServiceCategories";
import ServiceCapabilities from "@/components/public/services/sections/ServiceCapabilities";
import WorkflowSection from "@/components/public/services/sections/WorkflowSection";
import WhyChooseMediaflix from "@/components/public/services/sections/WhyChooseMediaflix";
import ServicesCTA from "@/components/public/services/sections/ServicesCTA";

import { SERVICE_INDEX_METADATA } from "@/lib/seo/metadata/generate-service-index-metadata";

export const metadata =
  SERVICE_INDEX_METADATA;

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-[#05070B]">
      <ServicesHero />

      <ServiceCategories />

      <ServiceCapabilities />

      <WorkflowSection />

      <WhyChooseMediaflix />

      <ServicesCTA />
    </main>
  );
}