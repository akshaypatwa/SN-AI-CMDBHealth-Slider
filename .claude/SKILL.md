# SKILL: Presentation Slider + Interactive Simulator

A reusable pattern for building multi-slide fullscreen presentations with an embedded interactive process simulator. Extracted from `components/PredictiveIntelligenceSim.tsx`.

---

## Tech Stack

| Layer | Choice |
|---|---|
| UI Framework | React 18 + TypeScript |
| Build | Vite 4 |
| Styling | Tailwind CSS 3 (utility classes + JIT) |
| Icons | `lucide-react` |
| Animations | Pure CSS keyframes (no Framer Motion / GSAP) |
| Charts | Inline sparkline bars (no Chart.js in simulator) |

Animations use Tailwind's built-in `animate-in`, `fade-in`, `slide-in-from-right-8`, `slide-in-from-bottom-8`, `zoom-in-95` and `duration-*` utilities.

Custom keyframes are declared in a per-component `<style>` JSX tag.

---

## Component Architecture

```
App.tsx
└── UseCaseDetail.tsx          (3 content tiles)
    ├── "Solution and Flow" tile → setShowSim(true)
    │   └── <YourSimComponent onBack={...} />   ← THIS SKILL
    ├── "View Infographic" tile → openModal(html)
    └── "View Architecture" tile → openModal(html)
```

### Routing new simulators in `UseCaseDetail.tsx`

```tsx
if (showSim) {
  if (useCase.id === 1)   return <PredictiveIntelligenceSim onBack={() => setShowSim(false)} />;
  if (useCase.id === 2)   return <VirtualAgentSim           onBack={() => setShowSim(false)} />;
  if (useCase.id === YOUR_ID) return <YourNewSim            onBack={() => setShowSim(false)} />;
  return <ComingSoonSim onBack={() => setShowSim(false)} />;
}
```

Each simulator is **fully self-contained** — the only external dependency is the `onBack` callback.

---

## Simulator Component Template

### Props interface
```tsx
interface Props {
  onBack: () => void;
}
```

### File naming convention
`components/<FeatureName>Sim.tsx`

---

## Full Layout Structure

```
<div className="fixed inset-0 z-50 overflow-hidden bg-slate-800 ...">
  <style>{/* custom CSS keyframes */}</style>

  {/* 1. Background layer (grid pattern, gradients) */}
  <div className="fixed inset-0 z-0 pointer-events-none"> ... </div>

  {/* 2. Fixed header (back button + title badge) */}
  <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none"> ... </header>

  {/* 3. Main content area — slides render here */}
  <main className="relative z-10 w-full h-screen flex flex-col justify-center items-center px-8 pt-20 pb-24 overflow-hidden">
    {presentationStep === 0 && <Slide0 />}
    {presentationStep === 1 && <Slide1 />}
    {presentationStep === 2 && <Slide2 />}
    {presentationStep === 3 && <Slide3 />}
  </main>

  {/* 4. Fixed bottom navigation pill */}
  <footer className="fixed bottom-8 left-0 right-0 z-50 flex justify-center pointer-events-none"> ... </footer>
</div>
```

`pt-20` (header clearance) + `pb-24` (footer clearance) prevent slide content from being hidden behind fixed bars.

---

## Presentation Slider Pattern

### State

```tsx
const [presentationStep, setPresentationStep] = useState(0);
const TOTAL_STEPS = 4; // update when adding/removing slides
```

### Slide rendering

Each slide is a separate conditional render block. Slide 0 uses `slide-in-from-bottom-8`; subsequent slides use `slide-in-from-right-8`.

```tsx
{presentationStep === 0 && (
  <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 w-full max-w-6xl">
    {/* Slide 0 content */}
  </div>
)}

{presentationStep === 1 && (
  <div className="animate-in fade-in slide-in-from-right-8 duration-500 w-full max-w-6xl">
    {/* Slide 1 content */}
  </div>
)}
```

### Standard slide types used in this project

| Step | Slide Type | Description |
|------|-----------|-------------|
| 0 | **Pipeline Diagram** | N nodes on a timeline with an active-highlight sub-state |
| 1 | **Holographic Card** | Feature summary list + glowing 3D card visual |
| 2 | **Process Simulator** | Mock app UI with virtual cursor automation |
| 3 | **Measurable Impact** | Grid of `StatCard` components with sparkline charts |

---

## Fixed Bottom Navigation Footer

