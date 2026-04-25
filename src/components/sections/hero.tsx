'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, Truck, Star, Clock3, ClipboardCheck } from 'lucide-react';

const HERO_CARDS = [
  { title: 'Apósitos y Gasas', subtitle: 'Línea Curaciones' },
  { title: 'Jeringas y Agujas', subtitle: 'Estéril · Desechable' },
  { title: 'Equipos Diagnóstico', subtitle: 'Equipamiento Clínico' },
];

export function Hero() {
  const reduce = useReducedMotion();
  const word = (delay: number) => ({
    initial: { y: '110%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: reduce ? 0 : 0.8, delay: reduce ? 0 : delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <section className="relative overflow-hidden bg-gradient-hero text-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" aria-hidden />
      <div className="absolute -top-40 -right-40 h-[560px] w-[560px] rounded-full bg-secondary-500/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-40 -left-40 h-[560px] w-[560px] rounded-full bg-accent-500/20 blur-3xl" aria-hidden />

      <div className="container-page relative pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary-500/40 bg-secondary-500/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-secondary-300"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Distribuidor certificado · Chile
            </motion.div>

            <h1 className="overflow-hidden font-display text-display-sm tracking-tight sm:text-display lg:text-display-lg">
              <span className="block overflow-hidden">
                <motion.span className="block" {...word(0.06)}>
                  Insumos médicos
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span className="block" {...word(0.2)}>
                  de alta calidad
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span className="block text-secondary-300" {...word(0.34)}>
                  para profesionales.
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 lg:text-xl"
            >
              Proveemos a clínicas, hospitales y centros de salud con los mejores insumos del mercado.
              Catálogo completo, despacho a todo Chile.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.68, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link href="/cotizar" className="btn-secondary btn-lg group">
                Solicitar cotización
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/productos" className="btn btn-lg border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/15">
                Ver catálogo
              </Link>
              <span className="text-sm text-white/70">Respuesta comercial en menos de 2 horas hábiles.</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.92 }}
              className="mt-10 grid gap-3 text-sm sm:grid-cols-3"
            >
              <div className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
                <div className="flex items-center gap-2 text-secondary-300"><Star className="h-4 w-4" /> +250 SKUs disponibles</div>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
                <div className="flex items-center gap-2 text-secondary-300"><Shield className="h-4 w-4" /> Certificado ISP</div>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
                <div className="flex items-center gap-2 text-secondary-300"><Truck className="h-4 w-4" /> Despacho 24–48 h</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/15 to-white/5 p-6 shadow-strong backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-700/45 to-secondary-600/30" />

              <div className="relative space-y-4">
                {HERO_CARDS.map((card, i) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.55 + i * 0.12 }}
                    className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur"
                  >
                    <p className="text-sm font-semibold text-white">{card.title}</p>
                    <p className="mt-1 text-xs text-white/75">{card.subtitle}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                animate={reduce ? {} : { y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="glass absolute right-5 top-5 rounded-xl p-3 text-ink"
              >
                <div className="flex items-center gap-1 text-xs text-ink-muted"><Clock3 className="h-3.5 w-3.5" /> Experiencia</div>
                <div className="text-xl font-extrabold text-primary-900">12+ años</div>
              </motion.div>

              <motion.div
                animate={reduce ? {} : { y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="glass absolute bottom-5 left-5 flex items-center gap-2 rounded-xl p-3 text-ink"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-cta text-white">
                  <ClipboardCheck className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs text-ink-muted">Stock activo</div>
                  <div className="text-sm font-bold text-primary-900">+250 SKUs</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative">
        <svg className="block h-12 w-full text-surface lg:h-16" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden>
          <path fill="currentColor" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,53.3C672,43,768,21,864,16C960,11,1056,21,1152,32C1248,43,1344,53,1392,58.7L1440,64L1440,80L0,80Z" />
        </svg>
      </div>
    </section>
  );
}
