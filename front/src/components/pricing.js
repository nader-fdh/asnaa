import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import TestimonialV2 from './section-components/testimonial-v2';
import Pricing from './section-components/pricing-page';
import Subscribe from './section-components/subscribe';
import FooterV2 from './global-components/footer-v2';

const PricingPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Pricing" />
        <Pricing customclass="pd-top-112" />
        <TestimonialV2 />
        <Subscribe />
        <FooterV2 />
    </div>
}

export default PricingPage

