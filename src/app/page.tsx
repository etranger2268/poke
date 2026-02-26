import FAQ from '@/components/home/Faq/Faq';
import FeaturedPoke from '@/components/home/FeaturedPoke/FeaturedPoke';
import HeroSection from '@/components/home/HeroSection/HeroSection';

export default function HomePage() {
  return (
    <div className="my-18 space-y-32">
      <HeroSection />
      <FeaturedPoke />
      <FAQ />
    </div>
  );
}
