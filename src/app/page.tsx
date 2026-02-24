import FAQ from '@/components/home/Faq/Faq';
import HeroSection from '@/components/home/HeroSection/HeroSection';
import PokeGrid from '@/components/home/PokeGrid/PokeGrid';

export default function HomePage() {
  return (
    <div className="my-18 space-y-32">
      <HeroSection />
      <PokeGrid />
      <FAQ />
    </div>
  );
}
