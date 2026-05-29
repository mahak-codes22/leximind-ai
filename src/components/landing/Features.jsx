import React from 'react';

export default function Features() {
  const technicalFeatures = [
    {
      icon: "⚙️",
      title: "Asynchronous ASGI Hub",
      description: "Powered by Python FastAPI core routines to process multi-tenant document analytics concurrently with millisecond execution latency frames."
    },
    {
      icon: "🛡️",
      title: "Strict Pydantic Gating",
      description: "Enforces type-safety models at the network boundary, automatically dropping corrupted strings with structural 422 validations."
    },
    {
      icon: "📊",
      title: "Full REST CRUD Lifecycle",
      description: "Seamless orchestration across your pipeline utilizing strict path boundaries for GET listings, POST registers, PUT updates, and DELETE purges."
    },
    {
      icon: "🗄️",
      title: "Relational SQLAlchemy State",
      description: "Scoped transactional database sessions mapping schema definitions securely straight to multi-indexed persistent MySQL storage tables."
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#09090b] relative z-20 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Engineered for <span className="gradient-text">High-Throughput Analytics</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            A fully decoupled microservice loop eliminating layout drops and structural delays during complex compliance processing operations.
          </p>
        </div>

        {/* Feature Grid Configured via Figma Breakdown (grid-cols-1 md:grid-cols-2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {technicalFeatures.map((item, index) => (
            <div key={index} className="premium-card p-6 flex flex-col justify-between group">
              <div>
                <div className="h-10 w-10 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center text-lg mb-4 group-hover:border-zinc-700 transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              {/* Context Code Element Link Representation */}
              <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between text-xs font-mono text-zinc-600">
                <span>module_context_trace</span>
                <span className="text-indigo-500/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">active //</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}