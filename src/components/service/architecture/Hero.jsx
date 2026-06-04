// "use client";

// import HoverButton from "./HoverButton";

// export default function Hero() {
//   return (
//     <section
//       className="relative min-h-screen flex items-center justify-center overflow-hidden"
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/45" />

//       {/* Content */}
//       <div className="relative z-10 text-center px-6 max-w-6xl">
//         <span className="uppercase tracking-[0.5em] text-[#C8972B] text-sm">
//           Architecture Services
//         </span>

//         <h1
//           className="mt-6 text-white leading-none font-serif
//           text-6xl md:text-7xl lg:text-8xl"
//         >
//           Building <span className="italic text-[#C8972B]">Timeless</span>{" "}
//           Legacies
//         </h1>

//         <p className="mt-8 text-white/90 text-lg md:text-xl">
//           Shaped by a legacy of excellence in thoughtful design
//         </p>

//         <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">
//           <HoverButton primary>OUR SERVICES</HoverButton>

//           <HoverButton>VIEW PROJECTS</HoverButton>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ArchitectureHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen h-screen pt-40 pb-28 overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000'"
          alt="Luxury Architecture"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* ── Overlay ── */}
      <div className="absolute inset-0 bg-[#1F0E04]/70" />

      {/* Animated Decorative Elements - Right */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-1/2 right-8 z-[4] w-1 h-32 bg-gradient-to-b from-transparent via-[#C8972B] to-transparent"
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 w-full ">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center space-y-8"
        >
          {/* BREADCRUMB */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C8972B] mb-6"
          >
            <span>Service</span>
            <span className="text-white/40">/</span>
            <span className="text-white">Architecture</span>
          </motion.div>

          {/* Main Heading - Word by Word */}
          <motion.div variants={itemVariants} className="mb-4">
            <h1 className="font-heading text-5xl md:text-5xl lg:text-6xl leading-[1.2] text-white tracking-tight">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="block"
              >
                Building Legacies
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="block text-[#C8972B] font-heading "
              >
                Design In Noida
              </motion.span>
            </h1>
          </motion.div>

          {/* Decorative Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 origin-center"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C8972B]" />
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-[#C8972B] rounded-full"
            />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C8972B]" />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="max-w-3xl mx-auto text-md md:text-md leading-relaxed text-[#acaaaa] font-light"
          >
            Shaped by a legacy of excellence in thoughtful design
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-5 justify-center pt-6"
          >
            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: "#B8852F" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="px-10 py-4 bg-[#C8972B] rounded-md text-white uppercase tracking-[0.15em] text-sm  hover:bg-[#B8852F] transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                Our Services
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="px-10 py-4 border-2 rounded-md border-[#C8972B] text-[#C8972B] uppercase tracking-[0.15em] text-sm  hover:bg-[#C8972B]/10 transition-all duration-300"
            >
              View Projects
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Bottom Accent Line - Animated */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 h-px bg-gradient-to-r from-transparent via-[#C8972B]/50 to-transparent origin-center"
        />
      </div>
    </section>
  );
}

