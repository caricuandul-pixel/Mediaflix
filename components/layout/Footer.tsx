import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/mediaflix.id",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/Mediaflix.id",
    icon: FaFacebookF,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@mediaflixindonesia6885",
    icon: FaYoutube,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/mediaflixx",
    icon: FaLinkedin,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-3 py-15">
        {/* Top */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* Company */}
          <div>
            <Image
              src="/images/logomf.png"
              alt="MEDIAFLIX.ID"
              width={170}
              height={40}
              priority
              className="h-10 w-auto"
            />

            <p className="mt-5 leading-relaxed text-zinc-400">
              Solusi profesional untuk kebutuhan broadcast multimedia, live
              streaming, multicamera production, virtual event, webinar, dan
              produksi konten digital.
            </p>

            {/* Social */}
            <div className="mt-5 flex gap-3">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-all duration-300 hover:border-orange-500/30 hover:bg-orange-500 hover:text-white hover:scale-105"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold text-white">
              Navigation
            </h4>

            <div className="mt-5 flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="w-fit text-zinc-400 transition-colors duration-300 hover:text-orange-500"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white">
              Contact
            </h4>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="mt-1 text-orange-500"
                />
                <div>
                  <p className="text-zinc-400">
                    +62 812-3456-7890
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="mt-1 text-orange-500"
                />
                <div>
                  <p className="text-zinc-400">
                    info@mediaflix.id
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-1 text-orange-500"
                />
                <div>
                  <p className="text-zinc-400">
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-white/10 pt-4">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} MEDIAFLIX.ID. All rights reserved.
            </p>

            <p className="text-sm text-zinc-500">
              Broadcast Multimedia Solution
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
