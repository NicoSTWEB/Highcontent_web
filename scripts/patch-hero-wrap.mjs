import fs from 'fs';

const p = 'src/components/sections/hero.jsx';
const lines = fs.readFileSync(p, 'utf8').split(/\r?\n/);
const t = ['d', 'i', 'v'].join('');

const idx = lines.findIndex((l) => l.includes('flex gap-4 pb-10 w-full'));
if (idx < 0) {
  console.error('line not found');
  process.exit(1);
}

lines[idx] = `        <${t} className="flex gap-4 pb-10 w-full">`;
fs.writeFileSync(p, lines.join('\n'));
console.log('fixed line', idx + 1);
