'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { IconArrow, IconClose } from '@/components/icons';

function PlanBadge({ planId }) {
  if (planId === 'starter') {
    return (
      <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-medium">
        Best to start
      </span>
    );
  }
  if (planId === 'pro') {
    return (
      <span
        className="text-[11px] px-2 py-0.5 rounded-full font-semibold text-white"
        style={{ background: 'linear-gradient(95deg, #6d5fd1, #d97ab1)' }}
      >
        Ideal for Pros
      </span>
    );
  }
  return (
    <span className="text-[11px] px-2 py-0.5 rounded-full bg-ink/5 text-ink font-medium border border-line">
      Made for you
    </span>
  );
}

function PlanDetails({ plan, category }) {
  const priceDisplay = plan.price.startsWith('From ') ? (
    <>
      <span className="text-[15px] font-medium text-ink/55">From</span>{' '}
      <span className="text-[32px] sm:text-[36px] font-extrabold tracking-tight leading-none">
        {plan.price.replace('From ', '')}
      </span>
    </>
  ) : (
    <span className="text-[32px] sm:text-[36px] font-extrabold tracking-tight leading-none">
      {plan.price}
      {plan.cycle ? (
        <span className="text-[14px] font-medium text-ink/55 ml-1">{plan.cycle}</span>
      ) : null}
    </span>
  );

  return (
    <div className="flex flex-col h-full">
      {category && (
        <div className="mb-5 rounded-[16px] overflow-hidden border border-line aspect-[16/9] relative">
          <img src={category.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(10,10,10,0.1) 40%, rgba(10,10,10,0.75) 100%)',
            }}
          />
          <div className="absolute left-4 right-4 bottom-4 text-white">
            <div className="text-[11px] uppercase tracking-[0.16em] font-medium text-white/70 mb-1">
              Selected niche
            </div>
            <div className="text-[22px] font-bold tracking-tight">{category.title}</div>
            <div className="text-[13px] text-white/80 mt-0.5">{category.sub}</div>
          </div>
        </div>
      )}

      <div className="flex items-baseline justify-between gap-2">
        <span className="text-[12px] uppercase tracking-[0.22em] font-medium text-ink/55">{plan.name}</span>
        <PlanBadge planId={plan.id} />
      </div>
      <div className="mt-4">{priceDisplay}</div>
      <p className="mt-2 text-[14px] text-ink/60">{plan.tag}</p>
      <p className="mt-1 text-[13px] text-ink/45">{plan.desc}</p>

      <div className="my-6 h-px bg-line" />

      <div className="text-[12px] uppercase tracking-[0.18em] font-semibold text-ink/75 mb-3">
        What you get inside
      </div>
      <ul className="space-y-2 mb-5">
        {plan.inside.map((t) => (
          <li key={t} className="flex items-start gap-2.5 text-[14px] text-ink/80">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-ink/40 shrink-0" />
            {t}
          </li>
        ))}
      </ul>

      <div className="text-[12px] uppercase tracking-[0.18em] font-semibold text-ink/75 mb-3">
        Monthly updates
      </div>
      <ul className="space-y-2">
        {plan.updates.map((t) => (
          <li key={t} className="flex items-start gap-2.5 text-[14px] text-ink/80">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-ink/40 shrink-0" />
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactForm({ onClose, plan, category }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const nicheLine = category
    ? `${plan.name} plan · ${category.title}`
    : `${plan.name} plan`;

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[320px] text-center px-4">
        <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 grid place-items-center text-xl mb-4">
          ✓
        </div>
        <h3 className="font-bold text-[20px] text-ink">Message sent</h3>
        <p className="mt-2 text-[14px] text-ink/60 max-w-[280px] leading-relaxed">
          Thanks for reaching out. We&apos;ll get back to you within 1–2 business days.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="mt-8 btn-pill inline-flex items-center gap-2 bg-ink text-white px-6 h-11 rounded-full text-[14px] font-medium"
        >
          Close
        </button>
      </div>
    );
  }

  const fieldClass =
    'w-full h-11 px-4 rounded-xl border border-line bg-white text-[14px] text-ink placeholder:text-ink/35 outline-none focus:border-ink/40 focus:ring-2 focus:ring-ink/5 transition';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col h-full">
      <h3 className="font-bold text-[22px] tracking-tight text-ink">Get started</h3>
      <p className="mt-1.5 text-[14px] text-ink/55 leading-relaxed">
        {category
          ? `Complete the form to access the ${category.title} library on the ${plan.name} plan.`
          : 'Tell us about your business and we\'ll tailor a custom package for you.'}
      </p>
      <p className="mt-2 text-[12px] font-medium text-ink/45">{nicheLine}</p>

      <div className="mt-6 space-y-4 flex-1">
        <div>
          <label htmlFor="contact-name" className="block text-[12px] font-semibold text-ink/70 mb-1.5">
            Full name
          </label>
          <input id="contact-name" name="name" type="text" required autoComplete="name" className={fieldClass} placeholder="Jane Smith" />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-[12px] font-semibold text-ink/70 mb-1.5">
            Email
          </label>
          <input id="contact-email" name="email" type="email" required autoComplete="email" className={fieldClass} placeholder="you@company.com" />
        </div>
        <div>
          <label htmlFor="contact-business" className="block text-[12px] font-semibold text-ink/70 mb-1.5">
            Business / website <span className="font-normal text-ink/40">(optional)</span>
          </label>
          <input
            id="contact-business"
            name="business"
            type="text"
            autoComplete="organization"
            className={fieldClass}
            placeholder="yourbrand.com"
            defaultValue={category?.title ?? ''}
          />
        </div>
        <div>
          <label htmlFor="contact-message" className="block text-[12px] font-semibold text-ink/70 mb-1.5">
            Message <span className="font-normal text-ink/40">(optional)</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            className={`${fieldClass} h-auto py-3 resize-none`}
            placeholder={
              category
                ? `I'm interested in the ${category.title} content library.`
                : 'What are you looking for in a custom package?'
            }
            defaultValue={
              category ? `I'd like to get started with the ${category.title} library.` : ''
            }
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 btn-pill w-full inline-flex items-center justify-center gap-2 h-12 rounded-full text-[14.5px] font-medium bg-ink text-white"
      >
        Send message <IconArrow size={15} />
      </button>
      <p className="mt-3 text-center text-[12px] text-ink/45">
        Or email us at{' '}
        <a href="mailto:hello@highcontent.io" className="text-ink/70 hover:text-ink underline underline-offset-2">
          hello@highcontent.io
        </a>
      </p>
    </form>
  );
}

export function ContactModal({ open, onClose, plan, category }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!mounted || !open || !plan) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-ink/40 backdrop-blur-[2px]"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <div className="relative w-full max-w-[920px] max-h-[min(90vh,720px)] bg-white rounded-[24px] shadow-lift border border-line overflow-hidden flex flex-col">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full border border-line bg-white grid place-items-center text-ink/60 hover:text-ink hover:border-ink/30 transition"
          aria-label="Close"
        >
          <IconClose size={18} />
        </button>

        <div className="grid lg:grid-cols-2 overflow-y-auto flex-1 min-h-0">
          <div className="p-7 sm:p-8 lg:p-9 bg-bg2/60 border-b lg:border-b-0 lg:border-r border-line">
            <h2 id="contact-modal-title" className="sr-only">
              {category ? `${category.title} — ${plan.name}` : `Contact us — ${plan.name}`}
            </h2>
            <PlanDetails plan={plan} category={category} />
          </div>
          <div className="p-7 sm:p-8 lg:p-9">
            <ContactForm onClose={onClose} plan={plan} category={category} />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
