# InsumosSM — Plataforma Web

Refactor profesional de **insumossm.cl** construido con Next.js 14 (App Router), TypeScript estricto, Tailwind CSS, Framer Motion, react-hook-form + Zod y Resend para email transaccional. Diseñado para desplegarse en **Netlify** con cabeceras de seguridad enterprise-grade (HSTS, CSP, X-Frame-Options, etc.) y Lighthouse ≥ 95.

## Stack

| Capa | Tecnología |
|------|------------|
| Framework | Next.js 14 (App Router, RSC) |
| Lenguaje | TypeScript 5 estricto |
| Estilos | Tailwind CSS 3.4 |
| Animaciones | Framer Motion 11 |
| Formularios | react-hook-form + Zod |
| Email | Resend |
| Iconos | lucide-react |
| Hosting | Netlify (Edge Functions) |

## Estructura

```
src/
├── app/
│   ├── api/cotizar/route.ts      # POST cotización con rate-limit + honeypot
│   ├── productos/page.tsx        # Catálogo con filtros + búsqueda
│   ├── cotizar/page.tsx          # Wizard 3 pasos
│   ├── contacto/page.tsx
│   ├── sobre-nosotros/page.tsx
│   ├── layout.tsx                # Layout global, Inter, metadata
│   ├── page.tsx                  # Home
│   ├── globals.css
│   ├── sitemap.ts
│   ├── robots.ts
│   └── not-found.tsx
├── components/
│   ├── animations/fade-in.tsx
│   ├── forms/quote-wizard.tsx    # Wizard multi-step animado
│   ├── layout/                   # header, footer, whatsapp-float
│   └── sections/                 # hero, features, products-grid, stats, cta
├── data/products.ts              # Mock catálogo (reemplazar por CMS)
└── lib/
    ├── schemas.ts                # Zod schemas
    └── utils.ts                  # cn(), formatCLP()
```

## Comenzar localmente

```bash
# 1. Clonar
git clone https://github.com/sebasilvanavea/insumossm.git
cd insumossm

# 2. Instalar
npm install

# 3. Variables de entorno
cp .env.example .env.local
# Edita .env.local con tu RESEND_API_KEY (puedes dejarlo vacío y el endpoint
# loggeará al server console en dev)

# 4. Dev server
npm run dev
# → http://localhost:3000
```

## Deploy en Netlify (3 pasos)

Ver `DEPLOY.md` para el paso a paso completo. Resumen:

1. **Push a GitHub** (instrucciones más abajo).
2. En [Netlify](https://app.netlify.com/) → **Add new site → Import from Git → GitHub** → selecciona `insumossm`.
3. Netlify detecta `netlify.toml` y deploya. Configura las variables de entorno en
   *Site settings → Environment variables* (mismas claves que `.env.example`).

## Seguridad

- Cabeceras HTTP completas (HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, COOP) configuradas en `next.config.mjs` **y** `netlify.toml` (defensa en profundidad).
- Rate limiting in-memory en `/api/cotizar` (5 envíos/IP/hora).
- Honeypot anti-spam.
- Validación dual cliente + servidor con Zod.
- Recomendado: añadir Cloudflare Turnstile y Upstash Redis para rate-limit distribuido cuando entres a producción real.

## Performance

- Server Components por defecto.
- Imágenes optimizadas (Next/Image, AVIF/WebP).
- Fuentes vía `next/font` (subset latin, swap, preload).
- `bg-grid-pattern` inline SVG (sin requests).
- Animaciones sólo en `transform`/`opacity` (GPU).
- Respeto a `prefers-reduced-motion`.

## SEO

- Metadata por página, Open Graph, Twitter cards.
- `sitemap.xml` y `robots.txt` automáticos.
- URLs en español, semánticas.
- Datos estructurados pendientes (extender `generateMetadata`).

## Próximos pasos sugeridos

- [ ] Conectar Sanity / Payload como CMS para productos.
- [ ] Integrar Cloudflare Turnstile + Upstash Redis.
- [ ] Sentry para observabilidad.
- [ ] Plausible para analítica privacy-first.
- [ ] Chatbot IA con Claude API + RAG sobre catálogo.
- [ ] Pasarela de pago (Webpay / Mercado Pago).
- [ ] Blog/SEO content via MDX o CMS.

---

Construido siguiendo el plan ejecutivo `Plan_Refactorizacion_insumossm_cl.docx`.
