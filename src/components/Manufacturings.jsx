import React from "react";

const images = [
  "/manufacturing/grid1.jpg",
  "/manufacturing/grid2.jpg",
  "/manufacturing/grid3.jpg",
  "/manufacturing/lubricant.png",
];

export default function Manufacturings() {
  return (
    <section className="w-full bg-white pb-4 pt-10 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-2xl lg:text-4xl font-bold text-blue-900 mb-6">
            MANUFACTURING
          </h2>

          <p className="text-md leading-relaxed text-gray-700 mb-4">
            At <span className="font-bold text-red-600">KNT</span>
            <span className="text-gray-600"> Powered By Japanese Technology,</span> 
            we specialize in the production of high-quality components like 
            <span className="font-semibold"> Coolant, Filter, Radiator, Clutch Plate, Lubricant, and Suspension.</span> 
            Each product undergoes stringent quality checks to ensure long-term reliability and performance under all conditions.
          </p>

          <p className="text-md leading-relaxed text-gray-700 mb-4">
            Our manufacturing units are equipped with advanced machinery and follow modern
            practices such as TPM and lean production to maintain efficiency and consistency.
          </p>

          <p className="text-md leading-relaxed text-gray-700 mb-6">
            With an expert team and well-defined quality systems, we ensure that every part
            produced meets OEM standards and customer expectations.
          </p>

          <p className="text-md font-semibold text-gray-800">
            <span className="text-red-600 text-xl">KNT</span> 
            <span className="text-gray-600 text-sm"> Powered By Japanese Technology –</span> 
            Precision Manufacturing You Can Trust.
          </p>
        </div>

        {/* RIGHT IMAGES */}
        <div className="flex flex-col gap-5">
          {/* First row with 3 images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {images.slice(0, 3).map((img, index) => (
              <div key={index} className="w-full h-52 lg:h-56 rounded-lg overflow-hidden shadow-md">
                <img
                  src={img}
                  alt={`manufacturing-${index}`}
                  className="w-full h-full object-cover transition-all hover:scale-110 duration-700"
                />
              </div>
            ))}
          </div>

          {/* Second row with 1 image (same width) */}
          <div className="grid grid-cols1">
            <div className="col-span-1 w-full overflow-hidden">
              <img
                src={images[3]}
                alt="manufacturing-3"
                className="w-full h-full object-cover transition-all hover:scale-110 duration-700"
              />
            </div>
            {/* empty placeholders to keep equal spacing */}
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
