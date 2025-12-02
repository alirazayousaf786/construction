"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBusinessTime } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Button from "@/components/button";
import Image from "next/image";
import "./component.css";

export default function Header() {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section>
        <div className="w-full bg-rose-800 h-32 pt-3">
          <div className="max-w-[1300px] mx-auto">
            <div className="flex items-center justify-between gap-10 px-2 flex-wrap">
              <h1 className="text-2xl font-extrabold tracking-wide text-white">
                AY CONSTRUCTION
              </h1>
              {/* logo image */}
              {/* <div>
                <Image
                  src="/logo_white.svg"
                  alt="logo"
                  width={60}
                  height={60}
                />
              </div> */}

              <div className="flex flex-row items-center gap-1">
                <FaBusinessTime size={35} className="text-white" />
                <div className="flex flex-col text-white">
                  <span>Opening Hour</span>
                  <span className="text-[14px]">Mon - Fri, 8:00 - 9:00</span>
                </div>
              </div>

              <div className="flex flex-row items-center gap-1">
                <BsTelephoneFill size={32} className="text-white" />
                <div className="flex flex-col text-white">
                  <span>Call Us</span>
                  <span className="text-[14px]">+12345678</span>
                </div>
              </div>

              <div className="flex flex-row items-center gap-1">
                <MdMarkEmailUnread size={32} className="text-white" />
                <div className="flex flex-col text-white">
                  <span>Email Us</span>
                  <span className="text-[14px]">info@example.com</span>
                </div>
              </div>

              {/* Mobile Menu Toggle */}
              <div
                className="md:hidden text-white text-3xl"
                onClick={() => setOpen(!open)}
              >
                {open ? <IoMdClose /> : <GiHamburgerMenu />}
              </div>
            </div>
          </div>

          {/* navbar section */}
          <div
            className={`${
              sticky
                ? "fixed top-0 left-0 w-full shadow-lg z-50"
                : "absolute left-1/2 -translate-xr-1/2 -translate-x-1/2 w-[90%] md:w-[70%]"
            } transition-all duration-700 ease-in-out mx-auto header-navbar`}
          >
            <div className="flex items-center justify-between gap-10 p-2 max-w-[1300px] mx-auto">
              {/* Desktop Menu */}
              <ul className="hidden md:flex items-center justify-between gap-10 text-white header-ul">
                <li className=" font-bold hover:text-rose-900">
                  <Link href="/">HOME</Link>
                </li>
                <li className="transition-all duration-300 hover:translate-x-2">
                  <Link href="/about">ABOUT</Link>
                </li>
                <li className="transition-all duration-300 hover:translate-x-2">
                  <Link href="/servicess">SERVICE</Link>
                </li>
                <li className="transition-all duration-300 hover:translate-x-2">
                  <Link href="/team">TEAM</Link>
                </li>
                <li className="transition-all duration-300 hover:translate-x-2">
                  <Link href="/project">PROJECT</Link>
                </li>
                <li className="transition-all duration-300 hover:translate-x-2">
                  <Link href="/contact">CONTACT</Link>
                </li>
              </ul>

              <button className="hidden md:block ">
                <Button label="GET A QUOTE" />
              </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {open && (
              <div className="md:hidden bg-rose-900 px-5 py-3 animate-slide-down z-90">
                <ul className="flex flex-col gap-4 text-white">
                  <li className="font-bold text-roze-900">
                    <Link href="/">HOME</Link>
                  </li>
                  <li className="font-bold text-roze-900">
                    <Link href="/about">ABOUT</Link>
                  </li>
                  <li className="font-bold text-roze-900">
                    <Link href="/servic">SERVICE</Link>
                  </li>
                  <li className="font-bold text-roze-900">
                    <Link href="/team">TEAM</Link>
                  </li>
                  <li className="font-bold text-roze-900">
                    <Link href="/project">PROJECT</Link>
                  </li>
                  <li className="font-bold text-roze-900">
                    <Link href="/contact">CONTACT</Link>
                  </li>
                </ul>

                <button className="mt-4 w-full p-2 border-4 border-double border-white font-bold text-white">
                  GET A QUOTE
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
