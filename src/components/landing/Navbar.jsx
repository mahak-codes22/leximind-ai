import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#09090b]/80 backdrop-blur-md border-b border-zinc-800/80 py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Figma Brand System Logo */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="h-9 w-9 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">
            L
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Lexi<span className="text-indigo-400">Mind</span> <span className="text-xs text-zinc-500 font-medium tracking-normal px-2 py-0.5 border border-zinc-800 rounded-full bg-zinc-900 ml-1">AI</span>
          </span>
        </div>

        {/* Central Anchor Anchors */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-400">
          <a href="#features" className="hover:text-white transition-colors duration-200">Features</a>
          <a href="#architecture" className="hover:text-white transition-colors duration-200">Architecture</a>
          <a href="#api" className="hover:text-white transition-colors duration-200">API Contract</a>
        </div>

        {/* Action Gate Trigger */}
        <div className="flex items-center space-x-4">
          <button className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200">
            Sign In
          </button>
          <button className="text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg transition-all duration-200 shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/20">
            Launch Platform
          </button>
        </div>
      </div>
    </nav>
  );
}