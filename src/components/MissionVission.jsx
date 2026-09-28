import React from "react";

const MissionVision = () => {
  return (
    <section className="py-12 px-4 md:px-10 lg:px-30 bg-white text-gray-800">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#002D72]">
          Our <span className="text-[#E30613]">Mission & Vision</span>
        </h2>
        <p className="mt-4 text-gray-600 text-base md:text-lg max-w-4xl mx-auto">
          At KNT Auto Parts, we are driven by a passion for precision engineering
          and a commitment to innovation. Our mission and vision guide us in
          delivering reliable and superior vehicle components worldwide.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Mission Card */}
        <div className="bg-gray-100 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl md:text-2xl font-bold text-[#002D72] mb-3">
            Our Mission
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Our mission to continuously strive to introduce best of technology
            product with high Reliability and Durability in OES and Aftermarket.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-gray-100 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl md:text-2xl font-bold text-[#002D72] mb-3">
            Our Vision
          </h3>
          <p className="text-gray-700 leading-relaxed">
            The Kanehiro MTC vision is to become the world's one of the Top
            aftermarket auto parts brand. Our commitment and quality is powered
            by Japanese Technology. Our wide range of OEM quality products has
            provided unmatched quality and value for our automotive aftermarket
            customers Globally.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
