import React from 'react';
import { Search, Cpu, Bell } from 'lucide-react';

export default function Header({ selectedModel, setSelectedModel }) {
  return (
    <header className="h-16 border-b border-[#27272a] bg-[#121214]/80 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-40">
      {/* Search Input */}
      <div className="relative max-w-md w-full hidden sm:block">
        <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-zinc-500" />
        <input 
          type="text" 
          placeholder="Search corporate files, clauses, or cross-references..." 
          className="w-full bg-[#18181b] border border-[#27272a] rounded-lg pl-9 pr-4 py-1.5 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
        />
      </div>

      {/* Model Selector & Live Telemetry Connections */}
      <div className="flex items-center gap-4 ml-auto">
        <div className="flex items-center gap-2 bg-[#18181b] border border-[#27272a] rounded-lg px-2 py-1">
          <span className="text-[10px] text-zinc-500 font-medium">Model:</span>
          <select 
            value={selectedModel} 
            onChange={(e) => setSelectedModel(e.target.value)}
            className="bg-transparent text-xs font-medium text-zinc-300 focus:outline-none cursor-pointer"
          >
            <option value="Gemini 1.5 Pro" className="bg-[#121214]">Gemini 1.5 Pro</option>
            <option value="Gemini Flash" className="bg-[#121214]">Gemini Flash</option>
          </select>
        </div>

        <div className="flex items-center gap-2 bg-[#1c1c21] border border-zinc-800/80 rounded-full px-3 py-1">
          <Cpu className="w-3.5 h-3.5 text-indigo-400" />
          <span className="text-[11px] font-medium text-zinc-300">Vertex AI Connected</span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]"></span>
        </div>

        <button className="p-1.5 rounded-lg border border-zinc-800 bg-[#18181b] text-zinc-400 hover:text-zinc-200 relative">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-1 h-1 bg-indigo-500 rounded-full"></span>
        </button>
      </div>
    </header>
  );
}