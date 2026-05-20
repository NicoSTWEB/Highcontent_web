'use client';

import { IconPlay } from '@/components/icons';
import { Reveal } from '@/components/reveal';

// ============================================================
// DASHBOARD PREVIEW
// ============================================================
export default function DashboardPreview() {
  // Tiny placeholder card used inside the collage "template" tiles
  const MiniCard = ({ bg }) => (
    <div className="rounded-[3px] aspect-[4/5] relative overflow-hidden ig-placeholder" style={{ background: bg }}>
      <span className="absolute inset-x-1 top-1 h-0.5 rounded-full bg-white/60"></span>
    </div>
  );

  // 3x3 collage tile representing a full content template
  const TemplateTile = ({ title, gradient, mini, label }) => (
    <div className="rounded-[14px] overflow-hidden border border-line bg-white">
      <div className="relative aspect-[5/4] p-2 flex flex-col" style={{ background: gradient }}>
        <div className="text-center text-white italic-serif text-[10px] leading-none mb-1 opacity-95">{title}</div>
        <div className="flex-1 grid grid-cols-3 gap-[3px]">
          {Array.from({ length: 9 }).map((_, i) => <MiniCard key={i} bg={mini[i % mini.length]} />)}
        </div>
      </div>
      <div className="px-2 py-1 text-[9.5px] font-medium text-ink/85 truncate">{label}</div>
    </div>
  );

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
            <div className="rounded-[18px] bg-white border border-line shadow-lift overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center justify-between px-4 h-9 bg-bg2 border-b border-line">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]"></span>
                </div>
                <div className="text-[11px] text-ink/45 font-medium">app.highcontent.io</div>
                <div className="w-12"></div>
              </div>

              {/* App body */}
              <div className="flex min-h-[300px] items-stretch">

                {/* Sidebar */}
                <aside className="w-[200px] shrink-0 border-r border-line bg-white flex flex-col relative">
                  <div className="h-[52px] px-4 border-b border-line flex items-center shrink-0">
                    <img src="/assets/highcontent-logo.png" alt="Highcontent" className="h-6 w-auto object-contain"/>
                  </div>
                  <nav className="flex-1 px-2.5 pt-5 pb-16 flex flex-col gap-1.5 text-[12px]">
                    {[
                      { label: 'Collections',    active: true,  glyph: (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>
                      )},
                      { label: 'Favorites', glyph: (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l8.84 8.84 8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>
                      )},
                      { label: 'Support', glyph: (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 1 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1v-7h3v5zM3 19a2 2 0 0 0 2 2h1v-7H3v5z"/></svg>
                      )},
                      { label: 'Refer & Earn', glyph: (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                      )},
                      { label: 'Facebook Group', glyph: (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                      )},
                    ].map((it) => (
                      <div key={it.label} className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg font-medium ${it.active ? 'bg-violet-50 text-violet-700' : 'text-ink/70 hover:bg-bg2'}`}>
                        <span className="w-4 h-4 grid place-items-center">{it.glyph}</span>
                        {it.label}
                      </div>
                    ))}
                  </nav>
                  {/* Floating chat bubble — bottom left */}
                  <div className="absolute left-4 bottom-4 w-9 h-9 rounded-full grid place-items-center text-white shadow-lift" style={{background:'linear-gradient(135deg, #6d5fd1, #d97ab1)'}}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                  </div>
                </aside>

                <div className="flex-1 min-w-0 flex flex-col bg-white">
                    <div className="h-[52px] px-4 flex items-center gap-3 border-b border-line shrink-0">
                      <div className="flex-1 max-w-[420px] flex items-center gap-2 h-8 bg-white border border-line rounded-full px-3.5 text-[11.5px] text-ink/45">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                        Search by title or tag…
                      </div>
                      <div className="flex items-center gap-1.5 text-ink/45 shrink-0 ml-auto">
                        <span className="w-7 h-7 rounded-full grid place-items-center hover:bg-bg2">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                        </span>
                        <span className="relative w-7 h-7 rounded-full grid place-items-center hover:bg-bg2">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                          <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                        </span>
                        <span className="ml-1 flex items-center gap-1 px-1 pr-1.5 py-0.5 rounded-full border border-line">
                          <span className="w-5 h-5 rounded-full bg-violet-100 grid place-items-center text-[9px] font-semibold text-violet-700">K</span>
                          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                        </span>
                      </div>
                    </div>

                    {/* Section title */}
                    <div className="px-3 pt-2.5 pb-2 text-[12px] font-semibold text-ink">All collections</div>

                    {/* Masonry — varied tile sizes, denser */}
                    <div className="px-3 pb-3 grid grid-cols-4 gap-2 items-start">
                      {/* Col 1 — Signature Dental (collage) */}
                      <div className="flex flex-col gap-2">
                        <TemplateTile
                          title="Signature Dental"
                          gradient="linear-gradient(180deg, #a3174d 0%, #6e0f33 100%)"
                          mini={['#f9b3c5','#e7889c','#ffffff','#f9b3c5','#ffffff','#e7889c','#ffffff','#f9b3c5','#e7889c']}
                          label="Template Signature Dental"
                        />
                        {/* Story Dentist — 3:4 */}
                        <div className="rounded-[12px] overflow-hidden border border-line bg-white">
                          <div className="relative aspect-[5/4]">
                            <img src="/assets/gallery/perfect-skin-story.png" alt="" className="absolute inset-0 w-full h-full object-cover"/>
                            <div className="absolute inset-x-2 top-2 flex gap-1">
                              <div className="flex-1 h-0.5 rounded-full bg-white/40 overflow-hidden"><div className="h-full w-full bg-white"></div></div>
                              <div className="flex-1 h-0.5 rounded-full bg-white/40 overflow-hidden"><div className="h-full w-1/2 bg-white"></div></div>
                              <div className="flex-1 h-0.5 rounded-full bg-white/40"></div>
                            </div>
                          </div>
                          <div className="px-2.5 py-1.5 text-[10.5px] font-medium text-ink/85">Story Dentist</div>
                        </div>
                      </div>

                      {/* Col 2 — Photos Dentist (tall) + 4 Highlights */}
                      <div className="flex flex-col gap-2">
                        <div className="rounded-[12px] overflow-hidden border border-line bg-white">
                          <div className="relative aspect-[5/4] bg-[#efeef0]">
                            <img src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80&auto=format&fit=crop"
                                 alt="" className="absolute inset-0 w-full h-full object-cover"/>
                          </div>
                          <div className="px-2.5 py-1.5 text-[10.5px] font-medium text-ink/85">Photos Dentist</div>
                        </div>
                        {/* Highlights set — 4 circles */}
                        <div className="rounded-[12px] overflow-hidden border border-line bg-white">
                          <div className="p-3 grid grid-cols-2 gap-1.5">
                            {[
                              { bg: '#FCE7F3', l: 'S' },
                              { bg: '#EDE9FE', l: 'T' },
                              { bg: '#D1FAE5', l: 'R' },
                              { bg: '#FEF3C7', l: 'F' },
                            ].map((h, i) => (
                              <div key={i} className="aspect-square rounded-full border border-line grid place-items-center text-[10px] font-bold text-ink/85"
                                   style={{background:`linear-gradient(160deg, ${h.bg}, #fff)`}}>{h.l}</div>
                            ))}
                          </div>
                          <div className="px-2.5 py-1.5 border-t border-line/70 text-[10.5px] font-medium text-ink/85">Highlights Dentist</div>
                        </div>
                      </div>

                      {/* Col 3 — Video + Template Clear Dental */}
                      <div className="flex flex-col gap-2">
                        <div className="rounded-[12px] overflow-hidden border border-line bg-white">
                          <div className="relative aspect-[5/4] bg-[#fafafa] grid place-items-center">
                            <span className="w-9 h-9 rounded-full bg-white border border-line grid place-items-center text-ink/80 shadow-card">
                              <IconPlay size={11}/>
                            </span>
                          </div>
                          <div className="px-2.5 py-1.5 text-[10.5px] font-medium text-ink/85">Video Dentist</div>
                        </div>
                        <TemplateTile
                          title="Clear Dental"
                          gradient="linear-gradient(180deg, #1f5fc9 0%, #1546a3 100%)"
                          mini={['#dbeafe','#bfdbfe','#ffffff','#bfdbfe','#ffffff','#dbeafe','#ffffff','#bfdbfe','#dbeafe']}
                          label="Template Clear Dental"
                        />
                      </div>

                      {/* Col 4 — Reels + AI Photos secondary */}
                      <div className="flex flex-col gap-2">
                        {/* Reels collection */}
                        <div className="rounded-[12px] overflow-hidden border border-line bg-white">
                          <div className="relative aspect-[5/4] bg-ink">
                            <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80&auto=format&fit=crop"
                                 alt="" className="absolute inset-0 w-full h-full object-cover opacity-90"/>
                            <div className="absolute inset-0" style={{background:'linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.45) 100%)'}}></div>
                            <span className="absolute top-2 right-2 text-[9px] font-bold text-white/95 bg-black/45 backdrop-blur px-1.5 py-0.5 rounded">0:24</span>
                            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 grid place-items-center text-ink">
                              <IconPlay size={10}/>
                            </span>
                          </div>
                          <div className="px-2.5 py-1.5 text-[10.5px] font-medium text-ink/85">Reels Dentist</div>
                        </div>
                        {/* AI Photos collection */}
                        <div className="rounded-[12px] overflow-hidden border border-line bg-white">
                          <div className="relative aspect-square">
                            <img src="/assets/gallery/femme-capitale-post.png" alt="" className="absolute inset-0 w-full h-full object-cover"/>
                          </div>
                          <div className="px-2.5 py-1.5 text-[10.5px] font-medium text-ink/85">AI Photos · Coach</div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            {/* Glow under */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-12 rounded-full" style={{background: 'radial-gradient(ellipse, rgba(0,0,0,0.18), rgba(0,0,0,0) 70%)', filter: 'blur(18px)'}}></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
