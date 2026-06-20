"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Client {
  name: string;
  logo: string;
}

interface Props {
  clients: Client[];
}

export default function ClientsMarquee({ clients }: Props) {
  const duplicated = [...clients, ...clients];

  return (
    <div className="relative w-full overflow-hidden whitespace-nowrap bg-transparent py-6">
      {/* Gradasi pudar */}
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-white to-transparent dark:from-[#05070B]" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-white to-transparent dark:from-[#05070B]" />

      <motion.div
        className="flex w-max gap-8 pr-8"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 45,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicated.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="
              relative /* Diperlukan agar pembungkus menjadi jangkar untuk 'fill' */
              flex
              h-28
              w-[160px]
              shrink-0
              items-center
              justify-center
              opacity-50
              transition-opacity
              duration-300
              hover:opacity-100
            "
          >
            <Image
              src={client.logo}
              alt={client.name}
              fill /* Mengisi ruang box pembungkus secara dinamis */
              sizes="160px" /* Memberi tahu Next.js bahwa lebar logo maksimal hanya 160px */
              className="object-contain p-2" /* Menjaga aspect ratio asli logo tetap aman dan tidak gepeng */
              priority={index < 10}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
