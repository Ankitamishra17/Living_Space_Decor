"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const portfolio = [
  {
    id: 1,
    title: "Luxury Living Room",
   
    image: "https://images.pexels.com/photos/8584020/pexels-photo-8584020.jpeg",
    featured: true,
  },
  {
    id: 2,
    title: "Modern Bedroom Suite",
   
    image: "https://images.pexels.com/photos/6934170/pexels-photo-6934170.jpeg",
  },
  {
    id: 3,
    title: "Premium Kitchen",
   
    image: "https://images.pexels.com/photos/19966809/pexels-photo-19966809.jpeg",
  },
  {
    id: 4,
    title: "Kids Room",
   
    image: "https://images.pexels.com/photos/6835137/pexels-photo-6835137.jpeg",
  },
  {
    id: 5,
    title: "Contemporary Dining",
   
    image: "https://images.pexels.com/photos/7195598/pexels-photo-7195598.jpeg",
  },
];

export default function LatestProjectsPremium() {
  const [hoveredId, setHoveredId] = useState(null);

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

      {/* Two Column Layout with Alternating */}
      <div className="space-y-6">
        {/* Featured Large Image - Row 1 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Left - Large Featured Image */}
          <motion.div
            className="group relative overflow-hidden rounded-lg h-[380px] md:h-[440px] cursor-pointer md:col-span-2 md:row-span-1"
            onMouseEnter={() => setHoveredId(portfolio[0].id)}
            onMouseLeave={() => setHoveredId(null)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/portfolio" className="block h-full">
              <Image
                src={portfolio[0].image}
                alt={portfolio[0].title}
                fill
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[#140802]/80 via-[#140802]/30 to-transparent"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredId === portfolio[0].id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: hoveredId === portfolio[0].id ? 1 : 0,
                  y: hoveredId === portfolio[0].id ? 0 : 20,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex-1">
                  <span className="inline-block px-3 py-1.5 bg-[#C8972B] text-white text-[9px] uppercase tracking-[.2em] font-semibold rounded-full mb-4">
                    Featured
                  </span>
                  <p className="font-[Cormorant_Garamond,serif] text-[32px] md:text-[40px] font-medium text-white mb-2">
                    {portfolio[0].title}
                  </p>
                  <p className="text-[11px] tracking-[.12em] uppercase text-[#C8972B]">
                    {portfolio[0].location}
                  </p>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{
                    scale: hoveredId === portfolio[0].id ? 1 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-12 h-12 rounded-full bg-[#C8972B] flex items-center justify-center flex-shrink-0 ml-4"
                >
                  <ArrowUpRight size={18} className="text-white" />
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute top-6 right-6"
                initial={{ scale: 0, rotate: -45 }}
                animate={{
                  scale: hoveredId === portfolio[0].id ? 1 : 0,
                  rotate: hoveredId === portfolio[0].id ? 0 : -45,
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="w-16 h-16 rounded-full border-2 border-[#C8972B] flex items-center justify-center">
                  <span className="font-[Cormorant_Garamond,serif] text-[#C8972B] text-2xl font-semibold">
                    01
                  </span>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Remaining 4 Images in 2x2 Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {portfolio.slice(1, 5).map((p, i) => (
            <motion.div
              key={p.id}
              className="group relative overflow-hidden rounded-lg h-[320px] cursor-pointer"
              onMouseEnter={() => setHoveredId(p.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Link href="/portfolio" className="block h-full">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#140802]/80 via-[#140802]/20 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredId === p.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{
                    opacity: hoveredId === p.id ? 1 : 0,
                    y: hoveredId === p.id ? 0 : 15,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex-1">
                    <p className="font-[Cormorant_Garamond,serif] text-[22px] font-medium text-white mb-1">
                      {p.title}
                    </p>
                   
                  </div>
                  <motion.div
                    initial={{ x: -5 }}
                    animate={{
                      x: hoveredId === p.id ? 5 : -5,
                    }}
                    className="flex-shrink-0"
                  >
                    <ArrowUpRight size={14} className="text-white" />
                  </motion.div>
                </motion.div>

                <motion.div
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#C8972B] flex items-center justify-center text-white font-semibold text-sm"
                  initial={{ scale: 0 }}
                  animate={{
                    scale: hoveredId === p.id ? 1 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {String(p.id).padStart(2, "0")}
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

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
            className="relative group-hover:text-[#3D1F0D] transition-colors"
            whileHover={{ letterSpacing: "0.2em" }}
          >
            Explore Full Portfolio
          </motion.span>
          <motion.div
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <ArrowUpRight size={14} className="group-hover:text-[##3D1F0D]" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
