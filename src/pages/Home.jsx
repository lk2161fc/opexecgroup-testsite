import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero-section relative">
      <div className="hero-overlay"></div>
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Your supply chain and operations, our expertise.
        </h1>
        <p className="mt-2 text-2xl font-semibold text-blue-600">
          Unlocking the missing pieces to optimize and grow your business
        </p>
        <div className="mt-8 max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Welcome to OpExec Group</h2>
          <p className="mt-4 text-lg text-gray-600">
            As an end-to-end supply chain company, we specialize in consulting as well as
            providing COO services for startups navigating the critical juncture of
            establishing supply chain and operations. Our expert consultants analyze existing
            processes, identify bottlenecks, and develop tailored strategies to optimize
            performance, reduce costs, and drive growth.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            If you are a start-up to mid-size company looking to optimize your operations or
            need help to launch a new product, let us help solve the puzzle.
          </p>
        </div>      
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/our-services" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700">
            See Our Services
          </Link>
          <Link to="/our-story" className="inline-block bg-blue-100 text-blue-800 px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-200">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
};

const ServicePreview = ({ image, title, description, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="service-image" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link to={link} className="text-blue-600 font-medium hover:text-blue-800">
          Learn More →
        </Link>
      </div>
    </div>
  );
};

const Home = () => {
  const services = [
    {
      id: 1,
      image: "/images/supply-chain.jpg",
      title: "Global Supply Chain Management",
      description: "End-to-end supply chain optimization from supplier selection to last-mile delivery.",
      link: "/our-services#supply-chain"
    },
    {
      id: 2,
      image: "/images/consulting-services-new.png",
      title: "Consulting Services",
      description: "Expert analysis and strategic planning to transform your operations.",
      link: "/our-services#consulting"
    },
    {
      id: 3,
      image: "/images/logistics.jpg",
      title: "Interim COO Services",
      description: "Experienced leadership for startups during critical growth phases.",
      link: "/our-services#coo"
    }
  ];

  return (
    <div>
      <HeroSection />
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-xl text-gray-600">
              Comprehensive solutions to optimize your operations
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {services.map(service => (
              <ServicePreview
                key={service.id}
                image={service.image}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/our-services" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700">
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to optimize your operations?</h2>
          <p className="mt-4 text-xl text-blue-100">
            Contact us today for a free consultation
          </p>
          <div className="mt-8">
            <Link to="/contact-us" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-50">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
