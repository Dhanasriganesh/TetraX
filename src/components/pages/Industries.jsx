import React from 'react';
import IndustriesHero from './industries/IndustriesHero';
import IndustryOverviewSection from './industries/IndustryOverviewSection';
import IndustryDetailPanels from './industries/IndustryDetailPanels';
import IndustryEcosystemSection from './industries/IndustryEcosystemSection';
import IndustriesCTASection from './industries/IndustriesCTASection';

const Industries = () => {
  return (
    <div className="bg-gray-50">
      <IndustriesHero />
      <IndustryOverviewSection />
      <IndustryDetailPanels />
      <IndustryEcosystemSection />
      <IndustriesCTASection />
    </div>
  );
};

export default Industries;
