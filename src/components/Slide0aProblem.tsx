import { ServerCrash, Unplug, DatabaseZap, Activity, LayoutTemplate, Database, Server, Ghost, UserX, Copy, History } from 'lucide-react'
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

export default function Slide0aProblem() {
  return (
    <section className="w-full h-full p-12 flex flex-col animate-slide-from-bottom overflow-hidden bg-transparent pointer-events-auto">
      
      {/* Explicit Core Problem Heading - Massive and Centered vertically locally */}
      <div className="w-full max-w-[1500px] mx-auto mb-10 flex items-center justify-between z-20">
        <TiltCard>
           <h2 className="text-6xl font-black text-[#E74A33] tracking-tighter drop-shadow-sm mb-2">
             The Core Problem
           </h2>
           <h3 className="text-3xl font-extrabold text-[#023761] dark:text-white tracking-tight drop-shadow-sm opacity-90">
             A Fragmented, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E74A33] to-[#EC9A1E]">Decaying CMDB</span>
           </h3>
        </TiltCard>
      </div>

      {/* 2-Column Split Layout for Pristine UI Constraints */}
      <div className="flex w-full max-w-[1500px] mx-auto gap-10 flex-1 min-h-0 z-20">
        
        {/* LEFT COLUMN: The Reactor Core (High-Graphics Circular HUD) */}
        <div className="flex-1 rounded-[2.5rem] bg-gradient-to-br from-[#023761] to-[#011425] border border-[#5291dd]/30 relative overflow-hidden flex flex-col p-8 shadow-[0_30px_60px_rgba(0,30,60,0.5),inset_0_2px_20px_rgba(255,255,255,0.05)] justify-center items-center">
           
           <h3 className="absolute top-4 left-6 text-lg font-black text-white tracking-widest uppercase flex items-center gap-3 drop-shadow-md z-30 bg-[#011425]/40 p-1.5 px-4 rounded-xl backdrop-blur-md border border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E74A33] animate-pulse shadow-[0_0_15px_#E74A33]"></span>
              Critical Failure Nodes
           </h3>
           
           {/* Background Grid & Radar effects (perfectly centered on orb) */}
           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSg4MiwgMTQ1LCAyMjEsIDAuMSkiLz48L3N2Zz4=')] opacity-30 z-0"></div>
           <div className="absolute top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-[#5291dd]/10 z-0 animate-[spin_20s_linear_infinite]"></div>
           <div className="absolute top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-dashed border-[#E74A33]/20 z-0 animate-[spin_15s_linear_infinite_reverse]"></div>

           {/* Core SVG Connections (Shifted down 4%) */}
           <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-60">
              <g className="animate-[pulse_2s_ease-in-out_infinite]">
                 {/* Top (Duplicate) */}
                 <line x1="50%" y1="54%" x2="50%" y2="22%" stroke="#E74A33" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_5s_linear_infinite]" />
                 {/* Top Right (Stale) */}
                 <line x1="50%" y1="54%" x2="82%" y2="44%" stroke="#EC9A1E" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_6s_linear_infinite]" />
                 {/* Bottom Right (Orphaned) */}
                 <line x1="50%" y1="54%" x2="75%" y2="82%" stroke="#E74A33" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_4s_linear_infinite]" />
                 {/* Bottom Left (No Owners) */}
                 <line x1="50%" y1="54%" x2="25%" y2="82%" stroke="#E74A33" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_5s_linear_infinite]" />
                 {/* Top Left (Broken Discovery) */}
                 <line x1="50%" y1="54%" x2="18%" y2="44%" stroke="#f7b516" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_6s_linear_infinite]" />
              </g>
           </svg>

           {/* THE CENTRAL GLITCHING CMDB CORE (Shifted down 4%) */}
           <div className="absolute top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <TiltCard>
                <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-[#E74A33]/40 to-black border-2 border-[#E74A33] shadow-[0_0_50px_rgba(231,74,51,0.6)] flex items-center justify-center backdrop-blur-md z-30">
                   <div className="absolute inset-0 rounded-full animate-ping bg-[#E74A33] opacity-30"></div>
                   <DatabaseZap size={60} className="text-white drop-shadow-[0_0_15px_white]" />
                   <span className="absolute -bottom-8 w-36 text-center text-white font-black uppercase tracking-widest text-[11px] bg-black/60 px-2 py-1 rounded-full border border-white/20">Fragmented DB</span>
                </div>
              </TiltCard>
           </div>

           {/* ORBITING HUD NODE 1: Duplicate CIs (Shifted down 4%) */}
           <div className="absolute top-[12%] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center w-[220px]">
             <TiltCard>
               <div className="flex flex-col items-center hover:scale-110 transition-transform">
                 <div className="w-16 h-16 bg-black/40 backdrop-blur-md border border-[#E74A33]/60 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(231,74,51,0.4)] mb-2 relative">
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#E74A33] rounded-full animate-bounce"></div>
                    <Database size={30} className="text-[#E74A33]" />
                 </div>
                 <div className="bg-[#011425]/80 backdrop-blur border border-white/10 p-2 px-3 rounded-lg text-center w-full shadow-2xl">
                    <h4 className="text-white font-black text-sm tracking-wide">Duplicate CIs</h4>
                    <p className="text-[#5291dd] text-[10px] leading-tight mt-1">Lethal logic loops & overlapping data.</p>
                 </div>
               </div>
             </TiltCard>
           </div>

           {/* ORBITING HUD NODE 2: Stale CIs (Shifted down 4%) */}
           <div className="absolute top-[36%] right-[2%] z-20 flex flex-col items-center w-[200px]">
             <TiltCard>
               <div className="flex flex-col items-center hover:scale-110 transition-transform">
                 <div className="w-16 h-16 bg-black/40 backdrop-blur-md border border-[#EC9A1E]/60 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(236,154,30,0.4)] mb-2 relative">
                    <Ghost size={30} className="text-[#EC9A1E]" />
                 </div>
                 <div className="bg-[#011425]/80 backdrop-blur border border-white/10 p-2 px-3 rounded-lg text-center w-full shadow-2xl">
                    <h4 className="text-white font-black text-sm tracking-wide">Stale CIs</h4>
                    <p className="text-[#5291dd] text-[10px] leading-tight mt-1">Ghost servers inflating costs.</p>
                 </div>
               </div>
             </TiltCard>
           </div>

           {/* ORBITING HUD NODE 3: Orphaned Assets (Shifted down 4%) */}
           <div className="absolute bottom-[6%] right-[10%] z-20 flex flex-col items-center w-[200px]">
             <TiltCard>
               <div className="flex flex-col items-center hover:scale-110 transition-transform">
                 <div className="w-16 h-16 bg-black/40 backdrop-blur-md border border-[#E74A33]/60 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(231,74,51,0.4)] mb-2 relative">
                    <Server size={30} className="text-[#E74A33]" />
                    {/* Broken wire mini graphic */}
                    <div className="absolute -left-6 top-1/2 w-4 border-t-2 border-dashed border-[#E74A33]"></div>
                 </div>
                 <div className="bg-[#E74A33]/10 backdrop-blur border border-[#E74A33]/30 p-2 px-3 rounded-lg text-center w-full shadow-2xl">
                    <h4 className="text-[#E74A33] font-black text-sm tracking-wide">Orphaned Assets</h4>
                    <p className="text-blue-100/80 text-[10px] leading-tight mt-1">Physically disconnected from maps.</p>
                 </div>
               </div>
             </TiltCard>
           </div>

           {/* ORBITING HUD NODE 4: No Owners (Shifted down 4%) */}
           <div className="absolute bottom-[6%] left-[10%] z-20 flex flex-col items-center w-[200px]">
             <TiltCard>
               <div className="flex flex-col items-center hover:scale-110 transition-transform">
                 <div className="w-16 h-16 bg-black/40 backdrop-blur-md border border-[#E74A33]/60 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(231,74,51,0.4)] mb-2 relative">
                    <UserX size={30} className="text-[#E74A33]" />
                 </div>
                 <div className="bg-[#011425]/80 backdrop-blur border border-white/10 p-2 px-3 rounded-lg text-center w-full shadow-2xl">
                    <h4 className="text-white font-black text-sm tracking-wide">No Owners</h4>
                    <p className="text-[#5291dd] text-[10px] leading-tight mt-1">Zero accountability for nodes.</p>
                 </div>
               </div>
             </TiltCard>
           </div>

           {/* ORBITING HUD NODE 5: Broken Discovery (Shifted down 4%) */}
           <div className="absolute top-[36%] left-[2%] z-20 flex flex-col items-center w-[200px]">
             <TiltCard>
               <div className="flex flex-col items-center hover:scale-110 transition-transform">
                 <div className="w-16 h-16 bg-black/40 backdrop-blur-md border border-[#f7b516]/60 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(247,181,22,0.4)] mb-2 relative overflow-hidden">
                    <Activity size={30} className="text-[#f7b516] z-10" />
                    {/* Mini spinning radar */}
                    <div className="absolute inset-0 bg-transparent border-t border-[rgba(247,181,22,0.5)] animate-spin rounded-full"></div>
                 </div>
                 <div className="bg-[#011425]/80 backdrop-blur border border-white/10 p-2 px-3 rounded-lg text-center w-full shadow-2xl">
                    <h4 className="text-white font-black text-sm tracking-wide">Broken Scan</h4>
                    <p className="text-[#5291dd] text-[10px] leading-tight mt-1">Pipes failing from credential drops.</p>
                 </div>
               </div>
             </TiltCard>
           </div>

        </div>

        {/* RIGHT COLUMN: The Impact Cards (Stacked vertically for clarity) */}
        <div className="flex-1 flex flex-col justify-between gap-4 py-2">
          {/* Card 1 */}
          <TiltCard className="flex-1 min-h-0">
            <div className="h-full flex items-center gap-6 bg-white/60 dark:bg-[#023761]/40 backdrop-blur-2xl border-2 border-[#E74A33]/60 p-6 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.05),0_0_15px_rgba(231,74,51,0.1)] hover:bg-white/90 dark:hover:bg-[#023761]/60 transition-all duration-300 group hover:border-[#E74A33] hover:shadow-[0_15px_35px_rgba(0,0,0,0.05),0_0_20px_rgba(231,74,51,0.2)]">
               <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-[#E74A33]/10 to-[#EC9A1E]/5 flex items-center justify-center border border-[#E74A33]/30 group-hover:shadow-[0_0_25px_rgba(231,74,51,0.3)] transition-shadow">
                 <ServerCrash size={28} className="text-[#E74A33]" />
               </div>
               <div className="flex-1">
                  <h3 className="text-3xl font-black text-[#E74A33] tracking-tighter drop-shadow-sm mb-1 uppercase">Orphaned CIs</h3>
                  <p className="text-xs font-medium text-[#023761]/70 dark:text-slate-300 leading-tight">
                    Unmanaged endpoints inflating license costs and opening undocumented security vulnerabilities.
                  </p>
               </div>
            </div>
          </TiltCard>

          {/* Card 2 */}
          <TiltCard className="flex-1 min-h-0">
            <div className="h-full flex items-center gap-6 bg-white/60 dark:bg-[#023761]/40 backdrop-blur-2xl border-2 border-[#EC9A1E]/60 p-6 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.05),0_0_15px_rgba(236,154,30,0.1)] hover:bg-white/90 dark:hover:bg-[#023761]/60 transition-all duration-300 group hover:border-[#EC9A1E] hover:shadow-[0_15px_35px_rgba(0,0,0,0.05),0_0_20px_rgba(236,154,30,0.2)]">
               <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-[#EC9A1E]/10 to-[#f7b516]/5 flex items-center justify-center border border-[#EC9A1E]/30 group-hover:shadow-[0_0_25px_rgba(236,154,30,0.3)] transition-shadow">
                 <Unplug size={28} className="text-[#EC9A1E]" />
               </div>
               <div className="flex-1">
                  <h3 className="text-3xl font-black text-[#EC9A1E] tracking-tighter drop-shadow-sm mb-1 uppercase">Broken Maps</h3>
                  <p className="text-xs font-medium text-[#023761]/70 dark:text-slate-300 leading-tight">
                    Automated incident routing and change impact analysis immediately fail due to reality drift.
                  </p>
               </div>
            </div>
          </TiltCard>

          {/* Card 3 */}
          <TiltCard className="flex-1 min-h-0">
            <div className="h-full flex items-center gap-6 bg-white/60 dark:bg-[#023761]/40 backdrop-blur-2xl border-2 border-[#f7b516]/60 p-6 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.05),0_0_15px_rgba(247,181,22,0.1)] hover:bg-white/90 dark:hover:bg-[#023761]/60 transition-all duration-300 group hover:border-[#f7b516] hover:shadow-[0_15px_35px_rgba(0,0,0,0.05),0_0_20px_rgba(247,181,22,0.2)]">
               <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-[#f7b516]/10 to-[#E74A33]/5 flex items-center justify-center border border-[#f7b516]/30 group-hover:shadow-[0_0_25px_rgba(247,181,22,0.3)] transition-shadow">
                 <LayoutTemplate size={28} className="text-[#f7b516]" />
               </div>
               <div className="flex-1">
                  <h3 className="text-3xl font-black text-[#f7b516] tracking-tighter drop-shadow-sm mb-1 uppercase">Opex Bleed</h3>
                  <p className="text-xs font-medium text-[#023761]/70 dark:text-slate-300 leading-tight">
                    Critical engineering resources are perpetually diverted to manual reconciliation efforts.
                  </p>
               </div>
            </div>
          </TiltCard>

          {/* Card 4 - Duplicate & Stale CIs */}
          <TiltCard className="flex-1 min-h-0">
            <div className="h-full flex items-center gap-6 bg-white/60 dark:bg-[#023761]/40 backdrop-blur-2xl border-2 border-indigo-500/60 p-6 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.05),0_0_15px_rgba(99,102,241,0.1)] hover:bg-white/90 dark:hover:bg-[#023761]/60 transition-all duration-300 group hover:border-indigo-500 hover:shadow-[0_15px_35px_rgba(0,0,0,0.05),0_0_20px_rgba(99,102,241,0.2)]">
               <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-indigo-500/5 flex items-center justify-center border border-indigo-500/30 group-hover:shadow-[0_0_25px_rgba(99,102,241,0.3)] transition-shadow">
                 <Copy size={28} className="text-indigo-500" />
               </div>
               <div className="flex-1">
                  <h3 className="text-3xl font-black text-indigo-500 tracking-tighter drop-shadow-sm mb-1 uppercase">Duplicates & Stale</h3>
                  <p className="text-xs font-medium text-[#023761]/70 dark:text-slate-300 leading-tight">
                    Redundant and inactive records skewing license audits and creating phantom incident alerts.
                  </p>
               </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  )
}
