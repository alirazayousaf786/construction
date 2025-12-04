"use client";

import {
  FaArrowLeft,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFileUpload,
  FaPaperPlane,
} from "react-icons/fa";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ApplyPage() {
  const router = useRouter();
  const [uploadedFile, setUploadedFile] = useState(null);

  return (
    <>
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="fixed top-5 left-5 z-50 bg-white/20 backdrop-blur-xl border border-white/40 text-white p-3 rounded-full shadow-2xl hover:bg-white/30 transition"
      >
        <FaArrowLeft size={20} />
      </button>

      {/* HERO */}
      <section className="relative bg-[url('/bg.jpg')] bg-cover bg-center h-[350px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60"></div>

        <h1 className="relative text-white text-5xl md:text-6xl font-extrabold drop-shadow-xl">
          Apply For This Job
        </h1>
      </section>

      {/* FORM SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white/90 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-gray-200">
          <h2 className="text-3xl font-bold text-rose-800 mb-6 text-center">
            Job Application Form
          </h2>

          {/* FORM */}
          <form className="space-y-6">

            {/* FULL NAME */}
            <div className="flex items-center bg-gray-100 rounded-lg p-3 shadow-inner">
              <FaUser className="text-rose-700 mr-3" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent focus:outline-none"
              />
            </div>

            {/* EMAIL */}
            <div className="flex items-center bg-gray-100 rounded-lg p-3 shadow-inner">
              <FaEnvelope className="text-rose-700 mr-3" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent focus:outline-none"
              />
            </div>

            {/* PHONE */}
            <div className="flex items-center bg-gray-100 rounded-lg p-3 shadow-inner">
              <FaPhone className="text-rose-700 mr-3" />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full bg-transparent focus:outline-none"
              />
            </div>

            {/* LOCATION */}
            <div className="flex items-center bg-gray-100 rounded-lg p-3 shadow-inner">
              <FaMapMarkerAlt className="text-rose-700 mr-3" />
              <input
                type="text"
                placeholder="Your City / Location"
                className="w-full bg-transparent focus:outline-none"
              />
            </div>

            {/* CV UPLOAD */}
            <div className="relative bg-gray-100 rounded-lg p-5 shadow-inner border border-dashed border-rose-400 cursor-pointer">
              <div className="flex flex-col items-center">
                <FaFileUpload className="text-rose-700 text-3xl mb-3" />
                <p className="text-gray-600 mb-2">
                  {uploadedFile ? uploadedFile.name : "Upload Your CV (PDF, DOCX)"}
                </p>

                <input
                  type="file"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={(e) => setUploadedFile(e.target.files[0])}
                />
              </div>
            </div>

            {/* MESSAGE */}
            <textarea
              rows="5"
              placeholder="Short Message (Optional)"
              className="w-full bg-gray-100 p-4 rounded-lg shadow-inner focus:outline-none"
            ></textarea>

            {/* SUBMIT BUTTON */}
            <button
              className="w-full bg-gradient-to-r from-rose-800 to-rose-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 text-lg font-semibold shadow-xl hover:brightness-110 transition"
              type="submit"
            >
              <FaPaperPlane /> Submit Application
            </button>

          </form>
        </div>
      </section>
    </>
  );
}
