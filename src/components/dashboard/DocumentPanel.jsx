import React from 'react';
import { UploadCloud, FileText, CheckCircle2, RefreshCw, AlertCircle, ArrowUpRight, Clock, ShieldAlert, Database } from 'lucide-react';

export default function DocumentPanel({ documents, setDocuments }) {
  
  // KPI Analytics Data Points
  const kpis = [
    { title: 'Documents Processed', value: '1,248', change: '+12% this week', icon: FileText, color: 'text-indigo-400' },
    { title: 'Avg Response Time', value: '1.4s', change: 'Gemini Ultra cluster', icon: Clock, color: 'text-cyan-400' },
    { title: 'AI Accuracy Score', value: '99.4%', change: 'Verified human-in-loop', icon: CheckCircle2, color: 'text-emerald-400' },
    { title: 'Active Legal Users', value: '42', change: 'Live session tokens', icon: Database, color: 'text-purple-400' },
  ];

  return (
    <div className="space-y-6 flex-1 overflow-y-auto pr-2">
      
      {/* ANALYTICS SECTION: KPI CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <div key={kpi.title} className="bg-[#121214] border border-[#27272a] p-4 rounded-xl shadow-sm hover:border-zinc-700 transition-colors group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-medium text-zinc-400 tracking-wide uppercase">{kpi.title}</span>
                <Icon className={`w-4 h-4 ${kpi.color} opacity-80 group-hover:scale-105 transition-transform`} />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-semibold text-zinc-100 font-mono tracking-tight">{kpi.value}</span>
                <span className="text-[10px] text-zinc-500 truncate">{kpi.change}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* DRAG & DROP UPLOAD WORKFLOW */}
      <div className="bg-[#121214] border border-[#27272a] rounded-xl p-5 space-y-4">
        <div>
          <h3 className="text-xs font-semibold text-zinc-200">Ingest New Contracts</h3>
          <p className="text-[11px] text-zinc-500">Upload agreements to index them into the Vertex AI Vector DB cluster.</p>
        </div>

        <div className="border border-dashed border-zinc-800 hover:border-indigo-500/50 bg-[#161619]/40 rounded-xl p-6 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all group">
          <div className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-indigo-400 group-hover:border-indigo-500/20 transition-all">
            <UploadCloud className="w-5 h-5" />
          </div>
          <p className="text-xs text-zinc-300 font-medium mt-1">Drag & drop PDF contracts here, or browse files</p>
          <p className="text-[10px] text-zinc-500">Maximum individual file size: 45MB. OCR active automatically.</p>
        </div>

        {/* Live Document Indexing Progress Bar */}
        <div className="bg-[#18181b] border border-zinc-800/60 rounded-lg p-3">
          <div className="flex items-center justify-between text-[11px] mb-1.5">
            <div className="flex items-center gap-2 text-zinc-300">
              <RefreshCw className="w-3 h-3 text-indigo-400 animate-spin" />
              <span className="font-medium truncate">Data_Processing_Addendum_v4.pdf</span>
            </div>
            <span className="text-zinc-400 font-mono">74%</span>
          </div>
          <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-500 to-violet-500 h-full w-[74%] rounded-full transition-all duration-300"></div>
          </div>
        </div>
      </div>

      {/* DOCUMENT BENCHMARK WORKLIST */}
      <div className="bg-[#121214] border border-[#27272a] rounded-xl overflow-hidden">
        <div className="p-4 border-b border-[#27272a]">
          <h3 className="text-xs font-semibold text-zinc-200">Document Repository</h3>
        </div>

        <div className="divide-y divide-[#27272a]">
          {documents.map((doc) => (
            <div key={doc.id} className="p-3.5 flex items-center justify-between hover:bg-[#161619]/60 transition-colors group">
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400">
                  <FileText className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-zinc-200 truncate group-hover:text-indigo-400 transition-colors">{doc.name}</p>
                  <div className="flex items-center gap-2 text-[10px] text-zinc-500 mt-0.5">
                    <span>{doc.size}</span>
                    <span>•</span>
                    <span>{doc.date}</span>
                  </div>
                </div>
              </div>

              {/* Status Identification Tags & AI Confidence Metrics */}
              <div className="flex items-center gap-4 ml-4">
                {doc.status === 'Indexed' && (
                  <span className="flex items-center gap-1.5 text-[10px] bg-emerald-950/30 text-emerald-400 border border-emerald-900/40 px-2 py-0.5 rounded-md font-medium">
                    <CheckCircle2 className="w-3 h-3" /> Indexed
                  </span>
                )}
                {doc.status === 'Processing' && (
                  <span className="flex items-center gap-1.5 text-[10px] bg-amber-950/30 text-amber-400 border border-amber-900/40 px-2 py-0.5 rounded-md font-medium">
                    <RefreshCw className="w-3 h-3 animate-spin" /> Processing
                  </span>
                )}
                {doc.status === 'Failed' && (
                  <span className="flex items-center gap-1.5 text-[10px] bg-rose-950/30 text-rose-400 border border-rose-900/40 px-2 py-0.5 rounded-md font-medium">
                    <AlertCircle className="w-3 h-3" /> Failed
                  </span>
                )}

                {doc.score > 0 && (
                  <div className="text-right hidden sm:block">
                    <span className="text-[10px] text-zinc-500 block uppercase tracking-wider">Confidence</span>
                    <span className="text-xs font-semibold text-zinc-300 font-mono">{doc.score}%</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}