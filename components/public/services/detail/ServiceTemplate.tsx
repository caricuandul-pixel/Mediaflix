import ServiceHero from "./ServiceHero";
import ServiceOverview from "./ServiceOverview";
import ServiceCapabilities from "./ServiceCapabilities";
import ServicePackage from "./ServicePackage";
import ServiceTechnology from "./ServiceTechnology";
import ServiceWorkflow from "./ServiceWorkflow";
import ServiceProjects from "./ServiceProjects";
import ServiceFAQ from "./ServiceFAQ";
import ServiceRelated from "./ServiceRelated";
import ServiceCTA from "./ServiceCTA";

import { ServiceData } from "@/data/services/types";

interface Props {
  service: ServiceData;
  relatedServices: {
    slug: string;
    title: string;
    description: string;
  }[];
}

export default function ServiceTemplate({
  service,
  relatedServices,
}: Props) {
  return (
    <>
      <ServiceHero
        data={{
          eyebrow: service.hero.eyebrow,
          titlePrefix: "",
          title: service.hero.title,
          description: service.hero.description,
          image: service.hero.image,
          // stats: service.hero.stats,
        }}
      />

      <ServiceOverview
        data={{
          label: "Overview",
          title: service.overview.title,
          description: service.overview.description,
          highlights: service.overview.highlights.map(
            (item) => ({
              title: item,
              description: "",
            })
          ),
        }}
      />

      <ServiceCapabilities
        data={{
          label: "Capabilities",
          title: "Core Capabilities",
          description:
            "Professional capabilities designed for modern media operations.",
          items: service.capabilities,
        }}
      />

      <ServicePackage
        data={{
          label: "Packages",
          title: "Service Packages",
          description:
            "Flexible solutions tailored to your project requirements.",
          items: service.packages.map((pkg) => ({
            title: pkg.name,
            description: pkg.description,
            deliverables: pkg.features,
          })),
        }}
      />

      <ServiceTechnology
        data={{
          label: "Technology",
          title: "Technology Infrastructure",
          description:
            "Enterprise-grade technology supporting reliable operations.",
          image: service.hero.image,
          items: service.technologies,
        }}
      />

      <ServiceWorkflow
        data={{
          label: "Workflow",
          title: "Project Workflow",
          description:
            "A structured process ensuring quality and operational excellence.",
          items: service.workflow.map((step, index) => ({
            step: String(index + 1).padStart(2, "0"),
            title: step.title,
            description: step.description,
          })),
        }}
      />

      {service.projects.length > 0 && (
        <ServiceProjects
          data={{
            label: "Projects",
            title: "Featured Projects",
            description:
              "Selected projects demonstrating our expertise.",
            items: service.projects,
          }}
        />
      )}

      {service.faqs.length > 0 && (
        <ServiceFAQ faqs={service.faqs} />
      )}

      {relatedServices.length > 0 && (
        <ServiceRelated services={relatedServices} />
      )}

      <ServiceCTA
        data={{
          title: service.cta.title,
          description: service.cta.description,
          primaryLabel: service.cta.primaryButton,
          secondaryLabel: service.cta.secondaryButton,
        }}
      />
    </>
  );
}