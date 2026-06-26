import type { Metadata } from "next";


import NewsClient from "./NewsClient";

export const metadata: Metadata = {
  title: "News | MEDIAFLIX.ID - Broadcast Insights & Industry Updates",
  description:
    "Latest updates from MEDIAFLIX covering broadcast production, live events, media technology, engineering innovations, and global industry news.",
  keywords: [
    "MEDIAFLIX news",
    "broadcast production",
    "live event coverage",
    "media industry updates",
    "studio production news",
  ],
  openGraph: {
    title: "News | MEDIAFLIX.ID",
    description:
      "Broadcast insights, production updates, and media industry news from MEDIAFLIX.",
    type: "website",
    url: "https://mediaflix.id/news",
    images: [
      {
        url: "/images/og/news-og.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "News | MEDIAFLIX.ID",
    description: "Broadcast insights and media industry updates.",
  },
  alternates: {
    canonical: "https://mediaflix.id/news",
  },
};

export default function NewsPage() {
  return (
    <div className="relative">
      
      

      {/* PAGE CONTENT */}
      <NewsClient />
      
    </div>
  );
}