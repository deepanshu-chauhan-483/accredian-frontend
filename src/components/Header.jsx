import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

const Header = () => {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden p-2 text-gray-700 hover:text-blue-500 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Navigation (Desktop) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center space-x-4"
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

      {/* Mobile Menu (Dropdown) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white shadow-md rounded-lg mx-4 mt-2 p-4 space-y-4"
          >
            {/* Courses dropdown */}
            <div>
              <button
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-xl flex items-center justify-between"
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
              {isCoursesOpen && (
                <div className="mt-2 space-y-2">
                  <a href="/courses/all" className="block px-4 py-2 hover:bg-gray-100 rounded-md">All Courses</a>
                  <a href="/courses/popular" className="block px-4 py-2 hover:bg-gray-100 rounded-md">Popular Courses</a>
                  <a href="/courses/new" className="block px-4 py-2 hover:bg-gray-100 rounded-md">New Courses</a>
                </div>
              )}
            </div>

            {/* Nav links */}
            <nav className="space-y-2">
              <a href="/refer" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Refer & Earn</a>
              <a href="/resources" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Resources</a>
              <a href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">About Us</a>
            </nav>

            {/* Auth buttons */}
            <div className="space-y-2">
              <a href="/login" className="block px-4 py-2 border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 text-center">Login</a>
              <a href="/signup" className="block px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 text-center">Try for free</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Secondary navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-blue-100 rounded-full mx-auto max-w-2xl px-4 py-2 mt-2 relative overflow-x-auto"
      >
        <div className="flex justify-between items-center whitespace-nowrap">
          <Link to="refer" spy={true} smooth={true} offset={-70} duration={500} className="px-6 py-1 text-blue-500 font-medium relative">Refer</Link>
          <Link to="benefits" spy={true} smooth={true} offset={-70} duration={500} className="px-6 py-1 text-gray-700 hover:text-blue-500">Benefits</Link>
          <Link to="faq" spy={true} smooth={true} offset={-70} duration={500} className="px-6 py-1 text-gray-700 hover:text-blue-500">FAQs</Link>
          <Link to="footer" spy={true} smooth={true} offset={-70} duration={500} className="px-6 py-1 text-gray-700 hover:text-blue-500">Support</Link>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;