import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import Container from "@/components/ui/Container";
import { news } from "@/components/public/news/news.data";
import ProgressBar from "@/components/public/news/ProgressBar";
import ShareButtons from "@/components/public/news/ShareButtons";
import TrendingNews from "@/components/public/news/TrendingNews";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const article = news.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "Not Found | MEDIAFLIX",
    };
  }

  return {
    title: `${article.title} | MEDIAFLIX`,
    description: article.excerpt,

    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [
        {
          url: article.image,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function NewsDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const article = news.find((item) => item.slug === slug);

  if (!article) {
    return notFound();
  }

  const related = news
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <ProgressBar />

      <article className="relative overflow-hidden bg-[#040608] text-white">

        {/* ========================= */}
        {/* BACKGROUND */}
        {/* ========================= */}

        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[180px]" />

          <div className="absolute right-0 top-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[180px]" />

          <div className="absolute left-0 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-600/10 blur-[180px]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.04),transparent_60%)]" />

        </div>

        <Container>

          <div className="relative z-10">

            {/* ========================= */}
            {/* HERO */}
            {/* ========================= */}

            <section className="pt-32 lg:pt-40">

              <Link
                href="/news"
                className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-zinc-300 backdrop-blur-xl transition-all duration-300 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-white"
              >
                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>

                Back to News
              </Link>

              <div className="mt-12 max-w-5xl">

                {/* CATEGORY */}

                <div className="flex flex-wrap items-center gap-3">

                  <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-orange-300">
                    {article.category}
                  </span>

                  <span className="text-sm text-zinc-500">
                    {article.date}
                  </span>

                </div>

                {/* TITLE */}

                <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
                  {article.title}
                </h1>

                {/* EXCERPT */}

                <p className="mt-8 max-w-3xl text-lg leading-9 text-zinc-400 md:text-xl">
                  {article.excerpt}
                </p>

              </div>

              {/* FEATURE IMAGE */}

              <div className="relative mt-20 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_40px_120px_rgba(0,0,0,.45)]">

                <div className="relative aspect-[16/9]">

                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    priority
                    className="object-cover"
                  />

                  {/* IMAGE OVERLAY */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                </div>

                {/* Floating Badge */}

                <div className="absolute bottom-6 left-6 rounded-full border border-white/10 bg-black/50 px-5 py-2 backdrop-blur-xl">

                  <span className="text-xs uppercase tracking-[0.3em] text-zinc-300">
                    MEDIAFLIX JOURNAL
                  </span>

                </div>

              </div>

            </section>

            {/* ========================= */}
            {/* CONTENT START */}
            {/* ========================= */}

            <section className="relative py-24">

              <div className="grid gap-20 lg:grid-cols-[220px_minmax(0,720px)] lg:justify-center">
                                {/* ===================================== */}
                {/* LEFT SIDEBAR */}
                {/* ===================================== */}

                <aside className="hidden lg:block">

                  <div className="sticky top-28 space-y-8">

                    <div>

                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                        Published
                      </p>

                      <p className="text-sm text-zinc-300">
                        {article.date}
                      </p>

                    </div>

                    <div>

                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                        Category
                      </p>

                      <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-medium text-orange-300">
                        {article.category}
                      </span>

                    </div>

                    <div className="border-t border-white/10 pt-8">

                      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                        Share
                      </p>

                      <ShareButtons title={article.title} />

                    </div>

                  </div>

                </aside>

                {/* ===================================== */}
                {/* ARTICLE */}
                {/* ===================================== */}

                <div>

                  <div className="prose prose-invert max-w-none">

                    {/* Lead */}

                    <p className="text-2xl leading-[1.9] text-zinc-200 md:text-[30px] md:leading-[1.8]">
                      {article.excerpt}
                    </p>

                    <div className="my-14 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    {/* Body */}

                    <div className="space-y-8 text-lg leading-9 text-zinc-400">

                      <p>
                        MEDIAFLIX continues to redefine premium broadcast
                        production by combining cinematic storytelling,
                        innovative technology, and world-class production
                        workflows. Every project is designed to deliver a
                        seamless viewing experience across television,
                        streaming platforms, and live digital channels.
                      </p>

                      <p>
                        From international conferences and global sporting
                        events to entertainment productions and corporate
                        broadcasts, every production benefits from advanced
                        multi-camera systems, remote collaboration, and
                        experienced production teams operating across
                        multiple regions.
                      </p>

                      <p>
                        By integrating creative direction with cutting-edge
                        engineering, MEDIAFLIX ensures every broadcast
                        maintains exceptional image quality, operational
                        reliability, and compelling audience engagement.
                      </p>

                    </div>

                    {/* Quote */}

                    <blockquote className="my-20 rounded-[32px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">

                      <p className="text-3xl font-medium leading-relaxed text-white">
                        “Great broadcasting is not only about technology,
                        but about creating unforgettable experiences for
                        audiences everywhere.”
                      </p>

                    </blockquote>

                    {/* Section */}

                    <h2 className="mt-20 text-4xl font-semibold text-white">
                      Global Production Excellence
                    </h2>

                    <div className="mt-8 space-y-8 text-lg leading-9 text-zinc-400">

                      <p>
                        Modern broadcast environments demand flexibility,
                        speed, and reliability. MEDIAFLIX leverages cloud
                        collaboration, scalable production infrastructure,
                        and experienced creative teams to ensure every
                        project is delivered efficiently regardless of
                        location or complexity.
                      </p>

                      <p>
                        The combination of creative storytelling,
                        sophisticated engineering, and production
                        management allows every event to achieve
                        consistently high production values while meeting
                        tight schedules and evolving client requirements.
                      </p>

                      <p>
                        Whether supporting live international broadcasts,
                        hybrid events, or digital-first productions,
                        MEDIAFLIX continues investing in innovation that
                        enables clients to reach audiences around the world.
                      </p>

                    </div>

                    {/* Divider */}

                    <div className="my-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    {/* Closing */}

                    <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-10 backdrop-blur-xl">

                      <p className="text-xl leading-9 text-zinc-300">
                        MEDIAFLIX remains committed to delivering
                        world-class broadcast experiences through
                        innovation, creativity, and operational excellence.
                        By continuously embracing emerging technologies,
                        the company helps organizations communicate with
                        audiences across every major platform worldwide.
                      </p>

                    </div>

                    {/* Mobile Share */}

                    <div className="mt-16 border-t border-white/10 pt-10 lg:hidden">

                      <p className="mb-5 text-xs uppercase tracking-[0.3em] text-zinc-500">
                        Share Article
                      </p>

                      <ShareButtons title={article.title} />

                    </div>

                  </div>

                </div>

              </div>

            </section>
                        {/* ===================================== */}
            {/* RELATED NEWS */}
            {/* ===================================== */}

            <section className="pb-24">

              <div className="mb-12 flex items-end justify-between">

                <div>

                  <p className="text-sm font-medium uppercase tracking-[0.3em] text-orange-400">
                    Continue Reading
                  </p>

                  <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white">
                    Related News
                  </h2>

                </div>

                <Link
                  href="/news"
                  className="hidden rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-zinc-300 backdrop-blur-xl transition-all duration-300 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-white md:inline-flex"
                >
                  View All News
                </Link>

              </div>

              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/news/${item.slug}`}
                    className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/30 hover:bg-white/[0.05] hover:shadow-[0_30px_80px_rgba(249,115,22,0.15)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">

                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                      <span className="absolute left-5 top-5 rounded-full border border-orange-500/30 bg-orange-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-300 backdrop-blur-xl">
                        {item.category}
                      </span>

                    </div>

                    <div className="p-7">

                      <p className="mb-4 text-sm text-zinc-500">
                        {item.date}
                      </p>

                      <h3 className="text-2xl font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-orange-300">
                        {item.title}
                      </h3>

                      <p className="mt-5 line-clamp-3 text-base leading-8 text-zinc-400">
                        {item.excerpt}
                      </p>

                      <div className="mt-8 inline-flex items-center gap-3 text-sm font-medium text-orange-400 transition-all duration-300 group-hover:gap-4">
                        Read Article
                        <span>→</span>
                      </div>

                    </div>

                  </Link>
                ))}

              </div>

            </section>

            {/* ===================================== */}
            {/* TRENDING */}
            {/* ===================================== */}

            <section className="border-t border-white/10 py-24">

              <TrendingNews />

            </section>

          </div>

        </Container>

      </article>

    </>
  );
}