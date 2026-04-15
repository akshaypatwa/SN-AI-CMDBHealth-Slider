import { useState } from 'react'
import { Search, Brain, Stethoscope, CheckCircle2, ArrowRight } from 'lucide-react'

const STAGES = [
  {
    icon: Search,
    step: '01',
    title: 'Discovery Phase',
    description: 'Auto-scan your CMDB for stale records, orphaned CIs, and completely broken relationships across all configuration item classes.',
    color: 'emerald',
  },
  {
    icon: Brain,
    step: '02',
    title: 'AI Analysis',
    description: 'NLP-powered engine deeply cross-references change history, incident data, and asset lifecycle patterns to accurately score each CI.',
    color: 'teal',
  },
  {
    icon: Stethoscope,
    step: '03',
    title: 'Diagnostic AI',
    description: 'Root-cause mapping instantly identifies ownership gaps, duplicate entries, and compliance drift with strictly explainable AI reasoning.',
    color: 'indigo',
  },
  {
    icon: CheckCircle2,
    step: '04',
    title: 'Automated Fixes',
    description: 'Auto-generated fix tasks reliably routed to the right assignment groups — with flawless one-click apply or bulk-remediation flows.',
    color: 'violet',
  },
]

const colorMap: Record<string, { ring: string; glow: string; text: string; bg: string; bar: string }> = {
  emerald: { ring: 'border-emerald-500 dark:ring-emerald-500', glow: 'shadow-[0_10px_20px_rgba(16,185,129,0.15)] dark:shadow-[0_0_35px_#10b981]', text: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-500/10', bar: 'bg-emerald-600 dark:bg-emerald-500' },
  teal:    { ring: 'border-teal-500 dark:ring-teal-500',    glow: 'shadow-[0_10px_20px_rgba(20,184,166,0.15)] dark:shadow-[0_0_35px_#14b8a6]', text: 'text-teal-600 dark:text-teal-400',    bg: 'bg-teal-50 dark:bg-teal-500/10',    bar: 'bg-teal-600 dark:bg-teal-500'    },
  indigo:  { ring: 'border-indigo-500 dark:ring-indigo-500',  glow: 'shadow-[0_10px_20px_rgba(99,102,241,0.15)] dark:shadow-[0_0_35px_#6366f1]', text: 'text-indigo-600 dark:text-indigo-400',  bg: 'bg-indigo-50 dark:bg-indigo-500/10',  bar: 'bg-indigo-600 dark:bg-indigo-500'  },
  violet:  { ring: 'border-violet-500 dark:ring-violet-500',  glow: 'shadow-[0_10px_20px_rgba(139,92,246,0.15)] dark:shadow-[0_0_35px_#8b5cf6]', text: 'text-violet-600 dark:text-violet-400',  bg: 'bg-violet-50 dark:bg-violet-500/10',  bar: 'bg-violet-600 dark:bg-violet-500'  },
}

export default function Slide1HowItWorks() {
  const [active, setActive] = useState(0)

  const advance = () => setActive(a => (a + 1) % STAGES.length)

  return (
    <section className="w-full h-full p-10 flex flex-col items-center justify-center animate-slide-from-bottom overflow-hidden bg-[#F9FAFB] dark:bg-transparent transition-colors duration-500">
      {/* Heading */}
      <div className="text-center mb-12 w-full">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400 font-extrabold mb-3">Pipeline Overview</p>
        <h2 className="text-5xl font-black text-slate-900 dark:text-white tracking-tight drop-shadow-sm dark:drop-shadow-lg">How It Works</h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300 text-lg max-w-4xl mx-auto leading-relaxed font-medium">
          Four highly intelligent machine-learning stages transform chaotic enterprise CMDB data into a fully verified, actionable, single source of truth.
        </p>
      </div>

      {/* Pipeline row */}
      <div className="relative flex items-start justify-between gap-6 mb-12 w-full max-w-[1400px]">
        {/* Connecting line */}
        <div className="absolute top-12 left-0 right-0 flex items-center px-16 pointer-events-none">
          <div className="flex-1 h-1 bg-gradient-to-r from-emerald-400/50 via-indigo-400/50 to-violet-400/50 dark:from-emerald-500/30 dark:via-indigo-500/40 dark:to-violet-500/30 rounded-full" />
          {/* Animated moving dot */}
          <span
            className="absolute h-3 w-3 rounded-full bg-emerald-500 dark:bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.5)] dark:shadow-[0_0_12px_#10b981]"
            style={{
              left: `calc(${(active / (STAGES.length - 1)) * 100}% - 6px)`,
              transition: 'left 0.7s cubic-bezier(0.22,1,0.36,1)',
            }}
          />
        </div>

        {STAGES.map((stage, i) => {
          const Icon = stage.icon
          const c = colorMap[stage.color]
          const isActive = i === active
          return (
            <div key={stage.step} className="flex-1 flex flex-col items-center gap-8 z-10">
              {/* Circle node */}
              <button
                onClick={() => setActive(i)}
                className={`w-24 h-24 rounded-full flex items-center justify-center border-2 transition-all duration-300 cursor-pointer shadow-sm dark:shadow-lg
                  ${isActive
                    ? `${c.bg} ${c.ring} dark:ring-[3px] ring-offset-white dark:ring-offset-[#03060C] ring-offset-4 ${c.glow} scale-110`
                    : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-600/60 hover:border-slate-300 dark:hover:border-slate-300/80 hover:scale-[1.05]'
                  }`}
              >
                <Icon
                  size={32}
                  className={`transition-colors duration-300 ${isActive ? c.text : 'text-slate-400 dark:text-slate-400'}`}
                />
              </button>

              {/* Step card */}
              <div
                className={`w-full rounded-2xl p-6 border transition-all duration-300 cursor-pointer h-full min-h-[220px] flex flex-col shadow-sm
                  ${isActive
                    ? `bg-white dark:bg-[#0B1220] border-emerald-500 dark:border-emerald-500 shadow-[0_20px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.6),inset_0_0_30px_rgba(16,185,129,0.05)] scale-[1.03]`
                    : 'bg-white/80 dark:bg-[#060A13]/80 backdrop-blur-md border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-600'
                  }`}
                onClick={() => setActive(i)}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-sm font-extrabold tracking-[0.2em] uppercase ${isActive ? c.text : 'text-slate-400 dark:text-slate-500'}`}>
                    STEP {stage.step}
                  </span>
                  {isActive && (
                    <span className={`h-2 w-2 rounded-full ${c.bar} animate-pulse shadow-sm dark:shadow-glow`} />
                  )}
                </div>
                <h3 className={`text-xl font-black mb-3 transition-colors tracking-tight ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}>
                  {stage.title}
                </h3>
                <p className={`text-sm leading-relaxed font-medium flex-1 ${isActive ? 'text-slate-600 dark:text-slate-400' : 'text-slate-500 dark:text-slate-400'}`}>
                  {stage.description}
                </p>
                {/* Progress bar */}
                <div className="mt-5 h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner dark:shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)]">
                  <div
                    className={`h-full ${c.bar} rounded-full transition-all duration-700 ease-out`}
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
          className="flex items-center gap-3 px-8 py-3 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-500/10 dark:hover:bg-emerald-500/20 border-2 border-emerald-200 hover:border-emerald-300 dark:border-emerald-500/40 dark:hover:border-emerald-400 text-emerald-700 dark:text-emerald-400 text-base font-extrabold uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md dark:hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] group"
        >
          Activate Next Phase
          <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
        </button>
      </div>
    </section>
  )
}
