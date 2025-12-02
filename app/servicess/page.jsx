"use client";
import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      image: "/corsel4.jpg",
      title: "Building Construction",
      icon: <GoArrowUpRight />,
      paragraph:
        "Building Construction** refers to the process of creating structures or buildings. It involves planning, designing, and selecting the right materials. Engineers, architects, and workers collaborate to complete the construction work. Safety and quality are carefully maintained to ensure the building is strong and durable. This process requires time, effort, and technical knowledge",
    },
    {
      image: "/service-1.jpg",
      title: "House Renovation",
      icon: <GoArrowUpRight />,
      paragraph:
        "**House Renovation** refers to the process of improving or updating an existing home. It may include repairing damaged areas, repainting walls, or upgrading rooms like the kitchen and bathroom. Renovation helps make the house more comfortable, modern, and attractive. Skilled workers and proper planning are important for good results. This process increases the value and lifespan of the home.",
    },
    {
      image: "/service-2.webp",
      title: "Architecture Design",
      icon: <GoArrowUpRight />,
      paragraph:
        "**Architecture Design** refers to the creative and technical process of planning and designing buildings or structures. It involves developing the layout, shape, and appearance of a space while ensuring functionality and safety. Architects use creativity, engineering knowledge, and modern tools to create efficient and beautiful designs. Good architectural design enhances the comfort and experience of the people who use the space. It also adds aesthetic and cultural value to the environment.",
    },
    {
      image: "/service-3.jpg",
      title: "Interior Design",
      icon: <GoArrowUpRight />,
      paragraph:
        "**Interior Design** refers to the art and science of enhancing the inside of a building to make it more functional, comfortable, and visually appealing. It involves selecting colors, furniture, lighting, and décor that match the style and purpose of the space. Interior designers plan layouts that improve movement and usability. Their work helps create beautiful and practical environments for homes, offices, and other places. Good interior design can transform any space into a more pleasant and efficient area.",
    },
    {
      image: "/service-4.jpg",
      title: "Fixing & Support",
      icon: <GoArrowUpRight />,
      paragraph:
        "**Fixing & Support** refers to the process of repairing, adjusting, and maintaining different parts of a home or building to ensure everything works properly. It includes fixing electrical issues, plumbing problems, broken furniture, or damaged structures. Support services also help in regular maintenance to prevent future problems. Skilled technicians use the right tools and methods to provide reliable solutions. Good fixing and support keep the building safe, functional, and in good condition for a long time.",
    },
    {
      image: "/service-5.jpg",
      title: "Painting",
      icon: <GoArrowUpRight />,
      paragraph:
        "**Painting** refers to the process of applying color or protective coating to walls, ceilings, or other surfaces. It helps improve the appearance of a space and protects the surfaces from dust, moisture, and damage. Painters use brushes, rollers, or sprays to achieve a smooth and clean finish. Choosing the right colors and quality paint can completely transform the look of a room or building. Good painting work makes the environment more attractive, fresh, and long-lasting.",
    },
  ];

  const [open, setOpen] = useState(false);
  const [service, setService] = useState(null);

  const handleOpen = (servic) => {
    setService(servic);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      {/* top section */}
      <section className="relative bg-[url('/bg.jpg')] bg-cover bg-center h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/50"></div>

        <div className="relative text-center text-white px-6 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-wider drop-shadow-2xl">
            We Provide Services
          </h1>

          <hr className="border-t-4 border-rose-500 w-24 mx-auto mb-5 shadow-lg" />

          <div className="flex justify-center gap-2 text-lg font-semibold">
            <span className="hover:text-rose-300 cursor-pointer transition-all">
              Home
            </span>
            <span>/</span>
            <span className="text-rose-300">Services</span>
          </div>
        </div>
      </section>

      {/* bottom section */}
      <section className="w-full py-20 bg-gradient-to-b from-white to-gray-100">
        <div className="flex items-center justify-center gap-2 mb-14">
          <h1 className="text-3xl text-center text-rose-700 font-extrabold tracking-widest uppercase">
            We Provide Services
          </h1>
          <Image src="/service.png" alt="service icon" width={50} height={50} />
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 px-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                group bg-white/10 
                rounded-xl p-6 shadow-xl border border-white/20 
                backdrop-blur-xl 
                transition-all duration-500 cursor-pointer
                hover:shadow-2xl hover:-translate-y-3 hover:border-rose-600/60
                hover:bg-white/20
                relative overflow-hidden
              "
            >
              <div
                className="
                absolute inset-0 rounded-xl opacity-0 
                bg-gradient-to-br from-rose-500/30 to-purple-600/30 
                transition-all duration-500 group-hover:opacity-100
              "
              ></div>

              <div className="relative z-10">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="rounded-lg w-full h-[250px] object-cover shadow-lg transform group-hover:scale-105 transition-all duration-500"
                />

                <div className="mt-6 flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-800 group-hover:text-rose-700 transition-all">
                    {service.title}
                  </h2>

                 
                  <span
                    onClick={() => handleOpen(service)}
                    className="
                      text-2xl text-rose-700 bg-rose-100 
                      p-2 rounded-full shadow-md 
                      group-hover:bg-rose-700 group-hover:text-white 
                      transition-all duration-500
                    "
                  >
                    {service.icon}
                  </span>
                </div>

                <div
                  className="
                  mt-2 w-0 h-[3px] bg-rose-700 
                  group-hover:w-full transition-all duration-500
                "
                ></div>
              </div>
            </div>
          ))}
        </div>

       {/* pop up section */}
        {open && service && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[999] animate-fadeIn">
            <div
              className="
              bg-white/20 backdrop-blur-2xl p-7 rounded-2xl shadow-2xl 
              border border-white/30 max-w-lg w-[90%] relative 
              animate-scaleUp
            "
            >
              
              <button
                onClick={handleClose}
                className="absolute -top-3 -right-3 bg-white p-2 rounded-full shadow-md hover:bg-rose-600 hover:text-white transition"
              >
                <IoClose size={22} />
              </button>

             
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="rounded-xl w-full h-[250px] object-cover mb-5"
              />

              <h2 className="text-2xl font-bold text-rose-700 mb-3 tracking-wide">
                {service.title}
              </h2>

              <p className="text-gray-900 text-sm leading-relaxed">
                {service.paragraph}
              </p>

             
              <div className="mt-6 text-right">
                <button
                  className="
                  px-6 py-2 bg-rose-600 text-white rounded-lg shadow-md 
                  hover:bg-rose-700 transition-all
                "
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
