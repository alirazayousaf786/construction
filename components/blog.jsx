"use client";
import Image from "next/image";
import "../components/component.css"
export default function Blog() {
  const blogs = [
    {
      image: "/blog.jpg",
      title: "Engineer",
      heading: "Building the Future with Strength",
      paragraph:
        "Strong foundations lead to lasting structures. Precision and planning are the pillars of great construction.",
      iconImage: "/testimonial-1.jpg",
      iconTitle: "By Musharof Chy",
      iconHeading: "Civil Engineer",
      date: "2024",
    },
    {
      image: "/blog_1.jpg",
      title: "Architect",
      heading: "Designs that Shape Skylines",
      paragraph:
        "Every masterpiece begins with a vision. Architecture blends creativity with practicality to craft iconic spaces.",
      iconImage: "/testimonial-2.jpg",
      iconTitle: "Sara",
      iconHeading: "Architect",
      date: "2025",
    },
    {
      image: "/blog_2.jpg",
      title: "Constructor Team",
      heading: "Turning Plans into Reality",
      paragraph:
        "From blueprints to buildings, construction teams bring ideas to life with skill and dedication Work Time.",
      iconImage: "/testimonial-3.jpg",
      iconTitle: "John",
      iconHeading: "Site Manager",
      date: "2026",
    },
  ];

  return (
    <section className="py-16 cursor-pointer">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-rose-800 mb-12 text-center tracking-wide">
          Latest Blog & Updates
        </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-10">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl border border-slate-200 transition-all duration-500 hover:-translate-y-2 blog-page-main"
            >
              {index === 2 && (
                <div>
                  <div className="absolute top-0 left-0 w-0 h-0 border-t-[75px] border-r-[75px] border-t-rose-800 border-r-transparent z-20"></div>

                  <span className="absolute top-3 left-1 z-30 text-white font-bold text-xs tracking-wider">
                    NEW
                  </span>
                </div>
              )}

              <div className="w-full h-56 relative overflow-hidden group">
                <Image
                  src={blog.image}
                  alt="Blog Image"
                  fill
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-[0.80] relative"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              </div>

              <div className="p-6">
                <span className="uppercase text-white text-[14px] font-semibold tracking-wide bg-rose-800 absolute top-0 right-4 p-1 rounded-b-xl ">
                  {blog.title}
                </span>
                <div className="flex flex-col  ">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 120 120"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute bottom-53 left-0 blog-svg md:bottom-41 "
                  >
                    <polygon points="60,5 110,60 60,115 10,60" fill="#f43f5e" />

                    <polygon
                      points="60,5 110,60 60,60"
                      fill="#fb7185"
                      opacity="0.7"
                    />

                    <polygon
                      points="60,5 60,60 10,60"
                      fill="#fecdd3"
                      opacity="0.8"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mt-3 mb-3 leading-snug hover:text-rose-600 transition-all cursor-pointer relative">
                  {blog.heading}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {blog.paragraph}
                </p>
              </div>

              <hr className="text-slate-400" />

              {/* second last div */}
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={blog.iconImage}
                    alt="Author"
                    width={45}
                    height={45}
                    className="rounded-full object-cover ring-2 ring-rose-300 shadow-md"
                  />

                  <div>
                    <span className="block font-semibold text-slate-800 text-sm">
                      {blog.iconTitle}
                    </span>

                    <span className="text-slate-500 text-xs">
                      {blog.iconHeading}
                    </span>
                  </div>
                </div>
                 <div className="min-w-[1px] h-10 bg-slate-400">

                 </div>
                <span className="text-slate-600 font-medium text-sm flex flex-col">
                  <span>Year</span>
                  {blog.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
     
    </section>
  );
}
