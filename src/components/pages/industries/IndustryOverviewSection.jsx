import React from 'react';
import { motion } from 'framer-motion';

const industries = [
  {
    name: 'Financial Services',
    summary: 'Digital transformation, regulatory compliance, and AI-powered solutions for banking, insurance, and fintech organizations.',
    strengths: ['RegTech + compliance automation', 'Risk analytics + fraud detection', 'Customer experience platforms'],
  },
  {
    name: 'Healthcare',
    summary: 'Patient care optimization, clinical data systems, and telemedicine platforms that improve outcomes and operational efficiency.',
    strengths: ['EHR integration + interoperability', 'Clinical decision support', 'HIPAA-compliant architectures'],
  },
  {
    name: 'Media, Entertainment & Gaming',
    summary: 'Content platforms, streaming infrastructure, and interactive experiences that engage audiences and drive monetization.',
    strengths: ['Content delivery networks', 'Real-time analytics + personalization', 'Multi-platform distribution'],
  },
  {
    name: 'Technology Enablement',
    summary: 'Platform engineering, developer experience, and infrastructure modernization that accelerates innovation cycles.',
    strengths: ['Cloud-native architectures', 'DevOps + platform tooling', 'API-first ecosystems'],
  },
  {
    name: 'Telecommunications',
    summary: '5G networks, IoT solutions, and connectivity platforms that power next-generation communication services.',
    strengths: ['Network optimization + automation', 'Edge computing strategies', 'Customer experience transformation'],
  },
  {
    name: 'Energy',
    summary: 'Smart grid systems, renewable energy platforms, and operational technology integration for sustainable power management.',
    strengths: ['Grid modernization + IoT', 'Energy trading platforms', 'Predictive maintenance systems'],
  },
  {
    name: 'Consumer & Industrial Products',
    summary: 'Supply chain optimization, smart manufacturing, and digital commerce solutions for consumer and industrial goods.',
    strengths: ['Supply chain visibility', 'Manufacturing automation', 'E-commerce + omnichannel'],
  },
  {
    name: 'Transportation & Travel',
    summary: 'Mobility platforms, logistics optimization, and travel technology that enhance efficiency and customer experiences.',
    strengths: ['Fleet management systems', 'Route optimization + analytics', 'Customer journey platforms'],
  },
  {
    name: 'Automotive & Mobility',
    summary: 'Software-defined vehicle, in-cabin experiences, and connected mobility platforms that keep drivers, fleets, and riders safe and delighted.',
    strengths: ['Connected vehicle platforms', 'Predictive maintenance + telematics', 'In-vehicle UX + infotainment'],
  },
];

const IndustryOverviewSection = () => (
  <section className="bg-white py-20">
    <div className="container mx-auto px-4 lg:px-12">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">What we specialize in</p>
        <h2 className="mt-4 text-4xl font-bold text-gray-900">Purpose-built industry playbooks</h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
          Every industry squad is backed by reusable accelerators, research, and compliance experts so we can move from ideation to measurable impact quickly.
        </p>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {industries.map((industry, index) => (
          <motion.div
            key={industry.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="rounded-3xl border border-gray-100 bg-gray-50 p-6 shadow-xl"
          >
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">0{index + 1}</div>
            <h3 className="mt-3 text-2xl font-semibold text-gray-900">{industry.name}</h3>
            <p className="mt-3 text-sm text-gray-600">{industry.summary}</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              {industry.strengths.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustryOverviewSection;
