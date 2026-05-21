'use client';

import { IconCheck, IconX, IconPost, IconStory, IconHighlight, IconPhoto, IconVideo } from '@/components/icons';
import { Reveal } from '@/components/reveal';

// ============================================================
// BENEFITS (5 cards + before/after)
// ============================================================
const benefitCards = [
  { icon: IconPost, title: 'Post', desc: 'Professionally designed feed posts ready to customize and publish.', stat: '120 designs', accent: '#EDE9FE' },
  { icon: IconStory, title: 'Story', desc: 'Engaging story templates sized and optimized for maximum reach.', stat: '54 templates', accent: '#FCE7F3' },
  { icon: IconHighlight, title: 'Highlights', desc: 'Branded highlight covers to organize and elevate your profile.', stat: '24 covers', accent: '#D1FAE5' },
  { icon: IconPhoto, title: 'Photos', desc: 'AI-generated realistic lifestyle and product photography.', stat: '60+ photos', accent: '#FEF3C7' },
  { icon: IconVideo, title: 'Videos', desc: 'Short-form video assets ready for reels and stories.', stat: '40+ reels', accent: '#E0F2FE' },
];

const BeforeAfter = () => {
  const before = [
    'Inconsistent posting schedule',
    'Low engagement, slow growth',
    'Hours spent creating each post',
    'No idea what to post',
    'Spending weekends in Canva',
  ];
  const after = [
    'Posting daily without the stress',
    'Faster follower growth & reach',
    'Ready-to-post in under 10 minutes',
    'Mix of lifestyle + product content',
    'Professional content in minutes',
  ];
  return (
    <Reveal>
      <div className="text-center max-w-[680px] mx-auto mb-10">
        <span className="inline-block text-[11.5px] uppercase tracking-[0.22em] font-medium text-ink/55 mb-4">The shift</span>
        <h3 className="font-extrabold tracking-tight text-[30px] sm:text-[40px] leading-[1.05] text-balance">
          What <span className="italic-serif font-normal">changes</span> when you <span className="italic-serif font-normal">switch</span>.
        </h3>
      </div>
      <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 max-w-[980px] mx-auto">
        {/* BEFORE */}
        <div className="rounded-[24px] border border-line overflow-hidden bg-white">
          <div className="px-7 lg:px-9 py-6 flex items-center justify-between" style={{ background: 'linear-gradient(135deg, #fff1f2, #fee2e2)' }}>
            <div>
              <div className="text-[11.5px] uppercase tracking-[0.22em] font-semibold text-rose-700/80 mb-1">Before</div>
              <div className="text-[24px] sm:text-[28px] font-extrabold tracking-tight text-ink">Without Highcontent</div>
            </div>
            <span className="w-12 h-12 rounded-full bg-white/80 grid place-items-center text-rose-500 shadow-card"><IconX size={20}/></span>
          </div>
          <ul className="px-3 sm:px-5 py-3">
            {before.map((t, i) => (
              <li key={t} className={`flex items-center gap-4 px-4 py-4 rounded-xl ${i % 2 ? 'bg-bg2/60' : ''}`}>
                <span className="w-7 h-7 rounded-full grid place-items-center shrink-0 text-rose-500 border border-rose-100"
                      style={{background:'linear-gradient(135deg, #fff1f2, #fee2e2)'}}><IconX size={14}/></span>
                <span className="text-[15.5px] text-ink/80 leading-snug">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* AFTER */}
        <div className="rounded-[24px] border border-line overflow-hidden bg-white relative">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none" style={{background:'radial-gradient(circle, rgba(196,181,253,0.45), transparent 70%)', filter:'blur(30px)'}}></div>
          <div className="px-7 lg:px-9 py-6 flex items-center justify-between relative" style={{ background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)' }}>
            <div>
              <div className="text-[11.5px] uppercase tracking-[0.22em] font-semibold text-emerald-700/85 mb-1">After</div>
              <div className="text-[24px] sm:text-[28px] font-extrabold tracking-tight text-ink">With Highcontent</div>
            </div>
            <span className="w-12 h-12 rounded-full bg-white/85 grid place-items-center text-emerald-600 shadow-card"><IconCheck size={20}/></span>
          </div>
          <ul className="px-3 sm:px-5 py-3 relative">
            {after.map((t, i) => (
              <li key={t} className={`flex items-center gap-4 px-4 py-4 rounded-xl ${i % 2 ? 'bg-emerald-50/40' : ''}`}>
                <span className="w-7 h-7 rounded-full bg-emerald-50 grid place-items-center shrink-0 text-emerald-600"><IconCheck size={14}/></span>
                <span className="text-[15.5px] text-ink leading-snug font-medium">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
};

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <BeforeAfter />
      </div>
    </section>
  );
}
