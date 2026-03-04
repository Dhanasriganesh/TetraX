import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const JOB = {
  title: 'IT Project Manager',
  employmentType: 'Full-Time',
  postedBy: 'Admin',
  noOfOpenings: '2',
  salary: '$150,000.00/year',
  startDate: '03-04-2026',
  endDate: '03-17-2026',
  location: '11020 David Taylor Dr #100 Charlotte, NC 28262, USA',
  address: '11020 David Taylor Dr #100 Charlotte, NC 28262, USA',
  positionSummary: `The IT Project Manager will support the planning, coordination, and execution of enterprise technology initiatives. The position requires specialized knowledge in computer science principles, software development lifecycle (SDLC), systems integration, and project management methodologies. The role involves collaboration with cross-functional technical teams and business stakeholders to ensure effective implementation of IT solutions.`,
  detailedDuties: [
    'Serve as liaison between project consultants and internal technical teams to ensure alignment of business and technical requirements.',
    'Collaborate with system analysts, software developers, and QA engineers to analyze technical requirements and assist in solution mapping.',
    'Gather and document business and functional requirements, conduct gap analysis, and assist in preparing technical solution design documentation.',
    'Analyze project needs including system architecture considerations, data processing workflows, and integration requirements.',
    'Assist in planning and coordinating IT initiatives including e-commerce platforms, client/server systems, data processing systems, and data warehousing environments.',
    'Support development and execution of project implementation plans, timelines, and resource allocation strategies.',
    'Track project milestones, deliverables, and adherence to SDLC methodologies.',
    'Prepare technical documentation including project plans, deployment checklists, risk assessments, and status reports.',
    'Monitor assigned project tasks to ensure compliance with quality standards and escalate technical risks or delays.',
    'Utilize project management tools to track workflow, resource assignments, and reporting metrics.',
    'Assist senior project managers in budgeting analysis and timeline forecasting.',
  ],
  minimumRequirements: [
    "Master's degree in Computer Science, Information Technology, Engineering, or a closely related field.",
    '1–2 years of experience in software development and/or IT project management support.',
    'Knowledge of: Software Development Life Cycle (SDLC); Systems analysis and design; Project management methodologies (Agile, Scrum, or Waterfall); Database and data processing systems.',
    'Strong analytical, technical documentation, and communication skills.',
  ],
  toolsAndTechnologies: 'Jira, MS Project, Confluence, SQL-based systems, data warehousing platforms, enterprise application environments.',
  benefits: 'Standard Company Benefits.',
  eeo: 'Nexus AI solution is an Equal Opportunity Employer. All qualified applicants will receive consideration without regard to race, color, religion, sex, national origin, disability, or veteran status.',
};

const CareersHeader = () => (
  <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-3 flex flex-wrap items-center justify-between gap-2 rounded-b-xl shadow-sm">
    <span className="text-lg font-bold">Open Roles</span>
  </div>
);

