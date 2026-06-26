"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const testimonials = [
  {
    name: "Priya & Rahul Sharma",
    role: "Home Owner, New Delhi",
    review:
      "They transformed our house into a home beyond imagination. Every detail was perfectly executed.",
  },
  {
    name: "Sunita Kapoor",
    role: "Homeowner, Mumbai",
    review:
      "Our kitchen is now the heart of our home. Cooking has never felt this luxurious.",
  },
  {
    name: "Anil Mehta",
    role: "Villa Owner, Bangalore",
    review:
      "Our dream home became a reality. The team understood our vision perfectly from day one.",
  },
  {
    name: "Vikram Gupta",
    role: "Homeowner, Gurgaon",
    review:
      "Zero stress, complete transformation. They handled everything from start to finish brilliantly.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const radius = 90;

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#F7F2EB] overflow-hidden">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 mb-12 md:mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="flex items-center gap-3 text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-[#C8972B] font-medium">
                <span className="w-6 h-px bg-[#C8972B]" />
                Client Stories
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-heading text-[34px] sm:text-[44px] md:text-[56px] lg:text-[64px] font-medium text-[#2A1506] leading-[1.05]"
            >
              Words From
              <br />
              <span className="text-[#C8972B]">Our Clients</span>
            </motion.h2>

            <motion.div
              initial={{ x: -200, width: 0 }}
              whileInView={{ x: 0, width: 60 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: "easeOut",
              }}
              className="h-[2px] bg-[#C8972B] mt-5 rounded-full"
            />
          </div>

          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 border border-[#3D1F0D]/30 text-[#3D1F0D] px-6 py-3 text-[11px] font-semibold uppercase tracking-[.12em] hover:bg-[#3D1F0D] hover:text-white transition-colors self-start lg:self-auto"
          >
            View Portfolio
          </Link>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT SIDE */}
        <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] mx-auto">
          {testimonials.map((item, index) => {
            const angle = (index / testimonials.length) * 2 * Math.PI;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            return (
              <motion.div
                key={index}
                className={`
                  absolute
                  top-1/2
                  left-1/2
                  w-16
                  h-16
                  sm:w-20
                  sm:h-20
                  rounded-full
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                  shadow-lg
                  transition-all
                  duration-300
                  font-heading
                  text-xl
                  sm:text-2xl
                  font-semibold
                  ${
                    active === index
                      ? "bg-[#C8972B] text-white scale-110"
                      : "bg-white text-[#3D1F0D] border border-[#C8972B]/20"
                  }
                `}
                style={{
                  marginLeft: "-2rem",
                  marginTop: "-2rem",
                }}
                animate={{
                  x,
                  y,
                }}
                transition={{ duration: 0.5 }}
                onClick={() => setActive(index)}
              >
                {item.name.charAt(0)}
              </motion.div>
            );
          })}

          {/* CENTER CIRCLE */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-[#C8972B]/10 border border-[#C8972B]/20 flex items-center justify-center">
              <span className="text-[#C8972B] text-4xl">❝</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-[#C8972B]/15 p-6 sm:p-8 md:p-10 shadow-md"
        >
          {/* STARS */}
          <div className="flex gap-1 mb-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-[#C8972B] text-sm">
                ★
              </span>
            ))}
          </div>

          {/* REVIEW */}
          <p className="text-[#2A1506]/80 leading-relaxed italic font-heading text-xl sm:text-2xl mb-8">
            "{testimonials[active].review}"
          </p>

          {/* AUTHOR */}
          <div className="flex items-center gap-4 border-t border-[#C8972B]/10 pt-5">
            <div
              className="
                w-12
                h-12
                rounded-full
                bg-[#C8972B]
                text-white
                flex
                items-center
                justify-center
                font-heading
                text-lg
                font-semibold
              "
            >
              {testimonials[active].name.charAt(0)}
            </div>

            <div>
              <h3 className="font-medium text-[#2A1506] text-sm sm:text-base">
                {testimonials[active].name}
              </h3>

              <p className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#6E6258] mt-1">
                {testimonials[active].role}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <section className="bg-[#F5EBE0] py-20 mt-16">
        <div className="max-w-4xl mx-auto text-center px-5">
          <h2 className="text-4xl font-bold">
            Looking for Interior Designers in Noida
          </h2>

          <p className="mt-5 text-gray-600">
            Book a free consultation today and transform your dream home with
            Living Space Decor.
          </p>

          <a
            href="tel:+918826606869"
            className="inline-block mt-8 bg-[#3D1F0D] text-white px-8 py-4 rounded hover:bg-[#B8851F] transition"
          >
            Call Now
          </a>
        </div>
      </section>
    </section>
  );
}
