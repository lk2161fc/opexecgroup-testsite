import React from 'react';
import { Link } from 'react-router-dom';

const ServicesHero = () => {
  return (
    <section className="hero-section relative">
      <div className="hero-overlay"></div>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Our Services
        </h1>
        <p className="mt-2 text-2xl font-semibold text-blue-600">
          End-to-End Supply Chain and Operations Solutions
        </p>
      </div>
    </section>
  );
};

const ServiceSection = ({ id, title, description, image, imageAlt, reverse = false }) => {
  return (
    <div id={id} className={`py-16 ${reverse ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-center`}>
          <div className="md:w-1/2">
            <img 
              src={image} 
              alt={imageAlt} 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>
            <div className="prose prose-lg text-gray-600">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div>
      <ServicesHero />
      
      <ServiceSection
        id="supply-chain"
        title="Global Supply Chain Management"
        image="/images/supply-chain.jpg"
        imageAlt="Supply Chain Management"
        description={
          <div>
            <p className="mb-4">
              Our global supply chain management services provide end-to-end solutions for businesses looking to optimize their supply chains. We help you navigate the complexities of global sourcing, logistics, and distribution to ensure your products reach customers efficiently and cost-effectively.
            </p>
            <p className="mb-4">
              Our approach focuses on:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Strategic supplier selection and management</li>
              <li>Inventory optimization and demand planning</li>
              <li>Logistics network design and optimization</li>
              <li>Transportation management and cost reduction</li>
              <li>Supply chain visibility and risk management</li>
            </ul>
            <p>
              We work closely with your team to develop customized solutions that address your specific challenges and opportunities, leveraging our extensive industry knowledge and global network of partners.
            </p>
          </div>
        }
      />
      
      <ServiceSection
        id="consulting"
        title="Consulting Services"
        image="/images/consulting-services-new.png"
        imageAlt="Consulting Services"
        reverse={true}
        description={
          <div>
            <p className="mb-4">
              Our consulting services provide strategic guidance and tactical implementation support to help businesses optimize their operations and drive sustainable growth. We combine industry expertise with analytical rigor to deliver actionable insights and measurable results.
            </p>
            <p className="mb-4">
              Our consulting offerings include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Operations strategy and transformation</li>
              <li>Process optimization and workflow redesign</li>
              <li>Cost reduction and efficiency improvement</li>
              <li>Technology assessment and implementation</li>
              <li>Performance measurement and management</li>
            </ul>
            <p>
              Whether you're looking to streamline operations, reduce costs, or scale your business, our consultants work alongside your team to develop and implement solutions that deliver lasting value.
            </p>
          </div>
        }
      />
      
      <ServiceSection
        id="coo"
        title="Interim COO Services"
        image="/images/logistics.jpg"
        imageAlt="COO Services"
        description={
          <div>
            <p className="mb-4">
              For startups and growing companies, our Interim COO services provide experienced operational leadership during critical growth phases. We step in to establish and manage essential operations functions, allowing founders and executives to focus on core business activities.
            </p>
            <p className="mb-4">
              Our interim COO services include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Operations strategy development and execution</li>
              <li>Supply chain design and implementation</li>
              <li>Team building and organizational development</li>
              <li>Operational systems and process establishment</li>
              <li>Vendor selection and management</li>
            </ul>
            <p>
              We provide the operational expertise you need during critical growth stages, helping you build a strong foundation for sustainable success while transferring knowledge to your team.
            </p>
          </div>
        }
      />
      
      <div className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to transform your operations?</h2>
          <p className="mt-4 text-xl text-blue-100">
            Contact us today to discuss how we can help your business succeed.
          </p>
          <div className="mt-8">
            <Link to="/contact-us" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-50">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
