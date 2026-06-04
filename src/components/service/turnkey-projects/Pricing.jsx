"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "₹1,200",
    unit: "/sq.ft",
    description: "Perfect for smaller spaces and quick refreshes",
    features: [
      "Design Consultation",
      "Execution",
      "Standard Materials",
      "Project Supervision",
    ],
  },
  {
    name: "Premium",
    price: "₹2,000",
    unit: "/sq.ft",
    description: "Our most popular choice for beautiful transformations",
    featured: true,
    badge: "MOST POPULAR",
    features: [
      "3D Design",
      "Premium Materials",
      "Custom Furniture",
      "Dedicated Manager",
    ],
  },
  {
    name: "Luxury",
    price: "Custom",
    unit: "",
    description: "Bespoke solutions for discerning clientele",
    features: [
      "Luxury Finishes",
      "Imported Materials",
      "Bespoke Furniture",
      "End-to-End Turnkey",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function PricingPlans() {
  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "#F5EBE0" }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-8"
          style={{ backgroundColor: "#C8972B" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-8"
          style={{ backgroundColor: "#C8972B" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#C8972B" }}
          >
            ✦ Transparent Pricing
          </motion.span>

          <h2
            className="mt-4 text-4xl lg:text-5xl font-bold"
            style={{ color: "#2C2C2C" }}
          >
            Choose Your Perfect Plan
          </h2>

          <p
            className="mt-6 text-lg max-w-2xl mx-auto"
            style={{ color: "#6B6B6B" }}
          >
            Quality interior design at every budget. Flexible pricing tailored
            to your needs and vision.
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 lg:gap-8 lg:grid-cols-3 items-center"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative group h-full`}
              whileHover={plan.featured ? { y: -12 } : { y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Card Container */}
              <div
                className={`relative h-full rounded-3xl overflow-hidden transition-all duration-500 ${
                  plan.featured
                    ? "shadow-2xl hover:shadow-3xl"
                    : "shadow-lg hover:shadow-xl"
                }`}
                style={{
                  backgroundColor: plan.featured ? "#2C2C2C" : "#FFFFFF",
                }}
              >
                {/* Gradient border for featured card */}
                {plan.featured && (
                  <div
                    className="absolute inset-0 rounded-3xl p-1 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, #C8972B, #F0E6D8)`,
                    }}
                  >
                    <div
                      className="w-full h-full rounded-3xl"
                      style={{ backgroundColor: "#2C2C2C" }}
                    />
                  </div>
                )}

                {/* Border accent on non-featured cards */}
                {!plan.featured && (
                  <div
                    className="absolute inset-0 rounded-3xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ borderColor: "#C8972B" }}
                  />
                )}

                {/* Content */}
                <div className="relative p-8 lg:p-10 h-full flex flex-col">
                  {/* Badge */}
                  {plan.badge && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="inline-flex w-fit mb-6 px-4 py-2 rounded-full"
                      style={{
                        backgroundColor: "#C8972B",
                        color: "#FFFFFF",
                      }}
                    >
                      <span className="text-xs font-semibold tracking-widest">
                        {plan.badge}
                      </span>
                    </motion.div>
                  )}

                  {/* Plan Name */}
                  <h3
                    className="text-3xl font-bold"
                    style={{ color: plan.featured ? "#FFFFFF" : "#2C2C2C" }}
                  >
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: plan.featured ? "#B0B0B0" : "#6B6B6B" }}
                  >
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mt-8 mb-8">
                    <div className="flex items-baseline gap-1">
                      <span
                        className="text-4xl lg:text-4xl font-semibold"
                        style={{ color: plan.featured ? "#C8972B" : "#C8972B" }}
                      >
                        {plan.price}
                      </span>
                      {plan.unit && (
                        <span
                          className="text-base"
                          style={{
                            color: plan.featured ? "#B0B0B0" : "#6B6B6B",
                          }}
                        >
                          {plan.unit}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + 0.2 }}
                        className="flex items-center gap-4"
                      >
                        <div
                          className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full"
                          style={{
                            backgroundColor: plan.featured
                              ? "#C8972B"
                              : "#F0E6D8",
                          }}
                        >
                          <Check
                            className="h-4 w-4"
                            style={{
                              color: plan.featured ? "#2C2C2C" : "#C8972B",
                            }}
                          />
                        </div>
                        <span
                          className="text-base font-medium"
                          style={{
                            color: plan.featured ? "#FFFFFF" : "#2C2C2C",
                          }}
                        >
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`mt-8 w-full py-4 rounded-xl font-semibold text-base transition-all duration-300 ${
                      plan.featured ? "hover:shadow-2xl" : "hover:shadow-lg"
                    }`}
                    style={{
                      backgroundColor: plan.featured ? "#C8972B" : "#3D1F0D",
                      color: plan.featured ? "#2C2C2C" : "#FFFFFF",
                    }}
                  >
                    {plan.price === "Custom" ? "Get In Touch" : "Get Quote"}
                  </motion.button>

                  {/* Subtle hover gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-3xl"
                    style={{
                      background: `linear-gradient(135deg, #C8972B, transparent)`,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ / Support Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-base" style={{ color: "#6B6B6B" }}>
            Not sure which plan is right for you?{" "}
            <motion.a
              href="#"
              className="font-semibold transition-colors duration-300 hover:opacity-80"
              style={{ color: "#C8972B" }}
              whileHover={{ scale: 1.05 }}
            >
              Schedule a consultation →
            </motion.a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
