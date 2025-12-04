"use client"
import Container from "@/components/container";
import "../globals.css";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  const blogs = [
    {
      image: "/blog.jpg",
      slug: "engineer-future-strength",
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
      slug: "architect-designs-shape",
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
      slug: "constructor-team-reality",
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
  
  console.log(blogs);
  
  return (
    <>
      {/* First Section */}
      <section 
        className="relative bg-[url('/bg.jpg')] bg-cover bg-center h-[400px] flex items-center justify-center"
        suppressHydrationWarning
      >
        <div className="absolute inset-0 top-section-main" suppressHydrationWarning></div>
        <div className="relative text-center text-white px-6 animate-fade-up" suppressHydrationWarning>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-wider drop-shadow-2xl">
            Our Blog
          </h1>
          <hr className="border-t-4 border-rose-500 w-24 mx-auto mb-5 shadow-lg" />
          <div className="flex justify-center gap-2 text-lg font-semibold" suppressHydrationWarning>
            <span className="hover:text-rose-300 cursor-pointer transition-all">
              Home
            </span>
            <span>/</span>
            <span className="text-rose-300">Blog</span>
          </div>
        </div>
      </section>

      <Container>
        {/* main div */}
        <div 
          className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-2 w-full"
          suppressHydrationWarning
        >
          {/* First Card */}
          <div 
            className="relative md:w-full h-[400px] rounded-2xl overflow-hidden border-rose-800 border-4"
            suppressHydrationWarning
          >
            <Image
              src="/blog_1.jpg"
              alt="Contact Image"
              width={800}
              height={400}
              className="object-cover w-full h-full transform transition-transform duration-1000 hover:scale-125"
            />

            <div 
              className="absolute bottom-0 left-0 right-0 bg-opacity-30 text-white p-4 rounded-b-2xl"
              suppressHydrationWarning
            >
              <div className="flex flex-col gap-1" suppressHydrationWarning>
                <h1 className="text-lg font-semibold">The Construction</h1>
                <p className="text-sm">
                  The all work is good and all the value is habbat good heavy
                  life
                </p>
              </div>

              <div 
                className="flex items-center justify-start gap-3 mt-4"
                suppressHydrationWarning
              >
                <Image
                  src="/testimonial-3.jpg"
                  alt="Icon Image"
                  width={50}
                  height={50}
                  className="rounded-full object-cover ring-2 ring-rose-800 shadow-md"
                />
                <h2 className="bg-white text-black font-bold text-[12px] px-2 py-1 rounded-2xl">
                  Musharof Chy
                </h2>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div 
            className="relative md:w-full h-[400px] rounded-2xl overflow-hidden border-rose-800 border-4"
            suppressHydrationWarning
          >
            <Image
              src="/blog_2.jpg"
              alt="Contact Image"
              width={800}
              height={400}
              className="object-cover w-full h-full transform transition-transform duration-1000 hover:scale-125"
            />

            <div 
              className="absolute bottom-0 left-0 right-0 bg-opacity-30 text-white p-4 rounded-b-2xl"
              suppressHydrationWarning
            >
              <div className="flex flex-col gap-1" suppressHydrationWarning>
                <h1 className="text-lg font-semibold">The Construction</h1>
                <p className="text-sm">
                  The all work is good and all the value is habbat good heavy
                  life
                </p>
              </div>

              <div 
                className="flex items-center justify-start gap-3 mt-4"
                suppressHydrationWarning
              >
                <Image
                  src='/testimonial-2.jpg'
                  alt="Author"
                  width={45}
                  height={45}
                  className="rounded-full object-cover ring-2 ring-rose-800 shadow-md"
                />
                <h2 className="bg-white text-black font-bold text-[12px] px-2 py-1 rounded-2xl">
                  Musharof Chy
                </h2>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Second Section */}
      <Container>
        <section className="cursor-pointer">
          <div className="max-w-7xl mx-auto px-4" suppressHydrationWarning>
            <h2 className="text-3xl font-extrabold text-rose-800 mb-12 text-center tracking-wide">
              Latest Blog & Updates
            </h2>

            <div 
              className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-10"
              suppressHydrationWarning
            >
              {blogs.map((blog, index) => (
                <div
                  key={index}
                  className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl border border-slate-200 transition-all duration-500 hover:-translate-y-2 blog-page-main"
                  suppressHydrationWarning
                >
                  {index === 2 && (
                    <div suppressHydrationWarning>
                      <div 
                        className="absolute top-0 left-0 w-0 h-0 border-t-[75px] border-r-[75px] border-t-rose-800 border-r-transparent z-20"
                        suppressHydrationWarning
                      ></div>

                      <span className="absolute top-3 left-1 z-30 text-white font-bold text-xs tracking-wider">
                        NEW
                      </span>
                    </div>
                  )}

                  <div 
                    className="w-full h-56 relative overflow-hidden group"
                    suppressHydrationWarning
                  >
                    <Image
                      src={blog.image}
                      alt="Blog Image"
                      fill
                      className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-[0.80] relative"
                    />

                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"
                      suppressHydrationWarning
                    ></div>
                  </div>

                  <div className="p-6" suppressHydrationWarning>
                    <span className="uppercase text-white text-[14px] font-semibold tracking-wide bg-rose-800 absolute top-0 right-4 p-1 rounded-b-xl">
                      {blog.title}
                    </span>
                    <div 
                      className="flex flex-col absolute bottom-53 left-0"
                      suppressHydrationWarning
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 120 120"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polygon
                          points="60,5 110,60 60,115 10,60"
                          fill="#f43f5e"
                        />

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
                  <div 
                    className="flex items-center justify-between p-4"
                    suppressHydrationWarning
                  >
                    <div 
                      className="flex items-center gap-3"
                      suppressHydrationWarning
                    >
                      <Image
                        src={blog.iconImage}
                        alt="Author"
                        width={45}
                        height={45}
                        className="rounded-full object-cover ring-2 ring-rose-300 shadow-md"
                      />

                      <div suppressHydrationWarning>
                        <span className="block font-semibold text-slate-800 text-sm">
                          {blog.iconTitle}
                        </span>

                        <span className="text-slate-500 text-xs">
                          {blog.iconHeading}
                        </span>
                      </div>
                    </div>
                    <div 
                      className="min-w-[1px] h-10 bg-slate-400"
                      suppressHydrationWarning
                    ></div>
                    <span className="text-slate-600 font-medium text-sm flex flex-col">
                      <Link href={`/blog/${blog.slug}`} className="flex items-center gap-1 hover:text-rose-600">
                        <div 
                          className="p-2 flex items-center justify-center bg-rose-800 text-white rounded-full"
                          suppressHydrationWarning
                        >
                          <i><GoArrowUpRight size={18} className="text-bold"/></i>
                        </div>
                      </Link>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}