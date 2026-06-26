"use client";

export default function ShareButtons({ title }: { title: string }) {
  const url =
    typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="mt-10 flex gap-3">
      <a
        href={`https://wa.me/?text=${encodeURIComponent(
          title + " " + url
        )}`}
        target="_blank"
        className="px-4 py-2 text-xs bg-green-600/20 text-green-400 rounded"
      >
        WhatsApp
      </a>

      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url
        )}`}
        target="_blank"
        className="px-4 py-2 text-xs bg-blue-600/20 text-blue-400 rounded"
      >
        LinkedIn
      </a>
    </div>
  );
}