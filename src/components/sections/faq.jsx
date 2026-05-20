'use client';

import { useState } from 'react';
import { IconChevron } from '@/components/icons';
import { Reveal } from '@/components/reveal';

// ============================================================
// FAQ
// ============================================================
const faqs = [
  { q: 'What types of content are included?',
    a: 'Each plan includes professionally designed feed posts, stories, highlight covers, and realistic AI-generated photo and video assets — ready to customize in Canva.' },
  { q: 'Can I edit the templates in Canva?',
    a: 'Yes. All templates are fully editable in Canva — no design skills required. Open, customize with your brand colors and text, and post.' },
  { q: 'How often is new content added?',
    a: 'New content is added every month. Depending on your plan, you receive fresh posts, stories, and entire new design collections automatically.' },
  { q: 'Can I use this for my clients?',
    a: 'The Pro plan includes a license for client work. The Starter plan is for personal and single-business use only.' },
  { q: 'How does the custom plan work?',
    a: 'We build a fully branded content system tailored to your business — including custom templates, AI visuals, brand direction, and an optional monthly content subscription. Pricing depends on project scope.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="py-16 lg:py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <Reveal className="text-center max-w-[760px] mx-auto mb-14">
          <span className="inline-block text-[11.5px] uppercase tracking-[0.22em] font-medium text-ink/55 mb-5">FAQ</span>
          <h2 className="font-extrabold tracking-tight text-[40px] sm:text-[56px] leading-[1.04] text-balance">
            Got <span className="italic-serif font-normal">questions</span>? We've got <span className="italic-serif font-normal">answers</span>.
          </h2>
        </Reveal>

        <Reveal className="max-w-[800px] mx-auto">
          <div className="flex flex-col gap-4">
            {faqs.map((f, i) => (
              <div key={i} className={`rounded-[20px] border bg-white overflow-hidden transition ${open === i ? 'border-ink shadow-lift' : 'border-line hover:border-ink/30'}`}>
                <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full text-left px-7 lg:px-9 py-7 flex items-center gap-5">
                  <span className="text-[16px] sm:text-[17px] font-semibold flex-1 leading-snug">{f.q}</span>
                  <span className={`chev w-9 h-9 rounded-full border border-line grid place-items-center shrink-0 ${open === i ? 'open bg-ink text-white border-ink' : ''}`}>
                    <IconChevron size={15}/>
                  </span>
                </button>
                <div className={`accordion-content ${open === i ? 'open' : ''}`}>
                  <div className="px-7 lg:px-9 pb-7 -mt-1 border-t border-line/60 pt-5 text-[15.5px] text-ink/65 leading-[1.65] max-w-[680px]">{f.a}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
