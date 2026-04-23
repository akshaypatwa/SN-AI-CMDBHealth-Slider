import {
  ShieldCheck, Zap, GitMerge, BarChart3, RefreshCw, Lock,
} from 'lucide-react'

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Zero-Touch Validation',
    description: 'Continuous CI verification and auditing without massive manual sprints.',
  },
  {
    icon: Zap,
    title: 'Real-Time Health Score',
    description: 'Live CMDB metrics and risk index continuously updated on every change event.',
  },
  {
    icon: GitMerge,
    title: 'Relationship Intelligence',
    description: 'Auto-mapping upstream and downstream CI dependencies instantly.',
  },
  {
    icon: BarChart3,
    title: 'Exec-Ready Reporting',
    description: 'Board-level dashboards with flawless drill-down root-cause insight trails.',
  },
  {
    icon: RefreshCw,
    title: 'Self-Healing Workflows',
    description: 'Automatically trigger dynamic remediation tasks upon immediate drift detection.',
  },
  {
    icon: Lock,
    title: 'Compliance Guardrails',
    description: 'Native SOX, ISO 27001, and NIST security policy checks rigidly baked in.',
  },
]

const BADGES = [
  { label: 'Health Score', value: '94.7%', delay: '0s' },
  { label: 'CIs Scanned', value: '48,291', delay: '0.8s' },
  { label: 'Drift Fixed', value: '1,203', delay: '1.6s' },
]

