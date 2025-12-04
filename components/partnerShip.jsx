"use client";
import Image from "next/image";
import Counter from "../components/counter";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import Fourth from "../components/fourhero";
import Container from "@/components/container";
import "./component.css";

export default function PartNerShip() {
  return (
    <>
      <Container>
        <section className="py-10">
          <Counter />

          {/* Top main 3-grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 w-full mt-10">

            {/* Left Image */}
            <div className="flex items-center justify-center p-3">
              <Image
                src="/safety.webp"
                alt="image"
                width={270}
                height={270}
                className="rounded-2xl shadow-xl hover:scale-105 transition-all duration-500"
              />
            </div>

            {/* Center box */}
            <div className="bg-slate-900 text-center p-6 rounded-2xl text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
              {/* Gradient Glow */}
              {/* <div className="absolute inset-0  opacity-0 hover:opacity-100 transition-all duration-500"></div> */}

              <div className="flex items-center justify-center relative z-10">
                <Image
                  src="/partnership-1.png"
                  alt="image"
                  width={110}
                  height={110}
                  className="move-up-down opacity-90"
                />
              </div>

              <span className="text-xl font-bold block relative z-10">
                Building Partnerships for Success
              </span>
              <p className="text-[15px] text-zinc-300 mt-2 relative z-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                maxime fugit molestias quo eligendi voluptate nulla adipisci.
              </p>
            </div>

            <div className="flex items-center justify-center p-3">
              <Image
                src="/safety-briefing.webp"
                alt="image"
                width={270}
                height={270}
                className="rounded-2xl shadow-xl hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>

          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-10">
            
            
            <SimpleCard
              img="/constructionImage_04.png"
              title="Certified & Awards"
              subtitle="Winner*"
              desc="Recognized for excellence in construction and quality standards."
              btn="Construction"
            />

          
            <SimpleCard
              img="/constructionImage_05.png"
              title="Best Quality"
              subtitle="Services*"
              desc="Committed to delivering superior quality in every project."
              btn="Project"
            />

         
            <div className="grid grid-cols-2 gap-3">
              {["/p1.jpg", "/p2.jpg", "/p3.jpg", "/p4.jpg"].map((item, i) => (
                <div key={i} className="relative rounded-xl overflow-hidden group">
                  <Image
                    src={item}
                    alt={item}
                    fill
                    className="object-cover group-hover:scale-110 transition-all duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Container>

      <div className="mt-1">
        <Fourth />
      </div>
    </>
  );
}

function SimpleCard({ img, title, subtitle, desc, btn }) {
  return (
    <div className="bg-slate-900 p-5 rounded-2xl shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 space-y-4 relative overflow-hidden w-96 mx-auto">
      
      
      {/* <div className="absolute inset-0  opacity-0 hover:opacity-100 transition-all duration-500"></div> */}

      {/* Top Section */}
      <div className="flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <Image src={img} alt="image" width={45} height={45} className="rounded-lg" />

          <div className="leading-tight">
            <span className="text-lg font-semibold text-white">{title}</span>
            <span className="text-sm text-zinc-400 block">{subtitle}</span>
          </div>
        </div>

        <Image
          src="/shape3.png"
          alt="shape"
          width={25}
          height={25}
          className="opacity-70"
        />
      </div>

    
      <p className="text-zinc-300 text-sm relative z-10">{desc}</p>

    
      <button className="w-full group relative z-10">
        <div
          className="flex justify-between items-center bg-rose-800 
          p-3 rounded-xl border border-rose-900 shadow-lg transition-all duration-300 
          group-hover:bg-rose-900 group-hover:scale-[1.02]"
        >
          <span className="text-white font-bold">{btn}</span>

          <div className="bg-slate-900 p-2 rounded-lg text-white group-hover:bg-rose-700 transition-all duration-300 group-hover:translate-x-2">
            <FaArrowRightFromBracket size={18} />
          </div>
        </div>
      </button>
    </div>
  );
}
