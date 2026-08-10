'use client';

import { Reveal } from '@/components/reveal';

const GalleryCard = ({ src, alt, width, height }) => (
  <img
    src={src}
    alt={alt}
    width={width}
    height={height}
    className="gallery-card block w-full h-auto"
  />
);

const GALLERY_ITEMS = [
  {
    src: '/assets/gallery/gallery-img1.png',
    alt: 'Sovereign Suite content grid',
    width: 398,
    height: 534,
  },
  {
    src: '/assets/gallery/gallery-img2.png',
    alt: 'Healthy skin tips story',
    width: 398,
    height: 707,
  },
  {
    src: '/assets/gallery/gallery-img3.png',
    alt: "Social media do's and don'ts",
    width: 398,
    height: 496,
  },
  {
    src: '/assets/gallery/gallery-img4.png',
    alt: 'Glow boost skincare post',
    width: 398,
    height: 496,
  },
  {
    src: '/assets/gallery/gallery-img5.png',
    alt: 'Client testimonial post',
    width: 398,
    height: 707,
  },
  {
    src: '/assets/gallery/gallery-img6.png',
    alt: 'Perfect skin content grid',
    width: 398,
    height: 530,
  },
  {
    src: '/assets/gallery/gallery-img7.png',
    alt: 'Brand growth post',
    width: 398,
    height: 496,
  },
  {
    src: '/assets/gallery/gallery-img8.png',
    alt: 'Brightening serum post',
    width: 398,
    height: 540,
  },
];

const COLUMNS = [
  [0, 1],
  [2, 3],
  [4, 5],
  [6, 7],
];

export default function WorkGallery() {
  const colBase = 'gallery-col flex flex-col gap-4 sm:gap-5 flex-1 min-w-0';
  const colStagger = `${colBase} mt-12 sm:mt-16 lg:mt-[3.25rem]`;

  return (
    <section id="gallery" className="bg-white py-16 lg:py-20 overflow-x-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <Reveal className="text-center max-w-[820px] mx-auto mb-10 lg:mb-14">
          <h2 className="font-extrabold tracking-tight text-[40px] sm:text-[56px] leading-[1.04] text-ink text-balance">
            <span className="italic-serif font-normal">Weeks</span> of work. <br />
            Done in <span className="italic-serif font-normal">minutes</span>.
          </h2>
        </Reveal>

        <Reveal>
          <div className="flex gap-4 sm:gap-5 w-full items-start">
            {COLUMNS.map((indices, colIndex) => (
              <div key={colIndex} className={colIndex % 2 === 1 ? colStagger : colBase}>
                {indices.map((itemIndex) => {
                  const item = GALLERY_ITEMS[itemIndex];
                  return (
                    <GalleryCard
                      key={item.src}
                      src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
