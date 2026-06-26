export type NewsCategory =
  | "Broadcast"
  | "Technology"
  | "Event"
  | "Partnership"
  | "Company";

export interface NewsItem {
  title: string;
  slug: string;
  category: string;
  image: string;
  date: string;
  excerpt: string;
  featured?: boolean;
  views?: number;
}