```tsx
<footer className="fixed bottom-8 left-0 right-0 z-50 p-6 flex justify-center items-center pointer-events-none">
  <div className="pointer-events-auto bg-slate-900/90 backdrop-blur-xl border border-emerald-500/30 rounded-2xl px-12 py-5 flex items-center gap-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform duration-300">

    {/* Previous */}
    <button
      onClick={() => setPresentationStep(prev => Math.max(0, prev - 1))}
      disabled={presentationStep === 0}
      className={`flex items-center gap-3 text-base font-bold transition-colors
        ${presentationStep === 0 ? 'text-slate-600 cursor-not-allowed' : 'text-slate-300 hover:text-white'}`}
    >
      <ArrowLeft size={20} /> Previous
    </button>

    {/* Step dots */}
    <div className="flex items-center gap-4">
      {Array.from({ length: TOTAL_STEPS }, (_, i) => (
        <div key={i} className={`transition-all duration-300 rounded-full
          ${presentationStep === i
            ? 'w-4 h-4 bg-emerald-500 shadow-[0_0_10px_#10b981]'
            : 'w-3 h-3 bg-slate-700'}`}
        />
      ))}
    </div>

    {/* Next */}
    <button
      onClick={() => setPresentationStep(prev => Math.min(TOTAL_STEPS - 1, prev + 1))}
      disabled={presentationStep === TOTAL_STEPS - 1}
      className={`flex items-center gap-3 text-base font-bold transition-colors
        ${presentationStep === TOTAL_STEPS - 1 ? 'text-slate-600 cursor-not-allowed' : 'text-emerald-400 hover:text-emerald-300'}`}
    >
      Next <ChevronRight size={20} />
    </button>
  </div>
</footer>
```

**Key trick:** `pointer-events-none` on the `<footer>` container + `pointer-events-auto` on the inner pill ensures the footer doesn't block click events on slide content behind it.

---

## Slide 0 — Pipeline Diagram

### Sub-state

```tsx
const [pipelineStep, setPipelineStep] = useState(0);
```

### Data shape

```ts
const pipelineStages = [
  { title: "Stage One",   icon: <Database size={24} />, desc: "Description text.", step: "01" },
  { title: "Stage Two",   icon: <FileText size={24} />, desc: "Description text.", step: "02" },
  { title: "Stage Three", icon: <RefreshCw size={24}/>, desc: "Description text.", step: "03" },
  { title: "Stage Four",  icon: <Zap size={24} />,      desc: "Description text.", step: "04" },
];
```

### Layout

```tsx
<div className="relative pt-12">
  {/* Connecting line — positioned at icon vertical center */}
  <div className="absolute left-6 right-6 top-[88px] h-1 bg-slate-700 hidden lg:block rounded-full">
    <div className="absolute inset-0 bg-emerald-500/50 animate-pulse" />
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
    {pipelineStages.map((item, idx) => {
      const isActive = pipelineStep === idx;
      return (
        <div key={idx} className="text-center cursor-pointer" onClick={() => setPipelineStep(idx)}>
          {/* Circular node */}
          <div className={`mx-auto w-20 h-20 rounded-full border-4 flex items-center justify-center z-10 relative transition-all duration-500
            ${isActive
              ? 'bg-emerald-500 border-emerald-200 shadow-[0_0_25px_#10b981] scale-110 text-slate-900'
              : 'bg-slate-900 border-slate-700 text-slate-500'}`}>
            {item.icon}
          </div>
          {/* Card below node */}
          <div className={`mt-10 p-6 rounded-xl border transition-all duration-500 min-h-[180px]
            ${isActive
              ? 'bg-[#0f172a] border-emerald-500 shadow-[0_10px_30px_-10px_rgba(16,185,129,0.3)]'
              : 'bg-slate-900/40 border-slate-800/50'}`}>
            <div className={`text-[10px] font-mono font-bold tracking-widest uppercase mb-2 ${isActive ? 'text-emerald-500' : 'text-slate-600'}`}>
              Step {item.step}
            </div>
            <h3 className={`text-lg font-bold mb-3 ${isActive ? 'text-white' : 'text-slate-200'}`}>{item.title}</h3>
            <p className={`text-xs leading-relaxed ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>{item.desc}</p>
          </div>
        </div>
      );
    })}
  </div>

  {/* Manual cycle button */}
  <div className="mt-12 flex justify-center">
    <button
      onClick={() => setPipelineStep(prev => (prev + 1) % pipelineStages.length)}
      className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg flex items-center gap-2 group"
    >
      Next Phase <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
    </button>
  </div>
