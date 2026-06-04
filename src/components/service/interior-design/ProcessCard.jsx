"use client";

import { motion } from "framer-motion";

export default function ProcessCard({ num, title, desc, img }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group"
    >
      {/* Image Frame */}
      <div className="relative mb-8 overflow-hidden bg-white">
        <motion.img
          src={img}
          alt={title}
          className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.6 }}
        />

        {/* Border Frame */}
        <div className="absolute inset-0 border border-neutral-200 pointer-events-none" />

        {/* Step Number Overlay - Gold */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute bottom-4 right-4 text-5xl font-light text-[#C8972B] opacity-20"
        >
          {num}
        </motion.div>
      </div>

      {/* Badge Section */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-2 bg-[#C8972B]" />
        <span className="text-xs tracking-widest text-[#C8972B] font-medium">
          STEP {num}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-light text-black mb-4 tracking-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-neutral-600 leading-relaxed font-light">
        {desc}
      </p>

      {/* Bottom accent line - appears on hover */}
      <motion.div
        initial={{ width: 0 }}
        whileHover={{ width: 40 }}
        transition={{ duration: 0.4 }}
        className="mt-6 h-px bg-gradient-to-r from-[#C8972B] to-transparent"
      />
    </motion.div>
  );
}
