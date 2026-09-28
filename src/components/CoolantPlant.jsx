import React from "react";

const CoolantPlant = () => {
  return (
    <section className="w-full bg-gray-100 pt-10 lg:pt-0 px-4 lg:px-30">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between lg:gap-40 items-center">
        
        {/* LEFT TEXT SECTION */}
        <div>
          <h1 className="text-2xl md:text-5xl font-bold text-[#073293] leading-tight mb-6">
            Coolant Manufacturing <br /> Plant
          </h1>

          <p className="text-gray-800 text-md leading-relaxed mb-4">
            At <span className="font-semibold">KNT Autoparts</span>, our coolant manufacturing
            facility is designed with advanced technology to ensure high-quality
            production that meets global automotive standards.
          </p>

          <p className="text-gray-800 text-md leading-relaxed mb-4">
            With modern mixing units, automated filling systems, and rigorous
            quality testing labs, we guarantee products that provide excellent
            engine cooling, anti-rust protection, and longer service life.
          </p>

          <ul className="space-y-3 text-md pt-10 text-gray-800 mt-6">
            <li className="flex gap-2">• ISO-certified production process</li>
            <li className="flex gap-2">• State-of-the-art R&D and testing facilities</li>
            <li className="flex gap-2">• Eco-friendly and sustainable manufacturing</li>
          </ul>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="flex justify-between">
          <img
            src='/products/coolants.png'
            alt="Coolant Manufacturing Plant"
            className="w-full lg:max-w-md rotate-270 px-10 lg:px-0 object-cover transition-all lg:hover:scale-110 duration-700"
          />
        </div>
      </div>
    </section>
  );
};

export default CoolantPlant;
