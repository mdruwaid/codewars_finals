
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 100,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
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
      {/* Logo Section */}
      <div className="w-full border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <img 
                src="/bti-logo.png" 
                alt="BTI Logo" 
                className="h-10 sm:h-20 w-auto" 
              />
              <img 
                src="/iic-logo.png" 
                alt="IIC Logo" 
                className="h-10 sm:h-20 w-auto" 
              />
              <div className="hidden lg:block">
                <img 
                  src="/accreditation-logos.png" 
                  alt="VTU, AICTE, NAAC, and ISO Accreditations" 
                  className="h-20 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center py-2">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-slate-300 hover:text-cyan-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 items-center">
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

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden py-4"
          >
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('overview')}
                className="text-slate-300 hover:text-cyan-300 text-base font-medium transition-colors py-2"
              >
                Overview
              </button>
              <button 
                onClick={() => scrollToSection('eligibility')}
                className="text-slate-300 hover:text-cyan-300 text-base font-medium transition-colors py-2"
              >
                Eligibility
              </button>
              <button 
                onClick={() => scrollToSection('rules')}
                className="text-slate-300 hover:text-cyan-300 text-base font-medium transition-colors py-2"
              >
                Rules
              </button>
              <button 
                onClick={() => scrollToSection('prizes')}
                className="text-slate-300 hover:text-cyan-300 text-base font-medium transition-colors py-2"
              >
                Prizes
              </button>
              <button 
                onClick={() => scrollToSection('register')}
                className="bg-cyan-600 text-white px-5 py-2.5 rounded-full text-base font-medium hover:bg-cyan-700 transition-all w-full"
              >
                Register Now
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
