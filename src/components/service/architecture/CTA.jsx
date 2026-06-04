"use client";

import Image from "next/image";

export default function CTA() {
  return (
    <section className="bg-[#F8F6F1]">
      <div className="max-w-7xl mx-auto overflow-hidden rounded-sm">
        <div className="grid lg:grid-cols-2">
          {/* Left Image */}
          <div className="relative min-h-[650px]">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1800"
              alt="Luxury Interior"
              fill
              className="object-cover"
            />

            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#F2EBD9]/90" />

            {/* Year Tag */}
            <div className="absolute bottom-8 left-8 border border-[#D7C8A3] bg-[#F4EFE4]/80 px-6 py-3">
              <span className="text-[#B8954A] tracking-[0.35em] text-xs">
                EST. 2006
              </span>
            </div>
          </div>

          {/* Right Content */}
          <div className="bg-[#F2EBD9] flex items-center">
            <div className="px-12 lg:px-20 py-20 w-full">
              {/* Top Label */}
              <div className="flex items-center gap-5 mb-10">
                <div className="w-16 h-[1px] bg-[#B8954A]" />

                <span className="uppercase tracking-[0.4em] text-[#B8954A] text-xs">
                  Start Your Project
                </span>

                <div className="w-16 h-[1px] bg-[#B8954A]" />
              </div>

              {/* Heading */}
              <h2 className="font-serif text-[#231A14] text-3xl lg:text-5xl leading-[1.05]">
                Let's Build
                <br />
                Something <span className="italic text-[#C59A43]">Iconic</span>
              </h2>

              {/* Description */}
              <p className="mt-8 text-[#6A5F55] leading-9 text-sm max-w-xl">
                Every great structure begins with a conversation. Let's talk
                about your vision and what's possible.
              </p>

              {/* Stats */}
              <div className="flex items-center mt-12 border-t border-[#DCCFAF] pt-10">
                <div className="pr-10">
                  <h3 className="text-[#C59A43] text-4xl font-light">120+</h3>
                  <p className="uppercase tracking-[0.3em] text-xs text-[#9A8D7E] mt-2">
                    Projects
                  </p>
                </div>

                <div className="px-10 border-l border-r border-[#DCCFAF]">
                  <h3 className="text-[#C59A43] text-4xl font-light">18</h3>
                  <p className="uppercase tracking-[0.3em] text-xs text-[#9A8D7E] mt-2">
                    Years
                  </p>
                </div>

                <div className="pl-10">
                  <h3 className="text-[#C59A43] text-4xl font-light">34</h3>
                  <p className="uppercase tracking-[0.3em] text-xs text-[#9A8D7E] mt-2">
                    Awards
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 mt-12">
                <button className="bg-[#2B1A0D] text-white px-8 py-5 uppercase tracking-[0.1em] text-xs hover:bg-[#3D2411] transition">
                  Schedule Consultation →
                </button>

                <button className="border border-[#D7C8A3] text-[#B8954A] px-8 py-5 uppercase tracking-[0.1em] text-xs hover:bg-white transition">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
