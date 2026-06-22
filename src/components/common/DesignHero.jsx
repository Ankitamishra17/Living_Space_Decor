"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function DesignHero({ data }) {
  return (
    <section>
      <div className="mx-auto">
        {/* Hero Image */}
        <div className="relative h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
          <Image
            src={data.heroImage}
            alt={data.title}
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#3D1F0D]/50" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div>
              <p className="text-[#F5EBE0] uppercase tracking-[6px] text-xs md:text-sm mb-4">
                Interior Design Studio
              </p>

              <h1 className="text-[#F5EBE0] font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
                {data.title}
              </h1>

              <p className="text-[#F5EBE0]/90 mt-4 text-sm md:text-lg italic">
                {data.subtitle}
              </p>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
}