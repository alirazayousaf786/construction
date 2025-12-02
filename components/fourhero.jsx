"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function FourthHero() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Architecture Design",
      paragraph:
        "We provide comprehensive material supply solutions for construction projects of all scales.",
      projects: "434+",
      awards: "20+",
      imageLeft: "/corsel4.jpg",
      imageRightTop: "/serviceDetail_02.webp",
      imageRightBottom: "/serviceDetail_01.webp",
    },
    {
      title: "Building Renovation",
      paragraph:
        "We establish strategic partnerships to create added value.",
      projects: "380+",
      awards: "18+",
      imageLeft: "/corsel4.jpg",
      imageRightTop: "/serviceDetail_02.webp",
      imageRightBottom: "/serviceDetail_01.webp",
    },
    {
      title: "Material Supply",
      paragraph:
        "Our renovation services transform old structures into modern spaces.",
      projects: "500+",
      awards: "25+",
      imageLeft: "/corsel4.jpg",
      imageRightTop: "/serviceDetail_02.webp",
      imageRightBottom: "/serviceDetail_01.webp",
    },
  ];

  const active = tabs[activeTab];

  return (
    <section className="w-full bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">

        {/* left side */}
        <div className="space-y-8">

          
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <Image
              src={active.imageLeft}
              alt="worker"
              width={280}
              height={280}
              className="rounded-xl shadow-xl object-cover border border-slate-700 hover:scale-105 transition"
            />

            <div className="bg-rose-800 p-5 rounded-xl w-full shadow-lg border border-rose-700">
              <span className="text-sm uppercase tracking-wide text-slate-100">Starting From</span>
              <h5 className="text-lg font-semibold mt-1">Mortgage Credit</h5>
              <span className="text-4xl font-extrabold mt-2 block">15.5</span>
              <span className="text-sm block text-slate-200">% interest →</span>
            </div>
          </div>

         
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {["General Consulting", "Project Management", "Strategic Planning"].map(
              (text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-slate-800/50 p-3 rounded-lg border border-slate-700 hover:bg-slate-800 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 stroke-rose-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-sm">{text}</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* right side */}
        <div className="space-y-8">

        
          <div className="flex flex-wrap gap-6">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`relative text-base font-semibold pb-1 transition ${
                  activeTab === i
                    ? "text-rose-500"
                    : "text-slate-400 hover:text-rose-400"
                }`}
              >
                {tab.title}

                {activeTab === i && (
                  <span className="absolute left-0 right-0 -bottom-1 min-h-[2px] bg-rose-600 rounded-full"></span>
                )}
              </button>
            ))}
          </div>

         
          <div className="bg-slate-800/60 border border-slate-700 p-5 rounded-xl shadow-lg text-slate-300">
            <p className="text-sm leading-relaxed">{active.paragraph}</p>
          </div>

         
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
           
            <div className="flex items-center gap-3 p-4 bg-slate-800/50 border border-slate-700 rounded-xl hover:bg-slate-800 transition">
              <Image
                src={active.imageRightTop}
                alt="service"
                width={45}
                height={45}
                className="rounded-md"
              />
              <div>
                <h2 className="text-3xl font-bold text-rose-500">{active.projects}</h2>
                <p className="text-sm text-slate-300">Projects Completed</p>
              </div>
            </div>

            
            <div className="flex items-center gap-3 p-4 bg-slate-800/50 border border-slate-700 rounded-xl hover:bg-slate-800 transition">
              <Image
                src={active.imageRightBottom}
                alt="service"
                width={45}
                height={45}
                className="rounded-md"
              />
              <div>
                <h2 className="text-3xl font-bold text-rose-500">{active.awards}</h2>
                <p className="text-sm text-slate-300">Awards Won</p>
              </div>
            </div>
          </div>

       
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-rose-700 rounded-full font-semibold hover:bg-rose-800 transition shadow-md text-white text-sm">
              Discover More
            </button>

            <button className="px-6 py-3 border border-rose-600 text-rose-400 rounded-full font-semibold hover:bg-rose-700 hover:text-white transition shadow-md text-sm">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
