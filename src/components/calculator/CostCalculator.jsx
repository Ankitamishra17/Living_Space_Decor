// CostCalculator.jsx

"use client";

import { useState } from "react";

import Step1BHK from "./Step1BHK";
import Step2Rooms from "./Step2Rooms";
import Step3Style from "./Step3Style";
import Step4Result from "./Step4Result";
import ProgressBar from "./ProgressBar";

export default function CostCalculator() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    bhk: "",
    rooms: [],
    style: "",
    name: "",
    phone: "",
    email: "",
    whatsappUpdates: true,
  });

  return (
    <section className="relative py-12 md:py-20 bg-[#F7F2EB] overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#C8972B]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B6B4A]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="uppercase tracking-[0.3em] text-[#C8972B] text-[10px] sm:text-xs mb-3">
            Interior Cost Calculator
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#2A1506] leading-tight">
            Calculate Your
            <span className="block text-[#8B6B4A]">Dream Home Budget</span>
          </h2>

          <p className="mt-4 text-sm md:text-base text-[#6E6258] max-w-2xl mx-auto leading-relaxed">
            Get an instant estimate for your interior project by answering a few
            simple questions.
          </p>
        </div>

        {/* Calculator Card */}
        <div
          className="
            bg-white
            rounded-[24px]
            md:rounded-[32px]
            shadow-xl
            border
            border-[#EAE0D3]
            p-5
            sm:p-6
            md:p-8
            lg:p-10
          "
        >
          {/* Progress Bar */}
          <ProgressBar currentStep={step} />

          {/* Step Content */}
          <div className="mt-8 md:mt-10">
            {step === 1 && (
              <Step1BHK
                formData={formData}
                setFormData={setFormData}
                next={() => setStep(2)}
              />
            )}

            {step === 2 && (
              <Step2Rooms
                formData={formData}
                setFormData={setFormData}
                next={() => setStep(3)}
                back={() => setStep(1)}
              />
            )}

            {step === 3 && (
              <Step3Style
                formData={formData}
                setFormData={setFormData}
                next={() => setStep(4)}
                back={() => setStep(2)}
              />
            )}

            {step === 4 && (
              <Step4Result
                formData={formData}
                setFormData={setFormData}
                back={() => setStep(3)}
              />
            )}
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-6 md:mt-8">
          <p className="text-xs md:text-sm text-[#8D8072]">
            Estimates are indicative and may vary based on materials, finishes,
            project scope, and customization requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
