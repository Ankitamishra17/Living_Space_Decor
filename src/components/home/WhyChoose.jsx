"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Building2, Clock, Users2, Trophy, Sparkles, MoveRight } from "lucide-react";

const stats = [
  {
    icon: Building2,
    number: "2014",
    label: "Established",
    description:
      "Living Space Decor is a full-service interior design studio, delivering complete home transformations from concept to final styling.",
  },
  {
    icon: Clock,
    number: "10+",
    label: "Years of Experience",
    description:
      "A decade spent shaping living rooms, bedrooms, kitchens, and full homes — refining a process that balances beauty with everyday livability.",
  },
  {
    icon: Users2,
    number: "35+",
    label: "Design Professionals",
    description:
      "A dedicated team of interior designers, project managers, and craftsmen working together on every space we touch.",
  },
  {
    icon: Trophy,
    number: "18",
    label: "Design Awards",
    description:
      "Eighteen regional recognitions for design excellence, spatial planning, and craftsmanship across residential projects.",
  },
];

function StatCard({ stat, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 1, 0.5, 1] }}
      className="w-full [perspective:1000px] group"
    >
      {/* 3D Premium Light Card Surface */}
      <div 
        className="relative h-full overflow-hidden rounded-xl border border-[#3D1F0D]/5 bg-white p-8 sm:p-10 transition-all duration-500 ease-out [transform-style:preserve-3d] group-hover:border-[#C8972B]/40 group-hover:[transform:rotateX(3deg)_rotateY(-3deg)_translateZ(10px)] shadow-[0_15px_40px_-20px_rgba(61,31,13,0.1)] group-hover:shadow-[0_30px_60px_-20px_rgba(61,31,13,0.2)]"
      >
        {/* Subtle Inner Soft Light Aura */}
        <div className="absolute -inset-px bg-gradient-to-br from-[#C8972B]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* Floating Number Indicator */}
        <span className="absolute right-6 top-6 font-[family-name:var(--font-heading)] text-xs font-semibold tracking-[0.3em] text-[#C8972B]/40 group-hover:text-[#C8972B] transition-colors">
          // 0{index + 1}
        </span>

        {/* Left Side Minimalist Accent Bar */}
        <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-[#C8972B]/20 to-transparent group-hover:via-[#C8972B] transition-all duration-500" />

        {/* Icon Container with Deep Luxury Contrast */}
        <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-lg bg-[#3D1F0D] transition-all duration-500 group-hover:bg-[#C8972B] text-[#C8972B] group-hover:text-[#3D1F0D]">
          <Icon className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
        </div>

        {/* Core Stat Number */}
        <div className="mb-2 font-[family-name:var(--font-display)] text-[64px] sm:text-[72px] leading-none tracking-wide text-[#3D1F0D] [transform:translateZ(30px)] select-none">
          {stat.number}
        </div>

        {/* Section Label Header */}
        <div className="mb-4 font-[family-name:var(--font-heading)] text-xs font-semibold uppercase tracking-[0.2em] text-[#C8972B]">
          {stat.label}
        </div>

        {/* Descriptive Light-theme Body Text */}
        <p className="font-[family-name:var(--font-body)] text-[14px] sm:text-[15px] leading-relaxed text-[#6B6B6B] group-hover:text-[#2C2C2C] transition-colors font-light">
          {stat.description}
        </p>

        {/* Subtle Architectural Editorial Background Watermark */}
        <div className="absolute -bottom-8 -right-4 font-[family-name:var(--font-display)] text-[110px] text-[#F0E6D8] pointer-events-none select-none tracking-tighter opacity-40 group-hover:text-[#C8972B]/10 transition-colors duration-500">
          LSD
        </div>
      </div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-[#F5EBE0] py-24 sm:py-32 lg:py-36 selection:bg-[#3D1F0D] selection:text-[#F5EBE0]">
      
      {/* Editorial Grid Gridlines Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #F0E6D8 1px, transparent 1px), linear-gradient(to bottom, #F0E6D8 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      
      {/* Delicate Light Shadows mapping for depth */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[600px] w-[600px] rounded-full bg-[#C8972B]/10 blur-[130px] opacity-60" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#F0E6D8] blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        
        {/* ─── LEFT SIDEBAR PANEL (STICKY DESKTOP) ─── */}
        <div ref={headerRef} className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="space-y-6"
          >
            {/* Elegant Tag Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#C8972B]/30 bg-[#white] shadow-sm px-4 py-2">
              <Sparkles className="h-3.5 w-3.5 text-[#C8972B]" strokeWidth={1.5} />
              <span className="font-[family-name:var(--font-heading)] text-[10px] font-semibold uppercase tracking-[0.25em] text-[#3D1F0D]">
                Studio Blueprint
              </span>
            </div>

            {/* Premium Typography Heading */}
            <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-[46px] md:text-[52px] font-normal leading-[1.08] tracking-tight text-[#3D1F0D]">
              Design that lives <br />
              <span className="text-[#C8972B]">
                with you
              </span>
              , not just in it.
            </h2>

            {/* Light Paragraph Description */}
            <p className="max-w-md font-[family-name:var(--font-body)] text-[15px] sm:text-[16px] leading-relaxed text-[#6B6B6B] font-light">
              Living Space Decor brings together seasoned designers, a proven
              architectural blueprint, and an uncompromising eye for detail — so every room we refine feels considered, never decorated.
            </p>

            {/* Premium Light Framing Editorial Image */}
            <div className="relative hidden lg:block aspect-[16/10] w-full max-w-md overflow-hidden rounded-xl border border-[#3D1F0D]/5 bg-white p-2 shadow-xl group/img mt-8">
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop"
                  alt="Living Space Decor studio master layout design showcase"
                  fill
                  sizes="450px"
                  className="object-cover opacity-95 transition-transform duration-700 ease-out group-hover/img:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D1F0D]/40 via-transparent to-transparent" />
              </div>
              
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between z-10">
                <div className="space-y-0.5">
                  <p className="font-[family-name:var(--font-heading)] text-[10px] uppercase tracking-[0.25em] text-[#C8972B] font-semibold">
                    // Current Execution
                  </p>
                  <p className="font-[family-name:var(--font-body)] text-xs text-white font-light">
                    Full Estate Makeover, Greater Noida
                  </p>
                </div>
                <div className="h-8 w-8 rounded-full border border-white/20 bg-[#3D1F0D] text-[#F5EBE0] flex items-center justify-center group-hover/img:bg-[#C8972B] group-hover/img:text-[#3D1F0D] transition-colors duration-300">
                  <MoveRight size={14} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ─── RIGHT CARDS FEED (2x2 GRID RESPONSIVE) ─── */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}