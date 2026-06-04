"use client";

import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";

export const AnimatedSearchBar = ({
  categories = [
    "Doors & Windows",
    "Design Ideas",
    "Kitchen Designs",
    "Interior Styles",
    "Architecture",
    "Modular Solutions",
    "Luxury Projects",
  ],
  duration = 3000,
  onSearch = (query) => console.log("Searching:", query),
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
        setIsAnimating(true);
      }, 150);
    }, duration);
    return () => clearInterval(interval);
  }, [categories.length, duration]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="hidden md:flex items-center gap-2 flex-1 max-w-xs group"
    >
     
        {/* Search Icon */}
        <div className="text-[#C8972B] ml-8 flex-shrink-0 cursor-pointer hover:scale-110 transition-transform duration-200">
          <Search size={14} />
        </div>

        {/* Input Container */}
        <div className="flex-1 relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for"
            className="w-full bg-transparent text-[12px] text-[#F5EBE0] placeholder-[#F5EBE0]/40 focus:outline-none border-b border-[#F5EBE0]/30 focus:border-[#C8972B] pb-1 transition-all duration-300 font-light"
          />

          {/* Animated Category Text */}
          <div
            className="absolute ml-16 bottom-1 left-0 flex items-center gap-1 pointer-events-none"
            style={{
              opacity: searchQuery ? 0 : 1,
              transition: "opacity 0.3s ease",
            }}
          >
            <span
              className={`inline-block whitespace-nowrap text-[#F5EBE0]/60 font-light text-[12px] transition-all duration-300 ${
                isAnimating ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transform: isAnimating ? "translateY(0)" : "translateY(-15px)",
              }}
            >
              {categories[currentIndex]}
            </span>
          </div>
       
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </form>
  );
};
