"use client";

import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import PortfolioHeroSection from "@/components/portfolio/PortfolioHeroSection";
import projects from "@/data/projects";
import Link from "next/link";
import Image from "next/image";

const filters = [
  { label: "All Work", value: null, count: projects.length },
  {
    label: "Interior",
    value: "interior",
    count: projects.filter((p) => p.type === "interior").length,
  },
  {
    label: "Kitchen",
    value: "kitchen",
    count: projects.filter((p) => p.type === "kitchen").length,
  },
  {
    label: "Architecture",
    value: "architecture",
    count: projects.filter((p) => p.type === "architecture").length,
  },
  {
    label: "Turnkey",
    value: "turnkey",
    count: projects.filter((p) => p.type === "turnkey").length,
  },
];

export default function PortfolioPage() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const filteredProjects = type
    ? projects.filter((p) => p.type === type)
    : projects;

  return (
    <>
      <PortfolioHeroSection />

      {/* ── Filter + Grid Section ── */}
      <section className="bg-[#F5EBE0] min-h-screen">
        {/* ── Filter Bar ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 md:pb-10">
          {/* label */}
          <motion.p
            className="text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[#C8972B] mb-4 sm:mb-6 md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Filter by Category
          </motion.p>

          {/* pills - single line on mobile, wrap on large */}
          <motion.div
            className="flex flex-nowrap lg:flex-wrap gap-2 sm:gap-2.5 md:gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {filters.map((f, i) => {
              const isActive = f.value === type;
              return (
                <Link
                  key={f.label}
                  href={f.value ? `/portfolio?type=${f.value}` : "/portfolio"}
                >
                  <motion.div
                    className={`relative flex flex-shrink-0 items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 text-[9px] sm:text-xs md:text-xs tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.2em] uppercase cursor-pointer transition-all duration-300 overflow-hidden backdrop-blur-sm
                      ${
                        isActive
                          ? "bg-[#C8972B]/95 text-white border border-[#C8972B] shadow-lg shadow-[#C8972B]/20"
                          : "bg-white/40 text-[#3D1F0D] border border-[#3D1F0D]/30 hover:bg-white/60 hover:border-[#C8972B]/50"
                      }`}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.07 }}
                  >
                    {/* active shimmer */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-white/15"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          repeatDelay: 2.5,
                        }}
                      />
                    )}
                    <span className="relative z-10 font-medium whitespace-nowrap">
                      {f.label}
                    </span>
                    {/* count badge */}
                    <span
                      className={`relative z-10 text-[8px] sm:text-[9px] px-1.5 sm:px-2 py-0.5 sm:py-1 font-semibold flex-shrink-0
                      ${isActive ? "bg-white/25 text-white" : "bg-[#3D1F0D]/15 text-[#3D1F0D]"}`}
                    >
                      {f.count}
                    </span>
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>

          {/* result count */}
          <motion.p
            className="mt-4 sm:mt-5 md:mt-6 text-[#3D1F0D]/40 text-[9px] sm:text-xs tracking-widest"
            key={type}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            Showing {filteredProjects.length} project
            {filteredProjects.length !== 1 ? "s" : ""}
          </motion.p>
        </div>

        {/* ── Project Grid ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 pb-16 sm:pb-20 md:pb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={type ?? "all"}
              className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.08,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <Link href={`/portfolio/${project.slug}`}>
                    <div className="group relative overflow-hidden bg-white/60 border border-[#3D1F0D]/10 hover:border-[#C8972B]/40 transition-all duration-500 shadow-sm hover:shadow-lg hover:shadow-[#C8972B]/10">
                      {/* image */}
                      <div className="relative overflow-hidden h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px]">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />

                        {/* hover overlay - sophisticated brown instead of black */}
                        <div className="absolute inset-0 bg-[#3D1F0D]/0 group-hover:bg-[#3D1F0D]/35 transition-all duration-500 backdrop-blur-0 group-hover:backdrop-blur-sm" />

                        {/* type badge */}
                        <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 px-2 sm:px-3 py-1 sm:py-1.5 bg-white/80 backdrop-blur-md border border-[#C8972B]/30 text-[8px] sm:text-[9px] md:text-[9px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[#3D1F0D] font-semibold shadow-md">
                          {project.type}
                        </div>

                        {/* hover CTA */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                          <motion.div
                            className="border-2 border-[#C8972B] px-4 sm:px-6 py-2 sm:py-3 text-[#C8972B] text-[9px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase font-semibold bg-white/10 backdrop-blur-sm"
                            whileHover={{
                              backgroundColor: "rgba(200,151,43,0.2)",
                              boxShadow: "0 0 20px rgba(200,151,43,0.3)",
                            }}
                          >
                            View Project
                          </motion.div>
                        </div>
                      </div>

                      {/* info */}
                      <div className="px-3 sm:px-4 md:px-5 py-3 sm:py-4 md:py-5 flex items-start justify-between gap-3 sm:gap-4">
                        <div className="flex-1 min-w-0">
                          <h2
                            className="text-[#3D1F0D] text-sm sm:text-base md:text-lg font-medium leading-snug group-hover:text-[#C8972B] transition-colors duration-300 truncate"
                            style={{
                              fontFamily: "'Cormorant Garamond', serif",
                            }}
                          >
                            {project.name}
                          </h2>
                          <p className="text-[#3D1F0D]/50 text-[8px] sm:text-xs tracking-wider mt-1">
                            {project.location} · {project.bhk}
                          </p>
                        </div>

                        {/* arrow icon */}
                        <motion.div
                          className="flex-shrink-0 mt-1 text-[#3D1F0D]/30 group-hover:text-[#C8972B] transition-colors duration-300"
                          animate={{ x: 0 }}
                          whileHover={{ x: 4 }}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 18 18"
                            fill="none"
                            className="w-4 sm:w-[18px]"
                          >
                            <path
                              d="M3 9h12M10 4l5 5-5 5"
                              stroke="currentColor"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </motion.div>
                      </div>

                      {/* bottom gold line on hover */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#C8972B] to-[#C8972B]/30 origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.4 }}
                        style={{ width: "100%" }}
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* empty state */}
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-16 sm:py-20 md:py-24 text-[#3D1F0D]/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p
                className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                No projects found
              </p>
              <p className="text-[9px] sm:text-xs tracking-widest uppercase">
                Try a different category
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
