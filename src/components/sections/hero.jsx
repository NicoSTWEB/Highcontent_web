'use client';

import { IconArrow, IconPlay, IconCanva, IconInstagram, IconFacebook, IconLinkedin, IconPinterest } from '@/components/icons';
import { Reveal } from '@/components/reveal';

// ============================================================
// HERO
// ============================================================
const InstagramTile = ({ tone, label, big }) => (
  <div className={`relative ${big ? 'aspect-[4/5]' : 'aspect-square'} rounded-[14px] overflow-hidden ig-placeholder border border-line bg-white`}
       style={{background: tone}}>
    <div className="absolute inset-0 flex flex-col justify-between p-3">
      <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-ink/55">{label}</span>
      <div className="flex items-end justify-between">
        <span className="italic-serif text-[22px] leading-none text-ink">post</span>
        <span className="w-6 h-6 rounded-full bg-white/70 backdrop-blur grid place-items-center text-[10px]">♡</span>
      </div>
    </div>
  </div>
);

// =============================================================
// Hero gallery — 4 columns × 2 cards (8 total), staggered offsets
// =============================================================
const ECard = ({ children, ratio, flexGrow, bg, className = '', style = {} }) => (
  <div
    className={`relative rounded-[24px] overflow-hidden gallery-card ${className}`}
    style={{
      ...(flexGrow != null
        ? { flex: `${flexGrow} 1 0`, minHeight: 0 }
        : ratio
          ? { aspectRatio: ratio }
          : {}),
      background: bg || '#fff',
      boxShadow: '0 10px 28px -14px rgba(60,42,28,0.22), 0 2px 6px -2px rgba(60,42,28,0.08)',
      ...style,
    }}
  >
    {children}
  </div>
);

// Full-bleed gallery image (no text overlays)
const PhotoCard = ({ src, alt, pos = 'center' }) => (
  <img
    src={src}
    alt={alt}
    className="absolute inset-0 w-full h-full object-cover"
    style={{ objectPosition: pos }}
  />
);

const HeroGallery = () => {
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

  // Cols 1 & 3 flush top; cols 2 & 4 staggered — taller min-height compensates for margin-top
  const colBase = 'gallery-col flex flex-col gap-4 sm:gap-5 flex-1 min-w-0';
  const colClass = `${colBase} min-h-[520px] sm:min-h-[560px] lg:min-h-[700px]`;
  const colStagger = `${colBase} mt-12 sm:mt-16 lg:mt-[3.25rem] pb-[80px] min-h-[568px] sm:min-h-[624px] lg:min-h-[784px]`;

  return (
    <div className="mt-8 lg:mt-12 py-10 lg:py-16 bg-white overflow-x-hidden">
      <Reveal>
        <div className="mx-auto max-w-[1080px] px-4 sm:px-6">
          <div className="flex gap-4 sm:gap-5 pb-10 w-full items-stretch">
            <div className={colClass}>
              <ECard flexGrow={1.00}><PhotoCard src={img.I} alt="" pos="50% 28%" /></ECard>
              <ECard flexGrow={1.6}><PhotoCard src={img.B} alt="" pos="50% 38%" /></ECard>
            </div>
            <div className={colStagger}>
              <ECard flexGrow={0.88}><PhotoCard src={img.E} alt="" pos="50% 42%" /></ECard>
              <ECard flexGrow={1.05}><PhotoCard src={img.A} alt="" pos="50% 22%" /></ECard>
            </div>
            <div className={colClass}>
              <ECard flexGrow={1.55}><PhotoCard src={img.C} alt="" pos="50% 30%" /></ECard>
              <ECard flexGrow={1.30}><PhotoCard src={img.H} alt="" pos="50% 35%" /></ECard>
            </div>
            <div className={colStagger}>
              <ECard flexGrow={0.88}><PhotoCard src={img.G} alt="" pos="50% 35%" /></ECard>
              <ECard flexGrow={1.22}><PhotoCard src={img.F} alt="" pos="50% 35%" /></ECard>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );


};

// One masonry column. `kind` controls vertical alignment of the card within the strip.
const MarqueeColumn = ({ kind, item }) => {
  // Tall (story/video) and photo bottom both fill full height differently;
  // posts (square) sit at top or bottom of the column.
  const align = kind === 'top' ? 'items-start'
              : kind === 'bottom' ? 'items-end'
              : 'items-stretch';
  return (
    <div className={`shrink-0 w-[180px] sm:w-[210px] h-[360px] sm:h-[400px] flex flex-col ${align}`}>
      <MarqueeCard it={item}/>
    </div>
  );
};

