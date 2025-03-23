
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex items-center space-x-1">
              <img 
                src="/bti-logo.png" 
                alt="BTI Logo" 
                className="h-20 w-auto -ml-12" 
              />
              <div className="hidden lg:block -ml-7">
                <img 
                  src="/accreditation-logos.png" 
                  alt="VTU, AICTE, NAAC, and ISO Accreditations" 
                  className="h-20 w-auto"
                />
              </div>
            </div>
          </div>
          
          <nav className="flex space-x-6 items-center mr-[-4rem]">
            <button 
              onClick={() => scrollToSection('overview')}
              className="text-slate-300 hover:text-cyan-300 text-base font-medium transition-colors"
            >
              Overview
            </button>
            <button 
              onClick={() => scrollToSection('eligibility')}
              className="text-slate-300 hover:text-cyan-300 text-base font-medium transition-colors"
            >
              Eligibility
            </button>
            <button 
              onClick={() => scrollToSection('rules')}
              className="text-slate-300 hover:text-cyan-300 text-base font-medium transition-colors"
            >
              Rules
            </button>
            <button 
              onClick={() => scrollToSection('prizes')}
              className="text-slate-300 hover:text-cyan-300 text-base font-medium transition-colors"
            >
              Prizes
            </button>
            <button 
              onClick={() => scrollToSection('register')}
              className="bg-cyan-600 text-white px-5 py-2.5 rounded-full text-base font-medium hover:bg-cyan-700 transition-all"
            >
              Register Now
            </button>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
