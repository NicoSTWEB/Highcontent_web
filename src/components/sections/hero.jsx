'use client';

import { IconArrow, IconPlay, IconCanva, IconInstagram, IconFacebook, IconLinkedin, IconPinterest } from '@/components/icons';
import { Reveal } from '@/components/reveal';

// ============================================================
// HERO
// ============================================================
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
            360 assets dropped this month
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

      {/* Trust bar */}
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
    </section>
  );
}
