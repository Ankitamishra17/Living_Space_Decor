"use client";

import { X } from "lucide-react";
import Image from "next/image";

export default function ConsultationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4">
        <div className="relative w-full max-w-5xl bg-[#F7F1E8] rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)] max-h-[95vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#C8972B] hover:text-white transition-all duration-300"
          >
            <X size={20} />
          </button>

          <div className="grid lg:grid-cols-2">
            {/* Left Section */}
            <div className="relative p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 border border-[#C8972B]/30 bg-[#C8972B]/10 px-4 py-2 rounded-full w-fit">
                <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#C8972B]">
                  Free Consultation
                </span>
              </div>

              {/* Heading */}
              <h2
                className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-[#2A1506]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                One Place
                <br />
                For Every
                <span className="block text-[#C8972B]">Space.</span>
              </h2>

              {/* Description */}
              <p className="mt-5 text-sm sm:text-base md:text-lg text-[#6E5E4E] leading-relaxed max-w-lg">
                Everything your home needs — Kitchens, Wardrobes, Curtains &
                Blinds, Doors & Windows, Lighting, Furniture and complete
                Interior Solutions.
              </p>

              {/* Image */}
              <div className="mt-8 hidden md:block">
                <Image
                  src="/images/interior-banner.png"
                  alt="Interior Design"
                  width={600}
                  height={450}
                  className="w-full max-w-md object-contain"
                />
              </div>

              {/* Stats */}
              {/* <div className="mt-8 grid grid-cols-3 gap-3">
                <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                  <h3 className="text-[#C8972B] font-bold text-lg md:text-2xl">
                    500+
                  </h3>
                  <p className="text-xs text-[#6E5E4E]">Projects</p>
                </div>

                <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                  <h3 className="text-[#C8972B] font-bold text-lg md:text-2xl">
                    10+
                  </h3>
                  <p className="text-xs text-[#6E5E4E]">Years</p>
                </div>

                <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                  <h3 className="text-[#C8972B] font-bold text-lg md:text-2xl">
                    4.9★
                  </h3>
                  <p className="text-xs text-[#6E5E4E]">Rating</p>
                </div>
              </div> */}
            </div>

            {/* Right Section */}
            <div className="bg-white p-6 sm:p-8 md:p-10">
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl text-[#2A1506] font-medium">
                  Book a Consultation
                </h3>
                <p className="mt-2 text-sm text-[#6E5E4E]">
                  Fill in your details and our design expert will contact you
                  shortly.
                </p>
              </div>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full h-12 md:h-14 px-4 md:px-5 border border-[#E5DDD3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8972B]"
                />

                <input
                  type="tel"
                  placeholder="Enter Your Number"
                  className="w-full h-12 md:h-14 px-4 md:px-5 border border-[#E5DDD3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8972B]"
                />

                <input
                  type="text"
                  placeholder="Enter Your City"
                  className="w-full h-12 md:h-14 px-4 md:px-5 border border-[#E5DDD3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8972B]"
                />

                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full h-12 md:h-14 px-4 md:px-5 border border-[#E5DDD3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8972B]"
                />

                <textarea
                  rows={4}
                  placeholder="Tell us about your project"
                  className="w-full p-4 md:p-5 border border-[#E5DDD3] rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-[#C8972B]"
                />

                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 accent-[#C8972B]" />
                  <span className="text-sm text-[#6E5E4E] leading-relaxed">
                    I would like to receive updates, offers and project
                    information via WhatsApp.
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full h-12 md:h-14 bg-[#3D1F0D] hover:bg-[#C8972B] text-white rounded-xl font-medium transition-all duration-300"
                >
                  Book Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
