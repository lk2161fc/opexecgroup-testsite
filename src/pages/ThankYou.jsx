import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <section className="hero-section relative">
        <div className="hero-overlay"></div>
        <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Thank You!
          </h1>
          <p className="mt-2 text-2xl font-semibold text-blue-600">
            Your message has been received.
          </p>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="rounded-full bg-green-100 p-4">
              <svg className="h-12 w-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Message Sent Successfully</h2>
          <p className="text-lg text-gray-700 mb-8">
            Thank you for reaching out to OpExec Group. We've received your message and will get back to you as soon as possible, usually within 1-2 business days.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">What happens next?</h3>
            <ol className="list-decimal pl-6 text-left text-gray-700 space-y-2">
              <li>Our team will review your message</li>
              <li>We'll connect you with the best person to address your needs</li>
              <li>We'll reach out to schedule a conversation to learn more about your business</li>
              <li>Together, we'll explore how OpExec Group can help you achieve your goals</li>
            </ol>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700">
              Back to Home
            </Link>
            <Link to="/our-services" className="inline-block bg-blue-100 text-blue-800 px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-200">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThankYou;
