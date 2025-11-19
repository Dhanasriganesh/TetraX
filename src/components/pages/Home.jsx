import React from 'react';
import HeroSection from './sections/HeroSection';
import StrategicHighlightsSection from './sections/StrategicHighlightsSection';
import ServicesSection from './sections/ServicesSection';
import SolutionsShowcaseSection from './sections/SolutionsShowcaseSection';
import IndustriesSection from './sections/IndustriesSection';
import VelocityProcessSection from './sections/VelocityProcessSection';
import CaseStudiesShowcaseSection from './sections/CaseStudiesShowcaseSection';
import StatisticsSection from './sections/StatisticsSection';
import InsightsSection from './sections/InsightsSection';
import HomeCTASection from './sections/HomeCTASection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <StrategicHighlightsSection />
      <ServicesSection />
      <SolutionsShowcaseSection />
      <IndustriesSection />
      <VelocityProcessSection />
      <CaseStudiesShowcaseSection />
      <StatisticsSection />
      <InsightsSection />
      <HomeCTASection />
    </div>
  );
};

export default Home;
