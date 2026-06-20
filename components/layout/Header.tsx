"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
} from "lucide-react";

import Container from "@/components/ui/Container";

import ServicesDropdown from "./ServicesDropdown";
import MobileMenu from "./MobileMenu";


export default function Header() {

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



  // Tutup mobile menu ketika resize ke desktop
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
        top-0
        left-0
        z-50
        w-full
        transition-all
        duration-500

        ${scrolled ? "py-3" : "py-5"}
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

                  shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                `

                :

                `
                  border
                  border-transparent

                  bg-transparent

                  px-4
                  py-3
                `
            }

          `}

        >


          {/* LOGO */}

          <Link
            href="/"
            className="flex shrink-0 items-center"
          >


            {/* Desktop */}

            <div className="
              hidden
              md:flex
              items-center
              gap-3
            ">

              <Image
                src="/images/logo.png"
                alt="MEDIAFLIX.ID"
                width={44}
                height={44}
                priority
                className="h-10 w-auto"
              />


              <div>

                <h1 className="
                  text-lg
                  font-bold
                  leading-none
                  text-white
                ">
                  MEDIAFLIX
                  <span className="text-orange-500">
                    .ID
                  </span>
                </h1>


                <p className="
                  mt-1
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-zinc-400
                ">
                  Professional Broadcast Production
                </p>

              </div>

            </div>



            {/* Mobile */}

            <div className="md:hidden">

              <Image
                src="/images/logonavmf.png"
                alt="MEDIAFLIX.ID"
                width={170}
                height={40}
                priority
                className="h-10 w-auto"
              />

            </div>


          </Link>



          {/* Desktop Menu */}

          <nav className="
            hidden
            lg:flex
            items-center
            gap-10
          ">


            <Link
              href="/about"
              className="
                text-sm
                font-medium
                text-white/75
                transition
                hover:text-orange-500
              "
            >
              About
            </Link>


            <ServicesDropdown />


            <Link
              href="/projects"
              className="
                text-sm
                font-medium
                text-white/75
                transition
                hover:text-orange-500
              "
            >
              Projects
            </Link>


            <Link
              href="/regions"
              className="
                text-sm
                font-medium
                text-white/75
                transition
                hover:text-orange-500
              "
            >
              Regions
            </Link>


            <Link
              href="/contact"
              className="
                text-sm
                font-medium
                text-white/75
                transition
                hover:text-orange-500
              "
            >
              Contact
            </Link>


          </nav>



          {/* Desktop Button */}

          <div className="
            hidden
            lg:flex
            items-center
            gap-5
          ">


            <div className="
              h-5
              w-px
              bg-white/10
            "/>


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
              lg:hidden

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
            "

          >

            {
              mobileMenu

                ?

                <X size={20}/>

                :

                <Menu size={20}/>

            }

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