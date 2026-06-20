import { ServiceData } from "@/data/services/types";

export function generateFAQSchema(
  service: ServiceData
) {
  if (!service.faqs?.length) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",

      name: faq.question,

      acceptedAnswer: {
        "@type": "Answer",

        text: faq.answer,
      },
    })),
  };
}