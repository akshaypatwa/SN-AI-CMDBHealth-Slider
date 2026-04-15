import { useState, useEffect, useRef, useCallback } from 'react'
import { Play, Pause, ChevronLeft, ChevronRight, Activity, Database, BrainCircuit, CheckCircle2, Server, LayoutList, ChevronDown, Search, Plus, Moon, RefreshCw, Zap } from 'lucide-react'

// --- Types ---
interface SimulationStep {
  label: string
  desc: string
  icon: any
}

// --- Data ---
const STEPS: SimulationStep[] = [
  { label: 'Scan Critical Servers', desc: 'Schedule job scanning enterprise servers.', icon: Server },
  { label: 'Populate CMDB Custom Table', desc: 'Scan output & peers added to table.', icon: Database },
  { label: 'Bidirectional LLM Pipeline', desc: 'Send data to AI, receive remediation plans.', icon: Zap },
  { label: 'AI Contextual Processing', desc: 'LLM analyzes context, peers, and history.', icon: BrainCircuit },
  { label: 'Apply DB Recommendations', desc: 'Actionable recommendations update table & dashboard.', icon: CheckCircle2 },
]

export default function Slide3LiveDemo() {
  const [step, setStep] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goToStep = useCallback((s: number) => {
    setStep(Math.max(0, Math.min(STEPS.length - 1, s)))
  }, [])

  useEffect(() => {
    if (!autoplay) return
    timerRef.current = setTimeout(() => {
      if (step === STEPS.length - 1) {
        setAutoplay(false) // Stop when reaching dashboard
      } else {
        goToStep(step + 1)
      }
    }, 4500)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [autoplay, step, goToStep])

  const renderVisual = () => {
    switch (step) {
      case 0:
        return (
          <div className="flex flex-col items-center justify-center h-full w-full">
            <div className="w-40 h-40 rounded-full border-[6px] border-slate-100 dark:border-[#0F172A] shadow-[inset_0_0_40px_rgba(16,185,129,0.1)] dark:shadow-[inset_0_0_40px_rgba(16,185,129,0.2)] flex items-center justify-center animate-pulse relative bg-white dark:bg-transparent">
               <div className="absolute inset-[-6px] rounded-full border-t-[6px] border-emerald-500 dark:border-emerald-400 animate-spin" />
               <Activity className="text-emerald-500 dark:text-emerald-400 w-16 h-16 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)] dark:drop-shadow-[0_0_15px_#10b981]" />
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-12 mb-6 tracking-tight">Executing Discovery Scan</h3>
            <div className="bg-white dark:bg-[#0A0F1A] border border-slate-200 dark:border-slate-700/60 shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] rounded-2xl p-8 w-[600px] max-w-full">
                <div className="flex justify-between text-base mb-4 text-slate-600 dark:text-slate-300 font-bold">
                    <span className="flex items-center gap-2"><Server size={18} className="text-emerald-600 dark:text-slate-400"/> Scanning Critical Enterprise Servers</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-mono tracking-wider">48,291 / 50,000</span>
                </div>
                <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner flex">
                    <div className="h-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 dark:from-emerald-600 dark:via-emerald-400 dark:to-cyan-400 w-[96%] relative">
                       <div className="absolute top-0 bottom-0 right-0 w-20 bg-white/40 blur-md animate-data-flux" />
                    </div>
                </div>
                <p className="text-center text-slate-400 dark:text-slate-500 text-xs mt-6 uppercase tracking-[0.3em] font-bold">Data Pipeline Active</p>
            </div>
          </div>
        )
      case 1:
        return (
          <div className="flex flex-col h-full w-full p-12 relative animate-fade-in-scale">
            <div className="bg-white dark:bg-[#0A101C] border border-slate-200 dark:border-slate-700/80 shadow-xl dark:shadow-[0_40px_80px_rgba(0,0,0,0.9)] rounded-2xl flex flex-col overflow-hidden h-full">
              {/* ServiceNow List Header */}
              <div className="bg-slate-50 dark:bg-[#121B2A] border-b border-slate-200 dark:border-slate-700/80 px-8 py-5 flex items-center justify-between z-10 relative">
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-gradient-to-br dark:from-blue-500/20 dark:to-indigo-600/20 flex items-center justify-center border border-blue-100 dark:border-indigo-500/30 dark:shadow-[0_0_20px_rgba(79,70,229,0.15)] mt-1">
                     <LayoutList className="text-indigo-600 dark:text-indigo-400 w-6 h-6" />
                   </div>
                   <div>
                     <h3 className="text-2xl font-extrabold text-slate-800 dark:text-white leading-tight tracking-tight">CMDB Health Records</h3>
                     <p className="text-xs text-slate-500 dark:text-indigo-300/80 font-mono mt-1 dark:opacity-80 uppercase tracking-widest">Table: x_snc_cmdb_health_data</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4">
                   <button className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-md dark:shadow-[0_10px_20px_rgba(79,70,229,0.3)] transition-all">
                     View Dashboards
                   </button>
                 </div>
              </div>
              
              {/* Columns Header */}
              <div className="bg-white dark:bg-[#0D1421] text-xs font-extrabold py-4 px-8 grid grid-cols-12 text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700/80 uppercase tracking-widest gap-6 items-center shadow-sm dark:shadow-lg z-0">
                <span className="col-span-1 flex justify-center"><div className="w-4 h-4 rounded border-2 border-slate-300 dark:border-slate-600 bg-transparent opacity-60"></div></span>
                <span className="col-span-2">Record Num ⏷</span>
                <span className="col-span-3">Assessed Config Item</span>
                <span className="col-span-3">CI Class</span>
                <span className="col-span-2 text-right">Data Gap</span>
                <span className="col-span-1 border-l border-slate-200 dark:border-slate-700 w-full flex justify-center">Status</span>
              </div>
              
              {/* Authentic ServiceNow Rows */}
              <div className="flex-1 overflow-visible flex flex-col bg-slate-50/50 dark:bg-[#050811] pb-4">
                {[1,2,3,4,5,6,7,8].map(i => (
                  <div key={i} className="text-[15px] px-8 py-4 border-b border-slate-100 dark:border-slate-800/80 grid grid-cols-12 items-center gap-6 bg-white dark:bg-transparent hover:bg-slate-50 dark:hover:bg-[#0A101C] cursor-pointer animation-delay-stagger animate-slide-from-bottom transition-colors">
                    <span className="col-span-1 flex justify-center"><div className="w-4 h-4 rounded border-2 border-slate-300 dark:border-slate-600 bg-transparent"></div></span>
                    <span className="col-span-2 text-indigo-600 dark:text-indigo-400 font-mono font-bold hover:underline">HREC-10{900+i}</span>
                    <span className="col-span-3 text-slate-700 dark:text-slate-200 font-bold truncate">US-EAST-DB-{i.toString().padStart(3, '0')}-PRD</span>
                    <span className="col-span-3 text-slate-500 dark:text-slate-400 text-sm truncate">cmdb_ci_linux_server</span>
                    <span className="col-span-2 text-amber-600 dark:text-orange-400 text-right text-xs font-bold uppercase track-widest">Orphaned CI</span>
                    <span className="col-span-1 flex justify-center">
                       <span className="bg-slate-100 dark:bg-[#1C2C39] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600/50 px-3 py-1 rounded-md text-[10px] uppercase font-bold">Staged</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="flex flex-col items-center justify-center h-full w-full relative overflow-hidden bg-slate-50 dark:bg-[#02050A] transition-colors">
            <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(ellipse_at_center,#111827_0%,#000_100%)] opacity-80" />
            <div className="flex items-center justify-center gap-12 w-full px-16 relative mt-10">
              
              {/* CMDB Table Node */}
              <div className="w-80 bg-white dark:bg-gradient-to-b dark:from-[#111827] dark:to-[#0A0F1C] border border-slate-200 dark:border-slate-700/50 rounded-[2rem] p-12 flex flex-col items-center shadow-lg dark:shadow-[0_30px_80px_rgba(0,0,0,0.8)] z-20 group relative overflow-hidden">
                 <div className="absolute inset-0 bg-blue-50 dark:bg-blue-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                 <Database className="text-blue-500 dark:text-blue-400 w-28 h-28 mb-8 relative z-10 drop-shadow-md dark:drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]" />
                 <div className="text-2xl font-black text-slate-800 dark:text-white relative z-10 tracking-tight text-center">CMDB Custom Table</div>
                 <div className="text-xs font-mono text-blue-600 dark:text-blue-400 mt-2 relative z-10 bg-blue-50 dark:bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-200 dark:border-blue-500/30">x_snc_health_data</div>
              </div>
              
              {/* Bidirectional Pipelines */}
              <div className="flex-1 flex flex-col gap-10">
                {/* Outgoing (Data to LLM) */}
                <div className="relative">
                  <p className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-teal-600 dark:text-cyan-400 uppercase tracking-widest font-bold w-max">1. Send Raw Payload</p>
                  <div className="h-2.5 bg-slate-200 dark:bg-[#0A101C] rounded-full relative overflow-hidden shadow-inner border border-slate-300 dark:border-slate-800">
                    <div className="absolute w-full h-px bg-slate-300 dark:bg-slate-700 top-1/2 -translate-y-1/2" />
                    <div className="absolute left-0 w-64 h-full bg-teal-400 dark:bg-cyan-400 rounded-full animate-data-flux shadow-[0_0_15px_#2dd4bf] dark:shadow-[0_0_50px_#22d3ee,inset_0_0_15px_#fff]" />
                    <div className="absolute left-0 w-32 h-1 bg-white top-1/2 -translate-y-1/2 rounded-full animate-data-flux z-10 shadow-[0_0_10px_#fff]" />
                  </div>
                </div>

                {/* Incoming (Recommendations to DB) */}
                <div className="relative">
                  <p className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] text-emerald-600 dark:text-emerald-400 uppercase tracking-widest font-bold w-max">2. Return Recommendations</p>
                  <div className="h-2.5 bg-slate-200 dark:bg-[#0A101C] rounded-full relative overflow-hidden shadow-inner border border-slate-300 dark:border-slate-800 scale-x-[-1]">
                    <div className="absolute w-full h-px bg-slate-300 dark:bg-slate-700 top-1/2 -translate-y-1/2" />
                    <div className="absolute left-0 w-64 h-full bg-emerald-500 dark:bg-emerald-400 rounded-full animate-data-flux shadow-[0_0_15px_#10b981] dark:shadow-[0_0_50px_#10b981,inset_0_0_15px_#fff]" />
                    <div className="absolute left-0 w-32 h-1 bg-white top-1/2 -translate-y-1/2 rounded-full animate-data-flux z-10 shadow-[0_0_10px_#fff]" />
                  </div>
                </div>
              </div>
              
              {/* LLM Engine Node */}
              <div className="w-80 bg-white dark:bg-gradient-to-b dark:from-[#1B122A] dark:to-[#0D0814] border border-slate-200 dark:border-purple-500/50 rounded-[2rem] p-12 flex flex-col items-center shadow-lg dark:shadow-[0_30px_80px_rgba(168,85,247,0.3)] z-20 group relative overflow-hidden">
                 <div className="absolute inset-0 bg-purple-50 dark:bg-purple-500/20 blur-3xl group-hover:opacity-100 opacity-0 transition-opacity" />
                 <BrainCircuit className="text-purple-600 dark:text-purple-400 w-28 h-28 mb-8 relative z-10 drop-shadow-md dark:drop-shadow-[0_0_25px_rgba(168,85,247,0.7)]" />
                 <div className="text-2xl font-black text-slate-800 dark:text-white relative z-10 tracking-tight text-center">Enterprise AI</div>
                 <div className="text-xs font-bold text-purple-600 dark:text-purple-400 mt-2 relative z-10 animate-pulse bg-purple-50 dark:bg-purple-500/20 px-4 py-1.5 rounded-full border border-purple-200 dark:border-purple-500/30 uppercase tracking-widest">Generating</div>
              </div>
            </div>
            
            <div className="mt-20 flex items-center justify-center gap-4 bg-emerald-50 dark:bg-[#0A101C] border border-emerald-200 dark:border-emerald-500/30 px-8 py-4 rounded-3xl shadow-sm dark:shadow-[0_20px_40px_rgba(16,185,129,0.15)] relative overflow-hidden">
               <div className="absolute inset-0 bg-emerald-500/5 animate-pulse" />
               <span className="w-3 h-3 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping" />
               <p className="text-emerald-700 dark:text-emerald-400 text-lg font-bold tracking-[0.25em] uppercase relative z-10 text-center">Auto-Populating Table Extracted Data</p>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="flex flex-col items-center justify-center h-full w-full relative bg-slate-50 dark:bg-[#02050A]">
            <div className="w-72 h-72 rounded-full border-2 border-purple-200 dark:border-purple-500/30 animate-ai-process flex items-center justify-center bg-white dark:bg-[#0C0814] shadow-lg dark:shadow-[0_0_100px_rgba(168,85,247,0.25)] relative">
               <div className="absolute inset-[-10px] rounded-full border border-purple-300 dark:border-purple-500/10 border-dashed animate-[spin_10s_linear_infinite]" />
               <BrainCircuit className="text-purple-600 dark:text-purple-400 w-32 h-32 animate-pulse" />
            </div>
            
            <div className="mt-16 bg-slate-900 dark:bg-[#0B0D18] border border-slate-800 dark:border-purple-500/20 w-[85%] h-64 rounded-3xl p-10 font-mono text-lg text-emerald-300 dark:text-purple-300 overflow-hidden relative shadow-2xl dark:shadow-[0_30px_60px_rgba(0,0,0,0.9)]">
               <div className="flex gap-4 items-center mb-6 text-slate-400 dark:text-purple-400/50 text-sm border-b border-slate-800 dark:border-purple-500/20 pb-4">
                 <Server size={18}/><span>NODE: cmdb-analysis-omega</span>
                 <span className="ml-auto flex gap-2"><span className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"/> STATUS: INFERENCING</span>
               </div>
               <p className="animate-slide-from-bottom opacity-70 mb-3">&gt; [MODEL] Ingested 48,291 configuration items & 120M relationships...</p>
               <p className="animate-slide-from-bottom text-purple-300 dark:text-purple-200 mb-3" style={{ animationDelay: '600ms'}}>&gt; [AUDIT] Identified 1,402 orphaned records with zero parent CI dependencies...</p>
               <p className="animate-slide-from-bottom text-white font-bold text-xl mt-6 border-l-4 border-emerald-400 pl-4 bg-emerald-500/20 py-2" style={{ animationDelay: '1400ms'}}>
                 &gt; [SUCCESS] AI recommended remediation workflows generated. Exposing to Dashboard View.
               </p>
               <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900 dark:from-[#0B0D18] to-transparent pointer-events-none" />
            </div>
          </div>
        )
      case 4:
        return (
          <div className="w-full h-full p-8 flex animate-fade-in-scale bg-[#F4F6F9] dark:bg-transparent transition-colors duration-500 rounded-2xl">
            {/* The exact requested Dashboard Layout (Donezo Light Theme / Native Custom Dark) */}
            <div className="w-full h-full bg-[#f4f5f8] dark:bg-[#1A1F2D] rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col font-sans shadow-lg dark:shadow-2xl relative transition-colors duration-500">
                
                {/* 1. Dashboard Top Header */}
                <header className="h-[60px] bg-white dark:bg-[#161C28] flex items-center justify-between px-6 border-b border-slate-200 dark:border-slate-700/60 shadow-sm transition-colors">
                   <div className="flex items-center gap-3">
                     <span className="w-4 h-4 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.3)] dark:shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                     <h1 className="text-slate-800 dark:text-white font-bold tracking-wide text-[17px]">CMDB Health Doctor</h1>
                     <span className="text-slate-500 dark:text-slate-400 text-xs ml-2 border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-[#1E2536] px-3 py-1 rounded-full">Last analysed: 15/04/2026 09:25:05</span>
                   </div>
                   <button className="flex items-center gap-2 px-4 py-1.5 bg-slate-50 dark:bg-[#1E2536] border border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-[#252E42] rounded-full text-xs font-extrabold text-slate-700 dark:text-blue-400 transition shadow-sm">
                     <RefreshCw size={14} /> REFRESH
                   </button>
                </header>

                <div className="flex-1 overflow-auto bg-[#F4F5F8] dark:bg-[#131722] p-5 flex flex-col gap-4">
                  
                  {/* Dashboard Title & Top Actions (Light Mode specific additions for Donezo look) */}
                  <div className="flex items-center justify-between mb-2">
                     <div>
                       <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Dashboard</h2>
                       <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Review, prioritize, and accomplish AI recommendations.</p>
                     </div>
                     <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 bg-[#106240] text-white rounded-full text-sm font-semibold shadow-[0_4px_10px_rgba(16,98,64,0.3)] dark:bg-[#2D3956] dark:text-emerald-400 hover:opacity-90">
                           <Plus size={16}/> Add CI Record
                        </button>
                     </div>
                  </div>

                  {/* 2. Top Metric Cards (5 widgets) Donezo style */}
                  <div className="flex gap-4">
                     {[
                       { v: '5', l: 'TOTAL CIs', trend: 'Increased from last month', main: true },
                       { v: '3', l: 'CRITICAL', trend: 'Increased from last month', main: false },
                       { v: '0', l: 'MODERATE', trend: 'Decreased from last month', main: false },
                       { v: '2', l: 'MINOR', trend: 'Needs review', main: false },
                       { v: '0', l: 'HEALTHY', trend: 'On hold', main: false },
                     ].map((wg, idx) => {
                       const isMain = wg.main;
                       return (
                         <div key={idx} className={`flex-1 rounded-2xl flex flex-col p-5 shadow-sm transition-all relative ${isMain ? 'bg-[#106240] dark:bg-[#1A2131] border-transparent dark:border-slate-700' : 'bg-white dark:bg-[#1A2131] border border-slate-200 dark:border-slate-700'} dark:border-b-2 dark:border-b-blue-500`}>
                           <div className="flex justify-between items-start mb-2">
                             <span className={`text-sm font-semibold ${isMain ? 'text-[#A3E0C4] dark:text-slate-400' : 'text-slate-800 dark:text-slate-400'}`}>{wg.l}</span>
                             <div className={`w-6 h-6 rounded-full flex items-center justify-center border ${isMain ? 'border-[#3DA574] text-white dark:border-slate-600' : 'border-slate-200 text-slate-500 dark:border-slate-600'}`}><ArrowRight size={12} className="-rotate-45" /></div>
                           </div>
                           <span className={`text-[42px] leading-tight font-light tracking-tight mb-4 ${isMain ? 'text-white dark:text-blue-400' : 'text-slate-800 dark:text-white'}`}>{wg.v}</span>
                           <span className={`text-[11px] font-medium flex items-center gap-1.5 ${isMain ? 'text-[#A3E0C4] dark:text-slate-500' : 'text-slate-500'}`}>
                             <span className={`px-1 rounded flex items-center text-[8px] border font-bold ${isMain ? 'bg-[#3DA574]/20 border-[#3DA574] text-white' : 'bg-[#106240]/10 border-[#106240]/30 text-[#106240] dark:bg-transparent dark:text-slate-400'}`}>+5%</span>
                             {wg.trend}
                           </span>
                         </div>
                       )
                     })}
                  </div>

                  {/* 3. Filters Row */}
                  <div className="flex items-center gap-3 py-2">
                     <div className="flex bg-white dark:bg-[#1A2131] rounded-full border border-slate-200 dark:border-slate-700/60 p-1 shadow-sm">
                        {['ALL','CRITICAL','MODERATE'].map((f, i) => (
                          <button key={f} className={`px-5 py-1.5 rounded-full text-[12px] font-semibold transition-colors ${i===0 ? 'bg-[#106240] text-white dark:bg-blue-600 shadow' : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'}`}>
                            {f}
                          </button>
                        ))}
                     </div>
                     <button className="flex items-center justify-between px-4 py-2 bg-white dark:bg-[#1A2131] border border-slate-200 dark:border-slate-700/60 rounded-full text-xs text-slate-600 dark:text-slate-300 min-w-[140px] shadow-sm">
                       All Environments <ChevronDown size={14}/>
                     </button>
                     <button className="flex items-center justify-between px-4 py-2 bg-white dark:bg-[#1A2131] border border-slate-200 dark:border-slate-700/60 rounded-full text-xs text-slate-600 dark:text-slate-300 min-w-[140px] shadow-sm">
                       Score: Worst First <ChevronDown size={14}/>
                     </button>
                     <div className="flex-1 relative">
                       <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                       <input type="text" placeholder="Search CI name..." className="w-full bg-white dark:bg-[#1A2131] border border-slate-200 dark:border-slate-700/60 rounded-full py-2 pl-10 pr-4 text-xs text-slate-700 dark:text-white placeholder-slate-400 focus:outline-none shadow-sm" />
                     </div>
                  </div>

                  {/* 4. Dashboard CI Cards Grid */}
                  <div className="grid grid-cols-3 gap-6 mt-2">
                     {[
                       { title: 'APP-SERVER-INCOMPLETE-01', sub: 'Production', score: '0', pills: ['STALE', 'ORPHAN', '2 VIOLATIONS'], act: 'Schedule a Discovery run. CI never confirmed...' },
                       { title: 'APP-SERVER-DUPLICATE', sub: 'Unknown Environment', score: '2', pills: ['STALE', '2 VIOLATIONS'], act: 'Review for decommissioning. Marked stale (293 days)...' },
                       { title: 'APP-SERVER-PRD-01', sub: 'Production', score: '24', pills: ['STALE', '2 MISSING'], act: 'Re-run Discovery. Last discovered 3,986 days ago but has 10 active relationships...' },
                     ].map((card, i) => (
                       <div key={i} className="bg-white dark:bg-[#1A2131] border border-slate-200 dark:border-slate-700/60 rounded-2xl overflow-hidden flex flex-col shadow-sm dark:shadow-lg transition-colors">
                          <div className="p-5 flex justify-between items-start border-b border-slate-100 dark:border-slate-700/50">
                            <div className="flex-1">
                               <div className="flex items-center gap-2 mb-1.5">
                                 <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                                 <h4 className="text-slate-800 dark:text-white text-sm font-bold truncate">{card.title}</h4>
                               </div>
                               <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium pl-4">{card.sub}</p>
                            </div>
                            <div className="flex flex-col items-center justify-center w-12 h-12 bg-red-50 dark:bg-transparent rounded-full border border-red-100 dark:border-slate-700 shrink-0">
                               <span className="text-lg leading-[1] font-black text-red-600 dark:text-red-500">{card.score}</span>
                            </div>
                          </div>

                          <div className="px-5 py-4 flex flex-wrap gap-2 auto-rows-max">
                             {card.pills.map((p, idx) => (
                                <span key={idx} className={`px-2.5 py-1 text-[9px] font-bold rounded-md border ${
                                  p.includes('VIOLATION') ? 'bg-red-50 text-red-600 border-red-200 dark:bg-red-500/10 dark:border-red-500/20 dark:text-red-500' :
                                  p.includes('MISSING') ? 'bg-orange-50 text-orange-600 border-orange-200 dark:bg-orange-500/10 dark:border-orange-500/20 dark:text-orange-400' :
                                  'bg-slate-50 text-slate-600 border-slate-200 dark:bg-[#2A3445] dark:border-slate-600 dark:text-slate-300'
                                }`}>{p}</span>
                             ))}
                          </div>

                          <div className="px-5 py-4 bg-slate-50/50 dark:bg-[#131722]/50 flex-1 border-t border-slate-100 dark:border-transparent">
                             <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-2 flex items-center gap-1.5"><BrainCircuit size={12}/> AI Recommended Action</p>
                             <p className="text-sm text-slate-700 dark:text-slate-300 leading-snug">{card.act}</p>
                          </div>

                          <div className="px-5 py-4 mt-auto border-t border-slate-100 dark:border-slate-700/50 flex justify-between items-center bg-white dark:bg-[#181D29]">
                             <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Due date: Oct 20, 2026</span>
                             <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#106240] text-white text-xs font-semibold hover:bg-[#0c472e] dark:bg-orange-500/20 dark:text-orange-400 dark:border dark:border-orange-500/50 transition-colors shadow">
                               Execute Fix <ArrowRight size={12} />
                             </button>
                          </div>
                       </div>
                     ))}
                  </div>
                </div>
            </div>
          </div>
        )
    }
  }

  // Fallback icon definition
  const ArrowRight = ({ size, className = "" }: { size: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
  );

  return (
    <section className="w-full h-full flex bg-[#F0F2F5] dark:bg-transparent transition-colors duration-500">
      
      {/* ── LEFT: Process Simulator Menu ── */}
      <div className="w-[450px] bg-white dark:bg-[#0A0F1D]/80 backdrop-blur-2xl border-r border-slate-200 dark:border-slate-700/50 p-10 flex flex-col z-20 shadow-[20px_0_40px_-20px_rgba(0,0,0,0.05)] dark:shadow-[20px_0_40px_-20px_rgba(0,0,0,0.8)] relative transition-colors duration-500">
        <div className="mb-2">
           <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Simulator</h2>
           <p className="text-emerald-700 dark:text-emerald-500 font-bold tracking-widest uppercase text-xs mt-3 bg-emerald-50 border-emerald-200 dark:bg-emerald-500/10 inline-block px-3 py-1 rounded-full border dark:border-emerald-500/20">Active Execution</p>
        </div>

        {/* Controls */}
        <div className="my-10 flex gap-4 h-14">
          <button onClick={() => setAutoplay(a => !a)} className="flex-1 flex items-center justify-center gap-3 bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-[#131B2A] dark:hover:bg-[#1A253A] border border-slate-300 dark:border-slate-700 dark:text-slate-200 text-sm font-extrabold rounded-full transition-all shadow-sm">
            {autoplay ? <><Pause size={18}/> PAUSE</> : <><Play size={18}/> AUTO</>}
          </button>
          <button onClick={() => { setAutoplay(false); goToStep(step + 1) }} className="flex-1 flex items-center justify-center gap-3 bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-[#131B2A] dark:hover:bg-[#1A253A] border border-slate-300 dark:border-slate-700 dark:text-slate-200 text-sm font-extrabold rounded-full transition-all shadow-sm group">
            NEXT <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Stacked Cards for Steps */}
        <div className="space-y-4 flex-1 mt-4">
          {STEPS.map((s, i) => {
            const isActive = i === step
            const isDone = i < step

            return (
              <div 
                key={i} 
                onClick={() => { setAutoplay(false); goToStep(i); }}
                className={`flex items-center gap-6 cursor-pointer p-4 rounded-2xl border transition-all duration-300 group
                           ${isActive ? 'bg-white border-emerald-500 shadow-[0_10px_30px_rgba(16,185,129,0.1)] dark:bg-[#0F1725] dark:shadow-[0_10px_30px_rgba(16,185,129,0.15)] scale-105' 
                                      : 'bg-slate-50 border-slate-200 hover:border-slate-400 dark:bg-[#0B101C] dark:border-slate-800 dark:hover:border-slate-600'}`} 
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors flex-shrink-0
                   ${isActive ? 'bg-emerald-50 border-emerald-500 text-emerald-600 dark:bg-emerald-500/20 dark:border-emerald-400 dark:text-emerald-400 shadow-sm dark:shadow-[0_0_15px_rgba(52,211,153,0.5)]' 
                   : 'bg-white border-slate-300 text-slate-400 dark:bg-[#131A26] dark:border-slate-700 dark:text-slate-500'}`}>
                  {isDone ? <CheckCircle2 size={24} className="text-emerald-600 dark:text-emerald-500" /> : <span className="font-black text-lg">{i + 1}</span>}
                </div>
                <div className="flex-1">
                  <p className={`text-lg font-bold tracking-tight transition-colors ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
                    {s.label}
                  </p>
                  {isActive && <p className="text-xs text-slate-600 dark:text-emerald-400/80 mt-1 font-medium leading-snug">{s.desc}</p>}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── RIGHT: Visuals Area ── */}
      <div className="flex-1 relative overflow-hidden bg-white dark:bg-[#0A0D14] transition-colors duration-500">
         {/* Top Banner indicating visual area */}
         <div className="absolute top-0 inset-x-0 h-20 border-b border-slate-200 dark:border-slate-700/60 bg-white/80 dark:bg-[#0B101C]/80 backdrop-blur-xl flex items-center px-10 z-30 justify-between">
             <div className="flex items-center gap-3 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 px-5 py-2 rounded-full shadow-sm dark:shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                 <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse drop-shadow-sm dark:drop-shadow-[0_0_5px_#10b981]" />
                 <span className="text-xs font-extrabold text-emerald-700 dark:text-emerald-400 tracking-[0.15em] uppercase">Enterprise Simulation Node</span>
             </div>
             {step === 4 && (
                <button onClick={() => goToStep(3)} className="text-xs text-slate-600 dark:text-slate-400 font-bold hover:text-slate-900 dark:hover:text-white transition-colors bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full flex items-center gap-2 border border-slate-300 dark:border-slate-700 z-50">
                  <ChevronLeft size={16}/> BACK
                </button>
             )}
         </div>
         {/* Inner Content Component */}
         <div className="w-full h-full pt-20">
            {renderVisual()}
         </div>
      </div>
    </section>
  )
}
