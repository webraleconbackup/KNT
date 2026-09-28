import React from "react";
// Replace with your image path

const Suspension = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4 lg:px-30 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Image Section */}
        <div className="overflow-hidden">
          <img
            src='/manufacturing/suspension.jpg'
            alt="Suspension Parts"
            className="w-full h-full object-cover transition-all hover:scale-110 duration-700"
          />
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-2xl lg:text-5xl font-bold text-blue-900 leading-tight">
            Suspension Manufacturing
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed">
            At <span className="font-semibold">KNT Autoparts</span>, we
            specialize in designing and manufacturing high-performance
            suspension systems that deliver superior comfort, control, and
            durability. Our plant is equipped with modern machinery and precision
            engineering tools to ensure products meet the highest standards of
            safety and reliability.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 text-xl">•</span>
              Advanced shock absorber production units
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 text-xl">•</span>
              Durability and performance testing labs
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 text-xl">•</span>
              OEM-grade materials for long-lasting performance
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 text-xl">•</span>
              Innovative R&amp;D for evolving automotive needs
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Suspension;
