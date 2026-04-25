'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV = [
  { href: '/', label: 'Inicio' },
  { href: '/productos', label: 'Productos' },
  { href: '/sobre-nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-white/85 backdrop-blur-xl backdrop-saturate-150 border-b border-ink/5 shadow-soft'
          : 'bg-transparent'
      )}
    >
      <div className="container-page flex h-16 lg:h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-hero flex items-center justify-center text-white font-extrabold shadow-soft group-hover:shadow-glow transition-shadow">
            SM
          </div>
          <span className="font-extrabold text-lg tracking-tight">
            Insumos<span className="text-primary-900">SM</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium text-ink-soft hover:text-primary-900 transition-colors rounded-lg hover:bg-surface-muted"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+56912345678"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-primary-900 transition-colors"
          >
            <Phone className="w-4 h-4" /> +56 9 1234 5678
          </a>
          <Link href="/cotizar" className="btn-secondary btn-sm md:btn-md">
            Cotizar ahora
          </Link>
          <button
            type="button"
            aria-label="Abrir menú"
            onClick={() => setOpen(v => !v)}
            className="lg:hidden p-2 -mr-2 rounded-lg hover:bg-surface-muted"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-ink/5 bg-white/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="container-page py-4 flex flex-col gap-1">
              {NAV.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-base font-medium text-ink-soft hover:text-primary-900 hover:bg-surface-muted rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
