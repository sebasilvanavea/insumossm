import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { ProductsGrid } from '@/components/sections/products-grid';
import { Stats } from '@/components/sections/stats';
import { CTA } from '@/components/sections/cta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <ProductsGrid limit={6} />
      <Stats />
      <CTA />
    </>
  );
}
