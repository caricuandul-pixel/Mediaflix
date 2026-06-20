"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";


const executives = {
  ceo: {
    name: "Imam Maryadi",
    role: "Chief Executive Officer",
    image: "/images/imam.png",
  },

  cLevel: [
    {
      name: "Agil Purnomo",
      role: "Chief Financial Officer",
      image: "/images/agil.png",
    },
    {
      name: "Mohamad Andri",
      role: "Chief Technology Officer",
      image: "/images/andri.png",
    },
    {
      name: "Rico Istianto",
      role: "Chief Marketing Officer",
      image: "/images/rico.png",
    },
  ],

  heads: [
    {
      name: "Ardytto Istianto",
      role: "Financial Head",
      image: "/images/Ardytto.png",
    },
    {
      name: "Zainal Abidin",
      role: "Technical Head",
      image: "/images/zainal.png",
    },
    {
      name: "Nanda Chandra",
      role: "Head of Production",
      image: "/images/nanda.png",
    },
  ],
};


function LeaderCard({
  name,
  role,
  image,
  large = false,
}: {
  name: string;
  role: string;
  image: string;
  large?: boolean;
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.45,
      }}
      className="
        group
        overflow-hidden
        rounded-[30px]
        border
        border-white/8
        bg-[#0B0E13]
        transition-colors
        duration-300
        hover:border-orange-500/40
      "
    >

      {/* Portrait */}
      <div
        className={`
          relative
          overflow-hidden
          rounded-t-[30px]
          bg-[#11151C]
          ${large ? "h-[450px]" : "h-[330px]"}
        `}
      >

        {/* Photo */}
        <Image
          src={image}
          alt={name}
          fill
  priority
  sizes="(max-width: 768px) 100vw, 50vw"
  
          className="
            object-cover
            object-top
            transition-transform
            duration-700
            ease-out
            group-hover:-translate-y-2
          "
        />

        {/* Dark overlay untuk menyatukan warna */}
        <div
          className="
            absolute
            inset-0
            bg-black/10
            z-10
          "
        />


        {/* Bottom cinematic fade */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-36
            bg-gradient-to-t
            from-[#0B0E13]
            via-[#0B0E13]/90
            to-transparent
            z-20
            pointer-events-none
          "
        />

      </div>


      {/* Information */}
      <div
        className="
          relative
          z-30
          px-8
          pb-8
          pt-5
          text-center
        "
      >

        <div
          className="
            text-[11px]
            uppercase
            tracking-[0.4em]
            text-orange-400
          "
        >
          MEDIAFLIX.ID
        </div>


        <h3
          className={`
            mt-3
            font-semibold
            tracking-tight
            text-white
            ${
              large
                ? "text-3xl"
                : "text-xl"
            }
          `}
        >
          {name}
        </h3>


        <p
          className="
            mt-3
            text-xs
            uppercase
            tracking-[0.25em]
            text-zinc-400
          "
        >
          {role}
        </p>

      </div>
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
    </motion.article>
  );
}

export default function LeadershipTeam() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#05070B]
        py-28
        md:py-40
      "
    >
      {/* Subtle grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.025]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              white 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              white 1px,
              transparent 1px
            )
          `,
          backgroundSize: "90px 90px",
        }}
      />


      <Container>

        {/* Heading */}
        <motion.header
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
            duration: 0.5,
          }}
          className="
            mx-auto
            mb-24
            max-w-4xl
            text-center
          "
        >
          <p
            className="
              text-xs
              uppercase
              tracking-[0.45em]
              text-orange-400
            "
          >
            Executive Leadership
          </p>


          <h2
            className="
              mt-6
              text-5xl
              font-bold
              leading-[0.9]
              tracking-[-0.04em]
              text-white
              md:text-7xl
            "
          >
            The People Behind

            <span
              className="
                block
                bg-gradient-to-r
                from-orange-400
                via-orange-500
                to-orange-600
                bg-clip-text
                text-transparent
              "
            >
              MEDIAFLIX.ID
            </span>
          </h2>


          <p
            className="
              mx-auto
              mt-7
              max-w-3xl
              text-lg
              leading-relaxed
              text-zinc-400
            "
          >
            Visionary executives leading technology,
            production, and strategic growth to
            deliver world-class broadcast experiences.
          </p>
        </motion.header>


        {/* CEO */}
        <div className="mx-auto max-w-[430px]">
          <LeaderCard
            {...executives.ceo}
            large
          />
        </div>


        {/* C-Level */}
        <div
          className="
            mt-16
            grid
            gap-6
            md:grid-cols-3
          "
        >
          {executives.cLevel.map((leader) => (
            <LeaderCard
              key={leader.name}
              {...leader}
            />
          ))}
        </div>


        {/* Department Head */}
        <div
          className="
            mt-6
            grid
            gap-6
            md:grid-cols-3
          "
        >
          {executives.heads.map((leader) => (
            <LeaderCard
              key={leader.name}
              {...leader}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}