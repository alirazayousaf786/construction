"use client";
import { FaArrowRightToBracket } from "react-icons/fa6";
import Image from "next/image";
import "./component.css";
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
        "Designed for teams who need advanced collaboration and premium support..",
      button: "Get Started",
      icon: <FaArrowRightToBracket />,
      image: "/safety.webp",
      populer: "Populer",
    },
    {
      plan: "ENTERPRISE PLAN",
      pricing: "$100",
      describe: "Per Month Billed Annually",
      paragraph:
        "A comprehensive package for enterprises requiring tailored solutions..",
      button: "Get Started",
      icon: <FaArrowRightToBracket />,
      image: "/safety.webp",
    },
  ];

  return (
    <>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-rose-900 mb-12">
            Our Pricing Plans
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
            {pricings.map((price, index) => (
              <div
                key={index}
                className="relative bg-white border border-slate-200 rounded-2xl shadow-xl hover:shadow-2xl hover:border-rose-900 transition-all duration-300 overflow-hidden"
              >
                <svg
                  className="absolute -top-16 -right-16 w-40 h-40 opacity-20 text-rose-900"
                  fill="currentColor"
                  viewBox="0 0 100 100"
                >
                  <circle cx="50" cy="50" r="50" />
                </svg>

                <div className="p-8 flex flex-col justify-between h-full">
                  {index === 1 &&(
                    <div className="vertical-text absolute top-3 right-4 bg-rose-800 p-1">
                    <span className="text-md">{price.populer}</span>
                  </div>
                  )}
                  <div>
                    {index === 1 && (
                      <span className="relative flex size-3 mb-3">
                        <span className="absolute  inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75"></span>
                        <span className="relative inline-flex size-3 rounded-full bg-rose-500"></span>
                      </span>
                    )}
                  </div>
                  {/* Header */}
                  <div className="mb-6">
                    <span className="text-sm font-semibold text-rose-900">
                      {price.plan}
                    </span>
                    <div className="flex items-center mt-2">
                      <span className="text-4xl font-bold text-rose-900">
                        {price.pricing}
                      </span>
                      <span className="ml-2 text-sm text-gray-500">
                        {price.describe}
                      </span>
                    </div>
                  </div>

                  {/* Paragraph */}
                  <p className="text-gray-600 mb-6">{price.paragraph}</p>

                  {/* Button */}
                  <button className="bg-rose-900 hover:bg-rose-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300">
                    <span>{price.button}</span>
                    <span>{price.icon}</span>
                  </button>

                  {/* Image */}
                  <div className="mt-6 overflow-hidden w-full h-[230px] rounded-xl group">
                    <Image
                      src={price.image}
                      alt={price.plan}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
