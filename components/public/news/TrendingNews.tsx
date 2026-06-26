import Link from "next/link";
import Image from "next/image";
import { news } from "./news.data";

export default function TrendingNews() {
  const trending = [...news]
    .sort((a, b) => (b.views ?? 0) - (a.views ?? 0))
    .slice(0, 5);

  return (
    <div className="mt-20">
      <h3 className="text-sm uppercase tracking-[0.3em] text-zinc-400 mb-6">
        Trending News
      </h3>

      <div className="space-y-4">
        {trending.map((item) => (
          <Link
            key={item.slug}
            href={`/news/${item.slug}`}
            className="flex gap-4 group"
          >
            <div className="w-20 h-16 relative rounded overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-xs text-orange-400">
                {item.category}
              </p>
              <p className="text-sm text-white group-hover:text-orange-300">
                {item.title}
              </p>
              <p className="text-xs text-zinc-500">
                {item.views} views
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}