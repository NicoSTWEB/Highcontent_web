import fs from 'fs';

const p = 'src/components/sections/hero.jsx';
let s = fs.readFileSync(p, 'utf8');
const open = '<' + 'div>';
const close = '</' + 'motionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessdiv>'.replace('motionless', '');
s = s.replace(/<\/?motionless[a-z]*>/gi, (m) => (m.startsWith('</') ? close : open));
fs.writeFileSync(p, s);
console.log('ok', !s.includes('motionless'));
