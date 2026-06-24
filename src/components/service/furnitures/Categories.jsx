import Image from "next/image";

const categories = [
  {
    title: "Sofa",
    image: "https://i.pinimg.com/1200x/ba/ec/d5/baecd59c765562016d8f793a3cdf98b9.jpg",
  },
  {
    title: "Dining",
    image: "https://i.pinimg.com/736x/4b/0d/b4/4b0db4c1ffe80956662e6bfb7720d45a.jpg",
  },
  {
    title: "Bedroom",
    image: "https://i.pinimg.com/736x/23/9c/1d/239c1d195f4388536fe5b68771c8c5b9.jpg",
  },
 
  {
    title: "Wardrobe",
    image: "https://i.pinimg.com/736x/7e/ba/6e/7eba6e92534b492e41b987e5a15cb006.jpg",
  },
  {
    title: "Study Table",
    image: "https://i.pinimg.com/736x/74/94/8b/74948b3c6eeec8dd77b3836e1d3e3a8b.jpg",
  },
];

export default function CategorySection() {
  return (
    <section className="bg-[#F8F4EE] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="w-12 h-[1px] bg-[#B88A5A]" />
          <h2 className="text-xs tracking-[2px] text-nowrap font-heading text-[#3D1F0D] uppercase">
            Browse By Category
          </h2>
          <span className="w-12 h-[1px] bg-[#B88A5A]" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {categories.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-[#E8DDD0] overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="relative text-center py-8">
                {/* Icon Circle */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#B88A5A] border-2 border-white flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg">⌂</span>
                </div>

                <h3 className="text-[#3D1F0D] font-heading text-lg mt-2">
                  {item.title}
                </h3>

                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}