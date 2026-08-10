'use client';

import { Reveal } from '@/components/reveal';

// ============================================================
// DASHBOARD PREVIEW
// ============================================================
export default function DashboardPreview() {
  return (
    <section id="dashboard" className="bg-white py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <Reveal className="text-center max-w-[820px] mx-auto mb-4">
          <span className="inline-block text-[11.5px] uppercase tracking-[0.22em] font-medium text-ink/55 mb-5">The dashboard</span>
          <h2 className="font-extrabold tracking-tight text-[40px] sm:text-[56px] leading-[1.04] text-balance">
            All social media <span className="italic-serif font-normal">content</span> in one <span className="italic-serif font-normal">solution</span>.
          </h2>
          <p className="mt-5 text-[16px] text-ink/60 max-w-[560px] mx-auto leading-[1.55]">
            Each kit is a full creative-director mood board — feed, story, reels, AI imagery and highlight covers, curated for your niche.
          </p>
        </Reveal>

        <Reveal className="relative">
          <div className="relative mx-auto max-w-[1080px]">
            <img
              src="/assets/dashboard_screen.png"
              alt="Highcontent dashboard with collections, stories, videos, and analytics"
              className="w-full h-auto"
            />
            <div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-12 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse, rgba(0,0,0,0.18), rgba(0,0,0,0) 70%)',
                filter: 'blur(18px)',
              }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
