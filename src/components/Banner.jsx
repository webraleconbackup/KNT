import React from "react";

const Banner = ({ title, subtitle, backgroundImage }) => {
  return (
    <div
      className="relative w-full bg-cover h-[200px] lg:h-[250px] bg-center flex flex-col items-start lg:px-30 justify-center text-white text-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        // minHeight: "250px",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text */}
      <div className="relative z-10 px-4 md:px-0">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">{title}</h1>
        {subtitle && <p className="text-sm md:text-lg">{subtitle}</p>}
      </div>
    </div>
  );
};

export default Banner;
