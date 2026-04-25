# Guía de despliegue paso a paso

Esta guía te lleva del proyecto local a producción en Netlify en menos de 15 minutos.

> Importante: yo (Claude) no puedo ejecutar `git push` ni autenticarme en Netlify por ti
> desde este sandbox. Pero todos los archivos están listos. Solo ejecuta los comandos en
> tu terminal local.

---

## 1. Subir a GitHub

El repo ya existe en `https://github.com/sebasilvanavea/insumossm.git`. Vamos a empujar
el nuevo código (asume que el repo está vacío o que harás un commit limpio en `main`).

### Opción A · Si el repo está VACÍO

```bash
# Desde tu computador, en la carpeta del proyecto generado:
cd ruta/a/insumossm-web

git init
git add .
git commit -m "feat: refactor inicial Next.js 14 + Tailwind + Framer Motion"
git branch -M main
git remote add origin https://github.com/sebasilvanavea/insumossm.git
git push -u origin main
```

### Opción B · Si el repo YA tiene código y quieres reemplazar

```bash
cd ruta/a/insumossm-web

git init
git add .
git commit -m "feat: refactor completo del sitio (Next.js 14)"
git branch -M main
git remote add origin https://github.com/sebasilvanavea/insumossm.git
git push -u origin main --force
```

> Si ya clonaste el repo y agregaste estos archivos encima, basta con
> `git add . && git commit -m "refactor" && git push`.

---

## 2. Conectar a Netlify (UI · 2 min)

1. Entra a https://app.netlify.com/
2. **Add new site → Import an existing project → GitHub**
3. Autoriza Netlify si es la primera vez.
4. Selecciona el repo **`sebasilvanavea/insumossm`** y la rama **`main`**.
5. Netlify auto-detecta el archivo `netlify.toml` con esta configuración:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Plugin: `@netlify/plugin-nextjs`
6. Click **Deploy site**.

El primer build tarda ~2-4 min. Cuando termine, tendrás una URL `*.netlify.app`.

---

## 3. Variables de entorno (en Netlify)

Site settings → Environment variables → Add a variable.

| Variable | Valor | Obligatorio |
|----------|-------|-------------|
| `NEXT_PUBLIC_SITE_URL` | `https://www.insumossm.cl` (o tu URL Netlify provisoria) | ✓ |
| `RESEND_API_KEY` | `re_xxx...` (crea cuenta gratis en https://resend.com) | recomendado |
| `QUOTE_TO_EMAIL` | `cotizaciones@insumossm.cl` | si usas Resend |
| `QUOTE_FROM_EMAIL` | `no-reply@insumossm.cl` (verificado en Resend) | si usas Resend |
| `NEXT_PUBLIC_WHATSAPP_PHONE` | `+56912345678` | opcional |

Después de agregarlas: **Deploys → Trigger deploy → Clear cache and deploy**.

---

## 4. Dominio personalizado (opcional)

Site settings → Domain management → Add custom domain → `insumossm.cl`.

Netlify te dará registros DNS (A o CNAME). Apunta tu dominio según indicaciones.
TLS y HTTPS son automáticos (Let's Encrypt).

---

## 5. Verificación post-deploy

```bash
# 1. Health-check de cabeceras de seguridad
curl -sI https://tu-sitio.netlify.app | grep -iE "strict-transport|x-frame|x-content|csp|referrer"

# 2. Lighthouse desde Chrome DevTools (objetivo ≥ 95 en todas las métricas)

# 3. Test del formulario:
#    - /cotizar
#    - completa los 3 pasos
#    - verifica recepción del email (si configuraste RESEND)
```

---

## 6. CI/CD (ya configurado)

El archivo `.github/workflows/ci.yml` corre en cada push y PR:
- Lint
- Type-check
- Build
- npm audit (vulnerabilidades)

Cada PR genera un **deploy preview** automático en Netlify (URL única).

---

## Troubleshooting

| Problema | Solución |
|----------|----------|
| Build falla por imágenes externas | Añade el dominio a `next.config.mjs` → `images.remotePatterns` |
| `RESEND_API_KEY` no funciona | El email `from` debe estar verificado en Resend (dominio verificado o sandbox) |
| Cabeceras CSP bloquean script | Ajusta `Content-Security-Policy` en `next.config.mjs` |
| Headers no aparecen | Recuerda que algunos headers solo aparecen en HTTPS (no localhost) |

---

## Recursos

- Next.js: https://nextjs.org/docs
- Netlify Next.js Runtime: https://docs.netlify.com/frameworks/next-js/overview/
- Resend: https://resend.com/docs
- Mozilla Observatory (escaneo de seguridad): https://observatory.mozilla.org/
