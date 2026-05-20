'use client';

import { useEffect, useRef } from 'react';

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.classList.add('in');
        io.disconnect();
      }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

export function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useReveal();
  return <Tag ref={ref} className={`scroll-fade ${className}`} {...rest}>{children}</Tag>;
}
