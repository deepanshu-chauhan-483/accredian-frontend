import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [activeTab, setActiveTab] = useState('Eligibility');
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const tabs = ['Eligibility', 'How To Use?', 'Terms & Conditions'];

  const questions = [
    // Eligibility
    {
      id: 1,
      question: 'Do I need to have prior Product Management and Project Management experience to enroll in the program?',
      answer: 'No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.',
      tab: 'Eligibility'
    },
    {
      id: 2,
      question: 'What is the minimum system configuration required?',
      answer: 'You need a computer with a stable internet connection, a modern web browser, and the ability to run basic software applications.',
      tab: 'Eligibility'
    },
    
    // How To Use?
    {
      id: 3,
      question: 'How do I access the program after enrolling?',
      answer: 'Once you enroll, you will receive an email with login credentials and instructions to access the learning portal.',
      tab: 'How To Use?'
    },
    {
      id: 4,
      question: 'Can I access the program on mobile devices?',
      answer: 'Yes, the program is fully responsive and can be accessed on desktops, tablets, and mobile devices.',
      tab: 'How To Use?'
    },
    {
      id: 5,
      question: 'Is there a time limit to complete the course?',
      answer: 'No, you will have lifetime access to the course content, allowing you to learn at your own pace.',
      tab: 'How To Use?'
    },

    // Terms & Conditions
    {
      id: 6,
      question: 'What is the refund policy?',
      answer: 'We offer a full refund within 7 days of purchase if you are not satisfied with the program.',
      tab: 'Terms & Conditions'
    },
    {
      id: 7,
      question: 'Can I share my login credentials with others?',
      answer: 'No, sharing login credentials is strictly prohibited. Each account is for individual use only.',
      tab: 'Terms & Conditions'
    },
    {
      id: 8,
      question: 'Will I receive a certificate upon completion?',
      answer: 'Yes, upon successful completion of the course, you will receive a verified certificate.',
      tab: 'Terms & Conditions'
    }
  ];

  const filteredQuestions = questions.filter(q => q.tab === activeTab);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="faq" className="py-16 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Frequently Asked <span className="text-blue-500">Questions</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-6">
          {/* Tabs */}
          <motion.div variants={containerVariants} initial="hidden" animate={controls} className="md:w-1/3">
            {tabs.map((tab, index) => (
              <motion.div key={index} variants={itemVariants} className="mb-4">
                <button
                  className={`w-full px-6 py-4 text-center border rounded-lg transition-colors ${
                    activeTab === tab 
                      ? 'bg-white border-blue-500 text-blue-500' 
                      : 'bg-white border-gray-200 text-gray-700 hover:border-blue-200'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              </motion.div>
            ))}
          </motion.div>

          {/* Questions */}
          <motion.div variants={containerVariants} initial="hidden" animate={controls} className="md:w-2/3">
            {filteredQuestions.map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="mb-4 border rounded-lg bg-white overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                  onClick={() => setExpandedQuestion(expandedQuestion === item.question ? null : item.question)}
                >
                  <span className="font-medium text-blue-500">{item.question}</span>
                  <svg 
                    className={`h-5 w-5 text-gray-500 transform transition-transform ${expandedQuestion === item.question ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {expandedQuestion === item.question && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 py-4 border-t text-gray-600"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mt-16 bg-blue-500 rounded-xl p-8 text-white"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/6 mb-4 md:mb-0">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
            </div>
            <div className="md:w-3/5 mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Want to delve deeper into the program?</h3>
              <p>Share your details to receive expert insights from our program team!</p>
            </div>
            <div className="md:w-2/5 text-right">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-500 px-6 py-2 rounded-xl font-medium hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                Get in touch
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.div>
    </section>
  );
};

export default FAQ;
