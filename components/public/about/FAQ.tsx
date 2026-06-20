"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

import Container from "@/components/ui/Container";

const faqs = [
  {
    question: "What Services Does MEDIAFLIX.ID Provide?",
    answer:
      "MEDIAFLIX.ID delivers broadcast production, live streaming, OB Van operations, remote production workflows, engineering support, content distribution, and end-to-end media solutions.",
  },
  {
    question: "What Types Of Events Do You Handle?",
    answer:
      "We support sports broadcasts, entertainment productions, corporate events, conferences, concerts, government events, esports tournaments, and hybrid experiences.",
  },
  {
    question: "Do You Support International Productions?",
    answer:
      "Yes. Our team has the capability to support multi-location productions and international broadcast workflows with scalable technical solutions.",
  },
  {
    question: "Can You Provide Complete Production Teams?",
    answer:
      "Absolutely. We provide production managers, directors, technical directors, engineers, camera operators, replay operators, graphics specialists, audio engineers, and production crews.",
  },
  {
    question: "Do You Offer Remote Production Solutions?",
    answer:
      "Yes. We provide remote production infrastructures that enable centralized operations, efficient resource allocation, and cost-effective workflows.",
  },
  {
    question: "How Can We Start A Project?",
    answer:
      "Simply contact our team to discuss your requirements. We will evaluate your objectives and design a customized production solution tailored to your needs.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-[#05070B] py-32 md:py-40">
      {/* Top Accent */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Main Glow */}
     {/* Soft Base */}
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.04),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(249,115,22,0.06),transparent_45%)]" />

{/* Grid */}
<div
  className="
    absolute inset-0
    opacity-[0.03]
    bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),
    linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
    bg-[size:80px_80px]
  "
/>

{/* Main Glow */}
{/* <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500/12 blur-[180px]" /> */}

{/* Secondary Glow */}
{/* <div className="absolute right-[-150px] top-[25%] h-[500px] w-[500px] rounded-full bg-orange-500/8 blur-[180px]" /> */}

{/* Bottom Glow */}
<div className="absolute left-[-150px] bottom-[-150px] h-[450px] w-[450px] rounded-full bg-orange-500/5 blur-[180px]" />

{/* Soft Vignette */}
<div className="absolute inset-0 bg-[radial-gradient(circle,transparent_55%,rgba(0,0,0,0.45)_100%)]" />
      <Container >
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-medium uppercase tracking-[0.3em] text-orange-400">
            MEDIAFLIX.ID • FAQ
          </div>

          <h2 className="mt-8 text-5xl font-bold tracking-tight text-white md:text-7xl">
            Frequently Asked

            <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
            Answers to common questions about our broadcast,
            production, engineering, and operational capabilities.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="mx-auto mt-20 max-w-5xl space-y-5">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={item.question}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-orange-500/10
                  bg-gradient-to-b
                  from-white/[0.04]
                  to-white/[0.02]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-orange-500/30
                  hover:shadow-[0_20px_60px_rgba(249,115,22,0.12)]
                "
              >
                {/* Glow */}
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Accent Line */}
                <div
                  className={`
                    absolute
                    left-0
                    top-0
                    h-[2px]
                    bg-gradient-to-r
                    from-orange-400
                    via-orange-500
                    to-orange-300
                    transition-all
                    duration-700
                    ${
                      isOpen
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />

                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="relative z-10 flex w-full items-center justify-between px-8 py-7 text-left"
                >
                  <h3 className="pr-6 text-xl font-semibold text-white md:text-2xl">
                    {item.question}
                  </h3>

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      flex-shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-orange-500/20
                      bg-orange-500/10
                      text-orange-400
                    "
                  >
                    {isOpen ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="relative z-10 px-8 pb-8">
                        <div className="mb-6 h-px bg-white/10" />

                        <p className="text-lg leading-relaxed text-zinc-400">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
          }}
          className="
            relative
            mt-16
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.03]
            p-10
            backdrop-blur-xl
            md:p-14
          "
        >
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[140px]" />

          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-semibold text-white md:text-5xl">
              Still Have Questions?
            </h3>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Our team is ready to discuss your production
              requirements and help design the right solution
              for your next project.
            </p>

            <div className="mt-8 inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-6 py-3 text-sm font-medium uppercase tracking-[0.25em] text-orange-400">
              Contact MEDIAFLIX.ID
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}