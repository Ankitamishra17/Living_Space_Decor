"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import Step1BHK from "./Step1BHK";
import Step2Rooms from "./Step2Rooms";
import Step3Style from "./Step3Style";
import Step4Result from "./Step4Result";


export default function CostCalculator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    bhk: "",
    rooms: [],
    style: "",
    name: "",
    phone: "",
    email: "",
    whatsappUpdates: true,
  });

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
  };

  return (
    <section className="relative min-h-screen py-12 md:py-24 overflow-hidden">
  {/* Banner Background */}
  <div
    className="absolute inset-0 -z-30 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('/lsd_images/52.png')",
    }}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 -z-20 bg-black/60" />

  

      {/* Animated Orbs */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <motion.div
          className="absolute top-32 left-10 w-96 h-96 bg-[#C8972B]/10 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 right-10 w-80 h-80 bg-[#8B6B4A]/8 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center justify-center gap-2 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />

            <p className="text-[10px] uppercase tracking-[.3em] text-[#D4AF37] font-semibold">
              Smart Estimation Tool
            </p>

            <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
          </motion.div>

        <h2 className="font-[Cormorant_Garamond,serif] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] mb-6">
          Plan Your Interior
          <br />
          <span className="block text-[#D4AF37]">
            Investment Today
          </span>
        </h2>

        <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
          Answer just 4 questions and receive a personalized budget estimate
          tailored to your home, preferences, and style.
        </p>
      </motion.div>

        {/* Calculator Container */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Premium Border Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#C8972B]/0 via-[#C8972B]/20 to-[#C8972B]/0 rounded-[40px] blur-xl opacity-30" />

          {/* Main Card Container */}
            <div className="relative bg-transparent backdrop-blur-xl rounded-[28px] md:rounded-[40px]
            shadow-[0_30px_80px_rgba(0,0,0,0.35)]
            border border-white/20 overflow-hidden">           
             {/* Header Accent Line */}
            <div className="h-1 bg-gradient-to-r from-[#C8972B] via-[#C8972B]/60 to-transparent" />

            {/* Content Wrapper */}
            <div className="p-8 sm:p-10 md:p-12 lg:p-14">
            
             

              {/* Step Header with Icon and Title */}
              <motion.div
                key={`header-${step}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-10 flex items-start gap-6"
              >
                {/* Step Indicator */}
                <motion.div
                  className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#C8972B] to-[#A0762E] flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="font-[Cormorant_Garamond,serif] text-2xl font-semibold text-white">
                    {step}
                  </span>
                </motion.div>

                {/* Title */}
                <div className="flex-1">
                  <p className="text-[11px] uppercase tracking-[.16em] text-[#C8972B] font-semibold mb-2">
                    Step {step} / 4
                  </p>
                  <h3 className="font-[Cormorant_Garamond,serif] text-3xl md:text-4xl font-medium text-[#f9f3ee]">
                    {step === 1 && "What's your home type?"}
                    {step === 2 && "Select your rooms"}
                    {step === 3 && "Choose your design style"}
                    {step === 4 && "Your budget is ready!"}
                  </h3>
                </div>
              </motion.div>

              {/* Form Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="min-h-[380px] md:min-h-[450px]"
                >
                  {step === 1 && (
                    <Step1BHK
                      formData={formData}
                      setFormData={setFormData}
                      next={() => setStep(2)}
                    />
                  )}

                  {step === 2 && (
                    <Step2Rooms
                      formData={formData}
                      setFormData={setFormData}
                      next={() => setStep(3)}
                      back={() => setStep(1)}
                    />
                  )}

                  {step === 3 && (
                    <Step3Style
                      formData={formData}
                      setFormData={setFormData}
                      next={() => setStep(4)}
                      back={() => setStep(2)}
                    />
                  )}

                  {step === 4 && (
                    <Step4Result
                      formData={formData}
                      setFormData={setFormData}
                      back={() => setStep(3)}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer Accent Line */}
            <div className="h-1 bg-gradient-to-l from-[#C8972B] via-[#C8972B]/60 to-transparent" />
          </div>
        </motion.div>

        {/* Information Banner */}
        <motion.div
          className="mt-12 mx-auto max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="p-6 rounded-2xl bg-gradient-to-r from-[#C8972B]/8 to-[#8B6B4A]/8 border border-[#C8972B]/20 backdrop-blur-sm">
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full bg-[#C8972B] flex items-center justify-center text-white text-xs font-semibold">
                  ✓
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-[#2A1506] mb-1">
                  What to expect next?
                </p>
                <p className="text-xs text-[#ece6e1] leading-relaxed">
                  Your estimate will be delivered instantly. An interior design
                  specialist will reach out within 24 hours to discuss your
                  project in detail and provide a customized proposal.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        
      </div>
    </section>
  );
}
