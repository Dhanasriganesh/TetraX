import React from 'react';
import { motion } from 'framer-motion';

const mapLocationQuery = encodeURIComponent('11020 David Taylor Dr Suite 100 Charlotte, NC 28262');
const mapLocationUrl = `https://www.google.com/maps/search/?api=1&query=${mapLocationQuery}`;
const mapEmbedUrl = `https://www.google.com/maps?q=${mapLocationQuery}&output=embed`;

const contactDetails = [
  {
    label: 'Headquarters',
    content: (
      <a href={mapLocationUrl} target="_blank" rel="noopener noreferrer" className="text-base text-gray-800 hover:text-blue-600 transition-colors">
        11020 David Taylor Dr Suite 100
        <span className="block text-base">Charlotte, NC 28262</span>
      </a>
    ),
    icon: (
      <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s6-4.686 6-10a6 6 0 10-12 0c0 5.314 6 10 6 10z" />
        <circle cx="12" cy="11" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    content: (
      <a href="tel:+19807371810" className="text-base text-gray-800 hover:text-blue-600 transition-colors">
        +1 (980) 737-1810
      </a>
    ),
    icon: (
      <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 5.25A2.25 2.25 0 014.5 3h1.379a2.25 2.25 0 011.59.659l2.122 2.122a2.25 2.25 0 01.45 2.544l-.675 1.35a2.25 2.25 0 00.51 2.55l3.9 3.9a2.25 2.25 0 002.55.51l1.35-.675a2.25 2.25 0 012.544.45l2.122 2.122a2.25 2.25 0 01.659 1.59V19.5a2.25 2.25 0 01-2.25 2.25h-1.5C9.507 21.75 2.25 14.493 2.25 5.25V3.75z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    content: (
      <a href="mailto:info@nexusaisol.com" className="text-base text-gray-800 hover:text-blue-600 transition-colors">
        info@nexusaisol.com
      </a>
    ),
    icon: (
      <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5l8.25 5.25L19.5 7.5M5.25 5.25h13.5A1.25 1.25 0 0120 6.5v11a1.25 1.25 0 01-1.25 1.25H5.25A1.25 1.25 0 014 17.5v-11A1.25 1.25 0 015.25 5.25z" />
      </svg>
    ),
  },
];

const ContactInfoSection = () => (
  <section className="bg-white py-20">
    <div className="container mx-auto px-4 lg:px-12">
      <div className="grid gap-10 lg:grid-cols-[2fr_3fr]">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="rounded-[32px] border border-gray-100 bg-gray-50 p-8 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-200 bg-white">
              <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 3h5v5m0-5L13 11" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 21H3v-5m0 5l8-8" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Connect with us</p>
              <h2 className="text-3xl font-bold text-gray-900">Get in touch</h2>
            </div>
          </div>
          <div className="mt-8 space-y-6 text-gray-700">
            {contactDetails.map((detail) => (
              <div key={detail.label} className="flex gap-4">
                <span>{detail.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-gray-500">{detail.label}</p>
                  <div className="text-base text-gray-800">{detail.content}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }} className="rounded-[32px] border border-blue-100 bg-blue-50 p-8 shadow-xl">
          <h3 className="text-2xl font-semibold text-blue-900">How we can help</h3>
          <p className="mt-3 text-sm text-blue-900/80">
            Tell us about your project, partnership idea, press inquiry, or talent question. We will route it to the right team immediately.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-blue-900">
            <li>- Transformation strategy & innovation workshops</li>
            <li>- Platform modernization and AI copilots</li>
            <li>- Careers, partnerships, and media</li>
          </ul>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-12 rounded-[32px] border border-gray-200 bg-white shadow-2xl overflow-hidden"
      >
        <div className="grid gap-0 md:grid-cols-[2fr_3fr]">
          <div className="p-8 space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Visit us</p>
            <h3 className="text-2xl font-bold text-gray-900">Map Overview</h3>
            <p className="text-sm text-gray-600">
              Preview our headquarters location and tap through to open a full interactive map experience.
            </p>
            <a
              href={mapLocationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-blue-600 px-6 py-2 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-600 hover:text-white"
            >
              Open in Google Maps
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5H19.5V10.5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 4.5L10.5 13.5" />
              </svg>
            </a>
          </div>
          <div className="min-h-[320px] bg-gray-200">
            <iframe
              title="Nexus AI Headquarters Map"
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactInfoSection;
