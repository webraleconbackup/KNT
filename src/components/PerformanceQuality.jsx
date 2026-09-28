import React from "react";

const images = [
  "/manufacturing/test1.jpg",
  "/manufacturing/test2.jpg",
];

export default function PerformanceQuality() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Side Text */}
        <div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#003087] mb-6">
            PERFORMANCE AND QUALITY
          </h2>
          <p className="text-gray-700 mb-4">
            At <span className="text-red-600 font-semibold">KNT</span>{" "}
            <span className="text-sm text-gray-500">
              Powered By Japanese Technology
            </span>
            , we manufacture performance-tested automotive components including
            clutch plates, radiators, coolants, filters, and lubricants. Our
            deep expertise in mechanical systems gives our customers an edge
            with dependable and long-lasting parts.
          </p>

          <p className="text-gray-700 mb-4">
            Our ability to understand our clients' needs and deliver consistent
            product quality has built strong trust across the automotive sector.
          </p>

          <p className="text-gray-700">
            Whether you're driving through the Himalayan passes or coastal heat,
            our parts are engineered to perform under all conditions. With KNT,
            expect{" "}
            <span className="font-semibold">
              durability, safety, and performance—no matter the terrain.
            </span>
          </p>
        </div>

        {/* Right Side Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <img
                src={src}
                alt={`Performance ${index + 1}`}
                className="w-full h-80 lg:h-90 object-center hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
