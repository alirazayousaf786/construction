import Image from "next/image";
import { FaArrowRightFromBracket,  } from "react-icons/fa6";
export default function Card() {
  const cards = [
    {
      image: "/safety.webp",
      title: "Structural Rehabilitation",
      referenc: "Reinforcing aging foundations with safety compliance.",
      paragraph:
        "We specialize in strengthening commercial and residential structures by upgrading foundations and components using advanced reinforcement techniques.",
    },
    {
      image: "/safety.webp",
      title: "Interior Design & Finishing",
      referenc: "Crafting Interiors that Inspire",
      paragraph:
        "Our interior design and finishing services add elegance and functionality to your spaces. From flooring and ceilings to lighting and décor, we deliver a seamless blend of style and practicality tailored to client preferences.",
    },
    {
      image: "/safety.webp",
      title: "Infrastructure Development",
      referenc: "Building the Foundations of Progress.",
      paragraph:
        "We undertake large-scale infrastructure projects such as roads, bridges, drainage systems, and public utilities. Our experienced engineers ensure every project meets sustainability and durability standards.",
    },
    {
      image: "/safety.webp",
      title: "Infrastructure Development",
      referenc: "Building the Foundations of Progress.",
      paragraph:
        "We undertake large-scale infrastructure projects such as roads, bridges, drainage systems, and public utilities. Our experienced engineers ensure every project meets sustainability and durability standards.",
    },
    {
      image: "/safety.webp",
      title: "Infrastructure Development",
      referenc: "Building the Foundations of Progress.",
      paragraph:
        "We undertake large-scale infrastructure projects such as roads, bridges, drainage systems, and public utilities. Our experienced engineers ensure every project meets sustainability and durability standards.",
    },
    {
      image: "/safety.webp",
      title: "Infrastructure Development",
      referenc: "Building the Foundations of Progress.",
      paragraph:
        "We undertake large-scale infrastructure projects such as roads, bridges, drainage systems, and public utilities. Our experienced engineers ensure every project meets sustainability and durability standards.",
    },
  ];

  return (
    <section className="py-10 px-4 max-w-[1400px] mx-auto">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl shadow-lg hover:shadow-2xl 
transition-all duration-300 p-6 flex flex-col gap-4 overflow-hidden 
border border-transparent hover:border-rose-900 hover:bg-slate-50 cursor-pointer"
          >
            {/* circle svg right  */}
            <div className="absolute top-0 right-0 -mt-8 -mr-8">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                className="fill-rose-100"
              >
                <circle cx="50" cy="50" r="50" />
              </svg>
            </div>

            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-rose-200 p-1"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-gray-800">
                  {card.title}
                </h3>
                <span className="mt-1 text-sm text-gray-500">
                  {card.referenc}
                </span>
              </div>
            </div>

            {/* Paragraph */}
            <p className="text-gray-600 text-sm">{card.paragraph}</p>

            {/* icon add button svg */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
              <svg
                viewBox="0 0 500 150"
                preserveAspectRatio="none"
                className="w-full h-12 fill-rose-50"
              >
                <path d="M0.00,49.98 C150.00,150.00 349.96,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
              </svg>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 my-5 ">
        <div
          className=" p-6 rounded-2xl shadow-xl border border-slate-200 
                  hover:shadow-2xl hover:border-rose-900 transition-all duration-300 bg-gradient-to-b from-rose-50 via-slaty-100 to-pink-50"
        >
          <div className="flex items-center gap-3 mb-3 ">
            {/* svg */}
            <svg width="26" height="26" viewBox="0 0 24 24">
              <path
                d="M4 12h16M4 6h10M4 18h7"
                stroke="#7f1d1d"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>

            <h3 className="text-xl font-extrabold text-slate-900 tracking-wide">
              Ready to Start?
            </h3>
          </div>

          <span className="text-slate-600 text-base block mb-5">
            Let’s bring your vision to life.
          </span>

          {/* button */}
          <button className="w-full group">
            <div
              className="flex flex-row items-center justify-between bg-rose-800 
                      p-3 rounded-xl shadow-lg border border-rose-900
                      transition-all duration-300 group-hover:bg-rose-900 
                      group-hover:shadow-2xl group-hover:scale-[1.02]"
            >
              <span className="font-bold text-white text-lg">Emergency Service</span>

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
    </section>
  );
}
