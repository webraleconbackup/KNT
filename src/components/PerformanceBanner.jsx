import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PerformanceBanner = () => {
  // Animation variant for bottom-to-top movement
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative flex items-center justify-start py-20 px-4 md:px-30 text-white overflow-hidden"
      style={{
        backgroundImage: "url('/home-img/hero1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0B2154]/90"></div>

      {/* Animated Text */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
        className="relative z-10 max-w-2xl"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          PERFORMANCE
          <br /> AND QUALITY
        </h1>

        <p className="text-md md:text-lg mb-6 text-zinc-300">
          <span className="text-red-500 text-lg font-semibold">KNT</span>{" "}
          <span className="text-gray-200 text-sm">
            Powered By Japanese Technology
          </span>{" "}
          deliver high performance parts to customers globally. Our deep
          understanding of chassis components gives our customers an added
          advantage. We work together with you to tailor a customized solution
          for your requirements.
        </p>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Link to="/quality">
            <button className="px-8 py-3 cursor-pointer ml-20 bg-white text-[#0B2154] font-semibold rounded-lg hover:bg-gray-200 transition">
              Quality
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PerformanceBanner;