</div>
```

The `top-[88px]` value = `pt-12` (48px top padding) + half of the 80px node (`40px`) = 88px. Adjust if node size changes.

---

## Slide 2 — Interactive Process Simulator

### State

```tsx
// Simulator loop
const [simStep, setSimStep] = useState(0);        // current step index (0 to N)
const [isAutoPlay, setIsAutoPlay] = useState(false);

// Virtual cursor
const [cursorPos, setCursorPos] = useState({ top: '60%', left: '50%' });
const [showCursor, setShowCursor] = useState(true);
const [clickEffect, setClickEffect] = useState(false); // ping ripple on click

// Mock form state
const [formState, setFormState] = useState(initialFormState);
const [isAnalyzing, setIsAnalyzing] = useState(false); // spinning loader
const [showModal, setShowModal] = useState(false);     // AI results modal
const [highlightUpdates, setHighlightUpdates] = useState(false); // green glow on updated fields
```

### Simulation loop (7-step example)

```tsx
useEffect(() => {
  setShowCursor(true);
  let timeout: ReturnType<typeof setTimeout>;

  const scheduleNext = (delay: number, nextStep: number) => {
    if (isAutoPlay) timeout = setTimeout(() => setSimStep(nextStep), delay);
  };

  switch (simStep) {
    case 0: // Reset
      setFormState(initialFormState);
      setShowModal(false);
      setIsAnalyzing(false);
      setHighlightUpdates(false);
      setCursorPos({ top: '60%', left: '50%' });
      scheduleNext(2000, 1);
      break;
    case 1: // Move cursor to action button
      setCursorPos({ top: '28px', left: 'calc(100% - 60px)' });
      scheduleNext(2500, 2);
      break;
    case 2: // Click — trigger action
      setClickEffect(true);
      setTimeout(() => setClickEffect(false), 300);
      handlePredictClick();
      scheduleNext(1000, 3);
      break;
    case 3: // Wait for async result
      scheduleNext(3000, 4);
      break;
    case 4: // Move cursor to confirm button in modal
      setCursorPos({ top: '60%', left: '58%' });
      scheduleNext(3000, 5);
      break;
    case 5: // Click confirm
      setClickEffect(true);
      setTimeout(() => setClickEffect(false), 300);
      handleSave();
      scheduleNext(1000, 6);
      break;
    case 6: // Done — move cursor away, loop
      setCursorPos({ top: '90%', left: '90%' });
      scheduleNext(6000, 0);
      break;
  }

  return () => clearTimeout(timeout);
}, [simStep, isAutoPlay]);
```

### Toggles

```tsx
const toggleAutoPlay = () => {
  setIsAutoPlay(prev => !prev);
  if (!isAutoPlay && simStep === 0) setSimStep(1); // kick-start if at beginning
};

