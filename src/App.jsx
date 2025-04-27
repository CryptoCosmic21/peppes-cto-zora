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
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Hero"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-contain object-center"
        />
        />
        {/* Subtle bottom gradient */}
        <div className="absolute bottom-0 w-full h-1/6 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

        {/* Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
          initial="hidden"
          animate="show"
          variants={containerVariants}
        >
          {/* Title Emojis */}
          <motion.div className="flex items-center space-x-4 mb-4" variants={itemVariants}>
            <span className="text-4xl">🍌</span>
            <span className="text-4xl">😂</span>
            <span className="text-4xl">✨</span>
            <span className="text-4xl">🚀</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="font-extrabold text-white drop-shadow-lg"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}
            variants={itemVariants}
          >
            PEPPES CTO
          </motion.h1>

          {/* Subtitle Emojis */}
          <motion.div className="flex items-center space-x-4 mt-4 mb-2" variants={itemVariants}>
            <span className="text-2xl">🤖</span>
            <span className="text-2xl">🤣</span>
            <span className="text-2xl">💰</span>
            <span className="text-2xl">🪙</span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-white/80 mb-6"
            style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)' }}
            variants={itemVariants}
          >
            First CTO on ZORA
          </motion.p>

          {/* Buttons */}
          <motion.div className="flex flex-col sm:flex-row items-center gap-6" variants={itemVariants}>
            {/* Buy on Zora Primary Button */}
            <a
              href="https://zora.co/coin/base:0xa6ae99cd86142ab5f9e7796ec22cf6b4b80a8bfc?referrer=0x331931f4ba7eabc4af1770acc9e1fdc7581b7270"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-2xl transform transition duration-300 hover:from-green-600 hover:to-green-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-400/50"
            >
              <RocketLaunchIcon className="h-6 w-6 mr-3" />
              Buy on Zora
            </a>

            {/* Telegram Secondary Button */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 text-lg font-medium text-[#0088cc] bg-white/10 backdrop-blur-sm rounded-full shadow-inner transition duration-300 hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-[#0088cc]/50"
            >
              <PaperAirplaneIcon className="h-5 w-5 mr-2" />
              Telegram
            </a>

            {/* Twitter/X Secondary Button */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 text-lg font-medium text-[#1DA1F2] bg-white/10 backdrop-blur-sm rounded-full shadow-inner transition duration-300 hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-[#1DA1F2]/50"
            >
              <XMarkIcon className="h-5 w-5 mr-2" />
              X (Twitter)
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
