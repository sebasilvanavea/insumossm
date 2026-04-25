'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const STATS = [
  { value: 500, suffix: '+', label: 'Empresas atendidas' },
  { value: 1000, suffix: '+', label: 'Productos en catálogo' },
  { value: 24, suffix: ' h', label: 'Despacho promedio' },
  { value: 98, suffix: '%', label: 'Clientes satisfechos' },
];

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const ease = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * ease));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return <span ref={ref}>{n.toLocaleString('es-CL')}{suffix}</span>;
}

export function Stats() {
  return (
    <section className="py-16 lg:py-20 bg-primary-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" aria-hidden />
      <div className="container-page relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-center lg:text-left"
            >
              <div className="text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-secondary-300 to-secondary-500 bg-clip-text text-transparent">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm lg:text-base text-white/70">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
