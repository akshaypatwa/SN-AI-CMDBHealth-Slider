import { useState, useEffect, useRef, useCallback } from 'react'
import { Play, Pause, ChevronLeft, ChevronRight, Activity, FileText, BrainCircuit, CheckCircle2, Server, ChevronDown, Search, Plus, RefreshCw, Zap, Sparkles, ArrowRight } from 'lucide-react'

// --- Types ---
interface SimulationStep {
  label: string
  desc: string
  icon: any
}

// --- Data ---
const STEPS: SimulationStep[] = [
  { label: 'Scheduled CI Scan', desc: 'Schedule job scanning enterprise servers.', icon: Server },
  { label: 'ServiceNow Form Population', desc: 'Extracted data renders into authentic CMDB record.', icon: FileText },
  { label: 'Bidirectional Flow Pipeline', desc: 'Flow sends data to LLM, recommendations type natively back to the form.', icon: Zap },
  { label: 'Generate Action Dashboard', desc: 'Actionable recommendations construct the unified view.', icon: CheckCircle2 },
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
    // Increase duration for the typing animation on Pipeline step
    const duration = step === 2 ? 6000 : 4500
    
    timerRef.current = setTimeout(() => {
      if (step === STEPS.length - 1) {
        setAutoplay(false) // Stop when reaching dashboard
      } else {
        goToStep(step + 1)
      }
    }, duration)
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
            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-12 mb-6 tracking-tight">Executing Scheduled CI Scan</h3>
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
          <div className="flex items-center justify-center p-12 h-full w-full animate-fade-in-scale">
            {/* Authentic ServiceNow UI16 / Native Form layout Mockup */}
            <div className="w-[800px] bg-white dark:bg-[#1C202C] border border-slate-200 dark:border-slate-700/80 rounded-xl overflow-hidden shadow-2xl flex flex-col font-sans transition-colors duration-500 relative">
               
               {/* Form Top Ribbon */}
               <div className="bg-[#E4E6EB] dark:bg-[#2B313F] h-12 flex items-center justify-between px-4 border-b border-slate-300 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                     <button className="p-1.5 hover:bg-slate-300 dark:hover:bg-[#1A1E27] rounded text-slate-600 dark:text-slate-400"><ChevronLeft size={16}/></button>
                     <span className="font-bold text-sm text-slate-800 dark:text-slate-100">HREC-10901</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <button className="bg-white dark:bg-[#1A1E27] border border-slate-300 dark:border-slate-600/50 text-slate-700 dark:text-slate-300 px-3 py-1 text-xs font-bold rounded shadow-sm">Save</button>
                     <button className="bg-emerald-600 dark:bg-emerald-600 text-white px-3 py-1 text-xs font-bold rounded shadow-sm">Submit</button>
                  </div>
               </div>

               {/* Form Header */}
               <div className="p-5 flex gap-4 border-b border-slate-200 dark:border-slate-700/50 bg-[#F4F5F8] dark:bg-[#151923]">
                  <div className="w-12 h-12 rounded bg-indigo-100 dark:bg-indigo-500/20 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-center">
                    <FileText size={24} className="text-indigo-600 dark:text-indigo-400"/>
                  </div>
                  <div>
                    <h2 className="text-xl font-medium text-slate-800 dark:text-white">CMDB Health Analysis Record</h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Table: x_snc_health_data</p>
                  </div>
               </div>

               {/* Form Body layout */}
               <div className="p-6 bg-white dark:bg-[#1C202C]">
                 <div className="grid grid-cols-2 gap-8">
                   
                   {/* Left Column */}
                   <div className="space-y-4">
                     <div>
                       <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">Configuration Item</label>
                       <div className="w-full h-8 bg-slate-50 border border-slate-300 dark:bg-[#13161F] dark:border-slate-600/60 rounded px-3 flex items-center text-sm font-medium text-slate-800 dark:text-slate-200">
                         US-EAST-DB-001-PRD
                       </div>
                     </div>
                     <div>
                       <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">CI Class</label>
                       <div className="w-full h-8 bg-slate-50 border border-slate-300 dark:bg-[#13161F] dark:border-slate-600/60 rounded px-3 flex items-center text-sm font-medium text-slate-800 dark:text-slate-200">
                         cmdb_ci_linux_server
                       </div>
                     </div>
                   </div>

                   {/* Right Column */}
                   <div className="space-y-4">
                     <div>
                       <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1 border-l-[3px] border-amber-500 pl-2">Identified Issues</label>
                       <div className="w-full min-h-[32px] bg-slate-50 border border-slate-300 dark:bg-[#13161F] dark:border-slate-600/60 rounded px-2 py-1.5 flex flex-wrap gap-1.5 items-center">
                         <span className="bg-amber-100 dark:bg-amber-500/20 border border-amber-200 dark:border-amber-500/30 text-amber-700 dark:text-amber-400 text-[10px] uppercase font-bold px-1.5 py-0.5 rounded shadow-sm">Orphan CI</span>
                         <span className="bg-red-100 dark:bg-red-500/20 border border-red-200 dark:border-red-500/30 text-red-700 dark:text-red-400 text-[10px] uppercase font-bold px-1.5 py-0.5 rounded shadow-sm">Stale (320d)</span>
                         <span className="bg-orange-100 dark:bg-orange-500/20 border border-orange-200 dark:border-orange-500/30 text-orange-700 dark:text-orange-400 text-[10px] uppercase font-bold px-1.5 py-0.5 rounded shadow-sm">Duplicate</span>
                       </div>
                     </div>
                     <div>
                       <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">State</label>
                       <div className="w-full h-8 bg-[#E4E6EB] border border-slate-300 dark:bg-[#2B313F] dark:border-slate-600/60 rounded px-3 flex items-center text-sm font-bold text-slate-600 dark:text-slate-300 font-mono">
                         Pending Analysis
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Wide bottom field for LLM response */}
                 <div className="mt-6 border-t border-slate-100 dark:border-slate-700/50 pt-5">
                     <label className="block text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-2 uppercase tracking-wide flex items-center gap-2"><Sparkles size={12}/> AI Recommended Action</label>
                     <div className="w-full h-24 bg-slate-50 border border-slate-200 dark:bg-[#13161F] dark:border-slate-600/50 rounded flex items-center justify-center">
                        <p className="text-slate-400 dark:text-slate-500 text-xs italic">Awaiting Workflow LLM Trigger...</p>
                     </div>
                 </div>
               </div>
            </div>
            
            {/* Informational overlay popup */}
             <div className="absolute bottom-12 bg-white/90 backdrop-blur-md dark:bg-[#0A101C]/90 border border-slate-200 dark:border-emerald-500/30 px-6 py-3 rounded-full shadow-lg dark:shadow-[0_20px_40px_rgba(16,185,129,0.15)] flex items-center gap-3 animate-slide-from-bottom">
               <span className="w-3 h-3 rounded-full bg-indigo-500 dark:bg-emerald-400 animate-ping absolute left-6" />
               <p className="text-indigo-700 dark:text-emerald-400 text-sm font-bold tracking-[0.1em] uppercase relative z-10 text-center pl-6">Data populated into native UI Form View</p>
             </div>
          </div>
        )
      case 2:
        return (
          <div className="flex flex-col items-center justify-center h-full w-full relative overflow-hidden bg-slate-50 dark:bg-[#02050A] transition-colors p-8">
            <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(ellipse_at_center,#111827_0%,#000_100%)] opacity-80" />
            
            {/* Strict Grid Layout for perfect pipeline alignment */}
            <div className="grid grid-cols-[330px_minmax(180px,1fr)_280px] w-full max-w-[1100px] items-center relative z-10 gap-x-6 gap-y-12">
              
              {/* === ROW 1: TOP FORM -> LLM === */}
              {/* Form 1 (Pre-Analysis) */}
              <div className="col-start-1 row-start-1 flex justify-end">
                <div className="w-[320px] bg-white dark:bg-[#1C202C] border border-slate-200 dark:border-slate-700/80 rounded-lg overflow-hidden shadow-xl flex flex-col font-sans relative transition-transform hover:-translate-y-1 cursor-default">
                  <div className="absolute -top-3 left-4 bg-indigo-500 text-white text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded shadow-sm z-10">Original Form Data</div>
                  <div className="bg-[#E4E6EB] dark:bg-[#2B313F] h-7 flex items-center justify-between px-3 border-b border-slate-300 dark:border-slate-800">
                      <span className="font-bold text-[9px] text-slate-800 dark:text-slate-100">HREC-10901</span>
                  </div>
                  <div className="p-3 bg-white dark:bg-[#1C202C]">
                      <div className="grid grid-cols-2 gap-3 mb-1">
                        <div>
                          <label className="block text-[8px] font-bold text-slate-600 dark:text-slate-400 mb-0.5">Configuration Item</label>
                          <div className="w-full h-6 bg-slate-50 dark:bg-[#13161F] border border-slate-200 dark:border-slate-700 rounded px-2 text-[9px] text-slate-800 dark:text-slate-200 flex items-center">US-EAST-DB-001</div>
                        </div>
                        <div>
                          <label className="block text-[8px] font-bold text-slate-600 dark:text-slate-400 mb-0.5 border-l-[2px] border-amber-500 pl-1">Identified Issues</label>
                          <div className="w-full min-h-[24px] bg-slate-50 dark:bg-[#13161F] border border-slate-200 dark:border-slate-700 rounded p-1 flex flex-wrap gap-1 items-center">
                             <div className="px-1 py-0.5 bg-amber-100 text-amber-700 border border-amber-200 dark:border-amber-500/30 dark:bg-amber-500/20 dark:text-amber-400 text-[8px] rounded font-bold uppercase shadow-sm">Orphan</div>
                             <div className="px-1 py-0.5 bg-red-100 text-red-700 border border-red-200 dark:border-red-500/30 dark:bg-red-500/20 dark:text-red-400 text-[8px] rounded font-bold uppercase shadow-sm">Stale</div>
                             <div className="px-1 py-0.5 bg-orange-100 text-orange-700 border border-orange-200 dark:border-orange-500/30 dark:bg-orange-500/20 dark:text-orange-400 text-[8px] rounded font-bold uppercase shadow-sm">Dup</div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>

              {/* Connecting Pipe 1 (Outgoing) */}
              <div className="col-start-2 row-start-1 flex items-center w-full relative h-[40px]">
                  <p className="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] text-indigo-600 dark:text-cyan-400 uppercase tracking-widest font-bold whitespace-nowrap px-1.5 py-0.5">1. Scripts Extract Raw Data</p>
                  <div className="h-2 w-full bg-slate-200 dark:bg-[#0A101C] rounded-full relative overflow-hidden shadow-inner border border-slate-300 dark:border-slate-800">
                    <div className="absolute w-full h-px bg-slate-300 dark:bg-slate-700 top-1/2 -translate-y-1/2" />
                    <div className="absolute left-0 w-64 h-full bg-indigo-500 dark:bg-cyan-400 rounded-full animate-data-flux shadow-[0_0_15px_#6366f1] dark:shadow-[0_0_50px_#22d3ee,inset_0_0_15px_#fff]" />
                    <div className="absolute left-0 w-32 h-1 bg-white top-1/2 -translate-y-1/2 rounded-full animate-data-flux z-10 shadow-[0_0_10px_#fff]" />
                  </div>
              </div>

              {/* === ROW 2: LLM -> BOTTOM FORM === */}
              {/* Form 2 (Post-Analysis) */}
              <div className="col-start-1 row-start-2 flex justify-end">
                <div className="w-[320px] bg-white dark:bg-[#1C202C] border-2 border-emerald-400 dark:border-emerald-500/80 rounded-lg overflow-hidden shadow-[0_10px_30px_rgba(16,185,129,0.15)] flex flex-col font-sans relative transition-transform hover:-translate-y-1 cursor-default">
                  <div className="absolute -top-3 left-4 bg-emerald-500 text-white text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded shadow-sm z-10 flex items-center gap-1"><Sparkles size={10} /> AI Enriched Form</div>
                  <div className="bg-[#E4E6EB] dark:bg-[#2B313F] h-7 flex items-center justify-between px-3 border-b border-slate-300 dark:border-slate-800">
                      <span className="font-bold text-[9px] text-slate-800 dark:text-slate-100">HREC-10901</span>
                  </div>
                  <div className="p-3 bg-white dark:bg-[#1C202C]">
                      <div className="grid grid-cols-2 gap-3 mb-2.5">
                        <div>
                          <label className="block text-[8px] font-bold text-slate-600 dark:text-slate-400 mb-0.5">Configuration Item</label>
                          <div className="w-full h-6 bg-slate-50 dark:bg-[#13161F] border border-slate-200 dark:border-slate-700 rounded px-2 text-[9px] text-slate-800 dark:text-slate-200 flex items-center">US-EAST-DB-001</div>
                        </div>
                        <div>
                          <label className="block text-[8px] font-bold text-slate-600 dark:text-slate-400 mb-0.5 border-l-[2px] border-amber-500 pl-1">Identified Issues</label>
                          <div className="w-full min-h-[24px] bg-slate-50 dark:bg-[#13161F] border border-slate-200 dark:border-slate-700 rounded p-1 flex flex-wrap gap-1 items-center">
                             <div className="px-1 py-0.5 bg-amber-100 text-amber-700 border border-amber-200 dark:border-amber-500/30 dark:bg-amber-500/20 dark:text-amber-400 text-[8px] rounded font-bold uppercase shadow-sm">Orphan</div>
                             <div className="px-1 py-0.5 bg-red-100 text-red-700 border border-red-200 dark:border-red-500/30 dark:bg-red-500/20 dark:text-red-400 text-[8px] rounded font-bold uppercase shadow-sm">Stale</div>
                             <div className="px-1 py-0.5 bg-orange-100 text-orange-700 border border-orange-200 dark:border-orange-500/30 dark:bg-orange-500/20 dark:text-orange-400 text-[8px] rounded font-bold uppercase shadow-sm">Dup</div>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-slate-100 dark:border-slate-700/50 pt-2">
                          <label className="block text-[8px] font-bold text-emerald-600 dark:text-emerald-400 mb-1 flex items-center gap-1"><Sparkles size={8}/> AI Recommended Action</label>
                          <div className="w-full max-h-[140px] overflow-y-auto bg-slate-50 dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-700/50 rounded p-1 space-y-1 animate-fade-in-scale custom-scrollbar">
                             
                             <div className="bg-white dark:bg-[#161B22] border border-slate-200 dark:border-slate-700/60 rounded flex flex-col p-1.5 gap-1.5 shadow-sm">
                                <div className="flex items-center gap-1.5">
                                   <div className="flex items-center gap-1 px-1 py-0.5 border border-yellow-600/30 dark:border-yellow-500/30 bg-yellow-50/50 dark:bg-yellow-500/10 rounded text-[6px] font-black uppercase text-yellow-700 dark:text-[#E2C044] tracking-wide">
                                     <span className="w-1 h-1 rounded-full bg-yellow-500"></span> Medium
                                   </div>
                                   <span className="text-[8px] font-bold text-slate-800 dark:text-slate-100">CI is an orphan</span>
                                </div>
                                <div className="flex items-start gap-1.5 pl-0.5">
                                   <div className="px-1 py-0.5 border border-yellow-600/40 dark:border-[#E2C044]/50 rounded text-[6px] font-black text-yellow-700 dark:text-[#E2C044] uppercase tracking-wide">FIX</div>
                                   <span className="text-[7.5px] font-bold text-yellow-700/90 dark:text-[#E2C044] leading-tight">Map US-EAST-DB-001 to its hosting infrastructure via the CSDM relationship editor.</span>
                                </div>
                             </div>

                             <div className="bg-white dark:bg-[#161B22] border border-slate-200 dark:border-slate-700/60 rounded flex flex-col p-1.5 gap-1.5 shadow-sm">
                                <div className="flex items-center gap-1.5">
                                   <div className="flex items-center gap-1 px-1 py-0.5 border border-yellow-600/30 dark:border-yellow-500/30 bg-yellow-50/50 dark:bg-yellow-500/10 rounded text-[6px] font-black uppercase text-yellow-700 dark:text-[#E2C044] tracking-wide">
                                     <span className="w-1 h-1 rounded-full bg-yellow-500"></span> Medium
                                   </div>
                                   <span className="text-[8px] font-bold text-slate-800 dark:text-slate-100">CI is stale and likely decommissioned</span>
                                </div>
                                <div className="flex items-start gap-1.5 pl-0.5">
                                   <div className="px-1 py-0.5 border border-yellow-600/40 dark:border-[#E2C044]/50 rounded text-[6px] font-black text-yellow-700 dark:text-[#E2C044] uppercase tracking-wide">FIX</div>
                                   <span className="text-[7.5px] font-bold text-yellow-700/90 dark:text-[#E2C044] leading-tight">Review US-EAST-DB-001 for decommissioning. Set operational_status = Retired if confirmed.</span>
                                </div>
                             </div>

                             <div className="bg-white dark:bg-[#161B22] border border-slate-200 dark:border-slate-700/60 rounded flex flex-col p-1.5 gap-1.5 shadow-sm">
                                <div className="flex items-center gap-1.5">
                                   <div className="flex items-center gap-1 px-1 py-0.5 border border-orange-600/30 dark:border-orange-500/30 bg-orange-50/50 dark:bg-orange-500/10 rounded text-[6px] font-black uppercase text-orange-700 dark:text-[#F38C3B] tracking-wide">
                                     <span className="w-[3px] h-[3px] rotate-45 bg-orange-500"></span> High
                                   </div>
                                   <span className="text-[8px] font-bold text-slate-800 dark:text-slate-100">Duplicate entry detected</span>
                                </div>
                                <div className="flex items-start gap-1.5 pl-0.5">
                                   <div className="px-1 py-0.5 border border-orange-600/40 dark:border-[#F38C3B]/50 rounded text-[6px] font-black text-orange-700 dark:text-[#F38C3B] uppercase tracking-wide">FIX</div>
                                   <span className="text-[7.5px] font-bold text-orange-700/90 dark:text-[#F38C3B] leading-tight">Merge US-EAST-DB-001 with primary active record to resolve compliance violations.</span>
                                </div>
                             </div>

                          </div>
                      </div>
                  </div>
                </div>
              </div>

              {/* Connecting Pipe 2 (Incoming) */}
              <div className="col-start-2 row-start-2 flex items-center w-full relative h-[40px] scale-x-[-1]">
                  <p className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[9px] text-emerald-600 dark:text-emerald-400 uppercase tracking-widest font-bold whitespace-nowrap px-1.5 py-0.5 scale-x-[-1]">2. Push Native Recommendations</p>
                  <div className="h-2 w-full bg-slate-200 dark:bg-[#0A101C] rounded-full relative overflow-hidden shadow-inner border border-slate-300 dark:border-slate-800">
                    <div className="absolute w-full h-px bg-slate-300 dark:bg-slate-700 top-1/2 -translate-y-1/2" />
                    <div className="absolute left-0 w-64 h-full bg-emerald-500 dark:bg-emerald-400 rounded-full animate-data-flux shadow-[0_0_15px_#10b981] dark:shadow-[0_0_50px_#10b981,inset_0_0_15px_#fff]" style={{ animationDelay: '1.2s' }} />
                    <div className="absolute left-0 w-32 h-1 bg-white top-1/2 -translate-y-1/2 rounded-full animate-data-flux z-10 shadow-[0_0_10px_#fff]" style={{ animationDelay: '1.2s' }} />
                  </div>
              </div>

              {/* === COL 3: LLM Engine (Spans both rows) === */}
              <div className="col-start-3 row-start-1 row-span-2 flex items-center justify-center pl-4">
                <div className="w-[280px] bg-white dark:bg-gradient-to-b dark:from-[#1B122A] dark:to-[#0D0814] border border-slate-200 dark:border-purple-500/50 rounded-[2rem] p-8 flex flex-col items-center shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_30px_80px_rgba(168,85,247,0.3)] z-20 shrink-0 relative overflow-hidden group">
                   <div className="absolute inset-0 bg-purple-50 dark:bg-purple-500/20 blur-3xl group-hover:opacity-100 opacity-50 transition-opacity" />
                   <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
                   <BrainCircuit className="text-purple-600 dark:text-purple-400 w-20 h-20 mb-6 relative z-10 drop-shadow-md dark:drop-shadow-[0_0_25px_rgba(168,85,247,0.7)] animate-pulse" />
                   <div className="text-lg font-black text-slate-800 dark:text-white relative z-10 tracking-tight text-center leading-tight">
                     Enterprise LLM
                     <span className="block text-[11px] text-slate-500 dark:text-purple-300/80 font-bold uppercase tracking-widest mt-1.5">or Native Now Assist</span>
                   </div>
                   <div className="text-[10px] font-bold text-white mt-4 relative z-10 bg-purple-600 dark:bg-purple-500/40 px-5 py-2 rounded-full border border-purple-500 dark:border-purple-500 uppercase tracking-widest shadow-[0_0_15px_rgba(168,85,247,0.4)] animate-pulse">Inferencing...</div>
                </div>
              </div>

            </div>
          </div>
        )
      case 3:
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
                        <button className="flex items-center gap-2 px-4 py-2 bg-[#106240] text-white rounded-full text-sm font-semibold shadow-[0_4px_10px_rgba(16,98,64,0.3)] dark:bg-[#2D3956] dark:text-emerald-400 hover:opacity-90 transition-all">
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
                       { title: 'APP-SERVER-INCOMPLETE-01', sub: 'Production', score: '0', pills: ['STALE', 'ORPHAN', '2 VIOLATIONS'], act: 'Trigger a targeted scan. CI never confirmed directly within scope. Recommend automated retirement workflow.' },
                       { title: 'APP-SERVER-DUPLICATE', sub: 'Unknown Environment', score: '2', pills: ['STALE', '2 VIOLATIONS'], act: 'Review for decommissioning. Marked stale (293 days)...' },
                       { title: 'APP-SERVER-PRD-01', sub: 'Production', score: '24', pills: ['STALE', '2 MISSING'], act: 'Trigger Scheduled Analysis. Last scanned 3,986 days ago but has 10 active relationships...' },
                     ].map((card, i) => (
                       <div key={i} className="bg-white dark:bg-[#1A2131] border border-slate-200 dark:border-slate-700/60 rounded-2xl overflow-hidden flex flex-col shadow-sm dark:shadow-lg transition-colors group">
                          <div className="p-5 flex justify-between items-start border-b border-slate-100 dark:border-slate-700/50">
                            <div className="flex-1">
                               <div className="flex items-center gap-2 mb-1.5">
                                 <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)] group-hover:animate-pulse" />
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
                             <p className="text-xs font-medium text-slate-700 dark:text-slate-300 leading-snug">{card.act}</p>
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

  // removed fallback icon

  return (
    <section className="w-full h-full flex bg-[#F0F2F5] dark:bg-transparent transition-colors duration-500">
      
      {/* ── LEFT: Process Simulator Menu ── */}
      <div className="w-[450px] bg-white dark:bg-[#0A0F1D]/80 backdrop-blur-2xl border-r border-slate-200 dark:border-slate-700/50 p-10 flex flex-col z-20 shadow-[20px_0_40px_-20px_rgba(0,0,0,0.05)] dark:shadow-[20px_0_40px_-20px_rgba(0,0,0,0.8)] relative transition-colors duration-500">
        <div className="mb-2">
           <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Simulator</h2>
           <p className="text-indigo-700 dark:text-emerald-500 font-bold tracking-widest uppercase text-xs mt-3 bg-indigo-50 border-indigo-200 dark:bg-emerald-500/10 inline-block px-3 py-1 rounded-full border dark:border-emerald-500/20">Active Execution</p>
        </div>

        {/* Controls */}
        <div className="my-10 flex gap-4 h-14 relative z-50">
          <button onClick={() => setAutoplay(a => !a)} className={`flex-1 flex items-center justify-center gap-3 text-sm font-black tracking-wide rounded-full transition-all duration-300 shadow-lg border-2 ${autoplay ? 'bg-indigo-50/80 hover:bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-emerald-500/10 dark:hover:bg-emerald-500/20 dark:text-emerald-400 dark:border-emerald-500/30' : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200 dark:bg-[#1A2235] dark:hover:bg-[#232E45] dark:text-white dark:border-slate-700/80'}`}>
            {autoplay ? <><Pause size={18} className="animate-pulse" /> PAUSE</> : <><Play size={18} className="text-indigo-600 dark:text-emerald-400"/> AUTO</>}
          </button>
          <button onClick={() => { setAutoplay(false); goToStep(step + 1) }} disabled={step === STEPS.length - 1} className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-emerald-500 dark:hover:bg-emerald-400 border border-transparent text-sm font-black tracking-wide rounded-full transition-all duration-300 shadow-[0_10px_20px_rgba(79,70,229,0.25)] dark:shadow-[0_10px_20px_rgba(16,185,129,0.25)] group disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 hover:-translate-y-0.5">
            NEXT <ChevronRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
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
                           ${isActive ? 'bg-white border-indigo-500 shadow-[0_10px_30px_rgba(99,102,241,0.15)] dark:border-emerald-500 dark:bg-[#0F1725] dark:shadow-[0_10px_30px_rgba(16,185,129,0.15)] scale-105 relative z-10' 
                                      : 'bg-slate-50 border-slate-200 hover:border-slate-400 dark:bg-[#0B101C] dark:border-slate-800 dark:hover:border-slate-600'}`} 
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors flex-shrink-0
                   ${isActive ? 'bg-indigo-50 border-indigo-500 text-indigo-600 dark:bg-emerald-500/20 dark:border-emerald-400 dark:text-emerald-400 shadow-sm dark:shadow-[0_0_15px_rgba(52,211,153,0.5)]' 
                   : 'bg-white border-slate-300 text-slate-400 dark:bg-[#131A26] dark:border-slate-700 dark:text-slate-500'}`}>
                  {isDone ? <CheckCircle2 size={24} className="text-emerald-500 dark:text-emerald-500" /> : <span className="font-black text-lg">{i + 1}</span>}
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
             <div className="flex items-center gap-3 bg-indigo-50 dark:bg-emerald-500/10 border border-indigo-200 dark:border-emerald-500/30 px-5 py-2 rounded-full shadow-sm dark:shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                 <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 dark:bg-emerald-400 animate-pulse drop-shadow-sm dark:drop-shadow-[0_0_5px_#10b981]" />
                 <span className="text-xs font-extrabold text-indigo-700 dark:text-emerald-400 tracking-[0.15em] uppercase">Enterprise Simulation Node</span>
             </div>
             {step === 3 && (
                <button onClick={() => goToStep(2)} className="text-xs text-slate-600 dark:text-slate-400 font-bold hover:text-slate-900 dark:hover:text-white transition-colors bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full flex items-center gap-2 border border-slate-300 dark:border-slate-700 z-50 shadow-sm">
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
