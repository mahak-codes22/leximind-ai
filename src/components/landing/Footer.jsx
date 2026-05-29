import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#09090b] border-t border-zinc-900 pt-16 pb-8 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Brand System info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-7 w-7 bg-indigo-600 rounded flex items-center justify-center font-bold text-xs text-white">
                L
              </div>
              <span className="text-md font-bold tracking-tight text-white">LexiMind AI</span>
            </div>
            <p className="text-zinc-500 text-xs leading-relaxed mb-4">
              Enterprise-grade automated legal tech frameworks built using secure asynchronous microservice loops.
            </p>
          </div>

          {/* Column 2: Platform Links */}
          <div>
            <h4 className="text-zinc-400 text-xs font-bold tracking-wider uppercase mb-4">Platform</h4>
            <ul className="space-y-2 text-xs text-zinc-500">
              <li><a href="#features" className="hover:text-zinc-300 transition-colors">Core Features</a></li>
              <li><a href="#architecture" className="hover:text-zinc-300 transition-colors">System Architecture</a></li>
              <li><a href="#api" className="hover:text-zinc-300 transition-colors">API Directory</a></li>
            </ul>
          </div>

          {/* Column 3: Tech Stack Context */}
          <div>
            <h4 className="text-zinc-400 text-xs font-bold tracking-wider uppercase mb-4">Tech Matrix</h4>
            <ul className="space-y-2 text-xs text-zinc-500">
              <li><span className="hover:text-zinc-300 cursor-default">FastAPI Core</span></li>
              <li><span className="hover:text-zinc-300 cursor-default">React 18 Architecture</span></li>
              <li><span className="hover:text-zinc-300 cursor-default">SQLAlchemy Persistence</span></li>
            </ul>
          </div>

          {/* Column 4: Newsletter Input Simulation */}
          <div>
            <h4 className="text-zinc-400 text-xs font-bold tracking-wider uppercase mb-4">Stay Informed</h4>
            <div className="flex space-x-2">
              <input 
                type="email" 
                placeholder="developer@domain.com" 
                className="bg-zinc-900 border border-zinc-800 rounded px-3 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500 w-full"
                disabled
              />
              <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-1.5 rounded text-xs transition-colors">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar Disclosure */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-600">
          <p>© {currentYear} LexiMind AI Systems. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <span className="hover:text-zinc-400 cursor-pointer">Privacy Protocol</span>
            <span className="hover:text-zinc-400 cursor-pointer">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}