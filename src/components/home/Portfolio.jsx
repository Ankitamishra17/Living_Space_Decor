"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const filters = ["All", "Living Room", "Bedroom", "Kitchen", "Office"];

const portfolio = [
  {
    title: "Luxury Living Room",
    location: "Noida, Sector 150",
    image:
      "https://images.unsplash.com/photo-1618219944342-824e40a13285?w=900&q=80&fit=crop",
    span: true,
  },
  {
    title: "Modern Bedroom Suite",
    location: "Greater Noida",
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80&fit=crop",
  },
  {
    title: "Premium Kitchen",
    location: "Delhi NCR",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80&fit=crop",
  },
];

export default function LatestProjects() {
  

  return (
    <section className="px-6 lg:px-14 py-24">
      <div className="flex items-end justify-between mb-10 flex-wrap gap-5">
        <div>
          <p className="flex items-center gap-3 text-[10px] tracking-[.28em] uppercase text-[#C8972B] font-medium mb-3">
            <span className="w-6 h-px bg-[#C8972B]" /> Our Work
          </p>
          <h2 className="font-[Cormorant_Garamond,serif] text-4xl md:text-[50px] font-medium leading-[1.1] text-[#2A1506]">
            Recent <em className="text-[#C8972B] not-italic">Portfolio</em>
          </h2>
        </div>
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 border border-[#3D1F0D]/30 text-[#3D1F0D] px-6 py-3 text-[11px] font-semibold uppercase tracking-[.12em] hover:bg-[#3D1F0D] hover:text-white transition-colors"
        >
          View All Projects
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
        {portfolio.map((p, i) => (
          <Link
            key={i}
            href="/portfolio"
            className={`relative overflow-hidden group ${p.span ? "md:row-span-2" : ""}`}
          >
            <Image
              src={p.image}
              alt={p.title}
              width={800}
              height={p.span ? 700 : 340}
              className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.05] ${p.span ? "h-[420px] md:h-full" : "h-[240px]"}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140802]/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="font-[Cormorant_Garamond,serif] text-[22px] font-medium text-white">
                {p.title}
              </p>
              <p className="text-[11px] tracking-[.12em] uppercase text-[#C8972B] mt-1">
                {p.location}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
