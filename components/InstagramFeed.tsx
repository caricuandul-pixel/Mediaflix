"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import {
  ArrowRight,
} from "lucide-react";

import Container from "@/components/ui/Container";


const posts = [
  {
    image: "/images/mf-(1).jpg",
    alt: "MEDIAFLIX production",
  },
  {
    image: "/images/mf-(2).jpg",
    alt: "Broadcast setup",
  },
  {
    image: "/images/mf-(3).jpg",
    alt: "Live streaming event",
  },
  {
    image: "/images/mf-(4).jpg",
    alt: "Camera operator",
  },
  {
    image: "/images/mf-(5).jpg",
    alt: "Production team",
  },
  {
    image: "/images/mf-(6).jpg",
    alt: "Studio equipment",
  },
];


export default function InstagramFeed() {
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

      {/* Subtle Grid */}
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
          transition={{
            duration: 0.5,
          }}
          className="
            mx-auto
            mb-16
            max-w-4xl
            text-center
          "
        >

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-orange-500/20
              bg-orange-500/10
              px-5
              py-2
              text-xs
              uppercase
              tracking-[0.3em]
              text-orange-400
            "
          >
            <FaInstagram size={14} />
            MEDIAFLIX.ID • Instagram
          </div>


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
            Latest Stories From

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
              Our Instagram
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
            Discover behind-the-scenes moments,
            production highlights, and the latest
            innovations from MEDIAFLIX.ID.
          </p>

        </motion.div>



        {/* Feed Grid */}
        <div
          className="
            grid
            gap-5
            grid-cols-2
            md:grid-cols-3
          "
        >
          {posts.map((post, index) => (
            <motion.div
              key={index}
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
                duration: 0.4,
                delay: index * 0.05,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-[#0B0E13]
                aspect-square
              "
            >

              <Image
                src={post.image}
                alt={post.alt}
                fill
                sizes="
                  (max-width:768px) 50vw,
                  33vw
                "
                className="
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />


              {/* Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-black/20
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />


              {/* Instagram Icon */}
              <div
                className="
                  absolute
                  bottom-4
                  right-4
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-black/60
                  text-white
                  opacity-0
                  transition
                  duration-300
                  group-hover:opacity-100
                "
              >
                <FaInstagram size={18} />
              </div>

            </motion.div>
          ))}
        </div>



        {/* CTA */}
        <motion.a
  href="https://www.instagram.com/mediaflix.id"
  target="_blank"
  rel="noopener noreferrer"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="
    relative
    z-20
    mx-auto
    mt-14
    flex
    w-fit
    items-center
    gap-3
    rounded-full
    border
    border-white/10
    bg-[#0B0E13]
    px-7
    py-4
    text-white
    transition-all
    duration-300
    hover:border-orange-500/40
    hover:text-orange-400
  "
>
  <span>Follow @mediaflix.id</span>

  <ArrowRight size={18} />
</motion.a>

      </Container>

    </section>
  );
}