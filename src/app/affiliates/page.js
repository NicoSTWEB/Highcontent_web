'use client';

import { useState } from 'react';
import { ContactModal } from '@/components/contact-modal';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { Reveal } from '@/components/reveal';
import { IconArrow, IconCheck, IconChevron } from '@/components/icons';

const PALETTE = ['#C4B5FD', '#F9A8D4'];

const STEPS = [
  {
    n: '01',
    title: 'Join the program',
    desc: 'Create your affiliate account. You’ll get a dashboard, unique tracking links, and campaign terms in one place.',
  },
  {
    n: '02',
    title: 'Share your link',
    desc: 'Send your link to clients, your audience, or fellow professionals. Rewardful attributes visits when someone arrives through it.',
  },
  {
    n: '03',
    title: 'Earn on subscriptions',
    desc: 'When a referred visitor becomes a paying Highcontent customer, commission is tracked automatically — including recurring billing.',
  },
];

const REASONS = [
  {
    title: 'A product people already need',
    desc: 'Professionals, clinics, coaches, and agencies are looking for ready-to-post content. You’re recommending a system, not another design tool.',
  },
  {
    title: 'Recurring subscriptions',
    desc: 'Highcontent is a monthly membership. Referrals that stay subscribed keep generating commission through Rewardful.',
  },
  {
    title: 'Simple tracking',
    desc: 'Your unique link and Rewardful dashboard handle clicks, referrals, and payouts. No spreadsheets, no manual follow-up.',
  },
];

const FAQS = [
  {
    q: 'Who is this for?',
    a: 'Agencies, social media managers, course creators, coaches, and anyone who already talks to professionals about content. You do not need to be a Highcontent customer to join.',
  },
  {
    q: 'How does tracking work?',
    a: 'Each affiliate gets a unique link. When someone visits Highcontent through that link, Rewardful records the referral and attributes the subscription if they sign up.',
  },
  {
    q: 'How and when do I get paid?',
    a: 'Payouts are managed in your Rewardful dashboard, including commission amounts, referral status, and payment details for your campaign.',
  },
  {
    q: 'Can I share this with clients?',
    a: 'Yes. Many affiliates share Highcontent with clients who need a content system of their own, or with other professionals in their network.',
  },
];

