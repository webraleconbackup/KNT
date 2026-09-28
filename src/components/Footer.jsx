import React from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      className='relative text-white font-poppins pt-12 pb-16 lg:pb-0 bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: "url('/home-img/welcome.jpg')" }}
    >
      {/* Background overlay for opacity */}
      <div className="absolute inset-0 bg-black/90"></div>

      {/* Content wrapper with relative position to stay above overlay */}
      <div className='relative max-w-7xl mx-auto px-4 md:px-0'>
        {/* ================= TOP SECTION ================= */}
        <div className='grid md:grid-cols-6 gap-10 border-b border-gray-800 pb-10'>
          {/* About KNT */}
          <div className='md:col-span-2'>
            <h2 className='text-lg font-medium'>
              <span className='text-red-500 font-bold text-2xl'>KNT</span>{' '}
              <span className='text-gray-300'>
                Powered By Japanese Technology
              </span>
            </h2>
            <p className='text-gray-300 mt-4 leading-relaxed'>
              KNT Auto Parts is your trusted source for premium-quality
              automotive components, offering everything from radiators and
              clutches to coolant systems for a smooth and reliable ride.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold mb-3'>Quick Links</h3>
            <ul className='space-y-2 text-white'>
              <Link to='/'>
                <li className='hover:text-red-500 hover:ml-2 hover:underline underline-offset-4 transition-all duration-700 cursor-pointer'>
                  Home
                </li>
              </Link>
              <Link to='/who-we-are'>
                <li className='hover:text-red-500 hover:ml-2 hover:underline underline-offset-4 transition-all duration-700 cursor-pointer'>
                  About Us
                </li>
              </Link>
              <Link to='/products'>
                <li className='hover:text-red-500 hover:ml-2 hover:underline underline-offset-4 transition-all duration-700 cursor-pointer'>
                  Products
                </li>
              </Link>
              <Link to='/careers'>
                <li className='hover:text-red-500 hover:ml-2 hover:underline underline-offset-4 transition-all duration-700 cursor-pointer'>
                  Careers
                </li>
              </Link>
              <Link to='/contact'>
                <li className='hover:text-red-500 hover:ml-2 hover:underline underline-offset-4 transition-all duration-700 cursor-pointer'>
                  Contact
                </li>
              </Link>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className='text-lg font-semibold mb-3'>Categories</h3>
            <ul className='space-y-2 text-white'>
              <li className='hover:text-red-500 hover:ml-2 hover:underline underline-offset-4 transition-all duration-700'>
                Radiators
              </li>
              <li className='hover:text-red-500 hover:ml-2 hover:underline underline-offset-4 transition-all duration-700'>
                Coolants
              </li>
              <li className='hover:text-red-500 hover:ml-2 hover:underline underline-offset-4 transition-all duration-700'>
                Clutch Plates
              </li>
              <li className='hover:text-red-500 hover:ml-2 hover:underline underline-offset-4 transition-all duration-700'>
                Brake Parts
              </li>
              <li className='hover:text-red-500 hover:ml-[4px] hover:underline underline-offset-4 transition-all duration-700'>
                Suspension Components
              </li>
            </ul>
          </div>

          {/* Popular Searches */}
          <div>
            <h3 className='text-lg font-semibold mb-3'>Popular Searches</h3>
            <ul className='space-y-2 text-white'>
              <li className='hover:text-red-500 hover:ml-2 hover:underline underline-offset-4 transition-all duration-700'>
                Radiator for Tata Trucks
              </li>
              <li className='hover:text-red-500 hover:ml-2 hover:underline underline-offset-4 transition-all duration-700'>
                Coolant for Mahindra
              </li>
              <li className='hover:text-red-500 hover:ml-2 hover:underline underline-offset-4 transition-all duration-700'>
                Heavy Duty Clutch Plate
              </li>
              <li className='hover:text-red-500 hover:ml-2 hover:underline underline-offset-4 transition-all duration-700'>
                Auto Parts Export
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className='text-lg font-semibold mb-3'>Services</h3>
            <ul className='space-y-2 text-white'>
              <li className='hover:text-red-500 hover:ml-2 hover:underline underline-offset-4 transition-all duration-700'>
                Custom Fabrication
              </li>
              <li className='hover:text-red-500 hover:ml-2 hover:underline underline-offset-4 transition-all duration-700'>
                OEM Replacement Parts
              </li>
              <li className='hover:text-red-500 hover:ml-2 hover:underline underline-offset-4 transition-all duration-700'>
                Export Services
              </li>
              <li className='hover:text-red-500 hover:ml-2 hover:underline underline-offset-4 transition-all duration-700'>
                Product Consultation
              </li>
              <li className='hover:text-red-500 hover:ml-2 hover:underline underline-offset-4 transition-all duration-700'>
                Technical Support
              </li>
            </ul>
          </div>
        </div>

        {/* ================= MIDDLE SECTION ================= */}
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:items-center gap-4 lg:gap-30 border-b border-gray-800 py-8'>
          {/* Customer Support */}
          <div>
            <h4 className='text-lg font-semibold mb-2'>Customer Support</h4>
            <p className='flex items-center gap-2 text-gray-300'>
              <FaPhoneAlt className='text-red-500' /> +91 7065650191
            </p>
            <p className='flex items-center gap-2 text-gray-300 mt-1'>
              <FaEnvelope className='text-red-500' />{' '}
              customercare@kmtcautopart.in
            </p>
          </div>

          {/* Regional Office */}
          <div>
            <h4 className='text-lg font-semibold mb-2'>
              Regional Associates Offices
            </h4>
            <p className='text-gray-300 max-w-xl'>
              <strong>Head Office:</strong> 01, Kankrola, Laalta Wali Tank,
              Kankrola Gurugram Haryana 122505
            </p>
          </div>

          {/* Trust Badge + Social */}
          <div className='flex items-center gap-20 lg:gap-20'>
            <img
              src='footer/trusted-site.webp'
              alt='Trusted Site'
              className='w-30 h-20'
            />
            <img
              src='/footer/made.png'
              alt='Made in India'
              className='w-24 rounded-full bg-white p-1'
            />
          </div>

          <div className='ml-8'>
            <h4 className='text-xl font-semibold mb-2'>Follow Us</h4>
            <div className='flex space-x-3'>
              <a href='https://www.linkedin.com/company/kntautoparts/' className='bg-red-600 text-white p-3 rounded'>
                <FaLinkedinIn size={24} />
              </a>
              <a href='https://www.facebook.com/profile.php?id=61581376081655' className='bg-red-600 text-white p-3 rounded'>
                <FaFacebookF size={24} />
              </a>
              <a href='https://www.instagram.com/knt_autoparts/' className='bg-red-600 text-white p-3 rounded'>
                <FaInstagram size={24} />
              </a>
              {/* <a href='#' className='bg-red-600 text-white p-3 rounded'>
                <FaYoutube size={24} />
              </a> */}
            </div>
          </div>
        </div>

        {/* ================= BOTTOM SECTION ================= */}
        <div className='py-6 text-center text-gray-400 text-sm'>
          <p>
            Designed By{' '}
            <span className='text-white font-semibold'>
              Webralecon Pvt. Ltd.
            </span>{' '}
            | © 2025 KNT Auto Part. All Rights Reserved. Privacy Policy | Terms
            & Conditions | Cancellation Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
