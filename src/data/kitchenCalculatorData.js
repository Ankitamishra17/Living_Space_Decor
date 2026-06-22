// data/kitchenCalculatorData.js

export const dimensions = [
  "7 x 10 ft",
  "8 x 9 ft",
  "9 x 10 ft",
  "10 x 10 ft",
  "11.5 x 10 ft",
  "Custom",
];

export const kitchenShapes = [
  {
    id: "l-shape",
    title: "L-Shaped Kitchen",
    image: "/kitchen/l-shape.png",
  },
  {
    id: "u-shape",
    title: "U-Shaped Kitchen",
    image: "/kitchen/u-shape.png",
  },
  {
    id: "parallel",
    title: "Parallel Kitchen",
    image: "/kitchen/parallel.png",
  },
  {
    id: "straight",
    title: "Straight Kitchen",
    image: "/kitchen/straight.png",
  },
];

export const packages = [
  {
    id: "essential",
    name: "Essential",
    price: "₹1.5L+",
    features: [
      "Laminate Finish",
      "Soft Close Hinges",
      "Standard Accessories",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "₹2.5L+",
    features: [
      "Acrylic Finish",
      "Premium Hardware",
      "Soft Close Channels",
    ],
  },
  {
    id: "luxury",
    name: "Luxury",
    price: "₹4L+",
    features: [
      "PU Finish",
      "German Hardware",
      "Premium Accessories",
    ],
  },
];