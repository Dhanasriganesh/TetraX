import React, { useState } from 'react';
import joinImage from '../../../assets/about-section/join.png';

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
    <section className="relative bg-gradient-to-br from-blue-100 via-white to-red-100 py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-red-400 rounded-full blur-3xl"></div>
      </div>
      <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600">Apply</p>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 px-2">Tell us about yourself</h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-gray-600 px-4">
            Share your experience, links, and a resume or portfolio file. We review every submission and typically respond within a week.
          </p>
        </div>
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 items-stretch">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1 h-full min-h-[250px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-0">
            <img 
              src={joinImage} 
              alt="Join us"
              className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
            />
          </div>
          
          {/* Right side - Form */}
          <form onSubmit={handleSubmit} className="order-1 lg:order-2 h-full flex flex-col rounded-2xl sm:rounded-3xl border border-blue-100 bg-white p-4 sm:p-6 md:p-8 shadow-2xl">
          <div className="flex-grow">
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
                placeholder="Alex Morgan"
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
                placeholder="alex@nexusai.com"
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
                placeholder="+1 234 567 8900"
              />
            </div>
          </div>
          <div className="mt-4 sm:mt-5 md:mt-6">
            <label className="text-xs sm:text-sm font-semibold text-gray-700" htmlFor="role">Role of interest</label>
            <input
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="mt-1.5 sm:mt-2 w-full rounded-xl sm:rounded-2xl border border-gray-200 bg-gray-50 px-3 sm:px-4 py-2 sm:py-3 text-sm focus:border-blue-500 focus:outline-none"
              placeholder="e.g., Senior Product Designer"
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
              placeholder="Share highlights, links, or what motivates you."
            ></textarea>
          </div>
          <div className="mt-4 sm:mt-5 md:mt-6">
            <label className="text-xs sm:text-sm font-semibold text-gray-700" htmlFor="resume">Upload resume / portfolio (PDF, DOCX, ZIP)</label>
            <input
              id="resume"
              type="file"
              accept=".pdf,.doc,.docx,.zip"
              onChange={handleFileChange}
              className="mt-1.5 sm:mt-2 w-full rounded-xl sm:rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-600 file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
          </div>
          <div className="mt-6 sm:mt-auto space-y-2 sm:space-y-3">
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
    </section>
  );
};

export default ApplicationFormSection;
