import { useState } from 'react'
import { ChevronLeft, ChevronRight, Activity } from 'lucide-react'
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
    <div className="relative w-screen h-screen overflow-hidden bg-[#0A101D] text-slate-100 font-sans select-none flex flex-col">
      {/* Dynamic Background with subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      {/* ── Top Header ── */}
      <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-center px-8 py-6 pointer-events-none">
        <div className="pointer-events-auto absolute left-8">
           <button className="flex items-center gap-2 px-4 py-2 border border-slate-700/60 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800 transition">
              <ChevronLeft size={16} /> Back
           </button>
        </div>

        <div className="flex flex-col items-center gap-2 mt-2 pointer-events-auto">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-widest">
             <Activity size={12} /> NEXT-GEN SERVICE MANAGEMENT
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">CMDB Health Doctor</h1>
        </div>
      </header>

      {/* ── Main Presentation Area ── */}
      <main className="w-full flex-1 pt-24 pb-20 px-12 flex flex-col items-center justify-center relative z-10">
        <div className="w-full max-w-[1400px] h-full max-h-[820px] bg-[#070A13] border border-slate-700/50 rounded-[2rem] shadow-[0_30px_100px_rgba(0,0,0,0.8)] relative transition-all duration-500">
           
           {/* Inner clipping container for slides */}
           <div className="absolute inset-0 rounded-[2rem] overflow-hidden flex flex-col">
             {slideComponents[current]}
           </div>

           {/* ── Fixed Bottom Nav Pill OVERLAPPING the card boundary ── */}
           <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 z-50 flex justify-center pointer-events-auto shadow-2xl rounded-2xl">
             <nav className="flex items-center gap-6 bg-[#0E1525] border border-slate-700/60 rounded-2xl px-8 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
               <button
                 onClick={prev}
                 disabled={current === 0}
                 className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition group"
               >
                 <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
                 Previous
               </button>

               <div className="flex items-center gap-3 mx-4">
                 {SLIDES.map((s, i) => (
                   <button
                     key={s.id}
                     onClick={() => setCurrent(i)}
                     title={s.label}
                     className={`transition-all duration-300 rounded-full
                       ${i === current
                         ? 'w-4 h-4 bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)] scale-110'
                         : 'w-3 h-3 bg-slate-600 hover:bg-slate-400 cursor-pointer'
                       }`}
                   />
                 ))}
               </div>

               <button
                 onClick={next}
                 disabled={current === SLIDES.length - 1}
                 className="flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 disabled:opacity-30 disabled:cursor-not-allowed transition group"
               >
                 Next
                 <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
               </button>
             </nav>
           </div>
        </div>
      </main>
    </div>
  )
}
