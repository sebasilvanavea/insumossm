import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center">
      <div className="container-page max-w-2xl text-center">
        <p className="text-9xl font-extrabold gradient-text">404</p>
        <h1 className="mt-4 text-3xl font-extrabold text-ink">Página no encontrada</h1>
        <p className="mt-3 text-ink-muted">La URL que buscas no existe o fue movida.</p>
        <Link href="/" className="btn-primary btn-md mt-8">Volver al inicio</Link>
      </div>
    </section>
  );
}
