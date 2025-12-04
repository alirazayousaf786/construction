"use client"
import { FaFilter, FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Button from "../../components/button";
import { useState } from "react";
export default function CareerPage() {
  const careers = [
    {
      title: "Project Manager",
      image: "/service-1.jpg",
      address: "New York, NY",
      salary: "$85,000 - $110,000",
      description:
        "We are seeking an experienced Project Manager to oversee construction projects from inception to completion.",
    },
    {
      title: "Site Supervisor",
      image: "/service-4.jpg",
      address: "Los Angeles, CA",
      salary: "$60,000 - $80,000",
      description:
        "Looking for a Site Supervisor to manage daily operations on construction sites.",
    },
    {
      title: "Civil Engineer",
      image: "/service-3.jpg",
      address: "Chicago, IL",
      salary: "$75,000 - $100,000",
      description:
        "Seeking a Civil Engineer to design and oversee construction projects.",
    },
  ];
   const[search,setSearch]=useState("");
 const SearchData = careers.filter((item) =>
  item.title.toLowerCase().includes(search.toLowerCase())
);


  return (  
    <>
      {/* First Section  */}
      <section className="relative bg-[url('/bg.jpg')] bg-cover bg-center h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 top-section-main"></div>

        <div className="relative text-center text-white px-6 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-wider drop-shadow-2xl">
            Our Career
          </h1>

          <hr className="border-t-4 border-rose-500 w-24 mx-auto mb-5 shadow-lg" />

          <div className="flex justify-center gap-2 text-lg font-semibold">
            <span className="hover:text-rose-300 cursor-pointer transition-all">
              Home
            </span>
            <span>/</span>
            <span className="text-rose-300">Career</span>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section>
        <div>
          <h2 className="text-3xl font-extrabold text-rose-800 text-center mt-12 mb-6">
            Join Our Team and Build a Rewarding Career in Construction
          </h2>

          <p className="max-w-3xl mx-auto text-center text-gray-700 mb-12 px-4">
            At AY Construction, we believe that our success is built on the
            talent and dedication of our team members. Explore our current job
            openings and take the first step towards a fulfilling career with
            us.
          </p>
        </div>

       
        <div className="max-w-4xl mx-auto px-4 mb-16 relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for job titles, keywords, or locations..."
            className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-800"
          />
          <i className="text-rose-800 absolute bottom-3 right-5">
            <FaFilter size={22} />
          </i>
        </div>

        
      {  SearchData.length === 0 ? (
        <p className="text-center text-gray-500">No job openings found.</p>
      ) : (
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {careers.map((job, index) => (
            <div
              key={index}
              className="border border-gray-300 bg-white rounded-lg p-6 shadow hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={job.image}
                alt={job.title}
                width={400}
                height={250}
                className=" object-cover rounded-md mb-4"
              />

              <h3 className="text-xl font-bold mb-2 text-rose-800">
                {job.title}
              </h3>

             
              <p className="text-gray-700 flex items-center gap-2 mb-3">
                <FaMapMarkerAlt className="text-rose-700" />
                {job.address}
              </p>

              
              <p className="text-gray-700 flex items-center gap-2 mb-4">
                <FaDollarSign className="text-green-700" />
                {job.salary}
              </p>

              <p className="text-gray-600 mb-4">{job.description}</p>

              <Link href="/careerform" className="w-full">
                {/* <span className="block bg-rose-800 text-white w-full py-2 rounded text-center hover:bg-rose-700 transition-colors cursor-pointer">
                  Apply Now
                </span> */}
                <Button label="Apply Now" />
              </Link>
            </div>
          ))}
        </div>)}
      </section>
    </>
  );
}
