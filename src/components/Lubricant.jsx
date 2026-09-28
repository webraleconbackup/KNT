import React from "react";

export default function Lubricant() {
  return (
    <section className="bg-gray-100 py-8 lg:py-16 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-5xl font-extrabold text-blue-900 mb-6">
            Lubricant Manufacturing
          </h2>
          <p className="text-gray-700 mb-4">
            <span className="font-semibold text-gray-900">KNT Autoparts</span> is a trusted
            name in the production of high-quality automotive lubricants. Our advanced
            manufacturing facility ensures precision blending, filtration, and packaging
            to deliver lubricants that enhance engine performance and protect vital
            components.
          </p>
          <p className="text-gray-700 mb-6">
            From engine oils to gear oils, each product undergoes rigorous quality checks
            to meet international standards and provide long-lasting protection in
            demanding driving conditions.
          </p>

          <ul className="list-disc pl-6 text-gray-800 space-y-2">
            <li>State-of-the-art blending & testing labs</li>
            <li>Wide range: Engine Oil, Gear Oil, Hydraulic Oil</li>
            <li>Superior thermal & wear protection</li>
            <li>Eco-friendly production processes</li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img 
            src="/manufacturing/grid4.jpg"
            alt="Lubricant Manufacturing"
            className="w-full max-w-2xl h-[250px] lg:h-[400px] object-cover transition-all hover:scale-110 duration-700"
          />
        </div>
      </div>
    </section>
  );
}
