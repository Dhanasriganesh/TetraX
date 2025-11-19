import React from 'react';
import ContactHero from './contact/ContactHero';
import ContactInfoSection from './contact/ContactInfoSection';
import SupportChannelsSection from './contact/SupportChannelsSection';
import ContactFormSection from './contact/ContactFormSection';

const Contact = () => {
  return (
    <div className="bg-gray-50">
      <ContactHero />
      <ContactInfoSection />
      <SupportChannelsSection />
      <ContactFormSection />
    </div>
  );
};

export default Contact;
