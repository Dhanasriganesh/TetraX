import React from 'react';
import { motion } from 'framer-motion';

const heroData = [
  { label: 'Learners enabled', value: '4,200+' },
  { label: 'Academy satisfaction', value: '4.8/5' },
  { label: 'Programs per year', value: '45' },
];

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
    <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-800 py-28 text-white">
      <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">Training</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">Build confident, AI-ready teams with immersive academies.</h1>
          <p className="text-lg text-white/80">
            We create blended learning experiences combining inspiration, live coaching, and applied work so skills stick and teams can own the transformation.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-900 shadow-xl">Plan an academy</button>
            <button className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white/90">View curriculum</button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid gap-4 sm:grid-cols-3">
            {heroData.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/20 bg-white/10 p-4 text-center">
                <p className="text-2xl font-semibold">{item.value}</p>
                <p className="text-xs uppercase tracking-wide text-white/70">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
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
