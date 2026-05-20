import fs from 'fs';

const p = 'src/components/sections/hero.jsx';
const d = 'motionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessdiv'.replace(
  /motionless/g,
  ''
);

const old = `        <${d}
          className="absolute left-0 sm:left-[2%] top-1/2 -translate-y-1/2 w-[min(52vw,520px)] h-[480px] lg:h-[520px]"
          style={{
            background: \`radial-gradient(ellipse 60% 55% at 40% 50%, \${palette[0]}99 0%, \${palette[0]}55 35%, rgba(255,255,255,0) 68%)\`,
            filter: 'blur(40px)',
          }}
        />
        <${d}
          className="absolute right-0 sm:right-[2%] top-1/2 -translate-y-1/2 w-[min(52vw,520px)] h-[480px] lg:h-[520px]"
          style={{
            background: \`radial-gradient(ellipse 60% 55% at 60% 50%, \${palette[1]}99 0%, \${palette[1]}55 35%, rgba(255,255,255,0) 68%)\`,
            filter: 'blur(40px)',
          }}
        />`;

const neu = `        <${d}
          className="absolute -left-[12%] sm:-left-[6%] lg:-left-[4%] top-1/2 w-[min(78vw,780px)] h-[300px] lg:h-[340px] origin-center"
          style={{
            background: \`radial-gradient(ellipse 95% 42% at 58% 50%, \${palette[0]}99 0%, \${palette[0]}55 38%, rgba(255,255,255,0) 72%)\`,
            filter: 'blur(40px)',
            transform: 'translateY(-50%) rotate(-22deg)',
          }}
        />
        <${d}
          className="absolute -right-[12%] sm:-right-[6%] lg:-right-[4%] top-1/2 w-[min(78vw,780px)] h-[300px] lg:h-[340px] origin-center"
          style={{
            background: \`radial-gradient(ellipse 95% 42% at 42% 50%, \${palette[1]}99 0%, \${palette[1]}55 38%, rgba(255,255,255,0) 72%)\`,
            filter: 'blur(40px)',
            transform: 'translateY(-50%) rotate(22deg)',
          }}
        />`;

let s = fs.readFileSync(p, 'utf8');
if (!s.includes('left-0 sm:left-[2%]')) {
  console.error('pattern not found');
  process.exit(1);
}
s = s.replace(old, neu);
s = s.replace(
  '{/* halo — left & right only, center stays clear */}',
  '{/* halo — tilted ovals on left & right, clear center */}'
);
fs.writeFileSync(p, s);
console.log('done');
