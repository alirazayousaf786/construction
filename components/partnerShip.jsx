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

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full mt-10">
            <div className="flex items-center justify-center p-3">
              <Image
                src="/safety.webp"
                alt="image"
                width={300}
                height={300}
                className="rounded-2xl shadow-xl hover:scale-105 transition-all duration-500"
              />
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl text-white shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 text-center relative overflow-hidden">
              <div className="flex items-center justify-center mb-4">
                <Image
                  src="/partnership-1.png"
                  alt="image"
                  width={110}
                  height={110}
                  className="move-up-down opacity-90"
                />
              </div>

              <span className="text-xl font-bold block">
                Building Partnerships for Success
              </span>

              <p className="text-[15px] text-zinc-300 mt-2">
                We agree to work together with trust and commitment to
                successfully complete all construction projects.any challenges,
                changes, or requirements, ensuring the successful completion of
                all construction work.
              </p>
            </div>

            <div className="flex items-center justify-center p-3">
              <Image
                src="/safety-briefing.webp"
                alt="image"
                width={300}
                height={300}
                className="rounded-2xl shadow-xl hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10">
            <SimpleCard
              img="/constructionImage_04.png"
              title="Certified & Awards"
              subtitle="Winner*"
              desc="Recognized for excellence in construction and quality standards, our team is committed to delivering durable and reliable structures.
We focus on precision, safety, and modern techniques to ensure long-lasting results.
Our services are known for professionalism, timely execution, and customer satisfaction.
Every project is built with care, high-grade materials, and expert craftsmanship.
We believe in creating spaces that are truly worth building and stand the test of time."
              btn="Construction"
              className="h-73"
            />

            <SimpleCard
              img="/constructionImage_05.png"
              title="Best Quality"
              subtitle="Services*"
              desc="Known for our superior construction work and strong quality standards, we take pride in every project we complete.
Our team uses advanced methods and skilled workmanship to ensure reliable and lasting structures.
We deliver services that are efficient, trustworthy, and focused on client needs.
From planning to finishing, every step is handled with attention to detail and safety.
We aim to build spaces that add value, look outstanding, and remain durable for years."
              btn="Project"
            />

            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3 rounded-2xl">
              {["/p1.jpg", "/p2.jpg", "/p3.jpg", "/p4.jpg"].map((item, i) => (
                <div
                  key={i}
                  className="relative rounded-xl overflow-hidden group h-40 sm:h-48"
                >
                  <Image
                    src={item}
                    alt={item}
                    fill
                    className="object-cover group-hover:scale-110 transition-all duration-500 md:w-full "
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
    <div className="bg-slate-900 p-5 rounded-2xl shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 w-full mx-auto space-y-4 relative overflow-hidden">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src={img}
            alt="image"
            width={50}
            height={50}
            className="rounded-lg"
          />
          <div className="leading-tight">
            <span className="text-lg font-semibold text-white">{title}</span>
            <span className="text-sm text-zinc-400 block">{subtitle}</span>
          </div>
        </div>

        <Image
          src="/shape3.png"
          alt="shape"
          width={30}
          height={30}
          className="opacity-70"
        />
      </div>

      <p className="text-zinc-300 text-sm">{desc}</p>

      <button className="w-full group">
        <div className="flex justify-between items-center bg-rose-800 p-3 rounded-xl border border-rose-900 shadow-lg transition-all duration-300 group-hover:bg-rose-900 group-hover:scale-[1.02]">
          <span className="text-white font-bold">{btn}</span>

          <div className="bg-slate-900 p-2 rounded-lg text-white group-hover:bg-rose-700 transition-all duration-300 group-hover:translate-x-2">
            <FaArrowRightFromBracket size={18} />
          </div>
        </div>
      </button>
    </div>
  );
}
