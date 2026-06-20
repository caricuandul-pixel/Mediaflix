"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

interface RelatedService {
  slug: string;
  title: string;
  description: string;
}

interface ServiceRelatedProps {
  services: RelatedService[];
}

export default function ServiceRelated({
  services,
}: ServiceRelatedProps) {
  if (!services?.length) return null;

  return (
    <section className="relative bg-[#05070B] py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
            Related Services
          </span>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Explore More Solutions
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group block h-full rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:border-orange-500/40 hover:bg-white/[0.05]"
              >
                <h3 className="mb-4 text-2xl font-bold text-white transition group-hover:text-orange-400">
                  {service.title}
                </h3>

                <p className="mb-8 text-gray-400">
                  {service.description}
                </p>

                <span className="text-sm font-semibold uppercase tracking-wider text-orange-400">
                  Learn More →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}