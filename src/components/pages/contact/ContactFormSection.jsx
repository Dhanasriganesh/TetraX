import React, { useState } from 'react';
import inTouchImage from '../../../assets/about-section/in touch.png';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    mobile: '',
    topic: '',
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
      payload.append('company', formData.company);
      payload.append('email', formData.email);
      payload.append('mobile', formData.mobile);
      payload.append('topic', formData.topic);
      payload.append('message', formData.message);
      if (file) payload.append('file', file);

      const response = await fetch(`${API_URL}/contact`, {
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
        setSubmitStatus({ type: 'success', message: 'Thank you! Your message has been sent.' });
        setFormData({ name: '', company: '', email: '', mobile: '', topic: '', message: '' });
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
    <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-600">Contact form</p>
          <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 px-2">Share your brief or RFP</h2>
          <p className="mx-auto mt-2 sm:mt-3 max-w-xl text-sm sm:text-base text-gray-600 px-4">
            Upload documents, outlines, or supporting files. We keep everything confidential and respond with next steps.
          </p>
        </div>
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 items-stretch">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1 h-full min-h-[250px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-0">
            <img 
              src={inTouchImage} 
              alt="Connect with us"
              className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
            />
          </div>
          
          {/* Right side - Form */}
          <form onSubmit={handleSubmit} className="order-1 lg:order-2 h-full flex flex-col rounded-2xl sm:rounded-3xl border border-gray-100 bg-gray-50 p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl">
          <div className="flex-grow">
          <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
            <div>
              <label className="text-xs font-semibold text-gray-700" htmlFor="name">Full name</label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                placeholder="Alex Morgan"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-700" htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                placeholder="Nexus AI"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-700" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-700" htmlFor="mobile">Mobile number</label>
              <input
                id="mobile"
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                placeholder="+1 234 567 8900"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-xs font-semibold text-gray-700" htmlFor="topic">Topic</label>
              <select
                id="topic"
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                required
                className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
              >
                <option value="">Select</option>
                <option value="strategy">Strategy / innovation</option>
                <option value="platforms">Platforms / engineering</option>
                <option value="ai">AI & automation</option>
                <option value="careers">Careers</option>
                <option value="media">Media / partnerships</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <label className="text-xs font-semibold text-gray-700" htmlFor="message">How can we help?</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none resize-y"
              placeholder="Share context, goals, and timelines."
            ></textarea>
          </div>
          <div className="mt-4">
            <label className="text-xs font-semibold text-gray-700" htmlFor="attachments">Supporting file (PDF, DOCX, ZIP, PPTX)</label>
            <input
              id="attachments"
              type="file"
              accept=".pdf,.doc,.docx,.zip,.ppt,.pptx"
              onChange={handleFileChange}
              className="mt-1.5 w-full rounded-xl border border-dashed border-gray-300 bg-white px-3 py-2 text-xs text-gray-600 file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
          </div>
          <div className="mt-6 sm:mt-auto space-y-2">
            {submitStatus.message && (
              <div
                className={`rounded-xl border px-3 py-2 text-xs font-semibold ${
                  submitStatus.type === 'success'
                    ? 'border-green-200 bg-green-50 text-green-700'
                    : 'border-red-200 bg-red-50 text-red-700'
                }`}
              >
                {submitStatus.message}
              </div>
            )}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`rounded-full bg-blue-600 px-5 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 ${
                  isSubmitting ? 'opacity-60 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send message'}
              </button>
              {submitted && submitStatus.type === 'success' && (
                <span className="text-xs font-semibold text-green-600">Thanks! We'll be in touch soon.</span>
              )}
            </div>
          </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
