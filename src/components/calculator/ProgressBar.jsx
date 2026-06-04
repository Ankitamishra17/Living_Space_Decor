// ProgressBar.jsx

"use client";

const steps = [
  {
    number: 1,
    label: "Home Type",
  },
  {
    number: 2,
    label: "Rooms",
  },
  {
    number: 3,
    label: "Style",
  },
  {
    number: 4,
    label: "Details",
  },
];

export default function ProgressBar({ currentStep }) {
  return (
    <div className="w-full max-w-4xl mx-auto mb-10 md:mb-14">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = currentStep > step.number;
          const isActive = currentStep === step.number;

          return (
            <div
              key={step.number}
              className="flex items-center flex-1"
            >
              {/* Step */}
              <div className="flex flex-col items-center relative z-10">
                <div
                  className={`
                    w-10 h-10
                    sm:w-12 sm:h-12
                    md:w-14 md:h-14
                    rounded-full
                    flex
                    items-center
                    justify-center
                    text-sm
                    md:text-base
                    font-semibold
                    transition-all
                    duration-300

                    ${
                      isCompleted
                        ? "bg-[#8B6B4A] text-white shadow-lg"
                        : isActive
                        ? "bg-[#C8972B] text-white shadow-lg scale-110"
                        : "bg-white border border-[#E5D8C7] text-[#8D8072]"
                    }
                  `}
                >
                  {step.number}
                </div>

                <span
                  className={`
                    mt-2
                    text-[10px]
                    sm:text-xs
                    md:text-sm
                    font-medium
                    text-center
                    transition-colors
                    duration-300

                    ${
                      isCompleted || isActive
                        ? "text-[#2A1506]"
                        : "text-[#9E8E7E]"
                    }
                  `}
                >
                  {step.label}
                </span>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="flex-1 h-[2px] mx-2 sm:mx-4 relative -mt-6">
                  <div className="absolute inset-0 bg-[#E5D8C7]" />

                  <div
                    className={`
                      absolute
                      inset-y-0
                      left-0
                      transition-all
                      duration-500

                      ${
                        currentStep > step.number
                          ? "w-full bg-[#8B6B4A]"
                          : "w-0 bg-[#8B6B4A]"
                      }
                    `}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile Step Indicator */}
      <div className="mt-6 text-center sm:hidden">
        <span className="text-sm text-[#6E6258]">
          Step {currentStep} of {steps.length}
        </span>
      </div>
    </div>
  );
}