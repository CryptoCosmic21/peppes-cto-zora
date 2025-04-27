import React from 'react';
import heroImage from './assets/hero.jpg'; // your hero graphic
import {
  RocketLaunchIcon,
  PaperAirplaneIcon,
  XMarkIcon,
  ShoppingCartIcon
} from '@heroicons/react/24/solid';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Full‐screen responsive hero image */}
        <img
          src={heroImage}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Animated gradient (blended lightly over image) */}
        <div className="absolute inset-0 gradient-bg-anim mix-blend-lighten" />

        {/* Giant subtle watermark */}
        <h2 className="hero-watermark">PEPPES CTO</h2>

        {/* Centered content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 space-y-4">
          {/* Sparkly heading */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl animate-bounce">✨</span>
            <h1 className="text-5xl sm:text-6xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-white to-green-200 drop-shadow-lg animate-pulse">
              PEPPES CTO
            </h1>
            <span className="text-2xl animate-bounce">✨</span>
          </div>

          {/* Subtitle and meme quote */}
          <p className="text-lg sm:text-2xl text-white/90 animate-bounce">
            First CTO on ZORA
          </p>
          <p className="italic text-sm sm:text-base text-white/70">
            “Changing the chain one meme at a time.”
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            {/* Primary CTA */}
            <a
              href="https://zora.co/coin/base:0xa6ae99cd86142ab5f9e7796ec22cf6b4b80a8bfc?referrer=0x331931f4ba7eabc4af1770acc9e1fdc7581b7270"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-8 py-4 bg-gradient-to-r from-green-200 to-green-400 text-black font-bold rounded-full shadow-2xl transition transform hover:-translate-y-1 hover:scale-105 hover:from-yellow-200 hover:to-yellow-400"
            >
              <RocketLaunchIcon className="h-6 w-6 mr-2 animate-bounce-slow" />
              Buy on Zora
            </a>

            {/* Telegram */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-white text-[#0088cc] font-semibold rounded-full shadow transition hover:bg-[#0088cc] hover:text-white"
            >
              <PaperAirplaneIcon className="h-5 w-5 mr-2" />
              Telegram
            </a>

            {/* X / Twitter */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-white text-[#1DA1F2] font-semibold rounded-full shadow transition hover:bg-[#1DA1F2] hover:text-white"
            >
              <XMarkIcon className="h-5 w-5 mr-2" />
              X (Twitter)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