const handleManualNext = () => {
  setIsAutoPlay(false);
  setSimStep(prev => (prev + 1) % 7); // wrap around total steps
};
```

### Virtual cursor markup

```tsx
{showCursor && (
  <div
    className="absolute z-[100] pointer-events-none cursor-transition flex flex-col items-center justify-center"
    style={{ top: cursorPos.top, left: cursorPos.left, transform: 'translate(-50%, -50%)' }}
  >
    {clickEffect && (
      <div className="absolute w-8 h-8 rounded-full border-2 border-emerald-500/50 animate-ping opacity-75" />
    )}
    <MousePointer2 size={32} className="text-slate-900 drop-shadow-xl fill-white stroke-2" style={{ transform: 'rotate(-15deg)' }} />
  </div>
)}
```

CSS for smooth cursor movement (in `<style>` tag):

```css
.cursor-transition {
  transition: top 1s cubic-bezier(0.22, 1, 0.36, 1),
              left 1s cubic-bezier(0.22, 1, 0.36, 1);
}
```

### Simulator layout (2-column)

```
┌──────────────────────────────────────────────────────────┐
│  glass-panel rounded-3xl p-8                             │
│  ┌────────────────────┐  ┌──────────────────────────────┐│
│  │ LEFT: Control Panel│  │ RIGHT: Mock App UI           ││
│  │ - Title            │  │ - bg-[#f4f5f7] (light mode)  ││
│  │ - Play/Pause btn   │  │ - Dark header bar            ││
│  │ - Manual Next btn  │  │ - Tab bar                    ││
│  │ - Step progress    │  │ - Form fields                ││
│  │   indicators       │  │ - Virtual cursor (absolute)  ││
│  │                    │  │ - AI modal (absolute inset-0) ││
│  └────────────────────┘  └──────────────────────────────┘│
└──────────────────────────────────────────────────────────┘
```

### AI Recommendations Modal (overlaid inside form container)

```tsx
{showModal && (
  <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-900/20 backdrop-blur-[2px] animate-in fade-in duration-200">
    <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-[400px] overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-2 duration-300">
      {/* Dark header with confidence score */}
      <div className="bg-[#1a2234] px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2.5"> ... </div>
        <div className="text-right">
          <div className="text-xs text-slate-400 uppercase font-semibold">Confidence</div>
          <div className="text-xl font-black text-emerald-400">{predictions.confidence}</div>
        </div>
      </div>
      {/* Field predictions table */}
      <div className="p-6 bg-slate-50/50 space-y-3"> ... </div>
      {/* Action buttons */}
      <div className="px-6 py-4 bg-white border-t border-slate-100 flex justify-end gap-3">
        <button onClick={() => setShowModal(false)}>Dismiss</button>
        <button onClick={handleSave}>Apply Changes</button>
      </div>
    </div>
  </div>
)}
```

The modal is positioned `absolute inset-0` **inside the mock form container** (not a page-level overlay), so it appears anchored to the form.

### Field highlight after apply

```tsx
const handleSave = () => {
  setFormState(prev => ({ ...prev, ...predictions }));
  setShowModal(false);
  setHighlightUpdates(true);
  setTimeout(() => setHighlightUpdates(false), 2000);
};

// Apply to individual inputs:
const highlightClass = highlightUpdates
  ? 'ring-2 ring-emerald-400 shadow-[0_0_30px_rgba(52,211,153,0.5)] !bg-emerald-500/20 scale-[1.02]'
  : '';
```

For inputs inside the ServiceNow-style form:
```tsx
<input className={`sn-input ${fieldValue ? 'sn-highlight' : ''} ${highlightUpdates ? 'ring-2 ring-emerald-500 ring-offset-1' : ''}`} />
```

---

## Slide 3 — StatCard Sub-Component

### Props

```ts
interface StatCardProps {
  value: string;    // e.g. "50%"
  label: string;    // e.g. "Faster Triage"
  sub: string;      // e.g. "Reduction in ticket routing time"
  chart: number[];  // sparkline data points, e.g. [40, 65, 55, 80, 75, 90]
  color: string;    // Tailwind color name: "emerald" | "teal" | "indigo"
}
```

### Component

```tsx
const StatCard: React.FC<StatCardProps> = ({ value, label, sub, chart, color }) => {
  const max = Math.max(...chart);
  return (
    <div className="glass-panel p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300">
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className={`text-4xl font-black mb-1 bg-clip-text text-transparent bg-gradient-to-r from-white to-${color}-400`}>
            {value}
          </div>
          <div className="text-lg font-bold text-white">{label}</div>
        </div>
        <div className={`p-3 rounded-xl bg-${color}-500/10 text-${color}-400`}>
          <TrendingUp size={24} />
        </div>
      </div>

      {/* Sparkline */}
      <div className="h-16 flex items-end gap-2 mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
        {chart.map((h, i) => (
          <div key={i} className={`flex-1 bg-${color}-500 rounded-t-sm transition-all duration-500`}
            style={{ height: `${(h / max) * 100}%` }} />
        ))}
      </div>

      <p className="text-sm text-slate-400 border-t border-slate-700/50 pt-4">{sub}</p>
    </div>
  );
};
```

**Note on dynamic Tailwind classes:** Using `` `bg-${color}-500` `` requires the color values to appear somewhere in source for JIT to include them, or add them to `tailwind.config.js` safelist:

```js
// tailwind.config.js
safelist: ['bg-emerald-500', 'bg-teal-500', 'bg-indigo-500', 'text-emerald-400', 'text-teal-400', 'text-indigo-400', ...]
```

---

## Visual Design System

### Colors

| Role | Value |
|------|-------|
| Page background | `bg-slate-900` / `#0f172a` |
| Glass panel bg | `#020617` |
| Accent (active/glow) | `#10b981` (emerald-500) |
| Accent text | `text-emerald-400` |
| Muted text | `text-slate-400` |
| Border default | `border-slate-700` or `border-slate-800` |
| Border accent | `border-emerald-500/30` |
| Mock form bg | `#f4f5f7` (light mode) |
| Mock form header | `#1a2234` (Polaris navy) |

### Background grid pattern

```css
.bg-grid-pattern {
  background-image:
    linear-gradient(to right, #10b9811a 1px, transparent 1px),
    linear-gradient(to bottom, #10b9811a 1px, transparent 1px);
  background-size: 40px 40px;
}
```

Apply with a mask to fade at bottom:
```html
<div class="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-20"></div>
```

### Glass panel

```css
.glass-panel {
  background: #020617;
  backdrop-filter: blur(24px);
  border: 1px solid rgba(16, 185, 129, 0.3);
  box-shadow: 0 30px 60px -10px rgba(0, 0, 0, 0.7);
}
```

### Header badge

```html
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-emerald-500/30 text-emerald-400 text-[10px] font-semibold tracking-widest uppercase shadow-lg backdrop-blur-md">
  <Sparkles size={10} /> Your Subtitle Here
</div>
```

### Custom CSS keyframes (in `<style>` tag inside component)

```css
/* Scanning line (for holographic card effect) */
@keyframes scanline {
  0%   { transform: translateY(-100%); }
  100% { transform: translateY(500%); }
}
.animate-scan { animation: scanline 2s linear infinite; }

/* Floating element */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-10px); }
}
.animate-float { animation: float 6s ease-in-out infinite; }

/* SVG path flow animation */
@keyframes flow {
  0%   { stroke-dashoffset: 20; }
  100% { stroke-dashoffset: 0; }
}
```

### ServiceNow Polaris form field styles

```css
.sn-input {
  background: #ffffff;
  border: 1px solid #acbdc9;
  color: #1e293b;
  font-size: 0.8rem;
  height: 34px;
  padding: 0 0.75rem;
  border-radius: 4px;
  width: 100%;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}
.sn-input-ro { background-color: #f1f5f9; border-color: #cbd5e1; color: #475569; cursor: default; }
.sn-label    { font-size: 0.75rem; color: #475569; font-weight: 600; margin-bottom: 6px; display: block; }
.sn-highlight { background-color: #ecfdf5 !important; border-color: #10b981 !important; color: #064e3b !important; font-weight: 700; }
```

---

## Step-by-Step: Adding a New Simulator

1. **Create the component**
   ```
   components/<FeatureName>Sim.tsx
   ```
   Start from the template structure in this file. Only prop needed: `onBack: () => void`.

2. **Define your slides** — decide the number and types:
   - Pipeline → use `pipelineStep` sub-state + node grid
   - Feature summary → use a feature list + visual card
   - Interactive simulator → use the `simStep` loop + mock UI
   - Impact metrics → use `StatCard` array

3. **Update footer dot count**
   ```tsx
   const TOTAL_STEPS = N; // change this
   Array.from({ length: TOTAL_STEPS }, (_, i) => ...)
   ```

4. **Register in `UseCaseDetail.tsx`**
   ```tsx
   import { MyNewSim } from './MyNewSim';
   // ...
   if (useCase.id === YOUR_ID) return <MyNewSim onBack={() => setShowSim(false)} />;
   ```

5. **Add to `data.ts`**
   ```ts
   {
     id: YOUR_ID,
     icon: 'fa-your-icon',
     title: 'Your Use Case Title',
     description: 'Short description...',
     tag: 'New',
     infographicHTML: `...`,
     architectureHTML: `...`,
   }
   ```

---

## Common Gotchas

| Issue | Fix |
|-------|-----|
| Footer blocks clicks on slide content | Use `pointer-events-none` on `<footer>` + `pointer-events-auto` on inner pill |
| Cursor position is off | `top`/`left` are relative to the form container (`relative`), not the viewport |
| Tailwind dynamic color classes not generated | Add explicit class strings to `safelist` in `tailwind.config.js` |
| `animate-in` classes not working | Requires Tailwind v3.3+ or `tailwindcss-animate` plugin |
| `simStep` loop keeps firing | Ensure `return () => clearTimeout(timeout)` is in the `useEffect` cleanup |
| Charts not rendering after modal open | Use `setTimeout(() => initCharts(), 50)` inside the modal's `useEffect` to wait for DOM paint |
