"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const finishes = {
  Acrylic: [
    {
      id: 1,
      title: "Revival Green",
      subtitle: "Acrylic Solid",
      color: "#A9B3AF",
      image:
        "https://images.pexels.com/photos/9209432/pexels-photo-9209432.jpeg",
    },
    {
      id: 2,
      title: "Slate Grey",
      subtitle: "Acrylic Solid",
      color: "#C1BDB8",
      image:
        "https://images.pexels.com/photos/13722898/pexels-photo-13722898.jpeg",
    },
    {
      id: 3,
      title: "Pearl White",
      subtitle: "Acrylic Solid",
      color: "#D5D5D7",
      image:
        "https://images.pexels.com/photos/19966809/pexels-photo-19966809.jpeg",
    },
    {
      id: 4,
      title: "Warm Beige",
      subtitle: "Acrylic Solid",
      color: "#D9CEC2",
      image:
        "https://images.pexels.com/photos/7018399/pexels-photo-7018399.jpeg",
    },
    {
      id: 5,
      title: "Champagne",
      subtitle: "Acrylic Solid",
      color: "#B59F92",
      image:
        "https://images.pexels.com/photos/7166563/pexels-photo-7166563.jpeg",
    },
  ],
  Laminate: [
    {
      id: 1,
      title: "Sage Green",
      subtitle: "Matt Laminate",
      color: "#9DA19A",
      image:
        "https://images.pexels.com/photos/20653872/pexels-photo-20653872.jpeg",
    },
    {
      id: 2,
      title: "Ocean Blue",
      subtitle: "High Gloss Laminate",
      color: "#A6B9CD",
      image:
        "https://images.pexels.com/photos/7587864/pexels-photo-7587864.jpeg",
    },
    {
      id: 3,
      title: "Arctic White",
      subtitle: "High Gloss Laminate",
      color: "#E8E8EA",
      image:
        "https://images.pexels.com/photos/7535073/pexels-photo-7535073.jpeg",
    },
    {
      id: 4,
      title: "Warm Sand",
      subtitle: "High Gloss Laminate",
      color: "#C9B99A",
      image:
        "https://images.pexels.com/photos/7018399/pexels-photo-7018399.jpeg",
    },
  ],
  Acrishine: [
    {
      id: 1,
      title: "Ivory Cream",
      subtitle: "Acrishine",
      color: "#D7CEC4",
      image:
        "https://images.pexels.com/photos/7533763/pexels-photo-7533763.jpeg",
    },
    {
      id: 2,
      title: "Bright White",
      subtitle: "Acrishine",
      color: "#ECECEC",
      image:
        "https://images.pexels.com/photos/6523300/pexels-photo-6523300.jpeg",
    },
    {
      id: 3,
      title: "Forest Green",
      subtitle: "Acrishine",
      color: "#9DA19A",
      image:
        "https://images.pexels.com/photos/7535019/pexels-photo-7535019.jpeg",
    },
  ],
  PU: [
    {
      id: 1,
      title: "Snow White",
      subtitle: "PU Finish",
      color: "#ECECEC",
      image:
        "https://images.pexels.com/photos/19966809/pexels-photo-19966809.jpeg",
    },
    {
      id: 2,
      title: "Storm Grey",
      subtitle: "PU Finish",
      color: "#C1BDB8",
      image:
        "https://images.pexels.com/photos/7166645/pexels-photo-7166645.jpeg",
    },
    {
      id: 3,
      title: "Moss Green",
      subtitle: "PU Gross",
      color: "#9DA19A",
      image:
        "https://images.pexels.com/photos/9209432/pexels-photo-9209432.jpeg",
    },
  ],
};

const TABS = Object.keys(finishes);

