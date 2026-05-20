import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..', 'src', 'components');
const outDir = path.join(root, 'sections');

function read(file) {
  return fs.readFileSync(path.join(root, file), 'utf8');
}

function slice(src, startLabel, endLabel) {
  const start = src.indexOf(startLabel);
  if (start < 0) throw new Error(`Missing start: ${startLabel}`);
  const from = start;
  const end = endLabel ? src.indexOf(endLabel, start + 1) : src.length;
  if (endLabel && end < 0) throw new Error(`Missing end: ${endLabel}`);
  return src.slice(from, end).trim();
}

function reactImports(body) {
  const set = new Set();
  if (/\buseState\b/.test(body)) set.add('useState');
  if (/\buseEffect\b/.test(body)) set.add('useEffect');
  if (/\buseRef\b/.test(body)) set.add('useRef');
  if (!set.size) return '';
  return `import { ${[...set].sort().join(', ')} } from 'react';`;
}

function writeSection(file, exportName, body, extra = '') {
  const reveal = body.includes('Reveal') ? `import { Reveal } from '@/components/reveal';` : '';
  const header = [reactImports(body), extra, reveal].filter(Boolean).join('\n');
  let code = body;
  const re = new RegExp(`^const ${exportName}\\s*=`, 'm');
  if (re.test(code)) {
    code = code.replace(re, `export default function ${exportName}`);
  } else {
    code += `\n\nexport default ${exportName};\n`;
  }
  fs.writeFileSync(
    path.join(outDir, file),
    `'use client';\n\n${header}\n\n${code}\n`
  );
  console.log('wrote', file);
}

fs.mkdirSync(outDir, { recursive: true });

fs.writeFileSync(
  path.join(root, 'reveal.jsx'),
  `'use client';

import { useEffect, useRef } from 'react';

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.classList.add('in');
        io.disconnect();
      }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

export function Reveal({ as: Tag = 'motionlessdiv', className = '', children, ...rest }) {
  const ref = useReveal();
  return <Tag ref={ref} className={\`scroll-fade \${className}\`} {...rest}>{children}</Tag>;
}
`.replace(/motionlessdiv/g, 'motionlessdiv').replace(/motionlessmotionlessdiv/g, 'motionlessdiv')
);

// fix reveal - the replace above is wrong, write directly
fs.writeFileSync(
  path.join(root, 'reveal.jsx'),
  `'use client';

import { useEffect, useRef } from 'react';

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.classList.add('in');
        io.disconnect();
      }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

export function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useReveal();
  return <Tag ref={ref} className={\`scroll-fade \${className}\`} {...rest}>{children}</Tag>;
}
`
);

const s1 = read('sections.jsx');
const s2 = read('sections2.jsx');

const M = '// ============================================================';

const defs = [
  [s1, 'header.jsx', 'Header', `import { IconArrow, IconClose, IconMenu } from '@/components/icons';`, `${M}\n// HEADER`],
  [s1, 'hero.jsx', 'Hero', `import { IconArrow, IconPlay, IconCanva, IconInstagram, IconFacebook, IconLinkedin, IconPinterest } from '@/components/icons';`, `${M}\n// HERO`],
  [s1, 'dashboard-preview.jsx', 'DashboardPreview', `import { IconPlay } from '@/components/icons';`, `${M}\n// DASHBOARD PREVIEW`],
  [s1, 'benefits.jsx', 'Benefits', `import { IconCheck, IconX, IconPost, IconStory, IconHighlight, IconPhoto, IconVideo } from '@/components/icons';`, `${M}\n// BENEFITS (5 cards + before/after)`],
  [s2, 'categories.jsx', 'Categories', `import { IconArrow } from '@/components/icons';`, `${M}\n// CATEGORIES`],
  [s2, 'pricing.jsx', 'Pricing', `import { IconArrow, IconCheck, IconX, IconChevron } from '@/components/icons';`, `${M}\n// PRICING`],
  [s2, 'highlights.jsx', 'Highlights', `import { IconArrow, IconPlay } from '@/components/icons';`, `${M}\n// HIGHLIGHTS (Kits — full mood-board planches)`],
  [s2, 'about.jsx', 'About', '', `${M}\n// ABOUT`],
  [s2, 'faq.jsx', 'FAQ', `import { IconChevron } from '@/components/icons';`, `${M}\n// FAQ`],
  [s2, 'final-cta.jsx', 'FinalCTA', `import { IconArrow } from '@/components/icons';`, `${M}\n// FINAL CTA`],
  [s2, 'footer.jsx', 'Footer', `import { IconInstagram, IconTiktok, IconLinkedin, IconPinterest } from '@/components/icons';`, `${M}\n// FOOTER`],
  [s2, 'testimonials.jsx', 'Testimonials', '', `${M}\n// TESTIMONIALS`],
];

for (let i = 0; i < defs.length; i++) {
  const [src, file, name, icons, start] = defs[i];
  let end = null;
  if (i + 1 < defs.length && defs[i + 1][0] === src) {
    end = defs[i + 1][4];
  }
  const body = slice(src, start, end);
  writeSection(file, name, body, icons);
}

console.log('done');
