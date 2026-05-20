import fs from 'fs';

const p = 'src/components/sections/hero.jsx';
let s = fs.readFileSync(p, 'utf8');

const d = 'div';
const open = '<' + d;
const close = '</' + d + '>';

// Opening tags whose name contains "motionless" (corrupted div)
s = s.replace(/<[a-z]*motionless[a-z]*(\s[^>]*)?>/gi, (m) => {
  const attrs = m.slice(m.indexOf(' '));
  return open + attrs;
});

// Closing tags with motionless in the name
s = s.replace(/<\/[a-z]*motionless[a-z]*>/gi, close);

fs.writeFileSync(p, s);
const left = (s.match(/motionless/gi) || []).length;
console.log('motionless remaining:', left);
