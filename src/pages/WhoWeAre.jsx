import React from 'react'
import Welcome from '../components/Welcome'
import Banner from '../components/Banner';
import Whoweare from '../components/Whoweare';
import MissionVision from '../components/MissionVission';
import { Helmet } from "react-helmet";

const WhoWeAre = () => {
  const bannerImage = '/banner/top-banner1.png';
  return (
    <div>
       <Helmet>
        <title>About KNT Auto Parts | Japanese Technology & OEM Quality Standards</title>
        <meta
          name='description'
          content="Learn about KNT Auto Parts' mission to deliver high-performance steering, suspension, and chassis components. Backed by Japanese technology and precision engineering in India."
        />
      </Helmet>
        <Banner
       title='About Us'
        subtitle='Home › Who-We-Are'
        backgroundImage={bannerImage}
       />
      <Welcome />
       <Whoweare />
       <MissionVision />
    </div>
  )
}

export default WhoWeAre
