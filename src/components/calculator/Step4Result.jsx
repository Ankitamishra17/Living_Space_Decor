"use client";

export default function Step4Result({ formData, setFormData, back }) {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      whatsappUpdates: e.target.checked,
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-8 md:mb-12">
        <p className="uppercase tracking-[0.25em] text-[#C8972B] text-[10px] sm:text-xs mb-3">
          Cost Calculator
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2A1506] leading-tight">
          Get Your Detailed Quote
        </h2>

        <p className="mt-3 text-sm md:text-base text-[#6E6258] max-w-xl mx-auto">
          Fill in your details and receive a personalized estimate for your
          interior project.
        </p>
      </div>

      {/* Estimated Cost Card */}
      <div className="max-w-xl mx-auto mb-8">
        <div className="bg-[#F8F4EF] border border-[#E8DDD0] rounded-3xl p-6 md:p-8 text-center">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#8B6B4A]">
            ₹8L - ₹12L
          </h3>

          <p className="mt-2 text-sm md:text-base text-[#6E6258]">
            Estimated Interior Cost
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-xl mx-auto space-y-4 md:space-y-5">
        <input
          type="text"
          placeholder="Full Name"
          className="
            w-full
            border
            border-[#E5D8C7]
            rounded-2xl
            p-4
            text-sm
            md:text-base
            outline-none
            transition
            focus:border-[#8B6B4A]
          "
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="
            w-full
            border
            border-[#E5D8C7]
            rounded-2xl
            p-4
            text-sm
            md:text-base
            outline-none
            transition
            focus:border-[#8B6B4A]
          "
        />

        <input
          type="email"
          placeholder="Email Address"
          className="
            w-full
            border
            border-[#E5D8C7]
            rounded-2xl
            p-4
            text-sm
            md:text-base
            outline-none
            transition
            focus:border-[#8B6B4A]
          "
        />

        <input
          type="text"
          placeholder="PIN Code"
          className="
            w-full
            border
            border-[#E5D8C7]
            rounded-2xl
            p-4
            text-sm
            md:text-base
            outline-none
            transition
            focus:border-[#8B6B4A]
          "
        />

        {/* WhatsApp Consent */}
        <label className="flex items-start gap-3 cursor-pointer pt-2">
          <input
            type="checkbox"
            checked={formData?.whatsappUpdates || false}
            onChange={handleChange}
            className="
              mt-1
              w-4
              h-4
              accent-[#8B6B4A]
              flex-shrink-0
            "
          />

          <span className="text-sm text-[#6E6258] leading-relaxed">
            Yes, I would like to receive important updates, offers, and project
            notifications on WhatsApp.
          </span>
        </label>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 md:mt-12">
        <button
          onClick={back}
          className="
            w-full
            sm:w-auto
            min-w-[160px]
            border
            border-[#D8CFC4]
            text-[#6E6258]
            px-8
            py-3.5
            rounded-full
            text-sm
            font-medium
            transition-all
            duration-300
            hover:border-[#8B6B4A]
            hover:text-[#8B6B4A]
          "
        >
          ← Back
        </button>

        <button
          className="
            w-full
            sm:w-auto
            min-w-[220px]
            bg-[#8B6B4A]
            text-white
            px-8
            py-3.5
            rounded-full
            text-sm
            font-medium
            transition-all
            duration-300
            hover:bg-[#6F5439]
            hover:shadow-lg
          "
        >
          Get Detailed Quote →
        </button>
      </div>
    </div>
  );
}
