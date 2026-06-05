// "use client";

// import { X } from "lucide-react";
// import Image from "next/image";

// export default function ConsultationModal({ isOpen, onClose }) {
//   if (!isOpen) return null;

//   return (
//     <>
//       {/* Overlay */}
//       <div
//         className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
//         onClick={onClose}
//       />

//       {/* Modal */}
//       <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4">
//         <div className="relative w-full max-w-5xl bg-[#F7F1E8] rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)] max-h-[95vh] overflow-y-auto">
//           {/* Close Button */}
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#C8972B] hover:text-white transition-all duration-300"
//           >
//             <X size={20} />
//           </button>

//           <div className="grid lg:grid-cols-2">
//             {/* Left Section */}
//             <div className="relative p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
//               {/* Badge */}
//               <div className="inline-flex items-center gap-2 border border-[#C8972B]/30 bg-[#C8972B]/10 px-4 py-2 rounded-full w-fit">
//                 <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#C8972B]">
//                   Free Consultation
//                 </span>
//               </div>

//               {/* Heading */}
//               <h2
//                 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-[#2A1506]"
//                 style={{
//                   fontFamily: "'Cormorant Garamond', serif",
//                 }}
//               >
//                 One Place
//                 <br />
//                 For Every
//                 <span className="block text-[#C8972B]">Space.</span>
//               </h2>

//               {/* Description */}
//               <p className="mt-5 text-sm sm:text-base md:text-lg text-[#6E5E4E] leading-relaxed max-w-lg">
//                 Everything your home needs — Kitchens, Wardrobes, Curtains &
//                 Blinds, Doors & Windows, Lighting, Furniture and complete
//                 Interior Solutions.
//               </p>

//               {/* Image */}
//               <div className="mt-8 hidden md:block">
//                 <Image
//                   src="/images/interior-banner.png"
//                   alt="Interior Design"
//                   width={600}
//                   height={450}
//                   className="w-full max-w-md object-contain"
//                 />
//               </div>

//             </div>

//             {/* Right Section */}
//             <div className="bg-white p-6 sm:p-8 md:p-10">
//               <div className="mb-6">
//                 <h3 className="text-2xl md:text-3xl text-[#2A1506] font-medium">
//                   Book a Consultation
//                 </h3>
//                 <p className="mt-2 text-sm text-[#6E5E4E]">
//                   Fill in your details and our design expert will contact you
//                   shortly.
//                 </p>
//               </div>

//               <form className="space-y-4">
//                 <input
//                   type="text"
//                   placeholder="Enter Your Name"
//                   className="w-full h-12 md:h-14 px-4 md:px-5 border border-[#E5DDD3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8972B]"
//                 />

//                 <input
//                   type="tel"
//                   placeholder="Enter Your Number"
//                   className="w-full h-12 md:h-14 px-4 md:px-5 border border-[#E5DDD3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8972B]"
//                 />

//                 <input
//                   type="text"
//                   placeholder="Enter Your City"
//                   className="w-full h-12 md:h-14 px-4 md:px-5 border border-[#E5DDD3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8972B]"
//                 />

//                 <input
//                   type="email"
//                   placeholder="Enter Your Email"
//                   className="w-full h-12 md:h-14 px-4 md:px-5 border border-[#E5DDD3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8972B]"
//                 />

//                 <textarea
//                   rows={4}
//                   placeholder="Tell us about your project"
//                   className="w-full p-4 md:p-5 border border-[#E5DDD3] rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-[#C8972B]"
//                 />

//                 <label className="flex items-start gap-3">
//                   <input type="checkbox" className="mt-1 accent-[#C8972B]" />
//                   <span className="text-sm text-[#6E5E4E] leading-relaxed">
//                     I would like to receive updates, offers and project
//                     information via WhatsApp.
//                   </span>
//                 </label>

//                 <button
//                   type="submit"
//                   className="w-full h-12 md:h-14 bg-[#3D1F0D] hover:bg-[#C8972B] text-white rounded-xl font-medium transition-all duration-300"
//                 >
//                   Book Consultation
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import { X } from "lucide-react";
import { motion } from "framer-motion";

export default function ConsultationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-sm bg-white rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
        >
          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-[#F5EBE0] flex items-center justify-center hover:bg-[#C8972B] hover:text-white transition-all duration-300"
          >
            <X size={16} />
          </motion.button>

          {/* Content */}
          <div className="p-5">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-4"
            >
              <div className="inline-flex items-center gap-2 bg-[#C8972B]/8 px-3 py-1 rounded-full mb-2">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#C8972B] font-medium">
                  Complimentary
                </span>
              </div>

              <h2 className="text-lg font-semibold text-[#3D1F0D] leading-tight">
                Book Your Free Consultation
              </h2>

              <p className="mt-1 text-xs text-[#6E5E4E] leading-snug">
                Our expert will contact you within 24 hours.
              </p>
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              {/* Name */}
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                placeholder="Your Name"
                className="w-full h-10 px-3 text-xs border border-[#E5DDD3] rounded-lg bg-[#FAFAF8] focus:outline-none focus:ring-1 focus:ring-[#C8972B] transition-all"
              />

              {/* Phone */}
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="tel"
                placeholder="Phone Number"
                className="w-full h-10 px-3 text-xs border border-[#E5DDD3] rounded-lg bg-[#FAFAF8] focus:outline-none focus:ring-1 focus:ring-[#C8972B] transition-all"
              />

              {/* City */}
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                placeholder="City"
                className="w-full h-10 px-3 text-xs border border-[#E5DDD3] rounded-lg bg-[#FAFAF8] focus:outline-none focus:ring-1 focus:ring-[#C8972B] transition-all"
              />

              {/* Email */}
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                placeholder="Email"
                className="w-full h-10 px-3 text-xs border border-[#E5DDD3] rounded-lg bg-[#FAFAF8] focus:outline-none focus:ring-1 focus:ring-[#C8972B] transition-all"
              />

              {/* Project Description */}
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                rows={2}
                placeholder="Tell us about your project"
                className="w-full p-3 text-xs border border-[#E5DDD3] rounded-lg bg-[#FAFAF8] resize-none focus:outline-none focus:ring-1 focus:ring-[#C8972B] transition-all"
              />

              {/* Checkbox */}
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  className="mt-0.5 w-3.5 h-3.5 accent-[#C8972B] cursor-pointer"
                />
                <span className="text-xs text-[#6E5E4E] leading-tight">
                  WhatsApp updates
                </span>
              </label>

              {/* Submit Button */}
              <motion.button
                whileHover={{
                  backgroundColor: "#C8972B",
                  boxShadow: "0 8px 20px rgba(200, 151, 43, 0.2)",
                }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full h-10 bg-[#3D1F0D] text-white text-xs font-medium rounded-lg transition-all duration-300 mt-3"
              >
                Request Consultation
              </motion.button>
            </motion.form>

            {/* Footer Text */}
            <p className="mt-2 text-center text-xs text-[#A89B8F]">
              Your details are secure
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
