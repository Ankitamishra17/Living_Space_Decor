"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

const processSteps = [
  {
    title: "Consultation",
    image:
      "https://images.pexels.com/photos/8837733/pexels-photo-8837733.jpeg",
    description:
      "Discuss requirements, lifestyle, budget, and design vision with our experts.",
  },
  {
    title: "Design",
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    description:
      "Space planning, layouts, mood boards, and concept development.",
  },
  {
    title: "3D Visualization",
    image:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    description:
      "Photorealistic 3D renders to visualize your future home before execution.",
  },
  {
    title: "Material Selection",
    image:
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    description:
      "Choose laminates, finishes, fabrics, lighting, and décor elements.",
  },
  {
    title: "Manufacturing",
    image:
      "https://images.pexels.com/photos/5691626/pexels-photo-5691626.jpeg",
    description:
      "Precision manufacturing of furniture and modular components.",
  },
  {
    title: "Execution",
    image:
      "https://images.pexels.com/photos/6474475/pexels-photo-6474475.jpeg",
    description:
      "On-site installation and execution managed by experienced professionals.",
  },
  {
    title: "Quality Check",
    image:
      "https://images.pexels.com/photos/8961300/pexels-photo-8961300.jpeg",
    description:
      "Multiple quality inspections ensure flawless finishing and durability.",
  },
  {
    title: "Handover",
    image:
      "https://images.pexels.com/photos/7578860/pexels-photo-7578860.jpeg",
    description:
      "Final walkthrough and delivery of your fully completed dream home.",
  },
];

export default function TurnkeyProcess() {
  return (
    <section className="bg-[#F5EBE0] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="bg-[#C8972B]/10 font-body text-[#C8972B] px-4 py-2 rounded-full text-sm font-semibold">
            End-to-End Turnkey Solutions
          </span>

          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[#3D1F0D] mt-4">
            From Concept to Handover
          </h2>
        </div>
         {/* Timeline */}
        <div className="hidden lg:flex justify-center mt-12 mb-8 flex-wrap gap-4">
          {processSteps.map((item, index) => (
            <div
              key={index}
              className="flex items-center"
            >
              <span className="text-[#3D1F0D] text-sm">
                {item.title}
              </span>

              {index !== processSteps.length - 1 && (
                <span className="mx-3 text-[#C8972B] text-xl">
                  →
                </span>
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
            <SwiperSlide
              key={index}
              className="!w-[300px] md:!w-[400px]"
            >
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

                  <h3 className="text-xl  font-bold text-[#3D1F0D]">
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

// import { useState, useEffect } from "react";
// import Image from "next/image";

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
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveIndex((prev) =>
//         prev === processSteps.length - 1 ? 0 : prev + 1
//       );
//     }, 4000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative overflow-hidden bg-[#F5EBE0] py-20 lg:py-28">
//       {/* Background Blur */}
//       <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#C8972B]/10 rounded-full blur-3xl" />
//       <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#3D1F0D]/10 rounded-full blur-3xl" />

//       <div className="container relative z-10 mx-auto px-4">
//         {/* Header */}
//         <div className="max-w-4xl mx-auto text-center mb-12">
//           <span className="inline-flex rounded-full bg-[#C8972B]/10 px-4 py-2 text-sm font-semibold text-[#C8972B]">
//             End-to-End Turnkey Solutions
//           </span>

//           <div className="mt-6 text-[#C8972B] font-medium tracking-[0.2em]">
//             {String(activeIndex + 1).padStart(2, "0")} / 08
//           </div>

//           <h2 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-bold text-[#3D1F0D]">
//             {processSteps[activeIndex].title}
//           </h2>

//           <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
//             {processSteps[activeIndex].description}
//           </p>
//         </div>

//         {/* Progress */}
//         <div className="max-w-3xl mx-auto mb-12">
//           <div className="h-[3px] rounded-full bg-[#C8972B]/20">
//             <div
//               className="h-full rounded-full bg-[#C8972B] transition-all duration-700"
//               style={{
//                 width: `${
//                   ((activeIndex + 1) / processSteps.length) * 100
//                 }%`,
//               }}
//             />
//           </div>
//         </div>

//         {/* Image */}
//         <div className="relative mx-auto max-w-6xl">
//           <div className="relative h-[350px] md:h-[500px] lg:h-[650px] overflow-hidden rounded-[32px] lg:rounded-[48px] shadow-[0_30px_80px_rgba(61,31,13,0.18)]">
//             <Image
//               key={processSteps[activeIndex].image}
//               src={processSteps[activeIndex].image}
//               alt={processSteps[activeIndex].title}
//               fill
//               priority
//               className="object-cover transition-all duration-1000"
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

//             <div className="absolute bottom-8 left-8">
//               <div className="inline-flex items-center gap-3 rounded-full bg-white/90 px-5 py-3 backdrop-blur">
//                 <div className="w-10 h-10 rounded-full bg-[#C8972B] text-white flex items-center justify-center font-bold">
//                   {String(activeIndex + 1).padStart(2, "0")}
//                 </div>

//                 <span className="font-semibold text-[#3D1F0D]">
//                   {processSteps[activeIndex].title}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Navigation */}
//         <div className="mt-12 flex gap-3 overflow-x-auto pb-3 scrollbar-hide">
//           {processSteps.map((step, index) => (
//             <button
//               key={step.title}
//               onClick={() => setActiveIndex(index)}
//               className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-medium transition-all duration-300
//                 ${
//                   activeIndex === index
//                     ? "bg-[#3D1F0D] text-white shadow-lg"
//                     : "bg-white text-[#3D1F0D] hover:bg-[#C8972B] hover:text-white"
//                 }`}
//             >
//               {step.title}
//             </button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }