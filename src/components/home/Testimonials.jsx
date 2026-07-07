"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Phone, MessageCircle, Clock } from "lucide-react";

const testimonials = [
  {
    name: "Aditi Kaptiyal",
    role: "Homeowner, Gurgaon",
    review:
      "I had a wonderful experience with Living Space Build and Design. From start to finish, the team was professional, friendly, and very attentive to what I wanted. They really listened to my ideas and gave helpful suggestions that made the design even better.",
  },
  {
    name: "VISHU YT",
    role: "Homeowner, Gurgaon",
    review:
      "Best interior shop and best quality products and good coordination, amazing team work.",
  },
  {
    name: "Aakanksha Singh",
    role: "Homeowner, Gurgaon",
    review:
      "This company did a wonderful job, beyond my expectation, you can choose this company without having a second thought.",
  },
  {
    name: "SHOURYA",
    role: "Homeowner, Gurgaon",
    review: "Wonderful services and great designs. Timely services provided!!",
  },
  {
    name: "Dipanshu Rawat",
    role: "Homeowner, Gurgaon",
    review: "Wonderful services and great designs. Timely services provided!!",
  },
  {
    name: "Aman Haldar",
    role: "Homeowner, Gurgaon",
    review:
      "My experience was very good, and good service provided by Living Space Build and Design.",
  },
  {
    name: "Deepak Bainsla",
    role: "Homeowner, Gurgaon",
    review:
      "Awesome work done by their team at my home. #bestinteriordesigner in Noida",
  },
  {
    name: "Grisha Bhardwaj",
    role: "Homeowner, Gurgaon",
    review:
      "I really liked the collection at this shop. Prices are reasonable and the service is friendly.",
  },
  {
    name: "Vanz",
    role: "Homeowner, Gurgaon",
    review: "Amazing experience! Worth trying!",
  },
  {
    name: "Mohmd Shehwaz",
    role: "Homeowner, Gurgaon",
    review: "Best in terms of everything in their work.",
  },
];

