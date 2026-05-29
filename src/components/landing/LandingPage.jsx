import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Footer from './Footer';

export default function LandingPage() {
  return (
    <div className="relative w-full bg-[#09090b] min-h-screen overflow-x-hidden select-none selection:bg-indigo-500/20 selection:text-indigo-200">
      {/* Scroll-Aware Fixed Header Layer */}
      <Navbar />

      <main>
        {/* Dynamic Canvas Sections */}
        <Hero />
        <Features />
      </main>

      {/* Corporate Multi-Column Footer Layer */}
      <Footer />
    </div>
  );
}