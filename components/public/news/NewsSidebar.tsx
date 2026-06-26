"use client";

import { NewsItem } from "./types";

interface Props {
  items: NewsItem[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export default function NewsSidebar({
  items,
  activeIndex,
  setActiveIndex,
}: Props) {
  return (
    <div className="space-y-6">
      <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-500">
        Latest Articles
      </h3>

      <div className="space-y-4">
        {items.map((item, i) => (
          <button
            key={item.slug}
            onClick={() => setActiveIndex(i)}
            className={`
              w-full text-left group transition
              ${
                activeIndex === i
                  ? "text-white"
                  : "text-zinc-500 hover:text-white"
              }
            `}
          >
            <div className="flex gap-3">
              <span
                className={`
                  text-xs
                  ${
                    activeIndex === i
                      ? "text-orange-400"
                      : "text-zinc-600"
                  }
                `}
              >
                0{i + 1}
              </span>

              <div>
                <p className="text-sm font-medium leading-snug">
                  {item.title}
                </p>
                <p className="text-xs text-zinc-500 mt-1">
                  {item.date}
                </p>
              </div>
            </div>

            <div
              className={`
                mt-3 h-px bg-white/10
                group-hover:bg-orange-500/40
                transition
              `}
            />
          </button>
        ))}
      </div>
    </div>
  );
}