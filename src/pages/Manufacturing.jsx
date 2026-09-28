import React from 'react'
import Banner from '../components/Banner'
import Manufacturings from '../components/Manufacturings';
import CoolantPlant from '../components/CoolantPlant';
import Suspension from '../components/Suspension';
import Lubricant from '../components/Lubricant';
import { Helmet } from "react-helmet";

const Manufacturing = () => {
  const bannerImage = '/banner/top-banner1.png';
  return (
    <div>
       <Helmet>
        <title>
         KNT Manufacturing | Advanced Automotive Engineering & Technology
        </title>
        <meta
          name='description'
          content="Discover our state-of-the-art manufacturing facility. We use smart technology and rigorous testing to produce chassis components that meet global OEM standards."
        />
      </Helmet>
      <Banner
       title='MANUFACTURING'
        subtitle='Home › MANUFACTURING'
        backgroundImage={bannerImage}
       />
       <Manufacturings />
       <CoolantPlant />
       <Suspension />
       <Lubricant />
    </div>
  )
}

export default Manufacturing
