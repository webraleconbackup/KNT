import React from 'react';
import { motion } from 'framer-motion';

const Whoweare = () => {
  const images = [
    '/home-img/welcome1.jpg',
    '/home-img/welcome2.jpg',
    '/home-img/welcome3.jpg',
    '/home-img/welcome4.png',
  ];

  return (
    <section className='w-full bg-gray-50 py-12 px-4 lg:px-20 overflow-hidden'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true }}
          className='space-y-6'
        >
          <h2 className='text-2xl md:text-4xl font-bold leading-snug'>
            <span className='text-red-600'>KNT </span>
            <span className='text-black text-[20px] font-bold'>
              Powered By Japanese Technology
            </span>{' '}
            <span className='text-blue-900'>
              specializes in steering, suspension, and rubber components focused
              on the vehicle chassis.
            </span>
          </h2>

          <p className='text-gray-700 text-lg leading-relaxed'>
            With our highly specialized infrastructure and machineries, KNT Auto
            Parts is able to provide customers with OEM quality products that
            ensures a great driving experience.
          </p>

          <p className='text-gray-700 text-lg leading-relaxed'>
            Our focus on precision ensures that our components perform under the
            most rugged environments—making your journey reliable, safe and
            smooth.
          </p>

          <p className='text-xl font-semibold text-blue-900'>
            Experience New Age Technology
          </p>
        </motion.div>

        {/* Images Section */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className='grid grid-cols-1 lg:grid-cols-2 gap-4'
        >
          {images.map((src, i) => (
            <div key={i} className='overflow-hidden rounded-xl shadow'>
              <motion.img
                src={src}
                alt={`KNT Machinery ${i + 1}`}
                className='w-full h-56 object-cover hover:scale-105 transition-transform duration-500'
                whileHover={{ scale: 1.05 }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Whoweare;
