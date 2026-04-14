import { useState } from 'react'
import { Search, Brain, Stethoscope, CheckCircle2, ArrowRight } from 'lucide-react'

const STAGES = [
  {
    icon: Search,
    step: '01',
    title: 'Discovery',
    description: 'Auto-scan your CMDB for stale records, orphaned CIs, and broken relationships across all configuration item classes.',
    color: 'emerald',
  },
  {
    icon: Brain,
    step: '02',
    title: 'AI Analysis',
    description: 'NLP-powered engine cross-references change history, incident data, and asset lifecycle patterns to score each CI.',
    color: 'teal',
  },
  {
    icon: Stethoscope,
    step: '03',
    title: 'Diagnosis',
    description: 'Root-cause mapping identifies ownership gaps, duplicate entries, and compliance drift with explainable AI reasoning.',
    color: 'indigo',
  },
  {
    icon: CheckCircle2,
    step: '04',
    title: 'Remediation',
    description: 'Auto-generated fix tasks routed to the right assignment groups — with one-click apply or bulk-remediation flows.',
    color: 'violet',
  },
]

const colorMap: Record<string, { ring: string; glow: string; text: string; bg: string; bar: string }> = {
  emerald: { ring: 'ring-emerald-500', glow: 'shadow-[0_0_25px_#10b981]', text: 'text-emerald-400', bg: 'bg-emerald-500/10', bar: 'bg-emerald-500' },
  teal:    { ring: 'ring-teal-500',    glow: 'shadow-[0_0_25px_#14b8a6]', text: 'text-teal-400',    bg: 'bg-teal-500/10',    bar: 'bg-teal-500'    },
  indigo:  { ring: 'ring-indigo-500',  glow: 'shadow-[0_0_25px_#6366f1]', text: 'text-indigo-400',  bg: 'bg-indigo-500/10',  bar: 'bg-indigo-500'  },
  violet:  { ring: 'ring-violet-500',  glow: 'shadow-[0_0_25px_#8b5cf6]', text: 'text-violet-400',  bg: 'bg-violet-500/10',  bar: 'bg-violet-500'  },
}

export default function Slide1HowItWorks() {
  const [active, setActive] = useState(0)

  const advance = () => setActive(a => (a + 1) % STAGES.length)

  return (
    <section className="w-full h-full p-12 flex flex-col items-center justify-center animate-slide-from-bottom">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">Pipeline Overview</p>
        <h2 className="text-4xl font-bold text-white">How It Works</h2>
        <p className="mt-2 text-slate-400 text-sm max-w-xl mx-auto">
          Four intelligent stages transform chaotic CMDB data into a verified, actionable source of truth.
        </p>
      </div>

      {/* Pipeline row */}
      <div className="relative flex items-start justify-between gap-4 mb-8">
        {/* Connecting line */}
        <div className="absolute top-8 left-0 right-0 flex items-center px-12 pointer-events-none">
          <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/20 via-indigo-500/30 to-violet-500/20" />
          {/* Animated moving dot */}
          <span
            className="absolute h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]"
            style={{
              left: `calc(${(active / (STAGES.length - 1)) * 100}% - 4px)`,
              transition: 'left 0.6s cubic-bezier(0.22,1,0.36,1)',
            }}
          />
        </div>

        {STAGES.map((stage, i) => {
          const Icon = stage.icon
          const c = colorMap[stage.color]
          const isActive = i === active
          return (
            <div key={stage.step} className="flex-1 flex flex-col items-center gap-4 z-10">
              {/* Circle node */}
              <button
                onClick={() => setActive(i)}
                className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300 cursor-pointer
                  ${isActive
                    ? `${c.bg} ${c.ring} ring-2 ${c.glow} scale-110`
                    : 'bg-slate-800/80 border-slate-600/50 hover:border-slate-400/70 hover:scale-105'
                  }`}
              >
                <Icon
                  size={24}
                  className={`transition-colors duration-300 ${isActive ? c.text : 'text-slate-400'}`}
                />
              </button>

              {/* Step card */}
              <div
                className={`w-full rounded-2xl p-5 border transition-all duration-300 cursor-pointer
                  ${isActive
                    ? `bg-[#040816] border-emerald-500/50 shadow-[0_30px_60px_-10px_rgba(0,0,0,0.7)] ring-1 ring-emerald-500/20`
                    : 'glass-panel border-transparent hover:border-slate-500/50'
                  }`}
                onClick={() => setActive(i)}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-bold tracking-widest ${isActive ? c.text : 'text-slate-500'}`}>
                    STEP {stage.step}
                  </span>
                  {isActive && (
                    <span className={`h-1.5 w-1.5 rounded-full ${c.bar} animate-pulse`} />
                  )}
                </div>
                <h3 className={`text-base font-semibold mb-1 transition-colors ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {stage.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {stage.description}
                </p>
                {/* Mini progress bar */}
                <div className="mt-3 h-0.5 bg-slate-700/50 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${c.bar} rounded-full transition-all duration-500`}
                    style={{ width: isActive ? '100%' : '0%' }}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Next Phase button */}
      <div className="flex justify-center">
        <button
          onClick={advance}
          className="flex items-center gap-2 px-6 py-3 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-500/60 text-emerald-400 text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] group"
        >
          Next Phase
          <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
        </button>
      </div>
    </section>
  )
}
