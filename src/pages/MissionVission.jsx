import React from 'react'
import Commitment from '../components/Commitment'

const MissionVission = () => {
  return (
    <>
    <section className="py-16 px-4 sm:px-8 lg:px-6 bg-white md:text-center">
      {/* Heading */}
      <h2 className="text-2xl sm:text-4xl font-bold mb-4">
        <span className="text-[#002366]">Our </span>
        <span className="text-[#FF2E2E]">Mission </span>
        <span className="text-[#002366]">& </span>
        <span className="text-[#FF2E2E]">Vision</span>
      </h2>

      {/* Subtitle */}
      <p className="text-gray-600 mb-4 text-base sm:text-lg">
        We are driven by a passion for precision engineering and a commitment
        to innovation.
      </p>
      <p className="text-gray-600 max-w-5xl mx-auto mb-12 text-base sm:text-lg">
        Our mission and vision guide us in delivering reliable, durable, and
        superior automotive solutions that empower customers worldwide.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Mission */}
        <div className="bg-gray-100 p-4 rounded-2xl shadow-sm border-l-4 border-[#FF2E2E] text-left">
          <h3 className="text-[#002366] font-bold text-xl sm:text-2xl mb-4">
            Our Mission
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Our mission is to continuously introduce cutting-edge automotive
            technologies that deliver high reliability and durability for both
            OEM and aftermarket segments. We are committed to excellence,
            ensuring every product embodies superior performance and long-term
            value.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-gray-100 p-4 rounded-2xl shadow-sm border-l-4 border-[#FF2E2E] text-left">
          <h3 className="text-[#002366] font-bold text-xl sm:text-2xl mb-4">
            Our Vision
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Our vision is to be recognized as one of the world’s leading
            automotive aftermarket brands. Powered by advanced technology and
            unwavering dedication, we aim to set new standards in quality,
            reliability, and customer trust, creating value for automotive
            enthusiasts and industries across the globe.
          </p>
        </div>
      </div>
    </section>
    <Commitment />
    </>
  )
}

export default MissionVission