const ApplicationFormSection = () => {
  const [view, setView] = useState('card'); // 'card' | 'details' | 'form'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    role: '',
    message: '',
  });
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const getApiBaseUrl = () =>
    import.meta.env.VITE_API_URL || '/api';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSubmitted(false);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0] || null);
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const API_URL = getApiBaseUrl();
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('mobile', formData.mobile);
      payload.append('role', formData.role || JOB.title);
      payload.append('message', formData.message);
      if (file) payload.append('file', file);

      const response = await fetch(`${API_URL}/careers/apply`, {
        method: 'POST',
        body: payload,
      });

      if (!response.ok) {
        const errorText = await response.text();
        let errorData;
        try {
          errorData = JSON.parse(errorText);
        } catch {
          errorData = { error: 'Server error. Please try again later.' };
        }
        throw new Error(errorData.error || `Server error: ${response.status}`);
      }

      const data = await response.json();
      if (data.success) {
        setSubmitStatus({ type: 'success', message: 'Thank you! Your application has been sent.' });
        setFormData({ name: '', email: '', mobile: '', role: '', message: '' });
        setFile(null);
        e.target.reset();
        setSubmitted(true);
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Unable to send. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // —— View 1: Job card — Careers bar is the card's header (one unit)
  if (view === 'card') {
    return (
      <section className="relative bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="rounded-xl shadow-lg border border-gray-200 overflow-hidden bg-white">
            {/* Card header: Careers bar */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-3 flex flex-wrap items-center justify-between gap-2">
              <span className="text-lg font-bold">Open Roles</span>
           
            </div>
            {/* Card body: job content */}
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 uppercase tracking-tight">
                  {JOB.title}
                </h1>
                <span className="inline-flex items-center rounded-md bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                  {JOB.employmentType}
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
                <span><strong className="text-gray-700">Posted By:</strong> {JOB.postedBy}</span>
                <span><strong className="text-gray-700">No Of Openings:</strong> {JOB.noOfOpenings}</span>
                <span><strong className="text-gray-700">Pay/Salary:</strong> {JOB.salary}</span>
                <span><strong className="text-gray-700">Start Date:</strong> {JOB.startDate}</span>
                <span><strong className="text-gray-700">End Date:</strong> {JOB.endDate}</span>
                <span><strong className="text-gray-700">Location:</strong> {JOB.location}</span>
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => setView('details')}
                  className="rounded-lg bg-gradient-to-r from-blue-500 to-teal-500 px-6 py-3 text-white font-semibold shadow-md hover:from-blue-600 hover:to-teal-600 transition"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // —— View 2: Job details — Careers bar is the card's header (one unit)
  if (view === 'details') {
    return (
      <section className="relative bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="rounded-xl shadow-lg border border-gray-200 overflow-hidden bg-white">
            {/* Card header: Careers bar */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-3 flex flex-wrap items-center justify-between gap-2">
              <span className="text-lg font-bold">Open Roles</span>
             
            </div>
            {/* Card body: job details grid */}
            <div className="p-6 sm:p-8">
              <div className="mb-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setView('card')}
                  className="text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  ← Back to open roles
                </button>
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left: Job Details */}
                <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Job Details</h2>
              <ul className="space-y-4 border-l-2 border-dotted border-gray-300 pl-6">
                <li className="flex gap-3">
                  <span className="text-blue-500 shrink-0">👤</span>
                  <div><span className="text-blue-600 text-sm block">Posted By</span><span className="text-gray-900">{JOB.postedBy}</span></div>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 shrink-0">📍</span>
                  <div><span className="text-blue-600 text-sm block">Address</span><span className="text-gray-900">{JOB.address}</span></div>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 shrink-0">💰</span>
                  <div><span className="text-blue-600 text-sm block">Pay/Salary</span><span className="text-gray-900">{JOB.salary}</span></div>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 shrink-0">📋</span>
                  <div><span className="text-blue-600 text-sm block">No Of Openings</span><span className="text-gray-900">{JOB.noOfOpenings}</span></div>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 shrink-0">🕐</span>
                  <div><span className="text-blue-600 text-sm block">Start Date</span><span className="text-gray-900">{JOB.startDate}</span></div>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 shrink-0">🕐</span>
                  <div><span className="text-blue-600 text-sm block">End Date</span><span className="text-gray-900">{JOB.endDate}</span></div>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 shrink-0">📄</span>
                  <div><span className="text-blue-600 text-sm block">Job Type</span><span className="text-gray-900">{JOB.employmentType}</span></div>
                </li>
              </ul>
            </div>

            {/* Right: Description + Apply */}
            <div className="lg:col-span-2 space-y-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 uppercase tracking-tight">
                {JOB.title}
              </h1>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Position Summary</h3>
                <p className="text-gray-700 leading-relaxed">{JOB.positionSummary}</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Detailed Job Duties</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {JOB.detailedDuties.map((duty, i) => (
                    <li key={i}>{duty}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Minimum Requirements</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {JOB.minimumRequirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Tools &amp; Technologies</h3>
                <p className="text-gray-700">{JOB.toolsAndTechnologies}</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Salary</h3>
                <p className="text-gray-700">{JOB.salary}</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Job Benefits</h3>
                <p className="text-gray-700">{JOB.benefits}</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Equal Employment Opportunity</h3>
                <p className="text-gray-700 text-sm">{JOB.eeo}</p>
              </div>

              <button
                type="button"
                onClick={() => setView('form')}
                className="rounded-lg bg-gradient-to-r from-blue-500 to-teal-500 px-6 py-3 text-white font-semibold shadow-md hover:from-blue-600 hover:to-teal-600 transition"
              >
                Apply Now
              </button>
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // —— View 3: Application form — same card + Careers header format, no image
  return (
    <section className="relative bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="rounded-xl shadow-lg border border-gray-200 overflow-hidden bg-white">
          {/* Card header: Careers bar (same as job card / details) */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-3 flex flex-wrap items-center justify-between gap-2">
            <span className="text-lg font-bold">Open Roles</span>

          </div>
          {/* Card body: application form only */}
          <div className="p-6 sm:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Apply for open role</p>
                <h2 className="mt-1 text-xl sm:text-2xl font-bold text-gray-900">{JOB.title}</h2>
              </div>
              <button
                type="button"
                onClick={() => setView('details')}
                className="text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                ← Back to job details
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col">
              <input type="hidden" name="role" value={JOB.title} />
              <div className="grid gap-4 sm:gap-5 md:gap-6 md:grid-cols-2">
                <div>
                  <label className="text-xs sm:text-sm font-semibold text-gray-700" htmlFor="name">Full name</label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1.5 sm:mt-2 w-full rounded-xl sm:rounded-2xl border border-gray-200 bg-gray-50 px-3 sm:px-4 py-2 sm:py-3 text-sm focus:border-blue-500 focus:outline-none"
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="text-xs sm:text-sm font-semibold text-gray-700" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1.5 sm:mt-2 w-full rounded-xl sm:rounded-2xl border border-gray-200 bg-gray-50 px-3 sm:px-4 py-2 sm:py-3 text-sm focus:border-blue-500 focus:outline-none"
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="text-xs sm:text-sm font-semibold text-gray-700" htmlFor="mobile">Mobile number</label>
                  <input
                    id="mobile"
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className="mt-1.5 sm:mt-2 w-full rounded-xl sm:rounded-2xl border border-gray-200 bg-gray-50 px-3 sm:px-4 py-2 sm:py-3 text-sm focus:border-blue-500 focus:outline-none"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="mt-4 sm:mt-5 md:mt-6">
                <label className="text-xs sm:text-sm font-semibold text-gray-700" htmlFor="role">Role of interest</label>
                <input
                  id="role"
                  name="role"
                  value={formData.role || JOB.title}
                  onChange={handleChange}
                  required
                  className="mt-1.5 sm:mt-2 w-full rounded-xl sm:rounded-2xl border border-gray-200 bg-gray-50 px-3 sm:px-4 py-2 sm:py-3 text-sm focus:border-blue-500 focus:outline-none"
                  placeholder=""
                />
              </div>
              <div className="mt-4 sm:mt-5 md:mt-6">
                <label className="text-xs sm:text-sm font-semibold text-gray-700" htmlFor="message">Tell us more</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="mt-1.5 sm:mt-2 w-full rounded-xl sm:rounded-2xl border border-gray-200 bg-gray-50 px-3 sm:px-4 py-2 sm:py-3 text-sm focus:border-blue-500 focus:outline-none resize-y"
                  placeholder=""
                ></textarea>
              </div>
              <div className="mt-4 sm:mt-5 md:mt-6">
                <label className="text-xs sm:text-sm font-semibold text-gray-700" htmlFor="resume">Upload resume / portfolio (* Only .pdf)</label>
                <input
                  id="resume"
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="mt-1.5 sm:mt-2 w-full rounded-xl sm:rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-600 file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>
              <div className="mt-6 space-y-2 sm:space-y-3">
                {submitStatus.message && (
                  <div
                    className={`rounded-xl sm:rounded-2xl border px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold ${
                      submitStatus.type === 'success'
                        ? 'border-green-200 bg-green-50 text-green-700'
                        : 'border-red-200 bg-red-50 text-red-700'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`rounded-full bg-blue-600 px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700 w-full sm:w-auto ${
                      isSubmitting ? 'opacity-60 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit application'}
                  </button>
                  {submitted && submitStatus.type === 'success' && (
                    <span className="text-xs sm:text-sm font-semibold text-green-600">Thanks! We received your details.</span>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationFormSection;
