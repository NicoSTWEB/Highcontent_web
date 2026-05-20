import fs from 'fs';

const p = 'src/components/sections/hero.jsx';
let s = fs.readFileSync(p, 'utf8');
const t = ['d', 'i', 'v'].join('');

// Update ECard to support flexGrow
const oldECard = `const ECard = ({ children, ratio, bg, className = '', style = {} }) => (
  <${t}
    className={\`relative rounded-[18px] overflow-hidden hover:-translate-y-0.5 transition gallery-card \${className}\`}
    style={{
      aspectRatio: ratio,
      background: bg || '#fff',
      boxShadow: '0 10px 28px -14px rgba(60,42,28,0.22), 0 2px 6px -2px rgba(60,42,28,0.08)',
      ...style,
    }}
  >
    {children}
  </${t}>
);`;

const newECard = `const ECard = ({ children, ratio, flexGrow, bg, className = '', style = {} }) => (
  <${t}
    className={\`relative rounded-[18px] overflow-hidden hover:-translate-y-0.5 transition gallery-card \${className}\`}
    style={{
      ...(flexGrow != null
        ? { flex: \`\${flexGrow} 1 0\`, minHeight: 0 }
        : ratio
          ? { aspectRatio: ratio }
          : {}),
      background: bg || '#fff',
      boxShadow: '0 10px 28px -14px rgba(60,42,28,0.22), 0 2px 6px -2px rgba(60,42,28,0.08)',
      ...style,
    }}
  >
    {children}
  </${t}>
);`;

if (s.includes('flexGrow')) {
  console.log('ECard already patched');
} else {
  s = s.replace(
    /const ECard = \(\{ children, ratio, bg, className = '', style = \{\} \}\) => \([\s\S]*?\n\);/,
    newECard
  );
}

const oldGallery = `  const col = (mt) => ({
    width: '25%',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    marginTop: mt,
  });

  return (
    <${t} className="mt-8 lg:mt-12 py-10 lg:py-16 bg-white overflow-x-hidden">
      <Reveal>
        <${t} className="mx-auto max-w-[1080px] px-4 sm:px-6">
        <${t} className="flex gap-4 pb-10 w-full">
          {/* ===== COLUMN 1 — marginTop 0 ===== */}
          <${t} style={col('0px')}>
            <ECard ratio="3/4">
              <AnatomyBoard thumbs={moodA} />
            </ECard>
            <ECard ratio="3/5">
              <PhotoCard src={B} alt="Skin close-up with product" />
              <DoDontPhotoOverlay />
            </ECard>
          </${t}>

          {/* ===== COLUMN 2 — marginTop 60px ===== */}
          <${t} style={col('60px')}>
            <ECard ratio="1/1">
              <PhotoCard src={A} alt="Beauty portrait, cream patches" />
            </ECard>
            <ECard ratio="4/5" bg="#B8A287">
              <QuoteCard />
            </ECard>
          </${t}>

          {/* ===== COLUMN 3 — marginTop -40px (highest) ===== */}
          <${t} style={col('-40px')}>
            <ECard ratio="9/16">
              <EditorialOverlay
                src={C}
                pos="50% 30%"
                headline={
                  <>
                    Le lorem ipsum est, en<br />imprimerie, une suite de mots<br />sans signification utilisée à<br />titre provisoire&nbsp;défintif
                  </>
                }
                bottomLeft="Morbi sitnon"
                bottomRight="Suspendi"
                gradient="top"
              />
            </ECard>
            <ECard ratio="3/4">
              <AnatomyBoard thumbs={moodB} />
            </ECard>
          </${t}>

          {/* ===== COLUMN 4 — marginTop 50px ===== */}
          <${t} style={col('50px')}>
            <ECard ratio="3/4">
              <EditorialOverlay
                src={D}
                pos="50% 40%"
                headline={
                  <>
                    Pellentesque<br />signification utilisée<br />quis varius. <em className="italic">varius</em>
                  </>
                }
                gradient="bottom"
              />
            </ECard>
            <ECard ratio="2/3">
              <PhotoCard src={F} alt="Facial treatment portrait" />
            </ECard>
          </${t}>
        </${t}>
        </${t}>
      </Reveal>
    </${t}>
  );
};`;

const newGallery = `  const colClass = 'flex flex-col gap-4 flex-1 min-w-0 min-h-[500px] sm:min-h-[540px] lg:min-h-[580px]';

  return (
    <${t} className="mt-8 lg:mt-12 py-10 lg:py-16 bg-white overflow-x-hidden">
      <Reveal>
        <${t} className="mx-auto max-w-[1080px] px-4 sm:px-6">
        <${t} className="flex gap-4 pb-10 w-full items-start">
          {/* Col 1 — medium top, very tall bottom */}
          <${t} className={colClass}>
            <ECard flexGrow={1}>
              <AnatomyBoard thumbs={moodA} />
            </ECard>
            <ECard flexGrow={1.55}>
              <PhotoCard src={B} alt="Skin close-up with product" />
              <DoDontPhotoOverlay />
            </ECard>
          </${t}>

          {/* Col 2 — tall top, short bottom (offset down) */}
          <${t} className={\`\${colClass} mt-10 sm:mt-14 lg:mt-16\`}>
            <ECard flexGrow={1.4}>
              <PhotoCard src={A} alt="Beauty portrait, cream patches" />
            </ECard>
            <ECard flexGrow={0.88} bg="#B8A287">
              <QuoteCard />
            </ECard>
          </${t}>

          {/* Col 3 — tallest top, short bottom (raised) */}
          <${t} className={\`\${colClass} -mt-6 sm:-mt-8 lg:-mt-10\`}>
            <ECard flexGrow={1.7}>
              <EditorialOverlay
                src={C}
                pos="50% 30%"
                headline={
                  <>
                    Le lorem ipsum est, en<br />imprimerie, une suite de mots<br />sans signification utilisée à<br />titre provisoire&nbsp;défintif
                  </>
                }
                bottomLeft="Morbi sitnon"
                bottomRight="Suspendi"
                gradient="top"
              />
            </ECard>
            <ECard flexGrow={0.82}>
              <AnatomyBoard thumbs={moodB} />
            </ECard>
          </${t}>

          {/* Col 4 — medium top, tall bottom (offset down) */}
          <${t} className={\`\${colClass} mt-8 sm:mt-12 lg:mt-14\`}>
            <ECard flexGrow={1.05}>
              <EditorialOverlay
                src={D}
                pos="50% 40%"
                headline={
                  <>
                    Pellentesque<br />signification utilisée<br />quis varius. <em className="italic">varius</em>
                  </>
                }
                gradient="bottom"
              />
            </ECard>
            <ECard flexGrow={1.38}>
              <PhotoCard src={F} alt="Facial treatment portrait" />
            </ECard>
          </${t}>
        </${t}>
        </${t}>
      </Reveal>
    </${t}>
  );
};`;

if (s.includes('const colClass')) {
  console.log('gallery already patched');
} else {
  const start = s.indexOf('  const col = (mt)');
  const end = s.indexOf('};', s.indexOf('const HeroGallery'));
  if (start === -1 || end === -1) {
    console.error('could not find HeroGallery block', start, end);
    process.exit(1);
  }
  s = s.slice(0, start) + newGallery.slice(newGallery.indexOf('  const colClass')) + s.slice(end + 2);
}

fs.writeFileSync(p, s);
console.log('patched hero heights');
