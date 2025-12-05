import React from 'react';
import AboutHero from './about/AboutHero';
import MissionVisionSection from './about/MissionVisionSection';
import CoreValuesSection from './about/CoreValuesSection';
import TimelineSection from './about/TimelineSection';
import CultureImpactSection from './about/CultureImpactSection';
import AboutCTASection from './about/AboutCTASection';

const About = () => {
  return (
    <div className="bg-gray-50">
      <AboutHero />
      <MissionVisionSection />
      <CoreValuesSection />
      <TimelineSection />
      <CultureImpactSection />
      <AboutCTASection />
    </div>
  );
};

export default About;
