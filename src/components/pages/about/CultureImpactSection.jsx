import React from 'react';
import { motion } from 'framer-motion';

const commitments = [
  'Diversity, equity, and inclusion targets tied to leadership OKRs',
  'Pro-bono innovation programs for nonprofits driving social impact',
  'Carbon-aware architecture guidelines baked into every technical review',
  'Talent exchanges and residencies that upskill client teams in real time',
];

const CultureImpactSection = () => {
  return (
    <section className="bg-blue-950 py-24 text-white">
      <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Culture & Impact</p>
          <h2 className="mt-4 text-4xl font-bold leading-snug">
            Built for people. Grounded in ethics. Driven by measurable impact.
          </h2>
          <p className="mt-6 text-lg text-white/80">
            We invest 5% of annual revenue into internal R&D, learning, and community impact. Our teams co-create with clients, pairing their domain expertise with our modern delivery playbooks.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/20 bg-white/5 p-6">
              <p className="text-4xl font-semibold">82%</p>
              <p className="text-sm uppercase tracking-wide text-white/60">employee engagement</p>
            </div>
            <div className="rounded-3xl border border-white/20 bg-white/5 p-6">
              <p className="text-4xl font-semibold">1200+</p>
              <p className="text-sm uppercase tracking-wide text-white/60">hours of pro-bono advisory</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Our commitments</p>
          <ul className="mt-6 space-y-5 text-base text-white/90">
            {commitments.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="mt-2 inline-block h-3 w-3 rounded-full bg-gradient-to-r from-blue-300 to-purple-300"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 rounded-3xl border border-white/20 bg-white/10 p-6 text-sm text-white/80">
            "Our partnership with Nexus AI accelerated our sustainability roadmap while equipping our teams with the skills to own the change."
            <p className="mt-3 font-semibold text-white">VP of Digital Strategy, Global Energy Leader</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CultureImpactSection;