const AUTOPLAY_MS = 5000;

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [googleData, setGoogleData] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const dragStartX = useRef(0);
  const dragging = useRef(false);

  useEffect(() => {
    const fetchGoogleData = async () => {
      try {
        const res = await fetch("/api/google-reviews");
        const data = await res.json();
        setGoogleData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGoogleData();
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setDirection(1);
      setActive((prev) => (prev + 1) % testimonials.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goTo = (index) => {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  };

  const goNext = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDragStart = (e) => {
    dragging.current = true;
    dragStartX.current = e.touches ? e.touches[0].clientX : e.clientX;
    setIsPaused(true);
  };

  const handleDragEnd = (e) => {
    if (!dragging.current) return;
    dragging.current = false;
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const delta = endX - dragStartX.current;
    if (delta > 50) goPrev();
    else if (delta < -50) goNext();
  };

  const current = testimonials[active];

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#F7F2EB] overflow-hidden">
      {/* HEADER */}
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center mb-10 md:mb-14">
        <p className="flex items-center justify-center gap-3 text-[10px] tracking-[.28em] uppercase text-[#C8972B] font-medium mb-3">
          <span className="w-6 h-px bg-[#C8972B]" />
          Client Stories
          <span className="w-6 h-px bg-[#C8972B]" />
        </p>
        <h2 className="font-heading text-4xl md:text-[46px] font-medium leading-[1.1] text-[#2A1506]">
          Loved by Homeowners{" "}
          <em className="text-[#C8972B] not-italic">Across NCR</em>
        </h2>

        {googleData ? (
          <div className="mt-8 inline-flex items-center gap-3 bg-white border border-[#C8972B]/20 rounded-full px-6 py-3 shadow-sm">
            <span className="text-[#C8972B] text-2xl font-bold">
              {googleData.rating}
            </span>
            <div className="text-left">
              <div className="text-[#C8972B] text-sm leading-none">★★★★★</div>
              <p className="text-[11px] text-[#6E6258] mt-1">
                {googleData.userRatingCount} Google Reviews
              </p>
            </div>
          </div>
        ) : (
          <div className="mt-8 inline-flex items-center gap-2 text-[#C8972B]">
            <span className="text-base">★★★★★</span>
            <span className="text-[11px] tracking-[0.15em] uppercase text-[#6E6258]">
              5-Star Rated Service
            </span>
          </div>
        )}
      </div>

      {/* SINGLE BIG CARD */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div
          className="relative select-none"
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onMouseLeave={() =>
            dragging.current && handleDragEnd({ clientX: dragStartX.current })
          }
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
          onMouseEnter={() => setIsPaused(true)}
        >
          {/* Prev / Next arrows — desktop */}
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={goPrev}
            className="hidden sm:flex items-center justify-center absolute -left-5 md:-left-14 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-[#3D1F0D]/15 text-[#3D1F0D] shadow-sm hover:bg-[#3D1F0D] hover:text-white transition-colors duration-300"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={goNext}
            className="hidden sm:flex items-center justify-center absolute -right-5 md:-right-14 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-[#3D1F0D]/15 text-[#3D1F0D] shadow-sm hover:bg-[#3D1F0D] hover:text-white transition-colors duration-300"
          >
            <ChevronRight size={18} />
          </button>

          <div className="relative overflow-hidden bg-white border border-[#C8972B]/15 shadow-md rounded-xl px-6 py-10 sm:px-10 sm:py-12 md:px-16 md:py-14 min-h-[360px] sm:min-h-[340px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full text-center"
              >
                {/* Quote mark */}
                <div className="mx-auto mb-5 w-14 h-14 rounded-full bg-[#C8972B]/10 border border-[#C8972B]/20 flex items-center justify-center">
                  <span className="text-[#C8972B] text-3xl leading-none">
                    ❝
                  </span>
                </div>

                {/* Stars — every review is 5-star */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-[#C8972B] text-base">
                      ★
                    </span>
                  ))}
                </div>

                {/* Review */}
                <p className="font-heading italic text-[#2A1506]/85 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
                  "{current.review}"
                </p>

                {/* Author */}
                <div className="flex flex-col items-center gap-3 mt-8 pt-6 border-t border-[#C8972B]/10 max-w-xs mx-auto">
                  <div className="w-12 h-12 rounded-full bg-[#C8972B] text-white flex items-center justify-center font-heading text-lg font-semibold">
                    {current.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-medium text-[#2A1506] text-sm sm:text-base">
                      {current.name}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#6E6258] mt-1">
                      {current.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8 flex-wrap px-4">
          {testimonials.map((t, index) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Show testimonial from ${t.name}`}
              onClick={() => {
                goTo(index);
                setIsPaused(true);
              }}
              className={`h-[6px] rounded-full transition-all duration-300 ${
                active === index
                  ? "w-6 bg-[#C8972B]"
                  : "w-[6px] bg-[#3D1F0D]/20 hover:bg-[#3D1F0D]/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* CTA — redesigned */}
      <div className="mt-16 md:mt-20 px-5">
        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden bg-[#3D1F0D]">
          {/* Decorative accents */}
          <div className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#C8972B]/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 w-56 h-56 rounded-full bg-white/5 blur-3xl" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, #F7F2EB 0px, #F7F2EB 1px, transparent 1px, transparent 14px)",
            }}
          />

          <div className="relative flex flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-0 px-6 py-12 sm:px-12 sm:py-14 lg:px-16">
            {/* Left: message */}
            <div className="flex-1 text-center lg:text-left">
              <p className="flex items-center justify-center lg:justify-start gap-3 text-[10px] tracking-[.28em] uppercase text-[#C8972B] font-medium mb-4">
                <span className="w-6 h-px bg-[#C8972B]" />
                Start Your Project
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-medium text-white leading-[1.15]">
                Looking for Interior Designers in Noida?
              </h2>
              <p className="mt-4 text-white/60 text-[15px] leading-relaxed max-w-md mx-auto lg:mx-0">
                Book a free consultation today and transform your dream home
                with Living Space Decor.
              </p>

              <div className="mt-7 flex items-center justify-center lg:justify-start gap-2 text-white/50 text-[12px]">
                <Clock size={14} className="text-[#C8972B]" />
                <span>Mon – Sun, 10:00 AM – 7:00 PM</span>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px bg-white/10 mx-4" />

            {/* Right: actions */}
            <div className="flex flex-col justify-center gap-4 w-full lg:w-auto lg:min-w-[280px]">
              <a
                href="tel:+918826606869"
                className="group flex items-center justify-between gap-4 bg-[#C8972B] text-[#2A1506] px-6 py-4 rounded-xl hover:bg-[#dba838] transition-colors duration-300"
              >
                <span className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#2A1506]/10">
                    <Phone size={16} />
                  </span>
                  <span className="text-left">
                    <span className="block text-[13px] tracking-[0.08em] uppercase font-medium">
                      Call Now
                    </span>
                    <span className="block text-[11px] opacity-70">
                      +91 88266 06869
                    </span>
                  </span>
                </span>
                <ChevronRight
                  size={16}
                  className="opacity-60 group-hover:translate-x-1 transition-transform duration-300"
                />
              </a>

              <a
                href="https://wa.me/918826606869"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 bg-white/5 border border-white/15 text-white px-6 py-4 rounded-xl hover:bg-white/10 transition-colors duration-300"
              >
                <span className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10">
                    <MessageCircle size={16} />
                  </span>
                  <span className="text-left">
                    <span className="block text-[13px] tracking-[0.08em] uppercase font-medium">
                      WhatsApp Us
                    </span>
                    <span className="block text-[11px] opacity-60">
                      Get a quick reply
                    </span>
                  </span>
                </span>
                <ChevronRight
                  size={16}
                  className="opacity-40 group-hover:translate-x-1 transition-transform duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}