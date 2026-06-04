"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

/* ─── WhatsApp CTA config ─── */
const WHATSAPP_NUMBER = "919999999999"; // ← replace with real number
const WHATSAPP_MESSAGE = (name) =>
  encodeURIComponent(
    `Hi! I'm interested in discussing a project similar to "${name}". Can we connect?`,
  );

/* ─── Lightbox ─── */
function Lightbox({ images, current, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-[#3D1F0D]/95 flex items-center justify-center backdrop-blur-lg"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Close */}
      <motion.button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/60 hover:text-[#C8972B] transition-colors z-10"
        aria-label="Close"
        whileHover={{ scale: 1.1 }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M8 8L24 24M24 8L8 24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </motion.button>

      {/* Counter */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-[0.3em] uppercase font-light">
        {current + 1} / {images.length}
      </div>

      {/* Prev */}
      <motion.button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 md:left-10 text-white/50 hover:text-[#C8972B] transition-colors"
        aria-label="Previous"
        whileHover={{ scale: 1.15, x: -4 }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
            d="M25 8L13 20L25 32"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>

      {/* Image */}
      <div
        className="relative w-full max-w-5xl mx-16 md:mx-24"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div
          className="relative aspect-[4/3] md:aspect-[16/9]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={images[current]}
            alt={`Gallery image ${current + 1}`}
            fill
            className="object-contain"
            sizes="90vw"
          />
        </motion.div>
      </div>

      {/* Next */}
      <motion.button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 md:right-10 text-white/50 hover:text-[#C8972B] transition-colors"
        aria-label="Next"
        whileHover={{ scale: 1.15, x: 4 }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
            d="M15 8L27 20L15 32"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>

      {/* Thumbnail strip */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 max-w-xs md:max-w-lg overflow-x-auto px-4">
        {images.map((img, i) => (
          <motion.button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={`relative flex-shrink-0 w-12 h-9 overflow-hidden transition-all duration-300 border ${
              i === current
                ? "ring-2 ring-[#C8972B] opacity-100 border-[#C8972B]"
                : "opacity-30 hover:opacity-60 border-white/20"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={img}
              alt=""
              fill
              className="object-cover"
              sizes="48px"
            />
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── Main Page ─── */
export default function ProjectDetail({ project }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Merge hero into gallery for lightbox
  const allImages = project.gallery?.length ? project.gallery : [project.image];

  const openLightbox = (i) => {
    setActiveIndex(i);
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);
  const prevImage = useCallback(
    () => setActiveIndex((p) => (p - 1 + allImages.length) % allImages.length),
    [allImages.length],
  );
  const nextImage = useCallback(
    () => setActiveIndex((p) => (p + 1) % allImages.length),
    [allImages.length],
  );

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE(project.name)}`;

  const stats = [
    { label: "Location", value: project.location },
    { label: "Size", value: project.area || project.bhk },
    { label: "Style", value: project.style || "Contemporary" },
    { label: "Year", value: project.year || "2024" },
    { label: "Duration", value: project.duration || "4 months" },
  ].filter((s) => s.value);

  return (
    <>
      {lightboxOpen && (
        <Lightbox
          images={allImages}
          current={activeIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}

      <main className="bg-gradient-to-b from-[#F5EBE0] via-[#FAF7F2] to-white text-[#3D1F0D] min-h-screen">
        {/* ── Hero ── */}
        <section className="relative h-[75vh] min-h-[520px] overflow-hidden bg-white">
          <Image
            src={project.image}
            alt={project.name}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* refined gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#F5EBE0] via-[#3D1F0D]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5EBE0]/40 via-transparent to-transparent" />

          {/* Breadcrumb */}
          <motion.nav
            className="absolute top-8 left-8 md:left-16 flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#3D1F0D]/60"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="hover:text-[#C8972B] transition">
              Home
            </Link>
            <span>/</span>
            <Link href="/portfolio" className="hover:text-[#C8972B] transition">
              Portfolio
            </Link>
            <span>/</span>
            <span className="text-[#C8972B] font-semibold">{project.name}</span>
          </motion.nav>

          {/* Hero text */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-14 bg-gradient-to-t from-[#F5EBE0] via-[#F5EBE0]/80 to-transparent pt-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-[#C8972B] text-xs tracking-[0.4em] uppercase mb-3 font-semibold">
              Interior Project
            </p>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-4 max-w-3xl text-[#3D1F0D]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {project.name}
            </h1>
            <p className="text-[#3D1F0D]/60 text-sm tracking-widest uppercase font-light">
              {project.location} {project.bhk ? `• ${project.bhk}` : ""}
            </p>
          </motion.div>
        </section>

        {/* ── Stats Bar ── */}
        <section className="border-b border-[#C8972B]/20 bg-white/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-8 md:px-16 py-8 grid grid-cols-2 md:grid-cols-5 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="flex flex-col gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8972B] font-semibold">
                  {s.label}
                </span>
                <span className="text-[#3D1F0D] text-sm font-light">
                  {s.value}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Description + Highlights ── */}
        <section className="max-w-7xl mx-auto px-8 md:px-16 py-20 grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#C8972B] mb-5 font-semibold">
              About This Project
            </p>
            <p
              className="text-[#3D1F0D]/70 leading-[1.9] text-lg font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {project.description ||
                "A thoughtfully designed space that balances aesthetic beauty with everyday functionality, crafted with meticulous attention to detail and the finest materials."}
            </p>
          </motion.div>

          {project.highlights?.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#C8972B] mb-8 font-semibold">
                Project Highlights
              </p>
              <ul className="space-y-5">
                {project.highlights.map((h, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-4 text-[#3D1F0D]/60 text-sm leading-relaxed"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <span className="mt-2 w-6 h-px bg-gradient-to-r from-[#C8972B] to-[#C8972B]/30 flex-shrink-0" />
                    <span>{h}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </section>

        {/* ── Gallery ── */}
        {allImages.length > 1 && (
          <section className="max-w-7xl mx-auto px-8 md:px-16 pb-20">
            <motion.p
              className="text-[10px] tracking-[0.4em] uppercase text-[#C8972B] mb-10 font-semibold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Photo Gallery
            </motion.p>

            {/* Masonry-style grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {allImages.map((img, i) => (
                <motion.button
                  key={i}
                  onClick={() => openLightbox(i)}
                  className={`relative overflow-hidden group ${
                    i === 0
                      ? "col-span-2 row-span-2 aspect-[4/3]"
                      : "aspect-square"
                  }`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src={img}
                    alt={`${project.name} — photo ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes={i === 0 ? "50vw" : "33vw"}
                  />
                  {/* hover overlay - refined */}
                  <div className="absolute inset-0 bg-[#3D1F0D]/0 group-hover:bg-[#3D1F0D]/30 transition-all duration-500 flex items-center justify-center">
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/70 rounded-full p-3 bg-white/5 backdrop-blur-sm"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M8 3H3v5M17 8V3h-5M12 17h5v-5M3 12v5h5"
                          stroke="white"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* View all hint */}
            <motion.button
              onClick={() => openLightbox(0)}
              className="mt-8 flex items-center gap-3 text-[#3D1F0D]/40 hover:text-[#C8972B] text-xs tracking-[0.3em] uppercase transition-colors font-light"
              whileHover={{ x: 8 }}
            >
              <span>View All {allImages.length} Photos</span>
              <span className="w-10 h-px bg-current" />
            </motion.button>
          </section>
        )}

        {/* ── Client Quote ── */}
        {project.clientQuote && (
          <section className="border-y border-[#C8972B]/15 bg-gradient-to-r from-[#F5EBE0]/30 via-transparent to-[#F5EBE0]/30 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto px-8 md:px-16 py-24 text-center">
              {/* decorative quote mark */}
              <motion.div
                className="text-[#C8972B]/15 text-[140px] leading-none mb-2 -mt-12 select-none"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                "
              </motion.div>
              <motion.blockquote
                className="text-2xl md:text-3xl font-light text-[#3D1F0D]/80 leading-relaxed -mt-12"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                {project.clientQuote.text}
              </motion.blockquote>
              <motion.div
                className="mt-10 flex items-center justify-center gap-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="w-12 h-px bg-gradient-to-r from-[#C8972B] to-transparent" />
                <div className="text-center">
                  <p className="text-[#3D1F0D] text-sm font-medium tracking-wider">
                    {project.clientQuote.author}
                  </p>
                  {project.clientQuote.title && (
                    <p className="text-[#3D1F0D]/40 text-xs tracking-widest uppercase mt-2 font-light">
                      {project.clientQuote.title}
                    </p>
                  )}
                </div>
                <span className="w-12 h-px bg-gradient-to-l from-[#C8972B] to-transparent" />
              </motion.div>
            </div>
          </section>
        )}

        {/* ── WhatsApp CTA ── */}
        <section className="max-w-7xl mx-auto px-8 md:px-16 py-24 text-center">
          <motion.p
            className="text-[10px] tracking-[0.4em] uppercase text-[#C8972B] mb-5 font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Start Your Project
          </motion.p>
          <motion.h2
            className="text-3xl md:text-5xl font-light text-[#3D1F0D] mb-6 max-w-2xl mx-auto leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Love What You See?
            <br />
            <span className="text-[#C8972B]">Let's Create Yours.</span>
          </motion.h2>
          <motion.p
            className="text-[#3D1F0D]/60 max-w-md mx-auto mb-12 leading-relaxed text-sm font-light"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Share your vision with us and we'll craft an interior that's
            uniquely yours — blending luxury, comfort, and timeless design.
          </motion.p>

          <motion.a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#3D1F0D] text-white px-8 py-4 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 active:scale-95 shadow-lg shadow-[#25D366]/20 hover:shadow-[0_0_40px_rgba(37,211,102,0.4)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -2 }}
          >
            
           Book Consultation
          </motion.a>

          {/* secondary: back to portfolio */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link
              href="/portfolio"
              className="text-[#3D1F0D]/40 hover:text-[#C8972B] text-xs tracking-[0.3em] uppercase transition-colors inline-flex items-center gap-2 font-light group"
            >
              <motion.svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="group-hover:-translate-x-1 transition-transform"
              >
                <path
                  d="M10 3L5 8l5 5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
              Back to Portfolio
            </Link>
          </motion.div>
        </section>
      </main>
    </>
  );
}
