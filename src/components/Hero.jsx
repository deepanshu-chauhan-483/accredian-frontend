import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from '../assets/Anniversary (7) 1.png';
import Money from '../assets/money.png';
import ReferralModal from './ReferralModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="px-2 pb-4 pt-0 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto bg-blue-50 rounded-3xl shadow-xl p-12 relative overflow-hidden"
        >
          {/* Main PNG (Right side) */}
          <motion.img
            src={Image}
            className="absolute top-0 right-[100px] w-auto h-full z-10 hidden md:block"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />

          {/* Randomly placed money images */}
          <img src={Money} className="absolute top-0 left-4 w-24 rotate-[180deg] z-0" />
          <img src={Money} className="absolute top-4 right-8 w-20 rotate-[-20deg] z-0" />
          <img src={Money} className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-24 rotate-[25deg] z-0" />
          <img src={Money} className="absolute top-1/2 left-1/3 w-20 rotate-[-20deg] z-0" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2 mb-8 md:mb-0"
            >
              <h1 className="text-6xl font-bold text-gray-900 mb-12">
                Let's Learn <br /> & Earn
              </h1>
              <p className="text-2xl text-gray-700 mb-4">Get a chance to win</p>
              <p className="text-2xl text-gray-700 mb-12">
                up to <span className="text-blue-500 text-3xl font-bold">Rs. 15,000</span>
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-500 text-white px-6 py-3 border rounded-xl font-medium hover:bg-blue-600 transition-colors"
              >
                Refer Now
              </motion.button>
            </motion.div>

            {/* Right content - Placeholder for future phone image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:w-1/2 relative"
            >
              <div className="relative">{/* Add the phone image here if needed */}</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      {isModalOpen && <ReferralModal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
};

export default Hero;
