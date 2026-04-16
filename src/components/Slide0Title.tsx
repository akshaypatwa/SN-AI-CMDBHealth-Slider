import { Activity, ShieldCheck, Database, BrainCircuit, Workflow, Zap } from 'lucide-react'

export default function Slide0Title() {
  return (
    <section className="w-full h-full p-10 flex flex-col items-center justify-center relative overflow-hidden bg-white/40 dark:bg-transparent transition-colors duration-500">
      
      {/* Background Graphic elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1200px] flex items-center justify-center opacity-10 dark:opacity-30 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] border-[100px] border-emerald-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-[400px] h-[400px] border-[80px] border-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center animate-slide-from-bottom">
        
        {/* Top Badges */}
        <div className="flex gap-4 mb-8">
            <span className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-50 dark:bg-[#061B14] border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 font-extrabold uppercase tracking-[0.2em] text-xs shadow-md">
              <Zap size={14} className="text-emerald-500" />
              Automated Operations
            </span>
            <span className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-400 font-extrabold uppercase tracking-[0.2em] text-xs shadow-md">
              <BrainCircuit size={14} className="text-indigo-500" />
              Enterprise AI
            </span>
        </div>

        {/* Main Title typography */}
        <div className="flex items-center justify-center gap-6 mb-4">
           <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-emerald-400 to-teal-600 dark:from-emerald-500 dark:to-cyan-600 flex items-center justify-center shadow-[0_20px_40px_rgba(16,185,129,0.3)] dark:shadow-[0_20px_50px_rgba(16,185,129,0.5)] transform -rotate-6">
             <Activity className="text-white w-14 h-14" />
           </div>
           <h1 className="text-[6rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-900 dark:from-white dark:to-slate-300 tracking-tighter drop-shadow-sm dark:drop-shadow-lg leading-tight">
             CMDB Health <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-indigo-600 dark:from-emerald-400 dark:to-cyan-400">Doctor</span>
           </h1>
        </div>

        {/* Subtitle */}
        <p className="mt-8 text-2xl text-slate-600 dark:text-slate-300 font-medium max-w-4xl mx-auto leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-8">
          Self-healing architecture designed to eliminate <span className="font-bold text-slate-800 dark:text-white">massive manual audit sprints</span> and ensure a perfectly accurate single source of truth.
        </p>
        
        {/* Abstract Component Showcase */}
        <div className="mt-16 flex items-center gap-12 text-slate-400 dark:text-slate-500 bg-white/60 dark:bg-black/20 backdrop-blur-xl px-12 py-6 rounded-[2rem] border border-white/80 dark:border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-xl">
           <div className="flex flex-col items-center gap-2">
             <Database size={32} className="text-slate-400 dark:text-slate-600" />
             <span className="text-[10px] font-bold uppercase tracking-widest">Aggregate</span>
           </div>
           <div className="w-12 h-0.5 bg-gradient-to-r from-slate-200 to-emerald-200 dark:from-slate-700 dark:to-emerald-500/50" />
           <div className="flex flex-col items-center gap-2">
             <BrainCircuit size={32} className="text-emerald-500 dark:text-emerald-500 drop-shadow-[0_0_10px_rgba(16,185,129,0.3)] dark:drop-shadow-[0_0_15px_rgba(16,185,129,0.6)]" />
             <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Analyze</span>
           </div>
           <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-200 to-indigo-200 dark:from-emerald-500/50 dark:to-indigo-500/50" />
           <div className="flex flex-col items-center gap-2">
             <Workflow size={32} className="text-indigo-500 dark:text-indigo-400 drop-shadow-[0_0_10px_rgba(99,102,241,0.3)] dark:drop-shadow-[0_0_15px_rgba(99,102,241,0.6)]" />
             <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">Execute</span>
           </div>
           <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-200 to-slate-200 dark:from-indigo-500/50 dark:to-slate-700" />
           <div className="flex flex-col items-center gap-2">
             <ShieldCheck size={32} className="text-slate-400 dark:text-slate-600" />
             <span className="text-[10px] font-bold uppercase tracking-widest">Verify</span>
           </div>
        </div>

      </div>
    </section>
  )
}
