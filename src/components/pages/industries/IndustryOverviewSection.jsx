import React from 'react';
import { motion } from 'framer-motion';
import financialImg from '../../../assets/about-section/financial.png';
import healthcareImg from '../../../assets/about-section/healthcare.png';
import entertainmentImg from '../../../assets/about-section/entertainment.png';
import technologyImg from '../../../assets/about-section/technology.png';
import telecommunicationImg from '../../../assets/about-section/telecommunication.png';
import energyImg from '../../../assets/about-section/energy.png';
import consumerImg from '../../../assets/about-section/consumer.png';
import transportImg from '../../../assets/about-section/transport.png';
import automobileImg from '../../../assets/about-section/automobile.png';

const industries = [
  {
    name: 'Financial Services',
    image: financialImg,
    summary:
      'Cloud-native cores, real-time risk and fraud controls, and personalized digital channels that meet regulatory rigor without slowing growth.',
    strengths: ['RegTech & compliance automation', 'Risk, fraud & credit intelligence', 'Customer experience platforms'],
  },
  {
    name: 'Healthcare',
    image: healthcareImg,
    summary:
      'Interoperable data fabrics, virtual care, and AI-assisted clinical workflows that elevate outcomes and operational resilience.',
    strengths: ['EHR integration & interoperability', 'Clinical decision support & AI copilots', 'HIPAA-compliant architectures'],
  },
  {
    name: 'Media, Entertainment & Gaming',
    image: entertainmentImg,
    summary:
      'Low-latency streaming, live ops, and personalization engines that maximize engagement and monetization across every surface.',
    strengths: ['Edge/CDN acceleration', 'Real-time analytics & recommendations', 'Multi-platform distribution'],
  },
  {
    name: 'Technology Enablement',
    image: technologyImg,
    summary:
      'Platform engineering, golden paths, and developer experience that keep product teams shipping fast and safely.',
    strengths: ['Cloud-native architectures', 'DevEx, DevOps & platform tooling', 'API-first ecosystems'],
  },
  {
    name: 'Telecommunications',
    image: telecommunicationImg,
    summary:
      '5G, edge, and IoT stacks with automated assurance so networks stay performant while customer journeys feel effortless.',
    strengths: ['Network optimization & automation', 'Edge computing strategies', 'CX transformation'],
  },
  {
    name: 'Energy',
    image: energyImg,
    summary:
      'Smart grids, renewables orchestration, and OT/IT convergence with predictive maintenance to keep uptime and sustainability high.',
    strengths: ['Grid modernization & IoT', 'Energy trading & dispatch platforms', 'Predictive maintenance systems'],
  },
  {
    name: 'Consumer & Industrial Products',
    image: consumerImg,
    summary:
      'Digitized plants and supply chains, demand sensing, and omnichannel commerce that shrink cycle times and boost margin.',
    strengths: ['Supply chain visibility', 'Manufacturing automation', 'E-commerce & omnichannel'],
  },
  {
    name: 'Transportation & Travel',
    image: transportImg,
    summary:
      'Mobility platforms, logistics optimization, and traveler experience that keep fleets efficient and passengers delighted.',
    strengths: ['Fleet & route optimization', 'Logistics analytics & orchestration', 'Customer journey platforms'],
  },
  {
    name: 'Automotive & Mobility',
    image: automobileImg,
    summary:
      'Software-defined vehicles, connected services, and in-cabin experiences backed by telemetry and safety-grade platforms.',
    strengths: ['Connected vehicle platforms', 'Predictive maintenance & telematics', 'In-vehicle UX & infotainment'],
  },
];

const IndustryOverviewSection = () => (
  <section className="relative overflow-hidden bg-white py-20">
    {/* Soft background accents */}
    <motion.div
      className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl"
      animate={{ y: [0, 16, 0], x: [0, 10, 0], opacity: [0.25, 0.4, 0.25] }}
      transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-red-200/15 blur-3xl"
      animate={{ y: [0, -18, 0], x: [0, -12, 0], opacity: [0.22, 0.36, 0.22] }}
      transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
    />

    <div className="container relative z-10 mx-auto px-4 lg:px-12">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">What we specialize in</p>
        <h2 className="mt-4 text-4xl font-bold text-gray-900">Purpose-built industry playbooks</h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
          Every industry squad is backed by accelerators, research, and compliance experts so we can move from ideation to measurable impact quickly.
        </p>
      </div>
      <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {industries.map((industry, index) => (
          <motion.div
            key={industry.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="group overflow-hidden rounded-3xl border border-blue-50 bg-white shadow-xl transition-all duration-300 hover:shadow-2xl"
          >
            <div className="relative h-44 w-full overflow-hidden">
              <motion.img
                src={industry.image}
                alt={industry.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent opacity-70" />
              <div className="absolute left-5 bottom-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/90">
                0{index + 1}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                {industry.name}
              </h3>
              <p className="mt-3 text-sm text-gray-600">{industry.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {industry.strengths.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-red-500"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustryOverviewSection;
