"use client"
import Container from "@/components/container";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { GiModernCity } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import "../globals.css";

const data = [
  {
    icon: <GiModernCity size={24} className="text-rose-800" />,
    title: "Modern Technology",
    desc: "We integrate the latest construction technologies to ensure faster timelines",
  },
  {
    icon: <RiTeamFill size={24} className="text-rose-800" />,
    title: "Experience Engineers",
    desc: "Our team of seasoned engineers brings decades of hands-on experience",
  },
  {
    icon: <IoCheckmarkDoneSharp size={24} className="text-rose-800" />,
    title: "98% Success Rate",
    desc: "Project Success rate",
  },
  {
    icon: <FaStar size={24} className="text-rose-800" />,
    title: "25 Million+",
    desc: "Client Satisfaction",
  },
];

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative bg-[url('/bg.jpg')] bg-cover bg-center h-[350px] md:h-[450px] flex items-center justify-center"
        suppressHydrationWarning
      >
        <div className="absolute inset-0 top-section-main" suppressHydrationWarning></div>
        <div className="relative text-center text-white px-4 animate-fade-up" suppressHydrationWarning>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-wider drop-shadow-2xl">
            About Us
          </h1>
          <hr className="border-t-4 border-rose-500 w-24 md:w-32 mx-auto mb-5 shadow-lg" />
          <div className="flex justify-center gap-2 text-lg md:text-xl font-semibold" suppressHydrationWarning>
            <span className="hover:text-rose-300 cursor-pointer transition-all">
              Home
            </span>
            <span>/</span>
            <span className="text-rose-300">About</span>
          </div>
        </div>
      </section>

      <Container>
        <section className="space-y-16 py-10">
          
          {/* Company Introduction Section */}
          <div 
            className="w-full bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl md:rounded-tl-[100px] md:rounded-br-[100px] flex flex-col md:flex-row items-center justify-center relative py-12 md:py-20 px-6 overflow-hidden shadow-xl"
            suppressHydrationWarning
          >
            <div className="max-w-[800px] mx-auto text-black flex flex-col gap-4 z-10 text-center md:text-left ">
              <h1 className="text-4xl md:text-5xl font-extrabold text-rose-800 tracking-tight">
                AY Construction
              </h1>
              <div className="w-[600px] mx-auto md:mx-0">
                <p className="text-slate-700 text-base md:text-lg leading-relaxed">
                Building tomorrows landmarks with todays innovation. We combine cutting-edge technology 
                with decades of expertise to transform visions into reality. Our commitment to excellence 
                ensures every project exceeds expectations.
              </p>
              </div>
            </div>

           
            <div className="hidden md:block">
              <Image
                src="/blog_1.jpg"
                alt="Construction Site"
                width={220}
                height={220}
                className="object-cover rounded-2xl shadow-2xl absolute bottom-5 left-8 lg:left-10  hover:scale-105 transition-transform duration-300"
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
            
            <div className="hidden md:block">
              <Image
                src="/formimage.jpg"
                alt="Building Design"
                width={220}
                height={220}
                className="object-cover rounded-2xl shadow-2xl absolute top-5 right-8 lg:right-14  hover:scale-105 transition-transform duration-300"
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
          </div>

          
          <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-10 md:gap-16">
            
          
            <div className="flex items-center justify-center" suppressHydrationWarning>
              <div className="flex flex-col gap-5 w-full px-4 md:px-0">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-r from-slate-50 to-white max-w-[580px] w-full min-h-[100px] flex items-center gap-4 p-5 rounded-2xl hover:shadow-2xl transition-all duration-300 border-l-4 border-rose-800 hover:border-rose-600 hover:-translate-y-1"
                    suppressHydrationWarning
                  >
                    <div className="flex items-center gap-5 w-full">
                      <div className="bg-rose-50 rounded-full p-3 flex items-center justify-center shadow-md group-hover:bg-rose-100 transition-colors">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl font-bold text-slate-800 leading-tight mb-1">
                          {item.title}
                        </h2>
                        <p className="text-sm text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

           
            <div className="relative flex items-center justify-center py-10 px-4" suppressHydrationWarning>
              <div className="relative w-full max-w-[500px]">
             
                <div className="relative w-full aspect-square">
                  <Image
                    src="/p1.jpg"
                    alt="Main Project"
                    fill
                    className="object-cover rounded-3xl shadow-2xl"
                   
                  />
                </div>

                {/* top left image */}
                <div className="absolute -top-4 -left-4 md:-top-8 md:-left-8 w-32 h-32 md:w-44 md:h-44">
                  <Image
                    src="/p2.jpg"
                    alt="Detail 1"
                    fill
                    className="object-cover rounded-2xl shadow-2xl  hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* bottom right image */}
                <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-32 h-32 md:w-44 md:h-44">
                  <Image
                    src="/p4.jpg"
                    alt="Detail 2"
                    fill
                    className="object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 md:gap-12 items-center">
            
          
            <div className="relative p-4 flex justify-center lg:justify-start" suppressHydrationWarning>
              <div className="relative w-full max-w-[450px]">
               
                <div className="relative w-full h-64 md:h-80">
                  <Image
                    src="/service-3.jpg"
                    alt="Our Mission"
                    fill
                    className="object-cover rounded-3xl shadow-2xl"
                    style={{
                      clipPath: 'polygon(0% 15%, 85% 0%, 100% 85%, 15% 100%)',
                    }}
                  />
                </div>

               
                <div className="absolute top-12 md:top-20 right-0 md:-right-8 w-28 h-28 md:w-40 md:h-40 z-10">
                  <Image
                    src="/safety-briefing.webp"
                    alt="Safety Badge"
                    fill
                    className="object-cover rounded-2xl shadow-2xl  hover:animate-none transition-all"
                  />
                </div>
              </div>
            </div>

          
            <div className="p-4 md:p-8 flex flex-col gap-6" suppressHydrationWarning>
              <div>
                <h1 className="text-3xl md:text-5xl font-extrabold mb-5 text-rose-800 tracking-tight">
                  Our Mission
                </h1>
                <p className="text-sm md:text-lg text-slate-700 leading-relaxed">
                  Our mission is to provide exceptional construction services that
                  consistently exceed client expectations. We strive to deliver
                  innovative solutions tailored to the unique needs of each
                  project, ensuring high-quality workmanship and sustainable practices.
                </p>
              </div>

              <div className="flex flex-col gap-4 text-sm md:text-base">
                <div className="flex gap-3 items-center bg-green-50 p-3 rounded-xl hover:bg-green-100 transition-colors">
                  <IoCheckmarkDoneSharp className="text-green-700 text-xl flex-shrink-0" />
                  <span className="font-medium text-slate-800">Fostering Sustainable Growth</span>
                </div>
                <div className="flex gap-3 items-center bg-green-50 p-3 rounded-xl hover:bg-green-100 transition-colors">
                  <IoCheckmarkDoneSharp className="text-green-700 text-xl flex-shrink-0" />
                  <span className="font-medium text-slate-800">Innovating for a Sustainable Future</span>
                </div>
                <div className="flex gap-3 items-center bg-green-50 p-3 rounded-xl hover:bg-green-100 transition-colors">
                  <IoCheckmarkDoneSharp className="text-green-700 text-xl flex-shrink-0" />
                  <span className="font-medium text-slate-800">Customer-Centric Approach</span>
                </div>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="w-full h-72 md:h-[500px] relative rounded-3xl overflow-hidden shadow-2xl group" suppressHydrationWarning>
            <Image
              src="/vedio-img.jpg"
              alt="Video Preview"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />

           
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>

            
            <div className="absolute inset-0 flex items-center justify-center" suppressHydrationWarning>
              <div className="relative cursor-pointer">
              
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="absolute inline-flex h-20 w-20 md:h-28 md:w-28 animate-ping rounded-full bg-rose-600 opacity-75"></span>
                  <span className="relative inline-flex h-20 w-20 md:h-28 md:w-28 rounded-full bg-rose-700 opacity-0"></span>
                </span>

                
                <div className="relative text-white flex items-center justify-center z-10 hover:scale-110 transition-transform">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 md:p-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      className="w-12 h-12 md:w-16 md:h-16 drop-shadow-2xl"
                    >
                      <path d="M5.25 5.653v12.694a.75.75 0 001.125.65l10.5-6.347a.75.75 0 000-1.3L6.375 5.002a.75.75 0 00-1.125.65z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
      </Container>
    </>
  );
}