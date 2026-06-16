"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const filters = ["All", "Living Room", "Bedroom", "Kitchen", "Office"];

const portfolio = [
  {
    id: 1,
    title: "Luxury Living Room",
    category: "Living Room",
    location: "Noida, Sector 150",
    image: "/lsd_images/38.jpg",
    description: "Bespoke seating with custom millwork and ambient lighting",
  },
  {
    id: 2,
    title: "Modern Bedroom Suite",
    category: "Bedroom",
    location: "Greater Noida",
    image: "/lsd_images/47.jpg",
    description: "Minimalist design with luxury textures and finishes",
  },
  {
    id: 3,
    title: "Premium Kitchen",
    category: "Kitchen",
    location: "Delhi NCR",
    image: "/lsd_images/13.jpg",
    description: "State-of-the-art appliances seamlessly integrated",
  },
];

export default function LatestProjects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);

  const filtered = portfolio.filter(
    (p) => activeFilter === "All" || p.category === activeFilter,
  );

  return (
    <section className="px-6 lg:px-14 py-32 bg-gradient-to-b from-[#F5EBE0]/20 to-transparent">
      {/* Header */}
      <motion.div
        className="mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="flex items-center gap-3 text-[10px] tracking-[.28em] uppercase text-[#C8972B] font-medium mb-4">
          <span className="w-8 h-px bg-gradient-to-r from-[#C8972B] to-transparent" />
          Portfolio Selection
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <h2 className="font-[Cormorant_Garamond,serif] text-4xl md:text-[56px] font-medium leading-[1.15] text-[#2A1506]">
            Transforming Spaces Into Legacies
          </h2>
          <p className="text-[#3D1F0D]/70 text-sm leading-relaxed">
            Each project represents our commitment to blending timeless elegance
            with contemporary sophistication, creating interiors that tell your
            story.
          </p>
        </div>
      </motion.div>

      {/* Filter Buttons with Enhanced Styling */}
      <motion.div
        className="flex gap-2 mb-16 flex-wrap"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {filters.map((filter, i) => (
          <motion.button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`relative px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[.16em] transition-all duration-400 ${
              activeFilter === filter
                ? "text-white"
                : "text-[#3D1F0D] hover:text-[#C8972B]"
            }`}
          >
            {/* Animated background with left-to-right reveal */}
            <motion.div
              className="absolute inset-0 bg-[#3D1F0D] -z-10 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: activeFilter === filter ? 1 : 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{ originX: 0 }}
            />
            {filter}
          </motion.button>
        ))}
      </motion.div>

      {/* Masonry-Style Portfolio Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-max"
          layout
          transition={{ duration: 0.5 }}
        >
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              onMouseEnter={() => setHoveredId(p.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative cursor-pointer ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <Link href="/portfolio" className="block h-full">
                {/* Main Container */}
                <motion.div
                  className="relative h-full overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Image with Clip Path on Hover */}
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={800}
                    height={i === 0 ? 600 : 400}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.15] ${
                      i === 0 ? "h-[400px] md:h-[500px]" : "h-[300px]"
                    }`}
                    style={{
                      clipPath:
                        hoveredId === p.id
                          ? "polygon(0 0, 100% 0, 100% 100%, 0 90%)"
                          : "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                    }}
                  />

                  {/* Dark overlay with gradient direction */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-[#140802]/80 via-[#140802]/40 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Content Wrapper - Bottom Section */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-8"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Category Badge with Icon */}
                    <div className="mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#C8972B]" />
                      <span className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#C8972B]">
                        {p.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-[Cormorant_Garamond,serif] text-[28px] md:text-[32px] font-medium text-white leading-[1.2] mb-2">
                      {p.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[12px] text-[#F5EBE0]/80 mb-3 leading-relaxed">
                      {p.description}
                    </p>

                    {/* Location with decorative line */}
                    <div className="flex items-center gap-3 pt-3 border-t border-[#C8972B]/30">
                      <p className="text-[10px] tracking-[.12em] uppercase text-[#C8972B] flex-1">
                        {p.location}
                      </p>
                      <motion.div
                        initial={{ x: -5, opacity: 0 }}
                        whileHover={{ x: 5, opacity: 1 }}
                      >
                        <ArrowUpRight size={16} className="text-white" />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Project Number - Top Right Corner */}
                  <motion.div
                    className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ scale: 0, rotate: -45 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <div className="w-14 h-14 rounded-full border-2 border-[#C8972B] flex items-center justify-center">
                      <span className="font-[Cormorant_Garamond,serif] text-[#C8972B] text-xl font-semibold">
                        {String(p.id).padStart(2, "0")}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* CTA Section */}
      <motion.div
        className="mt-20 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Link
          href="/portfolio"
          className="group relative inline-flex items-center gap-3 px-8 py-3.5 border-2 border-[#3D1F0D] text-[#3D1F0D] text-[11px] font-semibold uppercase tracking-[.12em] transition-all duration-300 overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-[#3D1F0D] -z-10"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.4 }}
            style={{ originX: 0 }}
          />
          <motion.span
            className="relative group-hover:text-white transition-colors"
            whileHover={{ letterSpacing: "0.2em" }}
          >
            Explore Full Portfolio
          </motion.span>
          <motion.div
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <ArrowUpRight size={14} className="group-hover:text-white" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
