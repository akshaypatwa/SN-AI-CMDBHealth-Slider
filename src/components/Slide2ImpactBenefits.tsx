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
    <section className="w-full h-full p-10 flex flex-col justify-center items-center animate-slide-from-right overflow-hidden bg-[#F9FAFB] dark:bg-transparent transition-colors duration-500">
      <div className="w-full max-w-[1400px] flex flex-col h-full justify-center">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400 font-extrabold mb-2">Why It Matters</p>
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
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-[#0A101C]/60 hover:bg-slate-50 dark:hover:bg-[#111A2C] border border-slate-200 dark:border-slate-800 hover:border-emerald-200 dark:hover:border-emerald-500/50 shadow-sm dark:shadow-md transition-all duration-300 cursor-default group"
                  style={{ animationDelay: `${i * 90}ms` }}
                >
                  {/* Bullet Node */}
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border-2 border-emerald-100 dark:border-emerald-500/40 text-emerald-600 dark:text-emerald-400 text-sm font-black group-hover:scale-110 transition-transform">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    <Icon size={24} className="text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0 dark:group-hover:drop-shadow-[0_0_15px_rgba(16,185,129,0.8)] transition-all duration-300" />
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
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08)0%,transparent_60%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15)0%,transparent_60%)] blur-[60px] pointer-events-none" />

            {/* The metrics card */}
            <div className="relative w-full max-w-[500px] rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-emerald-500/40 bg-white dark:bg-[#02050B] shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),0_0_0_1px_rgba(16,185,129,0.2)_inset,0_0_100px_rgba(16,185,129,0.1)] hover:scale-[1.02] transition-transform duration-700">
              
              {/* Scanline sweep */}
              <div
                className="absolute inset-x-0 h-24 pointer-events-none z-10 mix-blend-overlay dark:mix-blend-screen"
                style={{
                  background: 'linear-gradient(to bottom, transparent, rgba(16,185,129,0.1), transparent)',
                  animation: 'scanline 3s linear infinite',
                }}
              />

              {/* Card header */}
              <div className="px-8 pt-8 pb-5 border-b border-slate-100 dark:border-emerald-500/20 bg-slate-50/50 dark:bg-[#0A111F]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/20 flex items-center justify-center border border-emerald-100 dark:border-emerald-500/50 dark:shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    <ShieldCheck size={24} className="text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400 font-extrabold mb-1">Live AI Status Tracking</p>
                    <p className="text-slate-900 dark:text-white font-black text-xl tracking-tight">CMDB Health Overview</p>
                  </div>
                </div>
              </div>

              {/* Metric area */}
              <div className="px-8 py-8 bg-white dark:bg-[#02050B]">
                {/* Score gauge */}
                <div className="flex justify-center mb-8 relative">
                  <div className="relative w-48 h-48">
                    <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                      <circle cx="50" cy="50" r="40" fill="none" className="stroke-slate-100 dark:stroke-[rgba(16,185,129,0.08)]" strokeWidth="8" />
                      <circle
                        cx="50" cy="50" r="40" fill="none"
                        className="stroke-emerald-500 dark:stroke-[#10b981] drop-shadow-[0_0_6px_rgba(16,185,129,0.3)] dark:drop-shadow-[0_0_12px_#10b981] transition-all duration-1000 ease-in-out"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="251.2"
                        strokeDashoffset="14"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-6xl font-black text-slate-900 dark:text-white tracking-tighter drop-shadow-sm dark:drop-shadow-lg">94.7</span>
                      <span className="text-xs text-emerald-600 dark:text-emerald-400 font-extrabold uppercase tracking-[0.3em] mt-1 bg-emerald-50 dark:bg-emerald-500/10 px-3 py-0.5 rounded-full border border-emerald-100 dark:border-emerald-500/20">HEALTH</span>
                    </div>
                  </div>
                </div>

                {/* Floating metric badges */}
                <div className="flex justify-between gap-4">
                  {BADGES.map(b => (
                    <div
                      key={b.label}
                      className="flex-1 flex flex-col items-center gap-1.5 px-4 py-4 rounded-xl bg-slate-50 dark:bg-[#0B1322] border border-slate-100 dark:border-slate-700 hover:border-emerald-200 dark:hover:border-emerald-500/60 dark:hover:bg-[#101A2D] transition-colors duration-300 shadow-sm dark:shadow-lg"
                      style={{ animation: `float 6s ease-in-out infinite`, animationDelay: b.delay }}
                    >
                      <span className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">{b.value}</span>
                      <span className="text-[9px] uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-500/80 font-bold text-center leading-tight">{b.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card footer status bar */}
              <div className="px-8 pb-8 bg-slate-50 dark:bg-[#0B1322] pt-6 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between mb-2 text-xs">
                  <span className="font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Enterprise Coverage</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-black text-base">96.2%</span>
                </div>
                <div className="h-2 bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden border border-slate-300/50 dark:border-slate-700/50 shadow-inner">
                  <div className="h-full w-[96%] bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 dark:from-emerald-600 dark:via-emerald-400 dark:to-cyan-400 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)] dark:shadow-[0_0_15px_#10b981]" />
                </div>
                <div className="flex items-center gap-2 mt-4 justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse shadow-[0_0_4px_rgba(16,185,129,0.5)] dark:shadow-[0_0_8px_#10b981]" />
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
