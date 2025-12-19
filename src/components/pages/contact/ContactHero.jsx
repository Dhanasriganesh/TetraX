import React from 'react';
import backgroundImage from '../../../assets/about-section/GET IN TOUCH WITH US.png';

// Preload hero image since it's above the fold
const preloadHeroImage = (src) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
};

// Preload on component mount
if (typeof window !== 'undefined') {
  preloadHeroImage(backgroundImage);
}

const ContactHero = () => (
  <section 
    data-header-theme="hero"
    className="relative overflow-hidden min-h-screen"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
  </section>
);

export default ContactHero;
