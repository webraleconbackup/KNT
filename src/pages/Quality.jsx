import React from 'react';
import Banner from '../components/Banner';
import PerformanceQuality from '../components/PerformanceQuality';
import { Helmet } from "react-helmet";

const Quality = () => {
  const bannerImage = '/banner/top-banner1.png';
  return (
    <div>
      <Helmet>
        <title>
          Quality Assurance | Certified Auto Parts Manufacturer - KNT
        </title>
        <meta
          name='description'
          content='Quality is our priority. From raw material to final testing, KNT parts undergo strict QC checks to ensure durability, safety, and performance under rugged conditions.'
        />
      </Helmet>
      <Banner
        title='QUALITY'
        subtitle='Home › QUALITY'
        backgroundImage={bannerImage}
      />
      <PerformanceQuality />
    </div>
  );
};

export default Quality;
