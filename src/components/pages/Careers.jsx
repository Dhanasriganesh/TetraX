import React from 'react';
import CareersHero from './careers/CareersHero';
import BenefitsSection from './careers/BenefitsSection';
import OpenRolesSection from './careers/OpenRolesSection';
import CultureSection from './careers/CultureSection';
import ApplicationFormSection from './careers/ApplicationFormSection';

const Careers = () => {
  return (
    <div className="bg-gray-50">
      <CareersHero />
      <BenefitsSection />
      <OpenRolesSection />
      <CultureSection />
      <ApplicationFormSection />
    </div>
  );
};

export default Careers;
