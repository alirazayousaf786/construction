"use client";
import React from "react";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";
import Social from "@/components/socilaIcon";
export default function Footer() {
  return (
    <>
      <section>
        {/*  top newsletter bannner */}
        <div className="relative w-full h-[300px]">
          {/* Background Image */}
          <Image
            src="/footer.jpg"
            alt="footer image"
            width={1600}
            height={300}
            className="object-cover w-full h-full"
          />

          <div className="absolute inset-0 bg-black/60"></div>

          {/* SVG Bottom Curve */}
          <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="rgb(190,18,60)"
              d="M0,40 C360,120 1080,-40 1440,40 L1440,100 L0,100 Z"
            ></path>
          </svg>

          {/* Newsletter Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold drop-shadow-2xl tracking-wide">
              Subscribe to Our Newsletter
            </h2>

            <p className="mt-2 text-base md:text-lg opacity-90 font-light">
              Stay updated with our latest projects & construction insights.
            </p>

            {/* <div className="mt-5 flex gap-2 w-full max-w-lg bg-slate-100 rounded-xl">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg outline-none text-black shadow-md"
              />
              <button className="px-6 py-2 bg-rose-700 hover:bg-rose-800 rounded-lg font-semibold shadow-lg">
                Subscribe
              </button>
            </div> */}
            <div className="flex items-start justify-center mt-5">
              <Social />
            </div>
          </div>
        </div>

        {/* main footer area  */}
        <div className="bg-slate-950 p-6 cursor-pointer pt-10">
          <footer className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-12 px-4 py-4">
            {/* Office Contact */}
            <div>
              <h3 className="font-bold text-rose-600 text-lg">
                Office Contact
              </h3>
              <div>
                <svg
                  width="100"
                  height="10"
                  viewBox="0 0 200 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-xl font-bold"
                >
                  <line
                    x1="0"
                    y1="10"
                    x2="180"
                    y2="10"
                    stroke="#E91E63"
                    strokeWidth="4"
                  />

                  <rect
                    x="180"
                    y="5"
                    width="10"
                    height="10"
                    fill="#E91E63"
                    transform="rotate(45 184 10)"
                  />
                </svg>
              </div>

              <div className="flex flex-row gap-2 text-white py-3">
                <FaLocationDot className="mt-1 text-rose-600" />
                <span>123 Street, Sahiwal, Pakistan</span>
              </div>

              <div className="flex flex-row gap-2 text-white py-2">
                <BsTelephoneFill className="mt-1 text-rose-600" />
                <span>+12345678</span>
              </div>

              <div className="flex flex-row gap-2 text-white py-2">
                <MdMarkEmailUnread className="mt-1 text-rose-600" />
                <span>sysfos@gmail.com</span>
              </div>

              {/* Social Icons */}
              <div className="flex flex-row gap-3 mt-3">
                {[
                  "facebook-1.png",
                  "instagram-1.png",
                  "tiktok-1.png",
                  "google-1.png",
                ].map((icon, i) => (
                  <div
                    key={i}
                    className="border border-white w-[38px] h-[38px] rounded-full flex items-center justify-center hover:bg-rose-700 transition-all"
                  >
                    <Image src={`/${icon}`} alt="icon" width={20} height={20} />
                  </div>
                ))}
              </div>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="font-bold text-rose-600 text-lg">
                Services Areas
              </h3>
               <div>
                <svg
                  width="100"
                  height="10"
                  viewBox="0 0 200 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-xl font-bold"
                >
                  <line
                    x1="0"
                    y1="10"
                    x2="180"
                    y2="10"
                    stroke="#E91E63"
                    strokeWidth="4"
                  />

                  <rect
                    x="180"
                    y="5"
                    width="10"
                    height="10"
                    fill="#E91E63"
                    transform="rotate(45 184 10)"
                  />
                </svg>
              </div>

              <div className="mt-3 space-y-2">
                {[
                  "Building Construction",
                  "House Renovation",
                  "Architecture Design",
                  "Interior Design",
                  "Painting & Exterior",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-row text-white transition-all hover:translate-x-2"
                  >
                    <FaAngleRight className="mt-1 text-rose-600" />
                    <h5 className="text-sm font-semibold ml-2 hover:text-rose-600">
                      {item}
                    </h5>
                  </div>
                ))}
              </div>
            </div>

            {/* Useful Pages */}
            <div>
              <h3 className="font-bold text-rose-600 text-lg">Useful Pages</h3>
               <div>
                <svg
                  width="100"
                  height="10"
                  viewBox="0 0 200 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-xl font-bold"
                >
                  <line
                    x1="0"
                    y1="10"
                    x2="180"
                    y2="10"
                    stroke="#E91E63"
                   strokeWidth="4"
                  />

                  <rect
                    x="180"
                    y="5"
                    width="10"
                    height="10"
                    fill="#E91E63"
                    transform="rotate(45 184 10)"
                  />
                </svg>
              </div>

              <div className="mt-3 space-y-2">
                {[
                  "About Us",
                  "Contact Us",
                  "Our Team",
                  "Projects",
                  "Testimonials",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-row text-white transition-all hover:translate-x-2"
                  >
                    <FaAngleRight className="mt-1 text-rose-600" />
                    <h5 className="text-sm font-semibold ml-2 hover:text-rose-600">
                      {item}
                    </h5>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Right Small */}
            <div>
              <h3 className="font-bold text-rose-600 text-lg">Newsletter</h3>
               <div>
                <svg
                  width="100"
                  height="10"
                  viewBox="0 0 200 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-xl font-bold"
                >
                  <line
                    x1="0"
                    y1="10"
                    x2="180"
                    y2="10"
                    stroke="#E91E63"
                    strokeWidth="4"
                  />

                  <rect
                    x="180"
                    y="5"
                    width="10"
                    height="10"
                    fill="#E91E63"
                    transform="rotate(45 184 10)"
                  />
                </svg>
              </div>

              <p className="text-white my-3 text-sm opacity-90">
                Subscribe to get updates on our services and latest house
                projects.
              </p>

              <div className="relative p-2">
                <input
                  type="email"
                  placeholder="Email Here"
                  className="p-2 border border-slate-300 bg-white w-full rounded-lg text-black"
                />
                <button className="text-[13px] font-bold px-3 py-[6px] bg-rose-700 text-white rounded absolute bottom-4 right-3 hover:bg-rose-800 transition">
                  SUBMIT
                </button>
              </div>
            </div>
          </footer>

          {/* Bottom Footer */}
          <div>
            <hr className="max-w-[1500px] mx-auto border-slate-600 mt-6" />
            <div className="max-w-[600px] mx-auto flex flex-row gap-4 my-3 text-white text-sm justify-center">
              {[
                "Terms of Use",
                "Privacy Policy",
                "Cookies",
                "Help",
                "FAQs",
              ].map((text, i) => (
                <div key={i} className="flex flex-row gap-2">
                  <span>{text}</span>
                  {i < 4 && (
                    <div className="w-[2px] h-[18px] bg-rose-700 mt-1"></div>
                  )}
                </div>
              ))}
            </div>
            <hr className="max-w-[1500px] mx-auto border-slate-600" />
          </div>
        </div>
      </section>
    </>
  );
}
