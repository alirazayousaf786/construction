"use client";
import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import Button from "@/components/button";

export default function ResponsiveCarousel() {
  const slides = [
    {
      image: "/corsel2.jpg",
      title: "WELCOME YOU TO BUILDER",
      description: "We are Providing Industry Roofing Solution",
      phone: "+123 456 7890",
    },
    {
      image: "/corsel1.jpg",
      title: "We Are Professional",
      description: "For Your Dream Project",
      phone: "+123 456 7890",
    },
    {
      image: "/corsel3.jpg",
      title: "Professional Builder",
      description: "We Build Your Home",
      phone: "+123 456 7890",
    },
    {
      image: "/corsel4.jpg",
      title: "We Are Trusted",
      description: "For Your Dream Home",
      phone: "+123 456 7890",
    },
  ];

  const [current, setCurrent] = useState(0);
  const total = slides.length;

  // Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(interval);
  }, [total]);

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  return (
    <div className="w-full relative">
      <div className="relative w-full h-[450px] sm:h-[550px] md:h-[650px] overflow-hidden rounded-xl shadow-2xl">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover brightness-75"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 text-white z-30">
              <h2 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg mb-3">
                {slide.title}
              </h2>
              <p className="text-lg md:text-2xl font-semibold drop-shadow-md mb-5">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button label="GET A QUOTE" />
                <div className="flex items-center gap-3 bg-rose-900 bg-opacity-60 px-5 py-3 rounded-full font-semibold shadow-lg hover:bg-opacity-90 transition cursor-pointer">
                  <FaPhoneAlt size={20} />
                  <span>{slide.phone}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Error  Buttons */}
        <button
          onClick={prev}
          className="absolute left-5 top-1/2 -translate-y-1/2 bg-rose-800 bg-opacity-60 text-white p-4 rounded-full z-40 hover:bg-opacity-90 transition-shadow shadow-lg"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          className="absolute right-5 top-1/2 -translate-y-1/2 bg-rose-800 bg-opacity-60 text-white p-4 rounded-full z-40 hover:bg-opacity-90 transition-shadow shadow-lg"
        >
          <FaChevronRight size={24} />
        </button>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10 px-6">
        <FeatureCard
          img="/g1.jpg"
          title="Expert Worker"
          description="Capable hands who combine knowledge and expertise."
          dark={false}
        />
        <FeatureCard
          img="/g2.jpg"
          title="Quality Work"
          description="We believe quality is more than a promise, it's our commitment."
          dark={true}
        />
        <FeatureCard
          img="/g3.jpg"
          title="Trusted Service"
          description="We are trusted by hundreds of clients for our excellence."
          dark={false}
        />
      </div>
    </div>
  );
}

function FeatureCard({ img, title, description, dark }) {
  return (
    <div
      className={`flex items-center gap-4 p-6 rounded-xl shadow-lg transition transform hover:scale-105 ${
        dark ? "bg-rose-800 text-white" : "bg-white text-rose-800"
      }`}
    >
      <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center  rounded-2xl overflow-hidden">
        <Image
          src={img}
          alt={title}
          width={100}
          height={100}
          className="rounded-2xl object-cover"
        />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-md">{description}</p>
      </div>
    </div>
  );
}
