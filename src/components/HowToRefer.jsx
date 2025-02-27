import React, { useEffect, useRef, useState } from 'react';
import ReferralModal from './ReferralModal';
import { motion, useAnimation, useInView } from 'framer-motion';
import horizontalSvg from '../assets/horizontal.svg';
import verticalSvg from '../assets/vertical.svg';

const HowToRefer = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: 'easeOut',
        duration: 0.8,
      },
    },
  };

  return (
    <section id="refer" className="py-16 bg-blue-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl font-bold text-center mb-12"
        >
          How Do I <span className="text-blue-500">Refer</span>?
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto border rounded-2xl p-4 bg-white shadow-lg flex justify-center"
        >
          {/* Horizontal SVG for large screens */}
          <img src={horizontalSvg} alt="Referral Process" className="hidden md:block w-full max-w-3xl" />

          {/* Vertical SVG for mobile screens */}
          <img src={verticalSvg} alt="Referral Process" className="block md:hidden w-full max-w-xs" />
        </motion.div>

        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 text-white px-6 py-3 border rounded-xl font-medium hover:bg-blue-600 transition-colors"
          >
            Refer Now
          </motion.button>
        </div>
      </div>

      {isModalOpen && <ReferralModal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
};

export default HowToRefer;
