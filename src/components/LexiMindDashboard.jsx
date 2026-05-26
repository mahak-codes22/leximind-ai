import React, { useState } from 'react';
import Sidebar from './layout/Sidebar';
import Header from './layout/Header';
import DocumentPanel from './dashboard/DocumentPanel';
import ChatPanel from './chat/ChatPanel';
import { Database, FileCode, CheckCircle2 } from 'lucide-react';

export default function LexiMindDashboard() {
  const [activeTab, setActiveTab] = useState('AI Chat');
  const [selectedModel, setSelectedModel] = useState('Gemini 1.5 Pro');
  
  const [documents, setDocuments] = useState([
    { id: 1, name: 'MSLA_Vendor_Agreement_2026.pdf', size: '2.4 MB', date: 'May 24, 2026', status: 'Indexed', score: 98 },
    { id: 2, name: 'Data_Processing_Addendum_v4.pdf', size: '1.1 MB', date: 'May 25, 2026', status: 'Processing', score: 92 },
    { id: 3, name: 'NDA_Executive_Search_Draft.pdf', size: '420 KB', date: 'May 26, 2026', status: 'Failed', score: 0 },
  ]);

  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] flex overflow-hidden w-full">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} docCount={documents.length} />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header selectedModel={selectedModel} setSelectedModel={setSelectedModel} />
        
        {/* Core Split Screen Application Viewport */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6 grid grid-cols-1 xl:grid-cols-12 gap-6">
          
          {/* Left Panel - Occupies 7 columns */}
          <div className="xl:col-span-7 flex flex-col min-w-0">
            <DocumentPanel documents={documents} setDocuments={setDocuments} />
          </div>

          {/* Right Panel - Occupies 5 columns */}
          <div className="xl:col-span-5 flex flex-col space-y-4 min-w-0">
            <ChatPanel selectedModel={selectedModel} />

            {/* OPTIONAL ADVANCED SECTION: VECTOR RETRIEVAL RUNTIME PREVIEW */}
            <div className="bg-[#121214] border border-[#27272a] rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between border-b border-[#27272a] pb-2">
                <div className="flex items-center gap-2 text-zinc-400">
                  <Database className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="text-[11px] font-medium uppercase tracking-wider">Vector Search Retrieval</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
                  <CheckCircle2 className="w-3 h-3" /> Match Found
                </div>
              </div>

              <div className="bg-[#161619] border border-zinc-800/80 rounded-lg p-2.5 space-y-2">
                <div className="flex items-center justify-between text-[10px] text-zinc-500 font-mono">
                  <span className="flex items-center gap-1"><FileCode className="w-3 h-3" /> Chunk ID: vertex-idx-8422</span>
                  <span className="text-zinc-400 font-semibold">Score: 0.941</span>
                </div>
                <p className="text-[11px] text-zinc-400 leading-relaxed italic">
                  "...Except as explicitly provided herein, neither party shall be liable for any indirect, incidental, or punitive damages. Vendor's total maximum aggregate liability under this agreement for breach of security protocols shall be [UNDEFINED]..."
                </p>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}