import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import VideoV2 from './section-components/video-v2';
import WhatWeDo from './section-components/what-we-do';
import TestimonialV2 from './section-components/testimonial-v2';
import Team from './section-components/team';
import Subscribe from './section-components/subscribe';
import FooterV2 from './global-components/footer-v2';

const About = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="About" />
        <VideoV2 customclass="pd-top-120 bg-none" />
        <WhatWeDo customclass="pd-top-80"/>
        <Team />
        <TestimonialV2 />
        <Subscribe />
        <FooterV2 />
    </div>
}

export default About

