import React from "react";

const images = [
  { id: 1, src: "/products/air-filter.png", title: "Filters" },
  { id: 2, src: "/products/clutch-plates.png", title: "Clutch Plates" },
  { id: 3, src: "/products/coolants.png", title: "Coolants" },
  { id: 4, src: "/products/engine-oil.png", title: "Oils & Lubes" },
  { id: 5, src: "/products/oil-filter.png", title: "Oil Filter" },
  // { id: 6, src: "/products/radiator.jpg", title: "img-6" },
  { id: 7, src: "/products/steering-pumps.png", title: "Steering Pump" },
  { id: 8, src: "/products/suspension-parts.jpg", title: "Suspension" },
  // { id: 9, src: "/manufacturing/suspension.jpg", title: "img-9" },
  // { id: 10, src: "/manufacturing/lubricant.png", title: "img-10" },
  { id: 11, src: "/products/radiator.png", title: "Radiator" },
  { id: 12, src: "/products/tools.jpg", title: "Track Control Arms" }
];

export default function Gallery() {
  return (
    <section className="py-16 bg-white">
      {/* Heading */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-4xl font-bold">
          PRODUCT <span className="text-red-600">GALLERY</span>
        </h2>
        <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
          Where innovation meets reliability — explore our Japanese-engineered automotive components.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((img) => (
          <div
            key={img.id}
            className="bg-white border shadow-md rounded-lg overflow-hidden pt-2"
          >
            <img
              src={img.src}
              alt={img.title}
              className={`w-full lg:h-96 object-center transition-transform duration-500 ${
                img.id === 3 || img.id === 4 ? "rotate-[270deg]" : ""
              }`}
            />
            <div className="bg-blue-900 text-white text-center py-2 mt-6 font-semibold">
              {img.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
