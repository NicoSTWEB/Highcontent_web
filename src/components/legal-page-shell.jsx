import Link from 'next/link';
import Footer from '@/components/sections/footer';

export function LegalPageShell({ title, updated, children }) {
  return (
    <div className="min-h-screen bg-white text-ink">
      <header className="border-b border-line bg-white/90 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
          <Link href="/" className="flex items-center shrink-0">
            <img src="/assets/highcontent-logo.png" alt="Highcontent" className="h-8 w-auto object-contain" />
          </Link>
          <Link
            href="/"
            className="text-[14px] font-medium text-ink/60 hover:text-ink transition"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="max-w-[760px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <span className="inline-block text-[11.5px] uppercase tracking-[0.22em] font-medium text-ink/55 mb-5">
          Legal
        </span>
        <h1 className="font-extrabold tracking-tight text-[36px] sm:text-[48px] leading-[1.05] text-balance">
          {title}
        </h1>
        {updated ? (
          <p className="mt-4 text-[14px] text-ink/50">Last updated: {updated}</p>
        ) : null}
        <div className="legal-prose mt-10">{children}</div>
      </main>

      <Footer />
    </div>
  );
}
