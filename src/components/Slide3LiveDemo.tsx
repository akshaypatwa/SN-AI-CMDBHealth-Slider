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
    }, 4500) // Much slower to let users appreciate the animations
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [autoplay, step, goToStep])

  const renderVisual = () => {
    switch (step) {
      case 0:
        return (
          <div className="flex flex-col items-center justify-center h-full w-full">
            <div className="w-40 h-40 rounded-full border-[6px] border-[#0F172A] shadow-[inset_0_0_40px_rgba(16,185,129,0.2)] flex items-center justify-center animate-pulse relative">
               <div className="absolute inset-[-6px] rounded-full border-t-[6px] border-emerald-400 animate-spin" />
               <Activity className="text-emerald-400 w-16 h-16 drop-shadow-[0_0_15px_#10b981]" />
            </div>
            <h3 className="text-3xl font-extrabold text-white mt-12 mb-6 tracking-tight">Executing Discovery Scan</h3>
            <div className="bg-[#0A0F1A] border border-slate-700/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)] rounded-2xl p-8 w-[600px] max-w-full">
                <div className="flex justify-between text-base mb-4 text-slate-300 font-bold">
                    <span className="flex items-center gap-2"><Server size={18} className="text-slate-400"/> Scanning Critical Enterprise Servers</span>
                    <span className="text-emerald-400 font-mono tracking-wider">48,291 / 50,000</span>
                </div>
                <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden shadow-inner flex">
                    <div className="h-full bg-gradient-to-r from-emerald-600 via-emerald-400 to-cyan-400 w-[96%] relative">
                       <div className="absolute top-0 bottom-0 right-0 w-20 bg-white/40 blur-md animate-data-flux" />
                    </div>
                </div>
                <p className="text-center text-slate-500 text-xs mt-6 uppercase tracking-[0.3em] font-bold">Data Pipeline Active</p>
            </div>
          </div>
        )
      case 1:
        return (
          <div className="flex flex-col h-full w-full p-12 relative animate-fade-in-scale">
            <div className="bg-[#0A101C] border border-slate-700/80 shadow-[0_40px_80px_rgba(0,0,0,0.9)] rounded-2xl flex flex-col overflow-hidden h-full">
              {/* ServiceNow List Header */}
              <div className="bg-[#121B2A] border-b border-slate-700/80 px-8 py-5 flex items-center justify-between z-10 relative">
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-600/20 flex items-center justify-center border border-indigo-500/30 shadow-[0_0_20px_rgba(79,70,229,0.15)] mt-1">
                     <LayoutList className="text-indigo-400 w-6 h-6" />
                   </div>
                   <div>
                     <h3 className="text-2xl font-extrabold text-white leading-tight tracking-tight">CMDB Health Records</h3>
                     <p className="text-xs text-indigo-300/80 font-mono mt-1 opacity-80 uppercase tracking-widest">Table: x_snc_cmdb_health_data</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4">
                   <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-[0_10px_20px_rgba(79,70,229,0.3)] transition-all">
                     View Dashboards
                   </button>
                 </div>
              </div>
              
              {/* Columns Header */}
              <div className="bg-[#0D1421] text-xs font-extrabold py-4 px-8 grid grid-cols-12 text-slate-400 border-b border-slate-700/80 uppercase tracking-widest gap-6 items-center shadow-lg z-0">
                <span className="col-span-1 flex justify-center"><div className="w-4 h-4 rounded border-2 border-slate-600 bg-transparent opacity-60"></div></span>
                <span className="col-span-2">Record Num ⏷</span>
                <span className="col-span-3">Assessed Config Item</span>
                <span className="col-span-3">CI Class</span>
                <span className="col-span-2 text-right">Data Gap</span>
                <span className="col-span-1 border-l border-slate-700 w-full flex justify-center">Status</span>
              </div>
              
              {/* Authentic ServiceNow Rows */}
              <div className="flex-1 overflow-visible flex flex-col bg-[#050811] pb-4">
                {[1,2,3,4,5,6,7,8].map(i => (
                  <div key={i} className="text-[15px] px-8 py-4 border-b border-slate-800/80 grid grid-cols-12 items-center gap-6 hover:bg-[#0A101C] cursor-pointer animation-delay-stagger animate-slide-from-bottom transition-colors">
                    <span className="col-span-1 flex justify-center"><div className="w-4 h-4 rounded border-2 border-slate-600 bg-transparent"></div></span>
                    <span className="col-span-2 text-indigo-400 font-mono font-bold hover:underline">HREC-10{900+i}</span>
                    <span className="col-span-3 text-slate-200 font-bold truncate">US-EAST-DB-{i.toString().padStart(3, '0')}-PRD</span>
                    <span className="col-span-3 text-slate-400 text-sm truncate">cmdb_ci_linux_server</span>
                    <span className="col-span-2 text-orange-400 text-right text-xs font-bold uppercase track-widest">Orphaned CI</span>
                    <span className="col-span-1 flex justify-center">
                       <span className="bg-[#1C2C39] text-slate-300 border border-slate-600/50 px-3 py-1 rounded-md text-[10px] uppercase font-bold">Staged</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="flex flex-col items-center justify-center h-full w-full relative overflow-hidden bg-[#02050A]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#111827_0%,#000_100%)] opacity-80" />
            <div className="flex items-center justify-center gap-12 w-full px-16 relative mt-10">
              
              {/* CMDB Table Node */}
              <div className="w-80 bg-gradient-to-b from-[#111827] to-[#0A0F1C] border border-slate-700/50 rounded-[2rem] p-12 flex flex-col items-center shadow-[0_30px_80px_rgba(0,0,0,0.8)] z-20 group relative overflow-hidden">
                 <div className="absolute inset-0 bg-blue-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                 <Database className="text-blue-400 w-28 h-28 mb-8 relative z-10 drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]" />
                 <div className="text-2xl font-black text-white relative z-10 tracking-tight text-center">CMDB Custom Table</div>
                 <div className="text-xs font-mono text-blue-400 mt-2 relative z-10 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/30">x_snc_health_data</div>
              </div>
              
              {/* Bidirectional Pipelines */}
              <div className="flex-1 flex flex-col gap-10">
                {/* Outgoing (Data to LLM) */}
                <div className="relative">
                  <p className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-cyan-400 uppercase tracking-widest font-bold w-max">1. Send Raw Payload</p>
                  <div className="h-2.5 bg-[#0A101C] rounded-full relative overflow-hidden shadow-[inset_0_3px_10px_rgba(0,0,0,0.5)] border border-slate-800">
                    <div className="absolute w-full h-px bg-slate-700 top-1/2 -translate-y-1/2" />
                    <div className="absolute left-0 w-64 h-full bg-cyan-400 rounded-full animate-data-flux shadow-[0_0_50px_#22d3ee,inset_0_0_15px_#fff]" />
                    <div className="absolute left-0 w-32 h-1 bg-white top-1/2 -translate-y-1/2 rounded-full animate-data-flux z-10 shadow-[0_0_20px_#fff]" />
                  </div>
                </div>

                {/* Incoming (Recommendations to DB) */}
                <div className="relative">
                  <p className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] text-emerald-400 uppercase tracking-widest font-bold w-max">2. Return Recommendations</p>
                  <div className="h-2.5 bg-[#0A101C] rounded-full relative overflow-hidden shadow-[inset_0_3px_10px_rgba(0,0,0,0.5)] border border-slate-800 scale-x-[-1]">
                    <div className="absolute w-full h-px bg-slate-700 top-1/2 -translate-y-1/2" />
                    <div className="absolute left-0 w-64 h-full bg-emerald-400 rounded-full animate-data-flux shadow-[0_0_50px_#10b981,inset_0_0_15px_#fff]" />
                    <div className="absolute left-0 w-32 h-1 bg-white top-1/2 -translate-y-1/2 rounded-full animate-data-flux z-10 shadow-[0_0_20px_#fff]" />
                  </div>
                </div>
              </div>
              
              {/* LLM Engine Node */}
              <div className="w-80 bg-gradient-to-b from-[#1B122A] to-[#0D0814] border border-purple-500/50 rounded-[2rem] p-12 flex flex-col items-center shadow-[0_30px_80px_rgba(168,85,247,0.3)] z-20 group relative overflow-hidden">
                 <div className="absolute inset-0 bg-purple-500/20 blur-3xl" />
                 <BrainCircuit className="text-purple-400 w-28 h-28 mb-8 relative z-10 drop-shadow-[0_0_25px_rgba(168,85,247,0.7)]" />
                 <div className="text-2xl font-black text-white relative z-10 tracking-tight text-center">Enterprise AI</div>
                 <div className="text-xs font-bold text-purple-400 mt-2 relative z-10 animate-pulse bg-purple-500/20 px-4 py-1.5 rounded-full border border-purple-500/30 uppercase tracking-widest">Generating</div>
              </div>
            </div>
            
            <div className="mt-20 flex items-center justify-center gap-4 bg-[#0A101C] border border-emerald-500/30 px-8 py-4 rounded-3xl shadow-[0_20px_40px_rgba(16,185,129,0.15)] relative overflow-hidden">
               <div className="absolute inset-0 bg-emerald-500/5 animate-pulse" />
               <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
               <p className="text-emerald-400 text-lg font-bold tracking-[0.25em] uppercase relative z-10 text-center">Auto-Populating Table Extracted Data</p>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="flex flex-col items-center justify-center h-full w-full relative bg-[#02050A]">
            <div className="w-72 h-72 rounded-full border-2 border-purple-500/30 animate-ai-process flex items-center justify-center bg-[#0C0814] shadow-[0_0_100px_rgba(168,85,247,0.25)] relative">
               <div className="absolute inset-[-10px] rounded-full border border-purple-500/10 border-dashed animate-[spin_10s_linear_infinite]" />
               <BrainCircuit className="text-purple-400 w-32 h-32 animate-pulse" />
            </div>
            
            <div className="mt-16 bg-[#0B0D18] border border-purple-500/20 w-[85%] h-64 rounded-3xl p-10 font-mono text-lg text-purple-300 overflow-hidden relative shadow-[0_30px_60px_rgba(0,0,0,0.9)]">
               <div className="flex gap-4 items-center mb-6 text-purple-400/50 text-sm border-b border-purple-500/20 pb-4">
                 <Server size={18}/><span>NODE: cmdb-analysis-omega</span>
                 <span className="ml-auto flex gap-2"><span className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"/> STATUS: INFERENCING</span>
               </div>
               <p className="animate-slide-from-bottom opacity-70 mb-3">&gt; [MODEL] Ingested 48,291 configuration items & 120M relationships...</p>
               <p className="animate-slide-from-bottom text-purple-200 mb-3" style={{ animationDelay: '600ms'}}>&gt; [AUDIT] Identified 1,402 orphaned records with zero parent CI dependencies...</p>
               <p className="animate-slide-from-bottom text-white font-bold text-xl mt-6 border-l-4 border-emerald-400 pl-4 bg-emerald-500/10 py-2" style={{ animationDelay: '1400ms'}}>
                 &gt; [SUCCESS] AI recommended remediation workflows generated. Exposing to Dashboard View.
               </p>
               <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B0D18] to-transparent pointer-events-none" />
            </div>
          </div>
        )
      case 4:
        return (
          <div className="w-full h-full p-8 flex animate-fade-in-scale">
            
            {/* The exact requested Dashboard Layout (Image 2 Replica) */}
            <div className="w-full h-full bg-[#1A1F2D] rounded-xl border border-slate-700 overflow-hidden flex flex-col font-sans shadow-2xl relative">
                
                {/* 1. Dashboard Top Header */}
                <header className="h-[60px] bg-[#161C28] flex items-center justify-between px-6 border-b border-slate-700/60">
                   <div className="flex items-center gap-3">
                     <span className="w-4 h-4 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                     <h1 className="text-white font-bold tracking-wide text-[17px]">CMDB Health Doctor</h1>
                     <span className="text-slate-400 text-xs ml-2 border border-slate-600 bg-[#1E2536] px-3 py-1 rounded-full">Last analysed: 09/04/2026 09:25:05</span>
                   </div>
                   <button className="flex items-center gap-2 px-4 py-1.5 bg-[#1E2536] border border-slate-600 hover:bg-[#252E42] rounded text-xs font-extrabold text-blue-400 transition shadow">
                     <RefreshCw size={14} /> REFRESH
                   </button>
                </header>

                <div className="flex-1 overflow-auto bg-[#131722] p-5 flex flex-col gap-4">
                  {/* 2. Top Metric Cards (5 widgets) */}
                  <div className="flex gap-4">
                     {[
                       { v: '5', l: 'TOTAL', color: 'border-blue-500', t: 'text-blue-400' },
                       { v: '3', l: 'CRITICAL', color: 'border-red-500', t: 'text-red-500' },
                       { v: '0', l: 'MODERATE', color: 'border-orange-500', t: 'text-orange-500' },
                       { v: '2', l: 'MINOR', color: 'border-yellow-500', t: 'text-yellow-500' },
                       { v: '0', l: 'HEALTHY', color: 'border-green-500', t: 'text-green-500' },
                     ].map(wg => (
                       <div key={wg.l} className={`flex-1 bg-[#1A2131] rounded-lg border-b-2 ${wg.color} flex flex-col items-center justify-center p-4 shadow-md`}>
                         <span className={`text-[32px] leading-tight font-black ${wg.t}`}>{wg.v}</span>
                         <span className="text-[10px] text-slate-400 uppercase tracking-widest font-extrabold mt-1">{wg.l}</span>
                       </div>
                     ))}
                  </div>

                  {/* 3. Filters Row */}
                  <div className="flex items-center gap-3 bg-[#131722] py-1">
                     <div className="flex bg-[#1A2131] rounded-lg border border-slate-700/60 p-1">
                        {['ALL','CRITICAL','MODERATE','MINOR','HEALTHY'].map((f, i) => (
                          <button key={f} className={`px-4 py-1.5 rounded text-[11px] font-extrabold transition-colors ${i===0 ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}>
                            {f}
                          </button>
                        ))}
                     </div>
                     <button className="flex items-center justify-between px-3 py-2 bg-[#1A2131] border border-slate-700/60 rounded-lg text-xs text-slate-300 min-w-[140px]">
                       All Environments <ChevronDown size={14}/>
                     </button>
                     <button className="flex items-center justify-between px-3 py-2 bg-[#1A2131] border border-slate-700/60 rounded-lg text-xs text-slate-300 min-w-[140px]">
                       Score: Worst First <ChevronDown size={14}/>
                     </button>
                     <div className="flex-1 relative">
                       <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                       <input type="text" placeholder="Search CI name..." className="w-full bg-[#1A2131] border border-slate-700/60 rounded-lg py-2 pl-9 pr-3 text-xs text-white placeholder-slate-500 focus:outline-none" />
                     </div>
                     <button className="flex items-center gap-2 px-4 py-2 bg-[#2D3956] hover:bg-[#344163] text-emerald-400 border border-emerald-500/20 rounded-lg text-xs font-bold shadow-md">
                       <Plus size={14}/> ADD CI
                     </button>
                     <button className="p-2 bg-[#252A3D] rounded-full text-blue-400 border border-slate-600">
                       <Moon size={16} />
                     </button>
                  </div>

                  {/* 4. Dashboard CI Cards Grid */}
                  <div className="grid grid-cols-4 gap-4 mt-2">
                     {[
                       { title: 'APP-SERVER-INCOMPLETE-01', sub: 'cmdb_ci_server - Production', score: '0', st: 'text-red-500', dt: 'bg-red-500', bars: [{l:'CORR', v:0, c:'bg-red-500'},{l:'COMP', v:0, c:'bg-red-500'},{l:'CMPL', v:0, c:'bg-red-500'}], pills: ['STALE', 'ORPHAN', '2 VIOLATIONS', '3 MISSING'], act: 'Schedule a Discovery run for APP-SERVER-INCOMPLETE-01. This CI has never been confirmed by Discovery...', foot: '6 actions - 08/04/2026 15:09:31' },
                       { title: 'APP-SERVER-DUPLICATE', sub: 'cmdb_ci_server - Unknown', score: '2', st: 'text-red-500', dt: 'bg-red-500', bars: [{l:'CORR', v:6, c:'bg-red-500'},{l:'COMP', v:0, c:'bg-red-500'},{l:'CMPL', v:0, c:'bg-red-500'}], pills: ['STALE', 'ORPHAN', '2 VIOLATIONS', '3 MISSING'], act: 'Review APP-SERVER-DUPLICATE for decommissioning. It is marked stale (293 days since last discovery) with no active...', foot: '5 actions - 08/04/2026 15:09:30' },
                       { title: 'APP-SERVER-PRD-01', sub: 'cmdb_ci_server - Production', score: '24', st: 'text-red-500', dt: 'bg-red-500', bars: [{l:'CORR', v:34, c:'bg-red-500'},{l:'COMP', v:33, c:'bg-red-500'},{l:'CMPL', v:0, c:'bg-red-500'}], pills: ['STALE', '2 VIOLATIONS', '2 MISSING'], act: 'Re-run Discovery for APP-SERVER-PRD-01. It was last discovered 3,986 days ago but has 10 active relationships and is...', foot: '5 actions - 09/04/2026 09:24:38' },
                       { title: 'APP-SERVER-GOLD-01', sub: 'cmdb_ci_server - Production', score: '72', st: 'text-yellow-500', dt: 'bg-yellow-500', bars: [{l:'CORR', v:80, c:'bg-yellow-400'},{l:'COMP', v:100, c:'bg-green-500'},{l:'CMPL', v:50, c:'bg-orange-500'}], pills: ['STALE', 'ORPHAN', '1 VIOLATIONS'], act: 'Retire APP-SERVER-GOLD-01. It is stale (last discovered 33 days ago) and has 0 relationships and 0 incidents, strongly...', foot: '2 actions - 08/04/2026 15:09:31' },
                       { title: 'APP-SERVER-DEV-01', sub: 'cmdb_ci_server - QA', score: '78', st: 'text-yellow-400', dt: 'bg-yellow-400', bars: [{l:'CORR', v:46, c:'bg-orange-500'},{l:'COMP', v:100, c:'bg-green-500'},{l:'CMPL', v:100, c:'bg-green-500'}], pills: ['STALE'], act: 'Update attributes for APP-SERVER-DEV-01. Discovery successfully matched this CI, but mandatory fields are...', foot: '1 actions - 08/04/2026 15:09:31' },
                     ].map((card, i) => (
                       <div key={i} className="bg-[#1A2131] border border-slate-700/60 rounded-xl overflow-hidden flex flex-col shadow-lg">
                          <div className="p-4 flex justify-between items-start border-b border-slate-700/50">
                            <div className="flex-1 pr-2">
                               <div className="flex items-center gap-2 mb-1">
                                 <span className={`w-2 h-2 rounded-full ${card.dt} shadow-[0_0_8px_currentColor]`} />
                                 <h4 className="text-white text-[11px] font-extrabold truncate">{card.title}</h4>
                               </div>
                               <p className="text-[9px] text-slate-400 font-medium pl-4">{card.sub}</p>
                            </div>
                            <div className="flex flex-col items-end">
                               <span className={`text-[26px] leading-[1] font-black ${card.st}`}>{card.score}</span>
                               <span className="text-[8px] uppercase tracking-widest text-slate-500 font-bold mt-1">SCORE</span>
                            </div>
                          </div>

                          <div className="p-4 space-y-2">
                             {card.bars.map(b => (
                               <div key={b.l} className="flex items-center gap-3">
                                  <span className="text-[9px] font-extrabold text-slate-400 w-8">{b.l}</span>
                                  <div className="flex-1 h-2 bg-[#121623] rounded-full overflow-hidden border border-slate-700/30">
                                    <div className={`h-full ${b.c} rounded-full`} style={{ width: `${Math.max(2, b.v)}%` }} />
                                  </div>
                                  <span className="text-[9px] text-slate-400 font-mono w-4 text-right">{b.v}</span>
                               </div>
                             ))}
                          </div>

                          <div className="px-4 flex flex-wrap gap-1.5 min-h-[44px]">
                             {card.pills.map((p, idx) => (
                                <span key={idx} className={`px-2 py-[2px] text-[8px] font-extrabold rounded-md border ${
                                  p.includes('VIOLATION') ? 'bg-red-500/10 border-red-500/20 text-red-500' :
                                  p.includes('MISSING') ? 'bg-orange-500/10 border-orange-500/20 text-orange-400' :
                                  p.includes('ORPHAN') ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-400' :
                                  'bg-[#2A3445] border-slate-600 text-slate-300'
                                }`}>{p}</span>
                             ))}
                          </div>

                          <div className="px-4 py-3 bg-[#131722]/50 mt-1">
                             <p className="text-[8px] uppercase tracking-widest font-extrabold text-slate-500 mb-1">Priority Action</p>
                             <p className="text-[10px] text-slate-300 leading-snug line-clamp-3 min-h-[42px]">{card.act}</p>
                          </div>

                          <div className="px-4 py-3 mt-auto border-t border-slate-700/50 flex justify-between items-center bg-[#181D29]">
                             <span className="text-[9px] text-slate-400 font-medium">{card.foot}</span>
                             <div className="flex items-center gap-3">
                               <span className="text-[10px] font-extrabold text-slate-300 flex items-center gap-1"><ArrowRight size={10}/> 0</span>
                               <button className="w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/50 flex items-center justify-center text-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.2)]">
                                 <Zap size={10} fill="currentColor"/>
                               </button>
                             </div>
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

  // Fallback icon definition because ArrowRight wasn't cleanly imported in the initial block
  const ArrowRight = ({ size }: { size: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
  );

  // UI Container (Menu + Visualizer)
  return (
    <section className="w-full h-full flex bg-transparent">
      
      {/* ── LEFT: Process Simulator Menu ── */}
      <div className="w-[450px] bg-[#0A0F1D]/80 backdrop-blur-2xl border-r border-slate-700/50 p-10 flex flex-col z-20 shadow-[20px_0_40px_-20px_rgba(0,0,0,0.8)] relative">
        <div className="mb-2">
           <h2 className="text-4xl font-extrabold text-white tracking-tight drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">Simulator</h2>
           <p className="text-emerald-500 font-bold tracking-widest uppercase text-xs mt-3 bg-emerald-500/10 inline-block px-3 py-1 rounded-sm border border-emerald-500/20">Active Execution</p>
        </div>

        {/* Controls */}
        <div className="my-10 flex gap-4 h-14">
          <button onClick={() => setAutoplay(a => !a)} className="flex-1 flex items-center justify-center gap-3 bg-[#131B2A] hover:bg-[#1A253A] border border-slate-700 text-slate-200 text-sm font-extrabold rounded-xl transition-all shadow-[0_5px_15px_rgba(0,0,0,0.4)]">
            {autoplay ? <><Pause size={18}/> PAUSE</> : <><Play size={18}/> AUTO</>}
          </button>
          <button onClick={() => { setAutoplay(false); goToStep(step + 1) }} className="flex-1 flex items-center justify-center gap-3 bg-[#131B2A] hover:bg-[#1A253A] border border-slate-700 text-slate-200 text-sm font-extrabold rounded-xl transition-all shadow-[0_5px_15px_rgba(0,0,0,0.4)] group">
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
                className={`flex items-center gap-6 cursor-pointer p-5 rounded-2xl border transition-all duration-300 group
                           ${isActive ? 'bg-[#0F1725] border-emerald-500 shadow-[0_10px_30px_rgba(16,185,129,0.15)] scale-105' 
                                      : 'bg-[#0B101C] border-slate-800 hover:border-slate-600'}`} 
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors flex-shrink-0
                   ${isActive ? 'bg-emerald-500/20 border-emerald-400 text-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.5)]' 
                   : 'bg-[#131A26] border-slate-700 text-slate-500 group-hover:text-slate-300'}`}>
                  {isDone ? <CheckCircle2 size={24} className="text-emerald-500" /> : <span className="font-black text-lg">{i + 1}</span>}
                </div>
                <div className="flex-1">
                  <p className={`text-xl font-bold tracking-tight transition-colors ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                    {s.label}
                  </p>
                  {isActive && <p className="text-sm text-emerald-400/80 mt-1.5 font-medium leading-snug">{s.desc}</p>}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── RIGHT: Visuals Area ── */}
      <div className="flex-1 relative overflow-hidden bg-[#0A0D14]">
         {/* Top Banner indicating visual area */}
         <div className="absolute top-0 inset-x-0 h-20 border-b border-slate-700/60 bg-[#0B101C]/80 backdrop-blur-xl flex items-center px-10 z-30 justify-between">
             <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 px-5 py-2 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                 <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse drop-shadow-[0_0_5px_#10b981]" />
                 <span className="text-sm font-extrabold text-emerald-400 tracking-[0.15em] uppercase">Enterprise Simulation Node</span>
             </div>
             {step === 4 && (
                <button onClick={() => goToStep(3)} className="text-xs text-slate-400 font-bold hover:text-white transition-colors bg-slate-800 px-4 py-2 rounded-lg flex items-center gap-2 border border-slate-700 z-50">
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
