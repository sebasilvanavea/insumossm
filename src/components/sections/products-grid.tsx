'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { getCategoryById, products } from '@/data/products';
import { FadeIn, StaggerContainer, staggerItem } from '@/components/animations/fade-in';

export function ProductsGrid({ limit }: { limit?: number }) {
  const list = limit ? products.slice(0, limit) : products;

  return (
    <section className="py-20 lg:py-28 bg-surface-soft">
      <div className="container-page">
        <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="badge bg-secondary-50 text-secondary-700 mb-4">Catálogo destacado</span>
            <h2 className="text-display-sm lg:text-display font-extrabold tracking-tight text-ink">
              Productos que <span className="gradient-text">la industria pide</span>
            </h2>
          </div>
          <Link href="/productos" className="btn-outline btn-md self-start md:self-auto">
            Ver todo el catálogo
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p) => (
            <motion.div key={p.slug} variants={staggerItem} className="card overflow-hidden group">
              <div className="relative aspect-[4/3] overflow-hidden bg-surface-muted">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
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
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">{p.shortDesc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.features.slice(0, 3).map((f) => (
                    <span key={f} className="badge bg-surface-muted text-ink-soft border border-ink/5">{f}</span>
                  ))}
                </div>
                <Link
                  href={`/cotizar?producto=${encodeURIComponent(p.name)}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-900 hover:text-accent-600 transition-colors"
                >
                  Cotizar este producto
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
