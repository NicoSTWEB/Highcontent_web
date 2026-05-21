'use client';

import { IconArrow } from '@/components/icons';
import { Reveal } from '@/components/reveal';
import { PRICING_CATEGORIES as categories } from '@/data/categories';

// ============================================================
// CATEGORIES
// ============================================================

export default function Categories({ onOpenContact }) {
  return (
  <section id="categories" className="bg-white py-16 lg:py-20">
    <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
      <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
        <div className="max-w-[760px]">
          <span className="inline-block text-[11.5px] uppercase tracking-[0.22em] font-medium text-ink/55 mb-5">Built for your niche</span>
          <h2 className="font-extrabold tracking-tight text-[40px] sm:text-[56px] leading-[1.04] text-balance">
            Who it's <span className="italic-serif font-normal">made for</span>.
          </h2>
        </div>
        <p className="text-[16px] text-ink/60 max-w-[420px] leading-[1.55]">
          Each library is shot, written, and styled for one specific industry — not a generic stock dump.
        </p>
      </Reveal>

      <Reveal className="grid sm:grid-cols-2 gap-4 lg:gap-6">
        {categories.map((c, i) => (
          <a key={c.title} href="#pricing" className="group relative block rounded-[22px] overflow-hidden border border-line bg-ink aspect-[16/11]">
            <img src={c.img} alt={c.title} className="absolute inset-0 w-full h-full object-cover card-img-hover opacity-95"/>
            <div className="absolute inset-0" style={{background:'linear-gradient(180deg, rgba(10,10,10,0) 35%, rgba(10,10,10,0.85) 100%)'}}></div>
            <div className="absolute left-6 right-6 bottom-6 flex items-end justify-between gap-4 text-white">
              <div className="min-w-0">
                <div className="text-[28px] sm:text-[32px] font-bold tracking-tight leading-tight">{c.title}</div>
                <div className="text-[13.5px] text-white/75 mt-1">{c.sub}</div>
              </div>
              <span className="btn-pill inline-flex items-center gap-1.5 bg-ink text-white px-4 h-10 rounded-full text-[13px] font-semibold shrink-0">
                Access <IconArrow size={14}/>
              </span>
            </div>
          </a>
        ))}
      </Reveal>

      <Reveal className="mt-12 text-center">
        <p className="text-[14px] text-ink/55">
          Don&apos;t see your niche?{' '}
          <button
            type="button"
            onClick={onOpenContact}
            className="font-semibold text-ink hover:underline"
          >
            Tell us what you need →
          </button>
        </p>
      </Reveal>
    </div>
  </section>
  );
}
