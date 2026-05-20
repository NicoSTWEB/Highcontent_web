'use client';

import { IconInstagram, IconTiktok, IconLinkedin, IconPinterest } from '@/components/icons';

// ============================================================
// FOOTER
// ============================================================
export default function Footer() {
  return (
  <footer id="contact" className="bg-white text-ink">
    <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-20">
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <img src="/assets/highcontent-logo.png" alt="Highcontent" className="h-9 w-auto object-contain"/>
          <p className="mt-5 text-[15px] text-ink/60 max-w-[360px] leading-[1.55]">
            Ready-to-post social media content & realistic AI assets for professionals. Build a premium presence — without burning out.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[IconInstagram, IconTiktok, IconLinkedin, IconPinterest].map((I,i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-line grid place-items-center text-ink/55 hover:text-ink hover:border-ink/40 transition">
                <I size={16}/>
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-3 gap-8">
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-ink/45 font-medium mb-4">Product</div>
            <ul className="space-y-2.5 text-[14px] text-ink/65">
              <li><a href="#benefits" className="hover:text-ink">Benefits</a></li>
              <li><a href="#pricing" className="hover:text-ink">Pricing</a></li>
              <li><a href="#highlights" className="hover:text-ink">Highlights</a></li>
              <li><a href="#faq" className="hover:text-ink">FAQ</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-ink/45 font-medium mb-4">Legal</div>
            <ul className="space-y-2.5 text-[14px] text-ink/65">
              <li><a href="#" className="hover:text-ink">Terms of service</a></li>
              <li><a href="#" className="hover:text-ink">Privacy policy</a></li>
              <li><a href="#" className="hover:text-ink">License</a></li>
              <li><a href="#" className="hover:text-ink">Refunds</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-ink/45 font-medium mb-4">Contact</div>
            <ul className="space-y-2.5 text-[14px] text-ink/65">
              <li><a href="mailto:hello@highcontent.io" className="hover:text-ink">hello@highcontent.io</a></li>
              <li><a href="#" className="hover:text-ink">@highcontent</a></li>
              <li><a href="#" className="hover:text-ink">Book a call</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4 text-[12.5px] text-ink/45">
        <div>© 2026 Highcontent. All rights reserved.</div>
        <div className="flex items-center gap-5">
          <span>Made for professionals who post on purpose.</span>
        </div>
      </div>
    </div>
  </footer>
  );
}
