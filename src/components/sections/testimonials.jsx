'use client';

import { Reveal } from '@/components/reveal';

// ============================================================
// TESTIMONIALS
// ============================================================
const testimonials = [
  { quote: "From posting once a week to every single day.", name: 'Dr. Léa Marchand', role: 'Dentist · Paris',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80&auto=format&fit=facearea&facepad=2.5' },
  { quote: "My clinic looks like it has a full creative team.", name: 'Camille Roux', role: 'Esthetician · Lyon',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=facearea&facepad=2.5' },
  { quote: "Saved 10+ hours a week in Canva.", name: 'Jonas Kremer', role: 'Social media manager',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=facearea&facepad=2.5' },
  { quote: "Bookings up 3× in just two months.", name: 'Sarah Thomson', role: 'Business Coach',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80&auto=format&fit=facearea&facepad=2.5' },
  { quote: "My feed finally feels premium.", name: 'Marc Dubois', role: 'Performance Coach',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=facearea&facepad=2.5' },
  { quote: "Stopped dreading Sundays in Canva.", name: 'Elena Varga', role: 'PMU Artist',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80&auto=format&fit=facearea&facepad=2.5' },
  { quote: "0 to 12k followers in 6 months.", name: 'Katie Hwang', role: 'Studio Owner',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80&auto=format&fit=facearea&facepad=2.5' },
  { quote: "20+ new clients thanks to the kit.", name: 'Megan Rivers', role: 'Esthetician',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80&auto=format&fit=facearea&facepad=2.5' },
  { quote: "Patients say my Instagram looks like a magazine.", name: 'Dr. Anaïs Blanc', role: 'Dentist · Bordeaux',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80&auto=format&fit=facearea&facepad=2.5' },
  { quote: "Finally, a feed I'm proud to share.", name: 'Lissette Bermúdez', role: 'Brow & Lash Studio',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&q=80&auto=format&fit=facearea&facepad=2.5' },
];

const TestimonialPill = ({ t }) => (
  <div className="inline-flex items-center gap-5 bg-white border border-line rounded-[40px] pl-2.5 pr-8 py-2.5 shadow-card shrink-0">
    <div className="relative w-[68px] h-[68px] shrink-0">
      <div className="absolute inset-0 rounded-full" style={{background:'linear-gradient(135deg, #C4B5FD 0%, #DDD6FE 60%, #F9A8D4 100%)'}}></div>
      <img src={t.avatar} alt="" className="absolute inset-[3px] w-[62px] h-[62px] rounded-full object-cover bg-bg2"/>
    </div>
    <div className="min-w-0 max-w-[320px]">
      <div className="text-[18px] sm:text-[19px] font-semibold text-ink leading-[1.3] tracking-tight">
        "{t.quote}"
      </div>
      <div className="mt-1.5 text-[10.5px] uppercase tracking-[0.22em] text-ink/45 font-semibold truncate">
        {t.name}
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  const rowA = testimonials.slice(0, 5);
  const rowB = testimonials.slice(5);
  return (
    <section id="testimonials" className="py-16 lg:py-20 overflow-hidden">
      {/* Inline keyframes for reverse direction */}
      <style>{`
        @keyframes marqueeA { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes marqueeB { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .testi-row-a { animation: marqueeA 60s linear infinite; }
        .testi-row-b { animation: marqueeB 70s linear infinite; }
        .testi-mask {
          -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 6%, #000 94%, transparent 100%);
                  mask-image: linear-gradient(90deg, transparent 0, #000 6%, #000 94%, transparent 100%);
        }
      `}</style>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <Reveal className="mb-12">
          <span className="inline-block text-[11.5px] uppercase tracking-[0.22em] font-medium text-ink/55 mb-5">What clients say</span>
          <h2 className="font-extrabold tracking-tight text-[40px] sm:text-[56px] leading-[1.04] text-balance">
            Built by people who <span className="italic-serif font-normal">get it</span>.
          </h2>
        </Reveal>
      </div>

      {/* Marquee rows — full bleed */}
      <Reveal>
        <div className="testi-mask">
          {/* Row A — right → left */}
          <div className="flex w-max gap-4 testi-row-a">
            {[...rowA, ...rowA].map((t, i) => (
              <TestimonialPill key={`a-${i}`} t={t}/>
            ))}
          </div>
          {/* Row B — left → right */}
          <div className="flex w-max gap-4 testi-row-b mt-5">
            {[...rowB, ...rowB].map((t, i) => (
              <TestimonialPill key={`b-${i}`} t={t}/>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};
