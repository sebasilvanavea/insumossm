'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, Truck, Star } from 'lucide-react';

export function Hero() {
  const reduce = useReducedMotion();
  const word = (text: string, delay: number) => ({
    initial: { y: '110%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: reduce ? 0 : 0.8, delay: reduce ? 0 : delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <section className="relative overflow-hidden bg-gradient-hero text-white">
      {/* Decorative grid + glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" aria-hidden />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-secondary-500/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-accent-500/20 blur-3xl" aria-hidden />

      <div className="container-page relative pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 badge bg-white/10 border border-white/20 backdrop-blur text-white mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-secondary-400" />
              Cotización en línea en 60 segundos
            </motion.div>

            <h1 className="text-display-sm sm:text-display lg:text-display-lg font-extrabold tracking-tight overflow-hidden">
              <span className="block overflow-hidden">
                <motion.span className="block" {...word('Suministros que', 0.05)}>
                  Suministros que
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span className="block" {...word('mueven tu', 0.18)}>
                  mueven tu
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block bg-gradient-to-r from-secondary-300 via-secondary-500 to-secondary-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
                  {...word('industria.', 0.32)}
                >
                  industria.
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-lg lg:text-xl text-white/80 max-w-xl leading-relaxed"
            >
              EPP, aseo industrial, herramientas y seguridad para empresas en Chile.
              Stock disponible, despacho a todo el país y atención técnica especializada.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link href="/cotizar" className="btn-secondary btn-lg group">
                Solicitar cotización
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/productos" className="btn btn-lg bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/15">
                Ver catálogo
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.95 }}
              className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/70"
            >
              <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-secondary-400" /> Productos certificados</div>
              <div className="flex items-center gap-2"><Truck className="w-4 h-4 text-secondary-400" /> Despacho 24–72 h</div>
              <div className="flex items-center gap-2"><Star className="w-4 h-4 text-secondary-400" /> +500 empresas confían</div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/20 shadow-strong overflow-hidden">
              {/* Mock-up de imagen / placeholder estilizado */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-700/40 to-accent-500/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center mb-6">
                  <Sparkles className="w-16 h-16 text-secondary-400" />
                </div>
                <p className="text-2xl font-bold text-white mb-2">+1.000 productos</p>
                <p className="text-white/70 text-sm">en stock disponible</p>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={reduce ? {} : { y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-6 right-6 glass rounded-xl p-3 text-ink"
              >
                <div className="text-xs text-ink-muted">Lighthouse</div>
                <div className="text-2xl font-extrabold text-primary-900">98</div>
              </motion.div>

              <motion.div
                animate={reduce ? {} : { y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-6 left-6 glass rounded-xl p-3 text-ink flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-cta flex items-center justify-center text-white text-sm">⚡</div>
                <div>
                  <div className="text-xs text-ink-muted">Respuesta</div>
                  <div className="text-sm font-bold text-primary-900">&lt; 2 horas</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="relative">
        <svg className="block w-full h-12 lg:h-16 text-surface" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden>
          <path fill="currentColor" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,53.3C672,43,768,21,864,16C960,11,1056,21,1152,32C1248,43,1344,53,1392,58.7L1440,64L1440,80L0,80Z" />
        </svg>
      </div>
    </section>
  );
}
