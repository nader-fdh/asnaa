import React from 'react';
import Navbar from './global-components/navbar';
// import PageHeader from './global-components/page-header';
import ContactForm from './section-components/contact-form';
import ContactInfo from './section-components/contact-info';
import FooterV2 from './global-components/footer-v2';

const Contact = () => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <Navbar />
      {/* <PageHeader headertitle="Contact" /> */}
      <ContactForm />
      <ContactInfo />
      <FooterV2 />
    </div>
  );
};

export default Contact;
