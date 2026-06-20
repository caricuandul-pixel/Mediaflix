import type { Metadata } from "next";

export function generateContactMetadata(): Metadata {
  return {
    title: "Contact Global Operations | MEDIAFLIX",

    description:
      "Contact MEDIAFLIX for global broadcast production, live streaming, hybrid events, and media technology services worldwide.",

    openGraph: {
      title: "Contact MEDIAFLIX",

      description:
        "Get in touch with MEDIAFLIX global production team.",

      type: "website",
    },
  };
}