import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { IoIosArrowForward } from "react-icons/io";
import ReferralModal from './ReferralModal';
import { HiAcademicCap } from "react-icons/hi";

const ReferralBenefits = () => {
  const [activeCategory, setActiveCategory] = useState('ALL PROGRAMS');
  const [showMore, setShowMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const categories = [
    'ALL PROGRAMS',
    'PRODUCT MANAGEMENT',
    'STRATEGY & LEADERSHIP',
    'BUSINESS MANAGEMENT',
    'FINTECH',
    'SENIOR MANAGEMENT',
    'DATA SCIENCE',
    'DIGITAL TRANSFORMATION',
    'BUSINESS ANALYTICS',
  ];

  const programs = [
    { name: 'Professional Certificate Program in Product Management', category: 'PRODUCT MANAGEMENT', referrerBonus: '₹ 7,000', refereeBonus: '₹ 9,000' },
    { name: 'PG Certificate Program in Strategic Product Management', category: 'PRODUCT MANAGEMENT', referrerBonus: '₹ 9,000', refereeBonus: '₹ 11,000' },
    { name: 'Executive Program in Strategy & Leadership', category: 'STRATEGY & LEADERSHIP', referrerBonus: '₹ 8,000', refereeBonus: '₹ 10,000' },
    { name: 'Advanced Program in Business Management', category: 'BUSINESS MANAGEMENT', referrerBonus: '₹ 7,500', refereeBonus: '₹ 9,500' },
    { name: 'Certification in Fintech Innovation', category: 'FINTECH', referrerBonus: '₹ 6,000', refereeBonus: '₹ 8,000' },
    { name: 'Senior Leadership Excellence Program', category: 'SENIOR MANAGEMENT', referrerBonus: '₹ 10,000', refereeBonus: '₹ 12,000' },
    { name: 'Executive Program in Data Science', category: 'DATA SCIENCE', referrerBonus: '₹ 9,500', refereeBonus: '₹ 11,500' },
    { name: 'Digital Transformation and AI Program', category: 'DIGITAL TRANSFORMATION', referrerBonus: '₹ 8,000', refereeBonus: '₹ 10,000' },
    { name: 'Business Analytics Certification', category: 'BUSINESS ANALYTICS', referrerBonus: '₹ 7,000', refereeBonus: '₹ 9,000' },
  ];

  const filteredPrograms = activeCategory === 'ALL PROGRAMS' ? programs : programs.filter(program => program.category === activeCategory);
  const displayedPrograms = showMore ? filteredPrograms : filteredPrograms.slice(0, 5);
  
  

  return (
    <section id='benefits' className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4 ">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8"
        >
          What Are The <span className="text-blue-500">Referral Benefits</span>?
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-6 ">
          {/* Categories Sidebar */}
          <div className="lg:w-1/4 rounded-2xl">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`w-full px-4 py-3 text-left flex items-center justify-between transition-all duration-200 rounded-lg
                    ${activeCategory === category ? 'bg-blue-500 text-white font-semibold' : 'hover:bg-gray-100'}`}
                >
                  <span>{category}</span>
                  {<IoIosArrowForward className={`text-black ${activeCategory === category ? 'text-white' : 'text-white'}`} />}
                </button>
              ))}
            </div>
          </div>

          {/* Programs Table */}
          <div className="lg:w-3/4">
            <div className="bg-whiteshadow-md overflow-hidden border rounded-xl">
              <div className="grid grid-cols-3 bg-blue-100 rounded-lg ">
                <div className="px-4 py-3 font-medium">Programs</div>
                <div className="px-4 py-3 font-medium text-center">Referrer Bonus</div>
                <div className="px-4 py-3 font-medium text-center">Referee Bonus</div>
              </div>

              {displayedPrograms.length > 0 ? (
                displayedPrograms.map((program, index) => (
                  <div key={index} className="grid grid-cols-3 border-t ">
                    <div className="px-4 py-4 flex items-start ">
                      <span className="text-blue-500 mr-2"><HiAcademicCap className='mr-2 text-blue-500' /></span>
                      <span>{program.name}</span>
                    </div>
                    <div className="px-4 py-4 text-center">{program.referrerBonus}</div>
                    <div className="px-4 py-4 text-center">{program.refereeBonus}</div>
                  </div>
                ))
              ) : (
                <div className="text-center py-6 text-gray-500">No programs available in this category.</div>
              )}
            </div>

            {/* Show More / Show Less Button with Dropdown Icon */}
            {filteredPrograms.length > 5 && (
              <div className="flex justify-end text-center mt-4 ">
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="text-gray-600 hover:text-blue-500 flex items-center justify-center gap-2 border rounded-xl  p-1"
                >
                  Show {showMore ? 'Less' : 'More'}
                  <motion.svg
                    animate={{ rotate: showMore ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
              </div>
            )}
          </div>
        </div>
        {/* Refer Now Button */}
<div className="flex justify-center mt-6">
  <motion.button 
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => setIsModalOpen(true)}
    className="bg-blue-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors"
  >
    Refer Now
  </motion.button>
</div>

      </div>
       {isModalOpen && <ReferralModal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
};

export default ReferralBenefits;
