import Image from "next/image";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import "./component.css";

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
  ];

  return (
    <section className="py-14 px-4 max-w-[1400px] mx-auto">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl shadow-xl border border-transparent p-7 overflow-hidden
            transition-all duration-500 cursor-pointer
            hover:-translate-y-3 hover:shadow-2xl hover:border-rose-700 
            group hover:scale-[1.03]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rose-100/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose-200/40 rounded-full blur-2xl group-hover:blur-xl transition-all duration-700"></div>

            <div className="flex items-start gap-5">
              <div className="relative">
                <div className="absolute inset-0 bg-rose-300/40 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={70}
                  height={70}
                  className="rounded-full border-2 border-rose-300 p-1 group-hover:scale-110 transition-all duration-700"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="text-xl font-extrabold text-gray-800 tracking-wide group-hover:text-rose-900 transition-all duration-500">
                  {card.title}
                </h3>
                <span className="text-sm text-gray-600 mt-1 group-hover:text-rose-700 transition">
                  {card.referenc}
                </span>
              </div>
            </div>

            <p className="text-gray-600 mt-4 text-sm leading-relaxed group-hover:text-gray-700 transition-all duration-500">
              {card.paragraph}
            </p>

            <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
              <svg
                viewBox="0 0 500 150"
                preserveAspectRatio="none"
                className="w-full h-14 fill-rose-200 group-hover:fill-rose-300 transition-all duration-500"
              >
                <path d="M0.00,49.98 C150.00,150.00 349.96,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
              </svg>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 my-10">
        <div className="p-8 rounded-2xl shadow-xl border border-slate-200 hover:shadow-2xl hover:border-rose-900 transition-all duration-500 group">
          <div className="flex items-center gap-4 mb-4">
            <svg width="26" height="26" viewBox="0 0 24 24">
              <path
                d="M4 12h16M4 6h10M4 18h7"
                stroke="#7f1d1d"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>

            <h3 className="text-2xl font-extrabold text-slate-900 tracking-wide">
              Ready to Start?
            </h3>
          </div>

          <span className="text-slate-600 text-base block mb-6">
            Let’s bring your vision to life.
          </span>

          <button className="w-full group">
            <div
              className="flex items-center justify-between bg-rose-800 p-4 rounded-xl border border-rose-900 shadow-lg
              transition-all duration-500 group-hover:bg-rose-900 group-hover:shadow-2xl group-hover:scale-[1.02]"
            >
              <span className="font-bold text-white text-lg">
                Emergency Service
              </span>
              <div
                className="bg-slate-900 p-2 rounded-lg text-white transition-all duration-500 
                group-hover:bg-rose-700 group-hover:translate-x-2"
              >
                <FaArrowRightFromBracket size={20} />
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
