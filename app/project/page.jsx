"use client";

import { useState } from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { MdOutlineConstruction } from "react-icons/md";
import "../globals.css";
export default function Project() {
  const Components = [
    { title: "ALL", compo: <All /> },
    { title: "OnGOing", compo: <OnGoing /> },
    { title: "Completed", compo: <Completed /> },
    { title: "UpComing", compo: <UpComing /> },
  ];

  const [change, setChange] = useState(null);

  return (
    <>
      {/* top section  */}
      <section className="relative bg-[url('/bg.jpg')] bg-cover bg-center h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 top-section-main"></div>
        <div className="relative text-center text-white px-6 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-wider drop-shadow-2xl">
            Our Projects
          </h1>
          <hr className="border-t-4 border-rose-500 w-24 mx-auto mb-5 shadow-lg" />
          <div className="flex justify-center gap-2 text-lg font-semibold">
            <span className="hover:text-rose-300 cursor-pointer transition-all">
              Home
            </span>
            <span>/</span>
            <span className="text-rose-300">Projects</span>
          </div>
        </div>
      </section>

      {/* bottom section */}
      <section className="mt-10 text-center">
        <div className="flex items-center justify-center gap-2 mb-14">
          <h1 className="text-3xl text-center text-rose-800 font-extrabold tracking-widest uppercase">
            Visit Our Projects
          </h1>
          <Image
            src="/project-1.png"
            alt="service icon"
            width={50}
            height={50}
          />
        </div>
        <div className="flex justify-center gap-4 mb-2">
          {Components.map((component, index) => (
            <button
              key={index}
              onClick={() => setChange(index)}
              className={`px-3 py-2 font-semibold rounded-md transition-all duration-200
                  ${
                    change === index
                      ? "bg-rose-800 text-white"
                      : "bg-white text-black hover:bg-gray-200"
                  }`}
            >
              {component.title}
            </button>
          ))}
        </div>

        <div>{change !== null ? Components[change].compo : <All />}</div>
      </section>
    </>
  );
}

