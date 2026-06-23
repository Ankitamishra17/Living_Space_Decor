"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

const processSteps = [
  {
    title: "Consultation",
    image: "https://images.pexels.com/photos/8837733/pexels-photo-8837733.jpeg",
    description:
      "Discuss requirements, lifestyle, budget, and design vision with our experts.",
  },
  {
    title: "Design",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    description:
      "Space planning, layouts, mood boards, and concept development.",
  },
  {
    title: "3D Visualization",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    description:
      "Photorealistic 3D renders to visualize your future home before execution.",
  },
  {
    title: "Material Selection",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    description:
      "Choose laminates, finishes, fabrics, lighting, and décor elements.",
  },
  {
    title: "Manufacturing",
    image: "https://images.pexels.com/photos/5691626/pexels-photo-5691626.jpeg",
    description: "Precision manufacturing of furniture and modular components.",
  },
  {
    title: "Execution",
    image: "https://images.pexels.com/photos/6474475/pexels-photo-6474475.jpeg",
    description:
      "On-site installation and execution managed by experienced professionals.",
  },
  {
    title: "Quality Check",
    image: "https://images.pexels.com/photos/8961300/pexels-photo-8961300.jpeg",
    description:
      "Multiple quality inspections ensure flawless finishing and durability.",
  },
  {
    title: "Handover",
    image: "https://images.pexels.com/photos/7578860/pexels-photo-7578860.jpeg",
    description:
      "Final walkthrough and delivery of your fully completed dream home.",
  },
];