export default function Hero({ palette }) {
  return (
    <section id="top" className="relative pt-[160px] pb-20 lg:pb-24 overflow-hidden">
      {/* halo — tilted ovals on left & right, clear center */}
      <div className="pointer-events-none absolute inset-x-0 top-[60px] h-[560px] -z-0">
        <div
          className="absolute -left-[12%] sm:-left-[6%] lg:-left-[4%] top-1/2 w-[min(78vw,780px)] h-[300px] lg:h-[462px] origin-center"
          style={{
            background: `radial-gradient(ellipse 95% 72% at 58% 50%, ${palette[0]}99 0%, ${palette[0]}55 38%, rgba(255,255,255,0) 72%)`,
            filter: 'blur(40px)',
            transform: 'translateY(-50%) rotate(22deg)',
          }}
        />
        <div
          className="absolute -right-[12%] sm:-right-[6%] lg:-right-[4%] top-1/2 w-[min(78vw,780px)] h-[300px] lg:h-[462px] origin-center"
          style={{
            background: `radial-gradient(ellipse 95% 72% at 42% 50%, ${palette[1]}99 0%, ${palette[1]}55 38%, rgba(255,255,255,0) 72%)`,
            filter: 'blur(40px)',
            transform: 'translateY(-50%) rotate(-22deg)',
          }}
        />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
        <Reveal className="text-center max-w-[1000px] mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur border border-line rounded-full px-3.5 py-1.5 text-[12px] font-medium tracking-[0.14em] uppercase text-ink/70 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            New · 360 fresh assets dropped this month
          </div>
          <h1 className="font-extrabold tracking-tight text-[38px] sm:text-[52px] lg:text-[68px] leading-[1.02] text-ink text-balance">
            Access ready-to-post social media <span className="italic-serif font-normal text-ink/90">templates</span>,
            <br className="hidden sm:block"/>
            realistic AI <span className="italic-serif font-normal text-ink/90">video</span> and <span className="italic-serif font-normal text-ink/90">image</span> stock.
          </h1>
          <p className="mt-7 text-[17px] lg:text-[19px] text-ink/60 max-w-[620px] mx-auto leading-[1.55]">
            We give you the best content and strategy to turn your Social Media into a lead-generating machine.
          </p>
          <div className="mt-9 flex items-center justify-center gap-4 flex-wrap">
            <a href="#pricing" className="btn-pill inline-flex items-center gap-2 bg-ink text-white px-5 h-10 rounded-full text-[14px] font-medium">
              Get Started <IconArrow size={16}/>
            </a>
            <a href="#dashboard" className="inline-flex items-center gap-2 px-4 h-10 rounded-full text-[14px] font-medium text-ink/80 hover:text-ink">
              <span className="w-7 h-7 rounded-full border border-line grid place-items-center"><IconPlay size={11}/></span>
              See the library
            </a>
          </div>
        </Reveal>
      </div>

      {/* Trust bar — between hero text and gallery */}
      <Reveal className="mt-14 lg:mt-20 max-w-[960px] mx-auto px-6 lg:px-10">
        <p className="text-center text-[13.5px] sm:text-[14.5px] font-medium text-ink mb-6 lg:mb-7">Works with your favorite platforms</p>
        <div className="flex items-center justify-center gap-9 sm:gap-12 lg:gap-14 flex-wrap text-ink/45">
          <div className="group flex items-center gap-2 hover:text-ink/85 transition"><IconCanva size={26}/><span className="font-semibold text-[13.5px]">Canva</span></div>
          <div className="flex items-center gap-2 hover:text-ink/85 transition"><IconInstagram size={26}/><span className="font-semibold text-[13.5px]">Instagram</span></div>
          <div className="flex items-center gap-2 hover:text-ink/85 transition"><IconFacebook size={26}/><span className="font-semibold text-[13.5px]">Facebook</span></div>
          <div className="flex items-center gap-2 hover:text-ink/85 transition"><IconLinkedin size={26}/><span className="font-semibold text-[13.5px]">LinkedIn</span></div>
          <div className="flex items-center gap-2 hover:text-ink/85 transition"><IconPinterest size={26}/><span className="font-semibold text-[13.5px]">Pinterest</span></div>
        </div>
      </Reveal>

      <Reveal className="text-center max-w-[820px] mx-auto mt-24 lg:mt-32 px-6 lg:px-10">
        <h2 className="font-extrabold tracking-tight text-[40px] sm:text-[56px] leading-[1.04] text-ink text-balance">
          <span className="italic-serif font-normal">Weeks</span> of work. <br/>Done in <span className="italic-serif font-normal">minutes</span>.
        </h2>
      </Reveal>

      <HeroGallery />
    </section>
  );
};
