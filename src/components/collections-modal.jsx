'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { IconArrow, IconClose } from '@/components/icons';
import { openOutsetaRegister } from '@/lib/outseta';

export function CollectionsModal({ open, category, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [zoomed, setZoomed] = useState(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) setZoomed(null);
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
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
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
      <div className="relative w-full max-w-[960px] max-h-[min(90vh,820px)] bg-white rounded-[24px] shadow-lift border border-line overflow-hidden flex flex-col">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full border border-line bg-white grid place-items-center text-ink/60 hover:text-ink hover:border-ink/30 transition"
          aria-label="Close"
        >
          <IconClose size={18} />
        </button>

        <div className="px-6 sm:px-8 pt-7 sm:pt-8 pr-14">
          <span className="inline-block text-[11.5px] uppercase tracking-[0.22em] font-medium text-ink/55 mb-2">
            Collections
          </span>
          <h2 id="collections-modal-title" className="font-extrabold tracking-tight text-[26px] sm:text-[32px] leading-tight">
            {category.title}
          </h2>
          <p className="mt-1.5 text-[14px] text-ink/55">{category.sub}</p>
        </div>

        <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {collections.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setZoomed(item)}
                className="group relative rounded-[16px] overflow-hidden border border-line bg-ink aspect-[4/5] text-left"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover card-img-hover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(10,10,10,0) 45%, rgba(10,10,10,0.78) 100%)',
                  }}
                />
                <div className="absolute left-3 right-3 bottom-3 text-white">
                  <div className="text-[14px] sm:text-[15px] font-semibold tracking-tight leading-tight">
                    {item.name}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="px-6 sm:px-8 py-5 border-t border-line flex items-center justify-between gap-3">
          <p className="text-[13px] text-ink/50 hidden sm:block">
            Ready-to-post templates for {category.title.toLowerCase()} professionals.
          </p>
          <button
            type="button"
            onClick={() => {
              onClose();
              openOutsetaRegister(category.outsetaPlanUid);
            }}
            className="btn-pill ml-auto inline-flex items-center gap-2 bg-ink text-white px-5 h-10 rounded-full text-[14px] font-medium"
          >
            Get started <IconArrow size={15} />
          </button>
        </div>
      </div>

      {zoomed ? (
        <div className="absolute inset-0 z-20 flex items-center justify-center p-4 sm:p-8">
          <button
            type="button"
            className="absolute inset-0 bg-ink/70 backdrop-blur-[3px]"
            aria-label="Close zoomed template"
            onClick={() => setZoomed(null)}
          />
          <div className="relative max-w-[min(92vw,560px)] max-h-[88vh] flex flex-col items-center">
            <button
              type="button"
              onClick={() => setZoomed(null)}
              className="absolute -top-3 -right-3 sm:top-2 sm:right-2 z-10 w-9 h-9 rounded-full border border-white/20 bg-ink text-white grid place-items-center hover:bg-ink/80 transition"
              aria-label="Close zoomed template"
            >
              <IconClose size={18} />
            </button>
            <img
              src={zoomed.img}
              alt={zoomed.name}
              className="max-h-[80vh] w-auto max-w-full rounded-[18px] shadow-lift object-contain"
            />
            <p className="mt-3 text-[14px] font-semibold text-white">{zoomed.name}</p>
          </div>
        </div>
      ) : null}
    </div>,
    document.body
  );
}
