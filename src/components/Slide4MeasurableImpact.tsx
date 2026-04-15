interface StatCardProps {
  value: string
  label: string
  description: string
  sparkline: number[]
  accent: 'emerald' | 'teal' | 'indigo' | 'violet'
  delay?: string
}

const accentMap: Record<string, { text: string; bar: string; glow: string; border: string; bg: string }> = {
  emerald: { text: 'text-emerald-600 dark:text-emerald-400', bar: 'bg-emerald-500', glow: 'hover:shadow-[0_15px_40px_rgba(16,185,129,0.15)] dark:group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]', border: 'hover:border-emerald-200 dark:group-hover:border-emerald-500/50', bg: 'bg-emerald-50 dark:bg-emerald-500/10' },
  teal:    { text: 'text-teal-600 dark:text-teal-400',    bar: 'bg-teal-500',    glow: 'hover:shadow-[0_15px_40px_rgba(20,184,166,0.15)] dark:group-hover:shadow-[0_0_30px_rgba(20,184,166,0.2)]',  border: 'hover:border-teal-200 dark:group-hover:border-teal-500/50',    bg: 'bg-teal-50 dark:bg-teal-500/10' },
  indigo:  { text: 'text-indigo-600 dark:text-indigo-400',  bar: 'bg-indigo-500',  glow: 'hover:shadow-[0_15px_40px_rgba(99,102,241,0.15)] dark:group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]',  border: 'hover:border-indigo-200 dark:group-hover:border-indigo-500/50',  bg: 'bg-indigo-50 dark:bg-indigo-500/10' },
  violet:  { text: 'text-violet-600 dark:text-violet-400',  bar: 'bg-violet-500',  glow: 'hover:shadow-[0_15px_40px_rgba(139,92,246,0.15)] dark:group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]',  border: 'hover:border-violet-200 dark:group-hover:border-violet-500/50',  bg: 'bg-violet-50 dark:bg-violet-500/10' },
}

function StatCard({ value, label, description, sparkline, accent, delay = '0ms' }: StatCardProps) {
  const a = accentMap[accent]
  const max = Math.max(...sparkline)

  return (
    <div
      className={`group relative rounded-[2rem] p-8 bg-white dark:bg-[#0A101C]/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 transition-all duration-500 cursor-default
        ${a.glow} ${a.border} hover:-translate-y-2 hover:bg-slate-50 dark:hover:bg-[#0D1524]
        shadow-sm dark:shadow-[0_15px_30px_rgba(0,0,0,0.4)]`}
      style={{ animationDelay: delay }}
    >
      {/* Accent dot */}
      <div className={`absolute top-6 right-6 w-3 h-3 rounded-full ${a.bar} opacity-20 dark:opacity-40 group-hover:opacity-100 group-hover:shadow-[0_0_8px_${a.bar}] dark:group-hover:shadow-[0_0_12px_${a.bar}] transition-all duration-300`} />

      {/* Main Metric Value */}
      <p className={`text-[4rem] font-black ${a.text} leading-none mb-3 tracking-tighter drop-shadow-sm dark:drop-shadow-lg`}>{value}</p>
      
      {/* Label and description */}
      <p className="text-slate-900 dark:text-white font-extrabold text-xl mb-2">{label}</p>
      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 h-16 line-clamp-3">{description}</p>

      {/* Sparkline Graph */}
      <div className="flex items-end gap-1.5 h-16 opacity-40 dark:opacity-60 group-hover:opacity-100 transition-opacity duration-300">
        {sparkline.map((v, i) => (
          <div
            key={i}
            className={`flex-1 rounded-sm ${a.bar} transition-all duration-700 ease-out`}
            style={{ height: `${(v / max) * 100}%`, minHeight: '4px' }}
          />
        ))}
      </div>
      <div className="flex justify-between mt-2 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-600">
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
    <section className="w-full h-full p-10 flex flex-col justify-center animate-slide-from-right relative overflow-hidden bg-[#F9FAFB] dark:bg-transparent transition-colors duration-500">
      {/* Background ambient light */}
      <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto z-10 flex flex-col h-full justify-center min-h-0">
        {/* Heading */}
        <div className="text-center mb-10 shrink-0">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400 font-extrabold mb-3">Proven Enterprise Results</p>
          <h2 className="text-5xl font-black text-slate-900 dark:text-white tracking-tight drop-shadow-sm dark:drop-shadow-md">Measurable Impact</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
            Real outcomes from massive enterprise deployments generated across Fortune 500 IT operations environments.
          </p>
        </div>

        {/* Dynamic flex/grid fitting */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 shrink-0">
          {STATS.map(s => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-10 flex justify-center shrink-0">
            <p className="text-center text-xs font-bold tracking-widest uppercase text-slate-500 dark:text-slate-500 bg-white shadow-sm dark:shadow-none dark:bg-slate-800/50 px-5 py-2.5 rounded-full border border-slate-200 dark:border-slate-700/50">
              Validated using aggregated CMDB analytics data · 2024–2025
            </p>
        </div>
      </div>
    </section>
  )
}
