import React from 'react';
import { motion } from 'framer-motion';
import financialImg from '../../../assets/about-section/financial.png';
import healthcareImg from '../../../assets/about-section/healthcare.png';
import entertainmentImg from '../../../assets/about-section/entertainment.png';
import telecommunicationImg from '../../../assets/about-section/telecommunication.png';
import energyImg from '../../../assets/about-section/energy.png';
import consumerImg from '../../../assets/about-section/consumer.png';
import transportImg from '../../../assets/about-section/transport.png';
import automobileImg from '../../../assets/about-section/automobile.png';
// Additional industry images
import educationImg from '../../../assets/about-section/technology.png';
import governmentImg from '../../../assets/about-section/govt_public.png';
import insuranceImg from '../../../assets/about-section/insurance.png';
import logisticsImg from '../../../assets/about-section/transport.png';
import oilGasImg from '../../../assets/about-section/Oil-Gas.jpg';
import manufacturingImg from '../../../assets/about-section/manufacturing.jpg';
import travelHospitalityImg from '../../../assets/about-section/travel-hospitality.jpg';

const industries = [
  {
    name: 'Banking & Financial Services',
    image: financialImg,
    summary:
      'Cloud-native cores, real-time risk and fraud controls, and personalized digital channels that meet regulatory rigor without slowing growth.',
    strengths: ['RegTech & compliance automation', 'Risk, fraud & credit intelligence', 'Digital banking platforms'],
  },
  {
    name: 'Healthcare & Life Sciences',
    image: healthcareImg,
    summary:
      'Interoperable data fabrics, virtual care, and AI-assisted clinical workflows that elevate outcomes and operational resilience.',
    strengths: ['EHR integration & interoperability', 'Clinical decision support & AI copilots', 'HIPAA-compliant architectures'],
  },
  {
    name: 'Media & Entertainment',
    image: entertainmentImg,
    summary:
      'Low-latency streaming, live ops, and personalization engines that maximize engagement and monetization across every surface.',
    strengths: ['Edge/CDN acceleration', 'Real-time analytics & recommendations', 'Multi-platform distribution'],
  },
  {
    name: 'Telecommunications',
    image: telecommunicationImg,
    summary:
      '5G, edge, and IoT stacks with automated assurance so networks stay performant while customer journeys feel effortless.',
    strengths: ['Network optimization & automation', 'Edge computing strategies', 'CX transformation'],
  },
  {
    name: 'Energy & Utilities',
    image: energyImg,
    summary:
      'Smart grids, renewables orchestration, and OT/IT convergence with predictive maintenance to keep uptime and sustainability high.',
    strengths: ['Grid modernization & IoT', 'Energy trading & dispatch platforms', 'Predictive maintenance systems'],
  },
  {
    name: 'Oil & Gas',
    image: oilGasImg,
    summary:
      'Upstream and downstream solutions, exploration technologies, and operational systems for the oil and gas industry.',
    strengths: ['Exploration & production systems', 'Pipeline management', 'Refining operations'],
  },
  {
    name: 'Retail & Consumer Goods',
    image: consumerImg,
    summary:
      'E-commerce platforms, retail management systems, and consumer engagement solutions that drive sales and customer loyalty.',
    strengths: ['E-commerce platforms', 'Inventory management', 'Customer experience solutions'],
  },
  {
    name: 'Manufacturing',
    image: manufacturingImg,
    summary:
      'Digitized plants and supply chains, demand sensing, and Industry 4.0 solutions that shrink cycle times and boost margin.',
    strengths: ['Supply chain visibility', 'Manufacturing automation', 'IoT & smart factories'],
  },
  {
    name: 'Transportation & Logistics',
    image: logisticsImg,
    summary:
      'Supply chain optimization, warehouse management systems, and logistics platforms that improve efficiency and visibility.',
    strengths: ['Fleet & route optimization', 'Warehouse management systems', 'Supply chain analytics'],
  },
  {
    name: 'Travel & Hospitality',
    image: travelHospitalityImg,
    summary:
      'Hospitality management systems, booking platforms, and travel technology solutions that enhance guest experiences and operations.',
    strengths: ['Property management systems', 'Booking & reservation platforms', 'Guest experience solutions'],
  },
  {
    name: 'Automotive',
    image: automobileImg,
    summary:
      'Software-defined vehicles, connected services, and in-cabin experiences backed by telemetry and safety-grade platforms.',
    strengths: ['Connected vehicle platforms', 'Predictive maintenance & telematics', 'In-vehicle UX & infotainment'],
  },
  {
    name: 'Education',
    image: educationImg,
    summary:
      'EdTech solutions, learning management systems, and educational platforms that transform teaching and learning experiences.',
    strengths: ['Learning management systems', 'Student information systems', 'Online education platforms'],
  },
  {
    name: 'Government & Public Sector',
    image: governmentImg,
    summary:
      'Digital government services, public sector transformation, and citizen engagement platforms that improve governance and accessibility.',
    strengths: ['Digital government platforms', 'Citizen services portals', 'Public sector modernization'],
  },
  {
    name: 'Insurance',
    image: insuranceImg,
    summary:
      'Insurance technology platforms, claims processing systems, and risk assessment tools that streamline operations and customer service.',
    strengths: ['Claims management systems', 'Policy administration platforms', 'Risk analytics & underwriting'],
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
                {String(index + 1).padStart(2, '0')}
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
