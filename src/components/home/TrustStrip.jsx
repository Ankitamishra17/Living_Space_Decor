"use client";

import { motion } from "framer-motion";

const stats = [
  {
    num: "500+",
    title: "Projects Delivered",
    desc: "Luxury homes & premium interiors completed across Noida and Delhi NCR.",
  },
  {
    num: "10 Yr",
    title: "Warranty Support",
    desc: "Long-term warranty coverage for modular kitchens and interiors.",
  },
  {
    num: "45",
    title: "Day Fast Delivery",
    desc: "Timely project execution with premium finishing and quality assurance.",
  },
  {
    num: "100%",
    title: "Client Satisfaction",
    desc: "Trusted by homeowners for elegant and functional luxury interiors.",
  },
];



export default function StatsMarquee() {
  return (
    <div className="bg-[#3D1F0D]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className="px-8 py-8 text-center border-r border-white/10 last:border-r-0 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <p className="font-[Cormorant_Garamond,serif] text-[48px] font-medium text-[#C8972B] leading-none">
              {s.num}
            </p>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white mt-2 mb-2">
              {s.title}
            </p>
            <p className="text-[12px] text-white/40 leading-relaxed font-light max-w-[180px] mx-auto">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
