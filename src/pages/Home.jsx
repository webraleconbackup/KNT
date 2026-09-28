import React from 'react'
import Hero from '../components/Hero'
import Welcome from '../components/Welcome'
import Aboutknt from '../components/Aboutknt'
import Product from '../components/Product'
import PerformanceBanner from '../components/PerformanceBanner'
import WhyChooseKNT from '../components/WhyChooseKNT'
import FAQ from '../components/FAQ'
import Enquiry from '../components/Enquiry';
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <main>
        <Helmet>
        <title>KNT Auto Parts | Premium Aftermarket Car Parts Manufacturer India.</title>
        <meta
          name='description'
          content="KNT Auto Parts offers OEM-quality aftermarket car parts powered by Japanese technology. Shop radiators, suspension, clutch plates & more. Ride smooth, stay stable."
        />
      </Helmet>
        <Hero />
        <Welcome />
        <Aboutknt />
        <Product />
        <PerformanceBanner />
        <WhyChooseKNT />
        <FAQ />
        <Enquiry />
      </main>
    </div>
  )
}

export default Home
