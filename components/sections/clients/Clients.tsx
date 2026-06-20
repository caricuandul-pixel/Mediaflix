import Container from "@/components/ui/Container";
import ClientsMarquee from "./ClientsMarquee";
import { clients } from "./clients.data";

const stats = [
  {
    value: "40+",
    label: "Projects Delivered",
  },
  {
    value: "8",
    label: "Countries Covered",
  },
  {
    value: "60+",
    label: "Specialist Crew",
  },
  {
    value: "24/7",
    label: "Operations Support",
  },
];

export default function Clients() {
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
          top-0
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-orange-500/10
          blur-[180px]
        "
      />

      {/* LEFT GLOW */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-[500px]
          w-[500px]
          bg-sky-500/5
          blur-[180px]
        "
      />

      <Container>
        <div className="relative z-10">
          {/* HEADER */}
          <div className="mx-auto mb-24 max-w-5xl text-center">
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
                  uppercase
                  tracking-[0.35em]
                  text-white/70
                  md:text-xs
                "
              >
                <span className="text-orange-400">MEDIAFLIX.ID</span>
                <span className="mx-2">•</span>
                Trusted Partners
              </span>
            </div>

            <h2
              className="
                mt-8
                text-5xl
                font-bold
                leading-none
                text-white
                md:text-7xl
                xl:text-8xl
              "
            >
              Trusted by
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
                Industry Leaders
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-8
                max-w-3xl
                text-lg
                leading-relaxed
                text-zinc-400
                md:text-xl
              "
            >
              Supporting world-class productions, sports events, television
              networks, and enterprise experiences across multiple regions
              throughout Asia.
            </p>
          </div>

          {/* LOGO SECTION (MODIFIED FOR SMOOTH MARQUEE LOOP) */}
          <div
            className="
              relative
              mb-28
              overflow-hidden
              rounded-[40px]
              border
              border-white/10
              bg-white/[0.01]
              backdrop-blur-sm
            "
          >
            {/* Top Highlight Line */}
            <div
              className="
                absolute
                inset-x-0
                top-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-orange-500/40
                to-transparent
              "
            />

            {/* Kontainer Marquee tanpa padding X tambahan agar tidak memotong layar */}
            <div className="py-10">
              <ClientsMarquee clients={clients} />
            </div>
          </div>

          {/* STATS */}
          <div
            className="
              grid
              gap-6
              md:grid-cols-2
              xl:grid-cols-4
            "
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/[0.02]
                  p-8
                  transition-all
                  duration-500
                  hover:border-orange-500/20
                  hover:bg-white/[0.04]
                "
              >
                <div
                  className="
                    absolute
                    inset-x-0
                    top-0
                    h-[2px]
                    origin-left
                    scale-x-0
                    bg-orange-500
                    transition-transform
                    duration-500
                    group-hover:scale-x-100
                  "
                />

                <div
                  className="
                    text-5xl
                    font-bold
                    text-white
                    md:text-6xl
                  "
                >
                  {stat.value}
                </div>

                <div
                  className="
                    mt-4
                    text-xs
                    uppercase
                    tracking-[0.3em]
                    text-zinc-500
                  "
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
