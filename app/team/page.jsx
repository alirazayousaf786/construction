import React from "react";
import Image from "next/image";

export default function Teams() {
  const seconds = [
    {
      image: "/team1.png",
      title: "Adam Phillips",
      descripts: "CEO & Founder",
      iconImages: ["/google-1.png", "/facebook-1.png", "/tiktok-1.png", "/instagram-1.png"],
    },
    {
      image: "/team2.png",
      title: "Liya",
      descripts: "Interior Designer",
      iconImages: ["/google-1.png", "/facebook-1.png", "/tiktok-1.png", "/instagram-1.png"],
    },
    {
      image: "/team3.png",
      title: "Dylan Adams",
      descripts: "Civil Engineer",
      iconImages: ["/google-1.png", "/facebook-1.png", "/tiktok-1.png", "/instagram-1.png"],
    },
    {
      image: "/team1.png",
      title: "John",
      descripts: "Best Employee",
      iconImages: ["/google-1.png", "/facebook-1.png", "/tiktok-1.png", "/instagram-1.png"],
    },
  ];

  return (
    <>
      {/* top section */}
      <section className="relative bg-[url('/bg.jpg')] bg-cover bg-center h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center text-white px-6 animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg tracking-wide">
            Our Team
          </h1>
          <hr className="border-t-4 border-white w-24 mx-auto mb-4" />

          <div className="flex justify-center gap-2 text-lg font-semibold drop-shadow-md">
            <span className="hover:text-gray-300 cursor-pointer transition">Home</span>
            <span>/</span>
            <span className="text-gray-300">Our Team</span>
          </div>
        </div>
      </section>

     {/* second section */}
     <section className="w-full py-16 ">
  <h1 className="text-4xl text-center text-rose-800 font-extrabold mb-12 tracking-wider animate-fade-up">
    Meet Our Engineers
  </h1>

  
  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 px-6 max-w-6xl mx-auto">
    {seconds.map((second, index) => (
      <div
        key={index}
        className="
          group relative rounded-xl overflow-hidden 
          shadow-lg bg-white border border-rose-300
          transition-all duration-500 
          hover:shadow-2xl hover:-translate-y-2
        "
      >
       
        <div className="overflow-hidden">
          <Image
            src={second.image}
            alt={second.title}
            width={200}
            height={150}
            className=" object-cover transition-transform duration-700 group-hover:scale-110 hover:shadow-3xl"
          />
        </div>

       
        <div className="p-4 relative bg-rose-50">
          <h2 className="text-lg font-bold text-rose-900">{second.title}</h2>
          <p className="text-rose-700 text-sm mt-1">{second.descripts}</p>

          
          <div
            className="
              flex gap-3 mt-4 
              opacity-0 group-hover:opacity-100 
              transition-all duration-700
            "
          >
            {second.iconImages.map((icon, index) => (
              <div
                key={index}
                className="
                  p-2 bg-white rounded-full shadow-md 
                  hover:scale-110 transition
                  border border-rose-300
                "
              >
                <Image
                  src={icon}
                  alt="icon"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-rose-800"></div>
        </div>
      </div>
    ))}
  </div>
</section>

    </>
  );
}
