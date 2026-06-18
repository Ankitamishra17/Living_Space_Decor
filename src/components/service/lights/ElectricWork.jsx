"use client";

import { ArrowRight } from "lucide-react";

export default function LightingShowcase() {
  return (
    <section className="bg-[#F5EBE0] py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="ml-[100px]">
            <span className="text-[#B8893D] uppercase tracking-[0.3em] text-sm font-medium">
             Lighting
            </span>

            <h2 className="mt-4 text-3xl lg:text-4xl font-light text-[#3D1F0D] leading-tight">
              We Provide Complete
              <span className="block font-normal">Electric Work</span>
            </h2>

            

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#B8893D]" />
                Seamless Architectural Finish
              </div>

              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#B8893D]" />
                Energy Efficient LED Technology
              </div>

              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#B8893D]" />
                Elegant Contemporary Appearance
              </div>
            </div>

            <button className="mt-10 flex items-center gap-3 text-[#B8893D] font-medium group">
              Explore Design
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Video */}
          <div className="relative">
            <div className="overflow-hidden rounded-none shadow-2xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[400px] object-cover"
              >
                <source
                  src="https://www.pexels.com/download/video/17211925/"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
