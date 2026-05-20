'use client';

import { IconArrow } from '@/components/icons';
import { Reveal } from '@/components/reveal';

// ============================================================
// FINAL CTA
// ============================================================
export default function FinalCTA({ palette }) {
  return (
  <section id="get-started" className="bg-white py-16 lg:py-24">
    <div className="max-w-7xl mx-auto px-4">
      <Reveal
        className="relative rounded-[2.5rem] overflow-hidden border border-line/70 py-16 lg:py-20 px-8 text-center"
        style={{
          background:
            `radial-gradient(ellipse 45% 55% at 12% 20%, ${palette[0]}1f 0%, ${palette[0]}00 60%),` +
            `radial-gradient(ellipse 45% 55% at 88% 80%, ${palette[1]}1f 0%, ${palette[1]}00 60%),` +
            'linear-gradient(90deg, rgba(245,243,255,0.6) 0%, rgba(255,255,255,1) 50%, rgba(253,242,248,0.6) 100%)',
        }}
      >
        <h2 className="font-extrabold tracking-tight text-[34px] sm:text-[48px] lg:text-[56px] leading-[1.05] text-ink text-balance">
          Ready to stop settling <span className="italic-serif font-normal">for average?</span>
        </h2>
        <p className="mt-3 text-gray-500 text-sm md:text-base max-w-[520px] mx-auto leading-[1.55]">
          Highcontent is built for professionals who refuse to settle.
        </p>

        <div className="mt-7 flex items-center justify-center flex-wrap">
          <a href="#pricing" className="btn-pill inline-flex items-center gap-2 bg-ink text-white px-5 h-10 rounded-full text-[14px] font-medium">
            Get Started <IconArrow size={16}/>
          </a>
          <a href="#contact" className="text-black text-sm font-medium ml-4 hover:underline cursor-pointer">
            Talk to us
          </a>
        </div>

        <div className="mt-8 text-[12.5px] text-gray-400">
          Cancel anytime · €0 setup · Edit everything in Canva
        </div>
      </Reveal>
    </div>
  </section>
  );
}
