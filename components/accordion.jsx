"use client";
import Image from "next/image"
import { useState } from "react";

const accordionData = [
  {
    title: "Do you provide design and planning services as well?",
    content:
      "Yes, we do. Our team offers complete design and planning services to help you visualize your project before construction begins. We can assist with architectural drawings, 3D models, and material selection.",
    image: "/blog.jpg",
  },
  {
    title: "How long will my project take to complete?",
    content:
      "The timeline depends on the size and type of your project. Small renovations may take a few weeks, while larger construction projects can take several months. We always provide a clear schedule before starting and keep you updated throughout the process.",
    image: "/corsel4.jpg", 
  },
   {
    title: "Are you a licensed and insured construction company?",
    content:
      "Yes, our company is fully licensed and insured. This ensures that all our work meets legal and safety standards, and it protects both our clients and our team during the construction process.",
    image: "/blog_1.jpg", 
  },
   {
    title: "How do you ensure the quality of your work?",
    content:
      "Quality is our top priority. We use premium materials, hire skilled professionals, and conduct regular site inspections. Each phase of construction is carefully monitored to meet our quality standards.",
    image: "/roofing2.jpg", 
  },
];

export default function HeavyAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
     <section>
        <div className="flex flex-col md:flex-row items-start md:items-center p-6 gap-8">
   
      <div className="w-full md:w-1/2 space-y-4">
        {accordionData.map((item, index) => (
          <div
            key={index}
            className="border border-slate-300 rounded-lg overflow-hidden shadow-lg"
          >
            <button
              className="w-full flex justify-between items-center p-4 bg-rose-800 hover:bg-rose-950 transition-colors"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-lg font-semibold text-white">
                {item.title}
              </span>
              <svg
                className={`w-6 h-6 text-white transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                activeIndex === index ? "max-h-96 p-4" : "max-h-0 p-0"
              } bg-slate-50`}
            >
              <p className="text-slate-700">{item.content}</p>
            </div>
          </div>
        ))}
      </div>

      
      <div className="w-full md:w-1/2 h-93 flex justify-center items-center ">
        <Image
          src={
            activeIndex !== null
              ? accordionData[activeIndex].image
              : "/blog_2.jpg"
          }
          alt="Accordion Visual"
          width={300}
          height={500}
          className="rounded-lg shadow-xl transition-all duration-500 w-full max-w-md h-73"
        />
      </div>
    </div>
 <div className="py-2 shadow-xl">
  <marquee behavior="scroll" direction="left" scrollamount="10">
    <div className="flex items-center justify-around gap-16">

      <div className="flex items-center justify-center ">
        <Image src="/balkan.webp" alt="logo" width={100} height={100} />
      </div>

      <div className="flex items-center justify-center ">
        <Image src="/alfred.webp" alt="logo" width={100} height={100} />
      </div>

      <div className="flex items-center justify-center ">
        <Image src="/clutch.webp" alt="logo" width={100} height={100}/>
      </div>

      <div className="flex items-center justify-center ">
        <Image src="/google.webp" alt="logo" width={100} height={100} />
      </div>

      <div className="flex items-center justify-center ">
        <Image src="/balkan.webp" alt="logo" width={100} height={100} />
      </div>

    </div>
  </marquee>
</div>


     </section>
    </>
  );
}
