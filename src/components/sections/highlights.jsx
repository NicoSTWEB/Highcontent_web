'use client';

import { useState } from 'react';
import { IconArrow, IconPlay } from '@/components/icons';
import { Reveal } from '@/components/reveal';

// ============================================================
// HIGHLIGHTS (Kits — full mood-board planches)
// ============================================================
const kits = [
  {
    title: 'Dentist Content Kit',
    niche: 'Dentist',
    eyebrow: 'Kit · 01',
    accent: '#EDE9FE',
    postLabel: 'Teeth Whitening Tips',
    postTagline: '5 habits for a brighter smile',
    storyLabel: 'Book Your Appointment',
    storyTagline: 'Open slots · this week',
    photoLabel: 'Smile close-up',
    videoLabel: 'Clinic tour',
    photo: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900&q=80&auto=format&fit=crop',
    video: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&q=80&auto=format&fit=crop',
    highlights: ['Services','Our Team','Reviews','FAQ'],
  },
  {
    title: 'Esthetician Content Kit',
    niche: 'Esthetician',
    eyebrow: 'Kit · 02',
    accent: '#FCE7F3',
    postLabel: 'Glow Routine',
    postTagline: '4 steps for radiant skin',
    storyLabel: 'Before / After',
    storyTagline: 'Result · 4 weeks',
    photoLabel: 'Facial treatment',
    videoLabel: 'Treatment demo',
    photo: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=80&auto=format&fit=crop',
    video: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=80&auto=format&fit=crop',
    highlights: ['Treatments','Booking','Results','About'],
  },
  {
    title: 'Business Coach Content Kit',
    niche: 'Business Coach',
    eyebrow: 'Kit · 03',
    accent: '#FEF3C7',
    postLabel: 'Mindset Quote',
    postTagline: '“Discipline beats motivation.”',
    storyLabel: 'Client Testimonial',
    storyTagline: 'She doubled her revenue',
    photoLabel: 'Professional lifestyle',
    videoLabel: 'Coaching clip',
    photo: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&q=80&auto=format&fit=crop',
    video: 'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=900&q=80&auto=format&fit=crop',
    highlights: ['Programs','Testimonials','Tips','About Me'],
  },
  {
    title: 'Permanent Make-Up Kit',
    niche: 'Permanent Make-Up',
    eyebrow: 'Kit · 04',
    accent: '#FFE4E6',
    postLabel: 'Lip Blush Result',
    postTagline: 'Soft tint · natural finish',
    storyLabel: 'Healing Day 7',
    storyTagline: 'Aftercare checklist',
    photoLabel: 'PMU procedure',
    videoLabel: 'Procedure timelapse',
    photo: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=900&q=80&auto=format&fit=crop',
    video: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=900&q=80&auto=format&fit=crop',
    highlights: ['Portfolio','Aftercare','Booking','FAQ'],
  },
];

const HighlightIcon = ({ ch, color }) => (
  <div className="aspect-square rounded-full border border-line bg-white grid place-items-center text-[12px] font-semibold"
       style={{ color }}>
    {ch}
  </div>
);

const TypeBadge = ({ children }) => (
  <span className="absolute top-2 left-2 bg-white/95 backdrop-blur px-2 py-0.5 rounded-full text-[9px] uppercase tracking-[0.18em] font-bold text-ink z-10 shadow-sm">{children}</span>
);

