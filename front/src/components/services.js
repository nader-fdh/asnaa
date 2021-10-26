import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Services from './section-components/services';
import PricingTable from './section-components/pricing-table';
import TestimonialV2 from './section-components/testimonial-v2';
import Subscribe from './section-components/subscribe';
import FooterV2 from './global-components/footer-v2';

const Service = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Services" />
        <Services customclass="pd-top-112" />
        <PricingTable />
        <TestimonialV2 />
        <Subscribe />
        <FooterV2 />
    </div>
}

export default Service

