import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const src = path.join(root, '..');
const out = path.join(root, 'src', 'components');

fs.mkdirSync(out, { recursive: true });

function fixAssets(code) {
  return code.replace(/(["'])assets\//g, '$1/assets/');
}

function stripWindowAssign(code) {
  return code.replace(/\nObject\.assign\(window,\s*\{[^}]+\}\);\s*$/m, '');
}

// icons.jsx
let icons = fs.readFileSync(path.join(src, 'icons.jsx'), 'utf8');
icons = stripWindowAssign(icons);
icons = `'use client';\n\nimport React from 'react';\n\n` + icons.replace(/^\/\/.*\n/, '');
icons += `\nexport {\n  Icon, IconPost, IconStory, IconHighlight, IconPhoto, IconVideo,\n  IconCheck, IconX, IconChevron, IconArrow, IconSparkle, IconMenu, IconClose, IconPlay,\n  IconCanva, IconInstagram, IconFacebook, IconLinkedin, IconPinterest, IconTiktok,\n};\n`;
fs.writeFileSync(path.join(out, 'icons.jsx'), icons);

// tweaks-panel.jsx
let tweaks = fs.readFileSync(path.join(src, 'tweaks-panel.jsx'), 'utf8');
tweaks = stripWindowAssign(tweaks);
tweaks = tweaks.replace(/^/m, '').replace(/React\./g, '');
tweaks = `'use client';\n\nimport React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';\n\n` +
  tweaks.replace(/^[\s\S]*?const __TWEAKS_STYLE/, 'const __TWEAKS_STYLE');
tweaks = tweaks.replace(/\bReact\.(useState|useEffect|useRef|useCallback|useMemo)\b/g, '$1');
tweaks += `\nexport {\n  useTweaks, TweaksPanel, TweakSection, TweakRow,\n  TweakSlider, TweakToggle, TweakRadio, TweakSelect,\n  TweakText, TweakNumber, TweakColor, TweakButton,\n};\n`;
fs.writeFileSync(path.join(out, 'tweaks-panel.jsx'), tweaks);

const iconImports = `import {
  IconArrow, IconCheck, IconX, IconChevron, IconClose, IconMenu, IconPlay,
  IconPost, IconStory, IconHighlight, IconPhoto, IconVideo,
  IconCanva, IconInstagram, IconFacebook, IconLinkedin, IconPinterest, IconTiktok,
} from './icons';\n`;

// sections-v4.jsx
let s1 = fs.readFileSync(path.join(src, 'sections-v4.jsx'), 'utf8');
s1 = s1.replace(/const \{ useState, useEffect, useRef \} = React;\n/, '');
s1 = stripWindowAssign(s1);
s1 = fixAssets(s1);
s1 = `'use client';\n\nimport { useState, useEffect, useRef } from 'react';\n${iconImports}\n` + s1.replace(/^\/\/[\s\S]*?\/\/ =+\n/, '');
s1 += `\nexport { Header, Hero, DashboardPreview, Benefits, Reveal, useReveal };\n`;
fs.writeFileSync(path.join(out, 'sections.jsx'), s1);

// sections2-v4.jsx
let s2 = fs.readFileSync(path.join(src, 'sections2-v4.jsx'), 'utf8');
s2 = s2.replace(/const \{ useState: useState2, useEffect: useEffect2 \} = React;\n/, "import { useState } from 'react';\n");
s2 = s2.replace(/useState2/g, 'useState');
s2 = stripWindowAssign(s2);
s2 = fixAssets(s2);
s2 = `'use client';\n\n${iconImports}import { Reveal } from './sections';\n\n` + s2.replace(/^\/\/[\s\S]*?\/\/ =+\n/, '');
s2 += `\nexport { Categories, Pricing, About, Testimonials, FAQ, FinalCTA, Footer };\n`;
fs.writeFileSync(path.join(out, 'sections2.jsx'), s2);

console.log('Migrated components to', out);
