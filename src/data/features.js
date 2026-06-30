import featureImage from "../assets/images/features/feature-main.png";

import {
  FaChartLine,
  FaUsers,
  FaLightbulb,
  FaShieldAlt,
} from "react-icons/fa";

export const featureImageData = featureImage;

export const features = [
  {
    id: 1,
    icon: FaChartLine,
    title: "Business Planning",
    description:
      "We help you map out where your business is headed and how to get there.",
  },
  {
    id: 2,
    icon: FaUsers,
    title: "Professional Team",
    description:
      "Our team knows the ins and outs of what works and what doesn't.",
  },
  {
    id: 3,
    icon: FaLightbulb,
    title: "Creative Ideas",
    description:
      "We come up with fresh approaches that actually make a difference.",
  },
  {
    id: 4,
    icon: FaShieldAlt,
    title: "Trusted Support",
    description:
      "We're here when you need us, from start to finish and beyond.",
  },
];