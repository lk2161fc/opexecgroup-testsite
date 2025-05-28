import React from 'react';
import { Link } from 'react-router-dom';

const StoryHero = () => {
  return (
    <section className="hero-section relative">
      <div className="hero-overlay"></div>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Our Story
        </h1>
        <p className="mt-2 text-2xl font-semibold text-blue-600">
          Who We Are and What We Stand For
        </p>
      </div>
    </section>
  );
};

const OurStory = () => {
  return (
    <div>
      <StoryHero />
      
      {/* Mission and Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <img 
                src="/images/our-story.jpg" 
                alt="Our Mission" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                At OpExec Group, our mission is to help growing companies optimize their supply chain 
                and operational processes so they can focus on building their core business. We believe 
                that even small changes can have significant impacts on your business's efficiency and 
                profitability.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700 mb-6">
                We envision a world where businesses of all sizes have access to the operational 
                expertise they need to succeed. By democratizing supply chain knowledge and 
                making operational excellence accessible, we aim to help more companies thrive 
                in today's competitive landscape.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <ul className="list-disc pl-6 text-lg text-gray-700 mb-6">
                <li className="mb-2">
                  <strong>Excellence</strong> - We're committed to delivering the highest quality 
                  solutions to our clients.
                </li>
                <li className="mb-2">
                  <strong>Integrity</strong> - We operate with transparency and honesty in all our dealings.
                </li>
                <li className="mb-2">
                  <strong>Innovation</strong> - We continually seek better ways to solve complex operational challenges.
                </li>
                <li>
                  <strong>Partnership</strong> - We work alongside our clients as true partners in their success.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
            <p className="mt-4 text-xl text-gray-600">
              Expert consultants with decades of combined experience
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="/images/team.jpg" 
                  alt="OpExec Group Team" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Veterans</h3>
                  <p className="text-gray-700">
                    Our team consists of seasoned professionals with experience across multiple industries 
                    including manufacturing, retail, healthcare, and technology. We bring diverse perspectives 
                    and proven expertise to every client engagement.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Our Expertise</h3>
                    <p className="text-gray-700 mb-4">
                      With backgrounds in global supply chain management, operations leadership, and 
                      strategic consulting, our team has the knowledge and skills to tackle your most 
                      complex operational challenges.
                    </p>
                    <p className="text-gray-700 mb-4">
                      We specialize in helping companies:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 mb-6">
                      <li className="mb-2">Optimize supply chains for efficiency and resilience</li>
                      <li className="mb-2">Implement scalable operational processes</li>
                      <li className="mb-2">Reduce costs while maintaining or improving quality</li>
                      <li className="mb-2">Navigate growth challenges with confidence</li>
                      <li>Plan and execute strategic operational initiatives</li>
                    </ul>
                  </div>
                  
                  <Link to="/contact-us" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 w-full text-center mt-4">
                    Meet Our Team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Approach Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Approach</h2>
            <p className="mt-4 text-xl text-gray-600">
              How we work with clients to deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-blue-600 text-white mb-4">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">1. Assess</h3>
              <p className="text-gray-700">
                We begin by thoroughly understanding your current operations, challenges, and goals. 
                Our assessment provides a clear picture of where you are and where opportunities exist.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-blue-600 text-white mb-4">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2. Design</h3>
              <p className="text-gray-700">
                Based on our assessment, we develop tailored solutions to address your specific 
                needs. Our designs are practical, scalable, and aligned with your business objectives.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-blue-600 text-white mb-4">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">3. Implement</h3>
              <p className="text-gray-700">
                We work alongside your team to implement changes effectively. Our hands-on approach 
                ensures smooth transitions and knowledge transfer throughout the process.
              </p>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-blue-600 text-white mb-4">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">4. Measure</h3>
              <p className="text-gray-700">
                We establish clear metrics to track progress and quantify results. Regular measurements 
                help us refine our approach and ensure we're delivering the expected outcomes.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-blue-600 text-white mb-4">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">5. Refine</h3>
              <p className="text-gray-700">
                We continuously improve our solutions based on data and feedback. Our iterative approach 
                ensures sustained performance improvements and adaptability to changing conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Partner with OpExec Group</h2>
          <p className="mt-4 text-xl text-blue-100">
            Let's work together to optimize your operations and drive sustainable growth.
          </p>
          <div className="mt-8">
            <Link to="/contact-us" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-50">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
