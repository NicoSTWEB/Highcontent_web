'use client';

import { Reveal } from '@/components/reveal';

// ============================================================
// ABOUT
// ============================================================
export default function About() {
  return (
  <section id="about" className="py-16 lg:py-20">
    <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <Reveal className="lg:col-span-4">
          <div className="relative max-w-[320px] mx-auto lg:mx-0">
            <div className="absolute -inset-5 rounded-[36px]" style={{background:'radial-gradient(circle, rgba(196,181,253,0.4), transparent 70%)', filter:'blur(20px)'}}></div>
            <div className="relative aspect-[4/5] rounded-[22px] overflow-hidden border border-line">
              <img src="/assets/founder-karolina.png"
                   alt="Founder"
                   className="absolute inset-0 w-full h-full object-cover"/>
            </div>
            <div className="absolute -right-2 -bottom-2 bg-white border border-line rounded-2xl px-3.5 py-2.5 shadow-card">
              <div className="text-[10.5px] uppercase tracking-[0.18em] font-medium text-ink/45">Founder</div>
              <div className="text-[13.5px] font-semibold mt-0.5">Karolina Nikolaitytė</div>
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-8">
          <span className="inline-block text-[11.5px] uppercase tracking-[0.22em] font-medium text-ink/55 mb-5">About</span>
          <h2 className="font-extrabold tracking-tight text-[38px] sm:text-[52px] leading-[1.04] text-balance">
            Meet the creative mind behind <span className="italic-serif font-normal">your success</span>.
          </h2>
          <p className="mt-6 text-[17px] text-ink/65 leading-[1.65] max-w-[560px]">
            Highcontent was founded by a small studio passionate about design and social media strategy. We help professionals build a premium online presence — effortlessly. We create the content; you edit and post.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-[480px]">
            {[
              ['+2.4k','clients served'],
              ['+58k','assets shipped'],
              ['12 mo','content runway'],
            ].map(([n,l]) => (
              <div key={l} className="border-l border-line pl-4">
                <div className="text-[28px] font-extrabold tracking-tight">{n}</div>
                <div className="text-[12.5px] text-ink/55 mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  </section>
  );
}
