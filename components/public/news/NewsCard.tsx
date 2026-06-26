"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { NewsItem } from "./types";

interface Props {
  item: NewsItem;
}

export default function NewsCard({ item }: Props) {
  return (
    <Link href={`/news/${item.slug}`}>
      <motion.article
        whileHover={{ y: -6 }}
        className="
          group
          relative
          overflow-hidden
          rounded-xl
          border
          border-white/10
          bg-[#0B0F14]
          cursor-pointer
        "
      >
        <div className="relative h-56">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />
        </div>

        <div className="p-5">
          <div className="text-xs text-zinc-500 flex gap-2">
            <span className="text-orange-400">{item.category}</span>
            <span>•</span>
            <span>{item.date}</span>
          </div>

          <h3 className="mt-3 text-white font-medium leading-snug">
            {item.title}
          </h3>

          <p className="mt-2 text-sm text-zinc-500 line-clamp-2">
            {item.excerpt}
          </p>
        </div>
      </motion.article>
    </Link>
  );
}