function FinishCard({ item, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden cursor-pointer group"
      style={{ borderRadius: "0px" }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative h-[280px] overflow-hidden">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div
            className="w-full h-full"
            style={{ background: item.color || "#E0D8D0" }}
          />
        )}

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0E05]/80 via-transparent to-transparent" />

        {/* hover overlay */}
        <motion.div
          className="absolute inset-0 bg-[#C8972B]/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* arrow icon top right */}
        <motion.div
          className="absolute top-4 right-4 w-8 h-8 bg-[#C8972B] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.7 }}
          transition={{ duration: 0.25 }}
        >
          <ArrowUpRight size={14} className="text-white" />
        </motion.div>

        {/* color swatch bottom right */}
        <div
          className="absolute bottom-4 right-4 w-6 h-6 rounded-full border-2 border-white/50 shadow-lg"
          style={{ background: item.color || "#C8972B" }}
        />
      </div>

      {/* Info */}
      <div className="bg-white px-4 py-4 border-b border-[#E8E0D6] group-hover:border-[#C8972B]/40 transition-colors duration-300">
        <div className="flex items-start justify-between">
          <div>
            <p
              className="text-[#2A1506] font-medium text-sm group-hover:text-[#C8972B] transition-colors duration-300"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {item.title}
            </p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#9E8E7E] mt-0.5">
              {item.subtitle}
            </p>
          </div>
          <motion.div
            className="w-px h-8 bg-[#C8972B]/30 mt-0.5"
            animate={{ scaleY: hovered ? 1 : 0.3, opacity: hovered ? 1 : 0.3 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function FinishSelector() {
  const [activeTab, setActiveTab] = useState("Acrylic");
  const [tabIndex, setTabIndex] = useState(0);
  const scrollRef = useRef(null);

  const currentItems = finishes[activeTab];

  const handleTab = (tab, i) => {
    setActiveTab(tab);
    setTabIndex(i);
  };

  const scrollLeft = () =>
    scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  const scrollRight = () =>
    scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });

  return (
    <section className="py-24 bg-[#F7F2EB] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-14">
        {/* ── Header ── */}
        <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
          <div>
            <motion.p
              className="text-[10px] tracking-[0.4em] uppercase text-[#C8972B] mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Surface Finishes
            </motion.p>
            <motion.h2
              className="text-4xl md:text-5xl text-[#2A1506] font-medium leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              Finishes That
              <span className="text-[#C8972B]"> Set the Tone</span>
            </motion.h2>
            <motion.p
              className="text-[#6E5E4E] mt-3 text-base max-w-md leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Choose surfaces that lift the light, calm the space, or add depth.
            </motion.p>
          </div>

          {/* nav arrows */}
          <div className="flex gap-3">
            <motion.button
              onClick={scrollLeft}
              className="w-12 h-12 border border-[#2A1506]/20 flex items-center justify-center text-[#2A1506]/50 hover:border-[#C8972B] hover:text-[#C8972B] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              onClick={scrollRight}
              className="w-12 h-12 border border-[#2A1506]/20 flex items-center justify-center text-[#2A1506]/50 hover:border-[#C8972B] hover:text-[#C8972B] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>

        {/* ── Layout ── */}
        <div className="flex gap-8 items-start">
          {/* Left: vertical tabs */}
          <div className="flex-shrink-0 w-[180px] space-y-1">
            {TABS.map((tab, i) => (
              <motion.button
                key={tab}
                onClick={() => handleTab(tab, i)}
                className={`w-full text-left px-5 py-4 text-sm transition-all duration-300 relative overflow-hidden ${
                  activeTab === tab
                    ? "text-[#2A1506] font-medium"
                    : "text-[#9E8E7E] hover:text-[#2A1506]"
                }`}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                {/* active indicator */}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#C8972B]"
                    transition={{ duration: 0.3 }}
                  />
                )}
                <span className="relative pl-3">
                  {activeTab === tab && (
                    <span className="text-[#C8972B] mr-1.5 text-xs">✦</span>
                  )}
                  {tab}
                </span>
              </motion.button>
            ))}

            {/* gold divider */}
            <div className="mt-6 pt-6 border-t border-[#C8972B]/20 px-5">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#9E8E7E] mb-2">
                Selected
              </p>
              <p className="text-sm text-[#2A1506] font-medium">{activeTab}</p>
              <p className="text-xs text-[#9E8E7E] mt-1">
                {currentItems.length} options
              </p>
            </div>
          </div>

          {/* Right: scrollable cards */}
          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto pb-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {currentItems.map((item, i) => (
                  <div key={item.id} className="flex-shrink-0 w-[240px]">
                    <FinishCard item={item} index={i} />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* scroll hint */}
            <div className="flex items-center gap-2 mt-4">
              {currentItems.map((_, i) => (
                <div
                  key={i}
                  className="h-px bg-[#C8972B]/30 transition-all duration-300"
                  style={{ width: i === 0 ? "24px" : "8px" }}
                />
              ))}
              <span className="text-[10px] text-[#9E8E7E] tracking-widest uppercase ml-2">
                Scroll to explore
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
