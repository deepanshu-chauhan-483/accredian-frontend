// components/Header.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

const Header = () => {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full mb-10 top-0 left-0 z-50 transition-all duration-300 bg-transparent`}>
      {/* Main navigation */}
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <a href="/" className="text-blue-500 font-bold text-xl">
            accredian
            <span className="block text-xs text-gray-500">credentials that matter</span>
          </a>
        </motion.div>
        
        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center space-x-4"
        >
          {/* Courses dropdown */}
          <div className="relative">
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded-xl flex items-center"
              onClick={() => setIsCoursesOpen(!isCoursesOpen)}
            >
              Courses 
              <svg 
                className={`ml-1 h-4 w-4 transition-transform duration-200 ${isCoursesOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {isCoursesOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-1 bg-white shadow-md rounded-md p-2 w-48 z-10"
                >
                  <a href="/courses/all" className="block px-4 py-2 hover:bg-gray-100 rounded-md">All Courses</a>
                  <a href="/courses/popular" className="block px-4 py-2 hover:bg-gray-100 rounded-md">Popular Courses</a>
                  <a href="/courses/new" className="block px-4 py-2 hover:bg-gray-100 rounded-md">New Courses</a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Nav links */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/refer" className="text-gray-700 hover:text-blue-500">Refer & Earn</a>
            <a href="/resources" className="text-gray-700 hover:text-blue-500">Resources</a>
            <a href="/about" className="text-gray-700 hover:text-blue-500">About Us</a>
          </nav>
          
          {/* Auth buttons */}
          <div className="flex items-center space-x-2">
            <a href="/login" className="px-4 py-2 border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50">Login</a>
            <a href="/signup" className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600">Try for free</a>
          </div>
        </motion.div>
      </div>
      
      {/* Secondary navigation */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-blue-100 rounded-full mx-auto max-w-2xl px-4 py-2 mt-2 relative"
      >
        <div className="flex justify-between items-center">
          <Link to="refer" spy={true}
       smooth={true}
       offset={-70}
       duration={500} className="px-6 py-1 text-blue-500 font-medium relative">Refer</Link>
          <Link to="benefits" spy={true}
       smooth={true}
       offset={-70}
       duration={500} className="px-6 py-1 text-gray-700 hover:text-blue-500">Benefits</Link>
          <Link to="faq" spy={true}
       smooth={true}
       offset={-70}
       duration={500} className="px-6 py-1 text-gray-700 hover:text-blue-500">FAQs</Link>
          <Link to="footer" spy={true}
       smooth={true}
       offset={-70}
       duration={500} className="px-6 py-1 text-gray-700 hover:text-blue-500">Support</Link>
        </div>
        
        {/* Profile avatar - positioned absolutely to overlap the tabs */}
      
      </motion.div>
    </header>
  );
};

export default Header;