'use client';

import { useEffect, useState } from 'react';
import { IconArrow, IconClose, IconMenu } from '@/components/icons';

// ============================================================
// HEADER
// ============================================================
export default function Header({ palette, onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const nav = [
    { id: 'benefits', label: 'Benefits' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className="fixed inset-x-0 z-50"
      style={{
        top: scrolled ? '22px' : '20px',
        transition: 'top 450ms cubic-bezier(.4,.2,.2,1)',
      }}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{
          maxWidth: scrolled ? '980px' : '1280px',
          height: scrolled ? '60px' : '72px',
          paddingLeft: scrolled ? '20px' : '40px',
          paddingRight: scrolled ? '12px' : '40px',
          borderRadius: scrolled ? '9999px' : '0px',
          background: scrolled ? 'rgba(255,255,255,0.78)' : 'rgba(255,255,255,0)',
          backdropFilter: scrolled ? 'blur(18px) saturate(180%)' : 'blur(0px)',
          WebkitBackdropFilter: scrolled ? 'blur(18px) saturate(180%)' : 'blur(0px)',
          border: scrolled ? '1px solid rgba(229,231,235,0.85)' : '1px solid transparent',
          boxShadow: scrolled
            ? '0 10px 30px -12px rgba(15, 15, 25, 0.18), 0 0 0 1px rgba(255,255,255,0.04) inset'
            : '0 0 0 0 rgba(0,0,0,0)',
          transition:
            'max-width 450ms cubic-bezier(.4,.2,.2,1),' +
            ' height 450ms cubic-bezier(.4,.2,.2,1),' +
            ' padding 450ms cubic-bezier(.4,.2,.2,1),' +
            ' border-radius 450ms cubic-bezier(.4,.2,.2,1),' +
            ' background 350ms ease,' +
            ' box-shadow 450ms ease,' +
            ' border-color 350ms ease,' +
            ' backdrop-filter 350ms ease',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <a href="#top" className="flex items-center gap-2.5 group shrink-0">
          <img
            src="/assets/highcontent-logo.png"
            alt="Highcontent"
            className="w-auto object-contain"
            style={{
              height: scrolled ? '28px' : '40px',
              transition: 'height 450ms cubic-bezier(.4,.2,.2,1)',
            }}
          />
        </a>

        <nav className="hidden md:flex items-center gap-9 text-[14.5px] text-ink/80">
          {nav.map(n => (
            n.id === 'contact' ? (
              <button
                key={n.id}
                type="button"
                onClick={onOpenContact}
                className="nav-link font-medium hover:text-ink"
              >
                {n.label}
              </button>
            ) : (
              <a key={n.id} href={`#${n.id}`} className="nav-link font-medium hover:text-ink">{n.label}</a>
            )
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#login" className="hidden md:inline text-[14.5px] font-medium text-ink/70 hover:text-ink">Log in</a>
          <a href="#pricing" className="btn-pill inline-flex items-center gap-2 bg-ink text-white px-5 h-10 rounded-full text-[14px] font-medium">
            Get Started <IconArrow size={16}/>
          </a>
          <button className="md:hidden ml-1 w-10 h-10 grid place-items-center rounded-full border border-line" onClick={() => setOpen(o => !o)} aria-label="Menu">
            {open ? <IconClose/> : <IconMenu/>}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden mt-2 mx-4 bg-white border border-line rounded-2xl shadow-lift">
          <div className="px-6 py-4 flex flex-col gap-3">
            {nav.map(n => (
              n.id === 'contact' ? (
                <button
                  key={n.id}
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    onOpenContact?.();
                  }}
                  className="py-2 font-medium text-left"
                >
                  {n.label}
                </button>
              ) : (
                <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="py-2 font-medium">{n.label}</a>
              )
            ))}
          </div>
        </div>
      )}

    </header>
  );
};
