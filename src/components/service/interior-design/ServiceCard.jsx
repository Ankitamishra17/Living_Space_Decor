// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function ServiceCard({ item, index }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{
//         duration: 0.7,
//         delay: index * 0.1,
//         ease: "easeOut",
//       }}
//       viewport={{ once: true, margin: "-100px" }}
//       className="group text-center"
//     >
//       <div className="flex flex-col">
//         {/* Content First on Mobile & Tablet */}
//         <motion.div
//           className="order-1 lg:order-2 mb-8 lg:mb-0"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{
//             duration: 0.7,
//             delay: 0.15 + index * 0.1,
//           }}
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           {/* Title */}
//           <motion.h3
//             className="
//               font-serif
//               text-2xl
//               sm:text-3xl
//               md:text-4xl
//               text-stone-900
//               group-hover:text-[#C8972B]
//               transition-colors
//               duration-500
//             "
//             whileHover={{ letterSpacing: "0.05em" }}
//             transition={{ duration: 0.4 }}
//           >
//             {item.title}
//           </motion.h3>

//           {/* Description */}
//           <motion.p
//             className="
//               mt-4
//               sm:mt-5
//               text-stone-500
//               leading-relaxed
//               max-w-sm
//               mx-auto
//               text-sm
//               sm:text-base
//               font-light
//               tracking-wide
//             "
//             initial={{ opacity: 0.8 }}
//             whileHover={{ opacity: 1, color: "#92400e" }}
//             transition={{ duration: 0.4 }}
//           >
//             {item.description}
//           </motion.p>

//           {/* Hover Underline */}
//           <motion.div
//             className="mt-5 sm:mt-6 h-px bg-gradient-to-r from-transparent via-[#C8972B] to-transparent mx-auto"
//             initial={{ scaleX: 0 }}
//             whileHover={{ scaleX: 1 }}
//             transition={{ duration: 0.5 }}
//             style={{
//               maxWidth: "80px",
//               originX: 0.5,
//             }}
//           />
//         </motion.div>

//         {/* Image Second on Mobile & Tablet */}
//         <motion.div
//           className="
//             order-2
//             lg:order-1
//             relative
//             mx-auto
//             w-[220px]
//             h-[220px]
//             sm:w-[250px]
//             sm:h-[250px]
//             md:w-[320px]
//             md:h-[320px]
//             lg:w-[280px]
//             lg:h-[280px]
//             xl:w-[320px]
//             xl:h-[320px]
//             cursor-pointer
//           "
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.5, ease: "easeOut" }}
//         >
//           {/* Outer Ring */}
//           <motion.div
//             className="absolute inset-0 rounded-full border border-amber-100"
//             whileHover={{ rotate: -180 }}
//             transition={{ duration: 0.8 }}
//           />

//           {/* Inner Ring */}
//           <motion.div
//             className="absolute inset-2 rounded-full border border-dashed border-[#C8972B]"
//             whileHover={{
//               rotate: -180,
//               borderColor: "#D4AF37",
//             }}
//             transition={{ duration: 5 }}
//           />

//           {/* Image */}
//           <div className="absolute inset-4 overflow-hidden rounded-full">
//             <motion.div
//               className="relative w-full h-full"
//               whileHover={{ scale: 1.15 }}
//               transition={{ duration: 0.7 }}
//             >
//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 fill
//                 className="object-cover"
//                 sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
//               />

//               {/* Overlay */}
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/40"
//                 initial={{ opacity: 0.3 }}
//                 whileHover={{ opacity: 0.6 }}
//                 transition={{ duration: 0.5 }}
//               />

//               {/* Explore */}
//               <motion.div
//                 className="absolute inset-0 flex items-center justify-center"
//                 initial={{ opacity: 0 }}
//                 whileHover={{ opacity: 1 }}
//                 transition={{ duration: 0.4 }}
//               >
//                 <motion.span
//                   initial={{ scale: 0.8, y: 10 }}
//                   whileHover={{ scale: 1, y: 0 }}
//                   className="text-[#C8972B] tracking-widest text-xs sm:text-sm font-light"
//                 >
//                   Explore →
//                 </motion.span>
//               </motion.div>
//             </motion.div>
//           </div>

