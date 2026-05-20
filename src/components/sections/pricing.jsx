'use client';

import { useState } from 'react';
import { IconArrow, IconCheck, IconX, IconChevron } from '@/components/icons';
import { ContactModal } from '@/components/contact-modal';
import { PricingCategoryPicker } from '@/components/pricing-category-picker';
import { PRICING_CATEGORIES } from '@/data/categories';
import { Reveal } from '@/components/reveal';

const PLANS_WITH_CATEGORIES = ['starter', 'pro'];

// ============================================================
// PRICING
// ============================================================
const planFeatures = (cycleMult) => {
  const f = (eur) => `€${Math.round(eur * cycleMult)}`;
  return [
    {
      id: 'starter',
      name: 'Starter',
      tag: 'For Dentists, Estheticians & Business Coaches',
      price: f(99),
      cycle: '/month',
      desc: 'Social Media Content System',
      cta: 'Get Started',
      featured: false,
      inside: ['120 Feed Posts','54 Story Designs','24 Highlight Covers','6 Feed Design Systems','6 Content Collections','100+ Realistic Photo & Video Assets'],
      updates: ['120 New Posts','New Story Content','1 New Design Collection'],
      pros: [
        'Fast content creation system',
        'Edit easily in Canva',
        'Post professional content in minutes',
        'Visually consistent branding',
        'Unlimited downloads',
        'Multi-platform: IG, FB, LinkedIn, Pinterest',
        'Personal & business use',
        'Customer support',
      ],
      cons: ['Not for client work','Not for resale'],
      ideal: 'Professionals growing their brand without hiring a designer.',
    },
    {
      id: 'pro',
      name: 'Pro',
      tag: 'For Social Media Managers & Agencies',
      price: f(159),
      cycle: '/month',
      desc: 'Social Media Content System',
      cta: 'Get Started',
      featured: true,
      inside: ['All 3 industry niches included','360 Feed Posts','162 Story Designs','72 Highlight Covers','18 Feed Design Systems','18 Content Collections','300+ Realistic Photo & Video Assets'],
      updates: ['360 New Posts','New Story Content','3 New Design Collections'],
      pros: [
        'Everything in Starter',
        'Use across multiple client projects',
        'Licensed for personal, business & client use',
        'Premium customer support',
      ],
      cons: ['Not for resale or redistribution'],
      ideal: 'Agencies and SMMs running 3+ clients at a time.',
    },
    {
      id: 'custom',
      name: 'Custom',
      tag: 'Built Specifically For Your Business',
      price: 'From €1,000',
      cycle: '',
      desc: 'Custom Social Media Branding System',
      cta: 'Contact Us',
      featured: false,
      inside: ['1 Custom Branded Canva Template','20 Feed Posts','10 Story Designs','30 Highlight Covers','AI Realistic Photo & Video Assets','Brand Color & Visual Direction','1 Monthly Strategy Call'],
      updates: ['+€500/month optional content support'],
      pros: [
        'Fully customized for your brand',
        'Professional and visually consistent',
        'Multi-platform ready',
        'Premium support',
      ],
      cons: [],
      ideal: 'Businesses that want a premium presence — done for them.',
    },
  ];
};

