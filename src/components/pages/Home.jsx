import React from 'react';
import HeroSection from './sections/HeroSection';
import TrustedCompanySection from './sections/TrustedCompanySection';
import IndustryExperienceSection from './sections/IndustryExperienceSection';
import HowWeWorkSection from './sections/HowWeWorkSection';
import WhyChooseUsSection from './sections/WhyChooseUsSection';
import StatisticsSection from './sections/StatisticsSection';
import CTASection from './sections/CTASection';
import ClientsSection from './sections/ClientsSection';
import TestimonialsSection from './sections/TestimonialsSection';
import LocationsSection from './sections/LocationsSection';

function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <TrustedCompanySection />
      <IndustryExperienceSection />
      <HowWeWorkSection />
      <WhyChooseUsSection />
      <StatisticsSection />
      <CTASection />
      <ClientsSection />
      <TestimonialsSection />
      <LocationsSection />
    </div>
  );
}

export default Home;
