"use client";
import { FaArrowRightToBracket } from "react-icons/fa6";
import Image from "next/image";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import "./component.css";
import Container from "@/components/container";

export default function PricingCard() {
  const pricings = [
    {
      plan: "STANDARD PLAN",
      pricing: "$20",
      describe: "Per Day Billed Annually",
      paragraph:
        "For each project we establish relationships with partners who provide value.",
      button: "Get Started",
      icon: <FaArrowRightToBracket />,
      image: "/safety.webp",
    },
    {
      plan: "PREMIUM PLAN",
      pricing: "$50",
      describe: "Per Week Billed Annually",
      paragraph:
        "Designed for teams who need advanced collaboration and premium support.",
      button: "Get Started",
      icon: <FaArrowRightToBracket />,
      image: "/safety.webp",
      populer: "Popular",
    },
    {
      plan: "ENTERPRISE PLAN",
      pricing: "$100",
      describe: "Per Month Billed Annually",
      paragraph:
        "A comprehensive package for enterprises requiring tailored solutions.",
      button: "Get Started",
      icon: <FaArrowRightToBracket />,
      image: "/safety.webp",
    },
  ];

  return (
    <>
      <section className="py-20 relative">
        <Container>
          <div className="mx-auto px-4">
            <h2 className="text-4xl font-extrabold text-center text-rose-900 mb-16 tracking-widest">
              Our Pricing Plans
            </h2>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
              {pricings.map((price, index) => (
                <div
                  key={index}
                  className="
                  relative rounded-3xl overflow-hidden shadow-2xl border border-rose-200
                  bg-white/80 backdrop-blur-xl transition-all duration-500 
                  hover:-translate-y-3 hover:shadow-rose-300 hover:shadow-2xl
                  group hover:border-b-4 hover:border-rose-800
                "
                >
                  <div className="absolute -top-20 -right-20 w-60 h-60 bg-rose-900/10 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-rose-700/10 rounded-full blur-3xl"></div>

                  {index === 1 && (
                    <div className="absolute top-3 right-3 bg-rose-700 text-white text-sm px-3 py-1 rounded-full tracking-wide">
                      {price.populer}
                    </div>
                  )}

                  <div className="p-10 relative z-10">
                    {index === 1 && (
                      <div className="flex justify-center mb-4">
                        <div className="relative flex size-3">
                          <span className="absolute inline-flex h-full w-full rounded-full bg-rose-400 animate-ping opacity-70"></span>
                          <span className="relative inline-flex size-3 rounded-full bg-rose-900"></span>
                        </div>
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <span className="text-sm font-semibold tracking-wide text-rose-900">
                        {price.plan}
                      </span>
                      <div className="flex items-center justify-center mt-3">
                        <span className="text-5xl font-extrabold text-rose-900 drop-shadow-sm">
                          {price.pricing}
                        </span>
                        <span className="ml-2 text-sm text-gray-600">
                          {price.describe}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-700 text-center text-sm leading-relaxed mb-6">
                      {price.paragraph}
                    </p>

                    <button className="w-full group">
                      <div
                        className="flex items-center justify-between bg-rose-800 p-2 text-white rounded-xl border border-rose-900 shadow-lg
                                 transition-all duration-500 group-hover:bg-rose-900 group-hover:shadow-2xl group-hover:scale-[1.02]"
                      >
                        <span>{price.button}</span>
                        <div
                          className="bg-slate-900 p-2 rounded-lg text-white transition-all duration-500 
                                   group-hover:bg-rose-700 group-hover:translate-x-2"
                        >
                          <FaArrowRightFromBracket size={20} />
                        </div>
                      </div>
                    </button>
                    <div className="mt-8 rounded-xl overflow-hidden h-[220px] relative group">
                      <Image
                        src={price.image}
                        alt={price.plan}
                        width={300}
                        height={200}
                        className="
                          w-full h-full object-cover 
                          transition-all duration-500 
                          group-hover:scale-110
                        "
                      />
                      <div
                        className="
                        absolute inset-0 bg-gradient-to-t from-black/40 to-transparent
                        opacity-0 group-hover:opacity-100 transition-all duration-500
                      "
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
