import { useState } from 'react'
import { ChevronLeft, ChevronRight, Activity, Sparkles } from 'lucide-react'
import Slide1HowItWorks from './components/Slide1HowItWorks'
import Slide2ImpactBenefits from './components/Slide2ImpactBenefits'
import Slide3LiveDemo from './components/Slide3LiveDemo'
import Slide4MeasurableImpact from './components/Slide4MeasurableImpact'

const SLIDES = [
  { id: 1, label: 'How It Works' },
  { id: 2, label: 'Impact & Benefits' },
  { id: 3, label: 'Live Demo' },
  { id: 4, label: 'Measurable Impact' },
]

export default function App() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(c => Math.max(0, c - 1))
  const next = () => setCurrent(c => Math.min(SLIDES.length - 1, c + 1))

  const slideComponents = [
    <Slide1HowItWorks key="s1" />,
    <Slide2ImpactBenefits key="s2" />,
    <Slide3LiveDemo key="s3" />,
    <Slide4MeasurableImpact key="s4" />,
  ]

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-[#0a0f18] to-[#04060a] text-slate-100 font-sans select-none flex flex-col justify-center items-center">
      {/* Dynamic Ambient Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none" />
      <div className="absolute top-0 w-3/4 h-[50vh] bg-emerald-500/10 blur-[150px] rounded-[100%] pointer-events-none" />
      <div className="absolute bottom-0 w-full h-[30vh] bg-blue-600/10 blur-[120px] rounded-[100%] pointer-events-none" />

      {/* ── Top Header ── */}
      <header className="absolute top-0 inset-x-0 z-50 flex items-center justify-between px-10 py-5 pointer-events-none">
        {/* Left Side */}
        <div className="pointer-events-auto flex items-center gap-4">
           <button className="flex items-center gap-2 px-4 py-2 bg-[#0A101C] border border-slate-700/60 rounded-xl text-sm text-slate-300 hover:text-white hover:border-slate-500 transition-all shadow-lg group">
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back
           </button>
           <h1 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 tracking-tight flex items-center gap-2">
             <Activity size={20} className="text-emerald-400" />
             CMDB Health Doctor
           </h1>
        </div>

        {/* Center Tag */}
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-[#061B14] shadow-[0_0_20px_rgba(16,185,129,0.15)] pointer-events-auto">
             <Sparkles size={14} className="text-emerald-400" />
             <span className="text-[10px] text-emerald-400 font-extrabold uppercase tracking-[0.2em]">Next-Gen Service Management</span>
        </div>
        
        <div className="w-40" /> {/* Spacer for symmetry */}
      </header>

      {/* ── Main Presentation Frame ── */}
      <main className="w-[90vw] max-w-[1500px] h-[85vh] max-h-[850px] relative z-10 flex flex-col items-center justify-center mt-6">
        
        {/* Hardware Bezel for 3D Pop Out */}
        <div 
           className="w-full h-full bg-gradient-to-b from-[#1C2533] to-[#0B0F17] p-[10px] rounded-[2.5rem] relative transition-all duration-700 flex flex-col group cursor-default shadow-[0_50px_100px_-20px_rgba(0,0,0,1),0_0_80px_rgba(0,0,0,0.5),inset_0_2px_1px_rgba(255,255,255,0.15)] border border-slate-900"
        >
           {/* Inner Screen Surface */}
           <div className="relative flex-1 rounded-[2rem] overflow-hidden flex flex-col bg-[#03060C] shadow-[inset_0_20px_50px_rgba(0,0,0,0.9),inset_0_0_0_1px_rgba(255,255,255,0.05)] border border-black">
             {slideComponents[current]}
           </div>

           {/* ── Beautiful Bottom Pill Pagination ── */}
           <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-50 flex justify-center pointer-events-auto">
             <nav className="flex items-center gap-8 bg-[#090E18]/90 backdrop-blur-xl border border-slate-700/60 rounded-full px-8 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.05)_inset]">
               <button
                 onClick={prev}
                 disabled={current === 0}
                 className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all group"
               >
                 <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                 Prev
               </button>

               <div className="flex items-center gap-4 border-x border-slate-700/50 px-6">
                 {SLIDES.map((s, i) => (
                   <button
                     key={s.id}
                     onClick={() => setCurrent(i)}
                     title={s.label}
                     className={`transition-all duration-500 rounded-full cursor-pointer
                       ${i === current
                         ? 'w-10 h-2.5 bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-[0_0_15px_rgba(52,211,153,0.8)]'
                         : 'w-2.5 h-2.5 bg-slate-600 hover:bg-slate-400'
                       }`}
                   />
                 ))}
               </div>

               <button
                 onClick={next}
                 disabled={current === SLIDES.length - 1}
                 className="flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 disabled:opacity-20 disabled:cursor-not-allowed transition-all group"
               >
                 Next
                 <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
               </button>
             </nav>
           </div>
        </div>
      </main>
    </div>
  )
}
