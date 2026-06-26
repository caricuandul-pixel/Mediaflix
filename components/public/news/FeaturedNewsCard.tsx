"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { NewsItem } from "./types";

interface Props {
  news: NewsItem;
}

export default function FeaturedNewsCard({ news }: Props) {
  return (
    <Link href={`/news/${news.slug}`}>
      <motion.article
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
        className="
          relative
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-[#0B0F14]
          cursor-pointer
        "
      >
        <div className="relative h-[420px] w-full">
          <Image
            src={news.image}
            alt={news.title}
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        <div className="p-8">
          <div className="flex items-center gap-3 text-xs text-zinc-400">
            <span className="text-orange-400 uppercase">
              {news.category}
            </span>
            <span>•</span>
            <span>{news.date}</span>
          </div>

          <h2 className="mt-4 text-2xl font-semibold text-white leading-snug">
            {news.title}
          </h2>

          <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
            {news.excerpt}
          </p>

          <span className="mt-6 inline-block text-sm text-orange-400">
            Read Article →
          </span>
        </div>
      </motion.article>
    </Link>
  );
}