import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Container from "../../components/container";
import Image from "next/image";
export default function Contact() {
  return (
    <>
      {/* Top Section */}
      <section className="relative bg-[url('/bg.jpg')] bg-cover bg-center h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 top-section-main"></div>
        <div className="relative text-center text-white px-6 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-wider drop-shadow-2xl">
            Contact Me
          </h1>
          <hr className="border-t-4 border-rose-500 w-24 mx-auto mb-5 shadow-lg" />
          <div className="flex justify-center gap-2 text-lg font-semibold">
            <span className="hover:text-rose-300 cursor-pointer transition-all">
              Home
            </span>
            <span>/</span>
            <span className="text-rose-300">Contact</span>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 ">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left Side -  */}
            <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-8 flex flex-col justify-between transition-transform hover:scale-105 duration-500">
              <div className=" h-[300px]  mb-6 relative">
                <Image
                  src="/projects_6.jpg"
                  alt="image"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-800 hover:text-rose-800 transition-all cursor-pointer">
                  <FaPhoneAlt className="text-rose-800 text-2xl " />
                  <span className="text-lg font-medium">+9212345678</span>
                </div>
                <div className="flex items-center gap-4 text-gray-800 hover:text-rose-800 transition-all cursor-pointer">
                  <FaEnvelope className="text-rose-800 text-2xl " />
                  <span className="text-lg font-medium">Sysfos@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-gray-800 hover:text-rose-800 transition-all cursor-pointer">
                  <FaMapMarkerAlt className="text-rose-800 text-2xl " />
                  <span className="text-lg font-medium">Sahiwal ,Pakistan</span>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-10 transition-transform hover:scale-105 duration-500">
              <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center animate-fade-up">
                Get in Touch
              </h2>
              <form className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder=" "
                    className="peer w-full border-b-2 border-gray-300 focus:border-rose-800 outline-none p-3 bg-transparent text-slate-600"
                  />
                  <label className="absolute left-3 top-3 text-gray-400 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-rose-800 peer-focus:text-sm transition-all">
                    Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder=" "
                    className="peer w-full border-b-2 border-gray-300 focus:border-rose-800 outline-none p-3 bg-transparent text-slate-600"
                  />
                  <label className="absolute left-3 top-3 text-gray-400 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-rose-800 peer-focus:text-sm transition-all">
                    Email
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder=" "
                    className="peer w-full border-b-2 border-gray-300 focus:border-rose-800 outline-none p-3 bg-transparent text-slate-600"
                  />
                  <label className="absolute left-3 top-3 text-gray-400 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-rose-800 peer-focus:text-sm transition-all">
                    Phone Number
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    placeholder=" "
                    required
                    className="peer w-full border-b-2 border-gray-300 focus:border-rose-800 outline-none p-3 bg-transparent h-32 resize-none text-slate-600"
                  ></textarea>
                  <label className="absolute left-3 top-3 text-gray-400 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-rose-800 peer-focus:text-sm transition-all">
                    Message
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-rose-800 text-white py-4 rounded-xl font-bold text-lg hover:bg-rose-900 shadow-lg hover:shadow-rose-300/50 transition-all transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          {/* add is a last iframe */}
      <div className="w-full h-[450px] mt-5 animate-fade-in-up">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.6362956352978!2d73.12452965!3d30.6723686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922b7982e00b2a1%3A0x2a4e4a7065c63e65!2sTariq%20Bin%20Ziad%20Colony%2C%20Sahiwal!5e0!3m2!1sen!2s!4v1764582997154!5m2!1sen!2s"
    className="w-full h-full rounded-2xl"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

        </Container>
      </section>
    </>
  );
}
