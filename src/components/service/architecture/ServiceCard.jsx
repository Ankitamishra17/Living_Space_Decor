"use client";

import Image from "next/image";
import { useState } from "react";

export default function ServiceCard({ title, desc, image }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group flex flex-col items-center cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Arch Image */}
      <div
        className={`
          relative
          w-full
          max-w-[210px]
          aspect-[3/4]
          overflow-hidden
          transition-all
          duration-500
          border
          ${hovered ? "border-[#C8972B] shadow-xl" : "border-[#EDE9E0]"}
        `}
        style={{
          borderRadius: "50% 50% 8px 8px / 38% 38% 8px 8px",
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className={`
            object-cover
            transition-transform
            duration-700
            ${hovered ? "scale-110" : "scale-100"}
          `}
        />

        <div
          className={`
            absolute inset-0 transition-all duration-500
            ${hovered ? "bg-[#C8972B]/10" : "bg-transparent"}
          `}
        />
      </div>

      {/* Content */}
      <div className="text-center mt-6 px-2">
        <h3 className="text-[28px] text-[#1A1A1A] mb-3 font-serif">{title}</h3>

        <p className="text-[#888] text-sm leading-8 max-w-[220px] mx-auto">
          {desc}
        </p>

        <div
          className={`
            mt-5 flex items-center justify-center gap-2
            uppercase tracking-[0.25em]
            text-[11px]
            transition-all duration-300
            ${hovered ? "text-[#C8972B]" : "text-[#888]"}
          `}
        >
          Read More
          <span
            className={`
              transition-transform duration-300
              ${hovered ? "translate-x-1" : ""}
            `}
          >
            →
          </span>
        </div>
      </div>
    </div>
  );
}
