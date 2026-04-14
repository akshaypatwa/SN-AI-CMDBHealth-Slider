import { useState, useEffect, useRef, useCallback } from 'react'
import { Play, Pause, ChevronRight, Activity, Database, BrainCircuit, RefreshCw, CheckCircle2, Zap, Server, ChevronDown, Search, Plus, Moon } from 'lucide-react'

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
  { label: 'Transmit Payload to LLM', desc: 'Raw CMDB payload sent for AI diagnosis.', icon: Zap },
  { label: 'AI Contextual Processing', desc: 'LLM analyzes context, peers, and history.', icon: BrainCircuit },
  { label: 'Apply DB Recommendations', desc: 'Actionable recommendations update table & dashboard.', icon: CheckCircle2 },
]

const DASH_CARDS = [
  {
    title: 'APP-SERVER-INCOMPLETE-01', class: 'cmdb_ci_server - Production', score: 0,
    corr: 0, comp: 0, cmpl: 0,
    pills: ['STALE', 'ORPHAN', '2 VIOLATIONS', '3 MISSING'],
    action: 'Schedule a Discovery run for APP-SERVER-INCOMPLETE-01. This CI has never been confirmed by Discovery...',
    actionsCount: 6, date: '08/04/2026 15:09:31', val: 0, color: 'bg-red-500'
  },
  {
    title: 'APP-SERVER-DUPLICATE', class: 'cmdb_ci_server - Unknown', score: 2,
    corr: 6, comp: 0, cmpl: 0,
    pills: ['STALE', 'ORPHAN', '2 VIOLATIONS', '3 MISSING'],
    action: 'Review APP-SERVER-DUPLICATE for decommissioning. It is marked stale (293 days since last discovery) with no active...',
    actionsCount: 5, date: '08/04/2026 15:09:30', val: 0, color: 'bg-red-500'
  },
  {
    title: 'APP-SERVER-PRD-01', class: 'cmdb_ci_server - Production', score: 24,
    corr: 34, comp: 33, cmpl: 0,
    pills: ['STALE', '2 VIOLATIONS', '2 MISSING'],
    action: 'Re-run Discovery for APP-SERVER-PRD-01. It was last discovered 3,986 days ago but has 10 active relationships an...',
    actionsCount: 5, date: '09/04/2026 09:24:38', val: 0, color: 'bg-red-500'
  },
  {
    title: 'APP-SERVER-GOLD-01', class: 'cmdb_ci_server - Production', score: 72,
    corr: 67, comp: 100, cmpl: 50,
    pills: ['STALE', 'ORPHAN', '1 VIOLATIONS'],
    action: 'Retire APP-SERVER-GOLD-01. It is stale (last discovered 33 days ago) and has 0 relationships and 0 incidents, strongly...',
    actionsCount: 2, date: '08/04/2026 15:09:31', val: 0, color: 'bg-yellow-500'
  }
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
    }, 2800) // Slower for readability
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [autoplay, step, goToStep])

  const renderVisual = () => {
    switch (step) {
      case 0:
        return (
          <div className="flex flex-col items-center justify-center h-full w-full">
            <div className="w-32 h-32 rounded-full border-4 border-emerald-500/20 flex items-center justify-center animate-pulse relative">
               <div className="absolute inset-0 rounded-full border-t-4 border-emerald-400 animate-spin" />
               <Activity className="text-emerald-400 w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Executing Scheduled Job</h3>
            <div className="bg-slate-900 border border-slate-700/50 rounded-xl px-6 py-4 w-96 max-w-full">
                <div className="flex justify-between text-sm mb-2 text-slate-300">
                    <span>Scanning Critical Servers</span>
                    <span className="text-emerald-400 font-mono">48,291 / 50k</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[96%] shadow-[0_0_10px_#10b981]" />
                </div>
            </div>
          </div>
        )
      case 1:
        return (
          <div className="flex flex-col h-full w-full p-12">
            <div className="bg-slate-900 border border-slate-700/50 shadow-2xl rounded-2xl flex flex-col overflow-hidden h-full">
              <div className="bg-slate-800/80 border-b border-slate-700 p-4 flex items-center gap-3">
                 <Database className="text-blue-400" />
                 <h3 className="text-lg font-bold text-white">x_snc_cmdb_health_data</h3>
              </div>
              <div className="bg-slate-800/40 text-sm font-semibold p-4 grid grid-cols-4 text-slate-400 border-b border-slate-700/50">
                <span>CI Name</span><span>Class</span><span>Peers Discovered</span><span>Status</span>
              </div>
              <div className="flex-1 p-4 space-y-3 overflow-hidden">
                {[1,2,3,4,5,6].map(i => (
                  <div key={i} className="text-sm p-4 bg-slate-800/40 border border-slate-700/30 rounded-lg grid grid-cols-4 items-center animate-slide-from-right" style={{ animationDelay: `${i*150}ms` }}>
                    <span className="text-emerald-300 font-mono">APP-SRV-00{i}</span>
                    <span className="text-slate-400">cmdb_ci_server</span>
                    <span className="text-slate-300 ml-4">{Math.floor(Math.random()*15)}</span>
                    <span className="text-emerald-500 font-bold flex items-center gap-1.5"><CheckCircle2 w={16} h={16}/> Inserted</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="flex flex-col items-center justify-center h-full w-full relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
            <div className="flex items-center gap-6 z-10 w-full px-16">
              <div className="flex-1 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-2xl p-10 flex flex-col items-center shadow-2xl relative overflow-hidden group">
                 <div className="absolute inset-0 bg-blue-500/10 blur-2xl group-hover:bg-blue-500/20 transition-colors" />
                 <Database className="text-blue-400 w-24 h-24 mb-6 relative z-10 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]" />
                 <div className="text-xl font-bold relative z-10 text-white">ServiceNow CMDB</div>
                 <div className="text-xs text-blue-300 mt-2 relative z-10 font-mono">48,291 Records</div>
              </div>
              
              <div className="w-56 h-3 bg-slate-800/80 rounded-full relative overflow-hidden shadow-inner border border-slate-700/50 flex items-center">
                <div className="absolute w-full h-[1px] bg-slate-700 top-1/2 -translate-y-1/2" />
                <div className="absolute left-0 w-32 h-6 bg-emerald-400 rounded-full animate-data-flux shadow-[0_0_30px_#34d399,inset_0_0_10px_#fff] blur-[2px]" />
                <div className="absolute left-0 w-32 h-2 bg-white rounded-full animate-data-flux z-10 shadow-[0_0_10px_#fff]" />
              </div>
              
              <div className="flex-1 bg-gradient-to-br from-[#1A1025] to-[#2B1B3D] border border-purple-500/40 rounded-2xl p-10 flex flex-col items-center shadow-2xl relative overflow-hidden group">
                 <div className="absolute inset-0 bg-purple-500/10 blur-2xl group-hover:bg-purple-500/20 transition-colors" />
                 <BrainCircuit className="text-purple-400 w-24 h-24 mb-6 relative z-10 drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]" />
                 <div className="text-xl font-bold text-white relative z-10">LLM Engine</div>
                 <div className="text-xs text-purple-400 mt-2 relative z-10 animate-pulse font-mono tracking-widest uppercase">Awaiting Payload...</div>
              </div>
            </div>
            <div className="mt-16 flex items-center gap-4 border border-emerald-500/30 bg-emerald-500/10 px-6 py-2 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.2)]">
               <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
               <p className="text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase drop-shadow-[0_0_5px_#10b981]">Streaming JSON Payload securely via API</p>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="flex flex-col items-center justify-center h-full w-full relative">
            <div className="w-56 h-56 rounded-full border-2 border-purple-500/20 animate-ai-process flex items-center justify-center bg-purple-500/10 shadow-[0_0_40px_rgba(168,85,247,0.2)]">
               <BrainCircuit className="text-purple-400 w-24 h-24 animate-pulse" />
            </div>
            <div className="mt-16 bg-[#0E1525] border border-purple-500/20 w-4/5 h-48 rounded-xl p-8 font-mono text-base text-purple-300 overflow-hidden relative leading-relaxed shadow-2xl">
               <p className="animate-slide-from-bottom opacity-70">&gt; Building contextual dependency graph...</p>
               <p className="animate-slide-from-bottom text-purple-200" style={{ animationDelay: '600ms'}}>&gt; Identified 800+ stale records lacking recent Discovery...</p>
               <p className="animate-slide-from-bottom text-white font-bold text-lg mt-4" style={{ animationDelay: '1200ms'}}>&gt; Generating recommended remediations for all violations...</p>
               <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0E1525] to-transparent pointer-events-none" />
            </div>
          </div>
        )
      case 4:
        return (
          <div className="w-full h-full relative overflow-hidden bg-[#0A0D14]">
            {/* We scale the dashboard down to beautifully fit inside the Right Pane */}
            <div className="w-[140%] h-[140%] origin-top-left scale-[0.714] flex flex-col pointer-events-auto">
              
              <div className="flex justify-between items-center px-10 py-6 bg-[#121A28] border-b border-slate-700/60 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 shadow-[0_0_15px_#10b981]" />
                  <h1 className="text-3xl font-black tracking-tight text-white">CMDB Health Doctor</h1>
                  <span className="ml-6 px-4 py-1.5 bg-slate-800/80 rounded-full text-sm text-emerald-400 border border-emerald-500/30 font-semibold tracking-wider">LIVE DATA APPLIED</span>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg text-sm font-bold transition text-slate-300">
                  <RefreshCw size={18} /> REFRESH
                </button>
              </div>

              {/* Score Widgets */}
              <div className="flex gap-6 px-10 py-8 bg-[#0A0D14] z-10">
                 {[
                   { label: 'TOTAL', val: '5', color: 'border-cyan-500', text: 'text-cyan-500' },
                   { label: 'CRITICAL', val: '3', color: 'border-red-500', text: 'text-red-500' },
                   { label: 'MODERATE', val: '0', color: 'border-orange-500', text: 'text-orange-500' },
                   { label: 'MINOR', val: '2', color: 'border-yellow-500', text: 'text-yellow-500' },
                   { label: 'HEALTHY', val: '0', color: 'border-green-500', text: 'text-green-500' },
                 ].map(wg => (
                   <div key={wg.label} className={`flex-1 bg-[#121A28] rounded-2xl p-8 flex flex-col items-center justify-center border-b-[6px] ${wg.color} shadow-lg pointer-events-none`}>
                     <span className={`text-7xl font-black mb-3 ${wg.text}`}>{wg.val}</span>
                     <span className="text-sm text-slate-400 tracking-[0.2em] font-bold">{wg.label}</span>
                   </div>
                 ))}
              </div>

              {/* Filters */}
              <div className="flex items-center gap-4 px-10 py-5 bg-[#121A28] border-y border-slate-700/60 z-20 shadow-md">
                 <div className="flex bg-[#0A0D14] rounded-lg p-2 border border-slate-700">
                    {['ALL','CRITICAL','MODERATE','MINOR','HEALTHY'].map((f, i) => (
                      <button key={f} className={`px-6 py-2.5 rounded-md text-sm font-bold transition-colors ${i===0 ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}>
                        {f}
                      </button>
                    ))}
                 </div>
                 <button className="flex items-center gap-2 px-6 py-3 bg-[#0A0D14] border border-slate-700 hover:bg-slate-800 rounded-lg text-sm text-slate-300 font-medium ml-auto">
                   Score: Worst First <ChevronDown size={18}/>
                 </button>
              </div>

              {/* Cards Grid */}
              <div className="flex-1 px-10 py-10 overflow-y-auto bg-[#0A0D14]">
                <div className="grid grid-cols-2 gap-8">
                   {DASH_CARDS.slice(0, 4).map((card, i) => (
                     <div key={i} className="bg-[#121A28] rounded-3xl border border-slate-700/50 overflow-hidden flex flex-col shadow-2xl hover:shadow-[0_10px_40px_rgba(0,0,0,0.6)] hover:border-slate-500 transition-all duration-300">
                       <div className="p-8 border-b border-slate-700/50 flex justify-between items-start bg-[#162032]">
                         <div>
                           <div className="flex items-center gap-3">
                             <div className={`w-4 h-4 rounded-full ${card.color} shadow-[0_0_15px_${card.color}]`} />
                             <h4 className="text-white font-extrabold text-xl leading-tight tracking-wide">{card.title}</h4>
                           </div>
                           <p className="text-sm text-slate-400 mt-2 font-medium">{card.class}</p>
                         </div>
                         <div className="text-right">
                           <div className={`text-6xl font-black leading-none ${card.score > 0 ? (card.score > 50 ? 'text-yellow-500' : 'text-red-500') : 'text-slate-400'}`}>{card.score}</div>
                           <div className="text-[11px] uppercase text-slate-500 tracking-widest mt-2 font-bold">SCORE</div>
                         </div>
                       </div>
                       
                       <div className="p-8 space-y-5">
                         {[
                           {l: 'CORR', v: card.corr, c: card.corr > 50 ? 'bg-yellow-500' : (card.corr > 0 ? 'bg-red-500' : 'bg-slate-600')},
                           {l: 'COMP', v: card.comp, c: card.comp >= 100 ? 'bg-green-500' : (card.comp > 0 ? 'bg-red-500' : 'bg-slate-600')},
                           {l: 'CMPL', v: card.cmpl, c: card.cmpl > 0 ? 'bg-orange-500' : 'bg-slate-600'}
                         ].map(bar => (
                           <div key={bar.l} className="flex items-center gap-4">
                             <span className="text-sm font-bold text-slate-400 w-12">{bar.l}</span>
                             <div className="flex-1 h-3.5 bg-[#0A0D14] rounded-full overflow-hidden border border-slate-700/50">
                               <div className={`h-full ${bar.c}`} style={{ width: `${bar.v}%` }} />
                             </div>
                             <span className="text-sm text-slate-400 w-8 text-right font-mono">{bar.v}</span>
                           </div>
                         ))}
                       </div>
                       
                       <div className="px-8 flex flex-wrap gap-3">
                         {card.pills.map((p, idx) => (
                           <span key={idx} className={`px-3 py-1.5 text-xs font-bold rounded-lg uppercase tracking-wider ${p.includes('VIOLATIONS') ? 'bg-red-500/10 text-red-400 border border-red-500/20' : p.includes('MISSING') ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' : p.includes('ORPHAN') ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-slate-800 text-slate-300 border border-slate-700'}`}>{p}</span>
                         ))}
                       </div>
                       
                       <div className="px-8 py-6 mt-auto bg-[#0F1623]/50 mt-6">
                          <p className="text-xs text-slate-500 font-extrabold mb-2 uppercase tracking-widest flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-indigo-500"/> Priority Action</p>
                          <p className="text-base text-slate-300 leading-relaxed font-medium line-clamp-3">{card.action}</p>
                       </div>
                     </div>
                   ))}
                </div>
              </div>
              
            </div>
          </div>
        )
      case 5:
        return null
    }
  }

  // Simulator View (Steps 0-4)
  return (
    <section className="w-full h-full flex animate-slide-from-right bg-[#0B1121] rounded-[2rem] overflow-hidden">
      
      {/* ── LEFT: Process Simulator Menu ── */}
      <div className="w-[450px] bg-[#0A0F1D] border-r border-slate-700/60 p-10 flex flex-col z-20 shadow-2xl relative">
        <div className="mb-2">
           <h2 className="text-3xl font-black text-white tracking-tight">Process Simulator</h2>
           <p className="text-emerald-500 font-bold tracking-wide mt-1">Workflow Automation</p>
        </div>

        {/* Controls */}
        <div className="my-10 flex gap-3 h-12">
          <button onClick={() => setAutoplay(a => !a)} className="flex-1 flex items-center justify-center gap-2 bg-[#1C2539] hover:bg-slate-700 border border-[#2A3751] text-slate-300 text-sm font-bold rounded-lg transition-colors">
            {autoplay ? <><Pause size={16}/> PAUSED</> : <><Play size={16}/> AUTO RUN</>}
          </button>
          <button onClick={() => { setAutoplay(false); goToStep(step + 1) }} className="flex-1 flex items-center justify-center gap-2 bg-[#1C2539] hover:bg-slate-700 border border-[#2A3751] text-slate-300 text-sm font-bold rounded-lg transition-colors">
            <ChevronRight size={18}/> NEXT
          </button>
        </div>

        {/* Stacked Cards for Steps */}
        <div className="space-y-4 flex-1">
          {STEPS.slice(0, 5).map((s, i) => {
            const isActive = i === step
            const isDone = i < step

            return (
              <div 
                key={i} 
                onClick={() => { setAutoplay(false); goToStep(i); }}
                className={`flex items-center gap-5 cursor-pointer p-4 rounded-xl border transition-all duration-300 group
                           ${isActive ? 'bg-[#0E1525] border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.1)]' 
                                      : 'bg-[#131b2f] border-[#1e293b] hover:border-slate-500/50'}`} 
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors flex-shrink-0
                   ${isActive ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400' 
                   : 'bg-slate-800/80 border-slate-700 text-slate-400 group-hover:text-slate-300'}`}>
                  {isDone ? <CheckCircle2 size={20} className="text-emerald-500" /> : <span className="font-black text-sm">{i + 1}</span>}
                </div>
                <div className="flex-1">
                  <p className={`text-base font-bold tracking-wide transition-colors ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-300'}`}>
                    {s.label}
                  </p>
                  {isActive && <p className="text-xs text-emerald-400/80 mt-1.5 font-medium">{s.desc}</p>}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── RIGHT: Visuals Area ── */}
      <div className="flex-1 relative overflow-hidden bg-[#0A101C]">
         <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
         {/* Top Banner indicating visual area */}
         <div className="absolute top-0 inset-x-0 h-16 border-b border-slate-700/50 bg-[#121A28]/50 backdrop-blur flex items-center px-8 z-10">
             <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full">
                 <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                 <span className="text-xs font-bold text-emerald-400 tracking-wider">PIPELINE VISUALIZATION</span>
             </div>
         </div>
         {/* Inner Content Component */}
         <div className="w-full h-full pt-16">
            {renderVisual()}
         </div>
      </div>
    </section>
  )
}
