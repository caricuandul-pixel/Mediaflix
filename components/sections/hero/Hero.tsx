import Container from "@/components/ui/Container";
// import HeroStats from "./HeroStats";
import HeroPattern from "./HeroPattern";
export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
  {/* Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="
      absolute
      inset-0
      h-full
      w-full
      object-cover
    "
  >
    <source
      src="/videos/play_720p.mp4"
      type="video/mp4"
    />
  </video>

  {/* Overlay */}
  <div
    className="
      absolute
      inset-0
      bg-black/45
    "
  />
<HeroPattern />
<div
  className="
    absolute
    right-0
    top-0
    h-[900px]
    w-[900px]
    rounded-full
    bg-orange-500/10
    blur-[250px]
  "
/>
  {/* Content */}
  <div
    className="
      relative
      z-10
      flex
      h-full
      items-end
    "
  >
    <Container>
      <div className="pb-24">
        <h1
          className="
            max-w-3xl
            text-5xl
            font-bold
            text-white
            md:text-7xl
          "
        >
          Professional Broadcast
          Production
        </h1>

        <p
          className="
            mt-6
            text-lg
            text-zinc-300
          "
        >
          Across Asia and Beyond
        </p>

        <button
          className="
            mt-8
            rounded-full
            bg-orange-500
            px-8
            py-4
            font-semibold
            text-white
          "
        >
          Explore Projects
        </button>
      </div>
    </Container>
  </div>
</section>
  );
}