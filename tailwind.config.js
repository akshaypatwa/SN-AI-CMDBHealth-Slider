/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'bg-emerald-500', 'bg-teal-500', 'bg-indigo-500', 'bg-violet-500',
    'text-emerald-400', 'text-teal-400', 'text-indigo-400', 'text-violet-400',
    'border-emerald-500/30', 'border-teal-500/30', 'border-indigo-500/30', 'border-violet-500/30',
    'shadow-emerald-500/20', 'shadow-teal-500/20', 'shadow-indigo-500/20', 'shadow-violet-500/20',
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
        'slide-right': 'slideRight 0.5s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        scanline: 'scanline 2s linear infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        typewriter: 'typewriter 3s steps(44) forwards 2.5s',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(32px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        slideRight: { '0%': { opacity: '0', transform: 'translateX(32px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        scanline: { '0%': { transform: 'translateY(-100%)' }, '100%': { transform: 'translateY(500%)' } },
        typewriter: { '0%': { width: '0%' }, '100%': { width: '100%' } },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
