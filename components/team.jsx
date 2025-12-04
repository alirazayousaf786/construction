import React from "react";
import Image from "next/image";
import "../components/component.css";

export default function Teams() {
  const seconds = [
    {
      image: "/team1.png",
      title: "Adam Phillips",
      descripts: "CEO & Founder",
      iconImages: [
        "/google-1.png",
        "/facebook-1.png",
        "/tiktok-1.png",
        "/instagram-1.png",
      ],
    },
    {
      image: "/team2.png",
      title: "Liya",
      descripts: "Interior Designer",
      iconImages: [
        "/google-1.png",
        "/facebook-1.png",
        "/tiktok-1.png",
        "/instagram-1.png",
      ],
    },
    {
      image: "/team3.png",
      title: "Dylan Adams",
      descripts: "Civil Engineer",
      iconImages: [
        "/google-1.png",
        "/facebook-1.png",
        "/tiktok-1.png",
        "/instagram-1.png",
      ],
    },
  ];

  return (
    <>
      <section className="w-full py-16">
        <h1 className="text-4xl text-center text-rose-800 font-extrabold mb-12 tracking-wider animate-fade-up">
          Meet Our Engineers
        </h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 px-6 max-w-6xl mx-auto">
          {seconds.map((second, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-xl bg-white border border-rose-300 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3"
            >
              <div className="overflow-hidden h-60">
                <Image
                  src={second.image}
                  alt={second.title}
                  width={200}
                  height={100}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="relative bg-rose-50 h-48 overflow-hidden">

              

                <div
                  className="absolute bottom-0 left-0 w-full h-[140px]
                  translate-y-full group-hover:translate-y-0
                  transition-transform duration-700 delay-200"
                >
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    className="w-full h-full"
                  >
                    <defs>
                      <clipPath id="custom-clip" clipPathUnits="objectBoundingBox">
                        <polygon points="0 1, 1 1, 1 .48, .5 0, 0 .48" />
                      </clipPath>
                    </defs>
                    <rect
                      width="100%"
                      height="100%"
                      fill="#9f1239"
                      clipPath="url(#custom-clip)"
                    />
                  </svg>
                </div>

                <div className="text-center">
                  <h2 className="text-xl font-bold text-rose-800 tracking-wide drop-shadow-lg">
                    {second.title}
                  </h2>
                  <p className="text-slate-800 text-sm mt-1 font-semibold">
                    {second.descripts}
                  </p>
                </div>

                <div className="absolute bottom-4 left-0 w-full flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300 z-10">
                  {second.iconImages.map((icon, i) => (
                    <div
                      key={i}
                      className="p-2 bg-white rounded-full shadow-md hover:scale-110 transition border border-rose-300"
                    >
                      <Image
                        src={icon}
                        alt="icon"
                        width={22}
                        height={22}
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-rose-800"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
