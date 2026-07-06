// components/calculator/ResultStep.jsx

"use client";

import {
  CheckCircle,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

export default function ResultStep({ formData }) {
  
  

  // Finish Multiplier
  const finishMultiplier = {
    Laminate: 1,
    Acrylic: 1.2,
    "PU Finish": 1.4,
    Veneer: 1.6,
  };

  

  return (
    <section className="max-w-6xl mx-auto py-10">
    
     

      {/* Heading */}
      <div className="text-center mb-12">
        <span className="inline-block bg-[#C8972B]/10 text-[#C8972B] px-4 py-2 rounded-full text-sm font-medium">
          Cost Estimate Ready
        </span>

        <h1 className="text-4xl md:text-6xl font-bold text-[#3D1F0D] mt-4 mb-4">
          Your Estimated Wardrobe Cost
        </h1>

        <p className="text-[#6B6B6B] max-w-xl mx-auto">
          Based on your selections, here's an approximate
          budget range for your wardrobe project.
        </p>
      </div>
      {/* Summary */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left */}
        <div className="bg-white rounded-[30px] border border-[#F0E6D8] p-8">
          <h3 className="text-2xl font-bold text-[#3D1F0D] mb-6">
            Project Summary
          </h3>

          <div className="space-y-5">
            <div className="flex justify-between">
              <span className="text-[#6B6B6B]">
                Wardrobe Type
              </span>

              <span className="font-semibold text-[#3D1F0D] capitalize">
                {formData.type}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#6B6B6B]">
                Dimension
              </span>

              <span className="font-semibold text-[#3D1F0D]">
                {formData.dimension}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#6B6B6B]">
                Finish
              </span>

              <span className="font-semibold text-[#3D1F0D]">
                {formData.finish}
              </span>
            </div>

            
          </div>
        </div>

        {/* Right */}
        <div className="bg-white rounded-[30px] border border-[#F0E6D8] p-8">
          <h3 className="text-2xl font-bold text-[#3D1F0D] mb-6">
            Contact Details
          </h3>

          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Phone
                size={18}
                className="text-[#C8972B]"
              />

              <span>{formData.phone}</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail
                size={18}
                className="text-[#C8972B]"
              />

              <span>{formData.email}</span>
            </div>
          </div>

          <div className="mt-8 p-5 bg-[#F5EBE0] rounded-2xl">
            <p className="text-[#6B6B6B]">
              Our design expert will contact you within
              24 hours to discuss your project.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mt-12">
        <a
          href="tel:+918826606869"
          className="bg-[#3D1F0D] hover:bg-[#C8972B] text-white px-8 py-4 rounded-md text-center transition-all"
        >
          Call Now
        </a>

        <a
          href={`https://wa.me/918826606869?text=Hi, I received my wardrobe estimate and would like a consultation.`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white px-8 py-4 rounded-md flex items-center justify-center gap-2"
        >
          <MessageCircle size={18} />
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}