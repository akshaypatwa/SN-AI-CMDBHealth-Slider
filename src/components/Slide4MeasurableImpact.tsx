interface StatCardProps {
  value: string
  label: string
  description: string
  sparkline: number[]
  accent: 'emerald' | 'teal' | 'indigo' | 'violet'
  delay?: string
}

const accentMap: Record<string, { text: string; bar: string; glow: string; border: string; bg: string }> = {
  emerald: { text: 'text-emerald-400', bar: 'bg-emerald-500', glow: 'group-hover:shadow-[0_0_40px_rgba(16,185,129,0.25)]', border: 'group-hover:border-emerald-500/50', bg: 'bg-emerald-500/10' },
  teal:    { text: 'text-teal-400',    bar: 'bg-teal-500',    glow: 'group-hover:shadow-[0_0_40px_rgba(20,184,166,0.25)]',  border: 'group-hover:border-teal-500/50',    bg: 'bg-teal-500/10' },
  indigo:  { text: 'text-indigo-400',  bar: 'bg-indigo-500',  glow: 'group-hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]',  border: 'group-hover:border-indigo-500/50',  bg: 'bg-indigo-500/10' },
  violet:  { text: 'text-violet-400',  bar: 'bg-violet-500',  glow: 'group-hover:shadow-[0_0_40px_rgba(139,92,246,0.25)]',  border: 'group-hover:border-violet-500/50',  bg: 'bg-violet-500/10' },
}

function StatCard({ value, label, description, sparkline, accent, delay = '0ms' }: StatCardProps) {
  const a = accentMap[accent]
  const max = Math.max(...sparkline)

  return (
    <div
      className={`group relative rounded-[2.5rem] p-10 bg-[#0A101C]/80 backdrop-blur-xl border border-slate-800 transition-all duration-500 cursor-default
        ${a.glow} ${a.border} hover:-translate-y-3 hover:bg-[#0D1524]
        shadow-[0_20px_40px_rgba(0,0,0,0.5)]`}
      style={{ animationDelay: delay }}
    >
      {/* Accent dot */}
      <div className={`absolute top-8 right-8 w-4 h-4 rounded-full ${a.bar} opacity-40 group-hover:opacity-100 group-hover:shadow-[0_0_15px_${a.bar}] transition-all duration-300`} />

      {/* Main Metric Value - HUGE */}
      <p className={`text-[5.5rem] font-black ${a.text} leading-none mb-4 tracking-tighter drop-shadow-xl`}>{value}</p>
      
      {/* Label and description */}
      <p className="text-white font-extrabold text-2xl mb-3">{label}</p>
      <p className="text-slate-400 text-lg leading-relaxed mb-8 h-20">{description}</p>

      {/* Sparkline Graph */}
      <div className="flex items-end gap-1.5 h-24 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
        {sparkline.map((v, i) => (
          <div
            key={i}
            className={`flex-1 rounded-sm ${a.bar} transition-all duration-700 ease-out`}
            style={{ height: `${(v / max) * 100}%`, minHeight: '6px' }}
          />
        ))}
      </div>
      <div className="flex justify-between mt-3 text-sm font-bold uppercase tracking-wider text-slate-600">
        <span>6 months ago</span>
        <span className={`${a.text} opacity-0 group-hover:opacity-100 transition-opacity delay-100`}>Now</span>
      </div>
    </div>
  )
}

const STATS: StatCardProps[] = [
  {
    value: '94.7%',
    label: 'CMDB Health Score',
    description: 'Up massively from 61% before automation deployment. AI continuously monitors & self-corrects.',
    sparkline: [38, 44, 51, 58, 68, 75, 81, 87, 91, 94],
    accent: 'emerald',
    delay: '0ms',
  },
  {
    value: '73%',
    label: 'Fewer Incident Bridges',
    description: 'Critical P1/P2 incidents linked strictly to stale CI data reduced by nearly three-quarters.',
    sparkline: [100, 95, 88, 80, 72, 64, 55, 46, 36, 27],
    accent: 'teal',
    delay: '100ms',
  },
  {
    value: '8.4×',
    label: 'Faster Remediation',
    description: 'Average CI fix-time radically dropped from 4.2 days to under 12 hours via auto-routing.',
    sparkline: [20, 30, 40, 55, 70, 90, 110, 130, 155, 168],
    accent: 'indigo',
    delay: '200ms',
  },
  {
    value: '$2.1M',
    label: 'Opex Savings',
    description: 'Completely eliminated manual audit sprints and heavily minimized change-failure costs annually.',
    sparkline: [80, 160, 290, 440, 620, 840, 1100, 1440, 1780, 2100],
    accent: 'violet',
    delay: '300ms',
  },
]

export default function Slide4MeasurableImpact() {
  return (
    <section className="w-full h-full p-20 flex flex-col justify-center animate-slide-from-right relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="w-full max-w-[1700px] mx-auto z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-base uppercase tracking-[0.3em] text-emerald-400 font-extrabold mb-4">Proven Enterprise Results</p>
          <h2 className="text-7xl font-black text-white tracking-tight drop-shadow-md">Measurable Impact</h2>
          <p className="mt-6 text-slate-300 font-medium text-xl max-w-2xl mx-auto leading-relaxed">
            Real outcomes from massive enterprise deployments generated across Fortune 500 IT operations environments.
          </p>
        </div>

        {/* 2×2 grid (now 1x4 horizontal because it's so wide) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {STATS.map(s => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 flex justify-center">
            <p className="text-center text-sm font-bold tracking-widest uppercase text-slate-500 bg-slate-800/50 px-6 py-3 rounded-full border border-slate-700/50">
              Validated using aggregated CMDB analytics data · 2024–2025
            </p>
        </div>
      </div>
    </section>
  )
}
