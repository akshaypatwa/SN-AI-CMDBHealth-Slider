import { ShieldCheck, Target, Zap, Wrench, RefreshCw, Layers, Cpu, Sparkles, FileCheck2 } from 'lucide-react'
import { useState, useRef, MouseEvent, ReactNode } from 'react'

function TiltCard({ children, className = '' }: { children: ReactNode, className?: string }) {
  const [style, setStyle] = useState({ transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)' })
  const boundingRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!boundingRef.current) return
    const rect = boundingRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -15 // Max 15 deg
    const rotateY = ((x - centerX) / centerX) * 15 
    setStyle({ transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)` })
  }

  const handleMouseLeave = () => {
    setStyle({ transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)' })
  }

  return (
    <div
      ref={boundingRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-all duration-200 ease-out will-change-transform ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}

export default function Slide0bSolution() {
  return (
    <section className="w-full h-full p-12 flex flex-col animate-slide-from-bottom overflow-hidden bg-transparent pointer-events-auto">
      
      {/* Explicit Core Problem Heading - Massive and Centered vertically locally */}
      <div className="w-full max-w-[1500px] mx-auto mb-10 flex items-center justify-between z-20">
        <TiltCard>
           <h2 className="text-6xl font-black text-[#3DA574] tracking-tighter drop-shadow-sm mb-2">
             The Solution
           </h2>
           <h3 className="text-3xl font-extrabold text-[#023761] dark:text-white tracking-tight drop-shadow-sm opacity-90">
             Automated Resolution <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3DA574] to-[#5291dd]">Engine</span>
           </h3>
        </TiltCard>
      </div>

      {/* 2-Column Split Layout for Pristine UI Constraints */}
      <div className="flex w-full max-w-[1500px] mx-auto gap-10 flex-1 min-h-0 z-20">
        
        {/* LEFT COLUMN: The Reactor Core (High-Graphics Circular HUD) */}
        <div className="flex-1 rounded-[2.5rem] bg-gradient-to-br from-[#023761] to-[#011425] border border-[#5291dd]/30 relative overflow-hidden flex flex-col p-8 shadow-[0_30px_60px_rgba(0,30,60,0.5),inset_0_2px_20px_rgba(255,255,255,0.05)] justify-center items-center">
           
           <h3 className="absolute top-4 left-6 text-lg font-black text-white tracking-widest uppercase flex items-center gap-3 drop-shadow-md z-30 bg-[#011425]/40 p-1.5 px-4 rounded-xl backdrop-blur-md border border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3DA574] animate-[pulse_1s_infinite] shadow-[0_0_15px_#3DA574]"></span>
              Active Remediation Pipeline
           </h3>
           
           {/* Background Grid & Radar effects (perfectly centered on orb) */}
           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSg4MiwgMTQ1LCAyMjEsIDAuMSkiLz48L3N2Zz4=')] opacity-30 z-0"></div>
           <div className="absolute top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-[#5291dd]/20 z-0 animate-[spin_10s_linear_infinite] shadow-[inset_0_0_50px_rgba(82,145,221,0.1)]"></div>
           <div className="absolute top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-dashed border-[#3DA574]/30 z-0 animate-[spin_8s_linear_infinite_reverse]"></div>

           {/* Core SVG Connections (Shifted down 4%) */}
           <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-80">
              <g className="animate-[pulse_1.5s_ease-in-out_infinite]">
                 {/* Top */}
                 <line x1="50%" y1="22%" x2="50%" y2="54%" stroke="#3DA574" strokeWidth="2" strokeDasharray="6,4" className="animate-[dash_2s_linear_infinite]" />
                 {/* Top Right */}
                 <line x1="82%" y1="44%" x2="50%" y2="54%" stroke="#5291dd" strokeWidth="2" strokeDasharray="6,4" className="animate-[dash_2.5s_linear_infinite]" />
                 {/* Bottom Right */}
                 <line x1="75%" y1="82%" x2="50%" y2="54%" stroke="#3DA574" strokeWidth="2" strokeDasharray="6,4" className="animate-[dash_1.8s_linear_infinite]" />
                 {/* Bottom Left */}
                 <line x1="25%" y1="82%" x2="50%" y2="54%" stroke="#3DA574" strokeWidth="2" strokeDasharray="6,4" className="animate-[dash_2.2s_linear_infinite]" />
                 {/* Top Left */}
                 <line x1="18%" y1="44%" x2="50%" y2="54%" stroke="#f7b516" strokeWidth="2" strokeDasharray="6,4" className="animate-[dash_2s_linear_infinite]" />
              </g>
           </svg>

           {/* THE CENTRAL SHIELDING ENGINE CORE (Shifted down 4%) */}
           <div className="absolute top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <TiltCard>
                <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-[#3DA574]/40 to-black border-2 border-[#3DA574] shadow-[0_0_50px_rgba(61,165,116,0.6)] flex items-center justify-center backdrop-blur-md group hover:scale-110 transition-transform">
                   <div className="absolute inset-0 rounded-full animate-ping bg-[#3DA574] opacity-40"></div>
                   <Cpu size={60} className="text-white drop-shadow-[0_0_15px_white]" />
                   <span className="absolute -bottom-8 w-44 text-center text-white font-black uppercase tracking-widest text-[11px] bg-[#3DA574]/80 px-2 py-1 rounded-full border border-white/40 shadow-[0_0_10px_#3DA574]">Inference Engine</span>
                </div>
              </TiltCard>
           </div>

           {/* ORBITING HUD NODE 1: (Shifted down 4%) */}
           <div className="absolute top-[12%] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center w-[220px]">
             <TiltCard>
               <div className="flex flex-col items-center hover:scale-110 transition-transform">
                 <div className="w-16 h-16 bg-black/40 backdrop-blur-md border border-[#3DA574]/60 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(61,165,116,0.4)] mb-2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#3DA574]/20 animate-pulse"></div>
                    <Target size={30} className="text-[#3DA574] z-10" />
                 </div>
                 <div className="bg-[#011425]/80 backdrop-blur border border-white/10 p-2 px-3 rounded-lg text-center w-full shadow-2xl">
                    <h4 className="text-white font-black text-sm tracking-wide">Root-Cause Tracing</h4>
                    <p className="text-[#5291dd] text-[10px] leading-tight mt-1">Isolate exactly why data drifted natively.</p>
                 </div>
               </div>
             </TiltCard>
           </div>

           {/* ORBITING HUD NODE 2: (Shifted down 4%) */}
           <div className="absolute top-[36%] right-[2%] z-20 flex flex-col items-center w-[200px]">
             <TiltCard>
               <div className="flex flex-col items-center hover:scale-110 transition-transform">
                 <div className="w-16 h-16 bg-black/40 backdrop-blur-md border border-[#5291dd]/60 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(82,145,221,0.4)] mb-2 relative">
                    <Zap size={30} className="text-[#5291dd]" />
                 </div>
                 <div className="bg-[#011425]/80 backdrop-blur border border-white/10 p-2 px-3 rounded-lg text-center w-full shadow-2xl">
                    <h4 className="text-white font-black text-sm tracking-wide">Suggest Fixes</h4>
                    <p className="text-[#5291dd] text-[10px] leading-tight mt-1">Auto-generated contextual prescriptions.</p>
                 </div>
               </div>
             </TiltCard>
           </div>

           {/* ORBITING HUD NODE 3: (Shifted down 4%) */}
           <div className="absolute bottom-[6%] right-[10%] z-20 flex flex-col items-center w-[200px]">
             <TiltCard>
               <div className="flex flex-col items-center hover:scale-110 transition-transform">
                 <div className="w-16 h-16 bg-black/40 backdrop-blur-md border border-[#3DA574]/60 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(61,165,116,0.4)] mb-2 relative">
                    <Wrench size={30} className="text-[#3DA574]" />
                 </div>
                 <div className="bg-[#3DA574]/10 backdrop-blur border border-[#3DA574]/30 p-2 px-3 rounded-lg text-center w-full shadow-2xl">
                    <h4 className="text-[#3DA574] font-black text-sm tracking-wide">Generate Scripts</h4>
                    <p className="text-blue-100/80 text-[10px] leading-tight mt-1">Ready-to-deploy GlideRecord fixes.</p>
                 </div>
               </div>
             </TiltCard>
           </div>

           {/* ORBITING HUD NODE 4: (Shifted down 4%) */}
           <div className="absolute bottom-[6%] left-[10%] z-20 flex flex-col items-center w-[200px]">
             <TiltCard>
               <div className="flex flex-col items-center hover:scale-110 transition-transform">
                 <div className="w-16 h-16 bg-black/40 backdrop-blur-md border border-[#3DA574]/60 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(61,165,116,0.4)] mb-2 relative">
                    <RefreshCw size={30} className="text-[#3DA574]" />
                 </div>
                 <div className="bg-[#011425]/80 backdrop-blur border border-white/10 p-2 px-3 rounded-lg text-center w-full shadow-2xl">
                    <h4 className="text-white font-black text-sm tracking-wide">Route Workflows</h4>
                    <p className="text-[#5291dd] text-[10px] leading-tight mt-1">Trigger instant ITSM dispatch updates.</p>
                 </div>
               </div>
             </TiltCard>
           </div>

           {/* ORBITING HUD NODE 5: (Shifted down 4%) */}
           <div className="absolute top-[36%] left-[2%] z-20 flex flex-col items-center w-[200px]">
             <TiltCard>
               <div className="flex flex-col items-center hover:scale-110 transition-transform">
                 <div className="w-16 h-16 bg-black/40 backdrop-blur-md border border-[#f7b516]/60 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(247,181,22,0.4)] mb-2 relative overflow-hidden">
                    <FileCheck2 size={30} className="text-[#f7b516] z-10" />
                 </div>
                 <div className="bg-[#011425]/80 backdrop-blur border border-white/10 p-2 px-3 rounded-lg text-center w-full shadow-2xl">
                    <h4 className="text-white font-black text-sm tracking-wide">Verify Status</h4>
                    <p className="text-[#5291dd] text-[10px] leading-tight mt-1">Audit trail logging of restored stability.</p>
                 </div>
               </div>
             </TiltCard>
           </div>

        </div>

        {/* RIGHT COLUMN: The Impact Cards (Stacked horizontally) */}
        <div className="flex-1 flex flex-col justify-between gap-6">
          
          {/* Card 1 */}
          <TiltCard>
            <div className="flex items-center gap-6 bg-white/60 dark:bg-[#023761]/40 backdrop-blur-2xl border-2 border-[#3DA574]/60 p-6 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.05),0_0_15px_rgba(61,165,116,0.1)] hover:bg-white/90 dark:hover:bg-[#023761]/60 transition-all duration-300 group hover:border-[#3DA574] hover:shadow-[0_15px_35px_rgba(0,0,0,0.05),0_0_20px_rgba(61,165,116,0.2)]">
               <div className="w-20 h-20 shrink-0 rounded-2xl bg-gradient-to-br from-[#3DA574]/10 to-[#5291dd]/5 flex items-center justify-center border border-[#3DA574]/30 group-hover:shadow-[0_0_25px_rgba(61,165,116,0.3)] transition-shadow">
                 <Sparkles size={32} className="text-[#3DA574]" />
               </div>
               <div className="flex-1">
                  <div className="flex items-end gap-3 mb-1">
                     <h4 className="text-lg font-bold text-[#023761] dark:text-white pb-1 tracking-tight">Step 1: Detect</h4>
                  </div>
                  <h3 className="text-3xl font-black text-[#3DA574] tracking-tighter drop-shadow-sm mb-2">CMDB CI Issues Scan</h3>
                  <p className="text-sm font-medium text-[#023761]/70 dark:text-slate-300 leading-snug">
                    The system actively scans your CMDB CI records and uses AI to instantly find anomalies, stale records, and mapping failures as they occur.
                  </p>
               </div>
            </div>
          </TiltCard>

          {/* Card 2 */}
          <TiltCard>
            <div className="flex items-center gap-6 bg-white/60 dark:bg-[#023761]/40 backdrop-blur-2xl border-2 border-[#5291dd]/60 p-6 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.05),0_0_15px_rgba(82,145,221,0.1)] hover:bg-white/90 dark:hover:bg-[#023761]/60 transition-all duration-300 group hover:border-[#5291dd] hover:shadow-[0_15px_35px_rgba(0,0,0,0.05),0_0_20px_rgba(82,145,221,0.2)]">
               <div className="w-20 h-20 shrink-0 rounded-2xl bg-gradient-to-br from-[#5291dd]/10 to-[#3DA574]/5 flex items-center justify-center border border-[#5291dd]/30 group-hover:shadow-[0_0_25px_rgba(82,145,221,0.3)] transition-shadow">
                 <Layers size={32} className="text-[#5291dd]" />
               </div>
               <div className="flex-1">
                  <div className="flex items-end gap-3 mb-1">
                     <h4 className="text-lg font-bold text-[#023761] dark:text-white pb-1 tracking-tight">Step 2: Prescribe</h4>
                  </div>
                  <h3 className="text-3xl font-black text-[#5291dd] tracking-tighter drop-shadow-sm mb-2 leading-none pb-1">AI Fix Recommendations</h3>
                  <p className="text-sm font-medium text-[#023761]/70 dark:text-slate-300 leading-snug">
                    AI automatically generates targeted fixes—from glide record scripts to mapping payloads—to resolve CI issues directly.
                  </p>
               </div>
            </div>
          </TiltCard>

          {/* Card 3 */}
          <TiltCard>
            <div className="flex items-center gap-6 bg-white/60 dark:bg-[#023761]/40 backdrop-blur-2xl border-2 border-[#f7b516]/60 p-6 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.05),0_0_15px_rgba(247,181,22,0.1)] hover:bg-white/90 dark:hover:bg-[#023761]/60 transition-all duration-300 group hover:border-[#f7b516] hover:shadow-[0_15px_35px_rgba(0,0,0,0.05),0_0_20px_rgba(247,181,22,0.2)]">
               <div className="w-20 h-20 shrink-0 rounded-2xl bg-gradient-to-br from-[#f7b516]/10 to-[#3DA574]/5 flex items-center justify-center border border-[#f7b516]/30 group-hover:shadow-[0_0_25px_rgba(247,181,22,0.3)] transition-shadow">
                 <ShieldCheck size={32} className="text-[#f7b516]" />
               </div>
               <div className="flex-1">
                  <div className="flex items-end gap-3 mb-1">
                     <h4 className="text-lg font-bold text-[#023761] dark:text-white pb-1 tracking-tight">Step 3: Remediate</h4>
                  </div>
                  <h3 className="text-3xl font-black text-[#f7b516] tracking-tighter drop-shadow-sm mb-2">One-Click Fixes</h3>
                  <p className="text-sm font-medium text-[#023761]/70 dark:text-slate-300 leading-snug">
                    Review and apply the AI-generated prescriptions with a single click to instantly heal your CI mapping issues and restore health scores.
                  </p>
               </div>
            </div>
          </TiltCard>

        </div>
      </div>
    </section>
  )
}