export default function Pricing({ palette }) {
  const [cycle, setCycle] = useState('monthly');
  const [expanded, setExpanded] = useState({});
  const [contactOpen, setContactOpen] = useState(false);
  const [contactPlan, setContactPlan] = useState(null);
  const [contactCategory, setContactCategory] = useState(null);
  const [categoryPickerFor, setCategoryPickerFor] = useState(null);
  const mult = cycle === 'monthly' ? 1 : cycle === 'quarterly' ? 0.9 : 0.75;
  const plans = planFeatures(mult);
  const toggle = (id) => setExpanded(s => ({ ...s, [id]: !s[id] }));

  const openContact = (plan, category = null) => {
    setContactPlan(plan);
    setContactCategory(category);
    setContactOpen(true);
  };

  const closeContact = () => {
    setContactOpen(false);
    setContactPlan(null);
    setContactCategory(null);
  };

  return (
    <section id="pricing" className="py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <Reveal className="text-center max-w-[820px] mx-auto">
          <span className="inline-block text-[11.5px] uppercase tracking-[0.22em] font-medium text-ink/55 mb-5">Pricing</span>
          <h2 className="font-extrabold tracking-tight text-[40px] sm:text-[56px] leading-[1.04] text-balance">
            Pick the <span className="italic-serif font-normal">plan</span> that <span className="italic-serif font-normal">fits</span> your business.
          </h2>
        </Reveal>

        <Reveal className="mt-10 flex justify-center">
          <div className="inline-flex items-center bg-bg2 border border-line p-1 rounded-full">
            {[
              ['monthly','Monthly'],
              ['quarterly','Quarterly · −10%'],
              ['yearly','Yearly · −25%'],
            ].map(([k,l]) => (
              <button key={k} onClick={()=>setCycle(k)} className={`px-4 sm:px-5 h-10 rounded-full text-[13px] sm:text-[13.5px] font-medium transition ${cycle===k ? 'tab-active shadow-card' : 'text-ink/55 hover:text-ink'}`}>
                {l}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-12 grid lg:grid-cols-3 gap-5 lg:gap-6 items-start">
          {plans.map((p) => {
            const isOpen = !!expanded[p.id];
            const showCategories = categoryPickerFor === p.id;
            const hasCategoryStep = PLANS_WITH_CATEGORIES.includes(p.id);
            return (
              <div key={p.id}
                   className={`relative rounded-[24px] border bg-white p-7 lg:p-8 transition flex flex-col ${p.featured ? 'border-transparent shadow-lift' : 'border-line hover:shadow-card'}`}
                   style={p.featured ? {boxShadow: '0 18px 50px -20px rgba(196,181,253,0.6), 0 0 0 1px rgba(196,181,253,0.4)'} : {}}>
                {p.featured && (
                  <div className="absolute inset-0 rounded-[24px] pointer-events-none" style={{background: 'linear-gradient(180deg, rgba(237,233,254,0.6), rgba(252,231,243,0.25) 60%, transparent)'}}></div>
                )}
                <div className="relative flex flex-col flex-1">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[12px] uppercase tracking-[0.22em] font-medium text-ink/55">{p.name}</span>
                    {p.id === 'starter' && <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-medium">Best to start</span>}
                    {p.id === 'pro' && <span className="text-[11px] px-2 py-0.5 rounded-full font-semibold text-white" style={{background:'linear-gradient(95deg, #6d5fd1, #d97ab1)'}}>Ideal for Pros</span>}
                    {p.id === 'custom' && <span className="text-[11px] px-2 py-0.5 rounded-full bg-ink/5 text-ink font-medium border border-line">Made for you</span>}
                  </div>
                  <div className="mt-4 flex items-baseline justify-between gap-2 whitespace-nowrap">
                    <div className="flex items-baseline gap-1.5 min-w-0">
                      {p.price.startsWith('From ') ? (
                        <>
                          <span className="text-[15px] font-medium text-ink/55">From</span>
                          <span className="text-[34px] sm:text-[38px] font-extrabold tracking-tight leading-none">{p.price.replace('From ', '')}</span>
                        </>
                      ) : (
                        <span className="text-[38px] sm:text-[42px] font-extrabold tracking-tight leading-none">{p.price}</span>
                      )}
                    </div>
                    <span className="text-[13.5px] text-ink/55 shrink-0">{p.cycle}</span>
                  </div>
                  <p className="mt-2 text-[13.5px] text-ink/60">{p.tag}</p>

                  <div className="my-6 h-px bg-line"></div>

                  {showCategories ? (
                    <PricingCategoryPicker
                      categories={PRICING_CATEGORIES}
                      onSelect={(cat) => openContact(p, cat)}
                      onBack={() => setCategoryPickerFor(null)}
                    />
                  ) : (
                    <>
                      <div className="text-[12px] uppercase tracking-[0.18em] font-semibold text-ink/75 mb-3">What you get inside</div>
                      <ul className="space-y-2 mb-5">
                        {p.inside.map(t => (
                          <li key={t} className="flex items-start gap-2.5 text-[14px] text-ink/80">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-ink/40 shrink-0"></span>{t}
                          </li>
                        ))}
                      </ul>

                      <div className="text-[12px] uppercase tracking-[0.18em] font-semibold text-ink/75 mb-3">Monthly updates</div>
                      <ul className="space-y-2 mb-5">
                        {p.updates.map(t => (
                          <li key={t} className="flex items-start gap-2.5 text-[14px] text-ink/80">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-ink/40 shrink-0"></span>{t}
                          </li>
                        ))}
                      </ul>

                      {isOpen && (
                        <div>
                          <ul className="space-y-2.5 mb-5">
                            {p.pros.map(t => (
                              <li key={t} className="flex items-start gap-2.5 text-[14px]">
                                <span className="mt-0.5 w-5 h-5 rounded-full bg-emerald-50 grid place-items-center shrink-0 text-emerald-600"><IconCheck size={11}/></span>
                                <span className="text-ink/85">{t}</span>
                              </li>
                            ))}
                            {p.cons.map(t => (
                              <li key={t} className="flex items-start gap-2.5 text-[14px]">
                                <span className="mt-0.5 w-5 h-5 rounded-full bg-rose-50 grid place-items-center shrink-0 text-rose-500"><IconX size={11}/></span>
                                <span className="text-ink/55">{t}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <button onClick={() => toggle(p.id)} className="mb-8 inline-flex items-center gap-2 text-[13px] font-semibold text-ink underline underline-offset-4 decoration-1 hover:decoration-2 self-start">
                        {isOpen ? 'Hide full details' : 'See full details'}
                        <IconChevron size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}/>
                      </button>
                    </>
                  )}

                  {!showCategories && (
                    p.id === 'custom' ? (
                      <button
                        type="button"
                        onClick={() => openContact(p)}
                        className="btn-pill mt-auto w-full inline-flex items-center justify-center gap-2 h-12 rounded-full text-[14.5px] font-medium border border-ink text-ink hover:bg-ink hover:text-white transition"
                      >
                        {p.cta} <IconArrow size={15}/>
                      </button>
                    ) : hasCategoryStep ? (
                      <button
                        type="button"
                        onClick={() => setCategoryPickerFor(p.id)}
                        className={`btn-pill mt-auto w-full inline-flex items-center justify-center gap-2 h-12 rounded-full text-[14.5px] font-medium ${p.featured ? 'bg-ink text-white' : 'border border-ink text-ink hover:bg-ink hover:text-white transition'}`}
                      >
                        {p.cta} <IconArrow size={15}/>
                      </button>
                    ) : (
                      <a href="#contact" className={`btn-pill mt-auto w-full inline-flex items-center justify-center gap-2 h-12 rounded-full text-[14.5px] font-medium ${p.featured ? 'bg-ink text-white' : 'border border-ink text-ink hover:bg-ink hover:text-white transition'}`}>
                        {p.cta} <IconArrow size={15}/>
                      </a>
                    )
                  )}
                </div>
              </div>
            );
          })}
        </Reveal>

        <Reveal className="mt-10 text-center text-[13px] text-ink/55">
          All plans auto-renew. Cancel anytime before the next billing cycle.
        </Reveal>
      </div>

      <ContactModal
        open={contactOpen}
        onClose={closeContact}
        plan={contactPlan}
        category={contactCategory}
      />
    </section>
  );
};