export default function Slide2ImpactBenefits() {
  return (
    <section className="w-full h-full p-10 flex flex-col justify-center items-center animate-slide-from-right overflow-hidden bg-transparent transition-colors duration-500">
      <div className="w-full max-w-[1400px] flex flex-col h-full justify-center">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-[#5291dd] dark:text-[#E74A33] font-extrabold mb-2">Why It Matters</p>
          <h2 className="text-5xl font-black text-slate-900 dark:text-white tracking-tight">Key Value Impact &amp; Benefits</h2>
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-0">
          {/* ── Left: Feature List ── */}
          <ul className="space-y-4 overflow-y-auto pr-4 pb-4">
            {FEATURES.map((f, i) => {
              const Icon = f.icon
              return (
                <li
                  key={f.title}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm dark:bg-[#0A101C]/60 hover:bg-gradient-to-r hover:from-[#5291dd]/10 hover:to-[#5291dd]/5 dark:hover:bg-[#111A2C] border border-white dark:border-slate-800 hover:border-[#5291dd]/30 dark:hover:border-[#E74A33]/50 shadow-md dark:shadow-md transition-all duration-300 cursor-default group"
                  style={{ animationDelay: `${i * 90}ms` }}
                >
                  {/* Bullet Node */}
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-[#5291dd]/5 dark:bg-[#E74A33]/10 border border-[#5291dd]/10 dark:border-[#E74A33]/40 text-[#5291dd] dark:text-[#E74A33] text-sm font-black group-hover:scale-110 transition-transform shadow-sm">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    <Icon size={24} className="text-[#5291dd] dark:text-[#E74A33] mt-0.5 flex-shrink-0 dark:group-hover:drop-shadow-[0_0_15px_rgba(232,88,15,0.8)] transition-all duration-300" />
                    <div>
                      <p className="text-lg font-black text-slate-900 dark:text-white leading-tight mb-1">{f.title}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{f.description}</p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>

          {/* ── Right: Holographic Card ── */}
          <div className="relative flex justify-center items-center h-full pb-6">
            {/* Radial glow behind card */}
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,106,158,0.15)0%,transparent_60%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(232,88,15,0.15)0%,transparent_60%)] blur-[60px] pointer-events-none" />

            {/* The metrics card */}
            <div className="relative w-full max-w-[500px] rounded-[2.5rem] overflow-hidden border border-white dark:border-[#E74A33]/40 bg-white/80 backdrop-blur-md dark:bg-[#02050B] shadow-[0_30px_60px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,1)] dark:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),0_0_0_1px_rgba(232,88,15,0.2)_inset,0_0_100px_rgba(232,88,15,0.1)] hover:scale-[1.02] transition-transform duration-700">
              
              {/* Scanline sweep */}
              <div
                className="absolute inset-x-0 h-24 pointer-events-none z-10 mix-blend-overlay dark:mix-blend-screen"
                style={{
                  background: 'linear-gradient(to bottom, transparent, rgba(0,106,158,0.1), transparent)',
                  animation: 'scanline 3s linear infinite',
                }}
              />

              {/* Card header */}
              <div className="px-8 pt-8 pb-5 border-b border-[#5291dd]/10 dark:border-[#E74A33]/20 bg-gradient-to-r from-[#5291dd]/50 to-[#5291dd]/10/50 dark:bg-[#0A111F] dark:bg-none">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#E74A33]/20 flex items-center justify-center border border-[#5291dd]/10 dark:border-[#E74A33]/50 shadow-sm dark:shadow-[0_0_20px_rgba(232,88,15,0.2)]">
                    <ShieldCheck size={24} className="text-[#E74A33] dark:text-[#E74A33]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#5291dd] dark:text-[#E74A33] font-extrabold mb-1">Live AI Status Tracking</p>
                    <p className="text-slate-900 dark:text-white font-black text-xl tracking-tight">CMDB Health Overview</p>
                  </div>
                </div>
              </div>

              {/* Metric area */}
              <div className="px-8 py-8">
                {/* Score gauge */}
                <div className="flex justify-center mb-8 relative">
                  <div className="relative w-48 h-48">
                    <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                      <circle cx="50" cy="50" r="40" fill="none" className="stroke-slate-200 dark:stroke-[rgba(232,88,15,0.08)]" strokeWidth="8" />
                      <circle
                        cx="50" cy="50" r="40" fill="none"
                        className="stroke-[#E74A33] dark:stroke-[#E74A33] drop-shadow-[0_0_10px_rgba(232,88,15,0.4)] dark:drop-shadow-[0_0_12px_#E8580F] transition-all duration-1000 ease-in-out"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="251.2"
                        strokeDashoffset="14"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-6xl font-black text-slate-900 dark:text-white tracking-tighter drop-shadow-sm dark:drop-shadow-lg">94.7</span>
                      <span className="text-xs text-[#5291dd] dark:text-[#E74A33] font-extrabold uppercase tracking-[0.3em] mt-1 bg-white/80 dark:bg-[#E74A33]/10 px-3 py-0.5 rounded-full border border-[#5291dd]/20 dark:border-[#E74A33]/20 shadow-sm">HEALTH</span>
                    </div>
                  </div>
                </div>

                {/* Floating metric badges */}
                <div className="flex justify-between gap-4">
                  {BADGES.map(b => (
                    <div
                      key={b.label}
                      className="flex-1 flex flex-col items-center gap-1.5 px-4 py-4 rounded-xl bg-white dark:bg-[#0B1322] border border-[#5291dd]/10 dark:border-slate-700 hover:border-[#5291dd]/40 dark:hover:border-[#E74A33]/60 dark:hover:bg-[#101A2D] transition-colors duration-300 shadow-md dark:shadow-lg"
                      style={{ animation: `float 6s ease-in-out infinite`, animationDelay: b.delay }}
                    >
                      <span className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">{b.value}</span>
                      <span className="text-[9px] uppercase tracking-[0.2em] text-[#5291dd] dark:text-[#E74A33]/80 font-bold text-center leading-tight">{b.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card footer status bar */}
              <div className="px-8 pb-8 pt-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0B1322]">
                <div className="flex items-center justify-between mb-2 text-xs">
                  <span className="font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Enterprise Coverage</span>
                  <span className="text-[#5291dd] dark:text-[#E74A33] font-black text-base">96.2%</span>
                </div>
                <div className="h-2 bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden border border-slate-300/50 dark:border-slate-700/50 shadow-inner">
                  <div className="h-full w-[96%] bg-gradient-to-r from-[#E74A33] via-[#5291dd] to-[#5291dd]/50 dark:from-[#5291dd] dark:via-[#E74A33] dark:to-[#5291dd] rounded-full shadow-[0_0_10px_rgba(232,88,15,0.5)] dark:shadow-[0_0_15px_#E8580F]" />
                </div>
                <div className="flex items-center gap-2 mt-4 justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E74A33] dark:bg-[#E74A33] animate-pulse shadow-[0_0_8px_rgba(232,88,15,0.6)] dark:shadow-[0_0_8px_#E8580F]" />
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wide">Actively Scanning 48,291 CIs &nbsp;—&nbsp; Last sync: <span className="text-slate-700 dark:text-white font-mono">2 min ago</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
