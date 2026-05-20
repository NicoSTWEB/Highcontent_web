import fs from 'fs';

const p = 'src/components/sections/hero.jsx';
const d = 'motionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessdiv'.replace(/motionless/g, '');
const open = '<' + d;
const close = '</' + d + '>';

const block = `  // Cols 1 & 3 flush top; cols 2 & 4 staggered down (reference masonry)
  const colClass =
    'gallery-col flex flex-col gap-4 sm:gap-5 flex-1 min-w-0 min-h-[520px] sm:min-h-[560px] lg:min-h-[600px]';
  const colStagger = 'mt-12 sm:mt-16 lg:mt-[5.25rem]';

  return (
    ${open} className="mt-8 lg:mt-12 py-10 lg:py-16 bg-white overflow-x-hidden">
      <Reveal>
        ${open} className="mx-auto max-w-[1080px] px-4 sm:px-6">
          ${open} className="flex gap-4 sm:gap-5 pb-10 w-full items-start">
            ${open} className={colClass}>
              <ECard flexGrow={0.92}><PhotoCard src={img.I} alt="" pos="50% 28%" /></ECard>
              <ECard flexGrow={1.95}><PhotoCard src={img.B} alt="" pos="50% 38%" /></ECard>
            ${close}
            ${open} className={\`\${colClass} \${colStagger}\`}>
              <ECard flexGrow={0.88}><PhotoCard src={img.E} alt="" pos="50% 42%" /></ECard>
              <ECard flexGrow={1.05}><PhotoCard src={img.A} alt="" pos="50% 22%" /></ECard>
            ${close}
            ${open} className={colClass}>
              <ECard flexGrow={1.85}><PhotoCard src={img.C} alt="" pos="50% 30%" /></ECard>
              <ECard flexGrow={0.88}><PhotoCard src={img.H} alt="" pos="50% 35%" /></ECard>
            ${close}
            ${open} className={\`\${colClass} \${colStagger}\`}>
              <ECard flexGrow={0.9}><PhotoCard src={img.G} alt="" pos="50% 35%" /></ECard>
              <ECard flexGrow={1.22}><PhotoCard src={img.F} alt="" pos="50% 35%" /></ECard>
            ${close}
          ${close}
        ${close}
      </Reveal>
    ${close}
  );
`;

let s = fs.readFileSync(p, 'utf8');
const start = s.indexOf('  const colClass = ');
const end = s.indexOf('};', s.indexOf('const HeroGallery')) + 2;
if (start === -1 || end === -1) {
  console.error('markers not found');
  process.exit(1);
}
s = s.slice(0, start) + block + s.slice(end);
fs.writeFileSync(p, s);
console.log('patched hero gallery layout');
