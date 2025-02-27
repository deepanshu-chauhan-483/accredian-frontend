// App.jsx - Main application component
import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import HowToRefer from './components/HowToRefer';
import ReferralBenefits from './components/ReferralBenefits';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <HowToRefer />
        <ReferralBenefits />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;