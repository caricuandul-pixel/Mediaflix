import { notFound } from "next/navigation";


import ServiceTemplate from "@/components/public/services/detail/ServiceTemplate";

import {
  getServiceBySlug,
  getRelatedServices,
  services,
} from "@/data/services";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | MEDIAFLIX",
    };
  }

  return {
    title: service.seo.title,
    description: service.seo.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getRelatedServices(
    service.relatedServices
  );

  return (
    <main className="bg-[#05070B]">
      <ServiceTemplate
        service={service}
        relatedServices={relatedServices}
      />
    </main>
  );
}