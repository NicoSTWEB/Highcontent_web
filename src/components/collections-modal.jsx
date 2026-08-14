'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { IconArrow, IconClose, IconZoom } from '@/components/icons';
import { openOutsetaRegister } from '@/lib/outseta';

export function CollectionsModal({ open, category, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [zoomed, setZoomed] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) {
      setZoomed(null);
      setShowDetails(false);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      if (zoomed) {
        setZoomed(null);
        return;
      }
      onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose, zoomed]);

  if (!mounted || !open || !category) return null;

  const collections = category.collections || [];

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-stretch sm:items-center justify-center p-0 sm:p-4 lg:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="collections-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-ink/40 backdrop-blur-[2px]"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <div className="relative w-full max-w-[1100px] h-full sm:h-auto sm:max-h-[min(90vh,860px)] bg-white sm:rounded-[24px] shadow-lift sm:border border-line overflow-hidden flex flex-col">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-9 h-9 rounded-full border border-line bg-white grid place-items-center text-ink/60 hover:text-ink hover:border-ink/30 transition"
          aria-label="Close"
        >
          <IconClose size={18} />
        </button>

        <div className="grid lg:grid-cols-[minmax(260px,0.85fr)_1.15fr] flex-1 min-h-0 overflow-y-auto lg:overflow-hidden">
          <div className="px-5 pt-5 pb-6 sm:p-8 lg:p-9 pr-14 bg-bg2/60 border-b lg:border-b-0 lg:border-r border-line flex flex-col">
            <span className="inline-block text-[11.5px] uppercase tracking-[0.22em] font-medium text-ink/55 mb-2">
              Collections
            </span>
            <h2 id="collections-modal-title" className="font-extrabold tracking-tight text-[24px] sm:text-[32px] leading-tight">
              {category.title}
            </h2>
            <p className="hidden lg:block mt-1.5 text-[14px] text-ink/55 leading-relaxed">{category.sub}</p>

            <div className="my-5 sm:my-6 h-px bg-line" />

            <div className="text-[12px] uppercase tracking-[0.18em] font-semibold text-ink/75 mb-3">
              What you get inside
            </div>
            <div className="relative">
              <div className={showDetails ? '' : 'max-h-[4.75rem] overflow-hidden lg:max-h-none'}>
                <ul className="space-y-2 mb-5">
                  {[
                    'Feed Posts',
                    'Story Designs',
                    'Highlight Covers',
                    'Feed Design Systems',
                    'Content Collections',
                    'Realistic Photo & Video Assets',
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-[13px] sm:text-[14px] text-ink/80">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-ink/40 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="text-[12px] uppercase tracking-[0.18em] font-semibold text-ink/75 mb-3">
                  Monthly updates
                </div>
                <ul className="space-y-2">
                  {['New Posts', 'New Story Content', 'New Design Collection'].map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-[13px] sm:text-[14px] text-ink/80">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-ink/40 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              {!showDetails ? (
                <div
                  className="lg:hidden pointer-events-none absolute inset-x-0 bottom-0 h-14"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(250,250,250,0) 0%, rgba(250,250,250,0.75) 45%, rgba(250,250,250,0.98) 100%)',
                  }}
                />
              ) : null}
            </div>

            <button
              type="button"
              onClick={() => setShowDetails((prev) => !prev)}
              className="lg:hidden mt-4 self-start inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink hover:underline"
            >
              {showDetails ? (
                <>
                  <span aria-hidden="true" className="text-[18px] leading-none font-medium">−</span>
                  Show less
                </>
              ) : (
                <>
                  <span aria-hidden="true" className="text-[18px] leading-none font-medium">+</span>
                  Show more
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                openOutsetaRegister(category.outsetaPlanUid);
              }}
              className="hidden lg:inline-flex mt-8 btn-pill w-full items-center justify-center gap-2 bg-ink text-white px-5 h-11 rounded-full text-[14px] font-medium"
            >
              Get started <IconArrow size={15} />
            </button>
          </div>

          <div className="p-5 sm:p-8 overflow-visible lg:overflow-y-auto lg:min-h-0 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
              {collections.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setZoomed(item)}
                  className="group relative rounded-[14px] sm:rounded-[16px] overflow-hidden border border-line bg-ink text-left"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="block w-full h-auto card-img-hover"
                  />
                  <span className="pointer-events-none absolute inset-0 lg:bg-ink/35 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200">
                    <span className="absolute bottom-2 right-2 lg:inset-0 lg:bottom-auto lg:right-auto lg:m-auto w-8 h-8 lg:w-11 lg:h-11 rounded-full bg-white/95 text-ink grid place-items-center shadow-lift">
                      <IconZoom size={18} />
                    </span>
                  </span>
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => {
                onClose();
                openOutsetaRegister(category.outsetaPlanUid);
              }}
              className="lg:hidden mt-5 btn-pill w-full inline-flex items-center justify-center gap-2 bg-ink text-white px-5 h-11 rounded-full text-[14px] font-medium"
            >
              Get started <IconArrow size={15} />
            </button>
          </div>
        </div>
      </div>

      {zoomed ? (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-3 sm:p-4">
          <button
            type="button"
            className="absolute inset-0 bg-ink/70 backdrop-blur-[3px]"
            aria-label="Close zoomed template"
            onClick={() => setZoomed(null)}
          />
          <button
            type="button"
            onClick={() => setZoomed(null)}
            className="relative z-10 mb-3 w-10 h-10 rounded-full border border-white/20 bg-ink text-white grid place-items-center"
            aria-label="Close zoomed template"
          >
            <IconClose size={18} />
          </button>
          <img
            src={zoomed.img}
            alt={zoomed.name}
            className="relative z-10 max-h-[min(82dvh,calc(100dvh-5.5rem))] max-w-[calc(100vw-1.5rem)] w-auto h-auto rounded-[14px] sm:rounded-[18px] shadow-lift object-contain"
          />
        </div>
      ) : null}
    </div>,
    document.body
  );
}
