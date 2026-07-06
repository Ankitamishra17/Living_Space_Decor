"use client";

/**
 * LATEST / UPCOMING PROJECTS — 4-card row section
 * Stack: Next.js (App Router) + Tailwind + JS
 *
 * Palette:
 * Espresso Brown #3D1F0D  – primary brand / dark text
 * Warm Gold      #C8972B  – luxury accent
 * Warm Cream     #F5EBE0  – page background
 * Linen Beige    #F0E6D8  – card meta background
 * Charcoal       #2C2C2C  – paragraph text
 * Medium Gray    #6B6B6B  – secondary text
 * Pure White     #FFFFFF  – card surface
 *
 * Fonts:
 * Fraunces (display) + Inter (body) + JetBrains Mono (labels)
 */

const PROJECTS = [
  {
    id: "01",
    title: "Modular Kitchen Design",
 
    img: "/image/kitchen_design12.jpeg",
    alt: "Premium modular kitchen with under-cabinet accent lighting",
  },
  {
    id: "02",
    title: "Kids Room Design",
  
    img: "/image/kids_room4.jpeg",
    alt: "Warmly lit modern kids room interior",
  },
  {
    id: "03",
    title: "Dining Room Design",
    img: "/image/dining_room1.jpeg",
    alt: "Elegant dining room with warm cove accent lighting",
  },
  {
    id: "04",
    title: "Wardrobe Design",
    img: "/image/wardrobe_design.jpeg",
    alt: "Luxury wardrobe room with LED profile lighting",
  },
];

export default function ProjectsSection() {
  return (
    <section className="relative bg-[#F5EBE0] py-24 px-6 sm:px-10 lg:px-16 selection:bg-[#3D1F0D] selection:text-[#F5EBE0]">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,500;9..144,600&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap");
        .font-display {
          font-family: "Fraunces", serif;
          font-optical-sizing: auto;
        }
        .font-body {
          font-family: "Inter", sans-serif;
        }
        .font-mono {
          font-family: "JetBrains Mono", monospace;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#C8972B] block">
              // Upcoming Projects
            </span>
            <h2 className="font-display text-4xl sm:text-5xl mt-3 leading-[1.1] text-[#3D1F0D] tracking-tight">
              Our Latest Project
            </h2>
          </div>
          <p className="font-body text-[#6B6B6B] max-w-sm text-sm sm:text-base leading-relaxed">
            A look at spaces we're currently wiring, lighting and finishing to a
            premium luxury standard.
          </p>
        </div>

        {/* Cards Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PROJECTS.map((p) => (
            <div
              key={p.id}
              className="h-[min(120vw,480px)] w-full [perspective:1000px] xs:h-[min(110vw,520px)] sm:h-[clamp(440px,55vw,560px)] lg:h-[clamp(420px,45vw,500px)] group"
            >
              {/* Outer Card Shell with 3D Depth Treatment */}
              <div className="relative h-full w-full overflow-hidden rounded-2xl border border-[#3D1F0D]/5 bg-white shadow-[0_15px_35px_-15px_rgba(61,31,13,0.15)] [transform-style:preserve-3d] transition-all duration-500 ease-out group-hover:shadow-[0_25px_50px_-12px_rgba(61,31,13,0.3)] group-hover:[transform:rotateX(2deg)_rotateY(-2deg)_translateZ(5px)]">
                {/* Background Image Layer */}
                <img
                  className="block h-full w-full object-cover opacity-[0.9] transition-transform duration-700 ease-out [transform:translateZ(0px)] group-hover:scale-105"
                  src={p.img}
                  alt={p.alt}
                  loading="lazy"
                />

                {/* Smooth Gradient Screen Matrix Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(61,31,13,0.95)_0%,rgba(61,31,13,0.4)_50%,rgba(61,31,13,0.05)_100%)] mix-blend-multiply opacity-90" />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(61,31,13,0.92)_0%,rgba(61,31,13,0.2)_60%,transparent_100%)]" />

                {/* Top Fine Border Line Decorator */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-[linear-gradient(to_right,transparent,#C8972B,transparent)] opacity-70" />

                {/* Floating Meta Details Container Panel with Z-Axis displacement */}
                <div className="absolute inset-x-0 bottom-0 px-5 pb-6 pt-16 [transform:translateZ(40px)] sm:px-6 sm:pb-7">
                  {/* Tag Token */}
                  

                  {/* Title */}
                  <h3 className="font-display text-2xl tracking-wide text-white leading-tight">
                    {p.title.trim()}
                  </h3>
                </div>

                {/* Oversized Background Watermark ID with Z-Axis elevation */}
                <span className="font-display pointer-events-none absolute right-5 top-2 select-none text-[55px] font-semibold leading-none tracking-tighter text-[#F5EBE0]/15 [transform:translateZ(20px)] transition-all duration-500 group-hover:text-[#C8972B]/25 sm:text-[65px] md:text-[75px]">
                  {p.id}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
