"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const stats = [
  {
    value: "40+",
    label: "Projects Delivered",
    description:
      "Successful productions delivered across sports, entertainment, corporate, and digital media sectors.",
  },
  {
    value: "8+",
    label: "Countries Covered",
    description:
      "Supporting productions and operations across multiple international markets and regions.",
  },
  {
    value: "60+",
    label: "Production Specialists",
    description:
      "Experienced professionals covering production, engineering, operations, and creative services.",
  },
  {
    value: "24/7",
    label: "Operations Support",
    description:
      "Round-the-clock operational readiness for live broadcasts and mission-critical productions.",
  },
];

export default function CompanyStats() {
  return (
    <section className="relative overflow-hidden bg-[#05070B] py-32">
      {/* Grid Background */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      {/* Glow Center */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[220px]" />

      <Container >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-20 max-w-5xl text-center"
        >
          <div
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-orange-500/20
              bg-orange-500/10
              px-5
              py-2
              text-xs
              font-medium
              uppercase
              tracking-[0.25em]
              text-orange-400
            "
          >
            MEDIAFLIX.ID • Company Statistics
          </div>

          <h2
            className="
              mt-6
              text-4xl
              font-bold
              leading-tight
              text-white
              md:text-6xl
            "
          >
            Numbers That Reflect
            <br />
            Our
            <span
              className="
                bg-gradient-to-r
                from-orange-400
                via-orange-500
                to-orange-600
                bg-clip-text
                text-transparent
              "
            >
              {" "}
              Experience
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-relaxed
              text-zinc-400
            "
          >
            Every statistic represents real-world production
            experience, operational capability, and the trust
            placed in MEDIAFLIX.ID by organizations and partners.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[40px]
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-xl
              "
            >
              {/* Hover Glow */}
              <div
                className="
                  absolute
                  right-0
                  top-0
                  h-48
                  w-48
                  rounded-full
                  bg-orange-500/0
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:bg-orange-500/20
                "
              />

              {/* Number */}
              <div
                className="
                  relative
                  z-10
                  text-6xl
                  font-bold
                  tracking-tight
                  text-white
                  md:text-7xl
                "
              >
                {stat.value}
              </div>

              {/* Divider */}
              <div
                className="
                  mt-6
                  h-px
                  w-24
                  bg-gradient-to-r
                  from-orange-500
                  to-transparent
                "
              />

              {/* Label */}
              <h3
                className="
                  mt-6
                  text-xl
                  font-semibold
                  text-white
                "
              >
                {stat.label}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-4
                  text-sm
                  leading-relaxed
                  text-zinc-400
                "
              >
                {stat.description}
              </p>

              {/* Bottom Accent */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  w-0
                  bg-gradient-to-r
                  from-orange-500
                  to-orange-300
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
            </motion.div>
          ))}
        </div>

        {/* Large Statement */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
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
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[150px]" />

          <div className="relative z-10">
            <p
              className="
                text-center
                text-2xl
                font-medium
                leading-relaxed
                text-white
                md:text-4xl
              "
            >
              Delivering reliable broadcast,
              production, and media solutions
              through operational excellence,
              technical expertise, and trusted partnerships.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}