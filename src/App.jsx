import React from 'react';
import { motion } from 'framer-motion';
import { RocketLaunchIcon, PaperAirplaneIcon, XMarkIcon } from '@heroicons/react/24/solid';
import heroImage from './assets/hero.jpg';

// Fade-in animation for content
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function App() {
  return (
    <div
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        // Safe-area insets for iPhone
        paddingTop: 'env(safe-area-inset-top)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      {/* 1) Gradient Animated Background */}
      <div className="gradient-bg-anim" />

      {/* 2) Hero Image (over the gradient) */}
      <img
        src={heroImage}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-contain sm:object-cover"
      />

      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Moving Title with Emojis */}
        <motion.div
          className="flex items-center space-x-2 text-white mb-4"
          animate={{ x: ['-5%', '5%', '-5%'] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        >
          <span className="text-3xl animate-bounce-slow">🍌</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase drop-shadow-lg">
            PEPPES CTO
          </h1>
          <span className="text-3xl animate-spin-slow">🚀</span>
          <span className="text-3xl animate-ping">🌕</span>
        </motion.div>

        {/* Subtitle */}
        <p className="text-white/90 text-lg sm:text-xl">
          First CTO on ZORA
        </p>
        <p className="italic text-white/80 text-sm sm:text-base mb-8">
          “Changing the chain one meme at a time.”
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-lg mx-auto">
          <a
            href="https://zora.co/coin/base:0xa6ae99cd86142ab5f9e7796ec22cf6b4b80a8bfc?referrer=0x331931f4ba7eabc4af1770acc9e1fdc7581b7270"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg transition-transform hover:scale-105"
          >
            <RocketLaunchIcon className="h-5 w-5 mr-2" />
            Buy on Zora
          </a>
          <a
            href="https://t.me/+nxJfGcCSmuM4NWE0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-white text-[#0088cc] font-semibold rounded-full shadow transition-colors hover:bg-[#f0f8ff]"
          >
            <PaperAirplaneIcon className="h-5 w-5 mr-2" />
            Telegram
          </a>
          <a
            href="https://x.com/PeppesCto"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-white text-[#1DA1F2] font-semibold rounded-full shadow transition-colors hover:bg-[#e6f7ff]"
          >
            <XMarkIcon className="h-5 w-5 mr-2" />
            X (Twitter)
          </a>
        </div>
      </motion.div>
    </div>
  );
}
