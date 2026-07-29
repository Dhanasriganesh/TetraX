import React from 'react';
import { motion } from 'framer-motion';
import usaImage from '../../../assets/about-section/usa.webp';
import hydImage from '../../../assets/about-section/hyd.webp';
import ukImage from '../../../assets/about-section/London.jpg';
import SkeletonImage from '../../shared/SkeletonImage';

const locations = [
  {
    title: 'Nexus AI Headquarters',
    location: 'USA',
    address: '11020 David Taylor Dr #100 Charlotte, NC 28262, USA',
    phone: '+1 980 737 1953',
    phoneLink: '+19807371953',
    email: 'contact@nexusaisol.com',
    mapQuery: encodeURIComponent('11020 David Taylor Dr #100 Charlotte, NC 28262'),
    image: usaImage,
  },
  {
    title: 'Nexus AI London Office',
    location: 'London, UK',
    address: 'Universal House, Bescot Industrial Estate, Woden Road West, Wednesbury, WS10 7SF, UK',
    phone: '+1 980 737 1953',
    phoneLink: '+19807371953',
    email: 'contact@nexusaisol.com',
    mapQuery: encodeURIComponent('Universal House, Bescot Industrial Estate, Woden Road West, Wednesbury, WS10 7SF, UK'),
    image: ukImage,
  },
  {
    title: 'Nexus AI Development Center',
    location: 'Hyderabad, India',
    address: 'Ameerpet, Near by metro station, Hyderabad, Telangana, India ',
    phone: '+91 9542142620',
    phoneLink: '+919542142620',
    email: 'contact@nexusaisol.com',
    mapQuery: encodeURIComponent('Ameerpet, Near by metro station, Hyderabad, Telangana, India '),
    image: hydImage,
  },
];

const ContactInfoSection = () => {
  const getMapUrl = (query) => `https://www.google.com/maps/search/?api=1&query=${query}`;
  const getMapEmbedUrl = (query) => `https://www.google.com/maps?q=${query}&output=embed&maptype=roadmap&zoom=15`;

  return (
    <section className="relative bg-gradient-to-br from-blue-100 via-blue-50 to-red-100 py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-red-400 rounded-full blur-3xl"></div>
      </div>
      <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 px-2">Our Locations</h2>
        </motion.div>
        
        <div className="grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-3">
          {locations.map((location, index) => (
            <motion.div
              key={location.location}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl sm:rounded-3xl border p-4 sm:p-5 lg:p-6 shadow-xl flex flex-col ${
                index === 0 
                  ? 'border-blue-200 bg-gradient-to-br from-white to-blue-50' 
                  : 'border-red-200 bg-gradient-to-br from-white to-red-50'
              }`}
            >
              {/* Header with location pin */}
              <div className="flex items-center gap-2 sm:gap-3 mb-4">
                <svg className={`h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 ${index === 0 ? 'text-blue-600' : 'text-red-600'}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <h3 className="text-base sm:text-lg font-bold text-gray-800">{location.location}</h3>
              </div>

              {/* Image */}
              <div className="w-full h-32 sm:h-36 flex-shrink-0 rounded-lg overflow-hidden mb-4">
                <SkeletonImage 
                  src={location.image} 
                  alt={location.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contact info */}
              <div className="space-y-3 flex-1 mb-4">
                <div>
                  <p className="text-xs sm:text-sm font-bold text-gray-800 mb-1">Address:</p>
                  <a
                    href={getMapUrl(location.mapQuery)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-gray-800 hover:text-blue-600 transition-colors break-words"
                  >
                    {location.address}
                  </a>
                </div>
                
                <div className="flex flex-col gap-1">
                  <p className="text-xs sm:text-sm font-bold text-gray-800">Phone:</p>
                  <a
                    href={`tel:${location.phoneLink}`}
                    className={`text-xs sm:text-sm ${index === 0 ? 'text-blue-600 hover:text-blue-700' : 'text-red-600 hover:text-red-700'} transition-colors`}
                  >
                    {location.phone}
                  </a>
                </div>
                
                <div className="flex flex-col gap-1">
                  <p className="text-xs sm:text-sm font-bold text-gray-800">Email:</p>
                  <a
                    href={`mailto:${location.email}`}
                    className={`text-xs sm:text-sm ${index === 0 ? 'text-blue-600 hover:text-blue-700' : 'text-red-600 hover:text-red-700'} transition-colors break-all`}
                  >
                    {location.email}
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden border border-gray-300 h-40 sm:h-44 mt-auto">
                <iframe
                  title={`${location.title} Map`}
                  src={getMapEmbedUrl(location.mapQuery)}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
