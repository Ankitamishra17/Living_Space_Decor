"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = [
  "All Rooms",
  "Living Room",
  "Bedroom",
  "Dining Room",
  "Home Office",
];

const images = [
  {
    category: "Living Room",
    image:
      "https://i.pinimg.com/1200x/90/95/1d/90951d2f93607285c0f71ddeebe69f91.jpg",
  },
  {
    category: "Home Office",
    image:
      "https://i.pinimg.com/1200x/fe/9c/07/fe9c07e3ef5a6d7d227b894f8ca63d45.jpg",
  },

  {
    category: "Bedroom",
    image:
      "https://i.pinimg.com/736x/25/90/c4/2590c48434c7a03070a3d7855c95e198.jpg",
  },
  {
    category: "Living Room",
    image:
      "https://i.pinimg.com/1200x/12/05/39/1205392a607716616b81b7abcdf89c63.jpg",
  },

  {
    category: "Bedroom",
    image:
      "https://i.pinimg.com/736x/b4/fe/03/b4fe03b0dff9f825042696cb77ce2a2f.jpg",
  },

  {
    category: "Dining Room",
    image:
      "https://i.pinimg.com/736x/65/f1/df/65f1dfac0ca8fdc4101b9b64b7143a46.jpg",
  },
  {
    category: "Bedroom",
    image:
      "https://i.pinimg.com/736x/0b/e4/b6/0be4b6261c307e8accaee7376300e388.jpg",
  },

  {
    category: "Dining Room",
    image:
      "https://i.pinimg.com/736x/2c/09/31/2c0931431cd42b3ed163da7e80cc9c8d.jpg",
  },
  {
    category: "Living Room",
    image:
      "https://i.pinimg.com/736x/7e/d1/c8/7ed1c8c8e87f615fdd442575b42105d9.jpg",
  },
  {
    category: "Home Office",
    image:
      "https://i.pinimg.com/1200x/b9/2a/de/b92ade7b022259d533a445b1345591d1.jpg",
  },

  {
    category: "Dining Room",
    image:
      "https://i.pinimg.com/736x/b2/b4/cd/b2b4cd6e8fa9fc86814b09f38d80bd64.jpg",
  },
  {
    category: "Living Room",
    image:
      "https://i.pinimg.com/1200x/b1/0f/b3/b10fb37385a0e2d1d3f1b23f74ffb0d2.jpg",
  },

  {
    category: "Bedroom",
    image:
      "https://i.pinimg.com/1200x/22/39/ab/2239ab8af6c93e963b2dadc78266f8e8.jpg",
  },
  {
    category: "Home Office",
    image:
      "https://i.pinimg.com/736x/df/62/6e/df626ef9bdfdd25beaf6f1590a7e6308.jpg",
  },
  {
    category: "Dining Room",
    image:
      "https://i.pinimg.com/1200x/02/3b/24/023b2478a2a57d4823750a2451e85219.jpg",
  },

  {
    category: "Home Office",
    image:
      "https://i.pinimg.com/1200x/c8/9e/a4/c89ea46e79cd18cb79d5744e3678840b.jpg",
  },
];

export default function InspirationGallery() {
  const [activeTab, setActiveTab] = useState("All Rooms");

  const filteredImages =
    activeTab === "All Rooms"
      ? images
      : images.filter((item) => item.category === activeTab);

  return (
    <section className="bg-[#F8F4EE] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <p className="uppercase tracking-[4px] text-xs text-[#B88A5A] mb-2">
            Get Inspired
          </p>

          <h2 className="text-4xl font-serif text-[#3D1F0D]">
            Explore Furniture in Real Spaces
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-md text-sm transition-all duration-300
              ${
                activeTab === tab
                  ? "bg-[#3D1F0D] text-white"
                  : "bg-white text-[#3D1F0D] border border-[#E5D6C5]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {filteredImages.map((item, index) => (
            <div
              key={index}
              className="relative h-[280px] overflow-hidden group"
            >
              <Image
                src={item.image}
                alt={item.category}
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />

              <div className="absolute bottom-4 left-4">
                <h3 className="text-white text-lg font-medium">
                  {item.category}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
