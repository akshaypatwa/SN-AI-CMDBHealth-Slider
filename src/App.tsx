import { useState } from 'react'
import { ChevronLeft, ChevronRight, Activity, Sparkles, Sun, Moon } from 'lucide-react'
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
  const [isDark, setIsDark] = useState(true)

  const prev = () => setCurrent(c => Math.max(0, c - 1))
  const next = () => setCurrent(c => Math.min(SLIDES.length - 1, c + 1))

  const slideComponents = [
    <Slide1HowItWorks key="s1" />,
    <Slide2ImpactBenefits key="s2" />,
    <Slide3LiveDemo key="s3" />,
    <Slide4MeasurableImpact key="s4" />,
  ]

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="relative w-screen h-screen overflow-hidden bg-[#F3F4F6] text-slate-800 dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-slate-800 dark:via-[#0a0f18] dark:to-[#04060a] dark:text-slate-100 font-sans select-none flex flex-col justify-center items-center transition-colors duration-500">
        
        {/* Dynamic Ambient Background Elements */}
        {isDark && (
          <>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none transition-opacity" />
            <div className="absolute top-0 w-3/4 h-[50vh] bg-emerald-500/10 blur-[150px] rounded-[100%] pointer-events-none transition-opacity" />
            <div className="absolute bottom-0 w-full h-[30vh] bg-blue-600/10 blur-[120px] rounded-[100%] pointer-events-none transition-opacity" />
          </>
        )}
        {!isDark && (
          <>
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/60 via-transparent to-transparent pointer-events-none transition-opacity" />
          </>
        )}

        {/* ── Top Header ── */}
        <header className="absolute top-0 inset-x-0 z-50 flex items-center justify-between px-10 py-5 pointer-events-none">
          {/* Left Side */}
          <div className="pointer-events-auto flex items-center gap-4 border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-black/20 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-sm">
             <button className="flex items-center gap-2 group px-2 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors border-r border-slate-200 dark:border-slate-700 pr-5">
                <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back
             </button>
             <h1 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-700 dark:from-emerald-400 dark:to-cyan-400 tracking-tight flex items-center gap-2">
               <Activity size={20} className="text-emerald-600 dark:text-emerald-400" />
               CMDB Health Doctor
             </h1>
          </div>

          {/* Center Tag */}
          <div className="flex items-center gap-2 px-5 py-2 rounded-full border border-emerald-200/50 dark:border-emerald-500/30 bg-emerald-50 dark:bg-[#061B14] shadow-sm dark:shadow-[0_0_20px_rgba(16,185,129,0.15)] pointer-events-auto">
               <Sparkles size={14} className="text-emerald-600 dark:text-emerald-400" />
               <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-extrabold uppercase tracking-[0.2em]">Next-Gen Service Management</span>
          </div>
          
          {/* Right Side - Theme Toggle */}
          <div className="flex justify-end pointer-events-auto">
            <button 
              onClick={() => setIsDark(!isDark)}
              className="flex items-center justify-center p-3 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm transition-all"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </header>

        {/* ── Main Presentation Frame ── */}
        <main className="w-[90vw] max-w-[1500px] h-[85vh] max-h-[850px] relative z-10 flex flex-col items-center justify-center mt-6">
          
          {/* Hardware Bezel for 3D Pop Out */}
          <div 
             className="w-full h-full bg-white dark:bg-gradient-to-b dark:from-[#1C2533] dark:to-[#0B0F17] p-[10px] rounded-[2.5rem] relative transition-all duration-700 flex flex-col group shadow-[0_30px_60px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.05)] dark:shadow-[0_50px_100px_-20px_rgba(0,0,0,1),0_0_80px_rgba(0,0,0,0.5),inset_0_2px_1px_rgba(255,255,255,0.15)] dark:border dark:border-slate-900"
          >
             {/* Inner Screen Surface */}
             <div className="relative flex-1 rounded-[2rem] overflow-hidden flex flex-col bg-[#F9FAFB] dark:bg-[#03060C] shadow-[inset_0_4px_20px_rgba(0,0,0,0.02)] dark:shadow-[inset_0_20px_50px_rgba(0,0,0,0.9),inset_0_0_0_1px_rgba(255,255,255,0.05)] border border-slate-200 dark:border-black transition-colors duration-500">
               {slideComponents[current]}
             </div>

             {/* ── Beautiful Bottom Pill Pagination ── */}
             <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-50 flex justify-center pointer-events-auto">
               <nav className="flex items-center gap-8 bg-white/90 dark:bg-[#090E18]/90 backdrop-blur-xl border border-slate-200 dark:border-slate-700/60 rounded-full px-8 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.05)_inset] transition-colors">
                 <button
                   onClick={prev}
                   disabled={current === 0}
                   className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all group"
                 >
                   <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                   Prev
                 </button>

                 <div className="flex items-center gap-4 border-x border-slate-200/80 dark:border-slate-700/50 px-6">
                   {SLIDES.map((s, i) => (
                     <button
                       key={s.id}
                       onClick={() => setCurrent(i)}
                       title={s.label}
                       className={`transition-all duration-500 rounded-full cursor-pointer
                         ${i === current
                           ? 'w-10 h-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-cyan-400 shadow-[0_0_10px_rgba(16,185,129,0.3)] dark:shadow-[0_0_15px_rgba(52,211,153,0.8)]'
                           : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-400'
                         }`}
                     />
                   ))}
                 </div>

                 <button
                   onClick={next}
                   disabled={current === SLIDES.length - 1}
                   className="flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all group"
                 >
                   Next
                   <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                 </button>
               </nav>
             </div>
          </div>
        </main>
      </div>
    </div>
  )
}
