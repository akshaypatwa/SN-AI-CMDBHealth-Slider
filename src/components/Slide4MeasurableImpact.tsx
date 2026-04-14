interface StatCardProps {
  value: string
  label: string
  description: string
  sparkline: number[]
  accent: 'emerald' | 'teal' | 'indigo' | 'violet'
  delay?: string
}

const accentMap: Record<string, { text: string; bar: string; glow: string; border: string; bg: string }> = {
  emerald: { text: 'text-emerald-400', bar: 'bg-emerald-500', glow: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]',  border: 'group-hover:border-emerald-500/40', bg: 'bg-emerald-500/10'  },
  teal:    { text: 'text-teal-400',    bar: 'bg-teal-500',    glow: 'group-hover:shadow-[0_0_30px_rgba(20,184,166,0.2)]',   border: 'group-hover:border-teal-500/40',    bg: 'bg-teal-500/10'    },
  indigo:  { text: 'text-indigo-400',  bar: 'bg-indigo-500',  glow: 'group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]',   border: 'group-hover:border-indigo-500/40',  bg: 'bg-indigo-500/10'  },
  violet:  { text: 'text-violet-400',  bar: 'bg-violet-500',  glow: 'group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]',   border: 'group-hover:border-violet-500/40',  bg: 'bg-violet-500/10'  },
}

function StatCard({ value, label, description, sparkline, accent, delay = '0ms' }: StatCardProps) {
  const a = accentMap[accent]
  const max = Math.max(...sparkline)

  return (
    <div
      className={`group relative rounded-2xl p-6 glass-panel transition-all duration-300 cursor-default
        ${a.glow} ${a.border} hover:-translate-y-2 hover:border-opacity-100
        shadow-[0_4px_20px_rgba(0,0,0,0.4)]`}
      style={{ animationDelay: delay }}
    >
      {/* Accent dot */}
      <div className={`absolute top-4 right-4 w-2 h-2 rounded-full ${a.bar} opacity-60 group-hover:opacity-100 transition-opacity`} />

      {/* Value */}
      <p className={`text-4xl font-extrabold ${a.text} leading-none mb-1 tracking-tight`}>{value}</p>
      <p className="text-white font-semibold text-base mb-1">{label}</p>
      <p className="text-slate-400 text-xs leading-relaxed mb-5">{description}</p>

      {/* Sparkline */}
      <div className="flex items-end gap-1 h-10 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
        {sparkline.map((v, i) => (
          <div
            key={i}
            className={`flex-1 rounded-sm ${a.bar} transition-all duration-500`}
            style={{ height: `${(v / max) * 100}%`, minHeight: '4px' }}
          />
        ))}
      </div>
      <div className="flex justify-between mt-1">
        <span className="text-[9px] text-slate-600">6 months ago</span>
        <span className="text-[9px] text-slate-600">Now</span>
      </div>
    </div>
  )
}

const STATS: StatCardProps[] = [
  {
    value: '94.7%',
    label: 'CMDB Health Score',
    description: 'Up from 61% before deployment. AI continuously monitors & self-corrects.',
    sparkline: [38, 44, 51, 58, 68, 75, 81, 87, 91, 94],
    accent: 'emerald',
    delay: '0ms',
  },
  {
    value: '73%',
    label: 'Fewer Incident Bridges',
    description: 'P1/P2 incidents linked to stale CI data reduced by nearly three-quarters.',
    sparkline: [100, 95, 88, 80, 72, 64, 55, 46, 36, 27],
    accent: 'teal',
    delay: '80ms',
  },
  {
    value: '8.4×',
    label: 'Faster Remediation',
    description: 'Average fix time dropped from 4.2 days to 12 hours with auto-routing.',
    sparkline: [20, 30, 40, 55, 70, 90, 110, 130, 155, 168],
    accent: 'indigo',
    delay: '160ms',
  },
  {
    value: '$2.1M',
    label: 'Annual Cost Avoidance',
    description: 'Eliminated manual audit sprints and reduced change-failure costs.',
    sparkline: [80, 160, 290, 440, 620, 840, 1100, 1440, 1780, 2100],
    accent: 'violet',
    delay: '240ms',
  },
]

export default function Slide4MeasurableImpact() {
  return (
    <section className="w-full h-full p-12 flex flex-col items-center justify-center animate-slide-from-right">
      <div className="w-full max-w-6xl">
      {/* Heading */}
      <div className="text-center mb-8">
        <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">Proven Results</p>
        <h2 className="text-4xl font-bold text-white">Measurable Impact</h2>
        <p className="mt-2 text-slate-400 text-sm max-w-xl mx-auto">
          Real outcomes from enterprise deployments across Fortune 500 IT operations teams.
        </p>
      </div>

      {/* 2×2 grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map(s => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      {/* Footer note */}
      <p className="text-center text-[11px] text-slate-500 mt-6">
        Based on aggregated data from 12 enterprise deployments · 2023–2025
      </p>
      </div>
    </section>
  )
}
