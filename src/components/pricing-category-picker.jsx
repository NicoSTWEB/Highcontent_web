'use client';

import { IconArrow } from '@/components/icons';

export function PricingCategoryPicker({ categories, onSelect, onBack }) {
  return (
    <div className="flex flex-col flex-1 min-h-0">
      <button
        type="button"
        onClick={onBack}
        className="mb-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink/55 hover:text-ink transition self-start"
      >
        ← Back to plan details
      </button>
      <p className="text-[12px] uppercase tracking-[0.18em] font-semibold text-ink/75 mb-3">
        Choose your niche
      </p>
      <div className="grid grid-cols-2 gap-2.5 flex-1">
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => onSelect(c)}
            className="group relative text-left rounded-[14px] overflow-hidden border border-line bg-ink aspect-[4/5] min-h-[120px] focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
          >
            <img
              src={c.img}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-95 transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(10,10,10,0) 30%, rgba(10,10,10,0.88) 100%)',
              }}
            />
            <div className="absolute inset-x-0 bottom-0 p-2.5 flex flex-col gap-2 text-white">
              <div className="min-w-0">
                <div className="text-[13px] font-bold tracking-tight leading-tight">{c.title}</div>
                <div className="text-[10px] text-white/75 mt-0.5 line-clamp-2 leading-snug">{c.sub}</div>
              </div>
              <span className="inline-flex items-center justify-center gap-1 bg-ink text-white px-2.5 h-7 rounded-full text-[10px] font-semibold w-full">
                Access <IconArrow size={11} />
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
