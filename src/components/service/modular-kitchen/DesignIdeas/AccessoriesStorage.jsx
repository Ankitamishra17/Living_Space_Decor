"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const accessories = [
  {
    title: "Pull-Out Pantry",
    description: "Maximize storage with easy access to groceries.",
    image: "https://i.pinimg.com/736x/15/62/56/15625692aed88e5f3678d6896047f6d2.jpg",
  },
  {
    title: "Corner Carousel",
    description: "Utilize corner spaces efficiently.",
    image: "https://i.pinimg.com/1200x/7e/f4/5c/7ef45c672dddc78d4d7f8c8394f61788.jpg",
  },
  {
    title: "Tandem Drawers",
    description: "Smooth sliding drawers with large capacity.",
    image: "https://images.thdstatic.com/productImages/b41472c0-e391-49b6-b666-6d75a110859e/svn/dove-gray-hampton-bay-assembled-kitchen-cabinets-kdb36-sdv-e1_600.jpg",
  },
  {
    title: "Cutlery Organizer",
    description: "Keep utensils neatly arranged and accessible.",
    image: "https://i.pinimg.com/736x/7e/b5/cc/7eb5cc44587dab85daa35935da912546.jpg",
  },
  {
    title: "Bottle Pull-Out",
    description: "Dedicated storage for bottles and jars.",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/7/324690033/JS/DX/DQ/10017366/dsc-6491-1000x1000.JPG",
  },
  {
    title: "Dish Rack Unit",
    description: "Organized drying and storage solution.",
    image: "https://i.pinimg.com/736x/d1/ef/91/d1ef91d76a7cda2a5f65fc442fbb7ee0.jpg",
  },
];

export default function AccessoriesStorage() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-[#B8851F] uppercase tracking-[3px] text-sm font-medium">
            Smart Storage
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#3D1F0D]">
            Kitchen Accessories & Storage Solutions
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover intelligent storage solutions designed to keep your kitchen
            organized, functional, and clutter-free.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-6">
          {accessories.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-54 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-base font-semibold text-[#3D1F0D]">
                  {item.title}
                </h3>

               

                
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 rounded-3xl bg-[#F5EBE0] p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <h3 className="text-3xl font-semibold text-[#3D1F0D]">
                Every Inch Matters
              </h3>

              <p className="mt-4 text-gray-600">
                Our modular kitchens are equipped with innovative accessories
                that optimize storage and improve everyday convenience.
              </p>

              <button className="mt-6 rounded-md text-nowrap bg-[#B8851F] px-6 py-3 text-white font-sm">
                Get Free  Consultation
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white p-5 text-center shadow-sm">
                <h4 className="text-3xl font-bold text-[#B8851F]">50%</h4>
                <p className="text-sm text-gray-600 mt-2">
                  More Storage Capacity
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 text-center shadow-sm">
                <h4 className="text-3xl font-bold text-[#B8851F]">100%</h4>
                <p className="text-sm text-gray-600 mt-2">Space Utilization</p>
              </div>

              <div className="rounded-2xl bg-white p-5 text-center shadow-sm">
                <h4 className="text-3xl font-bold text-[#B8851F]">Soft</h4>
                <p className="text-sm text-gray-600 mt-2">Closing Mechanism</p>
              </div>

              <div className="rounded-2xl bg-white p-5 text-center shadow-sm">
                <h4 className="text-3xl font-bold text-[#B8851F]">10+</h4>
                <p className="text-sm text-gray-600 mt-2">
                  Premium Accessories
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
