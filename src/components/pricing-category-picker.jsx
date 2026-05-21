'use client';

import { IconArrow } from '@/components/icons';
import { openOutsetaRegister } from '@/lib/outseta';

export function PricingCategoryPicker({ categories }) {
  return (
    <div className="flex flex-col flex-1 min-h-0">
      <p className="text-[12px] uppercase tracking-[0.18em] font-semibold text-ink/75 mb-3">
        Choose your niche
      </p>
      <div className="grid grid-cols-2 gap-2.5 flex-1">
        {categories.map((c) => {
          const cardClass =
            'group relative text-left rounded-[14px] overflow-hidden border border-line bg-ink aspect-[4/5] min-h-[120px]';
          const overlay = (
            <>
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
            </>
          );

          if (!c.outsetaPlanUid) {
            return (
              <div
                key={c.id}
                className={`${cardClass} opacity-70`}
                aria-disabled="true"
              >
                {overlay}
                <div className="absolute inset-x-0 bottom-0 p-2.5 flex flex-col gap-2 text-white">
                  <div className="text-[13px] font-bold tracking-tight leading-tight">{c.title}</div>
                  <span className="inline-flex items-center justify-center bg-white/15 text-white/85 px-2.5 h-7 rounded-full text-[10px] font-semibold w-full">
                    Coming soon
                  </span>
                </div>
              </div>
            );
          }

          return (
            <button
              key={c.id}
              type="button"
              onClick={() => openOutsetaRegister(c.outsetaPlanUid)}
              className={`${cardClass} focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/30`}
            >
              {overlay}
              <div className="absolute inset-x-0 bottom-0 p-2.5 flex flex-col gap-2 text-white">
                <div className="text-[13px] font-bold tracking-tight leading-tight">{c.title}</div>
                <span className="inline-flex items-center justify-center gap-1 bg-ink text-white px-2.5 h-7 rounded-full text-[10px] font-semibold w-full">
                  Select <IconArrow size={11} />
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
