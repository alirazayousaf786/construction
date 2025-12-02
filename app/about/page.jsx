import Container from "@/components/container";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { GiModernCity } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import "../globals.css";

const data = [
  {
    icon: <GiModernCity size={20} className="text-rose-800" />,
    title: "Modern Technology",
    desc: "We integrate the latest construction technologies to ensure faster timelines",
  },
  {
    icon: <RiTeamFill size={20} className="text-rose-800" />,
    title: "Experience Engineers",
    desc: "Our team of seasoned engineers brings decades of hands-on experience",
  },
  {
    icon: <IoCheckmarkDoneSharp size={20} className="text-rose-800" />,
    title: "98%",
    desc: "Project Success rate",
  },
  {
    icon: <FaStar size={20} className="text-rose-800" />,
    title: "25 Million",
    desc: "Client Satisfaction",
  },
];

export default function About() {
  return (
    <>
      <section className="relative bg-[url('/bg.jpg')] bg-cover bg-center h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 top-section-main"></div>
        <div className="relative text-center text-white px-6 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-wider drop-shadow-2xl">
            Abouts Us
          </h1>
          <hr className="border-t-4 border-rose-500 w-24 mx-auto mb-5 shadow-lg" />
          <div className="flex justify-center gap-2 text-lg font-semibold">
            <span className="hover:text-rose-300 cursor-pointer transition-all">
              Home
            </span>
            <span>/</span>
            <span className="text-rose-300">About</span>
          </div>
        </div>
      </section>

      <Container>
        <section>
          <div className="w-full h-73 bg-slate-100 rounded-tl-full rounded-br-full flex items-center justify-center relative">
            <div className="max-w-[800px] mx-auto text-black flex flex-col gap-2">
              <h1 className="text-4xl font-bold text-rose-800 text-center">AY Construction</h1>
              <p className="text-slate-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis itaque, nam quidem ipsam, a dignissimos voluptas amet
                nesciunt sequi cumque excepturi neque odio possimus. Reiciendis
                beatae eligendi minima nemo fuga.
              </p>
            </div>
            <Image
              src="/blog_1.jpg"
              alt="about image"
              width={250}
              height={250}
              className="object-cover about-image absolute bottom-3 left-6"
            />
            <Image
              src="/formimage.jpg"
              alt="about image"
              width={250}
              height={250}
              className="object-cover about-image absolute top-5 right-9"
            />
          </div>

          <div className="w-full h-[70vh] grid lg:grid-cols-2 grid-cols-1">
            <div className="md:w-2/2 flex items-center justify-center">
              <div className="flex flex-col md:flex-wrap gap-3">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="message-card bg-slate-100 max-w-[540px] w-full min-h-[92px] flex items-center gap-4 p-4 rounded-tl-xl rounded-bl-4xl rounded-tr-4xl second-left-first-div relative animate-card border-l-rose-800 border-l-2"
                  >
                    <div className="flex items-start gap-4 w-full">
                      <div className="bg-slate-100 rounded-full p-1 flex items-center justify-center absolute top-2 left-2 shadow-lg">
                        {item.icon}
                      </div>
                      <div className="pl-10">
                        <h2 className="text-lg font-semibold leading-tight">
                          {item.title}
                        </h2>
                        <p className="text-sm text-gray-700">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative  flex items-center justify-center py-10">
              <div className="relative">
                <Image
                  src="/p1.jpg"
                  alt="image"
                  width={500}
                  height={500}
                  className="object-cover about-second-first-img"
                />

                <Image
                  src="/p2.jpg"
                  alt="image"
                  width={200}
                  height={200}
                  className="absolute -top-5 -left-5 md:-top-10 md:-left-10 object-cover rounded-lg shadow-lg"
                />
                <Image
                  src="/p4.jpg"
                  alt="image"
                  width={200}
                  height={200}
                  className="absolute -bottom-5 -right-5 md:-bottom-10 md:-right-10 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
          {/* last section div */}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 ">
            {/* Left - Image Section */}
            <div className="relative  p-2 flex pl-3">
              {/* Main Image */}
              <div className=" w-93 h-72 alijutt relative ">
                <Image
                  src="/service-3.jpg"
                  alt="image"
                  fill
                  className="object-cover rounded-xl "
                />
              </div>
              {/* Overlay Image */}
              <div className=" w-35 h-35 absolute top-24 left-61  ">
                <Image
                  src="/safety-briefing.webp"
                  alt="image"
                  fill
                  className="object-cover rounded-xl "
                />
              </div>
            </div>

            {/* Right - Text Section */}
            <div className="p-6 flex flex-col  ">
              <h1 className="text-2xl md:text-4xl font-bold mb-4 text-rose-800">
                Our Mission
              </h1>
              <p className="text-base text-[13px] text-slate-600">
                Our mission is to provide exceptional construction services that
                consistently exceed client expectations. We strive to deliver
                innovative solutions tailored to the unique needs of each
                project, ensuring high-quality workmanship and attention to
                every detail. Safety, efficiency, and sustainable building
                practices are at the core of everything we do. We are committed
                to fostering lasting relationships with our clients through
                trust, reliability, and transparency. By combining expertise
                with dedication, we aim to set new standards of excellence in
                the construction industry.
              </p>
              <div className="flex flex-col gap-2 mt-3">
                <div className="flex flex-row gap-1">
                  <i>
                    <IoCheckmarkDoneSharp className="text-green-700" />
                  </i>
                  <span className="text-[13px] text-slate-600">
                    Fostering Sustainable Growth and Green Development
                  </span>
                </div>
                <div className="flex flex-row gap-1">
                  <i>
                    <IoCheckmarkDoneSharp className="text-green-700" />
                  </i>
                  <span className="text-[13px] text-slate-600">
                    Innovating for a Sustainable Future
                  </span>
                </div>
                <div className="flex flex-row gap-1">
                  <i>
                    <IoCheckmarkDoneSharp className="text-green-700" />
                  </i>
                  <span className="text-[13px] text-slate-600">
                    Customer-Centric Approach
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
