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
  emerald: { ring: 'ring-emerald-500', glow: 'shadow-[0_0_35px_#10b981]', text: 'text-emerald-400', bg: 'bg-emerald-500/10', bar: 'bg-emerald-500' },
  teal:    { ring: 'ring-teal-500',    glow: 'shadow-[0_0_35px_#14b8a6]', text: 'text-teal-400',    bg: 'bg-teal-500/10',    bar: 'bg-teal-500'    },
  indigo:  { ring: 'ring-indigo-500',  glow: 'shadow-[0_0_35px_#6366f1]', text: 'text-indigo-400',  bg: 'bg-indigo-500/10',  bar: 'bg-indigo-500'  },
  violet:  { ring: 'ring-violet-500',  glow: 'shadow-[0_0_35px_#8b5cf6]', text: 'text-violet-400',  bg: 'bg-violet-500/10',  bar: 'bg-violet-500'  },
}

export default function Slide1HowItWorks() {
  const [active, setActive] = useState(0)

  const advance = () => setActive(a => (a + 1) % STAGES.length)

  return (
    <section className="w-full h-full p-20 flex flex-col items-center justify-center animate-slide-from-bottom">
      {/* Huge Heading */}
      <div className="text-center mb-24 w-full">
        <p className="text-base uppercase tracking-[0.3em] text-emerald-400 font-extrabold mb-4">Pipeline Overview</p>
        <h2 className="text-7xl font-black text-white tracking-tight drop-shadow-xl">How It Works</h2>
        <p className="mt-8 text-slate-300 text-xl max-w-4xl mx-auto leading-relaxed font-medium">
          Four highly intelligent machine-learning stages transform chaotic enterprise CMDB data into a fully verified, actionable, single source of truth.
        </p>
      </div>

      {/* Massive Pipeline row */}
      <div className="relative flex items-start justify-between gap-8 mb-20 w-full max-w-[1600px]">
        {/* Connecting line */}
        <div className="absolute top-16 left-0 right-0 flex items-center px-24 pointer-events-none">
          <div className="flex-1 h-1 bg-gradient-to-r from-emerald-500/30 via-indigo-500/40 to-violet-500/30 rounded-full" />
          {/* Animated moving dot */}
          <span
            className="absolute h-4 w-4 rounded-full bg-emerald-400 shadow-[0_0_15px_#10b981]"
            style={{
              left: `calc(${(active / (STAGES.length - 1)) * 100}% - 8px)`,
              transition: 'left 0.7s cubic-bezier(0.22,1,0.36,1)',
            }}
          />
        </div>

        {STAGES.map((stage, i) => {
          const Icon = stage.icon
          const c = colorMap[stage.color]
          const isActive = i === active
          return (
            <div key={stage.step} className="flex-1 flex flex-col items-center gap-10 z-10">
              {/* Circle node */}
              <button
                onClick={() => setActive(i)}
                className={`w-32 h-32 rounded-full flex items-center justify-center border-[3px] transition-all duration-300 cursor-pointer shadow-lg
                  ${isActive
                    ? `${c.bg} ${c.ring} ring-[4px] ring-offset-[#03060C] ring-offset-4 ${c.glow} scale-110`
                    : 'bg-slate-800/80 border-slate-600/60 hover:border-slate-300/80 hover:scale-[1.05]'
                  }`}
              >
                <Icon
                  size={42}
                  className={`transition-colors duration-300 ${isActive ? c.text : 'text-slate-400'}`}
                />
              </button>

              {/* Huge Step card */}
              <div
                className={`w-full rounded-3xl p-10 border-2 transition-all duration-300 cursor-pointer h-full min-h-[300px] flex flex-col
                  ${isActive
                    ? `bg-[#0B1220] border-emerald-500 shadow-[0_40px_80px_rgba(0,0,0,0.8),inset_0_0_40px_rgba(16,185,129,0.05)] scale-[1.03]`
                    : 'bg-[#060A13]/80 backdrop-blur-md border-slate-800 hover:border-slate-600'
                  }`}
                onClick={() => setActive(i)}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className={`text-base font-extrabold tracking-[0.2em] uppercase ${isActive ? c.text : 'text-slate-500'}`}>
                    STEP {stage.step}
                  </span>
                  {isActive && (
                    <span className={`h-2.5 w-2.5 rounded-full ${c.bar} animate-pulse shadow-glow`} />
                  )}
                </div>
                <h3 className={`text-3xl font-black mb-4 transition-colors tracking-tight ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {stage.title}
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed font-medium flex-1">
                  {stage.description}
                </p>
                {/* Big progress bar */}
                <div className="mt-8 h-1.5 bg-slate-800 rounded-full overflow-hidden shadow-inner">
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
      <div className="flex justify-center mt-12">
        <button
          onClick={advance}
          className="flex items-center gap-4 px-12 py-5 bg-emerald-500/10 hover:bg-emerald-500/20 border-2 border-emerald-500/40 hover:border-emerald-400 text-emerald-400 text-xl font-extrabold uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] group"
        >
          Activate Next Phase
          <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
        </button>
      </div>
    </section>
  )
}