const KitBoard = ({ k }) => {
  const hiInitials = k.highlights.map(h => h.charAt(0));
  return (
    <div className="group relative rounded-[24px] overflow-hidden border border-line bg-white hover:shadow-lift transition">
      {/* Board surface */}
      <div className="p-5 lg:p-6" style={{ background: `linear-gradient(180deg, ${k.accent}55 0%, #ffffff 60%)` }}>
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-ink/55">Full package</span>
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-ink">{k.niche}</span>
        </div>

        {/* Top row: story (left, large) + post & photo stack (right) */}
        <div className="grid grid-cols-12 gap-3 h-[260px] sm:h-[300px] lg:h-[320px]">
          {/* Large STORY — fills left column */}
          <div className="col-span-6 relative rounded-[14px] overflow-hidden border border-line ig-placeholder bg-white h-full"
               style={{ background: `linear-gradient(170deg, ${k.accent}, #ffffff 65%)` }}>
            <div className="absolute inset-x-3 top-3 h-0.5 rounded-full bg-ink/15 overflow-hidden">
              <div className="h-full w-2/3" style={{ background: 'linear-gradient(90deg, #C4B5FD, #F9A8D4)' }}></div>
            </div>
            <TypeBadge>Story</TypeBadge>
            <div className="absolute inset-x-4 bottom-4">
              <div className="text-[10px] uppercase tracking-[0.18em] font-semibold text-ink/55 mb-1">{k.storyLabel}</div>
              <div className="italic-serif text-[20px] sm:text-[22px] leading-[1.1] text-ink/85">{k.storyTagline}</div>
            </div>
          </div>

          {/* Right column: post on top, photo on bottom — equal rows */}
          <div className="col-span-6 grid grid-rows-2 gap-3 h-full">
            {/* Feed post template */}
            <div className="relative rounded-[14px] overflow-hidden border border-line ig-placeholder"
                 style={{ background: `linear-gradient(160deg, ${k.accent}, #ffffff)` }}>
              <TypeBadge>Post</TypeBadge>
              <div className="absolute inset-x-3 bottom-2.5">
                <div className="text-[9.5px] uppercase tracking-[0.14em] font-semibold text-ink/55 mb-0.5">{k.postLabel}</div>
                <div className="italic-serif text-[14px] leading-[1.1] text-ink/85 line-clamp-2">{k.postTagline}</div>
              </div>
            </div>

            {/* Photo */}
            <div className="relative rounded-[14px] overflow-hidden border border-line bg-ink/5">
              <img src={k.photo} alt="" className="absolute inset-0 w-full h-full object-cover card-img-hover"/>
              <TypeBadge>Photo</TypeBadge>
              <div className="absolute bottom-0 inset-x-0 px-3 py-2 text-white text-[11px] font-semibold" style={{background:'linear-gradient(180deg, transparent, rgba(0,0,0,0.6))'}}>
                {k.photoLabel}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row: video thumb + highlight icons — matched heights */}
        <div className="grid grid-cols-12 gap-3 mt-3 h-[110px] sm:h-[130px]">
          {/* Video thumb */}
          <div className="col-span-6 relative rounded-[14px] overflow-hidden border border-line bg-ink h-full">
            <img src={k.video} alt="" className="absolute inset-0 w-full h-full object-cover opacity-90 card-img-hover"/>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.55))' }}></div>
            <TypeBadge>Video</TypeBadge>
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 grid place-items-center text-ink">
              <IconPlay size={13}/>
            </span>
            <span className="absolute bottom-2.5 right-2.5 text-[10px] font-medium text-white/95 bg-black/40 backdrop-blur px-1.5 py-0.5 rounded">0:22</span>
            <div className="absolute bottom-2.5 left-2.5 right-16 text-white">
              <div className="text-[11px] font-semibold leading-tight">{k.videoLabel}</div>
            </div>
          </div>

          {/* Highlight covers */}
          <div className="col-span-6 rounded-[14px] border border-line bg-white px-3 py-2.5 relative h-full flex flex-col justify-center">
            <span className="absolute -top-2 left-3 bg-white px-1.5 py-0.5 rounded-full text-[9px] uppercase tracking-[0.18em] font-bold text-ink border border-line">Highlights</span>
            <div className="grid grid-cols-4 gap-2">
              {k.highlights.map((h, idx) => (
                <div key={h} className="flex flex-col items-center gap-1 min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full grid place-items-center text-[11px] font-bold border border-line"
                       style={{ background: `linear-gradient(160deg, ${k.accent}, #ffffff)`, color: '#0A0A0A' }}>
                    {hiInitials[idx]}
                  </div>
                  <span className="text-[9px] text-ink/60 leading-none truncate w-full text-center font-medium">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer caption */}
      <div className="px-6 lg:px-7 py-4 border-t border-line bg-white">
        <div className="text-[12.5px] sm:text-[13px] font-medium tracking-wide text-ink/75 text-center">
          Posts <span className="text-ink/25 mx-1.5">·</span> Stories <span className="text-ink/25 mx-1.5">·</span> Highlights <span className="text-ink/25 mx-1.5">·</span> AI photos <span className="text-ink/25 mx-1.5">·</span> Reels
        </div>
      </div>
    </div>
  );
};

export default function Highlights() {
  const [idx, setIdx] = useState(0);
  const max = kits.length;
  const go = (n) => setIdx((n + max) % max);

  return (
    <section id="highlights" className="bg-white py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <Reveal className="max-w-[1040px] mx-auto">
          {/* Slider header — niche pill + arrows */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              {kits.map((kit, i) => (
                <button
                  key={kit.niche}
                  onClick={() => setIdx(i)}
                  className={`text-[12.5px] font-semibold tracking-tight transition px-3 h-8 rounded-full ${i === idx ? 'bg-ink text-white' : 'text-ink/55 hover:text-ink'}`}>
                  {kit.niche}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => go(idx - 1)} aria-label="Previous"
                      className="w-10 h-10 rounded-full border border-line bg-white grid place-items-center text-ink/70 hover:text-ink hover:border-ink/60 hover:shadow-card transition">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              <button onClick={() => go(idx + 1)} aria-label="Next"
                      className="w-10 h-10 rounded-full bg-ink text-white grid place-items-center hover:shadow-lift transition">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          </div>

          {/* Sliding viewport */}
          <div className="relative overflow-hidden">
            <div className="flex gap-5 transition-transform duration-500 ease-out" style={{ transform: `translateX(calc(-${idx * 100}% - ${idx * 20}px))` }}>
              {kits.map((k) => (
                <div key={k.title} className="shrink-0 w-full">
                  <KitBoard k={k}/>
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-1.5 mt-6">
            {kits.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} aria-label={`Go to slide ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all ${i === idx ? 'w-8 bg-ink' : 'w-1.5 bg-ink/15 hover:bg-ink/30'}`}>
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
