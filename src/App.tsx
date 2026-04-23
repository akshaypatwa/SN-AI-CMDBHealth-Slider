import { useState } from 'react'
import { ChevronLeft, ChevronRight, Activity, Sparkles, Sun, Moon } from 'lucide-react'
import Slide0Title from './components/Slide0Title'
import Slide0aProblem from './components/Slide0aProblem'
import Slide1HowItWorks from './components/Slide1HowItWorks'
import Slide2ImpactBenefits from './components/Slide2ImpactBenefits'
import Slide3LiveDemo from './components/Slide3LiveDemo'
import Slide4MeasurableImpact from './components/Slide4MeasurableImpact'

const SLIDES = [
  { id: 0, label: 'Title Deck' },
  { id: 1, label: 'The Problem' },
  { id: 2, label: 'How It Works' },
  { id: 3, label: 'Simulator' },
  { id: 4, label: 'Impact & Benefits' },
  { id: 5, label: 'Measurable Impact' },
]

export default function App() {
  const [current, setCurrent] = useState(0)
  // Default to Light Mode per user request
  const [isDark, setIsDark] = useState(false)

  const prev = () => setCurrent(c => Math.max(0, c - 1))
  const next = () => setCurrent(c => Math.min(SLIDES.length - 1, c + 1))

  // New slide sequence as requested
  const slideComponents = [
    <Slide0Title key="s0" />,
    <Slide0aProblem key="s0a" />,
    <Slide1HowItWorks key="s1" />,
    <Slide3LiveDemo key="s3" />,
    <Slide2ImpactBenefits key="s2" />,
    <Slide4MeasurableImpact key="s4" />,
  ]

  return (
    <div className={isDark ? 'dark' : ''}>
      <div 
        className="relative w-screen h-screen overflow-hidden text-slate-800 dark:text-slate-100 font-sans select-none flex flex-col justify-center items-center transition-colors duration-500"
        style={{
          // Deep Emerald Green Cinematic Gradient for light mode, Ultra-Dark for dark mode
          backgroundImage: isDark
            ? `radial-gradient(circle at top, #0A0F1D 0%, #020610 100%), url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" opacity="0.05"><circle cx="20" cy="20" r="1.5" fill="%23ffffff"/></svg>')`
            : `radial-gradient(circle at bottom right, #001A29 0%, #004F78 50%, #006A9E 100%), url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" opacity="0.08"><circle cx="20" cy="20" r="1.5" fill="%23ffffff"/></svg>')`,
          backgroundBlendMode: 'overlay',
        }}
      >
        
        {/* Dynamic Ambient Background Elements */}
        {isDark && (
          <>
            <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-[#5291dd]/15 blur-[150px] rounded-full pointer-events-none transition-opacity" />
            <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-[#E74A33]/10 blur-[150px] rounded-full pointer-events-none transition-opacity" />
          </>
        )}
        {!isDark && (
          <>
             <div className="absolute top-0 right-0 w-[40vw] h-[40vh] bg-[#5291dd]/25 blur-[150px] rounded-full pointer-events-none transition-opacity mix-blend-screen" />
             <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-[#F7B516]/15 blur-[150px] rounded-full pointer-events-none transition-opacity mix-blend-screen" />
          </>
        )}

        {/* ── Scaler Wrapper to Simulate 80% Browser Zoom Natively ── */}
        <div style={{ width: '125vw', height: '125vh', transform: 'scale(0.8)', transformOrigin: 'top left' }} className="absolute top-0 left-0 flex flex-col items-center justify-center z-10 pointer-events-none">
          
          {/* ── Top Header ── */}
          <header className="absolute top-0 inset-x-0 z-50 flex items-center justify-between px-10 py-5 pointer-events-none">
            {/* Left Side */}
            <div className="pointer-events-auto flex items-center gap-4 border border-white/20 bg-black/20 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-lg">
               <button className="flex items-center gap-2 group px-2 text-white/70 hover:text-white transition-colors border-r border-white/20 pr-5">
                  <Activity size={16} className="text-[#5291dd] dark:text-[#E74A33]" />
               </button>
               <h1 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2 drop-shadow-md">
                 CMDB Health Doctor
               </h1>
            </div>

            {/* Center Tag */}
            <div className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#5291dd]/30 bg-black/30 shadow-lg pointer-events-auto backdrop-blur-xl">
                 <Sparkles size={14} className="text-[#5291dd]" />
                 <span className="text-[10px] text-[#5291dd] font-extrabold uppercase tracking-[0.2em] drop-shadow-sm">CMDB Health Simulator</span>
            </div>
            
            {/* Right Side - Theme Toggle */}
            <div className="flex justify-end pointer-events-auto">
              <button 
                onClick={() => setIsDark(!isDark)}
                className="flex items-center justify-center p-3 rounded-full border border-white/20 bg-black/20 text-white/80 hover:text-white hover:bg-white/10 shadow-lg backdrop-blur-md transition-all"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </header>

          {/* ── Outer 3D Floating Controls (Left & Right Center) ── */}
          <div className="absolute inset-y-0 left-8 z-50 flex items-center pointer-events-auto">
            <button
              onClick={prev}
              disabled={current === 0}
              className="group flex flex-col items-center justify-center w-16 h-16 bg-white/5 hover:bg-white/20 hover:bg-[#5291dd]/20 disabled:bg-transparent disabled:opacity-30 disabled:border-transparent text-white rounded-full border border-white/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:scale-110 active:scale-95 transition-all duration-300 overflow-hidden relative"
            >
              <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform drop-shadow-lg opacity-80 group-hover:opacity-100" />
            </button>
          </div>

          <div className="absolute inset-y-0 right-8 z-50 flex items-center pointer-events-auto">
            <button
              onClick={next}
              disabled={current === SLIDES.length - 1}
              className="group flex flex-col items-center justify-center w-16 h-16 bg-white/5 hover:bg-white/20 hover:bg-[#E74A33]/20 disabled:bg-transparent disabled:opacity-30 disabled:border-transparent text-white rounded-full border border-white/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:scale-110 active:scale-95 transition-all duration-300 overflow-hidden relative"
            >
              <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform drop-shadow-lg opacity-80 group-hover:opacity-100" />
            </button>
          </div>

          {/* ── Main Presentation Frame ── */}
          <main className="w-[85%] max-w-[1750px] h-[85%] max-h-[1050px] relative pointer-events-auto flex flex-col items-center justify-center mt-6">
            
            {/* Premium Hardware Bezel */}
            <div 
               className="w-full h-full relative transition-all duration-700 flex flex-col group p-[10px] sm:p-4 rounded-[3rem] 
               /* Light Mode Metallic Chassis */
               bg-gradient-to-b from-slate-50 via-slate-100 to-slate-300 
               border border-white/90
               shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_50px_100px_rgba(0,0,0,0.25),0_20px_40px_rgba(0,0,0,0.15),inset_0_2px_15px_rgba(255,255,255,1),inset_0_-2px_10px_rgba(0,0,0,0.05)]
               
               /* Dark Mode Matte Chassis */
               dark:bg-gradient-to-b dark:from-[#111827] dark:via-[#0F172A] dark:to-[#090C15] 
               dark:border-slate-800 
               dark:shadow-[0_0_0_1px_rgba(0,0,0,0.5),0_60px_120px_-20px_rgba(0,0,0,1),0_0_80px_rgba(0,0,0,0.6),inset_0_2px_3px_rgba(255,255,255,0.1)]"
            >
               {/* Inner Screen Surface / Display Glass */}
               <div className="relative flex-1 rounded-[2.5rem] overflow-hidden flex flex-col 
               bg-slate-50 dark:bg-[#03060C] 
               border border-slate-300/60 dark:border-black
               shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05),inset_0_10px_35px_rgba(0,0,0,0.03)] 
               dark:shadow-[inset_0_20px_50px_rgba(0,0,0,0.9),inset_0_0_0_1px_rgba(255,255,255,0.05)] transition-colors duration-500">
                 {slideComponents[current]}
                 
                 {/* ── EPAM | Novartis Corner Watermark Badge ── */}
                 <div className="absolute top-2 right-4 z-[100] flex items-center justify-center px-8 py-4 rounded-3xl border-b-2 border-r-2 border-white/40 dark:border-[#5291dd]/40 bg-white/80 dark:bg-[#023761]/80 shadow-[0_15px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_15px_40px_rgba(2,55,97,0.8),0_0_20px_rgba(82,145,221,0.2)] pointer-events-auto backdrop-blur-2xl transition-all duration-300 hover:scale-[1.05] group">
                     <div className="flex items-center gap-4 relative z-10">
                       <span className="text-[18px] text-[#5291dd] dark:text-[#5291dd] font-black tracking-[0.2em] font-sans drop-shadow-md">
                         EPAM
                       </span>
                       <span className="w-1 h-6 bg-gradient-to-b from-[#5291dd] via-[#E74A33] to-[#EC9A1E] rounded-full shadow-[0_0_8px_rgba(231,74,51,0.5)]"></span>
                       <span className="text-[22px] text-[#E74A33] dark:text-[#E74A33] font-black tracking-widest flex items-center gap-2 drop-shadow-md group-hover:drop-shadow-[0_0_12px_rgba(231,74,51,0.6)] transition-all" style={{ fontFamily: 'Georgia, serif' }}>
                         <Sparkles size={16} className="text-[#f7b516]" />
                         NOVARTIS
                       </span>
                     </div>
                 </div>
               </div>

               {/* ── Beautiful Bottom Pill Pagination (Only Dots remain) ── */}
               <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-50 flex justify-center pointer-events-auto">
                 <nav className="flex items-center gap-4 bg-white/95 dark:bg-[#090E18]/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/60 rounded-full px-6 py-3 shadow-[0_15px_40px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.05)_inset] transition-colors">
                     {SLIDES.map((s, i) => (
                       <button
                         key={s.id}
                         onClick={() => setCurrent(i)}
                         title={s.label}
                         className={`transition-all duration-500 rounded-full cursor-pointer
                           ${i === current
                             ? 'w-10 h-2.5 bg-gradient-to-r from-[#5291dd] to-[#E74A33] shadow-[0_0_12px_rgba(232,88,15,0.4)] dark:shadow-[0_0_15px_rgba(0,106,158,0.8)]'
                             : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-400'
                           }`}
                       />
                     ))}
                 </nav>
               </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
