"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import Container from "@/components/ui/Container";

import ServicesDropdown from "./ServicesDropdown";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const pathname = usePathname();

  const [scrolled, setScrolled] =
    useState(false);

  const [mobileMenu, setMobileMenu] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenu(false);
      }
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);

  const isActive = (
    href: string
  ) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(
      href
    );
  };

  const navLinkClass = (
    href: string
  ) => `
      relative
      flex
      items-center
      justify-center
      rounded-full
      px-4
      py-2.5
      text-sm
      font-medium
      transition-all
      duration-300
      ${
        isActive(href)
          ? "text-white"
          : "text-white/75 hover:text-orange-400"
      }
    `;

  return (
    <motion.header
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.4,
      }}
      className={`
        fixed
        left-0
        top-0
        z-50
        w-full
        transition-all
        duration-500
        ${
          scrolled
            ? "py-3"
            : "py-5"
        }
      `}
    >
      <Container>
        <div
          className={`
            relative
            flex
            items-center
            justify-between
            rounded-full
            transition-all
            duration-500
            ${
              scrolled
                ? `
                  border
                  border-white/10
                  bg-black/80
                  px-8
                  py-4
                  backdrop-blur-2xl
                  shadow-[0_20px_60px_rgba(0,0,0,.45)]
                `
                : `
                  border
                  border-transparent
                  bg-transparent
                  px-4
                  py-3
                `
            }
          `}
        >
          {/* Logo */}

          <Link
            href="/"
            className="flex shrink-0 items-center"
          >
            <Image
              src="/images/logomf.png"
              alt="MEDIAFLIX"
              width={140}
              height={50}
              priority
              className="
                h-10
                w-auto
                transition-all
                duration-300
                lg:h-11
                xl:h-12
              "
            />
          </Link>

          {/* Desktop Navigation */}

          <nav
            className="
              hidden
              lg:flex
              items-center
              gap-4
            "
          >
                        <Link
              href="/about"
              className={navLinkClass("/about")}
            >
              {isActive("/about") && (
                <motion.span
                  layoutId="nav-active"
                  className="
                    absolute
                    inset-0
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.06]
                    shadow-[0_0_20px_rgba(249,115,22,0.15)]
                  "
                  transition={{
                    type: "spring",
                    stiffness: 450,
                    damping: 35,
                  }}
                />
              )}

              <span
  className={`
    relative
    z-10
    transition-colors
    duration-300
    ${
      isActive("/about")
        ? "text-orange-400"
        : "text-white/75 group-hover:text-white"
    }
  `}
>
                About
              </span>
            </Link>

            <ServicesDropdown />

            <Link
              href="/projects"
              className={navLinkClass("/projects")}
            >
              {isActive("/projects") && (
                <motion.span
                  layoutId="nav-active"
                  className="
                    absolute
                    inset-0
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.06]
                    shadow-[0_0_20px_rgba(249,115,22,0.15)]
                  "
                  transition={{
                    type: "spring",
                    stiffness: 450,
                    damping: 35,
                  }}
                />
              )}

             <span
  className={`
    relative
    z-10
    transition-colors
    duration-300
    ${
      isActive("/projects")
        ? "text-orange-400"
        : "text-white/75 group-hover:text-white"
    }
  `}
>
                Projects
              </span>
            </Link>

            <Link
              href="/regions"
              className={navLinkClass("/regions")}
            >
              {isActive("/regions") && (
                <motion.span
                  layoutId="nav-active"
                  className="
                    absolute
                    inset-0
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.06]
                    shadow-[0_0_20px_rgba(249,115,22,0.15)]
                  "
                  transition={{
                    type: "spring",
                    stiffness: 450,
                    damping: 35,
                  }}
                />
              )}

              <span
  className={`
    relative
    z-10
    transition-colors
    duration-300
    ${
      isActive("/regions")
        ? "text-orange-400"
        : "text-white/75 group-hover:text-white"
    }
  `}
>
                Regions
              </span>
            </Link>

            <Link
              href="/contact"
              className={navLinkClass("/contact")}
            >
              {isActive("/contact") && (
                <motion.span
                  layoutId="nav-active"
                  className="
                    absolute
                    inset-0
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.06]
                    shadow-[0_0_20px_rgba(249,115,22,0.15)]
                  "
                  transition={{
                    type: "spring",
                    stiffness: 450,
                    damping: 35,
                  }}
                />
              )}

              <span
  className={`
    relative
    z-10
    transition-colors
    duration-300
    ${
      isActive("/contact")
        ? "text-orange-400"
        : "text-white/75 group-hover:text-white"
    }
  `}
>
                Contact
              </span>
            </Link>
          </nav>

          {/* Desktop CTA */}

          <div
            className="
              hidden
              lg:flex
              items-center
              gap-5
            "
          >
            <div
              className="
                h-5
                w-px
                bg-white/10
              "
            />

            <Link
              href="/contact"
              className="
                rounded-full
                bg-orange-500
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-orange-600
              "
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Burger */}

          <button
            onClick={() =>
              setMobileMenu(!mobileMenu)
            }
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-white
              backdrop-blur-xl
              lg:hidden
            "
          >
            {mobileMenu ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
                    {/* Mobile Menu */}

          <MobileMenu
            mobileMenu={mobileMenu}
            setMobileMenu={setMobileMenu}
          />
        </div>
      </Container>
    </motion.header>
  );
}