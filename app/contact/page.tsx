import type { Metadata } from "next";

import ContactHero from "@/components/public/contact/ContactHero";
import ContactInfo from "@/components/public/contact/ContactInfo";
import ContactForm from "@/components/public/contact/ContactForm";
import ContactMap from "@/components/public/contact/ContactMap";
import ContactCTA from "@/components/public/contact/ContactCTA";

import {
  generateContactMetadata,
  generateContactJsonLd,
} from "@/lib/seo/contact";


export const metadata: Metadata =
  generateContactMetadata();


export default function ContactPage() {

  const jsonLd =
    generateContactJsonLd();


  return (
    <>
      {/* JSON-LD SEO Schema */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />


      {/* Hero */}

      <ContactHero />


      {/* Global Contact Information */}

      <ContactInfo />


      {/* Enterprise Inquiry Form */}

      <ContactForm />


      {/* Global Operations */}

      <ContactMap />


      {/* Final Call To Action */}

      <ContactCTA />

    </>
  );
}