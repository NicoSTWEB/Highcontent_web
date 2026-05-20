import fs from 'fs';

const p = 'src/components/sections/hero.jsx';
let s = fs.readFileSync(p, 'utf8');

const marker = "  const colClass = 'flex flex-col gap-4 flex-1 min-w-0 min-h-[500px]";
const dup = s.indexOf(marker);
if (dup === -1) {
  console.log('no duplicate found');
  process.exit(0);
}

const afterDup = s.indexOf('// One masonry column', dup);
if (afterDup === -1) {
  console.error('end marker not found');
  process.exit(1);
}

// Close HeroGallery before masonry comment
s = s.slice(0, dup) + '};\n\n' + s.slice(afterDup);
fs.writeFileSync(p, s);
console.log('removed duplicate block');