export default function TurnkeyProcess() {
  return (
    <section className="bg-[#F5EBE0] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="bg-[#C8972B]/10 font-heading text-[#C8972B] px-4 py-2 rounded-full text-sm ">
            End-to-End Turnkey Solutions
          </span>

          <h2 className="text-4xl lg:text-5xl font-heading  text-[#3D1F0D] mt-4">
            From Concept to Handover
          </h2>
        </div>
        {/* Timeline */}
        <div className="hidden lg:flex justify-center mt-12 mb-8 flex-wrap gap-4">
          {processSteps.map((item, index) => (
            <div key={index} className="flex items-center">
              <span className="text-[#3D1F0D]  text-sm">{item.title}</span>

              {index !== processSteps.length - 1 && (
                <span className="mx-3 text-[#C8972B] text-xl">→</span>
              )}
            </div>
          ))}
        </div>

        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2,
            scale: 0.9,
            slideShadows: false,
          }}
          className="py-10"
        >
          {processSteps.map((step, index) => (
            <SwiperSlide key={index} className="!w-[300px] md:!w-[400px]">
              <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
                <div className="relative h-[300px]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 flex ">
                  <div className="w-8 h-8 mx-auto mb-4 rounded-full bg-[#C8972B] text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>

                  <h3 className="text-xl  font-heading text-[#3D1F0D]">
                    {step.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

// "use client";

// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectCoverflow } from "swiper/modules";
// import { motion } from "framer-motion";

// import "swiper/css";
// import "swiper/css/effect-coverflow";

// const processSteps = [
//   {
//     title: "Consultation",
//     image:
//       "https://images.pexels.com/photos/8837733/pexels-photo-8837733.jpeg",
//     description:
//       "Discuss requirements, lifestyle, budget, and design vision with our experts.",
//   },
//   {
//     title: "Design",
//     image:
//       "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
//     description:
//       "Space planning, layouts, mood boards, and concept development.",
//   },
//   {
//     title: "3D Visualization",
//     image:
//       "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
//     description:
//       "Photorealistic 3D renders to visualize your future home before execution.",
//   },
//   {
//     title: "Material Selection",
//     image:
//       "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
//     description:
//       "Choose laminates, finishes, fabrics, lighting, and décor elements.",
//   },
//   {
//     title: "Manufacturing",
//     image:
//       "https://images.pexels.com/photos/5691626/pexels-photo-5691626.jpeg",
//     description:
//       "Precision manufacturing of furniture and modular components.",
//   },
//   {
//     title: "Execution",
//     image:
//       "https://images.pexels.com/photos/6474475/pexels-photo-6474475.jpeg",
//     description:
//       "On-site installation and execution managed by experienced professionals.",
//   },
//   {
//     title: "Quality Check",
//     image:
//       "https://images.pexels.com/photos/8961300/pexels-photo-8961300.jpeg",
//     description:
//       "Multiple quality inspections ensure flawless finishing and durability.",
//   },
//   {
//     title: "Handover",
//     image:
//       "https://images.pexels.com/photos/7578860/pexels-photo-7578860.jpeg",
//     description:
//       "Final walkthrough and delivery of your fully completed dream home.",
//   },
// ];

// export default function TurnkeyProcess() {
//   return (
//     <section className="bg-[#F5EBE0] py-16 sm:py-20 lg:py-24">
//       <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-8 sm:mb-12 lg:mb-16"
//         >
//           <span className="inline-block bg-[#C8972B]/10 font-medium text-[#C8972B] px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm mb-3 sm:mb-4">
//             End-to-End Turnkey Solutions
//           </span>

//           <h2 className="text-2xl sm:text-3xl lg:text-5xl font-heading text-[#3D1F0D] mt-3 sm:mt-4 leading-tight">
//             From Concept to Handover
//           </h2>
//           <p className="text-[#3D1F0D]/60 text-xs sm:text-sm lg:text-base mt-3 sm:mt-4 max-w-2xl mx-auto px-2">
//             A seamless journey through 8 carefully orchestrated steps
//           </p>
//         </motion.div>

//         {/* Desktop Timeline */}
//         <div className="hidden lg:flex justify-center items-center gap-2 mb-12 flex-wrap px-4">
//           {processSteps.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: index * 0.05 }}
//               className="flex items-center gap-2"
//             >
//               <div className="flex items-center gap-2">
//                 <div className="w-6 h-6 rounded-full bg-[#C8972B] text-white text-xs font-bold flex items-center justify-center">
//                   {index + 1}
//                 </div>
//                 <span className="text-[#3D1F0D]/75 text-xs font-medium whitespace-nowrap">
//                   {item.title}
//                 </span>
//               </div>

//               {index !== processSteps.length - 1 && (
//                 <span className="text-[#C8972B]/40 text-lg mx-1">→</span>
//               )}
//             </motion.div>
//           ))}
//         </div>

//         {/* Mobile Steps List */}
//         <div className="lg:hidden mb-6 sm:mb-8 flex flex-col gap-2 sm:gap-2.5 max-w-md mx-auto px-2">
//           {processSteps.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: -10 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ delay: index * 0.04 }}
//               className="flex items-center gap-2 sm:gap-3"
//             >
//               <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#C8972B] text-white text-xs sm:text-sm font-bold flex items-center justify-center flex-shrink-0">
//                 {index + 1}
//               </div>
//               <span className="text-[#3D1F0D]/75 text-xs sm:text-sm font-medium">
//                 {item.title}
//               </span>
//             </motion.div>
//           ))}
//         </div>

//         {/* Carousel */}
//         <Swiper
//           modules={[Autoplay, EffectCoverflow]}
//           effect="coverflow"
//           centeredSlides={true}
//           slidesPerView="auto"
//           loop={true}
//           speed={1000}
//           autoplay={{
//             delay: 3500,
//             disableOnInteraction: false,
//           }}
//           coverflowEffect={{
//             rotate: 0,
//             stretch: 0,
//             depth: 100,
//             modifier: 1.5,
//             scale: 0.85,
//             slideShadows: false,
//           }}
//           className="py-6 sm:py-10 lg:py-12 px-2 sm:px-0"
//           breakpoints={{
//             320: {
//               slidesPerView: 1,
//               spaceBetween: 12,
//               centeredSlides: true,
//             },
//             480: {
//               slidesPerView: 1.15,
//               spaceBetween: 14,
//               centeredSlides: true,
//             },
//             640: {
//               slidesPerView: 1.4,
//               spaceBetween: 18,
//               centeredSlides: true,
//             },
//             1024: {
//               slidesPerView: "auto",
//               spaceBetween: 28,
//               centeredSlides: true,
//             },
//           }}
//         >
//           {processSteps.map((step, index) => (
//             <SwiperSlide
//               key={index}
//               className="!w-[280px] sm:!w-[320px] lg:!w-[380px]"
//             >
//               <motion.div
//                 whileHover={{ y: -6 }}
//                 transition={{ duration: 0.3 }}
//                 className="group h-full"
//               >
//                 <div className="overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl bg-white shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
//                   {/* Image Container */}
//                   <div className="relative h-40 sm:h-48 lg:h-64 overflow-hidden bg-[#F5EBE0]">
//                     <Image
//                       src={step.image}
//                       alt={step.title}
//                       fill
//                       className="object-cover group-hover:scale-105 transition-transform duration-500"
//                     />
//                     {/* Number Badge */}
//                     <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-[#C8972B] text-white flex items-center justify-center font-bold text-base sm:text-lg lg:text-xl shadow-lg">
//                       {index + 1}
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="p-4 sm:p-5 lg:p-6 flex flex-col gap-2 sm:gap-3 flex-grow">
//                     <h3 className="text-base sm:text-lg lg:text-xl font-heading font-bold text-[#3D1F0D] leading-snug">
//                       {step.title}
//                     </h3>

//                     <p className="text-[#3D1F0D]/65 text-xs sm:text-sm leading-relaxed flex-grow">
//                       {step.description}
//                     </p>

//                     {/* Step Indicator */}
//                     <div className="pt-1 sm:pt-2 mt-auto">
//                       <span className="text-xs font-medium text-[#C8972B] uppercase tracking-wide">
//                         Step {index + 1}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Bottom CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="text-center mt-8 sm:mt-12 lg:mt-16 px-4"
//         >
//           <p className="text-[#3D1F0D]/70 text-xs sm:text-sm lg:text-base mb-4 sm:mb-6">
//             Ready to start your design journey?
//           </p>
//           <button className="bg-[#3D1F0D] hover:bg-[#B8851F] text-white text-xs sm:text-sm lg:text-base font-semibold uppercase tracking-wide px-6 sm:px-8 py-2.5 sm:py-3 lg:py-3.5 rounded-sm transition-all duration-300 hover:shadow-lg active:scale-95">
//             Begin Your Project
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
