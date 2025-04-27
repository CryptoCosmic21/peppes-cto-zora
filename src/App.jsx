import React from 'react';
import { motion } from 'framer-motion';
import heroImage from './assets/hero.jpg';
import { RocketLaunchIcon, PaperAirplaneIcon, XMarkIcon } from '@heroicons/react/24/solid';

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, when: 'beforeChildren' }
  }
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image with lazy load */}
        <img
          src={heroImage}
          alt="Hero"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Subtle bottom gradient for text contrast */}
        <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

        {/* Animated Content Container */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
          initial="hidden"
          animate="show"
          variants={containerVariants}
        >
          {/* Emojis Around Title */}
          <motion.div className="flex items-center space-x-4 mb-4" variants={itemVariants}>
            <span className="text-4xl">🍌</span>
            <span className="text-4xl">😂</span>
            <span className="text-4xl">✨</span>
            <span className="text-4xl">🚀</span>
          </motion.div>

          {/* Title with responsive clamp */}
          <motion.h1
            className="font-bold text-white drop-shadow-lg"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
            variants={itemVariants}
          >
            PEPPES CTO
          </motion.h1>

          {/* Emojis Below Title */}
          <motion.div className="flex items-center space-x-4 mt-4" variants={itemVariants}>
            <span className="text-2xl">🤖</span>
            <span className="text-2xl">🤣</span>
            <span className="text-2xl">💰</span>
            <span className="text-2xl">🪙</span>
          </motion.div>

          {/* Subtitle */}
          <motion.p className="mt-2 text-white/90" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }} variants={itemVariants}>
            First CTO on ZORA
          </motion.p>

          {/* Buttons */}
          <motion.div className="mt-6 flex flex-col sm:flex-row items-center gap-4" variants={itemVariants}>
            <a
              href="https://zora.co/coin/base:0xa6ae99cd86142ab5f9e7796ec22cf6b4b80a8bfc?referrer=0x331931f4ba7eabc4af1770acc9e1fdc7581b7270"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow-md hover:bg-green-700 transition-colors"
            >
              <RocketLaunchIcon className="h-5 w-5 mr-2" /> Buy on Zora
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-white text-[#0088cc] font-semibold rounded-full shadow-md hover:bg-[#0088cc] hover:text-white transition-colors"
            >
              <PaperAirplaneIcon className="h-5 w-5 mr-2" /> Telegram
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-white text-[#1DA1F2] font-semibold rounded-full shadow-md hover:bg-[#1DA1F2] hover:text-white transition-colors"
            >
              <XMarkIcon className="h-5 w-5 mr-2" /> X (Twitter)
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
