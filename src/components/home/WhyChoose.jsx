"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: d,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function TrustSection() {
  return (
    <section className="bg-[#F7F2EB] overflow-hidden">
      {/* ── Container ── */}
      <div
        className="
  max-w-7xl mx-auto
  px-5 sm:px-6 md:px-10 lg:px-16
  py-16 md:py-24
  flex
  flex-col-reverse
  lg:flex-row
  items-center
  gap-12 lg:gap-24
"
      >
        {/* ── IMAGE SIDE ── */}
        <motion.div
          className="
              relative
              flex-shrink-0
              w-full
              max-w-[320px]
              sm:max-w-[420px]
              md:max-w-[500px]
              aspect-square
              lg:w-[500px]
              lg:h-[600px]
              lg:max-w-none
              mx-auto
            "
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {/* Back Outline Frame */}
          <div
            className="
            absolute
            top-3
            left-3
            lg:top-5
            lg:left-5
            w-full
            h-full
            border-2
            border-[#C8972B]/40

          rounded-t-[50px]
          rounded-bl-[50px]
          rounded-br-none
          rounded-tr-[50px]

          lg:rounded-t-full
          lg:rounded-br-full
          lg:rounded-bl-none
          "
          />

          {/* Main Image */}
          <div
            className="
      relative
      w-full
      h-full
      overflow-hidden

      rounded-t-[50px]
      rounded-bl-[50px]
      rounded-br-none
      rounded-tr-[50px]

      lg:rounded-t-full
      lg:rounded-br-full
      lg:rounded-bl-none
    "
          >
            <Image
              src="/lsd_images/18.jpg"
              alt="Luxury Interior"
              fill
              priority
              sizes="(max-width:1024px) 100vw, 500px"
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#3D1F0D]/10" />
          </div>

          {/* Decorative Stars */}
          <motion.span
            className="
              absolute
              -right-8
              top-16
              text-[#C8972B]
              text-4xl
              select-none
              hidden
              lg:block
            "
            animate={{
              rotate: [0, 180],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            ✦
          </motion.span>

          <motion.span
            className="
      absolute
      -right-4
      top-32
      text-[#3D1F0D]
      text-xl
      select-none
      hidden
      lg:block
    "
            animate={{
              rotate: [180, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            ✦
          </motion.span>
        </motion.div>

        {/* ── TEXT SIDE ── */}
        <div className="flex-1 max-w-xl text-center lg:text-left">
          <motion.p
            className="uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#C8972B] text-xs mb-5"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.1}
          >
            Why Choose Us
          </motion.p>

          <motion.h2
            className="font-[Cormorant_Garamond,serif] text-3xl sm:text-4xl md:text-5xl text-[#2A1506] leading-tight mb-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.2}
          >
            Crafting Spaces That
            <br />
            <span className="text-[#C8972B]">Inspire & Endure</span>
          </motion.h2>

          <motion.div
            className="w-12 h-px bg-[#C8972B] mb-6 mx-auto lg:mx-0"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
          />

          <motion.p
            className="text-[#6E6258] leading-[1.9] text-sm sm:text-base mb-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.35}
          >
            With over a decade of expertise, we transform living spaces into
            timeless experiences. Every project is a unique blend of elegance,
            functionality, and exceptional craftsmanship — tailored specifically
            to you.
          </motion.p>

          {/* Feature List */}
          <div className="space-y-4">
            {[
              "Bespoke designs tailored to your lifestyle",
              "Premium materials sourced globally",
              "On-time delivery with zero compromise on quality",
              "End-to-end turnkey project management",
            ].map((point, i) => (
              <motion.div
                key={point}
                className="flex items-start gap-3 text-left"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={0.4 + i * 0.1}
              >
                <span className="mt-3 w-4 h-px bg-[#C8972B] flex-shrink-0" />

                <span className="text-[#6E6258] text-sm leading-relaxed">
                  {point}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
