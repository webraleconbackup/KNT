import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const Welcome = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center text-white py-10 mt-8"
      style={{
        backgroundImage: "url('/home-img/welcome.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full px-4 lg:px-0 grid md:grid-cols-2 gap-10">
        {/* Left Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-6"
        >
          <p className="text-lg font-semibold">WELCOME TO</p>
          <h1 className="lg:text-5xl md:text-6xl font-bold">
            <span className="text-red-600 text-3xl">KNT</span>{" "}
            <span className="font-semibold text-xl text-white">
              Powered By Japanese Technology
            </span>
          </h1>

          <p className="text-md leading-relaxed">
            KNT specializes in steering suspension and rubber components with
            focus on the vehicle chassis.
          </p>
          <p className="text-md leading-relaxed">
            With our highly specialized infrastructure and machineries, KNT
            provides OEM quality products that ensure a great driving
            experience.
          </p>

          <Link to='/products'><button className="px-6 cursor-pointer py-3 ml-18 border-2 border-white rounded-md font-medium hover:bg-white hover:text-black transition">
            Know More
          </button></Link>
        </motion.div>

        {/* Right Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
          className="space-y-10"
        >
          <div>
            <h2 className="text-2xl font-bold">Professional Team</h2>
            <p className="text-md leading-relaxed border-b border-gray-500 pb-4 mt-2">
              Our hands-on and experienced management team is directly involved
              in the success of the project.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Smart Technology</h2>
            <p className="text-md leading-relaxed border-b border-gray-500 pb-4 mt-2">
              From India & Japan dedicated staff is engaged in delivering
              cutting-edge technology for the automotive parts.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Consistent Quality</h2>
            <p className="text-md leading-relaxed mt-2">
              Our quality-related processes and procedures assure the integrity
              of the components we produce.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Welcome;
