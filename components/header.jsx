"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBusinessTime } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import Button from "@/components/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./component.css";

export default function Header() {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectOpen, setSelectOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) =>
    pathname === path
      ? "text-rose-800 bg-white px-3 py-1 rounded-md"
      : "text-white hover:text-rose-800";

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section>
      <div className="w-full bg-rose-800 h-auto md:h-32 pt-3">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex items-center justify-between gap-6 px-4 flex-wrap">
            <h1 className="text-xl md:text-2xl font-extrabold tracking-wide text-white">
              AY CONSTRUCTION
            </h1>

            <div className="flex items-center gap-2">
              <FaBusinessTime size={32} className="text-white" />
              <div className="text-white text-sm">
                <span>Opening Hour</span>
                <p>Mon - Fri, 8:00 - 9:00</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <BsTelephoneFill size={28} className="text-white" />
              <div className="text-white text-sm">
                <span>Call Us</span>
                <p>+12345678</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <MdMarkEmailUnread size={30} className="text-white" />
              <div className="text-white text-sm">
                <span>Email Us</span>
                <p>info@example.com</p>
              </div>
            </div>

            <div
              className="md:hidden text-white text-3xl z-99 "
              onClick={() => setOpen(!open)}
            >
              {open ? <IoMdClose /> : <GiHamburgerMenu />}
            </div>
          </div>
        </div>

        <div
          className={`${
            sticky
              ? "fixed top-0 left-0 w-full shadow-lg z-[9999] bg-rose-800"
              : "absolute  w-full"
          } header-navbar`}
        >
          <div className="flex items-center justify-between gap-5 p-3 max-w-[1300px] mx-auto">
            <ul className="hidden md:flex items-center gap-10 relative">
              <li className={isActive("/")}>
                <Link href="/">HOME</Link>
              </li>

              <li className={isActive("/about")}>
                <Link href="/about">ABOUT</Link>
              </li>

              <li className={isActive("/servicess")}>
                <Link href="/servicess">SERVICE</Link>
              </li>

              <li className={isActive("/team")}>
                <Link href="/team">TEAM</Link>
              </li>

              <li className={isActive("/project")}>
                <Link href="/project">PROJECT</Link>
              </li>

              <li className={isActive("/contact")}>
                <Link href="/contact">CONTACT</Link>
              </li>

              <li className="relative cursor-pointer group">
                <div className="flex items-center gap-2 text-white hover:text-rose-800 font-semibold">
                  PAGES <FaAngleDown />
                </div>

                <div className="absolute top-10 left-0 p-4 hover:border-b-4 hover:border-b-rose-800 bg-white text-rose-800 rounded-md shadow-lg w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-99">
                  <Link
                    href="/blog"
                    className="block px-4 py-2 hover:bg-rose-200 rounded-2xl"
                  >
                    Blog
                  </Link>

                  <Link
                    href="/career"
                    className="block px-4 py-2 hover:bg-rose-200 rounded-2xl"
                  >
                    Careers
                  </Link>

                  <Link
                    href="/gallery"
                    className="block px-4 py-2 hover:bg-rose-200 rounded-2xl"
                  >
                    Gallery
                  </Link>
                </div>
              </li>
            </ul>

            <span className="hidden md:block mobile-screen-open">
              <Button label="GET A QUOTE" />
            </span>
          </div>

          {open && (
            <div className="md:hidden bg-rose-800 px-5 py-3 animate-slide-left fixed top-20 left-0 w-full h-[500px] z-[999999] overflow-auto">
              <ul className="flex flex-col gap-4 text-white text-lg">
                <li className={isActive("/")}>
                  <Link href="/" onClick={() => setOpen(false)}>HOME</Link>
                </li>

                <li className={isActive("/about")}>
                  <Link href="/about" onClick={() => setOpen(false)}>ABOUT</Link>
                </li>

                <li className={isActive("/servicess")}>
                  <Link href="/servicess" onClick={() => setOpen(false)}>SERVICE</Link>
                </li>

                <li className={isActive("/team")}>
                  <Link href="/team" onClick={() => setOpen(false)}>TEAM</Link>
                </li>

                <li className={isActive("/project")}>
                  <Link href="/project" onClick={() => setOpen(false)}>PROJECT</Link>
                </li>

                <li className={isActive("/contact")}>
                  <Link href="/contact" onClick={() => setOpen(false)}>CONTACT</Link>
                </li>
              </ul>

              <div className="mt-4">
                <div
                  className="text-white flex items-center gap-2 cursor-pointer z-[9998]"
                  onClick={() => setSelectOpen(!selectOpen)}
                >
                  PAGES <FaAngleDown />
                </div>

                {selectOpen && (
                  <div className="mt-2 bg-white text-rose-800 rounded-md shadow-lg z-99">
                    <Link
                      href="/blog"
                      className="block px-4 py-2 hover:bg-rose-200"
                      onClick={() => setOpen(false)}
                    >
                      Blog
                    </Link>
                    <Link
                      href="/career"
                      className="block px-4 py-2 hover:bg-rose-200"
                      onClick={() => setOpen(false)}
                    >
                      Careers
                    </Link>

                    <Link
                      href="/gallery"
                      className="block px-4 py-2 hover:bg-rose-200"
                      onClick={() => setOpen(false)}
                    >
                      Gallery
                    </Link>
                  </div>
                )}
              </div>

              <button className="mt-5 w-full p-2 border-4 border-double border-white font-bold text-white">
                GET A QUOTE
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
