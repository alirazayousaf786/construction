import Container from "@/components/container";
import Image from "next/image";

export default function Gallery() {
  const gallerys = [
    {
      image: "/g1.jpg",
      title: "Rofing",
      description:
        "The image is showing the roofing work of a building under construction.",
    },
    {
      image: "/g2.jpg",
      title: "Building",
      description:
        "The image showcases a multi-story building under construction, with scaffolding and cranes visible.",
    },
    {
      image: "/g3.jpg",
      title: "Bridge",
      description:
        "The image captures the construction of a large bridge spanning a body of water.",
    },
     {
      image: "/g4.jpg",
      title: "Rofing",
      description:
        "The image is showing the roofing work of a building under construction.",
    },
    {
      image: "/g5.jpg",
      title: "Building",
      description:
        "The image showcases a multi-story building under construction, with scaffolding and cranes visible.",
    },
    {
      image: "/g6.jpg",
      title: "Bridge",
      description:
        "The image captures the construction of a large bridge spanning a body of water.",
    },
     {
      image: "/g7.jpg",
      title: "Rofing",
      description:
        "The image is showing the roofing work of a building under construction.",
    },
    {
      image: "/g8.jpg",
      title: "Building",
      description:
        "The image showcases a multi-story building under construction, with scaffolding and cranes visible.",
    },
  ];

  return (
    <>
      {/* top section */}
      <section className="relative bg-[url('/bg.jpg')] bg-cover bg-center h-[400px] flex items-center justify-center group">
        <div className="absolute inset-0 top-section-main"></div>

        <div className="relative text-center text-white px-6 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-wider drop-shadow-2xl">
            Our Gallery
          </h1>

          <hr className="border-t-4 border-rose-500 w-24 mx-auto mb-5 shadow-lg" />

          <div className="flex justify-center gap-2 text-lg font-semibold">
            <span className="hover:text-rose-300 cursor-pointer transition-all">
              Home
            </span>
            <span>/</span>
            <span className="text-rose-300">Gallery</span>
          </div>
        </div>
      </section>

      {/* second section */}
      <section>
        <Container>
            <div>
            <h2 className="text-4xl font-bold text-rose-800 text-center mt-16 mb-6">
              Our Gallery
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Explore our collection of images showcasing our projects,
              craftsmanship, and dedication to excellence in construction.
            </p>    
            </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
            {gallerys.map((gallery, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden relative group cursor-pointer"
              >
                <div className="w-full h-48 overflow-hidden">
                  <Image
                    src={gallery.image}
                    alt={gallery.title}
                    width={400}
                    height={300}
                    className="w-full h-50 object-cover transform transition-transform duration-1000 hover:scale-125"
                  />
                   <div className="absolute bottom-0 left-0 h-[3px] bg-rose-800 w-0 group-hover:w-full transition-all duration-700"></div>

                </div>

                <div className="absolute inset-0 bg-rose-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className=" absolute bottom-0 left-0 w-full p-6 text-center opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="text-xl font-bold mb-2 text-rose-800">
                    {gallery.title}
                  </h3>
                  <p className="text-gray-600">{gallery.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
