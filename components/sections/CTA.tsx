import Link from "next/link";

import Container from "@/components/ui/Container";

export default function CTA() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#05070B]
        py-32
        xl:py-40
      "
    >
      {/* GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]

          [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)]

          [background-size:80px_80px]
        "
      />

      {/* CENTER GLOW */}
      <div
        className="
          absolute
          left-1/2
          top-1/2

          h-[700px]
          w-[700px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-orange-500/10

          blur-[180px]
        "
      />

      <Container>
        <div
          className="
            relative
            z-10

            overflow-hidden

            rounded-[40px]

            border
            border-white/10

            bg-white/[0.03]

            px-8
            py-20

            text-center

            backdrop-blur-xl

            md:px-16
            md:py-24
          "
        >
          {/* TOP ACCENT */}
          <div
            className="
              absolute
              inset-x-0
              top-0

              h-px

              bg-gradient-to-r
              from-transparent
              via-orange-500
              to-transparent
            "
          />

          {/* BADGE */}
          <div
            className="
              inline-flex
              items-center
              gap-3

              rounded-full

              border
              border-white/10

              bg-white/[0.03]

              px-5
              py-3

              backdrop-blur-xl
            "
          >
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full

                  animate-ping

                  rounded-full

                  bg-orange-400
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-2.5
                  w-2.5

                  rounded-full

                  bg-orange-500
                "
              />
            </span>

            <span
              className="
                text-[10px]
                md:text-xs

                uppercase

                tracking-[0.35em]

                text-white/70
              "
            >
              <span className="text-orange-400">
                MEDIAFLIX.ID
              </span>

              <span className="mx-2">
                •
              </span>

              Start A Conversation
            </span>
          </div>

          {/* HEADING */}
          <h2
            className="
              mt-10

              text-5xl
              md:text-7xl
              xl:text-8xl

              font-bold

              leading-[0.92]

              tracking-tight

              text-white
            "
          >
            Let&#39;s  Build The Next
            <br />

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
              Broadcast Experience
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mx-auto
              mt-8

              max-w-3xl

              text-lg
              md:text-xl

              leading-relaxed

              text-zinc-400
            "
          >
            From live productions and
            studio operations to technical
            engineering and international
            event delivery, our team is
            ready to support your next
            production.
          </p>

          {/* BUTTONS */}
          <div
            className="
              mt-14

              flex
              flex-col
              justify-center
              gap-4

              sm:flex-row
            "
          >
            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                justify-center
                gap-3

                rounded-full

                bg-orange-500

                px-8
                py-4

                font-medium

                text-black

                transition-all
                duration-300

                hover:scale-[1.03]
                hover:bg-orange-400
              "
            >
              Start a Project

              <span>→</span>
            </Link>

            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                justify-center
                gap-3

                rounded-full

                border
                border-white/10

                bg-white/[0.03]

                px-8
                py-4

                font-medium

                text-white

                backdrop-blur-sm

                transition-all
                duration-300

                hover:border-orange-500/30
                hover:bg-orange-500/10
              "
            >
              Contact Us

              <span>→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}