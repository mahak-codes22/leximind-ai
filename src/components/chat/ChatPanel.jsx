import React, { useState } from 'react';
import { Send, Paperclip, Sparkles, Database, FileCode, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function ChatPanel({ selectedModel }) {
  const [messages, setMessages] = useState([
    {
      sender: 'user',
      text: 'What are the key risks in this contract?',
      time: '1:52 PM'
    },
    {
      sender: 'ai',
      text: 'Based on my analysis of the uploaded Master Services Agreement via the Vertex AI Vector DB pipeline, I have identified the following critical legal risks:',
      bullets: [
        'Termination clause requires an asymmetrical 90-day written notice from the client, while the vendor can terminate with 30 days notice.',
        'Vendor liability cap is entirely undefined and defaults to uncapped damages for data breaches.',
        'No explicit data retention limitation or repatriation timelines found post contract termination.',
        'Missing standard confidentiality duration clause; obligations expire immediately upon termination rather than surviving.'
      ],
      time: '1:52 PM'
    }
  ]);
  
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const suggestedPrompts = [
    'Summarize this contract',
    'Find termination clauses',
    'Highlight payment obligations',
    'List compliance risks'
  ];

  const handleSendMessage = (textToSend) => {
    if (!textToSend.trim()) return;

    // Append User Message
    const userMsg = { sender: 'user', text: textToSend, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate High-Performance Stream Response from Gemini
    setTimeout(() => {
      setIsTyping(false);
      const aiMsg = {
        sender: 'ai',
        text: `Analysis complete using ${selectedModel}. I scanned the current active context blocks and found relevant language corresponding to your query. The provisions align with standard enterprise parameters, though close auditing is recommended on indemnity limits.`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiMsg]);
    }, 1400);
  };

  return (
    <div className="bg-[#121214] border border-[#27272a] rounded-xl flex flex-col h-[calc(100vh-10.5rem)] overflow-hidden">
      
      {/* Panel Action Header */}
      <div className="p-4 border-b border-[#27272a] bg-[#161619] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <h3 className="text-xs font-semibold text-zinc-200">Gemini Review Engine</h3>
        </div>
        <span className="text-[10px] bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded text-indigo-400 font-mono">
          {selectedModel} Mode
        </span>
      </div>

      {/* Messages Render Zone */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
        {messages.map((msg, i) => (
          <div key={i} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} space-y-1`}>
            <div className={`max-w-[85%] text-xs p-3.5 rounded-xl border ${
              msg.sender === 'user' 
                ? 'bg-indigo-600 border-indigo-500 text-white rounded-br-none' 
                : 'bg-[#18181b] border-zinc-800/80 text-zinc-200 rounded-bl-none'
            }`}>
              <p className="leading-relaxed">{msg.text}</p>
              
              {msg.bullets && (
                <ul className="mt-3 space-y-2 list-disc pl-4 text-zinc-300 border-t border-zinc-800/60 pt-2.5">
                  {msg.bullets.map((bullet, idx) => (
                    <li key={idx} className="marker:text-indigo-400">{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
            <span className="text-[9px] text-zinc-500 font-mono px-1">{msg.time}</span>
          </div>
        ))}

        {/* Streaming Animation State */}
        {isTyping && (
          <div className="flex flex-col items-start space-y-1">
            <div className="bg-[#18181b] border border-zinc-800 p-3 rounded-xl rounded-bl-none flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </div>
          </div>
        )}
      </div>

      {/* Suggested Prompt Shortcuts */}
      <div className="p-3 bg-[#141417]/80 border-t border-[#27272a] flex gap-2 overflow-x-auto no-scrollbar">
        {suggestedPrompts.map((p) => (
          <button 
            key={p}
            onClick={() => handleSendMessage(p)}
            className="text-[10px] font-medium text-zinc-400 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:text-zinc-200 px-2.5 py-1.5 rounded-lg whitespace-nowrap transition-colors flex items-center gap-1"
          >
            {p} <ArrowUpRight className="w-2.5 h-2.5 opacity-60" />
          </button>
        ))}
      </div>

      {/* Input Workflow Control Bar */}
      <div className="p-3 bg-[#161619] border-t border-[#27272a]">
        <div className="relative flex items-center bg-[#1c1c1f] border border-zinc-800 focus-within:border-indigo-500/70 rounded-xl transition-all px-3">
          <button className="text-zinc-500 hover:text-zinc-300 p-1">
            <Paperclip className="w-4 h-4" />
          </button>
          <input 
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(inputMessage)}
            placeholder="Ask Gemini to extract liabilities or analyze risk trends..."
            className="w-full bg-transparent text-xs text-zinc-200 py-3.5 px-3 placeholder-zinc-500 focus:outline-none"
          />
          <button 
            onClick={() => handleSendMessage(inputMessage)}
            className="bg-indigo-600 hover:bg-indigo-500 text-white p-1.5 rounded-lg transition-colors shadow-md shadow-indigo-600/10"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </div>
  );
}