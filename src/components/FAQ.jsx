import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What products does KNT Autoparts offer?',
    answer:
      'We provide radiators, clutch plates, coolants, steering, and rubber suspension parts—precision-made for various vehicles.',
  },
  {
    question: 'Are your products OEM certified?',
    answer:
      'Yes, our products follow strict OEM quality guidelines and pass multiple QC checks for long-term performance.',
  },
  {
    question: 'Do you accept bulk or wholesale orders?',
    answer:
      'Absolutely! We work with distributors, retailers, and mechanics to fulfill bulk orders with competitive pricing.',
  },
  {
    question: 'Where is KNT Autoparts based?',
    answer:
      'Our manufacturing and distribution units are located in India, with supply capability across the nation.',
  },
  {
    question: 'How do I place an order?',
    answer:
      'You can use the enquiry form, WhatsApp contact button, or call us directly. Our team will guide you through the process.',
  },
  {
    question: 'What vehicles do your parts support?',
    answer:
      'We support a wide range of vehicles including Maruti, Tata, Mahindra, Hyundai, Toyota, and commercial trucks.',
  },
  {
    question: 'Can I return or exchange a part?',
    answer:
      'Yes, if the product is unused and returned within 7 days of delivery with a valid reason, exchange is available.',
  },
  {
    question: 'How can I become a dealer or partner?',
    answer:
      'Please fill out the contact form or call us. Our business development team will get in touch with dealer onboarding details.',
  },
];

const FAQ = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.15 },
    }),
  };

  return (
    <section className='bg-gray-100 py-16 px-4 md:px-20'>
      <motion.h2
        className='text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Frequently Asked Questions
      </motion.h2>

      <div className='max-w-6xl mx-auto space-y-6'>
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={fadeUp}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            className='bg-white shadow-sm rounded-xl border border-gray-100'
          >
            <details className='group'>
              <summary className='flex justify-between items-center cursor-pointer p-3 text-lg font-semibold text-gray-800'>
                {faq.question}
                <ChevronDown className='w-5 h-5 transition-transform duration-300 group-open:rotate-180' />
              </summary>
              <p className='text-gray-600 px-3 pb-5'>{faq.answer}</p>
            </details>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
