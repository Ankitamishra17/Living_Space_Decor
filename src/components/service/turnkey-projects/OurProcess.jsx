"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  MapPinned,
  PencilRuler,
  Wallet,
  Hammer,
  ShieldCheck,
  Home,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const processSteps = [
  {
    icon: ClipboardCheck,
    title: "Consultation",
    description:
      "Understand your requirements, preferences, budget, and project goals.",
  },
  {
    icon: MapPinned,
    title: "Site Visit",
    description:
      "Our team visits the site to assess dimensions, layout, and project scope.",
  },
  {
    icon: PencilRuler,
    title: "Design & Planning",
    description:
      "Create layouts, 3D visualizations, material selections, and design concepts.",
  },
  {
    icon: Wallet,
    title: "Quotation & Approval",
    description:
      "Present transparent pricing and project timelines for approval.",
  },
  {
    icon: Hammer,
    title: "Execution",
    description:
      "Begin civil work, carpentry, electrical, plumbing, and installations.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Inspection",
    description:
      "Perform detailed quality checks to ensure everything meets standards.",
  },
  {
    icon: Home,
    title: "Final Handover",
    description: "Deliver a fully completed, ready-to-use interior space.",
  },
];

export default function OurProcess() {
  return (
    <section
      className="relative py-10 lg:py-10 overflow-hidden"
      style={{ backgroundColor: "#F5EBE0" }}
    >
      {/* Background Accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#C8972B]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#C8972B]/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="inline-block text-xs uppercase tracking-[0.4em] text-[#C8972B] mb-5">
            Our Process
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-[#3D1F0D] leading-tight">
            How We Deliver Your
            <span className="block text-[#C8972B]">Dream Interior</span>
          </h2>

          <p className="mt-6 text-[#6B6B6B] text-lg leading-relaxed">
            A transparent, streamlined journey from concept to completion. Every
            step is carefully managed to ensure exceptional quality and a
            seamless experience.
          </p>
        </motion.div>

        {/* Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className="process-swiper"
        >
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white rounded-tl-[80px] rounded-tr-[80px] rounded-bl-[80px] rounded-br-none p-8 border border-[#C8972B]/10 shadow-sm hover:shadow-2xl transition-all duration-500 h-[380px] flex flex-col"
                >
                  {/* Number */}
                  <div className="flex items-center justify-between mb-8">
                    <span
                      className="text-6xl font-bold text-[#3D1F0D]/10"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                      }}
                    >
                      0{index + 1}
                    </span>

                    <div className="w-16 h-16 rounded-full bg-[#F5EBE0] flex items-center justify-center group-hover:bg-[#C8972B]/10 transition-all duration-300">
                      <Icon size={30} className="text-[#C8972B]" />
                    </div>
                  </div>

                  {/* Step Label */}
                  <span className="text-[11px] uppercase tracking-[0.3em] text-[#C8972B] mb-3">
                    Step {index + 1}
                  </span>

                  {/* Title */}
                  <h3 className="text-3xl font-semibold text-[#3D1F0D] mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#6B6B6B] leading-relaxed flex-grow">
                    {step.description}
                  </p>

                  {/* Bottom Line */}
                  <div className="mt-8 h-px bg-gradient-to-r from-[#C8972B] to-transparent opacity-40" />
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <button className="px-10 py-4 bg-[#3D1F0D] hover:bg-[#C8972B] text-white rounded-lg font-medium transition-all duration-300">
            Start Your Project
          </button>
        </motion.div>
      </div>

      <style jsx global>{`
        .process-swiper {
          padding-bottom: 70px;
        }

        /* Hide navigation buttons on mobile */
        .swiper-button-next,
        .swiper-button-prev {
          display: none;
          color: #c8972b !important;
        }

        /* Show navigation buttons on desktop (768px+) */
        @media (min-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        /* Style navigation buttons for desktop */
        @media (min-width: 768px) {
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 24px;
            font-weight: 700;
            color: #c8972b !important;
            transition: all 0.3s ease;
          }

          .swiper-button-next:hover::after,
          .swiper-button-prev:hover::after {
            color: #3d1f0d !important;
            transform: scale(1.1);
          }

          .swiper-button-next,
          .swiper-button-prev {
            width: 45px;
            height: 45px;
           
            border-radius: 0;
            top: 50%;
            transform: translateY(-50%);
            transition: all 0.3s ease;
          }

          

          .swiper-button-next:hover::after,
          .swiper-button-prev:hover::after {
            color: white !important;
          }

          .swiper-button-prev {
            left: -60px;
          }

          .swiper-button-next {
            right: -60px;
          }
        }

        .swiper-pagination-bullet {
          background: #c8972b !important;
          opacity: 0.4;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
