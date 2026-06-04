"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sofa,
  Paintbrush,
  Lightbulb,
  Hammer,
  ChefHat,
  Ruler,
} from "lucide-react";

const services = [
  {
    icon: Sofa,
    number: "01",
    title: "Furniture & Decor",
    description:
      "Custom furniture, bespoke furnishings, and precision styling that reflects your personality and elevates every corner.",
    tags: ["Custom Design", "Premium Materials", "Styling"],
  },
  {
    icon: ChefHat,
    number: "02",
    title: "Modular Kitchen",
    description:
      "Modern, functional kitchen solutions engineered for efficiency — from cabinet design to countertop finishes.",
    tags: ["Smart Storage", "German Hardware", "Quartz Tops"],
  },
  {
    icon: Hammer,
    number: "03",
    title: "Civil & Execution",
    description:
      "End-to-end site execution with precision craftsmanship — tiling, plastering, false ceilings, and all civil work.",
    tags: ["False Ceilings", "Tiling", "Plastering"],
  },
  {
    icon: Lightbulb,
    number: "04",
    title: "Decorative Lighting",
    description:
      "Thoughtfully curated lighting plans and full electrical installations that set the mood in every room.",
    tags: ["Mood Lighting", "Electrical", "Smart Controls"],
  },
  {
    icon: Paintbrush,
    number: "05",
    title: "Doors & Windows",
    description:
      "Premium doors and windows with luxury finishes, textures, and hardware to frame every space perfectly.",
    tags: ["UPVC", "Aluminium", "Flush Doors"],
  },
  {
    icon: Ruler,
    number: "06",
    title: "Space Planning",
    description:
      "Optimized layouts and flow plans that maximize every square foot — functional, beautiful, and future-ready.",
    tags: ["2D Layout", "3D Walkthrough", "Optimization"],
  },
];

export default function ServicesIncluded() {
  const [active, setActive] = useState(null);

  return (
    <section className="py-28 bg-[#F5EBE0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        {/* ── Heading ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <motion.p
              className="text-[10px] tracking-[0.45em] uppercase text-[#C8972B] mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              What's Included
            </motion.p>
            <motion.h2
              className="text-4xl md:text-6xl font-medium text-[#3D1F0D]  leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.9 }}
            >
              Every Service,
              <br />
              <span className="text-[#C8972B]">One Project.</span>
            </motion.h2>
          </div>
          <motion.p
            className="text-[#3D1F0D]/70 text-sm max-w-xs leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Everything required to deliver a complete turnkey interior — from
            concept to keys.
          </motion.p>
        </div>

        {/* ── Services Grid ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#C8972B]/10">
          {services.map((s, i) => {
            const Icon = s.icon;
            const isActive = active === i;

            return (
              <motion.div
                key={i}
                className="relative bg-white p-8 cursor-pointer overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
              >
                {/* hover bg fill */}
                <motion.div
                  className="absolute inset-0 bg-[#C8972B]/8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* top border line animates */}
                <motion.div
                  className="absolute top-0 left-0 h-px bg-[#C8972B]"
                  initial={{ width: 0 }}
                  animate={{ width: isActive ? "100%" : "0%" }}
                  transition={{ duration: 0.4 }}
                />

                {/* number */}
                <div className="flex items-start justify-between mb-8 relative z-10">
                  <span
                    className="text-[56px] leading-none font-medium text-[#3D1F0D]/10 group-hover:text-[#3D1F0D]/20 transition-colors duration-300 select-none"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {s.number}
                  </span>

                  {/* icon circle */}
                  <motion.div
                    className="w-12 h-12 rounded-full border border-[#C8972B]/30 flex items-center justify-center group-hover:border-[#C8972B] group-hover:bg-[#C8972B]/10 transition-all duration-300"
                    animate={{ rotate: isActive ? 15 : 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Icon size={20} className="text-[#C8972B]" />
                  </motion.div>
                </div>

                {/* title */}
                <h3
                  className="text-[#3D1F0D] text-xl font-medium mb-3 group-hover:text-[#C8972B] transition-colors duration-300 relative z-10"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {s.title}
                </h3>

                {/* description */}
                <p className="[#3D1F0D]/70 text-sm leading-relaxed mb-6 relative z-10">
                  {s.description}
                </p>

                {/* tags */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      className="flex flex-wrap gap-2 relative z-10"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.25 }}
                    >
                      {s.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] tracking-[0.2em] uppercase px-3 py-1 border border-[#C8972B]/30 text-[#C8972B]/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* bottom gold line static */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-[#C8972B]/10" />
              </motion.div>
            );
          })}
        </div>

        {/* ── Bottom CTA strip ── */}
        <motion.div
          className="mt-px bg-[#C8972B]/8 border border-[#C8972B]/20 px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-[#C8972B]" />
            <p className="text-[#3D1F0D]/70 text-sm">
              All 6 services included in every turnkey package 
            </p>
          </div>
          <a
            href="/contact"
            className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-[#C8972B] border border-[#C8972B]/40 px-6 py-3 hover:bg-[#C8972B] hover:text-white transition-all duration-300 whitespace-nowrap"
          >
            Get Free Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
