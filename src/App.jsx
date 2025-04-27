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
  // Confetti on Buy click
  const handleBuyClick = () => {
    import('canvas-confetti').then(({ default: confetti }) => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Hero"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-contain object-center"
        />
        {/* Subtle bottom gradient */}
        <div className="absolute bottom-0 w-full h-1/6 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

        {/* Floating playful circles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="bg-green-400 opacity-30 rounded-full"
              style={{
                width: 20 + Math.random() * 30,
                height: 20 + Math.random() * 30,
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%'
              }}
              animate={{ y: ['0%', '10%', '0%'] }}
              transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
          initial="hidden"
          animate="show"
          variants={containerVariants}
        >
          {/* Title Emojis */}
          <motion.div className="flex items-center space-x-4 mb-4" variants={itemVariants}>
            <motion.span animate={{ rotate: [0, 15, -15, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="text-4xl">🍌</motion.span>
            <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-4xl">😂</motion.span>
            <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2 }} className="text-4xl">✨</motion.span>
            <motion.span animate={{ x: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="text-4xl">🚀</motion.span>
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
            <motion.span animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="text-2xl">🤖</motion.span>
            <motion.span animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-2xl">🤣</motion.span>
            <motion.span animate={{ rotate: [0, 20, -20, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="text-2xl">💰</motion.span>
            <motion.span animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="text-2xl">🪙</motion.span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-white/80 mb-6"
            style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)' }}
            variants={itemVariants}
          >
            First CTO on ZORA
          </motion.p>

          {/* Buttons with confetti */}
          <motion.div className="flex flex-col sm:flex-row items-center gap-6" variants={itemVariants}>
            <button
              onClick={handleBuyClick}
              className="flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-2xl transform transition duration-300 hover:from-green-600 hover:to-green-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-400/50"
            >
              <RocketLaunchIcon className="h-6 w-6 mr-3" /> Buy on Zora
            </button>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 text-lg font-medium text-[#0088cc] bg-white/10 backdrop-blur-sm rounded-full shadow-inner transition duration-300 hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-[#0088cc]/50"
            >
              <PaperAirplaneIcon className="h-5 w-5 mr-2" /> Telegram
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 text-lg font-medium text-[#1DA1F2] bg-white/10 backdrop-blur-sm rounded-full shadow-inner transition duration-300 hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-[#1DA1F2]/50"
            >
              <XMarkIcon className="h-5 w-5 mr-2" /> X (Twitter)
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
