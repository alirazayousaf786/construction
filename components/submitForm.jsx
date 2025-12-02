"use client";
import Link from "next/link";
import Image from "next/image"
import Button from  "@/components/button"
import {
  FaUser,FaEnvelope,FaPhone,FaPencilAlt,FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn,FaMapMarkerAlt,FaCalendarAlt,FaTools,} from "react-icons/fa";

export default function BookingForm() {
  return (
    <>
    <section className="relative py-20 bg-white overflow-hidden">
       
      
      {/* left side svg */}
      <svg className="absolute top-0 left-0 w-40 opacity-20 text-rose-300" viewBox="0 0 200 200" fill="currentColor">
        <circle cx="0" cy="100" r="100" />
      </svg>

      {/* right side svg */}
      <svg className="absolute bottom-0 right-0 w-60 opacity-10 text-slate-400" viewBox="0 0 200 200" fill="currentColor">
        <rect width="200" height="200" rx="40" />
      </svg>

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Booking Form */}
          <div>
            <h3 className="text-3xl font-semibold text-slate-800 mb-6">Book Construction Appointment</h3>

            <form className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Full Name */}
                <div className="flex flex-col">
                  <label className="text-xs font-medium text-slate-500 ml-1">Full Name</label>
                  <div className="relative mt-1">
                    <FaUser className="absolute left-3 top-3 text-slate-400 text-lg" />
                    <input
                      type="text"
                      placeholder="Enter Name"
                      className="w-full border-b-2 border-slate-300 focus:border-rose-500 outline-none py-2 pl-10 text-slate-700"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label className="text-xs font-medium text-slate-500 ml-1">Email Address</label>
                  <div className="relative mt-1">
                    <FaEnvelope className="absolute left-3 top-3 text-slate-400 text-lg" />
                    <input
                      type="email"
                      placeholder="sysfos@gmail.com"
                      className="w-full border-b-2 border-slate-300 focus:border-rose-500 outline-none py-2 pl-10 text-slate-700"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex flex-col">
                  <label className="text-xs font-medium text-slate-500 ml-1">Phone Number</label>
                  <div className="relative mt-1">
                    <FaPhone className="absolute left-3 top-3 text-slate-400 text-lg" />
                    <input
                      type="text"
                      placeholder="+92 123 4567890"
                      className="w-full border-b-2 border-slate-300 focus:border-rose-500 outline-none py-2 pl-10 text-slate-700"
                    />
                  </div>
                </div>

                {/* Select Construction Service */}
                <div className="flex flex-col">
                  <label className="text-xs font-medium text-slate-500 ml-1">Select Service</label>
                  <div className="relative mt-1">
                    <FaTools className="absolute left-3 top-3 text-slate-400 text-lg" />
                    <select
                      className="w-full border-b-2 border-slate-300 focus:border-rose-500 outline-none py-2 pl-10 text-slate-700 bg-white"
                    >
                      <option>Select</option>
                      <option>House Construction</option>
                      <option>Grey Structure Construction</option>
                      <option>Finishing & Interior</option>
                      <option>Renovation Work</option>
                      <option>Architectural Design</option>
                      <option>Commercial Building</option>
                    </select>
                  </div>
                </div>

                {/* Appointment Date */}
                <div className="flex flex-col">
                  <label className="text-xs font-medium text-slate-500 ml-1">Site Visit Date</label>
                  <div className="relative mt-1">
                    <FaCalendarAlt className="absolute left-3 top-3 text-slate-400 text-lg" />
                    <input
                      type="date"
                      className="w-full border-b-2 border-slate-300 focus:border-rose-500 outline-none py-2 pl-10 text-slate-700"
                    />
                  </div>
                </div>

                {/*  Time */}
                <div className="flex flex-col">
                  <label className="text-xs font-medium text-slate-500 ml-1">Preferred Time</label>
                  <div className="relative mt-1">
                    <FaCalendarAlt className="absolute left-3 top-3 text-slate-400 text-lg" />
                    <input
                      type="time"
                      className="w-full border-b-2 border-slate-300 focus:border-rose-500 outline-none py-2 pl-10 text-slate-700"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label className="text-xs font-medium text-slate-500 ml-1">Project Details</label>
                <div className="relative mt-1">
                  <FaPencilAlt className="absolute left-3 top-3 text-slate-400 text-lg" />
                  <textarea
                    placeholder="Describe your project, plot size, requirements..."
                    className="w-full h-32 border-b-2 border-slate-300 focus:border-rose-500 outline-none py-2 pl-10 resize-none text-slate-700"
                  ></textarea>
                </div>
              </div>

              {/* Button */}
             
              <span>
                <Button label="BOOK APPOINTMENT" />
              </span>
            
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-semibold text-slate-800 mb-6">Contact Information</h3>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-slate-500 text-lg mt-1" />
                <p className="text-slate-600 font-medium">
                  Triq bin Zad Colony Sahiwal City Pakistan
                </p>
              </li>

              <li className="flex items-start gap-4">
                <FaPhone className="text-slate-500 text-lg mt-1" />
                <p className="text-slate-600 font-medium">+92 123 4567890</p>
              </li>

              <li className="flex items-start gap-4">
                <FaEnvelope className="text-slate-500 text-lg mt-1" />
                <p className="text-slate-600 font-medium">sysfos@gmail.com</p>
              </li>
            </ul>

            {/* Social media */}
            <ul className="flex gap-4 mt-8">
              <li>
                <Link href="#" className="h-10 w-10 flex items-center justify-center border rounded-md text-slate-500 hover:bg-rose-600 hover:text-white transition hover:rounded-full">
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link href="#" className="h-10 w-10 flex items-center justify-center border rounded-md text-slate-500 hover:bg-rose-600 hover:text-white transition hover:rounded-full">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link href="#" className="h-10 w-10 flex items-center justify-center border rounded-md text-slate-500 hover:bg-rose-600 hover:text-white transition hover:rounded-full">
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link href="#" className="h-10 w-10 flex items-center justify-center border rounded-md text-slate-500 hover:bg-rose-600 hover:text-white transition hover:rounded-full">
                  <FaLinkedinIn />
                </Link>
              </li>
            </ul>

          </div>

        </div>
      </div>
    </section>
    </>
  );
}
