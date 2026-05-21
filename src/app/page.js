'use client';

import { useState } from 'react';
import { ContactModal } from '@/components/contact-modal';
import Header from '@/components/sections/header';
import Hero from '@/components/sections/hero';
import DashboardPreview from '@/components/sections/dashboard-preview';
import Categories from '@/components/sections/categories';
import Benefits from '@/components/sections/benefits';
import Pricing from '@/components/sections/pricing';
import About from '@/components/sections/about';
import Testimonials from '@/components/sections/testimonials';
import FAQ from '@/components/sections/faq';
import FinalCTA from '@/components/sections/final-cta';
import Footer from '@/components/sections/footer';
import {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakColor,
  TweakToggle,
} from '@/components/tweaks-panel';

const TWEAK_DEFAULTS = {
  palette: ['#C4B5FD', '#F9A8D4'],
  heroEyebrowOn: true,
  italicAccents: true,
  kitOverlay: 'vignette',
  ctaStyle: 'soft',
};

const PALETTES = [
  ['#C4B5FD', '#F9A8D4'],
  ['#A7F3D0', '#C4B5FD'],
  ['#FCD34D', '#F9A8D4'],
  ['#BAE6FD', '#DDD6FE'],
  ['#FCA5A5', '#FDE68A'],
];

export default function Page() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [contactOpen, setContactOpen] = useState(false);
  const palette = t.palette || PALETTES[0];

  return (
    <div className="relative">
      <Header palette={palette} onOpenContact={() => setContactOpen(true)} />
      <main>
        <Hero palette={palette} />
        <DashboardPreview />
        <Categories onOpenContact={() => setContactOpen(true)} />
        <Benefits />
        <Pricing palette={palette} />
        <About />
        <Testimonials />
        <FAQ />
        <FinalCTA palette={palette} />
      </main>
      <Footer />

      <ContactModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
        variant="contact"
      />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Brand gradient">
          <TweakColor
            value={palette}
            onChange={(v) => setTweak('palette', v)}
            options={PALETTES}
          />
        </TweakSection>
        <TweakSection label="Typography">
          <TweakToggle
            label="Serif italic accents"
            value={t.italicAccents}
            onChange={(v) => setTweak('italicAccents', v)}
          />
        </TweakSection>
      </TweaksPanel>

      <style>{`
        ${!t.italicAccents ? `.italic-serif { font-family: 'DM Sans', sans-serif !important; font-style: normal !important; font-weight: 800 !important; }` : ''}
      `}</style>
    </div>
  );
}
