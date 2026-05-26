import React from 'react';
import { Layers, FileText, MessageSquare, BarChart2, Settings, ShieldCheck, User, Sparkles } from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab, docCount }) {
  const menuItems = [
    { name: 'Dashboard', icon: Layers },
    { name: 'Documents', icon: FileText, count: docCount },
    { name: 'AI Chat', icon: MessageSquare },
    { name: 'Analytics', icon: BarChart2 },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-[#121214] border-r border-[#27272a] flex flex-col justify-between hidden md:flex h-screen sticky top-0">
      <div>
        {/* Brand Header */}
        <div className="h-16 flex items-center px-6 border-b border-[#27272a] gap-2.5">
          <div className="bg-gradient-to-tr from-indigo-500 to-violet-500 p-2 rounded-xl shadow-lg shadow-indigo-500/10">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <span className="font-semibold tracking-tight text-xs block text-zinc-100">LexiMind AI</span>
            <span className="text-[10px] text-zinc-500 font-mono tracking-wider uppercase block">Enterprise Legal</span>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="p-4 space-y-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;
            return (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-medium transition-all duration-200 group ${
                  isActive 
                    ? 'bg-[#1e1e22] text-indigo-400 border border-zinc-800/80 shadow-inner' 
                    : 'text-zinc-400 hover:bg-[#18181b] hover:text-zinc-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-400' : 'text-zinc-400 group-hover:text-zinc-200'}`} />
                  <span>{item.name}</span>
                </div>
                {item.count !== undefined && (
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${isActive ? 'bg-indigo-500/10 text-indigo-400' : 'bg-zinc-800 text-zinc-500'}`}>
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Security & Profile Footprint */}
      <div className="p-4 border-t border-[#27272a] space-y-3 bg-[#161619]">
        <div className="flex items-center justify-between text-[10px] bg-emerald-950/20 border border-emerald-900/30 rounded-lg p-2 text-emerald-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Secure OAuth Active</span>
          </div>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
        </div>

        <div className="flex items-center gap-3 p-1">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center font-semibold text-[11px] text-white border border-zinc-700">
            JD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-zinc-200 truncate">John Doe, Esq.</p>
            <p className="text-[10px] text-zinc-500 truncate">Senior Counsel</p>
          </div>
        </div>
      </div>
    </aside>
  );
}