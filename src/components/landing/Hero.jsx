import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#09090b]">
      {/* Background Radial Glow Spotlight */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        {/* Release Notification Accent Capsule */}
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm text-xs font-medium text-zinc-400 mb-8 animate-fade-in">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>v1.0.0 Alpha Registry Live</span>
        </div>

        {/* Master Heading */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
          Automate Legal Review with <br />
          <span className="gradient-text">Asynchronous Intelligence</span>
        </h1>

        {/* Sub-Headline Text */}
        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Optimize contract ingestion, automate strict compliance parsing, and track document execution matrices in micro-seconds using our decoupled B2B microservice loop.
        </p>

        {/* Action Triggers */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 flex items-center justify-center space-x-2 group">
            <span>Start Analyzing Free</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center space-x-2">
            <span>View Architecture</span>
          </button>
        </div>

        {/* Live System Preview Wireframe Wrapper */}
        <div className="premium-card p-4 max-w-4xl mx-auto border-zinc-800 bg-zinc-950/40 shadow-2xl relative group">
          <div className="absolute -inset-px bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="flex items-center space-x-2 border-b border-zinc-800 pb-3 mb-4">
            <div className="h-3 w-3 rounded-full bg-red-500/40" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/40" />
            <div className="h-3 w-3 rounded-full bg-green-500/40" />
            <span className="text-xs text-zinc-500 font-mono ml-4 tracking-tight">leximind_dashboard_v1.jsx</span>
          </div>
          <div className="h-48 sm:h-64 rounded-lg bg-zinc-900/60 border border-zinc-800/50 flex flex-col items-center justify-center p-6 text-center">
            <div className="h-10 w-10 border border-dashed border-zinc-700 rounded-lg flex items-center justify-center mb-3">
              <span className="text-zinc-500 text-sm">↑</span>
            </div>
            <p className="text-sm font-medium text-zinc-400">Drag and drop vendor agreements or NDAs here</p>
            <p className="text-xs text-zinc-600 mt-1">Supports strict PDF or docx serialization formats</p>
          </div>
        </div>
      </div>
    </section>
  );
}