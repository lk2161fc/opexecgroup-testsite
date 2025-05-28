import React, { useState } from 'react';

const ContactHero = () => {
  return (
    <section className="hero-section relative">
      <div className="hero-overlay"></div>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Contact Us
        </h1>
        <p className="mt-2 text-2xl font-semibold text-blue-600">
          Get in Touch with OpExec Group
        </p>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });
    
    try {
      // For now, we'll just simulate a successful form submission
      // In Phase 4, this will be replaced with an actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate successful submission
      setFormStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
      
      // Redirect to thank you page after successful submission
      window.location.href = '/thank-you';
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({ 
        submitting: false, 
        submitted: false, 
        error: 'There was an error submitting your message. Please try again.' 
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <div className="mt-1">
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <div className="mt-1">
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
          <div className="mt-1">
            <input
              type="text"
              name="company"
              id="company"
              value={formData.company}
              onChange={handleChange}
              className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <div className="mt-1">
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
            />
          </div>
        </div>
        
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <div className="mt-1">
            <textarea
              name="message"
              id="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
            ></textarea>
          </div>
        </div>
        
        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={formStatus.submitting}
            className={`w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${formStatus.submitting ? 'opacity-75 cursor-not-allowed' : ''}`}
          >
            {formStatus.submitting ? 'Submitting...' : 'Send Message'}
          </button>
        </div>
      </div>
      
      {formStatus.error && (
        <div className="sm:col-span-2">
          <div className="p-4 text-sm text-red-700 bg-red-100 rounded-md">
            {formStatus.error}
          </div>
        </div>
      )}
    </form>
  );
};

const GoogleFormEmbed = () => {
  return (
    <div id="form-container" className="overflow-hidden">
      <iframe 
        id="google-form" 
        src="https://docs.google.com/forms/d/e/1FAIpQLSfUSkOl9hiTflOHMENscBtQETeqAmCkO6GNryh0SD8UKHgmYA/viewform?embedded=true&usp=pp_url" 
        width="100%" 
        height="840" 
        frameBorder="0" 
        marginHeight="0" 
        marginWidth="0"
        title="Contact Form"
      >
        Loading...
      </iframe>
    </div>
  );
};

const Contact = () => {
  // For now, we'll use the Google Form embed
  // In Phase 4, switch to using the ContactForm component
  const useCustomForm = false;
  
  return (
    <div>
      <ContactHero />
      
      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl uppercase">
              Contact Us at 312-833-8044
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              How can we partner to help your growing operations? Drop us a line.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-10">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img 
                src="/images/contact-new.jpg" 
                alt="Contact Us" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              
              <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Contact Information</h3>
                <div className="space-y-3">
                  <p className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>312-833-8044</span>
                  </p>
                  <p className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>info@opexecgroup.com</span>
                  </p>
                  <p className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Chicago, IL</span>
                  </p>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Connect With Us</h4>
                  <div className="flex">
                    <a 
                      href="https://www.linkedin.com/company/opexec-group" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Send Us a Message</h3>
                
                {useCustomForm ? (
                  <ContactForm />
                ) : (
                  <>
                    <GoogleFormEmbed />
                    <p className="text-xs text-gray-500 text-center mt-4">
                      Your information will be processed in accordance with our privacy practices and Google's 
                      <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline"> Privacy Policy</a>.
                      After submission, you'll receive a confirmation email.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
