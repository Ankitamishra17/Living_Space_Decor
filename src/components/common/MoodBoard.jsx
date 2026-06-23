// "use client";

// import Image from "next/image";
// import { ArrowRight } from "lucide-react";
// import Link from "next/link";

// export default function DesignGallery({ data }) {
//   const images = data?.moodboard || [];
//   const heading = data?.heading || "Explore Our Design Collections";
//   const description =
//     data?.description ||
//     "Discover stunning interior designs that blend elegance with functionality.";
//   const buttonText = data?.buttonText || "Explore";
//   const buttonLink = data?.buttonLink || "/portfolio";

//   const ImageCard = ({ src, className }) => (
//     <div
//       className={`relative overflow-hidden shadow-2xl bg-white ${className}`}
//     >
//       <Image
//         src={src}
//         alt=""
//         fill
//         className="object-cover transition-all duration-700 hover:scale-105"
//       />
//     </div>
//   );

//   return (
//     <section className="py-24 bg-[#3D1F0D] overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 md:px-8">
//         {/* Header */}
//         <div className="mb-20 max-w-2xl">
//           <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-6">
//             {heading}
//           </h2>

//           <p className="text-sm md:text-base text-white/60 leading-relaxed mb-8 max-w-xl">
//             {description}
//           </p>

//           <Link
//             href={buttonLink}
//             className="inline-flex items-center gap-2 bg-[#C8972B] text-white px-6 py-3 font-medium hover:bg-[#B8851F] transition duration-300"
//           >
//             {buttonText}
//             <ArrowRight size={16} />
//           </Link>
//         </div>

//         {/* Gallery Masonry */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-max">
//           {/* Image 1 - Tall */}
//           {images[0] && (
//             <div className="col-span-1 row-span-2">
//               <ImageCard src={images[0]} className="h-[320px] md:h-[480px]" />
//             </div>
//           )}

//           {/* Image 2 - Medium */}
//           {images[1] && (
//             <div className="col-span-1">
//               <ImageCard src={images[1]} className="h-[240px] md:h-[320px]" />
//             </div>
//           )}

//           {/* Image 3 - Tall */}
//           {images[2] && (
//             <div className="col-span-1 row-span-2">
//               <ImageCard src={images[2]} className="h-[320px] md:h-[480px]" />
//             </div>
//           )}

//           {/* Image 4 - Medium */}
//           {images[3] && (
//             <div className="col-span-1">
//               <ImageCard src={images[3]} className="h-[240px] md:h-[320px]" />
//             </div>
//           )}

//           {/* Image 5 - Medium */}
//           {images[4] && (
//             <div className="col-span-1">
//               <ImageCard src={images[4]} className="h-[240px] md:h-[320px]" />
//             </div>
//           )}

//           {/* Image 6 - Wide & Tall */}
//           {images[5] && (
//             <div className="col-span-2 md:col-span-1 row-span-2">
//               <ImageCard src={images[5]} className="h-[320px] md:h-[480px]" />
//             </div>
//           )}

//           {/* Image 7 - Medium (if exists) */}
//           {images[6] && (
//             <div className="col-span-1">
//               <ImageCard src={images[6]} className="h-[240px] md:h-[320px]" />
//             </div>
//           )}

//           {/* Image 8 - Medium (if exists) */}
//           {images[7] && (
//             <div className="col-span-1">
//               <ImageCard src={images[7]} className="h-[240px] md:h-[320px]" />
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DesignGallery({ data }) {
  const images = data?.moodboard || [];
  const heading = data?.heading || "Explore Our Design Collections";
  const description =
    data?.description ||
    "Discover stunning interior designs that blend elegance with functionality.";
  const buttonText = data?.buttonText || "Explore";
  const buttonLink = data?.buttonLink || "/portfolio";

  const ImageCard = ({ src, className, priority = false }) => (
    <div
      className={`relative overflow-hidden bg-white group cursor-pointer shadow-sm hover:shadow-lg transition-shadow ${className}`}
    >
      <Image
        src={src}
        alt="Design"
        fill
        priority={priority}
        className="object-cover transition-all duration-500 group-hover:scale-105"
      />
    </div>
  );

  // Layout configuration - specify heights and spans for each image
  const layoutConfig = [
    { cols: "col-span-1 md:col-span-1", height: "h-[260px] md:h-[300px]" },
    { cols: "col-span-1 md:col-span-1", height: "h-[260px] md:h-[300px]" },
    { cols: "col-span-1 md:col-span-1", height: "h-[260px] md:h-[300px]" },
    { cols: "col-span-1 md:col-span-1", height: "h-[260px] md:h-[300px]" },
    { cols: "col-span-1 md:col-span-1", height: "h-[260px] md:h-[300px]" },
    { cols: "col-span-1 md:col-span-1", height: "h-[260px] md:h-[300px]" },
    { cols: "col-span-1 md:col-span-1", height: "h-[260px] md:h-[300px]" },
    { cols: "col-span-1 md:col-span-1", height: "h-[260px] md:h-[300px]" },
  ];

  return (
    <section className="py-24 bg-[#3D1F0D] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl sm:text-xl lg:text-5xl font-serif text-white leading-tight mb-4">
            {heading}
          </h2>

          <p className="text-sm text-[#ddd8ce] mb-8 max-w-xl leading-relaxed">
            {description}
          </p>

          <Link
            href={buttonLink}
            className="inline-flex items-center gap-2 bg-[#C8972B] text-white px-7 py-3 font-medium text-sm hover:bg-[#B8851F] transition duration-300"
          >
            {buttonText}
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Gallery Grid - 2 cols on mobile, 4 cols on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {images.map((image, index) => {
            const config = layoutConfig[index] || layoutConfig[0];
            return (
              <div key={index} className={config.cols}>
                <ImageCard
                  src={image}
                  className={config.height}
                  priority={index < 4}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}