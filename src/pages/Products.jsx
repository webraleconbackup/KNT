import React from 'react';
import Banner from '../components/Banner';
import { Helmet } from "react-helmet";

const Products = () => {
  const products = [
    { id: 1, title: 'Oils & Lubes', image: '/products/engine-oil.png' },
    { id: 2, title: 'Filter', image: '/products/air-filter.png' },
    { id: 3, title: 'Radiator', image: '/products/radiator.png' },
    { id: 4, title: 'Clutch Plate', image: '/products/clutch-plates.png' },
    { id: 5, title: 'Suspension', image: '/products/suspension-parts.jpg' },
    { id: 6, title: 'Coolant', image: '/products/coolants.png' },
  ];

  const bannerImage = '/banner/top-banner1.png';
  return (
    <div>
      <Helmet>
        <title>
         KNT Auto Parts Product Range | Suspension, Radiators & Clutch Plates.
        </title>
        <meta
          name='description'
          content=" Explore our wide range of automotive components including gear oil, filters, radiators, and suspension parts. Durable, high-performance aftermarket solutions for all vehicles."
        />
      </Helmet>
      {/* <Banner title="Products" /> */}
      <Banner
        title='Products'
        subtitle='Home › Product'
        backgroundImage={bannerImage}
      />

      <section className='w-full py-12 bg-white'>
        <div className='max-w-7xl mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-5xl font-bold text-[#0B2154] mb-10'>
            OUR PRODUCTS
          </h2>

          {/* Product Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {products.map((item) => (
              <div
                key={item.id}
                className='bg-white shadow-md hover:shadow-xl border-2 border-gray-300 p-4 flex flex-col items-center justify-between transition-transform duration-300 hover:scale-105'
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`rounded-lg w-48 h-48 object-contain mb-4 ${
                    item.id === 1 || item.id === 6 ? 'rotate-[270deg]' : ''
                  }`}
                />
                <h3 className='text-lg font-semibold text-[#0B2154]'>
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
