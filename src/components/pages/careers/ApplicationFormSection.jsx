import React, { useState } from 'react';

const ApplicationFormSection = () => {
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
      payload.append('role', formData.role);
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
        message: error.message || 'Network error. Please check your connection and try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Apply</p>
          <h2 className="mt-4 text-4xl font-bold text-gray-900">Tell us about yourself</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Share your experience, links, and a resume or portfolio file. We review every submission and typically respond within a week.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto mt-12 max-w-3xl rounded-[32px] border border-blue-100 bg-white p-8 shadow-2xl">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="text-sm font-semibold text-gray-700" htmlFor="name">Full name</label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
                placeholder="Alex Morgan"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
                placeholder="alex@nexusai.com"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700" htmlFor="mobile">Mobile number</label>
              <input
                id="mobile"
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
                placeholder="+1 234 567 8900"
              />
            </div>
          </div>
          <div className="mt-6">
            <label className="text-sm font-semibold text-gray-700" htmlFor="role">Role of interest</label>
            <input
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
              placeholder="e.g., Senior Product Designer"
            />
          </div>
          <div className="mt-6">
            <label className="text-sm font-semibold text-gray-700" htmlFor="message">Tell us more</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
              placeholder="Share highlights, links, or what motivates you."
            ></textarea>
          </div>
          <div className="mt-6">
            <label className="text-sm font-semibold text-gray-700" htmlFor="resume">Upload resume / portfolio (PDF, DOCX, ZIP)</label>
            <input
              id="resume"
              type="file"
              accept=".pdf,.doc,.docx,.zip"
              onChange={handleFileChange}
              className="mt-2 w-full rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-600"
            />
          </div>
          <div className="mt-6 space-y-3">
            {submitStatus.message && (
              <div
                className={`rounded-2xl border px-4 py-3 text-sm font-semibold ${
                  submitStatus.type === 'success'
                    ? 'border-green-200 bg-green-50 text-green-700'
                    : 'border-red-200 bg-red-50 text-red-700'
                }`}
              >
                {submitStatus.message}
              </div>
            )}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700 ${
                  isSubmitting ? 'opacity-60 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Submit application'}
              </button>
              {submitted && submitStatus.type === 'success' && (
                <span className="text-sm font-semibold text-green-600">Thanks! We received your details.</span>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ApplicationFormSection;
