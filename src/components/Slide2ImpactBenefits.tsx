import {
  ShieldCheck, Zap, GitMerge, BarChart3, RefreshCw, Lock,
} from 'lucide-react'

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Zero-Touch Validation',
    description: 'Continuous CI verification without manual audits.',
  },
  {
    icon: Zap,
    title: 'Real-Time Health Score',
    description: 'Live CMDB health index updated on every change event.',
  },
  {
    icon: GitMerge,
    title: 'Relationship Intelligence',
    description: 'Auto-map upstream / downstream CI dependencies.',
  },
  {
    icon: BarChart3,
    title: 'Exec-Ready Reporting',
    description: 'Board-level dashboards with drill-down root-cause trails.',
  },
  {
    icon: RefreshCw,
    title: 'Self-Healing Workflows',
    description: 'Trigger remediation tasks automatically on drift detection.',
  },
  {
    icon: Lock,
    title: 'Compliance Guardrails',
    description: 'SOX, ISO 27001 & NIST policy checks baked in.',
  },
]

const BADGES = [
  { label: 'Health Score', value: '94.7%', delay: '0s' },
  { label: 'CIs Scanned', value: '48,291', delay: '0.8s' },
  { label: 'Drift Fixed', value: '1,203', delay: '1.6s' },
]

export default function Slide2ImpactBenefits() {
  return (
    <section className="w-full h-full p-12 flex flex-col items-center justify-center animate-slide-from-right">
      <div className="w-full max-w-6xl">
      {/* Heading */}
      <div className="text-center mb-8">
        <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">Why It Matters</p>
        <h2 className="text-4xl font-bold text-white">Impact &amp; Benefits</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* ── Left: Feature List ── */}
        <ul className="space-y-4">
          {FEATURES.map((f, i) => {
            const Icon = f.icon
            return (
              <li
                key={f.title}
                className="flex items-start gap-4 p-4 rounded-2xl glass-panel hover:border-emerald-500/30 transition-all duration-200 cursor-default group"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {/* Bullet / number */}
                <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <Icon size={17} className="text-emerald-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <div>
                    <p className="text-sm font-semibold text-white leading-tight">{f.title}</p>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{f.description}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>

        {/* ── Right: Holographic Card ── */}
        <div className="relative flex justify-center items-center">
          {/* Radial glow behind card */}
          <div className="absolute inset-0 rounded-3xl bg-radial-[at_50%_50%] from-emerald-500/20 via-transparent to-transparent blur-2xl pointer-events-none" />

          {/* The card */}
          <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border border-emerald-500/30 bg-[#020617] shadow-[0_30px_60px_-10px_rgba(0,0,0,0.8),0_0_0_1px_rgba(16,185,129,0.1)]">
            {/* Scanline sweep */}
            <div
              className="absolute inset-x-0 h-16 pointer-events-none z-10"
              style={{
                background: 'linear-gradient(to bottom, transparent, rgba(16,185,129,0.06), transparent)',
                animation: 'scanline 2s linear infinite',
              }}
            />

            {/* Card header */}
            <div className="px-6 pt-6 pb-4 border-b border-emerald-500/20">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center border border-emerald-500/30">
                  <ShieldCheck size={16} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-emerald-400 font-semibold">Live Status</p>
                  <p className="text-white font-semibold text-sm">CMDB Health Overview</p>
                </div>
              </div>
            </div>

            {/* Metric area */}
            <div className="px-6 py-6">
              {/* Big score gauge */}
              <div className="flex justify-center mb-6">
                <div className="relative w-28 h-28">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(16,185,129,0.12)" strokeWidth="10" />
                    <circle
                      cx="50" cy="50" r="40" fill="none"
                      stroke="#10b981" strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray="251.2"
                      strokeDashoffset="14"
                      className="drop-shadow-[0_0_6px_#10b981]"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-white">94.7</span>
                    <span className="text-[10px] text-emerald-400 font-semibold">HEALTH</span>
                  </div>
                </div>
              </div>

              {/* Floating metric badges */}
              <div className="flex justify-around">
                {BADGES.map(b => (
                  <div
                    key={b.label}
                    className="flex flex-col items-center gap-1 px-3 py-2.5 rounded-xl bg-slate-800/60 border border-slate-600/40 hover:border-emerald-500/40 transition-colors duration-200"
                    style={{ animation: `float 6s ease-in-out infinite`, animationDelay: b.delay }}
                  >
                    <span className="text-base font-bold text-white">{b.value}</span>
                    <span className="text-[9px] uppercase tracking-widest text-slate-400">{b.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card footer status bar */}
            <div className="px-6 pb-5">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] text-slate-400">Overall Coverage</span>
                <span className="text-[10px] text-emerald-400 font-semibold">96.2%</span>
              </div>
              <div className="h-1.5 bg-slate-700/60 rounded-full overflow-hidden">
                <div className="h-full w-[96%] bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full shadow-[0_0_8px_#10b981]" />
              </div>
              <div className="flex items-center gap-1.5 mt-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] text-slate-400">Scanning 48,291 CIs — Last sync 2 min ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
