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
        <section>
          {/* Partnership main div */}
          <Counter />
          <div>
            {/* Partnership top div */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-1 w-full  ">
              <div className=" flex items-center justify-center-safe p-3">
                <Image
                  src="/safety.webp"
                  alt="image"
                  width={250}
                  height={250}
                  className="object-cover rounded-2xl transition-all duration-300 hover:translate-x-2 "
                />
              </div>
              <div className="bg-slate-900 mt-5 text-center p-2 rounded-xl m-2 text-white shadow-xl">
                <div className="flex items-center justify-center">
                  <Image
                    src="/partnership-1.png"
                    alt="image"
                    width={100}
                    height={100}
                    className="object-cover  move-up-down"
                  />
                </div>
                <span className="text-xl font-bold text-white">
                  Building Partnerships for Success
                </span>
                <p className="text-[16px] text-zinc-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  maxime fugit molestias quo eligendi voluptate nulla adipisci
                  totam, eos odio, consequatur, voluptatibus esse vero quae
                  tempora quasi qui cum ducimus!
                </p>
              </div>
              <div className=" flex items-center justify-center-safe p-3  ">
                <Image
                  src="/safety-briefing.webp"
                  alt="image"
                  width={250}
                  height={250}
                  className="object-cover rounded-2xl transition-all duration-300 hover:translate-x-2 "
                />
              </div>
            </div>

            {/* partnership bottom div */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
              <div className="">
                <div className="bg-slate-900 w-96 mx-auto p-4 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 space-y-4 partnership-firstSide">
                  {/* Top Section */}
                  <div className="flex justify-between items-center">
                    {/* Left */}
                    <div className="flex flex-row gap-3 items-center">
                      <Image
                        src="/constructionImage_04.png"
                        alt="image"
                        width={40}
                        height={40}
                        className="object-cover rounded-lg"
                      />

                      <div className="flex flex-col leading-tight">
                        <span className="text-xl font-semibold text-white">
                          Certified & Awards
                        </span>
                        <span className="text-sm text-zinc-400">Winner*</span>
                      </div>
                    </div>

                    {/* Right Icon */}
                    <Image
                      src="/shape3.png"
                      alt="shape"
                      width={25}
                      height={25}
                      className="object-contain opacity-70"
                    />
                  </div>

                  {/* Paragraph */}
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    Recognized for excellence in construction and quality
                    standards.
                  </p>

                  {/* Button */}
                  <button className="w-full group">
                    <div
                      className="flex flex-row items-center justify-between bg-rose-800 
                                     p-3 rounded-xl shadow-lg border border-rose-900
                                     transition-all duration-300 group-hover:bg-rose-900 
                                     group-hover:shadow-2xl group-hover:scale-[1.02]"
                    >
                      <span className="font-bold text-white text-lg">
                        Construction
                      </span>

                      <div
                        className="bg-slate-900 p-2 rounded-lg text-white shadow-md 
                                    transition-all duration-300 group-hover:bg-rose-700 
                                    group-hover:translate-x-2 group-hover:shadow-xl"
                      >
                        <FaArrowRightFromBracket size={18} />
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="">
                <div className="bg-slate-900 w-96 mx-auto p-4 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 space-y-4 partnership-firstSide">
                  {/* Top Section */}
                  <div className="flex justify-between items-center">
                    {/* Right */}
                    <div className="flex flex-row gap-3 items-center">
                      <Image
                        src="/constructionImage_05.png"
                        alt="image"
                        width={40}
                        height={40}
                        className="object-cover rounded-lg"
                      />

                      <div className="flex flex-col leading-tight">
                        <span className="text-xl font-semibold text-white">
                          Best Quality
                        </span>
                        <span className="text-sm text-zinc-400">Services*</span>
                      </div>
                    </div>

                    {/* Right Icon */}
                    <Image
                      src="/shape3.png"
                      alt="shape"
                      width={25}
                      height={25}
                      className="object-contain opacity-70"
                    />
                  </div>

                  {/* Paragraph */}
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    Committed to delivering superior quality in every project.
                  </p>

                  {/* Button */}
                  <button className="w-full group">
                    <div
                      className="flex flex-row items-center justify-between bg-rose-800 
                                      p-3 rounded-xl shadow-lg border border-rose-900
                                      transition-all duration-300 group-hover:bg-rose-900 
                                      group-hover:shadow-2xl group-hover:scale-[1.02]"
                    >
                      <span className="font-bold text-white text-lg">
                        Project
                      </span>

                      <div
                        className="bg-slate-900 p-2 rounded-lg text-white shadow-md 
                                     transition-all duration-300 group-hover:bg-rose-700 
                                     group-hover:translate-x-2 group-hover:shadow-xl"
                      >
                        <FaArrowRightFromBracket size={18} />
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* image section  */}
              <div className=" grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2">
                {["/p1.jpg", "/p2.jpg", "/p3.jpg", "/p4.jpg"].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center p-3 rounded-2xl overflow-hidden relative"
                  >
                    <Image
                      src={item}
                      alt={item}
                      fill
                      className="object-cover rounded-lg transition-all duration-300 hover:translate-x-2"
                    />
                  </div>
                ))}
              </div>
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
