import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Helper function to determine if a link is active
  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center text-xl font-bold text-blue-600">
              <img src="/images/logo.png" alt="OpExec Group" className="h-8 w-auto mr-2" />
              OpExec Group
            </Link>
            <div className="hidden sm:-my-px sm:ml-10 sm:flex sm:space-x-8">
              <Link 
                to="/" 
                className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                  isActiveLink('/') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } text-sm font-medium`}
              >
                Home
              </Link>
              <Link 
                to="/our-services" 
                className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                  isActiveLink('/our-services') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } text-sm font-medium`}
              >
                Our Services
              </Link>
              <Link 
                to="/our-story" 
                className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                  isActiveLink('/our-story') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } text-sm font-medium`}
              >
                Our Story
              </Link>
              <Link 
                to="/contact-us" 
                className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                  isActiveLink('/contact-us') ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } text-sm font-medium`}
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link 
            to="/" 
            className={`block pl-3 pr-4 py-2 border-l-4 ${
              isActiveLink('/') ? 'border-blue-500 text-blue-700 bg-blue-50' : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300'
            } text-base font-medium`}
          >
            Home
          </Link>
          <Link 
            to="/our-services" 
            className={`block pl-3 pr-4 py-2 border-l-4 ${
              isActiveLink('/our-services') ? 'border-blue-500 text-blue-700 bg-blue-50' : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300'
            } text-base font-medium`}
          >
            Our Services
          </Link>
          <Link 
            to="/our-story" 
            className={`block pl-3 pr-4 py-2 border-l-4 ${
              isActiveLink('/our-story') ? 'border-blue-500 text-blue-700 bg-blue-50' : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300'
            } text-base font-medium`}
          >
            Our Story
          </Link>
          <Link 
            to="/contact-us" 
            className={`block pl-3 pr-4 py-2 border-l-4 ${
              isActiveLink('/contact-us') ? 'border-blue-500 text-blue-700 bg-blue-50' : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300'
            } text-base font-medium`}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
