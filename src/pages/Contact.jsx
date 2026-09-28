import React, { useState } from 'react';
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import Banner from '../components/Banner';
import { Helmet } from "react-helmet";

export default function Contact() {
  const bannerImage = '/banner/contact.jpg';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle form submit to WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;
    if (!name || !email || !phone) {
      alert('Please fill in all required fields.');
      return;
    }

    // Format WhatsApp message
    const whatsappMessage = `*New Contact Form Message*%0A
*Name:* ${name}%0A
*Email:* ${email}%0A
*Phone:* ${phone}%0A
*Message:* ${message || 'N/A'}`;

    // Target WhatsApp number
    const phoneNumber = '+917065650191';

    // Open WhatsApp chat
    window.open(
      `https://wa.me/${phoneNumber}?text=${whatsappMessage}`,
      '_blank'
    );
  };

  return (
    <div>
      <Helmet>
        <title>
          Contact KNT Auto Parts | Enquire for Dealership & Bulk Orders
        </title>
        <meta
          name='description'
          content='Get in touch with KNT Auto Parts in Gurugram. Call or email us for bulk orders, dealership opportunities, or product support. We are here to help!'
        />
      </Helmet>
      <Banner title='Get in Touch With Us' backgroundImage={bannerImage} />

      <div className='min-h-screen bg-white flex flex-col md:flex-row items-stretch p-4 lg:p-30'>
        {/* Left Section */}
        <div className='flex-1 flex flex-col pr-0 md:pr-16'>
          <h1 className='text-2xl md:text-4xl font-bold mb-6'>
            We'd love to hear from you! Leave a message and we will reach out to
            you shortly.
          </h1>
          <p className='mb-6 text-sm lg:text-lg text-gray-700'>
            We’re here to listen and guide you forward.
          </p>
          <div>
            <span className='font-semibold'>Follow us on:</span>
            <div className='flex space-x-3 mt-3'>
              <a
                href='https://www.linkedin.com/company/kntautoparts/'
                className='bg-red-600 text-white p-3 rounded'
              >
                <FaLinkedinIn size={24} />
              </a>
              <a
                href='https://www.facebook.com/profile.php?id=61581376081655'
                className='bg-red-600 text-white p-3 rounded'
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href='https://www.instagram.com/knt_autoparts/'
                className='bg-red-600 text-white p-3 rounded'
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className='flex-1 bg-white flex flex-col justify-center'>
          <form className='space-y-5' onSubmit={handleSubmit}>
            <div>
              <label className='block font-medium mb-2'>Name*</label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Name..'
                className='w-full border-b border-gray-300 focus:outline-none py-2'
                required
              />
            </div>

            <div>
              <label className='block font-medium mb-2'>Email*</label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='email@mail.com'
                className='w-full border-b border-gray-300 focus:outline-none py-2'
                required
              />
            </div>

            <div>
              <label className='block font-medium mb-2'>Phone*</label>
              <input
                type='tel'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                placeholder='Phone no.'
                className='w-full border-b border-gray-300 focus:outline-none py-2'
                required
              />
            </div>

            <div>
              <label className='block font-medium mb-2'>Message</label>
              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='Write your message'
                className='w-full border-b border-gray-300 focus:outline-none py-2'
              ></textarea>
            </div>

            <button
              type='submit'
              className='bg-red-600 text-white cursor-pointer px-8 py-2 rounded hover:bg-red-700 font-bold'
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
