"use client";

import { motion } from "framer-motion";

import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Globe,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import Container from "@/components/ui/Container";

import { getContactInfo } from "@/utils/contact";


const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(12px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};


const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};


const cardVariant = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};


export default function ContactInfo() {

  const contact = getContactInfo();


  const contacts = [
    {
      title: "Email",
      value: contact.email,
      icon: Mail,
      href: `mailto:${contact.email}`,
    },

    {
      title: "Phone",
      value: contact.phone,
      icon: Phone,
      href: `tel:${contact.phone}`,
    },

    {
      title: "WhatsApp",
      value: contact.whatsapp,
      icon: MessageCircle,
      href: `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`,
    },

    {
      title: "Location",
      value: contact.address,
      icon: MapPin,
    },

    {
      title: "Timezone",
      value: contact.timezone,
      icon: Globe,
    },
  ];


  const socials = [
    {
      icon: FaInstagram,
      href: contact.social.instagram,
    },

    {
      icon: FaLinkedinIn,
      href: contact.social.linkedin,
    },

    {
      icon: FaYoutube,
      href: contact.social.youtube,
    },
  ];


  return (
    <section
      id="contact-info"
      className="
        relative
        overflow-hidden
        py-32
        bg-gradient-to-b
        from-[#05070B]
        via-[#070A10]
        to-[#05070B]
      "
    >

      {/* Grid Pattern */}

      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]
          bg-[size:80px_80px]
          opacity-30
        "
      />


      {/* Center Glow */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-[600px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-orange-500/10
          blur-[220px]
        "
      />


      <Container>

        <div
          className="
            relative
            z-10
            grid
            gap-16
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-24
          "
        >

          {/* LEFT SIDE */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <span
              className="
                text-sm
                uppercase
                tracking-[0.35em]
                text-orange-400
              "
            >
              Contact Information
            </span>


            <h2
              className="
                mt-6
                text-4xl
                font-semibold
                leading-[0.95]
                tracking-[-0.04em]
                text-white
                md:text-6xl
              "
            >
              Reach Our Global

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
                Production Team.
              </span>

            </h2>


            <p
              className="
                mt-8
                text-lg
                leading-relaxed
                text-zinc-400
              "
            >
              Connect with MEDIAFLIX specialists
              for broadcast production,
              live streaming, hybrid events,
              and advanced media technology
              solutions anywhere in the world.
            </p>


            <p
              className="
                mt-6
                text-lg
                leading-relaxed
                text-zinc-400
              "
            >
              Our global team is ready to support
              your production with fast communication,
              reliable technical expertise,
              and scalable solutions.
            </p>


            {/* Social */}

            <div
              className="
                mt-12
                flex
                flex-wrap
                gap-4
              "
            >

              {socials.map((social, index) => {

                const Icon = social.icon;

                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"

                    whileHover={{
                      y: -6,
                      scale: 1.1,
                      rotate: 8,
                    }}

                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.03]
                      text-white
                      backdrop-blur-xl
                      transition-all
                      duration-500
                      hover:border-orange-500/40
                      hover:text-orange-400
                    "
                  >

                    <Icon size={20} />

                  </motion.a>
                );

              })}

            </div>


          </motion.div>


          {/* RIGHT SIDE */}

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              flex
              flex-col
              gap-6
            "
          >

            {contacts.map((item) => {

              const Icon = item.icon;


              const Card = (

                <motion.div
                  variants={cardVariant}

                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}

                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}

                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[32px]
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
                      inset-0
                      opacity-0
                      bg-gradient-to-br
                      from-orange-500/10
                      to-orange-500/5
                      transition-all
                      duration-500
                      group-hover:opacity-100
                    "
                  />


                  <div
                    className="
                      relative
                      z-10
                      flex
                      items-center
                      gap-6
                    "
                  >

                    {/* Icon */}

                    <div
                      className="
                        flex
                        h-16
                        w-16
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-orange-500/30
                        bg-orange-500/10
                      "
                    >

                      <Icon
                        className="
                          h-8
                          w-8
                          text-orange-400
                        "
                      />

                    </div>


                    {/* Content */}

                    <div>

                      <h3
                        className="
                          text-xl
                          font-semibold
                          text-white
                          transition-colors
                          duration-500
                          group-hover:text-orange-400
                        "
                      >
                        {item.title}
                      </h3>


                      <p
                        className="
                          mt-2
                          break-words
                          text-zinc-400
                          transition-colors
                          duration-500
                          group-hover:text-zinc-200
                        "
                      >
                        {item.value}
                      </p>

                    </div>

                  </div>


                </motion.div>

              );


              return item.href ? (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {Card}
                </a>
              ) : (
                <div key={item.title}>
                  {Card}
                </div>
              );

            })}

          </motion.div>


        </div>

      </Container>

    </section>
  );
}