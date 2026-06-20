"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faqs: FAQItem[];
}

export default function ServiceFAQ({
  faqs,
}: ServiceFAQProps) {
  const [active, setActive] = useState<number | null>(0);

  if (!faqs?.length) return null;

  return (
    <section className="relative overflow-hidden bg-[#05070B] py-28">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[180px]" />

      <Container >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
            Frequently Asked Questions
          </span>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Common Questions About This Service
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
            Everything you need to know about our production,
            engineering, and broadcast solutions.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const open = active === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
              >
                <button
                  onClick={() =>
                    setActive(open ? null : index)
                  }
                  className="flex w-full items-center justify-between px-7 py-6 text-left"
                >
                  <span className="pr-6 text-lg font-semibold text-white">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 text-orange-400 transition ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                    >
                      <div className="border-t border-white/10 px-7 py-6 text-gray-400">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}