import React from 'react';
import { motion } from 'framer-motion';
import trainingHero from '../../../assets/about-section/training.png';

const tracks = [
  {
    title: 'Leader immersion',
    description: 'Executive labs and scenario planning sessions that align roadmaps and investment theses.',
  },
  {
    title: 'Maker studios',
    description: 'Hands-on sprints for engineers, designers, and data scientists using live codebases and datasets.',
  },
  {
    title: 'Operator enablement',
    description: 'Change, support, and success teams learn to run and scale new products via playbooks and simulations.',
  },
];

const curriculum = [
  'AI literacy to advanced GenAI engineering',
  'Product discovery, experimentation, and growth',
  'DevSecOps, SRE, and platform automation',
  'Customer experience research and service design',
];

const outcomes = [
  {
    org: 'National bank',
    detail: 'Upskilled 600+ product and engineering leaders in responsible AI, accelerating approvals by 40%.',
  },
  {
    org: 'Healthcare system',
    detail: 'Clinician-facing academy delivered 95% adoption of virtual care tools across 42 hospitals.',
  },
  {
    org: 'Retail group',
    detail: 'Store operations training enabled 20k associates with AI copilots, driving 19% cost savings.',
  },
];

const Training = () => (
  <div className="bg-gray-50">
    <section className="relative overflow-hidden pt-24">
      <motion.img
        initial={{ opacity: 0.6, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        src={trainingHero}
        alt="Training"
        className="w-full h-auto max-h-[360px] object-cover rounded-3xl shadow-2xl border border-white/50"
      />
    </section>

    <section className="bg-white py-20">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Tracks</p>
          <h2 className="mt-4 text-4xl font-bold text-gray-900">Tailored journeys for every role</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tracks.map((track) => (
            <motion.div key={track.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4 }} className="rounded-3xl border border-gray-100 bg-gray-50 p-6 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900">{track.title}</h3>
              <p className="mt-3 text-sm text-gray-600">{track.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-gray-50 py-20">
      <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-2 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4 }} className="rounded-3xl border border-white bg-white p-8 shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Curriculum</p>
          <h3 className="mt-3 text-3xl font-semibold text-gray-900">Always-on learning ecosystems</h3>
          <ul className="mt-6 space-y-4 text-sm text-gray-700">
            {curriculum.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 inline-block h-2 w-2 rounded-full bg-blue-600"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4, delay: 0.1 }} className="rounded-3xl border border-white bg-white p-8 shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Enablement</p>
          <h3 className="mt-3 text-3xl font-semibold text-gray-900">Measurable uplift</h3>
          <p className="mt-4 text-sm text-gray-600">
            We baseline skills before kickoff and monitor performance after launch, providing leaders with dashboards that tie capability growth to business impact.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="bg-white py-20">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Outcomes</p>
          <h2 className="mt-4 text-4xl font-bold text-gray-900">Academies that change how teams work</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {outcomes.map((item) => (
            <motion.div key={item.org} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4 }} className="rounded-3xl border border-gray-100 bg-gray-50 p-6 shadow-lg">
              <p className="text-xs uppercase tracking-[0.3em] text-blue-500">{item.org}</p>
              <p className="mt-3 text-sm text-gray-700">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Training;
