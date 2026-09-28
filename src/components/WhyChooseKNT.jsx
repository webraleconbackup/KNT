import React from "react";
import { motion } from "framer-motion";
import { Microscope, Settings, Shield } from "lucide-react";
import { TbGeometry } from "react-icons/tb";

const features = [
  {
    id: 1,
    icon: <TbGeometry className="w-10 h-10 text-blue-600" />,
    title: "Innovative Design Engineering",
    description:
      "Smart and efficient designs tailored for performance and durability.",
  },
  {
    id: 2,
    icon: <Microscope className="w-10 h-10 text-blue-600" />,
    title: "Precision Testing Tools",
    description:
      "World-class testing equipment ensures flawless product integrity.",
  },
  {
    id: 3,
    icon: <Settings className="w-10 h-10 text-blue-600" />,
    title: "End-to-End Production",
    description:
      "Complete in-house manufacturing for consistent output.",
  },
  {
    id: 4,
    icon: <Shield className="w-10 h-10 text-blue-600" />,
    title: "Trusted Quality Standards",
    description:
      "We follow stringent quality assurance processes at every step.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

const WhyChooseKNT = () => {
  return (
    <section className="bg-white mt-14 pb-20 px-4 lg:px-30">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl mb-10 font-bold text-gray-800">
          Why Choose <span className="text-red-600">KNT</span>{" "}
          <span className="text-gray-800 text-xl">Powered By Japanese Technology ?</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-300 p-8 text-center flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={index}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="font-semibold text-lg mb-2 text-gray-900">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseKNT;
