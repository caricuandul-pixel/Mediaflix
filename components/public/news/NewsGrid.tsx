import { NewsItem } from "./types";
import NewsCard from "./NewsCard";

interface Props {
  items: NewsItem[];
}

export default function NewsGrid({ items }: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <NewsCard key={item.slug} item={item} />
      ))}
    </div>
  );
}