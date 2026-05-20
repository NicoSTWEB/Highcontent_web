import fs from 'fs';

const p = 'src/components/sections/dashboard-preview.jsx';
const lines = fs.readFileSync(p, 'utf8').split(/\r?\n/);
const t = ['d', 'i', 'v'].join('');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('motionless')) {
    if (lines[i].includes('shrink-0 ml-auto')) {
      lines[i] = `                      <${t} className="flex items-center gap-1.5 text-ink/45 shrink-0">`;
    } else {
      lines[i] = lines[i].replace(/<\/?motionless[a-z]*>/gi, (m) =>
        m.startsWith('</') ? `</${t}>` : `<${t}>`
      );
    }
  }
}

fs.writeFileSync(p, lines.join('\n'));
console.log('ok', !fs.readFileSync(p, 'utf8').includes('motionless'));
