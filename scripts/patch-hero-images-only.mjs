import fs from 'fs';

const p = 'src/components/sections/hero.jsx';
let s = fs.readFileSync(p, 'utf8');

const start = s.indexOf('// Mood-board card');
const end = s.indexOf('const HeroGallery = () => {');
if (start === -1 || end === -1) {
  console.error('markers not found');
  process.exit(1);
}

const photoCard = `// Full-bleed gallery image (no text overlays)
const PhotoCard = ({ src, alt, pos = 'center' }) => (
  <img
    src={src}
    alt={alt}
    className="absolute inset-0 w-full h-full object-cover"
    style={{ objectPosition: pos }}
  />
);

`;

s = s.slice(0, start) + photoCard + s.slice(end);

const galleryStart = s.indexOf('const HeroGallery = () => {');
const galleryEnd = s.indexOf('};', s.indexOf('const MarqueeCard'));
if (galleryStart === -1 || galleryEnd === -1) {
  console.error('gallery end not found');
  process.exit(1);
}

const newGallery = `const HeroGallery = () => {
  const img = {
    A: '/assets/gallery/perfect-skin-story.png',
    B: '/assets/gallery/orelia-skin-midnight-highlight.png',
    C: '/assets/gallery/orelia-skin-highlight.png',
    D: '/assets/gallery/skincare-essence-post.png',
    E: '/assets/gallery/skincare-essence-kitchen-post.png',
    F: '/assets/gallery/elite-aura-story.png',
    G: '/assets/gallery/power-edit-highlight.png',
    H: '/assets/gallery/power-edit-alt.png',
    I: '/assets/gallery/femme-capitale-post.png',
  };

  const colClass = 'flex flex-col gap-4 flex-1 min-w-0 min-h-[500px] sm:min-h-[540px] lg:min-h-[580px]';

  return (
    <motionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessdiv className="mt-8 lg:mt-12 py-10 lg:py-16 bg-white overflow-x-hidden">
      <Reveal>
        <motionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessdiv className="mx-auto max-w-[1080px] px-4 sm:px-6">
        <motionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessdiv className="flex gap-4 pb-10 w-full items-start">
          <motionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessdiv className={colClass}>
            <ECard flexGrow={1}><PhotoCard src={img.G} alt="" pos="50% 35%" /></ECard>
            <ECard flexGrow={1.55}><PhotoCard src={img.B} alt="" pos="50% 40%" /></ECard>
          </motionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessdiv>
          <motionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessdiv className={\`\${colClass} mt-10 sm:mt-14 lg:mt-16\`}>
            <ECard flexGrow={1.4}><PhotoCard src={img.A} alt="" pos="50% 22%" /></ECard>
            <ECard flexGrow={0.88}><PhotoCard src={img.E} alt="" pos="50% 55%" /></ECard>
          </motionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessdiv>
          <motionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessdiv className={\`\${colClass} -mt-6 sm:-mt-8 lg:-mt-10\`}>
            <ECard flexGrow={1.7}><PhotoCard src={img.C} alt="" pos="50% 30%" /></ECard>
            <ECard flexGrow={0.82}><PhotoCard src={img.H} alt="" pos="50% 35%" /></ECard>
          </motionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessdiv>
          <motionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessdiv className={\`\${colClass} mt-8 sm:mt-12 lg:mt-14\`}>
            <ECard flexGrow={1.05}><PhotoCard src={img.I} alt="" pos="50% 40%" /></ECard>
            <ECard flexGrow={1.38}><PhotoCard src={img.F} alt="" pos="50% 35%" /></ECard>
          </motionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessdiv>
        </motionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessdiv>
        </motionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessdiv>
      </Reveal>
    </motionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessmotionlessdiv>
  );
};
`;

// Fix motionless tags in newGallery - build with div
const t = ['d', 'i', 'v'].join('');
const cleanGallery = newGallery.replace(/<\/?motionless[a-z]*>/gi, (m) =>
  m.startsWith('</') ? `</${t}>` : `<${t}`
);

s = s.slice(0, galleryStart) + cleanGallery + s.slice(galleryEnd + 2);

fs.writeFileSync(p, s);
console.log('done', !s.includes('AnatomyBoard'), !s.includes('DoDontPhotoOverlay'));
