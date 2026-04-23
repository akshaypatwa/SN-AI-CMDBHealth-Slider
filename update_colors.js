const fs = require('fs');
const glob = require('glob');

const colorMap = [
  // Emerald to Blue/Orange based on context
  { regex: /emerald-400/g, replace: '[#F7B516]' }, // Yellow/Orange highlights where bright
  { regex: /emerald-500\/10/g, replace: '[#006A9E]/10' },
  { regex: /emerald-500\/20/g, replace: '[#006A9E]/20' },
  { regex: /emerald-500\/30/g, replace: '[#006A9E]/30' },
  { regex: /emerald-500/g, replace: '[#E8580F]' }, // Persimmon
  { regex: /emerald-600/g, replace: '[#006A9E]' }, // Blue
  
  // Indigo to Novartis Blue
  { regex: /indigo-50/g, replace: '[#006A9E]/5' },
  { regex: /indigo-100/g, replace: '[#006A9E]/10' },
  { regex: /indigo-200/g, replace: '[#006A9E]/20' },
  { regex: /indigo-400/g, replace: '[#006A9E]' },
  { regex: /indigo-500/g, replace: '[#006A9E]' },
  { regex: /indigo-600/g, replace: '[#006A9E]' },
  { regex: /indigo-700/g, replace: '[#004F78]' },

  // Purple to Persimmon (Action glow)
  { regex: /purple-50/g, replace: '[#E8580F]/5' },
  { regex: /purple-300\/80/g, replace: '[#E8580F]/80' },
  { regex: /purple-400/g, replace: '[#F7B516]' },
  { regex: /purple-500\/20/g, replace: '[#E8580F]/20' },
  { regex: /purple-500\/40/g, replace: '[#E8580F]/40' },
  { regex: /purple-500\/50/g, replace: '[#E8580F]/50' },
  { regex: /purple-500/g, replace: '[#E8580F]' },
  { regex: /purple-600/g, replace: '[#E8580F]' },

  // Hex codes for RGBA shadows
  { regex: /16,185,129/g, replace: '0,106,158' }, // emerald RGB -> Blue RGB
  { regex: /99,102,241/g, replace: '0,106,158' }, // indigo RGB -> Blue RGB
  { regex: /168,85,247/g, replace: '232,88,15' }, // purple RGB -> Orange RGB
  
  // Specific Hex shadow replacements
  { regex: /#10b981/g, replace: '#006A9E' }, // emerald hex -> Blue hex
  { regex: /#6366f1/g, replace: '#006A9E' }, // indigo hex
  { regex: /#22d3ee/g, replace: '#F7B516' }, // cyan -> span yellow
];

const files = glob.sync('src/components/**/*.tsx');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  colorMap.forEach(map => {
    content = content.replace(map.regex, map.replace);
  });
  content = content.replace(/bg-\[\#006A9E\] text-white/g, "bg-[#006A9E] text-white");
  fs.writeFileSync(file, content);
});
console.log('Replaced colors in components.');