export default function AffiliatesPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const joinHref = 'mailto:contact@highcontent.io?subject=Affiliate%20program';

  return (
    <div className="relative">
      <Header palette={PALETTE} onOpenContact={() => setContactOpen(true)} />
      <main>
        <section className="relative pt-[160px] pb-20 lg:pb-24 overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-[60px] h-[560px] -z-0">
            <div
              className="absolute -left-[12%] sm:-left-[6%] lg:-left-[4%] top-1/2 w-[min(78vw,780px)] h-[300px] lg:h-[462px] origin-center"
              style={{
                background: `radial-gradient(ellipse 95% 72% at 58% 50%, ${PALETTE[0]}99 0%, ${PALETTE[0]}55 38%, rgba(255,255,255,0) 72%)`,
                filter: 'blur(40px)',
                transform: 'translateY(-50%) rotate(22deg)',
              }}
            />
            <div
              className="absolute -right-[12%] sm:-right-[6%] lg:-right-[4%] top-1/2 w-[min(78vw,780px)] h-[300px] lg:h-[462px] origin-center"
              style={{
                background: `radial-gradient(ellipse 95% 72% at 42% 50%, ${PALETTE[1]}99 0%, ${PALETTE[1]}55 38%, rgba(255,255,255,0) 72%)`,
                filter: 'blur(40px)',
                transform: 'translateY(-50%) rotate(-22deg)',
              }}
            />
          </div>

          <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
            <Reveal className="text-center max-w-[860px] mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur border border-line rounded-full px-3.5 py-1.5 text-[12px] font-medium tracking-[0.14em] uppercase text-ink/70 mb-7">
                Affiliate program
              </div>
              <h1 className="font-extrabold tracking-tight text-[38px] sm:text-[52px] lg:text-[64px] leading-[1.02] text-ink text-balance">
                Earn by sharing <span className="italic-serif font-normal text-ink/90">Highcontent</span>
              </h1>
              <p className="mt-7 text-[17px] lg:text-[19px] text-ink/60 max-w-[580px] mx-auto leading-[1.55]">
                Recommend ready-to-post content to professionals. When they subscribe, you earn commission — tracked automatically with Rewardful.
              </p>
              <div className="mt-9 flex items-center justify-center gap-4 flex-wrap">
                <a
                  href={joinHref}
                  className="btn-pill inline-flex items-center gap-2 bg-ink text-white px-5 h-10 rounded-full text-[14px] font-medium"
                >
                  Apply to join <IconArrow size={16} />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <Reveal className="text-center max-w-[760px] mx-auto mb-14">
              <span className="inline-block text-[11.5px] uppercase tracking-[0.22em] font-medium text-ink/55 mb-5">
                How it works
              </span>
              <h2 className="font-extrabold tracking-tight text-[36px] sm:text-[48px] leading-[1.04] text-balance">
                Three steps. Then your <span className="italic-serif font-normal">link</span> does the rest.
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
              {STEPS.map((step) => (
                <Reveal key={step.n} className="rounded-[24px] border border-line bg-white p-7 lg:p-8">
                  <div className="text-[12px] uppercase tracking-[0.18em] font-medium text-ink/40">{step.n}</div>
                  <h3 className="mt-4 text-[22px] font-extrabold tracking-tight">{step.title}</h3>
                  <p className="mt-3 text-[15.5px] text-ink/65 leading-[1.6]">{step.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <Reveal className="max-w-[760px] mb-12">
              <span className="inline-block text-[11.5px] uppercase tracking-[0.22em] font-medium text-ink/55 mb-5">
                Why promote Highcontent
              </span>
              <h2 className="font-extrabold tracking-tight text-[36px] sm:text-[48px] leading-[1.04] text-balance">
                A recommendation that actually <span className="italic-serif font-normal">helps</span>.
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
              {REASONS.map((reason) => (
                <Reveal key={reason.title} className="rounded-[24px] border border-line bg-white p-7">
                  <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 grid place-items-center mb-5">
                    <IconCheck size={16} />
                  </span>
                  <h3 className="text-[18px] font-semibold">{reason.title}</h3>
                  <p className="mt-3 text-[15px] text-ink/65 leading-[1.6]">{reason.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <Reveal className="text-center max-w-[760px] mx-auto mb-14">
              <span className="inline-block text-[11.5px] uppercase tracking-[0.22em] font-medium text-ink/55 mb-5">FAQ</span>
              <h2 className="font-extrabold tracking-tight text-[36px] sm:text-[48px] leading-[1.04] text-balance">
                Affiliate <span className="italic-serif font-normal">questions</span>
              </h2>
            </Reveal>
            <Reveal className="max-w-[800px] mx-auto">
              <div className="flex flex-col gap-4">
                {FAQS.map((f, i) => (
                  <div
                    key={f.q}
                    className={`rounded-[20px] border bg-white overflow-hidden transition ${
                      openFaq === i ? 'border-ink shadow-lift' : 'border-line hover:border-ink/30'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                      className="w-full text-left px-7 lg:px-9 py-7 flex items-center gap-5"
                    >
                      <span className="text-[16px] sm:text-[17px] font-semibold flex-1 leading-snug">{f.q}</span>
                      <span
                        className={`chev w-9 h-9 rounded-full border border-line grid place-items-center shrink-0 ${
                          openFaq === i ? 'open bg-ink text-white border-ink' : ''
                        }`}
                      >
                        <IconChevron size={15} />
                      </span>
                    </button>
                    <div className={`accordion-content ${openFaq === i ? 'open' : ''}`}>
                      <div className="px-7 lg:px-9 pb-7 -mt-1 border-t border-line/60 pt-5 text-[15.5px] text-ink/65 leading-[1.65] max-w-[680px]">
                        {f.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <Reveal
              className="relative rounded-[2.5rem] overflow-hidden border border-line/70 py-16 lg:py-20 px-8 text-center"
              style={{
                background:
                  `radial-gradient(ellipse 45% 55% at 12% 20%, ${PALETTE[0]}1f 0%, ${PALETTE[0]}00 60%),` +
                  `radial-gradient(ellipse 45% 55% at 88% 80%, ${PALETTE[1]}1f 0%, ${PALETTE[1]}00 60%),` +
                  'linear-gradient(90deg, rgba(245,243,255,0.6) 0%, rgba(255,255,255,1) 50%, rgba(253,242,248,0.6) 100%)',
              }}
            >
              <h2 className="font-extrabold tracking-tight text-[34px] sm:text-[48px] leading-[1.05] text-ink text-balance">
                Ready to start <span className="italic-serif font-normal">referring</span>?
              </h2>
              <p className="mt-3 text-gray-500 text-sm md:text-base max-w-[520px] mx-auto leading-[1.55]">
                Join the Highcontent affiliate program and get your unique tracking link.
              </p>
              <div className="mt-7 flex items-center justify-center flex-wrap gap-4">
                <a
                  href={joinHref}
                  className="btn-pill inline-flex items-center gap-2 bg-ink text-white px-5 h-10 rounded-full text-[14px] font-medium"
                >
                  Apply to join <IconArrow size={16} />
                </a>
                <button
                  type="button"
                  onClick={() => setContactOpen(true)}
                  className="text-black text-sm font-medium hover:underline cursor-pointer"
                >
                  Talk to us
                </button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />

      <ContactModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
        variant="contact"
      />
    </div>
  );
}
