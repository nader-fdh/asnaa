import React from 'react';
import Navbar from './global-components/navbar';
import SliderV2 from './section-components/slider-v2';
import Features from './section-components/features';
import PricingTable from './section-components/pricing-table';
import SoftBoxManage from './section-components/soft-box-manage';
import VideoV2 from './section-components/video-v2';
// import Screenshot from './section-components/screenshot';
import TestimonialV2 from './section-components/testimonial-v2';
import Subscribe from './section-components/subscribe';
import FooterV2 from './global-components/footer-v2';

import Services_V5 from './section-components/services-v5';

const Home_V2 = () => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <Navbar />
      <SliderV2 />
      <Features />
      {/* <VideoV2 /> */}
      {/* <SoftBoxManage /> */}

      <Services_V5 />

      {/* <TestimonialV2 /> */}
      {/* <Subscribe /> */}
      <FooterV2 />
    </div>
  );
};

export default Home_V2;
