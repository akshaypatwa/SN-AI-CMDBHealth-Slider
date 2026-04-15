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
    <section className="w-full h-full p-20 flex flex-col justify-center items-center animate-slide-from-right">
      <div className="w-full max-w-[1700px] flex flex-col h-full">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-base uppercase tracking-[0.3em] text-emerald-400 font-extrabold mb-4">Why It Matters</p>
          <h2 className="text-7xl font-black text-white tracking-tight">Key Value Impact &amp; Benefits</h2>
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* ── Left: Feature List ── */}
          <ul className="space-y-6">
            {FEATURES.map((f, i) => {
              const Icon = f.icon
              return (
                <li
                  key={f.title}
                  className="flex items-start gap-6 p-6 rounded-[2rem] bg-[#0A101C]/60 hover:bg-[#111A2C] border border-slate-800 hover:border-emerald-500/50 shadow-lg transition-all duration-300 cursor-default group"
                  style={{ animationDelay: `${i * 90}ms` }}
                >
                  {/* Big Bullet Node */}
                  <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-emerald-500/10 border-2 border-emerald-500/40 text-emerald-400 text-lg font-black group-hover:scale-110 transition-transform">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex items-start gap-5 flex-1 min-w-0">
                    <Icon size={28} className="text-emerald-400 mt-1 flex-shrink-0 group-hover:drop-shadow-[0_0_15px_rgba(16,185,129,0.8)] transition-all duration-300" />
                    <div>
                      <p className="text-2xl font-black text-white leading-tight mb-2">{f.title}</p>
                      <p className="text-lg text-slate-400 leading-relaxed font-medium">{f.description}</p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>

          {/* ── Right: Massive Holographic Card ── */}
          <div className="relative flex justify-center items-center h-full">
            {/* Radial glow behind card */}
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15)0%,transparent_60%)] blur-[80px] pointer-events-none" />

            {/* The giant metrics card */}
            <div className="relative w-full max-w-[650px] rounded-[3rem] overflow-hidden border border-emerald-500/40 bg-[#02050B] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.9),0_0_0_1px_rgba(16,185,129,0.2)_inset,0_0_150px_rgba(16,185,129,0.1)] hover:scale-[1.02] transition-transform duration-700">
              
              {/* Scanline sweep */}
              <div
                className="absolute inset-x-0 h-32 pointer-events-none z-10 mix-blend-screen"
                style={{
                  background: 'linear-gradient(to bottom, transparent, rgba(16,185,129,0.15), transparent)',
                  animation: 'scanline 3s linear infinite',
                }}
              />

              {/* Massive Card header */}
              <div className="px-10 pt-10 pb-6 border-b border-emerald-500/20 bg-[#0A111F]">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center border border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                    <ShieldCheck size={32} className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-emerald-400 font-extrabold mb-1">Live AI Status Tracking</p>
                    <p className="text-white font-black text-2xl tracking-tight">CMDB Health Overview</p>
                  </div>
                </div>
              </div>

              {/* Metric area */}
              <div className="px-12 py-12 bg-[#02050B]">
                {/* Gargantuan score gauge */}
                <div className="flex justify-center mb-12 relative">
                  <div className="relative w-64 h-64">
                    <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(16,185,129,0.08)" strokeWidth="8" />
                      <circle
                        cx="50" cy="50" r="40" fill="none"
                        stroke="#10b981" strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="251.2"
                        strokeDashoffset="14"
                        className="drop-shadow-[0_0_15px_#10b981] transition-all duration-1000 ease-in-out"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-7xl font-black text-white tracking-tighter drop-shadow-lg">94.7</span>
                      <span className="text-sm text-emerald-400 font-extrabold uppercase tracking-[0.3em] mt-2 bg-emerald-500/10 px-4 py-1 rounded-full border border-emerald-500/20">HEALTH</span>
                    </div>
                  </div>
                </div>

                {/* Floating metric badges */}
                <div className="flex justify-between gap-6">
                  {BADGES.map(b => (
                    <div
                      key={b.label}
                      className="flex-1 flex flex-col items-center gap-2 px-6 py-6 rounded-2xl bg-[#0B1322] border border-slate-700 hover:border-emerald-500/60 hover:bg-[#101A2D] transition-colors duration-300 shadow-xl"
                      style={{ animation: `float 6s ease-in-out infinite`, animationDelay: b.delay }}
                    >
                      <span className="text-3xl font-black text-white tracking-tight">{b.value}</span>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-emerald-500/80 font-bold text-center leading-tight">{b.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card footer status bar */}
              <div className="px-12 pb-10 bg-[#0B1322] pt-8 border-t border-slate-800">
                <div className="flex items-center justify-between mb-3 text-sm">
                  <span className="font-bold text-slate-400 uppercase tracking-wider">Enterprise Coverage</span>
                  <span className="text-emerald-400 font-black text-lg">96.2%</span>
                </div>
                <div className="h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-700/50 shadow-inner">
                  <div className="h-full w-[96%] bg-gradient-to-r from-emerald-600 via-emerald-400 to-cyan-400 rounded-full shadow-[0_0_20px_#10b981]" />
                </div>
                <div className="flex items-center gap-3 mt-6 justify-center">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#10b981]" />
                  <span className="text-sm font-bold text-slate-400 tracking-wide">Actively Scanning 48,291 CIs &nbsp;—&nbsp; Last sync: <span className="text-white font-mono">2 min ago</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
