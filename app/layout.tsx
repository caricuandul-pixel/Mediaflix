import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://mediaflix.id"),
  title: {
    default: "MEDIAFLIX.ID",
    template: "%s | MEDIAFLIX.ID",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
    >
      <body className="bg-black text-white">
        <Header />
        

        {children}
        <Footer />
      </body>
    </html>
  );
}
