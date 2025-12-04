import Image from "next/image";

const blogs = [
  {
    slug: "engineer-future-strength",
    image: "/blog.jpg",
    title: "Engineer",
    heading: "Building the Future with Strength",
    paragraph: `
Strong foundations lead to lasting structures.
Precision and planning are the pillars of great construction.
Every project starts with careful analysis and strategic thinking.
Engineers ensure safety, durability, and efficiency in every design.
Collaboration with architects and designers enhances functionality.
Innovative solutions tackle complex structural challenges.
Materials are selected for sustainability and resilience.
Continuous monitoring ensures projects meet quality standards.
Dedication and expertise turn blueprints into real structures.
Ultimately, engineering shapes the world we live in.
    `,
    iconImage: "/testimonial-1.jpg",
    iconTitle: "By Musharof Chy",
    iconHeading: "Civil Engineer",
    date: "2024",
  },
  {
    slug: "architect-designs-shape",
    image: "/blog_1.jpg",
    title: "Architect",
    heading: "Designs that Shape Skylines",
    paragraph: `
Every masterpiece begins with a vision.
Architecture combines art, science, and creativity.
Designs must harmonize with environment and culture.
Attention to detail transforms spaces into experiences.
Innovation drives new forms and sustainable solutions.
Collaboration with engineers ensures feasibility and safety.
Technology allows precise visualization and planning.
Interior and exterior aesthetics are carefully balanced.
Adaptability is key to meeting client needs.
Architecture shapes not just buildings, but communities.
    `,
    iconImage: "/testimonial-2.jpg",
    iconTitle: "Sara",
    iconHeading: "Architect",
    date: "2025",
  },
  {
    slug: "constructor-team-reality",
    image: "/blog_2.jpg",
    title: "Constructor Team",
    heading: "Turning Plans into Reality",
    paragraph: `
From blueprints to buildings, construction teams bring ideas to life.
Work requires skill, precision, and strict timelines.
Coordination ensures every phase runs smoothly.
Safety protocols are followed at all stages of construction.
Materials are managed efficiently to minimize waste.
Equipment and technology optimize productivity and quality.
Communication with clients keeps expectations aligned.
Problem-solving is constant on dynamic construction sites.
Dedication and teamwork turn plans into tangible results.
Construction transforms visions into enduring realities.
    `,
    iconImage: "/testimonial-3.jpg",
    iconTitle: "John",
    iconHeading: "Site Manager",
    date: "2026",
  },
];


export default async function BlogPost({ params }) {
  const { slug } = await params; 

  const blog = blogs.find((blog) => blog.slug === slug);

  if (!blog) {
    return (
      <div className="text-center py-16">
        <h1 className="text-3xl font-bold text-red-600">Blog Not Found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-extrabold text-rose-800 mb-5">
        {blog.heading}
      </h1>

      <Image
        src={blog.image}
        alt={blog.title}
        width={1000}
        height={500}
        className="rounded-xl shadow-lg mb-6"
      />

      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        {blog.paragraph}
      </p>

      <div className="flex items-center gap-4 mt-6 p-4 bg-gray-100 rounded-xl shadow-sm">
        <Image
          src={blog.iconImage}
          width={60}
          height={60}
          className="rounded-full ring-2 ring-rose-300"
          alt="Author"
        />

        <div>
          <h3 className="font-bold text-xl">{blog.iconTitle}</h3>
          <p className="text-gray-600">{blog.iconHeading}</p>
        </div>
      </div>

      <p className="mt-4 text-sm text-gray-500">Published: {blog.date}</p>
    </div>
  );
}
