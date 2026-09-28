import React from 'react';
import Banner from '../components/Banner';
import Product from '../components/Product';


const About = () => {
  const bgImage = '/banner/top-banner1.png'; // image inside public/banner/
  return (
    <div>
     

      <Banner />

      <section className='w-full py-12 bg-white'>
        <div className='max-w-7xl mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-[#0B2154] mb-10'>
            PRODUCTS RANGE
          </h2>

          {/* Product Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {products.map((item) => (
              <div
                key={item.id}
                className='bg-white shadow-md hover:shadow-xl border border-gray-200 p-6 flex flex-col items-center justify-between transition-transform duration-300 hover:scale-105'
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className='rounded-lg w-48 h-48 object-contain mb-4'
                />
                <h3 className='text-lg font-semibold text-[#0B2154]'>
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className='mt-10'>
            <Link to='/products'>
              <button className='bg-[#0B2154] cursor-pointer text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1a2a6c] transition'>
                VIEW ALL
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