//           {/* Number */}
//           <motion.div
//             className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2"
//             initial={{ opacity: 0, scale: 0.5 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             whileHover={{ scale: 1.3, y: -4 }}
//             transition={{
//               initial: {
//                 delay: 0.3 + index * 0.1,
//                 duration: 0.6,
//               },
//               whileHover: {
//                 duration: 0.3,
//               },
//             }}
//             viewport={{ once: true }}
//           >
//             <span className="text-[#C8972B] text-2xl sm:text-3xl font-serif italic">
//               {item.id}
//             </span>
//           </motion.div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ServiceCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="group text-center"
    >
      <div className="flex flex-col">
        {/* Content First on Mobile & Tablet */}
        <motion.div
          className="order-1 lg:order-2 mb-6 sm:mb-8 lg:mb-0 px-2 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.15 + index * 0.1,
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Title */}
          <motion.h3
            className="
              font-serif
              text-xl
              sm:text-2xl
              md:text-3xl
              lg:text-3xl
              xl:text-4xl
              text-stone-900
              group-hover:text-[#C8972B]
              transition-colors
              duration-500
            "
            whileHover={{ letterSpacing: "0.05em" }}
            transition={{ duration: 0.4 }}
          >
            {item.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="
              mt-3
              sm:mt-4
              text-stone-500
              leading-relaxed
              max-w-xs
              mx-auto
              text-xs
              sm:text-sm
              md:text-base
              font-light
              tracking-wide
            "
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1, color: "#92400e" }}
            transition={{ duration: 0.4 }}
          >
            {item.description}
          </motion.p>

          {/* Hover Underline */}
          <motion.div
            className="mt-3 sm:mt-4 h-px bg-gradient-to-r from-transparent via-[#C8972B] to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              maxWidth: "60px",
              originX: 0.5,
            }}
          />
        </motion.div>

        {/* Image Second on Mobile & Tablet */}
        <motion.div
          className="
    order-2
    lg:order-1
    relative
    mx-auto
    w-[180px]
    h-[180px]
    sm:w-[220px]
    sm:h-[220px]
    md:w-[240px]
    md:h-[240px]
    lg:w-[220px]
    lg:h-[220px]
    xl:w-[280px]
    xl:h-[280px]
    cursor-pointer
    flex-shrink-0
  "
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Outer Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border border-amber-100"
            animate={{
              rotate: 0,
            }}
            whileHover={{ rotate: -180 }}
            transition={{ duration: 0.8 }}
          />

          {/* Inner Ring */}
          <motion.div
            className="absolute inset-2 rounded-full border border-dashed border-[#C8972B]"
            animate={{
              rotate: 0,
            }}
            whileHover={{
              rotate: -180,
              borderColor: "#D4AF37",
            }}
            transition={{ duration: 5 }}
          />

          {/* Image */}
          <div className="absolute inset-4 overflow-hidden rounded-full">
            <motion.div
              className="
        relative
        w-full
        h-full
        scale-105
        lg:scale-100
      "
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, (max-width: 1024px) 240px, (max-width: 1280px) 220px, 280px"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40 opacity-60 lg:opacity-30 lg:hover:opacity-60 transition-all duration-500" />

              {/* Explore */}
              <div
                className="
          absolute inset-0
          flex items-center justify-center
          opacity-100
          lg:opacity-0
          lg:group-hover:opacity-100
          transition-all duration-300
        "
              >
                <span
                  className="
            text-[#C8972B]
            tracking-widest
            text-xs
            sm:text-sm
            font-light
          "
                >
                  Explore →
                </span>
              </div>
            </motion.div>
          </div>

          {/* Number */}
          <motion.div
            className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.3, y: -4 }}
            viewport={{ once: true }}
          >
            <span className="text-[#C8972B] text-xl sm:text-2xl md:text-2xl lg:text-2xl font-serif italic">
              {item.id}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
