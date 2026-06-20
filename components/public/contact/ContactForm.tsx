"use client";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Briefcase,
  Building2,
  Globe,
  Mail,
  Phone,
  User,
} from "lucide-react";

import Container from "@/components/ui/Container";

const fadeUp = {
  initial: {
    opacity: 0,
    y: 30,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },
};


export default function ContactForm() {
  return (
    <section
      id="contact-form"
      className="
        relative
        overflow-hidden
        py-32
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          right-0
          top-0
          h-[600px]
          w-[600px]
          rounded-full
          bg-orange-500/5
          blur-[200px]
        "
      />

      <Container>
        <div
          className="
            grid
            gap-16
            lg:grid-cols-2
            lg:items-start
          "
        >
          {/* Left Content */}

          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
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
              Start Your Project
            </span>


            <h2
              className="
                mt-6
                text-4xl
                font-semibold
                leading-tight
                text-white
                md:text-5xl
              "
            >
              Let’s Build Your Next
              Global Production
            </h2>


            <p
              className="
                mt-6
                max-w-xl
                text-lg
                leading-relaxed
                text-zinc-400
              "
            >
              Tell us about your production
              requirements and our specialists
              will prepare the best solution for
              your broadcast, live streaming,
              hybrid event, or media technology
              project.
            </p>


            {/* Highlights */}

            <div
              className="
                mt-10
                space-y-5
              "
            >
              {[
                "Global production consultation",
                "Customized technical solutions",
                "Fast response from our team",
                "End-to-end project support",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                    text-zinc-300
                  "
                >
                  <div
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-orange-500
                    "
                  />

                  {item}
                </div>
              ))}
            </div>
          </motion.div>


          {/* Form Panel */}

          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.03]
              p-8
              backdrop-blur-xl
              md:p-10
            "
          >
            {/* Internal Glow */}

            <div
              className="
                absolute
                right-0
                top-0
                h-48
                w-48
                rounded-full
                bg-orange-500/10
                blur-[100px]
              "
            />

            <form
              className="
                relative
                z-10
                space-y-6
              "
            >
              {/* Name & Company */}

              <div className="grid gap-6 md:grid-cols-2">

                <InputField
                  icon={User}
                  placeholder="Full Name"
                  type="text"
                />

                <InputField
                  icon={Building2}
                  placeholder="Company"
                  type="text"
                />

              </div>


              {/* Email & Phone */}

              <div className="grid gap-6 md:grid-cols-2">

                <InputField
                  icon={Mail}
                  placeholder="Email Address"
                  type="email"
                />

                <InputField
                  icon={Phone}
                  placeholder="Phone Number"
                  type="tel"
                />

              </div>


              {/* Service */}

              <InputField
                icon={Briefcase}
                placeholder="Service Needed"
                type="text"
              />


              {/* Location */}

              <InputField
                icon={Globe}
                placeholder="Project Location"
                type="text"
              />


              {/* Details */}

              <div
                className="
                  flex
                  items-start
                  gap-3
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/20
                  px-5
                  py-4
                  transition
                  focus-within:border-orange-500/50
                "
              >
                <textarea
                  rows={6}
                  placeholder="Tell us about your project..."
                  className="
                    w-full
                    resize-none
                    bg-transparent
                    text-white
                    outline-none
                    placeholder:text-zinc-500
                  "
                />
              </div>


              {/* Submit */}

              <button
                type="submit"
                className="
                  group
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-orange-500
                  px-8
                  py-4
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:bg-orange-600
                  hover:shadow-[0_0_40px_rgba(249,115,22,0.35)]
                "
              >
                Send Project Inquiry

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>

            </form>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}


/* --------------------------
   Input Component
--------------------------- */

interface InputProps {
  icon: React.ElementType;
  placeholder: string;
  type: string;
}


function InputField({
  icon: Icon,
  placeholder,
  type,
}: InputProps) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        rounded-2xl
        border
        border-white/10
        bg-black/20
        px-5
        py-4
        transition
        focus-within:border-orange-500/50
      "
    >
      <Icon
        size={18}
        className="text-orange-400"
      />

      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full
          bg-transparent
          text-white
          outline-none
          placeholder:text-zinc-500
        "
      />
    </div>
  );
}