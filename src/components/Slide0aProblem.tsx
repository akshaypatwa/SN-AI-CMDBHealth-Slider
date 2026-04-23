import { AlertTriangle, ServerCrash, Unplug, DatabaseZap, Activity, LayoutTemplate, Database, Server, Link2Off, CheckCircle2, Ghost, UserX } from 'lucide-react'

export default function Slide0aProblem() {
  return (
    <section className="w-full h-full p-12 flex flex-col animate-slide-from-bottom overflow-hidden bg-transparent pointer-events-auto">
      
      {/* Explicit Core Problem Heading - Massive and Centered vertically locally */}
      <div className="w-full max-w-[1500px] mx-auto mb-10 flex items-center justify-between z-20">
        <div>
           <h2 className="text-6xl font-black text-[#E74A33] tracking-tighter drop-shadow-sm mb-2">
             The Core Problem
           </h2>
           <h3 className="text-3xl font-extrabold text-[#023761] dark:text-white tracking-tight drop-shadow-sm opacity-90">
             A Fragmented, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E74A33] to-[#EC9A1E]">Decaying CMDB</span>
           </h3>
        </div>
        {/* Right text intentionally removed out of the way of the watermark */}
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
              <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-[#E74A33]/40 to-black border-2 border-[#E74A33] shadow-[0_0_50px_rgba(231,74,51,0.6)] flex items-center justify-center backdrop-blur-md group hover:scale-110 transition-transform">
                 <div className="absolute inset-0 rounded-full animate-ping bg-[#E74A33] opacity-30"></div>
                 <DatabaseZap size={60} className="text-white drop-shadow-[0_0_15px_white]" />
                 <span className="absolute -bottom-8 w-36 text-center text-white font-black uppercase tracking-widest text-[11px] bg-black/60 px-2 py-1 rounded-full border border-white/20">Fragmented DB</span>
              </div>
           </div>

           {/* ORBITING HUD NODE 1: Duplicate CIs (Shifted down 4%) */}
           <div className="absolute top-[12%] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center hover:scale-110 transition-transform w-[220px]">
              <div className="w-16 h-16 bg-black/40 backdrop-blur-md border border-[#E74A33]/60 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(231,74,51,0.4)] mb-2 relative">
                 <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#E74A33] rounded-full animate-bounce"></div>
                 <Database size={30} className="text-[#E74A33]" />
              </div>
              <div className="bg-[#011425]/80 backdrop-blur border border-white/10 p-2 px-3 rounded-lg text-center w-full shadow-2xl">
                 <h4 className="text-white font-black text-sm tracking-wide">Duplicate CIs</h4>
                 <p className="text-[#5291dd] text-[10px] leading-tight mt-1">Lethal logic loops & overlapping data.</p>
              </div>
           </div>

           {/* ORBITING HUD NODE 2: Stale CIs (Shifted down 4%) */}
           <div className="absolute top-[36%] right-[2%] z-20 flex flex-col items-center hover:scale-110 transition-transform w-[200px]">
              <div className="w-16 h-16 bg-black/40 backdrop-blur-md border border-[#EC9A1E]/60 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(236,154,30,0.4)] mb-2 relative">
                 <Ghost size={30} className="text-[#EC9A1E]" />
              </div>
              <div className="bg-[#011425]/80 backdrop-blur border border-white/10 p-2 px-3 rounded-lg text-center w-full shadow-2xl">
                 <h4 className="text-white font-black text-sm tracking-wide">Stale CIs</h4>
                 <p className="text-[#5291dd] text-[10px] leading-tight mt-1">Ghost servers inflating costs.</p>
              </div>
           </div>

           {/* ORBITING HUD NODE 3: Orphaned Assets (Shifted down 4%) */}
           <div className="absolute bottom-[6%] right-[10%] z-20 flex flex-col items-center hover:scale-110 transition-transform w-[200px]">
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

           {/* ORBITING HUD NODE 4: No Owners (Shifted down 4%) */}
           <div className="absolute bottom-[6%] left-[10%] z-20 flex flex-col items-center hover:scale-110 transition-transform w-[200px]">
              <div className="w-16 h-16 bg-black/40 backdrop-blur-md border border-[#E74A33]/60 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(231,74,51,0.4)] mb-2 relative">
                 <UserX size={30} className="text-[#E74A33]" />
              </div>
              <div className="bg-[#011425]/80 backdrop-blur border border-white/10 p-2 px-3 rounded-lg text-center w-full shadow-2xl">
                 <h4 className="text-white font-black text-sm tracking-wide">No Owners</h4>
                 <p className="text-[#5291dd] text-[10px] leading-tight mt-1">Zero accountability for nodes.</p>
              </div>
           </div>

           {/* ORBITING HUD NODE 5: Broken Discovery (Shifted down 4%) */}
           <div className="absolute top-[36%] left-[2%] z-20 flex flex-col items-center hover:scale-110 transition-transform w-[200px]">
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

        </div>

        {/* RIGHT COLUMN: The Impact Cards (Stacked horizontally) */}
        <div className="flex-1 flex flex-col justify-between gap-6">
          
          {/* Card 1 */}
          <div className="flex items-center gap-6 bg-white/60 dark:bg-[#023761]/40 backdrop-blur-2xl border border-white/50 dark:border-[#5291dd]/20 p-6 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.05)] hover:bg-white/90 dark:hover:bg-[#023761]/60 transition-all duration-300 group hover:border-[#E74A33]/40">
             <div className="w-20 h-20 shrink-0 rounded-2xl bg-gradient-to-br from-[#E74A33]/10 to-[#EC9A1E]/5 flex items-center justify-center border border-[#E74A33]/30 group-hover:shadow-[0_0_25px_rgba(231,74,51,0.2)] transition-shadow">
               <ServerCrash size={32} className="text-[#E74A33]" />
             </div>
             <div className="flex-1">
                <div className="flex items-end gap-3 mb-1">
                   <h3 className="text-4xl font-black text-[#E74A33] tracking-tighter drop-shadow-sm">4.2M+</h3>
                   <span className="text-[10px] uppercase font-black tracking-widest text-[#023761]/50 dark:text-[#5291dd] pb-1.5">Ghost Assets</span>
                </div>
                <h4 className="text-lg font-bold text-[#023761] dark:text-white mb-2">Orphaned CIs</h4>
                <p className="text-sm font-medium text-[#023761]/70 dark:text-slate-300 leading-snug">
                  Unmanaged endpoints inflating license costs and opening undocumented security vulnerabilities.
                </p>
             </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-6 bg-white/60 dark:bg-[#023761]/40 backdrop-blur-2xl border border-white/50 dark:border-[#5291dd]/20 p-6 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.05)] hover:bg-white/90 dark:hover:bg-[#023761]/60 transition-all duration-300 group hover:border-[#EC9A1E]/40">
             <div className="w-20 h-20 shrink-0 rounded-2xl bg-gradient-to-br from-[#EC9A1E]/10 to-[#f7b516]/5 flex items-center justify-center border border-[#EC9A1E]/30 group-hover:shadow-[0_0_25px_rgba(236,154,30,0.2)] transition-shadow">
               <Unplug size={32} className="text-[#EC9A1E]" />
             </div>
             <div className="flex-1">
                <div className="flex items-end gap-3 mb-1">
                   <h3 className="text-4xl font-black text-[#EC9A1E] tracking-tighter drop-shadow-sm">15k+</h3>
                   <span className="text-[10px] uppercase font-black tracking-widest text-[#023761]/50 dark:text-[#5291dd] pb-1.5">Map Failures</span>
                </div>
                <h4 className="text-lg font-bold text-[#023761] dark:text-white mb-2">Broken Relationships</h4>
                <p className="text-sm font-medium text-[#023761]/70 dark:text-slate-300 leading-snug">
                  Automated incident routing and change impact analysis immediately fail due to massive reality drift.
                </p>
             </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center gap-6 bg-white/60 dark:bg-[#023761]/40 backdrop-blur-2xl border border-white/50 dark:border-[#5291dd]/20 p-6 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.05)] hover:bg-white/90 dark:hover:bg-[#023761]/60 transition-all duration-300 group hover:border-[#f7b516]/40">
             <div className="w-20 h-20 shrink-0 rounded-2xl bg-gradient-to-br from-[#f7b516]/10 to-[#E74A33]/5 flex items-center justify-center border border-[#f7b516]/30 group-hover:shadow-[0_0_25px_rgba(247,181,22,0.2)] transition-shadow">
               <LayoutTemplate size={32} className="text-[#f7b516]" />
             </div>
             <div className="flex-1">
                <div className="flex items-end gap-3 mb-1">
                   <h3 className="text-4xl font-black text-[#E74A33] tracking-tighter drop-shadow-sm">$2.3M</h3>
                   <span className="text-[10px] uppercase font-black tracking-widest text-[#023761]/50 dark:text-[#5291dd] pb-1.5">Opex Bleed</span>
                </div>
                <h4 className="text-lg font-bold text-[#023761] dark:text-white mb-2">Lost Value & Time</h4>
                <p className="text-sm font-medium text-[#023761]/70 dark:text-slate-300 leading-snug">
                  Thousands of critical engineering hours eternally wasted on manual, reactionary reconciliation.
                </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  )
}
