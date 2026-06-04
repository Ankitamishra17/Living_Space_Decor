"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ServiceCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="group text-center"
    >
      {/* Circle Container */}
      <motion.div
        className="relative mx-auto w-70 h-70 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Outer Decorative Ring - Rotates Anticlockwise */}
        <motion.div
          className="absolute inset-0 rounded-full border border-amber-100"
          whileHover={{ rotate: -180 }}
          transition={{ duration: 0.8 }}
        />

        {/* Inner Dashed Ring */}
        <motion.div
          className="absolute inset-2 rounded-full border border-dashed border-[#C8972B]"
          whileHover={{ rotate: -180, borderColor: "#D4AF37" }}
          transition={{ duration: 5 }}
        />

        {/* Image Container */}
        <div className="absolute inset-4 overflow-hidden rounded-full">
          <motion.div
            className="relative w-full h-full"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />

            {/* Base Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/40"
              initial={{ opacity: 0.3 }}
              whileHover={{ opacity: 0.6 }}
              transition={{ duration: 0.5 }}
            />

            {/* Explore Text - Hidden by default */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <motion.span
                initial={{ scale: 0.8, y: 10 }}
                whileHover={{ scale: 1, y: 0 }}
                className="text-[#C8972B] tracking-widest text-sm font-light"
              >
                Explore →
              </motion.span>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Number */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.3, y: -4 }}
          transition={{
            initial: { delay: 0.3 + index * 0.1, duration: 0.6 },
            whileHover: { duration: 0.3 },
          }}
          viewport={{ once: true }}
        >
          <span className="text-[#C8972B] text-3xl font-serif italic">
            {item.id}
          </span>
        </motion.div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 + index * 0.1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Title */}
        <motion.h3
          className="font-serif text-3xl md:text-4xl text-stone-900 group-hover:text-[#C8972B] transition-colors duration-500"
          whileHover={{ letterSpacing: "0.05em" }}
          transition={{ duration: 0.4 }}
        >
          {item.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          className="mt-5 text-stone-500 leading-relaxed max-w-sm mx-auto text-sm font-light tracking-wide"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1, color: "#92400e" }}
          transition={{ duration: 0.4 }}
        >
          {item.description}
        </motion.p>

        {/* Hover Underline */}
        <motion.div
          className="mt-6 h-px bg-gradient-to-r from-transparent via-[#C8972B] to-transparent mx-auto"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          style={{ maxWidth: "80px", originX: 0.5 }}
        />
      </motion.div>
    </motion.div>
  );
}
