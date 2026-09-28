import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, title: 'Oils & Lubes', image: '/products/engine-oil.png'},
  { id: 2, title: 'Filter', image: '/products/air-filter.png' },
  { id: 3, title: 'Radiator', image: '/products/radiator.png' },
  { id: 4, title: 'Clutch Plate', image: '/products/clutch-plates.png' },
  { id: 5, title: 'Suspension', image: '/products/suspension-parts.jpg' },
  { id: 6, title: 'Coolant', image: '/products/coolants.png' },
];

export default function Product() {
  const [offset, setOffset] = useState(0);
  const containerRef = useRef(null);
  const itemWidth = 280; // width of each card
  const visibleCount = 4;

  // Duplicate the list to allow seamless infinite scroll
  const extendedProducts = [...products, ...products];

  // Auto scroll continuously
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => prev + 1);
    }, 10); // small increment for smooth continuous motion

    return () => clearInterval(interval);
  }, []);

  // Reset offset to 0 when we’ve scrolled halfway (end of original list)
  useEffect(() => {
    const totalWidth = products.length * itemWidth;
    if (offset >= totalWidth) {
      setOffset(0);
    }
  }, [offset]);

  const slideLeft = () => {
    setOffset((prev) => (prev - itemWidth < 0 ? 0 : prev - itemWidth));
  };

  const slideRight = () => {
    setOffset((prev) => prev + itemWidth);
  };

  return (
    <section className='w-full py-12 bg-white overflow-hidden relative'>
      <div className='max-w-7xl mx-auto px-4 text-center'>
        <h2 className='text-3xl md:text-4xl font-bold text-[#0B2154] mb-10'>
          PRODUCTS RANGE
        </h2>

        {/* Carousel container */}
        <div className='relative flex items-center justify-center'>
          {/* Left arrow */}
          <button
            onClick={slideLeft}
            className='absolute left-0 z-10 bg-[#0B2154]/70 hover:bg-[#0B2154] text-white p-2 rounded-full'
          >
            <ChevronLeft size={24} />
          </button>

          {/* Slider Track */}
          <div
            ref={containerRef}
            className='overflow-hidden w-full max-w-6xl mx-auto'
          >
            <motion.div
              className='flex gap-6'
              animate={{ x: -offset }}
              transition={{ duration: 0, ease: 'linear' }} // linear motion for continuous flow
            >
              {extendedProducts.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className='min-w-[260px] bg-white shadow-md hover:shadow-xl border-6 border-gray-300 p-4 flex flex-col justify-between'
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`rounded-lg w-48 h-48 object-contain mb-4 ${item.id === 1 || item.id === 6 ? "rotate-[270deg]" : ""}`}
                  />
                  <h3 className='text-lg font-semibold text-[#0B2154]'>
                    {item.title}
                  </h3>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right arrow */}
          <button
            onClick={slideRight}
            className='absolute right-0 z-10 bg-[#0B2154]/70 hover:bg-[#0B2154] text-white p-2 rounded-full'
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Button */}
        <div className='mt-10'>
          <Link to='/products'>
            <button className='bg-[#0B2154] cursor-pointer text-white px-4 py-3 rounded-lg font-semibold hover:bg-[#1a2a6c] transition'>
              VIEW ALL
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
