'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Search } from 'lucide-react';
import { products, CATEGORIES, getCategoryById } from '@/data/products';
import { FadeIn } from '@/components/animations/fade-in';

export default function ProductosPage() {
  const [cat, setCat] = useState<string>('all');
  const [q, setQ] = useState('');

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = cat === 'all' || p.category === cat;
      const matchQ = q.trim() === '' ||
        p.name.toLowerCase().includes(q.toLowerCase()) ||
        p.shortDesc.toLowerCase().includes(q.toLowerCase()) ||
        p.features.some((feature) => feature.toLowerCase().includes(q.toLowerCase()));
      return matchCat && matchQ;
    });
  }, [cat, q]);

  return (
    <>
      {/* Hero compact */}
      <section className="bg-gradient-hero text-white py-16 lg:py-20">
        <div className="container-page">
          <FadeIn>
            <span className="badge bg-white/10 border border-white/20 mb-4">Catálogo</span>
            <h1 className="text-display-sm lg:text-display font-extrabold tracking-tight">
              Todo lo que tu operación necesita
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl">
              Filtra por categoría, busca por nombre y solicita cotización en un clic.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-10 sticky top-16 lg:top-20 z-30 bg-surface/80 backdrop-blur-xl border-b border-ink/5">
        <div className="container-page flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCat('all')}
              className={`btn btn-sm ${cat === 'all' ? 'btn-primary' : 'btn-outline'}`}
            >
              Todos
            </button>
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setCat(c.id)}
                className={`btn btn-sm ${cat === c.id ? 'btn-primary' : 'btn-outline'}`}
              >
                {c.label}
              </button>
            ))}
          </div>
          <div className="relative lg:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-muted" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar producto..."
              className="input pl-9 py-2.5 text-sm"
            />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-page">
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.p
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="text-center text-ink-muted py-20"
              >
                No encontramos productos con esos criterios.
              </motion.p>
            ) : (
              <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((p) => (
                  <motion.div
                    layout
                    key={p.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="card overflow-hidden group"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-surface-muted">
                      {p.image ? (
                        <Image
                          src={p.image} alt={p.name} fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_top,#53d3c73d,transparent_55%),linear-gradient(135deg,#0B1F3A,#123B68)] text-6xl">
                          <span aria-hidden>{p.emoji ?? '📦'}</span>
                        </div>
                      )}
                      {p.badge && (
                        <span className="absolute top-3 left-3 badge bg-secondary-500 text-ink shadow-soft">
                          {p.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      <p className="text-xs uppercase tracking-wider text-accent-600 font-semibold">
                        {getCategoryById(p.category)?.label ?? p.category}
                      </p>
                      <h3 className="mt-1 text-lg font-bold text-ink">{p.name}</h3>
                      <p className="mt-2 text-sm text-ink-muted">{p.shortDesc}</p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {p.features.map((feature) => (
                          <span
                            key={feature}
                            className="badge bg-surface-muted text-ink-soft border border-ink/5"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/cotizar?producto=${encodeURIComponent(p.name)}`}
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-900 hover:text-accent-600 transition-colors"
                      >
                        Cotizar este producto <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