// Sub Components
//First Component
const All = () => {
  const Alls = [
    {
      image: "/project_1.jpg",
      title: "Metro Business Tower",
      paragraph:
        "A 20-story commercial building with modern office spaces, conference halls, and co-working zones for startups and enterprises.",
      address: "Pakistan",
      date: "12/2/2024",
      team: "150 person",
      progress: 70,
    },
    {
      image: "/project_2.jpg",
      title: "Skyline Offices",
      paragraph:
        "Premium office spaces with rooftop amenities, modern design, and central location.",
      address: "UAE",
      date: "05/5/2025",
      team: "200 person",
      progress: 5,
    },
    {
      image: "/project_3.jpg",
      title: "Skyline Offices",
      paragraph:
        "Premium office spaces with rooftop amenities, modern design, and central location.",
      address: "UAE",
      date: "05/5/2025",
      team: "200 person",
      progress: 50,
    },
    {
      image: "/project_4.jpg",
      title: "Metro Business Tower",
      paragraph:
        "A 20-story commercial building with modern office spaces, conference halls, and co-working zones for startups and enterprises.",
      address: "Pakistan",
      date: "12/2/2024",
      team: "150 person",
      progress: 70,
    },
    {
      image: "/project_5.jpg",
      title: "Skyline Offices",
      paragraph:
        "Premium office spaces with rooftop amenities, modern design, and central location.",
      address: "UAE",
      date: "05/5/2025",
      team: "200 person",
      progress: 5,
    },
    {
      image: "/projects_6.jpg",
      title: "Skyline Offices",
      paragraph:
        "Premium office spaces with rooftop amenities, modern design, and central location.",
      address: "UAE",
      date: "05/5/2025",
      team: "200 person",
      progress: 50,
    },
  ];

  const [hide, setHide] = useState(false);
  const showProject = () => {
    setHide(!hide);
  };
  const visibleProjects = hide ? Alls : Alls.slice(0, 3);

  return (
    <div className="p-8 min-h-screen">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {visibleProjects.map((item, index) => (
          <div
            key={index}
            className="relative backdrop-blur-lg hover:border-b-rose-800 hover:border-b-4 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-3xl "
          >
            <div className="relative w-full h-72 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 ease-in-out hover:scale-110"
              />
            </div>

            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">{item.title}</h2>
              <p className="text-gray-600 text-sm">{item.paragraph}</p>

              <div className="mt-4">
                <div className="flex flex-row gap-1">
                  <span className="text-sm text-gray-500 mt-1 block">
                    {item.progress}
                  </span>
                  <i>
                    <IoMdTrendingUp size={20} className="text-rose-800 mt-1" />
                  </i>
                </div>

                <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
                  <div
                    className="h-4 rounded-full progress-gradient"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>

                <div className="flex flex-row items-center justify-between text-gray-500 text-sm mt-2">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-rose-800" /> {item.address}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-rose-800" /> {item.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUsers className="text-rose-800" /> {item.team}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={showProject}
          className="px-6 py-2 bg-rose-800 text-white rounded-lg hover:bg-rose-900"
        >
          {hide ? "projects" : "More projects"}
        </button>
      </div>
    </div>
  );
};

// second Component
const OnGoing = () => {
  const goings = [
    {
      image: "/project_1.jpg",
      title: "Metro Business Tower",
      paragraph:
        "A 20-story commercial building with modern office spaces, conference halls, and co-working zones for startups and enterprises.",
      address: "Pakistan",
      date: "12/2/2024",
      team: "150 person",
      progress: 70,
    },
    {
      image: "/project_2.jpg",
      title: "Skyline Offices",
      paragraph:
        "Premium office spaces with rooftop amenities, modern design, and central location.",
      address: "UAE",
      date: "05/5/2025",
      team: "200 person",
      progress: 5,
    },
    {
      image: "/project_3.jpg",
      title: "Skyline Offices",
      paragraph:
        "Premium office spaces with rooftop amenities, modern design, and central location.",
      address: "UAE",
      date: "05/5/2025",
      team: "200 person",
      progress: 50,
    },
  ];
  return (
    <div className="p-8 min-h-screen">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {goings.map((item, index) => (
          <div
            key={index}
            className="relative backdrop-blur-lg hover:border-b-rose-800 hover:border-b-4 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-3xl "
          >
            <div className="relative w-full h-72 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 ease-in-out hover:scale-110"
              />
            </div>

            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">{item.title}</h2>
              <p className="text-gray-600 text-sm">{item.paragraph}</p>

              <div className="mt-4">
                <div className="flex flex-row gap-1">
                  <span className="text-sm text-gray-500 mt-1 block">
                    {item.progress}
                  </span>
                  <i>
                    <IoMdTrendingUp size={20} className="text-rose-800 mt-1" />
                  </i>
                </div>

                <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
                  <div
                    className="h-4 rounded-full progress-gradient"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>

                <div className="flex flex-row items-center justify-between text-gray-500 text-sm mt-2">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-rose-800" /> {item.address}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-rose-800" /> {item.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUsers className="text-rose-800" /> {item.team}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
// thried Component
const Completed = () => {
  return (
    <>
    <section className="bg-gray-100 max-w-[1300px] h-72 flex items-center justify-center mx-auto rounded-xl m-1">
  <div className="flex flex-col items-center gap-2 text-gray-600">
    <p>No completed projects available.</p>

    <div className=" p-3 flex items-center justify-center text-gray-600">
      <MdOutlineConstruction size={32} />
    </div>
  </div>
</section>

    </>
  );
};
// Fourth Component
const UpComing = () => {
  const upComing = [
    {
      image: "/project_3.jpg",
      title: "Skyline Offices",
      paragraph:
        "Premium office spaces with rooftop amenities, modern design, and central location.",
      address: "UAE",
      date: "05/5/2025",
      team: "200 person",
      progress: 50,
    },
  ];
  return (
    <div className="p-8 min-h-screen">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {upComing.map((item, index) => (
          <div
            key={index}
            className="relative backdrop-blur-lg hover:border-b-rose-800 hover:border-b-4 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-3xl "
          >
            <div className="relative w-full h-72 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 ease-in-out hover:scale-110"
              />
            </div>

            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">{item.title}</h2>
              <p className="text-gray-600 text-sm">{item.paragraph}</p>

              <div className="mt-4">
                <div className="flex flex-row gap-1">
                  <span className="text-sm text-gray-500 mt-1 block">
                    {item.progress}
                  </span>
                  <i>
                    <IoMdTrendingUp size={20} className="text-rose-800 mt-1" />
                  </i>
                </div>

                <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
                  <div
                    className="h-4 rounded-full progress-gradient"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>

                <div className="flex flex-row items-center justify-between text-gray-500 text-sm mt-2">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-rose-800" /> {item.address}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-rose-800" /> {item.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUsers className="text-rose-800" /> {item.team}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
